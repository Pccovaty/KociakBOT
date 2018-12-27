const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
  const {body} = await superagent
    .get("https://random.dog/woof.json");

  const dogembed = new Discord.RichEmbed()
    .setColor("#9b0090")
    .setTitle("Dog :dog:")
    .setImage(body.url);

  message.channel.send(dogembed);
  message.react("452183703267835910");
};

module.exports.help = {
  name: "dog"
};