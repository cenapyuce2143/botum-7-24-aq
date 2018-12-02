const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
    let log = message.guild.channels.find('name','log');
    if (!log) return message.reply('log adlı kanalı bulamıom');
    else {
      log.send("burda log kanalı olarak belirlendim")
      message.reply("#log kanalına göz atınız")
    }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'log',
  description: 'sunucududaki log kanalına logları yazar',
  usage: 'log'
};
