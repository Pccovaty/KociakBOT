const Discord = require("discord.js");
const moment = require("moment")
module.exports.run = async(bot, message, args) => {
    const incidentchannel = message.guild.channels.find("name", "propozycje");
    if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``propozycje``");
  const sayMessage = args.join(" ");
  message.delete().catch();
  const embed = new Discord.RichEmbed()
  .setTitle("Nowa Propozycja")
  .setDescription(`**Propozycja od:** ${message.author.tag} \n **Proponuje:** ${sayMessage}`)
  .setFooter(`${moment().format('DD.MM.YYYY')} `)
  .setTimestamp()

  incidentchannel.send(embed)
  message.channel.send("Propozycja wysłana pomyślnie!")


 
};

module.exports.help = {
  name: "propozycja"
};
