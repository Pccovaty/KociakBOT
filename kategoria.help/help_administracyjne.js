const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
  const embeeed = new Discord.RichEmbed()
  .setTitle("Komendy administracyjne:")
  .setColor("RED")
  .setTimestamp()
  .setDescription(":black_small_square:  ``!!kick <@user> <powód>`` - wyrzuca użytkownika z serwera  \n \n :black_small_square:  ``!!ban <@user> <powód>`` - banuje użytkownika na serwerze \n \n  :black_small_square:  ``!!clear <ilość wiadomości>`` - Usuwa X wiadomości \n \n :black_small_square: ``!!dodaj <@user> <rola>`` - Dodaje użytkownikowi daną role \n \n :black_small_square: ``!!usun <@user> <rola>`` - Odbiera użytkownikowi daną role \n \n :black_small_square:  ``!!say <treść>`` - Wysyła to samo \n \n :black_small_square:  ``!!sayembed <treść>`` - Wysyła to samo tylko że w tabelce")
  .setFooter(`Komenda użyta przez: ${message.author.tag}`)
  const fun = new Discord.RichEmbed()
  .setTitle("Komendy 4fun:")
  .setColor("GREEN")
  .setTimestamp()
  .setDescription(":black_small_square: ``!!8ball <treść>`` - Zapytaj magiczną kulke o wszystko! \n \n :black_small_square: ``!!slots`` - zabawa w hazard \n \n :black_small_square: ``!!cat`` - wysyła losowe zdjęcie kota \n \n :black_small_square: ``!!dog`` - wysyła losowe zdjęcie psa \n \n :black_small_square: ``!!hastebin <treść>`` - Wysyła treść na strone hastebin.com \n \n :black_small_square: ``!!hug <@user>`` - Przytula daną osobe \n \n :black_small_square: ``!!kiss <@user>`` - Całuje daną osobe \n \n :black_small_square: ``!!pat <@user>`` - Głaszcze daną osobe \n \n :black_small_square: ``!!ping`` - Pokazuje twój aktualny ping  ")
  .setFooter(`Komenda użyta przez: ${message.author.tag}`)
  const zabawa = new Discord.RichEmbed()
  .setTitle("Komendy zabawa:")
  .setColor("RED")
  .setTimestamp()
  .setDescription("zabawowo")
  .setFooter(`Komenda użyta przez: ${message.author.tag}`)
  
  const help = new Discord.RichEmbed()
  .setTitle("Lista Kategorii:")
  .setTimestamp()
  .setColor("PURPLE")
  .setDescription("Aby zobaczyć pełną liste komend danej kategorii uzyj ``!!help [kategoria]``. \n \n ``administracyjne (8)`` \n ``4fun (9)`` \n ``Informacyjne (7)``")
  const informacyjne = new Discord.RichEmbed()
  .setTitle("komendy informacyjne:")
  .setTimestamp()
  .setColor("BLUE")
  .setDescription(":black_small_square: ``!!avatar-serwera`` - Pokazuje avatar serwer \n \n :black_small_square: ``!!avatar <@user>`` - Pokazuje użytkownika avatar \n \n :black_small_square: ``!!botinfo`` - Pokazuje informacje dotyczące bota \n \n :black_small_square: ``!!news`` - Pokazuje newsy z bota \n \n:black_small_square: ``!!serverinfo`` - Pokazuje informacje dotyczące serwera \n \n:black_small_square: ``!!profil <@user>`` - Pokazuje informacje dotyczące użytkownika \n \n :black_small_square: ``!!pogoda <Miasto>`` - Pokazuje daną pogode w miejscowości")
  if (args[0] == "administracyjne"){
    message.channel.send(embeeed)
  } else if (args[0] == "4fun"){
    message.channel.send(fun)
  } else if (args[0] == "zabawa"){
    message.channel.send(zabawa)
  } else if (args[0] == "informacyjne"){
    message.channel.send(informacyjne)
  } else {
 message.channel.send(help)
  }
};
module.exports.help = {
  name: "help"
};
