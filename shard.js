const { ShardingManager } = require('discord.js');

const bumbe = new ShardingManager('./server.js', { //main dosyanızı yazın!
	totalShards: 2, //Auto yazılabilir veya farklı bir sayı yazabilirsiniz.
    token: "TOKEN" //Tokeninizi giriniz
});
bumbe.spawn();

bumbe.on('shardCreate', shard => {
    console.log(`${shard.id} İDli shard başlatıldı!`);
});

//Discord.js v12 İçindir. 
