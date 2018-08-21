const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  const dogembed = new Discord.RichEmbed()
    .setTitle("Nowe partnerstwo!")
    .addField("» Centrum chillu « \n \n • Co u nas znajdziesz? •  \n \n ⭐ Nowoczesne projekty ⭐ \n ⭐ miłą i pomocną administrację ⭐ \n ⭐ Częste konkursy ⭐ \n ⭐ Możliwość pisania własnego bloga ⭐ \n ⭐ aktywnych użytkowników ⭐ \n ⭐ ekonomię ⭐ \n I wiele wiele więcej... \n \n 💖 Wbij i przekonaj się już dziś 💖 \n \n Ps: Co 50 osób odbywa się konkurs psc, więc warto zostać i chwilę poczekać 😉", "Centrum chillu | https://discord.gg/EzUteZU")
    .setFooter("Partner: Lexiu#9017");

  message.channel.send(dogembed);
};
module.exports.help = {
  name: "centrum"
};
