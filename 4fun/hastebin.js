const snekfetch = require('snekfetch');

module.exports.run = async(bot, message, args) => {
	if (!args.slice(0)
		.join(' ')) return message.channel.send('Podaj tekst, Prawidłowe użycie to: <hastebin <text>')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	snekfetch.post('https://hastebin.com/documents')
		.send(args.slice(0)
			.join(' '))
		.then(body => {
			message.channel.send('Twój tekst został pomyślnie przesłany na ``hastebin`` \n :link: URL: https://hastebin.com/' + body.body.key);
        });
        message.delete()
};
 module.exports.help = {
   name: "hastebin"
};