const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  const bicon = bot.user.displayAvatarURL;
  const botembed = new Discord.RichEmbed()
    .setDescription("Developerzy bota KociakBOT")
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .addField("Global developerzy", "``Kociak 💞#6365``, ``Słodziak 💞#9231``")
    .addField("Pomoc przy bocie", "``fratik#0001``, ``Seba#0335`` ");

  message.channel.send(botembed);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "developerzy"
};
