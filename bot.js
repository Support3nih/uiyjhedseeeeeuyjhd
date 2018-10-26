const Discord = require("discord.js");
const client = new Discord.Client();

client.user.setGame(`حبيبي ممكن تدخل السرفر <3`,'https://www.twitch.tv/TEST-Broadcast');

client.on('ready', () => {

console.log('iiFireGame');

});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/NvNu3xw ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login("NTA1NDA5NjA4NzA2NDI0ODQz.DrUyUg.2PdG0DuH_BPqiyDbtKV3WTgWOHA");
