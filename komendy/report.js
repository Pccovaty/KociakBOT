const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  const rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!rUser) return message.channel.send("Oznacz Użytkownika");
  const rreason = args.join(" ").slice(22);

  const reportEmbed = new Discord.RichEmbed()
    .setDescription("Zgłoszenie")
    .setColor("#15f153")
    .addField("Zgłoszony Użytkownik", `${rUser}`)
    .addField("ID Zgłoszonego Użytkownika", `${rUser.id}`)
    .addField("Zgłoszony/a przez", `${message.author}`)
    .addField("ID osoby która zgłasza", `${message.author.id}`)
    .addField("Kanał", message.channel)
    .addField("Data zgłoszenia", moment(message.createdAt).format("DD/YYYY/MM, H:mm:ss"))
    .addField("Powód", rreason);

  const reportschannel = message.guild.channels.find("name", "❕reporty❕");
  if (!reportschannel) return message.channel.send("Nie mogę znaleźć kanału ``❕reporty❕``");
  message.channel.send(`${message.author} pomyślnie zgłoszono użytkownika: **${rUser}**, Powód: **${rreason}**, więcej informacji na <#465253134059438100> `);
  message.delete().catch(O_o => {});
  reportschannel.send(reportEmbed);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "report"
};
