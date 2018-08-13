const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    
  let osoba = message.mentions.users.first();
  let embed = new Discord.RichEmbed()
  .setColor("#ffffff")
  .addField(`**${message.author.username}** rzucił(a) poduszką w ${osoba.username}`)
  .setImage("https://nyanyan.it/upload/202203_85dph9ny12kgso64ztfixaqj0luwbe73vrcm.gif")
  message.channel.send(embed);
}

module.exports.help = {
  name:"rzuc"
}
