const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:lock:485090231427661824> | Dostęp zablokowany! Nie posiadasz uprawnień ``Administrator``");

          const tekst = args.join(' '); // czy tutaj xd
          if (!tekst) return message.channel.send("Podaj tekst ogłoszenia");
          let embed = new Discord.RichEmbed()
            .setTitle("Nowe ogłoszenie")
            .setColor("RANDOM")
            .addField('Opis:', tekst)
            .setFooter(`${moment().calendar()}  | Ogłoszenie dodane przez: ${message.author.tag}`, `${message.author.avatarURL}`)
          message.channel.send('@everyone nowe ogłoszenie!' ).then(msg => msg.delete(2000));
          message.channel.send(embed);
message.delete(2000)
    message.delete({timeout: 1000});
    }
    
    
    module.exports.help = {
    
      name:"og"
    
    }
