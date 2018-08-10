const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  const gildiaEmbed = new Discord.RichEmbed()
    .setColor("#0e0d0d")
    .setTitle("Gildia: Jedzenie")
    .addField("Założyciel/ka", "<@440135970097070082>", true)
    .addField("Data założenia:", "06.08.2018", true)
    .addField("Członkowie:", "``Anzu#3736`` ``๖̶̶̶ۣۣۜۜ͜ζ͜͡Słodziak 💞#9231`` ", true)
    .addField("Opis:", "Dla smakoszy", true)
    .addField("Wygasa dnia", "XX.XX.XXX", true)
    .addField("Kolor rangi", "#0e0d0d", true)
  message.channel.send(gildiaEmbed);

};
module.exports.help = {
  name: "gildiajedzenie"
};
