import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Check, Copy, Eye, EyeOff, History, KeyRound, Loader2, Mic, Paperclip, Plus, Send, Square, Volume2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { chooseAgentModel, getAgentChat, listAgentChats, listAgentProviders, saveAgentKey, saveVoiceKey } from "@/lib/portal/mts-agent";
import { getBearerToken } from "@/lib/auth/client";

type Provider = {
  id: "anthropic" | "openai" | "gemini" | "openrouter" | "opencode" | "opencodego" | "zai" | "groq" | "cerebras" | "ollama" | "elevenlabs";
  label: string;
  connected: boolean;
  hint: string;
  apiKey: string;
  editable: boolean;
  model: string;
  models: string[];
  free: string[];
  names: Record<string, string>;
  error: string;
};

type VoiceProvider = "gemini" | "elevenlabs" | "ergo";
type VoiceChoice = { id: string; name: string };
type VoiceGroup = { id: VoiceProvider; label: string; voices: VoiceChoice[] };

const FALLBACK_GROUPS: VoiceGroup[] = [
  { id: "gemini", label: "Gemini", voices: ["Fola", "Zephyr", "Puck", "Charon", "Kore", "Fenrir", "Leda", "Orus", "Aoede", "Callirrhoe", "Autonoe", "Enceladus", "Iapetus", "Umbriel", "Algieba", "Despina", "Erinome", "Algenib", "Rasalgethi", "Laomedeia", "Achernar", "Alnilam", "Schedar", "Gacrux", "Pulcherrima", "Achird", "Sulafat", "Vindemiatrix", "Sadachbia", "Sadaltager", "Zubenelgenubi"].map((name) => ({ id: name, name })) },
  { id: "elevenlabs", label: "ElevenLabs", voices: [{ id: "cgSgspJ2msm6clMCkdW9", name: "Jessica - Playful, Bright, Warm" }] },
  { id: "ergo", label: "Ergo", voices: [
    ["Savannah", "default_de4d191ca7574982"], ["Imogen", "default_b78b28baf5c31a1d"], ["Willow", "default_940eaff39a929da0"], ["Morgana", "default_40a3ba1017bfb68a"], ["Sakura", "default_c5e098c322aae901"], ["Wyatt", "default_34370fd91e3484ef"], ["Cillian", "default_2c5123a959875341"], ["Jett", "default_c95cf57259ed7313"], ["Rupert", "default_3765f0d1140c05c0"], ["Thaddeus", "default_3c00e421e684f949"],
  ].map(([name, id]) => ({ id, name })) },
];

function voiceProviders(value: string): VoiceProvider | null {
  return value === "gemini" || value === "elevenlabs" || value === "ergo" ? value : null;
}

type ChatTurn = { role: "user" | "assistant"; content: string; logs?: string[] };
type LocalFile = { name: string; type: string; data: string; preview: string };

type Heard = { results: ArrayLike<ArrayLike<{ transcript: string }>> };
type Ear = {
  lang: string;
  interimResults: boolean;
  onresult: ((event: Heard) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

export function MtsAgentPage() {
  const client = useQueryClient();
  const providers = useQuery({ queryKey: ["mts-agent-keys"], queryFn: () => listAgentProviders() });
  const chats = useQuery({ queryKey: ["mts-agent-chats"], queryFn: () => listAgentChats() });
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [files, setFiles] = useState<LocalFile[]>([]);
  const [turns, setTurns] = useState<ChatTurn[]>([]);
  const [listening, setListening] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [choice, setChoice] = useState("");
  const [showLogs, setShowLogs] = useState(true);
  const [voice, setVoice] = useState<VoiceProvider>("gemini");
  const [speaker, setSpeaker] = useState("Fola");
  const [historyOpen, setHistoryOpen] = useState(false);
  const [chatId, setChatId] = useState<number | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const recognition = useRef<Ear | null>(null);

  const list = (providers.data?.providers ?? []) as Provider[];
  const ready = list.filter((item) => item.connected && item.models.length);
  const selected = ready.find((item) => `${item.id}:${item.model || item.models[0]}` === choice) || ready[0];

  useEffect(() => {
    if (choice) return;
    const saved = providers.data?.selected;
    if (saved) {
      setChoice(saved);
      return;
    }
    const first = (providers.data?.providers ?? []).find((item) => item.connected && item.models[0]);
    if (first) setChoice(`${first.id}:${first.model || first.models[0]}`);
  }, [choice, providers.data]);

  useEffect(() => {
    const saved = window.localStorage.getItem("mts-tts");
    const next = voiceProviders(saved || "") || "elevenlabs";
    setVoice(next);
    setSpeaker(window.localStorage.getItem(`mts-tts-voice-${next}`) || (next === "elevenlabs" ? "cgSgspJ2msm6clMCkdW9" : next === "ergo" ? "default_de4d191ca7574982" : "Fola"));
  }, []);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [turns]);

  const ask = useMutation({
    mutationFn: async (next: ChatTurn[]) => {
      if (!selected) throw new Error("Add an API key and choose a model.");
      const [provider, model] = splitChoice(choice);
      const token = getBearerToken();
      setTurns((current) => [...current, { role: "assistant", content: "", logs: [] }]);
      const response = await fetch("/api/agent/stream", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ provider, model, chatId, messages: next, files: files.map(({ name, type, data }) => ({ name, type, data })) }),
      });
      if (!response.ok || !response.body) {
        const failed = await response.json().catch(() => ({})) as { error?: string };
        throw new Error(failed.error || "The agent could not reply.");
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let logs: string[] = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const chunks = buffer.split("\n\n");
        buffer = chunks.pop() || "";
        for (const chunk of chunks) {
          const line = chunk.split("\n").find((item) => item.startsWith("data:"));
          if (!line) continue;
          const event = JSON.parse(line.slice(5).trim()) as { type?: string; text?: string; logs?: string[]; chatId?: number };
          if (event.type === "delta" && event.text) {
            const text = event.text;
            setTurns((current) => current.map((turn, index) => index === current.length - 1 && turn.role === "assistant" ? { ...turn, content: turn.content + text } : turn));
          } else if (event.type === "log" && event.text) {
            logs = [...logs, event.text];
          } else if (event.type === "done") {
            logs = event.logs || logs;
            if (event.chatId) setChatId(event.chatId);
          } else if (event.type === "error") {
            throw new Error(event.text || "The agent could not reply.");
          }
        }
      }
      setTurns((current) => current.map((turn, index) => index === current.length - 1 && turn.role === "assistant" ? { ...turn, logs } : turn));
    },
    onSuccess: () => {
      setFiles([]);
      setError("");
      void client.invalidateQueries({ queryKey: ["mts-agent-chats"] });
    },
    onError: (cause) => setError(cause instanceof Error ? cause.message : "The agent could not reply."),
    onSettled: () => setPending(false),
  });

  async function openChat(id: number) {
    const chat = await getAgentChat({ data: id });
    setChatId(chat.id);
    setTurns(chat.messages);
    setHistoryOpen(false);
    setError("");
  }

  function startChat() {
    setChatId(null);
    setTurns([]);
    setHistoryOpen(false);
    setError("");
  }

  function submit() {
    const content = draft.trim();
    if (!content || pending) return;
    const next = [...turns, { role: "user" as const, content }];
    setTurns(next);
    setDraft("");
    setError("");
    setPending(true);
    ask.mutate(next);
  }

  function toggleMic() {
    const Speech = (window as unknown as { SpeechRecognition?: new () => Ear; webkitSpeechRecognition?: new () => Ear }).SpeechRecognition
      || (window as unknown as { webkitSpeechRecognition?: new () => Ear }).webkitSpeechRecognition;
    if (!Speech) {
      setError("This browser cannot record speech.");
      return;
    }
    if (listening) {
      recognition.current?.stop();
      setListening(false);
      return;
    }
    const ear = new Speech();
    ear.lang = "en-US";
    ear.interimResults = false;
    ear.onresult = (event) => {
      const said = event.results[0]?.[0]?.transcript ?? "";
      if (said) setDraft((value) => (value ? `${value} ${said}` : said));
    };
    ear.onerror = () => setError("The microphone could not hear that.");
    ear.onend = () => setListening(false);
    recognition.current = ear;
    setListening(true);
    ear.start();
  }

  async function attach(list: FileList | null) {
    const chosen = Array.from(list ?? []).slice(0, 4);
    const next: LocalFile[] = [];
    for (const file of chosen) {
      if (file.size > 1_200_000) {
        setError(`${file.name} is too large.`);
        continue;
      }
      const data = await readFile(file);
      next.push({ name: file.name, type: file.type, data, preview: file.type.startsWith("image/") ? `data:${file.type};base64,${data}` : "" });
    }
    setFiles((current) => [...current, ...next].slice(0, 4));
    if (fileRef.current) fileRef.current.value = "";
  }

  return (
    <div className="grid h-[calc(100dvh-4rem-4.75rem)] min-h-0 w-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden bg-white md:h-full">
      <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 md:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <img src="/mts-agent.gif" alt="" className="size-8 shrink-0 rounded-full object-cover" />
          <h1 className="truncate text-base font-semibold">MTS Agent</h1>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" className="grid size-10 place-items-center rounded-xl hover:bg-surface-2" aria-label="New chat" onClick={startChat}>
            <Plus className="size-5" />
          </button>
          <button type="button" className="grid size-10 place-items-center rounded-xl hover:bg-surface-2" aria-pressed={historyOpen} aria-label="Chat history" onClick={() => setHistoryOpen((value) => !value)}>
            <History className="size-5" />
          </button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl hover:bg-surface-2"
            aria-pressed={showLogs}
            aria-label={showLogs ? "Hide thinking" : "Show thinking"}
            onClick={() => setShowLogs((value) => !value)}
          >
            {showLogs ? <Eye className="size-5" /> : <EyeOff className="size-5" />}
          </button>
          <button type="button" className="grid size-10 place-items-center rounded-xl hover:bg-surface-2" aria-label="API keys" onClick={() => setOpen(true)}>
            <KeyRound className="size-5" />
          </button>
        </div>
      </header>
      <div className="relative min-h-0">
      {historyOpen ? (
        <div className="absolute inset-x-0 top-0 z-10 grid max-h-72 content-start gap-1 overflow-y-auto border-b border-line bg-surface-2 px-3 py-3 shadow-sm">
          <button type="button" className="rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-white" onClick={startChat}>New chat</button>
          {(chats.data?.chats ?? []).map((chat) => (
            <button key={chat.id} type="button" className={chat.id === chatId ? "rounded-xl bg-white px-3 py-2 text-left text-sm font-medium" : "rounded-xl px-3 py-2 text-left text-sm hover:bg-white"} onClick={() => void openChat(chat.id)}>
              <span className="line-clamp-1">{chat.title}</span>
            </button>
          ))}
          {!chats.data?.chats.length ? <p className="px-3 py-2 text-sm text-muted">No saved chats yet.</p> : null}
        </div>
      ) : null}
      <div ref={scroller} className="h-full overflow-y-auto px-4 py-6">
        {turns.length === 0 ? (
          <div className="mx-auto grid w-full max-w-none justify-items-center gap-3 px-2 pt-16 text-center">
            <img src="/mts-agent.gif" alt="" className="size-16 rounded-full object-cover" />
            <p className="text-2xl font-semibold tracking-tight">How can I help with the desk?</p>
            <p className="text-sm text-muted">Ask about tickets, orders, the catalog, billing, or the customer portal. Answers stay inside Manage Tech Service.</p>
          </div>
        ) : (
          <div className="grid w-full gap-6 px-2 md:px-6">
            {turns.map((turn, index) => (
              <article key={`${turn.role}-${index}`} className={turn.role === "user" ? "ml-auto max-w-[80%] rounded-3xl bg-ink px-4 py-3 text-sm text-white" : "grid max-w-[90%] gap-2 text-sm leading-6"}>
                {turn.role === "assistant" && showLogs && turn.logs?.length ? (
                  <details open className="rounded-2xl bg-surface-2 px-3 py-2 text-xs text-muted">
                    <summary className="cursor-pointer font-medium text-ink">Thinking</summary>
                    <ol className="mt-2 grid list-decimal gap-1 pl-4">
                      {turn.logs.map((line, logIndex) => <li key={logIndex} className="whitespace-pre-wrap">{line}</li>)}
                    </ol>
                  </details>
                ) : null}
                <p className="whitespace-pre-wrap">{turn.content}</p>
                {turn.content ? <MessageTools text={turn.content} light={turn.role === "user"} voice={voice} speaker={speaker} /> : null}
              </article>
            ))}
            {pending && turns.at(-1)?.role === "assistant" && !turns.at(-1)?.content ? <p className="flex items-center gap-2 text-sm text-muted"><Loader2 className="size-4 animate-spin" /> Thinking</p> : null}
          </div>
        )}
      </div>
      </div>
      <form
      className="w-full border-t border-line px-3 py-3 md:px-6"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        {files.length ? (
          <div className="mb-2 flex w-full flex-wrap gap-2">
            {files.map((file) => (
              <span key={file.name} className="flex items-center gap-2 rounded-xl border border-line bg-surface-2 px-2 py-1 text-xs">
                {file.preview ? <img src={file.preview} alt="" loading="lazy" className="size-8 rounded-md object-cover" /> : null}
                <span className="max-w-32 truncate">{file.name}</span>
                <button type="button" aria-label={`Remove ${file.name}`} onClick={() => setFiles((current) => current.filter((item) => item !== file))}><X className="size-3" /></button>
              </span>
            ))}
          </div>
        ) : null}
        {error ? <p className="mb-2 w-full text-sm text-bad">{error}</p> : null}
        <div className="flex w-full items-end gap-1 rounded-3xl border border-line bg-white px-2 py-2 shadow-sm">
          <button type="button" className="grid size-10 shrink-0 place-items-center rounded-full hover:bg-surface-2" aria-label="Attach files" onClick={() => fileRef.current?.click()}>
            <Paperclip className="size-5" />
          </button>
          <input ref={fileRef} type="file" accept="image/*,.txt,.md,.csv,.json,.pdf" multiple className="hidden" onChange={(event) => void attach(event.target.files)} />
          <textarea
            value={draft}
            rows={1}
            placeholder="Message MTS Agent"
            className="max-h-36 min-h-10 flex-1 resize-none bg-transparent px-1 py-2 text-sm outline-none"
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                submit();
              }
            }}
          />
          <button type="button" className={listening ? "grid size-10 shrink-0 place-items-center rounded-full bg-bad-soft text-bad" : "grid size-10 shrink-0 place-items-center rounded-full hover:bg-surface-2"} aria-label={listening ? "Stop recording" : "Record prompt"} onClick={toggleMic}>
            {listening ? <Square className="size-4" /> : <Mic className="size-5" />}
          </button>
          <button type="submit" disabled={pending || !draft.trim()} className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-white disabled:opacity-40" aria-label="Send">
            <Send className="size-4" />
          </button>
        </div>
      </form>
      {open ? <KeyModal providers={list} pending={providers.isPending} active={choice} voice={voice} speaker={speaker} onVoice={setVoice} onSpeaker={setSpeaker} onClose={() => setOpen(false)} onSaved={() => void client.invalidateQueries({ queryKey: ["mts-agent-keys"] })} onSet={setChoice} /> : null}
    </div>
  );
}

function MessageTools({ text, light, voice, speaker }: { text: string; light: boolean; voice: VoiceProvider; speaker: string }) {
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [problem, setProblem] = useState("");
  const tone = light ? "text-white/75 hover:text-white" : "text-muted hover:text-ink";

  useEffect(() => {
    const stop = () => setPlaying(false);
    window.addEventListener("mts-speak-stop", stop);
    return () => window.removeEventListener("mts-speak-stop", stop);
  }, []);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  async function speak() {
    const ctx = voiceContext();
    if (playing) {
      window.dispatchEvent(new Event("mts-speak-stop"));
      stopVoice();
      return;
    }
    setBusy(true);
    setProblem("");
    try {
      let bytes: Uint8Array;
      try {
        bytes = voice === "ergo" ? await ergoSpeak(text, setProblem, speaker) : await remoteSpeak(text, voice, speaker);
      } catch (cause) {
        const message = cause instanceof Error ? cause.message : "";
        if (voice !== "ergo" || !/webgpu|adapter/i.test(message)) throw cause;
        setProblem("This browser has no WebGPU adapter, so Ergo used the Gemini voice.");
        bytes = await remoteSpeak(text, "gemini", "Fola");
      }
      const buffer = await ctx.decodeAudioData(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer);
      stopVoice();
      window.dispatchEvent(new Event("mts-speak-stop"));
      const node = ctx.createBufferSource();
      node.buffer = buffer;
      node.connect(ctx.destination);
      node.onended = () => window.dispatchEvent(new Event("mts-speak-stop"));
      voiceSource = node;
      node.start();
      setPlaying(true);
    } catch (cause) {
      setPlaying(false);
      setProblem(cause instanceof Error ? cause.message : "The voice could not read that.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={light ? "mt-2 grid justify-items-end gap-1" : "grid gap-1"}>
      <div className="flex items-center gap-1">
        <button type="button" className={`grid size-7 place-items-center rounded-full ${tone}`} aria-label={copied ? "Copied" : "Copy"} onClick={() => void copy()}>
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </button>
        <button type="button" className={`grid size-7 place-items-center rounded-full ${tone}`} aria-label={playing ? "Stop reading" : "Read aloud"} onClick={() => void speak()}>
          {busy ? <Loader2 className="size-3.5 animate-spin" /> : playing ? <Square className="size-3" /> : <Volume2 className="size-3.5" />}
        </button>
      </div>
      {problem ? <p className={light ? "text-[11px] text-white/80" : "text-[11px] text-bad"}>{problem}</p> : null}
    </div>
  );
}

let voiceContextNode: AudioContext | null = null;
let voiceSource: AudioBufferSourceNode | null = null;

function voiceContext() {
  if (!voiceContextNode) voiceContextNode = new AudioContext();
  void voiceContextNode.resume();
  return voiceContextNode;
}

function stopVoice() {
  const current = voiceSource;
  voiceSource = null;
  if (!current) return;
  current.onended = null;
  try {
    current.stop();
  } catch {
    /* already stopped */
  }
}

async function remoteSpeak(text: string, voice: VoiceProvider, speaker: string) {
  const token = getBearerToken();
  const response = await fetch("/api/agent/speak", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: JSON.stringify({ text, provider: voice, voice: speaker }),
  });
  const payload = await response.json().catch(() => ({})) as { audio?: string; error?: string };
  if (!response.ok || !payload.audio) throw new Error(payload.error || "The voice could not read that.");
  const binary = atob(payload.audio);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

let ergoId = 0;
let ergoFrame: HTMLIFrameElement | null = null;

function ergoWindow() {
  if (!ergoFrame) {
    ergoFrame = document.createElement("iframe");
    ergoFrame.hidden = true;
    ergoFrame.setAttribute("aria-hidden", "true");
    ergoFrame.setAttribute("allow", "gpu");
    ergoFrame.addEventListener("load", () => {
      if (ergoFrame) ergoFrame.dataset.ready = "1";
    });
    ergoFrame.src = "/ergo/frame.html";
    document.body.appendChild(ergoFrame);
  }
  return ergoFrame;
}

function ergoSpeak(text: string, onProgress: (message: string) => void, speaker: string) {
  const frame = ergoWindow();
  const id = ++ergoId;
  onProgress("Loading the Ergo voice. The first visit downloads the model.");
  return new Promise<Uint8Array>((resolve, reject) => {
    let settled = false;
    const timer = window.setTimeout(() => done(new Error("Ergo took too long. WebGPU is required, and the first download is large.")), 180000);
    const done = (result: Uint8Array | Error) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      window.removeEventListener("message", onMessage);
      if (result instanceof Error) reject(result);
      else resolve(result);
    };
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || !event.data) return;
      if (event.data.type === "ergo-progress") {
        const total = Number(event.data.total) || 0;
        const loaded = Number(event.data.loaded) || 0;
        const pct = total ? Math.round((loaded / total) * 100) : 0;
        const models = Array.isArray(event.data.models) ? event.data.models.join(", ") : "voice model";
        onProgress(`Loading ${models} ${pct}%`);
        return;
      }
      if (event.data.id !== id) return;
      if (event.data.type === "ergo-error") done(new Error(event.data.error || "Ergo could not read that."));
      else if (event.data.type === "ergo-audio" && event.data.audio) done(new Uint8Array(event.data.audio));
    };
    window.addEventListener("message", onMessage);
    const send = () => frame.contentWindow?.postMessage({ type: "ergo-speak", id, text, voice: speaker }, window.location.origin);
    if (frame.dataset.ready === "1") send();
    else frame.addEventListener("load", send, { once: true });
  });
}

function KeyModal({ providers, pending, active, voice, speaker, onVoice, onSpeaker, onClose, onSaved, onSet }: { providers: Provider[]; pending: boolean; active: string; voice: VoiceProvider; speaker: string; onVoice: (value: VoiceProvider) => void; onSpeaker: (value: string) => void; onClose: () => void; onSaved: () => void; onSet: (value: string) => void }) {
  const [keys, setKeys] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");
  const [pick, setPick] = useState(active);
  const [catalog, setCatalog] = useState<VoiceGroup[]>(FALLBACK_GROUPS);
  const seeded = useRef(false);
  useEffect(() => {
    if (active) setPick(active);
  }, [active]);
  useEffect(() => {
    const token = getBearerToken();
    let stop = false;
    void fetch("/api/agent/speak", {
      credentials: "same-origin",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
      .then((response) => response.ok ? response.json() : null)
      .then((payload: { groups?: VoiceGroup[] } | null) => {
        if (stop || !payload?.groups?.length) return;
        setCatalog(payload.groups.filter((group) => voiceProviders(group.id)));
      })
      .catch(() => undefined);
    return () => { stop = true; };
  }, []);
  useEffect(() => {
    if (seeded.current || !providers.some((item) => item.apiKey)) return;
    const next: Record<string, string> = {};
    for (const item of providers) if (item.apiKey) next[item.id] = item.apiKey;
    setKeys(next);
    seeded.current = true;
  }, [providers]);
  const save = useMutation({
    mutationFn: async (provider: Provider["id"]) => {
      if (provider === "elevenlabs") return saveVoiceKey({ data: { apiKey: keys[provider] || "" } });
      return saveAgentKey({ data: { provider, apiKey: keys[provider] || "" } });
    },
    onSuccess: (result) => {
      setNotice(result.provider === "elevenlabs" ? "ElevenLabs voice key updated." : `${labelOf(result.provider)} updated. ${result.models.length} models are available.`);
      onSaved();
    },
    onError: (cause) => setNotice(cause instanceof Error ? cause.message : "The key was refused."),
  });
  const choose = useMutation({
    mutationFn: (input: { provider: Provider["id"]; model: string }) => chooseAgentModel({ data: input }),
    onSuccess: () => {
      onSet(pick);
      setNotice("Model set.");
      onSaved();
    },
    onError: (cause) => setNotice(cause instanceof Error ? cause.message : "That model could not be set."),
  });
  const options = providers.filter((item) => item.id !== "elevenlabs").flatMap((item) => item.models.map((model) => ({ id: item.id, label: item.label, model })));
  const freeOptions = providers.filter((item) => item.id !== "elevenlabs").flatMap((item) => (item.free || []).map((model) => ({ id: item.id, label: item.label, model, text: item.names?.[model] || model })));
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/25 p-3 backdrop-blur-sm sm:items-center">
      <div role="dialog" aria-labelledby="agent-keys-title" className="flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/70 bg-[#f6fafa] shadow-[0_24px_60px_rgba(0,57,112,0.16)]">
        <div className="flex shrink-0 items-center justify-between gap-3 px-5 py-4">
          <div className="min-w-0">
            <h2 id="agent-keys-title" className="text-lg font-semibold tracking-tight text-ink">Provider keys</h2>
            <p className="mt-1 text-sm text-muted">Replace a key whenever it changes. The field keeps the current key so you can edit it.</p>
          </div>
          <button type="button" aria-label="Close" onClick={onClose} className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-ink hover:bg-surface-2"><X className="size-4" /></button>
        </div>
        <div className="grid min-h-0 flex-1 content-start gap-3 overflow-y-auto px-4 pb-4 sm:grid-cols-2 sm:gap-4 sm:px-5">
          {pending ? <p className="text-sm text-muted sm:col-span-2">Checking saved keys…</p> : null}
          {PROVIDER_CARDS.map((card) => {
            const item = providers.find((provider) => provider.id === card.id) || card;
            return (
              <ProviderCard
                key={item.id}
                item={item}
                value={keys[item.id] || ""}
                pending={save.isPending}
                onChange={(value) => setKeys((current) => ({ ...current, [item.id]: value }))}
                onSave={() => save.mutate(item.id)}
              />
            );
          })}
        </div>
        <div className="flex shrink-0 flex-col gap-3 border-t border-line/80 bg-white/80 px-5 py-4">
          <p className="text-xs leading-5 text-muted">The agent uses the signed-in staff role. Admins can work the whole desk. Staff can update tickets and orders. View-only accounts can read.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
            <label className="grid min-w-0 flex-1 gap-1.5 text-xs font-medium text-muted">
              Model
              <select id="agent-model" value={options.some((item) => `${item.id}:${item.model}` === pick) ? pick : ""} onChange={(event) => setPick(event.target.value)} className="h-11 w-full rounded-xl border border-line bg-white px-3 text-sm font-normal text-ink outline-none">
                {freeOptions.length ? (
                  <optgroup label="Free">
                    {freeOptions.map((item) => <option key={`free:${item.id}:${item.model}`} value={`${item.id}:${item.model}`}>{item.text}</option>)}
                  </optgroup>
                ) : null}
                {options.length ? providers.filter((item) => item.id !== "elevenlabs" && item.models.some((model) => !(item.free || []).includes(model))).map((item) => (
                  <optgroup key={item.id} label={item.label}>
                    {item.models.filter((model) => !(item.free || []).includes(model)).map((model) => <option key={`${item.id}:${model}`} value={`${item.id}:${model}`}>{item.names?.[model] || model}</option>)}
                  </optgroup>
                )) : <option value="">Add a key to load models</option>}
              </select>
            </label>
            <label className="grid min-w-0 flex-1 gap-1.5 text-xs font-medium text-muted sm:max-w-xs">
              Voice
              <select
                id="tts-voice"
                value={catalog.some((group) => group.voices.some((item) => item.id === speaker) && group.id === voice) ? `${voice}:${speaker}` : `${voice}:${catalog.find((group) => group.id === voice)?.voices[0]?.id || speaker}`}
                aria-label="Read-aloud voice"
                className="h-11 w-full rounded-xl border border-line bg-white px-3 text-sm font-normal text-ink outline-none"
                onChange={(event) => {
                  const value = event.target.value;
                  const split = value.indexOf(":");
                  const next = voiceProviders(value.slice(0, split));
                  const id = value.slice(split + 1);
                  if (!next || !id) return;
                  onVoice(next);
                  onSpeaker(id);
                  window.localStorage.setItem("mts-tts", next);
                  window.localStorage.setItem(`mts-tts-voice-${next}`, id);
                }}
              >
                {catalog.map((group) => (
                  <optgroup key={group.id} label={group.label}>
                    {group.voices.map((item) => <option key={`${group.id}:${item.id}`} value={`${group.id}:${item.id}`}>{item.name}</option>)}
                  </optgroup>
                ))}
              </select>
            </label>
            <button
              type="button"
              disabled={choose.isPending || !pick}
              onClick={() => {
                const [provider, model] = splitChoice(pick);
                if (provider && model) choose.mutate({ provider: provider as Provider["id"], model });
              }}
              className="h-11 shrink-0 rounded-xl bg-ink px-5 text-sm font-semibold text-white disabled:opacity-40"
            >
              Set Model
            </button>
          </div>
          {notice ? <p className="text-sm text-muted">{notice}</p> : null}
          <p className="text-xs leading-5 text-muted">Ergo reads aloud in this browser. No API key. The first use downloads the voice model.</p>
        </div>
      </div>
    </div>
  );
}

const PROVIDER_CARDS: Provider[] = [
  { id: "anthropic", label: "Anthropic", connected: false, hint: "", apiKey: "", editable: true, model: "", models: [], free: [], names: {}, error: "" },
  { id: "openai", label: "OpenAI", connected: false, hint: "", apiKey: "", editable: true, model: "", models: [], free: [], names: {}, error: "" },
  { id: "gemini", label: "Gemini", connected: false, hint: "", apiKey: "", editable: true, model: "", models: [], free: [], names: {}, error: "" },
  { id: "openrouter", label: "OpenRouter", connected: false, hint: "", apiKey: "", editable: true, model: "", models: [], free: [], names: {}, error: "" },
  { id: "opencode", label: "OpenCode Zen", connected: false, hint: "", apiKey: "", editable: true, model: "", models: [], free: [], names: {}, error: "" },
  { id: "opencodego", label: "OpenCode Go", connected: false, hint: "", apiKey: "", editable: true, model: "", models: [], free: [], names: {}, error: "" },
  { id: "zai", label: "Z.AI", connected: false, hint: "", apiKey: "", editable: true, model: "", models: [], free: [], names: {}, error: "" },
  { id: "groq", label: "Groq", connected: false, hint: "", apiKey: "", editable: true, model: "", models: [], free: [], names: {}, error: "" },
  { id: "cerebras", label: "Cerebras", connected: false, hint: "", apiKey: "", editable: true, model: "", models: [], free: [], names: {}, error: "" },
  { id: "ollama", label: "Ollama Cloud", connected: false, hint: "", apiKey: "", editable: true, model: "", models: [], free: [], names: {}, error: "" },
  { id: "elevenlabs", label: "ElevenLabs", connected: false, hint: "", apiKey: "", editable: true, model: "", models: [], free: [], names: {}, error: "" },
];

function ProviderCard({ item, value, pending, onChange, onSave }: { item: Provider; value: string; pending: boolean; onChange: (value: string) => void; onSave: () => void }) {
  const [shown, setShown] = useState(false);
  const tone = TONE[item.id];
  const count = item.models.length;
  return (
    <section className="mts-provider-card relative grid w-full min-w-0 gap-3 rounded-3xl border border-line bg-white p-4 shadow-[0_12px_32px_rgba(0,57,112,0.06)]">
      <span aria-hidden className={`pointer-events-none absolute -right-8 -top-10 size-28 rounded-full blur-2xl ${tone.wash}`} />
      <div className="relative grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-3">
        <span aria-hidden className={`grid size-11 place-items-center rounded-2xl text-[11px] font-semibold tracking-wide ${tone.mark}`}>{MARK[item.id]}</span>
        <div className="min-w-0">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
            <h3 className="truncate text-sm font-semibold tracking-tight text-ink">{item.label}</h3>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium">
              <span className={item.connected ? "size-1.5 rounded-full bg-[#1f8a4c]" : "size-1.5 rounded-full bg-line-strong"} />
              <span className={item.connected ? "text-good" : "text-muted"}>{item.connected ? "Live" : "Off"}</span>
            </span>
          </div>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted">{PROVIDER_NOTE[item.id]}</p>
          {item.id === "elevenlabs" ? <p className="mt-1.5 text-[11px] font-medium text-subtle">Read-aloud voice</p> : count ? <p className="mt-1.5 text-[11px] font-medium text-subtle">{count} models{item.free?.length ? ` · ${item.free.length} free` : ""}</p> : null}
        </div>
      </div>
      {item.error ? <ProviderNote text={item.error} /> : null}
      <div className="mts-provider-key grid grid-cols-[minmax(0,1fr)_2.25rem_auto] items-center gap-2">
        <input
          type={shown ? "text" : "password"}
          value={value}
          autoComplete="off"
          disabled={!item.editable}
          placeholder={item.editable ? "Paste or edit the API key" : "Only an admin can edit this key"}
          aria-label={`${item.label} API key`}
          className="h-10 w-full min-w-0 rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none disabled:text-muted"
          onChange={(event) => onChange(event.target.value)}
        />
        <button type="button" className="grid size-9 place-items-center rounded-xl border border-line bg-white text-muted" aria-label={shown ? "Hide key" : "Show key"} onClick={() => setShown((current) => !current)}>
          {shown ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
        <button type="button" disabled={pending || !item.editable} onClick={onSave} className="h-10 rounded-xl bg-ink px-4 text-xs font-semibold text-white disabled:opacity-40">
          {item.hint ? "Update" : "Save"}
        </button>
      </div>
    </section>
  );
}

function labelOf(id: string) {
  return PROVIDER_CARDS.find((item) => item.id === id)?.label || id;
}

const TONE: Record<Provider["id"], { mark: string; wash: string }> = {
  anthropic: { mark: "bg-[#f4ece4] text-[#8a5a32]", wash: "bg-[#f0d7c2]" },
  openai: { mark: "bg-[#e8eef6] text-[#1d3d66]", wash: "bg-[#d5e3f5]" },
  gemini: { mark: "bg-[#e7f0ff] text-[#2457b5]", wash: "bg-[#d6e4ff]" },
  openrouter: { mark: "bg-[#e5f6f7] text-[#127e86]", wash: "bg-[#cfecee]" },
  opencode: { mark: "bg-[#eeeaf8] text-[#5b458f]", wash: "bg-[#ddd4f3]" },
  opencodego: { mark: "bg-[#eaf6ee] text-[#1f6b45]", wash: "bg-[#d3eedd]" },
  zai: { mark: "bg-[#eef3f8] text-[#243044]", wash: "bg-[#dde6f0]" },
  groq: { mark: "bg-[#fff1e8] text-[#b85a1a]", wash: "bg-[#ffe0cc]" },
  cerebras: { mark: "bg-[#fdecef] text-[#9a3050]", wash: "bg-[#f8d5de]" },
  ollama: { mark: "bg-[#e8f7f2] text-[#0f6b58]", wash: "bg-[#d2efe6]" },
  elevenlabs: { mark: "bg-[#f3e8ff] text-[#6d28d9]", wash: "bg-[#e4d4fb]" },
};

const MARK: Record<Provider["id"], string> = {
  anthropic: "An",
  openai: "OA",
  gemini: "Ge",
  openrouter: "OR",
  opencode: "OZ",
  opencodego: "OG",
  zai: "Z",
  groq: "Gq",
  cerebras: "Cb",
  ollama: "Ol",
  elevenlabs: "11",
};

const PROVIDER_NOTE: Record<Provider["id"], string> = {
  anthropic: "Images, Anthropic web search, then the desk functions.",
  openai: "Images and the desk functions, including web search.",
  gemini: "Gemini and Gemma models. Images, Google search, then the desk functions.",
  openrouter: "Images and the desk functions through the OpenRouter catalog.",
  opencode: "Free and paid OpenCode Zen models, including images and desk functions.",
  opencodego: "Free and paid OpenCode Go models, including images and desk functions.",
  zai: "Free GLM Flash models, plus the paid catalog. Images and the desk functions.",
  groq: "Free Groq models stay at the top. Images and the desk functions.",
  cerebras: "Public Cerebras models stay in Free. Images and the desk functions.",
  ollama: "Images and the desk functions, including web search.",
  elevenlabs: "Read-aloud voice for chat lines. This key is not used as a chat model.",
};

function ProviderNote({ text }: { text: string }) {
  const link = text.match(/https:\/\/\S+/);
  if (!link) return <p className="text-xs text-bad">{text}</p>;
  const [before, after] = text.split(link[0]);
  return (
    <p className="text-xs text-bad">
      {before}
      <a href={link[0]} target="_blank" rel="noreferrer" className="underline">{link[0]}</a>
      {after}
    </p>
  );
}

function splitChoice(value: string): [string, string] {
  const index = value.indexOf(":");
  if (index < 0) return ["", ""];
  return [value.slice(0, index), value.slice(index + 1)];
}

function readFile(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const value = typeof reader.result === "string" ? reader.result : "";
      resolve(value.replace(/^data:[^,]*,/, ""));
    };
    reader.onerror = () => reject(new Error("Could not read that file."));
    reader.readAsDataURL(file);
  });
}
