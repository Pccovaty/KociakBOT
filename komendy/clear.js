const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Brak permisji do ``clear``");
  if (!args[0]) return message.channel.send("Nie");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`usunięto **${args[0]}** wiadomości.`).then(msg => msg.delete(2000));
  });

  message.react("452183703267835910");
};

module.exports.help = {
  name: "clear"
};
