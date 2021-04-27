const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '333241303913463820') return message.reply('Yetkin Yok Kardeşim! ');
      const sayMessage = args.join(` `);
      client.user.setActivity(sayMessage);
      message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi `)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
 permLevel: 0
};

exports.help = {
  name: 'od',
  description: 'Botun pingini gösterir.',
  usage: 'oyundeğiş'
};