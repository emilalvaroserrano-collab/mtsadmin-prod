import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { i as createSsrRpc } from "./sarah-state-D-McXADg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signin-LgPEk9iJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function emailOf(input) {
	const raw = input && typeof input === "object" ? input : {};
	const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
	if (!email.includes("@")) throw new Error("Enter the email from your invitation.");
	return email;
}
var signInWithInvitation = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input && typeof input === "object" ? input : {};
	const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
	const password = typeof raw.password === "string" ? raw.password : "";
	if (!email.includes("@") || password.length < 8) throw new Error("Enter the email and password from your invitation.");
	return {
		email,
		password
	};
}).handler(createSsrRpc("725ad781c3b21b575883631f85adfcc38eabb2ffe37c1a1d411ae40acaa3d29b"));
var requestPortalPassword = createServerFn({ method: "POST" }).validator((input) => ({ email: emailOf(input) })).handler(createSsrRpc("c63b7584adbd8748a5b3948e193c1d83ad0683a4748467948e5a609b11e04ad5"));
var confirmPortalPassword = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input && typeof input === "object" ? input : {};
	const email = emailOf(raw);
	const code = typeof raw.code === "string" ? raw.code.replace(/\s/g, "") : "";
	const password = typeof raw.password === "string" ? raw.password : "";
	if (!/^\d{6}$/.test(code)) throw new Error("Enter the 6-digit code from the email.");
	if (password.length < 8) throw new Error("Use at least 8 characters.");
	return {
		email,
		code,
		password
	};
}).handler(createSsrRpc("94dc0e9cddefa304e184c9ece29ac9ecd0a48f40c0895da09df8a5fd26e0854e"));
var font = "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", \"Helvetica Neue\", Helvetica, Arial, sans-serif";
function WaveBand({ className, fill, duration, reverse, crest, edge }) {
	const high = crest === "high";
	const d = edge === "bottom" ? high ? "M0,150 C180,70 360,230 720,150 C900,70 1080,230 1440,150 L1440,360 L0,360 Z" : "M0,210 C180,150 360,270 720,210 C900,150 1080,270 1440,210 L1440,360 L0,360 Z" : high ? "M0,170 C180,250 360,90 720,170 C900,250 1080,90 1440,170 L1440,0 L0,0 Z" : "M0,120 C180,180 360,60 720,120 C900,180 1080,60 1440,120 L1440,0 L0,0 Z";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `pointer-events-none absolute inset-x-0 -z-10 overflow-hidden ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: reverse ? "mts-wave-loop-rev" : "mts-wave-loop",
			style: { animationDuration: duration },
			viewBox: "0 0 1440 360",
			preserveAspectRatio: "none",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill,
				d
			})
		})
	});
}
function ProductionSignIn() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function requestCode() {
		setError("");
		setNotice("");
		setBusy(true);
		try {
			await requestPortalPassword({ data: { email } });
			setNotice("We sent a verification code to that email.");
		} catch (cause) {
			setError(cause instanceof Error ? cause.message : "Could not send the code.");
		} finally {
			setBusy(false);
		}
	}
	async function savePassword(event) {
		event.preventDefault();
		setError("");
		setBusy(true);
		try {
			await confirmPortalPassword({ data: {
				email,
				code,
				password
			} });
			await signInWithInvitation({ data: {
				email,
				password
			} });
			navigate({ to: "/production/user-portal" });
		} catch (cause) {
			setError(cause instanceof Error ? cause.message : "Could not update the password.");
			setBusy(false);
		}
	}
	async function submit(event) {
		event.preventDefault();
		setError("");
		setBusy(true);
		try {
			await signInWithInvitation({ data: {
				email,
				password
			} });
			navigate({ to: "/production/user-portal" });
		} catch (cause) {
			setError(cause instanceof Error ? cause.message : "Could not sign in.");
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "grid min-h-dvh bg-[#f5f5f7] text-[#1d1d1f] lg:grid-cols-2",
		style: { fontFamily: font },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate flex min-h-[46vh] flex-col justify-between overflow-hidden px-8 py-10 text-white sm:px-14 sm:py-14 lg:min-h-dvh",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-20 bg-[linear-gradient(155deg,#003970_0%,#04577c_36%,#127e86_74%,#1bb8b4_100%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#19c2c6]/30 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveBand, {
					edge: "top",
					className: "top-0 h-[38%]",
					duration: "28s",
					reverse: true,
					fill: "rgba(255,255,255,0.12)",
					crest: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveBand, {
					edge: "top",
					className: "top-0 h-[26%]",
					duration: "18s",
					fill: "rgba(0,57,112,0.20)",
					crest: "low"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveBand, {
					edge: "bottom",
					className: "bottom-0 h-[42%]",
					duration: "22s",
					fill: "rgba(255,255,255,0.14)",
					crest: "low"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveBand, {
					edge: "bottom",
					className: "bottom-0 h-[30%]",
					duration: "14s",
					reverse: true,
					fill: "rgba(255,255,255,0.22)",
					crest: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveBand, {
					edge: "bottom",
					className: "bottom-0 h-[18%]",
					duration: "32s",
					fill: "rgba(0,57,112,0.28)",
					crest: "low"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/production/signin",
					className: "relative text-sm font-medium tracking-tight text-white/80",
					children: "Manage Tech Service"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative py-16 lg:py-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-md text-5xl font-semibold tracking-[-0.03em] sm:text-6xl",
						children: "Manage Tech Service"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-sm text-lg leading-8 text-white/75",
						children: "User Portal. Invite only. One place for support, orders, and services."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "relative text-sm text-white/70",
					children: "Use the email from your invitation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
          .mts-wave-loop, .mts-wave-loop-rev {
            display: block;
            width: 200%;
            height: 100%;
            animation: mtsWaveLoop linear infinite;
          }
          .mts-wave-loop-rev { animation-direction: reverse; }
          @keyframes mtsWaveLoop {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(-50%, 0, 0); }
          }
          @media (prefers-reduced-motion: reduce) {
            .mts-wave-loop, .mts-wave-loop-rev { animation: none; }
          }
        ` })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "flex items-center justify-center px-6 py-16 sm:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-semibold tracking-[-0.03em]",
						children: "Sign in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[15px] leading-7 text-[#6e6e73]",
						children: "The first visit sets your password."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 grid gap-4",
						onSubmit: notice ? savePassword : submit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm font-medium",
								children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: email,
									onChange: (event) => setEmail(event.target.value),
									required: true,
									autoComplete: "email",
									placeholder: "you@company.com",
									className: "h-12 rounded-2xl border border-black/10 bg-white px-4 text-base font-normal outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center justify-between",
									children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPassword((current) => !current),
										className: "text-xs font-semibold text-[#127e86]",
										children: showPassword ? "Hide" : "Show"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: showPassword ? "text" : "password",
									value: password,
									onChange: (event) => setPassword(event.target.value),
									required: true,
									minLength: 8,
									autoComplete: "current-password",
									placeholder: "At least 8 characters",
									className: "h-12 rounded-2xl border border-black/10 bg-white px-4 text-base font-normal outline-none"
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[#8e1f0b]",
								role: "alert",
								children: error
							}) : null,
							notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[#0c5132]",
								role: "status",
								children: notice
							}) : null,
							notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm font-medium",
								children: ["Verification code", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									inputMode: "numeric",
									autoComplete: "one-time-code",
									value: code,
									onChange: (event) => setCode(event.target.value),
									required: true,
									pattern: "[0-9]{6}",
									placeholder: "6-digit code",
									className: "h-12 rounded-2xl border border-black/10 bg-white px-4 text-base font-normal outline-none"
								})]
							}) : null,
							notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: busy,
								className: "h-12 rounded-full bg-[#003970] text-sm font-semibold text-white disabled:opacity-50",
								children: busy ? "Saving" : "Set password"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: busy,
								className: "mt-2 h-12 rounded-full bg-[#1d1d1f] text-sm font-semibold text-white disabled:opacity-50",
								children: busy ? "Signing in" : "Sign in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-[#6e6e73]",
								children: [
									"Emailed us for support?",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: requestCode,
										disabled: busy,
										className: "font-semibold text-[#127e86] disabled:opacity-50",
										children: "Request password"
									})
								]
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
export { ProductionSignIn as component };
