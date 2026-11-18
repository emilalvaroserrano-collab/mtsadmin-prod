import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-CFsLPH2x.mjs";
import { a as getSql } from "./db-BUp8gnwm.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agent-keys-DOzwl5gw.js
function s(row, key) {
	const value = row?.[key];
	return value == null ? "" : String(value);
}
async function sha256(value) {
	const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
	return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
function newSecret() {
	const bytes = /* @__PURE__ */ new Uint8Array(24);
	crypto.getRandomValues(bytes);
	return `mts_${btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")}`;
}
async function requireAdmin(userId) {
	const sql = await getSql();
	const row = (await sql`select role, active, name, email from portal_staff where user_id = ${userId}`)[0];
	if (!row || row.active === false) throw new Error("This account cannot create agent keys.");
	const role = s(row, "role");
	if (role !== "owner" && role !== "admin") throw new Error("An admin has to create an agent key.");
	return {
		sql,
		name: s(row, "name") || s(row, "email") || "Admin"
	};
}
var listAgentKeys_createServerFn_handler = createServerRpc({
	id: "9db8fca0b4da2dbddb0b806a9729e2811ea48fb2f4df93ae82291f163f135abe",
	name: "listAgentKeys",
	filename: "src/lib/portal/agent-keys.ts"
}, (opts) => listAgentKeys.__executeServer(opts));
var listAgentKeys = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listAgentKeys_createServerFn_handler, async ({ context }) => {
	const { sql } = await requireAdmin(context.userId);
	return (await sql`
      select id, name, prefix, scope, created_at, last_used_at, revoked_at
      from agent_api_keys
      order by created_at desc
    `).map((row) => ({
		id: s(row, "id"),
		name: s(row, "name"),
		prefix: s(row, "prefix"),
		scope: s(row, "scope") || "super_admin",
		createdAt: s(row, "created_at"),
		lastUsedAt: s(row, "last_used_at"),
		revokedAt: s(row, "revoked_at")
	}));
});
var createAgentKey_createServerFn_handler = createServerRpc({
	id: "02226ae6e78d4fa732195dadd2e2000d9aa870a9a32cc4588e6e2434c0e4a642",
	name: "createAgentKey",
	filename: "src/lib/portal/agent-keys.ts"
}, (opts) => createAgentKey.__executeServer(opts));
var createAgentKey = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const name = String(input?.name || "").trim().slice(0, 80);
	if (!name) throw new Error("Name the key.");
	return { name };
}).handler(createAgentKey_createServerFn_handler, async ({ data, context }) => {
	const { sql, name } = await requireAdmin(context.userId);
	const secret = newSecret();
	const id = crypto.randomUUID();
	const prefix = secret.slice(0, 12);
	await sql`
      insert into agent_api_keys (id, name, prefix, key_hash, created_by, scope)
      values (${id}, ${data.name}, ${prefix}, ${await sha256(secret)}, ${name}, 'super_admin')
    `;
	await sql`
      insert into audit_logs (actor_user_id, actor_name, action, target, detail)
      values (${context.userId}, ${name}, 'Created agent key', ${data.name}, ${prefix})
    `;
	return {
		id,
		name: data.name,
		prefix,
		key: secret
	};
});
var revokeAgentKey_createServerFn_handler = createServerRpc({
	id: "dfc15288a61537cf52827853403d46d1dd3a9ab54974e26ea6585db98aaff17a",
	name: "revokeAgentKey",
	filename: "src/lib/portal/agent-keys.ts"
}, (opts) => revokeAgentKey.__executeServer(opts));
var revokeAgentKey = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const id = String(input?.id || "").slice(0, 80);
	if (!id) throw new Error("Choose a key.");
	return { id };
}).handler(revokeAgentKey_createServerFn_handler, async ({ data, context }) => {
	const { sql, name } = await requireAdmin(context.userId);
	await sql`update agent_api_keys set revoked_at = now() where id = ${data.id} and revoked_at is null`;
	await sql`
      insert into audit_logs (actor_user_id, actor_name, action, target, detail)
      values (${context.userId}, ${name}, 'Revoked agent key', ${data.id}, '')
    `;
	return { ok: true };
});
//#endregion
export { createAgentKey_createServerFn_handler, listAgentKeys_createServerFn_handler, revokeAgentKey_createServerFn_handler };
