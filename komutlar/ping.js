const Discord = require('discord.js');
module.exports.run = function(client, message, args) {
message.reply('Pong! **' + client.ping + '** ms'); 
}

module.exports.help = {
    name: 'ping'
  };
                       
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'], 
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};