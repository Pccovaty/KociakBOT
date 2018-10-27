const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  const then = Date.now();
  message.channel.send("Ping... ").then(m => {
    m.edit(`Pong! Twój aktualny ping wynosi ${Date.now() - then}ms`);
  });
  message.react("452183703267835910");
};
module.exports.help = {
  name: "ping"
};