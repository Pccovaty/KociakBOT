const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  
  const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!member) return message.channel.send("Nie znaleziono użytkownika");
  const kReason = args.join(" ").slice(22);
  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");
  message.guild.member(member).kick(kReason);

  const kickeembed = new Discord.RichEmbed()
    .setTitle("\👈 Kick")
    .setColor("#a8f03f")
    .setDescription(`**▸ Wyrzucony użytkownik:**  ${member.user.tag} \n **▸ Wyrzucony przez:** ${message.author.tag} \n **▸ Powód:** ${kReason}`)
    .setFooter(`${moment().format('L')}  |  ${message.author.tag}`, `${message.author.avatarURL}`)

    const incidentchannel = member.guild.channels.find('id', '571244340584644619');//mod-log channel name. change for you
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału.");

    incidentchannel.send(kickeembed);

};
module.exports.help = {
  name: "kick"
};
