const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {
  
  
  const sicon = message.guild.iconURL;
 
 
  const serverembed = new Discord.RichEmbed()
    .setTitle(message.guild.name, sicon)
    .setColor(role.hexcolor)
    .setThumbnail(sicon)
    .addField("Właściciel", message.guild.owner, true)
    .addField("Nazwa serwera", message.guild.name, true)
    .addField("Region", message.guild.region, true)
    .addField("Kanał AFK", message.guild.afkChannel || "Brak", true)
    .setTimestamp()
    .addField('Status Członków', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** zaraz wracam\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Nie przeszkadzać\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Niewidoczny\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Prowadzi Stream`)
    .addField("Serwer stworzony dnia:", moment(message.guild.createdAt).format("DD.MM.YYYY, H:mm:ss", true))
    .addField("Dołączyłeś na serwer dnia:", moment(message.member.joinedAt).format("DD.MM.YYYY, H:mm:ss", true))
    .addField("Łączna liczba członków", message.guild.memberCount, true);


    
  message.channel.send(serverembed);
};

module.exports.help = {
  name: "serverinfo"
};
