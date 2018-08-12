const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let osoba = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.channel.send(`**${message.author.username}**, uderzył(a) poduszką **${osoba}** \n https://nyanyan.it/upload/202203_85dph9ny12kgso64ztfixaqj0luwbe73vrcm.gif`);
    

};
module.exports.help = {
  name: "rzuc"
};


