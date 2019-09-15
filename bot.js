const Discord = require('discord.js');
const client = new Discord.Client();

var quotes = [
    "Ich habe große Achtung vor den deutschen Soldaten. In Wirklichkeit sind die Deutschen das einzige anständige in Europa lebende Volk. George S. Patton",
    "Die Deutschen sind unfähig, aus der Geschichte zu lernen.Genauso wie sie 1939 Hitler in den Krieg folgten, so würden sie Heute in ihrer Blindheit, Merkel in den Abgrund folgen. Wladimir Wladimirowitsch Putin",
    "Verbrenne ihre Synagogen, zwinge sie zur Arbeit und gehe mit ihnen nach aller Unbarmherzigkeit um. Martin Luther",
    "Luther war ein großer Mann, ein Riese. Mit einem Ruck durchbrach er die Dämmerung: sah den Juden, wie wir ihn erst heute zu sehen beginnen. Adolf Hitler",
    "Herrgott, gib uns die Kraft, daß wir uns die Freiheit erhalten, unserem Volk, unseren Kindern und unseren Kindeskindern, nicht nur uns Deutschen, sondern auch den anderen Völkern Europas. Denn es ist nicht ein Krieg, den wir alle dieses Mal führen nur für unser deutsches Volk allein, es ist ein Krieg für ganz Europa und damit wirklich für die ganze Menschheit.",
    "Denn nur ein Volk ohne brot hört auf die befreier aus seiner not und erkennt im völkerherd seines Vaterlandes wert und den der die freiheit uns verwehrt.",
    ];

client.on('ready', () => {
    console.log('Jawohl, mein Führer!');

});


// Set the prefix
const prefix = "!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "command")) {
    message.channel.send("-quote Displays a Random Quote");
  } else
  if (message.content.startsWith(prefix + "quote")) {
    message.channel.send(quotes[Math.floor(Math.random() * quotes.length)]);
  }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
