const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  const bicon = bot.user.displayAvatarURL;
  const botembed = new Discord.RichEmbed()
    .setDescription("Informacje dotyczące bota")
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .addField("Nazwa bota:", bot.user.username)
    .addField("Autor bota:", "<@340557425511759892>", true)
    .addField("Pomoc w bocie:", "<@396284197389729793>, <@151436376712151041>, <@267761613438713876>", true)
    .addField("Język bota:", "Discord")
    .setFooter(`${moment().calendar()}  |  ${message.author.tag}`, `${message.author.avatarURL}`)
    
  message.channel.send(botembed);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "botinfo"
};
