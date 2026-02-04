const admin = require("./admin");
const blacklist = require("./blacklist");
const protection = require("./protection");
const bot = require("./bot");

exports.handleCommand = async (event, client) => {
  const text = event.message.text.toLowerCase();

  if (text.startsWith("addadmin")) return admin.add(event, client);
  if (text.startsWith("ban")) return blacklist.ban(event, client);
  if (text === "antilink on") return protection.antiLink(event, client);
  if (text === "bot out") return bot.leave(event, client);
};
