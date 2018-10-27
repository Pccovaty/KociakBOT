const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  message.channel.send("aby zarabiać serwerową walute wystarczy że będziesz aktywny/a na kanale <#435686053408538626> bądź innym ``za 1 wiadomość dostajesz 1 monete``");
  message.react("452183703267835910");

};
module.exports.help = {
  name: "jakzarabiac"
};
