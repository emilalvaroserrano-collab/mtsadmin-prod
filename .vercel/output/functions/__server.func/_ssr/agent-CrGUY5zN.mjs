import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agent-CrGUY5zN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MtsAgentPage = (0, import_react.lazy)(() => import("./mts-agent-page-DhJjg5Pg.mjs").then((mod) => ({ default: mod.MtsAgentPage })));
function AgentRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Opening MTS Agent…"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MtsAgentPage, {})
	});
}
//#endregion
export { AgentRoute as component };
