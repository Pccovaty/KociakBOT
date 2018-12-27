const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {

var images = ["https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif", "https://media1.tenor.com/images/5845f40e535e00e753c7931dd77e4896/tenor.gif", "https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif", "https://media1.tenor.com/images/6db54c4d6dad5f1f2863d878cfb2d8df/tenor.gif", "https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif", "https://media1.tenor.com/images/18474dc6afa97cef50ad53cf84e37d08/tenor.gif", "https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif", "https://media1.tenor.com/images/074d69c5afcc89f3f879ca473e003af2/tenor.gif", "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif", "https://media1.tenor.com/images/45b1dd9eaace572a65a305807cfaec9f/tenor.gif", "https://media1.tenor.com/images/460c80d4423b0ba75ed9592b05599592/tenor.gif", "https://media1.tenor.com/images/949d3eb3f689fea42258a88fa171d4fc/tenor.gif", "https://media1.tenor.com/images/54e97e0cdeefea2ee6fb2e76d141f448/tenor.gif", "https://media1.tenor.com/images/8055f0ab4e377e35f5884dfe3e3fec52/tenor.gif", "https://media1.tenor.com/images/b4b95730d9967a97bc54457f928f1181/tenor.gif", "https://media1.tenor.com/images/6e6b4714e4078946d84b4602992cc363/tenor.gif", "https://media.tenor.com/images/9c4a6d3cb294d01177a5b1e1544a5b9b/tenor.gif", "https://media1.tenor.com/images/1ae04f33233c2dce7c1979f70ae2d2ad/tenor.gif", "https://media1.tenor.com/images/caeb72a8cd1e5e0fb072df71db450de8/tenor.gif", "https://media1.tenor.com/images/801eb053ec7056d1a30354ca8919a5dd/tenor.gif", "https://media1.tenor.com/images/725b5db80ee04a28ae1bb6bb8f89ffd3/tenor.gif", "https://media1.tenor.com/images/432f76096f2de4191a7b949f6dea0b41/tenor.gif",];
var rand = Math.floor(Math.random() * images.length);
var randomImage = images[rand];

const patEmb = new Discord.RichEmbed()
.setColor(0xA901DB)
.setImage(randomImage);
const user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if (!user) return message.reply("Oznacz proszę użytkownika").then(msg => {
          msg.delete(5000)
      })

message.channel.send(`**${message.author.tag}** przytulił(a) **${user.user.tag}**`, {embed: patEmb});

}
exports.help = {
    name:"hug"
}