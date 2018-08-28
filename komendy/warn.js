const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) => {
  message.react("452183703267835910");
  //!warn @daeshan <reason>
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Brak permisji do ``warn``");
  const wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!wUser) return message.reply("Nie mogłem znaleźć użytkownika");
  const reason = args.join(" ").slice(22);

  if (!warns[wUser.id]) {
    warns[wUser.id] = {
      warns: 0
    };
  }

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  const warnEmbed = new Discord.RichEmbed()
    .setDescription("Ostrzeżenie")
    .setAuthor(message.author.username)
    .setColor("#9b0090")
    .addField("Ostrzeżony użytkownik", `<@${wUser.id}>`)
    .addField("Ostrzeżony na", message.channel)
    .addField("O godzinie", moment(message.createdAt).format("YYYY.MM.DD, HH:mm:ss"))
    .addField("Liczba ostrzeżeń", warns[wUser.id].warns)
    .addField("Maksymalna liczba ostrzeżeń", "**15**")
    .addField("Powód", reason);

  const warnchannel = message.guild.channels.find("name", "warny");
  if (!warnchannel) return message.reply("Nie znalazłem kanału ``warny``");

  warnchannel.send(warnEmbed);

  if (warns[wUser.id].warns === 15) {
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> został/a zbanowany/a za maksymalną liczbę ostrzeżeń ``15`` `);
  }
  message.channel.send(`Pomyślnie ostrzeżono użytkownika: **${wUser}**, Powód: ${reason}, więcej informacji na <#465876874489495552> `);
};

module.exports.help = {
  name: "warn"
};
