import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { B as KeyRound, D as Mic, G as Eye, J as Copy, K as EyeOff, N as LoaderCircle, Q as Check, U as History, h as Send, r as Volume2, t as X, u as Square, v as Plus, x as Paperclip } from "../_libs/lucide-react.mjs";
import { r as getBearerToken } from "./client-C_myEQ0J.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { G as getAgentChat, J as saveAgentKey, K as listAgentChats, W as chooseAgentModel, Y as saveVoiceKey, q as listAgentProviders } from "./router-DkTNWi8Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mts-agent-page-DhJjg5Pg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FALLBACK_GROUPS = [
	{
		id: "gemini",
		label: "Gemini",
		voices: [
			"Fola",
			"Zephyr",
			"Puck",
			"Charon",
			"Kore",
			"Fenrir",
			"Leda",
			"Orus",
			"Aoede",
			"Callirrhoe",
			"Autonoe",
			"Enceladus",
			"Iapetus",
			"Umbriel",
			"Algieba",
			"Despina",
			"Erinome",
			"Algenib",
			"Rasalgethi",
			"Laomedeia",
			"Achernar",
			"Alnilam",
			"Schedar",
			"Gacrux",
			"Pulcherrima",
			"Achird",
			"Sulafat",
			"Vindemiatrix",
			"Sadachbia",
			"Sadaltager",
			"Zubenelgenubi"
		].map((name) => ({
			id: name,
			name
		}))
	},
	{
		id: "elevenlabs",
		label: "ElevenLabs",
		voices: [{
			id: "cgSgspJ2msm6clMCkdW9",
			name: "Jessica - Playful, Bright, Warm"
		}]
	},
	{
		id: "ergo",
		label: "Ergo",
		voices: [
			["Savannah", "default_de4d191ca7574982"],
			["Imogen", "default_b78b28baf5c31a1d"],
			["Willow", "default_940eaff39a929da0"],
			["Morgana", "default_40a3ba1017bfb68a"],
			["Sakura", "default_c5e098c322aae901"],
			["Wyatt", "default_34370fd91e3484ef"],
			["Cillian", "default_2c5123a959875341"],
			["Jett", "default_c95cf57259ed7313"],
			["Rupert", "default_3765f0d1140c05c0"],
			["Thaddeus", "default_3c00e421e684f949"]
		].map(([name, id]) => ({
			id,
			name
		}))
	}
];
function voiceProviders(value) {
	return value === "gemini" || value === "elevenlabs" || value === "ergo" ? value : null;
}
function MtsAgentPage() {
	const client = useQueryClient();
	const providers = useQuery({
		queryKey: ["mts-agent-keys"],
		queryFn: () => listAgentProviders()
	});
	const chats = useQuery({
		queryKey: ["mts-agent-chats"],
		queryFn: () => listAgentChats()
	});
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [files, setFiles] = (0, import_react.useState)([]);
	const [turns, setTurns] = (0, import_react.useState)([]);
	const [listening, setListening] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const [choice, setChoice] = (0, import_react.useState)("");
	const [showLogs, setShowLogs] = (0, import_react.useState)(true);
	const [voice, setVoice] = (0, import_react.useState)("gemini");
	const [speaker, setSpeaker] = (0, import_react.useState)("Fola");
	const [historyOpen, setHistoryOpen] = (0, import_react.useState)(false);
	const [chatId, setChatId] = (0, import_react.useState)(null);
	const scroller = (0, import_react.useRef)(null);
	const fileRef = (0, import_react.useRef)(null);
	const recognition = (0, import_react.useRef)(null);
	const list = providers.data?.providers ?? [];
	const ready = list.filter((item) => item.connected && item.models.length);
	const selected = ready.find((item) => `${item.id}:${item.model || item.models[0]}` === choice) || ready[0];
	(0, import_react.useEffect)(() => {
		if (choice) return;
		const saved = providers.data?.selected;
		if (saved) {
			setChoice(saved);
			return;
		}
		const first = (providers.data?.providers ?? []).find((item) => item.connected && item.models[0]);
		if (first) setChoice(`${first.id}:${first.model || first.models[0]}`);
	}, [choice, providers.data]);
	(0, import_react.useEffect)(() => {
		const next = voiceProviders(window.localStorage.getItem("mts-tts") || "") || "elevenlabs";
		setVoice(next);
		setSpeaker(window.localStorage.getItem(`mts-tts-voice-${next}`) || (next === "elevenlabs" ? "cgSgspJ2msm6clMCkdW9" : next === "ergo" ? "default_de4d191ca7574982" : "Fola"));
	}, []);
	(0, import_react.useEffect)(() => {
		scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
	}, [turns]);
	const ask = useMutation({
		mutationFn: async (next) => {
			if (!selected) throw new Error("Add an API key and choose a model.");
			const [provider, model] = splitChoice(choice);
			const token = getBearerToken();
			setTurns((current) => [...current, {
				role: "assistant",
				content: "",
				logs: []
			}]);
			const response = await fetch("/api/agent/stream", {
				method: "POST",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json",
					...token ? { Authorization: `Bearer ${token}` } : {}
				},
				body: JSON.stringify({
					provider,
					model,
					chatId,
					messages: next,
					files: files.map(({ name, type, data }) => ({
						name,
						type,
						data
					}))
				})
			});
			if (!response.ok || !response.body) {
				const failed = await response.json().catch(() => ({}));
				throw new Error(failed.error || "The agent could not reply.");
			}
			const reader = response.body.getReader();
			const decoder = new TextDecoder();
			let buffer = "";
			let logs = [];
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				buffer += decoder.decode(value, { stream: true });
				const chunks = buffer.split("\n\n");
				buffer = chunks.pop() || "";
				for (const chunk of chunks) {
					const line = chunk.split("\n").find((item) => item.startsWith("data:"));
					if (!line) continue;
					const event = JSON.parse(line.slice(5).trim());
					if (event.type === "delta" && event.text) {
						const text = event.text;
						setTurns((current) => current.map((turn, index) => index === current.length - 1 && turn.role === "assistant" ? {
							...turn,
							content: turn.content + text
						} : turn));
					} else if (event.type === "log" && event.text) logs = [...logs, event.text];
					else if (event.type === "done") {
						logs = event.logs || logs;
						if (event.chatId) setChatId(event.chatId);
					} else if (event.type === "error") throw new Error(event.text || "The agent could not reply.");
				}
			}
			setTurns((current) => current.map((turn, index) => index === current.length - 1 && turn.role === "assistant" ? {
				...turn,
				logs
			} : turn));
		},
		onSuccess: () => {
			setFiles([]);
			setError("");
			client.invalidateQueries({ queryKey: ["mts-agent-chats"] });
		},
		onError: (cause) => setError(cause instanceof Error ? cause.message : "The agent could not reply."),
		onSettled: () => setPending(false)
	});
	async function openChat(id) {
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
		const next = [...turns, {
			role: "user",
			content
		}];
		setTurns(next);
		setDraft("");
		setError("");
		setPending(true);
		ask.mutate(next);
	}
	function toggleMic() {
		const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
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
			if (said) setDraft((value) => value ? `${value} ${said}` : said);
		};
		ear.onerror = () => setError("The microphone could not hear that.");
		ear.onend = () => setListening(false);
		recognition.current = ear;
		setListening(true);
		ear.start();
	}
	async function attach(list) {
		const chosen = Array.from(list ?? []).slice(0, 4);
		const next = [];
		for (const file of chosen) {
			if (file.size > 12e5) {
				setError(`${file.name} is too large.`);
				continue;
			}
			const data = await readFile(file);
			next.push({
				name: file.name,
				type: file.type,
				data,
				preview: file.type.startsWith("image/") ? `data:${file.type};base64,${data}` : ""
			});
		}
		setFiles((current) => [...current, ...next].slice(0, 4));
		if (fileRef.current) fileRef.current.value = "";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-[calc(100dvh-4rem-4.75rem)] min-h-0 w-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden bg-white md:h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3 border-b border-line px-4 py-3 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/mts-agent.gif",
						alt: "",
						className: "size-8 shrink-0 rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "truncate text-base font-semibold",
						children: "MTS Agent"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 place-items-center rounded-xl hover:bg-surface-2",
							"aria-label": "New chat",
							onClick: startChat,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 place-items-center rounded-xl hover:bg-surface-2",
							"aria-pressed": historyOpen,
							"aria-label": "Chat history",
							onClick: () => setHistoryOpen((value) => !value),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 place-items-center rounded-xl hover:bg-surface-2",
							"aria-pressed": showLogs,
							"aria-label": showLogs ? "Hide thinking" : "Show thinking",
							onClick: () => setShowLogs((value) => !value),
							children: showLogs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 place-items-center rounded-xl hover:bg-surface-2",
							"aria-label": "API keys",
							onClick: () => setOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-0",
				children: [historyOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 top-0 z-10 grid max-h-72 content-start gap-1 overflow-y-auto border-b border-line bg-surface-2 px-3 py-3 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-white",
							onClick: startChat,
							children: "New chat"
						}),
						(chats.data?.chats ?? []).map((chat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: chat.id === chatId ? "rounded-xl bg-white px-3 py-2 text-left text-sm font-medium" : "rounded-xl px-3 py-2 text-left text-sm hover:bg-white",
							onClick: () => void openChat(chat.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "line-clamp-1",
								children: chat.title
							})
						}, chat.id)),
						!chats.data?.chats.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 py-2 text-sm text-muted",
							children: "No saved chats yet."
						}) : null
					]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scroller,
					className: "h-full overflow-y-auto px-4 py-6",
					children: turns.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid w-full max-w-none justify-items-center gap-3 px-2 pt-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/mts-agent.gif",
								alt: "",
								className: "size-16 rounded-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-semibold tracking-tight",
								children: "How can I help with the desk?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Ask about tickets, orders, the catalog, billing, or the customer portal. Answers stay inside Manage Tech Service."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid w-full gap-6 px-2 md:px-6",
						children: [turns.map((turn, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: turn.role === "user" ? "ml-auto max-w-[80%] rounded-3xl bg-ink px-4 py-3 text-sm text-white" : "grid max-w-[90%] gap-2 text-sm leading-6",
							children: [
								turn.role === "assistant" && showLogs && turn.logs?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									open: true,
									className: "rounded-2xl bg-surface-2 px-3 py-2 text-xs text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
										className: "cursor-pointer font-medium text-ink",
										children: "Thinking"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
										className: "mt-2 grid list-decimal gap-1 pl-4",
										children: turn.logs.map((line, logIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "whitespace-pre-wrap",
											children: line
										}, logIndex))
									})]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "whitespace-pre-wrap",
									children: turn.content
								}),
								turn.content ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageTools, {
									text: turn.content,
									light: turn.role === "user",
									voice,
									speaker
								}) : null
							]
						}, `${turn.role}-${index}`)), pending && turns.at(-1)?.role === "assistant" && !turns.at(-1)?.content ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Thinking"]
						}) : null]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "w-full border-t border-line px-3 py-3 md:px-6",
				onSubmit: (event) => {
					event.preventDefault();
					submit();
				},
				children: [
					files.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 flex w-full flex-wrap gap-2",
						children: files.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 rounded-xl border border-line bg-surface-2 px-2 py-1 text-xs",
							children: [
								file.preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: file.preview,
									alt: "",
									loading: "lazy",
									className: "size-8 rounded-md object-cover"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "max-w-32 truncate",
									children: file.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": `Remove ${file.name}`,
									onClick: () => setFiles((current) => current.filter((item) => item !== file)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
								})
							]
						}, file.name))
					}) : null,
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 w-full text-sm text-bad",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full items-end gap-1 rounded-3xl border border-line bg-white px-2 py-2 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid size-10 shrink-0 place-items-center rounded-full hover:bg-surface-2",
								"aria-label": "Attach files",
								onClick: () => fileRef.current?.click(),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileRef,
								type: "file",
								accept: "image/*,.txt,.md,.csv,.json,.pdf",
								multiple: true,
								className: "hidden",
								onChange: (event) => void attach(event.target.files)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: draft,
								rows: 1,
								placeholder: "Message MTS Agent",
								className: "max-h-36 min-h-10 flex-1 resize-none bg-transparent px-1 py-2 text-sm outline-none",
								onChange: (event) => setDraft(event.target.value),
								onKeyDown: (event) => {
									if (event.key === "Enter" && !event.shiftKey) {
										event.preventDefault();
										submit();
									}
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: listening ? "grid size-10 shrink-0 place-items-center rounded-full bg-bad-soft text-bad" : "grid size-10 shrink-0 place-items-center rounded-full hover:bg-surface-2",
								"aria-label": listening ? "Stop recording" : "Record prompt",
								onClick: toggleMic,
								children: listening ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: pending || !draft.trim(),
								className: "grid size-10 shrink-0 place-items-center rounded-full bg-ink text-white disabled:opacity-40",
								"aria-label": "Send",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
							})
						]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyModal, {
				providers: list,
				pending: providers.isPending,
				active: choice,
				voice,
				speaker,
				onVoice: setVoice,
				onSpeaker: setSpeaker,
				onClose: () => setOpen(false),
				onSaved: () => void client.invalidateQueries({ queryKey: ["mts-agent-keys"] }),
				onSet: setChoice
			}) : null
		]
	});
}
function MessageTools({ text, light, voice, speaker }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [problem, setProblem] = (0, import_react.useState)("");
	const tone = light ? "text-white/75 hover:text-white" : "text-muted hover:text-ink";
	(0, import_react.useEffect)(() => {
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
			let bytes;
			try {
				bytes = voice === "ergo" ? await ergoSpeak(text, setProblem, speaker) : await remoteSpeak(text, voice, speaker);
			} catch (cause) {
				const message = cause instanceof Error ? cause.message : "";
				if (voice !== "ergo" || !/webgpu|adapter/i.test(message)) throw cause;
				setProblem("This browser has no WebGPU adapter, so Ergo used the Gemini voice.");
				bytes = await remoteSpeak(text, "gemini", "Fola");
			}
			const buffer = await ctx.decodeAudioData(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: light ? "mt-2 grid justify-items-end gap-1" : "grid gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `grid size-7 place-items-center rounded-full ${tone}`,
				"aria-label": copied ? "Copied" : "Copy",
				onClick: () => void copy(),
				children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `grid size-7 place-items-center rounded-full ${tone}`,
				"aria-label": playing ? "Stop reading" : "Read aloud",
				onClick: () => void speak(),
				children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3.5" })
			})]
		}), problem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: light ? "text-[11px] text-white/80" : "text-[11px] text-bad",
			children: problem
		}) : null]
	});
}
var voiceContextNode = null;
var voiceSource = null;
function voiceContext() {
	if (!voiceContextNode) voiceContextNode = new AudioContext();
	voiceContextNode.resume();
	return voiceContextNode;
}
function stopVoice() {
	const current = voiceSource;
	voiceSource = null;
	if (!current) return;
	current.onended = null;
	try {
		current.stop();
	} catch {}
}
async function remoteSpeak(text, voice, speaker) {
	const token = getBearerToken();
	const response = await fetch("/api/agent/speak", {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
			...token ? { Authorization: `Bearer ${token}` } : {}
		},
		body: JSON.stringify({
			text,
			provider: voice,
			voice: speaker
		})
	});
	const payload = await response.json().catch(() => ({}));
	if (!response.ok || !payload.audio) throw new Error(payload.error || "The voice could not read that.");
	const binary = atob(payload.audio);
	const bytes = new Uint8Array(binary.length);
	for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
	return bytes;
}
var ergoId = 0;
var ergoFrame = null;
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
function ergoSpeak(text, onProgress, speaker) {
	const frame = ergoWindow();
	const id = ++ergoId;
	onProgress("Loading the Ergo voice. The first visit downloads the model.");
	return new Promise((resolve, reject) => {
		let settled = false;
		const timer = window.setTimeout(() => done(/* @__PURE__ */ new Error("Ergo took too long. WebGPU is required, and the first download is large.")), 18e4);
		const done = (result) => {
			if (settled) return;
			settled = true;
			window.clearTimeout(timer);
			window.removeEventListener("message", onMessage);
			if (result instanceof Error) reject(result);
			else resolve(result);
		};
		const onMessage = (event) => {
			if (event.origin !== window.location.origin || !event.data) return;
			if (event.data.type === "ergo-progress") {
				const total = Number(event.data.total) || 0;
				const loaded = Number(event.data.loaded) || 0;
				const pct = total ? Math.round(loaded / total * 100) : 0;
				onProgress(`Loading ${Array.isArray(event.data.models) ? event.data.models.join(", ") : "voice model"} ${pct}%`);
				return;
			}
			if (event.data.id !== id) return;
			if (event.data.type === "ergo-error") done(new Error(event.data.error || "Ergo could not read that."));
			else if (event.data.type === "ergo-audio" && event.data.audio) done(new Uint8Array(event.data.audio));
		};
		window.addEventListener("message", onMessage);
		const send = () => frame.contentWindow?.postMessage({
			type: "ergo-speak",
			id,
			text,
			voice: speaker
		}, window.location.origin);
		if (frame.dataset.ready === "1") send();
		else frame.addEventListener("load", send, { once: true });
	});
}
function KeyModal({ providers, pending, active, voice, speaker, onVoice, onSpeaker, onClose, onSaved, onSet }) {
	const [keys, setKeys] = (0, import_react.useState)({});
	const [notice, setNotice] = (0, import_react.useState)("");
	const [pick, setPick] = (0, import_react.useState)(active);
	const [catalog, setCatalog] = (0, import_react.useState)(FALLBACK_GROUPS);
	const seeded = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (active) setPick(active);
	}, [active]);
	(0, import_react.useEffect)(() => {
		const token = getBearerToken();
		let stop = false;
		fetch("/api/agent/speak", {
			credentials: "same-origin",
			headers: token ? { Authorization: `Bearer ${token}` } : {}
		}).then((response) => response.ok ? response.json() : null).then((payload) => {
			if (stop || !payload?.groups?.length) return;
			setCatalog(payload.groups.filter((group) => voiceProviders(group.id)));
		}).catch(() => void 0);
		return () => {
			stop = true;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (seeded.current || !providers.some((item) => item.apiKey)) return;
		const next = {};
		for (const item of providers) if (item.apiKey) next[item.id] = item.apiKey;
		setKeys(next);
		seeded.current = true;
	}, [providers]);
	const save = useMutation({
		mutationFn: async (provider) => {
			if (provider === "elevenlabs") return saveVoiceKey({ data: { apiKey: keys[provider] || "" } });
			return saveAgentKey({ data: {
				provider,
				apiKey: keys[provider] || ""
			} });
		},
		onSuccess: (result) => {
			setNotice(result.provider === "elevenlabs" ? "ElevenLabs voice key updated." : `${labelOf(result.provider)} updated. ${result.models.length} models are available.`);
			onSaved();
		},
		onError: (cause) => setNotice(cause instanceof Error ? cause.message : "The key was refused.")
	});
	const choose = useMutation({
		mutationFn: (input) => chooseAgentModel({ data: input }),
		onSuccess: () => {
			onSet(pick);
			setNotice("Model set.");
			onSaved();
		},
		onError: (cause) => setNotice(cause instanceof Error ? cause.message : "That model could not be set.")
	});
	const options = providers.filter((item) => item.id !== "elevenlabs").flatMap((item) => item.models.map((model) => ({
		id: item.id,
		label: item.label,
		model
	})));
	const freeOptions = providers.filter((item) => item.id !== "elevenlabs").flatMap((item) => (item.free || []).map((model) => ({
		id: item.id,
		label: item.label,
		model,
		text: item.names?.[model] || model
	})));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-ink/25 p-3 backdrop-blur-sm sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-labelledby": "agent-keys-title",
			className: "flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/70 bg-[#f6fafa] shadow-[0_24px_60px_rgba(0,57,112,0.16)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center justify-between gap-3 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "agent-keys-title",
							className: "text-lg font-semibold tracking-tight text-ink",
							children: "Provider keys"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Replace a key whenever it changes. The field keeps the current key so you can edit it."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close",
						onClick: onClose,
						className: "grid size-9 shrink-0 place-items-center rounded-full bg-white text-ink hover:bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-h-0 flex-1 content-start gap-3 overflow-y-auto px-4 pb-4 sm:grid-cols-2 sm:gap-4 sm:px-5",
					children: [pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted sm:col-span-2",
						children: "Checking saved keys…"
					}) : null, PROVIDER_CARDS.map((card) => {
						const item = providers.find((provider) => provider.id === card.id) || card;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderCard, {
							item,
							value: keys[item.id] || "",
							pending: save.isPending,
							onChange: (value) => setKeys((current) => ({
								...current,
								[item.id]: value
							})),
							onSave: () => save.mutate(item.id)
						}, item.id);
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 flex-col gap-3 border-t border-line/80 bg-white/80 px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-5 text-muted",
							children: "The agent uses the signed-in staff role. Admins can work the whole desk. Staff can update tickets and orders. View-only accounts can read."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 sm:flex-row sm:items-end",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid min-w-0 flex-1 gap-1.5 text-xs font-medium text-muted",
									children: ["Model", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "agent-model",
										value: options.some((item) => `${item.id}:${item.model}` === pick) ? pick : "",
										onChange: (event) => setPick(event.target.value),
										className: "h-11 w-full rounded-xl border border-line bg-white px-3 text-sm font-normal text-ink outline-none",
										children: [freeOptions.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: "Free",
											children: freeOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: `${item.id}:${item.model}`,
												children: item.text
											}, `free:${item.id}:${item.model}`))
										}) : null, options.length ? providers.filter((item) => item.id !== "elevenlabs" && item.models.some((model) => !(item.free || []).includes(model))).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: item.label,
											children: item.models.filter((model) => !(item.free || []).includes(model)).map((model) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: `${item.id}:${model}`,
												children: item.names?.[model] || model
											}, `${item.id}:${model}`))
										}, item.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Add a key to load models"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid min-w-0 flex-1 gap-1.5 text-xs font-medium text-muted sm:max-w-xs",
									children: ["Voice", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: "tts-voice",
										value: catalog.some((group) => group.voices.some((item) => item.id === speaker) && group.id === voice) ? `${voice}:${speaker}` : `${voice}:${catalog.find((group) => group.id === voice)?.voices[0]?.id || speaker}`,
										"aria-label": "Read-aloud voice",
										className: "h-11 w-full rounded-xl border border-line bg-white px-3 text-sm font-normal text-ink outline-none",
										onChange: (event) => {
											const value = event.target.value;
											const split = value.indexOf(":");
											const next = voiceProviders(value.slice(0, split));
											const id = value.slice(split + 1);
											if (!next || !id) return;
											onVoice(next);
											onSpeaker(id);
											window.localStorage.setItem("mts-tts", next);
											window.localStorage.setItem(`mts-tts-voice-${next}`, id);
										},
										children: catalog.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: group.label,
											children: group.voices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: `${group.id}:${item.id}`,
												children: item.name
											}, `${group.id}:${item.id}`))
										}, group.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: choose.isPending || !pick,
									onClick: () => {
										const [provider, model] = splitChoice(pick);
										if (provider && model) choose.mutate({
											provider,
											model
										});
									},
									className: "h-11 shrink-0 rounded-xl bg-ink px-5 text-sm font-semibold text-white disabled:opacity-40",
									children: "Set Model"
								})
							]
						}),
						notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: notice
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-5 text-muted",
							children: "Ergo reads aloud in this browser. No API key. The first use downloads the voice model."
						})
					]
				})
			]
		})
	});
}
var PROVIDER_CARDS = [
	{
		id: "anthropic",
		label: "Anthropic",
		connected: false,
		hint: "",
		apiKey: "",
		editable: true,
		model: "",
		models: [],
		free: [],
		names: {},
		error: ""
	},
	{
		id: "openai",
		label: "OpenAI",
		connected: false,
		hint: "",
		apiKey: "",
		editable: true,
		model: "",
		models: [],
		free: [],
		names: {},
		error: ""
	},
	{
		id: "gemini",
		label: "Gemini",
		connected: false,
		hint: "",
		apiKey: "",
		editable: true,
		model: "",
		models: [],
		free: [],
		names: {},
		error: ""
	},
	{
		id: "openrouter",
		label: "OpenRouter",
		connected: false,
		hint: "",
		apiKey: "",
		editable: true,
		model: "",
		models: [],
		free: [],
		names: {},
		error: ""
	},
	{
		id: "opencode",
		label: "OpenCode Zen",
		connected: false,
		hint: "",
		apiKey: "",
		editable: true,
		model: "",
		models: [],
		free: [],
		names: {},
		error: ""
	},
	{
		id: "opencodego",
		label: "OpenCode Go",
		connected: false,
		hint: "",
		apiKey: "",
		editable: true,
		model: "",
		models: [],
		free: [],
		names: {},
		error: ""
	},
	{
		id: "zai",
		label: "Z.AI",
		connected: false,
		hint: "",
		apiKey: "",
		editable: true,
		model: "",
		models: [],
		free: [],
		names: {},
		error: ""
	},
	{
		id: "groq",
		label: "Groq",
		connected: false,
		hint: "",
		apiKey: "",
		editable: true,
		model: "",
		models: [],
		free: [],
		names: {},
		error: ""
	},
	{
		id: "cerebras",
		label: "Cerebras",
		connected: false,
		hint: "",
		apiKey: "",
		editable: true,
		model: "",
		models: [],
		free: [],
		names: {},
		error: ""
	},
	{
		id: "ollama",
		label: "Ollama Cloud",
		connected: false,
		hint: "",
		apiKey: "",
		editable: true,
		model: "",
		models: [],
		free: [],
		names: {},
		error: ""
	},
	{
		id: "elevenlabs",
		label: "ElevenLabs",
		connected: false,
		hint: "",
		apiKey: "",
		editable: true,
		model: "",
		models: [],
		free: [],
		names: {},
		error: ""
	}
];
function ProviderCard({ item, value, pending, onChange, onSave }) {
	const [shown, setShown] = (0, import_react.useState)(false);
	const tone = TONE[item.id];
	const count = item.models.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mts-provider-card relative grid w-full min-w-0 gap-3 rounded-3xl border border-line bg-white p-4 shadow-[0_12px_32px_rgba(0,57,112,0.06)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: `pointer-events-none absolute -right-8 -top-10 size-28 rounded-full blur-2xl ${tone.wash}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: `grid size-11 place-items-center rounded-2xl text-[11px] font-semibold tracking-wide ${tone.mark}`,
					children: MARK[item.id]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "truncate text-sm font-semibold tracking-tight text-ink",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 text-[11px] font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: item.connected ? "size-1.5 rounded-full bg-[#1f8a4c]" : "size-1.5 rounded-full bg-line-strong" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: item.connected ? "text-good" : "text-muted",
									children: item.connected ? "Live" : "Off"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-xs leading-5 text-muted",
							children: PROVIDER_NOTE[item.id]
						}),
						item.id === "elevenlabs" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-[11px] font-medium text-subtle",
							children: "Read-aloud voice"
						}) : count ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1.5 text-[11px] font-medium text-subtle",
							children: [
								count,
								" models",
								item.free?.length ? ` · ${item.free.length} free` : ""
							]
						}) : null
					]
				})]
			}),
			item.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderNote, { text: item.error }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mts-provider-key grid grid-cols-[minmax(0,1fr)_2.25rem_auto] items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: shown ? "text" : "password",
						value,
						autoComplete: "off",
						disabled: !item.editable,
						placeholder: item.editable ? "Paste or edit the API key" : "Only an admin can edit this key",
						"aria-label": `${item.label} API key`,
						className: "h-10 w-full min-w-0 rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none disabled:text-muted",
						onChange: (event) => onChange(event.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-9 place-items-center rounded-xl border border-line bg-white text-muted",
						"aria-label": shown ? "Hide key" : "Show key",
						onClick: () => setShown((current) => !current),
						children: shown ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: pending || !item.editable,
						onClick: onSave,
						className: "h-10 rounded-xl bg-ink px-4 text-xs font-semibold text-white disabled:opacity-40",
						children: item.hint ? "Update" : "Save"
					})
				]
			})
		]
	});
}
function labelOf(id) {
	return PROVIDER_CARDS.find((item) => item.id === id)?.label || id;
}
var TONE = {
	anthropic: {
		mark: "bg-[#f4ece4] text-[#8a5a32]",
		wash: "bg-[#f0d7c2]"
	},
	openai: {
		mark: "bg-[#e8eef6] text-[#1d3d66]",
		wash: "bg-[#d5e3f5]"
	},
	gemini: {
		mark: "bg-[#e7f0ff] text-[#2457b5]",
		wash: "bg-[#d6e4ff]"
	},
	openrouter: {
		mark: "bg-[#e5f6f7] text-[#127e86]",
		wash: "bg-[#cfecee]"
	},
	opencode: {
		mark: "bg-[#eeeaf8] text-[#5b458f]",
		wash: "bg-[#ddd4f3]"
	},
	opencodego: {
		mark: "bg-[#eaf6ee] text-[#1f6b45]",
		wash: "bg-[#d3eedd]"
	},
	zai: {
		mark: "bg-[#eef3f8] text-[#243044]",
		wash: "bg-[#dde6f0]"
	},
	groq: {
		mark: "bg-[#fff1e8] text-[#b85a1a]",
		wash: "bg-[#ffe0cc]"
	},
	cerebras: {
		mark: "bg-[#fdecef] text-[#9a3050]",
		wash: "bg-[#f8d5de]"
	},
	ollama: {
		mark: "bg-[#e8f7f2] text-[#0f6b58]",
		wash: "bg-[#d2efe6]"
	},
	elevenlabs: {
		mark: "bg-[#f3e8ff] text-[#6d28d9]",
		wash: "bg-[#e4d4fb]"
	}
};
var MARK = {
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
	elevenlabs: "11"
};
var PROVIDER_NOTE = {
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
	elevenlabs: "Read-aloud voice for chat lines. This key is not used as a chat model."
};
function ProviderNote({ text }) {
	const link = text.match(/https:\/\/\S+/);
	if (!link) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs text-bad",
		children: text
	});
	const [before, after] = text.split(link[0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-xs text-bad",
		children: [
			before,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: link[0],
				target: "_blank",
				rel: "noreferrer",
				className: "underline",
				children: link[0]
			}),
			after
		]
	});
}
function splitChoice(value) {
	const index = value.indexOf(":");
	if (index < 0) return ["", ""];
	return [value.slice(0, index), value.slice(index + 1)];
}
function readFile(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			resolve((typeof reader.result === "string" ? reader.result : "").replace(/^data:[^,]*,/, ""));
		};
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Could not read that file."));
		reader.readAsDataURL(file);
	});
}
//#endregion
export { MtsAgentPage };
