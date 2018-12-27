const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api("97e94f718f7b7694d50eb83a10ce4f46834cee5d" , {
    notFoundAsError: true,
    completeScores: false 
})

module.exports.run = async (bot, message, args) => { 

  
  let username = args[0]
  
  
  if (!args[0]) return message.channel.send('Proszę podaj nazwę konta w (osu!)').then(msg => {msg.delete(5000)})
  
api.getUser({u: username}).then(user => {
  const embed = new Discord.RichEmbed()
  .setTitle(`osu! Standard Profil dla ${user.name}`)
  .setURL(`http://s.ppy.sh/a/${user.id}`)
  .setDescription(`[link do profilu](http://s.ppy.sh/a/${user.id})`)
  .setThumbnail(`http://s.ppy.sh/a/${user.id}`)
  .setColor("#D0436A")
  .setDescription(`**▸ Officjalny ranking:** ${user.pp.rank}  (${user.country}#${user.pp.countryRank}) \n **▸ Level:** ${Math.round(user.level)} \n **▸ PP:** ${Math.round(user.pp.raw)} \n **▸ Accuracy:** ${user.accuracyFormatted} \n **▸ Playcount** ${user.counts.plays}`)
  .setFooter('Komenda użyta przez: ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed)
  
})

}

module.exports.help = {
  name: "osu" 
}