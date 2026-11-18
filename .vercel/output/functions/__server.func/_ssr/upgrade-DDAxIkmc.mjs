import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/upgrade-DDAxIkmc.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	"Checking the portal surface",
	"Refreshing tickets, orders, and services",
	"Holding the entry page while the experience updates"
];
function UpgradePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-dvh overflow-hidden bg-black text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "upgrade-scan absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(0,229,255,0.16),transparent)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "login-orb absolute top-[-10rem] left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-[#00e5ff]/15 blur-3xl" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-dvh w-full max-w-3xl flex-col justify-center px-5 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/mts-mark.png",
						alt: "MTS",
						className: "h-12 w-auto object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-[#7af6ff] uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "upgrade-blink inline-block size-2 rounded-full bg-[#00e5ff] shadow-[0_0_12px_#00e5ff]" }), "Live"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-[0.28em] text-white/50 uppercase",
					children: "System status"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-semibold tracking-tight sm:text-6xl",
					children: "Upgrading the App Experience"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-base leading-7 text-white/65",
					children: "The portal entry is paused while the experience is being upgraded. This page stays up until the update is finished."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 overflow-hidden rounded-3xl border border-[#00e5ff]/25 bg-white/5 shadow-[0_0_80px_rgba(0,229,255,0.08),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-white/10 px-5 py-3 font-mono text-[11px] tracking-[0.18em] text-white/55 uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upgrade sequence" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "upgrade-blink text-[#7af6ff]",
								children: "Running"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-1.5 overflow-hidden bg-white/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "upgrade-sweep absolute inset-y-0 w-1/2 bg-[#00e5ff]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "grid gap-3 px-5 py-5",
							children: [steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 font-mono text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `upgrade-blink inline-block size-2 rounded-full bg-[#00e5ff] ${index === 1 ? "upgrade-blink-late" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/80",
									children: step
								})]
							}, step)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "font-mono text-sm text-[#7af6ff]",
								children: ["Awaiting release", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "upgrade-caret",
									children: "_"
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
export { UpgradePage as component };
