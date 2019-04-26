const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  //let member = (args[0]);
  if (!member) return message.reply('**Wpisz tutaj **__ID__** osoby do zbanowania lub go @oznacz**').catch(console.error);
  const bReason = args.join(" ").slice(22);
  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");
  const banEmbed = new Discord.RichEmbed()
    .setTitle("⛔ Ban")
    .setColor("#ff0000")
    .setDescription(`**▸ Zbanowany użytkownik:** ${member.user.tag} (${member.user.id}) \n **▸ Zbanowany przez:** ${message.author.tag} (${message.author.id}) \n **▸ Powód:** ${bReason}`)
    .setFooter(`${moment().format('L')}  |  ${message.author.tag}`, `${message.author.avatarURL}`)
    
    message.react("524964849181130782")
  const embedpriv = new Discord.RichEmbed()
  .setTitle("⛔ Ban")
  .setDescription(`**▸ Zostałeś(aś) Zbanowany(a) na serwerze:** ${member.guild.name} \n **▸ Moderator** ${message.author.tag} \n **▸ Powód:** ${bReason}`)
  .setFooter("unban all 1 Lipca 2019r | Discord.gg/pppgZCV")
  member.send(embedpriv)
  const incidentchannel = member.guild.channels.find('id', '571244340584644619');//mod-log channel name. change for you
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału.");
  message.channel.send(`Pomyślnie zbanowano użytkownika: ${member.user.tag}`);



  message.guild.member(member).ban(bReason);
  incidentchannel.send(banEmbed);
  message.react("452183703267835910");


};

module.exports.help = {
  name: "ban"
};
