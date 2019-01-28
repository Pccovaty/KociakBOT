const Discord = require("discord.js");

exports.run = async(bot, message, args, ) => {
    if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  let nickname = args.join(' ')
  message.guild.members.get('465227329661304834')
  	.setNickname(nickname);
  await message.channel.send({
  	embed: new Discord.RichEmbed()

  		.setTitle(`Zmieniono nazwe bota na: ${nickname}`)
  })
};
exports.help = {
  name: "zmiennick",
  aliases: ['Glos', 'g']
}
