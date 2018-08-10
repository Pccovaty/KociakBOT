const Discord = require("discord.js");
const snek = require("snekfetch");

module.exports.run = async(bot, message, args) => {
  const {body} = await snek.get("http://thecatapi.com/api/images/get");

  const dogembed = new Discord.RichEmbed()
    .attachFile({attachment: body, name: "cat.jpg"})
    .setColor("#9b0090")
    .setTitle("Meow :cat:")
    .setImage("attachment://cat.jpg");

  message.channel.send(dogembed);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "cat"
};