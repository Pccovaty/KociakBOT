const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  const msg = await message.channel.send("Ładowanie aktualizacji...");

  const embed = new Discord.RichEmbed()
  .setTitle("Nowości w bocie WellsBOT")
  .setColor("RANDOM")
  .setFooter(`Komenda użyta przez: ${message.author.tag}`, `${message.author.avatarURL}`)
  .setDescription("**2.0.1 -> 24.12.2018r** \n \n \n |+| Poprawiono błędy z komendą ``autostatus`` - <@340557425511759892> ( **Kociak#0001**) \n |+| Odświeżono statystyki serwera - <@340557425511759892> ( **Kociak#0001**) \n |+| Zmieniono #witaj-zegnaj - <@340557425511759892> ( **Kociak#0001**) \n  |-| Usunięto komendy: ``softban`` ``unmute`` ``pomoc`` ``smoke`` ``przelej`` ``dodaj`` - <@340557425511759892> ( **Kociak#0001**) \n  |+| Dodano zmieniający się status bota - <@340557425511759892> ( **Kociak#0001**) \n  |+| Zmieniono poszczególne uprawnienia komend - <@340557425511759892> ( **Kociak#0001**) \n  |+| Zmieniono wygląd komendy ``botinfo`` - <@340557425511759892> ( **Kociak#0001**) \n  |+| Usunięto bugi - <@340557425511759892> ( **Kociak#0001**) \n  |-| Usunięto walute serwerową - <@340557425511759892> ( **Kociak#0001**)")
  message.channel.send(embed);
  msg.delete();
  message.react("524964849181130782")
};

module.exports.help = {
  name: "news"
};


