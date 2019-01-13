const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if (message.author.id === "340557425511759892") {
message.guild.fetchBans().then(bans => {
    bans.forEach(m => {
         message.guild.unban(m);
    })

    message.channel.send(`Odbanowano **${bans.size}** użytkowników`)
})
} else {
    message.channel.send("Tylko autor bota może dać unbany :).")
}

};
module.exports.help = {
    name:"ub"
}
