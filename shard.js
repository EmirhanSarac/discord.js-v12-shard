const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./server.js', { //main dosyanızı yazın!
	totalShards: 2, //Auto yazılabilir veya farklı bir sayı yazabilirsiniz.
    token: "TOKEN" //Tokeninizi giriniz
});
manager.spawn();

manager.on('shardCreate', shard => {
    console.log(`${shard.id} İDli shard başlatıldı!`);
});

//Discord.js v12 İçindir. 
