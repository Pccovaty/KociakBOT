const Discord = require("discord.js");
 module.exports.run = async(bot, message, args) => {
    
  let osoba = message.mentions.users.first();
  let embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}#${message.author.discriminator} uderzył ${osoba.username}#${osoba.discriminator} 😢`)
   .setColor("#ffffff")
  .setImage("https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif")
  message.channel.send(embed);
}
 module.exports.help = {
  name:"slap"
}
