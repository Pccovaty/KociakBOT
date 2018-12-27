const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
  const discordhelpadministracyjne = new Discord.RichEmbed()
  .setTitle("Komendy z kategorii: Administracyjne (5)")
  .setColor("#ff2a2a")
  .setDescription("**-kick <@mention>** - wyrzuca użytkownika z serwera \n **-ban <@mention>** - wyrzuca na zawsze użytkownika z serwera \n **-clear <ilość wiadomości>** - usuwa X wiadomomości  \n **-addrole <Mention> <rola>** - Dodaje danemu użytkownikowi daną rangę \n **-removerole <Mention> <rola>** - usuwa danemu użytkownikowi daną rangę")
 
  message.author.send(discordhelpadministracyjne)

  const discordhelpinformacyjne = new Discord.RichEmbed()
  .setTitle("Komendy z kategorii: Informacyjne (6)")
  .setColor("#fc4e4e")
  .setDescription("**-profil <@mention>** pokazuje profil użytkownika \n **-ping** - pokazuje aktualny ping \n **-avatar <@mention>** - pokazuje użytkownika avatar \n **-botinfo** - pokazuje dane bota \n **-serverinfo** - pokazuje dane serwera \n **-avatar-serwera** - pokazuje avatar serwera")
message.author.send(discordhelpinformacyjne)
  const discordhelpinne = new Discord.RichEmbed()
  .setTitle("Komendy z kategorii: Inne (5)")
  .setColor("#fa9d9d")
  .setDescription("**-say** - wysyła to samo \n **-prefix** - pokazuje aktualny prefix \n **-8ball** - zapytaj magiczną kulkę o wszystko! \n **-dog** - wysyła losowe zdjęcie psa \n **-cat** - wysyła losowe zdjęcie kota \n **-news** - Pokazuje aktualności z bota")
  message.author.send(discordhelpinne)
  const discordhelpzdjecia = new Discord.RichEmbed()
  .setTitle("Komendy z kategorii: zabawa (6)")
  .setColor("#fa9d9d")
  .setDescription("**-cat** - wysyła zdjecie kota \n **-dog** - wysyla zdjecie psa \n **-hug <@mention>** - Przytula osobe \n **-kiss <@mention>** - całuje osobe \n **-slap <@mention>** - uderza osobe \n **-pat <@mention>** - głaszcze po głowie osobe")
  message.author.send(discordhelpzdjecia)
  message.author.send("**na wszystkie komendy prefix ``<``**")
  message.channel.send(":orange_book:  | Lista komend została wysłana na prywatną wiadomość ")


}
module.exports.help = {
  name: "help"
};
