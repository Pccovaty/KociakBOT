const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

exports.run = (bot, message, args) => {
    let rMember = (args[0]);
    const embeed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .addField(':warning: **Ostrzeżenie** :warning:', '\:lock: Nie masz wymaganej roli ``Administracja``, aby móc używać tej komendy')
  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");
  if (!message.guild) {
  //const embeed = new Discord.RichEmbed()
  //.setColor("RANDOM")
  //.setTimestamp()
  //.setAuthor(message.author.username, message.author.avatarURL)
 // .addField(':warning: **Ostrzeżenie** :warning:', '`unban`` **Nie masz wystarczająco uprawnień by użyć tej komendy** ')
  return message.author.sendEmbed(embeed); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  bot.unbanReason = reason;
  bot.unbanAuth = message.author;
  let modlog = guild.channels.find('name', 'mod-log', 'log');//mod-log channel name. change for you
  if (!modlog) return message.reply('`mod-log` Nie znalazłem kanału ``mod-log``');//don't find mod-log channel.
  if (!rMember) return message.reply('**Wpisz tutaj **__ID__** osoby zbanowanej**').catch(console.error);
  message.guild.unban(rMember);
  if (reason.length < 1) return message.reply('**Nie podałeś powodu zniesienia Ban!**');//don't forget unban reason
  message.channel.send(`Użytkownik <@${rMember}> został odbanowany`)
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("👋 Unban")
    .setDescription(`**▸ Użytkownik:** <@${rMember}> (${rMember}) \n **▸ Odbanowany przez:** ${message.author.username}#${message.author.discriminator} \n **▸ Powód:** ${reason}`)
  return guild.channels.get(modlog.id).sendEmbed(embed);
 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [id] [powód]'
};