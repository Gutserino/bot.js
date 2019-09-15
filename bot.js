const Discord = require('discord.js');
const client = new Discord.Client();

var messages = ["Hello!", "How are you doing?", "Howdy!"]

client.on('ready', () => {

    console.log('I am ready!');

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
    message.channel.send(random.choice(messages));
  }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
