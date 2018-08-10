const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const coins = require("./coins.json");

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
fs.readdir("./gildie/", (err, files) => {

  if (err) console.log(err);
  const jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Nie znaleziono komendy");
    return;
  }

  jsfile.forEach((f, i) => {
    const props = require(`./gildie/${f}`);
    console.log(`${f} załadowane!`);
    bot.commands.set(props.help.name, props);
  });
});

const serverStats = {
  guildID: "435686053408538624",
  totalUsersID: "467226426563756032",
  memberCountID: "467276066717958156",
  botCountID: "467276143419064320"
};
bot.on("guildMemberAdd", member => {

  if (member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.totalUsersID).setName(`◈ Członków: ${member.guild.memberCount}`);
  bot.channels.get(serverStats.memberCountID).setName(`◈ Ludzi: ${member.guild.members.filter(m => !m.user.bot).size}`);
  bot.channels.get(serverStats.botCountID).setName(`◈ Botów: ${member.guild.members.filter(m => m.user.bot).size}`);

});
bot.on("guildMemberRemove", member => {

  if (member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.totalUsersID).setName(`◈ Członków: ${member.guild.memberCount}`);
  bot.channels.get(serverStats.memberCountID).setName(`◈ Ludzi: ${member.guild.members.filter(m => !m.user.bot).size}`);
  bot.channels.get(serverStats.botCountID).setName(`◈ Botów: ${member.guild.members.filter(m => m.user.bot).size}`);

});
bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} dołączył(a) na serwer.`);

  const welcomechannel = member.guild.channels.find("name", "👋witaj-zegnaj👋");
  welcomechannel.send(`Witaj ${member} na **Our Community!** \n \n **Koniecznie zapoznaj się z zasadami które są na kanale <#435827081654304789>** \n Na kanale <#461987816499445771> możesz samodzielnie dodać rangę \n **A może znudził ci się kolorek nicku? możesz go zmienić klikając reakcje pod wiadomością bota na <#460765614257078283>** \n Możesz też się przedstawić na kanale <#455059398033670144> \n \n **aktualnie jest nas** **${member.guild.memberCount}**`);
});
bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} wyszedł z serwera.`);

  const welcomechannel = member.guild.channels.find("name", "👋witaj-zegnaj👋");
  const welcomeEmbed = new Discord.RichEmbed()
    .setColor("#9b0090")
    .addField(`O nie! użytkownik ${member.user.username} wyszedł z serwera!`, "Nie wytrzymał presji i uciekł do ciepłych krajów")
    .addField(`Aktualnie zostało nas ${member.guild.memberCount}`, "Mamy nadzieje że wrócisz!")
  welcomechannel.send(welcomeEmbed);

});

bot.on("ready", async() => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("<pomoc | v2.2.1", {type: "WATCHING"});

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

  const coinAmt = Math.floor(Math.random(5)) + 5;
  const baseAmt = Math.floor(Math.random(5)) + 5;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if (coinAmt === baseAmt) {
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
      if (err) console.log(err);
    });

  }
  const prefix = prefixes[message.guild.id].prefixes;

  const messageArray = message.content.split(" ");
  const cmd = messageArray[0];
  const args = messageArray.slice(1);

  const commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);

});

bot.login(process.env.BOT_TOKEN);
