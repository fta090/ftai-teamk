exports.run = async (client, message, args) => {
    if(message.author.id !== "333241303913463820") return message.reply("Bu komutu sadece sahibim kullanabilir!")
    message.channel.send(`**${client.user.username} **Bot kapatılıyor... `).then(async msg => {
        await console.log("Bot kapatılıyor...");
        process.exit(0);
    });
};
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kapat"],
    permLevel: 0
};
      
exports.help = {
    name: "kapan",
    description: "Reboot command for Zer'x Code by WenSamita Neiva (a.k.a. Milyavana)",
    usage: "kapan"
};