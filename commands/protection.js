exports.antiLink = async (event, client) => {
  await client.replyMessage(event.replyToken, {
    type: "text",
    text: "🛡️ เปิดระบบกันลิงก์เรียบร้อย"
  });
};
