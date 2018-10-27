const Discord = require("discord.js"); //importujesz discorda

module.exports.run = async(bot, message, args) => { //exportujesz komendę
   if (!(message.author.id === "340557425511759892" || message.author.id === "333529845025865728")) return message.channel.send(":lock: | Dostęp zablokowany, Tą komendę może używać tylko osoba z rolą Zarząd lub Właściciel.");
//     if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":lock: Dostęp zablokowany! Nie posiadasz roli z uprawnieniami ``MANAGE_MESSAGES``."); // jeżeli wiadomość.członekwysyłający.maUprawnienie("ZARZĄDZANIE WIADOMOŚCIAMI") === false, odpowiedz :lock: Dostęp zablokowany! Nie posiadasz roli z uprawnieniami ``MANAGE_MESSAGES``.
    const target = message.mentions.users.first() || message.author; //bierzesz cel komendy
    const discord = new Discord.RichEmbed() //nowy richembed i formatowanie go
    .setTitle(`Pomyślnie awansowano użytkownika: ${target.tag}`)
    .setColor("RANDOM")
    .setImage("https://i.ytimg.com/vi/hAFhmUL9ffc/maxresdefault.jpg")
    .setFooter(`Awansowany przez: ${message.author.tag}`, `${message.author.avatarURL}`)
    
    message.channel.send(discord) //wyslanie wiadomosci

    
}

module.exports.help = {
  name:"awans"
}
