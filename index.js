require("dotenv").config();
const express = require("express");
const line = require("@line/bot-sdk");

const app = express();

const client = new line.Client({
  channelAccessToken: process.env.LINE_ACCESS_TOKEN
});

app.get("/", (req, res) => {
  res.send("LINE GUARD BOT IS ALIVE");
});

app.post(
  "/webhook",
  line.middleware({
    channelSecret: process.env.LINE_CHANNEL_SECRET
  }),
  async (req, res) => {

    for (const event of req.body.events) {
      console.log("EVENT:", event.type);
      // ตรงนี้คือจุดที่เอา guard / anti-nuke มาใส่
    }

    res.sendStatus(200);
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🛡️ LINE BOT RUNNING ON
