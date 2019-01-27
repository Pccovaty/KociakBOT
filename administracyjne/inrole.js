const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {

    // Tries to get the first mentioned role or a role ID or a role name (role names are case sensitive)
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

    // If we can't find any role, then just default to the author's highest role
    if (!role) role = message.channel.send("Podaj ``ID``, ``Nazwe`` lub ``Oznacz`` role.")
     //message.member.highestRole; 
    
const emmbed = new Discord.RichEmbed()
    .setColor(role.hexColor)
    .setTitle(`Rola: ${role.name}`)
    .setDescription(`**Liczba osób która ma tą role:** ${role.members.size} \n **Kolor rangi ( w hex):** ${role.hexColor} \n **ID roli:** ${role.id} `)
    .addField(`Członkowie`, role.members.map(e => e.user.tag).join(", ").length >= 2048 ? "Za dużo osób posiada tę rolę" : role.members.map(e => e.user.tag).join(", "))
    message.channel.send(emmbed);


};
module.exports.help = {
    name:"inrole"
};
