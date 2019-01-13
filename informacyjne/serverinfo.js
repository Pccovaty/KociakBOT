const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  
  
  const sicon = message.guild.iconURL;
 
 
  const serverembed = new Discord.RichEmbed()
    .setTitle(`Informacje dla serwera ${message.guild.name}`)
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .setDescription(`**Właściciel:** ${message.guild.owner} \n **ID serwera:** ${message.guild.id} \n  **Stworzony:** ${moment(message.guild.createdAt).format("DD.MM.YYYY, H:mm:ss")} \n **liczba członków:** ${message.guild.memberCount}`)
    .setTimestamp()


    
  message.channel.send(serverembed);
};

module.exports.help = {
  name: "serverinfo",
  aliases: ['sf'],
};
