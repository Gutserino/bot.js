const Discord = require('discord.js');
const client = new Discord.Client();
var url = 'http://mcapi.us/server/status?ip=Gutserino88.aternos.me';
 

client.on('ready', () => {

    console.log('I am ready!');

});


// Set the prefix
const prefix = "!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "status")) {
    request(url, function(err, response, body) {
      if(err) {
          console.log(err);
          //return message.reply('Error getting Minecraft server status...');
      }
      body = JSON.parse(body);
      var status = 'Server offline';
      console.log(body.motd);
      if(body.online) {
          if((body.motd=="&cWe are under maintenance.")||(body.players.now>=body.players.max)){
            message.channel.send("Offline");
            //.then(console.log)
            .catch(console.error);
          }else{
            message.channel.send("Online");
            //.then(console.log)
            .catch(console.error);
          }
            if(body.players.now) {
                status = ' ' + body.players.now + '  of  ' + body.players.max;
              } else {
                status = ' 0  of  ' + body.players.max;
        }
      } else {
        message.channel.send("Offline");
        //.then(console.log)
        .catch(console.error);

      }
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
