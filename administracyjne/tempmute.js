const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


    if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: | Dostęp zablokowany! Nie posiadasz roli z uprawieniami ``ADMINISTRATOR``");
    if (args[0] == "help") {
        message.reply("Użycie: <tempmute <osoba> <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Najpierw Oznacz użytkownika!");
    if (tomute.hasPermission("ADMINISTRATOR")) return message.reply("Nie mogę go wyciszyć!");
    let reason = args.slice(2).join(" ");
    if (!reason) return message.reply("Proszę podać przyczynę!");

    let muterole = message.guild.roles.find(`name`, "Softban");
    //start of create role
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Softban",
                color: "#FFFFFF",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.reply("Dziękuję za określenie czasu");

    message.delete().catch(O_o => {});
    const mutee = new Discord.RichEmbed()
    .setTitle("🔇 Mute")
    .setColor("#ff0000")
    
    .setDescription(`**▸ Zostałeś wyciszony przez:** ${message.author.tag} \n **▸ Na kanale:** ${message.channel} \n **▸ Na czas:** ${mutetime} \n **▸ Powód:** ${reason}`)
    try {
        await tomute.send(mutee)
    } catch (e) {
        message.channel.send(`Użytkownik został wyciszony, ale ma zablokowane DM. został wyciszony na czas: ${mutetime}`)
    }

   

let muteembed = new Discord.RichEmbed()
        .setTitle(`🔇 Mute`)
        .setColor("#ff0000")
        .setDescription(`**▸ Osoba wyciszona:** ${tomute.user.tag} \n **▸ Wyciszona przez:** ${message.author.tag} \n **▸ Na kanale:** ${message.channel} \n **▸ Na czas:** ${mutetime} \n **▸ Powód:** ${reason}`)

        const incidentschannel = message.guild.channels.find('id', '697378000152297512');//mod-log channel name. change for you
        if (!incidentschannel) return message.channel.send("Nie mogę znaleźć kanału. ``💻║mod-log``");
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> został wyciszony na czas: ${mutetime}`)
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> twoje wyciszenie dobiegło końca!`);
    }, ms(mutetime));
}

module.exports.help = {
    name: "mute"
}
