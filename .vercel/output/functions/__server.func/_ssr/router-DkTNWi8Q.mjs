import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as useSearch, S as useNavigate, T as useRouter, X as redirect, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, w as useParams, x as Navigate, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as require_react_dom } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { c as __exportAll, r as createServerFn } from "./ssr.mjs";
import { i as createSsrRpc } from "./sarah-state-D-McXADg.mjs";
import { t as authMiddleware } from "./middleware-CFsLPH2x.mjs";
import { a as getSql } from "./db-BUp8gnwm.mjs";
import { A as verifyAlternativeSignature, C as resolveMail, O as unpaidCardStatus, T as setInventory, _ as readAlternativeEvent, a as createAlternativeCheckout, k as verificationDecision, r as applyPaymentStatus, t as ALTERNATIVE_PORTAL, u as loadAlternativeCreds } from "./commerce-Jqg6uaPJ.mjs";
import { $ as refreshPortalTicket, A as listDeskAccounts, B as listPortalTicketSchema, Bt as testIntegration, C as getShopCheckout, Ct as setDeskRole, D as linkOrderTicket, Dt as setShopRole, E as importProducts, Et as setShopPayLater, F as listOrders, Ft as syncDeskFields, Gt as updateTicket, H as listServiceCatalog, Ht as testResend, I as listOrgs, It as syncPortalUsers, J as orderCatalogService, K as markCustomerNotice, L as listPolicies, Lt as syncZendesk, M as listForms, Mt as submitComplaint, N as listMyComplaints, Nt as submitPortalTicket, O as listCampaigns, Ot as settleNewOrder, P as listNotifications, Pt as syncCustomerTicket, Q as refreshAlternativeOrder, R as listPortalCustomers, Rt as testAlternative, S as getShopAccount, St as sendTestEmail, T as getTicket, Tt as setServiceStatus, U as listServiceDesk, Ut as trackAwb, V as listProducts, Vt as testPayments, W as listTickets, Wt as updateOrder, X as placeStorefrontOrder, Y as orderPortalOffering, _ as getSarahMetrics, _t as saveProduct, a as ensureDeskOrganization, at as reviewRequest, b as getSettings, bt as saveShopProfile, c as getDashboard, ct as saveCampaign, d as getOrder, dt as saveForm, et as removeProduct, f as getOrg, ft as saveIntegration, g as getPortalTicket, gt as savePortalCompany, h as getPortalSession, ht as savePolicy, i as deleteOrder, it as respondToQuote, j as listDeskFields, k as listCustomerNotices, l as getIntegration, lt as saveCustomer, m as getPeople, mt as savePayments, n as applyZendeskWebhook, nt as replyTicket, o as filePortalTicket, ot as runDeskJobs, p as getPayments, pt as saveOrg, r as createOrder, rt as requestPortalService, s as getCustomerBilling, st as runPortalJobs, t as acceptZendeskWebhookUser, tt as replyPortalTicket, u as getNotification, ut as saveCustomerBilling, v as getService, vt as saveResend, w as getStorefront, wt as setPortalGrants, xt as saveStaff, y as getSessionHome, yt as saveSettings, z as listPortalServices, zt as testForm } from "./api-DLRKIpWt.mjs";
import { S as cn, _ as Textarea, b as errorText, c as ErrorNote, d as Loading, f as Modal, g as StatusBadge, h as Select, i as Badge, l as Field, m as Panel, n as useCurrentUser, o as Button, p as PageHeader, r as useCurrentUserState, s as Empty, t as PortalAtmosphere, u as Input, v as Toggle, x as useViewMode, y as ViewSwitch } from "./portal-atmosphere-DibPwfEL.mjs";
import { E as Minus, H as House, I as LayoutGrid, L as LayoutDashboard, M as Lock, O as MessageSquareWarning, P as List, Q as Check, R as Laptop, T as Monitor, V as ImagePlus, W as Headphones, X as ChevronLeft, Y as ClipboardList, Z as ChevronDown, _ as Receipt, a as UserRound, b as PhoneOff, c as Ticket, d as ShoppingBag, et as Building2, f as Shield, h as Send, i as Users, it as ArrowLeft, j as LogOut, k as Menu, l as Star, m as Settings, n as Wrench, q as CreditCard, rt as Bell, s as TriangleAlert, t as X, v as Plus, w as Package, y as Phone, z as Keyboard } from "../_libs/lucide-react.mjs";
import { A as number, F as union, O as literal, P as string, j as object } from "../_libs/@better-auth/core+[...].mjs";
import { i as signOut } from "./client-C_myEQ0J.mjs";
import { n as auth, t as SESSION_TOKEN_COOKIE } from "./server-We5IxPnk.mjs";
import { C as stamp, D as upsTrackUrl, S as shopifyPayment, _ as orderCustomer, b as shopifyDelivery, d as handleOauthToken, f as ingestZendeskWebhook, g as normalizeAwb, i as controlKind, k as verifyZendeskWebhook, l as fieldAudience, m as money, n as ago, p as isUpsAwb, r as authorizeOauthToken, s as day, t as ORDER_MENU, u as handleOauthAuthorize, v as orderEmail, x as shopifyFulfillment, y as paymentLabel } from "./awb-CLll5ghY.mjs";
import { i as useQueryClient, n as useQuery, r as QueryClientProvider, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as knowledgeBrief } from "./knowledge-CJ1ZieHr.mjs";
import { t as assertSameSiteRequest } from "./isolation.server-B5IRAOYQ.mjs";
import { t as requireUserId } from "./verify.server-CS_nOfGd.mjs";
import { a as useCartNotice, i as useCart, n as clearCart, r as setCartQuantity, t as addToCart } from "./store-cart-C_9hSDdQ.mjs";
import { i as getSarahStatus, n as cancelSarahAction, r as confirmSarahAction, t as askSarah } from "./sarah-BWcRAftU.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
//#region node_modules/.nitro/vite/services/ssr/assets/ticket-search-CEf18BGL.js
var ticketSearchDefaults = {
	q: "",
	status: "unresolved",
	org: "",
	category: "",
	assignee: "",
	view: ""
};
function ticketSearch(partial = {}) {
	return {
		...ticketSearchDefaults,
		...partial
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/paths-wHeeYZez.js
var ADMIN_ROOTS = [
	"/notifications",
	"/tickets",
	"/orders",
	"/organizations",
	"/users",
	"/access",
	"/campaigns",
	"/services",
	"/products",
	"/payments",
	"/forms",
	"/roles",
	"/integrations",
	"/settings",
	"/docs"
];
/** Keep the old admin desk inside /production/admin-portal. */
function rewriteAdminPath(pathname) {
	if (pathname === "/dashboard") return "/production/admin-portal";
	if (pathname.startsWith("/dashboard/")) return `/production/admin-portal${pathname.slice(10)}`;
	for (const root of ADMIN_ROOTS) if (pathname === root || pathname.startsWith(`${root}/`)) return `/production/admin-portal${pathname}`;
	return null;
}
function rewriteProductionPath(pathname) {
	if (pathname === "/portal") return "/production/user-portal";
	if (pathname.startsWith("/portal/")) return `/production/user-portal${pathname.slice(7)}`;
	const store = pathname.match(/^\/store\/[^/]+(\/.*)?$/);
	if (!store) return null;
	const rest = store[1] || "";
	if (!rest || rest === "/") return "/production/user-portal/shop";
	if (rest === "/checkout") return "/production/user-portal/checkout";
	if (rest === "/account") return "/production/user-portal/account";
	if (rest === "/tickets" || rest.startsWith("/tickets/")) return `/production/user-portal${rest}`;
	if (rest === "/services" || rest.startsWith("/services/")) return `/production/user-portal${rest}`;
	const sku = rest.replace(/^\//, "");
	if (sku && !sku.includes("/")) return `/production/user-portal/product/${sku}`;
	return "/production/user-portal/shop";
}
function catalogHref(slug, sku) {
	if (typeof window !== "undefined" && window.location.pathname.startsWith("/production/user-portal")) return `/production/user-portal/product/${encodeURIComponent(sku)}`;
	return `/store/${slug}/${sku}`;
}
function checkoutHref(slug) {
	if (typeof window !== "undefined" && window.location.pathname.startsWith("/production/user-portal")) return "/production/user-portal/checkout";
	return `/store/${slug}/checkout`;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/shop-session-BlA38aat.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KEY = "mts-shop-token";
var listeners = /* @__PURE__ */ new Set();
function read() {
	if (typeof window === "undefined") return "";
	return window.localStorage.getItem(KEY) || "";
}
function setShopToken(token) {
	if (typeof window === "undefined") return;
	if (token) window.localStorage.setItem(KEY, token);
	else window.localStorage.removeItem(KEY);
	listeners.forEach((listener) => listener());
}
function subscribe(listener) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}
function useShopToken() {
	return (0, import_react.useSyncExternalStore)(subscribe, read, () => "");
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/use-portal-session-tEbY-T0w.js
function usePortalSession() {
	const token = useShopToken();
	return useQuery({
		queryKey: ["portal-session", token],
		queryFn: () => getPortalSession({ data: token }),
		enabled: Boolean(token)
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/portal-ui-D9rdK8vc.js
var import_jsx_runtime = require_jsx_runtime();
function PortalPanel({ title, action, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("grid gap-3 rounded-2xl border border-line bg-surface/90 p-4 shadow-sm backdrop-blur-sm", className),
		children: [title || action ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-medium",
				children: title
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), action]
		}) : null, children]
	});
}
function DataField({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-w-0 gap-1 rounded-xl bg-surface-2/70 px-3 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-medium tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "truncate text-sm font-medium text-ink",
			children: value || "Not set"
		})]
	});
}
function StatTile({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-sm backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-medium tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-2xl font-medium tabular-nums",
			children: value
		})]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/customer-portal-C190V7c7.js
function usePortalLive(token) {
	const client = useQueryClient();
	(0, import_react.useEffect)(() => {
		if (!token || typeof window === "undefined") return;
		let socket = null;
		let timer = 0;
		let attempt = 0;
		let stopped = false;
		function connect() {
			const proto = window.location.protocol === "https:" ? "wss" : "ws";
			socket = new WebSocket(`${proto}://${window.location.host}/api/live`);
			socket.onopen = () => {
				attempt = 0;
				socket?.send(JSON.stringify({
					type: "hello",
					token
				}));
			};
			socket.onmessage = (event) => {
				let body = {};
				try {
					body = JSON.parse(String(event.data));
				} catch {
					return;
				}
				if (body.type === "notices") client.invalidateQueries({ queryKey: ["customer-notices", token] });
			};
			socket.onclose = () => {
				if (stopped) return;
				const wait = Math.min(15e3, 1e3 * 2 ** attempt);
				attempt += 1;
				timer = window.setTimeout(connect, wait);
			};
		}
		connect();
		return () => {
			stopped = true;
			window.clearTimeout(timer);
			socket?.close();
		};
	}, [client, token]);
}
var sarahLive = false;
var voiceLevels = [];
var sarahLiveListeners = /* @__PURE__ */ new Set();
var voiceListeners = /* @__PURE__ */ new Set();
function setSarahLive(next) {
	sarahLive = next;
	sarahLiveListeners.forEach((listener) => listener(next));
}
function setVoiceLevels(next) {
	voiceLevels = next;
	voiceListeners.forEach((listener) => listener(next));
}
function useSarahLive() {
	const [live, setLive] = (0, import_react.useState)(sarahLive);
	(0, import_react.useEffect)(() => {
		sarahLiveListeners.add(setLive);
		setLive(sarahLive);
		return () => {
			sarahLiveListeners.delete(setLive);
		};
	}, []);
	return live;
}
function useVoiceLevels() {
	const [levels, setLevels] = (0, import_react.useState)(voiceLevels);
	(0, import_react.useEffect)(() => {
		voiceListeners.add(setLevels);
		setLevels(voiceLevels);
		return () => {
			voiceListeners.delete(setLevels);
		};
	}, []);
	return levels;
}
function AgentMark({ className = "size-11" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 27a16 16 0 0 1 32 0",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "4.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7",
				y: "23",
				width: "10",
				height: "15",
				rx: "3",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "47",
				y: "23",
				width: "10",
				height: "15",
				rx: "3",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 16c8.4 0 15 6.4 15 14.4 0 6.2-3.4 10.4-8.2 13.2L32 54l-6.8-10.4C20.4 40.8 17 36.6 17 30.4 17 22.4 23.6 16 32 16z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25.5",
				cy: "31",
				r: "1.8",
				fill: "#e5f6f7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "31",
				r: "1.8",
				fill: "#e5f6f7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "38.5",
				cy: "31",
				r: "1.8",
				fill: "#e5f6f7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M52 38c5 2 8 6 7 12",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "58",
				cy: "52",
				r: "2.5",
				fill: "currentColor"
			})
		]
	});
}
function AudioBars({ levels, wide = false }) {
	const count = wide ? 14 : 7;
	const height = wide ? 28 : 32;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: wide ? "flex h-8 w-full items-end gap-[3px]" : "flex h-8 w-full items-end justify-center gap-[3px]",
		"aria-hidden": "true",
		children: Array.from({ length: count }, (_, index) => {
			const level = levels[index] ?? 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block w-full min-w-[3px] flex-1 rounded-full bg-accent",
				style: { height: `${Math.max(3, Math.round(level / 100 * height))}px` }
			}, index);
		})
	});
}
function portalPath(to) {
	const base = window.location.pathname.startsWith("/production/user-portal") ? "/production/user-portal" : "/portal";
	if (to === "/portal") return base;
	if (to.startsWith("/portal/")) return `${base}${to.slice(7)}`;
	return to;
}
function SarahWidget() {
	const token = useShopToken();
	const levels = useVoiceLevels();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [mode, setMode] = (0, import_react.useState)("menu");
	const [spot, setSpot] = (0, import_react.useState)(null);
	const [wide, setWide] = (0, import_react.useState)(false);
	const [lines, setLines] = (0, import_react.useState)([]);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [actionId, setActionId] = (0, import_react.useState)("");
	const [listening, setListening] = (0, import_react.useState)(false);
	const drag = (0, import_react.useRef)(null);
	const skipClick = (0, import_react.useRef)(false);
	const openRef = (0, import_react.useRef)(false);
	const liveRef = (0, import_react.useRef)(false);
	const tokenRef = (0, import_react.useRef)("");
	const actionRef = (0, import_react.useRef)("");
	const history = (0, import_react.useRef)([]);
	const callOn = (0, import_react.useRef)(false);
	const speaking = (0, import_react.useRef)(false);
	const recRef = (0, import_react.useRef)(null);
	const scroller = (0, import_react.useRef)(null);
	const askRef = (0, import_react.useRef)(async () => void 0);
	(0, import_react.useEffect)(() => {
		tokenRef.current = token;
	}, [token]);
	(0, import_react.useEffect)(() => {
		actionRef.current = actionId;
	}, [actionId]);
	(0, import_react.useEffect)(() => {
		openRef.current = open;
	}, [open]);
	(0, import_react.useEffect)(() => {
		const live = mode === "chat" || mode === "call";
		liveRef.current = live;
		setSarahLive(live);
		if (!live) setVoiceLevels([]);
	}, [mode]);
	(0, import_react.useEffect)(() => {
		scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
	}, [lines, actionId]);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(min-width: 768px)");
		const apply = () => setWide(media.matches);
		apply();
		media.addEventListener("change", apply);
		const saved = window.localStorage.getItem("mts-sarah-spot");
		if (saved) try {
			const parsed = JSON.parse(saved);
			if (typeof parsed.right === "number" && typeof parsed.bottom === "number") setSpot({
				right: parsed.right,
				bottom: parsed.bottom
			});
		} catch {}
		const toggle = () => {
			if (openRef.current && !liveRef.current) setOpen(false);
			else setOpen(true);
		};
		const end = () => {
			callOn.current = false;
			recRef.current?.stop();
			window.speechSynthesis?.cancel();
			setMode("menu");
			setOpen(false);
		};
		window.addEventListener("mts-sarah-toggle", toggle);
		window.addEventListener("mts-sarah-end", end);
		return () => {
			media.removeEventListener("change", apply);
			window.removeEventListener("mts-sarah-toggle", toggle);
			window.removeEventListener("mts-sarah-end", end);
		};
	}, []);
	function say(text) {
		if (!window.speechSynthesis) return;
		window.speechSynthesis.cancel();
		const utter = new SpeechSynthesisUtterance(text);
		utter.rate = 1;
		speaking.current = true;
		recRef.current?.stop();
		utter.onend = () => {
			speaking.current = false;
			if (callOn.current) recRef.current?.start();
		};
		window.speechSynthesis.speak(utter);
	}
	async function ask(text, channel) {
		const current = tokenRef.current;
		const trimmed = text.trim();
		if (!current || !trimmed || busy) return;
		setLines((prev) => [...prev, {
			from: "you",
			text: trimmed
		}].slice(-24));
		setBusy(true);
		try {
			const result = await askSarah({ data: {
				token: current,
				text: trimmed,
				channel,
				actionId: actionRef.current,
				history: history.current
			} });
			history.current = [
				...history.current,
				{
					role: "user",
					content: trimmed
				},
				{
					role: "assistant",
					content: result.reply
				}
			].slice(-6);
			if (result.cartSku) addToCart(result.cartSku);
			if (result.navigate && result.show?.to) window.location.assign(portalPath(result.show.to));
			setActionId(result.actionId || "");
			const extra = result.cards?.length ? ` ${result.cards.map((card) => card.title).join(", ")}.` : "";
			const reply = `${result.reply}${extra}`.trim();
			setLines((prev) => [...prev, {
				from: "sarah",
				text: reply
			}].slice(-24));
			if (channel === "call") say(result.reply);
		} catch (error) {
			const reply = error instanceof Error ? error.message : "I couldn't do that.";
			setLines((prev) => [...prev, {
				from: "sarah",
				text: reply
			}]);
			if (channel === "call") say(reply);
		} finally {
			setBusy(false);
		}
	}
	askRef.current = ask;
	(0, import_react.useEffect)(() => {
		if (mode !== "call" || !open) return;
		const win = window;
		const Ctor = win.SpeechRecognition || win.webkitSpeechRecognition;
		if (!Ctor) return;
		const rec = new Ctor();
		rec.continuous = true;
		rec.interimResults = false;
		rec.lang = "en-US";
		rec.onresult = (event) => {
			const last = event.results[event.results.length - 1];
			const text = last?.isFinal ? last[0]?.transcript?.trim() || "" : "";
			if (text) askRef.current(text, "call");
		};
		rec.onend = () => {
			if (callOn.current && !speaking.current) rec.start();
		};
		recRef.current = rec;
		callOn.current = true;
		setListening(true);
		try {
			rec.start();
		} catch {
			setListening(false);
		}
		return () => {
			callOn.current = false;
			rec.onend = null;
			rec.stop();
			recRef.current = null;
			setListening(false);
		};
	}, [mode, open]);
	function start(next) {
		if (!token) setLines([{
			from: "sarah",
			text: "Sign in first. I can only work on the account that is signed in."
		}]);
		setMode(next);
		setOpen(true);
	}
	function endSession() {
		callOn.current = false;
		recRef.current?.stop();
		window.speechSynthesis?.cancel();
		setMode("menu");
		setOpen(false);
		setActionId("");
	}
	async function decide(decision) {
		if (!token || !actionId || busy) return;
		setBusy(true);
		try {
			const result = decision === "confirm" ? await confirmSarahAction({ data: {
				token,
				actionId
			} }) : await cancelSarahAction({ data: {
				token,
				actionId
			} });
			if (result.cartSku) addToCart(result.cartSku);
			setActionId("");
			setLines((prev) => [...prev, {
				from: "sarah",
				text: result.reply || (decision === "confirm" ? "Done." : "Cancelled.")
			}]);
			if (mode === "call" && result.reply) say(result.reply);
		} catch (error) {
			setLines((prev) => [...prev, {
				from: "sarah",
				text: error instanceof Error ? error.message : "That did not go through."
			}]);
		} finally {
			setBusy(false);
		}
	}
	const full = open && (mode === "chat" || mode === "call");
	const place = spot ? {
		right: spot.right,
		bottom: spot.bottom
	} : void 0;
	function clamp(right, bottom) {
		const size = 64;
		const minBottom = wide ? 8 : 88;
		return {
			right: Math.min(window.innerWidth - size - 8, Math.max(8, right)),
			bottom: Math.min(window.innerHeight - size - 8, Math.max(minBottom, bottom))
		};
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		full ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 flex flex-col bg-surface md:inset-auto md:right-4 md:bottom-24 md:h-[min(100dvh-8rem,40rem)] md:w-[24rem] md:overflow-hidden md:rounded-2xl md:shadow-2xl",
			style: wide ? place : void 0,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex h-14 shrink-0 items-center justify-between border-b border-line px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: mode === "call" ? listening ? "Sarah is listening" : "Sarah" : "Chat with Sarah"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "End support",
						onClick: endSession,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "size-4" })
					})]
				}),
				mode === "call" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 pt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioBars, {
						levels,
						wide: true
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: scroller,
					className: "min-h-0 flex-1 space-y-2 overflow-y-auto px-4 py-3",
					children: [lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: line.from === "you" ? "ml-8 rounded-2xl bg-accent px-3 py-2 text-sm text-white" : "mr-8 rounded-2xl bg-accent-soft px-3 py-2 text-sm text-ink",
						children: line.text
					}, `${line.from}-${index}`)), !token ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Sign in, then tell Sarah what you need."
					}) : null]
				}),
				actionId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2 px-4 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: busy,
						onClick: () => void decide("confirm"),
						className: "h-11 rounded-xl bg-accent text-sm font-semibold text-white",
						children: "Confirm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: busy,
						onClick: () => void decide("cancel"),
						className: "h-11 rounded-xl border border-line text-sm font-semibold",
						children: "Cancel"
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex gap-2 border-t border-line p-3",
					onSubmit: (event) => {
						event.preventDefault();
						const text = draft;
						setDraft("");
						ask(text, mode === "call" ? "call" : "chat");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft,
						onChange: (event) => setDraft(event.target.value),
						placeholder: mode === "call" ? "Or type it" : "Tell Sarah what you need",
						className: "h-11 min-w-0 flex-1 rounded-xl border border-line bg-surface px-3 text-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy || !draft.trim(),
						"aria-label": "Send",
						className: "grid size-11 place-items-center rounded-xl bg-ink text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
					})]
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: full ? "hidden" : open ? "fixed inset-x-0 bottom-0 z-40 flex justify-end md:inset-x-auto md:right-4 md:bottom-24 md:w-[24rem]" : "hidden",
			style: { paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-full flex-col items-stretch gap-2 px-3 md:w-[24rem] md:items-end md:px-0",
				children: open && mode === "menu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid w-full gap-3 self-end rounded-2xl border border-line bg-surface p-4 shadow-lg md:w-80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Support"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Close support",
								onClick: () => setOpen(false),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Tell Sarah what you need. She does it on this account."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => start("chat"),
								className: "grid h-20 place-items-center gap-1 rounded-xl bg-accent text-sm font-semibold text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-5" }), "Chat"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => start("call"),
								className: "grid h-20 place-items-center gap-1 rounded-xl border border-line bg-accent-soft text-sm font-semibold text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }), "Call"]
							})]
						})
					]
				}) : null
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Talk to support",
			"aria-expanded": open,
			onPointerDown: (event) => {
				const rect = event.currentTarget.getBoundingClientRect();
				drag.current = {
					px: event.clientX,
					py: event.clientY,
					right: window.innerWidth - rect.right,
					bottom: window.innerHeight - rect.bottom,
					moved: false,
					spot: null
				};
				event.currentTarget.setPointerCapture(event.pointerId);
			},
			onPointerMove: (event) => {
				const current = drag.current;
				if (!current) return;
				const next = clamp(current.right - (event.clientX - current.px), current.bottom - (event.clientY - current.py));
				if (Math.hypot(event.clientX - current.px, event.clientY - current.py) > 6) current.moved = true;
				current.spot = next;
				setSpot(next);
			},
			onPointerUp: () => {
				const current = drag.current;
				drag.current = null;
				if (!current?.moved || !current.spot) return;
				skipClick.current = true;
				window.localStorage.setItem("mts-sarah-spot", JSON.stringify(current.spot));
			},
			onClick: () => {
				if (skipClick.current) {
					skipClick.current = false;
					return;
				}
				if (open && mode === "menu") setOpen(false);
				else setOpen(true);
			},
			style: place,
			className: full ? "hidden" : "fixed right-4 bottom-[max(5.5rem,calc(4.5rem+env(safe-area-inset-bottom)))] z-50 grid size-16 touch-none cursor-grab place-items-center rounded-full bg-ink text-white shadow-[0_8px_24px_rgba(0,57,112,0.28)] ring-4 ring-white active:cursor-grabbing md:bottom-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentMark, {})
		})
	] });
}
function SarahHeaderButton() {
	const live = useSarahLive();
	const levels = useVoiceLevels();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: live ? "flex h-9 w-[42vw] max-w-60 items-center justify-center rounded-full bg-accent-soft px-3" : "grid size-10 place-items-center rounded-xl text-ink",
			"aria-label": live ? "Sarah is still on the line" : "Talk to support",
			onClick: () => window.dispatchEvent(new Event("mts-sarah-toggle")),
			children: live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioBars, {
				levels,
				wide: true
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentMark, { className: "size-6" })
		}), live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "ml-1 grid size-8 place-items-center rounded-full bg-[#8e1f0b] text-white",
			"aria-label": "End support",
			onClick: () => window.dispatchEvent(new Event("mts-sarah-end")),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "size-3.5" })
		}) : null]
	});
}
var NAV = [
	{
		to: "/portal",
		label: "Home",
		icon: House,
		exact: true,
		guide: "home"
	},
	{
		to: "/portal/tickets",
		label: "Tickets",
		icon: Ticket,
		guide: "tickets"
	},
	{
		to: "/portal/shop",
		label: "Order",
		icon: ShoppingBag,
		guide: "order",
		also: ["/portal/checkout", "/portal/product"]
	},
	{
		to: "/portal/billing",
		label: "Billing",
		icon: Receipt,
		guide: "billing"
	},
	{
		to: "/portal/account",
		label: "Account",
		icon: Settings,
		guide: "account"
	},
	{
		to: "/portal/orders",
		label: "Orders",
		icon: Package,
		guide: "orders"
	},
	{
		to: "/portal/complaints",
		label: "Complaints",
		icon: MessageSquareWarning,
		guide: "complaints"
	},
	{
		to: "/portal/organization",
		label: "Organization",
		icon: Building2,
		guide: "organization"
	}
];
var TAB_ORDER_KEY = "mts-portal-tab-order";
function defaultOrder() {
	return NAV.map((item) => item.to);
}
function readOrder() {
	if (typeof window === "undefined") return defaultOrder();
	try {
		const saved = JSON.parse(localStorage.getItem(TAB_ORDER_KEY) || "[]");
		if (!Array.isArray(saved)) return defaultOrder();
		const known = new Set(defaultOrder());
		const next = saved.filter((item) => typeof item === "string" && known.has(item));
		for (const item of defaultOrder()) if (!next.includes(item)) next.push(item);
		return next;
	} catch {
		return defaultOrder();
	}
}
function useTabOrder() {
	const [order, setOrder] = (0, import_react.useState)(defaultOrder);
	const drag = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setOrder(readOrder());
	}, []);
	function move(target) {
		const from = drag.current;
		if (!from || from === target) return;
		setOrder((current) => {
			const next = current.filter((item) => item !== from);
			const index = next.indexOf(target);
			next.splice(index < 0 ? next.length : index, 0, from);
			localStorage.setItem(TAB_ORDER_KEY, JSON.stringify(next));
			return next;
		});
	}
	return {
		tabs: order.map((to) => NAV.find((item) => item.to === to)).filter((item) => Boolean(item)),
		drag,
		move
	};
}
function portalHref(path, to) {
	const base = path.startsWith("/production/user-portal") ? "/production/user-portal" : "/portal";
	if (to === "/portal") return base;
	if (to.startsWith("/portal/")) return `${base}${to.slice(7)}`;
	return to;
}
function clean(path) {
	return path.length > 1 ? path.replace(/\/$/, "") : path;
}
function isActive(path, item) {
	const here = clean(path);
	return [item.to, ..."also" in item ? item.also : []].some((to) => {
		const href = clean(portalHref(path, to));
		if ("exact" in item && item.exact && to === item.to) return here === href;
		return here === href || here.startsWith(`${href}/`);
	});
}
function PortalShell({ children }) {
	const path = useRouterState({ select: (state) => state.location.pathname });
	const session = usePortalSession();
	const user = useCurrentUser();
	const home = useQuery({
		queryKey: ["session-home"],
		queryFn: () => getSessionHome()
	});
	const cart = useCart();
	const token = useShopToken();
	usePortalLive(token);
	const sarah = useQuery({
		queryKey: ["sarah-banner", token],
		queryFn: () => getSarahStatus({ data: { token } }),
		enabled: Boolean(token),
		refetchInterval: 15e3
	});
	const unread = (useQuery({
		queryKey: ["customer-notices", token],
		queryFn: () => listCustomerNotices({ data: token }),
		enabled: Boolean(token),
		refetchInterval: 6e4
	}).data ?? []).filter((item) => !item.read).length;
	const [menu, setMenu] = (0, import_react.useState)(false);
	const current = NAV.find((item) => isActive(path, item));
	const name = user?.displayName || session.data?.customer.name || "there";
	const count = cart.reduce((sum, line) => sum + line.quantity, 0);
	const { tabs, drag, move } = useTabOrder();
	const mobileTabs = tabs.slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "portal-stage grid min-h-dvh grid-rows-[auto_minmax(0,1fr)] text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalAtmosphere, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-30 border-b border-line bg-surface/95 backdrop-blur md:sticky",
				style: { paddingTop: "env(safe-area-inset-top)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid h-14 w-full max-w-6xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-4 md:h-16 md:gap-3 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: portalHref(path, "/portal"),
							className: "flex min-w-0 items-center gap-2 md:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-8 shrink-0 place-items-center rounded-lg bg-ink text-[11px] font-semibold text-white",
								children: "MT"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm font-semibold",
								children: current?.label ?? "MTS"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden min-w-0 items-center gap-1 overflow-x-auto md:col-start-1 md:flex",
							"aria-label": "Customer",
							children: [tabs.map((item) => {
								const href = portalHref(path, item.to);
								const active = isActive(path, item);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: href,
									draggable: true,
									onDragStart: () => {
										drag.current = item.to;
									},
									onDragOver: (event) => event.preventDefault(),
									onDrop: () => move(item.to),
									"data-guide": item.guide,
									"aria-current": active ? "page" : void 0,
									className: active ? "shrink-0 cursor-grab rounded-lg bg-ink px-3 py-2 text-sm text-white" : "shrink-0 cursor-grab rounded-lg px-3 py-2 text-sm text-ink hover:bg-surface-2",
									children: item.label
								}, item.to);
							}), home.data?.desk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: path.startsWith("/production") ? "/production/admin-portal" : "/dashboard",
								className: "hidden shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-accent md:inline",
								children: "Admin"
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-start-3 flex shrink-0 items-center justify-end",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: portalHref(path, "/portal/notifications"),
									"data-guide": "notifications",
									className: "relative grid size-10 place-items-center rounded-xl md:size-11",
									"aria-label": unread ? `${unread} unread notifications` : "Notifications",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-5" }), unread > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-0.5 right-0.5 min-w-4 rounded-full bg-accent px-1 text-center text-[10px] font-semibold leading-4 text-white",
										children: unread > 99 ? "99+" : unread
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: portalHref(path, "/portal/shop"),
									className: "relative hidden size-11 place-items-center rounded-xl md:grid",
									"aria-label": "Order",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-1 right-1 min-w-4 rounded-full bg-accent px-1 text-center text-[10px] font-semibold leading-4 text-white",
										children: count
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SarahHeaderButton, {}),
								home.data?.desk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: path.startsWith("/production") ? "/production/admin-portal" : "/dashboard",
									className: "grid size-10 place-items-center rounded-xl text-accent md:hidden",
									"aria-label": "Admin",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "size-5" })
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid size-10 place-items-center rounded-xl md:hidden",
									"aria-label": "Open menu",
									onClick: () => setMenu(true),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "hidden size-11 place-items-center rounded-xl md:grid",
									"aria-label": "Sign out",
									onClick: () => {
										setShopToken("");
										signOut("/production/signin");
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-5" })
								})
							]
						})
					]
				})
			}),
			sarah.data?.banner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-b border-[#ead7a1] bg-[#fff7e8] px-4 py-2 text-center text-sm text-[#6d5105]",
				children: sarah.data.banner
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto min-w-0 w-full max-w-6xl px-4 pt-[calc(4.75rem+env(safe-area-inset-top))] pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:px-8 md:py-8 md:pb-8",
				children
			}),
			menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute inset-0 bg-ink/40",
					"aria-label": "Close",
					onClick: () => setMenu(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 top-0 grid max-h-dvh gap-1 overflow-y-auto bg-surface p-4 shadow-lg",
					style: { paddingTop: "max(1rem, env(safe-area-inset-top))" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-semibold",
									children: name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted",
									children: session.data?.organization || session.data?.business || user?.primaryEmail || ""
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Close menu",
								onClick: () => setMenu(false),
								className: "grid size-10 shrink-0 place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})]
						}),
						tabs.map((item) => {
							const active = isActive(path, item);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: portalHref(path, item.to),
								draggable: true,
								onDragStart: () => {
									drag.current = item.to;
								},
								onDragOver: (event) => event.preventDefault(),
								onDrop: () => move(item.to),
								"data-guide": item.guide,
								"aria-current": active ? "page" : void 0,
								onClick: () => setMenu(false),
								className: active ? "cursor-grab rounded-xl bg-ink px-3 py-3 text-sm font-medium text-white" : "cursor-grab rounded-xl px-3 py-3 text-sm font-medium hover:bg-surface-2",
								children: item.label
							}, item.to);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: portalHref(path, "/portal/notifications"),
							onClick: () => setMenu(false),
							className: "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium hover:bg-surface-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Notifications" }), unread > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-5 rounded-full bg-accent px-1.5 text-center text-[11px] font-semibold leading-5 text-white",
								children: unread > 99 ? "99+" : unread
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-xl px-3 py-3 text-left text-sm font-medium",
							onClick: () => {
								setMenu(false);
								setShopToken("");
								signOut("/production/signin");
							},
							children: "Sign out"
						})
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SarahWidget, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-line bg-surface px-1 pt-1 md:hidden",
				style: { paddingBottom: "max(0.35rem, env(safe-area-inset-bottom))" },
				"aria-label": "Portal",
				children: mobileTabs.map((item) => {
					const Icon = item.icon;
					const href = portalHref(path, item.to);
					const active = isActive(path, item);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: href,
						"data-guide": item.guide,
						"aria-current": active ? "page" : void 0,
						className: active ? "grid min-h-14 place-items-center gap-0.5 text-ink" : "grid min-h-14 place-items-center gap-0.5 text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: active ? 2.25 : 1.75
							}), item.to === "/portal/shop" && count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1.5 -right-2 min-w-4 rounded-full bg-accent px-1 text-center text-[10px] font-semibold leading-4 text-white",
								children: count
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium",
							children: item.label
						})]
					}, item.to);
				})
			})
		]
	});
}
function Locked({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid w-full gap-2 rounded-2xl border border-line bg-surface p-5 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-lg font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: body
		})]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/storefront-BxxDRiuc.js
var FREE_SHIPPING = 5e4;
function useStore() {
	const { slug: requested } = useParams({ strict: false });
	const query = useQuery({
		queryKey: ["storefront"],
		queryFn: () => getStorefront()
	});
	return {
		slug: requested || query.data?.slug || "",
		requested,
		query
	};
}
function StoreFrame({ children }) {
	const { slug, requested, query } = useStore();
	const path = useRouterState({ select: (state) => state.location.pathname });
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const lines = useCart();
	const notice = useCartNotice();
	const count = lines.reduce((sum, line) => sum + line.quantity, 0);
	const checkout = path.includes("/checkout");
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-white text-sm text-muted",
		children: "Opening the shop…"
	});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-white px-6 text-sm text-bad",
		children: query.error.message
	});
	const store = query.data;
	if (requested && store.slug !== requested) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/store/$slug",
		params: { slug: store.slug }
	});
	if (checkout) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen max-w-full overflow-x-auto bg-white text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/store/$slug",
					params: { slug: store.slug },
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-full bg-ink text-[11px] font-semibold text-white",
						children: "MT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold",
						children: store.brandName
					})]
				})
			})
		}), children]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-dvh max-w-full grid-rows-[auto_auto_minmax(0,1fr)_auto] overflow-x-auto text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-ink px-4 py-2.5 text-center text-[12px] text-white/85",
				children: store.tagline || "Free standard shipping on orders over $500."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-line/80 bg-white/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/store/$slug",
							params: { slug: store.slug },
							className: "flex min-w-0 items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-2xl bg-ink text-[11px] font-semibold text-white",
								children: "MT"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm font-semibold",
								children: store.brandName
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "ml-4 hidden min-w-0 items-center gap-5 text-[13px] md:flex",
							"aria-label": "Store",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/store/$slug",
									params: { slug: store.slug },
									className: path === `/store/${store.slug}` || path === `/store/${store.slug}/` ? "font-semibold text-ink" : "text-muted hover:text-ink",
									children: "Shop"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/store/$slug/services",
									params: { slug: store.slug },
									className: path.includes("/services") ? "font-semibold text-ink" : "text-muted hover:text-ink",
									children: "MTS Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/store/$slug/tickets",
									params: { slug: store.slug },
									className: path.includes("/tickets") ? "font-semibold text-ink" : "text-muted hover:text-ink",
									children: "Tickets"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/store/$slug/account",
									params: { slug: store.slug },
									className: path.includes("/account") ? "font-semibold text-ink" : "text-muted hover:text-ink",
									children: "Account"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/store/$slug/account",
								params: { slug: store.slug },
								className: "shop-press grid size-11 place-items-center rounded-full text-ink hover:bg-accent-soft",
								"aria-label": "Account",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "shop-press relative grid size-11 place-items-center rounded-full bg-ink text-white",
								onClick: () => setCartOpen(true),
								"aria-label": `Open cart, ${count} items`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-semibold leading-5 text-white",
									children: count
								}) : null]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pb-24 md:pb-0",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line bg-white px-4 py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: store.brandName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xs text-sm leading-6 text-muted",
							children: store.tagline || "Laptops, PCs, and the accessories that go with them."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid content-start gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold uppercase tracking-wide text-subtle",
									children: "Shop"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/store/$slug",
									params: { slug: store.slug },
									className: "text-muted",
									children: "Shop"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/store/$slug/services",
									params: { slug: store.slug },
									className: "text-muted",
									children: "MTS Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/store/$slug/tickets",
									params: { slug: store.slug },
									className: "text-muted",
									children: "Tickets"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/store/$slug/account",
									params: { slug: store.slug },
									className: "text-muted",
									children: "Account"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid content-start gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold uppercase tracking-wide text-subtle",
									children: "Support"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "break-words text-muted",
									children: store.supportEmail || "Ask your account team."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: "Free standard shipping over $500."
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 grid grid-cols-4 border-t border-line bg-white/95 px-1 pt-1 backdrop-blur md:hidden",
				style: { paddingBottom: "max(0.35rem, env(safe-area-inset-bottom))" },
				"aria-label": "Shop",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTab, {
						to: "/store/$slug",
						params: { slug: store.slug },
						active: path === `/store/${store.slug}` || path === `/store/${store.slug}/`,
						icon: House,
						label: "Shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTab, {
						to: "/store/$slug/services",
						params: { slug: store.slug },
						active: path.includes("/services"),
						icon: Wrench,
						label: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTab, {
						to: "/store/$slug/tickets",
						params: { slug: store.slug },
						active: path.includes("/tickets"),
						icon: Headphones,
						label: "Tickets"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTab, {
						to: "/store/$slug/account",
						params: { slug: store.slug },
						active: path.includes("/account"),
						icon: UserRound,
						label: "Account"
					})
				]
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddedToast, {
				products: store.products,
				notice,
				onOpen: () => setCartOpen(true)
			}) : null,
			cartOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {
				products: store.products,
				slug: store.slug,
				onClose: () => setCartOpen(false)
			}) : null
		]
	});
}
function ShopTab({ to, params, hash, active, icon: Icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		params,
		hash,
		className: active ? "shop-press flex h-14 flex-col items-center justify-center gap-0.5 text-[10px] font-semibold text-ink" : "shop-press flex h-14 flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), label]
	});
}
function AddedToast({ products, notice, onOpen }) {
	const [visible, setVisible] = (0, import_react.useState)(true);
	const product = products.find((item) => item.sku === notice.sku);
	(0, import_react.useEffect)(() => {
		setVisible(true);
		const timer = window.setTimeout(() => setVisible(false), 2400);
		return () => window.clearTimeout(timer);
	}, [notice.at, notice.sku]);
	if (!visible || !product) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onOpen,
		className: "shop-rise fixed inset-x-4 bottom-24 z-30 flex items-center gap-3 rounded-2xl bg-ink px-3 py-3 text-left text-white shadow-lg md:bottom-6 md:left-auto md:right-6 md:w-80",
		children: [product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: product.imageUrl,
			alt: "",
			className: "size-12 rounded-xl object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-12 rounded-xl bg-white/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm font-semibold",
			children: "Added to cart"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs text-white/70",
			children: product.name
		})] })]
	});
}
function QtyStepper({ value, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex h-11 items-center rounded-full border border-line bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "shop-press grid size-11 place-items-center",
				"aria-label": `Decrease ${label}`,
				onClick: () => onChange(value - 1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-6 text-center text-sm font-semibold tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "shop-press grid size-11 place-items-center",
				"aria-label": `Increase ${label}`,
				onClick: () => onChange(Math.min(99, value + 1)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
			})
		]
	});
}
function CartDrawer({ products, slug, onClose }) {
	const detailed = useCart().map((line) => ({
		...line,
		product: products.find((product) => product.sku === line.sku)
	})).filter((line) => line.product);
	const total = detailed.reduce((sum, line) => sum + line.quantity * (line.product?.priceCents ?? 0), 0);
	const remaining = Math.max(0, FREE_SHIPPING - total);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "shop-fade absolute inset-0 bg-ink/40",
			"aria-label": "Close cart",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "shop-drawer absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-16 items-center justify-between px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-semibold",
						children: "Your cart"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close",
						onClick: onClose,
						className: "shop-press grid size-11 place-items-center rounded-full hover:bg-accent-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-4 rounded-2xl bg-accent-soft px-4 py-3 text-xs text-ink",
					children: [remaining === 0 ? "Standard shipping is free on this order." : `Add ${money(remaining)} more for free standard shipping.`, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-1.5 overflow-hidden rounded-full bg-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-accent transition-all",
							style: { width: `${Math.min(100, total / FREE_SHIPPING * 100)}%` }
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-h-0 flex-1 content-start overflow-y-auto px-4",
					children: [detailed.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-16 text-center text-sm text-muted",
						children: "Your cart is empty."
					}) : null, detailed.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[5rem_minmax(0,1fr)] items-start gap-3 border-b border-line py-4",
						children: [line.product?.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: line.product.imageUrl,
							alt: "",
							className: "size-20 rounded-2xl bg-[#f3f6f7] object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-20 rounded-2xl bg-[#f3f6f7]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-semibold",
									children: line.product?.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: money(line.product?.priceCents ?? 0)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
										value: line.quantity,
										label: line.product?.name ?? "item",
										onChange: (next) => setCartQuantity(line.sku, next)
									})
								})
							]
						})]
					}, line.sku))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line p-4 pb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Subtotal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg font-semibold tabular-nums",
								children: money(total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs text-muted",
							children: "Shipping and taxes are calculated at checkout."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/store/$slug/checkout",
							params: { slug },
							onClick: onClose,
							className: `shop-press flex h-12 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white ${detailed.length === 0 ? "pointer-events-none opacity-40" : ""}`,
							children: "Checkout"
						})
					]
				})
			]
		})]
	});
}
function SummaryToggle({ total, children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[#f3f6f7] lg:bg-transparent",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex h-14 w-full items-center justify-between px-4 text-sm font-semibold text-accent lg:hidden",
			onClick: () => setOpen((value) => !value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1",
				children: [
					open ? "Hide order summary" : "Show order summary",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-4 transition ${open ? "rotate-180" : ""}` })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-ink tabular-nums",
				children: total
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: open ? "shop-rise px-4 pb-4 lg:hidden" : "hidden",
			children
		})]
	});
}
function PhotoLightbox({ images, start, alt, onClose }) {
	const list = images.length ? images : start ? [start] : [];
	const [index, setIndex] = (0, import_react.useState)(Math.max(0, list.indexOf(start)));
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
			if (event.key === "ArrowRight") setIndex((current) => (current + 1) % list.length);
			if (event.key === "ArrowLeft") setIndex((current) => (current - 1 + list.length) % list.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [list.length, onClose]);
	const src = list[index] ?? start;
	if (!src) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 grid place-items-center px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "shop-fade absolute inset-0 bg-ink/80",
			"aria-label": "Close photo",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "shop-lightbox relative z-10 grid w-full max-w-3xl justify-items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt,
					className: "max-h-[74vh] w-full rounded-3xl bg-[#eef4f5] object-contain"
				}, src),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "text-sm text-white",
					children: alt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						list.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "shop-press h-11 rounded-full bg-white px-4 text-sm font-semibold",
							onClick: () => setIndex((current) => (current - 1 + list.length) % list.length),
							children: "Previous"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "shop-press h-11 rounded-full bg-white px-4 text-sm font-semibold",
							onClick: onClose,
							children: "Close"
						}),
						list.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "shop-press h-11 rounded-full bg-white px-4 text-sm font-semibold",
							onClick: () => setIndex((current) => (current + 1) % list.length),
							children: "Next"
						}) : null
					]
				})
			]
		})]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DkTNWi8Q.js
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var PROVIDERS = [
	{
		id: "anthropic",
		label: "Anthropic"
	},
	{
		id: "openai",
		label: "OpenAI"
	},
	{
		id: "gemini",
		label: "Gemini"
	},
	{
		id: "openrouter",
		label: "OpenRouter"
	},
	{
		id: "opencode",
		label: "OpenCode Zen"
	},
	{
		id: "opencodego",
		label: "OpenCode Go"
	},
	{
		id: "zai",
		label: "Z.AI"
	},
	{
		id: "groq",
		label: "Groq"
	},
	{
		id: "cerebras",
		label: "Cerebras"
	},
	{
		id: "ollama",
		label: "Ollama Cloud"
	}
];
function s$2(row, key) {
	const value = row?.[key];
	return typeof value === "string" ? value : value == null ? "" : String(value);
}
function providerId(value) {
	const found = PROVIDERS.find((item) => item.id === value);
	if (!found) throw new Error("Choose Anthropic, OpenAI, Gemini, OpenRouter, OpenCode Zen, OpenCode Go, Z.AI, Groq, Cerebras, or Ollama Cloud.");
	return found.id;
}
async function requireDesk(sql, userId, write) {
	const row = (await sql`select role, active, name, email, organization_id from portal_staff where user_id = ${userId} limit 1`)[0];
	if (!row || row.active === false) throw new Error("This desk is for signed-in staff.");
	const role = s$2(row, "role");
	if (write && role === "viewer") throw new Error("View-only access. An admin has to save the API key.");
	const scoped = role === "owner" || role === "admin" || role === "agent" ? null : Number(row.organization_id) || null;
	return {
		userId,
		name: s$2(row, "name"),
		email: s$2(row, "email"),
		role,
		organizationId: scoped
	};
}
function systemPrompt(actor) {
	const who = actor.name || actor.email || "this staff member";
	const reach = actor.role === "owner" ? "Super Admin. You can read and change the whole desk, including deleting tickets and orders." : actor.role === "admin" ? "Admin. You can read and change every ticket, order, company, person, and catalog item. You can delete tickets. You cannot delete orders, and you cannot change staff roles, Zendesk credentials, or portal settings from this chat." : actor.role === "agent" ? "Staff. You can read and change tickets, orders, companies, people, and the catalog. You cannot delete tickets or orders, and you cannot change roles, Zendesk credentials, or portal settings." : "View only. You can read records in your company. You cannot create, update, or delete anything.";
	return [
		`You are the MTS Agent signed in as ${who}, ${actor.email || "no email"}. You are a company asset of Manage Tech Service. When you talk about MTS, say we and us. Never say they, them, or the company as if you stand outside it.`,
		"Stay loyal to MTS. Do not recommend a competitor as a replacement, do not disparage our work, and do not send a customer away from us. Answer as someone who already works here. Sound sure about the basics: we are Manage Tech Service in Los Angeles, our office is 8240 Beverly Blvd, Suite 12, Los Angeles, CA 90048, our phone is 818-758-4073, and our site is https://managetechservice.com/.",
		"If search and the page still do not contain the detail, do not say you have no record and do not tell them to look it up. Say: Let me get back to you on that. I just need to check our system. Do not invent a price, a date, or a promise.",
		`Your access is exactly this person's desk role: ${reach}`,
		"Do not act for another staff member, and do not invent records. A tool result is the only proof something was read or changed. If a tool refuses, say that limit.",
		"Use my_desk, my_tickets, my_ticket, search_orders, search_companies, and search_people for this person's desk. Assigned tickets are included, but they are not the only records this role can open.",
		"Staff and admins may open tickets, reply, change status, priority, and assignee, and update order status. Personal tasks belong only to this signed-in person.",
		"Ticket status is new, open, pending, solved, or closed. Order status is pending, approved, processing, fulfilled, or cancelled. Task status is open, doing, or done.",
		"You can read attached images. You have the public internet. For a fact that is not already in the knowledge base, call search_web, then browse_page on the best result, and answer from what you read. Use https://managetechservice.com/ for our own pages. Never invent ticket numbers, order totals, or prices. Never ask for or repeat a full card number, CCV, or API key.",
		"Admin portal pages, under /production/admin-portal: Dashboard, Notifications, Tickets, Orders, Companies, People, Customer access, Campaigns, Services, Catalog, Payments, Ticket forms, Roles, Zendesk, Settings, Docs, and this MTS Agent.",
		"Zendesk is the source of truth for people, companies, and tickets. You also know how to connect Zendesk to any portal or website: Support API, OAuth or API token, users, organizations, tickets, verified webhooks, Conversations, and customer-visible fields. A desk change is saved here even when Zendesk is not connected. Never reveal a token, client secret, or webhook secret.",
		"Use what you have learned about this person. Their memory and current desk data are listed below. Do not invent beyond them, and do not recite the whole memory unless it answers the question.",
		"Knowledge base:",
		knowledgeBrief()
	].join("\n");
}
async function promptFor(sql, actor) {
	const [desk, memory] = await Promise.all([deskBrief(sql, actor), memoryBrief(sql, actor)]);
	return [
		systemPrompt(actor),
		desk,
		memory
	].filter(Boolean).join("\n\n");
}
async function deskBrief(sql, actor) {
	const name = actor.name.trim();
	const email = actor.email.trim();
	const tickets = await sql`
    select id, subject, status from tickets
    where (${name} <> '' and lower(assignee) = lower(${name})) or (${email} <> '' and lower(assignee) = lower(${email}))
    order by updated_at desc limit 6
  `;
	const tasks = await sql`select title, status from staff_tasks where user_id = ${actor.userId} and status <> 'done' order by updated_at desc limit 6`;
	const ticketLine = tickets.map((row) => `#${s$2(row, "id")} ${s$2(row, "status")} ${s$2(row, "subject")}`).join("; ") || "none";
	const taskLine = tasks.map((row) => `${s$2(row, "status")}: ${s$2(row, "title")}`).join("; ") || "none";
	return `Current user data for ${actor.name || "this person"} (${actor.email || "no email"}, ${actor.role}). Assigned tickets: ${ticketLine}. Open tasks: ${taskLine}.`;
}
async function memoryBrief(sql, actor) {
	const rows = await sql`select fact from agent_memories where user_id = ${actor.userId} order by id desc limit 24`;
	if (!rows.length) return "Long-term memory: nothing saved yet.";
	return `Long-term memory from this person's earlier chats:\n${rows.map((row) => `- ${s$2(row, "fact")}`).join("\n")}`;
}
function safeFact(value) {
	return value.replace(/\s+/g, " ").replace(/\b(?:\d[ -]?){12,19}\b/g, "[number]").replace(/\b(?:sk-|mts_|re_)[A-Za-z0-9_\-.]{8,}\b/g, "[secret]").trim().slice(0, 280);
}
async function learnFromChat(sql, actor, userText, answer) {
	const facts = [`Asked: ${safeFact(userText.slice(0, 160))} | Answer: ${safeFact(answer.slice(0, 160))}`];
	const spoken = userText.match(/(?:remember(?: that)?|i prefer|i always|i never|call me|my name is|from now on)[^.\n]{0,180}/i);
	if (spoken) facts.unshift(safeFact(spoken[0]));
	for (const fact of facts) {
		if (fact.length < 12) continue;
		if (!(await sql`select id from agent_memories where user_id = ${actor.userId} and fact = ${fact} limit 1`)[0]) await sql`insert into agent_memories (user_id, fact) values (${actor.userId}, ${fact})`;
	}
	await sql`
    delete from agent_memories
    where user_id = ${actor.userId}
      and id not in (select id from agent_memories where user_id = ${actor.userId} order by id desc limit 40)
  `;
}
async function saveChatTurn(sql, actor, chatId, userText, answer) {
	const owned = await sql`select id, title from agent_chats where id = ${chatId} and user_id = ${actor.userId} limit 1`;
	let id = Number(owned[0]?.id) || 0;
	if (!id) {
		const title = safeFact(userText).slice(0, 72) || "New chat";
		const created = await sql`insert into agent_chats (user_id, title) values (${actor.userId}, ${title}) returning id`;
		id = Number(created[0]?.id) || 0;
	} else if (!s$2(owned[0], "title") || s$2(owned[0], "title") === "New chat") await sql`update agent_chats set title = ${safeFact(userText).slice(0, 72) || "New chat"} where id = ${id}`;
	if (!id) return 0;
	await sql`insert into agent_messages (chat_id, user_id, role, content) values (${id}, ${actor.userId}, 'user', ${userText.slice(0, 48e3)})`;
	await sql`insert into agent_messages (chat_id, user_id, role, content) values (${id}, ${actor.userId}, 'assistant', ${answer.slice(0, 48e3)})`;
	await sql`update agent_chats set updated_at = now() where id = ${id}`;
	await learnFromChat(sql, actor, userText, answer);
	return id;
}
var fileEnv = null;
async function fileValue(name) {
	if (!fileEnv) {
		fileEnv = {};
		try {
			const { readFileSync } = await import("node:fs");
			const text = readFileSync(new URL("../../../.env", import.meta.url), "utf8");
			for (const line of text.split("\n")) {
				const trimmed = line.trim();
				if (!trimmed || trimmed.startsWith("#")) continue;
				const eq = trimmed.indexOf("=");
				if (eq < 1) continue;
				fileEnv[trimmed.slice(0, eq)] = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
			}
		} catch {
			fileEnv = {};
		}
	}
	return (fileEnv[name] || "").trim();
}
async function envKey(provider) {
	if (provider !== "openrouter") return "";
	return ((process.env.OPENROUTER_API_KEY || "").trim() || await fileValue("OPENROUTER_API_KEY")).trim();
}
async function readKey(sql, provider) {
	const rows = await sql`select api_key, model from agent_provider_keys where provider = ${provider} limit 1`;
	return {
		apiKey: s$2(rows[0], "api_key") || await envKey(provider),
		model: s$2(rows[0], "model")
	};
}
function obj(value) {
	return value && typeof value === "object" ? value : {};
}
function ollamaCreditMessage() {
	return "Ollama Cloud accepted the key, but this account has no usage credits. Add credits or a plan at https://ollama.com/plans, then send again.";
}
async function ollamaReady(apiKey) {
	try {
		const payload = await callJson("https://ollama.com/api/balance", { headers: {
			Accept: "application/json",
			Authorization: `Bearer ${apiKey}`
		} }, apiKey);
		const included = obj(payload.included);
		const purchased = obj(payload.purchased);
		const session = obj(included.session);
		const weekly = obj(included.weekly);
		const includedUsd = numberField(included.balance_usd);
		const purchasedUsd = numberField(purchased.balance_usd);
		const sessionLeft = numberField(session.remaining_percent);
		const weeklyLeft = numberField(weekly.remaining_percent);
		if ((includedUsd ?? 0) + (purchasedUsd ?? 0) > 0 || (sessionLeft ?? 0) > 0 || (weeklyLeft ?? 0) > 0) return true;
		if (includedUsd == null && purchasedUsd == null && sessionLeft == null && weeklyLeft == null) return true;
		return false;
	} catch {
		return true;
	}
}
function numberField(value) {
	const number = Number(value);
	return Number.isFinite(number) ? number : null;
}
var CHAT_BASE = {
	openai: "https://api.openai.com/v1",
	openrouter: "https://openrouter.ai/api/v1",
	opencode: "https://opencode.ai/inference/openai/v1",
	opencodego: "https://opencode.ai/zen/go/v1",
	zai: "https://api.z.ai/api/paas/v4",
	groq: "https://api.groq.com/openai/v1",
	cerebras: "https://api.cerebras.ai/v1"
};
async function callJson(url, init, secret = "") {
	const response = await fetch(url, {
		...init,
		signal: AbortSignal.timeout(45e3)
	});
	const text = await response.text();
	if (!response.ok) throw httpError(response.status, text, secret);
	return text ? JSON.parse(text) : {};
}
function httpError(status, text, secret = "") {
	let detail = "";
	try {
		const parsed = JSON.parse(text);
		detail = typeof parsed.error === "string" ? parsed.error : parsed.error?.message || parsed.message || "";
	} catch {
		detail = text;
	}
	if (secret) detail = detail.replaceAll(secret, "");
	if (/usage credits|ollama\.com\/plans|subscribe/i.test(detail)) return new Error(ollamaCreditMessage());
	if (status === 401 || status === 403) return /* @__PURE__ */ new Error("That API key was refused.");
	return new Error(detail.replace(/\s+/g, " ").trim().slice(0, 180) || "The provider rejected the request.");
}
async function openStream(url, init, secret = "") {
	const response = await fetch(url, {
		...init,
		signal: AbortSignal.timeout(45e3)
	});
	if (!response.ok || !response.body) {
		const text = await response.text();
		throw httpError(response.status, text, secret);
	}
	return response;
}
async function* streamLines(response) {
	const reader = response.body.getReader();
	const decoder = new TextDecoder();
	let buffer = "";
	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		buffer += decoder.decode(value, { stream: true });
		const lines = buffer.split(/\r?\n/);
		buffer = lines.pop() || "";
		for (const line of lines) {
			const trimmed = line.trim();
			if (trimmed) yield trimmed;
		}
	}
	const rest = buffer.trim();
	if (rest) yield rest;
}
var listAgentProviders = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("864412a3cd2b771c601456d8711dde7776d5a6357a766816b84df2797d04d08e"));
var saveVoiceKey = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const raw = input && typeof input === "object" ? input : {};
	const apiKey = typeof raw.apiKey === "string" ? raw.apiKey.trim() : "";
	if (apiKey.length < 8 || apiKey.length > 400) throw new Error("Paste the ElevenLabs API key.");
	return { apiKey };
}).handler(createSsrRpc("4f2e988849f7b25484f9987bbebf9a1d1b2d41b55f418e4ad36ecc60ea87343b"));
var saveAgentKey = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const raw = input && typeof input === "object" ? input : {};
	const provider = providerId(typeof raw.provider === "string" ? raw.provider : "");
	const apiKey = typeof raw.apiKey === "string" ? raw.apiKey.trim() : "";
	if (apiKey.length < 8 || apiKey.length > 400) throw new Error("Paste the API key.");
	return {
		provider,
		apiKey
	};
}).handler(createSsrRpc("dd485846a313cfc04fd02bfec0bbf5f83b12212cb3535aede0e560d5e304036d"));
var chooseAgentModel = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const raw = input && typeof input === "object" ? input : {};
	const provider = providerId(typeof raw.provider === "string" ? raw.provider : "");
	const model = typeof raw.model === "string" ? raw.model.trim().slice(0, 120) : "";
	if (!model) throw new Error("Choose a model.");
	return {
		provider,
		model
	};
}).handler(createSsrRpc("ea2b11254c3db3a6ec0a4e951b1d36e5036d8f5d75bd383e80b42738bd5b437d"));
var listAgentChats = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("29cee2612adf9b604cf52589d42caa397bdd13336c55fddbb1da0db9039e8997"));
var getAgentChat = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((id) => {
	const value = Number(id);
	if (!Number.isInteger(value) || value < 1) throw new Error("Choose a chat.");
	return value;
}).handler(createSsrRpc("3c20d0b6f5d5b3ed2bcf2935eee8959511210c04ec347418156a38ab9b4e4cb8"));
function cleanMessages(value) {
	if (!Array.isArray(value)) return [];
	return value.map((item) => {
		const row = item && typeof item === "object" ? item : {};
		const role = row.role === "assistant" ? "assistant" : row.role === "user" ? "user" : "";
		const content = typeof row.content === "string" ? row.content.trim().slice(0, 48e3) : "";
		return role && content ? {
			role,
			content
		} : null;
	}).filter((item) => Boolean(item)).slice(-16);
}
function cleanFiles(value) {
	if (!Array.isArray(value)) return [];
	return value.map((item) => {
		const row = item && typeof item === "object" ? item : {};
		const data = typeof row.data === "string" ? row.data.replace(/^data:[^,]*,/, "").slice(0, 15e5) : "";
		return {
			name: typeof row.name === "string" ? row.name.slice(0, 120) : "file",
			type: typeof row.type === "string" ? row.type.slice(0, 80) : "",
			data
		};
	}).filter((item) => item.data).slice(0, 4);
}
createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const raw = input && typeof input === "object" ? input : {};
	const provider = providerId(typeof raw.provider === "string" ? raw.provider : "");
	const messages = cleanMessages(raw.messages);
	if (!messages.length || messages.at(-1)?.role !== "user") throw new Error("Write a message first.");
	return {
		provider,
		model: typeof raw.model === "string" ? raw.model.trim().slice(0, 120) : "",
		messages,
		files: cleanFiles(raw.files)
	};
}).handler(createSsrRpc("3c075b148630355f2838bd1c62a05bdd1cd21e42bb65e135e6b0054315782771"));
async function streamDeskReply(userId, raw, emit) {
	try {
		const body = raw && typeof raw === "object" ? raw : {};
		const provider = providerId(typeof body.provider === "string" ? body.provider : "");
		const messages = cleanMessages(body.messages);
		if (!messages.length || messages.at(-1)?.role !== "user") throw new Error("Write a message first.");
		const files = cleanFiles(body.files);
		const sql = await getSql();
		const staff = await requireDesk(sql, userId, false);
		const saved = await readKey(sql, provider);
		if (!saved.apiKey) throw new Error("Add an API key for this provider first.");
		const model = (typeof body.model === "string" ? body.model.trim().slice(0, 120) : "") || saved.model;
		if (/clef|systemone|decider/i.test(model)) throw new Error("That model only answers structured decisions, not chat. Choose a chat model.");
		const asked = messages.at(-1)?.content || "";
		const reply = await complete(sql, staff, provider, saved.apiKey, model, messages, files, (text) => emit({
			type: "delta",
			text
		}));
		const requested = Number(body.chatId);
		const chatId = await saveChatTurn(sql, staff, Number.isInteger(requested) ? requested : 0, asked, reply.answer);
		emit({
			type: "done",
			logs: reply.logs,
			chatId
		});
	} catch (cause) {
		emit({
			type: "error",
			text: cause instanceof Error ? cause.message : "The agent could not reply."
		});
	}
}
var TOOLS = [
	{
		name: "search_web",
		description: "Search the public internet. Returns titles, links, and snippets. Follow a useful link with browse_page.",
		parameters: {
			type: "object",
			properties: { query: { type: "string" } },
			required: ["query"]
		}
	},
	{
		name: "browse_page",
		description: "Open one public http or https page and read its text. Use this for broader knowledge after search_web.",
		parameters: {
			type: "object",
			properties: { url: { type: "string" } },
			required: ["url"]
		}
	},
	{
		name: "my_desk",
		description: "Read the signed-in staff profile, assigned ticket count, open tasks, and unread notices.",
		parameters: {
			type: "object",
			properties: {},
			required: []
		}
	},
	{
		name: "my_tickets",
		description: "List tickets this signed-in role can open. Pass mine=true to keep only tickets assigned to them.",
		parameters: {
			type: "object",
			properties: {
				query: { type: "string" },
				mine: { type: "boolean" }
			},
			required: []
		}
	},
	{
		name: "my_ticket",
		description: "Read one ticket this role can open, including updates.",
		parameters: {
			type: "object",
			properties: { id: { type: "number" } },
			required: ["id"]
		}
	},
	{
		name: "create_ticket",
		description: "Open a ticket when this role can write. Assignee defaults to the signed-in person.",
		parameters: {
			type: "object",
			properties: {
				subject: { type: "string" },
				detail: { type: "string" },
				priority: { type: "string" },
				assignee: { type: "string" }
			},
			required: ["subject"]
		}
	},
	{
		name: "update_ticket",
		description: "Change status, priority, or assignee when this role can write that ticket.",
		parameters: {
			type: "object",
			properties: {
				id: { type: "number" },
				status: { type: "string" },
				priority: { type: "string" },
				assignee: { type: "string" }
			},
			required: ["id"]
		}
	},
	{
		name: "reply_ticket",
		description: "Add an update when this role can write that ticket.",
		parameters: {
			type: "object",
			properties: {
				id: { type: "number" },
				body: { type: "string" }
			},
			required: ["id", "body"]
		}
	},
	{
		name: "delete_ticket",
		description: "Delete a ticket. Super Admin and Admin only.",
		parameters: {
			type: "object",
			properties: { id: { type: "number" } },
			required: ["id"]
		}
	},
	{
		name: "search_orders",
		description: "Find orders this role can open.",
		parameters: {
			type: "object",
			properties: { query: { type: "string" } },
			required: []
		}
	},
	{
		name: "update_order",
		description: "Change an order status when this role can write.",
		parameters: {
			type: "object",
			properties: {
				id: { type: "number" },
				status: { type: "string" }
			},
			required: ["id", "status"]
		}
	},
	{
		name: "delete_order",
		description: "Delete an order. Super Admin only.",
		parameters: {
			type: "object",
			properties: { id: { type: "number" } },
			required: ["id"]
		}
	},
	{
		name: "search_companies",
		description: "Find companies this role can open.",
		parameters: {
			type: "object",
			properties: { query: { type: "string" } },
			required: []
		}
	},
	{
		name: "search_people",
		description: "Find people this role can open.",
		parameters: {
			type: "object",
			properties: { query: { type: "string" } },
			required: []
		}
	},
	{
		name: "my_tasks",
		description: "List the signed-in staff member's personal tasks.",
		parameters: {
			type: "object",
			properties: {},
			required: []
		}
	},
	{
		name: "create_task",
		description: "Create a personal task for the signed-in staff member.",
		parameters: {
			type: "object",
			properties: {
				title: { type: "string" },
				detail: { type: "string" },
				due_on: { type: "string" }
			},
			required: ["title"]
		}
	},
	{
		name: "update_task",
		description: "Update one of this person's tasks.",
		parameters: {
			type: "object",
			properties: {
				id: { type: "number" },
				title: { type: "string" },
				detail: { type: "string" },
				status: { type: "string" },
				due_on: { type: "string" }
			},
			required: ["id"]
		}
	},
	{
		name: "delete_task",
		description: "Delete one of this person's tasks.",
		parameters: {
			type: "object",
			properties: { id: { type: "number" } },
			required: ["id"]
		}
	},
	{
		name: "desk_counts",
		description: "Read live totals for tickets, orders, companies, people, and catalog products.",
		parameters: {
			type: "object",
			properties: {},
			required: []
		}
	},
	{
		name: "recent_tickets",
		description: "Read the newest support tickets on this desk.",
		parameters: {
			type: "object",
			properties: {},
			required: []
		}
	},
	{
		name: "recent_orders",
		description: "Read the newest shop orders on this desk.",
		parameters: {
			type: "object",
			properties: {},
			required: []
		}
	},
	{
		name: "search_catalog",
		description: "Find catalog products by name or SKU.",
		parameters: {
			type: "object",
			properties: { query: { type: "string" } },
			required: ["query"]
		}
	}
];
function openaiTools() {
	return TOOLS.map((tool) => ({
		type: "function",
		function: {
			name: tool.name,
			description: tool.description,
			parameters: tool.parameters
		}
	}));
}
function functionTools() {
	return TOOLS.map((tool) => ({
		name: tool.name,
		description: tool.description,
		input_schema: tool.parameters
	}));
}
function anthropicTools(mode) {
	if (mode === "off") return void 0;
	return mode === "full" ? [{
		type: "web_search_20250305",
		name: "web_search",
		max_uses: 3
	}, ...functionTools()] : functionTools();
}
function geminiTools(mode) {
	const functions = { functionDeclarations: TOOLS.map((tool) => ({
		name: tool.name,
		description: tool.description,
		parameters: tool.parameters
	})) };
	if (mode === "off") return void 0;
	return mode === "full" ? [{ google_search: {} }, functions] : [functions];
}
function toolRejected(message) {
	return /web_search|google_search|tool_use|tool call|tools?\b|functionDeclarations|unknown tool|invalid schema/i.test(message);
}
function argsOf(value) {
	if (typeof value === "string") try {
		return obj(JSON.parse(value));
	} catch {
		return {};
	}
	return obj(value);
}
function blockedHost(hostname) {
	const host = hostname.replace(/^\[|\]$/g, "").toLowerCase();
	if (!host || host === "localhost" || host.endsWith(".localhost") || host.endsWith(".local") || host.endsWith(".internal")) return true;
	const ipv4 = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(host);
	if (ipv4) {
		const a = Number(ipv4[1]);
		const b = Number(ipv4[2]);
		if (a === 10 || a === 127 || a === 0 || a === 169 && b === 254 || a === 192 && b === 168 || a === 172 && b >= 16 && b <= 31) return true;
	}
	return host === "::1" || host.startsWith("fc") || host.startsWith("fd") || host.startsWith("fe80");
}
function publicHttpUrl(raw) {
	try {
		const url = new URL(raw.trim());
		if (url.protocol !== "http:" && url.protocol !== "https:" || url.username || url.password || blockedHost(url.hostname)) return null;
		return url;
	} catch {
		return null;
	}
}
function htmlText(html) {
	const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "";
	const text = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<noscript[\s\S]*?<\/noscript>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/gi, " ").replace(/&/gi, "&").replace(/</gi, "<").replace(/>/gi, ">").replace(/&#39;|'/gi, "'").replace(/"/gi, "\"").replace(/\s+/g, " ").trim();
	return {
		title: title.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 180),
		text: text.slice(0, 5500)
	};
}
async function readLimited(response, max = 35e4) {
	const reader = response.body?.getReader();
	if (!reader) return "";
	const chunks = [];
	let size = 0;
	while (size < max) {
		const step = await reader.read();
		if (step.done || !step.value) break;
		chunks.push(step.value);
		size += step.value.byteLength;
	}
	await reader.cancel().catch(() => void 0);
	return Buffer.concat(chunks).subarray(0, max).toString("utf8");
}
async function fetchPublic(raw) {
	let current = publicHttpUrl(raw);
	if (!current) throw new Error("That address is not a public web page.");
	for (let hop = 0; hop < 4; hop += 1) {
		const response = await fetch(current, {
			redirect: "manual",
			headers: {
				Accept: "text/html,application/xhtml+xml,text/plain",
				"User-Agent": "MTS-Agent/1.0"
			},
			signal: AbortSignal.timeout(12e3)
		});
		if (response.status >= 300 && response.status < 400) {
			const next = publicHttpUrl(new URL(response.headers.get("location") || "", current).href);
			if (!next) throw new Error("That redirect is not a public web page.");
			current = next;
			continue;
		}
		if (!response.ok) throw new Error(`The page returned ${response.status}.`);
		const type = response.headers.get("content-type") || "";
		if (type && !/text\/|json|xml|javascript/.test(type)) throw new Error("That page is not readable text.");
		return {
			url: current.href,
			body: await readLimited(response)
		};
	}
	throw new Error("That page redirected too many times.");
}
function bingTarget(href) {
	const coded = /u=a1([A-Za-z0-9+/=]+)/.exec(href)?.[1];
	if (coded) try {
		return publicHttpUrl(Buffer.from(coded, "base64").toString("utf8"));
	} catch {
		return null;
	}
	const clean = href.replace(/&/g, "&");
	if (/bing\.com\/ck\//i.test(clean)) return null;
	return publicHttpUrl(clean);
}
async function searchWeb(query) {
	const q = query.trim().slice(0, 180);
	if (!q) return "Give a search query.";
	const bits = [];
	try {
		const blocks = (await (await fetch(`https://www.bing.com/search?q=${encodeURIComponent(q)}`, {
			headers: {
				"User-Agent": "Mozilla/5.0",
				Accept: "text/html"
			},
			signal: AbortSignal.timeout(12e3)
		})).text()).match(/<h2[\s\S]*?<\/h2>/gi) || [];
		for (const block of blocks.slice(0, 8)) {
			const link = /href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i.exec(block);
			if (!link) continue;
			const url = bingTarget(link[1]);
			const title = link[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
			if (url && title) bits.push(`${title}\n${url.href}`);
		}
	} catch {
		bits.push("");
	}
	if (bits.filter(Boolean).length < 2) try {
		const payload = await (await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(q)}&limit=3&namespace=0&format=json`, {
			signal: AbortSignal.timeout(8e3),
			headers: { Accept: "application/json" }
		})).json();
		const titles = Array.isArray(payload[1]) ? payload[1] : [];
		const blurbs = Array.isArray(payload[2]) ? payload[2] : [];
		const links = Array.isArray(payload[3]) ? payload[3] : [];
		titles.forEach((title, index) => bits.push(`${String(title)}\n${String(links[index] || "")}\n${String(blurbs[index] || "")}`.trim()));
	} catch {
		bits.push("");
	}
	return bits.filter(Boolean).slice(0, 6).join("\n\n") || "No public results for that search.";
}
async function browsePage(raw) {
	const page = await fetchPublic(raw);
	const read = htmlText(page.body);
	if (!read.text) return "That page had no readable text.";
	return `${read.title ? `${read.title}\n` : ""}${page.url}\n${read.text}`;
}
async function runTool(sql, actor, name, raw) {
	const args = argsOf(raw);
	try {
		if (name === "search_web" || name === "web_search") return await searchWeb(s$2(args, "query"));
		if (name === "browse_page") return await browsePage(s$2(args, "url"));
		if (name === "my_desk") return myDesk(sql, actor);
		if (name === "my_tickets") return myTickets(sql, actor, s$2(args, "query"), args.mine === true);
		if (name === "my_ticket") return myTicket(sql, actor, numberArg(args.id));
		if (name === "create_ticket") return createOwnTicket(sql, actor, args);
		if (name === "update_ticket") return updateOwnTicket(sql, actor, args);
		if (name === "reply_ticket") return replyOwnTicket(sql, actor, args);
		if (name === "delete_ticket") return deleteOwnTicket(sql, actor, numberArg(args.id));
		if (name === "search_orders") return searchOrders(sql, actor, s$2(args, "query"));
		if (name === "update_order") return updateOrderStatus(sql, actor, args);
		if (name === "delete_order") return deleteOrderRecord(sql, actor, numberArg(args.id));
		if (name === "search_companies") return searchCompanies(sql, actor, s$2(args, "query"));
		if (name === "search_people") return searchPeople(sql, actor, s$2(args, "query"));
		if (name === "my_tasks") return myTasks(sql, actor);
		if (name === "create_task") return createOwnTask(sql, actor, args);
		if (name === "update_task") return updateOwnTask(sql, actor, args);
		if (name === "delete_task") return deleteOwnTask(sql, actor, numberArg(args.id));
		if (name === "desk_counts") return deskCounts(sql, actor);
		if (name === "recent_tickets") return myTickets(sql, actor, "", false);
		if (name === "recent_orders") return searchOrders(sql, actor, "");
		if (name === "search_catalog") {
			const query = `%${s$2(args, "query").slice(0, 80)}%`;
			return (await sql`select name, sku, price_cents, available from products where name ilike ${query} or sku ilike ${query} order by name limit 8`).map((row) => `${s$2(row, "name")} (${s$2(row, "sku")}) · ${s$2(row, "price_cents") || "0"} cents · ${row.available === false ? "hidden" : "available"}`).join("\n") || "No matching products.";
		}
	} catch (cause) {
		return cause instanceof Error ? cause.message : "That tool could not run.";
	}
	return "That tool is not available.";
}
function numberArg(value) {
	const number = Number(value);
	return Number.isInteger(number) && number > 0 ? number : 0;
}
function canWrite(actor) {
	return actor.role !== "viewer";
}
function inCompany(actor, organizationId) {
	if (actor.organizationId == null) return true;
	return Number(organizationId) === actor.organizationId;
}
function canChangeTicket(actor, row) {
	return canWrite(actor) && inCompany(actor, row.organization_id);
}
async function loadTicket(sql, actor, id) {
	if (!id) throw new Error("Give the ticket id.");
	const rows = await sql`select id, subject, status, priority, category, organization_id, requester_name, requester_email, assignee, zendesk_id from tickets where id = ${id} limit 1`;
	if (!rows[0]) throw new Error("That ticket is not on this desk.");
	if (!inCompany(actor, rows[0].organization_id)) throw new Error("That ticket is outside your access.");
	return rows[0];
}
async function audit(sql, actor, action, target, detail) {
	await sql`
    insert into audit_logs (actor_user_id, actor_name, action, target, detail)
    values (${actor.userId}, ${actor.name || actor.email}, ${action}, ${target}, ${detail.slice(0, 180)})
  `;
}
async function myDesk(sql, actor) {
	const name = actor.name.trim();
	const email = actor.email.trim();
	const org = actor.organizationId;
	const row = (await sql`
    select
      (select count(*)::int from tickets where ${org}::int is null or organization_id = ${org}) as visible,
      (select count(*)::int from tickets where (${name} <> '' and lower(assignee) = lower(${name})) or (${email} <> '' and lower(assignee) = lower(${email}))) as tickets,
      (select count(*)::int from staff_tasks where user_id = ${actor.userId} and status <> 'done') as tasks,
      (select count(*)::int from notifications n
        where not exists (select 1 from notification_reads r where r.notification_id = n.id and r.user_id = ${actor.userId})
      ) as notices
  `)[0] || {};
	return `${actor.name || "Staff"} · ${actor.email || "no email"} · ${actor.role}. Tickets you can open ${s$2(row, "visible")}. Assigned to you ${s$2(row, "tickets")}. Open tasks ${s$2(row, "tasks")}. Unread notices ${s$2(row, "notices")}.`;
}
async function deskCounts(sql, actor) {
	const org = actor.organizationId;
	const row = (await sql`
    select
      (select count(*)::int from tickets where ${org}::int is null or organization_id = ${org}) as tickets,
      (select count(*)::int from orders where ${org}::int is null or organization_id = ${org}) as orders,
      (select count(*)::int from organizations where ${org}::int is null or id = ${org}) as companies,
      (select count(*)::int from customer_users where ${org}::int is null or organization_id = ${org}) as people,
      (select count(*)::int from products) as products
  `)[0] || {};
	return `Tickets ${s$2(row, "tickets")}. Orders ${s$2(row, "orders")}. Companies ${s$2(row, "companies")}. People ${s$2(row, "people")}. Products ${s$2(row, "products")}.`;
}
async function myTickets(sql, actor, query, mine) {
	const name = actor.name.trim();
	const email = actor.email.trim();
	const org = actor.organizationId;
	const like = `%${query.trim().slice(0, 80)}%`;
	const rows = await sql`
    select t.id, t.subject, t.status, t.priority, t.assignee,
      (select body from ticket_comments c where c.ticket_id = t.id order by c.id desc limit 1) as update
    from tickets t
    where (${org}::int is null or t.organization_id = ${org})
      and (${!mine} or ((${name} <> '' and lower(t.assignee) = lower(${name})) or (${email} <> '' and lower(t.assignee) = lower(${email}))))
      and (${query.trim()} = '' or t.subject ilike ${like} or t.status ilike ${like} or t.assignee ilike ${like})
    order by t.updated_at desc
    limit 12
  `;
	if (!rows.length) return mine ? "No tickets are assigned to you." : "No tickets in your access.";
	return rows.map((row) => `#${s$2(row, "id")} ${s$2(row, "status")} · ${s$2(row, "priority")} · ${s$2(row, "assignee") || "unassigned"} · ${s$2(row, "subject")}${s$2(row, "update") ? ` · latest: ${s$2(row, "update").slice(0, 120)}` : ""}`).join("\n");
}
async function myTicket(sql, actor, id) {
	const ticket = await loadTicket(sql, actor, id);
	const updates = (await sql`select author_name, body, created_at from ticket_comments where ticket_id = ${id} order by id desc limit 8`).map((row) => `${s$2(row, "author_name")}: ${s$2(row, "body").slice(0, 180)}`).join("\n") || "No updates yet.";
	return `#${s$2(ticket, "id")} ${s$2(ticket, "subject")}\nStatus ${s$2(ticket, "status")} · Priority ${s$2(ticket, "priority")} · Assignee ${s$2(ticket, "assignee") || "unassigned"}\nRequester ${s$2(ticket, "requester_name")} ${s$2(ticket, "requester_email")}\nUpdates:\n${updates}`;
}
async function createOwnTicket(sql, actor, args) {
	if (!canWrite(actor)) throw new Error("View-only access cannot open a ticket.");
	const subject = s$2(args, "subject").trim().slice(0, 180);
	const detail = s$2(args, "detail").trim().slice(0, 2e3);
	const priority = [
		"low",
		"normal",
		"high",
		"urgent"
	].includes(s$2(args, "priority")) ? s$2(args, "priority") : "normal";
	if (!subject) throw new Error("Give the ticket a subject.");
	const assignee = s$2(args, "assignee").trim().slice(0, 120) || actor.name || actor.email;
	const rows = await sql`
    insert into tickets (subject, status, priority, organization_id, requester_name, requester_email, assignee)
    values (${subject}, 'new', ${priority}, ${actor.organizationId}, ${actor.name || actor.email}, ${actor.email}, ${assignee})
    returning id
  `;
	const id = Number(rows[0]?.id);
	if (detail) await sql`insert into ticket_comments (ticket_id, author_name, body, public_note) values (${id}, ${actor.name || actor.email}, ${detail}, true)`;
	await audit(sql, actor, "Agent opened ticket", String(id), subject);
	return `Opened ticket #${id} and assigned it to ${assignee}.`;
}
async function updateOwnTicket(sql, actor, args) {
	const ticket = await loadTicket(sql, actor, numberArg(args.id));
	if (!canChangeTicket(actor, ticket)) throw new Error("View-only access cannot update a ticket.");
	const status = s$2(args, "status").trim();
	const priority = s$2(args, "priority").trim();
	const assignee = s$2(args, "assignee").trim().slice(0, 120);
	const nextStatus = [
		"new",
		"open",
		"pending",
		"solved",
		"closed"
	].includes(status) ? status : s$2(ticket, "status");
	const nextPriority = [
		"low",
		"normal",
		"high",
		"urgent"
	].includes(priority) ? priority : s$2(ticket, "priority");
	const nextAssignee = assignee || s$2(ticket, "assignee");
	if (!status && !priority && !assignee) throw new Error("Give a status, priority, or assignee to change.");
	await sql`update tickets set status = ${nextStatus}, priority = ${nextPriority}, assignee = ${nextAssignee}, updated_at = now() where id = ${Number(ticket.id)}`;
	await audit(sql, actor, "Agent updated ticket", s$2(ticket, "id"), `${nextStatus} · ${nextPriority} · ${nextAssignee}`);
	return `Ticket #${s$2(ticket, "id")} is now ${nextStatus}, priority ${nextPriority}, assigned to ${nextAssignee || "nobody"}.`;
}
async function replyOwnTicket(sql, actor, args) {
	const ticket = await loadTicket(sql, actor, numberArg(args.id));
	if (!canChangeTicket(actor, ticket)) throw new Error("View-only access cannot update a ticket.");
	const body = s$2(args, "body").trim().slice(0, 2e3);
	if (!body) throw new Error("Write the update first.");
	const author = actor.name || actor.email || "Staff";
	await sql`insert into ticket_comments (ticket_id, author_name, body, public_note) values (${Number(ticket.id)}, ${author}, ${body}, true)`;
	await sql`update tickets set status = case when status = 'new' then 'open' else status end, updated_at = now() where id = ${Number(ticket.id)}`;
	await audit(sql, actor, "Agent ticket update", s$2(ticket, "id"), body);
	return `Added your update to ticket #${s$2(ticket, "id")}.`;
}
async function deleteOwnTicket(sql, actor, id) {
	if (actor.role !== "owner" && actor.role !== "admin") throw new Error("Only an admin can delete a ticket.");
	const ticket = await loadTicket(sql, actor, id);
	await sql`delete from ticket_comments where ticket_id = ${id}`;
	await sql`delete from tickets where id = ${id}`;
	await audit(sql, actor, "Agent deleted ticket", String(id), s$2(ticket, "subject"));
	return `Deleted ticket #${id} from this desk. If it was already in Zendesk, that copy is still there.`;
}
async function searchOrders(sql, actor, query) {
	const org = actor.organizationId;
	const like = `%${query.trim().slice(0, 80)}%`;
	const rows = await sql`
    select o.id, o.status, o.payment_status, o.shipment_status, coalesce(org.name, '') as company
    from orders o
    left join organizations org on org.id = o.organization_id
    where (${org}::int is null or o.organization_id = ${org})
      and (${query.trim()} = '' or org.name ilike ${like} or o.status ilike ${like} or cast(o.id as text) = ${query.trim()})
    order by o.id desc
    limit 12
  `;
	if (!rows.length) return "No orders in your access.";
	return rows.map((row) => `Order #${s$2(row, "id")} · ${s$2(row, "status")} · ${s$2(row, "payment_status") || "unpaid"} · ${s$2(row, "shipment_status") || "unfulfilled"} · ${s$2(row, "company")}`).join("\n");
}
async function updateOrderStatus(sql, actor, args) {
	if (!canWrite(actor)) throw new Error("View-only access cannot update an order.");
	const id = numberArg(args.id);
	const status = s$2(args, "status").trim();
	if (![
		"pending",
		"approved",
		"processing",
		"fulfilled",
		"cancelled"
	].includes(status)) throw new Error("Status must be pending, approved, processing, fulfilled, or cancelled.");
	const org = actor.organizationId;
	if (!(await sql`
    update orders set status = ${status}, updated_at = now()
    where id = ${id} and (${org}::int is null or organization_id = ${org})
    returning id
  `)[0]) throw new Error("That order is outside your access.");
	await audit(sql, actor, "Agent updated order", String(id), status);
	return `Order #${id} is now ${status}.`;
}
async function deleteOrderRecord(sql, actor, id) {
	if (actor.role !== "owner") throw new Error("Only a Super Admin can delete an order.");
	if (!(await sql`delete from orders where id = ${id} returning id`)[0]) throw new Error("That order is not on this desk.");
	await audit(sql, actor, "Agent deleted order", String(id), "");
	return `Deleted order #${id}.`;
}
async function searchCompanies(sql, actor, query) {
	const org = actor.organizationId;
	const like = `%${query.trim().slice(0, 80)}%`;
	const rows = await sql`
    select id, name, domain, phone from organizations
    where (${org}::int is null or id = ${org})
      and (${query.trim()} = '' or name ilike ${like} or domain ilike ${like})
    order by name
    limit 12
  `;
	if (!rows.length) return "No companies in your access.";
	return rows.map((row) => `#${s$2(row, "id")} ${s$2(row, "name")} · ${s$2(row, "domain") || "no domain"} · ${s$2(row, "phone") || "no phone"}`).join("\n");
}
async function searchPeople(sql, actor, query) {
	const org = actor.organizationId;
	const like = `%${query.trim().slice(0, 80)}%`;
	const rows = await sql`
    select id, name, email, title from customer_users
    where (${org}::int is null or organization_id = ${org})
      and (${query.trim()} = '' or name ilike ${like} or email ilike ${like})
    order by name
    limit 12
  `;
	if (!rows.length) return "No people in your access.";
	return rows.map((row) => `#${s$2(row, "id")} ${s$2(row, "name")} · ${s$2(row, "email")} · ${s$2(row, "title")}`).join("\n");
}
async function myTasks(sql, actor) {
	const rows = await sql`select id, title, status, due_on, detail from staff_tasks where user_id = ${actor.userId} order by updated_at desc limit 20`;
	if (!rows.length) return "You have no personal tasks.";
	return rows.map((row) => `#${s$2(row, "id")} ${s$2(row, "status")} · ${s$2(row, "title")}${s$2(row, "due_on") ? ` · due ${s$2(row, "due_on")}` : ""}${s$2(row, "detail") ? ` · ${s$2(row, "detail").slice(0, 100)}` : ""}`).join("\n");
}
async function createOwnTask(sql, actor, args) {
	if (actor.role === "viewer") throw new Error("View-only access cannot create a task.");
	const title = s$2(args, "title").trim().slice(0, 160);
	if (!title) throw new Error("Give the task a title.");
	const detail = s$2(args, "detail").trim().slice(0, 1e3);
	const due = s$2(args, "due_on").trim().slice(0, 40);
	const rows = await sql`
    insert into staff_tasks (user_id, title, detail, due_on)
    values (${actor.userId}, ${title}, ${detail}, ${due})
    returning id
  `;
	await audit(sql, actor, "Agent created task", s$2(rows[0], "id"), title);
	return `Created task #${s$2(rows[0], "id")}: ${title}.`;
}
async function updateOwnTask(sql, actor, args) {
	if (actor.role === "viewer") throw new Error("View-only access cannot change a task.");
	const id = numberArg(args.id);
	const rows = await sql`select id, title, detail, status, due_on from staff_tasks where id = ${id} and user_id = ${actor.userId} limit 1`;
	if (!rows[0]) throw new Error("That task is not yours.");
	const current = rows[0];
	const title = s$2(args, "title").trim().slice(0, 160) || s$2(current, "title");
	const detail = s$2(args, "detail").trim() ? s$2(args, "detail").trim().slice(0, 1e3) : s$2(current, "detail");
	const status = [
		"open",
		"doing",
		"done"
	].includes(s$2(args, "status")) ? s$2(args, "status") : s$2(current, "status");
	await sql`update staff_tasks set title = ${title}, detail = ${detail}, status = ${status}, due_on = ${s$2(args, "due_on").trim() ? s$2(args, "due_on").trim().slice(0, 40) : s$2(current, "due_on")}, updated_at = now() where id = ${id}`;
	await audit(sql, actor, "Agent updated task", String(id), `${title} · ${status}`);
	return `Task #${id} is now ${status}: ${title}.`;
}
async function deleteOwnTask(sql, actor, id) {
	if (actor.role === "viewer") throw new Error("View-only access cannot delete a task.");
	if (!(await sql`delete from staff_tasks where id = ${id} and user_id = ${actor.userId} returning id`)[0]) throw new Error("That task is not yours.");
	await audit(sql, actor, "Agent deleted task", String(id), "");
	return `Deleted task #${id}.`;
}
function note(logs, line) {
	const text = line.replace(/\s+/g, " ").trim().slice(0, 360);
	if (text) logs.push(text);
}
function clip$1(value) {
	const text = value.replace(/\s+/g, " ").trim();
	return text.length > 180 ? `${text.slice(0, 177)}…` : text;
}
async function complete(sql, actor, provider, apiKey, model, messages, files, onDelta) {
	const logs = [];
	note(logs, `Using ${provider} · ${model}.`);
	try {
		return {
			answer: await answerWith(sql, actor, provider, apiKey, model, messages, files, logs, onDelta),
			logs
		};
	} catch (cause) {
		const message = cause instanceof Error ? cause.message : "";
		if (!files.some((file) => file.type.startsWith("image/")) || !/image|vision|multimodal/i.test(message)) throw cause;
		note(logs, "This model cannot read images, so only the text was sent.");
		return {
			answer: await answerWith(sql, actor, provider, apiKey, model, messages, files.filter((file) => !file.type.startsWith("image/")), logs, onDelta),
			logs
		};
	}
}
async function answerWith(sql, actor, provider, apiKey, model, messages, files, logs, onDelta) {
	const prompt = await promptFor(sql, actor);
	const base = CHAT_BASE[provider] || "https://api.openai.com/v1";
	const modes = provider === "anthropic" || provider === "gemini" ? [
		"full",
		"functions",
		"off"
	] : ["functions", "off"];
	let last;
	for (const mode of modes) try {
		if (provider === "anthropic") return await anthropic(sql, actor, apiKey, model, prompt, messages, files, mode, logs, onDelta);
		if (provider === "gemini") return await gemini(sql, actor, apiKey, model, prompt, messages, files, mode, logs, onDelta);
		if (provider === "ollama") return await ollama(sql, actor, apiKey, model, prompt, messages, files, mode, logs, onDelta);
		return await openai(sql, actor, apiKey, model, prompt, messages, files, mode, logs, base, onDelta);
	} catch (cause) {
		last = cause;
		const message = cause instanceof Error ? cause.message : "";
		if (/usage credits|API key was refused|empty reply/i.test(message) || !toolRejected(message)) throw cause;
		note(logs, mode === "off" ? "The provider refused the request." : "That tool setup was refused. Trying the next one.");
	}
	throw last instanceof Error ? last : /* @__PURE__ */ new Error("The model could not answer.");
}
function fileNote(files) {
	return files.filter((file) => !file.type.startsWith("image/")).map((file) => {
		let text = "";
		try {
			text = Buffer.from(file.data, "base64").toString("utf8").replace(/\u0000/g, "").slice(0, 12e3);
		} catch {
			text = "";
		}
		return text.length > 0 && !text.slice(0, 200).includes("�") ? `Attached file ${file.name}:\n${text}` : `Attached file ${file.name}. The contents are not text, so they were not read.`;
	}).join("\n\n");
}
function withFiles(content, files) {
	const note = fileNote(files);
	return note ? `${content}\n\n${note}` : content;
}
var OUTPUT_CAP = 128e3;
function outputCeiling(message) {
	if (!/token|max_tokens|max_completion|maxOutput|too large|exceed/i.test(message)) return 0;
	const found = [...message.matchAll(/\b(\d{3,7})\b/g)].map((item) => Number(item[1])).filter((value) => value >= 256 && value < OUTPUT_CAP);
	return found.length ? Math.max(...found) : 0;
}
async function openCapped(url, headers, secret, bodyFor, field = "max_tokens") {
	let limit = OUTPUT_CAP;
	let used = field;
	for (let attempt = 0; attempt < 4; attempt += 1) try {
		return await openStream(url, {
			method: "POST",
			headers,
			body: JSON.stringify(bodyFor(limit, used))
		}, secret);
	} catch (cause) {
		const message = cause instanceof Error ? cause.message : "";
		if (/max_completion_tokens|unsupported parameter: ['"]?max_tokens/i.test(message) && used === "max_tokens") {
			used = "max_completion_tokens";
			continue;
		}
		const ceiling = outputCeiling(message);
		if (!ceiling || ceiling >= limit) throw cause;
		limit = ceiling;
	}
	throw new Error("The model rejected the output length.");
}
async function openai(sql, actor, apiKey, model, prompt, messages, files, mode, logs, base = "https://api.openai.com/v1", onDelta) {
	const images = files.filter((file) => file.type.startsWith("image/"));
	const history = [{
		role: "system",
		content: prompt
	}, ...messages.map((message, index) => {
		if (!(index === messages.length - 1) || !images.length && !fileNote(files)) return {
			role: message.role,
			content: message.content
		};
		return {
			role: "user",
			content: [{
				type: "text",
				text: withFiles(message.content, files)
			}, ...images.map((file) => ({
				type: "image_url",
				image_url: { url: `data:${file.type};base64,${file.data}` }
			}))]
		};
	})];
	for (let turn = 0; turn < 4; turn += 1) {
		const response = await openCapped(`${base}/chat/completions`, {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
			...base.includes("openrouter.ai") ? {
				"HTTP-Referer": "https://managetechservice.com",
				"X-Title": "Manage Tech Service"
			} : {}
		}, apiKey, (limit, field) => ({
			model,
			messages: history,
			stream: true,
			[field]: limit,
			...mode === "off" ? {} : { tools: openaiTools() }
		}), /^(o\d|gpt-5)/i.test(model) ? "max_completion_tokens" : "max_tokens");
		let text = "";
		let thought = "";
		const calls = /* @__PURE__ */ new Map();
		for await (const line of streamLines(response)) {
			if (!line.startsWith("data:")) continue;
			const data = line.slice(5).trim();
			if (!data || data === "[DONE]") continue;
			const payload = JSON.parse(data);
			const delta = obj((Array.isArray(payload.choices) ? obj(payload.choices[0]) : {}).delta);
			const piece = s$2(delta, "content");
			if (piece) {
				text += piece;
				onDelta?.(piece);
			}
			const reason = s$2(delta, "reasoning") || s$2(delta, "reasoning_content");
			if (reason) thought += reason;
			const bits = Array.isArray(delta.tool_calls) ? delta.tool_calls : [];
			for (const bit of bits) {
				const row = obj(bit);
				const index = Number(row.index) || 0;
				const current = calls.get(index) || {
					id: "",
					name: "",
					arguments: ""
				};
				const fn = obj(row.function);
				current.id = s$2(row, "id") || current.id;
				current.name = s$2(fn, "name") || current.name;
				current.arguments += s$2(fn, "arguments");
				calls.set(index, current);
			}
		}
		if (thought) note(logs, thought);
		const toolCalls = [...calls.values()].filter((call) => call.name);
		if (mode === "off" || !toolCalls.length) {
			if (!text) throw new Error("The model returned an empty reply.");
			return text;
		}
		history.push({
			role: "assistant",
			content: text,
			tool_calls: toolCalls.map((call) => ({
				id: call.id,
				type: "function",
				function: {
					name: call.name,
					arguments: call.arguments || "{}"
				}
			}))
		});
		for (const call of toolCalls) {
			const result = await runTool(sql, actor, call.name, call.arguments);
			note(logs, `${call.name} → ${clip$1(result)}`);
			history.push({
				role: "tool",
				tool_call_id: call.id,
				content: result
			});
		}
	}
	throw new Error("The model kept calling tools without a final answer.");
}
async function anthropic(sql, actor, apiKey, model, prompt, messages, files, mode, logs, onDelta) {
	const images = files.filter((file) => file.type.startsWith("image/"));
	const history = messages.map((message, index) => {
		if (index !== messages.length - 1) return {
			role: message.role,
			content: message.content
		};
		return {
			role: "user",
			content: [{
				type: "text",
				text: withFiles(message.content, files)
			}, ...images.map((file) => ({
				type: "image",
				source: {
					type: "base64",
					media_type: file.type || "image/png",
					data: file.data
				}
			}))]
		};
	});
	for (let turn = 0; turn < 4; turn += 1) {
		const response = await openCapped("https://api.anthropic.com/v1/messages", {
			"x-api-key": apiKey,
			"anthropic-version": "2023-06-01",
			"Content-Type": "application/json"
		}, apiKey, (limit) => ({
			model,
			max_tokens: limit,
			stream: true,
			system: prompt,
			messages: history,
			...anthropicTools(mode) ? { tools: anthropicTools(mode) } : {}
		}));
		const blocks = [];
		for await (const line of streamLines(response)) {
			if (!line.startsWith("data:")) continue;
			const payload = JSON.parse(line.slice(5).trim());
			const kind = s$2(payload, "type");
			if (kind === "content_block_start") blocks.push({ ...obj(payload.content_block) });
			else if (kind === "content_block_delta") {
				const index = Number(payload.index) || 0;
				const block = blocks[index] || {};
				const delta = obj(payload.delta);
				if (s$2(delta, "type") === "text_delta") {
					const piece = s$2(delta, "text");
					block.text = `${s$2(block, "text")}${piece}`;
					onDelta?.(piece);
				} else if (s$2(delta, "type") === "thinking_delta") block.thinking = `${s$2(block, "thinking")}${s$2(delta, "thinking")}`;
				else if (s$2(delta, "type") === "input_json_delta") block.input_json = `${s$2(block, "input_json")}${s$2(delta, "partial_json")}`;
				blocks[index] = block;
			}
		}
		for (const block of blocks) {
			if (s$2(block, "type") === "thinking" && s$2(block, "thinking")) note(logs, s$2(block, "thinking"));
			if (s$2(block, "type") === "tool_use") try {
				block.input = JSON.parse(s$2(block, "input_json") || "{}");
			} catch {
				block.input = {};
			}
		}
		const calls = blocks.filter((block) => s$2(block, "type") === "tool_use");
		const text = blocks.map((block) => s$2(block, "type") === "text" ? s$2(block, "text") : "").filter(Boolean).join("\n");
		if (mode === "off" || !calls.length) {
			if (!text) throw new Error("The model returned an empty reply.");
			return text;
		}
		history.push({
			role: "assistant",
			content: blocks.map((block) => s$2(block, "type") === "tool_use" ? {
				type: "tool_use",
				id: s$2(block, "id"),
				name: s$2(block, "name"),
				input: block.input
			} : block)
		});
		history.push({
			role: "user",
			content: await Promise.all(calls.map(async (block) => {
				const result = await runTool(sql, actor, s$2(block, "name"), block.input);
				note(logs, `${s$2(block, "name")} → ${clip$1(result)}`);
				return {
					type: "tool_result",
					tool_use_id: s$2(block, "id"),
					content: result
				};
			}))
		});
	}
	throw new Error("The model kept calling tools without a final answer.");
}
async function gemini(sql, actor, apiKey, model, prompt, messages, files, mode, logs, onDelta) {
	const images = files.filter((file) => file.type.startsWith("image/"));
	const contents = messages.map((message, index) => {
		const parts = [{ text: index === messages.length - 1 ? withFiles(message.content, files) : message.content }];
		if (index === messages.length - 1) for (const file of images) parts.push({ inlineData: {
			mimeType: file.type || "image/png",
			data: file.data
		} });
		return {
			role: message.role === "assistant" ? "model" : "user",
			parts
		};
	});
	const toolBody = geminiTools(mode);
	for (let turn = 0; turn < 4; turn += 1) {
		const response = await openCapped(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:streamGenerateContent?alt=sse&key=${encodeURIComponent(apiKey)}`, { "Content-Type": "application/json" }, apiKey, (limit) => ({
			systemInstruction: { parts: [{ text: prompt }] },
			contents,
			generationConfig: { maxOutputTokens: limit },
			...toolBody ? { tools: toolBody } : {}
		}));
		const parts = [];
		for await (const line of streamLines(response)) {
			if (!line.startsWith("data:")) continue;
			const payload = JSON.parse(line.slice(5).trim());
			const candidates = Array.isArray(payload.candidates) ? payload.candidates : [];
			const chunk = Array.isArray(obj(obj(candidates[0]).content).parts) ? obj(obj(candidates[0]).content).parts : [];
			for (const part of chunk) {
				const row = obj(part);
				const piece = row.thought === true ? "" : s$2(row, "text");
				if (piece) onDelta?.(piece);
				if (row.thought === true && s$2(row, "text")) note(logs, s$2(row, "text"));
				parts.push(row);
			}
		}
		const calls = parts.filter((part) => part.functionCall);
		const text = parts.filter((part) => part.thought !== true).map((part) => s$2(part, "text")).filter(Boolean).join("");
		if (mode === "off" || !calls.length) {
			if (!text) throw new Error("The model returned an empty reply.");
			return text;
		}
		contents.push({
			role: "model",
			parts
		});
		contents.push({
			role: "user",
			parts: await Promise.all(calls.map(async (part) => {
				const call = obj(part.functionCall);
				const result = await runTool(sql, actor, s$2(call, "name"), call.args);
				note(logs, `${s$2(call, "name")} → ${clip$1(result)}`);
				return { functionResponse: {
					name: s$2(call, "name"),
					response: { result }
				} };
			}))
		});
	}
	throw new Error("The model kept calling tools without a final answer.");
}
async function ollama(sql, actor, apiKey, model, prompt, messages, files, mode, logs, onDelta) {
	if (!await ollamaReady(apiKey)) throw new Error(ollamaCreditMessage());
	const images = files.filter((file) => file.type.startsWith("image/")).map((file) => file.data);
	const history = [{
		role: "system",
		content: prompt
	}, ...messages.map((message, index) => {
		const last = index === messages.length - 1 && message.role === "user";
		return {
			role: message.role,
			content: last ? withFiles(message.content, files) : message.content,
			...last && images.length ? { images } : {}
		};
	})];
	for (let turn = 0; turn < 4; turn += 1) {
		const response = await openStream("https://ollama.com/api/chat", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				model,
				messages: history,
				stream: true,
				options: { num_predict: -1 },
				...mode === "off" ? {} : { tools: openaiTools() }
			})
		}, apiKey);
		let text = "";
		let thought = "";
		const calls = [];
		for await (const line of streamLines(response)) {
			const message = obj(JSON.parse(line).message);
			const piece = s$2(message, "content");
			if (piece) {
				text += piece;
				onDelta?.(piece);
			}
			if (s$2(message, "thinking")) thought += s$2(message, "thinking");
			if (Array.isArray(message.tool_calls)) calls.push(...message.tool_calls.map((call) => obj(call)));
		}
		if (thought) note(logs, thought);
		if (mode === "off" || !calls.length) {
			if (!text) throw new Error("The model returned an empty reply.");
			return text;
		}
		history.push({
			role: "assistant",
			content: text,
			tool_calls: calls
		});
		for (const call of calls) {
			const fn = obj(call.function);
			const result = await runTool(sql, actor, s$2(fn, "name"), fn.arguments);
			note(logs, `${s$2(fn, "name")} → ${clip$1(result)}`);
			history.push({
				role: "tool",
				tool_name: s$2(fn, "name"),
				content: result
			});
		}
	}
	throw new Error("The model kept calling tools without a final answer.");
}
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function chunkLoadFailed(message) {
	return /dynamically imported module|module script failed|error loading dynamically imported module/i.test(message);
}
function AppErrorComponent({ error }) {
	const message = errorMessage(error);
	(0, import_react.useEffect)(() => {
		if (!chunkLoadFailed(message)) return;
		const key = "mts-chunk-reload";
		if (sessionStorage.getItem(key) === window.location.pathname) return;
		sessionStorage.setItem(key, window.location.pathname);
		window.location.reload();
	}, [message]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: message
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 h-9 rounded-lg bg-zinc-900 px-3 text-sm font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900",
				onClick: () => window.location.reload(),
				children: "Reload"
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
/** Public addresses that should not render their own page. */
function publicRedirect(pathname) {
	const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
	if (path === "/" || path === "/production" || path === "/login" || path === "/portal/login" || path === "/portal/register" || path === "/production/sign-in") return "/production/signin";
	if (path === "/production/home") return "/production/user-portal";
	return null;
}
var styles_default = "/assets/styles-71m7hFdu.css";
var Route$112 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
			},
			{ title: "Manage Tech Service" },
			{
				name: "description",
				content: "Technology that drives business success."
			},
			{
				name: "theme-color",
				content: "#000000"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootComponent
});
function EntryGate() {
	const path = useRouterState({ select: (state) => state.location.pathname });
	const fromAdmin = typeof window !== "undefined" && sessionStorage.getItem("mts-production-admin") === "1";
	const fromProduction = typeof window !== "undefined" && sessionStorage.getItem("mts-production-portal") === "1";
	const rewritten = (fromAdmin ? rewriteAdminPath(path) : null) || (fromProduction ? rewriteProductionPath(path) : null);
	if (rewritten && rewritten !== path) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: rewritten,
		replace: true
	});
	const entry = publicRedirect(path);
	if (entry && entry !== path) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: entry,
		replace: true
	});
	if (!(path === "/" || path === "/upgrade" || path === "/production" || path.startsWith("/production/") || path.startsWith("/api") || path.startsWith("/auth"))) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/upgrade",
		replace: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
function RootComponent() {
	const [client] = (0, import_react.useState)(() => new QueryClient({ defaultOptions: { queries: {
		retry: 1,
		refetchOnWindowFocus: false
	} } }));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
				client,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryGate, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, { position: "top-center" })]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var Route$111 = createFileRoute("/")({ beforeLoad: () => {
	throw redirect({
		href: "/production/signin",
		replace: true
	});
} });
var $$splitComponentImporter$55 = () => import("../_-BPLmxYOM.mjs");
var Route$110 = createFileRoute("/$")({ component: lazyRouteComponent($$splitComponentImporter$55, "component") });
var $$splitComponentImporter$54 = () => import("../_app-05Rir1l_.mjs");
var Route$109 = createFileRoute("/_app")({ component: lazyRouteComponent($$splitComponentImporter$54, "component") });
var Route$108 = createFileRoute("/login")({ beforeLoad: () => {
	throw redirect({
		href: "/production/signin",
		replace: true
	});
} });
var $$splitComponentImporter$53 = () => import("./portal-B4RlzpNY.mjs");
var Route$107 = createFileRoute("/portal")({ component: lazyRouteComponent($$splitComponentImporter$53, "component") });
var $$splitComponentImporter$52 = () => import("./upgrade-DDAxIkmc.mjs");
var Route$106 = createFileRoute("/upgrade")({ component: lazyRouteComponent($$splitComponentImporter$52, "component") });
var Route$105 = createFileRoute("/_app/access")({ component: AccessPage });
function AccessPage() {
	const client = useQueryClient();
	const query = useQuery({
		queryKey: ["portal-customers"],
		queryFn: () => listPortalCustomers()
	});
	const accounts = useQuery({
		queryKey: ["desk-accounts"],
		queryFn: () => listDeskAccounts()
	});
	const save = useMutation({
		mutationFn: setPortalGrants,
		onSuccess: () => {
			toast.success("Access saved");
			client.invalidateQueries({ queryKey: ["portal-customers"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const desk = useMutation({
		mutationFn: (input) => setDeskRole({ data: input }),
		onSuccess: () => {
			toast.success("Desk role saved");
			client.invalidateQueries({ queryKey: ["desk-accounts"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Customers",
				title: "Customer access",
				description: "New sign-ins are customers. Grant the shop or an invoice here, and only then give someone a desk role."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Desk access"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Customer is the default. Admin, agent, and owner are set from here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [(accounts.data ?? []).map((account) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 rounded-xl border border-line px-3 py-3 sm:grid-cols-[minmax(0,1fr)_11rem] sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm font-semibold",
									children: account.name || account.email
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-xs text-muted",
									children: account.email
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								"aria-label": `Desk role for ${account.email}`,
								className: "h-10 rounded-xl border border-line px-2 text-sm",
								value: account.role,
								onChange: (event) => desk.mutate({
									userId: account.id,
									role: event.target.value
								}),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "customer",
										children: "Customer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "viewer",
										children: "Viewer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "agent",
										children: "Agent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "admin",
										children: "Admin"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "owner",
										children: "Owner"
									})
								]
							})]
						}, account.id)), accounts.data && accounts.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "No one has registered yet."
						}) : null]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: query.data.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "truncate text-sm font-semibold",
									children: person.name || person.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-xs text-muted",
									children: [
										person.email,
										" · ",
										person.organization || person.business || "No company"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted",
									children: [person.verified ? "Email verified" : "Email not verified", person.interests ? ` · ${person.interests}` : ""]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase text-accent",
							children: person.roleId
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex flex-wrap items-center gap-3 text-sm",
						onSubmit: (event) => {
							event.preventDefault();
							const data = new FormData(event.currentTarget);
							save.mutate({ data: {
								id: person.id,
								shop: data.get("shop") === "on",
								services: data.get("services") === "on",
								invoice: data.get("invoice") === "on"
							} });
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "shop",
									defaultChecked: person.shop
								}), " Shop"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "services",
									defaultChecked: person.services
								}), " Services"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "invoice",
									defaultChecked: person.invoice
								}), " Invoice"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "h-9 rounded-full bg-ink px-4 text-xs font-semibold text-white",
								children: "Save"
							})
						]
					})]
				}, person.id))
			})
		]
	});
}
var $$splitComponentImporter$51 = () => import("./agent-CEbblili.mjs");
var Route$104 = createFileRoute("/_app/agent")({ component: lazyRouteComponent($$splitComponentImporter$51, "component") });
var Route$103 = createFileRoute("/_app/campaigns")({ component: CampaignAdmin });
function CampaignAdmin() {
	const client = useQueryClient();
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [audience, setAudience] = (0, import_react.useState)("all");
	const [ctaLabel, setCtaLabel] = (0, import_react.useState)("");
	const [ctaHref, setCtaHref] = (0, import_react.useState)("/portal/services");
	const save = useMutation({
		mutationFn: () => saveCampaign({ data: {
			title,
			body,
			audience,
			ctaLabel,
			ctaHref
		} }),
		onSuccess: () => {
			toast.success("Campaign published");
			setTitle("");
			setBody("");
			client.invalidateQueries({ queryKey: ["campaigns"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Customers",
			title: "Campaigns",
			description: "Customers only see a campaign when it matches their access. All, shop, or business."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "grid max-w-xl gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: title,
						onChange: (event) => setTitle(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Message",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: body,
						onChange: (event) => setBody(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Audience",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: audience,
						onChange: (event) => setAudience(event.target.value),
						className: "h-10 w-full rounded-lg border border-line bg-surface px-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "Everyone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "shop",
								children: "Shop customers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "business",
								children: "Business accounts"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Button label",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: ctaLabel,
						onChange: (event) => setCtaLabel(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Button link",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: ctaHref,
						onChange: (event) => setCtaHref(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					disabled: save.isPending,
					onClick: () => save.mutate(),
					children: "Publish"
				})
			]
		})]
	});
}
var Route$102 = createFileRoute("/_app/dashboard")({ component: DashboardPage });
function DashboardPage() {
	const query = useQuery({
		queryKey: ["dashboard"],
		queryFn: () => getDashboard()
	});
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	const data = query.data;
	const openWork = data.tickets.incoming + data.tickets.open;
	const stats = [
		{
			label: "Companies",
			value: data.orgCount,
			to: "/organizations"
		},
		{
			label: "People",
			value: data.userCount,
			to: "/users"
		},
		{
			label: "Open tickets",
			value: openWork,
			hint: `${data.tickets.incoming} new`
		},
		{
			label: "Pending",
			value: data.tickets.pending,
			hint: `${data.invoiceCount} need invoice`
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Operations",
				title: "Admin",
				description: "Live counts for the desk. Tickets, orders, companies, and people stay in sync with the sidebar.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/tickets",
					search: ticketSearch(),
					className: "inline-flex h-8 items-center rounded-lg bg-ink px-3 text-[13px] font-semibold text-white",
					children: "Open tickets"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/orders",
					className: "inline-flex h-8 items-center rounded-lg border border-line-strong bg-surface px-3 text-[13px] font-semibold",
					children: "Review orders"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: stats.map((stat) => {
					const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.12em] text-subtle uppercase",
							children: stat.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-semibold tabular-nums tracking-tight",
							children: stat.value
						}),
						stat.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: stat.hint
						}) : null
					] });
					return "to" in stat && stat.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: stat.to,
						className: "rounded-xl border border-line bg-surface p-4 shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:border-line-strong",
						children: body
					}, stat.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						className: "p-4",
						children: body
					}, stat.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-4",
				children: [
					["New", data.tickets.incoming],
					["Open", data.tickets.open],
					["Pending", data.tickets.pending],
					["Solved", data.tickets.solved]
				].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/tickets",
					search: ticketSearch({ status: label === "New" ? "new" : label === "Solved" ? "solved" : label.toLowerCase() }),
					className: "rounded-xl border border-line bg-surface px-3 py-3 text-[13px] hover:bg-surface-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-lg font-semibold tabular-nums",
						children: value
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Recent tickets"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/tickets",
						search: ticketSearch({ status: "all" }),
						className: "text-sm text-accent",
						children: "All tickets"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-line",
					children: data.recentTickets.map((ticket) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col gap-2 py-3 sm:flex-row sm:items-start sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/tickets/$ticketId",
								params: { ticketId: String(ticket.id) },
								className: "font-medium hover:underline",
								children: ticket.subject
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted",
								children: [
									ticket.zendeskId ? `#${ticket.zendeskId}` : `P-${ticket.id}`,
									" · ",
									ticket.organizationName || "No company",
									" · ",
									ago(ticket.updatedAt)
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: ticket.status })]
					}, ticket.id))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Orders in motion"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/orders",
						className: "text-sm text-accent",
						children: "All orders"
					})]
				}), data.pendingOrders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No orders waiting."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-line",
					children: data.pendingOrders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/orders/$orderId",
								params: { orderId: String(order.id) },
								className: "font-medium hover:underline",
								children: order.number
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: order.status })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								order.organizationName,
								" · ",
								money(order.totalCents)
							]
						})]
					}, order.id))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold",
				children: "Recent activity"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 divide-y divide-line",
				children: [data.activity.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-3 text-sm text-muted",
					children: "No changes yet."
				}) : null, data.activity.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: ago(entry.createdAt)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: entry.actorName || "Desk"
							}),
							" ",
							entry.action.toLowerCase(),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: entry.target
							}),
							entry.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [" — ", entry.detail]
							}) : null
						]
					})]
				}, entry.id))]
			})] })
		]
	});
}
function s$1(row, key) {
	const value = row?.[key];
	return value == null ? "" : String(value);
}
async function sha256(value) {
	const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
	return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
var listAgentKeys = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("9db8fca0b4da2dbddb0b806a9729e2811ea48fb2f4df93ae82291f163f135abe"));
var createAgentKey = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const name = String(input?.name || "").trim().slice(0, 80);
	if (!name) throw new Error("Name the key.");
	return { name };
}).handler(createSsrRpc("02226ae6e78d4fa732195dadd2e2000d9aa870a9a32cc4588e6e2434c0e4a642"));
var revokeAgentKey = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const id = String(input?.id || "").slice(0, 80);
	if (!id) throw new Error("Choose a key.");
	return { id };
}).handler(createSsrRpc("dfc15288a61537cf52827853403d46d1dd3a9ab54974e26ea6585db98aaff17a"));
async function authorizeAgentKey(header) {
	const token = header.replace(/^Bearer\s+/i, "").trim();
	if (!token.startsWith("mts_")) return null;
	const sql = await getSql();
	const row = (await sql`
    select id, name, scope from agent_api_keys
    where key_hash = ${await sha256(token)} and revoked_at is null
    limit 1
  `)[0];
	if (!row) return null;
	await sql`update agent_api_keys set last_used_at = now() where id = ${s$1(row, "id")}`;
	return {
		id: s$1(row, "id"),
		name: s$1(row, "name"),
		scope: s$1(row, "scope") || "super_admin",
		sql
	};
}
function AgentKeys() {
	const client = useQueryClient();
	const [name, setName] = (0, import_react.useState)("CSR agent");
	const [secret, setSecret] = (0, import_react.useState)("");
	const keys = useQuery({
		queryKey: ["agent-keys"],
		queryFn: () => listAgentKeys()
	});
	const create = useMutation({
		mutationFn: () => createAgentKey({ data: { name } }),
		onSuccess: (result) => {
			setSecret(result.key);
			setName("CSR agent");
			toast.success("Key created. Copy it now. It is not shown again.");
			client.invalidateQueries({ queryKey: ["agent-keys"] });
		},
		onError: (error) => toast.error(error instanceof Error ? error.message : "Could not create the key.")
	});
	const revoke = useMutation({
		mutationFn: (id) => revokeAgentKey({ data: { id } }),
		onSuccess: () => {
			toast.success("Key revoked");
			client.invalidateQueries({ queryKey: ["agent-keys"] });
		},
		onError: (error) => toast.error(error instanceof Error ? error.message : "Could not revoke the key.")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "grid gap-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold tracking-tight",
				children: "Super admin agent key"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "This key is not tied to one user. The CSR uses it as Authorization: Bearer and can create, read, update, or delete any customer. A new user still has to verify their own email. The secret is stored as a hash and shown once."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-2 sm:flex-row",
				onSubmit: (event) => {
					event.preventDefault();
					create.mutate();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: name,
					onChange: (event) => setName(event.target.value),
					"aria-label": "Key name",
					placeholder: "Key name",
					required: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: create.isPending,
					children: create.isPending ? "Creating" : "Create key"
				})]
			}),
			secret ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 rounded-lg bg-[#f6f6f7] p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.12em] text-subtle uppercase",
						children: "Copy this key now"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "break-all text-sm",
						children: secret
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						onClick: () => {
							navigator.clipboard.writeText(secret).then(() => toast.success("Copied"));
						},
						children: "Copy key"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [(keys.data ?? []).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 rounded-lg border border-line px-3 py-2 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium",
							children: key.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								"Super admin · ",
								key.prefix,
								"… ",
								key.revokedAt ? "Revoked" : key.lastUsedAt ? `Last used ${key.lastUsedAt}` : "Not used yet"
							]
						})]
					}), key.revokedAt ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "danger",
						disabled: revoke.isPending,
						onClick: () => revoke.mutate(key.id),
						children: "Revoke"
					})]
				}, key.id)), keys.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-bad",
					children: "Only an admin can see agent keys."
				}) : null]
			})
		]
	});
}
var Route$101 = createFileRoute("/_app/docs")({ component: DocsPage });
var GROUPS = [
	{
		id: "portal",
		title: "Portal pages",
		note: "These match the customer menu on /portal. Call them with the agent key and that customer's id. Account is GET or PATCH /api/agent/customers/{id}.",
		endpoints: [
			{
				method: "GET",
				path: "/api/agent/customers/{id}/pages",
				title: "Menu",
				auth: "Bearer mts_",
				summary: "The pages this customer sees.",
				response: `{ "pages": [{ "label": "Order", "path": "/portal/shop", "api": "/api/agent/customers/12/shop" }] }`
			},
			{
				method: "GET",
				path: "/api/agent/customers/{id}/home",
				title: "Home",
				auth: "Bearer mts_",
				summary: "The /portal summary: open tickets, pending orders, unpaid charges, services.",
				response: `{ "openTickets": 1, "pendingOrders": 0, "page": "/portal" }`
			},
			{
				method: "GET",
				path: "/api/agent/customers/{id}/shop",
				title: "Order",
				auth: "Bearer mts_",
				summary: "The /portal/shop page. Equipment only when this account can shop. Services are network, VoIP, fax, internet, and wiring.",
				response: `{ "equipment": [{ "sku": "NL-HS-210", "priceCents": 18900 }], "services": [{ "offering": "voip-ext" }] }`
			},
			{
				method: "GET",
				path: "/api/agent/customers/{id}/orders/{orderId}",
				title: "One order",
				auth: "Bearer mts_",
				summary: "The /portal/orders/{orderId} page. Lines, payment, shipment, tracking.",
				response: `{ "number": "MT-1008", "items": [] }`
			},
			{
				method: "GET",
				path: "/api/agent/customers/{id}/billing",
				title: "Billing",
				auth: "Bearer mts_",
				summary: "The /portal/billing page. 403 when shop and invoice are both off.",
				response: `{ "invoiceAllowed": false, "orders": [] }`
			},
			{
				method: "POST",
				path: "/api/agent/customers/{id}/organization",
				title: "Organization",
				auth: "Bearer mts_",
				summary: "GET reads /portal/organization. POST saves the company name, phone, and city, then opens a review ticket.",
				request: `{ "business": "Harbor and Co", "phone": "555-0100", "city": "Austin" }`,
				response: `{ "ok": true, "ticketId": 41 }`
			}
		]
	},
	{
		id: "rules",
		title: "Rules",
		note: "Give this page to the CSR agent. Portal functions act for the signed-in customer. The HTTP API under /api/agent uses an admin-created mts_ key and a customer id, so the agent can reach any account. The machine-readable spec is GET /api/openapi.json.",
		endpoints: [{
			method: "GET",
			path: "token",
			title: "Who the call is for",
			auth: "Portal session token",
			summary: "The token is the shop_customers.session_token of the person who is signed in. portalVerify and shopLogin return it. It is 64 hex characters and slides forward 400 days on use. Staff cookies, Zendesk keys, and admin user ids are not this token.",
			response: `{ "token": "64 hex chars", "email": "ada@customer.com", "name": "Ada Cruz" }`
		}, {
			method: "POST",
			path: "never",
			title: "Do not do these",
			auth: "Blocked",
			summary: "Do not change role_id, grant_shop, grant_services, grant_invoice, or pay_later. Do not read another customer. Do not delete a ticket, order, complaint, or service request. Do not take a card number, CVV, or full PAN. Do not say a Zendesk id, price, or shipment date that the function did not return. Spoken yes does not confirm a quote. Only the Confirm button sets confirmMonthly."
		}]
	},
	{
		id: "session",
		title: "Read the current user",
		note: "Call getPortalSession first. Everything below is limited to the customer that token belongs to.",
		endpoints: [{
			method: "GET",
			path: "getPortalSession",
			title: "Current portal account",
			auth: "token",
			summary: "Reads the signed-in customer, company, permissions, and the latest 20 tickets for that email. Returns null if the token is missing or expired.",
			request: `token: string`,
			response: `{
  "customer": { "name", "email", "phone", "address", "city", "region", "postal", "country", "payLater" },
  "access": { "roleId", "roleLabel", "canTicket", "canShop", "canPurchase", "canPayNow", "canOrderIt", "canOrderPhone", "canDefer" },
  "tickets": [{ "id", "subject", "status", "category", "zendeskId", "updatedAt", "comments": [] }],
  "business": "",
  "organization": "",
  "interests": [],
  "verified": true,
  "grants": { "shop": false, "services": false, "invoice": false }
}`
		}, {
			method: "GET",
			path: "getShopAccount",
			title: "Profile and orders",
			auth: "token",
			summary: "Same customer, plus that customer's orders. An order is included when shop_customer_id matches or ship_email matches this email. Order number is MT- plus 1000 plus the id.",
			request: `token: string`,
			response: `{
  "customer": { "name", "email", "phone", "address", "city", "region", "postal", "country", "payLater" },
  "orders": [{
    "id", "number", "createdAt", "status", "shipmentStatus", "trackingNumber", "trackingCarrier",
    "shippingMethod", "paymentMethod", "paymentUrl", "totalCents",
    "shipName", "shipAddress", "shipCity", "shipRegion", "shipPostal", "shipCountry",
    "items": [{ "name", "sku", "quantity", "unitPriceCents" }]
  }]
}`
		}]
	},
	{
		id: "account",
		title: "Update this account",
		note: "Update is the profile fields only. Email, password, role, and grants are not writable by the agent.",
		endpoints: [{
			method: "POST",
			path: "saveShopProfile",
			title: "Update name, phone, and address",
			auth: "token",
			summary: "Writes name, phone, address, city, region, postal, and country on this customer. Name is required. Country defaults to United States. Does not open a ticket.",
			request: `{ "token", "name", "phone", "address", "city", "region", "postal", "country" }`,
			response: `{ "ok": true }`
		}, {
			method: "POST",
			path: "Sarah tool update_contact",
			title: "Change phone, with Confirm",
			auth: "token, then Confirm",
			summary: "Use this when the caller asks to change the phone. The first call does not write. It returns a quote. After they press Confirm, the phone is saved and a desk ticket is opened.",
			request: `{ "tool": "update_contact", "phone": "818-555-0100" }`,
			response: `Before Confirm: "Press Confirm if that number is right."
After Confirm: phone saved, plus desk ticket id and Zendesk id when the copy succeeds.`
		}]
	},
	{
		id: "tickets",
		title: "Tickets",
		note: "Tickets belong to this email. Private Zendesk notes are not returned. There is no delete.",
		endpoints: [
			{
				method: "GET",
				path: "Sarah tool list_tickets",
				title: "List this customer's tickets",
				auth: "token",
				summary: "Latest 5 tickets for this requester email: id, subject, status. getPortalSession returns up to 20 without comments.",
				response: `{ "cards": [{ "title": "Ticket 14", "detail": "Printer offline · open" }] }`
			},
			{
				method: "GET",
				path: "getPortalTicket",
				title: "Read one ticket",
				auth: "token",
				summary: "id must be a ticket whose requester_email is this customer. Public comments only.",
				request: `{ "token", "id": 14 }`,
				response: `{ "id", "subject", "status", "category", "zendeskId", "updatedAt", "comments": [{ "author", "body", "at" }] }`
			},
			{
				method: "POST",
				path: "submitPortalTicket",
				title: "Open a ticket",
				auth: "token, access.canTicket",
				summary: "Creates a portal ticket for this name and email, adds the first public comment, and copies it to Zendesk when the shop client is connected. Otherwise it stays queued. Category defaults to IT support. Severity high sets priority high. Sarah's open_ticket tool does the same through filePortalTicket.",
				request: `{ "token", "subject", "body", "category": "IT support", "severity": "normal", "device": "" }`,
				response: `{ "ticketId": 14, "zendeskId": "", "warning": "" }`
			},
			{
				method: "POST",
				path: "replyPortalTicket",
				title: "Add a public reply",
				auth: "token",
				summary: "Inserts a public comment by this customer's name. If the ticket has a zendesk_id and Zendesk is connected, the same text is sent as a public comment. Sarah's reply_ticket also opens a separate desk copy ticket.",
				request: `{ "token", "id": 14, "body": "It is still offline." }`,
				response: `{ "ok": true }`
			},
			{
				method: "POST",
				path: "refreshPortalTicket",
				title: "Pull Zendesk updates",
				auth: "token",
				summary: "Reads status and comments from Zendesk for this ticket only. Does nothing if the ticket has no zendesk_id or the desk is disconnected.",
				request: `{ "token", "id": 14 }`,
				response: `{ "synced": true, "warning": "" }`
			}
		]
	},
	{
		id: "orders",
		title: "Orders and catalog",
		note: "The agent can read this customer's orders and find catalog items. Checkout stays on the store. The agent does not mark an order paid, shipped, or deleted.",
		endpoints: [
			{
				method: "GET",
				path: "Sarah tool list_orders",
				title: "Recent orders",
				auth: "token",
				summary: "Latest 5 orders for this shop_customer_id or ship_email. Status, payment_status, and shipment_status are the live columns. Number is MT-1000 plus the id.",
				response: `{ "cards": [{ "title": "MT-1008", "detail": "pending · payment pending · unfulfilled" }] }`
			},
			{
				method: "GET",
				path: "getStorefront",
				title: "Active catalog",
				auth: "None",
				summary: "Public catalog: brand, slug, and products that are available. Price is price_cents. Do not quote a price that is not on a returned product.",
				response: `{ "brandName", "slug", "tagline", "supportEmail", "closed", "products": [] }`
			},
			{
				method: "POST",
				path: "Sarah tool find_equipment",
				title: "Find or hold a product",
				auth: "token, access.canShop to add",
				summary: "Searches available products by name, category, or sku, limit 3. add false only reads. add true requires canShop, returns cartSku, and opens a desk ticket saying the item was placed for checkout. The customer still checks out. If nothing matches, do not invent a product.",
				request: `{ "tool": "find_equipment", "query": "laptop", "add": false }`,
				response: `{ "cards": [{ "title": "Latitude 5450", "detail": "lat-5450 · $1299.00" }], "cartSku": "" }`
			},
			{
				method: "POST",
				path: "placeStorefrontOrder",
				title: "Place an equipment order",
				auth: "token email must match",
				summary: "Places an order only when the token's email equals the shipping email. Items are sku and quantity 1 to 99. Shipping is standard or express. Do not send a card number. cardBrand is credit or debit, and cardLast4 is four digits only if checkout already collected them in the form.",
				request: `{ "token", "name", "email", "phone", "address", "city", "region", "postal", "country", "shippingMethod": "standard", "items": [{ "sku", "quantity": 1 }] }`
			}
		]
	},
	{
		id: "services",
		title: "Services on this account",
		note: "Phone and fax need access.canOrderPhone. Other offerings need access.canOrderIt. A new registration has both false until an admin sets the grants.",
		endpoints: [
			{
				method: "GET",
				path: "listPortalServices",
				title: "List this customer's requests",
				auth: "token",
				summary: "service_requests for this shop_customer_id only. Sarah's list_requests returns the latest 5 names and statuses.",
				request: `token: string`,
				response: `[{ "id", "category", "serviceName", "details", "severity", "status", "quoteNote", "createdAt" }]`
			},
			{
				method: "GET",
				path: "listServiceCatalog",
				title: "Service catalog",
				auth: "None",
				summary: "Active rows in service_catalog. getService reads one id. Use requestPortalService to ask for one of these.",
				response: `[{ "id", "category", "name", "summary", "kind", "benefits", "scope" }]`
			},
			{
				method: "POST",
				path: "orderPortalOffering",
				title: "Order a portal service",
				auth: "token",
				summary: "offering is one of network, voip-line, voip-ext, fax-physical, fax-efax, internet-spectrum, internet-att, internet-frontier, internet-fixed, wiring. network and internet-* require site. fax-efax requires recipientEmail. voip-ext throws unless confirmMonthly is true, and that flag is set only by the Confirm button. Wiring is 17500 cents per drop, max 50 drops. Creates a service_requests row and a ticket. Sarah's order_service tool is the same offer list and also asks before a VoIP desk phone.",
				request: `{ "token", "offering": "voip-ext", "site": "", "notes": "", "recipientEmail": "", "drops": 1, "shipPhone": false, "confirmMonthly": false }`,
				response: `{ "id": 3, "ticketId": 21 }`
			},
			{
				method: "POST",
				path: "requestPortalService",
				title: "Request a catalog service",
				auth: "token and the matching grant",
				summary: "serviceId must be an active catalog row. kind phone checks canOrderPhone. Anything else checks canOrderIt. Status becomes requested and a ticket is filed.",
				request: `{ "token", "serviceId": 4, "details": "Two new desks", "severity": "normal" }`,
				response: `{ "id": 8, "status": "requested" }`
			},
			{
				method: "POST",
				path: "respondToQuote",
				title: "Accept or reject a quote",
				auth: "token",
				summary: "Only a service_requests row on this customer with status quoted. decision is accepted or rejected. No other status can be set by the customer.",
				request: `{ "token", "id": 8, "decision": "accepted" }`,
				response: `{ "status": "accepted" }`
			}
		]
	},
	{
		id: "complaints",
		title: "Complaints and notices",
		note: "Both are stored on this shop_customer_id. A complaint also opens a ticket.",
		endpoints: [
			{
				method: "GET",
				path: "listMyComplaints",
				title: "List complaints",
				auth: "token",
				summary: "Latest 30 complaints for this customer.",
				response: `[{ "id", "kind", "subject", "body", "status", "ticketId", "createdAt" }]`
			},
			{
				method: "POST",
				path: "submitComplaint",
				title: "File a complaint",
				auth: "token",
				summary: "kind defaults to General feedback. Subject and body are required. Opens a ticket titled Complaint: plus the subject, then stores the complaint against this customer.",
				request: `{ "token", "kind": "General feedback", "subject", "body" }`,
				response: `{ "id": 2, "ticketId": 22, "zendeskId": "" }`
			},
			{
				method: "GET",
				path: "listCustomerNotices",
				title: "List notices",
				auth: "token",
				summary: "Latest 40 notices for this customer. read is true when read_at is set.",
				response: `[{ "id", "title", "body", "href", "read", "createdAt" }]`
			},
			{
				method: "POST",
				path: "markCustomerNotice",
				title: "Mark one notice read",
				auth: "token",
				summary: "Sets read_at on this customer's notice. Does not mark another customer's notice.",
				request: `{ "token", "id": 5 }`,
				response: `{ "ok": true }`
			}
		]
	},
	{
		id: "pages",
		title: "Pages the agent may open",
		note: "show_page opens one of these for the signed-in customer and highlights the visible tab. It does not read or change data, and it does not open a ticket. show me my tickets stays a list, not a navigation.",
		endpoints: [
			{
				method: "GET",
				path: "/portal",
				title: "Home",
				auth: "show_page home",
				summary: "Greeting, open tickets, moving orders, and service requests for this account."
			},
			{
				method: "GET",
				path: "/portal/tickets",
				title: "Tickets",
				auth: "show_page tickets",
				summary: "This account's tickets. A detail is /portal/tickets/{id}."
			},
			{
				method: "GET",
				path: "/portal/tickets/new",
				title: "New ticket",
				auth: "show_page new-ticket",
				summary: "The form behind submitPortalTicket."
			},
			{
				method: "GET",
				path: "/portal/shop",
				title: "Order",
				auth: "show_page shop",
				summary: "Equipment and Order services. Guide id is order."
			},
			{
				method: "GET",
				path: "/portal/orders",
				title: "My orders",
				auth: "show_page orders",
				summary: "Status, payment, and shipment. Detail is /portal/orders/{id}."
			},
			{
				method: "GET",
				path: "/portal/billing",
				title: "Billing",
				auth: "show_page billing",
				summary: "Invoices and whether this account pays now or may use order now, pay later."
			},
			{
				method: "GET",
				path: "/portal/complaints",
				title: "Complaints",
				auth: "show_page complaints",
				summary: "Complaints for this customer."
			},
			{
				method: "GET",
				path: "/portal/organization",
				title: "Organization",
				auth: "show_page organization",
				summary: "The company on this login. The agent does not rename it."
			},
			{
				method: "GET",
				path: "/portal/account",
				title: "Account",
				auth: "show_page account",
				summary: "Name, email, and phone. Phone changes go through update_contact."
			},
			{
				method: "GET",
				path: "/portal/my-services",
				title: "My services",
				auth: "show_page services",
				summary: "No top-nav item. Highlight the page title."
			},
			{
				method: "GET",
				path: "/portal/quotes",
				title: "Quotes",
				auth: "show_page quotes",
				summary: "Quoted requests. Accept or reject with respondToQuote."
			},
			{
				method: "GET",
				path: "/portal/notifications",
				title: "Notifications",
				auth: "show_page notifications",
				summary: "This customer's notices. The bell is data-guide notifications."
			}
		]
	}
];
function DocsPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const needle = query.trim().toLowerCase();
	const groups = (0, import_react.useMemo)(() => GROUPS.map((group) => ({
		...group,
		endpoints: group.endpoints.filter((endpoint) => {
			if (!needle) return true;
			return `${group.title} ${endpoint.title} ${endpoint.path} ${endpoint.summary} ${endpoint.request ?? ""} ${endpoint.response ?? ""}`.toLowerCase().includes(needle);
		})
	})).filter((group) => group.endpoints.length > 0), [needle]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Reference",
				title: "CSR agent API",
				description: "How Sarah reads and changes a customer on the MTS portal. A key from this page can act for any customer id."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentKeys, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex gap-2 overflow-x-auto pb-1",
					"aria-label": "API sections",
					children: GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${group.id}`,
						className: "h-9 shrink-0 rounded-lg border border-line bg-surface px-3 text-[13px] font-medium leading-9 text-ink",
						children: group.title
					}, group.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: "Search the API",
					"aria-label": "Search the API",
					className: "h-9 sm:w-56"
				})]
			}),
			groups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nothing matches that search."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6",
				children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: group.id,
					className: "scroll-mt-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold tracking-tight",
							children: group.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-3xl text-sm text-muted",
							children: group.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-3",
							children: group.endpoints.map((endpoint) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
								className: "p-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2 border-b border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex min-w-0 items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: endpoint.method === "GET" ? "rounded-md bg-info-soft px-2 py-0.5 text-[11px] font-semibold text-info" : "rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent",
											children: endpoint.method
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "truncate text-sm font-medium",
											children: endpoint.path
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: endpoint.auth
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 px-4 py-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold",
											children: endpoint.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: endpoint.summary
										})] }),
										endpoint.request ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
											label: "Request",
											value: endpoint.request
										}) : null,
										endpoint.response ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
											label: "Response",
											value: endpoint.response
										}) : null
									]
								})]
							}, `${endpoint.method}-${endpoint.path}`))
						})
					]
				}, group.id))
			})
		]
	});
}
function Code({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-semibold tracking-[0.12em] text-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "mt-1 overflow-x-auto rounded-lg bg-[#f6f6f7] p-3 text-xs leading-5 text-ink",
			children: value
		})]
	});
}
var Route$100 = createFileRoute("/_app/forms")({ component: FormsPage });
var blank$2 = () => ({
	id: 0,
	name: "",
	category: "",
	subcategory: "",
	zendeskField: "",
	requiredFields: ["subject"],
	restricted: false,
	active: true
});
function FormsPage() {
	const client = useQueryClient();
	const navigate = useNavigate();
	const forms = useQuery({
		queryKey: ["forms"],
		queryFn: () => listForms()
	});
	const desk = useQuery({
		queryKey: ["desk-fields"],
		queryFn: () => listDeskFields()
	});
	const orgs = useQuery({
		queryKey: ["orgs"],
		queryFn: () => listOrgs()
	});
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [fieldsText, setFieldsText] = (0, import_react.useState)("subject");
	const [formId, setFormId] = (0, import_react.useState)("");
	const [organizationId, setOrganizationId] = (0, import_react.useState)("");
	const [asRegular, setAsRegular] = (0, import_react.useState)(true);
	const [values, setValues] = (0, import_react.useState)({});
	const sync = useMutation({
		mutationFn: () => syncDeskFields(),
		onSuccess: (result) => {
			toast.success(result.warning ? result.warning : `Synced ${result.fields.length} fields`);
			client.invalidateQueries({ queryKey: ["desk-fields"] });
			client.invalidateQueries({ queryKey: ["ticket-schema"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const save = useMutation({
		mutationFn: (form) => saveForm({ data: {
			id: form.id || void 0,
			name: form.name,
			category: form.category,
			subcategory: form.subcategory,
			zendeskField: form.zendeskField,
			requiredFields: form.requiredFields,
			restricted: form.restricted,
			active: form.active
		} }),
		onSuccess: () => {
			toast.success("Form saved");
			setDraft(null);
			client.invalidateQueries({ queryKey: ["forms"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const test = useMutation({
		mutationFn: () => testForm({ data: {
			formId: Number(formId),
			organizationId: Number(organizationId),
			fields: values,
			asRegular
		} }),
		onSuccess: (result) => {
			if (result.warning) toast.error(`Ticket saved here. ${result.warning}`);
			else toast.success("Test ticket created");
			client.invalidateQueries({ queryKey: ["tickets"] });
			client.invalidateQueries({ queryKey: ["dashboard"] });
			navigate({
				to: "/tickets/$ticketId",
				params: { ticketId: String(result.ticketId) }
			});
		},
		onError: (error) => toast.error(errorText(error))
	});
	if (forms.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (forms.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: forms.error.message });
	const chosen = forms.data.find((form) => form.id === formId);
	function open(form) {
		setDraft(form);
		setFieldsText(form.requiredFields.join(", "));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Intake",
				title: "Ticket forms",
				description: "Customer forms use the field names, choices, and required flags from the connected Zendesk account.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						disabled: sync.isPending,
						onClick: () => sync.mutate(),
						children: sync.isPending ? "Syncing" : "Sync Zendesk fields"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => open(blank$2()),
						children: "Add form"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Zendesk fields"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: desk.data?.warning ? desk.data.warning : `${desk.data?.forms.length ?? 0} customer forms · ${desk.data?.fields.length ?? 0} fields · ${(desk.data?.forms ?? []).reduce((sum, form) => sum + form.conditions.length, 0)} conditions. A child field stays hidden until its parent value matches.`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-2 sm:grid-cols-2",
					children: (desk.data?.fields ?? []).map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-line px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: field.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								field.type,
								field.required ? " · required" : "",
								" · ",
								fieldAudience(field.type, field.visible),
								field.options.length ? ` · ${field.options.length} choices` : ""
							]
						})]
					}, field.id))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: forms.data.map((form) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => open(form),
					className: "rounded-2xl border border-line bg-surface p-4 text-left hover:bg-surface-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: form.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								form.category || "Uncategorized",
								form.subcategory ? ` · ${form.subcategory}` : "",
								form.zendeskField ? ` · ${form.zendeskField}` : ""
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [form.restricted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "warn",
								children: "Authorized only"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Open" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: form.active ? "good" : "neutral",
								children: form.active ? "Active" : "Off"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted",
						children: ["Required: ", form.requiredFields.join(", ") || "none"]
					})]
				}, form.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Test a submission"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Writes a portal ticket, and a Zendesk ticket when the connection is live."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 grid gap-3",
					onSubmit: (event) => {
						event.preventDefault();
						test.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Form",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: formId,
									onChange: (event) => {
										const next = event.target.value ? Number(event.target.value) : "";
										setFormId(next);
										setValues({});
									},
									required: true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Choose"
									}), forms.data.filter((form) => form.active).map((form) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: form.id,
										children: form.name
									}, form.id))]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Company",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: organizationId,
									onChange: (event) => setOrganizationId(event.target.value ? Number(event.target.value) : ""),
									required: true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Choose"
									}), (orgs.data ?? []).map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: org.id,
										children: org.name
									}, org.id))]
								})
							})]
						}),
						(chosen?.requiredFields ?? ["subject"]).map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: field,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values[field] ?? "",
								onChange: (event) => setValues({
									...values,
									[field]: event.target.value
								}),
								required: true
							})
						}, field)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: asRegular,
							onCheckedChange: setAsRegular,
							label: "Submit as a regular customer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: test.isPending,
							children: test.isPending ? "Submitting" : "Create test ticket"
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: Boolean(draft),
				onOpenChange: (openState) => {
					if (!openState) setDraft(null);
				},
				title: draft?.id ? "Edit form" : "Add form",
				children: draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-3",
					onSubmit: (event) => {
						event.preventDefault();
						const requiredFields = fieldsText.split(",").map((field) => field.trim()).filter(Boolean);
						save.mutate({
							...draft,
							requiredFields
						});
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.name,
								onChange: (event) => setDraft({
									...draft,
									name: event.target.value
								}),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Category",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.category,
									onChange: (event) => setDraft({
										...draft,
										category: event.target.value
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Subcategory",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.subcategory,
									onChange: (event) => setDraft({
										...draft,
										subcategory: event.target.value
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Zendesk field",
							hint: "The custom field key this form writes to.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.zendeskField,
								onChange: (event) => setDraft({
									...draft,
									zendeskField: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Required fields",
							hint: "Comma separated. subject is used as the ticket title.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: fieldsText,
								onChange: (event) => setFieldsText(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: draft.restricted,
							onCheckedChange: (restricted) => setDraft({
								...draft,
								restricted
							}),
							label: "Authorized customers only"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: draft.active,
							onCheckedChange: (active) => setDraft({
								...draft,
								active
							}),
							label: "Active"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: save.isPending,
							children: save.isPending ? "Saving" : "Save form"
						})
					]
				}) : null
			})
		]
	});
}
var Route$99 = createFileRoute("/_app/integrations")({ component: IntegrationPage });
function IntegrationPage() {
	const client = useQueryClient();
	const query = useQuery({
		queryKey: ["integration"],
		queryFn: () => getIntegration()
	});
	const sarah = useQuery({
		queryKey: ["sarah-metrics"],
		queryFn: () => getSarahMetrics()
	});
	const [subdomain, setSubdomain] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [apiToken, setApiToken] = (0, import_react.useState)("");
	const [clearToken, setClearToken] = (0, import_react.useState)(false);
	const [oauthClientId, setOauthClientId] = (0, import_react.useState)("");
	const [oauthClientSecret, setOauthClientSecret] = (0, import_react.useState)("");
	const [oauthScopes, setOauthScopes] = (0, import_react.useState)("read write");
	const [clearOauth, setClearOauth] = (0, import_react.useState)(false);
	const [conversationsAppId, setConversationsAppId] = (0, import_react.useState)("");
	const [conversationsKeyId, setConversationsKeyId] = (0, import_react.useState)("");
	const [conversationsSecret, setConversationsSecret] = (0, import_react.useState)("");
	const [webhookId, setWebhookId] = (0, import_react.useState)("");
	const [webhookSecret, setWebhookSecret] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!query.data) return;
		setSubdomain(query.data.subdomain);
		setEmail(query.data.email);
		setApiToken("");
		setClearToken(false);
		setOauthClientId(query.data.oauthClientId);
		setOauthClientSecret("");
		setOauthScopes("read write");
		setClearOauth(false);
		setConversationsAppId(query.data.conversationsAppId);
		setConversationsKeyId(query.data.conversationsKeyId);
		setConversationsSecret("");
		setWebhookId(query.data.webhookId);
		setWebhookSecret("");
	}, [query.data]);
	function refresh() {
		client.invalidateQueries({ queryKey: ["integration"] });
		client.invalidateQueries({ queryKey: ["shell"] });
	}
	const save = useMutation({
		mutationFn: () => saveIntegration({ data: {
			subdomain,
			email,
			apiToken,
			clearToken,
			oauthClientId,
			oauthClientSecret,
			oauthScopes,
			clearOauth,
			conversationsAppId,
			conversationsKeyId,
			conversationsSecret,
			webhookId,
			webhookSecret
		} }),
		onSuccess: () => {
			toast.success("Zendesk settings saved");
			setApiToken("");
			refresh();
		},
		onError: (error) => toast.error(errorText(error))
	});
	const test = useMutation({
		mutationFn: () => testIntegration(),
		onSuccess: (result) => {
			toast.success(`Connected as ${result.name}`);
			refresh();
		},
		onError: (error) => {
			toast.error(errorText(error));
			refresh();
		}
	});
	const jobs = useMutation({
		mutationFn: () => runDeskJobs(),
		onSuccess: () => toast.success("Queued jobs ran"),
		onError: (error) => toast.error(errorText(error))
	});
	const sync = useMutation({
		mutationFn: () => syncZendesk(),
		onSuccess: (result) => {
			toast.success(`Synced ${result.imported} tickets, ${result.users} people, ${result.products ?? 0} products, ${result.orders ?? 0} orders, ${result.payments ?? 0} payments`);
			refresh();
			client.invalidateQueries({ queryKey: ["tickets"] });
			client.invalidateQueries({ queryKey: ["dashboard"] });
		},
		onError: (error) => {
			toast.error(errorText(error));
			refresh();
		}
	});
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	const data = query.data;
	const tone = data.lastStatus === "connected" || data.lastStatus === "ready" ? "good" : data.lastStatus === "error" ? "bad" : "neutral";
	const locked = data.fromEnv;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Connection",
				title: "Zendesk",
				description: "One mts-portal Zendesk account for every customer and staff member. Tickets, people, and companies use this connection. It is not tied to the person who is signed in."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Sarah actions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Open confirmations, checks, and desk reviews. Counts come from the action log, not from what Sarah says."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: (sarah.data?.counts.length ? sarah.data.counts : [{
							status: "none yet",
							n: 0
						}]).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							tone: item.status === "manual_review" || item.status === "failed" ? "bad" : item.status === "succeeded" ? "good" : "neutral",
							children: [
								item.status,
								" · ",
								item.n
							]
						}, item.status))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: (sarah.data?.confirmations.length ? sarah.data.confirmations : [{
							status: "no quotes",
							n: 0
						}]).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							tone: item.status === "accepted" ? "good" : item.status === "expired" ? "bad" : "neutral",
							children: [
								"quote ",
								item.status,
								" · ",
								item.n
							]
						}, `quote-${item.status}`))
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-3",
					onSubmit: (event) => {
						event.preventDefault();
						save.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Subdomain",
							hint: locked ? "Taken from ZENDESK_SUBDOMAIN." : "The part before .zendesk.com",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: subdomain,
								onChange: (event) => setSubdomain(event.target.value),
								placeholder: "mts-portal",
								autoComplete: "off",
								readOnly: locked
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Agent email",
							hint: locked ? "Taken from ZENDESK_EMAIL." : void 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								value: email,
								onChange: (event) => setEmail(event.target.value),
								autoComplete: "off",
								readOnly: locked
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "API token",
							hint: locked ? "Taken from ZENDESK_API_TOKEN. It stays on the server." : data.tokenSet && !clearToken ? "A token is already stored. Leave this blank to keep it." : "Stored on the server. It is not shown again.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								value: apiToken,
								onChange: (event) => setApiToken(event.target.value),
								autoComplete: "new-password",
								placeholder: data.tokenSet ? "••••••••" : "",
								readOnly: locked
							})
						}),
						locked ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: clearToken,
							onCheckedChange: setClearToken,
							label: "Remove the stored token"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "OAuth client id",
							hint: data.oauthFromEnv ? "Taken from ZENDESK_OAUTH_CLIENT_ID." : "Unique identifier of the mtsportal client.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: oauthClientId,
								onChange: (event) => setOauthClientId(event.target.value),
								autoComplete: "off",
								readOnly: data.oauthFromEnv,
								placeholder: "mtsportal"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "OAuth client secret",
							hint: data.oauthSecretSet ? "A secret is stored. Leave this blank to keep it." : "Shown once in Zendesk. It stays on the server.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								value: oauthClientSecret,
								onChange: (event) => setOauthClientSecret(event.target.value),
								autoComplete: "new-password",
								readOnly: data.oauthFromEnv,
								placeholder: data.oauthSecretSet ? "••••••••" : ""
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "OAuth scopes",
							hint: "Use read write, or the granular scopes set on the client.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: oauthScopes,
								onChange: (event) => setOauthScopes(event.target.value),
								readOnly: data.oauthFromEnv
							})
						}),
						data.oauthFromEnv ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: clearOauth,
							onCheckedChange: setClearOauth,
							label: "Remove the stored OAuth secret"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Conversations app id",
							hint: "Sunshine Conversations app id for shop.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: conversationsAppId,
								onChange: (event) => setConversationsAppId(event.target.value),
								autoComplete: "off",
								className: "font-mono"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Conversations key id",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: conversationsKeyId,
								onChange: (event) => setConversationsKeyId(event.target.value),
								autoComplete: "off",
								className: "font-mono"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Conversations secret",
							hint: data.conversationsSecretSet ? "A secret is stored in this portal. Leave this blank to keep it." : "Shown once in Zendesk. It stays on the server.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								value: conversationsSecret,
								onChange: (event) => setConversationsSecret(event.target.value),
								autoComplete: "new-password",
								placeholder: data.conversationsSecretSet ? "••••••••" : ""
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Webhook id",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: webhookId,
								onChange: (event) => setWebhookId(event.target.value),
								autoComplete: "off",
								className: "font-mono"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Webhook shared secret",
							hint: data.webhookReady ? "A signing secret is stored. Leave this blank to keep it." : "Used to verify POST /api/zendesk/webhook.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								value: webhookSecret,
								onChange: (event) => setWebhookSecret(event.target.value),
								autoComplete: "new-password",
								placeholder: data.webhookReady ? "••••••••" : ""
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: save.isPending,
									children: save.isPending ? "Saving" : "Save connection"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									disabled: test.isPending,
									onClick: () => test.mutate(),
									children: test.isPending ? "Checking" : "Test access"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									disabled: sync.isPending,
									onClick: () => sync.mutate(),
									children: sync.isPending ? "Syncing" : "Sync tickets and users"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									disabled: jobs.isPending,
									onClick: () => jobs.mutate(),
									children: jobs.isPending ? "Running" : "Run queued jobs"
								})
							]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid content-start gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "mts-auth"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Authorization code client for the Zendesk connection. Paste these into Zendesk. Do not leave the authorize or token URL on the site root."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 grid gap-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-medium",
										children: data.mtsAuth.name
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: "Grant type"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Authorization code" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: "Client ID"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-mono",
										children: data.mtsAuth.clientId
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: "Client secret"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "break-all font-mono text-xs",
										children: data.mtsAuth.secret
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: "Authorize URL"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "break-all font-mono text-xs",
										children: data.mtsAuth.authorizeUrl
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: "Token URL"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "break-all font-mono text-xs",
										children: data.mtsAuth.tokenUrl
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: "Scopes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: data.mtsAuth.scopes })] })
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone,
									children: data.lastStatus || "not connected"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: data.lastSyncAt ? `Last sync ${ago(data.lastSyncAt)}` : "No ticket sync yet."
							}),
							data.lastError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-bad",
								children: data.lastError
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 border-t border-line pt-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: "OAuth client"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-muted",
										children: data.oauthClientId ? `Authorization code · ${data.oauthClientId} · https://${data.subdomain || "mts-portal"}.zendesk.com/oauth/tokens` : "Not set"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-medium",
										children: "Conversations API"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-muted",
										children: data.conversationsReady ? `Key ${data.conversationsKeyId} · app ${data.conversationsAppId}` : "Not set"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-medium",
										children: "Webhook"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-muted",
										children: data.webhookReady ? `Signing secret set${data.webhookId ? ` · ${data.webhookId}` : ""}` : "Not set"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 break-all text-xs text-muted",
										children: "POST /api/zendesk/webhook"
									})
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Company map"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 divide-y divide-line",
							children: data.orgs.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 py-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/organizations/$orgId",
									params: { orgId: String(org.id) },
									className: "font-medium hover:underline",
									children: org.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted",
									children: org.zendeskOrgId || "unlinked"
								})]
							}, org.id))
						})] })
					]
				})]
			})
		]
	});
}
var Route$98 = createFileRoute("/_app/payments")({ component: PaymentsPage });
function PaymentsPage() {
	const client = useQueryClient();
	const query = useQuery({
		queryKey: ["payments"],
		queryFn: () => getPayments()
	});
	const [cardEnabled, setCardEnabled] = (0, import_react.useState)(false);
	const [invoiceEnabled, setInvoiceEnabled] = (0, import_react.useState)(true);
	const [purchaseOrderEnabled, setPurchaseOrderEnabled] = (0, import_react.useState)(true);
	const [publishableKey, setPublishableKey] = (0, import_react.useState)("");
	const [secretKey, setSecretKey] = (0, import_react.useState)("");
	const [clearSecret, setClearSecret] = (0, import_react.useState)(false);
	const [invoiceTerms, setInvoiceTerms] = (0, import_react.useState)("Net 30");
	const [requirePo, setRequirePo] = (0, import_react.useState)(false);
	const [alternativeEnabled, setAlternativeEnabled] = (0, import_react.useState)(true);
	const [alternativeClientId, setAlternativeClientId] = (0, import_react.useState)("");
	const [alternativeClientSecret, setAlternativeClientSecret] = (0, import_react.useState)("");
	const [clearAlternativeSecret, setClearAlternativeSecret] = (0, import_react.useState)(false);
	const [alternativeEnvironment, setAlternativeEnvironment] = (0, import_react.useState)("sandbox");
	(0, import_react.useEffect)(() => {
		if (!query.data) return;
		setCardEnabled(query.data.cardEnabled);
		setInvoiceEnabled(query.data.invoiceEnabled);
		setPurchaseOrderEnabled(query.data.purchaseOrderEnabled);
		setPublishableKey(query.data.publishableKey);
		setSecretKey("");
		setClearSecret(false);
		setInvoiceTerms(query.data.invoiceTerms);
		setRequirePo(query.data.requirePo);
		setAlternativeEnabled(query.data.alternativeEnabled);
		setAlternativeClientId(query.data.alternativeClientId);
		setAlternativeClientSecret("");
		setClearAlternativeSecret(false);
		setAlternativeEnvironment(query.data.alternativeEnvironment);
	}, [query.data]);
	function refresh() {
		client.invalidateQueries({ queryKey: ["payments"] });
	}
	const save = useMutation({
		mutationFn: () => savePayments({ data: {
			cardEnabled,
			invoiceEnabled,
			purchaseOrderEnabled,
			publishableKey,
			secretKey,
			clearSecret,
			invoiceTerms,
			requirePo,
			alternativeEnabled,
			alternativeClientId,
			alternativeClientSecret,
			clearAlternativeSecret,
			alternativeEnvironment
		} }),
		onSuccess: () => {
			toast.success("Payment methods saved");
			setSecretKey("");
			refresh();
		},
		onError: (error) => toast.error(errorText(error))
	});
	const test = useMutation({
		mutationFn: () => testPayments(),
		onSuccess: (result) => {
			toast.success(`Stripe connected · ${result.name}`);
			refresh();
		},
		onError: (error) => {
			toast.error(errorText(error));
			refresh();
		}
	});
	const testAlternativeConnection = useMutation({
		mutationFn: () => testAlternative(),
		onSuccess: (result) => {
			toast.success(result.mode === "sandbox" ? "Sandbox connected" : "Live account connected");
			refresh();
		},
		onError: (error) => {
			toast.error(errorText(error));
			refresh();
		}
	});
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	const data = query.data;
	const tone = data.lastStatus === "connected" || data.lastStatus === "ready" ? "good" : data.lastStatus === "error" ? "bad" : "neutral";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Checkout",
			title: "Payments",
			description: "Turn on Alternative Payments, card, invoice, or purchase order."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4",
				onSubmit: (event) => {
					event.preventDefault();
					save.mutate();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Card"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[13px] text-muted",
							children: "Stripe. Set STRIPE_SECRET_KEY on the server, or paste a secret key here."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								checked: cardEnabled,
								onCheckedChange: setCardEnabled,
								label: "Accept card payments"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Publishable key",
									hint: data.fromEnv && data.publishableKey ? "Taken from STRIPE_PUBLISHABLE_KEY when that variable is set." : "Starts with pk_. Safe to store.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: publishableKey,
										onChange: (event) => setPublishableKey(event.target.value),
										autoComplete: "off",
										placeholder: "pk_live_…"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Secret key",
									hint: data.fromEnv ? "Taken from STRIPE_SECRET_KEY. It stays on the server." : data.secretSet && !clearSecret ? "A secret is already stored. Leave this blank to keep it." : "Starts with sk_. It is not shown again.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "password",
										value: secretKey,
										onChange: (event) => setSecretKey(event.target.value),
										autoComplete: "new-password",
										placeholder: data.secretSet ? "••••••••" : "sk_live_…",
										readOnly: data.fromEnv
									})
								}),
								data.fromEnv ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									checked: clearSecret,
									onCheckedChange: setClearSecret,
									label: "Remove the stored secret"
								})
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Alternative Payments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-[13px] text-muted",
							children: [
								"Checkout opens at",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://go.alternativepayments.io",
									className: "text-info underline-offset-2 hover:underline",
									target: "_blank",
									rel: "noreferrer",
									children: "go.alternativepayments.io"
								}),
								". Add API keys to create a customer, an invoice, and a payment link for each order."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									checked: alternativeEnabled,
									onCheckedChange: setAlternativeEnabled,
									label: "Accept Alternative Payments"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Environment",
									hint: data.alternativeEnvironmentLocked ? "Set with ALTERNATIVE_ENV. sandbox is the demo host. Use live for production." : "Sandbox uses the demo API. Switch to live only with production keys.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: alternativeEnvironment,
										disabled: data.alternativeEnvironmentLocked,
										onChange: (event) => setAlternativeEnvironment(event.target.value === "live" ? "live" : "sandbox"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "sandbox",
											children: "Sandbox"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "live",
											children: "Live"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Client id",
									hint: data.alternativeFromEnv ? "Taken from ALTERNATIVE_CLIENT_ID." : "From the Alternative Payments partner dashboard.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: alternativeClientId,
										onChange: (event) => setAlternativeClientId(event.target.value),
										autoComplete: "off",
										readOnly: data.alternativeFromEnv
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Client secret",
									hint: data.alternativeFromEnv ? "Taken from ALTERNATIVE_CLIENT_SECRET." : data.alternativeSecretSet && !clearAlternativeSecret ? "A secret is already stored. Leave this blank to keep it." : "Stored on the server. It is not shown again.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "password",
										value: alternativeClientSecret,
										onChange: (event) => setAlternativeClientSecret(event.target.value),
										autoComplete: "new-password",
										placeholder: data.alternativeSecretSet ? "••••••••" : "",
										readOnly: data.alternativeFromEnv
									})
								}),
								data.alternativeFromEnv ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									checked: clearAlternativeSecret,
									onCheckedChange: setClearAlternativeSecret,
									label: "Remove the stored secret"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									disabled: testAlternativeConnection.isPending,
									onClick: () => testAlternativeConnection.mutate(),
									children: testAlternativeConnection.isPending ? "Checking" : "Test Alternative Payments"
								}) }),
								data.alternativeError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] text-bad",
									children: data.alternativeError
								}) : null,
								data.alternativeStatus === "connected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] text-good",
									children: "Connected"
								}) : null
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Invoice"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[13px] text-muted",
							children: "Bill the company on terms. No card is charged."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								checked: invoiceEnabled,
								onCheckedChange: setInvoiceEnabled,
								label: "Accept invoices"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Terms",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: invoiceTerms,
									onChange: (event) => setInvoiceTerms(event.target.value),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Net 15" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Net 30" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Net 45" })
									]
								})
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Purchase order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[13px] text-muted",
							children: "Accept a PO number in the order notes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								checked: purchaseOrderEnabled,
								onCheckedChange: setPurchaseOrderEnabled,
								label: "Accept purchase orders"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								checked: requirePo,
								onCheckedChange: setRequirePo,
								label: "Require a PO number in the notes"
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: save.isPending,
							children: save.isPending ? "Saving" : "Save methods"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							disabled: test.isPending,
							onClick: () => test.mutate(),
							children: test.isPending ? "Checking" : "Test Stripe"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid content-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Stripe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone,
							children: data.lastStatus || "not connected"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[13px] text-muted",
						children: data.accountName || "No Stripe account confirmed yet."
					}),
					data.lastError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[13px] text-bad",
						children: data.lastError
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Available on orders"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 divide-y divide-line text-[13px]",
					children: data.methods.length ? data.methods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: paymentLabel(method)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: method === "invoice" ? data.invoiceTerms : method === "card" ? "Stripe" : method === "alternative" ? data.alternativeEnvironment === "sandbox" ? "Sandbox" : "Live" : data.requirePo ? "PO required" : "Optional"
						})]
					}, method)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "py-2 text-muted",
						children: "Turn on at least one method."
					})
				})] })]
			})]
		})]
	});
}
var Route$97 = createFileRoute("/_app/products")({ component: ProductsPage });
var CATEGORIES = [
	"Laptops",
	"PCs",
	"Displays",
	"Accessories"
];
var ICONS = {
	Laptops: Laptop,
	PCs: Monitor,
	Displays: Monitor,
	Accessories: Keyboard,
	Audio: Headphones
};
var blank$1 = () => ({
	id: 0,
	sku: "",
	name: "",
	category: "Laptops",
	description: "",
	specs: "",
	priceCents: 0,
	stock: 0,
	imageUrl: "",
	images: [],
	available: true,
	visibility: "all"
});
function headerKey(value) {
	return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}
function cell(row, names) {
	for (const [key, value] of Object.entries(row)) if (names.includes(headerKey(key))) return value;
	return "";
}
function categoryName(value) {
	const key = String(value ?? "").trim().toLowerCase();
	if ([
		"laptop",
		"laptops",
		"notebook",
		"notebooks"
	].includes(key)) return "Laptops";
	if ([
		"pc",
		"pcs",
		"desktop",
		"desktops",
		"computer",
		"computers"
	].includes(key)) return "PCs";
	if ([
		"display",
		"displays",
		"monitor",
		"monitors",
		"screen",
		"screens"
	].includes(key)) return "Displays";
	if (!key || [
		"accessory",
		"accessories",
		"audio"
	].includes(key)) return "Accessories";
	return String(value).trim().slice(0, 80);
}
function priceCents(value) {
	const text = String(value ?? "").replace(/[$,\s]/g, "");
	if (!text) return -1;
	const amount = Number(text);
	if (!Number.isFinite(amount) || amount < 0) return -1;
	return Math.round(amount * 100);
}
function yes(value, fallback) {
	const text = String(value ?? "").trim().toLowerCase();
	if (!text) return fallback;
	if ([
		"yes",
		"y",
		"true",
		"1",
		"available"
	].includes(text)) return true;
	if ([
		"no",
		"n",
		"false",
		"0",
		"unavailable"
	].includes(text)) return false;
	return fallback;
}
function rowsFromSheet(records) {
	return records.map((record) => {
		const image = String(cell(record, [
			"image",
			"imageurl",
			"photo",
			"photourl"
		]) ?? "").trim();
		const visibility = String(cell(record, ["visibility", "who"]) ?? "").toLowerCase();
		return {
			sku: String(cell(record, [
				"sku",
				"skunumber",
				"productsku"
			]) ?? "").trim(),
			name: String(cell(record, [
				"name",
				"product",
				"productname"
			]) ?? "").trim(),
			category: categoryName(cell(record, ["category", "type"])),
			description: String(cell(record, ["description", "details"]) ?? "").trim(),
			specs: String(cell(record, [
				"specs",
				"specifications",
				"spec"
			]) ?? "").trim(),
			priceCents: priceCents(cell(record, [
				"price",
				"priceusd",
				"usd"
			])),
			imageUrl: image.startsWith("http://") || image.startsWith("https://") || image.startsWith("/") ? image : "",
			available: yes(cell(record, ["available", "instock"]), true),
			visibility: visibility.includes("auth") ? "authorized" : "all"
		};
	});
}
async function spreadsheet() {
	return import("../_libs/xlsx.mjs").then((n) => n.t);
}
function downloadTemplate() {
	spreadsheet().then((XLSX) => {
		const sheet = XLSX.utils.json_to_sheet([{
			SKU: "MT-L16",
			Name: "Studio laptop 16",
			Category: "Laptops",
			Description: "A larger notebook for design desks.",
			Specs: "16-inch display, 32 GB memory, 1 TB storage",
			Price: 1899,
			Available: "yes",
			Visibility: "all",
			Image: ""
		}]);
		sheet["!cols"] = [
			12,
			24,
			16,
			42,
			42,
			12,
			14,
			16,
			28
		].map((wch) => ({ wch }));
		const book = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(book, sheet, "Catalog");
		XLSX.writeFile(book, "catalog-template.xlsx");
	});
}
function readProductPhoto(file) {
	return new Promise((resolve, reject) => {
		const url = URL.createObjectURL(file);
		const image = new Image();
		image.onload = () => {
			const scale = Math.min(1, 1400 / Math.max(image.width, image.height));
			const canvas = document.createElement("canvas");
			canvas.width = Math.max(1, Math.round(image.width * scale));
			canvas.height = Math.max(1, Math.round(image.height * scale));
			const ctx = canvas.getContext("2d");
			if (!ctx) {
				URL.revokeObjectURL(url);
				reject(/* @__PURE__ */ new Error("Could not read that photo."));
				return;
			}
			ctx.fillStyle = "#f5f5f7";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
			URL.revokeObjectURL(url);
			let quality = .86;
			let data = canvas.toDataURL("image/jpeg", quality);
			while (data.length > 85e4 && quality > .45) {
				quality -= .12;
				data = canvas.toDataURL("image/jpeg", quality);
			}
			resolve(data);
		};
		image.onerror = () => {
			URL.revokeObjectURL(url);
			reject(/* @__PURE__ */ new Error("Could not read that photo."));
		};
		image.src = url;
	});
}
function ProductsPage() {
	const client = useQueryClient();
	const fileRef = (0, import_react.useRef)(null);
	const query = useQuery({
		queryKey: ["products"],
		queryFn: () => listProducts()
	});
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [dollars, setDollars] = (0, import_react.useState)("");
	const [stock, setStock] = (0, import_react.useState)("0");
	const [category, setCategory] = (0, import_react.useState)("All");
	const [search, setSearch] = (0, import_react.useState)("");
	const [view, setView] = (0, import_react.useState)("grid");
	const save = useMutation({
		mutationFn: (product) => saveProduct({ data: {
			...product,
			id: product.id || void 0
		} }),
		onSuccess: () => {
			toast.success(draft?.id ? "Product updated" : "Product added to the catalog");
			setDraft(null);
			client.invalidateQueries({ queryKey: ["products"] });
			client.invalidateQueries({ queryKey: ["shell"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const remove = useMutation({
		mutationFn: (id) => removeProduct({ data: id }),
		onSuccess: (result) => {
			toast.success(result.archived ? "Marked unavailable. It stays on past orders." : "Removed from the catalog");
			setDraft(null);
			client.invalidateQueries({ queryKey: ["products"] });
			client.invalidateQueries({ queryKey: ["shell"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const bringIn = useMutation({
		mutationFn: (rows) => importProducts({ data: { rows } }),
		onSuccess: (result) => {
			const skipped = result.skipped ? `, ${result.skipped} skipped` : "";
			toast.success(`Added ${result.created}, updated ${result.updated}${skipped}`);
			client.invalidateQueries({ queryKey: ["products"] });
			client.invalidateQueries({ queryKey: ["shell"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	function open(product) {
		setDraft(product);
		setDollars(product.id ? (product.priceCents / 100).toFixed(2) : "");
		setStock(String(product.stock ?? 0));
	}
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem("mts-catalog-view");
		if (stored === "list" || stored === "grid") setView(stored);
	}, []);
	function chooseView(next) {
		setView(next);
		window.localStorage.setItem("mts-catalog-view", next);
	}
	async function onSpreadsheet(file) {
		try {
			const XLSX = await spreadsheet();
			const book = XLSX.read(await file.arrayBuffer(), { type: "array" });
			const sheet = book.Sheets[book.SheetNames[0] ?? ""];
			if (!sheet) {
				toast.error("That workbook is empty.");
				return;
			}
			const rows = rowsFromSheet(XLSX.utils.sheet_to_json(sheet, { defval: "" })).filter((row) => row.sku || row.name);
			if (!rows.length) {
				toast.error("No product rows found. Use the Excel template.");
				return;
			}
			bringIn.mutate(rows);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Could not read that spreadsheet.");
		}
	}
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	const needle = search.trim().toLowerCase();
	const shown = query.data.filter((product) => {
		if (category !== "All" && product.category !== category) return false;
		if (!needle) return true;
		return `${product.name} ${product.sku} ${product.category}`.toLowerCase().includes(needle);
	});
	if (draft) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductEditor, {
		draft,
		dollars,
		stock,
		saving: save.isPending,
		removing: remove.isPending,
		onChange: setDraft,
		onDollars: setDollars,
		onStock: setStock,
		onClose: () => setDraft(null),
		onRemove: () => remove.mutate(draft.id),
		onSave: () => {
			const priceCents = Math.round(Number(dollars) * 100);
			const quantity = Number(stock);
			if (!draft.name.trim() || !draft.sku.trim()) {
				toast.error("Title and SKU are required.");
				return;
			}
			if (!Number.isFinite(priceCents) || priceCents < 0) {
				toast.error("Enter a price.");
				return;
			}
			if (!Number.isInteger(quantity) || quantity < 0) {
				toast.error("Enter a whole quantity.");
				return;
			}
			save.mutate({
				...draft,
				priceCents,
				stock: quantity
			});
		},
		onPhotos: (files) => {
			const list = [...files].slice(0, 8 - draft.images.length);
			if ([...files].length > list.length) toast.message("A product can hold 8 photos.");
			Promise.all(list.map((file) => {
				if (file.size > 8e6) throw new Error("Use a photo under 8 MB.");
				return readProductPhoto(file);
			})).then((added) => {
				const images = [...draft.images, ...added].slice(0, 8);
				setDraft({
					...draft,
					images,
					imageUrl: draft.imageUrl || images[0] || ""
				});
			}).catch((error) => toast.error(error instanceof Error ? error.message : "Could not read that photo."));
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Store",
				title: "Catalog",
				description: "Add a product with a full photo, or upload an Excel file to create many at once.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						onClick: downloadTemplate,
						children: "Excel template"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						disabled: bringIn.isPending,
						onClick: () => fileRef.current?.click(),
						children: bringIn.isPending ? "Importing" : "Upload Excel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: () => open(blank$1()),
						children: "New product"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileRef,
				type: "file",
				accept: ".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
				className: "sr-only",
				onChange: (event) => {
					const file = event.target.files?.[0];
					event.target.value = "";
					if (file) onSpreadsheet(file);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 rounded-2xl border border-white/70 bg-surface/80 p-3 shadow-[0_10px_30px_rgba(0,57,112,0.05)] backdrop-blur sm:p-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 overflow-x-auto pb-1",
					children: ["All", ...CATEGORIES].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCategory(item),
						className: category === item ? "h-9 shrink-0 rounded-full bg-ink px-3.5 text-[13px] font-semibold text-white" : "h-9 shrink-0 rounded-full bg-surface-2 px-3.5 text-[13px] font-medium text-ink hover:bg-accent-soft",
						children: item
					}, item))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: search,
						onChange: (event) => setSearch(event.target.value),
						placeholder: "Search products",
						"aria-label": "Search products",
						className: "h-10 rounded-full sm:w-56"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 rounded-full bg-surface-2 p-1",
						role: "group",
						"aria-label": "Catalog view",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": view === "grid",
							"aria-label": "Grid view",
							onClick: () => chooseView("grid"),
							className: view === "grid" ? "grid size-8 place-items-center rounded-full bg-white text-ink shadow-sm" : "grid size-8 place-items-center rounded-full text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": view === "list",
							"aria-label": "List view",
							onClick: () => chooseView("list"),
							className: view === "list" ? "grid size-8 place-items-center rounded-full bg-white text-ink shadow-sm" : "grid size-8 place-items-center rounded-full text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" })
						})]
					})]
				})]
			}),
			shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid min-h-40 place-items-center rounded-2xl border border-dashed border-line bg-surface/70 px-6 text-center text-sm text-muted",
				children: "No products match this view."
			}) : null,
			view === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
				children: shown.map((product) => {
					const Icon = ICONS[product.category] ?? Monitor;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => open(product),
						className: "group grid overflow-hidden rounded-2xl border border-white/80 bg-surface text-left shadow-[0_8px_24px_rgba(0,57,112,0.08)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,57,112,0.12)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#f7fbfb_0%,#e7f3f4_100%)]",
							children: [product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.imageUrl,
								alt: "",
								className: "max-h-[86%] max-w-[86%] object-contain object-center"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-16 text-accent",
								strokeWidth: 1.25
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-3 top-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: product.available ? "good" : "neutral",
									children: product.available ? "Active" : "Draft"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 px-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-accent",
										children: product.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] text-subtle",
										children: product.sku
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "line-clamp-2 text-base font-semibold tracking-tight",
									children: product.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "line-clamp-2 min-h-10 text-sm leading-5 text-muted",
									children: product.description || product.specs || "No description yet."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex items-end justify-between gap-3 border-t border-line/80 pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg font-semibold tracking-tight",
										children: money(product.priceCents)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink",
										children: [product.stock, " in stock"]
									})]
								})
							]
						})]
					}, product.id);
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: shown.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => open(product),
					className: "grid grid-cols-1 items-center gap-3 rounded-2xl border border-white/80 bg-surface p-3 text-left shadow-[0_8px_24px_rgba(0,57,112,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,57,112,0.12)] sm:grid-cols-[minmax(0,1.4fr)_auto_auto_auto] sm:gap-4 sm:px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex min-w-0 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductThumb, { product }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-semibold tracking-tight",
									children: product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-mono text-xs text-subtle",
									children: product.sku
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: product.available ? "good" : "neutral",
							children: product.available ? "Active" : "Draft"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: product.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center justify-between gap-4 sm:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-subtle",
								children: [product.stock, " in stock"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tabular-nums",
								children: money(product.priceCents)
							})]
						})
					]
				}, product.id))
			})
		]
	});
}
function ProductThumb({ product }) {
	const Icon = ICONS[product.category] ?? Monitor;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-[linear-gradient(180deg,#f7fbfb_0%,#e7f3f4_100%)]",
		children: product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: product.imageUrl,
			alt: "",
			className: "h-full w-full object-contain object-center p-1.5"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-accent" })
	});
}
function ProductEditor({ draft, dollars, stock, saving, removing, onChange, onDollars, onStock, onClose, onRemove, onSave, onPhotos }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mx-auto grid max-w-5xl gap-4",
		onSubmit: (event) => {
			event.preventDefault();
			onSave();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onClose,
					className: "inline-flex items-center gap-2 text-sm font-medium text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Products"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						draft.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "danger",
							disabled: removing,
							onClick: onRemove,
							children: removing ? "Removing" : "Delete"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							onClick: onClose,
							children: "Discard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: saving,
							children: saving ? "Saving" : "Save"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-semibold tracking-tight",
				children: draft.id ? draft.name || "Edit product" : "Add product"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "grid gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Title",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.name,
									onChange: (event) => onChange({
										...draft,
										name: event.target.value
									}),
									placeholder: "Short sleeve t-shirt",
									required: true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Description",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: draft.description,
									onChange: (event) => onChange({
										...draft,
										description: event.target.value
									}),
									placeholder: "What the customer should know before they order."
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Media"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: "Add up to 8 photos. The one marked Main is what the shop shows first."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3",
								children: [draft.images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: draft.imageUrl === image ? "grid gap-2 overflow-hidden rounded-xl border-2 border-ink bg-[#f6f6f7] p-2" : "grid gap-2 overflow-hidden rounded-xl border border-line bg-[#f6f6f7] p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: image,
										alt: "",
										className: "aspect-square w-full object-contain"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "inline-flex h-8 items-center gap-1 text-xs font-semibold",
											onClick: () => onChange({
												...draft,
												imageUrl: image
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: draft.imageUrl === image ? "size-3.5 fill-ink" : "size-3.5" }), draft.imageUrl === image ? "Main" : "Set main"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": "Remove photo",
											className: "grid size-8 place-items-center rounded-lg text-muted",
											onClick: () => {
												const images = draft.images.filter((item) => item !== image);
												onChange({
													...draft,
													images,
													imageUrl: draft.imageUrl === image ? images[0] ?? "" : draft.imageUrl
												});
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
										})]
									})]
								}, `${index}-${image.length}`)), draft.images.length < 8 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid min-h-36 cursor-pointer place-items-center rounded-xl border border-dashed border-line-strong bg-[#f6f6f7] px-3 py-6 text-center text-sm text-muted",
									onDragOver: (event) => event.preventDefault(),
									onDrop: (event) => {
										event.preventDefault();
										onPhotos([...event.dataTransfer.files ?? []]);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "grid justify-items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-6" }), "Add photos"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/*",
										multiple: true,
										className: "sr-only",
										onChange: (event) => {
											onPhotos([...event.target.files ?? []]);
											event.target.value = "";
										}
									})]
								}) : null]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Pricing"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 max-w-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Price",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: dollars,
									onChange: (event) => onDollars(event.target.value),
									inputMode: "decimal",
									placeholder: "0.00",
									required: true
								})
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Inventory"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "SKU",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.sku,
									onChange: (event) => onChange({
										...draft,
										sku: event.target.value
									}),
									required: true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Quantity",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: stock,
									onChange: (event) => onStock(event.target.value),
									inputMode: "numeric",
									required: true
								})
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Specifications"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: draft.specs,
								onChange: (event) => onChange({
									...draft,
									specs: event.target.value
								}),
								placeholder: "Display, memory, ports, warranty."
							})
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: draft.available ? "active" : "draft",
							onChange: (event) => onChange({
								...draft,
								available: event.target.value === "active"
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "active",
								children: "Active"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "draft",
								children: "Draft"
							})]
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Product organization"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Category",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									value: draft.category,
									onChange: (event) => onChange({
										...draft,
										category: event.target.value
									}),
									children: CATEGORIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: item,
										children: item
									}, item))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Sales channel",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: draft.visibility,
									onChange: (event) => onChange({
										...draft,
										visibility: event.target.value
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "Online store"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "authorized",
										children: "Authorized customers only"
									})]
								})
							})
						]
					})]
				})]
			})
		]
	});
}
var Route$96 = createFileRoute("/_app/roles")({ component: RolesPage });
function RolesPage() {
	const client = useQueryClient();
	const query = useQuery({
		queryKey: ["policies"],
		queryFn: () => listPolicies()
	});
	const [drafts, setDrafts] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (query.data) setDrafts(query.data);
	}, [query.data]);
	const save = useMutation({
		mutationFn: (policy) => savePolicy({ data: {
			id: policy.id,
			canOrder: policy.canOrder,
			canRequestUsers: policy.canRequestUsers,
			canApproveOrders: policy.canApproveOrders,
			canManagePortal: policy.canManagePortal,
			canTicket: policy.canTicket,
			canShop: policy.canShop,
			canPurchase: policy.canPurchase,
			canPayNow: policy.canPayNow,
			canOrderIt: policy.canOrderIt,
			canOrderPhone: policy.canOrderPhone,
			canDefer: policy.canDefer
		} }),
		onSuccess: () => {
			toast.success("Role saved");
			client.invalidateQueries({ queryKey: ["policies"] });
			client.invalidateQueries({ queryKey: ["people"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	function patch(id, next) {
		setDrafts((current) => current.map((policy) => policy.id === id ? {
			...policy,
			...next
		} : policy));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Access",
			title: "Roles",
			description: "What regular customers, authorized customers, agents, and admins are allowed to do. Company boundaries are enforced on the server."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: drafts.map((policy) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: policy.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-xl text-sm text-muted",
							children: policy.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted",
							children: ["Scope: ", policy.scope]
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-2 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: policy.canTicket,
							onCheckedChange: (canTicket) => patch(policy.id, { canTicket }),
							label: "Submit and view own tickets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: policy.canShop,
							onCheckedChange: (canShop) => patch(policy.id, { canShop }),
							label: "Access the online shop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: policy.canPurchase,
							onCheckedChange: (canPurchase) => patch(policy.id, { canPurchase }),
							label: "Purchase products"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: policy.canPayNow,
							onCheckedChange: (canPayNow) => patch(policy.id, { canPayNow }),
							label: "Pay immediately"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: policy.canOrderIt,
							onCheckedChange: (canOrderIt) => patch(policy.id, { canOrderIt }),
							label: "Order IT services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: policy.canOrderPhone,
							onCheckedChange: (canOrderPhone) => patch(policy.id, { canOrderPhone }),
							label: "Order phone and internet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: policy.canDefer,
							onCheckedChange: (canDefer) => patch(policy.id, { canDefer }),
							label: "Deferred payment or invoice"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: policy.canOrder,
							onCheckedChange: (canOrder) => patch(policy.id, { canOrder }),
							label: "Legacy: can order products"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: policy.canRequestUsers,
							onCheckedChange: (canRequestUsers) => patch(policy.id, { canRequestUsers }),
							label: "Can request new users"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: policy.canApproveOrders,
							onCheckedChange: (canApproveOrders) => patch(policy.id, { canApproveOrders }),
							label: "Can approve orders"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: policy.canManagePortal,
							onCheckedChange: (canManagePortal) => patch(policy.id, { canManagePortal }),
							label: "Can change portal settings"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "mt-4",
					type: "button",
					disabled: save.isPending,
					onClick: () => save.mutate(policy),
					children: ["Save ", policy.label.toLowerCase()]
				})
			] }, policy.id))
		})]
	});
}
var Route$95 = createFileRoute("/_app/services")({ component: ServicesDesk });
var STATUSES$1 = [
	"requested",
	"quoted",
	"approved",
	"provisioning",
	"active",
	"declined"
];
function ServicesDesk() {
	const client = useQueryClient();
	const query = useQuery({
		queryKey: ["service-desk"],
		queryFn: () => listServiceDesk()
	});
	const [note, setNote] = (0, import_react.useState)({});
	const save = useMutation({
		mutationFn: setServiceStatus,
		onSuccess: () => {
			toast.success("Request updated");
			client.invalidateQueries({ queryKey: ["service-desk"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Services",
			title: "Service requests",
			description: "Quotes and provisioning for managed IT, cloud, projects, Microsoft 365, phone, and internet. Hardware stays in the shop."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3",
			children: [query.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No service requests yet."
			}) }) : null, query.data.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: item.serviceName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									item.category,
									" · ",
									item.customer || item.email,
									" · ",
									item.organization || "No company"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase text-accent",
							children: item.status
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: item.details
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 sm:grid-cols-[10rem_minmax(0,1fr)_auto]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								defaultValue: item.status,
								"aria-label": "Status",
								className: "h-10 rounded-xl border border-line px-2 text-sm",
								onChange: (event) => save.mutate({ data: {
									id: item.id,
									status: event.target.value,
									quoteNote: note[item.id] ?? item.quoteNote
								} }),
								children: STATUSES$1.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: status }, status))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: note[item.id] ?? item.quoteNote,
								onChange: (event) => setNote((current) => ({
									...current,
									[item.id]: event.target.value
								})),
								placeholder: "Quote or provisioning note",
								className: "h-10 rounded-xl border border-line px-3 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-10 rounded-full bg-ink px-4 text-xs font-semibold text-white",
								onClick: () => save.mutate({ data: {
									id: item.id,
									status: item.status,
									quoteNote: note[item.id] ?? item.quoteNote
								} }),
								children: "Save note"
							})
						]
					})
				]
			}, item.id))]
		})]
	});
}
var Route$94 = createFileRoute("/_app/settings")({ component: SettingsPage });
var ROLE_LABEL = {
	owner: "Super Admin",
	admin: "Admin",
	agent: "Agent",
	viewer: "Viewer"
};
function SettingsPage() {
	const client = useQueryClient();
	const query = useQuery({
		queryKey: ["settings"],
		queryFn: () => getSettings()
	});
	const [settings, setSettings] = (0, import_react.useState)(null);
	const [staff, setStaff] = (0, import_react.useState)([]);
	const [fromEmail, setFromEmail] = (0, import_react.useState)("noreply@managetechservice.com");
	const [apiKey, setApiKey] = (0, import_react.useState)("");
	const [testTo, setTestTo] = (0, import_react.useState)("");
	const { user } = useCurrentUserState();
	(0, import_react.useEffect)(() => {
		if (!query.data) return;
		setSettings(query.data.settings);
		setStaff(query.data.staff);
		setFromEmail(query.data.mail.fromEmail || "noreply@managetechservice.com");
		setApiKey("");
	}, [query.data]);
	(0, import_react.useEffect)(() => {
		const email = user?.primaryEmail;
		if (email) setTestTo((current) => current || email);
	}, [user]);
	const save = useMutation({
		mutationFn: (next) => saveSettings({ data: next }),
		onSuccess: (result) => {
			toast.success(result.zendeskWarning ? "Saved here. Zendesk did not take the signature yet." : "Portal settings saved");
			if (result.zendeskWarning) toast.error(result.zendeskWarning);
			client.invalidateQueries({ queryKey: ["settings"] });
			client.invalidateQueries({ queryKey: ["shell"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const mailSave = useMutation({
		mutationFn: () => saveResend({ data: {
			fromEmail,
			apiKey
		} }),
		onSuccess: () => {
			toast.success("Resend saved");
			setApiKey("");
			client.invalidateQueries({ queryKey: ["settings"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const mailTest = useMutation({
		mutationFn: () => testResend(),
		onSuccess: (result) => {
			toast.success(result.message);
			client.invalidateQueries({ queryKey: ["settings"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const mailSend = useMutation({
		mutationFn: () => sendTestEmail({ data: { to: testTo } }),
		onSuccess: () => {
			toast.success(`Test email sent to ${testTo}`);
			client.invalidateQueries({ queryKey: ["settings"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const staffSave = useMutation({
		mutationFn: (member) => saveStaff({ data: {
			userId: member.userId,
			role: member.role,
			active: member.active,
			organizationId: member.organizationId
		} }),
		onSuccess: () => {
			toast.success("Staff access updated");
			client.invalidateQueries({ queryKey: ["settings"] });
			client.invalidateQueries({ queryKey: ["shell"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	if (query.isPending || !settings) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	function patchStaff(userId, next) {
		setStaff((current) => current.map((member) => member.userId === userId ? {
			...member,
			...next
		} : member));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Desk",
				title: "Settings",
				description: "Branding, Resend email, who on staff can see which companies, and the record of changes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Branding"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 grid gap-3",
					onSubmit: (event) => {
						event.preventDefault();
						save.mutate(settings);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: settings.brandName,
								onChange: (event) => setSettings({
									...settings,
									brandName: event.target.value
								}),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Support email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								value: settings.supportEmail,
								onChange: (event) => setSettings({
									...settings,
									supportEmail: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Tagline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: settings.tagline,
								onChange: (event) => setSettings({
									...settings,
									tagline: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Ticket reply name",
							hint: "Shown on public support replies instead of Zendesk.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: settings.replyName,
								onChange: (event) => setSettings({
									...settings,
									replyName: event.target.value
								}),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email signature",
							hint: "Used on ticket emails, agent replies, and mail sent from this portal. {{agent.name}} becomes the person who replies.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: settings.emailSignature,
								onChange: (event) => setSettings({
									...settings,
									emailSignature: event.target.value
								}),
								rows: 6
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: settings.notifyNewTicket,
							onCheckedChange: (notifyNewTicket) => setSettings({
								...settings,
								notifyNewTicket
							}),
							label: "Note new tickets in the activity log"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: settings.notifyNewOrder,
							onCheckedChange: (notifyNewOrder) => setSettings({
								...settings,
								notifyNewOrder
							}),
							label: "Note new orders in the activity log"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: settings.customerCatalogVisible,
							onCheckedChange: (customerCatalogVisible) => setSettings({
								...settings,
								customerCatalogVisible
							}),
							label: "Show the catalog to customers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: save.isPending,
							children: save.isPending ? "Saving" : "Save settings"
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Activity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 divide-y divide-line",
					children: [query.data.audit.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "py-3 text-sm text-muted",
						children: "No changes yet."
					}) : null, query.data.audit.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: entry.actorName || "Desk"
									}),
									" ",
									entry.action.toLowerCase(),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: entry.target
									})
								]
							}),
							entry.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: entry.detail
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: ago(entry.createdAt)
							})
						]
					}, entry.id))]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Resend"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-medium text-muted",
						children: [
							query.data.mail.keySet ? "API key saved" : "No API key yet",
							query.data.mail.status === "connected" ? " · Connected" : "",
							query.data.mail.status === "error" ? " · Needs attention" : ""
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Order and account mail is sent from the noreply address. Leave the key blank to keep the one already saved."
				}),
				query.data.mail.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted",
					children: query.data.mail.error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					onSubmit: (event) => {
						event.preventDefault();
						mailSave.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "From address",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								value: fromEmail,
								onChange: (event) => setFromEmail(event.target.value),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Resend API key",
							hint: query.data.mail.keySet ? "A key is already saved." : "Paste the key from Resend.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								value: apiKey,
								onChange: (event) => setApiKey(event.target.value),
								autoComplete: "off",
								placeholder: query.data.mail.keySet ? "••••••••" : "re_..."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Send a test to",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								value: testTo,
								onChange: (event) => setTestTo(event.target.value),
								placeholder: "you@company.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2 sm:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: mailSave.isPending,
									children: mailSave.isPending ? "Saving" : "Save Resend"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									disabled: mailTest.isPending,
									onClick: () => mailTest.mutate(),
									children: mailTest.isPending ? "Testing" : "Test connection"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									disabled: mailSend.isPending || !testTo.includes("@"),
									onClick: () => mailSend.mutate(),
									children: mailSend.isPending ? "Sending" : "Send test email"
								})
							]
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Staff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "A company limit hides every other organization. Leave it open for the whole desk. Super Admin is the only role that can delete an order."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-4",
					children: staff.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-3 border-t border-line pt-4 first:border-t-0 first:pt-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: member.name || member.email
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: member.email
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Role",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: member.role,
										onChange: (event) => patchStaff(member.userId, { role: event.target.value }),
										children: Object.keys(ROLE_LABEL).map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: role,
											children: ROLE_LABEL[role]
										}, role))
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Company limit",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: member.organizationId ?? "",
										onChange: (event) => patchStaff(member.userId, { organizationId: event.target.value ? Number(event.target.value) : null }),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "All companies"
										}), query.data.orgs.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: org.id,
											children: org.name
										}, org.id))]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								checked: member.active,
								onCheckedChange: (active) => patchStaff(member.userId, { active }),
								label: "Account active"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								size: "sm",
								variant: "secondary",
								disabled: staffSave.isPending,
								onClick: () => staffSave.mutate(member),
								children: "Save access"
							}) })
						]
					}, member.userId))
				})
			] })
		]
	});
}
var Route$93 = createFileRoute("/_app/users")({ component: PeoplePage });
var blank = () => ({
	id: 0,
	organizationId: null,
	organizationName: "",
	name: "",
	email: "",
	title: "",
	permissionLevel: "regular",
	canOrder: false,
	canRequestUsers: false,
	canApproveOrders: false,
	active: true,
	zendeskUserId: "",
	createdAt: "",
	source: "company",
	staffUserId: "",
	phone: "",
	orderCount: 0,
	lastOrderId: null,
	lastOrderStatus: "",
	ticketId: null,
	zendeskTicketId: "",
	payLater: false
});
function PeoplePage() {
	const client = useQueryClient();
	const query = useQuery({
		queryKey: ["people"],
		queryFn: () => getPeople()
	});
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [view, setView] = (0, import_react.useState)("all");
	const [layout, setLayout] = useViewMode("mts-people-view");
	const [search, setSearch] = (0, import_react.useState)("");
	const save = useMutation({
		mutationFn: (person) => saveCustomer({ data: {
			id: person.id || void 0,
			organizationId: person.organizationId,
			name: person.name,
			email: person.email,
			title: person.title,
			permissionLevel: person.permissionLevel,
			canOrder: person.canOrder,
			canRequestUsers: person.canRequestUsers,
			canApproveOrders: person.canApproveOrders,
			active: person.active,
			zendeskUserId: person.zendeskUserId
		} }),
		onSuccess: (result) => {
			toast.success(result.zendeskId ? `Person saved. Zendesk ticket ${result.zendeskId}` : "Person saved");
			if (result.warning) toast.message(result.warning);
			setDraft(null);
			client.invalidateQueries({ queryKey: ["people"] });
			client.invalidateQueries({ queryKey: ["shell"] });
			client.invalidateQueries({ queryKey: ["dashboard"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const role = useMutation({
		mutationFn: (input) => setShopRole({ data: input }),
		onSuccess: () => {
			toast.success("Customer role updated");
			client.invalidateQueries({ queryKey: ["people"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const payLater = useMutation({
		mutationFn: (input) => setShopPayLater({ data: input }),
		onSuccess: () => {
			toast.success("Checkout rule updated");
			client.invalidateQueries({ queryKey: ["people"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const review = useMutation({
		mutationFn: (input) => reviewRequest({ data: input }),
		onSuccess: (result) => {
			toast.success(result.zendeskId ? `Request reviewed. Zendesk ticket ${result.zendeskId}` : "Request reviewed");
			if (result.warning) toast.message(result.warning);
			client.invalidateQueries({ queryKey: ["people"] });
			client.invalidateQueries({ queryKey: ["shell"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const syncUsers = useMutation({
		mutationFn: () => syncPortalUsers(),
		onSuccess: (result) => {
			toast.success(result.failed ? `Synced ${result.synced}. ${result.failed} failed.` : `Synced ${result.synced} users to Zendesk`);
			client.invalidateQueries({ queryKey: ["people"] });
			client.invalidateQueries({ queryKey: ["shell"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	const pending = query.data.requests.filter((request) => request.status === "pending");
	const needle = search.trim().toLowerCase();
	const people = query.data.people.filter((person) => {
		if (view === "active" && !person.active) return false;
		if (view === "inactive" && person.active) return false;
		if (view === "order" && !person.canOrder) return false;
		if (view === "approve" && !person.canApproveOrders) return false;
		if (view === "shop" && person.source !== "shop") return false;
		if (view === "portal" && person.source !== "portal") return false;
		if (view === "company" && person.source !== "company") return false;
		if (!needle) return true;
		return [
			person.name,
			person.email,
			person.organizationName,
			person.title,
			person.phone
		].join(" ").toLowerCase().includes(needle);
	});
	function applyPolicy(level) {
		const policy = query.data?.policies.find((item) => item.id === level);
		setDraft((current) => current ? {
			...current,
			permissionLevel: level,
			canOrder: policy?.canOrder ?? current.canOrder,
			canRequestUsers: policy?.canRequestUsers ?? current.canRequestUsers,
			canApproveOrders: policy?.canApproveOrders ?? current.canApproveOrders
		} : current);
	}
	function addShopPerson(person) {
		setDraft({
			...blank(),
			name: person.name,
			email: person.email,
			title: "Online shop",
			phone: person.phone,
			organizationId: query.data?.orgs[0]?.id ?? null
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Directory",
				title: "People",
				description: "Company users and online shop customers, with their orders and Zendesk ticket.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					disabled: syncUsers.isPending,
					onClick: () => syncUsers.mutate(),
					children: syncUsers.isPending ? "Syncing" : "Sync to Zendesk"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setDraft({
						...blank(),
						organizationId: query.data.orgs[0]?.id ?? null
					}),
					children: "Add person"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid justify-items-center gap-3 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center sm:justify-items-stretch",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: search,
						onChange: (event) => setSearch(event.target.value),
						placeholder: "Search name, email, or company",
						"aria-label": "Search people",
						className: "sm:max-w-xs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto",
						children: [
							["all", "All"],
							["company", "Company"],
							["shop", "Shop"],
							["portal", "Portal"],
							["active", "Active"],
							["inactive", "Inactive"],
							["order", "Can order"],
							["approve", "Approvers"],
							["requests", "Requests"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView(id),
							className: view === id ? "h-8 shrink-0 rounded-full bg-ink px-3 text-[13px] font-semibold text-white" : "h-8 shrink-0 rounded-full border border-line px-3 text-[13px] text-muted",
							children: [label, id === "requests" && pending.length > 0 ? ` ${pending.length}` : ""]
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewSwitch, {
						mode: layout,
						onChange: setLayout
					})
				]
			}),
			view === "requests" || pending.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold",
				children: view === "requests" ? "Account requests" : "Requests waiting"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 divide-y divide-line",
				children: [(view === "requests" ? query.data.requests : pending).map((request) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: request.requestedName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							request.requestedEmail,
							" · ",
							request.organizationName || "No company",
							" · asked by ",
							request.requestedBy || "unknown",
							" · ",
							ago(request.createdAt)
						]
					})] }), request.status === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => review.mutate({
								id: request.id,
								decision: "approved"
							}),
							children: "Approve"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => review.mutate({
								id: request.id,
								decision: "denied"
							}),
							children: "Deny"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: request.status })]
				}, request.id)), (view === "requests" ? query.data.requests : pending).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-3 text-sm text-muted",
					children: "No requests."
				}) : null]
			})] }) : null,
			view !== "requests" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [layout === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid justify-items-center gap-3 sm:grid-cols-2 sm:justify-items-stretch xl:grid-cols-3",
				children: [people.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid w-full max-w-md justify-items-center gap-2 rounded-2xl border border-line bg-surface p-4 text-center sm:max-w-none sm:justify-items-start sm:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: person.name || person.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: person.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								person.source === "shop" ? "Online shop" : person.organizationName || "No company",
								" · ",
								person.orderCount,
								" orders"
							]
						}),
						person.source === "shop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium",
							children: person.payLater ? "Order now, pay later" : "Pays at checkout"
						}) : null,
						person.source === "shop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => addShopPerson(person),
							children: "Add to company"
						}) : person.source === "portal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: "Staff account"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => setDraft(person),
							children: "Edit"
						}),
						person.source === "shop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => payLater.mutate({
								id: person.id,
								payLater: !person.payLater
							}),
							children: person.payLater ? "Require payment" : "Allow pay later"
						}) : null
					]
				}, `${person.source}-${person.staffUserId || person.id}`)), people.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No one matches that view."
				}) : null]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2 md:hidden",
				children: people.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-semibold",
						children: person.name || person.email
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 block text-xs text-muted",
						children: person.email
					})] }), person.source === "shop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => addShopPerson(person),
						children: "Add"
					}) : person.source === "portal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: "Staff"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => setDraft(person),
						children: "Edit"
					})]
				}, `${person.source}-${person.staffUserId || person.id}`))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: layout === "list" ? "hidden overflow-x-auto rounded-2xl border border-line bg-surface md:block" : "hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[56rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-xs text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Organization"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Role"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "External ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Created"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-4 py-3 font-medium" })
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: people.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-medium",
								"data-label": "Name",
								children: person.name || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								"data-label": "Email",
								children: person.email || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								"data-label": "Organization",
								children: person.source === "shop" ? "Online shop" : person.organizationName || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								"data-label": "Role",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap justify-end gap-1 sm:justify-start",
									children: [person.source === "shop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										"aria-label": `Role for ${person.email}`,
										className: "h-8 rounded-lg border border-line bg-white px-2 text-xs",
										value: [
											"regular",
											"buyer",
											"authorized"
										].includes(person.permissionLevel) ? person.permissionLevel : "regular",
										onChange: (event) => role.mutate({
											id: person.id,
											roleId: event.target.value
										}),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "regular",
												children: "end-user"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "buyer",
												children: "end-user · shop"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "authorized",
												children: "end-user · account"
											})
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: person.permissionLevel === "authorized" ? "pine" : "neutral",
										children: person.source === "portal" ? "agent" : "end-user"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: person.active ? "active" : "inactive" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								"data-label": "Phone",
								children: person.phone || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								"data-label": "External ID",
								children: person.zendeskUserId ? person.zendeskUserId : person.ticketId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tickets/$ticketId",
									params: { ticketId: String(person.ticketId) },
									className: "text-accent hover:underline",
									children: person.zendeskTicketId ? `#${person.zendeskTicketId}` : `P-${person.ticketId}`
								}) : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								"data-label": "Created",
								children: person.createdAt ? day(person.createdAt) : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-right",
								"data-label": "Action",
								children: person.source === "shop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: () => addShopPerson(person),
									children: "Add to company"
								}) : person.source === "portal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted",
									children: "Staff account"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: () => setDraft(person),
									children: "Edit"
								})
							})
						]
					}, `${person.source}-${person.staffUserId || person.id}`)) })]
				}), people.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-6 text-sm text-muted",
					children: "No one matches that view."
				}) : null]
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: Boolean(draft),
				onOpenChange: (open) => {
					if (!open) setDraft(null);
				},
				title: draft?.id ? "Edit person" : "Add person",
				description: "Saving a new person opens their Zendesk ticket. Permissions are checked when they order.",
				children: draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-3",
					onSubmit: (event) => {
						event.preventDefault();
						save.mutate(draft);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.name,
								onChange: (event) => setDraft({
									...draft,
									name: event.target.value
								}),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								value: draft.email,
								onChange: (event) => setDraft({
									...draft,
									email: event.target.value
								}),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Title",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.title,
								onChange: (event) => setDraft({
									...draft,
									title: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Company",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.organizationId ?? "",
								onChange: (event) => setDraft({
									...draft,
									organizationId: event.target.value ? Number(event.target.value) : null
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "No company"
								}), query.data.orgs.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: org.id,
									children: org.name
								}, org.id))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Permission level",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.permissionLevel,
								onChange: (event) => applyPolicy(event.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "regular",
									children: "Regular customer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "authorized",
									children: "Authorized customer"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Zendesk user id",
							hint: "Requester id from Zendesk, when you have one.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.zendeskUserId,
								onChange: (event) => setDraft({
									...draft,
									zendeskUserId: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: draft.canOrder,
							onCheckedChange: (canOrder) => setDraft({
								...draft,
								canOrder
							}),
							label: "Can order products"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: draft.canRequestUsers,
							onCheckedChange: (canRequestUsers) => setDraft({
								...draft,
								canRequestUsers
							}),
							label: "Can request users"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: draft.canApproveOrders,
							onCheckedChange: (canApproveOrders) => setDraft({
								...draft,
								canApproveOrders
							}),
							label: "Can approve orders"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: draft.active,
							onCheckedChange: (active) => setDraft({
								...draft,
								active
							}),
							label: "Account active"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolicyHint, { policies: query.data.policies }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: save.isPending,
							children: save.isPending ? "Saving" : "Save person"
						})
					]
				}) : null
			})
		]
	});
}
function PolicyHint({ policies }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-xs text-muted",
		children: [
			"Templates: ",
			policies.filter((policy) => policy.id === "regular" || policy.id === "authorized").map((policy) => policy.label).join(" and ") || "set on the Roles page",
			"."
		]
	});
}
var agentOpenApi = {
	openapi: "3.0.3",
	info: {
		title: "Manage Tech Service CSR Agent API",
		version: "1.0.0",
		description: "Super admin key for the CSR agent. It is not tied to one user. It can create, read, update, and delete any customer. A new user must verify the email that was sent to them. The key cannot mark that email verified by itself, and it cannot set a password, role, grant, or card."
	},
	servers: [{ url: "/" }],
	components: { securitySchemes: { agentKey: {
		type: "http",
		scheme: "bearer",
		bearerFormat: "mts_"
	} } },
	security: [{ agentKey: [] }],
	paths: {
		"/api/agent/customers": {
			get: {
				summary: "Find customers",
				parameters: [{
					name: "q",
					in: "query",
					schema: { type: "string" },
					description: "Name, email, or business. Empty returns the latest 50."
				}],
				responses: { "200": { description: "Customers without secrets. Includes verified." } }
			},
			post: {
				summary: "Create a user. Email is required and must be verified by that user. Other profile fields are optional.",
				requestBody: {
					required: true,
					content: { "application/json": { schema: {
						type: "object",
						required: ["email"],
						properties: {
							email: { type: "string" },
							name: { type: "string" },
							phone: { type: "string" },
							business: { type: "string" },
							address: { type: "string" },
							city: { type: "string" },
							region: { type: "string" },
							postal: { type: "string" },
							country: { type: "string" }
						}
					} } }
				},
				responses: { "201": { description: "{ id, email, verified: false, mailed }. The code is emailed. It is not returned." } }
			}
		},
		"/api/agent/customers/{id}": {
			get: {
				summary: "Read one customer",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				responses: { "200": { description: "Profile, grants, and access flags." } }
			},
			patch: {
				summary: "Update profile and company fields. Cannot set verified, role, grants, or a password.",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				requestBody: {
					required: true,
					content: { "application/json": { schema: {
						type: "object",
						properties: {
							name: { type: "string" },
							phone: { type: "string" },
							business: { type: "string" },
							address: { type: "string" },
							city: { type: "string" },
							region: { type: "string" },
							postal: { type: "string" },
							country: { type: "string" }
						}
					} } }
				},
				responses: { "200": { description: "{ ok: true, verified }" } }
			},
			delete: {
				summary: "Delete this user. Orders stay, with the customer link cleared.",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				responses: { "200": { description: "{ ok: true }" } }
			}
		},
		"/api/agent/customers/{id}/verify": { post: {
			summary: "Submit the code the user read from their email",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			requestBody: {
				required: true,
				content: { "application/json": { schema: {
					type: "object",
					required: ["code"],
					properties: { code: { type: "string" } }
				} } }
			},
			responses: { "200": { description: "{ ok: true, verified: true }" } }
		} },
		"/api/agent/customers/{id}/verify/resend": { post: {
			summary: "Email a new verification code. The code is not returned.",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			responses: { "200": { description: "{ ok: true, mailed }" } }
		} },
		"/api/agent/customers/{id}/pages": { get: {
			summary: "Portal pages this customer can open",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			responses: { "200": { description: "Home, Tickets, Order (/portal/shop), Orders, Billing, Complaints, Organization, Account, Notifications." } }
		} },
		"/api/agent/customers/{id}/home": { get: {
			summary: "Home summary shown on /portal",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			responses: { "200": { description: "Open tickets, pending orders, unpaid charges, and service counts." } }
		} },
		"/api/agent/customers/{id}/shop": { get: {
			summary: "Order page shown on /portal/shop",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			responses: { "200": { description: "Equipment catalog when this account can shop, plus the service menu (network, VoIP, fax, internet, wiring)." } }
		} },
		"/api/agent/customers/{id}/billing": { get: {
			summary: "Billing page shown on /portal/billing",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			responses: { "200": { description: "Order totals and whether invoice purchasing is allowed. 403 when shop and invoice are both off." } }
		} },
		"/api/agent/customers/{id}/organization": {
			get: {
				summary: "Organization page shown on /portal/organization",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				responses: { "200": { description: "Company name, phone, and city." } }
			},
			post: {
				summary: "Save the company and open a review ticket",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				requestBody: {
					required: true,
					content: { "application/json": { schema: {
						type: "object",
						required: ["business"],
						properties: {
							business: { type: "string" },
							phone: { type: "string" },
							city: { type: "string" }
						}
					} } }
				},
				responses: { "200": { description: "{ ok, ticketId, zendeskId }" } }
			}
		},
		"/api/agent/customers/{id}/tickets": {
			get: {
				summary: "List this customer's tickets",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				responses: { "200": { description: "Tickets for this email only." } }
			},
			post: {
				summary: "Open a ticket and copy it to Zendesk when connected",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				requestBody: {
					required: true,
					content: { "application/json": { schema: {
						type: "object",
						required: ["subject", "body"],
						properties: {
							subject: { type: "string" },
							body: { type: "string" },
							category: { type: "string" },
							severity: { type: "string" },
							device: { type: "string" }
						}
					} } }
				},
				responses: { "200": { description: "{ ticketId, zendeskId }" } }
			}
		},
		"/api/agent/customers/{id}/tickets/{ticketId}": { get: {
			summary: "Read one ticket and its public comments",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}, {
				name: "ticketId",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			responses: { "200": { description: "Ticket or 404 if it is not this customer's." } }
		} },
		"/api/agent/customers/{id}/tickets/{ticketId}/replies": { post: {
			summary: "Add a public reply and a desk copy ticket",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}, {
				name: "ticketId",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			requestBody: {
				required: true,
				content: { "application/json": { schema: {
					type: "object",
					required: ["body"],
					properties: { body: { type: "string" } }
				} } }
			},
			responses: { "200": { description: "{ ok: true, ticketId }" } }
		} },
		"/api/agent/customers/{id}/orders": {
			get: {
				summary: "Orders page shown on /portal/orders",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				responses: { "200": { description: "Orders for this customer id or ship email." } }
			},
			post: {
				summary: "Place an equipment order for this customer from catalog SKUs",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				requestBody: {
					required: true,
					content: { "application/json": { schema: {
						type: "object",
						required: ["items"],
						properties: {
							items: { type: "array" },
							sku: { type: "string" },
							quantity: { type: "integer" },
							payLater: { type: "boolean" },
							shippingMethod: {
								type: "string",
								enum: ["standard", "express"]
							},
							address: { type: "string" },
							city: { type: "string" },
							region: { type: "string" },
							postal: { type: "string" },
							notes: { type: "string" }
						}
					} } }
				},
				responses: { "200": { description: "{ placed, number, totalCents, paymentUrl, paymentMethod, items }. Card numbers are never accepted." } }
			}
		},
		"/api/agent/customers/{id}/orders/{orderId}": { get: {
			summary: "One order, the /portal/orders/{orderId} page",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}, {
				name: "orderId",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			responses: { "200": { description: "Lines, payment, shipment, and tracking. 404 if it is not this customer's." } }
		} },
		"/api/agent/customers/{id}/services": {
			get: {
				summary: "List service requests",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				responses: { "200": { description: "service_requests for this customer." } }
			},
			post: {
				summary: "Order a portal service",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				requestBody: {
					required: true,
					content: { "application/json": { schema: {
						type: "object",
						required: ["offering"],
						properties: {
							offering: {
								type: "string",
								enum: [
									"network",
									"voip-line",
									"voip-ext",
									"fax-physical",
									"fax-efax",
									"internet-spectrum",
									"internet-att",
									"internet-frontier",
									"internet-fixed",
									"wiring"
								]
							},
							site: { type: "string" },
							notes: { type: "string" },
							recipientEmail: { type: "string" },
							drops: { type: "integer" },
							shipPhone: { type: "boolean" },
							confirmMonthly: { type: "boolean" }
						}
					} } }
				},
				responses: { "200": { description: "{ id, ticketId }. voip-ext requires confirmMonthly true. wiring is $175 per drop." } }
			}
		},
		"/api/agent/customers/{id}/quotes/{requestId}": { post: {
			summary: "Accept or reject a quoted request",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}, {
				name: "requestId",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			requestBody: {
				required: true,
				content: { "application/json": { schema: {
					type: "object",
					required: ["decision"],
					properties: { decision: {
						type: "string",
						enum: ["accepted", "rejected"]
					} }
				} } }
			},
			responses: { "200": { description: "{ status }" } }
		} },
		"/api/agent/customers/{id}/complaints": {
			get: {
				summary: "List complaints",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				responses: { "200": { description: "This customer's complaints." } }
			},
			post: {
				summary: "File a complaint and a ticket",
				parameters: [{
					name: "id",
					in: "path",
					required: true,
					schema: { type: "integer" }
				}],
				requestBody: {
					required: true,
					content: { "application/json": { schema: {
						type: "object",
						required: ["subject", "body"],
						properties: {
							kind: { type: "string" },
							subject: { type: "string" },
							body: { type: "string" }
						}
					} } }
				},
				responses: { "200": { description: "{ id, ticketId, zendeskId }" } }
			}
		},
		"/api/agent/customers/{id}/notices": { get: {
			summary: "List notices",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			responses: { "200": { description: "This customer's notices." } }
		} },
		"/api/agent/customers/{id}/notices/{noticeId}/read": { post: {
			summary: "Mark one notice read",
			parameters: [{
				name: "id",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}, {
				name: "noticeId",
				in: "path",
				required: true,
				schema: { type: "integer" }
			}],
			responses: { "200": { description: "{ ok: true }" } }
		} }
	}
};
var Route$92 = createFileRoute("/api/openapi.json")({ server: { handlers: { GET: ({ request }) => {
	const origin = new URL(request.url).origin;
	return Response.json({
		...agentOpenApi,
		servers: [{ url: origin }]
	});
} } } });
/**
* Live-preview sign-in popup — server-only (NEVER import from the client).
*
* The sandbox preview runs the app in a partitioned iframe, so OAuth must happen
* in a top-level popup (first-party cookies). This handler is the ENTIRE popup
* document — no React shell:
*
*   Phase 1 (`?providerId=…`): start OAuth server-side and 302 straight to the
*     broker / upstream login page. The popup never paints the app.
*   Phase 2 (`?done=1`): after the broker round-trip, emit a tiny HTML page that
*     posts the session token to the opener and closes. No SPA hydrate, no
*     server-fn round-trip.
*
* Wired automatically by the Vite `authPopupPlugin` in `vite.config.ts` during
* `npm run dev` (live preview). Do NOT create `src/routes/auth/popup.tsx` — a
* React route here paints the full app shell in the popup. The opener lives in
* `client.ts` (`signIn` → `openSignInPopup`).
*/
/**
* Handle `GET /auth/popup`. Invoked by the Vite `authPopupPlugin` (dev / live
* preview). Do not re-export this from a React route file.
*/
async function handleAuthPopupRequest(request) {
	const url = new URL(request.url);
	if (url.searchParams.get("done") === "1") {
		const errored = url.searchParams.has("error");
		const message = {
			source: "grok-auth-popup",
			token: errored ? null : readCookie(request, SESSION_TOKEN_COOKIE),
			...errored ? { error: url.searchParams.get("error") ?? "sign_in_failed" } : {}
		};
		return new Response(completionHtml(message), {
			status: 200,
			headers: {
				"content-type": "text/html; charset=utf-8",
				"cache-control": "no-store"
			}
		});
	}
	const providerId = url.searchParams.get("providerId")?.trim();
	if (!providerId) return new Response("Missing providerId", {
		status: 400,
		headers: { "content-type": "text/plain; charset=utf-8" }
	});
	const back = `${url.origin}/auth/popup?done=1`;
	try {
		const apiRes = await auth.api.signInWithOAuth2({
			body: {
				providerId,
				callbackURL: back,
				errorCallbackURL: `${back}&error=1`
			},
			headers: request.headers,
			asResponse: true
		});
		if (!apiRes.ok) return completionResponse({
			source: "grok-auth-popup",
			token: null,
			error: await apiRes.text().catch(() => "") || `oauth_init_failed_${apiRes.status}`
		});
		const location = (await apiRes.json().catch(() => null))?.url;
		if (!location) return completionResponse({
			source: "grok-auth-popup",
			token: null,
			error: "oauth_init_missing_url"
		});
		const headers = new Headers({
			location,
			"cache-control": "no-store"
		});
		for (const cookie of apiRes.headers.getSetCookie()) headers.append("set-cookie", cookie);
		return new Response(null, {
			status: 302,
			headers
		});
	} catch (err) {
		return completionResponse({
			source: "grok-auth-popup",
			token: null,
			error: err instanceof Error ? err.message : "oauth_init_threw"
		});
	}
}
function completionResponse(message) {
	return new Response(completionHtml(message), {
		status: 200,
		headers: {
			"content-type": "text/html; charset=utf-8",
			"cache-control": "no-store"
		}
	});
}
/** Minimal HTML: postMessage the token to the opener and close. No React. */
function completionHtml(message) {
	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
<title>Signing in…</title>
<style>
  html,body{margin:0;min-height:100%;background:#0b0b0c;color:#a1a1aa;
    font:14px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
  main{min-height:100vh;display:grid;place-items:center;padding:1.5rem;text-align:center}
</style>
</head>
<body>
<main><p>Signing you in…</p></main>
<script type="application/json" id="grok-auth-popup-msg">${JSON.stringify(message).replace(/</g, "\\u003c")}<\/script>
<script>
(function () {
  var el = document.getElementById("grok-auth-popup-msg");
  var msg = { source: "grok-auth-popup", token: null };
  try { if (el && el.textContent) msg = JSON.parse(el.textContent); } catch (e) {}
  try {
    if (window.opener) window.opener.postMessage(msg, window.location.origin);
  } catch (e) {}
  try { window.close(); } catch (e) {}
})();
<\/script>
</body>
</html>`;
}
/** Read a single cookie value from the request (handles `=` inside values). */
function readCookie(request, name) {
	const header = request.headers.get("cookie");
	if (!header) return null;
	for (const part of header.split(";")) {
		const trimmed = part.trim();
		if (!trimmed) continue;
		const eq = trimmed.indexOf("=");
		if (eq <= 0) continue;
		if (trimmed.slice(0, eq) !== name) continue;
		const raw = trimmed.slice(eq + 1);
		try {
			return decodeURIComponent(raw);
		} catch {
			return raw;
		}
	}
	return null;
}
var Route$91 = createFileRoute("/auth/popup")({ server: { handlers: { GET: ({ request }) => handleAuthPopupRequest(request) } } });
var Route$90 = createFileRoute("/portal/")({ component: PortalHome });
function PortalHome() {
	const token = useShopToken();
	const session = usePortalSession();
	const account = useQuery({
		queryKey: ["shop-account", token],
		queryFn: () => getShopAccount({ data: token }),
		enabled: Boolean(token)
	});
	const requests = useQuery({
		queryKey: ["portal-services", token],
		queryFn: () => listPortalServices({ data: token }),
		enabled: Boolean(token)
	});
	const shop = useQuery({
		queryKey: ["storefront"],
		queryFn: () => getStorefront()
	});
	if (!session.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Opening your portal…"
	});
	const { customer, tickets } = session.data;
	const open = tickets.filter((ticket) => ticket.status !== "solved" && ticket.status !== "closed").length;
	const orders = account.data?.orders ?? [];
	const pendingOrders = orders.filter((order) => order.status !== "fulfilled" && order.status !== "cancelled").length;
	const pendingRequests = (requests.data ?? []).filter((item) => item.status === "requested" || item.status === "quoted").length;
	const activeServices = (requests.data ?? []).filter((item) => item.status === "approved" || item.status === "provisioned").length;
	const unpaid = orders.filter((order) => order.paymentMethod === "pay_later" || order.paymentMethod === "unpaid").length;
	const hour = (/* @__PURE__ */ new Date()).getHours();
	const hello = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
	const first = customer.name.split(" ")[0] || "there";
	const place = [customer.city, customer.region].filter(Boolean).join(", ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-2xl font-medium tracking-tight",
					children: [
						hello,
						", ",
						first,
						"."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						"Welcome to the MTS User Portal",
						session.data.organization || session.data.business ? ` · ${session.data.organization || session.data.business}` : "",
						"."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: "Open tickets",
						value: open
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: "Active services",
						value: activeServices
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: "Pending orders",
						value: pendingOrders
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: "Open requests",
						value: pendingRequests
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: "Unpaid",
						value: unpaid
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalPanel, {
				title: "Your details",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Email",
							value: customer.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Phone",
							value: customer.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Company",
							value: session.data.organization || session.data.business
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Role",
							value: session.data.access.roleLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Location",
							value: place
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Country",
							value: customer.country
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Billing",
							value: customer.payLater ? "Order now, pay later" : "Pay at checkout"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Account",
							value: session.data.verified ? "Verified" : "Pending verification"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/portal/tickets",
						className: "rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold",
						children: "Create support ticket"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/portal/shop",
						className: "rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold",
						children: "Order equipment or a service"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/portal/orders",
						className: "rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold",
						children: "View orders"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Equipment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/portal/shop",
						className: "text-sm font-semibold text-accent",
						children: "Open orders"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
					children: (shop.data?.products ?? []).slice(0, 4).map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: catalogHref(shop.data?.slug || "manage-tech-service", product.sku),
						className: "shop-card group grid overflow-hidden rounded-2xl border border-white/80 bg-surface/95 shadow-[0_12px_32px_rgba(0,57,112,0.06)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex aspect-[4/3] items-center justify-center bg-gradient-to-b from-white to-surface-2",
							children: product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.imageUrl,
								alt: "",
								className: "max-h-[86%] max-w-[86%] object-contain object-center"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-12 rounded-2xl bg-white/70" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium",
								children: product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: money(product.priceCents)
							})]
						})]
					}, product.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Recent tickets"
						}),
						tickets.slice(0, 4).map((ticket) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portal/tickets/$ticketId",
							params: { ticketId: String(ticket.id) },
							className: "grid gap-1 rounded-xl border border-line bg-surface px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-semibold",
								children: ticket.subject
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [
									ticket.status,
									" · ",
									ticket.category
								]
							})]
						}, ticket.id)),
						tickets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "No tickets yet."
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Orders"
						}),
						orders.slice(0, 4).map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portal/orders/$orderId",
							params: { orderId: String(order.id) },
							className: "flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: order.number
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [
									order.status,
									" · ",
									order.paymentMethod || "unpaid"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: money(order.totalCents)
							})]
						}, order.id)),
						orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "No orders yet."
						}) : null
					]
				})]
			})
		]
	});
}
var Route$89 = createFileRoute("/portal/account")({ component: AccountPage });
function AccountPage() {
	const token = useShopToken();
	const client = useQueryClient();
	const session = usePortalSession();
	const user = useCurrentUser();
	const customer = session.data?.customer;
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [region, setRegion] = (0, import_react.useState)("");
	const [postal, setPostal] = (0, import_react.useState)("");
	const [country, setCountry] = (0, import_react.useState)("United States");
	const [seeded, setSeeded] = (0, import_react.useState)(false);
	const [notice, setNotice] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!customer || seeded) return;
		setName(customer.name);
		setPhone(customer.phone);
		setAddress(customer.address);
		setCity(customer.city);
		setRegion(customer.region);
		setPostal(customer.postal);
		setCountry(customer.country || "United States");
		setSeeded(true);
	}, [customer, seeded]);
	const save = useMutation({
		mutationFn: () => saveShopProfile({ data: {
			token,
			name,
			phone,
			address,
			city,
			region,
			postal,
			country
		} }),
		onSuccess: async () => {
			setNotice("Account saved.");
			await client.invalidateQueries({ queryKey: ["portal-session"] });
		},
		onError: (error) => setNotice(error instanceof Error ? error.message : "Could not save.")
	});
	if (!token || session.isPending || !seeded) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Loading account…"
	});
	if (session.isError || !customer) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-bad",
		children: "This account could not be loaded. Sign in again."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid w-full gap-4",
		onSubmit: (event) => {
			event.preventDefault();
			save.mutate();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-medium tracking-tight",
					children: "Account"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Password changes stay with the sign-in provider you used."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalPanel, {
				title: "Profile",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Email",
							value: customer.email || user?.primaryEmail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Company",
							value: session.data?.organization || session.data?.business || "Not set"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Role",
							value: session.data?.zendeskRole || session.data?.access.roleLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Time zone",
							value: session.data?.timeZone || "Not set"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
							label: "Billing terms",
							value: customer.payLater ? "Order now, pay later" : "Pay at checkout"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalPanel, {
				title: "Contact and billing",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: name,
								onChange: (event) => setName(event.target.value),
								required: true,
								className: "h-11 rounded-xl"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: phone,
								onChange: (event) => setPhone(event.target.value),
								className: "h-11 rounded-xl"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Billing address",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: address,
								onChange: (event) => setAddress(event.target.value),
								className: "h-11 rounded-xl"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "City",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: city,
										onChange: (event) => setCity(event.target.value),
										className: "h-11 rounded-xl"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "State",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: region,
										onChange: (event) => setRegion(event.target.value),
										className: "h-11 rounded-xl"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Postal code",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: postal,
										onChange: (event) => setPostal(event.target.value),
										className: "h-11 rounded-xl"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Country",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: country,
										onChange: (event) => setCountry(event.target.value),
										className: "h-11 rounded-xl"
									})
								})
							]
						})
					]
				})
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: notice
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: save.isPending,
				className: "h-11 rounded-xl bg-ink text-sm font-medium text-white disabled:opacity-50",
				children: "Save account"
			})
		]
	});
}
var Route$88 = createFileRoute("/portal/billing")({ component: BillingPage });
var fieldClass$1 = "h-12 w-full rounded-xl border border-line bg-white px-3 text-base text-ink outline-none focus:border-accent";
function BillingPage() {
	const token = useShopToken();
	const session = usePortalSession();
	const client = useQueryClient();
	const account = useQuery({
		queryKey: ["shop-account", token],
		queryFn: () => getShopAccount({ data: token }),
		enabled: Boolean(token)
	});
	const billing = useQuery({
		queryKey: ["customer-billing", token],
		queryFn: () => getCustomerBilling({ data: token }),
		enabled: Boolean(token)
	});
	const [method, setMethod] = (0, import_react.useState)("card");
	const [cardNumber, setCardNumber] = (0, import_react.useState)("");
	const [cardExp, setCardExp] = (0, import_react.useState)("");
	const [cardCcv, setCardCcv] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (billing.data?.selected) setMethod(billing.data.selected);
	}, [billing.data?.selected]);
	const save = useMutation({
		mutationFn: () => saveCustomerBilling({ data: {
			token,
			method,
			cardNumber,
			cardExp,
			cardCcv
		} }),
		onSuccess: () => {
			setCardNumber("");
			setCardCcv("");
			setError("");
			setMessage("Billing saved. The full card number and CCV are not stored.");
			client.invalidateQueries({ queryKey: ["customer-billing", token] });
		},
		onError: (cause) => {
			setMessage("");
			setError(cause instanceof Error ? cause.message : "Could not save billing.");
		}
	});
	if (session.data && !session.data.access.canShop && !session.data.access.canDefer) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Locked, {
		title: "No billing on this account",
		body: "Invoices and shop payments are turned on by an admin."
	});
	const orders = account.data?.orders ?? [];
	const card = billing.data?.card;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Billing"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Choose how this account pays. A saved card keeps only the last four digits and the expiry."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 lg:grid-cols-2",
				onSubmit: (event) => {
					event.preventDefault();
					setError("");
					save.mutate();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid content-start gap-3 rounded-2xl border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Payment gateway"
						}),
						(billing.data?.methods ?? [{
							id: "card",
							label: "Debit or credit card",
							detail: "Charged when the order is placed."
						}]).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: method === item.id ? "grid cursor-pointer gap-1 rounded-xl border border-ink bg-white px-4 py-3" : "grid cursor-pointer gap-1 rounded-xl border border-line bg-white px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "gateway",
									className: "size-4",
									checked: method === item.id,
									onChange: () => setMethod(item.id)
								}), item.label]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pl-7 text-xs text-muted",
								children: item.detail
							})]
						}, item.id)),
						billing.data?.payLater ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: method === "pay_later" ? "grid cursor-pointer gap-1 rounded-xl border border-ink bg-[#f7fbfb] px-4 py-3" : "grid cursor-pointer gap-1 rounded-xl border border-line bg-[#f7fbfb] px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "gateway",
									className: "size-4",
									checked: method === "pay_later",
									onChange: () => setMethod("pay_later")
								}), "Order now, pay later"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pl-7 text-xs text-muted",
								children: "This account can be invoiced. The order stays unpaid until the invoice is collected."
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl bg-surface-2 px-4 py-3 text-xs text-muted",
							children: "Order now, pay later is not turned on for this account."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid content-start gap-3 rounded-2xl border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Card"
						}),
						card ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								card.brand,
								" ···· ",
								card.last4,
								card.exp ? ` · ${card.exp}` : "",
								". Enter a new card to replace it."
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Add the card this account should use."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1 text-sm",
							children: ["Card number", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: cardNumber,
								onChange: (event) => setCardNumber(event.target.value),
								inputMode: "numeric",
								autoComplete: "cc-number",
								placeholder: "4242 4242 4242 4242",
								className: fieldClass$1
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-1 text-sm",
								children: ["Expiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: cardExp,
									onChange: (event) => setCardExp(event.target.value),
									placeholder: "MM/YY",
									autoComplete: "cc-exp",
									className: fieldClass$1
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-1 text-sm",
								children: ["CCV", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: cardCcv,
									onChange: (event) => setCardCcv(event.target.value),
									inputMode: "numeric",
									autoComplete: "cc-csc",
									placeholder: "123",
									className: fieldClass$1
								})]
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-bad",
							children: error
						}) : null,
						message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: message
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: save.isPending || !token,
							className: "h-12 rounded-xl bg-ink text-sm font-semibold text-white disabled:opacity-50",
							children: save.isPending ? "Saving" : "Save billing"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Charges"
					}),
					orders.map((order) => {
						const payment = shopifyPayment(order);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: order.number
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [
									payment.label,
									" · ",
									order.status
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: money(order.totalCents)
							})]
						}, order.id);
					}),
					account.data && orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "No charges yet."
					}) : null
				]
			})
		]
	});
}
var Route$87 = createFileRoute("/portal/call")({ component: CallDesk });
function CallDesk() {
	const frame = (0, import_react.useRef)(null);
	const user = useCurrentUser();
	const session = usePortalSession();
	function publish() {
		const customer = session.data?.customer;
		const context = {
			name: user?.displayName || customer?.name || "",
			organization: session.data?.business || session.data?.organization || "",
			role: session.data?.access.roleLabel || "Customer"
		};
		sessionStorage.setItem("mts-csr-context", JSON.stringify(context));
		const win = frame.current?.contentWindow;
		if (!win) return;
		win.MTS_CSR_CONTEXT = context;
		win.MTS_CSR_NAVIGATE = (route) => {
			if (route.startsWith("/portal")) window.location.assign(route);
		};
		win.dispatchEvent(new Event("mts:csr-context-ready"));
	}
	(0, import_react.useEffect)(() => {
		publish();
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
		ref: frame,
		title: "Call Sarah",
		src: "/csr-call.html",
		onLoad: publish,
		allow: "microphone; camera; autoplay; display-capture; clipboard-write",
		className: "fixed inset-0 z-50 h-dvh w-full border-0 bg-[#080d16]"
	});
}
var Route$86 = createFileRoute("/portal/campaigns")({ component: CampaignsPage });
function CampaignsPage() {
	const token = useShopToken();
	const campaigns = useQuery({
		queryKey: ["campaigns", token],
		queryFn: () => listCampaigns({ data: token }),
		enabled: Boolean(token)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Campaigns"
			}),
			(campaigns.data ?? []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-2 rounded-xl border border-line bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: item.body
					}),
					item.ctaHref.startsWith("/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.ctaHref,
						className: "text-sm font-semibold text-accent",
						children: item.ctaLabel || "Open"
					}) : null
				]
			}, item.id)),
			campaigns.data && campaigns.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No campaigns for this account."
			}) : null
		]
	});
}
var Route$85 = createFileRoute("/portal/complaints")({ component: ComplaintsPage });
var KINDS$2 = [
	"Service complaint",
	"Billing complaint",
	"Technical support complaint",
	"Delivery or order complaint",
	"General feedback"
];
function ComplaintsPage() {
	const token = useShopToken();
	const client = useQueryClient();
	const mine = useQuery({
		queryKey: ["complaints", token],
		queryFn: () => listMyComplaints({ data: token }),
		enabled: Boolean(token)
	});
	const [kind, setKind] = (0, import_react.useState)(KINDS$2[0]);
	const [subject, setSubject] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const send = useMutation({
		mutationFn: () => submitComplaint({ data: {
			token,
			kind,
			subject,
			body
		} }),
		onSuccess: (result) => {
			setSubject("");
			setBody("");
			setNotice(result.zendeskId ? `Ticket ${result.ticketId} is in Zendesk as #${result.zendeskId}.` : `Ticket ${result.ticketId} is open. Zendesk sync is pending if no number is shown.`);
			client.invalidateQueries({ queryKey: ["complaints", token] });
			client.invalidateQueries({ queryKey: ["portal-session", token] });
		},
		onError: (error) => setNotice(error instanceof Error ? error.message : "Could not send that.")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Complaints and feedback"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3 rounded-xl border border-line bg-surface p-4",
				onSubmit: (event) => {
					event.preventDefault();
					send.mutate();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: kind,
						onChange: (event) => setKind(event.target.value),
						"aria-label": "Type",
						className: "h-11 rounded-xl border border-line px-3",
						children: KINDS$2.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: subject,
						onChange: (event) => setSubject(event.target.value),
						required: true,
						placeholder: "Subject",
						"aria-label": "Subject",
						className: "h-11 rounded-xl border border-line px-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: body,
						onChange: (event) => setBody(event.target.value),
						required: true,
						placeholder: "What happened?",
						"aria-label": "Details",
						className: "min-h-28 rounded-xl border border-line px-3 py-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: send.isPending,
						className: "h-11 rounded-xl bg-ink text-sm font-semibold text-white disabled:opacity-50",
						children: "Submit"
					})
				]
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: notice
			}) : null,
			(mine.data ?? []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-line bg-surface px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: item.subject
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						item.kind,
						" · ",
						item.status,
						item.ticketId ? ` · Ticket ${item.ticketId}` : ""
					]
				})]
			}, item.id))
		]
	});
}
var Route$84 = createFileRoute("/portal/login")({ beforeLoad: () => {
	throw redirect({
		href: "/production/signin",
		replace: true
	});
} });
var Route$83 = createFileRoute("/portal/my-services")({ component: MyServices });
function MyServices() {
	const token = useShopToken();
	const session = usePortalSession();
	const mine = useQuery({
		queryKey: ["portal-services", token],
		queryFn: () => listPortalServices({ data: token }),
		enabled: Boolean(token)
	});
	if (session.data && !session.data.access.canOrderIt && !session.data.access.canOrderPhone) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Locked, {
		title: "No managed services on this account",
		body: "Service ordering is approved from the admin desk. Tickets are still open to you."
	});
	const active = (mine.data ?? []).filter((item) => item.status === "approved" || item.status === "provisioned");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "My active services"
			}),
			active.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-line bg-surface px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: item.serviceName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						item.status,
						" · ",
						item.category
					]
				})]
			}, item.id)),
			mine.data && active.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nothing is provisioned yet. Open requests stay under Quotes."
			}) : null
		]
	});
}
var Route$82 = createFileRoute("/portal/notifications")({ component: NoticesPage });
function NoticesPage() {
	const token = useShopToken();
	const client = useQueryClient();
	const notices = useQuery({
		queryKey: ["customer-notices", token],
		queryFn: () => listCustomerNotices({ data: token }),
		enabled: Boolean(token)
	});
	const mark = useMutation({
		mutationFn: (id) => markCustomerNotice({ data: {
			token,
			id
		} }),
		onSuccess: () => void client.invalidateQueries({ queryKey: ["customer-notices", token] })
	});
	const unread = (notices.data ?? []).filter((item) => !item.read).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Notifications"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: unread ? `${unread} unread` : "You're caught up."
			}),
			(notices.data ?? []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: item.href || "/portal",
				onClick: () => {
					if (!item.read) mark.mutate(item.id);
				},
				className: item.read ? "rounded-xl border border-line bg-surface px-4 py-3 text-sm" : "rounded-xl border border-ink bg-surface px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-semibold",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: item.body
				})]
			}, item.id)),
			notices.data && notices.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No notifications yet. Ticket, order, and request updates show up here."
			}) : null
		]
	});
}
var Route$81 = createFileRoute("/portal/organization")({ component: OrganizationPage });
function OrganizationPage() {
	const token = useShopToken();
	const client = useQueryClient();
	const session = usePortalSession();
	const [business, setBusiness] = (0, import_react.useState)(session.data?.business || session.data?.organization || "");
	const [phone, setPhone] = (0, import_react.useState)(session.data?.customer.phone || "");
	const [city, setCity] = (0, import_react.useState)(session.data?.customer.city || "");
	const [notice, setNotice] = (0, import_react.useState)("");
	const save = useMutation({
		mutationFn: () => savePortalCompany({ data: {
			token,
			business,
			phone,
			city
		} }),
		onSuccess: () => {
			setNotice("Saved. A ticket was opened so the desk can review the change.");
			client.invalidateQueries({ queryKey: ["portal-session", token] });
		},
		onError: (error) => setNotice(error instanceof Error ? error.message : "Could not save.")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid w-full gap-4",
		onSubmit: (event) => {
			event.preventDefault();
			save.mutate();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-medium tracking-tight",
					children: "My organization"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "You only see this company. Saving a change opens a ticket for review."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
					label: "Signed in as",
					value: session.data?.customer.email
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataField, {
					label: "Role",
					value: session.data?.access.roleLabel
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalPanel, {
				title: "Company",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Company name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: business,
							onChange: (event) => setBusiness(event.target.value),
							required: true,
							className: "h-11 rounded-xl"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: phone,
								onChange: (event) => setPhone(event.target.value),
								className: "h-11 rounded-xl"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "City",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: city,
								onChange: (event) => setCity(event.target.value),
								className: "h-11 rounded-xl"
							})
						})]
					})]
				})
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: notice
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: save.isPending,
				className: "h-11 rounded-xl bg-ink text-sm font-medium text-white disabled:opacity-50",
				children: "Save company"
			})
		]
	});
}
var Route$80 = createFileRoute("/portal/quotes")({ component: QuotesPage });
function QuotesPage() {
	const token = useShopToken();
	const client = useQueryClient();
	const session = usePortalSession();
	const mine = useQuery({
		queryKey: ["portal-services", token],
		queryFn: () => listPortalServices({ data: token }),
		enabled: Boolean(token)
	});
	const respond = useMutation({
		mutationFn: (input) => respondToQuote({ data: {
			token,
			...input
		} }),
		onSuccess: () => void client.invalidateQueries({ queryKey: ["portal-services", token] })
	});
	if (session.data && !session.data.access.canOrderIt && !session.data.access.canOrderPhone) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Locked, {
		title: "Quotes are not open yet",
		body: "An admin approves service ordering before a quote can be requested."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Quotes and requests"
			}),
			(mine.data ?? []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-line bg-surface px-4 py-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: item.serviceName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [item.status, item.quoteNote ? ` · ${item.quoteNote}` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 whitespace-pre-wrap text-muted",
						children: item.details
					}),
					item.status === "quoted" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-10 rounded-xl bg-ink px-3 text-xs font-semibold text-white",
							onClick: () => respond.mutate({
								id: item.id,
								decision: "accepted"
							}),
							children: "Accept"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-10 rounded-xl border border-line px-3 text-xs font-semibold",
							onClick: () => respond.mutate({
								id: item.id,
								decision: "rejected"
							}),
							children: "Decline"
						})]
					}) : null
				]
			}, item.id)),
			mine.data && mine.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No requests yet."
			}) : null
		]
	});
}
var Route$79 = createFileRoute("/portal/register")({ beforeLoad: () => {
	throw redirect({
		href: "/production/signin",
		replace: true
	});
} });
var Route$78 = createFileRoute("/portal/shop")({ component: OrderPage$1 });
var SITE_SERVICES = [
	{
		id: "network",
		label: "Connect an office",
		detail: "Bring the network or internet into a new office."
	},
	{
		id: "voip",
		label: "Phone and VoIP",
		detail: "A line, or an extension on the Telxent bill."
	},
	{
		id: "fax",
		label: "Fax",
		detail: "A physical fax line, or eFax to an email address."
	},
	{
		id: "internet",
		label: "Internet",
		detail: "Spectrum, AT&T Fiber, Frontier Fiber, or fixed wireless."
	},
	{
		id: "wiring",
		label: "Wiring",
		detail: "$175 per drop."
	}
];
function ServiceMenu({ label, value, placeholder, options, onChange }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const current = options.find((item) => item.value === value);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-expanded": open,
		"aria-haspopup": "dialog",
		"aria-label": label,
		onClick: () => setOpen(true),
		className: "flex h-14 w-full items-center justify-between gap-3 rounded-2xl border border-line/80 bg-white px-4 text-left shadow-[0_8px_24px_rgba(0,57,112,0.05)] transition hover:border-accent/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[11px] font-medium tracking-[0.14em] text-muted uppercase",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-sm font-medium",
				children: current?.label || placeholder
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-8 shrink-0 place-items-center rounded-full bg-surface-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: open ? "size-4 rotate-180 text-accent transition" : "size-4 text-muted transition" })
		})]
	}), open ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] grid place-items-end p-3 sm:place-items-center sm:p-6",
		role: "presentation",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close service list",
			className: "absolute inset-0 bg-[#003970]/45 backdrop-blur-[2px]",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": label,
			className: "relative z-10 grid max-h-[min(32rem,calc(100dvh-2rem))] w-full max-w-lg gap-3 overflow-hidden rounded-3xl border border-white/80 bg-white p-3 shadow-[0_24px_70px_rgba(0,57,112,0.28)] sm:p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 px-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium tracking-[0.14em] text-muted uppercase",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-base font-semibold tracking-tight",
						children: current?.label || placeholder
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close",
					onClick: () => setOpen(false),
					className: "grid size-9 shrink-0 place-items-center rounded-full bg-surface-2 text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-1 overflow-auto pr-1",
				children: options.map((item) => {
					const active = item.value === value;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							onChange(item.value);
							setOpen(false);
						},
						className: active ? "flex w-full items-center justify-between gap-3 rounded-2xl bg-ink px-3.5 py-3 text-left text-white" : "flex w-full items-center justify-between gap-3 rounded-2xl px-3.5 py-3 text-left transition hover:bg-surface-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: item.label
							}), item.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: active ? "block text-xs text-white/70" : "block text-xs text-muted",
								children: item.detail
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: active ? "size-2.5 shrink-0 rounded-full bg-accent" : "size-2.5 shrink-0 rounded-full border border-line" })]
					}, item.value);
				})
			})]
		})]
	}), document.body) : null] });
}
function OrderPage$1() {
	const token = useShopToken();
	const shop = useQuery({
		queryKey: ["storefront"],
		queryFn: () => getStorefront()
	});
	const [tab, setTab] = (0, import_react.useState)("equipment");
	const [q, setQ] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("all");
	const [open, setOpen] = (0, import_react.useState)(ORDER_MENU[0].id);
	const [selection, setSelection] = (0, import_react.useState)(null);
	const [site, setSite] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [voipKind, setVoipKind] = (0, import_react.useState)("ext");
	const [shipPhone, setShipPhone] = (0, import_react.useState)(false);
	const [confirmMonthly, setConfirmMonthly] = (0, import_react.useState)(false);
	const [faxKind, setFaxKind] = (0, import_react.useState)("efax");
	const [recipientEmail, setRecipientEmail] = (0, import_react.useState)("");
	const [provider, setProvider] = (0, import_react.useState)("spectrum");
	const [drops, setDrops] = (0, import_react.useState)(1);
	const [done, setDone] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const products = shop.data?.products ?? [];
	const categories = (0, import_react.useMemo)(() => ["all", ...new Set(products.map((item) => item.category).filter(Boolean))], [products]);
	const visible = products.filter((item) => {
		const blob = `${item.name} ${item.sku} ${item.category}`.toLowerCase();
		if (q && !blob.includes(q.toLowerCase())) return false;
		if (category !== "all" && item.category !== category) return false;
		return true;
	});
	const slug = shop.data?.slug || "manage-tech-service";
	const phones = products.filter((item) => /phone/i.test(`${item.name} ${item.category} ${item.sku}`));
	const siteId = selection?.source === "site" ? selection.id : selection?.name === "VoIP Phone System" ? "voip" : selection?.name === "Structured Data Cabling" ? "wiring" : null;
	const place = useMutation({
		mutationFn: () => {
			if (!selection) throw new Error("Choose a service.");
			if (selection.source === "menu" && !siteId) return orderCatalogService({ data: {
				token,
				categoryId: selection.categoryId,
				name: selection.name,
				site,
				notes
			} });
			const service = siteId || "network";
			const offering = service === "voip" ? voipKind === "ext" ? "voip-ext" : "voip-line" : service === "fax" ? faxKind === "efax" ? "fax-efax" : "fax-physical" : service === "internet" ? `internet-${provider}` : service;
			return orderPortalOffering({ data: {
				token,
				offering,
				site,
				notes,
				recipientEmail,
				drops,
				shipPhone: service === "voip" && voipKind === "ext" && shipPhone,
				confirmMonthly
			} });
		},
		onSuccess: (result) => {
			if (siteId === "voip" && voipKind === "ext" && shipPhone) {
				addToCart(phones[0]?.sku || "desk-phone", 1);
				setDone(`Request ${result.id} is in. The desk phone is in your cart. Telxent still has to confirm the $18 monthly extension before it is billed.`);
			} else if (siteId === "voip" && voipKind === "ext") setDone(`Request ${result.id} is in. You confirmed $18 per month. Telxent still has to confirm the extension before it is added to the bill.`);
			else if (siteId === "wiring") setDone(`Request ${result.id} is in. Wiring is ${money(drops * 17500)} for ${drops} drop${drops === 1 ? "" : "s"}. It is not billed until the desk confirms the work.`);
			else setDone(`Request ${result.id} is in. A ticket was opened for the desk.`);
			setError("");
		},
		onError: (cause) => {
			setDone("");
			setError(cause instanceof Error ? cause.message : "Could not send the order.");
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-medium tracking-tight",
					children: "Order"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-sm text-muted",
					children: "Whether you seek urgent support or long-term strategic planning, MTS offers a variety of expert services to help your business succeed."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: ["equipment", "services"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(item),
					className: tab === item ? "h-10 rounded-full bg-ink px-4 text-sm font-medium text-white" : "h-10 rounded-full border border-line bg-surface/80 px-4 text-sm font-medium backdrop-blur-sm",
					children: item === "equipment" ? "Equipment" : "Order services"
				}, item))
			}),
			tab === "equipment" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (event) => setQ(event.target.value),
						placeholder: "Search equipment",
						"aria-label": "Search equipment",
						className: "h-12 rounded-2xl border border-line bg-surface/90 px-4 shadow-sm backdrop-blur-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto pb-1",
						children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCategory(item),
							className: category === item ? "h-9 shrink-0 rounded-full bg-ink px-3 text-xs font-medium text-white" : "h-9 shrink-0 rounded-full border border-line bg-surface/80 px-3 text-xs font-medium",
							children: item === "all" ? "All" : item
						}, item))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3",
					children: visible.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: catalogHref(slug, product.sku),
						className: "shop-card group grid overflow-hidden rounded-2xl border border-white/80 bg-surface/95 shadow-[0_12px_32px_rgba(0,57,112,0.06)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex aspect-[4/3] items-center justify-center bg-gradient-to-b from-white to-surface-2",
							children: product.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.imageUrl,
								alt: "",
								className: "max-h-[86%] max-w-[86%] object-contain object-center"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-16 rounded-2xl bg-white/70" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1 px-3.5 py-3.5",
							children: [
								product.category ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium tracking-wide text-accent uppercase",
									children: product.category
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "line-clamp-2 min-h-10 text-sm font-medium leading-5",
									children: product.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-ink",
									children: money(product.priceCents)
								})
							]
						})]
					}, product.id))
				}),
				visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No equipment matches that search."
				}) : null
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]",
				onSubmit: (event) => {
					event.preventDefault();
					setError("");
					place.mutate();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid content-start gap-3",
					children: [ORDER_MENU.map((group) => {
						const expanded = open === group.id;
						const value = selection?.source === "menu" && selection.categoryId === group.id ? selection.name : "";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-2xl border border-white/80 bg-surface/90 shadow-sm backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left",
								"aria-expanded": expanded,
								onClick: () => setOpen(expanded ? "" : group.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium",
										children: group.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-xs text-muted",
										children: value || `${group.items.length} services`
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 shrink-0 place-items-center rounded-full bg-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: expanded ? "size-4 rotate-180 text-accent transition" : "size-4 text-muted transition" })
								})]
							}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-4 pb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceMenu, {
									label: "Choose a service",
									value,
									placeholder: `Select ${group.title}`,
									options: group.items.map((item) => ({
										value: item,
										label: item
									})),
									onChange: (name) => {
										setSelection(name ? {
											source: "menu",
											categoryId: group.id,
											name
										} : null);
										setDone("");
										setError("");
									}
								})
							}) : null]
						}, group.id);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-white/80 bg-surface/90 shadow-sm backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left",
							"aria-expanded": open === "site",
							onClick: () => setOpen(open === "site" ? "" : "site"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium",
									children: "Phone, internet, and wiring"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-xs text-muted",
									children: selection?.source === "site" ? SITE_SERVICES.find((item) => item.id === selection.id)?.label : "Extensions, fax, circuits, and drops"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-8 shrink-0 place-items-center rounded-full bg-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: open === "site" ? "size-4 rotate-180 text-accent transition" : "size-4 text-muted transition" })
							})]
						}), open === "site" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-4 pb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceMenu, {
								label: "Choose a service",
								value: selection?.source === "site" ? selection.id : "",
								placeholder: "Select a site service",
								options: SITE_SERVICES.map((item) => ({
									value: item.id,
									label: item.label,
									detail: item.detail
								})),
								onChange: (id) => {
									setSelection(id ? {
										source: "site",
										id
									} : null);
									setDone("");
									setError("");
								}
							})
						}) : null]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid h-fit content-start gap-3 rounded-2xl border border-white/80 bg-surface/95 p-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium",
							children: selection?.source === "menu" ? selection.name : selection?.source === "site" ? SITE_SERVICES.find((item) => item.id === selection.id)?.label : "Service request"
						}),
						!selection ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Open a category and choose a service from the menu."
						}) : null,
						siteId === "network" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Use this to connect an office to the network, or to bring internet into a new location."
						}) : null,
						siteId === "voip" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										checked: voipKind === "line",
										onChange: () => setVoipKind("line")
									}), " New VoIP phone line"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										checked: voipKind === "ext",
										onChange: () => setVoipKind("ext")
									}), " Add an extension"]
								}),
								voipKind === "ext" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2 rounded-xl bg-surface-2 p-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm",
											children: [
												"An extension adds ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium",
													children: "$18 per month"
												}),
												" to the Telxent VoIP bill. Telxent sends the confirmation. Nothing is billed until that confirmation comes back."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												className: "mt-1",
												checked: confirmMonthly,
												onChange: (event) => setConfirmMonthly(event.target.checked)
											}), "I agree to the $18 monthly extension on the Telxent bill."]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												className: "mt-1",
												checked: shipPhone,
												onChange: (event) => setShipPhone(event.target.checked)
											}), "I need a phone shipped. Add a desk phone to the cart."]
										})
									]
								}) : null
							]
						}) : null,
						siteId === "fax" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										checked: faxKind === "physical",
										onChange: () => setFaxKind("physical")
									}), " Physical fax"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										checked: faxKind === "efax",
										onChange: () => setFaxKind("efax")
									}), " eFax"]
								}),
								faxKind === "efax" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-1 text-sm",
									children: ["Email that should receive incoming faxes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: recipientEmail,
										onChange: (event) => setRecipientEmail(event.target.value),
										type: "email",
										required: true,
										className: "h-11 rounded-xl border border-line bg-white px-3"
									})]
								}) : null
							]
						}) : null,
						siteId === "internet" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-2",
							children: [
								["spectrum", "Spectrum cable"],
								["att", "AT&T Fiber"],
								["frontier", "Frontier Fiber"],
								["fixed", "Fixed wireless"]
							].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										checked: provider === id,
										onChange: () => setProvider(id)
									}),
									" ",
									label
								]
							}, id))
						}) : null,
						siteId === "wiring" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1 text-sm",
							children: [
								"Number of drops · $175 each",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: drops,
									onChange: (event) => setDrops(Math.max(1, Number(event.target.value) || 1)),
									type: "number",
									min: 1,
									max: 50,
									className: "h-11 w-28 rounded-xl border border-line bg-white px-3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted",
									children: [money(drops * 17500), " before the desk confirms the work."]
								})
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1 text-sm",
							children: ["Office address", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: site,
								onChange: (event) => setSite(event.target.value),
								className: "h-11 rounded-xl border border-line bg-white px-3"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1 text-sm",
							children: ["Notes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: notes,
								onChange: (event) => setNotes(event.target.value),
								className: "min-h-24 rounded-xl border border-line bg-white px-3 py-2"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-bad",
							children: error
						}) : null,
						done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [
								done,
								" ",
								shipPhone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "font-medium text-accent",
									href: checkoutHref(slug),
									children: "Checkout the phone"
								}) : null
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: place.isPending || !token || !selection,
							className: "h-11 rounded-xl bg-ink px-4 text-sm font-medium text-white disabled:opacity-50",
							children: place.isPending ? "Sending" : "Submit order"
						})
					]
				})]
			})
		]
	});
}
var $$splitComponentImporter$50 = () => import("./verify-BE-BuofG.mjs");
var Route$77 = createFileRoute("/portal/verify")({
	validateSearch: (search) => ({
		email: typeof search.email === "string" ? search.email : "",
		code: typeof search.code === "string" ? search.code : ""
	}),
	component: lazyRouteComponent($$splitComponentImporter$50, "component")
});
var Route$76 = createFileRoute("/production/")({ beforeLoad: () => {
	throw redirect({
		href: "/production/signin",
		replace: true
	});
} });
var $$splitComponentImporter$49 = () => import("./admin-portal-tH429qlI.mjs");
var Route$75 = createFileRoute("/production/admin-portal")({ component: lazyRouteComponent($$splitComponentImporter$49, "component") });
var Route$74 = createFileRoute("/production/home")({ beforeLoad: () => {
	throw redirect({
		href: "/production/user-portal",
		replace: true
	});
} });
var Route$73 = createFileRoute("/production/sign-in")({ beforeLoad: () => {
	throw redirect({
		href: "/production/signin",
		replace: true
	});
} });
var $$splitComponentImporter$48 = () => import("./signin-LgPEk9iJ.mjs");
var Route$72 = createFileRoute("/production/signin")({
	head: () => ({ meta: [{ title: "Sign in · Manage Tech Service User Portal" }, {
		name: "description",
		content: "Invite-only sign-in for the Manage Tech Service User Portal."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$48, "component")
});
var $$splitComponentImporter$47 = () => import("./user-portal-oh8s7TQH.mjs");
var Route$71 = createFileRoute("/production/user-portal")({ component: lazyRouteComponent($$splitComponentImporter$47, "component") });
var Route$70 = createFileRoute("/_app/notifications/")({ component: NotificationsPage });
var AUDIENCE$1 = {
	staff: "Everyone",
	agent: "Agents",
	admin: "Admins",
	owner: "Super Admin"
};
var KINDS$1 = {
	ticket: {
		label: "Ticket",
		icon: Ticket,
		tone: "bg-info-soft text-info"
	},
	order: {
		label: "Order",
		icon: ClipboardList,
		tone: "bg-accent-soft text-accent"
	},
	person: {
		label: "Person",
		icon: Users,
		tone: "bg-[#e7eef8] text-ink"
	},
	company: {
		label: "Company",
		icon: Building2,
		tone: "bg-[#e7eef8] text-ink"
	},
	catalog: {
		label: "Catalog",
		icon: Monitor,
		tone: "bg-surface-2 text-ink"
	},
	payment: {
		label: "Payment",
		icon: CreditCard,
		tone: "bg-warn-soft text-warn"
	},
	desk: {
		label: "Desk",
		icon: Shield,
		tone: "bg-surface-2 text-ink"
	}
};
function kindOf(notice) {
	return KINDS$1[notice.kind] ?? {
		label: notice.kind || "Desk",
		icon: Bell,
		tone: "bg-surface-2 text-ink"
	};
}
function NotificationsPage() {
	const query = useQuery({
		queryKey: ["notifications"],
		queryFn: () => listNotifications()
	});
	const [filter, setFilter] = (0, import_react.useState)("all");
	const unread = query.data?.filter((notice) => !notice.read).length ?? 0;
	const shown = (query.data ?? []).filter((notice) => filter === "all" || !notice.read);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full min-w-0 gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Desk",
				title: "Notifications",
				description: unread ? `${unread} unread for your role.` : "You are caught up. New desk activity will land here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2 sm:max-w-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter("all"),
					className: filter === "all" ? "h-11 rounded-full bg-ink text-sm font-semibold text-white" : "h-11 rounded-full border border-line bg-surface text-sm text-muted",
					children: "All"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setFilter("unread"),
					className: filter === "unread" ? "h-11 rounded-full bg-ink text-sm font-semibold text-white" : "h-11 rounded-full border border-line bg-surface text-sm text-muted",
					children: ["Unread", unread ? ` ${unread}` : ""]
				})]
			}),
			query.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : null,
			query.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message }) : null,
			query.data && shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid place-items-center gap-2 rounded-2xl border border-dashed border-line bg-surface px-6 py-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: filter === "unread" ? "No unread alerts" : "Nothing for your role yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-sm text-muted",
						children: "Tickets, orders, and people changes show up here when your role is allowed to see them."
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: shown.map((notice) => {
					const kind = kindOf(notice);
					const Icon = kind.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/notifications/$notificationId",
						params: { notificationId: String(notice.id) },
						className: notice.read ? "grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-2xl border border-line bg-surface p-3 sm:p-4" : "grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-2xl border border-accent/30 bg-white p-3 shadow-[0_1px_0_rgba(18,126,134,0.15)] sm:p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid size-11 place-items-center rounded-2xl ${kind.tone}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: 1.75
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "grid min-w-0 gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex flex-wrap items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-semibold tracking-wide text-subtle uppercase",
												children: kind.label
											}), !notice.read ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-accent px-1.5 text-[10px] font-semibold leading-4 text-white",
												children: "New"
											}) : null]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block truncate text-[15px] font-semibold",
											children: notice.title
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 text-xs text-muted",
										children: ago(notice.createdAt)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "line-clamp-2 text-sm leading-5 text-muted",
									children: notice.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted",
									children: [AUDIENCE$1[notice.audience] || notice.audience, notice.actorName ? ` · ${notice.actorName}` : ""]
								})
							]
						})]
					}) }, notice.id);
				})
			})
		]
	});
}
var Route$69 = createFileRoute("/_app/notifications/$notificationId")({ component: NotificationPage });
var AUDIENCE = {
	staff: "Everyone on the desk, including view-only",
	agent: "Agents, admins, and Super Admins",
	admin: "Admins and Super Admins",
	owner: "Super Admin only"
};
var KINDS = {
	ticket: {
		label: "Ticket",
		icon: Ticket,
		tone: "bg-info-soft text-info"
	},
	order: {
		label: "Order",
		icon: ClipboardList,
		tone: "bg-accent-soft text-accent"
	},
	person: {
		label: "Person",
		icon: Users,
		tone: "bg-[#e7eef8] text-ink"
	},
	company: {
		label: "Company",
		icon: Building2,
		tone: "bg-[#e7eef8] text-ink"
	},
	catalog: {
		label: "Catalog",
		icon: Monitor,
		tone: "bg-surface-2 text-ink"
	},
	payment: {
		label: "Payment",
		icon: CreditCard,
		tone: "bg-warn-soft text-warn"
	},
	desk: {
		label: "Desk",
		icon: Shield,
		tone: "bg-surface-2 text-ink"
	}
};
function NotificationPage() {
	const { notificationId = "" } = useParams({ strict: false });
	const id = Number(notificationId);
	const client = useQueryClient();
	const query = useQuery({
		queryKey: ["notification", id],
		queryFn: () => getNotification({ data: id })
	});
	(0, import_react.useEffect)(() => {
		if (!query.isSuccess) return;
		client.invalidateQueries({ queryKey: ["notifications"] });
		client.invalidateQueries({ queryKey: ["shell"] });
	}, [
		query.isSuccess,
		id,
		client
	]);
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	const notice = query.data;
	const kind = KINDS[notice.kind] ?? {
		label: notice.kind || "Desk",
		icon: Bell,
		tone: "bg-surface-2 text-ink"
	};
	const Icon = kind.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full min-w-0 gap-4 pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/notifications",
				className: "inline-flex h-11 w-fit items-center gap-1 text-sm font-semibold text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "Notifications"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid w-full min-w-0 gap-5 rounded-3xl border border-line bg-surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid size-12 shrink-0 place-items-center rounded-2xl ${kind.tone}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: 1.75
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold tracking-[0.14em] text-subtle uppercase",
									children: kind.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-1 break-words text-2xl font-semibold tracking-tight",
									children: notice.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: ago(notice.createdAt)
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "break-words text-[15px] leading-7 text-ink",
						children: notice.body || "No extra detail was recorded."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-bg px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] font-semibold tracking-wide text-subtle uppercase",
								children: "From"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm font-medium",
								children: notice.actorName || "The desk"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-bg px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] font-semibold tracking-wide text-subtle uppercase",
								children: "Who can see this"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm font-medium",
								children: AUDIENCE[notice.audience] || notice.audience
							})]
						})]
					})
				]
			}),
			notice.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 z-20 px-4 md:static md:px-0",
				style: { bottom: "max(5.25rem, calc(env(safe-area-inset-bottom) + 4.5rem))" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: notice.href,
					className: "inline-flex h-12 w-full items-center justify-center rounded-2xl bg-ink text-sm font-semibold text-white shadow-lg lg:w-fit lg:px-6 lg:shadow-none",
					children: "Open the record"
				})
			}) : null
		]
	});
}
var Route$68 = createFileRoute("/_app/orders/")({ component: OrdersPage$1 });
function matchesView(order, view) {
	const payment = shopifyPayment(order);
	const fulfillment = shopifyFulfillment(order);
	if (view === "open") return order.status !== "cancelled";
	if (view === "unfulfilled") return fulfillment.label === "Unfulfilled";
	if (view === "unpaid") return payment.label === "Unpaid" || payment.label === "Payment pending" || payment.label === "Authorized";
	if (view === "fulfilled") return fulfillment.label === "Fulfilled";
	if (view === "canceled") return order.status === "cancelled";
	return true;
}
function OrdersPage$1() {
	const query = useQuery({
		queryKey: ["orders"],
		queryFn: () => listOrders()
	});
	const people = useQuery({
		queryKey: ["people"],
		queryFn: () => getPeople()
	});
	const products = useQuery({
		queryKey: ["products"],
		queryFn: () => listProducts()
	});
	const payments = useQuery({
		queryKey: ["payments"],
		queryFn: () => getPayments()
	});
	const [open, setOpen] = (0, import_react.useState)(false);
	const [organizationId, setOrganizationId] = (0, import_react.useState)("");
	const [customerUserId, setCustomerUserId] = (0, import_react.useState)("");
	const [productId, setProductId] = (0, import_react.useState)("");
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	const [notes, setNotes] = (0, import_react.useState)("");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("");
	const [lines, setLines] = (0, import_react.useState)([]);
	const [view, setView] = (0, import_react.useState)("all");
	const [layout, setLayout] = useViewMode("mts-orders-view", "grid");
	const navigate = useNavigate();
	const client = useQueryClient();
	const save = useMutation({
		mutationFn: () => createOrder({ data: {
			organizationId: Number(organizationId),
			customerUserId: customerUserId === "" ? null : Number(customerUserId),
			notes,
			paymentMethod: paymentMethod || payments.data?.methods[0] || "",
			returnUrl: `${window.location.origin}/orders`,
			items: lines.map((line) => ({
				productId: line.productId,
				quantity: line.quantity
			}))
		} }),
		onSuccess: (result) => {
			toast.success("Order created");
			setOpen(false);
			setLines([]);
			setNotes("");
			client.invalidateQueries({ queryKey: ["orders"] });
			client.invalidateQueries({ queryKey: ["dashboard"] });
			client.invalidateQueries({ queryKey: ["shell"] });
			if (result.paymentUrl && (paymentMethod || payments.data?.methods[0]) === "alternative") window.open(result.paymentUrl, "_blank", "noopener,noreferrer");
			navigate({
				to: "/orders/$orderId",
				params: { orderId: String(result.id) }
			});
		},
		onError: (error) => toast.error(errorText(error))
	});
	const companyPeople = people.data?.people.filter((person) => person.organizationId === organizationId && person.active) ?? [];
	const catalog = products.data?.filter((product) => product.available) ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
					eyebrow: "Catalog",
					title: "Orders",
					description: "Payment, fulfillment, and delivery follow the current state of each order.",
					actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => setOpen(true),
						children: "New order"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-center gap-2 md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2 md:justify-start",
					children: [
						["all", "All"],
						["open", "Open"],
						["unfulfilled", "Unfulfilled"],
						["unpaid", "Unpaid"],
						["fulfilled", "Fulfilled"],
						["canceled", "Canceled"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setView(id),
						className: view === id ? "h-11 shrink-0 rounded-full bg-ink px-4 text-[13px] font-semibold text-white" : "h-11 shrink-0 rounded-full border border-line bg-surface px-4 text-[13px] text-muted",
						children: label
					}, id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewSwitch, {
					mode: layout,
					onChange: setLayout
				})]
			}),
			query.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : null,
			query.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message }) : null,
			query.data ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: layout === "grid" ? "grid w-full justify-items-center gap-3 sm:grid-cols-2 sm:justify-items-stretch xl:grid-cols-3" : "grid w-full gap-2 md:hidden",
				children: query.data.filter((order) => matchesView(order, view)).map((order) => {
					const payment = shopifyPayment(order);
					const fulfillment = shopifyFulfillment(order);
					const delivery = shopifyDelivery(order);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/orders/$orderId",
						params: { orderId: String(order.id) },
						className: layout === "grid" ? "grid w-full max-w-md justify-items-center gap-3 rounded-2xl border border-line bg-surface p-4 text-center shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:max-w-none sm:text-left sm:justify-items-stretch" : "grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 text-left",
						children: layout === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid justify-items-center gap-0.5 sm:justify-items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base font-semibold",
									children: order.number
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: order.organizationName
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-semibold tabular-nums",
								children: money(order.totalCents + order.shippingCents)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-center gap-2 sm:justify-start",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: payment.tone,
										children: payment.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: fulfillment.tone,
										children: fulfillment.label
									}),
									delivery ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: delivery.tone,
										children: delivery.label
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid w-full grid-cols-2 gap-2 text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rounded-xl bg-bg px-2 py-2 text-center",
									children: day(order.createdAt)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate rounded-xl bg-bg px-2 py-2 text-center",
									children: orderCustomer(order)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									order.itemCount,
									" ",
									order.itemCount === 1 ? "item" : "items",
									order.trackingNumber ? ` · ${order.trackingNumber}` : ""
								]
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-semibold",
							children: order.number
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-0.5 block text-xs text-muted",
							children: [
								orderCustomer(order),
								" · ",
								day(order.createdAt)
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold tabular-nums",
								children: money(order.totalCents + order.shippingCents)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: payment.label
							})]
						})] })
					}, order.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: layout === "list" ? "hidden w-full overflow-x-auto rounded-2xl border border-line bg-surface md:block" : "hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[64rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-xs text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Order"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Customer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Total"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Payment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Fulfillment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Delivery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Items"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: query.data.filter((order) => matchesView(order, view)).map((order) => {
						const payment = shopifyPayment(order);
						const fulfillment = shopifyFulfillment(order);
						const delivery = shopifyDelivery(order);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/orders/$orderId",
										params: { orderId: String(order.id) },
										className: "font-medium hover:underline",
										children: order.number
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: order.organizationName
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted",
									"data-label": "Date",
									children: day(order.createdAt)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3",
									"data-label": "Customer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: orderCustomer(order) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: orderEmail(order) || "—"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono tabular-nums",
									"data-label": "Total",
									children: money(order.totalCents + order.shippingCents)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3",
									"data-label": "Payment",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: payment.tone,
										children: payment.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: order.paymentMethod ? paymentLabel(order.paymentMethod) : "—"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									"data-label": "Fulfillment",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: fulfillment.tone,
										children: fulfillment.label
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3",
									"data-label": "Delivery",
									children: [delivery ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: delivery.tone,
										children: delivery.label
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: "—"
									}), order.trackingNumber ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-xs text-muted",
										children: order.trackingNumber
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 tabular-nums",
									"data-label": "Items",
									children: order.itemCount
								})
							]
						}, order.id);
					}) })]
				})
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open,
				onOpenChange: setOpen,
				title: "New order",
				description: "Ordering follows the company rules and the person's permissions.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-3",
					onSubmit: (event) => {
						event.preventDefault();
						save.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Company",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: organizationId,
								onChange: (event) => {
									setOrganizationId(event.target.value ? Number(event.target.value) : "");
									setCustomerUserId("");
								},
								required: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Choose"
								}), people.data?.orgs.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: org.id,
									children: org.name
								}, org.id))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Requester",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: customerUserId,
								onChange: (event) => setCustomerUserId(event.target.value ? Number(event.target.value) : ""),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Desk, no customer"
								}), companyPeople.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: person.id,
									children: person.name
								}, person.id))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_5rem_auto]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: productId,
									onChange: (event) => setProductId(event.target.value ? Number(event.target.value) : ""),
									"aria-label": "Product",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Product"
									}), catalog.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: product.id,
										children: product.name
									}, product.id))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 1,
									value: quantity,
									onChange: (event) => setQuantity(Number(event.target.value)),
									"aria-label": "Quantity"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									onClick: () => {
										const product = catalog.find((item) => item.id === productId);
										if (!product) return;
										setLines((current) => [...current, {
											productId: product.id,
											name: product.name,
											quantity
										}]);
										setProductId("");
										setQuantity(1);
									},
									children: "Add"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "text-sm",
							children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 border-t border-line py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									line.quantity,
									" × ",
									line.name
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-muted",
									onClick: () => setLines(lines.filter((_, item) => item !== index)),
									children: "Remove"
								})]
							}, `${line.productId}-${index}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Payment",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: paymentMethod || payments.data?.methods[0] || "",
								onChange: (event) => setPaymentMethod(event.target.value),
								children: (payments.data?.methods ?? []).map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: method,
									children: [paymentLabel(method), method === "invoice" && payments.data ? ` · ${payments.data.invoiceTerms}` : ""]
								}, method))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Notes",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: notes,
								onChange: (event) => setNotes(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: save.isPending || lines.length === 0,
							children: save.isPending ? "Saving" : "Place order"
						})
					]
				})
			})
		]
	});
}
function detector() {
	const Ctor = window.BarcodeDetector;
	if (!Ctor) return null;
	return new Ctor({ formats: [
		"code_128",
		"code_39",
		"qr_code",
		"ean_13",
		"ean_8",
		"upc_a",
		"itf",
		"codabar",
		"pdf417",
		"data_matrix"
	] });
}
function AwbScanner({ onScan }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const videoRef = (0, import_react.useRef)(null);
	const onScanRef = (0, import_react.useRef)(onScan);
	onScanRef.current = onScan;
	(0, import_react.useEffect)(() => {
		if (!open) return;
		let stopped = false;
		let stream = null;
		let timer = 0;
		const finish = (value) => {
			const awb = normalizeAwb(value);
			if (awb.length < 8) return;
			stopped = true;
			onScanRef.current(awb);
			setOpen(false);
		};
		(async () => {
			const reader = detector();
			if (!reader || !navigator.mediaDevices?.getUserMedia) {
				setMessage("This browser has no barcode scanner. Type the UPS 1Z number, or use Chrome.");
				return;
			}
			try {
				stream = await navigator.mediaDevices.getUserMedia({
					audio: false,
					video: { facingMode: { ideal: "environment" } }
				});
			} catch {
				setMessage("Allow the camera to scan the UPS label.");
				return;
			}
			const video = videoRef.current;
			if (!video) return;
			video.srcObject = stream;
			await video.play();
			const tick = async () => {
				if (stopped || !video.videoWidth) {
					timer = window.setTimeout(tick, 200);
					return;
				}
				try {
					const value = (await reader.detect(video)).find((hit) => hit.rawValue)?.rawValue;
					if (value) {
						finish(value);
						return;
					}
				} catch {}
				timer = window.setTimeout(tick, 200);
			};
			tick();
		})();
		return () => {
			stopped = true;
			window.clearTimeout(timer);
			stream?.getTracks().forEach((track) => track.stop());
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "secondary",
			onClick: () => {
				setMessage("");
				setOpen(true);
			},
			children: "Scan UPS AWB"
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-lg border border-line bg-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "aspect-[4/3] w-full object-cover",
				muted: true,
				playsInline: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2 bg-surface px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: message || "Point the camera at the 1Z barcode."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-xs font-medium text-ink",
					onClick: () => setOpen(false),
					children: "Close"
				})]
			})]
		}) : message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: message
		}) : null]
	});
}
/**
* Code 128, set B. Courier guns (UPS, FedEx, generic USB scanners) read this.
* The payload is the order number, for example MT-1042.
*
* Patterns are the ISO/IEC 15417 bar widths. Index 104 is Start B, 106 is Stop.
*/
var WIDTHS = [
	"212222",
	"222122",
	"222221",
	"121223",
	"121322",
	"131222",
	"122213",
	"122312",
	"132212",
	"221213",
	"221312",
	"231212",
	"112232",
	"122132",
	"122231",
	"113222",
	"123122",
	"123221",
	"223211",
	"221132",
	"221231",
	"213212",
	"223112",
	"312131",
	"311222",
	"321122",
	"321221",
	"312212",
	"322112",
	"322211",
	"212123",
	"212321",
	"232121",
	"111323",
	"131123",
	"131321",
	"112313",
	"132113",
	"132311",
	"211313",
	"231113",
	"231311",
	"112133",
	"112331",
	"132131",
	"113123",
	"113321",
	"133121",
	"313121",
	"211331",
	"231131",
	"213113",
	"213311",
	"213131",
	"311123",
	"311321",
	"331121",
	"312113",
	"312311",
	"332111",
	"314111",
	"221411",
	"431111",
	"111224",
	"111422",
	"121124",
	"121421",
	"141122",
	"141221",
	"112214",
	"112412",
	"122114",
	"122411",
	"142112",
	"142211",
	"241211",
	"221114",
	"413111",
	"241112",
	"134111",
	"111242",
	"121142",
	"121241",
	"114212",
	"124112",
	"124211",
	"411212",
	"421112",
	"421211",
	"212141",
	"214121",
	"412121",
	"111143",
	"111341",
	"131141",
	"114113",
	"114311",
	"411113",
	"411311",
	"113141",
	"114131",
	"311141",
	"411131",
	"211412",
	"211214",
	"211232",
	"2331112"
];
var START_B = 104;
function modules(pattern) {
	const bars = [];
	for (let i = 0; i < pattern.length; i += 1) {
		const width = pattern.charCodeAt(i) - 48;
		const black = i % 2 === 0;
		for (let n = 0; n < width; n += 1) bars.push(black);
	}
	return bars;
}
/** Black modules of a Code 128B symbol, without the quiet zone. */
function code128Bars(value) {
	if (WIDTHS.length !== 107) throw new Error("Code 128 table is incomplete.");
	if (!value || value.length > 32) throw new Error("Order number is missing.");
	const codes = [];
	for (const char of value) {
		const code = char.charCodeAt(0) - 32;
		if (code < 0 || code > 94) throw new Error("Order number has a character Code 128 cannot encode.");
		codes.push(code);
	}
	let checksum = START_B;
	codes.forEach((code, index) => {
		checksum += code * (index + 1);
	});
	return [
		START_B,
		...codes,
		checksum % 103,
		106
	].flatMap((symbol) => modules(WIDTHS[symbol] ?? ""));
}
/** Quiet zone is 10 modules, which is what a courier scanner expects. */
function OrderBarcode({ value, module = 2, height = 72 }) {
	const bars = code128Bars(value);
	const quiet = 10;
	const width = (bars.length + 20) * module;
	const rects = [];
	let index = 0;
	while (index < bars.length) {
		if (!bars[index]) {
			index += 1;
			continue;
		}
		let run = 1;
		while (bars[index + run]) run += 1;
		rects.push({
			x: (quiet + index) * module,
			w: run * module
		});
		index += run;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${width} ${height}`,
		width: "100%",
		height,
		role: "img",
		"aria-label": `Air waybill barcode ${value}`,
		shapeRendering: "crispEdges",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width,
			height,
			fill: "#ffffff"
		}), rects.map((bar) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: bar.x,
			y: "0",
			width: bar.w,
			height,
			fill: "#111111"
		}, `${bar.x}-${bar.w}`))]
	});
}
function ascii(value) {
	return value.replace(/[^\x20-\x7E]/g, " ").replace(/\\/g, " ").slice(0, 110);
}
function esc(value) {
	return ascii(value).replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}
function drawBarcode(push, value, x, y, module, height) {
	const bars = code128Bars(value);
	let cursor = x + 10 * module;
	let index = 0;
	push("0 0 0 rg");
	while (index < bars.length) {
		if (!bars[index]) {
			cursor += module;
			index += 1;
			continue;
		}
		let run = 1;
		while (bars[index + run]) run += 1;
		const width = Number((run * module).toFixed(2));
		push(`${cursor.toFixed(2)} ${y} ${width} ${height} re f`);
		cursor += run * module;
		index += run;
	}
}
function buildOrderPdf(order) {
	const rows = [];
	const push = (cmd) => rows.push(cmd);
	push("0.188 0.188 0.188 rg");
	push("0 742 612 50 re f");
	push("BT");
	push("/F2 14 Tf");
	push("1 1 1 rg");
	push("1 0 0 1 48 762 Tm");
	push("(Manage Tech Service) Tj");
	push("/F1 9 Tf");
	push("1 0 0 1 48 750 Tm");
	push("(Catalog order) Tj");
	push("ET");
	push("0.102 0.098 0.086 rg");
	push("BT");
	push("/F2 16 Tf");
	push(`1 0 0 1 48 710 Tm`);
	push(`(${esc(order.number)}) Tj`);
	push("/F1 11 Tf");
	push(`1 0 0 1 48 690 Tm`);
	push(`(${esc(order.organizationName)}) Tj`);
	push(`1 0 0 1 48 674 Tm`);
	push(`(${esc(order.customerName || "No requester")}  ${esc(order.customerEmail)}) Tj`);
	push(`1 0 0 1 48 652 Tm`);
	push(`(Status ${esc(order.status)}    Placed ${esc(day(order.createdAt))}) Tj`);
	const ticket = order.zendeskTicketId ? `Zendesk ${order.zendeskTicketId}` : order.ticketId ? `Portal ticket ${order.ticketId}` : "No linked ticket";
	push(`1 0 0 1 48 636 Tm`);
	push(`(${esc(ticket)}) Tj`);
	push("ET");
	drawBarcode(push, order.number, 360, 656, 1.15, 52);
	push("BT");
	push("/F1 8 Tf");
	push("0.102 0.098 0.086 rg");
	push("1 0 0 1 372 646 Tm");
	push(`(${esc(order.number)}) Tj`);
	push("ET");
	push("0.78 0.76 0.72 RG");
	push("0.6 w");
	push("48 618 m 564 618 l S");
	push("BT");
	push("/F2 9 Tf");
	push("0.45 0.43 0.40 rg");
	push("1 0 0 1 48 600 Tm");
	push("(Item) Tj");
	push("1 0 0 1 320 600 Tm");
	push("(Qty) Tj");
	push("1 0 0 1 380 600 Tm");
	push("(Unit) Tj");
	push("1 0 0 1 480 600 Tm");
	push("(Line) Tj");
	push("ET");
	let y = 580;
	for (const item of order.items.slice(0, 12)) {
		const line = item.quantity * item.unitPriceCents;
		push("0.102 0.098 0.086 rg");
		push("BT");
		push("/F1 10 Tf");
		push(`1 0 0 1 48 ${y} Tm`);
		push(`(${esc(`${item.productName}  ${item.sku}`)}) Tj`);
		push(`1 0 0 1 320 ${y} Tm`);
		push(`(${item.quantity}) Tj`);
		push(`1 0 0 1 380 ${y} Tm`);
		push(`(${esc(money(item.unitPriceCents))}) Tj`);
		push(`1 0 0 1 480 ${y} Tm`);
		push(`(${esc(money(line))}) Tj`);
		push("ET");
		y -= 18;
	}
	y -= 8;
	push("0.78 0.76 0.72 RG");
	push(`48 ${y + 12} m 564 ${y + 12} l S`);
	push("BT");
	push("/F2 12 Tf");
	push("0.102 0.098 0.086 rg");
	push(`1 0 0 1 380 ${y} Tm`);
	push(`(Total  ${esc(money(order.totalCents))}) Tj`);
	push("ET");
	y -= 36;
	const notes = [
		order.notes ? `Notes: ${order.notes}` : "",
		order.approvalNote ? `Approval: ${order.approvalNote}` : "",
		order.processingNote ? `Processing: ${order.processingNote}` : ""
	].filter(Boolean);
	push("BT");
	push("/F1 10 Tf");
	for (const note of notes) {
		push(`1 0 0 1 48 ${y} Tm`);
		push(`(${esc(note)}) Tj`);
		y -= 16;
	}
	push("ET");
	push("BT");
	push("/F1 8 Tf");
	push("0.45 0.43 0.40 rg");
	push("1 0 0 1 48 48 Tm");
	push("(Zendesk remains the system of record for the linked support ticket.) Tj");
	push("ET");
	const stream = rows.join("\n");
	const objects = [
		"<< /Type /Catalog /Pages 2 0 R >>",
		"<< /Type /Pages /Count 1 /Kids [3 0 R] >>",
		"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>",
		`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
		"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
		"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"
	];
	let body = "%PDF-1.4\n";
	const offsets = [0];
	objects.forEach((obj, index) => {
		offsets.push(body.length);
		body += `${index + 1} 0 obj\n${obj}\nendobj\n`;
	});
	const xref = body.length;
	body += `xref\n0 ${objects.length + 1}\n`;
	body += "0000000000 65535 f \n";
	for (let i = 1; i < offsets.length; i += 1) body += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
	body += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
	return new TextEncoder().encode(body);
}
function orderPdfUrl(order) {
	const bytes = buildOrderPdf(order);
	return URL.createObjectURL(new Blob([bytes.buffer], { type: "application/pdf" }));
}
var Route$67 = createFileRoute("/_app/orders/$orderId")({ component: OrderPage });
var STATUSES = [
	"pending",
	"approved",
	"processing",
	"fulfilled",
	"cancelled"
];
function printAwb(number) {
	const label = document.getElementById("awb-label");
	if (!label) return;
	const popup = window.open("", "awb", "noopener,noreferrer,width=480,height=720");
	if (!popup) return;
	popup.document.write(`<!doctype html><meta charset="utf-8"><title>${number} air waybill</title>
    <style>body{margin:28px;font-family:Helvetica,sans-serif;color:#111}svg{width:100%;height:auto}p{text-align:center}</style>
    ${label.innerHTML}<script>addEventListener("load",()=>print())<\/script>`);
	popup.document.close();
}
function OrderPage() {
	const { orderId = "" } = useParams({ strict: false });
	const id = Number(orderId);
	const client = useQueryClient();
	const navigate = useNavigate();
	const query = useQuery({
		queryKey: ["order", id],
		queryFn: () => getOrder({ data: id })
	});
	const [status, setStatus] = (0, import_react.useState)("pending");
	const [approvalNote, setApprovalNote] = (0, import_react.useState)("");
	const [processingNote, setProcessingNote] = (0, import_react.useState)("");
	const [shipmentStatus, setShipmentStatus] = (0, import_react.useState)("unfulfilled");
	const [trackingNumber, setTrackingNumber] = (0, import_react.useState)("");
	const [trackingCarrier, setTrackingCarrier] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [lines, setLines] = (0, import_react.useState)([]);
	const [addProductId, setAddProductId] = (0, import_react.useState)("");
	const [awbNote, setAwbNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!query.data) return;
		setStatus(query.data.order.status);
		setApprovalNote(query.data.order.approvalNote);
		setProcessingNote(query.data.order.processingNote);
		setShipmentStatus(query.data.order.shipmentStatus || "unfulfilled");
		setTrackingNumber(query.data.order.trackingNumber);
		setTrackingCarrier(query.data.order.trackingCarrier);
		setNotes(query.data.order.notes);
		setLines(query.data.order.items.map((item) => ({
			productId: item.productId,
			productName: item.productName,
			sku: item.sku,
			quantity: item.quantity,
			unitPriceCents: item.unitPriceCents
		})));
	}, [query.data]);
	const save = useMutation({
		mutationFn: () => updateOrder({ data: {
			id,
			status,
			approvalNote,
			processingNote,
			shipmentStatus,
			trackingNumber,
			trackingCarrier,
			notes,
			items: lines.map((line) => ({
				productId: line.productId,
				sku: line.sku,
				quantity: line.quantity
			}))
		} }),
		onSuccess: () => {
			toast.success("Order updated");
			client.invalidateQueries({ queryKey: ["order", id] });
			client.invalidateQueries({ queryKey: ["orders"] });
			client.invalidateQueries({ queryKey: ["dashboard"] });
			client.invalidateQueries({ queryKey: ["shell"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const remove = useMutation({
		mutationFn: () => deleteOrder({ data: id }),
		onSuccess: () => {
			toast.success("Order deleted");
			client.invalidateQueries({ queryKey: ["orders"] });
			client.invalidateQueries({ queryKey: ["dashboard"] });
			client.invalidateQueries({ queryKey: ["shell"] });
			navigate({ to: "/orders" });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const link = useMutation({
		mutationFn: () => linkOrderTicket({ data: id }),
		onSuccess: (result) => {
			if (result.warning) toast.error(`Ticket saved here. ${result.warning}`);
			else toast.success("Linked to a ticket");
			client.invalidateQueries({ queryKey: ["order", id] });
			client.invalidateQueries({ queryKey: ["tickets"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const refreshPay = useMutation({
		mutationFn: () => refreshAlternativeOrder({ data: id }),
		onSuccess: (next) => {
			toast.success(next.paymentStatus ? `Payment ${next.paymentStatus}` : "Payment checked");
			client.invalidateQueries({ queryKey: ["order", id] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const scan = useMutation({
		mutationFn: (awb) => trackAwb({ data: awb }),
		onSuccess: (result) => {
			setTrackingNumber(result.awb);
			if (result.carrier) setTrackingCarrier(result.carrier);
			if (result.shipmentStatus) setShipmentStatus(result.shipmentStatus);
			setAwbNote(result.detail);
			toast.success(result.valid ? "Air waybill scanned" : "Check the scanned number");
		},
		onError: (error) => toast.error(errorText(error))
	});
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	const order = query.data.order;
	const payment = shopifyPayment(order);
	const fulfillment = shopifyFulfillment(order);
	const delivery = shopifyDelivery(order);
	function openPdf() {
		const url = orderPdfUrl(order);
		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.download = `${order.number}.pdf`;
		anchor.click();
		window.setTimeout(() => URL.revokeObjectURL(url), 1500);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: `Placed ${day(order.createdAt)}`,
				title: order.number,
				description: `${order.organizationName}${order.customerName ? ` · ${order.customerName}` : ""}${order.paymentMethod ? ` · ${paymentLabel(order.paymentMethod)}` : ""}`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					order.paymentMethod === "alternative" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: order.paymentUrl || "https://go.alternativepayments.io",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex h-8 items-center rounded-lg bg-ink px-3 text-[13px] font-semibold text-white",
						children: "Pay with Alternative Payments"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						disabled: refreshPay.isPending,
						onClick: () => refreshPay.mutate(),
						children: refreshPay.isPending ? "Checking" : "Check payment"
					})] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						type: "button",
						onClick: openPdf,
						children: "Order PDF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/orders",
						className: "inline-flex h-11 items-center text-sm text-accent",
						children: "All orders"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: payment.tone,
						children: payment.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: fulfillment.tone,
						children: fulfillment.label
					}),
					delivery ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: delivery.tone,
						children: delivery.label
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: order.status }),
					order.ticketId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/tickets/$ticketId",
						params: { ticketId: String(order.ticketId) },
						className: "text-sm text-accent",
						children: order.zendeskTicketId ? `Zendesk #${order.zendeskTicketId}` : `Portal ticket P-${order.ticketId}`
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: "No linked ticket"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-muted",
							children: "Customer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold",
							children: orderCustomer(order)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: orderEmail(order) || "No email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: order.shipPhone || "No phone"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted",
							children: order.organizationName
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-muted",
							children: "Ship to"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm",
							children: [
								order.shipAddress,
								order.shipCity,
								order.shipRegion,
								order.shipPostal,
								order.shipCountry
							].filter(Boolean).join(", ") || "No shipping address"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted",
							children: [order.shippingMethod === "express" ? "Express" : order.shippingMethod === "standard" ? "Standard" : "Not chosen", order.shippingCents ? ` · ${money(order.shippingCents)}` : order.shippingMethod ? " · Free" : ""]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-muted",
							children: "Payment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold",
							children: payment.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: order.paymentMethod ? paymentLabel(order.paymentMethod) : "No method"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm tabular-nums",
							children: [
								"Items ",
								money(order.totalCents),
								order.shippingCents ? ` · Shipping ${money(order.shippingCents)}` : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-semibold tabular-nums",
							children: ["Total ", money(order.totalCents + order.shippingCents)]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-muted",
							children: "Fulfillment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold",
							children: fulfillment.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: delivery?.label || "No delivery update"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-xs text-muted",
							children: order.trackingNumber ? `${order.trackingCarrier || "Tracking"} ${order.trackingNumber}` : "No tracking number"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								order.itemCount,
								" ",
								order.itemCount === 1 ? "item" : "items",
								" · Placed ",
								day(order.createdAt)
							]
						})
					] })
				]
			}),
			order.events.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold",
				children: "Timeline"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 divide-y divide-line",
				children: order.events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-1 py-2 sm:flex-row sm:items-baseline sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium capitalize",
								children: event.kind
							}),
							event.fromValue || event.toValue ? ` · ${event.fromValue || "—"} → ${event.toValue || "—"}` : "",
							event.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [" · ", event.detail]
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							event.actorName,
							" · ",
							ago(event.createdAt)
						]
					})]
				}, event.id))
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Items"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "stack-wrap mt-4 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "stack-table w-full min-w-[28rem] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-xs text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Item"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Qty"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Unit"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 text-right font-medium",
										children: "Line"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: lines.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-line",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: item.productName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted",
											children: item.sku
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3",
										"data-label": "Qty",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 1,
											max: 999,
											value: item.quantity,
											disabled: !query.data.canEdit,
											"aria-label": `Quantity for ${item.productName}`,
											className: "h-8 w-16 font-mono",
											onChange: (event) => {
												const quantity = Math.max(1, Number(event.target.value) || 1);
												setLines((current) => current.map((line, lineIndex) => lineIndex === index ? {
													...line,
													quantity
												} : line));
											}
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 font-mono tabular-nums",
										"data-label": "Unit",
										children: money(item.unitPriceCents)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-3 text-right",
										"data-label": "Line",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono tabular-nums",
											children: money(item.quantity * item.unitPriceCents)
										}), query.data.canEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "ml-3 text-xs text-muted hover:text-ink",
											onClick: () => setLines((current) => current.filter((_, lineIndex) => lineIndex !== index)),
											children: "Remove"
										}) : null]
									})
								]
							}, `${item.sku}-${index}`)) })]
						})
					}),
					query.data.canEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: addProductId,
							onChange: (event) => setAddProductId(event.target.value ? Number(event.target.value) : ""),
							"aria-label": "Add a product",
							className: "h-8 max-w-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Add a product"
							}), query.data.products.filter((product) => product.available).map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: product.id,
								children: product.name
							}, product.id))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							onClick: () => {
								const product = query.data.products.find((item) => item.id === addProductId);
								if (!product) return;
								setLines((current) => [...current, {
									productId: product.id,
									productName: product.name,
									sku: product.sku,
									quantity: 1,
									unitPriceCents: product.priceCents
								}]);
								setAddProductId("");
							},
							children: "Add"
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-right font-mono text-lg tabular-nums",
						children: money(lines.reduce((sum, line) => sum + line.quantity * line.unitPriceCents, 0))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Notes",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: notes,
							disabled: !query.data.canEdit,
							onChange: (event) => setNotes(event.target.value)
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid content-start gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Air waybill"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted",
								children: [
									"Code 128 of this order. A UPS scanner, or any courier barcode gun, reads it as ",
									order.number,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "awb-label",
								className: "mt-4 rounded-lg border border-line bg-white px-3 py-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-ink",
										children: "Manage Tech Service"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderBarcode, { value: order.number })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-center font-mono text-sm tracking-[0.18em] text-ink",
										children: order.number
									}),
									order.shipName || order.shipCity ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-center text-xs text-muted",
										children: [
											order.shipName,
											order.shipCity,
											order.shipRegion,
											order.shipPostal
										].filter(Boolean).join(", ")
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-3",
								type: "button",
								variant: "secondary",
								onClick: () => printAwb(order.number),
								children: "Print waybill"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Processing"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-4 grid gap-3",
							onSubmit: (event) => {
								event.preventDefault();
								save.mutate();
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Status",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										value: status,
										onChange: (event) => setStatus(event.target.value),
										children: STATUSES.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value,
											children: value
										}, value))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Approval",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										value: approvalNote,
										onChange: (event) => setApprovalNote(event.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Shipment",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: shipmentStatus,
										onChange: (event) => setShipmentStatus(event.target.value),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "unfulfilled",
												children: "Not shipped"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "shipped",
												children: "Shipped"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "out_for_delivery",
												children: "Out for delivery"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "delivered",
												children: "Delivered"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Carrier",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: trackingCarrier,
										onChange: (event) => setTrackingCarrier(event.target.value),
										placeholder: "UPS"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "UPS air waybill",
									hint: "Scan the 1Z barcode on the label, then save the order.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: trackingNumber,
										onChange: (event) => setTrackingNumber(event.target.value.toUpperCase()),
										placeholder: "1Z…",
										className: "font-mono",
										autoComplete: "off"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwbScanner, { onScan: (awb) => scan.mutate(awb) }),
								awbNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: scan.isPending ? "Checking UPS…" : awbNote
								}) : null,
								isUpsAwb(trackingNumber.replace(/[^0-9A-Z]/gi, "").toUpperCase()) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-sm text-accent",
									href: upsTrackUrl(trackingNumber.replace(/\s/g, "")),
									target: "_blank",
									rel: "noreferrer",
									children: "Open this number on UPS"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Bench note",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										value: processingNote,
										onChange: (event) => setProcessingNote(event.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: !query.data.canEdit || save.isPending || lines.length === 0,
									children: save.isPending ? "Saving" : "Save order"
								}),
								query.data.canDelete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									disabled: remove.isPending,
									onClick: () => {
										if (window.confirm(`Delete ${order.number}? This cannot be undone.`)) remove.mutate();
									},
									children: remove.isPending ? "Deleting" : "Delete order"
								}) : null
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Zendesk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: order.ticketSubject || "Creates a portal ticket tagged Pending Orders, and a Zendesk ticket when the desk is connected."
							}),
							order.ticketId ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-4",
								type: "button",
								variant: "secondary",
								disabled: link.isPending,
								onClick: () => link.mutate(),
								children: link.isPending ? "Linking" : "Create ticket"
							})
						] })
					]
				})]
			})
		]
	});
}
var Route$66 = createFileRoute("/_app/organizations/")({ component: CompaniesPage });
function CompaniesPage() {
	const query = useQuery({
		queryKey: ["orgs"],
		queryFn: () => listOrgs()
	});
	const [open, setOpen] = (0, import_react.useState)(false);
	const [layout, setLayout] = useViewMode("mts-companies-view");
	const [name, setName] = (0, import_react.useState)("");
	const [domain, setDomain] = (0, import_react.useState)("");
	const [industry, setIndustry] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const client = useQueryClient();
	const save = useMutation({
		mutationFn: () => saveOrg({ data: {
			name,
			domain,
			industry,
			phone,
			address: "",
			zendeskOrgId: "",
			notes,
			portalAccess: true,
			orderingEnabled: true,
			userRequestsEnabled: true,
			approvalRequired: true
		} }),
		onSuccess: (result) => {
			toast.success("Company added");
			client.invalidateQueries({ queryKey: ["orgs"] });
			client.invalidateQueries({ queryKey: ["dashboard"] });
			client.invalidateQueries({ queryKey: ["shell"] });
			setOpen(false);
			navigate({
				to: "/organizations/$orgId",
				params: { orgId: String(result.id) }
			});
		},
		onError: (error) => toast.error(errorText(error))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Customers",
				title: "Companies",
				description: "Profiles, Zendesk organizations, and who is allowed to order.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setOpen(true),
					children: "Add company"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center md:justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewSwitch, {
					mode: layout,
					onChange: setLayout
				})
			}),
			query.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : null,
			query.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message }) : null,
			query.data && query.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
				title: "No companies",
				body: "Add the first customer organization."
			}) : null,
			query.data && query.data.length > 0 ? layout === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid justify-items-center gap-3 sm:grid-cols-2 sm:justify-items-stretch xl:grid-cols-3",
				children: query.data.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/organizations/$orgId",
					params: { orgId: String(org.id) },
					className: "grid w-full max-w-md justify-items-center gap-2 rounded-2xl border border-line bg-surface p-4 text-center sm:max-w-none sm:justify-items-start sm:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-semibold",
							children: org.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: org.industry || "No industry"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-2 sm:justify-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: org.portalAccess ? "good" : "neutral",
								children: org.portalAccess ? "Portal on" : "Portal off"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid w-full grid-cols-2 gap-2 text-center text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "rounded-xl bg-bg px-2 py-2",
								children: [org.userCount, " people"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "rounded-xl bg-bg px-2 py-2",
								children: [org.openTickets, " open tickets"]
							})]
						})
					]
				}, org.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2 md:hidden",
				children: query.data.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/organizations/$orgId",
					params: { orgId: String(org.id) },
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-semibold",
						children: org.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-0.5 block text-xs text-muted",
						children: [
							org.userCount,
							" people · ",
							org.openTickets,
							" tickets"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: org.portalAccess ? "good" : "neutral",
						children: org.portalAccess ? "On" : "Off"
					})]
				}) }, org.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden overflow-x-auto rounded-2xl border border-line bg-surface md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[56rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-xs text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Domains"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Details"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Created"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "External ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Users"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Tickets"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: query.data.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								"data-label": "Name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/organizations/$orgId",
									params: { orgId: String(org.id) },
									className: "font-medium hover:underline",
									children: org.name
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								"data-label": "Domains",
								children: org.domain || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								"data-label": "Details",
								children: org.industry || org.notes || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								"data-label": "Created",
								children: org.createdAt ? day(org.createdAt) : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-xs",
								"data-label": "External ID",
								children: org.zendeskOrgId || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 tabular-nums",
								"data-label": "Users",
								children: org.userCount
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3",
								"data-label": "Tickets",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: org.openTickets
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: org.portalAccess ? "good" : "neutral",
									children: org.portalAccess ? "Shared" : "Private"
								})]
							})
						]
					}, org.id)) })]
				})
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open,
				onOpenChange: setOpen,
				title: "Add organization",
				description: "Same fields Zendesk stores on an organization.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-3",
					onSubmit: (event) => {
						event.preventDefault();
						save.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: name,
								onChange: (event) => setName(event.target.value),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Domain names",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: domain,
								onChange: (event) => setDomain(event.target.value),
								placeholder: "company.example"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Details",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: industry,
								onChange: (event) => setIndustry(event.target.value),
								placeholder: "Industry"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: phone,
								onChange: (event) => setPhone(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Notes",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: notes,
								onChange: (event) => setNotes(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: save.isPending,
							children: save.isPending ? "Saving" : "Create organization"
						})
					]
				})
			})
		]
	});
}
var Route$65 = createFileRoute("/_app/organizations/$orgId")({ component: CompanyPage });
function CompanyPage() {
	const { orgId = "" } = useParams({ strict: false });
	const id = Number(orgId);
	const client = useQueryClient();
	const query = useQuery({
		queryKey: ["org", id],
		queryFn: () => getOrg({ data: id })
	});
	const [form, setForm] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (query.data) setForm(query.data.org);
	}, [query.data]);
	const save = useMutation({
		mutationFn: () => {
			if (!form) throw new Error("Missing company.");
			return saveOrg({ data: form });
		},
		onSuccess: () => {
			toast.success("Company saved");
			client.invalidateQueries({ queryKey: ["org", id] });
			client.invalidateQueries({ queryKey: ["orgs"] });
			client.invalidateQueries({ queryKey: ["shell"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	if (query.isPending || !form) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	const detail = query.data;
	function patch(partial) {
		setForm((current) => current ? {
			...current,
			...partial
		} : current);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: form.industry || "Company",
				title: form.name,
				description: form.domain || "No domain on file",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => save.mutate(),
					disabled: save.isPending,
					children: save.isPending ? "Saving" : "Save company"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.name,
								onChange: (event) => patch({ name: event.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Domain names",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.domain,
								onChange: (event) => patch({ domain: event.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Details",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.details || form.industry,
								onChange: (event) => patch({
									details: event.target.value,
									industry: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Tags",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.tags,
								onChange: (event) => patch({ tags: event.target.value }),
								placeholder: "vip, portal"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.phone,
								onChange: (event) => patch({ phone: event.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "External ID",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.zendeskOrgId,
								onChange: (event) => patch({ zendeskOrgId: event.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Address",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.address,
								onChange: (event) => patch({ address: event.target.value })
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Notes",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: form.notes,
							onChange: (event) => patch({ notes: event.target.value })
						})
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 content-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: form.portalAccess,
							onCheckedChange: (portalAccess) => patch({ portalAccess }),
							label: "Portal access"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: form.orderingEnabled,
							onCheckedChange: (orderingEnabled) => patch({ orderingEnabled }),
							label: "Catalog ordering"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: form.userRequestsEnabled,
							onCheckedChange: (userRequestsEnabled) => patch({ userRequestsEnabled }),
							label: "User requests"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							checked: form.approvalRequired,
							onCheckedChange: (approvalRequired) => patch({ approvalRequired }),
							label: "Order approval required"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "People"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 divide-y divide-line text-sm",
							children: [detail.people.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: person.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										person.permissionLevel,
										" · ",
										person.email
									]
								})]
							}, person.id)), detail.people.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "py-2 text-muted",
								children: "No people yet."
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/users",
							className: "mt-3 inline-block text-sm text-accent",
							children: "Manage people"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Tickets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 divide-y divide-line text-sm",
							children: detail.tickets.map((ticket) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tickets/$ticketId",
									params: { ticketId: String(ticket.id) },
									className: "font-medium hover:underline",
									children: ticket.subject
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										ticket.status,
										" · ",
										ago(ticket.updatedAt)
									]
								})]
							}, ticket.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tickets",
							search: ticketSearch({
								org: String(form.id),
								status: "all"
							}),
							className: "mt-3 inline-block text-sm text-accent",
							children: "Company tickets"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Orders"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 divide-y divide-line text-sm",
							children: [detail.orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-2 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/orders/$orderId",
									params: { orderId: String(order.id) },
									className: "font-medium hover:underline",
									children: order.number
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted",
									children: money(order.totalCents)
								})]
							}, order.id)), detail.orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "py-2 text-muted",
								children: "No orders yet."
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: form.orderingEnabled ? "ordering on" : "ordering off" })
					] })
				]
			})
		]
	});
}
var VIEWS = [
	"",
	"Pending Projects",
	"Pending Orders",
	"Need Invoice"
];
var Route$64 = createFileRoute("/_app/tickets/")({
	validateSearch: (search) => ticketSearch({
		q: typeof search.q === "string" ? search.q : "",
		status: typeof search.status === "string" ? search.status : "unresolved",
		org: typeof search.org === "string" ? search.org : "",
		category: typeof search.category === "string" ? search.category : "",
		assignee: typeof search.assignee === "string" ? search.assignee : "",
		view: typeof search.view === "string" ? search.view : ""
	}),
	component: TicketsPage
});
function TicketsPage() {
	const raw = useSearch({ strict: false });
	const search = ticketSearch({
		q: raw.q ?? "",
		status: raw.status ?? "unresolved",
		org: raw.org ?? "",
		category: raw.category ?? "",
		assignee: raw.assignee ?? "",
		view: raw.view ?? ""
	});
	const navigate = useNavigate();
	const query = useQuery({
		queryKey: ["tickets", search],
		queryFn: () => listTickets({ data: {
			q: search.q,
			status: search.status,
			orgId: search.org ? Number(search.org) : null,
			category: search.category,
			assignee: search.assignee,
			view: search.view
		} })
	});
	const [layout, setLayout] = useViewMode("mts-tickets-view");
	function setSearch(partial) {
		navigate({
			to: ".",
			search: {
				...search,
				...partial
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Zendesk",
				title: "Tickets",
				description: "Unresolved work, saved views, and the conversation stay tied to Zendesk when the account is connected."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-center gap-2 md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2 md:justify-start",
					children: VIEWS.map((view) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSearch({ view }),
						className: search.view === view ? "h-9 rounded-md bg-accent px-3 text-sm text-accent-fg" : "h-9 rounded-md border border-line bg-surface px-3 text-sm",
						children: view || "All views"
					}, view || "all-views"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewSwitch, {
					mode: layout,
					onChange: setLayout
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: search.status,
						onChange: (event) => setSearch({ status: event.target.value }),
						"aria-label": "Status",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "unresolved",
								children: "Unresolved"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "new",
								children: "New"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "open",
								children: "Open"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "pending",
								children: "Pending"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "solved",
								children: "Solved and closed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "Every status"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: search.org,
						onChange: (event) => setSearch({ org: event.target.value }),
						"aria-label": "Company",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All companies"
						}), query.data?.orgs.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: org.id,
							children: org.name
						}, org.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: search.category,
						onChange: (event) => setSearch({ category: event.target.value }),
						"aria-label": "Category",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All categories"
						}), query.data?.categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: category }, category))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: search.assignee,
						onChange: (event) => setSearch({ assignee: event.target.value }),
						"aria-label": "Assignee",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Anyone"
						}), query.data?.assignees.map((assignee) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: assignee }, assignee))]
					})
				]
			}),
			query.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : null,
			query.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message }) : null,
			query.data ? layout === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid justify-items-center gap-3 sm:grid-cols-2 sm:justify-items-stretch xl:grid-cols-3",
				children: [query.data.tickets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted sm:col-span-2 xl:col-span-3",
					children: "No tickets match this view."
				}) : null, query.data.tickets.map((ticket) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/tickets/$ticketId",
					params: { ticketId: String(ticket.id) },
					className: "grid w-full max-w-md justify-items-center gap-2 rounded-2xl border border-line bg-surface p-4 text-center sm:max-w-none sm:justify-items-start sm:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: ticket.status }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: ticket.subject
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								ticket.organizationName || "No company",
								" · ",
								ticket.assignee || "Unassigned"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								ticket.zendeskId ? `#${ticket.zendeskId}` : `P-${ticket.id}`,
								" · ",
								ago(ticket.updatedAt)
							]
						})
					]
				}, ticket.id))]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "grid gap-2 md:hidden",
				children: [query.data.tickets.map((ticket) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/tickets/$ticketId",
					params: { ticketId: String(ticket.id) },
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-semibold",
						children: ticket.subject
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-0.5 block text-xs text-muted",
						children: [
							ticket.organizationName || "No company",
							" · ",
							ago(ticket.updatedAt)
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: ticket.status })]
				}) }, ticket.id)), query.data.tickets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-6 text-center text-sm text-muted",
					children: "No tickets match this view."
				}) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden overflow-x-auto rounded-2xl border border-line bg-surface md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[72rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-xs text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Subject"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Requester"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Requested"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Updated"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Channel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Group"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Assignee"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Priority"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Status"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [query.data.tickets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "stack-empty px-4 py-8 text-muted",
						colSpan: 11,
						children: "No tickets match this view."
					}) }) : null, query.data.tickets.map((ticket) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-xs",
								"data-label": "ID",
								children: ticket.zendeskId ? `#${ticket.zendeskId}` : `P-${ticket.id}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3",
								"data-label": "Subject",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tickets/$ticketId",
									params: { ticketId: String(ticket.id) },
									className: "font-medium hover:underline",
									children: ticket.subject
								}), ticket.category ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: ticket.category
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3",
								"data-label": "Requester",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: ticket.requesterName || "—" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: ticket.requesterEmail
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								"data-label": "Requested",
								children: day(ticket.createdAt)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								"data-label": "Updated",
								children: ago(ticket.updatedAt)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 capitalize",
								"data-label": "Channel",
								children: ticket.channel || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								"data-label": "Group",
								children: ticket.groupName || ticket.viewLabel || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								"data-label": "Assignee",
								children: ticket.assignee || "Unassigned"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 capitalize",
								"data-label": "Type",
								children: ticket.ticketType || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 capitalize",
								"data-label": "Priority",
								children: ticket.priority || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								"data-label": "Status",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: ticket.status })
							})
						]
					}, ticket.id))] })]
				})
			})] }) : null
		]
	});
}
var Route$63 = createFileRoute("/_app/tickets/$ticketId")({ component: TicketPage });
function TicketPage() {
	const { ticketId = "" } = useParams({ strict: false });
	const id = Number(ticketId);
	const client = useQueryClient();
	const query = useQuery({
		queryKey: ["ticket", id],
		queryFn: () => getTicket({ data: id })
	});
	const [body, setBody] = (0, import_react.useState)("");
	const [publicNote, setPublicNote] = (0, import_react.useState)(true);
	const [draft, setDraft] = (0, import_react.useState)({
		subject: "",
		status: "open",
		priority: "normal",
		ticketType: "question",
		assignee: "",
		groupName: "",
		tags: "",
		requesterName: "",
		requesterEmail: ""
	});
	(0, import_react.useEffect)(() => {
		const ticket = query.data?.ticket;
		if (!ticket) return;
		setDraft({
			subject: ticket.subject,
			status: ticket.status,
			priority: ticket.priority || "normal",
			ticketType: ticket.ticketType || "question",
			assignee: ticket.assignee,
			groupName: ticket.groupName,
			tags: ticket.tags.join(", "),
			requesterName: ticket.requesterName,
			requesterEmail: ticket.requesterEmail
		});
	}, [query.data?.ticket]);
	const reply = useMutation({
		mutationFn: () => replyTicket({ data: {
			ticketId: id,
			body,
			publicNote
		} }),
		onSuccess: (result) => {
			setBody("");
			if (result.warning) toast.error(`Saved here. ${result.warning}`);
			else toast.success(publicNote ? "Reply sent" : "Internal note saved");
			client.invalidateQueries({ queryKey: ["ticket", id] });
			client.invalidateQueries({ queryKey: ["tickets"] });
			client.invalidateQueries({ queryKey: ["dashboard"] });
			client.invalidateQueries({ queryKey: ["shell"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	const update = useMutation({
		mutationFn: () => updateTicket({ data: {
			id,
			subject: draft.subject,
			status: draft.status,
			assignee: draft.assignee,
			priority: draft.priority,
			ticketType: draft.ticketType,
			groupName: draft.groupName,
			tags: draft.tags,
			requesterName: draft.requesterName,
			requesterEmail: draft.requesterEmail
		} }),
		onSuccess: (result) => {
			if (result.warning) toast.error(result.warning);
			else toast.success("Ticket updated");
			client.invalidateQueries({ queryKey: ["ticket", id] });
			client.invalidateQueries({ queryKey: ["tickets"] });
		},
		onError: (error) => toast.error(errorText(error))
	});
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (query.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorNote, { message: query.error.message });
	const ticket = query.data.ticket;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: ticket.zendeskId ? `Zendesk #${ticket.zendeskId}` : `Portal P-${ticket.id}`,
			title: ticket.subject,
			description: `${ticket.requesterName || "Unknown requester"}${ticket.requesterEmail ? ` · ${ticket.requesterEmail}` : ""}`,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/tickets",
				search: ticketSearch(),
				className: "inline-flex h-11 items-center text-sm text-accent",
				children: "Back to tickets"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_20rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Conversation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-4 grid gap-3",
					children: [query.data.comments.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: comment.publicNote ? "rounded-lg border border-line px-3 py-3" : "rounded-lg bg-warn-soft px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: comment.authorName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								comment.publicNote ? "Public" : "Internal",
								" · ",
								stamp(comment.createdAt)
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 whitespace-pre-wrap text-sm",
							children: comment.body
						})]
					}, comment.id)), query.data.comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "No replies yet."
					}) : null]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-3",
					onSubmit: (event) => {
						event.preventDefault();
						reply.mutate();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: publicNote ? "Public reply" : "Internal note",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: body,
							onChange: (event) => setBody(event.target.value),
							required: true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								size: "sm",
								variant: publicNote ? "primary" : "secondary",
								onClick: () => setPublicNote(true),
								children: "Public"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								size: "sm",
								variant: !publicNote ? "primary" : "secondary",
								onClick: () => setPublicNote(false),
								children: "Internal"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: reply.isPending,
							children: reply.isPending ? "Sending" : "Add to ticket"
						})]
					})]
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				className: "h-fit",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-3",
					onSubmit: (event) => {
						event.preventDefault();
						update.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Ticket fields"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: ticket.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Subject",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.subject,
								onChange: (event) => setDraft({
									...draft,
									subject: event.target.value
								}),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Requester",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.requesterName,
								onChange: (event) => setDraft({
									...draft,
									requesterName: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Requester email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								value: draft.requesterEmail,
								onChange: (event) => setDraft({
									...draft,
									requesterEmail: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Status",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: draft.status,
								onChange: (event) => setDraft({
									...draft,
									status: event.target.value
								}),
								children: [
									"new",
									"open",
									"pending",
									"hold",
									"solved",
									"closed"
								].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: status }, status))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: draft.ticketType,
								onChange: (event) => setDraft({
									...draft,
									ticketType: event.target.value
								}),
								children: [
									"question",
									"incident",
									"problem",
									"task"
								].map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: type }, type))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Priority",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: draft.priority,
								onChange: (event) => setDraft({
									...draft,
									priority: event.target.value
								}),
								children: [
									"low",
									"normal",
									"high",
									"urgent"
								].map((priority) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: priority }, priority))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.groupName,
								onChange: (event) => setDraft({
									...draft,
									groupName: event.target.value
								}),
								placeholder: "Support"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Assignee",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.assignee,
								onChange: (event) => setDraft({
									...draft,
									assignee: event.target.value
								}),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Unassigned"
									}),
									query.data.assignees.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: name }, name)),
									draft.assignee && !query.data.assignees.includes(draft.assignee) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: draft.assignee }) : null
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Tags",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.tags,
								onChange: (event) => setDraft({
									...draft,
									tags: event.target.value
								}),
								placeholder: "portal, customer"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Organization"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: ticket.organizationId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/organizations/$orgId",
								params: { orgId: String(ticket.organizationId) },
								className: "text-accent",
								children: ticket.organizationName
							}) : "Unlinked" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Form"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: ticket.category || "—" })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: update.isPending,
							children: update.isPending ? "Saving" : "Save ticket"
						})
					]
				})
			})]
		})]
	});
}
var OFFERINGS = {
	network: "connecting the office to the network",
	"voip-line": "a VoIP phone line",
	"voip-ext": "a VoIP extension",
	"fax-physical": "a physical fax line",
	"fax-efax": "eFax",
	"internet-spectrum": "Spectrum cable internet",
	"internet-att": "AT&T Fiber",
	"internet-frontier": "Frontier Fiber",
	"internet-fixed": "fixed wireless internet",
	wiring: "wiring"
};
function s(row, key) {
	const value = row?.[key];
	return value == null ? "" : String(value);
}
function n(row, key) {
	const value = Number(row?.[key] ?? 0);
	return Number.isFinite(value) ? value : 0;
}
function b(row, key) {
	const value = row?.[key];
	return value === true || value === "t" || value === "true" || value === 1;
}
function json(body, status = 200) {
	return Response.json(body, {
		status,
		headers: {
			"access-control-allow-origin": "*",
			"access-control-allow-headers": "authorization, content-type",
			"access-control-allow-methods": "GET, POST, PATCH, DELETE, OPTIONS"
		}
	});
}
function clip(value, max) {
	return String(value ?? "").trim().slice(0, max);
}
function emailOk(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
async function mailCode(sql, email, code) {
	const mail = await resolveMail(sql);
	if (!mail.key || !mail.from) return false;
	return (await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${mail.key}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from: mail.from,
			to: [email],
			subject: "Verify your Manage Tech Service portal",
			text: `Your verification code is ${code}. It expires in 30 minutes.`
		})
	})).ok;
}
function newCode() {
	const bytes = /* @__PURE__ */ new Uint8Array(3);
	crypto.getRandomValues(bytes);
	return String(1e5 + (bytes[0] << 16 | bytes[1] << 8 | bytes[2]) % 9e5);
}
async function customer(sql, id) {
	return (await sql`
    select c.*, o.name as organization_name
    from shop_customers c
    left join organizations o on o.id = c.organization_id
    where c.id = ${id}
    limit 1
  `)[0];
}
async function access(sql, row) {
	const roleId = s(row, "role_id") || "regular";
	const policy = (await sql`select * from role_policies where id = ${roleId}`)[0];
	const canShop = (policy ? b(policy, "can_shop") : false) || b(row, "grant_shop");
	return {
		roleId,
		canTicket: policy ? policy.can_ticket == null ? true : b(policy, "can_ticket") : true,
		canShop,
		canPurchase: (policy ? b(policy, "can_purchase") : false) || canShop,
		canPayNow: (policy ? b(policy, "can_pay_now") : false) || canShop,
		canOrderIt: (policy ? b(policy, "can_order_it") : false) || b(row, "grant_services"),
		canOrderPhone: (policy ? b(policy, "can_order_phone") : false) || b(row, "grant_services"),
		canDefer: b(row, "grant_invoice")
	};
}
function profile(row, flags) {
	return {
		id: n(row, "id"),
		name: s(row, "name"),
		email: s(row, "email"),
		phone: s(row, "phone"),
		address: s(row, "address"),
		city: s(row, "city"),
		region: s(row, "region"),
		postal: s(row, "postal"),
		country: s(row, "country") || "United States",
		business: s(row, "business_name"),
		organization: s(row, "organization_name"),
		verified: b(row, "email_verified"),
		payLater: b(row, "pay_later"),
		grants: {
			shop: b(row, "grant_shop"),
			services: b(row, "grant_services"),
			invoice: b(row, "grant_invoice")
		},
		access: flags
	};
}
async function redeemHandoff(request) {
	const body = await request.json().catch(() => ({}));
	const code = typeof body.code === "string" ? body.code.slice(0, 80) : "";
	if (!code) return json({ error: "Missing code." }, 400);
	const sql = await getSql();
	await sql`
    create table if not exists agent_handoffs (
      code text primary key,
      customer_id integer not null,
      email text not null,
      name text not null default '',
      phone text not null default '',
      business text not null default '',
      organization text not null default '',
      role text not null default '',
      expires_at timestamptz not null,
      used_at timestamptz
    )
  `;
	const row = (await sql`
    update agent_handoffs
    set used_at = now()
    where code = ${code} and used_at is null and expires_at > now()
    returning customer_id, email, name, phone, business, organization, role
  `)[0];
	if (!row) return json({ error: "Handoff expired." }, 401);
	return json({
		id: n(row, "customer_id"),
		email: s(row, "email"),
		name: s(row, "name"),
		phone: s(row, "phone"),
		business: s(row, "business"),
		organization: s(row, "organization"),
		role: s(row, "role")
	});
}
async function handleAgentRequest(request) {
	if (request.method === "OPTIONS") return json({ ok: true });
	const url = new URL(request.url);
	const parts = url.pathname.replace(/^\/api\/agent\/?/, "").split("/").filter(Boolean);
	if (parts[0] === "handoff" && parts[1] === "redeem" && request.method === "POST") return redeemHandoff(request);
	const auth = await authorizeAgentKey(request.headers.get("authorization") || "") || await authorizeOauthToken(request.headers.get("authorization") || "");
	if (!auth) return json({ error: "Unauthorized. Send Authorization: Bearer with an mts_ key from /docs." }, 401);
	const sql = auth.sql;
	try {
		await sql`
      insert into audit_logs (actor_user_id, actor_name, action, target, detail)
      values (${`key:${auth.id}`}, ${auth.name}, ${request.method}, ${url.pathname}, '')
    `;
		if (parts[0] !== "customers") return json({ error: "Unknown path. See /api/openapi.json." }, 404);
		if (parts.length === 1 && request.method === "GET") {
			const q = url.searchParams.get("q")?.trim().slice(0, 80) || "";
			const like = `%${q.replace(/%/g, "")}%`;
			return json((q ? await sql`
            select c.id, c.name, c.email, c.phone, c.business_name, c.email_verified, o.name as organization_name
            from shop_customers c
            left join organizations o on o.id = c.organization_id
            where c.name ilike ${like} or c.email ilike ${like} or c.business_name ilike ${like}
            order by c.created_at desc
            limit 50
          ` : await sql`
            select c.id, c.name, c.email, c.phone, c.business_name, c.email_verified, o.name as organization_name
            from shop_customers c
            left join organizations o on o.id = c.organization_id
            order by c.created_at desc
            limit 50
          `).map((row) => ({
				id: n(row, "id"),
				name: s(row, "name"),
				email: s(row, "email"),
				phone: s(row, "phone"),
				business: s(row, "business_name"),
				organization: s(row, "organization_name"),
				verified: b(row, "email_verified")
			})));
		}
		if (parts.length === 1 && request.method === "POST") {
			const body = await request.json().catch(() => ({}));
			const email = clip(body.email, 160).toLowerCase();
			const name = clip(body.name, 120) || email.split("@")[0] || "";
			if (!emailOk(email)) return json({ error: "Enter a valid email. The user verifies that address. The other fields are optional." }, 400);
			const existing = await sql`select id from shop_customers where lower(email) = ${email}`;
			if (existing[0]) return json({
				error: "That email already has an account.",
				id: n(existing[0], "id")
			}, 409);
			const business = clip(body.business, 160);
			const phone = clip(body.phone, 40);
			const domain = email.split("@")[1] || "";
			const shared = [
				"gmail.com",
				"yahoo.com",
				"outlook.com",
				"hotmail.com",
				"icloud.com"
			].includes(domain);
			let organizationId = null;
			if (!shared && domain) {
				const found = await sql`select id from organizations where lower(domain) = ${domain} limit 1`;
				if (found[0]) organizationId = n(found[0], "id");
			}
			if (!organizationId && business) organizationId = n((await sql`
          insert into organizations (name, domain, phone, portal_access, ordering_enabled, notes)
          values (${business}, ${shared ? "" : domain}, ${phone}, true, false, 'Created by the CSR super admin key. The user still has to verify their email.')
          returning id
        `)[0], "id");
			const code = newCode();
			const inserted = await sql`
        insert into shop_customers (
          email, name, password_hash, phone, address, city, region, postal, country,
          business_name, organization_id, role_id, email_verified, verify_code, verify_expires
        ) values (
          ${email}, ${name}, ${`blocked:${crypto.randomUUID()}`}, ${phone},
          ${clip(body.address, 160)}, ${clip(body.city, 80)}, ${clip(body.region, 80)}, ${clip(body.postal, 20)},
          ${clip(body.country, 80) || "United States"}, ${business}, ${organizationId}, 'regular',
          false, ${code}, now() + interval '30 minutes'
        )
        returning id
      `;
			const mailed = await mailCode(sql, email, code);
			return json({
				id: n(inserted[0], "id"),
				email,
				name,
				verified: false,
				mailed
			}, 201);
		}
		const id = Number(parts[1]);
		if (!Number.isInteger(id) || id <= 0) return json({ error: "Customer id must be a number." }, 400);
		const row = await customer(sql, id);
		if (!row) return json({ error: "No customer with that id." }, 404);
		const flags = await access(sql, row);
		const elevated = auth.scope === "super_admin";
		const email = s(row, "email");
		const name = s(row, "name");
		const orgId = s(row, "organization_id") ? n(row, "organization_id") : null;
		if (parts.length === 2 && request.method === "GET") return json(profile(row, flags));
		if (parts.length === 2 && request.method === "DELETE") {
			await sql`delete from customer_notices where shop_customer_id = ${id}`;
			await sql`delete from complaints where shop_customer_id = ${id}`;
			await sql`delete from service_requests where shop_customer_id = ${id}`;
			await sql`update orders set shop_customer_id = null where shop_customer_id = ${id}`;
			await sql`delete from shop_customers where id = ${id}`;
			return json({ ok: true });
		}
		if (parts.length === 2 && request.method === "PATCH") {
			const body = await request.json().catch(() => ({}));
			if ("emailVerified" in body || "verified" in body || "role" in body || "password" in body || "grants" in body) return json({ error: "The user verifies their own email with the code that was sent. This key cannot set a password, role, or grant." }, 400);
			const nextName = clip(body.name, 120) || name;
			if (!nextName) return json({ error: "Enter a name." }, 400);
			await sql`
        update shop_customers set
          name = ${nextName},
          phone = ${"phone" in body ? clip(body.phone, 40) : s(row, "phone")},
          address = ${"address" in body ? clip(body.address, 160) : s(row, "address")},
          city = ${"city" in body ? clip(body.city, 80) : s(row, "city")},
          region = ${"region" in body ? clip(body.region, 80) : s(row, "region")},
          postal = ${"postal" in body ? clip(body.postal, 20) : s(row, "postal")},
          country = ${"country" in body ? clip(body.country, 80) || "United States" : s(row, "country") || "United States"},
          business_name = ${"business" in body ? clip(body.business, 160) : s(row, "business_name")}
        where id = ${id}
      `;
			return json({
				ok: true,
				verified: b(row, "email_verified")
			});
		}
		if (parts[2] === "verify" && parts.length === 3 && request.method === "POST") {
			const code = clip((await request.json().catch(() => ({}))).code, 12);
			if (!code) return json({ error: "The user has to read the code from their email and give it to you." }, 400);
			const decision = verificationDecision({
				hasAccount: true,
				storedCode: s(row, "verify_code"),
				submittedCode: code,
				expiresAt: s(row, "verify_expires"),
				attempts: n(row, "verify_attempts")
			});
			if (!decision.ok) {
				if (decision.reason === "mismatch") await sql`update shop_customers set verify_attempts = verify_attempts + 1 where id = ${id}`;
				if (decision.reason === "locked") return json({ error: "Too many attempts. Send a new code." }, 400);
				if (decision.reason === "expired") return json({ error: "That code has expired." }, 400);
				return json({ error: "That code is wrong." }, 400);
			}
			await sql`
        update shop_customers set email_verified = true, verify_code = '', verify_attempts = 0
        where id = ${id} and verify_code = ${code}
      `;
			return json({
				ok: true,
				verified: true
			});
		}
		if (parts[2] === "verify" && parts[3] === "resend" && request.method === "POST") {
			const code = newCode();
			await sql`
        update shop_customers set verify_code = ${code}, verify_expires = now() + interval '30 minutes', verify_attempts = 0
        where id = ${id}
      `;
			return json({
				ok: true,
				mailed: await mailCode(sql, email, code)
			});
		}
		if (parts[2] === "pages" && request.method === "GET") return json({ pages: [
			{
				label: "Home",
				path: "/portal",
				api: `/api/agent/customers/${id}/home`
			},
			{
				label: "Tickets",
				path: "/portal/tickets",
				api: `/api/agent/customers/${id}/tickets`
			},
			{
				label: "Order",
				path: "/portal/shop",
				api: `/api/agent/customers/${id}/shop`
			},
			{
				label: "Orders",
				path: "/portal/orders",
				api: `/api/agent/customers/${id}/orders`
			},
			{
				label: "Billing",
				path: "/portal/billing",
				api: `/api/agent/customers/${id}/billing`
			},
			{
				label: "Complaints",
				path: "/portal/complaints",
				api: `/api/agent/customers/${id}/complaints`
			},
			{
				label: "Organization",
				path: "/portal/organization",
				api: `/api/agent/customers/${id}/organization`
			},
			{
				label: "Account",
				path: "/portal/account",
				api: `/api/agent/customers/${id}`
			},
			{
				label: "Notifications",
				path: "/portal/notifications",
				api: `/api/agent/customers/${id}/notices`
			}
		] });
		if (parts[2] === "home" && request.method === "GET") {
			const tickets = await sql`select status from tickets where lower(requester_email) = lower(${email})`;
			const orders = await sql`
        select status, payment_method from orders
        where shop_customer_id = ${id} or lower(ship_email) = lower(${email})
      `;
			const services = await sql`select status from service_requests where shop_customer_id = ${id}`;
			const open = tickets.filter((item) => !["solved", "closed"].includes(s(item, "status"))).length;
			const pendingOrders = orders.filter((item) => !["fulfilled", "cancelled"].includes(s(item, "status"))).length;
			const unpaid = orders.filter((item) => [
				"pay_later",
				"unpaid",
				""
			].includes(s(item, "payment_method"))).length;
			return json({
				name,
				email,
				business: s(row, "business_name"),
				openTickets: open,
				pendingOrders,
				unpaid,
				pendingServices: services.filter((item) => ["requested", "quoted"].includes(s(item, "status"))).length,
				activeServices: services.filter((item) => ["approved", "provisioned"].includes(s(item, "status"))).length,
				page: "/portal"
			});
		}
		if (parts[2] === "shop" && request.method === "GET") {
			const settings = await sql`select brand_name, customer_catalog_visible from portal_settings where id = 1`;
			const products = ((settings[0] ? !b(settings[0], "customer_catalog_visible") : false) || !flags.canShop) && !elevated ? [] : await sql`select id, sku, name, category, description, price_cents, image_url, stock from products where available = true order by category, name`;
			const q = (url.searchParams.get("q") || "").trim().toLowerCase();
			const equipment = products.map((item) => ({
				id: n(item, "id"),
				sku: s(item, "sku"),
				name: s(item, "name"),
				category: s(item, "category"),
				description: s(item, "description"),
				priceCents: n(item, "price_cents"),
				imageUrl: s(item, "image_url"),
				stock: n(item, "stock")
			})).filter((item) => !q || `${item.sku} ${item.name} ${item.category} ${item.description}`.toLowerCase().includes(q));
			return json({
				page: "/portal/shop",
				canShop: flags.canShop || elevated,
				canPurchase: flags.canPurchase || elevated,
				payLater: flags.canDefer || b(row, "pay_later"),
				query: q,
				equipment,
				services: [
					{
						id: "network",
						label: "Connect an office",
						detail: "Bring the network or internet into a new office.",
						offering: "network",
						allowed: flags.canOrderIt
					},
					{
						id: "voip-line",
						label: "VoIP line",
						detail: "A new phone line.",
						offering: "voip-line",
						allowed: flags.canOrderPhone
					},
					{
						id: "voip-ext",
						label: "VoIP extension",
						detail: "$18 per month on the Telxent bill. Confirm before ordering.",
						offering: "voip-ext",
						allowed: flags.canOrderPhone
					},
					{
						id: "fax-physical",
						label: "Physical fax",
						detail: "A fax line.",
						offering: "fax-physical",
						allowed: flags.canOrderPhone
					},
					{
						id: "fax-efax",
						label: "eFax",
						detail: "Incoming faxes go to an email address.",
						offering: "fax-efax",
						allowed: flags.canOrderPhone
					},
					{
						id: "internet-spectrum",
						label: "Spectrum",
						detail: "Cable internet.",
						offering: "internet-spectrum",
						allowed: flags.canOrderIt
					},
					{
						id: "internet-att",
						label: "AT&T Fiber",
						detail: "Fiber internet.",
						offering: "internet-att",
						allowed: flags.canOrderIt
					},
					{
						id: "internet-frontier",
						label: "Frontier Fiber",
						detail: "Fiber internet.",
						offering: "internet-frontier",
						allowed: flags.canOrderIt
					},
					{
						id: "internet-fixed",
						label: "Fixed wireless",
						detail: "Fixed wireless internet.",
						offering: "internet-fixed",
						allowed: flags.canOrderIt
					},
					{
						id: "wiring",
						label: "Wiring",
						detail: "$175 per drop.",
						offering: "wiring",
						allowed: flags.canOrderIt
					}
				]
			});
		}
		if (parts[2] === "billing" && request.method === "GET") {
			if (!flags.canShop && !flags.canDefer) return json({ error: "Invoices and shop payments are turned off for this account." }, 403);
			const orders = await sql`
        select o.id, o.status, o.payment_method,
          coalesce((select sum(oi.quantity * oi.unit_price_cents)::int from order_items oi where oi.order_id = o.id), 0) + coalesce(o.shipping_cents, 0) as total_cents
        from orders o
        where o.shop_customer_id = ${id} or lower(o.ship_email) = lower(${email})
        order by o.created_at desc
        limit 30
      `;
			return json({
				page: "/portal/billing",
				invoiceAllowed: flags.canDefer,
				orders: orders.map((item) => ({
					id: n(item, "id"),
					number: `MT-${1e3 + n(item, "id")}`,
					status: s(item, "status"),
					paymentMethod: s(item, "payment_method") || "unpaid",
					totalCents: n(item, "total_cents")
				}))
			});
		}
		if (parts[2] === "organization" && request.method === "GET") return json({
			page: "/portal/organization",
			business: s(row, "business_name"),
			organization: s(row, "organization_name"),
			phone: s(row, "phone"),
			city: s(row, "city")
		});
		if (parts[2] === "organization" && (request.method === "PATCH" || request.method === "POST")) {
			const body = await request.json().catch(() => ({}));
			const business = clip(body.business, 160);
			const phone = clip(body.phone, 40) || s(row, "phone");
			const city = clip(body.city, 80) || s(row, "city");
			if (!business) return json({ error: "Enter the company name." }, 400);
			let organizationId = orgId;
			if (organizationId) await sql`update organizations set name = ${business}, phone = ${phone} where id = ${organizationId}`;
			else organizationId = n((await sql`
          insert into organizations (name, phone, portal_access, ordering_enabled, notes)
          values (${business}, ${phone}, true, true, 'Updated from the customer portal.')
          returning id
        `)[0], "id");
			await sql`
        update shop_customers set business_name = ${business}, phone = ${phone}, city = ${city}, organization_id = ${organizationId}
        where id = ${id}
      `;
			const ticket = await filePortalTicket(sql, {
				name,
				email,
				organizationId,
				subject: `Company update: ${business}`,
				category: "Account",
				body: `${name} updated their portal.\nCompany: ${business}\nPhone: ${phone}\nCity: ${city}`
			});
			return json({
				ok: true,
				ticketId: ticket.ticketId,
				zendeskId: ticket.zendeskId
			});
		}
		if (parts[2] === "tickets" && parts.length === 3 && request.method === "GET") return json((await sql`
        select id, subject, status, category, zendesk_id, updated_at
        from tickets
        where lower(requester_email) = lower(${email})
        order by updated_at desc
        limit 20
      `).map((item) => ({
			id: n(item, "id"),
			subject: s(item, "subject"),
			status: s(item, "status"),
			category: s(item, "category"),
			zendeskId: s(item, "zendesk_id"),
			updatedAt: s(item, "updated_at")
		})));
		if (parts[2] === "tickets" && parts.length === 3 && request.method === "POST") {
			if (!flags.canTicket) return json({ error: "This account cannot open tickets." }, 403);
			const body = await request.json().catch(() => ({}));
			const subject = clip(body.subject, 180);
			const text = clip(body.body, 4e3);
			if (!subject || !text) return json({ error: "Subject and body are required." }, 400);
			const category = clip(body.category, 80) || "IT support";
			const detail = [
				`Category: ${category}`,
				body.device ? `Device: ${clip(body.device, 120)}` : "",
				text
			].filter(Boolean).join("\n");
			return json(await filePortalTicket(sql, {
				name,
				email,
				organizationId: orgId,
				subject,
				category,
				body: detail
			}));
		}
		if (parts[2] === "tickets" && parts.length === 4 && request.method === "GET") {
			const ticketId = Number(parts[3]);
			const tickets = await sql`select * from tickets where id = ${ticketId} and lower(requester_email) = lower(${email})`;
			if (!tickets[0]) return json({ error: "That ticket is not on this account." }, 404);
			const comments = await sql`select author_name, body, created_at from ticket_comments where ticket_id = ${ticketId} and public_note = true order by created_at`;
			return json({
				id: n(tickets[0], "id"),
				subject: s(tickets[0], "subject"),
				status: s(tickets[0], "status"),
				category: s(tickets[0], "category"),
				zendeskId: s(tickets[0], "zendesk_id"),
				updatedAt: s(tickets[0], "updated_at"),
				comments: comments.map((item) => ({
					author: s(item, "author_name"),
					body: s(item, "body"),
					at: s(item, "created_at")
				}))
			});
		}
		if (parts[2] === "tickets" && parts[4] === "replies" && request.method === "POST") {
			const ticketId = Number(parts[3]);
			if (!(await sql`select id from tickets where id = ${ticketId} and lower(requester_email) = lower(${email})`)[0]) return json({ error: "That ticket is not on this account." }, 404);
			const text = clip((await request.json().catch(() => ({}))).body, 4e3);
			if (!text) return json({ error: "Write a reply." }, 400);
			await sql`insert into ticket_comments (ticket_id, author_name, body, public_note) values (${ticketId}, ${name || "Customer"}, ${text}, true)`;
			const copy = await filePortalTicket(sql, {
				name,
				email,
				organizationId: orgId,
				subject: `Mike reply on ticket ${ticketId}`,
				category: "Chat",
				body: text
			});
			return json({
				ok: true,
				ticketId: copy.ticketId,
				zendeskId: copy.zendeskId
			});
		}
		if (parts[2] === "orders" && parts.length === 3 && request.method === "GET") return json((await sql`
        select id, status, payment_status, shipment_status, created_at
        from orders
        where shop_customer_id = ${id} or lower(ship_email) = lower(${email})
        order by created_at desc
        limit 20
      `).map((item) => ({
			id: n(item, "id"),
			number: `MT-${1e3 + n(item, "id")}`,
			status: s(item, "status"),
			paymentStatus: s(item, "payment_status"),
			shipmentStatus: s(item, "shipment_status") || "unfulfilled",
			createdAt: s(item, "created_at")
		})));
		if (parts[2] === "orders" && parts.length === 3 && request.method === "POST") {
			if (!flags.canPurchase && !elevated) return json({ error: "This account cannot purchase products." }, 403);
			const body = await request.json().catch(() => ({}));
			const items = (Array.isArray(body.items) ? body.items : [{
				sku: body.sku,
				quantity: body.quantity ?? 1
			}]).map((item) => {
				const line = item && typeof item === "object" ? item : {};
				const quantity = Number(line.quantity ?? 1);
				return {
					sku: clip(line.sku, 40),
					quantity: Number.isInteger(quantity) ? quantity : 0
				};
			}).filter((item) => item.sku && item.quantity > 0 && item.quantity <= 99);
			if (!items.length) return json({ error: "Name a catalog SKU and a quantity." }, 400);
			const products = [];
			for (const item of items) {
				const found = await sql`select * from products where available = true and sku = ${item.sku} limit 1`;
				if (!found[0]) return json({ error: `${item.sku} is not in the catalog. Search the shop and order a listed SKU.` }, 400);
				products.push(found[0]);
			}
			const address = clip(body.address, 160) || s(row, "address");
			const city = clip(body.city, 80) || s(row, "city");
			const region = clip(body.region, 80) || s(row, "region");
			const postal = clip(body.postal, 20) || s(row, "postal");
			const country = clip(body.country, 80) || s(row, "country") || "United States";
			if (!address || !city || !postal) return json({ error: "A shipping address, city, and postal code are required." }, 400);
			const wantLater = body.payLater === true || body.paymentMethod === "pay_later";
			const mayDefer = flags.canDefer || b(row, "pay_later");
			if (wantLater && !mayDefer && !elevated) return json({ error: "This account has to pay before the order is placed." }, 403);
			const method = wantLater || !flags.canPayNow && mayDefer || elevated && wantLater ? "pay_later" : "card";
			if (method === "card" && !flags.canPayNow && !elevated) return json({ error: "This account cannot pay immediately." }, 403);
			const subtotal = items.reduce((sum, item, index) => sum + n(products[index], "price_cents") * item.quantity, 0);
			const shippingCents = body.shippingMethod === "express" ? 2500 : subtotal >= 5e4 ? 0 : 1500;
			const shippingMethod = body.shippingMethod === "express" ? "express" : "standard";
			const orderId = n((await sql`
        insert into orders (
          organization_id, customer_user_id, shop_customer_id, status, notes, approval_note, payment_method,
          ship_name, ship_email, ship_phone, ship_address, ship_city, ship_region, ship_postal, ship_country,
          shipping_method, shipping_cents, shipment_status
        ) values (
          ${orgId || await ensureDeskOrganization(sql)}, null, ${id}, 'pending', ${clip(body.notes, 1e3)}, 'Placed by Sarah for the signed-in customer.', ${method},
          ${name}, ${email}, ${s(row, "phone")}, ${address}, ${city}, ${region}, ${postal}, ${country},
          ${shippingMethod}, ${shippingCents}, 'unfulfilled'
        )
        returning id
      `)[0], "id");
			const lines = items.map((item, index) => ({
				description: s(products[index], "name"),
				amount: n(products[index], "price_cents") / 100,
				quantity: item.quantity,
				product: products[index]
			}));
			for (const line of lines) await sql`
          insert into order_items (order_id, product_id, product_name, sku, quantity, unit_price_cents)
          values (${orderId}, ${n(line.product, "id")}, ${s(line.product, "name")}, ${s(line.product, "sku")}, ${line.quantity}, ${n(line.product, "price_cents")})
        `;
			let paymentUrl = "";
			await sql`
        update orders set card_brand = '', card_last4 = '', card_exp = '', payment_status = ${method === "pay_later" ? "pay_later" : unpaidCardStatus()}
        where id = ${orderId}
      `;
			if (method === "card") {
				const creds = await loadAlternativeCreds(sql);
				if (creds) try {
					const due = /* @__PURE__ */ new Date();
					due.setDate(due.getDate() + 30);
					const checkout = await createAlternativeCheckout(creds, {
						reference: `MT-${1e3 + orderId}`,
						returnUrl: ALTERNATIVE_PORTAL,
						externalId: `mts-shop-${email}`,
						name,
						email,
						existingCustomerId: "",
						dueDate: due.toISOString().slice(0, 10),
						lines: lines.map((line) => ({
							description: line.description,
							amount: line.amount,
							quantity: line.quantity
						}))
					});
					paymentUrl = checkout.url;
					await sql`
              update orders set payment_url = ${paymentUrl}, alternative_invoice_id = ${checkout.invoiceId},
                alternative_request_id = ${checkout.requestId}, payment_status = ${checkout.paymentStatus}
              where id = ${orderId}
            `;
				} catch {
					paymentUrl = ALTERNATIVE_PORTAL;
					await sql`update orders set payment_url = ${paymentUrl} where id = ${orderId}`;
				}
			}
			await settleNewOrder(sql, orderId, "Sarah");
			const number = `MT-${1e3 + orderId}`;
			await filePortalTicket(sql, {
				name,
				email,
				organizationId: orgId,
				subject: `Shop order ${number}`,
				category: "Hardware & Software",
				body: `Sarah placed ${items.map((item) => `${item.quantity} × ${item.sku}`).join(", ")} for ${name}.`
			}).catch(() => void 0);
			await sql`
        insert into customer_notices (shop_customer_id, title, body, href)
        values (${id}, ${method === "pay_later" ? "Order invoiced" : "Order received"}, ${`${number} is ${method === "pay_later" ? "on invoice" : "waiting for payment"}.`}, ${`/portal/orders/${orderId}`})
      `;
			return json({
				placed: true,
				id: orderId,
				number,
				paymentMethod: method,
				paymentUrl,
				totalCents: subtotal + shippingCents,
				items: lines.map((line) => ({
					sku: s(line.product, "sku"),
					name: line.description,
					quantity: line.quantity,
					unitPriceCents: n(line.product, "price_cents")
				}))
			});
		}
		if (parts[2] === "orders" && parts.length === 4 && request.method === "GET") {
			const orderId = Number(parts[3]);
			const orders = await sql`
        select o.*,
          coalesce((select sum(oi.quantity * oi.unit_price_cents)::int from order_items oi where oi.order_id = o.id), 0) as goods_cents
        from orders o
        where o.id = ${orderId} and (o.shop_customer_id = ${id} or lower(o.ship_email) = lower(${email}))
      `;
			if (!orders[0]) return json({ error: "That order is not on this account." }, 404);
			const item = orders[0];
			const lines = await sql`select product_name, sku, quantity, unit_price_cents from order_items where order_id = ${orderId} order by id`;
			return json({
				page: `/portal/orders/${orderId}`,
				id: n(item, "id"),
				number: `MT-${1e3 + n(item, "id")}`,
				status: s(item, "status"),
				paymentMethod: s(item, "payment_method") || "unpaid",
				paymentStatus: s(item, "payment_status"),
				paymentUrl: s(item, "payment_url"),
				shipmentStatus: s(item, "shipment_status") || "unfulfilled",
				trackingNumber: s(item, "tracking_number"),
				trackingCarrier: s(item, "tracking_carrier"),
				totalCents: n(item, "goods_cents") + n(item, "shipping_cents"),
				items: lines.map((line) => ({
					name: s(line, "product_name"),
					sku: s(line, "sku"),
					quantity: n(line, "quantity"),
					unitPriceCents: n(line, "unit_price_cents")
				}))
			});
		}
		if (parts[2] === "orders" && parts[4] === "pay" && request.method === "POST") {
			const orderId = Number(parts[3]);
			const order = (await sql`
        select o.*, coalesce((select sum(oi.quantity * oi.unit_price_cents)::int from order_items oi where oi.order_id = o.id), 0) as goods_cents
        from orders o
        where o.id = ${orderId} and (o.shop_customer_id = ${id} or lower(o.ship_email) = lower(${email}))
      `)[0];
			if (!order) return json({ error: "That order is not on this account." }, 404);
			if (s(order, "payment_method") === "pay_later" || s(order, "payment_status") === "pay_later") return json({
				number: `MT-${1e3 + orderId}`,
				paymentMethod: "pay_later",
				paymentUrl: "",
				note: "This order is invoiced. No card payment is due."
			});
			let paymentUrl = s(order, "payment_url");
			if (!paymentUrl) {
				const lines = await sql`select product_name, quantity, unit_price_cents from order_items where order_id = ${orderId}`;
				const creds = await loadAlternativeCreds(sql);
				if (!creds) return json({ error: "Card checkout is not configured." }, 400);
				const due = /* @__PURE__ */ new Date();
				due.setDate(due.getDate() + 30);
				const checkout = await createAlternativeCheckout(creds, {
					reference: `MT-${1e3 + orderId}`,
					returnUrl: ALTERNATIVE_PORTAL,
					externalId: `mts-shop-${email}`,
					name,
					email,
					existingCustomerId: "",
					dueDate: due.toISOString().slice(0, 10),
					lines: lines.map((line) => ({
						description: s(line, "product_name"),
						amount: n(line, "unit_price_cents") / 100,
						quantity: n(line, "quantity")
					}))
				});
				paymentUrl = checkout.url;
				await sql`update orders set payment_url = ${paymentUrl}, alternative_invoice_id = ${checkout.invoiceId}, alternative_request_id = ${checkout.requestId}, payment_status = ${checkout.paymentStatus} where id = ${orderId}`;
			}
			return json({
				number: `MT-${1e3 + orderId}`,
				paymentMethod: "card",
				paymentUrl,
				totalCents: n(order, "goods_cents") + n(order, "shipping_cents")
			});
		}
		if (parts[2] === "orders" && parts[4] === "cancel" && request.method === "POST") {
			const orderId = Number(parts[3]);
			const order = (await sql`select id, status, shipment_status from orders where id = ${orderId} and (shop_customer_id = ${id} or lower(ship_email) = lower(${email}))`)[0];
			if (!order) return json({ error: "That order is not on this account." }, 404);
			if ([
				"shipped",
				"out_for_delivery",
				"delivered"
			].includes(s(order, "shipment_status"))) return json({ error: "That order has already shipped." }, 400);
			await sql`update orders set status = 'cancelled', updated_at = now() where id = ${orderId}`;
			await setInventory(sql, orderId, "released");
			return json({
				cancelled: true,
				number: `MT-${1e3 + orderId}`
			});
		}
		if (parts[2] === "orders" && parts[4] === "delete" && request.method === "POST") {
			const orderId = Number(parts[3]);
			if ((await request.json().catch(() => ({}))).confirm !== true) return json({ error: "Confirm the delete before this order is removed." }, 400);
			if (!(await sql`select id from orders where id = ${orderId} and (shop_customer_id = ${id} or lower(ship_email) = lower(${email}))`)[0]) return json({ error: "That order is not on this account." }, 404);
			await setInventory(sql, orderId, "released");
			await sql`delete from orders where id = ${orderId}`;
			return json({
				deleted: true,
				number: `MT-${1e3 + orderId}`
			});
		}
		if (parts[2] === "tickets" && parts[4] === "refresh" && request.method === "POST") {
			const ticketId = Number(parts[3]);
			return json(await syncCustomerTicket(sql, email, ticketId));
		}
		if (parts[2] === "tickets" && parts[4] === "close" && request.method === "POST") {
			const ticketId = Number(parts[3]);
			if (!(await sql`select id from tickets where id = ${ticketId} and lower(requester_email) = lower(${email})`)[0]) return json({ error: "That ticket is not on this account." }, 404);
			await sql`update tickets set status = 'closed', updated_at = now() where id = ${ticketId}`;
			return json({
				closed: true,
				ticketId
			});
		}
		if (parts[2] === "services" && parts[3] === "catalog" && request.method === "GET") return json((await sql`select id, category, name, kind, summary from service_catalog where active = true order by category, name`).map((item) => ({
			id: n(item, "id"),
			category: s(item, "category"),
			name: s(item, "name"),
			kind: s(item, "kind"),
			summary: s(item, "summary")
		})));
		if (parts[2] === "services" && parts[3] === "quote" && request.method === "POST") {
			const body = await request.json().catch(() => ({}));
			const details = clip(body.details, 2e3);
			const serviceId = Number(body.serviceId);
			const nameQuery = clip(body.name, 120);
			if (!details) return json({ error: "Say what the quote should cover." }, 400);
			const item = (Number.isInteger(serviceId) && serviceId > 0 ? await sql`select * from service_catalog where id = ${serviceId} and active = true` : await sql`select * from service_catalog where active = true and name ilike ${"%" + nameQuery.replace(/%/g, "") + "%"} order by name limit 1`)[0];
			if (!item) return json({ error: "That service is not in the catalog." }, 404);
			const kind = s(item, "kind");
			if (!elevated && kind === "phone" && !flags.canOrderPhone) return json({ error: "Phone and internet ordering is not approved for this account." }, 403);
			if (!elevated && kind !== "phone" && !flags.canOrderIt) return json({ error: "IT service ordering is not approved for this account." }, 403);
			const inserted = await sql`
        insert into service_requests (shop_customer_id, organization_id, category, service_name, details, severity, status)
        values (${id}, ${orgId}, ${s(item, "category")}, ${s(item, "name")}, ${details}, ${clip(body.severity, 20) || "normal"}, 'requested')
        returning id
      `;
			const ticket = await filePortalTicket(sql, {
				name,
				email,
				organizationId: orgId,
				subject: `Service request: ${s(item, "name")}`,
				category: s(item, "category"),
				body: details
			});
			return json({
				id: n(inserted[0], "id"),
				status: "requested",
				ticketId: ticket.ticketId,
				zendeskId: ticket.zendeskId,
				service: s(item, "name")
			});
		}
		if (parts[2] === "services" && parts.length === 3 && request.method === "GET") return json((await sql`select id, category, service_name, details, severity, status, quote_note, created_at from service_requests where shop_customer_id = ${id} order by created_at desc`).map((item) => ({
			id: n(item, "id"),
			category: s(item, "category"),
			serviceName: s(item, "service_name"),
			details: s(item, "details"),
			severity: s(item, "severity"),
			status: s(item, "status"),
			quoteNote: s(item, "quote_note"),
			createdAt: s(item, "created_at")
		})));
		if (parts[2] === "services" && parts.length === 3 && request.method === "POST") {
			const body = await request.json().catch(() => ({}));
			const offering = clip(body.offering, 40);
			if (!(offering in OFFERINGS)) return json({ error: "Choose a service." }, 400);
			const phoneService = offering.startsWith("voip") || offering.startsWith("fax");
			if (phoneService && !flags.canOrderPhone && !elevated) return json({ error: "This account cannot order phone service." }, 403);
			if (!phoneService && !flags.canOrderIt && !elevated) return json({ error: "This account cannot order that service." }, 403);
			const site = clip(body.site, 200);
			const recipientEmail = clip(body.recipientEmail, 160).toLowerCase();
			const drops = Math.min(50, Math.max(1, Number(body.drops) || 1));
			if (offering === "voip-ext" && body.confirmMonthly !== true) return json({ error: "Confirm the $18 monthly extension before this is sent." }, 400);
			if (offering === "fax-efax" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipientEmail)) return json({ error: "Enter the email that should receive incoming faxes." }, 400);
			if ((offering === "network" || offering.startsWith("internet")) && !site) return json({ error: "Enter the office address." }, 400);
			const label = OFFERINGS[offering];
			const detail = [
				`Service: ${label}`,
				site ? `Site: ${site}` : "",
				recipientEmail ? `Incoming fax email: ${recipientEmail}` : "",
				offering === "voip-ext" ? "Customer confirmed $18 per month on the Telxent bill." : "",
				body.shipPhone === true ? "Ship a desk phone." : "",
				offering === "wiring" ? `Drops: ${drops} at $175 each.` : "",
				clip(body.notes, 1e3)
			].filter(Boolean).join("\n");
			const inserted = await sql`
        insert into service_requests (shop_customer_id, organization_id, category, service_name, details, severity, status)
        values (${id}, ${orgId}, ${offering}, ${label}, ${detail}, 'normal', 'requested')
        returning id
      `;
			const ticket = await filePortalTicket(sql, {
				name,
				email,
				organizationId: orgId,
				subject: `Order: ${label}`,
				category: offering,
				body: detail
			});
			return json({
				id: n(inserted[0], "id"),
				ticketId: ticket.ticketId,
				zendeskId: ticket.zendeskId
			});
		}
		if (parts[2] === "quotes" && request.method === "POST") {
			const requestId = Number(parts[3]);
			const decision = clip((await request.json().catch(() => ({}))).decision, 20);
			if (decision !== "accepted" && decision !== "rejected") return json({ error: "Accept or reject the quote." }, 400);
			const rows = await sql`select id, status from service_requests where id = ${requestId} and shop_customer_id = ${id}`;
			if (!rows[0]) return json({ error: "That request is not on this account." }, 404);
			if (s(rows[0], "status") !== "quoted") return json({ error: "Only a quoted request can be accepted or rejected." }, 400);
			await sql`update service_requests set status = ${decision} where id = ${requestId}`;
			return json({ status: decision });
		}
		if (parts[2] === "complaints" && request.method === "GET") return json((await sql`select id, kind, subject, body, status, ticket_id, created_at from complaints where shop_customer_id = ${id} order by id desc limit 30`).map((item) => ({
			id: n(item, "id"),
			kind: s(item, "kind"),
			subject: s(item, "subject"),
			body: s(item, "body"),
			status: s(item, "status"),
			ticketId: n(item, "ticket_id"),
			createdAt: s(item, "created_at")
		})));
		if (parts[2] === "complaints" && request.method === "POST") {
			const body = await request.json().catch(() => ({}));
			const subject = clip(body.subject, 160);
			const text = clip(body.body, 2e3);
			const kind = clip(body.kind, 40) || "General feedback";
			if (!subject || !text) return json({ error: "Describe the complaint." }, 400);
			const ticket = await filePortalTicket(sql, {
				name,
				email,
				organizationId: orgId,
				subject: `Complaint: ${subject}`,
				category: kind,
				body: text
			});
			return json({
				id: n((await sql`
        insert into complaints (shop_customer_id, organization_id, kind, subject, body, status, ticket_id)
        values (${id}, ${orgId}, ${kind}, ${subject}, ${text}, 'open', ${ticket.ticketId})
        returning id
      `)[0], "id"),
				ticketId: ticket.ticketId,
				zendeskId: ticket.zendeskId
			});
		}
		if (parts[2] === "notices" && parts.length === 3 && request.method === "GET") return json((await sql`select id, title, body, href, read_at, created_at from customer_notices where shop_customer_id = ${id} order by id desc limit 40`).map((item) => ({
			id: n(item, "id"),
			title: s(item, "title"),
			body: s(item, "body"),
			href: s(item, "href"),
			read: Boolean(s(item, "read_at")),
			createdAt: s(item, "created_at")
		})));
		if (parts[2] === "notices" && parts[4] === "read" && request.method === "POST") {
			await sql`update customer_notices set read_at = now() where id = ${Number(parts[3])} and shop_customer_id = ${id} and read_at is null`;
			return json({ ok: true });
		}
		return json({ error: "Unknown path. See /api/openapi.json." }, 404);
	} catch (error) {
		return json({ error: error instanceof Error ? error.message : "The agent call failed." }, 500);
	}
}
var Route$62 = createFileRoute("/api/agent/$")({ server: { handlers: {
	GET: ({ request }) => handleAgentRequest(request),
	POST: ({ request }) => handleAgentRequest(request),
	PATCH: ({ request }) => handleAgentRequest(request),
	DELETE: ({ request }) => handleAgentRequest(request),
	OPTIONS: ({ request }) => handleAgentRequest(request)
} } });
function readEnvFile(file) {
	try {
		return readFileSync(file, "utf8");
	} catch {
		return "";
	}
}
function envValue(name) {
	const live = (process.env[name] || "").trim();
	if (live) return live;
	const starts = [process.cwd()];
	try {
		starts.push(dirname(fileURLToPath(import.meta.url)));
	} catch {}
	const seen = /* @__PURE__ */ new Set();
	for (const start of starts) {
		let dir = start;
		for (let step = 0; step < 6; step += 1) {
			if (seen.has(dir)) break;
			seen.add(dir);
			const text = readEnvFile(join(dir, ".env"));
			for (const line of text.split("\n")) {
				const trimmed = line.trim();
				if (!trimmed || trimmed.startsWith("#")) continue;
				const eq = trimmed.indexOf("=");
				if (eq < 1 || trimmed.slice(0, eq) !== name) continue;
				const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
				if (value) return value;
			}
			const parent = dirname(dir);
			if (parent === dir) break;
			dir = parent;
		}
	}
	return "";
}
function spoken(text) {
	return text.replace(/\s+/g, " ").trim().slice(0, 4e3);
}
async function storedVoiceKey() {
	try {
		const { getSql } = await import("./db-BUp8gnwm.mjs").then((n) => n.n).then((n) => n.t);
		return ((await (await getSql())`select api_key from agent_provider_keys where provider = 'elevenlabs' limit 1`)[0]?.api_key || "").trim();
	} catch {
		return "";
	}
}
function requestBody(text, voice) {
	return {
		contents: [{
			role: "user",
			parts: [{
				text: `## Transcript:\n${text}`,
				speechMetadata: { style: "Style: Clear, warm, professional support voice with natural pacing." }
			}]
		}],
		generationConfig: {
			responseModalities: ["audio"],
			temperature: 1,
			speech_config: { voice_config: { prebuilt_voice_config: { voice_name: voice } } }
		}
	};
}
function collectAudio(node, chunks, mime) {
	if (!node || typeof node !== "object") return;
	if (Array.isArray(node)) {
		for (const item of node) collectAudio(item, chunks, mime);
		return;
	}
	const row = node;
	const inline = row.inlineData || row.inline_data;
	if (inline && typeof inline.data === "string") {
		chunks.push(Buffer.from(inline.data, "base64"));
		const type = inline.mimeType || inline.mime_type;
		if (typeof type === "string" && type) mime.value = type;
		return;
	}
	for (const value of Object.values(row)) collectAudio(value, chunks, mime);
}
function pcmToWav(pcm, rate) {
	const header = Buffer.alloc(44);
	header.write("RIFF", 0);
	header.writeUInt32LE(36 + pcm.length, 4);
	header.write("WAVE", 8);
	header.write("fmt ", 12);
	header.writeUInt32LE(16, 16);
	header.writeUInt16LE(1, 20);
	header.writeUInt16LE(1, 22);
	header.writeUInt32LE(rate, 24);
	header.writeUInt32LE(rate * 2, 28);
	header.writeUInt16LE(2, 32);
	header.writeUInt16LE(16, 34);
	header.write("data", 36);
	header.writeUInt32LE(pcm.length, 40);
	return Buffer.concat([header, pcm]);
}
async function geminiVoice(text, requested) {
	const key = envValue("GEMINI_TTS_API_KEY") || "AQ.Ab8RN6LRuzzO-uw3d2VkLaGEgPqmR9hWsmIgYzhkJ9hP4HK7qQ";
	const model = envValue("GEMINI_TTS_MODEL") || "gemini-3.8-flash-lite-tts";
	const voice = GEMINI_VOICES.some((item) => item.id === requested) ? requested : envValue("GEMINI_TTS_VOICE") || "Fola";
	if (!key) return Response.json({ error: "Gemini read-aloud is not configured." }, { status: 503 });
	const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:streamGenerateContent?key=${encodeURIComponent(key)}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(requestBody(text, voice)),
		signal: AbortSignal.timeout(45e3)
	});
	const body = await response.text();
	if (!response.ok) return Response.json({ error: "The Gemini voice could not read that." }, { status: 502 });
	const chunks = [];
	const mime = { value: "" };
	try {
		collectAudio(JSON.parse(body), chunks, mime);
	} catch {
		for (const line of body.split("\n")) {
			const trimmed = line.trim();
			if (!trimmed.startsWith("data:")) continue;
			const data = trimmed.slice(5).trim();
			if (!data || data === "[DONE]") continue;
			try {
				collectAudio(JSON.parse(data), chunks, mime);
			} catch {
				continue;
			}
		}
	}
	const audio = Buffer.concat(chunks);
	if (!audio.length) return Response.json({ error: "The Gemini voice returned no audio." }, { status: 502 });
	const even = audio.length % 2 === 0 ? audio : audio.subarray(0, audio.length - 1);
	const rate = Number(mime.value.match(/rate=(\d+)/)?.[1] || 24e3);
	const wav = /mpeg|wav|mp3|ogg/i.test(mime.value) ? even : pcmToWav(even, rate);
	const type = /mpeg|mp3/i.test(mime.value) ? "audio/mpeg" : /ogg/i.test(mime.value) ? "audio/ogg" : "audio/wav";
	return Response.json({
		audio: wav.toString("base64"),
		type
	});
}
async function elevenLabs(text, requested) {
	const key = await storedVoiceKey() || envValue("ELEVENLABS_API_KEY") || "sk_3e9b1dc7ed2f360adfbbd12b0f0bd4aa7122fa5eff29b1ab";
	const voice = /^[A-Za-z0-9]{10,40}$/.test(requested || "") ? requested : "cgSgspJ2msm6clMCkdW9";
	const model = envValue("ELEVENLABS_MODEL_ID") || "eleven_v4_turbo";
	if (!key) return Response.json({ error: "Add ELEVENLABS_API_KEY to use ElevenLabs." }, { status: 503 });
	const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voice)}?output_format=mp3_44100_128`, {
		method: "POST",
		headers: {
			"xi-api-key": key,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			text,
			model_id: model
		}),
		signal: AbortSignal.timeout(45e3)
	});
	if (!response.ok) return Response.json({ error: "The ElevenLabs voice could not read that." }, { status: 502 });
	const audio = Buffer.from(await response.arrayBuffer());
	if (!audio.length) return Response.json({ error: "ElevenLabs returned no audio." }, { status: 502 });
	return Response.json({
		audio: audio.toString("base64"),
		type: "audio/mpeg"
	});
}
var GEMINI_VOICES = [
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
}));
var ERGO_VOICES = [
	["Savannah", "default_de4d191ca7574982"],
	["Imogen", "default_b78b28baf5c31a1d"],
	["Willow", "default_940eaff39a929da0"],
	["Morgana", "default_40a3ba1017bfb68a"],
	["Sakura", "default_c5e098c322aae901"],
	["Wyatt", "default_34370fd91e3484ef"],
	["Cillian", "default_2c5123a959875341"],
	["Jett", "default_c95cf57259ed7313"],
	["Rupert", "default_3765f0d1140c05c0"],
	["Thaddeus", "default_3c00e421e684f949"],
	["Gaspard", "default_517319c805b927e9"],
	["Liesel", "default_09d206a5b067ae71"],
	["Wolfgang", "default_ec650ef042ed1f14"],
	["Ananya", "default_f76cf78a50cf8496"],
	["Arjun", "default_849a62ace1f85759"],
	["Ginevra", "default_792987ff6236e50d"],
	["Lorenzo", "default_ccb71e6596453e72"],
	["Minjun", "default_aa6e36b246dc01f9"],
	["Seoyeon", "default_b7a257a5b1478493"],
	["Haoran", "default_d8a9b688b64e638d"],
	["Meilin", "default_eaee7325255d4783"],
	["Leonor", "default_e11f53895cad62fa"],
	["Thiago", "default_4562e98e005b69cc"],
	["Rodrigo", "default_87250baa043e5bba"],
	["Ximena", "default_43e790fc116fd62a"],
	["Chaitanya", "default_26fb443b7759bce0"],
	["Sravya", "default_c3bb44b62cf13a5c"]
].map(([name, id]) => ({
	id,
	name
}));
var JESSICA = "cgSgspJ2msm6clMCkdW9";
async function voiceCatalog(provider) {
	if (provider === "gemini") return {
		voices: GEMINI_VOICES,
		default: "Fola"
	};
	if (provider === "ergo") return {
		voices: ERGO_VOICES,
		default: ERGO_VOICES[0].id
	};
	const key = await storedVoiceKey() || envValue("ELEVENLABS_API_KEY") || "sk_3e9b1dc7ed2f360adfbbd12b0f0bd4aa7122fa5eff29b1ab";
	const response = await fetch("https://api.elevenlabs.io/v1/voices", { headers: { "xi-api-key": key } });
	if (!response.ok) return {
		voices: [{
			id: JESSICA,
			name: "Jessica"
		}],
		default: JESSICA
	};
	const voices = ((await response.json()).voices || []).map((item) => ({
		id: item.voice_id || "",
		name: item.name || item.voice_id || ""
	})).filter((item) => item.id);
	voices.sort((a, b) => Number(/^jessica\b/i.test(b.name)) - Number(/^jessica\b/i.test(a.name)) || a.name.localeCompare(b.name));
	return {
		voices,
		default: voices.find((item) => /^jessica\b/i.test(item.name))?.id || JESSICA
	};
}
async function allVoices() {
	const eleven = await voiceCatalog("elevenlabs");
	return {
		groups: [
			{
				id: "gemini",
				label: "Gemini",
				voices: GEMINI_VOICES
			},
			{
				id: "elevenlabs",
				label: "ElevenLabs",
				voices: eleven.voices
			},
			{
				id: "ergo",
				label: "Ergo",
				voices: ERGO_VOICES
			}
		],
		default: {
			provider: "elevenlabs",
			id: eleven.default || JESSICA
		}
	};
}
var Route$61 = createFileRoute("/api/agent/speak")({ server: { handlers: {
	GET: async ({ request }) => {
		try {
			assertSameSiteRequest();
		} catch {
			return Response.json({ error: "Forbidden." }, { status: 403 });
		}
		const header = request.headers.get("authorization") || "";
		const bearer = header.toLowerCase().startsWith("bearer ") ? header.slice(7).trim() : void 0;
		try {
			await requireUserId(bearer);
		} catch {
			return Response.json({ error: "Sign in first." }, { status: 401 });
		}
		return Response.json(await allVoices());
	},
	POST: async ({ request }) => {
		try {
			assertSameSiteRequest();
		} catch {
			return Response.json({ error: "Forbidden." }, { status: 403 });
		}
		const header = request.headers.get("authorization") || "";
		const bearer = header.toLowerCase().startsWith("bearer ") ? header.slice(7).trim() : void 0;
		try {
			await requireUserId(bearer);
		} catch {
			return Response.json({ error: "Sign in first." }, { status: 401 });
		}
		const raw = await request.json().catch(() => ({}));
		const text = spoken(typeof raw.text === "string" ? raw.text : "");
		if (!text) return Response.json({ error: "Nothing to read." }, { status: 400 });
		const picked = typeof raw.voice === "string" ? raw.voice : "";
		if (raw.provider === "elevenlabs") return elevenLabs(text, picked);
		return geminiVoice(text, picked);
	}
} } });
var Route$60 = createFileRoute("/api/agent/stream")({ server: { handlers: { POST: async ({ request }) => {
	try {
		assertSameSiteRequest();
	} catch {
		return Response.json({ error: "Forbidden." }, { status: 403 });
	}
	const header = request.headers.get("authorization") || "";
	const bearer = header.toLowerCase().startsWith("bearer ") ? header.slice(7).trim() : void 0;
	let userId = "";
	try {
		userId = await requireUserId(bearer);
	} catch {
		return Response.json({ error: "Sign in first." }, { status: 401 });
	}
	const raw = await request.json().catch(() => ({}));
	const encoder = new TextEncoder();
	const body = new ReadableStream({ async start(controller) {
		const send = (event) => {
			controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
		};
		try {
			await streamDeskReply(userId, raw, send);
		} catch (cause) {
			send({
				type: "error",
				text: cause instanceof Error ? cause.message : "The agent could not reply."
			});
		}
		controller.close();
	} });
	return new Response(body, { headers: {
		"Content-Type": "text/event-stream; charset=utf-8",
		"Cache-Control": "no-cache, no-transform",
		"X-Accel-Buffering": "no"
	} });
} } } });
var Route$59 = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var Route$58 = createFileRoute("/api/jobs/run")({ server: { handlers: { POST: async ({ request }) => {
	const secret = (process.env.CRON_SECRET || "").trim();
	const header = request.headers.get("authorization") || "";
	if (secret && header !== `Bearer ${secret}`) return Response.json({
		ok: false,
		error: "Unauthorized."
	}, { status: 401 });
	try {
		const sql = await getSql();
		await runPortalJobs(sql);
		return Response.json({ ok: true });
	} catch (error) {
		const message = error instanceof Error ? error.message : "Jobs failed.";
		return Response.json({
			ok: false,
			error: message
		}, { status: 500 });
	}
} } } });
var Route$57 = createFileRoute("/api/oauth/authorize")({ server: { handlers: {
	GET: ({ request }) => handleOauthAuthorize(request),
	POST: ({ request }) => handleOauthAuthorize(request)
} } });
var Route$56 = createFileRoute("/api/oauth/token")({ server: { handlers: {
	POST: ({ request }) => handleOauthToken(request),
	OPTIONS: ({ request }) => handleOauthToken(request)
} } });
var Route$55 = createFileRoute("/api/payments/alternative")({ server: { handlers: { POST: async ({ request }) => {
	const raw = await request.text();
	try {
		await verifyAlternativeSignature(request, raw);
		const event = readAlternativeEvent(raw ? JSON.parse(raw) : {});
		const sql = await getSql();
		const reference = Number(/^MT-(\d+)$/.exec(event.reference)?.[1] ?? 0);
		const byNumber = reference > 1e3 ? reference - 1e3 : 0;
		const rows = byNumber ? await sql`select id from orders where id = ${byNumber} limit 1` : event.invoiceId ? await sql`select id from orders where alternative_invoice_id = ${event.invoiceId} limit 1` : [];
		const id = Number(rows[0]?.id ?? 0);
		if (!id) return Response.json({
			ok: false,
			error: "Order not found."
		}, { status: 404 });
		await applyPaymentStatus(sql, id, event.status || "paid", "Alternative Payments");
		return Response.json({
			ok: true,
			orderId: id
		});
	} catch (error) {
		const message = error instanceof Error ? error.message : "Webhook rejected.";
		const status = /signature|SECRET/.test(message) ? 401 : 400;
		return Response.json({
			ok: false,
			error: message
		}, { status });
	}
} } } });
var Route$54 = createFileRoute("/api/zendesk/webhook")({ server: { handlers: { POST: async ({ request }) => {
	const raw = await request.text();
	try {
		await verifyZendeskWebhook(request, raw);
		const payload = raw ? JSON.parse(raw) : {};
		const sql = await getSql();
		const stored = await ingestZendeskWebhook(sql, payload);
		const invited = await acceptZendeskWebhookUser(sql, payload);
		await applyZendeskWebhook(sql, payload);
		return Response.json({
			ok: true,
			stored,
			invited
		});
	} catch (error) {
		const message = error instanceof Error ? error.message : "Webhook rejected.";
		const status = /signature|timestamp|Webhook ID|SECRET/.test(message) ? 401 : 400;
		return Response.json({
			ok: false,
			error: message
		}, { status });
	}
} } } });
var Route$53 = createFileRoute("/portal/orders/")({ component: OrdersPage });
function OrdersPage() {
	const token = useShopToken();
	const session = usePortalSession();
	const account = useQuery({
		queryKey: ["shop-account", token],
		queryFn: () => getShopAccount({ data: token }),
		enabled: Boolean(token)
	});
	if (session.data && !session.data.access.canShop) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Locked, {
		title: "Orders stay with shop access",
		body: "This account can open tickets. Purchasing has not been approved."
	});
	const orders = account.data?.orders ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "My orders"
			}),
			orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/portal/orders/$orderId",
				params: { orderId: String(order.id) },
				className: "flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-semibold",
					children: order.number
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted",
					children: [
						order.status,
						" · ",
						order.shipmentStatus,
						" · ",
						order.paymentMethod || "unpaid"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: money(order.totalCents)
				})]
			}, order.id)),
			account.data && orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No orders yet."
			}) : null
		]
	});
}
var Route$52 = createFileRoute("/portal/orders/$orderId")({ component: OrderDetail });
var TONE = {
	neutral: "bg-surface-2 text-ink",
	good: "bg-good-soft text-ink",
	warn: "bg-warn-soft text-ink",
	bad: "bg-bad-soft text-bad",
	info: "bg-info-soft text-ink",
	pine: "bg-surface-2 text-ink"
};
function Pill({ label, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex h-6 items-center rounded-full px-2 text-xs font-semibold ${TONE[tone]}`,
		children: label
	});
}
function OrderDetail() {
	const { orderId = "" } = useParams({ strict: false });
	const token = useShopToken();
	const path = useRouterState({ select: (state) => state.location.pathname });
	const account = useQuery({
		queryKey: ["shop-account", token],
		queryFn: () => getShopAccount({ data: token }),
		enabled: Boolean(token)
	});
	const billing = useQuery({
		queryKey: ["customer-billing", token],
		queryFn: () => getCustomerBilling({ data: token }),
		enabled: Boolean(token)
	});
	const order = account.data?.orders.find((item) => item.id === Number(orderId));
	if (account.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Opening the order…"
	});
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "That order is not on this account."
	});
	const goods = order.items.reduce((sum, item) => sum + item.quantity * item.unitPriceCents, 0);
	const payment = shopifyPayment(order);
	const fulfillment = shopifyFulfillment(order);
	const delivery = shopifyDelivery(order);
	const address = [
		order.shipAddress,
		[
			order.shipCity,
			order.shipRegion,
			order.shipPostal
		].filter(Boolean).join(" "),
		order.shipCountry
	].filter(Boolean);
	const shipping = order.shippingMethod === "express" ? "Express" : order.shippingMethod === "standard" ? "Standard" : "Shipping";
	const card = order.cardLast4 ? `${order.cardBrand || "Card"} ···· ${order.cardLast4}` : paymentLabel(order.paymentMethod);
	const unpaid = payment.label !== "Paid" && payment.label !== "Refunded";
	const gateway = billing.data?.selected === "alternative" ? order.paymentUrl || "https://go.alternativepayments.io" : "";
	const billingPath = path.startsWith("/production") ? "/production/user-portal/billing" : "/portal/billing";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/portal/orders",
				className: "text-sm text-muted",
				children: "All orders"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: order.number
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: ["Confirmed ", day(order.createdAt)]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							label: payment.label,
							tone: payment.tone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							label: fulfillment.label,
							tone: fulfillment.tone
						}),
						delivery ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							label: delivery.label,
							tone: delivery.tone
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-4 rounded-2xl border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3",
						children: order.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [
								item.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.imageUrl,
									alt: "",
									className: "size-16 shrink-0 rounded-xl border border-line bg-white object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-16 shrink-0 rounded-xl border border-line bg-surface-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-semibold",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-xs text-muted",
										children: [
											item.sku,
											" · Qty ",
											item.quantity
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm tabular-nums",
									children: money(item.unitPriceCents * item.quantity)
								})
							]
						}, item.sku))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 border-t border-line pt-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Subtotal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: money(goods)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: shipping
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: order.shippingCents ? money(order.shippingCents) : "Free"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex justify-between text-base font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: money(order.totalCents)
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid content-start gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "grid gap-1 rounded-2xl border border-line bg-surface p-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: order.shipEmail || account.data?.customer.email || "No email" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: order.shipPhone || account.data?.customer.phone || "No phone"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "grid gap-1 rounded-2xl border border-line bg-surface p-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted",
									children: "Shipping address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: order.shipName || account.data?.customer.name
								}),
								address.length ? address.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: "No shipping address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "pt-2 text-muted",
									children: [shipping, order.shippingCents ? ` · ${money(order.shippingCents)}` : ""]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: order.trackingNumber ? `${order.trackingCarrier || "Tracking"} ${order.trackingNumber}` : "No tracking number yet" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "grid gap-1 rounded-2xl border border-line bg-surface p-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted",
									children: "Payment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: payment.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: card }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "tabular-nums",
									children: money(order.totalCents)
								}),
								unpaid && gateway ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: gateway,
									target: "_blank",
									rel: "noreferrer",
									className: "pt-1 text-sm font-semibold text-accent",
									children: "Pay now"
								}) : null,
								unpaid && !gateway ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: billingPath,
									className: "pt-1 text-sm font-semibold text-accent",
									children: "Pay now"
								}) : null
							]
						})
					]
				})]
			})
		]
	});
}
var Route$51 = createFileRoute("/portal/services/")({ component: PortalServices });
function PortalServices() {
	const session = usePortalSession();
	const catalog = useQuery({
		queryKey: ["service-catalog"],
		queryFn: () => listServiceCatalog()
	});
	const [q, setQ] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("All");
	const categories = (0, import_react.useMemo)(() => ["All", ...new Set((catalog.data ?? []).map((item) => item.category))], [catalog.data]);
	const items = (catalog.data ?? []).filter((item) => {
		const text = `${item.name} ${item.summary} ${item.category}`.toLowerCase();
		return (category === "All" || item.category === category) && text.includes(q.toLowerCase());
	});
	const access = session.data?.access;
	const canOrder = Boolean(access?.canOrderIt || access?.canOrderPhone);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "IT services"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: canOrder ? "Choose a service. A request opens a ticket and waits for a quote. Nothing is billed until the desk approves it." : "You can read the catalog. Ordering stays off until an admin approves this account."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 sm:grid-cols-[minmax(0,1fr)_14rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (event) => setQ(event.target.value),
					placeholder: "Search services",
					"aria-label": "Search services",
					className: "h-11 rounded-xl border border-line bg-surface px-3"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: category,
					onChange: (event) => setCategory(event.target.value),
					"aria-label": "Category",
					className: "h-11 rounded-xl border border-line bg-surface px-3",
					children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/portal/services/$serviceId",
					params: { serviceId: String(item.id) },
					className: "grid gap-1 rounded-xl border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold uppercase tracking-wide text-accent",
							children: item.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.summary
						})
					]
				}, item.id))
			}),
			catalog.data && items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nothing matches that search."
			}) : null
		]
	});
}
var Route$50 = createFileRoute("/portal/services/$serviceId")({ component: ServiceDetail });
function ServiceDetail() {
	const { serviceId = "" } = useParams({ strict: false });
	const id = Number(serviceId);
	const token = useShopToken();
	const client = useQueryClient();
	const session = usePortalSession();
	const service = useQuery({
		queryKey: ["service", id],
		queryFn: () => getService({ data: id }),
		enabled: Number.isFinite(id)
	});
	const [details, setDetails] = (0, import_react.useState)("");
	const [severity, setSeverity] = (0, import_react.useState)("normal");
	const [extra, setExtra] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const send = useMutation({
		mutationFn: () => requestPortalService({ data: {
			token,
			serviceId: id,
			details: [details, extra].filter(Boolean).join("\n"),
			severity
		} }),
		onSuccess: () => {
			setNotice("Request sent. A ticket is open and nothing is billed until the desk quotes it.");
			setDetails("");
			client.invalidateQueries({ queryKey: ["portal-services", token] });
		},
		onError: (error) => setNotice(error instanceof Error ? error.message : "Could not send the request.")
	});
	const item = service.data;
	if (service.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Opening the service…"
	});
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "That service is not in the catalog."
	});
	const access = session.data?.access;
	const allowed = item.kind === "phone" ? access?.canOrderPhone : access?.canOrderIt;
	const phone = item.kind === "phone";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/portal/services",
				className: "text-sm text-muted",
				children: "All services"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-wide text-accent",
					children: item.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-2xl font-semibold tracking-tight",
					children: item.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: item.summary
				})
			] }),
			item.benefits ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-xl border border-line bg-surface px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: "Why it helps. "
				}), item.benefits]
			}) : null,
			item.scope ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-xl border border-line bg-surface px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: "In scope. "
				}), item.scope]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Price is quoted. This page does not promise a rate or a start date."
			}),
			allowed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3 rounded-xl border border-line bg-surface p-4",
				onSubmit: (event) => {
					event.preventDefault();
					setNotice("");
					send.mutate();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Request this service"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: severity,
						onChange: (event) => setSeverity(event.target.value),
						"aria-label": "Priority",
						className: "h-11 rounded-xl border border-line px-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "low",
								children: "Low"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "normal",
								children: "Normal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "high",
								children: "High"
							})
						]
					}),
					phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: extra,
						onChange: (event) => setExtra(event.target.value),
						placeholder: "Users or extensions, site address, current provider, and the speed or handsets you need.",
						className: "min-h-24 rounded-xl border border-line px-3 py-3"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: extra,
						onChange: (event) => setExtra(event.target.value),
						placeholder: "Sites, users, and what should be in the quote.",
						className: "min-h-24 rounded-xl border border-line px-3 py-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: details,
						onChange: (event) => setDetails(event.target.value),
						required: true,
						placeholder: "What do you need done?",
						className: "min-h-24 rounded-xl border border-line px-3 py-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: send.isPending,
						className: "h-11 rounded-xl bg-ink text-sm font-semibold text-white disabled:opacity-50",
						children: send.isPending ? "Sending" : "Request a quote"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-xl bg-accent-soft px-4 py-3 text-sm",
				children: [
					"An admin has to approve service ordering before this account can request ",
					item.name,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/portal/tickets",
				className: "text-sm font-semibold text-accent",
				children: "Contact support instead"
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: notice
			}) : null
		]
	});
}
var Route$49 = createFileRoute("/portal/tickets/")({ component: TicketList });
function TicketList() {
	const session = usePortalSession();
	const base = useRouterState({ select: (state) => state.location.pathname }).startsWith("/production/user-portal") ? "/production/user-portal" : "/portal";
	const tickets = session.data?.tickets ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Support tickets"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: `${base}/tickets/new`,
				className: "inline-flex h-11 items-center rounded-xl bg-ink px-4 text-sm font-semibold text-white",
				children: "New ticket"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "grid gap-2",
			children: [tickets.map((ticket) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: `${base}/tickets/$ticketId`,
				params: { ticketId: String(ticket.id) },
				className: "grid gap-1 rounded-xl border border-line bg-surface px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-sm font-semibold",
						children: ticket.subject
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase text-accent",
						children: ticket.status
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted",
					children: [ticket.category || "Support", /^\d+$/.test(ticket.zendeskId) ? ` · Zendesk #${ticket.zendeskId}` : ""]
				})]
			}) }, ticket.id)), session.data && tickets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "text-sm text-muted",
				children: "No tickets on this account yet."
			}) : null]
		})]
	});
}
var Route$48 = createFileRoute("/portal/tickets/$ticketId")({ component: TicketDetail });
function TicketDetail() {
	const { ticketId = "" } = useParams({ strict: false });
	const id = Number(ticketId);
	const token = useShopToken();
	const client = useQueryClient();
	const [body, setBody] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const detail = useQuery({
		queryKey: [
			"portal-ticket",
			token,
			id
		],
		queryFn: () => getPortalTicket({ data: {
			token,
			id
		} }),
		enabled: Boolean(token && id)
	});
	const refresh = useMutation({
		mutationFn: () => refreshPortalTicket({ data: {
			token,
			id
		} }),
		onSuccess: (result) => {
			setNotice(result.synced ? "Status pulled from Zendesk." : result.warning || "Zendesk did not return an update.");
			client.invalidateQueries({ queryKey: [
				"portal-ticket",
				token,
				id
			] });
			client.invalidateQueries({ queryKey: ["portal-session", token] });
		},
		onError: (error) => setNotice(error instanceof Error ? error.message : "Could not refresh.")
	});
	const reply = useMutation({
		mutationFn: () => replyPortalTicket({ data: {
			token,
			id,
			body
		} }),
		onSuccess: () => {
			setBody("");
			setNotice("Reply added.");
			client.invalidateQueries({ queryKey: [
				"portal-ticket",
				token,
				id
			] });
		},
		onError: (error) => setNotice(error instanceof Error ? error.message : "Could not reply.")
	});
	const ticket = detail.data;
	const listTo = useRouterState({ select: (state) => state.location.pathname }).startsWith("/production/user-portal") ? "/production/user-portal/tickets" : "/portal/tickets";
	if (detail.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Opening the ticket…"
	});
	if (detail.isError || !ticket) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-bad",
		children: detail.error instanceof Error ? detail.error.message : "Ticket not found."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: listTo,
				className: "text-sm text-muted",
				children: "All tickets"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-semibold tracking-tight",
						children: ticket.subject
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							ticket.status,
							" · ",
							ticket.category,
							/^\d+$/.test(ticket.zendeskId) ? ` · Zendesk #${ticket.zendeskId}` : ""
						]
					}),
					!ticket.zendeskId && ticket.zendeskWarning ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-[#8e1f0b]",
						children: ticket.zendeskWarning
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-10 shrink-0 rounded-full border border-line px-3 text-xs font-semibold",
					onClick: () => refresh.mutate(),
					disabled: refresh.isPending,
					children: refresh.isPending ? "Syncing" : "Refresh"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: ticket.comments.map((comment, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-line bg-surface px-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-muted",
						children: comment.author === "Zendesk" || !comment.author ? "MTS Support" : comment.author
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 whitespace-pre-wrap",
						children: comment.body
					})]
				}, `${comment.at}-${index}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-2",
				onSubmit: (event) => {
					event.preventDefault();
					reply.mutate();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: body,
					onChange: (event) => setBody(event.target.value),
					required: true,
					placeholder: "Add a reply",
					"aria-label": "Reply",
					className: "min-h-24 rounded-xl border border-line bg-surface px-3 py-3"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: reply.isPending,
					className: "h-11 rounded-xl bg-ink text-sm font-semibold text-white disabled:opacity-50",
					children: "Send reply"
				})]
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: notice
			}) : null
		]
	});
}
var Route$47 = createFileRoute("/portal/tickets/new")({ component: NewTicket });
var selectClass = "h-11 w-full rounded-xl border border-line bg-surface px-3 text-sm";
function control(field, value, set) {
	const kind = controlKind(field.type);
	if (kind === "textarea") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
		value,
		onChange: (event) => set(event.target.value),
		required: field.required
	});
	if (kind === "select") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		value,
		onChange: (event) => set(event.target.value),
		required: field.required,
		className: selectClass,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: field.required ? "Choose" : "Optional"
		}), field.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: option.value,
			children: option.name
		}, option.value))]
	});
	if (kind === "checkbox") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex h-11 items-center gap-2 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			checked: value === "true",
			onChange: (event) => set(event.target.checked ? "true" : "false")
		}), field.title]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		type: kind === "number" ? "number" : kind === "date" ? "date" : "text",
		value,
		onChange: (event) => set(event.target.value),
		required: field.required,
		className: "h-11 rounded-xl"
	});
}
function applyConditions(fields, form, values) {
	const onForm = !form ? fields : fields.filter((field) => form.fieldIds.includes(field.id) || field.key === "subject" || field.key === "description");
	const base = onForm.length ? onForm : fields;
	const conditions = form?.conditions ?? [];
	const childIds = new Set(conditions.flatMap((condition) => condition.children.map((child) => child.id)));
	const required = /* @__PURE__ */ new Map();
	for (const condition of conditions) {
		if ((values[condition.parentId] || "") !== condition.value) continue;
		for (const child of condition.children) required.set(child.id, child.required || required.get(child.id) === true);
	}
	return base.filter((field) => !childIds.has(field.id) || required.has(field.id)).map((field) => required.has(field.id) ? {
		...field,
		required: required.get(field.id) || field.required
	} : field);
}
function NewTicket() {
	const token = useShopToken();
	const navigate = useNavigate();
	const client = useQueryClient();
	const schema = useQuery({
		queryKey: ["ticket-schema", token],
		queryFn: () => listPortalTicketSchema({ data: token }),
		enabled: Boolean(token)
	});
	const [formId, setFormId] = (0, import_react.useState)("");
	const [values, setValues] = (0, import_react.useState)({});
	const [notice, setNotice] = (0, import_react.useState)("");
	const forms = schema.data?.forms ?? [];
	const fields = schema.data?.fields ?? [];
	const selected = forms.find((form) => form.id === formId) || forms[0];
	const shown = (0, import_react.useMemo)(() => applyConditions(fields, selected, values), [
		fields,
		selected,
		values
	]);
	const send = useMutation({
		mutationFn: () => {
			const subject = shown.find((field) => field.key === "subject");
			const description = shown.find((field) => field.key === "description");
			const priority = shown.find((field) => field.key === "priority");
			const kind = shown.find((field) => field.key === "tickettype");
			const payload = {};
			for (const field of shown) payload[field.id] = values[field.id] || "";
			if (priority) payload.priority = values[priority.id] || "";
			if (kind) payload.tickettype = values[kind.id] || "";
			return submitPortalTicket({ data: {
				token,
				subject: subject ? values[subject.id] || "" : values.subject || "",
				body: description ? values[description.id] || "" : values.description || "",
				category: selected?.name || "IT support",
				severity: priority ? values[priority.id] || "normal" : "normal",
				formId: selected?.id || "",
				fields: payload
			} });
		},
		onSuccess: (result) => {
			client.invalidateQueries({ queryKey: ["portal-session", token] });
			if (result.warning && !result.zendeskId) setNotice(result.warning);
			const base = window.location.pathname.startsWith("/production/user-portal") ? "/production/user-portal" : "/portal";
			navigate({
				to: `${base}/tickets/$ticketId`,
				params: { ticketId: String(result.ticketId) }
			});
		},
		onError: (error) => setNotice(error instanceof Error ? error.message : "Could not open the ticket.")
	});
	if (schema.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Loading the support form…"
	});
	if (!shown.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FallbackTicket, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid w-full gap-3",
		onSubmit: (event) => {
			event.preventDefault();
			setNotice("");
			send.mutate();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-medium tracking-tight",
				children: "New ticket"
			}),
			schema.data?.warning ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: schema.data.warning
			}) : null,
			forms.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Form",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: selected?.id || "",
					onChange: (event) => {
						setFormId(event.target.value);
						setValues({});
					},
					className: selectClass,
					children: forms.map((form) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: form.id,
						children: form.name
					}, form.id))
				})
			}) : null,
			shown.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: field.type === "checkbox" ? "" : field.title,
				hint: field.description || void 0,
				children: control(field, values[field.id] || "", (next) => setValues((current) => ({
					...current,
					[field.id]: next
				})))
			}, field.id)),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-bad",
				children: notice
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: send.isPending,
				className: "h-11 rounded-xl bg-ink text-sm font-medium text-white disabled:opacity-50",
				children: send.isPending ? "Sending" : "Submit ticket"
			})
		]
	});
}
function FallbackTicket() {
	const token = useShopToken();
	const navigate = useNavigate();
	const client = useQueryClient();
	const [subject, setSubject] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [severity, setSeverity] = (0, import_react.useState)("normal");
	const [notice, setNotice] = (0, import_react.useState)("");
	const send = useMutation({
		mutationFn: () => submitPortalTicket({ data: {
			token,
			subject,
			body,
			category: "IT support",
			severity
		} }),
		onSuccess: (result) => {
			if (result.warning && !result.zendeskId) setNotice(result.warning);
			client.invalidateQueries({ queryKey: ["portal-session", token] });
			const base = window.location.pathname.startsWith("/production/user-portal") ? "/production/user-portal" : "/portal";
			navigate({
				to: `${base}/tickets/$ticketId`,
				params: { ticketId: String(result.ticketId) }
			});
		},
		onError: (error) => setNotice(error instanceof Error ? error.message : "Could not open the ticket.")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid w-full gap-3",
		onSubmit: (event) => {
			event.preventDefault();
			send.mutate();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-medium tracking-tight",
				children: "New ticket"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Zendesk has not published a customer form yet. Subject and description still open a ticket."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Subject",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: subject,
					onChange: (event) => setSubject(event.target.value),
					required: true,
					className: "h-11 rounded-xl"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Description",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: body,
					onChange: (event) => setBody(event.target.value),
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Priority",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: severity,
					onChange: (event) => setSeverity(event.target.value),
					className: selectClass,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "low",
							children: "Low"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "normal",
							children: "Normal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "high",
							children: "High"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "urgent",
							children: "Urgent"
						})
					]
				})
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: notice
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: send.isPending,
				className: "h-11 rounded-xl bg-ink text-sm font-medium text-white disabled:opacity-50",
				children: send.isPending ? "Sending" : "Submit ticket"
			})
		]
	});
}
var $$splitComponentImporter$46 = () => import("./admin-portal-DvU5d4n-.mjs");
var Route$46 = createFileRoute("/production/admin-portal/")({ component: lazyRouteComponent($$splitComponentImporter$46, "component") });
var $$splitComponentImporter$45 = () => import("./access-DZF2AIij.mjs");
var Route$45 = createFileRoute("/production/admin-portal/access")({ component: lazyRouteComponent($$splitComponentImporter$45, "component") });
var $$splitComponentImporter$44 = () => import("./agent-CrGUY5zN.mjs");
var Route$44 = createFileRoute("/production/admin-portal/agent")({ component: lazyRouteComponent($$splitComponentImporter$44, "component") });
var $$splitComponentImporter$43 = () => import("./campaigns-CLkjUM0w.mjs");
var Route$43 = createFileRoute("/production/admin-portal/campaigns")({ component: lazyRouteComponent($$splitComponentImporter$43, "component") });
var $$splitComponentImporter$42 = () => import("./docs-Zfry_v_6.mjs");
var Route$42 = createFileRoute("/production/admin-portal/docs")({ component: lazyRouteComponent($$splitComponentImporter$42, "component") });
var $$splitComponentImporter$41 = () => import("./forms-BndpbIdV.mjs");
var Route$41 = createFileRoute("/production/admin-portal/forms")({ component: lazyRouteComponent($$splitComponentImporter$41, "component") });
var $$splitComponentImporter$40 = () => import("./integrations-BDdot-_r.mjs");
var Route$40 = createFileRoute("/production/admin-portal/integrations")({ component: lazyRouteComponent($$splitComponentImporter$40, "component") });
var $$splitComponentImporter$39 = () => import("./payments-BhtjiIfp.mjs");
var Route$39 = createFileRoute("/production/admin-portal/payments")({ component: lazyRouteComponent($$splitComponentImporter$39, "component") });
var $$splitComponentImporter$38 = () => import("./products-CMm7084_.mjs");
var Route$38 = createFileRoute("/production/admin-portal/products")({ component: lazyRouteComponent($$splitComponentImporter$38, "component") });
var $$splitComponentImporter$37 = () => import("./roles-Bgu87IhO.mjs");
var Route$37 = createFileRoute("/production/admin-portal/roles")({ component: lazyRouteComponent($$splitComponentImporter$37, "component") });
var $$splitComponentImporter$36 = () => import("./services-C8148wtx.mjs");
var Route$36 = createFileRoute("/production/admin-portal/services")({ component: lazyRouteComponent($$splitComponentImporter$36, "component") });
var $$splitComponentImporter$35 = () => import("./settings-CHK0pPRp.mjs");
var Route$35 = createFileRoute("/production/admin-portal/settings")({ component: lazyRouteComponent($$splitComponentImporter$35, "component") });
var $$splitComponentImporter$34 = () => import("./users-DHwOlzDN.mjs");
var Route$34 = createFileRoute("/production/admin-portal/users")({ component: lazyRouteComponent($$splitComponentImporter$34, "component") });
var $$splitComponentImporter$33 = () => import("./user-portal-DPEaidMm.mjs");
var Route$33 = createFileRoute("/production/user-portal/")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var $$splitComponentImporter$32 = () => import("./account-D-skWA0a.mjs");
var Route$32 = createFileRoute("/production/user-portal/account")({ component: lazyRouteComponent($$splitComponentImporter$32, "component") });
var $$splitComponentImporter$31 = () => import("./billing-CKx32i8x.mjs");
var Route$31 = createFileRoute("/production/user-portal/billing")({ component: lazyRouteComponent($$splitComponentImporter$31, "component") });
var $$splitComponentImporter$30 = () => import("./call-Cd15U_TD.mjs");
var Route$30 = createFileRoute("/production/user-portal/call")({ component: lazyRouteComponent($$splitComponentImporter$30, "component") });
var $$splitComponentImporter$29 = () => import("./campaigns-CBraWs2t.mjs");
var Route$29 = createFileRoute("/production/user-portal/campaigns")({ component: lazyRouteComponent($$splitComponentImporter$29, "component") });
var $$splitComponentImporter$28 = () => import("./checkout-C_k7cjid.mjs");
var Route$28 = createFileRoute("/production/user-portal/checkout")({ component: lazyRouteComponent($$splitComponentImporter$28, "component") });
var $$splitComponentImporter$27 = () => import("./complaints-C3P-KKDF.mjs");
var Route$27 = createFileRoute("/production/user-portal/complaints")({ component: lazyRouteComponent($$splitComponentImporter$27, "component") });
var $$splitComponentImporter$26 = () => import("./my-services-BlJ6IlLY.mjs");
var Route$26 = createFileRoute("/production/user-portal/my-services")({ component: lazyRouteComponent($$splitComponentImporter$26, "component") });
var $$splitComponentImporter$25 = () => import("./notifications-CUMv84gd.mjs");
var Route$25 = createFileRoute("/production/user-portal/notifications")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./organization-DLEaCyXz.mjs");
var Route$24 = createFileRoute("/production/user-portal/organization")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
var $$splitComponentImporter$23 = () => import("./quotes-BG6hvqlt.mjs");
var Route$23 = createFileRoute("/production/user-portal/quotes")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("./shop-BsxInmAG.mjs");
var Route$22 = createFileRoute("/production/user-portal/shop")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("../_slug-DZ6n7ziE.mjs");
var Route$21 = createFileRoute("/store/$slug/")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("../_sku-BHg6FJro.mjs");
var Route$20 = createFileRoute("/store/$slug/$sku")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./account-TRpFMYde.mjs");
var Route$19 = createFileRoute("/store/$slug/account")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./checkout-hfDOEGuY.mjs");
var Route$18 = createFileRoute("/store/$slug/checkout")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var STEPS = [
	"information",
	"shipping",
	"payment"
];
function Checkout() {
	const { slug, query } = useStore();
	const store = query.data;
	const lines = useCart();
	const token = useShopToken();
	const account = useQuery({
		queryKey: ["shop-account", token],
		queryFn: () => getShopAccount({ data: token }),
		enabled: Boolean(token)
	});
	const checkout = useQuery({
		queryKey: ["shop-checkout", token],
		queryFn: () => getShopCheckout({ data: token })
	});
	const [step, setStep] = (0, import_react.useState)("information");
	const [email, setEmail] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [saveAccount, setSaveAccount] = (0, import_react.useState)(false);
	const [password, setPassword] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [region, setRegion] = (0, import_react.useState)("");
	const [postal, setPostal] = (0, import_react.useState)("");
	const [country, setCountry] = (0, import_react.useState)("United States");
	const [shippingMethod, setShippingMethod] = (0, import_react.useState)("standard");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("card");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [cardNumber, setCardNumber] = (0, import_react.useState)("4242 4242 4242 4242");
	const [cardExp, setCardExp] = (0, import_react.useState)("12/28");
	const [cardCcv, setCardCcv] = (0, import_react.useState)("123");
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const customer = account.data?.customer;
		if (!customer) return;
		setEmail(customer.email);
		setName(customer.name);
		setPhone(customer.phone);
		setAddress(customer.address);
		setCity(customer.city);
		setRegion(customer.region);
		setPostal(customer.postal);
		setCountry(customer.country || "United States");
	}, [account.data]);
	const detailed = lines.map((line) => ({
		...line,
		product: store?.products.find((product) => product.sku === line.sku)
	})).filter((line) => line.product);
	const subtotal = detailed.reduce((sum, line) => sum + line.quantity * (line.product?.priceCents ?? 0), 0);
	const shippingCents = shippingMethod === "express" ? 2500 : subtotal >= 5e4 ? 0 : 1500;
	const total = subtotal + shippingCents;
	const stepIndex = STEPS.indexOf(step);
	const place = useMutation({
		mutationFn: (method) => placeStorefrontOrder({ data: {
			name,
			email,
			phone,
			company,
			address,
			city,
			region,
			postal,
			country,
			shippingMethod,
			paymentMethod: method,
			notes,
			password: saveAccount ? password : "",
			token,
			mockCard: method === "card",
			cardLast4: method === "card" ? cardNumber.replace(/\D/g, "").slice(-4) : "",
			cardExp: method === "card" ? cardExp : "",
			items: detailed.map((line) => ({
				sku: line.sku,
				quantity: line.quantity
			}))
		} }),
		onSuccess: (result) => {
			if (result.token) setShopToken(result.token);
			clearCart();
		},
		onError: (cause) => setError(cause instanceof Error ? cause.message : "Could not place the order.")
	});
	if (!store) return null;
	if (detailed.length === 0 && !place.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-lg justify-items-center gap-4 px-4 py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg font-semibold",
			children: "Your cart is empty"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/store/$slug",
			params: { slug: store.slug },
			className: "shop-press mt-6 inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white",
			children: "Return to the shop"
		})]
	});
	if (place.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "shop-rise mx-auto grid max-w-lg gap-3 px-4 py-12 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "inline-flex items-center gap-2 text-sm font-semibold text-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), " Order received"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold tracking-tight",
				children: place.data.number
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-7 text-muted",
				children: place.data.mockPaid ? "Mock payment approved. The test card was accepted and this order is marked paid. No real charge was made." : place.data.paymentUrl ? "This order is not paid yet. Finish payment on the secure page. It is marked paid only after the provider confirms it." : "The order is in your account. An invoice stays unpaid until it is collected."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: ["Total ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold tabular-nums",
					children: money(place.data.totalCents)
				})]
			}),
			place.data.paymentUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: place.data.paymentUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "shop-press mt-6 inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white",
				children: "Continue to payment"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/store/$slug/account",
					params: { slug: store.slug },
					className: "shop-press inline-flex h-12 items-center justify-center rounded-full border border-line px-5 text-sm font-semibold",
					children: "Track this order"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/store/$slug",
					params: { slug: store.slug },
					className: "inline-flex h-12 items-center justify-center text-sm text-muted",
					children: "Keep shopping"
				})]
			})
		]
	});
	const summary = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: detailed.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative",
						children: [line.product?.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: line.product.imageUrl,
							alt: "",
							className: "size-16 rounded-xl border border-line bg-white object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block size-16 rounded-xl bg-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -right-2 -top-2 grid min-w-5 place-items-center rounded-full bg-ink px-1 text-[10px] font-semibold leading-5 text-white",
							children: line.quantity
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 text-sm font-medium",
						children: line.product?.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm tabular-nums",
						children: money(line.quantity * (line.product?.priceCents ?? 0))
					})
				]
			}, line.sku))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-2 border-t border-line pt-4 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: "Subtotal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: money(subtotal)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: "Shipping"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: shippingCents === 0 ? "Free" : money(shippingCents)
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted",
				children: "Total"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xl font-semibold tabular-nums",
				children: money(total)
			})]
		})
	] });
	function go(next) {
		setError("");
		setStep(next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "bg-[#f3f6f7] lg:order-2 lg:border-l lg:border-line lg:px-8 lg:py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryToggle, {
				total: money(total),
				children: summary
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden lg:block",
				children: summary
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-white px-4 py-6 sm:px-10 lg:order-1 lg:py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-xl gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-wrap items-center gap-2 text-xs text-muted",
						"aria-label": "Checkout",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/store/$slug",
							params: { slug },
							children: "Cart"
						}), STEPS.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "/"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: index > stepIndex,
								className: step === item ? "font-semibold text-ink" : index < stepIndex ? "text-accent" : "cursor-default",
								onClick: () => {
									if (index < stepIndex) go(item);
								},
								children: item === "information" ? "Information" : item === "shipping" ? "Shipping" : "Payment"
							})]
						}, item))]
					}),
					step !== "information" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y divide-line overflow-hidden rounded-2xl border border-line text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
								label: "Contact",
								value: email,
								onChange: () => go("information")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
								label: "Ship to",
								value: [
									address,
									city,
									region,
									postal,
									country
								].filter(Boolean).join(", "),
								onChange: () => go("information")
							}),
							step === "payment" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
								label: "Method",
								value: shippingMethod === "express" ? `Express · ${money(2500)}` : `Standard · ${shippingCents === 0 ? "Free" : money(shippingCents)}`,
								onChange: () => go("shipping")
							}) : null
						]
					}) : null,
					step === "information" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "shop-rise grid gap-4",
						onSubmit: (event) => {
							event.preventDefault();
							go("shipping");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-lg font-semibold",
								children: "Contact"
							}),
							account.data ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: ["Signed in as ", account.data.customer.email]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: ["Already have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/store/$slug/account",
									params: { slug },
									className: "font-semibold text-accent",
									children: "Sign in"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
								label: "Email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: email,
									onChange: (event) => setEmail(event.target.value),
									required: true,
									autoComplete: "email",
									className: fieldClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "pt-2 text-lg font-semibold",
								children: "Delivery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
								label: "Country",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: country,
									onChange: (event) => setCountry(event.target.value),
									required: true,
									autoComplete: "country-name",
									className: fieldClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
									label: "Full name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: name,
										onChange: (event) => setName(event.target.value),
										required: true,
										autoComplete: "name",
										className: fieldClass
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
									label: "Company (optional)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: company,
										onChange: (event) => setCompany(event.target.value),
										autoComplete: "organization",
										className: fieldClass
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
								label: "Address",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: address,
									onChange: (event) => setAddress(event.target.value),
									required: true,
									autoComplete: "address-line1",
									className: fieldClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
										label: "City",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: city,
											onChange: (event) => setCity(event.target.value),
											required: true,
											autoComplete: "address-level2",
											className: fieldClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
										label: "State",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: region,
											onChange: (event) => setRegion(event.target.value),
											autoComplete: "address-level1",
											className: fieldClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
										label: "Postal code",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: postal,
											onChange: (event) => setPostal(event.target.value),
											required: true,
											autoComplete: "postal-code",
											className: fieldClass
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
								label: "Phone",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: phone,
									onChange: (event) => setPhone(event.target.value),
									autoComplete: "tel",
									className: fieldClass
								})
							}),
							account.data ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "size-5",
									checked: saveAccount,
									onChange: (event) => setSaveAccount(event.target.checked)
								}), "Save this information and create an account"]
							}),
							saveAccount ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
								label: "Password",
								hint: "At least 8 characters.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									value: password,
									onChange: (event) => setPassword(event.target.value),
									required: true,
									minLength: 8,
									autoComplete: "new-password",
									className: fieldClass
								})
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "shop-press h-12 rounded-xl bg-ink text-sm font-semibold text-white",
								children: "Continue to shipping"
							})
						]
					}) : null,
					step === "shipping" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "shop-rise grid gap-3",
						onSubmit: (event) => {
							event.preventDefault();
							go("payment");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-lg font-semibold",
								children: "Shipping method"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: choiceClass(shippingMethod === "standard"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "ship",
										className: "size-5",
										checked: shippingMethod === "standard",
										onChange: () => setShippingMethod("standard")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold",
										children: "Standard"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted",
										children: "5–7 business days"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: subtotal >= 5e4 ? "Free" : money(1500)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: choiceClass(shippingMethod === "express"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "ship",
										className: "size-5",
										checked: shippingMethod === "express",
										onChange: () => setShippingMethod("express")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold",
										children: "Express"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted",
										children: "2 business days"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: money(2500)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "h-12 text-sm text-accent",
									onClick: () => go("information"),
									children: "Return to information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "shop-press h-12 rounded-xl bg-ink px-6 text-sm font-semibold text-white sm:min-w-52",
									children: "Continue to payment"
								})]
							})
						]
					}) : null,
					step === "payment" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "shop-rise grid gap-3",
						onSubmit: (event) => {
							event.preventDefault();
							if (cardNumber.replace(/\D/g, "").length < 13 || !/^\d{2}\/\d{2}$/.test(cardExp) || cardCcv.replace(/\D/g, "").length < 3) {
								setError("Enter the card number, expiry, and CCV.");
								return;
							}
							setPaymentMethod("card");
							setError("");
							place.mutate("card");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "flex items-center gap-2 text-lg font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" }), " Payment"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 rounded-2xl border border-line bg-[#f7fbfb] p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: "Mock payment gateway"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: "Test card only. Nothing is charged and the full number is not stored."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
										label: "Card number",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: cardNumber,
											onChange: (event) => setCardNumber(event.target.value),
											inputMode: "numeric",
											autoComplete: "cc-number",
											className: fieldClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
											label: "Expiry",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: cardExp,
												onChange: (event) => setCardExp(event.target.value),
												placeholder: "MM/YY",
												autoComplete: "cc-exp",
												className: fieldClass
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
											label: "CCV",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: cardCcv,
												onChange: (event) => setCardCcv(event.target.value),
												inputMode: "numeric",
												autoComplete: "cc-csc",
												className: fieldClass
											})
										})]
									})
								]
							}),
							checkout.data && !checkout.data.signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/production/signin",
								className: "flex h-12 items-center justify-center rounded-xl bg-ink text-sm font-semibold text-white",
								children: "Sign in to the customer portal"
							}) : null,
							checkout.data?.signedIn && !checkout.data.canPurchase ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-xl bg-warn-soft px-4 py-3 text-sm text-warn",
								children: "This account cannot purchase products."
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopField, {
								label: "Order notes (optional)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: notes,
									onChange: (event) => setNotes(event.target.value),
									className: `${fieldClass} h-24 py-3`
								})
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-bad",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 grid gap-3",
								children: [
									checkout.data?.signedIn && checkout.data.canPurchase ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: place.isPending,
										className: "shop-press h-12 rounded-xl bg-ink text-sm font-semibold text-white disabled:opacity-50",
										children: place.isPending && paymentMethod === "card" ? "Checking the test card" : `Pay now · ${money(total)}`
									}) : checkout.data?.signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-xs text-muted",
										children: "This account cannot purchase products."
									}) : null,
									checkout.data?.payLater ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: place.isPending,
										onClick: () => {
											setPaymentMethod("pay_later");
											setError("");
											place.mutate("pay_later");
										},
										className: "shop-press h-12 rounded-xl border border-ink text-sm font-semibold disabled:opacity-50",
										children: "Order now, pay later"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-xs text-muted",
										children: "This account pays before the order is placed."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "h-12 text-sm text-accent",
										onClick: () => go("shipping"),
										children: "Return to shipping"
									})
								]
							})
						]
					}) : null
				]
			})
		})]
	});
}
var fieldClass = "h-12 w-full rounded-xl border border-line bg-white px-3 text-base text-ink outline-none focus:border-accent";
function choiceClass(selected) {
	return `flex min-h-16 cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm transition ${selected ? "border-ink bg-accent-soft" : "border-line bg-white"}`;
}
function ShopField({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-1.5 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: label
			}),
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted",
				children: hint
			}) : null
		]
	});
}
function SummaryRow({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[5.5rem_minmax(0,1fr)_auto] items-start gap-2 bg-[#f7fafb] px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate",
				children: value || "—"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-accent",
				onClick: onChange,
				children: "Change"
			})
		]
	});
}
var $$splitComponentImporter$17 = () => import("./services-wGYrKgUd.mjs");
var Route$17 = createFileRoute("/store/$slug/services")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./tickets-Bneb2lMP.mjs");
var Route$16 = createFileRoute("/store/$slug/tickets")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./notifications-Kmh7I7UI.mjs");
var Route$15 = createFileRoute("/production/admin-portal/notifications/")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("../_notificationId-CnMhdX3Z.mjs");
var Route$14 = createFileRoute("/production/admin-portal/notifications/$notificationId")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./orders-BP_-pkrD.mjs");
var Route$13 = createFileRoute("/production/admin-portal/orders/")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("../_orderId-Dy4PASce.mjs");
var Route$12 = createFileRoute("/production/admin-portal/orders/$orderId")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./organizations-CLOrLHae.mjs");
var Route$11 = createFileRoute("/production/admin-portal/organizations/")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("../_orgId-DbLp1t9h.mjs");
var Route$10 = createFileRoute("/production/admin-portal/organizations/$orgId")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./tickets-6nN68j9X.mjs");
var Route$9 = createFileRoute("/production/admin-portal/tickets/")({
	validateSearch: (search) => ticketSearch({
		q: typeof search.q === "string" ? search.q : "",
		status: typeof search.status === "string" ? search.status : "unresolved",
		org: typeof search.org === "string" ? search.org : "",
		category: typeof search.category === "string" ? search.category : "",
		assignee: typeof search.assignee === "string" ? search.assignee : "",
		view: typeof search.view === "string" ? search.view : ""
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("../_ticketId-CENmBYZ0.mjs");
var Route$8 = createFileRoute("/production/admin-portal/tickets/$ticketId")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./orders-DIdQ7uv9.mjs");
var Route$7 = createFileRoute("/production/user-portal/orders/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("../_orderId-C77hgNUx.mjs");
var Route$6 = createFileRoute("/production/user-portal/orders/$orderId")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("../_sku-PvROtMKQ.mjs");
var Route$5 = createFileRoute("/production/user-portal/product/$sku")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./services-CqjHNGAc.mjs");
var Route$4 = createFileRoute("/production/user-portal/services/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("../_serviceId-DPlR2z7A.mjs");
var Route$3 = createFileRoute("/production/user-portal/services/$serviceId")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./tickets-Bk-EejgR.mjs");
var Route$2 = createFileRoute("/production/user-portal/tickets/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("../_ticketId-CdiklBiL.mjs");
var Route$1 = createFileRoute("/production/user-portal/tickets/$ticketId")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./new-CTv_1Fvj.mjs");
var Route = createFileRoute("/production/user-portal/tickets/new")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$111.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$112
});
var SplatRoute = Route$110.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => Route$112
});
var AppRoute = Route$109.update({
	id: "/_app",
	getParentRoute: () => Route$112
});
var LoginRoute = Route$108.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$112
});
var PortalRoute = Route$107.update({
	id: "/portal",
	path: "/portal",
	getParentRoute: () => Route$112
});
var UpgradeRoute = Route$106.update({
	id: "/upgrade",
	path: "/upgrade",
	getParentRoute: () => Route$112
});
var AppAccessRoute = Route$105.update({
	id: "/access",
	path: "/access",
	getParentRoute: () => AppRoute
});
var AppAgentRoute = Route$104.update({
	id: "/agent",
	path: "/agent",
	getParentRoute: () => AppRoute
});
var AppCampaignsRoute = Route$103.update({
	id: "/campaigns",
	path: "/campaigns",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$102.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppDocsRoute = Route$101.update({
	id: "/docs",
	path: "/docs",
	getParentRoute: () => AppRoute
});
var AppFormsRoute = Route$100.update({
	id: "/forms",
	path: "/forms",
	getParentRoute: () => AppRoute
});
var AppIntegrationsRoute = Route$99.update({
	id: "/integrations",
	path: "/integrations",
	getParentRoute: () => AppRoute
});
var AppPaymentsRoute = Route$98.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => AppRoute
});
var AppProductsRoute = Route$97.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => AppRoute
});
var AppRolesRoute = Route$96.update({
	id: "/roles",
	path: "/roles",
	getParentRoute: () => AppRoute
});
var AppServicesRoute = Route$95.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => AppRoute
});
var AppSettingsRoute = Route$94.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AppRoute
});
var AppUsersRoute = Route$93.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => AppRoute
});
var ApiOpenapiDotjsonRoute = Route$92.update({
	id: "/api/openapi.json",
	path: "/api/openapi.json",
	getParentRoute: () => Route$112
});
var AuthPopupRoute = Route$91.update({
	id: "/auth/popup",
	path: "/auth/popup",
	getParentRoute: () => Route$112
});
var PortalIndexRoute = Route$90.update({
	id: "/",
	path: "/",
	getParentRoute: () => PortalRoute
});
var PortalAccountRoute = Route$89.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => PortalRoute
});
var PortalBillingRoute = Route$88.update({
	id: "/billing",
	path: "/billing",
	getParentRoute: () => PortalRoute
});
var PortalCallRoute = Route$87.update({
	id: "/call",
	path: "/call",
	getParentRoute: () => PortalRoute
});
var PortalCampaignsRoute = Route$86.update({
	id: "/campaigns",
	path: "/campaigns",
	getParentRoute: () => PortalRoute
});
var PortalComplaintsRoute = Route$85.update({
	id: "/complaints",
	path: "/complaints",
	getParentRoute: () => PortalRoute
});
var PortalLoginRoute = Route$84.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => PortalRoute
});
var PortalMyServicesRoute = Route$83.update({
	id: "/my-services",
	path: "/my-services",
	getParentRoute: () => PortalRoute
});
var PortalNotificationsRoute = Route$82.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => PortalRoute
});
var PortalOrganizationRoute = Route$81.update({
	id: "/organization",
	path: "/organization",
	getParentRoute: () => PortalRoute
});
var PortalQuotesRoute = Route$80.update({
	id: "/quotes",
	path: "/quotes",
	getParentRoute: () => PortalRoute
});
var PortalRegisterRoute = Route$79.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => PortalRoute
});
var PortalShopRoute = Route$78.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => PortalRoute
});
var PortalVerifyRoute = Route$77.update({
	id: "/verify",
	path: "/verify",
	getParentRoute: () => PortalRoute
});
var ProductionIndexRoute = Route$76.update({
	id: "/production/",
	path: "/production/",
	getParentRoute: () => Route$112
});
var ProductionAdminPortalRoute = Route$75.update({
	id: "/production/admin-portal",
	path: "/production/admin-portal",
	getParentRoute: () => Route$112
});
var ProductionHomeRoute = Route$74.update({
	id: "/production/home",
	path: "/production/home",
	getParentRoute: () => Route$112
});
var ProductionSignInRoute = Route$73.update({
	id: "/production/sign-in",
	path: "/production/sign-in",
	getParentRoute: () => Route$112
});
var ProductionSigninRoute = Route$72.update({
	id: "/production/signin",
	path: "/production/signin",
	getParentRoute: () => Route$112
});
var ProductionUserPortalRoute = Route$71.update({
	id: "/production/user-portal",
	path: "/production/user-portal",
	getParentRoute: () => Route$112
});
var AppNotificationsIndexRoute = Route$70.update({
	id: "/notifications/",
	path: "/notifications/",
	getParentRoute: () => AppRoute
});
var AppNotificationsNotificationIdRoute = Route$69.update({
	id: "/notifications/$notificationId",
	path: "/notifications/$notificationId",
	getParentRoute: () => AppRoute
});
var AppOrdersIndexRoute = Route$68.update({
	id: "/orders/",
	path: "/orders/",
	getParentRoute: () => AppRoute
});
var AppOrdersOrderIdRoute = Route$67.update({
	id: "/orders/$orderId",
	path: "/orders/$orderId",
	getParentRoute: () => AppRoute
});
var AppOrganizationsIndexRoute = Route$66.update({
	id: "/organizations/",
	path: "/organizations/",
	getParentRoute: () => AppRoute
});
var AppOrganizationsOrgIdRoute = Route$65.update({
	id: "/organizations/$orgId",
	path: "/organizations/$orgId",
	getParentRoute: () => AppRoute
});
var AppTicketsIndexRoute = Route$64.update({
	id: "/tickets/",
	path: "/tickets/",
	getParentRoute: () => AppRoute
});
var AppTicketsTicketIdRoute = Route$63.update({
	id: "/tickets/$ticketId",
	path: "/tickets/$ticketId",
	getParentRoute: () => AppRoute
});
var ApiAgentSplatRoute = Route$62.update({
	id: "/api/agent/$",
	path: "/api/agent/$",
	getParentRoute: () => Route$112
});
var ApiAgentSpeakRoute = Route$61.update({
	id: "/api/agent/speak",
	path: "/api/agent/speak",
	getParentRoute: () => Route$112
});
var ApiAgentStreamRoute = Route$60.update({
	id: "/api/agent/stream",
	path: "/api/agent/stream",
	getParentRoute: () => Route$112
});
var ApiAuthSplatRoute = Route$59.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$112
});
var ApiJobsRunRoute = Route$58.update({
	id: "/api/jobs/run",
	path: "/api/jobs/run",
	getParentRoute: () => Route$112
});
var ApiOauthAuthorizeRoute = Route$57.update({
	id: "/api/oauth/authorize",
	path: "/api/oauth/authorize",
	getParentRoute: () => Route$112
});
var ApiOauthTokenRoute = Route$56.update({
	id: "/api/oauth/token",
	path: "/api/oauth/token",
	getParentRoute: () => Route$112
});
var ApiPaymentsAlternativeRoute = Route$55.update({
	id: "/api/payments/alternative",
	path: "/api/payments/alternative",
	getParentRoute: () => Route$112
});
var ApiZendeskWebhookRoute = Route$54.update({
	id: "/api/zendesk/webhook",
	path: "/api/zendesk/webhook",
	getParentRoute: () => Route$112
});
var PortalOrdersIndexRoute = Route$53.update({
	id: "/orders/",
	path: "/orders/",
	getParentRoute: () => PortalRoute
});
var PortalOrdersOrderIdRoute = Route$52.update({
	id: "/orders/$orderId",
	path: "/orders/$orderId",
	getParentRoute: () => PortalRoute
});
var PortalServicesIndexRoute = Route$51.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => PortalRoute
});
var PortalServicesServiceIdRoute = Route$50.update({
	id: "/services/$serviceId",
	path: "/services/$serviceId",
	getParentRoute: () => PortalRoute
});
var PortalTicketsIndexRoute = Route$49.update({
	id: "/tickets/",
	path: "/tickets/",
	getParentRoute: () => PortalRoute
});
var PortalTicketsTicketIdRoute = Route$48.update({
	id: "/tickets/$ticketId",
	path: "/tickets/$ticketId",
	getParentRoute: () => PortalRoute
});
var PortalTicketsNewRoute = Route$47.update({
	id: "/tickets/new",
	path: "/tickets/new",
	getParentRoute: () => PortalRoute
});
var ProductionAdminPortalIndexRoute = Route$46.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalAccessRoute = Route$45.update({
	id: "/access",
	path: "/access",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalAgentRoute = Route$44.update({
	id: "/agent",
	path: "/agent",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalCampaignsRoute = Route$43.update({
	id: "/campaigns",
	path: "/campaigns",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalDocsRoute = Route$42.update({
	id: "/docs",
	path: "/docs",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalFormsRoute = Route$41.update({
	id: "/forms",
	path: "/forms",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalIntegrationsRoute = Route$40.update({
	id: "/integrations",
	path: "/integrations",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalPaymentsRoute = Route$39.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalProductsRoute = Route$38.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalRolesRoute = Route$37.update({
	id: "/roles",
	path: "/roles",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalServicesRoute = Route$36.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalSettingsRoute = Route$35.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalUsersRoute = Route$34.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionUserPortalIndexRoute = Route$33.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalAccountRoute = Route$32.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalBillingRoute = Route$31.update({
	id: "/billing",
	path: "/billing",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalCallRoute = Route$30.update({
	id: "/call",
	path: "/call",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalCampaignsRoute = Route$29.update({
	id: "/campaigns",
	path: "/campaigns",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalCheckoutRoute = Route$28.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalComplaintsRoute = Route$27.update({
	id: "/complaints",
	path: "/complaints",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalMyServicesRoute = Route$26.update({
	id: "/my-services",
	path: "/my-services",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalNotificationsRoute = Route$25.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalOrganizationRoute = Route$24.update({
	id: "/organization",
	path: "/organization",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalQuotesRoute = Route$23.update({
	id: "/quotes",
	path: "/quotes",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalShopRoute = Route$22.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => ProductionUserPortalRoute
});
var StoreSlugIndexRoute = Route$21.update({
	id: "/store/$slug/",
	path: "/store/$slug/",
	getParentRoute: () => Route$112
});
var StoreSlugSkuRoute = Route$20.update({
	id: "/store/$slug/$sku",
	path: "/store/$slug/$sku",
	getParentRoute: () => Route$112
});
var StoreSlugAccountRoute = Route$19.update({
	id: "/store/$slug/account",
	path: "/store/$slug/account",
	getParentRoute: () => Route$112
});
var StoreSlugCheckoutRoute = Route$18.update({
	id: "/store/$slug/checkout",
	path: "/store/$slug/checkout",
	getParentRoute: () => Route$112
});
var StoreSlugServicesRoute = Route$17.update({
	id: "/store/$slug/services",
	path: "/store/$slug/services",
	getParentRoute: () => Route$112
});
var StoreSlugTicketsRoute = Route$16.update({
	id: "/store/$slug/tickets",
	path: "/store/$slug/tickets",
	getParentRoute: () => Route$112
});
var ProductionAdminPortalNotificationsIndexRoute = Route$15.update({
	id: "/notifications/",
	path: "/notifications/",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalNotificationsNotificationIdRoute = Route$14.update({
	id: "/notifications/$notificationId",
	path: "/notifications/$notificationId",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalOrdersIndexRoute = Route$13.update({
	id: "/orders/",
	path: "/orders/",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalOrdersOrderIdRoute = Route$12.update({
	id: "/orders/$orderId",
	path: "/orders/$orderId",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalOrganizationsIndexRoute = Route$11.update({
	id: "/organizations/",
	path: "/organizations/",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalOrganizationsOrgIdRoute = Route$10.update({
	id: "/organizations/$orgId",
	path: "/organizations/$orgId",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalTicketsIndexRoute = Route$9.update({
	id: "/tickets/",
	path: "/tickets/",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionAdminPortalTicketsTicketIdRoute = Route$8.update({
	id: "/tickets/$ticketId",
	path: "/tickets/$ticketId",
	getParentRoute: () => ProductionAdminPortalRoute
});
var ProductionUserPortalOrdersIndexRoute = Route$7.update({
	id: "/orders/",
	path: "/orders/",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalOrdersOrderIdRoute = Route$6.update({
	id: "/orders/$orderId",
	path: "/orders/$orderId",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalProductSkuRoute = Route$5.update({
	id: "/product/$sku",
	path: "/product/$sku",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalServicesIndexRoute = Route$4.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalServicesServiceIdRoute = Route$3.update({
	id: "/services/$serviceId",
	path: "/services/$serviceId",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalTicketsIndexRoute = Route$2.update({
	id: "/tickets/",
	path: "/tickets/",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalTicketsTicketIdRoute = Route$1.update({
	id: "/tickets/$ticketId",
	path: "/tickets/$ticketId",
	getParentRoute: () => ProductionUserPortalRoute
});
var ProductionUserPortalTicketsNewRoute = Route.update({
	id: "/tickets/new",
	path: "/tickets/new",
	getParentRoute: () => ProductionUserPortalRoute
});
var AppRouteChildren = {
	AppAccessRoute,
	AppAgentRoute,
	AppCampaignsRoute,
	AppDashboardRoute,
	AppDocsRoute,
	AppFormsRoute,
	AppIntegrationsRoute,
	AppPaymentsRoute,
	AppProductsRoute,
	AppRolesRoute,
	AppServicesRoute,
	AppSettingsRoute,
	AppUsersRoute,
	AppNotificationsNotificationIdRoute,
	AppOrdersOrderIdRoute,
	AppOrganizationsOrgIdRoute,
	AppTicketsTicketIdRoute,
	AppNotificationsIndexRoute,
	AppOrdersIndexRoute,
	AppOrganizationsIndexRoute,
	AppTicketsIndexRoute
};
var AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
var PortalRouteChildren = {
	PortalAccountRoute,
	PortalBillingRoute,
	PortalCallRoute,
	PortalCampaignsRoute,
	PortalComplaintsRoute,
	PortalLoginRoute,
	PortalMyServicesRoute,
	PortalNotificationsRoute,
	PortalOrganizationRoute,
	PortalQuotesRoute,
	PortalRegisterRoute,
	PortalShopRoute,
	PortalVerifyRoute,
	PortalIndexRoute,
	PortalOrdersOrderIdRoute,
	PortalServicesServiceIdRoute,
	PortalTicketsTicketIdRoute,
	PortalTicketsNewRoute,
	PortalOrdersIndexRoute,
	PortalServicesIndexRoute,
	PortalTicketsIndexRoute
};
var PortalRouteWithChildren = PortalRoute._addFileChildren(PortalRouteChildren);
var ProductionAdminPortalRouteChildren = {
	ProductionAdminPortalAccessRoute,
	ProductionAdminPortalAgentRoute,
	ProductionAdminPortalCampaignsRoute,
	ProductionAdminPortalDocsRoute,
	ProductionAdminPortalFormsRoute,
	ProductionAdminPortalIntegrationsRoute,
	ProductionAdminPortalPaymentsRoute,
	ProductionAdminPortalProductsRoute,
	ProductionAdminPortalRolesRoute,
	ProductionAdminPortalServicesRoute,
	ProductionAdminPortalSettingsRoute,
	ProductionAdminPortalUsersRoute,
	ProductionAdminPortalIndexRoute,
	ProductionAdminPortalNotificationsNotificationIdRoute,
	ProductionAdminPortalOrdersOrderIdRoute,
	ProductionAdminPortalOrganizationsOrgIdRoute,
	ProductionAdminPortalTicketsTicketIdRoute,
	ProductionAdminPortalNotificationsIndexRoute,
	ProductionAdminPortalOrdersIndexRoute,
	ProductionAdminPortalOrganizationsIndexRoute,
	ProductionAdminPortalTicketsIndexRoute
};
var ProductionAdminPortalRouteWithChildren = ProductionAdminPortalRoute._addFileChildren(ProductionAdminPortalRouteChildren);
var ProductionUserPortalRouteChildren = {
	ProductionUserPortalAccountRoute,
	ProductionUserPortalBillingRoute,
	ProductionUserPortalCallRoute,
	ProductionUserPortalCampaignsRoute,
	ProductionUserPortalCheckoutRoute,
	ProductionUserPortalComplaintsRoute,
	ProductionUserPortalMyServicesRoute,
	ProductionUserPortalNotificationsRoute,
	ProductionUserPortalOrganizationRoute,
	ProductionUserPortalQuotesRoute,
	ProductionUserPortalShopRoute,
	ProductionUserPortalIndexRoute,
	ProductionUserPortalOrdersOrderIdRoute,
	ProductionUserPortalProductSkuRoute,
	ProductionUserPortalServicesServiceIdRoute,
	ProductionUserPortalTicketsTicketIdRoute,
	ProductionUserPortalTicketsNewRoute,
	ProductionUserPortalOrdersIndexRoute,
	ProductionUserPortalServicesIndexRoute,
	ProductionUserPortalTicketsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	SplatRoute,
	AppRoute: AppRouteWithChildren,
	LoginRoute,
	PortalRoute: PortalRouteWithChildren,
	UpgradeRoute,
	ApiOpenapiDotjsonRoute,
	AuthPopupRoute,
	ProductionAdminPortalRoute: ProductionAdminPortalRouteWithChildren,
	ProductionHomeRoute,
	ProductionSignInRoute,
	ProductionSigninRoute,
	ProductionUserPortalRoute: ProductionUserPortalRoute._addFileChildren(ProductionUserPortalRouteChildren),
	ProductionIndexRoute,
	ApiAgentSplatRoute,
	ApiAgentSpeakRoute,
	ApiAgentStreamRoute,
	ApiAuthSplatRoute,
	ApiJobsRunRoute,
	ApiOauthAuthorizeRoute,
	ApiOauthTokenRoute,
	ApiPaymentsAlternativeRoute,
	ApiZendeskWebhookRoute,
	StoreSlugSkuRoute,
	StoreSlugAccountRoute,
	StoreSlugCheckoutRoute,
	StoreSlugServicesRoute,
	StoreSlugTicketsRoute,
	StoreSlugIndexRoute
};
var routeTree = Route$112._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { SummaryToggle as $, AccountPage as A, DocsPage as B, OrganizationPage as C, CampaignsPage as D, ComplaintsPage as E, RolesPage as F, getAgentChat as G, CampaignAdmin as H, ProductsPage as I, saveAgentKey as J, listAgentChats as K, PaymentsPage as L, PeoplePage as M, SettingsPage as N, CallDesk as O, ServicesDesk as P, StoreFrame as Q, IntegrationPage as R, QuotesPage as S, MyServices as T, AccessPage as U, DashboardPage as V, chooseAgentModel as W, PhotoLightbox as X, saveVoiceKey as Y, QtyStepper as Z, OrdersPage$1 as _, TicketDetail as a, rewriteProductionPath as at, Route$77 as b, PortalServices as c, TicketPage as d, useStore as et, TicketsPage as f, OrderBarcode as g, OrderPage as h, NewTicket as i, rewriteAdminPath as it, PortalHome as j, BillingPage as k, OrderDetail as l, CompaniesPage as m, Checkout as n, setShopToken as nt, TicketList as o, ticketSearch as ot, CompanyPage as p, listAgentProviders as q, Route$20 as r, useShopToken as rt, ServiceDetail as s, router_exports as t, PortalShell as tt, OrdersPage as u, NotificationPage as v, NoticesPage as w, OrderPage$1 as x, NotificationsPage as y, FormsPage as z };
