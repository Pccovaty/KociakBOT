const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("Nie masz permisji do ``unmute``");

  const toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!toMute) return message.channel.send("Nie podałeś/aś nazwy użytkownika ani identyfikatora");
  const role = message.guild.roles.find(r => r.name === "Muted");
  if (!role || !toMute.roles.has(role.id)) return message.channel.send("Ten użytkownik jest już odciszony!");

  await toMute.removeRole(role);
  message.channel.send(`Pomyślnie odciszono użytkownika ${toMute}`);

  return;
  message.react("452183703267835910");
};
module.exports.help = {
  name: "unmute"
};
