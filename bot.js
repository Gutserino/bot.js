const Discord = require('discord.js');
const client = new Discord.Client();

var facts = [
    "1",
    "2",
    "3",
    ];

client.on('ready', () => {
    client.user.setActivity("Celebration Bunker");
    console.log('Jawohl, mein Führer!');

});


// Set the prefix
const prefix = "!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "status")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "joke")) {
    message.channel.send(facts[Math.floor(Math.random() * facts.length)]);
  }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
