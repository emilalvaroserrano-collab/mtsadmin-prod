import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { g as Outlet, p as useRouterState, x as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { q as openPortalFromAuth } from "./api-DLRKIpWt.mjs";
import { a as Boot, r as useCurrentUserState } from "./portal-atmosphere-DibPwfEL.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { nt as setShopToken, rt as useShopToken, tt as PortalShell } from "./router-DkTNWi8Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal-B4RlzpNY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PortalLayout() {
	const path = useRouterState({ select: (state) => state.location.pathname });
	const { user, isPending } = useCurrentUserState();
	const token = useShopToken();
	const link = useQuery({
		queryKey: ["portal-auth", user?.id],
		queryFn: () => openPortalFromAuth(),
		enabled: Boolean(user)
	});
	(0, import_react.useEffect)(() => {
		if (link.data?.token) setShopToken(link.data.token);
	}, [link.data?.token]);
	if (isPending || user && (link.isPending || link.data?.token !== token)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boot, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/upgrade" });
	if (path === "/portal/call") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { PortalLayout as component };
