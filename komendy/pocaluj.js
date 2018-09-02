const Discord = require("discord.js");
const fs = require("fs");
const gifs = require("./gifs.json");

 module.exports.run = async(bot, message, args) => {
 
    // jeśli osoba nikogo nie oznaczy, odpowiada ją wiadomością.
      if (message.mentions.users.size < 1) return message.reply("**Musisz oznaczyć kogoś**");
    // jeśli osoba oznaczy siebie odpowiada jej wiadomością
      if (message.mentions.users.first().id == message.author.id) return message.reply("**Wszystko... okej?...**")
       // 'gifs.kiss" pochodzi z json, Math.floor i Math.random() wybiera randomowy link
      var gifImage = gifs.kiss[Math.floor(Math.random()*gifs.kiss.length)];
      const embed = new Discord.RichEmbed()
          .setDescription(`**${message.author.tag}** pocałował(a) **${message.mentions.users.first().tag}**`)
          .setImage(gifImage)
      message.channel.send({embed});
 
 };
 module.exports.help = {
  name:"pocałuj"
}
  
    
 
