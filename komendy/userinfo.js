
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
    .addField("Pseudonim", `${member.nickname !== null ? `${member.nickname}` : "Brak"}`, true)
    .addField("Dołączył na discorda", `${moment(user.createdAt).format('DD.MM.YYYY HH:mm:ss')}`, true)
    .addField("Dołączył na serwer", `${moment(member.joinedAt).format("DD.MM.YYYY HH:mm:ss")}`, true)
    .addField("Ostatnia wiadomość", user.lastMessage || "Brak ostatniej wiadomości", true)
    .addField("Łącznie napisanych wiadomości", messages[message.author.id].messages, true)
    .addField("Status", `${user.presence.status}`, true)
    .addField("W grze", `${user.presence.game ? user.presence.game.name : "Brak"}`, true)
    .addField("Role", member.roles.map(roles => `${roles}`).join(" | "), true);

  message.channel.send(embed);

  message.react("452183703267835910");
};

module.exports.help = {
  name: "profil"
};
