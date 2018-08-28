const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

   const panda = new Discord.RichEmbed()
  .setDescription(`**${message.author.tag}**, twoja panda:`)
  .setColor('RANDOM')
  .setImage("https://media.giphy.com/media/jKpVHextCiB8c/giphy.gif");

  message.channel.send(panda)
}

module.exports.help = {
  name:"panda"
}
