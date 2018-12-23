const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send(":x: Błąd | Nie posiadasz roli ``Administracja``");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: Dostęp zablokowany! Nie posiadasz roli z uprawnieniami ``ADMINISTRATOR``");

  if (!args[0]) return message.channel.send("Prawidłowe użycie to: <ankieta [pytanie]");

  const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTitle("Ankieta rozpoczęta!")
    .setDescription(`**${args.join(" ")}**`)
    .setFooter(`Ankieta utworzona przez: ${message.author.username}`, `${message.author.avatarURL}`);

  const msg = await message.channel.send(embed);

  await msg.react("👍");
  await msg.react("👎");
  await msg.react("🤷");

  message.delete({timeout: 1000});

  message.channel.send({embed});
};
module.exports.help = {
  name: "ankieta"
};
