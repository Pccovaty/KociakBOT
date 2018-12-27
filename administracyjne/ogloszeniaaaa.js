const Discord = require("discord.js");
const moment = require("moment")
module.exports.run = async(bot, message, args, msg) => {

  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");

          const tekst = args.join(' '); // czy tutaj xd
          if (!tekst) return message.channel.send("Podaj tekst ogłoszenia");
          let embed = new Discord.RichEmbed()
            .setTitle("Nowe ogłoszenie")
            .setColor("RANDOM")
            .addField('Opis:', tekst)
            .setFooter(`  Ogłoszenie dodane przez: ${message.author.tag}`, `${message.author.avatarURL}`)
            .setTimestamp()
          message.channel.send('@everyone nowe ogłoszenie!' ).then(msg => msg.delete(2000));
          message.channel.send(embed);
message.delete(2000)

    }
    
    
    module.exports.help = {
    
      name:"og",
     
     
    
    }
