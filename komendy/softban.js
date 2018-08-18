const Discord = require("discord.js");
const fs = module.require("fs");

module.exports.run = async(bot, message, args) => {
  message.react('👌')
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nie masz permisji do komendy ``mute``");

  const toMute = await message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!toMute) return message.channel.send("Nie podałeś/aś nazwy użytkownika ani identyfikatora");

  if (toMute.id === message.author.id) return message.channel.send("Nie możesz siebie wyciszyć.");
  if (toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("Nie możesz wyciszyć członka, który jest wyższy lub ma taką samą rolę jak ty.");

  const role = message.guild.roles.find(r => r.name === "Muted");

  if (toMute.roles.has(role.id)) return message.channel.send("Ten użytkownik jest już wyciszony");

  bot.mutes[toMute.id] = {
    guild: message.guild.id,
    time: Date.now() + parseInt(args[1]) * 1000

  };
  await toMute.addRole(role);

  fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
    if (err) throw err;

  });
  message.channel.send(`Pomyślnie wyciszono użytownika ${toMute} na X czasu`);
  return;
};

module.exports.help = {
  name: "softban"
};
