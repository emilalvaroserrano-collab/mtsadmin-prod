import { r as __exportAll } from "../_runtime.mjs";
import { c as __exportAll$1 } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/email-signature-DRfqkC6k.js
var email_signature_DRfqkC6k_exports = /* @__PURE__ */ __exportAll({
	a: () => signatureHtml,
	i: () => renderSignature,
	n: () => email_signature_exports,
	o: () => textMailTemplate,
	r: () => htmlMailTemplate,
	t: () => DEFAULT_EMAIL_SIGNATURE
});
var email_signature_exports = /* @__PURE__ */ __exportAll$1({
	DEFAULT_EMAIL_SIGNATURE: () => DEFAULT_EMAIL_SIGNATURE,
	PORTAL_ORIGIN: () => PORTAL_ORIGIN,
	TICKETS_URL: () => TICKETS_URL,
	htmlMailTemplate: () => htmlMailTemplate,
	renderSignature: () => renderSignature,
	signatureHtml: () => signatureHtml,
	textMailTemplate: () => textMailTemplate
});
var PORTAL_ORIGIN = "https://mts.192-888-702-801.site";
var TICKETS_URL = `${PORTAL_ORIGIN}/production/user-portal/tickets`;
var DEFAULT_EMAIL_SIGNATURE = `{{agent.name}}
Manage Tech Service
Technology that drives business success.
${PORTAL_ORIGIN}`;
function renderSignature(template, name) {
	return (template.trim() || DEFAULT_EMAIL_SIGNATURE).replaceAll("{{agent.name}}", name.trim() || "MTS Support").trim();
}
function escapeHtml(value) {
	return value.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
}
function signatureHtml(template) {
	return (template.trim() || DEFAULT_EMAIL_SIGNATURE).split("\n").map((line) => line.split(/(\{\{agent\.name\}\})/g).map((part) => part === "{{agent.name}}" ? part : escapeHtml(part)).join("")).join("<br>\n");
}
function htmlMailTemplate(template) {
	return `<!DOCTYPE html>
<html dir="auto" {{lang}}>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <style type="text/css">
    table td { border-collapse: collapse; }
    {{styles}}
  </style>
</head>
<body {{attributes}} style="width: 100%!important; margin: 0; padding: 0;">
  <div style="font-family: 'system-ui','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif'; font-size: 14px; line-height: 1.5; color:#444444;">
    {{content}}
  </div>
  <div style="font-family: 'system-ui','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif'; font-size: 13px; line-height: 1.5; color:#444444; margin-top: 16px;">
    ${signatureHtml(template)}
    <br><a href="${TICKETS_URL}">Open your tickets</a>
  </div>
  {{quoted_content}}
</body>
</html>`;
}
function textMailTemplate(template) {
	return `{{content}}\n\n${(template.trim() || DEFAULT_EMAIL_SIGNATURE).trim()}\nOpen your tickets: ${TICKETS_URL}\n\n{{quoted_content}}`;
}
//#endregion
export { signatureHtml as a, renderSignature as i, email_signature_DRfqkC6k_exports as n, textMailTemplate as o, htmlMailTemplate as r, DEFAULT_EMAIL_SIGNATURE as t };
