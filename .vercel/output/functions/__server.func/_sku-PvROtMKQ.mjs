import { o as __toESM } from "./_runtime.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, b as Link, w as useParams } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { w as getStorefront } from "./_ssr/api-DLRKIpWt.mjs";
import { m as money } from "./_ssr/awb-CLll5ghY.mjs";
import { n as useQuery } from "./_libs/tanstack__react-query.mjs";
import { t as addToCart } from "./_ssr/store-cart-C_9hSDdQ.mjs";
import { Z as QtyStepper } from "./_ssr/router-DkTNWi8Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_sku-PvROtMKQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PortalProduct() {
	const { sku = "" } = useParams({ strict: false });
	const navigate = useNavigate();
	const shop = useQuery({
		queryKey: ["storefront"],
		queryFn: () => getStorefront()
	});
	const [qty, setQty] = (0, import_react.useState)(1);
	const product = shop.data?.products.find((item) => item.sku === sku);
	if (shop.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Opening the product…"
	});
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "That product is not in the shop."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/production/user-portal/shop",
			className: "text-sm font-semibold text-accent",
			children: "Back to orders"
		})]
	});
	const image = product.imageUrl;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex aspect-square items-center justify-center overflow-hidden rounded-[28px] bg-[#eef4f5]",
			children: image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "max-h-[86%] max-w-[86%] object-contain"
			}) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid content-start gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/production/user-portal/shop",
					className: "text-sm text-muted",
					children: "Equipment"
				}),
				product.category ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.16em] text-accent uppercase",
					children: product.category
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight sm:text-5xl",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xl font-semibold tabular-nums",
					children: money(product.priceCents)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-base leading-7 text-muted",
					children: product.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
						value: qty,
						label: product.name,
						onChange: (next) => setQty(Math.max(1, next))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => addToCart(product.sku, qty),
						className: "h-12 flex-1 rounded-full bg-ink text-sm font-semibold text-white",
						children: "Add to cart"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						addToCart(product.sku, qty);
						navigate({ to: "/production/user-portal/checkout" });
					},
					className: "h-12 rounded-full border border-line text-sm font-semibold",
					children: "Buy it now"
				})
			]
		})]
	});
}
//#endregion
export { PortalProduct as component };
