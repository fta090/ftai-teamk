const Discord = require('discord.js');
const { JsonDatabase } = require("wio.db");
const  db  = new JsonDatabase("database");
exports.run = (client, message, args) => { 
  let şirket = db.fetch(`şirket_${message.author.id}`)
 let para = db.fetch(`para_${message.author.id}`)
let amaç = db.fetch(`şirketamac_${message.author.id}`)
 let altın = db.fetch(`altın_${message.author.id}`)
let şifre = db.fetch(`sifre_${message.author.id}`)
 let kredi = db.fetch(`kredi_${message.author.id}`)   
let isim = args[0] 
let amac = args.slice(1).join(" ");

if(şirket) {

  var embed = new Discord.MessageEmbed()
  .setTitle('**Hata!** :warning:')
  .setDescription(message.member.user.username + ' Adlı kullanıcının zaten bir şirketi bulunuyor.')
  .setColor('RED')
 .setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setTimestamp()
  message.channel.send(embed)
  return

}

if(!isim) {
  var embed = new Discord.MessageEmbed()
  .setTitle('**Hata!** :warning:')
  .setDescription(message.member.user.username + ' Kurulacak şirketinizin,İsmini belirtmelisiniz.')
  .setColor('RED')
 .setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setTimestamp()
  message.channel.send(embed)
  return
}

if(!amac) {
  var embed = new Discord.MessageEmbed()
  .setTitle('**Hata!** :warning:')
  .setDescription(message.member.user.username + ' Şirketinizin,çalışma amacınızı belirtmeniz gerekiyor.')
  .setColor('RED')
 .setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')  
.setTimestamp()
  message.channel.send(embed)
  return
}
var banka = new Discord.MessageEmbed()
.setColor('#FB529C')
.setTitle('Noter Ana Merkez')
.setDescription('Şirketinizi Kurduk! \n Şirketiniz size günlük **"1000"** para kazandıracak! \n Detaylı bilgiler aşağıda yer alıyor.')
.addField('**Şirket İsmi:**', isim)
.addField('**Kuruluş Amacı:**', amac)
.setThumbnail('https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0017/4721/brand.gif?itok=zDY2EpKJ')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka)  
  
db.set(`şirket_${message.author.id}`, isim)
  db.set(`şirketamac_${message.author.id}`, amac)
   db.set(`şirketdeger_${message.author.id}`, 0)


    
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
   kategori: "eğlence",
  aliases: ['sirket'], 
  permLevel: 0 
};

exports.help = {
  name: 'şirket', 
  description: 'şirket', 
  usage: 'şirket'
};
