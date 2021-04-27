const Discord = require('discord.js');
const database = require('quick.db');
var kelimeler = ['fta', 'test', 'emre', 'furkan', 'nazlı','ayıcık', 'bombo', 'fetea', 'ravza','ömer','napiyim','domal', 'pepe'];

exports.run = async (client, message, args) => {// can#0002

  if(!args[0]) return message.channel.send('Kiminle yazan kazanır oynamak istiyorsan o kişiyi etiketle.');
  if(!message.mentions.members.first()) return message.channel.send('Hata: Etiketlenen kişi bulunamadı.');
  const member = message.mentions.members.first();
  if(member.user.id === message.author.id) return message.channel.send('Hata: Sadece kendiniz dışında bir kişiyle oynayabilirsiniz.');

  message.channel.send(`:timer:|${member}**Kelime Oyunu İsteği Geldi. İsteği Kabul Ediyor musun? :white_check_mark:  veya :x:**`).then(async sent => {
    await sent.react('✅');
    await sent.react('❌');

    const filter = (reaction, user) => user.id === member.id;
    sent.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] }).then(collected => {
      collected = collected.first();
      if(collected._emoji.name === '❌') return sent.delete() && message.reply('Yazan kazanır kabul edilmedi.');
      sent.delete();
      message.channel.send('Kelime hazırlanıyor, bekleyin!').then(sent2 => {
        setTimeout(() => {
          const kelime = random(kelimeler);
          const mf = response => {
	          return response.content.toLowerCase() === kelime.toLowerCase();
          };

          message.channel.send(`${member} ${message.author}, kelimeniz: ${kelime}`);
	        message.channel.awaitMessages(mf, { max: 1, time: 30000, errors: ['time'] }).then(answer => {
            sent2.delete();
          
            return message.channel.send(`${answer.first().author} doğru cevabı verdi!`).then(m => m.delete({ timeout: 20000 }))
          }).catch(() => message.channel.send('Sanırım kimse kazanamadı.'));

        }, 3000);
      });
    }).catch(error => console.log(error) && message.reply('Bir cevap verilmedi.'));
  });

  function random(map) {
    if(!map) return;
    return map[Math.floor(Math.random() * map.length)];
  };

};
exports.conf = {
  enabled: true,
  guildOnly: false,
 kategori: "eğlence",
  aliases: ['yazankazanır'],
  permLevel: 0
};
 
exports.help = {
  name: 'yazan-kazanır'
};// codare ♥