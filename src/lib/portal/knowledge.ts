export type SarahPage = {
  id: string;
  to: "/portal" | "/portal/tickets" | "/portal/tickets/new" | "/portal/shop" | "/portal/orders" | "/portal/billing" | "/portal/complaints" | "/portal/organization" | "/portal/account" | "/portal/my-services" | "/portal/quotes" | "/portal/notifications";
  guide: string;
  label: string;
  words: string[];
};

export const PAGES: SarahPage[] = [
  { id: "home", to: "/portal", guide: "home", label: "Home", words: ["home", "dashboard", "start"] },
  { id: "tickets", to: "/portal/tickets", guide: "tickets", label: "Tickets", words: ["ticket", "tickets", "support", "help desk"] },
  { id: "new-ticket", to: "/portal/tickets/new", guide: "tickets", label: "New ticket", words: ["new ticket", "open a ticket"] },
  { id: "shop", to: "/portal/shop", guide: "order", label: "Order", words: ["shop", "catalog", "equipment", "laptop", "store"] },
  { id: "orders", to: "/portal/orders", guide: "orders", label: "My orders", words: ["my orders", "shipment", "tracking", "delivery"] },
  { id: "billing", to: "/portal/billing", guide: "billing", label: "Billing", words: ["billing", "invoice", "payment", "pay later"] },
  { id: "complaints", to: "/portal/complaints", guide: "complaints", label: "Complaints", words: ["complaint", "complaints", "feedback"] },
  { id: "organization", to: "/portal/organization", guide: "organization", label: "Organization", words: ["organization", "company"] },
  { id: "account", to: "/portal/account", guide: "account", label: "Account", words: ["account", "profile", "phone number"] },
  { id: "services", to: "/portal/my-services", guide: "services", label: "My services", words: ["my services", "active service", "provision"] },
  { id: "quotes", to: "/portal/quotes", guide: "quotes", label: "Quotes", words: ["quote", "quotes"] },
  { id: "notifications", to: "/portal/notifications", guide: "notifications", label: "Notifications", words: ["notification", "notifications", "alert"] },
];

const ARTICLES: { title: string; keywords: string[]; body: string; page: string }[] = [
  {
    title: "Manage Tech Service",
    keywords: ["manage tech", "mts", "company", "about the company", "desk", "mike", "website", "managetechservice"],
    page: "home",
    body: "Manage Tech Service supports business IT. The public site is managetechservice.com. Customers sign in at /production/signin and land on /production/user-portal. Access is invite only. The desk phone is 818-758-4073. Sarah is the portal agent for the signed-in customer only. She cannot see other customers, and she cannot change roles.",
  },
  {
    title: "Portal map",
    keywords: ["portal", "pages", "menu", "what can you do", "where do i"],
    page: "home",
    body: "The customer portal is /production/user-portal. Pages are Home, Tickets, Order, Orders, Billing, Complaints, Organization, and Account. Home is the summary. Tickets are support requests. Order has Equipment and Order services. Orders shows status and shipment. Billing shows invoices and whether this account must pay now or may use order now, pay later. Complaints are filed there. Organization is the company. Account holds the profile and phone. Sarah opens these with show_page. The old /portal address is the upgrade page.",
  },
  {
    title: "Managed IT",
    keywords: ["managed it", "help desk", "server", "cyber", "backup", "endpoint", "security"],
    page: "tickets",
    body: "Managed IT services are Help Desk, Server Management, Network Support, Cybersecurity, Backup and Recovery, and Endpoint Security. They are also in the Zendesk service catalog. Sarah can pass the service name to open_ticket or order the matching portal service. She does not claim a technician is already dispatched.",
  },
  {
    title: "Cloud and business apps",
    keywords: ["cloud", "microsoft", "office 365", "outlook", "teams", "sharepoint", "azure", "intune", "google", "active directory", "daas", "migration"],
    page: "tickets",
    body: "Cloud services include hosting, migration, desktop as a service, infrastructure as a service, and virtual servers. Business application support covers Microsoft 365, Outlook, Teams, SharePoint, Azure, Intune, Active Directory, and Google Workspace. Sarah opens a ticket or a service request for these. She does not reset a password inside Microsoft herself.",
  },
  {
    title: "Projects",
    keywords: ["wifi", "wi-fi", "cabling", "consulting", "relocation", "audit", "project"],
    page: "quotes",
    body: "IT projects include Wi-Fi installation, network cabling, IT consulting, office relocation, and security audits. These are quoted. Sarah can note the site and the request. A quote is not an invoice and is not a completed install.",
  },
  {
    title: "Phone, fax, and internet",
    keywords: ["voip", "extension", "telxent", "fax", "efax", "spectrum", "fiber", "frontier", "wireless", "internet", "phone line"],
    page: "shop",
    body: "Phone and internet are ordered with order_service. A VoIP extension is 18 dollars a month extra on the Telxent bill and is not placed until the customer presses Confirm. Telxent still has to confirm the extension. A new extension can add a desk phone if they want a handset shipped. eFax needs the email address that should receive incoming faxes. Internet options are Spectrum cable, AT&T Fiber, Frontier Fiber, and fixed wireless. Sarah records the site address.",
  },
  {
    title: "Wiring",
    keywords: ["wiring", "drop", "cable drop", "175"],
    page: "shop",
    body: "Wiring is billed at 175 dollars per drop. Sarah asks how many drops, repeats the count and the total, and does not place the request until the customer presses Confirm.",
  },
  {
    title: "Tickets and Zendesk",
    keywords: ["ticket", "zendesk", "support", "priority", "justification", "service", "asset", "form"],
    page: "tickets",
    body: "The support form is Subject, Description, Priority, Service, and Asset. Priority is low, normal, high, or urgent. Business justification is required only for high or urgent, and it is left off otherwise. Service and Asset are names from Zendesk, not record ids. Sarah opens that ticket with open_ticket. She can list tickets, read one, refresh it from Zendesk, reply, and close one after Confirm. She never invents a Zendesk number. If Zendesk is not connected, the ticket still exists in the portal.",
  },
  {
    title: "Equipment and checkout",
    keywords: ["laptop", "equipment", "catalog", "cart", "checkout", "product", "desk phone"],
    page: "shop",
    body: "Equipment is on the Order page. Sarah uses list_catalog and find_equipment. She places an order with place_order only after Confirm. She never takes a card number. pay_order returns the payment link. Accounts with deferred billing can be invoiced instead.",
  },
  {
    title: "Orders, shipping, and billing",
    keywords: ["shipment", "tracking", "order status", "invoice", "billing", "pay later", "payment", "barcode"],
    page: "orders",
    body: "Orders shows the status, payment state, and shipment for this account. The air waybill barcode is built from the order number. Billing lists invoices. Sarah can read status with list_orders, order_detail, and list_billing. She cannot mark a payment captured unless the payment provider has confirmed it.",
  },
  {
    title: "Account, organization, complaints",
    keywords: ["complaint", "profile", "organization", "update phone", "permissions", "role"],
    page: "account",
    body: "Account shows the name, email, and phone. Sarah can update the phone with update_contact after Confirm, and the company with update_company after Confirm. A complaint opens a ticket. New registrations are customers first. Sarah cannot grant shop, pay-later, or admin access.",
  },
  {
    title: "How Sarah works",
    keywords: ["call", "chat", "tools", "function", "knowledge", "what do you know", "sarah"],
    page: "home",
    body: "Sarah's tools are account, list_tickets, ticket_detail, refresh_ticket, open_ticket, reply_ticket, close_ticket, list_orders, order_detail, list_catalog, find_equipment, place_order, cancel_order, pay_order, list_billing, list_requests, order_service, complaint, update_contact, update_company, list_notices, read_notice, lookup_kb, and show_page. place_order, cancel_order, close_ticket, update_contact, update_company, a VoIP extension, and wiring wait for Confirm. She uses a tool before she claims a ticket, order, or change. She does not take a card number.",
  },
];

export function matchPage(text: string) {
  const q = text.toLowerCase();
  const ranked = PAGES.map((page) => ({ page, score: page.words.reduce((sum, word) => sum + (q.includes(word) ? word.length : 0), 0) }));
  ranked.sort((a, b) => b.score - a.score);
  return ranked[0]?.score ? ranked[0].page : null;
}

export function pageById(id: string) {
  return PAGES.find((page) => page.id === id) ?? PAGES[0];
}

export function lookupKnowledge(query: string) {
  const q = query.toLowerCase();
  const ranked = ARTICLES.map((article) => ({
    article,
    score: article.keywords.reduce((sum, word) => sum + (q.includes(word) ? word.length : 0), 0),
  })).filter((item) => item.score > 0).sort((a, b) => b.score - a.score);
  const chosen = ranked.slice(0, 2);
  if (!chosen.length) return null;
  const page = pageById(chosen[0].article.page);
  return {
    summary: chosen.map((item) => item.article.body).join(" "),
    show: { to: page.to, guide: page.guide, label: page.label },
  };
}

export function knowledgeBrief() {
  return ARTICLES.map((article) => `${article.title}: ${article.body}`).join("\n");
}
