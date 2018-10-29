const Discord = require("discord.js");
 module.exports.run = async(bot, message, args) => {
  message.delete();
  const embed = new Discord.RichEmbed()
    .setTitle("Nowe Partnerstwo!")
    .setColor('RANDOM')
    .setDescription("" + args.join(" "));
   message.channel.send({embed});
};
module.exports.help = {
  name: "partnerzy"
};
