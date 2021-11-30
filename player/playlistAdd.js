module.exports = (client, message, queue, playlist) => {
    message.channel.send(`<:play:844300167163019324> ${playlist.title} Müzik Çalma Sırasına Eklendi! \`(${playlist.tracks.length} Toplam Şarkı)\`**`);
};
