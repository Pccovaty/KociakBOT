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

const ser = {
  guildID: "435686053408538624",
 totalUsersID: "571296997215174656",
 botCountID: "571297074935758849",
  onlinecountID: "571297090500689920",
  banID: "571297124889788447"

};
bot.on("guildBanAdd", guild => {
  guild.fetchBans().then(bans => {
          bot.channels.get(ser.banID).setName(`» Banów: ${bans.size}`);
  });
  });
bot.on("guildMemberAdd", member => {
  
  if (member.guild.id !== ser.guildID) return;

  bot.channels.get(ser.totalUsersID).setName(`|👥| Osób: ${member.guild.memberCount}`);
  bot.channels.get(ser.onlinecountID).setName(`|👭| ${member.user.tag}`);
  bot.channels.get(ser.botCountID).setName(`|🤖| Boty: ${member.guild.members.filter(m => m.user.bot).size}`);
});
bot.on("guildMemberRemove", member => {

  if (member.guild.id !== ser.guildID) return;

  bot.channels.get(ser.totalUsersID).setName(`|👥| Osób: ${member.guild.memberCount}`);
  bot.channels.get(ser.botCountID).setName(`|🤖| Boty: ${member.guild.members.filter(m => m.user.bot).size}`);
});
bot.on("guildMemberAdd", async member => {
const welcomechannel = member.guild.channels.find(`id`, '571241486558167040');
  const welcomeEmebed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setDescription("yolo")
});
bot.on("guildMemberRemove", async member => {
  const incidentchannel = member.guild.channels.find('id', '571241504245284864');//mod-log channel name. change for you
  if (!incidentchannel) return message.channel.send("Nie mogę znaleźć kanału. <#571241504245284864>");
  incidentchannel.send(`Użytkownik **${member.user.tag}* uciekł na syberie`)

});



bot.on(`message`, async message => {
  if(message.content ===  `!!reboot`) { 
if (message.author.id === "340557425511759892") {
  message.channel.send(":gear: ponowne uruchamianie...")
  
  bot.destroy()
  bot.login(process.env.TOKEN)
message.channel.send(":gear: ponownne uruchamianie... 100%")
} else {
	
message.channel.send("Tylko Autor bota moze uzyc tej komendy.")
  
  }
  }
});
bot.on("message", async message => {
  if (message.content === "<@465227329661304834>") {
    const bicon = bot.user.displayAvatarURL;
    const embed = new Discord.RichEmbed()
    .setTitle("Informacje o bocie WellsBOT")
    .setColor("#a630ff")
    .setThumbnail(bicon)
    .addField("O Nas", "Bot Tylko i wyłącznie dla serwera ``World of Gamers``. Posiada ``42`` komend, autorem bota jest <@340557425511759892> (**Kociak#6846**)")
    .addField("Lista Komend", "Prefix bota to: ``!!``. Wszystkie komendy dostępne są pod: ``!!help``")
    .setFooter(`Komenda użyta przez ${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(embed)
  }

});
bot.on("ready", async() => {
	let guild = bot.guilds.get('435686053408538624');
 
    let all = 0;
    let offline = 0;
 
    const interval = setInterval(function () {
        let guild = bot.guilds.get('435686053408538624');
        guild.members.forEach(member => {
 
           if (!member.user.bot) all++;
           if (member.user.presence.status == 'offline' && !member.user.bot) offline++;
        });
 
    let online = all - offline;
 
        bot.channels.get('571298247201652757').setName("|🔵| Online: " + online);
 
       all = 0;
       offline = 0;
 
    }, 1 * 5000);
});
bot.on("ready", async() => {
      setInterval(async () => {
    const statuslist = [
      `Dzisiaj jest ${moment().format('DD.MM.YYYY')}r`,
      `A co tam patrzysz?`,
      `World of Gamers wraca`
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
  }, 10000 * 5);



    const data = setInterval(function () {
  
        let data = moment().format("DD.MM.YYYY");
        bot.channels.get('571298264071012352').setName(" 📆Dzisiaj jest: " + data);
  
      }, 1 * 1000);

    
  


  const date = setInterval(function () {
  
   let date = moment().format("HH:mm");
    bot.channels.get('571298303895928832').setName("|🕐| Godzina: " + date);

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

//bot.login(process.env.BOT_TOKEN);
