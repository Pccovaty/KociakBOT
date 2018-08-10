const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  const msg = await message.channel.send("Ładowanie avatara...");
  const target = message.mentions.users.first() || message.author;

  const embed = new Discord.RichEmbed()
    .setDescription(`**${target.username}**`, "twój avatar")
    .setImage(target.displayAvatarURL)
    .setColor("#9b0090");

  message.channel.send(embed);
  msg.delete();
  message.react("452183703267835910");
};

module.exports.help = {
  name: "avatar"
};
