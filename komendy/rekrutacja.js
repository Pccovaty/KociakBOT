const Discord = require("discord.js");
const agree = "526698392810815518"
const nieagre = "526698394543194112"
module.exports.run = async(bot, message, args, msg) => {
    const incidentchannel = message.guild.channels.find("name", "rekrutacja-on");
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``mod-log``");
    cmd = message.content;
    const heelp = new Discord.RichEmbed()
    .setTitle("Wzór na rangę Moderator")
    .setDescription("**Twój nick na Discordzie wraz z Hasztagiem (nick#0000)\n Co Twoim zdaniem należy do obowiązków Junior Moderatora? \n Ile masz lat? \n Jak masz na imie? \n Dlaczego ty masz zostać Junior Moderatorem? \n Jak często przebywasz na Discordzie? \n Dlaczego mamy Cię wybrać? \n Min 3 zdania o sobie**\n \n  ")
    .addField("Jak napisać poprawnie rekrutacje?", "**Aby poprawnie napisać rekrutacje, wystarczy ze napiszesz je tak jak ponizszy przyklad** \n \n \n Użyj: **!!rekrutacja 1;2;3;4;5;6;7;8** < - zamiast liczb 1;2;3; itp daj swoje odpowiedzi")
    .setColor("BLUE")
    .setFooter("Czas na składania podań: 20.01.2019r")
    params = cmd.substr(cmd.split(" ", 1)[0].length + 1, cmd.length).split(";");
  if (params.length !== 8) return message.channel.send(heelp);
    
         const embed = new Discord.RichEmbed()
        .addField("Twój nick na Discordzie wraz z Hasztagiem (nick#0000)", params[0])
        .addField("Co Twoim zdaniem należy do obowiązków Junior Moderatora?", params[1])
        .addField("Ile masz lat?", params[2])
        .addField("Jak masz na imie?", params[3])
        .addField("Dlaczego ty masz zostać Junior Moderatorem?", params[4])
        .addField("Jak często przebywasz na Discordzie?", params[5])
        .addField("Dlaczego mamy Cię wybrać?", params[6])
        .addField("Min 3 zdania o sobie", params[7])
        .addField("ID", message.author.id)
        .addField("Nazwa", message.author.tag)
        .setColor("RED")
        
    if (args[0] == "pomoc"){
     message.channel.send(help)
     message.channel.send(heelp)
    } else  {
        incidentchannel.send("<@&521378978569912340>")
        const msg = await incidentchannel.send(embed);

        await msg.react("526698392810815518");
        await msg.react("526698394543194112");
      
        message.delete({timeout: 1000});
        message.channel.send("Rekrutacja została pomyślnie napisana! (teraz tylko czekac na adminów).")
            }
        };

module.exports.help = {
  name: "rekrutacja"
};
