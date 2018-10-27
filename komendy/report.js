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
    .addField("Zgłoszony/a przez", `${message.author}`)
    .addField("Kanał", message.channel)
    .addField("Powód", rreason);

  const reportschannel = message.guild.channels.find("name", "mod-log");
  if (!reportschannel) return message.channel.send("Nie mogę znaleźć kanału ``mod-log``");
  message.channel.send(`**${message.author} pomyślnie zgłoszono użytkownika: **${rUser}**, Powód: **${rreason}** **`);
  message.delete().catch(O_o => {});
  reportschannel.send(reportEmbed);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "report"
};
