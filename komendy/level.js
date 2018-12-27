// You need a "xp.json" file with 
// {  
// }
// In that format

// Without the // 
const Discord = require("discord.js");
const xp = require("../xp.json");
const fs = require("fs")
// Goes in message handler.  
let xpAdd = Math.floor(Math.random() * 7) + 8;
console.log(xpAdd);




            // Goes in commands fold in a file name "level.js"


            

            module.exports.run = async (bot, message, args) => {
                if (!xp[message.author.id]) {
                    xp[message.author.id] = {
                        xp: 0,
                        level: 1
                    };
                }
                
                
                let curxp = xp[message.author.id].xp;
                let curlvl = xp[message.author.id].level;
                let nxtLvl = xp[message.author.id].level * 300;
                xp[message.author.id].xp = curxp + xpAdd;
                if (nxtLvl <= xp[message.author.id].xp) {
                    xp[message.author.id].level = curlvl + 1;
                    let lvlup = new Discord.RichEmbed()
                        .setTitle("Level Up!")
                        .addField("Gratulacje dla", `${message.author}`)
                        .setColor("#08ff00")
                        .addField("Nowy level", curlvl + 1);
                
                    message.channel.send(lvlup).then(msg => {
                        msg.delete(5000)
                    });
                }
                fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                            if (err) console.log(err)
                
                if (!xp[message.author.id]) {
                    xp[message.author.id] = {
                        xp: 0,
                        level: 1
                    };
                }
                let curxp = xp[message.author.id].xp;
                let curlvl = xp[message.author.id].level;
                let nxtLvlXp = curlvl * 300;
                let difference = nxtLvlXp - curxp;

                let lvlEmbed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag)
                    .setColor("#880000")
                    .addField("Level", curlvl, true)
                    .addField("XP", curxp, true)
                    .setFooter(`${difference} <- tyle brakuje do nowego poziomu`, message.author.displayAvatarURL);

                message.channel.send(lvlEmbed).then(msg => {
                    msg.delete(9000)
                    message.delete(9000)
                });
            
        });
    }
 module.exports.help = {
    name: "level"
};