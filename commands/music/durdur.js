module.exports = {
    name: 'pause',
    aliases: ["durdur","dur","stop"],

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`<:mavitik:864814562313240576> Bir Sesli Kanala Bağlı Değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<:mavitik:864814562313240576> Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!`);

        if (!client.player.getQueue(message)) return message.channel.send(`<:mavitik:864814562313240576>Şuanda Bir Müzik Çalmıyor!`);

        if (client.player.getQueue(message).paused) return message.channel.send(`<:mavitik:864814562313240576> Müzik Çalma Sistemi Zaten Durdurulmuş!`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`<:pause:844301372610052148> \`${client.player.getQueue(message).playing.title}\` İsimli Şarkı Durduruldu!`);
    },
};
