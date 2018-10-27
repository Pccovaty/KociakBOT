const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
  const bicon = bot.user.displayAvatarURL;
  const pomocembed = new Discord.RichEmbed()
    .setDescription("Lista komend w bocie ♕ Our Community ♕")
    .setColor("#9b0090")
    .setThumbnail(bicon)
    .addField("Komendy administracyjne (10):", "**-softban <@menton> <czas (w s/m/h/d)> <powód>** - wycisza użytkownika \n **-unmute <@mention>** - odcisza użytkownika \n **-kick <@mention>** - wyrzuca użytkownika z serwera \n **-ban <@mention>** - wyrzuca na zawsze użytkownika z serwera \n **-clear <ilość wiadomości>** - usuwa X wiadomomości \n **-warn <@mention>** - ostrzega użytkownika \n **-warnlevel <@mention>** - pokazuje ile dany użytkownik ma ostrzeżeń \n **-dodaj <@mention> <ile monet>** - dodaje X monet do danego użytkownika \n **-addrole <Mention> <rola>** - Dodaje danemu użytkownikowi daną rangę \n **-removerole <Mention> <rola>** - usuwa danemu użytkownikowi daną rangę")
    .addField("Komendy informacyjne (7):", "**-profil <@mention>** pokazuje profil użytkownika \n **-ping** - pokazuje aktualny ping \n **-avatar <@mention>** - pokazuje użytkownika avatar \n **-botinfo** - pokazuje dane bota \n **-serverinfo** - pokazuje dane serwera \n **-monety** pokazuje stan twoich monet \n **-developerzy** - pokazuje developerów bota KociakBOT")
    .addField("Komendy inne (6):", "**-say** - wysyła to samo \n **-prefix** - pokazuje aktualny prefix \n **-8ball** - zapytaj magiczną kulkę o wszystko! (w budowie!) \n **-dog** - wysyła losowe zdjęcie psa \n **-cat** - wysyła losowe zdjęcie kota \n **-rzuc <mention>** - rzuca w danego uzytkownika poduszką")
    .addField("Komendy gildijne (2):", "**-aktualnegildie** - pokazuje aktualne gildie na serwerze \n **-gildiaJedzenie** pokazuje opis gildii jedzenie")
    .addField("Komendy Gif i zdjęcia (5):", "**-hug <mention>** - przytula daną osobę \n **-kiss <mention>** - całuję daną osobę \n **-slap <mention>** - uderza daną osobę \n **-facepalm** - czujesz zażenowanie i wysyła gif facepalm \n **-panda** - wysyła gif z pandą ")
    .setFooter("Prefix na wszystkie powyzsze komendy to <");
    message.react("452183703267835910");
  message.author.send(pomocembed);
  message.channel.send("📔 | Lista komend została wysłana pomyślnie na prywatnej wiadomości")

};

module.exports.help = {
  name: "pomoc"
};
