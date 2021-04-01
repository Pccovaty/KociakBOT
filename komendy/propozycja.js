const Discord = require("discord.js");
const moment = require("moment")
const agree = "526698392810815518"
const nieagre = "526698394543194112"
module.exports.run = async(bot, message, args) => {
  const incidentchannel = message.guild.channels.find("id", "827128678021464134");
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``827128678021464134``");
  const sayMessage = args.join(" ");
  message.delete().catch();
  const embed = new Discord.RichEmbed()
  .setTitle("Nowa Propozycja")
  .setDescription(`**Propozycja od:** ${message.author.tag} \n **Proponuje:** ${sayMessage}`)
  .setFooter(`${moment().format('DD.MM.YYYY')} `)
  .setTimestamp()

  let msg = await incidentchannel.send(embed)
  await msg.react(agree)
  await msg.react(nieagre)


 
};

module.exports.help = {
  name: "propozycja"
};
