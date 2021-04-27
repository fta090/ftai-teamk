const Discord = require('discord.js');
const ms = require('parse-ms')
const { JsonDatabase } = require("wio.db");
const  db  = new JsonDatabase("database");
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => { 
  let para = await db.fetch(`para_${message.author.id}`)
  let altın = await db.fetch(`altın_${message.author.id}`)
  let şirket = await db.fetch(`şirket_${message.author.id}`)
  let kredi = await db.fetch(`kredi_${message.author.id}`)  
  let amaç = await db.fetch(`şirketamac_${message.author.id}`)
  let sirketdeğer = await db.fetch(`şirketdeger_${message.author.id}`)
  let şifre = await db.fetch(`sifre_${message.author.id}`)
  let süre = await db.fetch(`kartsure_${message.author.id}`)
  let timeObj = ms(Date.now() - süre);  
  var filtre = m => m.author.id === message.author.id

  if(!şirket) {
     var embed = new Discord.MessageEmbed()
  .setTitle('**Hata!** :warning:')
  .setDescription(message.member.user.username + ' Üstünüze kayıtlı bir şirket bulamadık.')
  .setColor('RED')
 .setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
 .setFooter('Bir şirket kurmak için, !şirket yazman yeterli!')
.setTimestamp()
  message.channel.send(embed)
    return
  }
  
  
  
  var menu = new Discord.MessageEmbed()
  .setTitle('Şirket Ayarları')
   .addField('[1] Şirket Ayarları', şirket + ' Ayarları.')
  .addField('[2] Şirket Bilgisi', şirket + ' Bilgisi')
  .addField('[3] Şirket Değeri', şirket + ' Değer Bilgisi')
  .setDescription('Selam ' + message.member.user.username + ', \n Aşağıda bu menü ile Yapabileceklerin yazıyor.Eğer bir hata olursa, [Destek Sunucumuza]() gelip,bizimle iletişime geçebilirsin.')
  .setThumbnail('https://www.sccpre.cat/mypng/detail/204-2041290_settings-icon-settings-icon-iphone-transparent.png')
  .setFooter(client.user.username + ' Bulunduğunuz kanala belirtilen sayıyı girip,işleme devam edebilirsiniz.')
  .setTimestamp();
  
   var embed = new Discord.MessageEmbed()
    .setTitle('Şirket Ayarları')
  .addField('[1] Şirket İsmi Değişme', 'Şu anda kullanılan şirket ismi: **'+şirket+'**')
  .addField('[2] Şirket Kuruluş Amacı değiştirme', 'şu anda kullanılan şirket amacı:**'+amaç+'**')
  .setDescription('Selam ' + message.member.user.username + ', \n Aşağıda bu menü ile Yapabileceklerin yazıyor.Eğer bir hata olursa, [Destek Sunucumuza]() gelip,bizimle iletişime geçebilirsin.')
  .setThumbnail('https://www.sccpre.cat/mypng/detail/204-2041290_settings-icon-settings-icon-iphone-transparent.png')
  .setFooter(client.user.username + ' Bulunduğunuz kanala belirtilen sayıyı girip,işleme devam edebilirsiniz.')
  .setTimestamp();
  message.channel.send(menu)

 var sbilgi = new Discord.MessageEmbed()
 .setTitle('Şirket Bilgisi')
 .setDescription('Selam ' + message.member.user.username + ', \n Aşağıda Şirketi nin bilgileri yazıyor.Eğer bir hata olursa, [Destek Sunucumuza](https://discord.gg/6D7eX5Q) gelip,bizimle iletişime geçebilirsin.')
 .addField('Şirket İsmi:', '**'+şirket+'**')
.addField('Şirket Kuruluş Amacı:', '**'+amaç+'**')
.addField('Şirket Para Değeri:', '**'+sirketdeğer+'**')
.addField('Şirket Kurucusu:', '**'+message.member.user.username+'**')
.addField('Şirket Kurucusu İD:', '**'+message.member.id+'**')
 .setColor('RANDOM')
 
  var sdeğer = new Discord.MessageEmbed()
 .setTitle('Şirket Bilgisi')
 .setDescription('Selam ' + message.member.user.username + ', \n Aşağıda Şirketi nin bilgileri yazıyor.Eğer bir hata olursa, [Destek Sunucumuza](https://discord.gg/6D7eX5Q) gelip,bizimle iletişime geçebilirsin.')
.addField('Şirket Para Değeri:', '**'+sirketdeğer+'**')
.addField('Şirkete Ait İtemler:', 'Devamı yakında!')
 .setColor('RANDOM')
 
 /////////////////////////////////////////////////////////////////////////////////////////
 
 
 message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => {
    if(collected.first().content === "3") {
    
    message.channel.send(sdeğer)
      return
    }   
 })
 
 
 message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => {
    if(collected.first().content === "2") {
    
    message.channel.send(sbilgi)
      return
    }   
 })
 
 message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => {
    if(collected.first().content === "1") {
    
    message.channel.send(embed)
    }   
})
//////////////////////////////////////////////////////////////burdan yukarısı sorun yok

 
   message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => {
    if(collected.first().content === "1") {
    
    message.channel.send('Lütfen yeni istediğiniz şirket ismini,bulunduğunuz kanala gönderin..!')
    } else if(collected.first().content === "2") {

    }
    })
}

exports.conf = { 
enabled: true, 
guildOnly: false, 
 kategori: "eğlence",
aliases: [], 
permLevel: 0
};
exports.help = { 
name: "şirket-ayar", 
description: "Şikayet ayarlar.", 
usage: "şirket-ayar [ şirket-ayar ]" 
};