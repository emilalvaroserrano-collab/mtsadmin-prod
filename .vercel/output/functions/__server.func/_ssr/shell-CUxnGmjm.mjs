import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as getShell } from "./api-DLRKIpWt.mjs";
import { a as Boot, n as useCurrentUser, r as useCurrentUserState, t as PortalAtmosphere, u as Input } from "./portal-atmosphere-DibPwfEL.mjs";
import { $ as Cable, A as Megaphone, C as PanelLeftClose, F as ListTree, G as Eye, L as LayoutDashboard, S as PanelLeftOpen, T as Monitor, Y as ClipboardList, a as UserRound, c as Ticket, et as Building2, f as Shield, g as Search, i as Users, m as Settings, n as Wrench, nt as BookOpen, q as CreditCard, rt as Bell, t as X, tt as Bot } from "../_libs/lucide-react.mjs";
import { i as signOut } from "./client-C_myEQ0J.mjs";
import { a as hasGateSessionMarker } from "./server-We5IxPnk.mjs";
import { w as storeSlug } from "./awb-CLll5ghY.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { ot as ticketSearch } from "./router-DkTNWi8Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-CUxnGmjm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of) and the session is not
* gate-materialized — behind the gate the next request signs the viewer
* straight back in, so a sign-out control there is a broken loop.
*/
function UserButton() {
	const user = useCurrentUser();
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const gateSession = (0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-7 place-items-center rounded-full bg-[#e3e3e3] text-xs font-semibold text-ink",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden text-[13px] font-medium sm:inline",
				children: label
			}),
			!gateSession && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: signingOut,
				onClick: () => {
					setSigningOut(true);
					signOut().catch(() => setSigningOut(false));
				},
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline disabled:cursor-wait disabled:no-underline",
				children: signingOut ? "Signing out…" : "Sign out"
			})
		]
	});
}
var NAV = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard,
		exact: true,
		group: "Work"
	},
	{
		to: "/agent",
		label: "MTS Agent",
		icon: Bot,
		group: "Work"
	},
	{
		to: "/notifications",
		label: "Notifications",
		icon: Bell,
		group: "Work"
	},
	{
		to: "/tickets",
		label: "Tickets",
		icon: Ticket,
		group: "Work"
	},
	{
		to: "/orders",
		label: "Orders",
		icon: ClipboardList,
		group: "Work"
	},
	{
		to: "/organizations",
		label: "Companies",
		icon: Building2,
		group: "Directory"
	},
	{
		to: "/users",
		label: "People",
		icon: Users,
		group: "Directory"
	},
	{
		to: "/access",
		label: "Customer access",
		icon: UserRound,
		group: "Directory"
	},
	{
		to: "/campaigns",
		label: "Campaigns",
		icon: Megaphone,
		group: "Directory"
	},
	{
		to: "/services",
		label: "Services",
		icon: Wrench,
		group: "Directory"
	},
	{
		to: "/products",
		label: "Catalog",
		icon: Monitor,
		group: "Commerce"
	},
	{
		to: "/payments",
		label: "Payments",
		icon: CreditCard,
		group: "Commerce"
	},
	{
		to: "/forms",
		label: "Ticket forms",
		icon: ListTree,
		group: "Setup"
	},
	{
		to: "/roles",
		label: "Roles",
		icon: Shield,
		group: "Setup"
	},
	{
		to: "/integrations",
		label: "Zendesk",
		icon: Cable,
		group: "Setup"
	},
	{
		to: "/settings",
		label: "Settings",
		icon: Settings,
		group: "Setup"
	},
	{
		to: "/docs",
		label: "Docs",
		icon: BookOpen,
		group: "Setup"
	}
];
var GROUPS = [
	"Work",
	"Directory",
	"Commerce",
	"Setup"
];
var MOBILE_TABS = [
	"/dashboard",
	"/tickets",
	"/orders",
	"/products"
];
var NAV_COUNTS = {
	"/tickets": (info) => info.ticketCount,
	"/organizations": (info) => info.companyCount,
	"/users": (info) => info.peopleCount,
	"/products": (info) => info.catalogCount,
	"/orders": (info) => info.orderCount,
	"/notifications": (info) => info.noticeCount
};
function adminHref(path, to) {
	if (!path.startsWith("/production/admin-portal")) return to;
	if (to === "/dashboard") return "/production/admin-portal";
	return `/production/admin-portal${to}`;
}
function adminActive(path, to, exact = false) {
	const href = adminHref(path, to);
	return exact ? path === href || path === `${href}/` : path === href || path.startsWith(`${href}/`);
}
function roleLabel(role) {
	if (role === "owner") return "Super Admin";
	if (role === "admin") return "Admin";
	if (role === "agent") return "Agent";
	if (role === "viewer") return "View only";
	return "Staff";
}
function Shell({ children }) {
	const { user, isPending } = useCurrentUserState();
	const path = useRouterState({ select: (state) => state.location.pathname });
	const navigate = useNavigate();
	const [more, setMore] = (0, import_react.useState)(false);
	const [find, setFind] = (0, import_react.useState)(false);
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const shell = useQuery({
		queryKey: ["shell"],
		queryFn: () => getShell(),
		enabled: Boolean(user)
	});
	(0, import_react.useEffect)(() => {
		setMore(false);
		setFind(false);
	}, [path]);
	(0, import_react.useEffect)(() => {
		const item = NAV.find((entry) => adminActive(path, entry.to, "exact" in entry && entry.exact));
		document.title = item ? `${item.label} · Manage Tech Service` : "Manage Tech Service";
	}, [path]);
	(0, import_react.useEffect)(() => {
		setCollapsed(window.localStorage.getItem("mts-sidebar") === "collapsed");
	}, []);
	function toggleCollapsed() {
		setCollapsed((value) => {
			const next = !value;
			window.localStorage.setItem("mts-sidebar", next ? "collapsed" : "open");
			return next;
		});
	}
	const productionAdmin = path.startsWith("/production/admin-portal");
	if (!productionAdmin && (isPending || user && shell.isPending)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boot, {});
	if (!user && !productionAdmin) return null;
	if (productionAdmin && !isPending && !user) return null;
	const info = shell.data;
	const current = NAV.find((entry) => adminActive(path, entry.to, "exact" in entry && entry.exact));
	function Nav({ compact }) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full min-h-0 flex-col bg-surface/80 backdrop-blur",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: compact ? "flex h-16 shrink-0 items-center justify-center border-b border-line bg-surface/95 px-2" : "flex h-16 shrink-0 items-center gap-3 border-b border-line bg-surface/95 px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 shrink-0 place-items-center rounded-lg bg-ink text-xs font-semibold tracking-wide text-white",
						children: "MT"
					}), compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-semibold leading-tight text-ink",
							children: info?.brandName ?? "Manage Tech Service"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "Admin desk"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-8 shrink-0 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-ink",
						"aria-label": "Collapse sidebar",
						onClick: toggleCollapsed,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, { className: "size-4" })
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: compact ? "flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-2 py-3" : "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-4",
					"aria-label": "Admin",
					children: [compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid h-11 w-full place-items-center rounded-xl text-muted hover:bg-surface-2 hover:text-ink",
						"aria-label": "Expand sidebar",
						title: "Expand sidebar",
						onClick: toggleCollapsed,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftOpen, { className: "size-4" })
					}) : null, GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-2 mb-1 h-px bg-line" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2 pb-1 text-[11px] font-semibold tracking-[0.14em] text-subtle uppercase",
						children: group
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-0.5",
						children: [NAV.filter((item) => item.group === group).map((item) => {
							const href = adminHref(path, item.to);
							const active = adminActive(path, item.to, "exact" in item && item.exact);
							const Icon = item.icon;
							const count = info ? NAV_COUNTS[item.to]?.(info) : void 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: href,
								search: item.to === "/tickets" ? ticketSearch() : void 0,
								"aria-current": active ? "page" : void 0,
								title: compact ? `${item.label}${count != null ? ` (${count})` : ""}` : void 0,
								className: compact ? active ? "flex h-11 items-center justify-center rounded-xl bg-ink text-white" : "flex h-11 items-center justify-center rounded-xl text-muted hover:bg-surface-2 hover:text-ink" : active ? "flex h-11 items-center gap-2.5 rounded-xl bg-ink px-3 text-sm font-semibold text-white" : "flex h-11 items-center gap-2.5 rounded-xl px-3 text-sm font-medium text-muted hover:bg-surface-2 hover:text-ink",
								children: [
									item.to === "/agent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/mts-agent.gif",
										alt: "",
										className: "size-5 shrink-0 rounded-full object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-4 shrink-0",
										strokeWidth: 1.75
									}),
									compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate",
										children: item.label
									}),
									!compact && count != null && (item.to !== "/notifications" || count > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: active ? "rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-semibold tabular-nums" : "rounded-full bg-surface-2 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-ink",
										children: count
									}) : null
								]
							}, item.to);
						}), group === "Commerce" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: path.startsWith("/production/admin-portal") ? "/production/user-portal/shop" : `/store/${storeSlug(info?.brandName ?? "Manage Tech Service")}`,
							target: "_blank",
							rel: "noreferrer",
							title: compact ? "Online Shop" : void 0,
							className: compact ? "flex h-11 items-center justify-center rounded-xl text-muted hover:bg-surface-2 hover:text-ink" : "flex h-11 items-center gap-2.5 rounded-xl px-3 text-sm font-medium text-muted hover:bg-surface-2 hover:text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
								className: "size-4 shrink-0",
								strokeWidth: 1.75
							}), compact ? null : "Online Shop"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: path.startsWith("/production/admin-portal") ? "/production/user-portal" : "/portal",
							title: compact ? "Customer portal" : void 0,
							className: compact ? "flex h-11 items-center justify-center rounded-xl text-muted hover:bg-surface-2 hover:text-ink" : "flex h-11 items-center gap-2.5 rounded-xl px-3 text-sm font-medium text-muted hover:bg-surface-2 hover:text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
								className: "size-4 shrink-0",
								strokeWidth: 1.75
							}), compact ? null : "Customer portal"]
						})] }) : null]
					})] }, group))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: compact ? "mt-auto flex shrink-0 justify-center border-t border-line bg-surface/95 px-2 py-3" : "mt-auto shrink-0 border-t border-line bg-surface/95 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: compact ? "flex items-center" : "flex items-center gap-2 text-xs font-medium text-ink",
						title: info?.zendeskConnected ? "Zendesk connected" : "Zendesk needs a client",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: info?.zendeskConnected ? "size-2 rounded-full bg-good" : "size-2 rounded-full bg-warn" }), compact ? null : info?.zendeskConnected ? "Zendesk connected" : "Zendesk needs a client"]
					}), compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 truncate text-xs text-muted",
						children: [
							roleLabel(info?.actor.role),
							" · ",
							info?.actor.email || info?.actor.name
						]
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "portal-stage min-h-screen text-ink md:h-dvh md:overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalAtmosphere, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: collapsed ? "min-h-screen md:grid md:h-dvh md:grid-cols-[4.5rem_minmax(0,1fr)] md:overflow-hidden" : "min-h-screen md:grid md:h-dvh md:grid-cols-[16.5rem_minmax(0,1fr)] md:overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden h-dvh overflow-hidden border-r border-line md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { compact: collapsed })
				}),
				more ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed inset-0 z-40 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute inset-0 bg-ink/40",
						"aria-label": "Close menu",
						onClick: () => setMore(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-[4.25rem] grid max-h-[70vh] content-start gap-3 overflow-y-auto rounded-t-3xl border border-line bg-surface p-4 shadow-[0_-12px_40px_rgba(0,57,112,0.12)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "More"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid size-11 place-items-center rounded-full hover:bg-surface-2",
								"aria-label": "Close",
								onClick: () => setMore(false),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2",
							children: [NAV.filter((item) => !MOBILE_TABS.includes(item.to)).map((item) => {
								const Icon = item.icon;
								const active = adminActive(path, item.to);
								const count = info ? NAV_COUNTS[item.to]?.(info) : void 0;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: adminHref(path, item.to),
									className: active ? "grid min-h-20 content-center justify-items-center gap-1 rounded-2xl bg-ink px-2 py-3 text-center text-white" : "grid min-h-20 content-center justify-items-center gap-1 rounded-2xl bg-surface-2 px-2 py-3 text-center text-ink",
									children: [
										item.to === "/agent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/mts-agent.gif",
											alt: "",
											className: "size-6 rounded-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-5",
											strokeWidth: 1.75
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[12px] font-medium leading-tight",
											children: item.label
										}),
										count != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] tabular-nums opacity-70",
											children: count
										}) : null
									]
								}, item.to);
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: path.startsWith("/production/admin-portal") ? "/production/user-portal/shop" : `/store/${storeSlug(info?.brandName ?? "Manage Tech Service")}`,
								target: "_blank",
								rel: "noreferrer",
								className: "grid min-h-20 content-center justify-items-center gap-1 rounded-2xl bg-surface-2 px-2 py-3 text-center text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
									className: "size-5",
									strokeWidth: 1.75
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[12px] font-medium leading-tight",
									children: "Online Shop"
								})]
							})]
						})]
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-h-screen min-w-0 grid-rows-[auto_minmax(0,1fr)] md:h-dvh md:min-h-0 md:overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "sticky top-0 z-20 border-b border-line bg-surface/80 backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-3 md:px-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 md:hidden",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-semibold tracking-[0.14em] text-subtle uppercase",
												children: current?.group ?? "Desk"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-semibold text-ink",
												children: current?.label ?? "Admin"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "hidden min-w-0 md:block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-semibold tracking-[0.14em] text-subtle uppercase",
												children: current?.group ?? "Desk"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-semibold text-ink",
												children: current?.label ?? "Admin"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
											className: "relative hidden min-w-0 md:block",
											onSubmit: (event) => {
												event.preventDefault();
												navigate({
													to: adminHref(path, "/tickets"),
													search: ticketSearch({
														q: query.trim(),
														status: "all"
													})
												});
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: query,
												onChange: (event) => setQuery(event.target.value),
												placeholder: "Search tickets",
												"aria-label": "Search tickets",
												className: "h-10 border-transparent bg-surface-2 pl-9"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-flow-col items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: adminHref(path, "/notifications"),
													className: "relative grid size-11 place-items-center rounded-xl text-ink",
													"aria-label": info?.noticeCount ? `${info.noticeCount} unread notifications` : "Notifications",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-5" }), info?.noticeCount ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute top-1 right-1 min-w-4 rounded-full bg-accent px-1 text-center text-[10px] font-semibold leading-4 text-white",
														children: info.noticeCount > 99 ? "99+" : info.noticeCount
													}) : null]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "grid size-11 place-items-center rounded-xl text-ink md:hidden",
													"aria-label": "Search tickets",
													"aria-expanded": find,
													onClick: () => setFind((value) => !value),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
											]
										})
									]
								}),
								find ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
									className: "grid px-3 pb-3 md:hidden",
									onSubmit: (event) => {
										event.preventDefault();
										navigate({
											to: adminHref(path, "/tickets"),
											search: ticketSearch({
												q: query.trim(),
												status: "all"
											})
										});
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: query,
										onChange: (event) => setQuery(event.target.value),
										placeholder: "Search tickets",
										"aria-label": "Search tickets",
										autoFocus: true,
										className: "h-12 bg-surface-2 text-base"
									})
								}) : null,
								info?.actor.role === "viewer" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "border-t border-[#e3c98a] bg-warn-soft px-4 py-2 text-sm text-warn",
									children: "View-only access. Changes are turned off for this account."
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: path === "/agent" || path.endsWith("/admin-portal/agent") ? "admin-main admin-agent flex min-h-0 w-full min-w-0 max-w-full flex-col overflow-hidden md:h-[calc(100dvh-4rem)]" : "admin-main grid w-full min-w-0 max-w-full content-start py-5 pb-[max(6.5rem,env(safe-area-inset-bottom))] md:pb-6",
							children
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-line bg-surface/80 px-1 pt-1 backdrop-blur md:hidden",
							style: { paddingBottom: "max(0.35rem, env(safe-area-inset-bottom))" },
							"aria-label": "Admin",
							children: [MOBILE_TABS.map((to) => {
								const item = NAV.find((entry) => entry.to === to);
								if (!item) return null;
								const Icon = item.icon;
								const active = adminActive(path, item.to, "exact" in item && item.exact);
								const count = info ? NAV_COUNTS[item.to]?.(info) : void 0;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: adminHref(path, item.to),
									search: item.to === "/tickets" ? ticketSearch() : void 0,
									"aria-current": active ? "page" : void 0,
									className: active ? "grid min-h-14 place-items-center gap-0.5 text-ink" : "grid min-h-14 place-items-center gap-0.5 text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-5",
											strokeWidth: active ? 2.25 : 1.75
										}), count ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute -top-1.5 -right-2 min-w-4 rounded-full bg-accent px-1 text-center text-[10px] font-semibold leading-4 text-white",
											children: count > 99 ? "99+" : count
										}) : null]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-medium",
										children: item.label === "Dashboard" ? "Home" : item.label
									})]
								}, to);
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: more || current && !MOBILE_TABS.includes(current.to) ? "grid min-h-14 place-items-center gap-0.5 text-ink" : "grid min-h-14 place-items-center gap-0.5 text-muted",
								"aria-expanded": more,
								onClick: () => setMore((value) => !value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListTree, {
									className: "size-5",
									strokeWidth: 1.75
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-medium",
									children: "More"
								})]
							})]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { Shell as t };
