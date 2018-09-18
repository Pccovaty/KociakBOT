const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  message.delete();
  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription("<:Info:484996951515856906> Partnerem(ką) serwera jest(są):" + args.join(" "));

  message.channel.send({embed});
  message.react("452183703267835910");
};
module.exports.help = {
  name: "partner"
};
