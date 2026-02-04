require("dotenv").config();
const express = require("express");
const line = require("@line/bot-sdk");

const app = express();

/* ===== LINE CLIENT ===== */
const client = new line.Client({
  channelAccessToken: process.env.LINE_ACCESS_TOKEN
});

/* ===== HEALTH CHECK ===== */
app.get("/", (req, res) => {
  res.send("LINE GUARD BOT IS ALIVE");
});

/* ===== WEBHOOK ===== */
app.post(
  "/webhook",
  line.middleware({
    channelSecret: process.env.LINE_CHANNEL_SECRET
  }),
  (req, res) => {
    console.log("===== WEBHOOK HIT =====");
    console.log(JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
  }
);

/* ===== START SERVER ===== */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
