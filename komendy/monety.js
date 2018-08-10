const Discord = require("discord.js");
const coins = require("../coins.json");

module.exports.run = async(bot, message, args) => {
//--monety
  if (!coins [message.author.id]) {
    coins[message.author.id] = {
      coins: 0
    };
  }
  message.react("452183703267835910");
  const uCoins = coins[message.author.id].coins;

  const coinembed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9b0090")
    .addField("Waluta Serwerowa: 💸", uCoins);
  //.then(msg => {msg.delete(5000)});

  message.channel.send(coinembed);
};
module.exports.help = {
  name: "monety"
};
