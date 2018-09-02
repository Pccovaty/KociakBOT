const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
    const kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kUser) return message.channel.send("Nie znaleziono użytkownika");
  const kReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":lock: Dostęp zablokowany! Nie posiadasz roli ``moderator`` lub wyższej.");
  if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":lock: Dostęp zablokowany! Nie posiadasz roli ``moderator`` lub wyższej.");
  message.channel.send(`:ok_hand:`);
  message.guild.member(kUser).kick(kReason);

  const kickeembed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#29ff00")
    .addField("Moderator", message.author.tag)
    .addField("Wyrzucony", kUser)
    .addField("Powód", kReason)

    const incidentchannel = message.guild.channels.find("name", "mod-log");
    if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``mod-log``");

    incidentchannel.send(kickeembed);

};
module.exports.help = {
  name: "kick"
};
