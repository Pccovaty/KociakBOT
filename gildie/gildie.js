const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  const sicon = message.guild.iconURL;
  const aktualnerembed = new Discord.RichEmbed()
    .setDescription("Aktualnie Gildie:")
    .setColor("#9b0090")
    .setThumbnail(sicon)
    .addField("1. Brak", "Brak")
    .addField("2. Brak", "Brak")
    .addField("3. Brak", "Brak")
    .addField("4. Brak", "Brak");
  // .addField("1. TeamBywa", "--gildiaBywa")
  message.channel.send(aktualnerembed);
};
module.exports.help = {
  name: "aktualnegildie"
};
