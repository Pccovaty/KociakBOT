exports.run = async (client, message, args) => {
    if (message.author.id === '340557425511759892') {
        if (!args || args.size < 1) return message.channel.send("Musisz podać komendę do przeładowania...");
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        message.channel.send(`**Komenda ${args[0]} zrestartowana!**`)
    }

}
