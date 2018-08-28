const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  const kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kUser) return message.channel.send("Nie znaleziono użytkownika");
  const kReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nie możesz wyrzucić tej osoby!!");
  if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nie możesz wyrzucić tej osoby!");
  message.react("452183703267835910");
  const kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#9b0090")
    .addField("Wyrzucony Użytkownik", `${kUser}`)
    .addField("ID wyrzuconego użytkownika", `${kUser.id}`)
    .addField("Wyrzucony przez", `<@${message.author.id}>`)
    .addField("Data i godzina", moment(message.createdAt).format("YYYY.MM.DD, HH:mm:ss"))
    .addField("Powód", kReason);

  const kickChannel = message.guild.channels.find("name", "kicki");
  if (!kickChannel) return message.channel.send("Nie można znaleźć kanału ``kicki``");
  message.channel.send(`Pomyślnie wyrzucono użytkownika: **${kUser}**, Powód: ${kReason}, więcej informacji na <#465570677135769600> `);
  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

  const embeeed = new Discord.RichEmbed()
    .setDescription("O nie! Zostałeś wyrzucony z serwera **Our Community**!")
    .setColor("#29ff00")
    .addField("Zostałeś wyrzucony przez", `<@${message.author.id}>`)
    .addField("Powód", kReason)
    .addField("Możesz wbić znowu link ponizej", "https://discord.gg/pppgZCV");

  kUser.send(embeeed);

};

module.exports.help = {
  name: "kick"
};
