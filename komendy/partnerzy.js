const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  message.delete();
  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription("" + args.join(" "));

  message.channel.send({embed});
  message.react("452183703267835910");
};
module.exports.help = {
  name: "partnerzay"
};
