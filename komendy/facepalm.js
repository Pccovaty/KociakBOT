const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

   const facembed = new Discord.RichEmbed()
  .setDescription(`**${message.author.tag}** aktualnie wygląda tak:`)
  .setColor('RANDOM')
  .setImage("https://media.giphy.com/media/3og0INyCmHlNylks9O/giphy.gif");

  message.channel.send(facembed)
}

module.exports.help = {
  name:"facepalm"
}
