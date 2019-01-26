const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let ikona = message.guild.iconURL;
  let embed = new Discord.RichEmbed()
  .setDescription("Avatar serwera:")
  .setColor('RANDOM')
  .setImage(ikona)
  .setThumbnail()
  .setFooter(`   ${message.author.tag}`, `${message.author.avatarURL}`);

  message.channel.send(embed);
}

module.exports.help = {
  name:"avatar-serwera"
}
