const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} adı ile giriş yapıldı! Shard ID: ${(client.shard.id+1)}/${client.shard.count}`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam!');
  }
});

client.login('token');
