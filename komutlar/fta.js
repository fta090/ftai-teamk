const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle(' <a:fta:819192017082384444> **Prefixim .**')
.setColor('RANDOM')
.setDescription(`
 **yardım eğlence** **-** **Eğlence Komutları**
 **yardım mod** **-** **Moderasyon Komutları**`)
.setFooter('Bot')
.setTimestamp()

if(!nicat) return message.channel.send(embed)
if(nicat !== 'mod' && nicat !== 'eğlence') return message.channel.send(`:x: Yanlış Kategori!`)
if(nicat == 'mod'){
/*Embedinizi Yapiniz Ornek Yapdim */
const modembed = new Discord.MessageEmbed()
.setTitle('<a:tik:819177465325813790> **Moderasyon**')
.setColor('RANDOM')
.setDescription(`
**ban
unban
DEVAMI YAKINDA :D**
\<a:heyecanli:819191988812906546> **moderasyon Komutlarımız**\ 
`)
message.channel.send(modembed)
}
if(nicat == 'eğlence'){
/*Embedinizi Yapiniz Ornek Yapdim */
const eembed = new Discord.MessageEmbed()
.setTitle('<a:1_:819192012607193088> Eğlence')
.setColor('RANDOM')
.setDescription(`

**avatar
banka
boğazla
cihaz
duello
efkarölç
günlük-burc-yorumu
güzelsözler
günlük
howgay
kredi-bilgi
kartım
öp 
ses
spotify
şifre
şifre-al 
şirket-ayar 
şirket
tkm
yazan-kazanır
yazı-tura
zar-at**

\<a:heyecanli:819191988812906546> **eğlence Komutlarımız**`)
message.channel.send(eembed)
}
}
exports.conf = {
enabled: true,
aliases: ['help','y'],
permLevel: 0
}
exports.help = {
name: 'yardım',
description: 'FTA',
usage: 'FTA'
}
