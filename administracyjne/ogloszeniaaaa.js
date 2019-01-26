const Discord = require("discord.js");
const moment = require("moment")
exports.run = async(bot, message, args, msg) => {

  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");

          const tekst = args.join(' '); //argument oddzielony spacją
          if (!tekst) return message.channel.send("Podaj tekst ogłoszenia"); // tutaj jak nic nie wpisze sie to bot pisze:
          let embed = new Discord.RichEmbed() // tutaj tabelka sie tworzy
            .setTitle("Nowe ogłoszenie") // tytuł
            .setColor("Purple") // kolor
            .addField('Opis:', tekst) //Opis:
            .setFooter(`  Ogłoszenie dodane przez: ${message.author.tag}`, `${message.author.avatarURL}`) // tutaj footer (podspodem)
            .setTimestamp() // tutaj data xd
          message.channel.send('@everyone nowe ogłoszenie!' ).then(msg => msg.delete(2000)); // everyone wysyla
          message.channel.send(embed); // wysyla tabelke
message.delete(2000) // usuwa wiadomosc którą napisaliśmy

    }
    
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["h", "halp"],
      permLevel: "User"
    };

exports.help = {
  name: "og",
  usage: "help [command]"
}
