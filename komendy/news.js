const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  const msg = await message.channel.send("Ładowanie aktualizacji...");

  const embed = new Discord.RichEmbed()
  .setTitle("Nowości w bocie KociakBOT Beta")
  .setColor("RANDOM")
  .setFooter(`Komenda użyta przez: ${message.author.tag}`, `${message.author.avatarURL}`)
  .setDescription("Dodano komende ``<news``. **~20.10.2018r**  \n Dodano nowy wygląd kiedy ktoś dołączy bądź odejdzie od serwera. **~20.10.2018r** \n Dodano nową komende: ``<degrad`` **~21.10.2018r** \n Zmieniono nazwę komendy z ``<weather`` na ``<pogoda`` **~21.10.2018r** \n Zmieniono wygląd komend ``<botinfo`` oraz ``<developerzy`` **~22.10.2018r** \n Usunięto komendy ``<facepalm``, ``<panda``, ``<kiss``, ``<hug``, ``<rzuc``, ``<slap``.**~22.10.2018r** \n Dodano nową komendę: ``<og`` *Tylko dla administracji* **~22.10.2018r** \n Zmieniono uprawnienia poszczególnych komend dla administracji **~22.10.2018r** \n Zmieniono wiadomość w komendzie ``<ping`` **~23.10.2018r** \n Poprawiono komende ``<removerole`` **~23.10.2018r**")
  message.channel.send(embed);
  msg.delete();
};

module.exports.help = {
  name: "news"
};
