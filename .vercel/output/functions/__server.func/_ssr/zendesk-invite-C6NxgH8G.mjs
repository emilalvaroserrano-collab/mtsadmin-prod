import { r as __exportAll } from "../_runtime.mjs";
import { c as __exportAll$1 } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/zendesk-invite-C6NxgH8G.js
var zendesk_invite_C6NxgH8G_exports = /* @__PURE__ */ __exportAll({
	n: () => zendesk_invite_exports,
	t: () => findZendeskInvite
});
var zendesk_invite_exports = /* @__PURE__ */ __exportAll$1({ findZendeskInvite: () => findZendeskInvite });
var subdomain = process.env.ZENDESK_SUBDOMAIN?.trim() || "mts-portal";
var clientId = process.env.ZENDESK_OAUTH_CLIENT_ID?.trim() || "mts-portal";
var clientSecret = process.env.ZENDESK_OAUTH_CLIENT_SECRET?.trim() || "2323b62739554021211eaa17dc81221200a1dda3f362d1d7323ae09ecde4aee1";
var tokenCache = null;
async function zendeskToken() {
	if (tokenCache && tokenCache.expiresAt > Date.now() + 15e3) return tokenCache.token;
	const hosts = [.../* @__PURE__ */ new Set([subdomain || "mts-portal", "mts-portal"])];
	let last = "Invitation check is unavailable.";
	for (const host of hosts) {
		const response = await fetch(`https://${host}.zendesk.com/oauth/tokens`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				grant_type: "client_credentials",
				client_id: clientId,
				client_secret: clientSecret,
				scope: "read write"
			})
		});
		const text = await response.text();
		if (!response.ok) {
			last = `Zendesk OAuth returned ${response.status}.`;
			if (response.status === 404) continue;
			throw new Error(last);
		}
		const parsed = JSON.parse(text);
		if (!parsed.access_token) throw new Error("Invitation check is unavailable.");
		const ttl = typeof parsed.expires_in === "number" && parsed.expires_in > 60 ? parsed.expires_in * 1e3 : 18e5;
		tokenCache = {
			token: parsed.access_token,
			expiresAt: Date.now() + ttl
		};
		return parsed.access_token;
	}
	throw new Error(last);
}
async function authorizationHeader() {
	const email = (process.env.ZENDESK_EMAIL || process.env.ZENDESK_AGENT_EMAIL || "").trim();
	const apiToken = (process.env.ZENDESK_API_TOKEN || process.env.ZENDESK_TOKEN || process.env.ZENDESK_API_KEY || "").trim();
	if (email && apiToken) {
		const raw = `${email}/token:${apiToken}`;
		return `Basic ${Buffer.from(raw, "utf8").toString("base64")}`;
	}
	return `Bearer ${await zendeskToken()}`;
}
async function findZendeskInvite(email) {
	const normalized = email.trim().toLowerCase();
	if (!normalized.includes("@")) return null;
	const response = await fetch(`https://${subdomain}.zendesk.com/api/v2/users/search.json?query=${encodeURIComponent(`type:user email:${normalized}`)}`, { headers: {
		Accept: "application/json",
		Authorization: await authorizationHeader()
	} });
	if (!response.ok) throw new Error("Invitation check is unavailable.");
	const match = ((await response.json()).users ?? []).find((user) => user.email?.trim().toLowerCase() === normalized);
	if (!match || match.suspended || match.active === false) return null;
	return {
		email: normalized,
		name: match.name?.trim() || normalized
	};
}
//#endregion
export { zendesk_invite_C6NxgH8G_exports as n, findZendeskInvite as t };
