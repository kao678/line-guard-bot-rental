const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("RENDER BOT IS ALIVE");
});

app.post("/webhook", (req, res) => {
  console.log("Webhook OK");
  res.sendStatus(200);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
