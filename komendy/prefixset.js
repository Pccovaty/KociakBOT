const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
  message.react("452183703267835910");
  if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Nie nie nie!");
  if (!args[0] || args[0 === "help"]) return message.reply("Użycie ``--prefixset <tutaj podaj nowy prefix>``");

  const prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err);
  });

  const sEmbed = new Discord.RichEmbed()
    .setColor("#9b0090")
    .setTitle("Prefix ustawiono pomyślnie!")
    .setDescription(`prefix ustawiony! na ${args[0]}`);

  message.channel.send(sEmbed);

};

module.exports.help = {
  name: "prefixset"
};
