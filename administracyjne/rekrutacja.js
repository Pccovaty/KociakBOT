const Discord = require("discord.js");
const agree = "526698392810815518"
const nieagre = "526698394543194112"
module.exports.run = async(bot, message, args, msg) => {
  const incidentchannel = message.guild.channels.find('id', '692268510075813901');//mod-log channel name. change for you
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``ID: 692268510075813901``");
    cmd = message.content;
    const heelp = new Discord.RichEmbed()
    .setTitle("Wzór na weryfikacje")
    .setDescription("**Jesteś Nauczycielem czy Uczniem? (jeśli uczniem, to Elektryk czy Mechatronik)\n Twoje Imie i Nazwisko? \n (Krótka wiedza) Po co stworzyliśmy ten serwer?**")
    .addField("Jak napisać poprawnie weryfikacje?", "**Aby poprawnie napisać weryfikacje, wystarczy ze napiszesz je tak jak ponizszy przyklad** \n \n \n Użyj: **!!w 1;2;3** < - zamiast liczb 1;2;3; itp daj swoje odpowiedzi")
    .setColor("BLUE")
    .setFooter("1ck | Weryfikacja stworzona przez Mateusz Bieniek")
    params = cmd.substr(cmd.split(" ", 1)[0].length + 1, cmd.length).split(";");
  if (params.length !== 3) return message.channel.send(heelp);
    
         const embed = new Discord.RichEmbed()
        .addField("Jesteś Nauczycielem czy Uczniem? (jeśli uczniem, to Elektryk czy Mechatronik)", params[0])
        .addField("Twoje Imie i Nazwisko?", params[1])
        .addField("(Krótka wiedza) Po co stworzyliśmy ten serwer?", params[2])
        .addField("ID", message.author.id)
        .addField("Nazwa", message.author.tag)
        .setColor("RED")
    if (args[0] == "pomoc"){
     message.channel.send(help)
     message.channel.send(heelp)
    } else  {
        const msg = await incidentchannel.send(embed);

        await msg.react("526698392810815518");
        await msg.react("526698394543194112");
      
        message.delete({timeout: 1000});
            }
        };

module.exports.help = {
  name: "w"
};
