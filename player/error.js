module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`<:mavitik:864814562313240576> Bu Sunucuda Çalınan Müzik Yok!`);
            break;
        case 'NotConnected':
            message.channel.send(`<:mavitik:864814562313240576> Herhangi Bir Ses Kanalına Bağlı Değilsiniz!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`<:mavitik:864814562313240576> Ses Kanalınıza Katılamıyorum, Lütfen İzinlerimi Kontrol Edin!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`<:mavitik:864814562313240576> ${args[0].title} İsimli Müzik Bulunamadı!`);
            break;
        case 'MusicStarting':
            message.channel.send(`**Müzik Başlıyor Lütfen Bekleyin!**`);
            break;

    };
};
