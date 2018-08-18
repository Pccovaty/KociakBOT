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
 let mutembed = new Discord.RichEmbed()
  .setTitle("Softban")
  .setColor("#dddbdb")
  .setDescription(`użytkownik ${tomute} został wyciszony przez ${message.author.tag} na kanale ${message.channel} na czas ${mutetime} \n powód: ${reason}`)
  .setFooter(`moment(message.createdAT).calendar();` | message.avatarURL)
  try{
    await tomute.send(mutembed)
  }catch(e){
    message.channel.send(`Użytkownik został wyciszony ... ale jego DM jest zablokowane. Został wyciszony na ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Kolejny mute, tym razem przez ${message.author}`)
  .setColor("#dddbdb")
  .addField("Wyciszony użytkownik", tomute)
  .addField("Wyciszony na kanale", message.channel)
  .addField("Data i godzina wyciszenia", `moment(message.createdAt).format("DD.MM.YYYY HH:mm:ss)`)
  .addField("Na czas", mutetime)
  .addField("Powód", reason);

  let incidentschannel = message.guild.channels.find(`name`, "muty");
  if(!incidentschannel) return message.reply("Nie znalazłem kanału muty");
  incidentschannel.send(muteembed);

  await(tomute.addRole(muterole.id));
let muteset = new Discord.RichEmbed()
  .setauthor("Softban")
  .setColor("#56f546")
  .setDescription(`Twoje wyciszenie się skończyło.`)
  setTimeout(function(){
    
    tomute.removeRole(muterole.id);
    tomute.send(muteset);
  }, ms(mutetime));


//end of module

}


module.exports.help = {
  name: "softban"
}
