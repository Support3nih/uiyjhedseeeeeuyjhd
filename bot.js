const Discord = require("discord.js");
const client = new Discord.Client();

client.user.setGame(`حبيبي ممكن تدخل السرفر <3`,'https://www.twitch.tv/TEST-Broadcast');

client.on('ready', () => {

console.log('iiFireGame');

});


client.on("guildMemberAdd", msg => {
    var AlphaE = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(msg.user.username, msg.user.avatarURL)
  .setThumbnail(msg.user.avatarURL)
  .setTitle(`
  مرحبا بك في السيرفر
  نتمى ان تدخل الي السيرفر
  `)
  .addField("هذي الرساله خاصه بك يا حبيبي", `${msg.user.tag}`, true)
  .addField(`هذا الرابط خاصه بك`,`https://discord.gg/NvNu3xw`, true)
   .setFooter(msg.user.tag, msg.user.avatarURL, true)
  msg.user.sendMessage(AlphaE);
  });

client.login("NTA1NDA5NjA4NzA2NDI0ODQz.DrUyUg.2PdG0DuH_BPqiyDbtKV3WTgWOHA");