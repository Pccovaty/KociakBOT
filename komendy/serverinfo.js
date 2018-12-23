const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  const sicon = message.guild.iconURL;
  const serverembed = new Discord.RichEmbed()
    .setDescription("Informacje dotyczące serwera")
    .setColor("#9b0090")
    .setThumbnail(sicon)
    .addField("Właściciel", message.guild.owner, true)
    .addField("Nazwa serwera", message.guild.name, true)
    .addField("Region", message.guild.region, true)
    .addField("Level weryfikacji", message.guild.verificationLevel, true)
    .addField("Kanał AFK", message.guild.afkChannel || "Brak", true)
    .addField("Rola domyślna", message.guild.defaultRole, true)
    .addField("Utworzony dnia", moment(message.guild.createdAt).format("DD.MM.YYYY, H:mm:ss", true))
    .addField("dołączyłeś na serwer", moment(message.member.joinedAt).format("DD.MM.YYYY, H:mm:ss", true))
    .addField("Łączna liczba członków", message.guild.memberCount, true);

  message.channel.send(serverembed);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "serverinfo"
};
