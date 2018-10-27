const Discord = require("discord.js");
const weather = require("weather-js");
module.exports.run = async(bot, message, args) => {

  weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {

    if (err) message.channel.send(err);

    const current = result[0].current;
    const location = result[0].location;

    const embed = new Discord.RichEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor(`Pogoda dla ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor(0x00AE86)
      .addField("Strefa czasowa", `UTC${location.timezone}`, true)
      .addField("Rodzaj stopnia", location.degreetype, true)
      .addField("Temperatura", `${current.temperature}°C`, true)
      .addField("Czuje się jak", `${current.feelslike}°C`, true)
      .addField("Wiatry", current.winddisplay, true)
      .addField("Wilgotność", `${current.humidity}%`, true);

    message.channel.send(embed);
  });
  message.react("452183703267835910");
};
module.exports.help = {
  name: "pogoda"
};
