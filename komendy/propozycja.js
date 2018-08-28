const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  const reason = args.join(" ");

  const sEmbed = new Discord.RichEmbed()
    .setDescription("Propozycja")
    .setColor("#10ff00")
    .addField("Użytkownik proponujący", message.author.username)
    .addField("Treść", reason || "Brak");

  message.channel.send("Propozycja została poprawnie wysłana i pojawiła się na kanale <#476730302283120643>");

  const sRoom = message.guild.channels.find("name", "propozycje");
  if (!sRoom) return message.channel.send("Nie znaleziono kanału #propozycje");

  sRoom.send(sEmbed);

};

module.exports.help = {
  name: "propozycja"
};
