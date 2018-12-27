const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");

  if (!args[0]) return message.channel.send("Prawidłowe użycie to: <głosowanie [pytanie]");

  const embed = new Discord.RichEmbed()
    .setColor("#008dff")
    .setTitle("Głosowanie rozpoczęte!")
    .setDescription(`**${args.join(" ")}**`)
    .setTimestamp()
    .setFooter(` Głosowanie utworzone przez:  ${message.author.tag}`, `${message.author.avatarURL}`)

  let msg = await message.channel.send(embed);

  await msg.react("452183703267835910");
  await msg.react("437346453615280130");

  message.delete({timeout: 1000});
};
module.exports.help = {
  name: "glosowanie"
};