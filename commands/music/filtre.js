module.exports = {
    name: 'filter',
    aliases: ["filtre", "efekt"],

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`<:mavitik:864814562313240576> Bir Sesli Kanala Bağlı Değilsin!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<:mavitik:864814562313240576> Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!`);

        if (!client.player.getQueue(message)) return message.channel.send(`<:mavitik:864814562313240576> Şuanda Bir Müzik Çalmıyor!`);

        if (!args[0]) return message.channel.send(`<:search:844300676036820992> Lütfen Geçerli Bir Efekt Filtresi İsmi Yaz!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`<:mavitik:864814562313240576> Böyle Bir Efekt Filtresi Yok!`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`<a:ghostheart:859090821645991956>Filtreyi Müziğe Ekliyorum, Lütfen Bekleyin... Not: \`Müzik Ne Kadar Uzunsa, O Kadar Uzun Sürecektir!\``);
        else message.channel.send(`<a:ghostheart:859090821645991956> Müzikteki Filtreyi Devre Dışı Bırakıyorum, Lütfen Bekleyin!`);
    },
};
