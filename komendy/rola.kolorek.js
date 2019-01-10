const Discord = require("discord.js");

exports.run = async(bot, message, args) => {
  


if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Nie posiadasz permisji by zmieniać kolorki XD!").then(msg => msg.delete(6000));
  

let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

let color = args.slice(1).join(" ");
if(!color) return message.channel.send("Podaj kolorek: **Przykład:** ``4774392`` ``#48d9f8``");

await role.setColor(color).catch(error => message.channel.send(`Error: ${error}`));
await message.channel.send(`zmieniono kolor rangi **${role.name}** na: ${role.color}`).catch(error => message.channel.send(`Error: ${error}`));
};
exports.help = {
    name:"rolecolor"
}