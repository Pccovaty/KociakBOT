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
            .setFooter(`Ogłoszenie by: ${message.author.tag}`, `${message.author.avatarURL}`);
          message.channel.send('<@&435826416488022017>' ).then(msg => msg.delete(500));
          message.channel.send(embed);

    message.delete({timeout: 1000});
    }
    
    
    module.exports.help = {
    
      name:"og"
    
    }
