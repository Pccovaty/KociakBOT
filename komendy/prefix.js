const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
  message.react("452183703267835910");
  const prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  const pEmbed = new Discord.RichEmbed()
    .setColor("#9b0090")
    .setTitle("Aktualny prefix bota")
    .setDescription(`**${prefixes[message.guild.id].prefixes}**`);

  message.channel.send(pEmbed);
};
module.exports.help = {
  name: "prefix"
};
