const express = require("express");
const line = require("@line/bot-sdk");
const bodyParser = require("body-parser");

const config = require("./config");
const { handleCommand } = require("./commands");

const app = express();
app.use(bodyParser.json());

const client = new line.Client(config);

app.post("/webhook", async (req, res) => {
  const events = req.body.events;
  for (let event of events) {
    if (event.type === "message" && event.message.type === "text") {
      await handleCommand(event, client);
    }
  }
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("BOT RUNNING");
});
