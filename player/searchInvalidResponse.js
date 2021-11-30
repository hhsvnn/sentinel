module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`<a:voice:915298814703833129> Müzik Seçimi İptal Edildi!`);
    } else message.channel.send(`<a:voice:915298814703833129> Geçerli Bir Sıra Numarası Göndermeniz Gerekli! | \`1 - ${tracks.length}\``);
};
