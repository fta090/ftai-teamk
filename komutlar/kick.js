exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Bu komutu kullanmak için yetkin yok!")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!member) return message.reply('Lütfen kicklemek için bir kişi etiketleyin!');
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Belirtilmemiş"
    try {
        await member.user.send(`${message.guild.name} isimli sunucudan ${reason} sebebiyle kicklendiniz!`); //eğer bu satırı silerseniz banlanan kişiye mesaj göndermez
        await member.kick(reason);
    } catch (error) {
        return message.channel.send(`**${member.user.tag}** sunucudan kicklenemedi! Hata: ${error}`);
    }

    return message.channel.send(`**${member.user.tag}** sunucudan başarıyla kicklendi!`);
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kick"],
    permLevel: 0
  };
  
  exports.help = {
    name: "kick",
    description: "Kick command for AntiCode by Bayrak & Wen",
    usage: "kick @member"
  };