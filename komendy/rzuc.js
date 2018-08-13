const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    
  let osoba = message.mentions.users.first();
  let embed = new Discord.RichEmbed()
  .setColor("#ffffff")
  .setAuthor(`${message.author.username}${message.author.tag} rzucił(a) poduszką w ${osoba.username}${osoba.tag}`)
  .setImage("https://nyanyan.it/upload/202203_85dph9ny12kgso64ztfixaqj0luwbe73vrcm.gif")
  message.channel.send(embed);
}

module.exports.help = {
  name:"rzuc"
}
