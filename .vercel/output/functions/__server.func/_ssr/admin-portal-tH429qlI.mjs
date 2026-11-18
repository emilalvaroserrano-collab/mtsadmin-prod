import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, g as Outlet, x as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { y as getSessionHome } from "./api-DLRKIpWt.mjs";
import { r as useCurrentUserState } from "./portal-atmosphere-DibPwfEL.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Shell } from "./shell-CUxnGmjm.mjs";
import { it as rewriteAdminPath } from "./router-DkTNWi8Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-portal-tH429qlI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductionAdminLayout() {
	const navigate = useNavigate();
	const { user, isPending } = useCurrentUserState();
	const home = useQuery({
		queryKey: ["session-home", user?.id],
		queryFn: () => getSessionHome(),
		enabled: Boolean(user)
	});
	if (typeof window !== "undefined") sessionStorage.setItem("mts-production-admin", "1");
	(0, import_react.useEffect)(() => {
		function onClick(event) {
			if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
			const anchor = event.target?.closest("a");
			if (!anchor || anchor.getAttribute("target") === "_blank") return;
			const href = anchor.getAttribute("href");
			if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
			const url = new URL(href, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = rewriteAdminPath(url.pathname);
			if (!next || next === url.pathname) return;
			event.preventDefault();
			event.stopPropagation();
			navigate({
				to: next,
				search: Object.fromEntries(url.searchParams.entries())
			});
		}
		document.addEventListener("click", onClick, true);
		return () => document.removeEventListener("click", onClick, true);
	}, [navigate]);
	if (!isPending && !user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/production/signin" });
	if (home.isSuccess && home.data && !home.data.desk) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/production/user-portal" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { ProductionAdminLayout as component };
