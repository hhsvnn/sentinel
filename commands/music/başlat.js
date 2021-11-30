module.exports = {
    name: 'play',
    aliases: ['p',"başla","çal"],

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`<:mavitik:864814562313240576> Bir Sesli Kanala Bağlı Değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<:mavitik:864814562313240576> Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!`);

        if (!args[0]) return message.channel.send(`<:mavitik:864814562313240576> Lütfen Bir Şarkı İsmi Yaz!`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};
