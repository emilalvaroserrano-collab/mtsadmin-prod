import { a as getServerFnById, i as TSS_SERVER_FUNCTION } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sarah-state-D-McXADg.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var NEXT = {
	requested: ["validating", "cancelled"],
	validating: [
		"awaiting_confirmation",
		"executing",
		"failed",
		"cancelled"
	],
	awaiting_confirmation: ["executing", "cancelled"],
	executing: [
		"succeeded",
		"failed",
		"checking_status"
	],
	checking_status: [
		"succeeded",
		"failed",
		"manual_review"
	],
	succeeded: [],
	failed: [],
	cancelled: [],
	manual_review: [
		"checking_status",
		"succeeded",
		"failed"
	]
};
function allowTransition(from, to) {
	if (from === to) return true;
	const next = NEXT[from];
	return Boolean(next?.includes(to));
}
function reconcileDecision(input) {
	if (input.resourceFound && (input.status === "executing" || input.status === "checking_status")) return "succeeded";
	if ((input.status === "executing" || input.status === "checking_status") && input.ageMs >= 6e5) return "manual_review";
	if (input.status === "executing" && input.ageMs >= 2e4) return "checking_status";
	return null;
}
function phoneChoice(text) {
	const q = text.toLowerCase().trim();
	if (/\b(no phone|no handset|no desk|just the extension|extension only|without a phone)\b/.test(q)) return false;
	if (/\b(desk phone|handset|ship)\b/.test(q)) return true;
	if (/^(no|nope|nah)\b/.test(q)) return false;
	if (/^(yes|yeah|yep|sure)\b/.test(q)) return true;
	return null;
}
function confirmationFresh(ageMs) {
	return ageMs >= 0 && ageMs < 18e5;
}
function listPick(text) {
	const q = text.toLowerCase();
	if (!/\b(open|go to|take me to)\b/.test(q) || !/\b(ticket|one|first|second|third)\b/.test(q)) return null;
	if (/\b(first|1st)\b/.test(q)) return 0;
	if (/\b(second|2nd)\b/.test(q)) return 1;
	if (/\b(third|3rd)\b/.test(q)) return 2;
	const word = q.match(/\bticket\s*#?\s*(\d+)\b/);
	if (!word) return null;
	const index = Number(word[1]) - 1;
	return index >= 0 && index < 20 ? index : null;
}
function receiptAmount(cents, cadence, phone = "") {
	if (cadence === "none") return phone;
	const dollars = cents / 100;
	const text = Number.isInteger(dollars) ? `$${dollars}` : `$${dollars.toFixed(2)}`;
	return cadence === "month" ? `${text} per month` : text;
}
function confirmSnapshot(planned) {
	if (planned.tool === "order_service" && planned.offering === "voip-ext") return {
		service: "voip-ext",
		quantity: 1,
		amountCents: 1800,
		cadence: "month",
		terms: "$18 per month on the Telxent bill. Not active until Telxent confirms."
	};
	if (planned.tool === "order_service" && planned.offering === "wiring") {
		const quantity = Math.min(50, Math.max(1, planned.drops || 1));
		return {
			service: "wiring",
			quantity,
			amountCents: quantity * 17500,
			cadence: "once",
			terms: "$175 per drop. Not billed until the desk confirms the work."
		};
	}
	if (planned.tool === "update_contact" && planned.phone) return {
		service: "phone",
		quantity: 1,
		amountCents: 0,
		cadence: "none",
		terms: `Replace the account phone with ${planned.phone}.`
	};
	if (planned.tool === "place_order") return {
		service: planned.sku || "equipment",
		quantity: planned.quantity || 1,
		amountCents: 0,
		cadence: "once",
		terms: planned.payLater ? "Place this on invoice." : "Place this order for the account."
	};
	if (planned.tool === "cancel_order") return {
		service: "cancel-order",
		quantity: 1,
		amountCents: 0,
		cadence: "none",
		terms: `Cancel order ${planned.id}.`
	};
	if (planned.tool === "close_ticket") return {
		service: "close-ticket",
		quantity: 1,
		amountCents: 0,
		cadence: "none",
		terms: `Close ticket ${planned.id}.`
	};
	if (planned.tool === "update_company") return {
		service: "company",
		quantity: 1,
		amountCents: 0,
		cadence: "none",
		terms: `Update the company to ${planned.business}.`
	};
	return null;
}
function quoteFor(planned) {
	if (planned.tool === "order_service" && planned.offering === "voip-ext") return {
		title: "VoIP extension",
		detail: "Added to the Telxent bill only after Telxent confirms. It is not active yet.",
		amount: "$18 per month"
	};
	if (planned.tool === "order_service" && planned.offering === "wiring") {
		const drops = Math.min(50, Math.max(1, planned.drops || 1));
		return {
			title: "Wiring",
			detail: `${drops} drop${drops === 1 ? "" : "s"} at $175. Not billed until the desk confirms the work.`,
			amount: `$${drops * 175}`
		};
	}
	if (planned.tool === "update_contact" && planned.phone) return {
		title: "Phone number",
		detail: "This replaces the number on the account.",
		amount: planned.phone
	};
	if (planned.tool === "place_order") return {
		title: "Place order",
		detail: `${planned.quantity || 1} × ${planned.sku || "item"}. ${planned.payLater ? "Invoice this account." : "A payment link is sent after it is placed."}`,
		amount: planned.sku || "Equipment"
	};
	if (planned.tool === "cancel_order") return {
		title: "Cancel order",
		detail: "This stops the order if it has not shipped.",
		amount: `Order ${planned.id}`
	};
	if (planned.tool === "close_ticket") return {
		title: "Close ticket",
		detail: "This marks the ticket closed on the account.",
		amount: `Ticket ${planned.id}`
	};
	if (planned.tool === "update_company") return {
		title: "Company",
		detail: "This updates the company name on the account.",
		amount: planned.business || "Company"
	};
	return null;
}
function followUp(text, slots) {
	const q = text.toLowerCase();
	if (/\b(cancel that|never mind)\b/.test(q)) return { cancel: true };
	if (!slots.offering) return null;
	const count = q.match(/\b(?:make it|change it to|change to)\s+(\d{1,2})\b/);
	if (!count) return null;
	return { drops: Math.min(50, Math.max(1, Number(count[1]))) };
}
//#endregion
export { followUp as a, quoteFor as c, createSsrRpc as i, receiptAmount as l, confirmSnapshot as n, listPick as o, confirmationFresh as r, phoneChoice as s, allowTransition as t, reconcileDecision as u };
