const Discord = require("discord.js");

module.exports.run = async (bot, message, args, msg) => {
    message.delete();
    let role = message.guild.roles.find(role => role.name === 'Uzytkownicy');
    let rolee = message.guild.roles.find(role => role.name === 'Nowy(a)');
    if (message.channel.name !== '523602318168686602') return message.reply('Musisz dołączyć na kanał <#523602318168686602>');
    message.member.addRole(role);
    message.member.removeRole(rolee)
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Twoje konto zostało już zweryfikowane!')
            msg.delete({timeout: 10000})
        return msg.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Twoje konto zostało pomyślnie zweryfikowane.')
        return msg.channel.send((verifyEmbed)).then(msg => msg.delete(10000))
         
        
    }
}

module.exports.help = {
    name: 'verify',
    description: 'musisz mieć zweryfikowaną rolę'
};
