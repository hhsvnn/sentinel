module.exports = (client, message, track) => {
    message.channel.send(`<:play:844300167163019324> Çalmaya Başladı \`${track.title}\` | Bağlanılan Kanal: <#${message.member.voice.channel.id}>`);
};
