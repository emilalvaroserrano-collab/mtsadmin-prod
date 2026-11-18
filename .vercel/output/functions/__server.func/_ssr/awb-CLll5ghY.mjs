import { a as getSql } from "./db-BUp8gnwm.mjs";
import { n as format, t as formatDistanceToNow } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/awb-CLll5ghY.js
var ORDER_MENU = [
	{
		id: "managed",
		title: "Managed IT",
		items: [
			"Server and Network Management Solutions",
			"Backup and Recovery",
			"Cybersecurity and Compliance",
			"24-Hour System Mentoring",
			"Vendor Management",
			"Virtual CIO Services",
			"Help Desk",
			"Business Continuity",
			"Business Antivirus and Endpoint Security"
		]
	},
	{
		id: "cloud",
		title: "Cloud Services",
		items: [
			"Application Hosting",
			"Cloud Migration and Management",
			"Desktop as a Service (DaaS)",
			"Infrastructure as a Service (IaaS)",
			"Colocation",
			"Virtual Server Hosting",
			"Virtualization Support",
			"VoIP Phone System"
		]
	},
	{
		id: "projects",
		title: "IT Project Consulting",
		items: [
			"IT Consulting",
			"Migration and Deployment",
			"WiFi Networks",
			"Mobility (BYOD)",
			"Performance and Security Audits",
			"Free IT Health Check",
			"Structured Data Cabling",
			"Office Move & IT Relocation",
			"Domain Registration and Business Email Setup"
		]
	},
	{
		id: "apps",
		title: "Business App Support",
		items: [
			"Google G Suite",
			"Microsoft Active Directory",
			"Microsoft 365",
			"Microsoft Sharepoint",
			"Microsoft Azure",
			"Microsoft Teams",
			"Microsoft Intune",
			"Microsoft Windows Management"
		]
	}
];
var AGENT_ONLY = /* @__PURE__ */ new Set([
	"status",
	"custom_status",
	"assignee",
	"group"
]);
var NOT_COLLECTED = /* @__PURE__ */ new Set(["lookup", "multi_lookup"]);
function customerCanFill(type, visible, editable) {
	if (AGENT_ONLY.has(type) || NOT_COLLECTED.has(type)) return false;
	return visible && editable;
}
function fieldAudience(type, visible) {
	if (visible) return "Customer form";
	if (NOT_COLLECTED.has(type)) return "Not collected";
	if (AGENT_ONLY.has(type)) return "Agent only";
	return "Agent only";
}
function controlKind(type) {
	if (type === "textarea" || type === "description") return "textarea";
	if (type === "tagger" || type === "priority" || type === "tickettype" || type === "multiselect" || type === "lookup") return "select";
	if (type === "checkbox") return "checkbox";
	if (type === "integer" || type === "decimal") return "number";
	if (type === "date") return "date";
	return "text";
}
function money(cents) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(cents / 100);
}
function ago(iso) {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return "";
	return formatDistanceToNow(d, { addSuffix: true });
}
function day(iso) {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return "";
	return format(d, "MMM d, yyyy");
}
function stamp(iso) {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return "";
	return format(d, "MMM d, yyyy · h:mm a");
}
function paymentLabel(method) {
	if (method === "card") return "Debit or credit card";
	if (method === "pay_later") return "Order now, pay later";
	if (method === "invoice") return "Invoice";
	if (method === "purchase_order") return "Purchase order";
	if (method === "alternative") return "Alternative Payments";
	return method || "—";
}
function storeSlug(brand) {
	return brand.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "store";
}
var PAID = /* @__PURE__ */ new Set([
	"paid",
	"succeeded",
	"completed",
	"success",
	"captured"
]);
/** Shopify-style payment badge from the order's current payment state. */
function shopifyPayment(order) {
	const pay = order.paymentStatus.toLowerCase();
	if (PAID.has(pay)) return {
		label: "Paid",
		tone: "good"
	};
	if (pay === "refunded") return {
		label: "Refunded",
		tone: "neutral"
	};
	if (pay === "partially_paid" || pay === "partial") return {
		label: "Partially paid",
		tone: "warn"
	};
	if (pay === "authorized") return {
		label: "Authorized",
		tone: "info"
	};
	if (order.status === "cancelled") return {
		label: "Voided",
		tone: "neutral"
	};
	if (pay === "pending" || pay === "upcoming" || pay === "processing") return {
		label: "Payment pending",
		tone: "warn"
	};
	if (order.paymentMethod === "invoice" || order.paymentMethod === "purchase_order" || order.paymentMethod === "pay_later" || pay === "pay_later") return {
		label: "Payment pending",
		tone: "warn"
	};
	return {
		label: "Unpaid",
		tone: "warn"
	};
}
/** Shopify-style fulfillment badge. Shipped or delivered counts as fulfilled. */
function shopifyFulfillment(order) {
	if (order.status === "cancelled") return {
		label: "Canceled",
		tone: "neutral"
	};
	const ship = order.shipmentStatus || "unfulfilled";
	if (ship === "delivered" || ship === "shipped" || ship === "out_for_delivery" || order.status === "fulfilled") return {
		label: "Fulfilled",
		tone: "good"
	};
	if (order.status === "processing") return {
		label: "Unfulfilled",
		tone: "warn"
	};
	return {
		label: "Unfulfilled",
		tone: "warn"
	};
}
/** Shopify delivery status. Hidden until the parcel has a tracking event. */
function shopifyDelivery(order) {
	if (order.status === "cancelled") return null;
	if (order.shipmentStatus === "delivered") return {
		label: "Delivered",
		tone: "good"
	};
	if (order.shipmentStatus === "out_for_delivery") return {
		label: "Out for delivery",
		tone: "info"
	};
	if (order.shipmentStatus === "shipped") return {
		label: "In transit",
		tone: "info"
	};
	if (order.trackingNumber) return {
		label: "Tracking added",
		tone: "info"
	};
	return null;
}
function orderCustomer(order) {
	return order.shipName || order.customerName || "No customer";
}
function orderEmail(order) {
	return order.shipEmail || order.customerEmail;
}
function env(name) {
	return (process.env[name] || "").trim();
}
var portalWebhookSecrets = [
	"c8Y3p8P21pGmi6pkC4C7OiOsNZwpuFrtU2_XxnEFnUaDFoJY7UdU5YNTLDLB-JzqvIEgzDDGrUGsBqqEc3ApqA",
	"XDssQcMUj1LV5-yWyRc8T_28PLJDLNrD51_ouxJNAHc=",
	"lTc1CDwG0MDH2YPTvERxwC9sZUD4UFFR-e84dauLIz4="
];
var shopConversations = {
	appId: "6af379dcb61f6ac20d1e3df8",
	keyId: "app_6af39b614c735f82a19f2d89",
	secret: "1g2UxuNik3Jzg0gfmN7B3hgEhvGa1TCvylM5VeGKko7ZOW9MQYASKwdorkzAdY-0nJvZ3gltgP9h7NpnIO6N_Q",
	webhookId: "6adbe8f8d129a41d7be7b1ac",
	webhookSecret: "c8Y3p8P21pGmi6pkC4C7OiOsNZwpuFrtU2_XxnEFnUaDFoJY7UdU5YNTLDLB-JzqvIEgzDDGrUGsBqqEc3ApqA"
};
var portalConversations = {};
function conversationsConfig() {
	const appId = env("ZENDESK_CONVERSATIONS_APP_ID") || shopConversations.appId;
	const keyId = env("ZENDESK_CONVERSATIONS_KEY_ID") || shopConversations.keyId;
	const secret = env("ZENDESK_CONVERSATIONS_SECRET") || env("ZENDESK_CONVERSATIONS_SECRET_KEY") || shopConversations.secret;
	return {
		appId,
		keyId,
		secret,
		webhookId: env("ZENDESK_WEBHOOK_ID") || portalConversations.webhookId || shopConversations.webhookId,
		webhookSecret: env("ZENDESK_WEBHOOK_SECRET") || portalConversations.webhookSecret || shopConversations.webhookSecret,
		ready: Boolean(appId && keyId && secret)
	};
}
function authHeader(config) {
	return `Basic ${Buffer.from(`${config.keyId}:${config.secret}`, "utf8").toString("base64")}`;
}
async function testConversations() {
	const config = conversationsConfig();
	if (!config.ready) throw new Error("Set ZENDESK_CONVERSATIONS_APP_ID, ZENDESK_CONVERSATIONS_KEY_ID, and ZENDESK_CONVERSATIONS_SECRET.");
	const response = await fetch(`https://api.smooch.io/v2/apps/${encodeURIComponent(config.appId)}/integrations`, { headers: {
		Authorization: authHeader(config),
		Accept: "application/json"
	} });
	const text = await response.text();
	if (!response.ok) throw new Error(text.replaceAll(config.secret, "").slice(0, 180) || "Conversations API rejected the key.");
	const names = (JSON.parse(text).integrations ?? []).filter((item) => item.status !== "inactive").map((item) => item.displayName || item.type || "integration").slice(0, 4);
	return { name: names.length ? names.join(", ") : "Conversations API" };
}
async function verifyZendeskWebhook(request, rawBody) {
	const signature = request.headers.get("x-zendesk-webhook-signature") || "";
	const timestamp = request.headers.get("x-zendesk-webhook-signature-timestamp") || "";
	if (!signature || !timestamp) throw new Error("Missing Zendesk webhook signature.");
	const sent = Number(timestamp);
	const millis = Number.isFinite(sent) ? sent > 0xe8d4a51000 ? sent : sent * 1e3 : Date.parse(timestamp);
	if (!Number.isFinite(millis) || Math.abs(Date.now() - millis) > 3e5) throw new Error("Webhook timestamp is outside the allowed window.");
	const secrets = [...new Set([
		env("ZENDESK_WEBHOOK_SECRET"),
		env("ZENDESK_EVENT_WEBHOOK_SECRET"),
		env("ZENDESK_TRIGGER_WEBHOOK_SECRET"),
		portalConversations.webhookSecret,
		...portalWebhookSecrets
	].filter((item) => typeof item === "string" && item.trim() !== "").map((item) => item.trim()))];
	if (!secrets.length) throw new Error("ZENDESK_WEBHOOK_SECRET is not set.");
	const { createHmac, timingSafeEqual } = await import("node:crypto");
	if (!secrets.some((secret) => {
		const expected = createHmac("sha256", secret).update(timestamp + rawBody).digest("base64");
		const left = Buffer.from(signature);
		const right = Buffer.from(expected);
		return left.length === right.length && timingSafeEqual(left, right);
	})) throw new Error("Webhook signature does not match.");
}
function textOf(value) {
	return typeof value === "string" ? value.trim() : "";
}
function asRecord(value) {
	return value && typeof value === "object" ? value : {};
}
async function saveMessage(sql, externalId, subject, author, body, commentId) {
	if (!externalId || !body) return false;
	const saved = await sql`
    insert into tickets (zendesk_id, subject, status, requester_name, category, view_label, updated_at)
    values (${externalId}, ${subject.slice(0, 180) || "Zendesk message"}, 'open', ${author.slice(0, 120)}, 'messaging', 'zendesk', now())
    on conflict (zendesk_id) do update set
      subject = case when tickets.subject = '' then excluded.subject else tickets.subject end,
      requester_name = case when excluded.requester_name <> '' then excluded.requester_name else tickets.requester_name end,
      updated_at = now()
    returning id
  `;
	const ticketId = Number(saved[0]?.id ?? 0);
	if (!ticketId) return false;
	if (commentId) {
		if ((await sql`select id from ticket_comments where zendesk_comment_id = ${commentId} limit 1`).length) return false;
	}
	await sql`
    insert into ticket_comments (ticket_id, author_name, body, public_note, zendesk_comment_id)
    values (${ticketId}, ${author || "Zendesk"}, ${body.slice(0, 4e3)}, true, ${commentId || null})
  `;
	return true;
}
async function ingestZendeskWebhook(sql, payload) {
	const body = asRecord(payload);
	let stored = 0;
	const ticket = asRecord(body.ticket);
	if (ticket.id != null) {
		const status = textOf(ticket.status).toLowerCase();
		const mapped = status === "hold" ? "pending" : [
			"new",
			"open",
			"pending",
			"solved",
			"closed"
		].includes(status) ? status : "";
		if (mapped) await sql`update tickets set status = ${mapped}, updated_at = now() where zendesk_id = ${String(ticket.id)}`;
	}
	if (ticket.id != null && (textOf(ticket.subject) || textOf(ticket.description))) {
		if (await saveMessage(sql, String(ticket.id), textOf(ticket.subject) || "Zendesk ticket", textOf(asRecord(ticket.requester).name) || textOf(ticket.requester_name), textOf(ticket.description) || textOf(ticket.subject), "")) stored += 1;
	}
	const events = Array.isArray(body.events) ? body.events : [];
	for (const item of events) {
		const event = asRecord(item);
		const eventPayload = asRecord(event.payload);
		const message = asRecord(eventPayload.message);
		const content = asRecord(message.content);
		const conversation = asRecord(eventPayload.conversation);
		const author = asRecord(message.author);
		const text = textOf(content.text) || textOf(message.text);
		if (await saveMessage(sql, textOf(conversation.id) ? `sc:${textOf(conversation.id)}` : "", text.slice(0, 80) || "Conversation message", textOf(author.displayName) || textOf(author.type) || "Customer", text, textOf(message.id) || textOf(event.id))) stored += 1;
	}
	return stored;
}
async function conversationsFetch(path, method = "GET", payload) {
	const config = conversationsConfig();
	if (!config.ready) throw new Error("Zendesk Conversations is not connected.");
	const response = await fetch(`https://mts-portal.zendesk.com/sc/v2/apps/${encodeURIComponent(config.appId)}${path}`, {
		method,
		headers: {
			Authorization: authHeader(config),
			Accept: "application/json",
			...payload ? { "Content-Type": "application/json" } : {}
		},
		body: payload ? JSON.stringify(payload) : void 0
	});
	const text = await response.text();
	if (response.status === 404) return null;
	if (!response.ok) throw new Error(text.replaceAll(config.secret, "").slice(0, 180) || "Zendesk rejected the record.");
	return text ? JSON.parse(text) : {};
}
function visibleName(value) {
	return value.normalize("NFKC").replace(/[\u0000-\u001f\u007f-\u009f\u200b-\u200d\ufeff]/g, "").replace(/\s+/g, " ").trim();
}
function conversationProfile(name, email) {
	const words = visibleName(name).split(" ").filter((part) => part.length > 0);
	const local = visibleName((email.split("@")[0] || "").replace(/[^\p{L}\p{N}._-]/gu, ""));
	const givenName = (words[0] || local || "Customer").slice(0, 80);
	const rest = words.slice(1).join(" ");
	return {
		givenName: givenName.length > 0 ? givenName : "Customer",
		surname: (rest.length > 0 ? rest : "Customer").slice(0, 80)
	};
}
async function upsertConversationUser(input) {
	const found = await conversationsFetch(`/users/${encodeURIComponent(input.externalId)}`);
	const existing = found && typeof found.user === "object" ? found.user : null;
	if (existing?.id) return existing.id;
	const profile = conversationProfile(input.name, input.email);
	const company = visibleName(input.company || "");
	const created = await conversationsFetch("/users", "POST", {
		externalId: input.externalId,
		profile: {
			givenName: profile.givenName,
			surname: profile.surname,
			email: input.email
		},
		metadata: {
			...company ? { company } : {},
			source: "mts-portal"
		}
	});
	const user = created && typeof created.user === "object" ? created.user : null;
	if (!user?.id) throw new Error("Zendesk did not return a user id.");
	return user.id;
}
async function ensureConversationRecord(input) {
	const listed = await conversationsFetch(`/conversations?filter[userId]=${encodeURIComponent(input.userId)}&page[size]=50`);
	const match = (listed && Array.isArray(listed.conversations) ? listed.conversations : []).find((item) => item.displayName === input.title && item.id);
	if (match?.id) return match.id;
	const created = await conversationsFetch("/conversations", "POST", {
		type: "personal",
		participants: [{ userId: input.userId }],
		displayName: input.title.slice(0, 180),
		description: input.description.slice(0, 240),
		metadata: {
			portal: input.kind,
			company: input.company,
			source: "mts-portal"
		}
	});
	const conversation = created && typeof created.conversation === "object" ? created.conversation : null;
	if (!conversation?.id) throw new Error("Zendesk did not return a conversation id.");
	if (input.body.trim()) await conversationsFetch(`/conversations/${encodeURIComponent(conversation.id)}/messages`, "POST", {
		author: {
			type: "user",
			userId: input.userId
		},
		content: {
			type: "text",
			text: input.body.slice(0, 4e3)
		}
	});
	return conversation.id;
}
var MTS_AUTH_CLIENT = "mts-auth";
var MTS_AUTH_ORIGIN = "https://mts.192-888-702-801.site";
function oauthUrls(origin = MTS_AUTH_ORIGIN) {
	const base = origin.replace(/\/$/, "");
	return {
		authorizeUrl: `${base}/api/oauth/authorize`,
		tokenUrl: `${base}/api/oauth/token`
	};
}
function redirectAllowed(value) {
	try {
		const url = new URL(value);
		if (url.username || url.password) return false;
		const host = url.hostname.toLowerCase();
		if (host === "localhost" || host === "127.0.0.1") return url.protocol === "http:" || url.protocol === "https:";
		if (url.protocol !== "https:") return false;
		return host === "mts.192-888-702-801.site" || host.endsWith(".zendesk.com") || host.endsWith(".zdusercontent.com");
	} catch {
		return false;
	}
}
function text(value) {
	return typeof value === "string" ? value.trim() : "";
}
function randomToken(bytes = 24) {
	const buffer = new Uint8Array(bytes);
	crypto.getRandomValues(buffer);
	return [...buffer].map((item) => item.toString(16).padStart(2, "0")).join("");
}
async function client(sql, clientId) {
	const row = (await sql`select client_id, name, secret, scopes from oauth_clients where client_id = ${clientId} limit 1`)[0];
	if (!row) return null;
	return {
		id: text(row.client_id),
		name: text(row.name),
		secret: text(row.secret),
		scopes: text(row.scopes) || "read write"
	};
}
function escapeHtml(value) {
	return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;");
}
function page(title, body, status = 200) {
	return new Response(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title></head><body style="margin:0;font-family:Roboto,sans-serif;background:#eef4f8;color:#102033"><main style="max-width:28rem;margin:10vh auto;padding:1.5rem;background:#fff;border-radius:1rem;box-shadow:0 12px 32px rgba(0,57,112,.08)"><h1 style="font-size:1.25rem;margin:0 0 .5rem">${title}</h1>${body}</main></body></html>`, {
		status,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
async function handleOauthAuthorize(request) {
	const url = new URL(request.url);
	const params = request.method === "POST" ? new URLSearchParams(await request.text()) : url.searchParams;
	const clientId = params.get("client_id") || "";
	const redirectUri = params.get("redirect_uri") || "";
	const state = params.get("state") || "";
	const scope = (params.get("scope") || "read write").slice(0, 180);
	const responseType = params.get("response_type") || "code";
	if (clientId !== "mts-auth" || responseType !== "code") return page("Cannot authorize", "<p>This connection has to use the mts-auth client and the authorization code grant.</p>", 400);
	if (!redirectAllowed(redirectUri)) return page("Redirect not allowed", "<p>The redirect URL has to be this portal or a zendesk.com address.</p>", 400);
	const sql = await getSql();
	if (!await client(sql, clientId)) return page("Client not found", "<p>mts-auth is not saved in this portal yet.</p>", 400);
	if (request.method !== "POST" || params.get("allow") !== "1") return page("Connect Zendesk", `<p style="color:#516072">Allow <strong>mts-auth</strong> to open tickets, orders, and account data for Manage Tech Service.</p><form method="post">${[
		"client_id",
		"redirect_uri",
		"state",
		"scope",
		"response_type"
	].map((key) => {
		return `<input type="hidden" name="${key}" value="${escapeHtml(params.get(key) || (key === "response_type" ? "code" : key === "scope" ? scope : ""))}" />`;
	}).join("")}<input type="hidden" name="allow" value="1" /><button style="height:2.75rem;border:0;border-radius:.75rem;background:#003970;color:#fff;padding:0 1rem;font-weight:600" type="submit">Allow connection</button></form>`);
	const code = randomToken(16);
	await sql`
    insert into oauth_codes (code, client_id, redirect_uri, scope, expires_at)
    values (${code}, ${clientId}, ${redirectUri}, ${scope}, now() + interval '5 minutes')
  `;
	const back = new URL(redirectUri);
	back.searchParams.set("code", code);
	if (state) back.searchParams.set("state", state);
	return Response.redirect(back.toString(), 302);
}
async function readBody(request) {
	const type = request.headers.get("content-type") || "";
	const raw = await request.text();
	if (type.includes("application/json")) {
		const parsed = JSON.parse(raw || "{}");
		return Object.fromEntries(Object.entries(parsed).map(([key, value]) => [key, text(value)]));
	}
	return Object.fromEntries(new URLSearchParams(raw));
}
function tokenJson(body, status = 200) {
	return Response.json(body, {
		status,
		headers: {
			"cache-control": "no-store",
			"access-control-allow-origin": "*"
		}
	});
}
async function handleOauthToken(request) {
	if (request.method === "OPTIONS") return tokenJson({ ok: true });
	let body;
	try {
		body = await readBody(request);
	} catch {
		return tokenJson({ error: "invalid_request" }, 400);
	}
	const header = request.headers.get("authorization") || "";
	let clientId = body.client_id || "";
	let clientSecret = body.client_secret || "";
	if (header.toLowerCase().startsWith("basic ")) {
		const split = atob(header.slice(6).trim()).split(":");
		clientId = clientId || split[0] || "";
		clientSecret = clientSecret || split.slice(1).join(":");
	}
	const sql = await getSql();
	const known = await client(sql, clientId);
	if (!known || clientSecret !== known.secret) return tokenJson({ error: "invalid_client" }, 401);
	const grant = body.grant_type;
	if (grant === "authorization_code") {
		const code = body.code || "";
		const redirectUri = body.redirect_uri || "";
		const row = (await sql`
      update oauth_codes
      set used_at = now()
      where code = ${code} and client_id = ${clientId} and redirect_uri = ${redirectUri} and used_at is null and expires_at > now()
      returning scope
    `)[0];
		if (!row) return tokenJson({ error: "invalid_grant" }, 400);
		return issue(sql, clientId, text(row.scope) || known.scopes);
	}
	if (grant === "refresh_token") {
		const row = (await sql`
      select scope from oauth_tokens
      where token = ${body.refresh_token || ""} and kind = 'refresh' and client_id = ${clientId} and expires_at > now()
      limit 1
    `)[0];
		if (!row) return tokenJson({ error: "invalid_grant" }, 400);
		return issue(sql, clientId, text(row.scope) || known.scopes);
	}
	return tokenJson({
		error: "unsupported_grant_type",
		error_description: "mts-auth uses the authorization code grant."
	}, 400);
}
async function issue(sql, clientId, scope) {
	const access = `mtsat_${randomToken(24)}`;
	const refresh = `mtsrt_${randomToken(24)}`;
	await sql`
    insert into oauth_tokens (token, kind, client_id, scope, expires_at, refresh_token)
    values (${access}, 'access', ${clientId}, ${scope}, now() + interval '1 hour', ${refresh})
  `;
	await sql`
    insert into oauth_tokens (token, kind, client_id, scope, expires_at)
    values (${refresh}, 'refresh', ${clientId}, ${scope}, now() + interval '30 days')
  `;
	return tokenJson({
		access_token: access,
		token_type: "Bearer",
		expires_in: 3600,
		refresh_token: refresh,
		scope
	});
}
async function authorizeOauthToken(header) {
	const token = header.replace(/^Bearer\s+/i, "").trim();
	if (!token.startsWith("mtsat_")) return null;
	const sql = await getSql();
	const row = (await sql`
    select client_id, scope from oauth_tokens
    where token = ${token} and kind = 'access' and expires_at > now()
    limit 1
  `)[0];
	if (!row) return null;
	return {
		id: text(row.client_id),
		name: "mts-auth",
		scope: text(row.scope) || "read write",
		sql
	};
}
async function mtsAuthPublic() {
	const known = await client(await getSql(), MTS_AUTH_CLIENT);
	const urls = oauthUrls();
	return {
		name: "mts-auth",
		clientId: MTS_AUTH_CLIENT,
		secret: known?.secret || "",
		grantType: "authorization_code",
		scopes: known?.scopes || "read write",
		authorizeUrl: urls.authorizeUrl,
		tokenUrl: urls.tokenUrl
	};
}
/** Strip spaces and symbols from a scanned air waybill. */
function normalizeAwb(raw) {
	return raw.toUpperCase().replace(/[^0-9A-Z]/g, "").slice(0, 34);
}
/** UPS 1Z numbers are 18 characters. The last digit is a mod-10 check. */
function isUpsAwb(awb) {
	return /^1Z[0-9A-Z]{16}$/.test(awb);
}
function upsValue(char) {
	const code = char.charCodeAt(0);
	if (code >= 48 && code <= 57) return code - 48;
	return (code - 63) % 10;
}
function upsCheckDigitOk(awb) {
	if (!isUpsAwb(awb)) return false;
	const body = awb.slice(2, 17);
	let sum = 0;
	for (let index = 0; index < body.length; index += 1) {
		const value = upsValue(body[index] ?? "0");
		sum += index % 2 === 0 ? value : value * 2;
	}
	const check = (10 - sum % 10) % 10;
	return String(check) === awb[17];
}
function upsTrackUrl(awb) {
	return `https://www.ups.com/track?tracknum=${encodeURIComponent(awb)}`;
}
//#endregion
export { stamp as C, upsTrackUrl as D, upsCheckDigitOk as E, upsertConversationUser as O, shopifyPayment as S, testConversations as T, orderCustomer as _, conversationsConfig as a, shopifyDelivery as b, ensureConversationRecord as c, handleOauthToken as d, ingestZendeskWebhook as f, normalizeAwb as g, mtsAuthPublic as h, controlKind as i, verifyZendeskWebhook as k, fieldAudience as l, money as m, ago as n, customerCanFill as o, isUpsAwb as p, authorizeOauthToken as r, day as s, ORDER_MENU as t, handleOauthAuthorize as u, orderEmail as v, storeSlug as w, shopifyFulfillment as x, paymentLabel as y };
