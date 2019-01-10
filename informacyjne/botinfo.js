const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  const bicon = bot.user.displayAvatarURL;
  const botembed = new Discord.RichEmbed()
    .setDescription("Informacje dotyczące bota")
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .setFooter(`${moment().calendar()}  |  ${message.author.tag}`, `${message.author.avatarURL}`)
    .setDescription(`**Nazwa bota:** ${bot.user.tag} \n **Autor bota:** <@340557425511759892> \n **Pomoc w bocie:** <@396284197389729793>, <@151436376712151041>, <@267761613438713876>, <@249602562372665346> \n **Język bota:** [discord.js](https://discord.js.org/)`)
  message.channel.send(botembed);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "botinfo"
};