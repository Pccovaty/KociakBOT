const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  const incidentchannel = message.guild.channels.find("name", "rola-usun-dodaj");
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. ``rola-usun-dodaj``");
  //!addrole @andrew Dog Person
  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");
  if (args[0] == "help") {
    message.reply("Użycie: <addrole <mention> <Rola>");
    return;
  }
  let users = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!users) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Podaj role!").then(msg => { msg.delete(5000)})
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Nie znalazlem roli").then(msg => { msg.delete(5000)})
  const emeeed = new Discord.RichEmbed()
  .setDescription(`Użytkownik ${users} otrzymał role **${gRole.name}** lecz ma wyłączone DM.`)
  .setColor("#b275f3")
  message.delete()
  const emeede = new Discord.RichEmbed()
  .setDescription(`${users} otrzymałeś(aś) role **${gRole.name}**`)
  .setColor("#b275f3")
  if (users.roles.has(gRole.id)) return message.reply(`Ten użytkownik ma już role **${gRole.name}**..`).then(msg => { msg.delete(5000)
  });
  await (users.addRole(gRole.id));
  const emeed = new Discord.RichEmbed()
  .setDescription(`Użytkownik ${users} otrzymał role **${gRole}**`)
  .setColor("#b275f3")
  message.channel.send("Rola została pomyślnie dodana!").then(msg => {msg.delete(5000)})
incidentchannel.send(emeed)
  try {
    await users.send(emeede)
  } catch (e) {
    console.log(e.stack);
    incidentchannel.send(emeeed)
  }
}


module.exports.help = {
  name: "role"
}
