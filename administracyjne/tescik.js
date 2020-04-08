const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    /*
        1) Use the messageReactionAdd and messageReactionRemove events to add/remove users roles
        2) Remove the awaitReactions() function as we won't need that anymore
        3) Customize the message a bit more to fit a general welcome channel
    */

    await message.delete().catch(O_o => {});

    const a = message.guild.roles.get('697382703179366461'); // gracz
    const b = message.guild.roles.get('697382719289819207'); // kolor
    const c = message.guild.roles.get('697382731390124063'); // kolor2

    const embed = new Discord.RichEmbed()
        .setTitle('Role do nadania')
        .setDescription(`
       
        Witaj na **${message.guild.name}**! Dodaj sobie role role
     
       `)
        .setColor(0xdd9323)
        .setFooter(`Serwerowe ID: ${message.guild.id}`);

    message.channel.send(embed).then(async msg => {

        await msg.react('🇦');
        await msg.react('🇧');
        await msg.react('🇨');
    });
};

module.exports.help = {
    name: 'test333'
};
