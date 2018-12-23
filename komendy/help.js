const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
  const discordhelpadministracyjne = new Discord.RichEmbed()
  .setTitle("Komendy z kategorii: Administracyjne (8)")
  .setColor("#ff2a2a")
  .setDescription("**-softban <@menton> <czas (w s/m/h/d)> <powód>** - wycisza użytkownika \n **-unmute <@mention>** - odcisza użytkownika \n **-kick <@mention>** - wyrzuca użytkownika z serwera \n **-ban <@mention>** - wyrzuca na zawsze użytkownika z serwera \n **-clear <ilość wiadomości>** - usuwa X wiadomomości \n **-warn <@mention>** - ostrzega użytkownika \n **-warnlevel <@mention>** - pokazuje liczbę ostrzeżeń danego użytkownika \n **-addrole <Mention> <rola>** - Dodaje danemu użytkownikowi daną rangę \n **-removerole <Mention> <rola>** - usuwa danemu użytkownikowi daną rangę")
 
  message.channel.send(discordhelpadministracyjne)

  const discordhelpinformacyjne = new Discord.RichEmbed()
  .setTitle("Komendy z kategorii: Informacyjne (5)")
  .setColor("#fc4e4e")
  .setDescription("**-profil <@mention>** pokazuje profil użytkownika \n **-ping** - pokazuje aktualny ping \n **-avatar <@mention>** - pokazuje użytkownika avatar \n **-botinfo** - pokazuje dane bota \n **-serverinfo** - pokazuje dane serwera")
  message.channel.send(discordhelpinformacyjne)

  const discordhelpinne = new Discord.RichEmbed()
  .setTitle("Komendy z kategorii: Inne (6)")
  .setColor("#fa9d9d")
  .setDescription("**-say** - wysyła to samo \n **-prefix** - pokazuje aktualny prefix \n **-8ball** - zapytaj magiczną kulkę o wszystko! \n **-dog** - wysyła losowe zdjęcie psa \n **-cat** - wysyła losowe zdjęcie kota \n **-news** - Pokazuje aktualności z bota \n **-smoke** - Stajesz sie Vaperem")
  message.channel.send(discordhelpinne)
  message.channel.send("**na wszystkie komendy prefix ``<``**")
  
};

module.exports.help = {
  name: "help"
};
