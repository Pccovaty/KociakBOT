const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  const dogembed = new Discord.RichEmbed()
    .setTitle("Nowe partnerstwo!")
    .addField("")
    .setFooter("Partner: ");

  message.channel.send(dogembed);
};
module.exports.help = {
  name: "5"
};
