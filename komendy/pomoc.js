const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  const bicon = bot.user.displayAvatarURL;
  const pomocembed = new Discord.RichEmbed()
    .setDescription("Lista komend w bocie KociakBOT")
    .setColor("#9b0090")
    .setThumbnail(bicon)
    .addField("Komendy administracyjne (10::", "**-mute <@menton>** - wycisza użytkownika \n **-unmute <@mention>** - odcisza użytkownika \n **-kick <@mention>** - wyrzuca użytkownika z serwera \n **-ban <@mention>** - wyrzuca na zawsze użytkownika z serwera \n **-clear <ilość wiadomości>** - usuwa X wiadomomości \n **-warn <@mention>** - ostrzega użytkownika \n **-warnlevel <@mention>** - pokazuje ile dany użytkownik ma ostrzeżeń \n **-dodaj <@mention> <ile monet>** - dodaje X monet do danego użytkownika \n **-addrole <Mention> <rola>** - Dodaje danemu użytkownikowi daną rangę \n **-removerole <Mention> <rola>** - usuwa danemu użytkownikowi daną rangę")
    .addField("Komendy informacyjne:", "**-profil <@mention>** pokazuje profil użytkownika \n **-ping** - pokazuje aktualny ping \n **-avatar <@mention>** - pokazuje użytkownika avatar \n **-botinfo** - pokazuje dane bota \n **-serverinfo** - pokazuje dane serwera \n **-monety** pokazuje stan twoich monet \n **-developerzy** - pokazuje developerów bota KociakBOT")
    .addField("Komendy inne:", "**-say** - wysyła to samo \n **-prefix** - pokazuje aktualny prefix \n **-8ball** - zapytaj magiczną kulkę o wszystko! (w budowie!) \n **-dog** - wysyła losowe zdjęcie psa \n **-cat** - wysyła losowe zdjęcie kota \n **-rzuc <mention>** - rzuca w danego uzytkownika poduszką")
    .addField("Komendy gildijne (2):", "**-aktualnegildie** - pokazuje aktualne gildie na serwerze \n **-gildiaJedzenie** pokazuje opis gildii ,,Jedzeni'' ")
    .setFooter("Prefix na wszystkie powyzsze komendy to ``kb!``")
    message.react("452183703267835910");
  message.author.send(pomocembed);
  message.channel.send("Komendy zostały wysłane pomyślnie na prywatnej wiadomości")

};

module.exports.help = {
  name: "pomoc"
};
