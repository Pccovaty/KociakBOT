const Discord = require("discord.js");
 module.exports.run = async(bot, message, args) => {
    
  let osoba = message.mentions.users.first();
  let embed = new Discord.RichEmbed()
  .setDescription(`${message.author.username}#${message.author.discriminator} przytulił(a) ${osoba.username}#${osoba.discriminator} ❤`)
   .setColor("#ffffff")
  .setImage("https://media1.tenor.com/images/074d69c5afcc89f3f879ca473e003af2/tenor.gif?itemid=4898650")
  message.channel.send(embed);
}
 module.exports.help = {
  name:"hug"
}
