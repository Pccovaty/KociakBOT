const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  message.delete();
  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription("<:Info:484996951515856906> Partnerem serwera jest:" + args.join(" "));

  message.channel.send(embed);
};
module.exports.help = {
  name: "partner"
};
