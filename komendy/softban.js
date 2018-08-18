const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie da się.");
  if(args[0] == "help"){
    message.reply("Poprawne użycie: <softban <mention> <1s/m/h/d>");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie można go wyciszyć!");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Podaj przyczynę.");

  let muterole = message.guild.roles.find(`name`, "Softban");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Softban",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Nie określiłeś czasu!");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Cześć! Zostałeś wyciszony na ${mutetime}. Przepraszam!`)
  }catch(e){
    message.channel.send(`Użytkownik został wyciszony ... ale jego DM jest zablokowane. Został wyciszony na ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Mute executed by ${message.author}`)
  .setColor(orange)
  .addField("Wyciszony użytkownik", tomute)
  .addField("Wyciszony na kanale", message.channel)
  .addField("Data i godzina wyciszenia", message.createdAt)
  .addField("Na czas", mutetime)
  .addField("Powód", reason);

  let incidentschannel = message.guild.channels.find(`name`, "muty");
  if(!incidentschannel) return message.reply("Nie znalazłem kanału muty");
  incidentschannel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`Użytkownik <@${tomute.id}> został odmutowany.`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "softban"
}
