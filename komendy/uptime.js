const Discord = require("discord.js");
const moment = require("moment");
const botconfig = require("../botconfig.json");

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};



exports.run = (bot, message, args) => {



    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;




    let u = convertMS(bot.uptime);
    let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds"




    const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL;
    const botembed = new Discord.RichEmbed()
        .addBlankField()
        .setColor(`RANDOM`)
        .addField(`<:uptimeicon:483872427940511744>`, `**Uptime :**  ${uptime}`)
        .setThumbnail(bicon);

    message.channel.send(botembed);
}




module.exports.help = {
    name: "uptime"
} 
