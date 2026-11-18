import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, g as Outlet, p as useRouterState, x as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { q as openPortalFromAuth } from "./api-DLRKIpWt.mjs";
import { r as useCurrentUserState } from "./portal-atmosphere-DibPwfEL.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { at as rewriteProductionPath, j as PortalHome, nt as setShopToken, rt as useShopToken, tt as PortalShell } from "./router-DkTNWi8Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/user-portal-oh8s7TQH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductionPortalLayout() {
	const path = useRouterState({ select: (state) => state.location.pathname });
	const navigate = useNavigate();
	const { user, isPending } = useCurrentUserState();
	const token = useShopToken();
	const link = useQuery({
		queryKey: ["portal-auth", user?.id],
		queryFn: () => openPortalFromAuth(),
		enabled: Boolean(user),
		retry: false
	});
	if (typeof window !== "undefined") sessionStorage.setItem("mts-production-portal", "1");
	(0, import_react.useEffect)(() => {
		if (link.data?.token && link.data.token !== token) setShopToken(link.data.token);
	}, [link.data?.token, token]);
	(0, import_react.useEffect)(() => {
		function onClick(event) {
			if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
			const anchor = event.target?.closest("a");
			if (!anchor) return;
			const href = anchor.getAttribute("href");
			if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
			const url = new URL(href, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = rewriteProductionPath(url.pathname);
			if (!next || next === url.pathname) return;
			event.preventDefault();
			event.stopPropagation();
			navigate({ to: next });
		}
		document.addEventListener("click", onClick, true);
		return () => document.removeEventListener("click", onClick, true);
	}, [navigate]);
	if (!isPending && !user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/production/signin" });
	const home = path === "/production/user-portal" || path === "/production/user-portal/";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalShell, { children: [link.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-4 rounded-xl bg-bad-soft px-4 py-3 text-sm text-bad",
		children: link.error instanceof Error ? link.error.message : "The portal could not open this account."
	}) : null, home ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalHome, {}) : path.endsWith("/call") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})] });
}
//#endregion
export { ProductionPortalLayout as component };
