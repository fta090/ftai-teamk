const Discord = require('discord.js');
const { JsonDatabase } = require("wio.db");
const  db  = new JsonDatabase("database");
exports.run = (client, message, args) => { 
    
let para = db.fetch(`para_${message.author.id}`)
let altın = db.fetch(`altın_${message.author.id}`)
let şirket = db.fetch(`şirket_${message.author.id}`)
let kredi = db.fetch(`kredi_${message.author.id}`)  
let amaç = db.fetch(`şirketamac_${message.author.id}`)
let sirketdeğer = db.fetch(`şirketdeger_${message.author.id}`)
if(!args[0]) {
var banka = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('**.kredi** komutu bölümlere ayrılır,Mesela para yatırmak istiyorsanız; \n **.kredi yatır <tutar>** şeklinde olmalı.Mesela para çekmek istiyorsunuz; \n **.kredi çek <tutar>** şeklinde olmalı.birine para atmak istiyorsanız; **.kredi at <tutar>** şeklinde olmalı.')
.addField('Genellikle Sorulan Sorular:', '------------------------------')
.addField('Kredi Kartı Kredisini nasıl hesabıma geçirebilirim?:', '**.kredi** yazarak hesabınıza geçirebilir,kredi kartınıza para yükleyebilirsiniz.')
.addField('Nasıl Para Kazanabilirim?:', ' BOT size,gündelik olarak para verir.Bu değeri şirket açarak arttırabilirsiniz! şirket açmak için,**.şirket** kullanın.')
.addField('Şirket Ne işe yarar?:', 'Gündelik olarak kazandığınız parayı arttırır.')
.addField('Bot kurucusu ile nasıl iletişime geçerim?:', '[Destek Sunucumuza]() gelerek yapımcı ile iletişime geçebilirsin.')
.addField('Günlük Paramı nasıl alırım?:', '**.günlük** yazarak gündelik paranızı alabilirsiniz.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka)  
return
}
  if(args[0] === "çek") {
  if(!args[1]) {
 var banka = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Anlaşılan Kredi Kartından para çekmek istiyorsun.Çekmek istediğin miktarı belirtmen gerekiyor. \n **.kredi çek <miktar>** \n şeklinde tekrar yaz lütfen.')
.addField('Genellikle Sorulan Sorular:', '------------------------------')
.addField('Kredi Kartı Kredisini nasıl hesabıma geçirebilirim?:', '**.kredi** yazarak hesabınıza geçirebilir,kredi kartınıza para yükleyebilirsiniz.')
.addField('Nasıl Para Kazanabilirim?:', 'BOT size,gündelik olarak para verir.Bu değeri şirket açarak arttırabilirsiniz! şirket açmak için,**.şirket** kullanın.')
.addField('Şirket Ne işe yarar?:', 'Gündelik olarak kazandığınız parayı arttırır.')
.addField('Bot kurucusu ile nasıl iletişime geçerim?:', '[Destek Sunucumuza]() gelerek yapımcı ile iletişime geçebilirsin.')
.addField('Günlük Paramı nasıl alırım?:', '**.günlük** yazarak gündelik paranızı alabilirsiniz.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka)   
return
 }   
 
    

    let eksik = args[1] ? args[1] - kredi : "0"    
 let eksik2 = eksik ? eksik + 5 : "0"
  if(kredi < eksik2) {
  

   var banka = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Bize,**'+args[1]+'** kadar kartından para çekmek istediğini belirttin.Ama senin şu anda Kartında \n **----------------------------------** \n **' + kredi + '**:dollar: var. \n **'+args[1]+ '**:dollar: çekmek için; \n (çekim ücreti dahil) **'+ eksik2 +'** kadar krediye daha ihtiyacın var.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka) 
  return
  }


    let sonuc = args[1] ? args[1] - 5 : "0"
    let toplam = kredi ? kredi - args[1] : "0"
db.set(`kredi_${message.author.id}`, - toplam)
db.add(`para_${message.author.id}`, + sonuc)
  
     var banka = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('**Başarılı!**')
.setThumbnail('https://image.flaticon.com/icons/svg/57/57426.svg')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Gerekli işlemleri başarıyla sisteme kaydettik.Detayları aşağıya bırakıyoruz! yine bekleriz :)')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField('**+** Çekilen Para Miktarı:', '**'+args[1]+'**')
.addField('**-** Banka Yatırım Ücreti:', '**5**')
.addField('**-** Yatırım Ücretinden Sonra Çekilen Para:', sonuc)
.addField('**=** Kredi Kartında Kalan Miktar:', '**'+ toplam + '**')
.setTimestamp()
message.channel.send(banka)
  }
}

exports.conf = {
  aliases: ['kredi'],
   kategori: "kullanıcı",
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: 'kredi-bilgi',
  description: 'kredi hakkında bilgi verir.',
  usage: 'kredi-bilgi',

};