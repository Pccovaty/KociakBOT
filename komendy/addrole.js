const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  message.react("452183703267835910");
  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "help") {
    message.reply("Użycie: kb!addrole <mention> <Rola>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Podaj role!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Nie znalazlem roli");

  if (rMember.roles.has(gRole.id)) return message.reply("Ten użytkownik ma już role **${gRole.name}**..");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Brawo, <@${rMember.id}> otrzymałeś role **${gRole.name}**`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Brawo <@${rMember.id}>, właśnie dostałeś(aś) role ${gRole.name}.`)
  }
}

module.exports.help = {
  name: "addrole"
}
