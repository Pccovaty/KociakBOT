const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    
  let osoba = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let embed = new Discord.RichEmbed()
  .setDescription("Wojna na poduszki")
  .setColor("#ffffff")
  .addField(`**message.author.username** rzucił poduszką w osoba`)
  .setImage("https://nyanyan.it/upload/202203_85dph9ny12kgso64ztfixaqj0luwbe73vrcm.gif")
  message.channel.send(embed);
}

module.exports.help = {
  name:"rzuc"
}
