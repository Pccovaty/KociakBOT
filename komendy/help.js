const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
  message.channel.send("Poprawne użycie to ``<pomoc`` <--- zmienono komende")

};

module.exports.help = {
  name: "help"
};
