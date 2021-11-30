module.exports = {
    name: 'skip',
    aliases: ['sk',"geç","atla","s"],

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} - Bir Sesli Kanala Bağlı Değilsin!**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<:mavitik:864814562313240576> Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!`);

        if (!client.player.getQueue(message)) return message.channel.send(`<:mavitik:864814562313240576> Şuanda Çalan Bir Müzik Yok!`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`<:ileri:844300887232479303>  Çalan Müzik Değiştirildi ve Sıradaki Diğer Müziğe Geçildi!`);
    },
};
