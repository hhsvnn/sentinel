module.exports = {
    name: 'shuffle',
    aliases: ['sh',"karıştır"],

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`<:mavitik:864814562313240576> Bir Sesli Kanala Bağlı Değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<:mavitik:864814562313240576> Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!`);

        if (!client.player.getQueue(message)) return message.channel.send(`<:mavitik:864814562313240576> Şuanda Çalan Bir Müzik Yok!`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`<a:music:844299514076856321> Çalma Listesi Karıştırıldı Şarkı Sırası Değişti | \`${client.player.getQueue(message).tracks.length}\` Toplam Şarkı!`);
    },
};
