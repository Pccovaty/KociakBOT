// Require Packages
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    
    // Variables
    let servers = client.guilds.size; // Server Count
    let users = 0; // Start of user count
    let channels = client.channels.size; // Channel Count
    
    // This goes through every guild to grab an accurate memberCount;
    client.guilds.map(g => users += g.memberCount);
    
    // Form Embed
    const embed = new Discord.MessageEmbed()
        .setTitle('Serwerowe Statystyki')
        .addField('Serwer', servers, true)
        .addField('Użytkowników', users, true)
        .addField('Kanałów', channels, true);

    // Send Embed
    message.channel.send(embed);
    
}
module.exports.help = {
  name: "stats"
}
