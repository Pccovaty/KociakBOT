
const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args, level) => {

let Timer = args[0];

if(!args[0]){
  return message.channel.send("Podaj czas w ``s/m/h/d`` < Przykladowe użycie to ``!!remind 10s``");
}

if(args[0] <= 0){
  return message.channel.send("Podaj czas w ``s/m/h/d`` < Przykladowe użycie to ``!!remind 10s``");
}

message.channel.send("**:white_check_mark: Tak jest! Przypomne ci za:** " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`Timer się skończył, trwało: ${ms(ms(Timer), {long: true})}` + message.author.toString())

}, ms(Timer));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "remind",
  category: "Miscelaneous",
  description: "Sets a timer",
  usage: "remind"
};