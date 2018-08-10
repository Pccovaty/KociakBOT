const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");

module.exports.run = async(bot, message, args) => {
  //--pay @isatisfied 59345

  if (!coins[message.author.id]) {
    return message.reply("Nie masz żadnych monet!");
  }

  const pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if (!coins[pUser.id]) {
    coins[pUser.id] = {
      coins: 0
    };
  }
  message.react("452183703267835910");
  const pCoins = coins[pUser.id].coins;
  const sCoins = coins[message.author.id].coins;

  if (sCoins < args[1]) return message.reply("Nie masz tyle monet!");

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`Pomyślnie dodano użytkownikowi ${pUser} ${args[1]} monet.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err);
  });

};

module.exports.help = {
  name: "dodaj"
};
