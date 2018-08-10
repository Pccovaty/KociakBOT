const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  const bicon = bot.user.displayAvatarURL;
  const botaembed = new Discord.RichEmbed()
    .setDescription("Lista komend w bocie KociakBOT")
    .setColor("#9b0090")
    .setThumbnail(bicon)
    .addField("Komendy z kategorii administracyjne", "``dodaj`` ``mute`` ``unmute`` ``kick`` ``ban`` ``clear`` ``warn`` ``warnlevel``")
    .addField("Komendy z kategorii informacjyne", "``profil`` ``ping`` ``pong`` ``jakzarabiac`` ``avatar`` ``botinfo`` ``serverinfo`` ``monety`` ``developerzy``  ")
    .addField("Komendy z kategorii różne", "``say`` ``prefix`` ``8ball (w budowie)``   ``dog`` ``cat``")
    .addField("Komendy z kategorii Gildie", "``aktualnegildie`` ")
    .addField("Globalny prefix", "``<``");
    message.react("452183703267835910");
  message.channel.send(botaembed);

};

module.exports.help = {
  name: "help"
};
