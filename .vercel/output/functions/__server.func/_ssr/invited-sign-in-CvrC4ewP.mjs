import { r as createServerFn } from "./ssr.mjs";
import { t as hashPassword$1 } from "./password-VlpK0Xix.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
import { createHash, randomInt, randomUUID } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/invited-sign-in-CvrC4ewP.js
function emailOf(input) {
	const raw = input && typeof input === "object" ? input : {};
	const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
	if (!email.includes("@")) throw new Error("Enter the email from your invitation.");
	return email;
}
var signInWithInvitation_createServerFn_handler = createServerRpc({
	id: "725ad781c3b21b575883631f85adfcc38eabb2ffe37c1a1d411ae40acaa3d29b",
	name: "signInWithInvitation",
	filename: "src/lib/auth/invited-sign-in.ts"
}, (opts) => signInWithInvitation.__executeServer(opts));
var signInWithInvitation = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input && typeof input === "object" ? input : {};
	const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
	const password = typeof raw.password === "string" ? raw.password : "";
	if (!email.includes("@") || password.length < 8) throw new Error("Enter the email and password from your invitation.");
	return {
		email,
		password
	};
}).handler(signInWithInvitation_createServerFn_handler, async ({ data }) => {
	const { getRequestHeaders } = await import("./ssr.mjs").then((n) => n.s).then((n) => n.t);
	const { auth } = await import("./server-We5IxPnk.mjs").then((n) => n.i);
	const { findZendeskInvite } = await import("./zendesk-invite-C6NxgH8G.mjs").then((n) => n.n).then((n) => n.n);
	const invited = await findZendeskInvite(data.email);
	if (!invited) throw new Error("Check the email from your invitation and try again.");
	const headers = getRequestHeaders();
	try {
		await auth.api.signInEmail({
			body: {
				email: invited.email,
				password: data.password,
				rememberMe: true
			},
			headers
		});
		return { ok: true };
	} catch {
		try {
			await auth.api.signUpEmail({
				body: {
					email: invited.email,
					password: data.password,
					name: invited.name
				},
				headers
			});
			return { ok: true };
		} catch {
			throw new Error("Email or password is incorrect.");
		}
	}
});
async function mailer() {
	const { getSql } = await import("./db-BUp8gnwm.mjs").then((n) => n.n).then((n) => n.t);
	const sql = await getSql();
	const row = (await sql`select resend_api_key, email_from from portal_settings where id = 1`)[0];
	return {
		sql,
		key: (row?.resend_api_key || process.env.RESEND_API_KEY || "").trim(),
		from: (row?.email_from || process.env.EMAIL_FROM || "Manage Tech Service <noreply@managetechservice.com>").trim()
	};
}
var requestPortalPassword_createServerFn_handler = createServerRpc({
	id: "c63b7584adbd8748a5b3948e193c1d83ad0683a4748467948e5a609b11e04ad5",
	name: "requestPortalPassword",
	filename: "src/lib/auth/invited-sign-in.ts"
}, (opts) => requestPortalPassword.__executeServer(opts));
var requestPortalPassword = createServerFn({ method: "POST" }).validator((input) => ({ email: emailOf(input) })).handler(requestPortalPassword_createServerFn_handler, async ({ data }) => {
	const { findZendeskInvite } = await import("./zendesk-invite-C6NxgH8G.mjs").then((n) => n.n).then((n) => n.n);
	const invited = await findZendeskInvite(data.email);
	if (!invited) throw new Error("This email is not registered.");
	const { sql, key, from } = await mailer();
	if (!key) throw new Error("Password email is not available yet.");
	const code = String(randomInt(1e5, 1e6));
	const identifier = `reset:${invited.email}`;
	await sql`delete from verification where identifier = ${identifier}`;
	await sql`
      insert into verification (id, identifier, value, "expiresAt", "createdAt", "updatedAt")
      values (${randomUUID()}, ${identifier}, ${JSON.stringify({
		hash: createHash("sha256").update(code).digest("hex"),
		attempts: 0
	})}, now() + interval '15 minutes', now(), now())
    `;
	const { renderSignature } = await import("./email-signature-DRfqkC6k.mjs").then((n) => n.n).then((n) => n.n);
	let signoff = renderSignature("", "MTS Support");
	try {
		const signature = await sql`select email_signature, reply_name from portal_settings where id = 1`;
		signoff = renderSignature(signature[0]?.email_signature || "", signature[0]?.reply_name || "MTS Support");
	} catch {}
	if (!(await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${key}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from,
			to: [invited.email],
			subject: "Your Manage Tech Service verification code",
			text: `Your verification code is ${code}. It expires in 15 minutes. If you did not ask for this, ignore this email.\n\n${signoff}`
		})
	})).ok) throw new Error("The verification email could not be sent.");
	return { ok: true };
});
var confirmPortalPassword_createServerFn_handler = createServerRpc({
	id: "94dc0e9cddefa304e184c9ece29ac9ecd0a48f40c0895da09df8a5fd26e0854e",
	name: "confirmPortalPassword",
	filename: "src/lib/auth/invited-sign-in.ts"
}, (opts) => confirmPortalPassword.__executeServer(opts));
var confirmPortalPassword = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input && typeof input === "object" ? input : {};
	const email = emailOf(raw);
	const code = typeof raw.code === "string" ? raw.code.replace(/\s/g, "") : "";
	const password = typeof raw.password === "string" ? raw.password : "";
	if (!/^\d{6}$/.test(code)) throw new Error("Enter the 6-digit code from the email.");
	if (password.length < 8) throw new Error("Use at least 8 characters.");
	return {
		email,
		code,
		password
	};
}).handler(confirmPortalPassword_createServerFn_handler, async ({ data }) => {
	const { findZendeskInvite } = await import("./zendesk-invite-C6NxgH8G.mjs").then((n) => n.n).then((n) => n.n);
	const invited = await findZendeskInvite(data.email);
	if (!invited) throw new Error("This email is not registered.");
	const { sql } = await mailer();
	const identifier = `reset:${invited.email}`;
	const row = (await sql`
      select id, value, "expiresAt" from verification where identifier = ${identifier} order by "createdAt" desc limit 1
    `)[0];
	if (!row || new Date(row.expiresAt).getTime() < Date.now()) throw new Error("That code has expired. Request a new one.");
	const stored = JSON.parse(row.value);
	const attempts = Number(stored.attempts) || 0;
	if (attempts >= 5) {
		await sql`delete from verification where identifier = ${identifier}`;
		throw new Error("Too many attempts. Request a new code.");
	}
	if (createHash("sha256").update(data.code).digest("hex") !== stored.hash) {
		await sql`update verification set value = ${JSON.stringify({
			hash: stored.hash,
			attempts: attempts + 1
		})}, "updatedAt" = now() where id = ${row.id}`;
		throw new Error("That code is not correct.");
	}
	await sql`delete from verification where identifier = ${identifier}`;
	const passwordHash = await hashPassword$1(data.password);
	const user = (await sql`select id from "user" where lower(email) = ${invited.email} limit 1`)[0];
	if (user) {
		const accounts = await sql`
        select id from account where "userId" = ${user.id} and "providerId" = 'credential' limit 1
      `;
		if (accounts[0]) await sql`update account set password = ${passwordHash}, "updatedAt" = now() where id = ${accounts[0].id}`;
		else await sql`
          insert into account (id, "accountId", "providerId", "userId", password, "createdAt", "updatedAt")
          values (${randomUUID()}, ${user.id}, 'credential', ${user.id}, ${passwordHash}, now(), now())
        `;
		return { ok: true };
	}
	const { getRequestHeaders } = await import("./ssr.mjs").then((n) => n.s).then((n) => n.t);
	const { auth } = await import("./server-We5IxPnk.mjs").then((n) => n.i);
	await auth.api.signUpEmail({
		body: {
			email: invited.email,
			password: data.password,
			name: invited.name
		},
		headers: getRequestHeaders()
	});
	return { ok: true };
});
//#endregion
export { confirmPortalPassword_createServerFn_handler, requestPortalPassword_createServerFn_handler, signInWithInvitation_createServerFn_handler };
