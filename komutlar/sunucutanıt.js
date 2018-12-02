const Discord = require('discord.js');



exports.run = function(client, message, args) {
  
  if (!message.guild) {
    return message.author.send('sunucutanıt komutu sadece sunucularda kullanılabilir.');
  }
    var soru = args.join(' ');
    
      if(!soru) return message.reply('Bir işlem belirtin. **Doğru Kullanım**: !sunucutanıt <davetlinki>')
  else {
          client.channels.get("131").sendMessage("deneme sunucu tanıt: " + soru )
    message.reply('destek sunucusunda paylaşıdı')
      }


  };  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucutanıt', 
  description: 'sunucunuzu destek sunucusunda tanıtır',
  usage: 'sunucutanıt <davetlinki>'
};
