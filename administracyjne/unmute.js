const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("Potrzebujesz permisji **KICK_MEMBERS** aby użyć tej komendy")
    const modlog = message.guild.channels.find(channel => channel.name === 'logi-serwera-wb');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Nie znaleziono użytkownika")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user.roles.find(`name`, "Softban")) return message.channel.send('Użytkownik jest już odciszony')
    if (!reason) return message.channel.send('Podaj przyczynę odciszenia!')
    let muterole = message.guild.roles.find(`name`, "Softban");
    if(args[0] == "help"){
      message.reply("Użycie: <unmute <user> <reason>");
      return;
    }
    const muteChannel = message.guild.channels.find('id', '521716025457377297');//mod-log channel name. change for you
    if (!muteChannel) return message.channel.send("Nie mogę znaleźć kanału. ``💻║mod-log``");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Softban",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  const mutelog = new Discord.RichEmbed()
  .setAuthor(' UnMute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
  .setDescription(`**▸ Użytkownik Odciszony:** ${user.user.tag} \n **▸ Odciszony przez:** ${mod.tag} \n **▸ Powód:** ${reason}`)
        
  .setColor('#00FF80')
    
modlog.send(mutelog)
    let mutetime = args[1];

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' UnMute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
            .setDescription(`**▸ Użytkownik Odciszony:** ${user.user.tag} \n **▸ Odciszony przez:** ${mod.tag} \n **▸ Powód:** ${reason}`)
        
            .setColor('#00FF80')
    
        muteChannel.send(muteembed)
  
  message.channel.send("Użytkownik został pomyślnie odciszony")
}


module.exports.help = {
    name: "unmute",
    category: "MODERATION"
}