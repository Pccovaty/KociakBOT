const Discord = require('discord.js');
const arraySort = require('array-sort');
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {

    let ban = await message.guild.fetchBans().catch(error => {
        return message.channel.send('Sory, nie masz permisji do zobaczenia banów');
    });

    ban = ban.array();
    let users = message.guild.fetchBans().id;

    arraySort(ban, 'size', {
        reverse: true
    });

    let possiblebans = [
        
    ];
    ban.forEach(function(ban) {
        possiblebans.push([`**${ban.username} | ${ban.id} \n** `]);
    })

    const embed = new Discord.RichEmbed()
        .setColor(0xCB5A5E)
        .setDescription("Użytkownik | ID Użytkwonika")
        .addField('Lista banów:', `${possiblebans} \n `);
    message.channel.send(embed)
};

module.exports.help = {
    name: "banlist"
}