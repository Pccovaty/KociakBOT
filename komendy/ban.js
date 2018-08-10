const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  const bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!bUser) return message.channel.send("Oznacz użytkownika!");
  const bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Brak uprawnień do komendy ``Ban``");
  if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Brak uprawnień do komendy ``Ban``");
  const banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#9b0090")
    .addField("Zbanowany Użytkownik", `${bUser}`)
    .addField("ID Zbanowanego", `${bUser.id}`)
    .addField("Zbanowany przez", `<@${message.author.id}>`)
    .addField("ID Osoby która zbanowała", `${message.author.id}`)
    .addField("Zbanowany na kanale", message.channel)
    .addField("Godzina", moment(message.createdAt).format("DD.MM.YYYY, H:mm:ss"))
    .addField("Powód", bReason);

  const incidentchannel = message.guild.channels.find("name", "❕bany❕");
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``❕bany❕``");
  message.channel.send(`Pomyślnie zbanowano użytkownika: ${bUser}, Powód: **${bReason}**, więcej informacji na <#465570658408202250>`);

  const embeeed = new Discord.RichEmbed()
    .setDescription("O nie! Zostałeś zbanowany na serwerze **Our Community**!")
    .setColor("#ff0000")
    .addField("Zostałeś zbanowany przez", `<@${message.author.id}>`)
    .addField("Powód", bReason)
    .addField("Unban all 1 Lipca 2019r", "https://discord.gg/pppgZCV");

  bUser.send(embeeed);

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);
  message.react("452183703267835910");

};

module.exports.help = {
  name: "ban"
};
