module.exports = {
    name: 'stop',
    aliases: ['dc',"kapat"],

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`<:mavitik:864814562313240576> Bir Sesli Kanala Bağlı Değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<:mavitik:864814562313240576>  Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!`);

        if (!client.player.getQueue(message)) return message.channel.send(`<:mavitik:864814562313240576>  Şuanda Çalan Bir Müzik Yok!`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send(`<:pause:844301372610052148> Müzik Çalma Sistemi Durduruldu!`);
    },
};
