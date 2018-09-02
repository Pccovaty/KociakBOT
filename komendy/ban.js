const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
 const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!member) return message.channel.send("Najpierw oznacz użytkownika!");
  const bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":lock: Dostęp zablokowany! Nie posiadasz roli ``moderator`` lub wyższej.");
  if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":lock: Dostęp zablokowany! Nie posiadasz roli ``moderator`` lub wyższej.");
  const banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ff0000")
    .addField("Moderator", message.author.tag)
    .addField("Zbanowany Użytkownik", `${member.user.tag}`)
    .addField("Powód", bReason);

  const incidentchannel = message.guild.channels.find("name", "mod-log");
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``mod-log``");
  message.channel.send(`Kolejny ban do kolekcji 🤣.`);



  message.guild.member(member).ban(bReason);
  incidentchannel.send(banEmbed);
  message.react("452183703267835910");


};

module.exports.help = {
  name: "ban"
};
