const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  return message.channel.send(` **${message.author}** potrzebuje pilnie pomocy! <@&441592991115640862> `);

};
module.exports.help = {
  name: "pomocy"
};