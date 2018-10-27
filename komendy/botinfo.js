const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  const bicon = bot.user.displayAvatarURL;
  const botembed = new Discord.RichEmbed()
    .setDescription("Informacje dotyczące bota")
    .setColor("#9b0090")
    .setThumbnail(bicon)
    .addField("Nazwa Bota", bot.user.username)
    .addField("Autor bota", "``Kociak#6365``")
    .addField("Aktualna data i godzina", moment(bot.createdAt).format("YYYY.MM.DD, HH:mm:ss"))
    .addField("Ostatnia wiadomość bota", bot.user.lastMessage || "Brak ostatniej wiadomości")

  message.channel.send(botembed);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "botinfo"
};
