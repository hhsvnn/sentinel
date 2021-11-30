module.exports = {
    name: 'resume',
    aliases: ["devam"],

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`<:mavitik:864814562313240576> Bir Sesli Kanala Bağlı Değilsin*`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<:mavitik:864814562313240576> Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!`);

        if (!client.player.getQueue(message)) return message.channel.send(`<:mavitik:864814562313240576> Şu Anda Çalan Bir Müzik Yok!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`<:mavitik:864814562313240576> Müzik Zaten Çalmaya Devam Ediyor!`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`<:play:844300167163019324> \`${client.player.getQueue(message).playing.title}\` İsimli Şarkı Devam Ediyor!`);
    },
};
