module.exports = {
    name: 'loop',
    aliases: ['lp', 'loop','döngü'],

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`<:mavitik:864814562313240576> Bir Sesli Kanala Bağlı Değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<:mavitik:864814562313240576> Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!`);

        if (!client.player.getQueue(message)) return message.channel.send(`<:mavitik:864814562313240576> Şuanda Bir Müzik Çalmıyor!`);

        if (args.join(" ").toLowerCase() === 'liste') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`<:play:844300167163019324> Müzik Döngü Modu Kapatıldı!`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`<a:kilit:850623406499037194> - Müzik Döngü Modu Aktif Listedeki Tüm Müzikler Durmadan Tekrarlanacak!`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`<:play:844300167163019324> Müzik Döngü Modu Kapatıldı!`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`<a:kilit:850623406499037194>  Müzik Döngü Modu Aktif Bu Müzik Durmadan Tekrarlanacak!`);
            };
        };
    },
};
