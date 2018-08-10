const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  const skEmbed = new Discord.RichEmbed()
    .setColor("#9b0090")
    .setTitle("Sklep serwerowy")
    .addField("VIP 7 dni", "2000 💸 (monet)", true)
    .addField("VIP 30 dni", "4000 💸 (monet)", true)
    .addField("VIP na zawsze", "8000 💸 (monet)", true)
    .addField("SVIP 7 dni", "10000 💸 (monet)", true)
    .addField("SVIP 30 dni", "15000 💸 (monet)", true)
    .addField("SVIP na zawsze", "25000 💸 (monet)", true)
    .addField("Własny kolorek na 7 dni", "2000 💸 (monet)", true)
    .addField("Własny kolorek na 30 dni", "3500 💸 (monet)", true)
    .addField("Własny kolorek na zawsze", "6000 💸 (monet)", true)
    .addField("Gildia", "25000 💸 (monet)", true)
    .addField("Promocja! (promocja trwa do 01.08.2018 12:00)", "SVIP + Własny kolor na zawsze 20000 💸 (monet)", true)
    .addField("Własna kategoria i 3 kanały", "15000 💸 (monet)")
    .addField("Chciałbyś coś kupić ze sklepu?", "oznacz ``@Support Team!``")
    .setFooter("Aby sprawdzić ile się ma 💸 (monet serwerowych) to wystarczy wpisać komende --monety");

  message.channel.send(skEmbed);
  message.react("452183703267835910");
};
module.exports.help = {
  name: "sklep"
};
