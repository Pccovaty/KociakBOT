  const Discord = require("discord.js");
const fs = require("fs-extra");
let GifKiss = JSON.parse(fs.readFileSync("./app/gifs.json", "utf8"));
 module.exports.run = async(bot, message, args) => {
 
    // jeśli osoba nikogo nie oznaczy, odpowiada ją wiadomością.
      if (message.mentions.users.size < 1) return message.reply("**you need to mention someone**");
    // jeśli osoba oznaczy siebie odpowiada jej wiadomością
      if (message.mentions.users.first().id == message.author.id) return message.reply("**Are you... okay?...**")
       // 'gifs.kiss" pochodzi z json, Math.floor i Math.random() wybiera randomowy link
      var gifImage = GifKiss.kiss[Math.floor(Math.random()*gifs.kiss.length)];
      const embed = new Discord.RichEmbed()
          .setDescription(`@${message.author.tag} is kissing @${message.mentions.users.first().tag}`)
          .setImage(gifImage)
      message.channel.send({embed});
 
 };
 module.exports.help = {
  name:"pocałuj"
}
  
    
 
