const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const msg = await message.channel.send("<@&435826416488022017> Nowe ogloszenie!");
    if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:lock:485090231427661824> | Dostęp zablokowany! Nie posiadasz uprawnień ``Administrator``");

    const embed = new Discord.RichEmbed()
    .setTitle("Nowe ogloszenie!")
    .setColor("RANDOM")
    .addField("**Opis:**", args.join(" "))
    .setFooter(`Ogłoszenie by: ${message.author.tag}`, `${message.author.avatarURL}`);

    message.channel.send(embed)
    msg.delete({timeout: 100000})
    message.delete({timeout: 10000});
};
module.exports.help = {
  name: "og"
};
