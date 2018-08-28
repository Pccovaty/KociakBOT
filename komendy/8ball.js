const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
 const msg = await message.channel.send(":thinking:");
  if(!args[0]) return message.reply("A czy pytanie nie powinno kończyć się znakiem zapytania? (?)");
  let replies = ["Tak", "Nie", "Nie wiem", "Zapytaj później", "Chyba tak...", "Chyba nie...", "Być może", "Co to jest w ogóle za pytanie!?", "A jak myślisz?", "Moja odpowiedź brzmi nie"]

  let result = Math.floor((Math.random() * replies.length))
  let question = args.slice(1).join(" ");

  msg.delete();
  message.channel.send(`:8ball: | ${replies[result]}, **${message.author.tag}** `);
  message.react("452183703267835910");
}

module.exports.help = {
  name:"8ball"
}
