const Discord = require("discord.js"); //importujesz discorda

module.exports.run = async(bot, message, args) => { //exportujesz komendę
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":lock: Dostęp zablokowany! Nie posiadasz roli z uprawnieniami ``MANAGE_MESSAGES``."); // jeżeli wiadomość.członekwysyłający.maUprawnienie("ZARZĄDZANIE WIADOMOŚCIAMI") === false, odpowiedz :lock: Dostęp zablokowany! Nie posiadasz roli z uprawnieniami ``MANAGE_MESSAGES``.
    const target = message.mentions.users.first() || message.author; //bierzesz cel komendy
    const discord = new Discord.RichEmbed() //nowy richembed i formatowanie go
    .setTitle(`Pomyślnie zdegradowano użytkownika: ${target.tag}`)
    .setColor("RANDOM")
    .setImage("https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/b/b7/I%27m_not_a_psycho_for_liking_elsa_granhiert_stop.gif/revision/latest?cb=20170807063758")
    .setFooter(`Zdegradowany przez: ${message.author.tag}`, `${message.author.avatarURL}`)
    
    message.channel.send(discord) //wyslanie wiadomosci

    
}

module.exports.help = {
  name:"degrad"
}
