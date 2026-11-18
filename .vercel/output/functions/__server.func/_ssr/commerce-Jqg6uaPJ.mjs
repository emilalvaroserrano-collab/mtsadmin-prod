import { i as renderSignature } from "./email-signature-DRfqkC6k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/commerce-Jqg6uaPJ.js
var KEY = "__mtsLiveHub";
function hub() {
	const g = globalThis;
	if (!g[KEY]) g[KEY] = /* @__PURE__ */ new Map();
	return g[KEY];
}
function publishLive(customerId, event) {
	const set = hub().get(customerId);
	if (!set) return;
	const body = JSON.stringify(event);
	for (const socket of set) try {
		socket.send(body);
	} catch {
		set.delete(socket);
	}
}
function s$1(row, key) {
	const value = row?.[key];
	return typeof value === "string" ? value : value == null ? "" : String(value);
}
function n$1(row, key) {
	const value = Number(row?.[key]);
	return Number.isFinite(value) ? value : 0;
}
function obj(value) {
	return value && typeof value === "object" ? value : {};
}
function text(value) {
	return typeof value === "string" ? value.trim() : value == null ? "" : String(value);
}
var ready = null;
async function ignoreConflict(run) {
	try {
		await run();
	} catch (error) {
		const message = error instanceof Error ? error.message : "";
		if (!/422|409|already|taken|duplicate/i.test(message)) throw error;
	}
}
function ensureCommerce(call) {
	ready ??= (async () => {
		for (const [key, title] of [
			["mts_address", "Billing address"],
			["mts_city", "Billing city"],
			["mts_region", "Billing state"],
			["mts_postal", "Billing postal code"],
			["mts_country", "Billing country"]
		]) await ignoreConflict(() => call("/user_fields.json", {
			method: "POST",
			body: JSON.stringify({ user_field: {
				type: "text",
				key,
				title,
				active: true
			} })
		}));
		await ignoreConflict(() => call("/custom_objects", {
			method: "POST",
			body: JSON.stringify({ custom_object: {
				key: "mts_product",
				title: "Product",
				title_pluralized: "Products"
			} })
		}));
		await ignoreConflict(() => call("/custom_objects", {
			method: "POST",
			body: JSON.stringify({ custom_object: {
				key: "mts_order",
				title: "Order",
				title_pluralized: "Orders"
			} })
		}));
		await ignoreConflict(() => call("/custom_objects", {
			method: "POST",
			body: JSON.stringify({ custom_object: {
				key: "mts_payment",
				title: "Payment",
				title_pluralized: "Payments"
			} })
		}));
		for (const [objectKey, key, title, type] of [
			[
				"mts_product",
				"sku",
				"SKU",
				"text"
			],
			[
				"mts_product",
				"category",
				"Category",
				"text"
			],
			[
				"mts_product",
				"description",
				"Description",
				"textarea"
			],
			[
				"mts_product",
				"price_cents",
				"Price cents",
				"integer"
			],
			[
				"mts_product",
				"available",
				"Available",
				"text"
			],
			[
				"mts_product",
				"image_url",
				"Image",
				"textarea"
			],
			[
				"mts_order",
				"status",
				"Status",
				"text"
			],
			[
				"mts_order",
				"email",
				"Email",
				"text"
			],
			[
				"mts_order",
				"total_cents",
				"Total cents",
				"integer"
			],
			[
				"mts_order",
				"payment_status",
				"Payment status",
				"text"
			],
			[
				"mts_order",
				"payment_method",
				"Payment method",
				"text"
			],
			[
				"mts_order",
				"shipment_status",
				"Shipment status",
				"text"
			],
			[
				"mts_order",
				"ship_address",
				"Ship address",
				"textarea"
			],
			[
				"mts_order",
				"items",
				"Items",
				"textarea"
			],
			[
				"mts_payment",
				"order_number",
				"Order number",
				"text"
			],
			[
				"mts_payment",
				"status",
				"Status",
				"text"
			],
			[
				"mts_payment",
				"method",
				"Method",
				"text"
			],
			[
				"mts_payment",
				"amount_cents",
				"Amount cents",
				"integer"
			],
			[
				"mts_payment",
				"reference",
				"Reference",
				"text"
			]
		]) await ignoreConflict(() => call(`/custom_objects/${objectKey}/fields`, {
			method: "POST",
			body: JSON.stringify({ custom_object_field: {
				key,
				title,
				type
			} })
		}));
	})().catch((error) => {
		ready = null;
		throw error;
	});
	return ready;
}
async function listRecords(call, key) {
	const rows = [];
	const read = async (start) => {
		let path = start;
		const seen = /* @__PURE__ */ new Set();
		for (let page = 0; page < 100 && path; page += 1) {
			if (seen.has(path)) break;
			seen.add(path);
			const payload = await call(path);
			if (Array.isArray(payload.custom_object_records)) rows.push(...payload.custom_object_records.map(obj));
			const meta = obj(payload.meta);
			const links = obj(payload.links);
			if (typeof meta.has_more === "boolean") {
				path = meta.has_more && typeof links.next === "string" ? links.next : "";
				continue;
			}
			path = typeof payload.next_page === "string" ? payload.next_page : "";
		}
	};
	try {
		await read(`/custom_objects/${key}/records?page[size]=100`);
	} catch (error) {
		const message = error instanceof Error ? error.message : "";
		if (!/page/i.test(message)) throw error;
		rows.length = 0;
		await read(`/custom_objects/${key}/records?page=1&per_page=100`);
	}
	return rows;
}
async function saveRecord(call, key, externalId, name, fields, currentId) {
	const body = { custom_object_record: {
		name,
		external_id: externalId,
		custom_object_fields: fields
	} };
	if (currentId) return text(obj((await call(`/custom_objects/${key}/records/${encodeURIComponent(currentId)}`, {
		method: "PATCH",
		body: JSON.stringify(body)
	})).custom_object_record).id) || currentId;
	return text(obj((await call(`/custom_objects/${key}/records`, {
		method: "POST",
		body: JSON.stringify(body)
	})).custom_object_record).id);
}
async function deskOrg(sql) {
	const found = await sql`select id from organizations where name = 'Manage Tech Service' order by id limit 1`;
	if (found[0]) return n$1(found[0], "id");
	return n$1((await sql`
    insert into organizations (name, notes, portal_access, ordering_enabled)
    values ('Manage Tech Service', 'Company desk.', true, true)
    returning id
  `)[0], "id");
}
function orderNumber(id) {
	return `MT-${1e3 + id}`;
}
function orderIdFromNumber(value) {
	const match = /^MT-(\d+)$/.exec(value.trim());
	if (!match) return 0;
	return Math.max(0, Number(match[1]) - 1e3);
}
async function orderTotal(sql, orderId) {
	const rows = await sql`
    select coalesce(sum(quantity * unit_price_cents), 0)::int as items, coalesce(max(shipping_cents), 0)::int as shipping
    from orders o
    left join order_items i on i.order_id = o.id
    where o.id = ${orderId}
  `;
	return n$1(rows[0], "items") + n$1(rows[0], "shipping");
}
async function orderItemsText(sql, orderId) {
	return (await sql`select product_name, sku, quantity from order_items where order_id = ${orderId} order by id`).map((row) => `${n$1(row, "quantity")} x ${s$1(row, "product_name") || s$1(row, "sku")}`).join(", ");
}
async function pushProduct(sql, productId, call) {
	await ensureCommerce(call);
	const product = (await sql`select * from products where id = ${productId} limit 1`)[0];
	if (!product) return;
	const image = s$1(product, "image_url").slice(0, 4e3);
	const recordId = await saveRecord(call, "mts_product", s$1(product, "sku"), s$1(product, "name"), {
		sku: s$1(product, "sku"),
		category: s$1(product, "category"),
		description: s$1(product, "description").slice(0, 4e3),
		price_cents: n$1(product, "price_cents"),
		available: product.available === false ? "hidden" : "available",
		image_url: image.slice(0, 4e3)
	}, s$1(product, "zendesk_record_id"));
	if (recordId) await sql`update products set zendesk_record_id = ${recordId} where id = ${productId}`;
}
async function pushOrder(sql, orderId, call) {
	await ensureCommerce(call);
	const order = (await sql`select * from orders where id = ${orderId} limit 1`)[0];
	if (!order) return;
	const number = orderNumber(orderId);
	const total = await orderTotal(sql, orderId);
	const items = await orderItemsText(sql, orderId);
	const address = [
		s$1(order, "ship_address"),
		s$1(order, "ship_city"),
		s$1(order, "ship_region"),
		s$1(order, "ship_postal"),
		s$1(order, "ship_country")
	].filter(Boolean).join(", ");
	const orderRecord = await saveRecord(call, "mts_order", number, number, {
		status: s$1(order, "status") || "pending",
		email: s$1(order, "ship_email"),
		total_cents: total,
		payment_status: s$1(order, "payment_status"),
		payment_method: s$1(order, "payment_method"),
		shipment_status: s$1(order, "shipment_status") || "unfulfilled",
		ship_address: address,
		items
	}, s$1(order, "zendesk_order_id"));
	const reference = s$1(order, "alternative_invoice_id") || s$1(order, "card_last4");
	await sql`
    update orders set zendesk_order_id = ${orderRecord}, zendesk_payment_id = ${await saveRecord(call, "mts_payment", `pay-${number}`, `Payment ${number}`, {
		order_number: number,
		status: s$1(order, "payment_status") || "unpaid",
		method: s$1(order, "payment_method"),
		amount_cents: total,
		reference
	}, s$1(order, "zendesk_payment_id"))}
    where id = ${orderId}
  `;
}
async function pullProducts(sql, call) {
	const records = await listRecords(call, "mts_product");
	let count = 0;
	for (const record of records) {
		const fields = obj(record.custom_object_fields);
		const sku = text(fields.sku) || text(record.external_id);
		const name = text(record.name);
		if (!sku || !name || sku === "mts-probe") continue;
		const recordId = text(record.id);
		const existing = await sql`select id from products where zendesk_record_id = ${recordId} or sku = ${sku} limit 1`;
		const available = text(fields.available) !== "hidden";
		const price = Number(fields.price_cents);
		const priceCents = Number.isFinite(price) ? price : 0;
		if (existing[0]) await sql`
        update products set
          sku = ${sku},
          name = ${name},
          category = ${text(fields.category)},
          description = ${text(fields.description)},
          price_cents = ${priceCents},
          available = ${available},
          zendesk_record_id = ${recordId}
        where id = ${n$1(existing[0], "id")}
      `;
		else await sql`
        insert into products (sku, name, category, description, price_cents, available, image_url, zendesk_record_id)
        values (${sku}, ${name}, ${text(fields.category)}, ${text(fields.description)}, ${priceCents}, ${available}, ${text(fields.image_url).startsWith("http") ? text(fields.image_url) : ""}, ${recordId})
      `;
		count += 1;
	}
	return count;
}
async function pullOrders(sql, call) {
	const records = await listRecords(call, "mts_order");
	let count = 0;
	const organizationId = records.length ? await deskOrg(sql) : 0;
	for (const record of records) {
		const fields = obj(record.custom_object_fields);
		const id = orderIdFromNumber(text(record.external_id) || text(record.name));
		if (!id) continue;
		const existing = await sql`select id from orders where id = ${id} limit 1`;
		const recordId = text(record.id);
		if (existing[0]) await sql`
        update orders set
          status = ${text(fields.status) || "pending"},
          payment_status = ${text(fields.payment_status)},
          payment_method = ${text(fields.payment_method)},
          shipment_status = ${text(fields.shipment_status) || "unfulfilled"},
          zendesk_order_id = ${recordId}
        where id = ${id}
      `;
		else {
			await sql`
        insert into orders (
          id, organization_id, status, ship_email, payment_status, payment_method, shipment_status, notes, zendesk_order_id
        ) values (
          ${id}, ${organizationId}, ${text(fields.status) || "pending"}, ${text(fields.email)},
          ${text(fields.payment_status)}, ${text(fields.payment_method)}, ${text(fields.shipment_status) || "unfulfilled"},
          ${text(fields.items)}, ${recordId}
        )
      `;
			await sql`select setval(pg_get_serial_sequence('orders', 'id'), (select max(id) from orders))`.catch(() => void 0);
		}
		count += 1;
	}
	return count;
}
async function pullPayments(sql, call) {
	const records = await listRecords(call, "mts_payment");
	let count = 0;
	for (const record of records) {
		const fields = obj(record.custom_object_fields);
		const id = orderIdFromNumber(text(fields.order_number));
		if (!id) continue;
		if (!(await sql`select id from orders where id = ${id} limit 1`)[0]) continue;
		await sql`
      update orders set
        payment_status = ${text(fields.status)},
        payment_method = ${text(fields.method)},
        alternative_invoice_id = case when ${text(fields.reference)} <> '' then ${text(fields.reference)} else alternative_invoice_id end,
        zendesk_payment_id = ${text(record.id)}
      where id = ${id}
    `;
		count += 1;
	}
	return count;
}
async function syncCommerce(sql, call) {
	await ensureCommerce(call);
	let products = 0;
	let orders = 0;
	let payments = 0;
	try {
		products = await pullProducts(sql, call);
		orders = await pullOrders(sql, call);
		payments = await pullPayments(sql, call);
	} catch (error) {
		const message = error instanceof Error ? error.message : "";
		if (!/page|Invalid attribute/i.test(message)) throw error;
	}
	const localProducts = await sql`select id from products order by id`;
	for (const product of localProducts) await pushProduct(sql, n$1(product, "id"), call);
	const localOrders = await sql`select id from orders order by id`;
	for (const order of localOrders) await pushOrder(sql, n$1(order, "id"), call);
	return {
		products: localProducts.length || products,
		orders: localOrders.length || orders,
		payments
	};
}
async function zendeskUser(sql, customerId, call) {
	const customer = (await sql`select * from shop_customers where id = ${customerId} limit 1`)[0];
	if (!customer) return null;
	let userId = s$1(customer, "zendesk_user_id");
	if (!userId) {
		const found = await call(`/users/search.json?query=${encodeURIComponent(`type:user email:${s$1(customer, "email")}`)}`);
		const match = (Array.isArray(found.users) ? found.users : []).map(obj).find((user) => s$1(user, "email").toLowerCase() === s$1(customer, "email"));
		userId = match ? text(match.id) : "";
		if (userId) await sql`update shop_customers set zendesk_user_id = ${userId} where id = ${customerId}`;
	}
	if (!userId) return {
		customer,
		user: null
	};
	return {
		customer,
		user: obj((await call(`/users/${encodeURIComponent(userId)}.json`)).user)
	};
}
async function syncBillingAddress(sql, customerId, call) {
	await ensureCommerce(call);
	const loaded = await zendeskUser(sql, customerId, call);
	if (!loaded?.user) return;
	const fields = obj(loaded.user.user_fields);
	const remote = {
		address: text(fields.mts_address),
		city: text(fields.mts_city),
		region: text(fields.mts_region),
		postal: text(fields.mts_postal),
		country: text(fields.mts_country)
	};
	const local = {
		address: s$1(loaded.customer, "address"),
		city: s$1(loaded.customer, "city"),
		region: s$1(loaded.customer, "region"),
		postal: s$1(loaded.customer, "postal"),
		country: s$1(loaded.customer, "country")
	};
	const pulled = {
		address: remote.address || local.address,
		city: remote.city || local.city,
		region: remote.region || local.region,
		postal: remote.postal || local.postal,
		country: remote.country || local.country || "United States"
	};
	await sql`
    update shop_customers set
      address = ${pulled.address},
      city = ${pulled.city},
      region = ${pulled.region},
      postal = ${pulled.postal},
      country = ${pulled.country}
    where id = ${customerId}
  `;
	if (!Object.keys(remote).some((key) => !remote[key] && pulled[key])) return;
	await call(`/users/${encodeURIComponent(text(loaded.user.id))}.json`, {
		method: "PUT",
		body: JSON.stringify({ user: { user_fields: {
			mts_address: pulled.address,
			mts_city: pulled.city,
			mts_region: pulled.region,
			mts_postal: pulled.postal,
			mts_country: pulled.country
		} } })
	});
}
async function pushBillingAddress(sql, customerId, call) {
	await ensureCommerce(call);
	const loaded = await zendeskUser(sql, customerId, call);
	if (!loaded?.user) return;
	await call(`/users/${encodeURIComponent(text(loaded.user.id))}.json`, {
		method: "PUT",
		body: JSON.stringify({ user: { user_fields: {
			mts_address: s$1(loaded.customer, "address"),
			mts_city: s$1(loaded.customer, "city"),
			mts_region: s$1(loaded.customer, "region"),
			mts_postal: s$1(loaded.customer, "postal"),
			mts_country: s$1(loaded.customer, "country") || "United States"
		} } })
	});
}
function verificationDecision(input) {
	if (!input.hasAccount) return {
		ok: false,
		reason: "missing"
	};
	if (input.attempts >= 5) return {
		ok: false,
		reason: "locked"
	};
	if (!input.storedCode || input.storedCode !== input.submittedCode) return {
		ok: false,
		reason: "mismatch"
	};
	const expires = Date.parse(input.expiresAt);
	if (!Number.isFinite(expires) || expires < (input.now ?? Date.now())) return {
		ok: false,
		reason: "expired"
	};
	return {
		ok: true,
		reason: "valid"
	};
}
function commentIsPublic(flag) {
	return flag !== false && flag !== "false" && flag !== 0 && flag !== "f";
}
function unpaidCardStatus() {
	return "pending";
}
var ALTERNATIVE_PORTAL = "https://go.alternativepayments.io";
var LIVE_API = "https://public-api.alternativepayments.io";
var SANDBOX_API = "https://public-api.demo.alternativepayments.io";
var tokenCache = null;
function alternativeMode(value) {
	const raw = (value || "").trim().toLowerCase();
	return raw === "live" || raw === "production" ? "live" : "sandbox";
}
function alternativeBase(mode) {
	const override = (process.env.ALTERNATIVE_API_BASE || "").trim().replace(/\/+$/, "");
	if (override) return override;
	return mode === "sandbox" ? SANDBOX_API : LIVE_API;
}
function envAlternative() {
	const clientId = (process.env.ALTERNATIVE_CLIENT_ID || process.env.ALTERNATIVE_PAYMENTS_CLIENT_ID || "").trim();
	const clientSecret = (process.env.ALTERNATIVE_CLIENT_SECRET || process.env.ALTERNATIVE_PAYMENTS_CLIENT_SECRET || "").trim();
	return {
		clientId,
		clientSecret,
		fromEnv: Boolean(clientId && clientSecret),
		mode: alternativeMode(process.env.ALTERNATIVE_ENV || process.env.ALTERNATIVE_ENVIRONMENT || "sandbox")
	};
}
function apiError(text, fallback) {
	try {
		const parsed = JSON.parse(text);
		return (parsed.error_description || parsed.message || parsed.error || fallback).slice(0, 180);
	} catch {
		return text ? text.slice(0, 180) : fallback;
	}
}
async function alternativeToken(creds) {
	const key = `${creds.mode}:${creds.clientId}`;
	if (tokenCache && tokenCache.key === key && tokenCache.expiresAt > Date.now() + 15e3) return tokenCache.token;
	const response = await fetch(`${alternativeBase(creds.mode)}/oauth/token`, {
		method: "POST",
		headers: {
			Authorization: `Basic ${Buffer.from(`${creds.clientId}:${creds.clientSecret}`, "utf8").toString("base64")}`,
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: "grant_type=client_credentials"
	});
	const text = await response.text();
	if (!response.ok) throw new Error(apiError(text, "Alternative Payments rejected the API key."));
	const body = JSON.parse(text);
	if (!body.access_token) throw new Error("Alternative Payments did not return a token.");
	tokenCache = {
		token: body.access_token,
		key,
		expiresAt: Date.now() + Math.max(60, body.expires_in || 3600) * 1e3
	};
	return body.access_token;
}
async function ap(creds, path, init) {
	const token = await alternativeToken(creds);
	const response = await fetch(`${alternativeBase(creds.mode)}${path}`, {
		...init,
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			...init?.body ? { "Content-Type": "application/json" } : {},
			...init?.headers
		}
	});
	const text = await response.text();
	if (!response.ok) throw new Error(apiError(text, `Alternative Payments ${path} failed.`));
	if (!text) return {};
	return JSON.parse(text);
}
async function probeAlternative(creds) {
	await ap(creds, "/customers?limit=1");
	return {
		mode: creds.mode,
		base: alternativeBase(creds.mode)
	};
}
async function ensureCustomer(creds, input) {
	if (input.existingId) try {
		const found = await ap(creds, `/customers/${encodeURIComponent(input.existingId)}`);
		if (found.id) return found.id;
	} catch {}
	const created = await ap(creds, "/customers", {
		method: "POST",
		body: JSON.stringify({
			name: input.name,
			email: input.email,
			external_id: input.externalId
		})
	});
	if (!created.id) throw new Error("Alternative Payments did not return a customer.");
	return created.id;
}
async function createAlternativeCheckout(creds, input) {
	const redirect = /^https:\/\/[^\s]+$/i.test(input.returnUrl) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/i.test(input.returnUrl) ? input.returnUrl : ALTERNATIVE_PORTAL;
	if (input.email) try {
		const customerId = await ensureCustomer(creds, {
			externalId: input.externalId,
			name: input.name || "Customer",
			email: input.email,
			existingId: input.existingCustomerId
		});
		const invoice = await ap(creds, "/invoices", {
			method: "POST",
			body: JSON.stringify({
				customer_id: customerId,
				currency: "USD",
				due_date: input.dueDate,
				line_items: input.lines.map((line) => ({
					description: line.description,
					amount: line.amount,
					quantity: line.quantity
				}))
			})
		});
		if (!invoice.id) throw new Error("Alternative Payments did not return an invoice.");
		return {
			url: (await ap(creds, `/invoices/${encodeURIComponent(invoice.id)}/payment-link`)).url || "https://go.alternativepayments.io",
			customerId,
			invoiceId: invoice.id,
			requestId: "",
			paymentStatus: (invoice.status || "UPCOMING").toLowerCase()
		};
	} catch {}
	const amount = input.lines.reduce((sum, line) => sum + line.amount * line.quantity, 0).toFixed(2);
	const requested = await ap(creds, "/payments/request", {
		method: "POST",
		body: JSON.stringify({
			amount,
			currency: "USD",
			redirect_url: redirect,
			reference_id: input.reference
		})
	});
	return {
		url: requested.url || "https://go.alternativepayments.io",
		customerId: input.existingCustomerId,
		invoiceId: "",
		requestId: requested.id || "",
		paymentStatus: (requested.status || "pending").toLowerCase()
	};
}
async function refreshAlternativePayment(creds, input) {
	if (input.invoiceId) {
		const invoice = await ap(creds, `/invoices/${encodeURIComponent(input.invoiceId)}`);
		const link = await ap(creds, `/invoices/${encodeURIComponent(input.invoiceId)}/payment-link`).catch(() => ({ url: "" }));
		return {
			status: (invoice.status || "").toLowerCase(),
			url: link.url || ""
		};
	}
	if (input.requestId) {
		const requested = await ap(creds, `/payments/request/${encodeURIComponent(input.requestId)}`);
		return {
			status: (requested.status || "").toLowerCase(),
			url: requested.url || ""
		};
	}
	return {
		status: "",
		url: ""
	};
}
async function loadAlternativeCreds(sql) {
	const env = envAlternative();
	if (env.fromEnv) return env;
	const row = (await sql`
    select alternative_client_id, alternative_client_secret, alternative_environment from payment_settings where id = 1
  `)[0];
	const clientId = row?.alternative_client_id?.trim() || "";
	const clientSecret = row?.alternative_client_secret?.trim() || "";
	if (!clientId || !clientSecret) return null;
	return {
		clientId,
		clientSecret,
		fromEnv: false,
		mode: alternativeMode(row?.alternative_environment)
	};
}
var fileEnv = null;
async function envValue(name) {
	const live = (process.env[name] || "").trim();
	if (live) return live;
	if (!fileEnv) {
		fileEnv = {};
		try {
			const { readFileSync } = await import("node:fs");
			const text = readFileSync(new URL("../../../.env", import.meta.url), "utf8");
			for (const line of text.split("\n")) {
				const trimmed = line.trim();
				if (!trimmed || trimmed.startsWith("#")) continue;
				const eq = trimmed.indexOf("=");
				if (eq < 1) continue;
				fileEnv[trimmed.slice(0, eq)] = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
			}
		} catch {
			fileEnv = {};
		}
	}
	return (fileEnv[name] || "").trim();
}
function n(row, key) {
	const value = Number(row[key]);
	return Number.isFinite(value) ? value : 0;
}
function s(row, key) {
	const value = row[key];
	return value == null ? "" : String(value);
}
async function linesFor(sql, orderId) {
	return (await sql`select product_id, quantity from order_items where order_id = ${orderId}`).map((row) => ({
		productId: n(row, "product_id"),
		quantity: n(row, "quantity")
	})).filter((line) => line.productId > 0 && line.quantity > 0);
}
async function bump(sql, line, mode) {
	if (mode === "reserve") {
		if (!(await sql`
      update products
      set reserved = reserved + ${line.quantity}
      where id = ${line.productId} and available = true and (stock - reserved) >= ${line.quantity}
      returning name
    `)[0]) {
			const product = await sql`select name, stock, reserved from products where id = ${line.productId}`;
			const name = product[0] ? s(product[0], "name") : "A product";
			const left = product[0] ? Math.max(0, n(product[0], "stock") - n(product[0], "reserved")) : 0;
			throw new Error(`${name} only has ${left} available.`);
		}
		return;
	}
	if (mode === "release") {
		await sql`update products set reserved = greatest(0, reserved - ${line.quantity}) where id = ${line.productId}`;
		return;
	}
	if (mode === "commit") {
		await sql`
      update products set
        stock = greatest(0, stock - ${line.quantity}),
        reserved = greatest(0, reserved - ${line.quantity})
      where id = ${line.productId}
    `;
		return;
	}
	await sql`update products set stock = stock + ${line.quantity} where id = ${line.productId}`;
}
async function reserveOrder(sql, orderId) {
	const lines = await linesFor(sql, orderId);
	const done = [];
	try {
		for (const line of lines) {
			await bump(sql, line, "reserve");
			done.push(line);
		}
	} catch (error) {
		for (const line of done) await bump(sql, line, "release");
		throw error;
	}
	await sql`update orders set inventory_state = 'held' where id = ${orderId}`;
}
async function rebalanceHold(sql, orderId, next) {
	const rows = await sql`select inventory_state from orders where id = ${orderId}`;
	if ((rows[0] ? s(rows[0], "inventory_state") : "") !== "held") return;
	const previous = await linesFor(sql, orderId);
	for (const line of previous) await bump(sql, line, "release");
	const done = [];
	try {
		for (const line of next) {
			await bump(sql, line, "reserve");
			done.push(line);
		}
	} catch (error) {
		for (const line of done) await bump(sql, line, "release");
		for (const line of previous) await bump(sql, line, "reserve");
		throw error;
	}
}
/** Move an order between held, sold, and released. Safe to call when already there. */
async function setInventory(sql, orderId, next) {
	const rows = await sql`select inventory_state from orders where id = ${orderId}`;
	const current = rows[0] ? s(rows[0], "inventory_state") : "none";
	if (current === next) return;
	const lines = await linesFor(sql, orderId);
	if (next === "committed" && current === "held") for (const line of lines) await bump(sql, line, "commit");
	else if (next === "released" && current === "held") for (const line of lines) await bump(sql, line, "release");
	else if (next === "released" && current === "committed") for (const line of lines) await bump(sql, line, "restock");
	else if (next === "held" && (current === "none" || current === "released")) for (const line of lines) await bump(sql, line, "reserve");
	else if (next === "committed" && current !== "held") for (const line of lines) await sql`update products set stock = greatest(0, stock - ${line.quantity}) where id = ${line.productId}`;
	await sql`update orders set inventory_state = ${next} where id = ${orderId}`;
}
async function recordEvent(sql, input) {
	await sql`
    insert into order_events (order_id, kind, from_value, to_value, actor_name, detail)
    values (
      ${input.orderId}, ${input.kind}, ${input.from ?? ""}, ${input.to ?? ""},
      ${input.actor ?? "Desk"}, ${(input.detail ?? "").slice(0, 500)}
    )
  `;
}
async function orderEvents(sql, orderId) {
	return (await sql`select * from order_events where order_id = ${orderId} order by id desc`).map((row) => ({
		id: n(row, "id"),
		kind: s(row, "kind"),
		fromValue: s(row, "from_value"),
		toValue: s(row, "to_value"),
		actorName: s(row, "actor_name"),
		detail: s(row, "detail"),
		createdAt: s(row, "created_at")
	}));
}
var PAID = /* @__PURE__ */ new Set([
	"paid",
	"succeeded",
	"completed",
	"success",
	"captured"
]);
function paymentBucket(status) {
	const value = status.toLowerCase();
	if (PAID.has(value) || value.includes("paid") && !value.includes("unpaid") && !value.includes("partial")) return "paid";
	if (value.includes("partial")) return "partial";
	if (value.includes("refund")) return "refunded";
	if (value.includes("fail") || value.includes("void") || value.includes("cancel") || value.includes("expired")) return "failed";
	return "pending";
}
async function applyPaymentStatus(sql, orderId, status, actor) {
	const rows = await sql`select payment_status from orders where id = ${orderId}`;
	if (!rows[0]) return;
	const previous = s(rows[0], "payment_status");
	const next = status.toLowerCase().slice(0, 40) || "pending";
	if (previous === next) return;
	await sql`update orders set payment_status = ${next}, updated_at = now() where id = ${orderId}`;
	await recordEvent(sql, {
		orderId,
		kind: "payment",
		from: previous || "unpaid",
		to: next,
		actor
	});
	const bucket = paymentBucket(next);
	if (bucket === "paid") await setInventory(sql, orderId, "committed");
	if (bucket === "failed" || bucket === "refunded") await setInventory(sql, orderId, "released");
}
async function enqueueJob(sql, kind, dedupeKey, payload) {
	if ((await sql`
    select id from portal_jobs
    where kind = ${kind} and dedupe_key = ${dedupeKey} and status = 'pending'
    limit 1
  `)[0]) return;
	await sql`
    insert into portal_jobs (kind, dedupe_key, payload)
    values (${kind}, ${dedupeKey}, ${JSON.stringify(payload)})
  `;
}
async function dueJobs(sql, limit = 8) {
	return (await sql`
    select * from portal_jobs
    where status = 'pending' and run_at <= now()
    order by id
    limit ${limit}
  `).map((row) => ({
		id: n(row, "id"),
		kind: s(row, "kind"),
		payload: s(row, "payload"),
		attempts: n(row, "attempts"),
		maxAttempts: n(row, "max_attempts") || 5
	}));
}
async function finishJob(sql, id, error, attempts, maxAttempts) {
	if (!error) {
		await sql`update portal_jobs set status = 'done', last_error = '', updated_at = now() where id = ${id}`;
		return;
	}
	const failed = attempts >= maxAttempts;
	const minutes = Math.min(60, attempts * 2);
	await sql`
    update portal_jobs set
      status = ${failed ? "failed" : "pending"},
      attempts = ${attempts},
      last_error = ${error.slice(0, 300)},
      run_at = now() + (${minutes} || ' minutes')::interval,
      updated_at = now()
    where id = ${id}
  `;
}
async function resolveMail(sql) {
	const row = (await sql`select resend_api_key, email_from from portal_settings where id = 1`)[0];
	return {
		key: (row ? s(row, "resend_api_key") : "") || await envValue("RESEND_API_KEY"),
		from: (row ? s(row, "email_from") : "") || await envValue("EMAIL_FROM") || "Manage Tech Service <noreply@managetechservice.com>"
	};
}
async function deliverEmail(sql, to, subject, body) {
	const mail = await resolveMail(sql);
	if (!mail.key || !mail.from) return {
		ok: false,
		error: "Add a Resend API key in Settings."
	};
	let signoff = renderSignature("", "MTS Support");
	try {
		const rows = await sql`select email_signature, reply_name from portal_settings where id = 1`;
		signoff = renderSignature(rows[0] ? s(rows[0], "email_signature") : "", rows[0] ? s(rows[0], "reply_name") : "MTS Support");
	} catch {}
	const response = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${mail.key}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from: mail.from,
			to: [to],
			subject,
			text: `${body}\n\n${signoff}`
		})
	});
	if (!response.ok) return {
		ok: false,
		error: (await response.text()).slice(0, 180) || "Email provider rejected the message."
	};
	return {
		ok: true,
		error: ""
	};
}
async function sendOrderEmail(sql, input) {
	if (!input.to) return;
	if ((await sql`
    select id from outbound_emails
    where order_id = ${input.orderId} and template = ${input.template} and status = 'sent'
    limit 1
  `)[0]) return;
	const result = await deliverEmail(sql, input.to, input.subject, input.body);
	const inserted = await sql`
    insert into outbound_emails (order_id, to_email, template, subject, body, status, error)
    values (
      ${input.orderId}, ${input.to}, ${input.template}, ${input.subject}, ${input.body},
      ${result.ok ? "sent" : "failed"}, ${result.error}
    )
    returning id
  `;
	await recordEvent(sql, {
		orderId: input.orderId,
		kind: "email",
		to: input.template,
		actor: "Mail",
		detail: result.ok ? `Sent to ${input.to}` : result.error
	});
	if (!result.ok && inserted[0]) await enqueueJob(sql, "email", `email-${n(inserted[0], "id")}`, { emailId: n(inserted[0], "id") });
}
async function resendStoredEmail(sql, emailId) {
	const row = (await sql`select * from outbound_emails where id = ${emailId}`)[0];
	if (!row) return;
	if (s(row, "status") === "sent") return;
	const result = await deliverEmail(sql, s(row, "to_email"), s(row, "subject"), s(row, "body"));
	if (!result.ok) throw new Error(result.error);
	await sql`update outbound_emails set status = 'sent', error = '' where id = ${emailId}`;
}
async function verifyAlternativeSignature(request, raw) {
	const secret = (process.env.ALTERNATIVE_WEBHOOK_SECRET || "").trim();
	const live = (process.env.ALTERNATIVE_ENV || "").toLowerCase() === "live";
	const header = request.headers.get("x-alternative-signature") || request.headers.get("x-signature") || request.headers.get("x-webhook-signature") || "";
	if (!secret) {
		if (live) throw new Error("ALTERNATIVE_WEBHOOK_SECRET is required for live webhooks.");
		return;
	}
	const { createHmac, timingSafeEqual } = await import("node:crypto");
	const digest = createHmac("sha256", secret).update(raw).digest("hex");
	const given = header.replace(/^sha256=/i, "").trim();
	const left = Buffer.from(digest);
	const right = Buffer.from(given);
	if (left.length !== right.length || !timingSafeEqual(left, right)) throw new Error("Alternative Payments signature did not match.");
}
function readAlternativeEvent(payload) {
	const root = payload && typeof payload === "object" ? payload : {};
	const data = root.data && typeof root.data === "object" ? root.data : root;
	const invoice = data.invoice && typeof data.invoice === "object" ? data.invoice : {};
	const event = String(root.type || root.event || root.name || "");
	const status = String(data.status || invoice.status || event).toLowerCase();
	return {
		invoiceId: String(data.invoice_id || invoice.id || data.id || ""),
		requestId: String(data.request_id || data.payment_request_id || ""),
		reference: String(data.reference || data.reference_id || invoice.reference || ""),
		status
	};
}
//#endregion
export { verifyAlternativeSignature as A, resolveMail as C, syncCommerce as D, syncBillingAddress as E, unpaidCardStatus as O, reserveOrder as S, setInventory as T, readAlternativeEvent as _, createAlternativeCheckout as a, refreshAlternativePayment as b, envAlternative as c, orderEvents as d, probeAlternative as f, pushProduct as g, pushOrder as h, commentIsPublic as i, verificationDecision as k, finishJob as l, pushBillingAddress as m, alternativeMode as n, dueJobs as o, publishLive as p, applyPaymentStatus as r, enqueueJob as s, ALTERNATIVE_PORTAL as t, loadAlternativeCreds as u, rebalanceHold as v, sendOrderEmail as w, resendStoredEmail as x, recordEvent as y };
