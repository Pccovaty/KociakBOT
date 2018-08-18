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
  .setDescription(`użytkownik ${tomute} został wyciszony przez **${message.author.tag}** \n na kanale ${message.channel} na czas **${mutetime}** \n \n **powód:** ${reason}`)
  .setFooter("♕ Our Community ♕ | Zapraszamy!")
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
  .addField("Na czas", mutetime)
  .addField("Powód", reason);

  let incidentschannel = message.guild.channels.find(`name`, "❕wyciszenia❕");
  if(!incidentschannel) return message.reply("Nie znalazłem kanału ❕wyciszenia❕");
  incidentschannel.send(muteembed);

  await(tomute.addRole(muterole.id));
let muteset = new Discord.RichEmbed()
  .setTitle("Softban")
  .setColor("#56f546")
  .setDescription(`\n Twoje wyciszenie się skończyło. \n`)
  .setFooter("♕ Our Community ♕ | Zapraszamy spowrotem!")
  setTimeout(function(){
    
    tomute.removeRole(muterole.id);
    tomute.send(muteset);
  }, ms(mutetime));


//end of module

}


module.exports.help = {
  name: "softban"
}
