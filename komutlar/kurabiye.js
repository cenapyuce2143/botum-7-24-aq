  const Discord = require("discord.js");


  module.exports.run = (client, msg) => {
      msg.channel.sendMessage("canım gel sana kurabiye vereceğim")
      msg.react('🍪')
  };

  module.exports.help = {
      name: 'kurabiye'
    };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'kurabiye',
    description: 'size kurabiye verir',
    usage: 'kurabiye'
  };