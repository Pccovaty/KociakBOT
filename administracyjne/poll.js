const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");

  if (!args[0]) return message.channel.send("Prawidłowe użycie to: <ankieta [pytanie]");

  const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTitle("Ankieta rozpoczęta!")
    .setDescription(`**${args.join(" ")}**`)
    .setTimestamp()
    .setFooter(`Ankieta utworzona przez: ${message.author.username}`, `${message.author.avatarURL}`);

  const msg = await message.channel.send(embed);

  await msg.react("526698392810815518");
  await msg.react("526698395725987850");
  await msg.react("526698394543194112");

  message.delete({timeout: 1000});

  
};
module.exports.help = {
  name: "ankieta"
};
