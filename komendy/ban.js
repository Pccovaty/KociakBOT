const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!member) return message.channel.send("Najpierw oznacz użytkownika!");
  const bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":lock: Dostęp zablokowany! Nie posiadasz roli ``Moderator`` lub wyższej!`");
  if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":lock: Dostęp zablokowany! Nie posiadasz roli ``Moderator`` lub wyższej!");
    message.guild.member(member).ban(bReason);
  const banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#9b0090")
    .addField("Zbanowany Użytkownik", `${member.user.tag}`)
    .addField("Zbanowany przez", `${message.author.tag}`)
    .addField("Zbanowany na kanale", message.channel)
    .addField("Powód", bReason);

  const incidentchannel = message.guild.channels.find("name", "mod-log");
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``mod-log``");
  message.channel.send(`Pomyślnie zbanowano użytkownika: ${member.user.tag}, Powód: **${bReason}**.`);

  const embeeed = new Discord.RichEmbed()
    .setDescription("O nie! Zostałeś zbanowany na serwerze **♕ Our Community ♕**!")
    .setColor("#ff0000")
    .addField("Zostałeś zbanowany przez", `{message.author.tag}`)
    .addField("Powód", bReason)
    .addField("Unban all 1 Lipca 2019r", "https://discord.gg/pppgZCV");

  bUser.send(embeeed);


  incidentchannel.send(banEmbed);
  message.react("452183703267835910");

};

module.exports.help = {
  name: "ban"
};
