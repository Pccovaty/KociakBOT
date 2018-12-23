const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  const msg = await message.channel.send("Ładowanie aktualizacji...");

  const embed = new Discord.RichEmbed()
  .setTitle("Nowości w bocie WellsBOT Beta")
  .setColor("RANDOM")
  .setFooter(`Komenda użyta przez: ${message.author.tag}`, `${message.author.avatarURL}`)
  .setDescription("Dodajemy wiele poprawek, juz niebawem będziecie wiedzieć jakie!")
  message.channel.send(embed);
  msg.delete();
  message.react("524964849181130782")
};

module.exports.help = {
  name: "news"
};


