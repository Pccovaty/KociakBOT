
const Discord = require("discord.js");
const moment = require("moment");
const messages = require("../messages.json");

module.exports.run = async(bot, message, args) => {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();

  } else {
    user = message.author;
  }
  //Messagese
  if (!messages[message.author.id]) {
    messages[message.author.id] = {
      messages: 0
    };
  }

  const member = message.guild.member(user);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(user.avatarURL)
    .setTitle(`${user.username}#${user.discriminator}`)
    .setDescription(`**Pseudonim:** ${member.nickname !== null ? `${member.nickname}` : "Brak pseudonimu"} \n **Dołączył na Discord:** ${moment(user.createdAt).format('DD.MM.YYYY HH:mm:ss')} \n **Dołączł na serwer:** ${moment(member.joinedAt).format("DD.MM.YYYY HH:mm:ss")} \n **Łącznie napisanych wiadomości:** ${messages[message.author.id].messages} \n **Status:** ${user.presence.status} \n **w grze:** ${user.presence.game ? user.presence.game.name : "Użytkownik nie gra w żadną gre"} \n **Role:** ${member.roles.size} więcej informacji pod komendą **__!!profil role__** `)

    const profilkolor = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    .setTitle(`Role użytkownika ${member.user.tag}`)
    .setColor("BLUE")
    .setDescription(member.roles.map(roles => `${roles}`).join("\n"))
    
    if (args[0] == "role"){
      message.channel.send(profilkolor)
    } else {
  message.channel.send(embed);
    }
  message.react("526698392810815518");

};

module.exports.help = {
  name: "profil"
};
