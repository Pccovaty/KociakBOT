const Discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) => {
  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``").then(msg => {msg.delete(5000)})
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Potrzebujesz permisji ``MANAGE_MESSAGES`` Aby użyć tej komendy").then(msg => {msg.delete(5000)})
  const wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!wUser) return message.reply("Nie znaleziono użytkownika").then(msg => {msg.delete(5000)})
  const warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> ma na swoim koncie ***${warnlevel}*** warny.`);
  message.react("452183703267835910");
  message.delete(5000)
};

module.exports.help = {
  name: "warnlevel"
};
