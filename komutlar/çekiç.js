const Discord = require('discord.js');



exports.run = function(client, message, args) {
  
    var soru = args.join(' ');
    
      if(!soru) return message.reply('Bir işlem belirtin. **Doğru Kullanım**: !çekiç <kişi>')
  else {
          message.reply(soru + "adlı kulanıya bi çekiç vurdu var ya öldü :hammer:")
      }


  };  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiç', 
  description: 'çekiç',
  usage: 'çekiç <kişi>'
};
