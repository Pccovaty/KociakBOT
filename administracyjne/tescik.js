const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    /*
        1) Use the messageReactionAdd and messageReactionRemove events to add/remove users roles
        2) Remove the awaitReactions() function as we won't need that anymore
        3) Customize the message a bit more to fit a general welcome channel
    */

    await message.delete().catch(O_o => {});

    const a = message.guild.roles.get('570864402622971908'); // gracz
    const b = message.guild.roles.get('570864388563664910'); // kolor
    const c = message.guild.roles.get('570864389662703646'); // kolor2

    const embed = new Discord.RichEmbed()
        .setTitle('Role do nadania')
        .setDescription(`
       
        Witaj na **${message.guild.name}**! Dodaj sobie role role
       🇦 ${a.toString()}
       🇧 ${b.toString()}
       🇨 ${c.toString()}
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
