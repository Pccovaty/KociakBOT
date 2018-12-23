const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("Użycie: <removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Nie znaleziono użytkownika bro.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Podaj role...");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Nie znalazłem roli o takiej nazwie.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Nie ma takiej roli...");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, straciłeś(aś) ${gRole.name} :c.`)
  }catch(e){
    message.channel.send(`Niestety<@${rMember.id}>, usunięto ci role ${gRole.name}. Moze kiedys znowu ją odzyskasz :).`)
  }
}

module.exports.help = {
  name: "removerole"
}
