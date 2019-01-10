const Discord = require("discord.js");

module.exports.run = async (bot, message, args, messages) => {

  const deleteCount = parseInt(args[0], 10);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No no no.");
    if (!args[0] || args[0 == "help"]) return message.reply(`!!clear 50 i siemanko xD"`);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Podaj ziomek liczbe XD");
   
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  
  let purgeEmbed = new Discord.RichEmbed()
    .setAuthor("♻️ Akcja | Usuwanie wiadomości")
    .setColor("Black")
    .setDescription(`**Moderator:** ${message.author.tag} \n **Usunął łącznie wiadomości:** ${args[0]}`)
    let purgeChannel = message.guild.channels.find(`id`, "531434222217592859");
    if(!purgeChannel) return message.channel.send("Nie znalazlem kanalu z id ``531434222217592859``");

    purgeChannel.send(purgeEmbed);

  }

  module.exports.help = {
      name:"clear"
  }