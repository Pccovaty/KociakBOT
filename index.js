const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
const fs = require("fs");
const moment = require('moment');
const bot = new Discord.Client({disableEveryone: true});
//moment.locale('PL');
bot.commands = new Discord.Collection();
bot.mutes = [];

var messages = require("./messages.json");




fs.readdir("./kategoria.help/", (err, files) => {

  if (err) console.log(err);
  const jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Nie znaleziono komendy");
    return;
  }

  jsfile.forEach((f, i) => {
    const props = require(`./kategoria.help/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./komendy/", (err, files) => {

  if (err) console.log(err);
  const jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Nie znaleziono komendy");
    return;
  }

  jsfile.forEach((f, i) => {
    const props = require(`./komendy/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./administracyjne/", (err, files) => {

  if (err) console.log(err);
  const jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Nie znaleziono komendy");
    return;
  }

  jsfile.forEach((f, i) => {
    const props = require(`./administracyjne/${f}`);
    console.log(`${f} komendy administracyjne zaladowane!`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./informacyjne/", (err, files) => {

  if (err) console.log(err);
  const jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Nie znaleziono komendy");
    return;
  }

  jsfile.forEach((f, i) => {
    const props = require(`./informacyjne/${f}`);
    console.log(`${f} komendy informacyjne zaladowane!`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./4fun/", (err, files) => {

  if (err) console.log(err);
  const jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Nie znaleziono komendy");
    return;
  }

  jsfile.forEach((f, i) => {
    const props = require(`./4fun/${f}`);
    console.log(`${f} komendy 4fun zaladowane!`);
    bot.commands.set(props.help.name, props);
  });
});

const serverStats = {
  guildID: "435686053408538624",
  totalUsersID: "528977589046607893",
  botCountID: "528978081059176448",
  onlinecountID: "481414408699117568"

};

bot.on("guildMemberAdd", member => {
  
  if (member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.totalUsersID).setName(`|👥| Osób: ${member.guild.memberCount}`);
  bot.channels.get(serverStats.onlinecountID).setName(`|👭| ${member.user.tag}`);
  bot.channels.get(serverStats.botCountID).setName(`|🤖| Boty: ${member.guild.members.filter(m => m.user.bot).size}`);
});
bot.on("guildMemberRemove", member => {

  if (member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.totalUsersID).setName(`|👥| Osób: ${member.guild.memberCount}`);
  bot.channels.get(serverStats.botCountID).setName(`|🤖| Boty: ${member.guild.members.filter(m => m.user.bot).size}`);
});
bot.on("guildMemberAdd", async member => {

  console.log(`${member.id} dołączył(a) na serwer.`);
  const welcomechannel = member.guild.channels.find(`name`, "witaj");
  const welcomeEmebed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Witaj **${member.user.tag}** na **${member.guild.name}**. \n \n Jesteś aktualnie na kanale <#523602318168686602> \n Aby uzyskać całkowity dostęp do serwera wpisz komende **<verify** `)
  .setFooter(`© 2017-2018 Kociak#6365`)
  welcomechannel.send(welcomeEmebed)
  
});

bot.on("guildMemberRemove", async member => {

  console.log(`${member.id} wyszedł z serwera.`);

  const welcomeechannel = member.guild.channels.find("id", "529354731777163275");
  const welcomeeEmebed = new Discord.RichEmbed()
  .setColor("#323438")
  .setDescription(`**${member.user.tag}** opuścił(a) **${member.guild.name}**`)
  
  welcomeechannel.send(welcomeeEmebed);
});
bot.on(`message`, async message => {
  if(message.content ===  `!!reboot`) { 
if (message.author.id === "340557425511759892") {
  message.channel.send(":gear: ponowne uruchamianie...")
  
  bot.destroy()
  bot.login(process.env.TOKEN)
message.channel.send(":gear: ponownne uruchamianie...")
} else {
	
message.channel.send("Tylko Autor bota moze uzyc tej komendy.")
  
  }
  }
});
bot.on("message", async message => {
  if (message.content === "<@465227329661304834>") {
    return message.channel.send("<:Info:484996951515856906> | mój prefix to ``!!``.");
  }

});
bot.on("ready", async() => {
	let guild = bot.guilds.get('G435686053408538624');
 
    let all = 0;
    let offline = 0;
 
    const interval = setInterval(function () {
        let guild = bot.guilds.get('435686053408538624');
        guild.members.forEach(member => {
 
            if (!member.user.bot) all++;
            if (member.user.presence.status == 'offline' && !member.user.bot) offline++;
        });
 
     let online = all - offline;
 
        bot.channels.get('523583115583815690').setName("|🔵| Online: " + online);
 
        all = 0;
        offline = 0;
 
     }, 1 * 5000);
});
bot.on("ready", async() => {
      setInterval(async () => {
    const statuslist = [
      `Dzisiaj jest ${moment().format('DD.MM.YYYY')}r`,
      `50% Working`,
      `31/50 komend xd`,
      `Nowe komendy`
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await bot.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "WATCHING"
          //url: 'https://www.twitch.tv/spokloo'
        },
        status: "dnd"
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);



    const data = setInterval(function () {
  
         let data = moment().format("DD.MM.YYYY");
         bot.channels.get('523819168689029121').setName("|📊| Dzisiaj jest: " + data);
  
      }, 1 * 1000);

    
  


  const date = setInterval(function () {
  
    let date = moment().format("HH:mm:ss");
    bot.channels.get('533016026888011786').setName("|🕐| Godzina: " + date);

 }, 1 * 1000);
});
 bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  const prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  if (!messages[message.author.id]) {
    messages[message.author.id] = {
      messages: 0 
    };
  }


  }
  //messages
  {
messages[message.author.id] = {
  messages: messages[message.author.id].messages + 1
};
fs.writeFile("messages.json", JSON.stringify(messages), (err) => {
  if (err) console.log(err);
});
  }
  const prefix = prefixes[message.guild.id].prefixes;

  const messageArray = message.content.split(" ");
  const cmd = messageArray[0];
  const args = messageArray.slice(1);
  if(cmd.substring(0, prefix.length) != prefix){
    return;
  }
  const commandfile = bot.commands.get(cmd.slice(prefix.length));	
  if (commandfile) commandfile.run(bot, message, args);

});
bot.on('guildMemberAdd', member => {
  let logChannel = member.guild.channels.find('id', '531434222217592859');
  
    let logEmbed = new Discord.RichEmbed()
    .setAuthor("Przyszedł Użytkownik | Logi") 
    .setDescription(member.user.username + " jest ``połączony`` z serwerem (" + member.user.id + ")")
    .setColor('#353535')
    .setFooter("Gracz przyszedł", member.user.displayAvatarURL)
    .setTimestamp()
    logChannel.send(logEmbed);
  })
  bot.on('guildMemberRemove', member => {
  let logChannel = member.guild.channels.find('id', '531434222217592859');
  
    let logEmbed = new Discord.RichEmbed()
    .setAuthor("Odszedł Użytkownik | Logi") 
      .setDescription(member.user.username + "jest ``odłączony`` od serwera. (" + member.user.id + ")")
    .setFooter("Gracz wyszedł", member.user.displayAvatarURL)
    .setColor('#353535')
    .setTimestamp()
    logChannel.send(logEmbed);
  })

 bot.login(process.env.BOT_TOKEN);
