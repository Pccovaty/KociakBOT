const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const moment = require('moment');
const bot = new Discord.Client({disableEveryone: true});
moment.locale('PL');
bot.commands = new Discord.Collection();
bot.mutes = [];


var coins = require("./coins.json");
var messages = require("./messages.json");


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


const serverStats = {
  guildID: "435686053408538624",
  totalUsersID: "467226426563756032",
  botCountID: "523590251856265225",
  onlinecountID: "481414408699117568",
  dataID: "523819168689029121"

};
bot.on("guildMemberAdd", member => {
const moment = require('moment');
  
  if (member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.totalUsersID).setName(`|👥| Osób: ${member.guild.memberCount}`);
  bot.channels.get(serverStats.onlinecountID).setName(`|👭| ${member.user.tag}`);
  bot.channels.get(serverStats.botCountID).setName(`|🤖| Boty: ${member.guild.members.filter(m => m.user.bot).size}`);
  bot.channels.get(serverStats.totalUsersID).edit({ Data: `${moment().format('DD.MM.YYYY')}r`});
});
bot.on("guildMemberRemove", member => {

  if (member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.totalUsersID).setName(`|👥| Osób: ${member.guild.memberCount}`);
  bot.channels.get(serverStats.botCountID).setName(`|🤖| Boty: ${member.guild.members.filter(m => m.user.bot).size}`);
});
bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} dołączył(a) na serwer.`);

  const welcomechannel = member.guild.channels.find("name", "witaj-zegnaj");
  const welcomeEmebed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Witaj **${member.user.username}** na **Community Graczy** Cieszymy się że z nami jesteś!`)
  .setFooter(`© 2017-2018 Kociak#6365`)
  welcomechannel.send(welcomeEmebed);
});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} wyszedł z serwera.`);

  const welcomeechannel = member.guild.channels.find("name", "witaj-zegnaj");
  const welcomeeEmebed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Użytkownik **${member.user.username}** opuścił **Community Graczy**... *Sad*`)
  .setFooter(`© 2017-2018 Kociak#6365`)
  welcomeechannel.send(welcomeeEmebed);
});
bot.on("message", async message => {
  if (message.content === "<@465227329661304834>") {
    return message.channel.send("<:Info:484996951515856906> | mój prefix to ``<``.");
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
 
        bot.channels.get('523583115583815690').setName("|🔵| Online: " + online);
 
        all = 0;
        offline = 0;
 
     }, 1 * 5000);
  
});
bot.on("ready", async() => {
      setInterval(async () => {
    const statuslist = [
      `by Kociak#0001`,
      `użyj: <help`,
      `Dzisiaj jest ${moment().format('DD.MM.YYYY')}r`,
      `https://discord.gg/pppgZCV ♥`,
      `15% Complete!`,
      `Nowości! <news`
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
  }, 30000);

 });
 bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  const prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  
  }
  if (!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 0
    };
  }
  if (!messages[message.author.id]) {
    messages[message.author.id] = {
      messages: 0 
    };
  }

  const coinAmt = Math.floor(Math.random(5)) + 5;
  const baseAmt = Math.floor(Math.random(5)) + 5;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if (coinAmt === baseAmt) {
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
    fs.writeFile("coins.json", JSON.stringify(coins), (err) => {
      if (err) console.log(err);
    });

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

bot.login(process.env.BOT_TOKEN);
