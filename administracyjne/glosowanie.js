const Discord = require("discord.js");
const agree = "526698392810815518"
const nieagre = "526698394543194112"
module.exports.run = async(bot, message, args) => {

  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");

  if (!args[0]) return message.channel.send("Prawidłowe użycie to: <głosowanie [pytanie]");

  const embed = new Discord.RichEmbed()
    .setColor("#008dff")
    .setTitle("Głosowanie rozpoczęte!")
    .setDescription(`**${args.join(" ")}**`)
    .setTimestamp()
    .setFooter(` Głosowanie utworzone przez:  ${message.author.tag}`, `${message.author.avatarURL}`)
let msg = await message.channel.send(embed)
await msg.react(agree)
await msg.react(nieagre)

//const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === nieagre, {time: 15000});
//message.channel.send(`Głosowanie zakończone! \n\n ${agree}: ${reactions.get(agree).count-1}\n${nieagre}: ${reactions.get(nieagre).count-1}`);

};
module.exports.help = {
  name: "glosowanie"
};