const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let osoba = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let banEmbed = new Discord.RichEmbed()
    .setDescription("Wojna na poduszki, rozpoczęta")
    .setColor("#bc0000")
    .addField(`*${message.author.username}** uderzył(a) poduszką ${osoba}`)

    message.channel.send(banEmbed)
    

};
module.exports.help = {
  name: "rzuc"
};


