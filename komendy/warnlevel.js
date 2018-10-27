const Discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie możesz tego zrobić.");
  const wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!wUser) return message.reply("Nie mogłem go/ją znaleźć");
  const warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> ma na swoim koncie ***${warnlevel}*** warny.`);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "warnlevel"
};
