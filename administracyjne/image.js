const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  const sayMessagee = args.join(" ");
  message.delete().catch();
  if (!args[0]) return message.channel.send("Prawidłowe użycie to: ``!!imageembed (link do zdjęcia)``");
  const embed = new Discord.RichEmbed()
  .setImage(sayMessagee)
  .setColor("RED")
  message.channel.send(embed);
};

module.exports.help = {
  name: "imageembed"
};
