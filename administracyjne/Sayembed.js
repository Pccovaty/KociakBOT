const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  const napisz = args.join(" ");

  const embeed = new Discord.RichEmbed()
  .addField("Taryfikator kar", napisz) 

.setColor("Green") 


  message.channel.send(embeed);
};

module.exports.help = {
  name: "sayembed"
};
