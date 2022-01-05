const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config.js');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`${file} İsimli Komut Yüklendi!`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of player) {
    console.log(`Müzik Listesi İçin ${file} İsimli Dosya Yüklendi!`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

for (const file of events) {
    console.log(`Discord.js Modülü İçin ${file} Eventi Yüklendi!`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

client.login("ODAzOTY4MDc3MDM3MDQzNzgy.YBFfng.9Ms-QTDCFvtD6wMXR8nZ7CIEA_g");

client.on("ready", () => {
console.log("Toplamda şu kadar sunucuda : " + client.guilds.cache.size);
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".davet") 
    return message.channel.send(`https://top.gg/bot/803968077037043782`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".tsay") 
    return message.channel.send("<a:kelebek:859123930085851206>  Toplamda şu kadar sunucuda : " + client.guilds.cache.size);
});




client.on("message", message => {
  if(message.content.toLowerCase() == ".tsay") 
  return message.channel.send("<a:kelebek:859123930085851206>  Toplam kullanıcı : " + client.users.cache.size);
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".destek") 
    return message.channel.send(`<a:kristal:837466540126502982> İŞTE BOTUN DESTEK SUNUCUSU: \nhttps://discord.gg/2SrwW8yEZ7`)
});

client.on("guildCreate", guild => {
    let dcs_kanal = client.channels.cache.get("926767706529751110")
  guild.channels
      .cache.filter(mr => mr.type === "text")
      .random()
      .createInvite()
      .then(async invite => {
        const dcs = new discord.MessageEmbed()
          .setTitle("SUNUCUYA EKLENDİM")
          .setColor("GREEN")
          .addField("<:tik:837466118314393630> Sunucu İsmi", `\`${guild.name}\``)
          .addField("<:tik:837466118314393630> Üye Sayısı", `\`${guild.members.cache.size}\``)
          .addField("<:tik:837466118314393630> Kurucu", `\`${guild.owner.user.tag}\``)
          .addField("<:tik:837466118314393630> Davet", `https://discord.gg/${invite.code}`);
        dcs_kanal.send(dcs);
      });
  });
  
  
  client.on("guildDelete", guild => {
    let dcs_kanal = client.channels.cache.get("926767706529751110")
  
   const dcs = new discord.MessageEmbed()
  .setTitle("SUNUCUDAN AYRILDIM")
  .setColor("RED")
  .addField('<:arp:837466163964674138> Sunucu İsmi', `\`${guild.name}\``)
  .addField('<:arp:837466163964674138> Üye Sayısı', `\`${guild.members.cache.size}\``)
  dcs_kanal.send(dcs)
  });     

