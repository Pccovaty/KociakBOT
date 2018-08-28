const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  const bicon = bot.user.displayAvatarURL;
  const botembed = new Discord.RichEmbed()
    .setDescription("Informacje dotyczące bota")
    .setColor("#9b0090")
    .setThumbnail(bicon)
    .addField("Nazwa Bota", bot.user.username)
    .addField("Aktualna data i godzina", moment(bot.createdAt).format("YYYY.MM.DD, HH:mm:ss"))
    .addField("Ostatnia wiadomość", bot.user.lastMessage || "Brak ostatniej wiadomości")
    .addField("Timestamp", bot.user.createdTimestamp || "Brak")
    .addField("Ukończony", "w 100%")
    .addField("ℹ Officjalny serwer discord: ", "https://discord.gg/pppgZCV");

  message.channel.send(botembed);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "bot"
};
