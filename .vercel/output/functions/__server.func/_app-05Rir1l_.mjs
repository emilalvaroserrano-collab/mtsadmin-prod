import { g as Outlet, x as Navigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { y as getSessionHome } from "./_ssr/api-DLRKIpWt.mjs";
import { a as Boot, r as useCurrentUserState } from "./_ssr/portal-atmosphere-DibPwfEL.mjs";
import { n as useQuery } from "./_libs/tanstack__react-query.mjs";
import { t as Shell } from "./_ssr/shell-CUxnGmjm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app-05Rir1l_.js
var import_jsx_runtime = require_jsx_runtime();
function AppLayout() {
	const { user, isPending } = useCurrentUserState();
	const home = useQuery({
		queryKey: ["session-home", user?.id],
		queryFn: () => getSessionHome(),
		enabled: Boolean(user)
	});
	if (isPending || user && home.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boot, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/upgrade" });
	if (!home.data?.desk) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/portal" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { AppLayout as component };
