const Discord = require("discord.js");
 module.exports.run = async(bot, message, args) => {
    
  let osoba = message.mentions.users.first();
  let embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}#${message.author.discriminator} pocałował(a) ${osoba.username}#${osoba.discriminator} ❤`)
   .setColor('RANDOM')
  .setImage("https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif")
  message.channel.send(embed);
}
 module.exports.help = {
  name:"kiss"
}
