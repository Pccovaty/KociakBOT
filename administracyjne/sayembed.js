const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  const sayMessage = args.join(" ");
  message.delete().catch();
  const embed = new Discord.RichEmbed()
  .setDescription(sayMessage)
  .setTimestamp()
  .setColor("RED")
  message.channel.send(embed);
};

module.exports.help = {
  name: "sayembed"
};
