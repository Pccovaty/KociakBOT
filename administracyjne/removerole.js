const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  const incidentchannel = message.guild.channels.find("name", "rola-usun-dodaj");
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``rola-usun-dodaj``");

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("Użycie: <removerole <user> <role>");
    return;
  }
  let users = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!users) return message.reply("Nie znaleziono użytkownika bro.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Podaj role...");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Nie znalazłem roli o takiej nazwie.");

  if(!users.roles.has(gRole.id)) return message.reply("Ten Użytkownik nie ma już tej roli...");
  await(users.removeRole(gRole.id));
  const emeed = new Discord.RichEmbed()
  .setDescription(`${users} straciłeś(aś) role **${gRole.name}**`)
  .setColor("#b275f3")
  const emeeeed = new Discord.RichEmbed()
  .setDescription(`Użytkownik ${users} stracił role **${gRole}** lecz ma wyłączone DM.`)
  .setColor("#b275f3")
  const emeeed = new Discord.RichEmbed()
  .setDescription(`Użytkownik ${users} stracił role **${gRole}**`)
  .setColor("#b275f3")
  incidentchannel.send(emeed)
  message.channel.send("Rola została pomyślnie zabrana").then(msg => {msg.delete(5000)})
  try{
    await users.send(emeed)
  }catch(e){
    message.channel.send(emeeeed)
  }
}

module.exports.help = {
  name: "Role"
}
