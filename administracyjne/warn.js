const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) => {
      const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
      message.react("452183703267835910");
      //!warn @daeshan <reason>
      if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");
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
        .setAuthor(`⚠ Warn`)
        .setColor("#f7c4c4")
        .setTimestamp()
        .setDescription(`**▸ Użytkownik ostrzeżony:** ${wUser.user.tag} \n **▸ Ostrzeżony przez:** ${message.author.tag} \n  **▸ Powód:** ${reason}`)
        .setFooter(`${moment().format('DD.MM.YYYY')} `)
    
        const warnchannel = message.guild.channels.find('id', '697378000152297512');//mod-log channel name. change for you
        if (!warnchannel) return message.channel.send("Nie mogę znaleźć kanału. ``💻║logi``");
    
      warnchannel.send(warnEmbed);
    
      if (warns[wUser.id].warns === 15) {
        message.guild.member(wUser).ban(reason);
        message.reply(`<@${wUser.id}> został/a zbanowany/a za maksymalną liczbę ostrzeżeń ``15`` `);
      }
      message.channel.send(`Użytkownik **${wUser}** dostał pomyślnie ostrzeżenie :ok_hand:!`);
};
module.exports.help = {
  name: "warn"
};
