const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  const incidentchannel = message.guild.channels.find("id", "527946215791525908");
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``527946215791525908``");
  const modlog = message.guild.channels.find('id', '531434222217592859');//mod-log channel name. change for you
  if (!modlog) return message.channel.send("Nie mogę znaleźć kanału. ``💻║mod-log``");
  //!dodaj @andrew VIP
  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");

  if (args[0] == "help") {
    message.reply("Użycie: !!dodaj <user> <Rola>");
    return;
  }
  let users = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!users) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Najpierw podaj nazwe roli").then(msg => { msg.delete(5000)})
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Nie znalazlem roli").then(msg => { msg.delete(5000)})
  message.delete()
  if (users.roles.has(gRole.id)) return message.reply(`Ten użytkownik ma już role **${gRole.name}**..`).then(msg => { msg.delete(5000)
  });
  await (users.addRole(gRole.id));
  const emeeed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setDescription(`**▸ Użytkownik:** ${users.user.tag} (ID: ${users.id})\n  **▸ otrzymał(a) role** ${gRole} \n **▸ Moderator który daje role:** ${message.author.tag} (ID: ${message.author.id})`)
  .setColor("#b275f3")
  const emeed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setDescription(`**▸ Użytkownik:** ${users.user.tag} (ID: ${users.id}) \n  **▸ otrzymał(a) role:** ${gRole} \n **▸ Moderator który daje role:** ${message.author.tag} (ID: ${message.author.id})`)
  .setColor("#b275f3")
  message.channel.send("Rola została pomyślnie dodana!").then(msg => {msg.delete(5000)})
incidentchannel.send(emeeed)
modlog.send(emeed)
  
}


module.exports.help = {
  name: "dodaj"
}
