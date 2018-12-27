const Discord = require('discord.js');
const moment = require('moment');
exports.run = async (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission("SEND_MESSAGES")) return message.author.send('Nie mam uprawnień do wysyłania wiadomości. Proszę włączyć wysyłanie wiadomości do mojej roli!');

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setDescription("Wygrałeś!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Wynik:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842")
            .setFooter(`${moment().calendar()}  |  ${message.author.tag}`, `${message.author.avatarURL}`);
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setDescription('Przegrałeś!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Wynik:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842")
            .setFooter(`${moment().calendar()}  |  ${message.author.tag}`, `${message.author.avatarURL}`);
        message.channel.send(embed);
    }

}


exports.conf = {
    aliases: []
};

exports.help = {
    name: 'slots',
    description: 'Slot Machine',
    usage: 'slots'
} 