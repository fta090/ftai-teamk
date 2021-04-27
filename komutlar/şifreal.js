const Discord = require('discord.js');
const { JsonDatabase } = require("wio.db");
const  db  = new JsonDatabase("database");

exports.run = (client, message, args) => { 
  let şifre = db.fetch(`sifre_${message.author.id}`)
  if(!şifre) {
    var embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Anlaşılan bir şifre almamışsınız :) \n **.şifre** yazarak şifrenizi alabilirsiniz.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()  
message.channel.send(embed)  
 return
  }
 message.channel.send(message.member.user.username + ' Kart Şifrenizi özelden yolladım') 
  
    var embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Banka Merkezi')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Selam '+ message.member.user.username + ', \n İşte kart Şifreniz:**' + şifre + '**')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()  
  
  
message.author.send(embed)

};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  kategori: "eğlence",
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'şifre-al', 
  description: 'şifre-al', 
  usage: 'şifre-al'
};
