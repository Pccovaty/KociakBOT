const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
 const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!member) return message.channel.send("Najpierw oznacz użytkownika!");
  const bReason = args.join(" ").slice(22);
  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");
  const banEmbed = new Discord.RichEmbed()
    .setTitle("⛔ Ban")
    .setColor("#ff0000")
    .setDescription(`**▸ Zbanowany użytkownik:** ${member.user.tag} \n **▸ Zbanowany przez:** ${message.author.tag} \n **▸ Powód:** ${bReason}`)
    .setFooter(`${moment().format('L')}  |  ${message.author.tag}`, `${message.author.avatarURL}`)
    
    message.react("524964849181130782")

  const incidentchannel = message.guild.channels.find("name", "💻║mod-log");
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``💻║mod-log``");
  message.channel.send(`Kolejny ban do kolekcji 🤣.`);



  message.guild.member(member).ban(bReason);
  incidentchannel.send(banEmbed);
  message.react("452183703267835910");


};

module.exports.help = {
  name: "ban"
};
