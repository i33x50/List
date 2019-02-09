const Discord = require("discord.js");
const client = new Discord.Client();  
    console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Type ➡️ -js.codes`, "https://www.twitch.tv/matrex");
client.user.setStatus("online");
client.on("message", message => {
 if (message.content === "-js.codes") {
  const embed = new Discord.RichEmbed() 
      .setColor("GOLD")
      .setDescription(`
:arrow_down: •••【 أكواد السورس الأساسي 】•••:arrow_down: 

1-**كود السورس الأساسي جافاسكريبت** 	  
2-**كود السورس الأساسي جافا سكريبت بستريمنج**
3-**كود السورس الأساسي جافا سكريبت بليسيينيينج**
4-**كود السورس الأساسي جافا سكريبت بوتشنج**
5-**كود السورس الأساسي جافا سكريبت ببلاينج**
:arrow_down: •••【 أكواد الأوامر الادارية 】•••:arrow_down:
6-**كود اضافة أو ازالة رتبة من الجميع**
7-**كود رينبو**
8-**كود ميوت وفك ميوت**
9-**كود برودكاست**
10-**كود حذف جميع الألوان**
11-**كود طرد**
12-**كود باند**
13-**كود فك باند**
14-**كود فك الباند عن الكل**
15-**كود اخفاء جميع الرومات**
16-**كود اظهار جميع الرومات**
17-** كود عمل قيف أواي بالأيام و الساعات والدقائق و الثواني والفينتو ثانية**
18-**كود تغيير اسم الرتبة اللي تبيها**
20-**كود مسح رسايل الروم**
21-**كود سحب عضو لروم صوتي**
:arrow_down: •••【 أكواد الأوامر العامة 】•••:arrow_down: 

>p ⇏ تغيير بلاينق البوت
>n ⇏ تغيير أسم البوت
>a ⇏ تغير صورة البوت
>t ⇏ تغيير تويتش البوت
`)
   .setFooter("Use: -code [Codes Number]")
   message.channel.sendEmbed(embed)
    
   }
   });
   const adminprefix = ">";
const devs = ['452645257822339084'];
client.on('message', message => {//for dev
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'p')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
  if (message.content.startsWith(adminprefix + 'n')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'a')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else
if (message.content.startsWith(adminprefix + 't')) {
  client.user.setGame(argresult, "https://www.twitch.tv/alawy");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}


    });
