const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  const sayMessage = args.join(" ");
  message.delete().catch();
  message.channel.send(sayMessage);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "say"
};
