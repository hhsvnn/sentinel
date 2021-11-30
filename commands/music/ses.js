module.exports = {
    name: 'volume',
    aliases: ["ses"],

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`<:mavitik:864814562313240576> Bir Sesli Kanala Bağlı Değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<:mavitik:864814562313240576> Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!`);

        if (!client.player.getQueue(message)) return message.channel.send(`<:mavitik:864814562313240576> Şu Anda Çalan Bir Müzik Yok!`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`<:mavitik:864814562313240576> Lütfen Geçerli Bir Sayı Gir!`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 250) return message.channel.send(`<a:voice:915298814703833129> Lütfen Geçerli Bir Sayı Gir \`(1 - 250)\``);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`<a:voice:915298814703833129> Müzik Sesi \`%${parseInt(args[0])}\` Olarak Ayarlandı!`);
    },
};
