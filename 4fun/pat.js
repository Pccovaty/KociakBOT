const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {

var images = ["https://cdn.discordapp.com/attachments/424667806320033814/437807617965031424/unnamed_1.gif", "https://giphy.com/gifs/ARSp9T7wwxNcs.gif", "https://giphy.com/gifs/eyes-white-L2z7dnOduqEow", "https://cdn.glitch.com/5df641e3-8d98-4abb-9045-d5482434003a%2FJake_pat.gif?1524497996034", "https://media.tenor.com/images/cdc004bbbaba6f60d8e62a1f127516e0/tenor.gif"];
var rand = Math.floor(Math.random() * images.length);
var randomImage = images[rand];

const patEmb = new Discord.RichEmbed()
.setColor(0xA901DB)
.setImage(randomImage);

const user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if (!user) return message.reply("Oznacz proszę użytkownika").then(msg => {
          msg.delete(5000)
      })

message.channel.send(`**${message.author.tag}** pogłaskał(a) **${user.user.tag}**`, {embed: patEmb});


}
exports.help = {
    name:"pat"
}