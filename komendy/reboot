const {RichEmbed} = require("discord.js"); // [package required: discord.js]
module.exports.run = async (bot, message, args, level) => {
  // EMBED
  let embed = new RichEmbed()
  .setColor("#ff1d00")
  .setTitle("Bot jest restartowany!")
  await message.channel.send(embed); // send the embed
  // unload all commands before shutting down

  // you can always leave out this code // (cmd part)
  bot.commands.forEach( async cmd => {
    await bot.unloadCommand(cmd);
  }); // end of cmd function

  // shut down the bot
  process.exit(1);
}; // end of code

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["boot off", "shutdown"],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reboot",
  category: "Owner",
  description: "Szybkie resetowanie bota",
  usage: "reboot"
};
