const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    /*
        1) Use the messageReactionAdd and messageReactionRemove events to add/remove users roles
        2) Remove the awaitReactions() function as we won't need that anymore
        3) Customize the message a bit more to fit a general welcome channel
    */
      let users = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);	
  if (!users) return errors.cantfindUser(message.channel);	
  let role = args.join(" ").slice(22);	
  if (!role) return message.reply("Najpierw podaj nazwe roli").then(msg => { msg.delete(5000)})	
  let gRole = message.guild.roles.find(`name`, role);	
  if (!gRole) return message.reply("Nie znalazlem roli").then(msg => { msg.delete(5000)})	
  message.delete()	
  if (users.roles.has(gRole.id)) return message.reply(`Ten użytkownik ma już role **${gRole.name}**..`).then(msg => { msg.delete(5000)	
  });	
  await (users.addRole(gRole.id));	 
    await message.delete().catch(O_o => {});

    const a = message.guild.roles.get('697382703179366461'); // gracz
    const b = message.guild.roles.get('697382719289819207'); // kolor
    const c = message.guild.roles.get('697382731390124063'); // kolor2

    const embed = new Discord.RichEmbed()
        .setTitle('Role do nadania')
        .setDescription(`
       
        Witaj na **${message.guild.name}**! Dodaj sobie role role
     
       `)
        .setColor(0xdd9323)
        .setFooter(`Serwerowe ID: ${message.guild.id}`);

    message.channel.send(embed).then(async msg => {

        await msg.react('🇦');
        await msg.react('🇧');
        await msg.react('🇨');
    });
};

module.exports.help = {
    name: 'test333'
};
