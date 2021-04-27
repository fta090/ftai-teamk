const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField("**<a:1_:819192012607193088>  Gecikme süreleri**","**Senin Mesaj Gecikmen:** **{ping1} ms** \n **Bot Gecikmesi:** **{ping2}** **ms**"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["p"],
  kategori: "ad",
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "Botun istatistiklerini gösterir",
  usage: "ping"
};
