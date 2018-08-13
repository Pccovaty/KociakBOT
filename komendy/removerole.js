const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("Usage: kb!removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

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
