const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  const bicon = bot.user.displayAvatarURL;
  const botembed = new Discord.RichEmbed()
    .setDescription("Developerzy bota ♕ Our Community ♕")
    .setColor("#9b0090")
    .setThumbnail(bicon)
    .addField("Global developerzy", "``๖̶̶̶ζ͜͡Kociak 💞#6365, ๖̶̶̶ۣۣۜۜ͜ζ͜͡Słodziak 💞#9231``")
    .addField("developerzy", "``xCookieTM#9613``,")
    .addField("Pomoc przy bocie", "``fratik#0001``, ``Seba#0335`` ");

  message.channel.send(botembed);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "developerzy"
};
