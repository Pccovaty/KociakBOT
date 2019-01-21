const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  //let member = (args[0]);
  if (!member) return message.reply('**Wpisz tutaj **__ID__** osoby do zbanowania lub go @oznacz**').catch(console.error);
  const bReason = args.join(" ").slice(22);
 // if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
 // if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``BAN_MEMBERS``");
  const banEmbed = new Discord.RichEmbed()
    .setTitle("⛔ Ban")
    .setColor("#ff0000")
    .setDescription(`**▸ Zbanowany użytkownik:** ${member.user.tag} (${member.user.id}) \n **▸ Zbanowany przez:** ${message.author.tag} (${message.author.id}) \n **▸ Powód:** ${bReason}`)
    .setFooter(`${moment().format('L')}  |  ${message.author.tag}`, `${message.author.avatarURL}`)
    
    message.react("524964849181130782")

  const incidentchannel = member.guild.channels.find('id', '521716025457377297');//mod-log channel name. change for you
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``💻║mod-log``");
  message.channel.send(`Pomyślnie zbanowano użytkownika: ${member.user.tag}`);



  message.guild.member(member).ban(bReason);
  incidentchannel.send(banEmbed);
  message.react("452183703267835910");


};

module.exports.help = {
  name: "ban"
};
