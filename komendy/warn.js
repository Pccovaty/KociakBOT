const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) => {
      const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
      message.react("452183703267835910");
      //!warn @daeshan <reason>
      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":lock: Dostęp zablokowany. Nie posiadasz roli ``Moderator`` lub wyższej");
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
        .setAuthor("Warn")
        .setColor("#9b0090")
        .addField("Ostrzezony przez", message.author.tag)
        .addField("Ostrzeżony użytkownik", `<@${wUser.id}>`)
        .addField("Liczba ostrzeżeń", warns[wUser.id].warns)
        .addField("Powód", reason)
        .addField("Maksymalna liczba ostrzeżeń", "**3**")
    
      const warnchannel = message.guild.channels.find("name", "mod-log");
      if (!warnchannel) return message.reply("Nie znalazłem kanału ``mod-log``");
    
      warnchannel.send(warnEmbed);
    
      if (warns[wUser.id].warns === 3) {
        message.guild.member(wUser).ban(reason);
        message.reply(`<@${wUser.id}> został/a zbanowany/a za maksymalną liczbę ostrzeżeń ``15`` `);
      }
      message.channel.send(`Pomyślnie ostrzeżono użytkownika: **${wUser}** \nPowód: ${reason} \nAktualnie posiada: ${warns[wUser.id].warns} warnów`);
};
module.exports.help = {
  name: "warn"
};
