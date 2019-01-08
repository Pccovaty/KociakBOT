const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {

var images = ["https://media.tenor.com/images/36b1fe2b4515135880da9c1ec7a6d182/tenor.gif"];
var rand = Math.floor(Math.random() * images.length);
var randomImage = images[rand];

const patEmb = new Discord.RichEmbed()
.setColor(0xA901DB)
.setImage(randomImage);

const user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if (!user) return message.reply("Oznacz proszę użytkownika").then(msg => {
          msg.delete(5000)
      })

message.channel.send(`**${message.author.tag}** Zabił(a) **${user.user.tag}**`, {embed: patEmb});

}
exports.help = {
    name:"kill"
}
