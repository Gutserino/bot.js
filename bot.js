const Discord = require('discord.js');
const client = new Discord.Client();
var jokes  = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    ];
var quotes = [
    "Ich habe große Achtung vor den deutschen Soldaten. In Wirklichkeit sind die Deutschen das einzige anständige in Europa lebende Volk. George S. Patton",
    "Die Deutschen sind unfähig, aus der Geschichte zu lernen.Genauso wie sie 1939 Hitler in den Krieg folgten, so würden sie Heute in ihrer Blindheit, Merkel in den Abgrund folgen. Wladimir Wladimirowitsch Putin",
    "Verbrenne ihre Synagogen, zwinge sie zur Arbeit und gehe mit ihnen nach aller Unbarmherzigkeit um. Martin Luther",
    "Luther war ein großer Mann, ein Riese. Mit einem Ruck durchbrach er die Dämmerung: sah den Juden, wie wir ihn erst heute zu sehen beginnen. Adolf Hitler",
    "Herrgott, gib uns die Kraft, daß wir uns die Freiheit erhalten, unserem Volk, unseren Kindern und unseren Kindeskindern, nicht nur uns Deutschen, sondern auch den anderen Völkern Europas. Denn es ist nicht ein Krieg, den wir alle dieses Mal führen nur für unser deutsches Volk allein, es ist ein Krieg für ganz Europa und damit wirklich für die ganze Menschheit.",
    "Denn nur ein Volk ohne brot hört auf die befreier aus seiner not und erkennt im völkerherd seines Vaterlandes wert und den der die freiheit uns verwehrt.",
    "Veni. Vidi. Vici. - Ich kam.Ich sah.Ich siegte. Julius Caesar",
    "Was interessiert mich mein Geschwätz von gestern. Konrad Adenauer",
    "Ich bin wie ich bin, die einen kennen mich, die anderen können mich. Konrad Adenauer",
    "Alles, was die Sozialisten vom Geld verstehen, ist die Tatsache, dass sie es von anderen haben wollen. Konrad Adenauer",
    "Zuerst ignorieren sie dich, dann lachen sie über dich, dann bekämpfen sie dich und dann gewinnst du. Mahatma Gandhi",
    "Sei du selbst die Veränderung, die du dir wünschst für diese Welt. Mahatma Gandhi",
    "Liebe ist die stärkste Macht der Welt, und doch ist sie die demütigste, die man sich vorstellen kann. Mahatma Gandhi",
    "Stärke wächst nicht aus körperlicher Kraft - vielmehr aus unbeugsamen Willen. Mahatma Gandhi",
    "Die Freiheit der Meinung setzt voraus, daß man eine hat. Heinrich Heine",
    "Wenn du den wahren Charakter eines Menschen erkennen willst, dann gib ihm Macht. Abraham Lincoln",
    "Wer anderen die Freiheit verweigert, verdient sie nicht für sich selbst. Abraham Lincoln",
    "Demokratie ist die Regierung des Volkes, durch das Volk, für das Volk. Abraham Lincoln",
    "Je größer die Lüge, desto mehr Menschen folgen ihr. Adolf Hitler",
    "Und wir wissen, vor uns liegt Deutschland, in uns marschiert Deutschland und hinter uns. Adolf Hitler",
    "Die Amerikaner haben uns verboten Flugzeuge zu bauen, ich sage, wir werden so viele Flugzeuge bauen, dass der Himmel schwarz ist und die Vögel zu Fuß gehen müssen! Adolf Hitler",
    "Die Welt will betrügen oder betrogen werden, darum hat die Welt mit der Wahrheit nichts zu schaffen. Martin Luther",
    "Regierung ist nicht Vernunft, nicht Beredsamkeit – sondern Gewalt. George Washington",
   
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
    message.channel.send("Write ![Command] in the Chat for usage." + "\n" + "-quote Displays a Random quote" + "\n" + "-discord Shows discord invite Link");
  } else
  if (message.content.startsWith(prefix + "quote")) {
    message.channel.send(quotes[Math.floor(Math.random() * quotes.length)]);
  }
    if (message.content.startsWith(prefix + "discord")) {
    message.channel.send("https://discord.gg/nzh5Aw" );
  } 
  if (message.content.startsWith(prefix + "joke")) {
    message.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
  }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
