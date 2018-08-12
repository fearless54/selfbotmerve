const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();


client.on('ready', () => { // client (botumuz) hazır olduğunda
  client.user.setActivity('Sevgilisiyle', { type: "PLAYING"}); // oynuyor kısmını "Sana oynuyor" yapsın
  console.log(`Hazırım!`); // konsola "Hazırım" yazsın
});
client.on("guildMemberAdd", member => {
    member.send('Sunucumuza **Hoşgeldin** Aşkım! :heart: \n Kural falan yok full aktifiz gel senide bekliyoruz!\n **Oyun oynuyoruz sohbet ediyoruz sövüşüyoruz**!\n İsminin başına **! LΛ ☍ veya sonuna LΛ ekleyerek ekip** rolü alabilirsin ve kalbim senindir. :heart: \n  Seni **Light Army** Krallığına davet ediyorum beni kırmayıp gelirmisin? :crown: :heart:\n **Ayrıca arkadaşlarını çağırabilirsin davet linkimiz:** https://discord.gg/UJMFMcX \n https://pa1.narvii.com/6644/fa4a761677a4c3b54ed9979cb51f48556823ea0a_hq.gif **');

    //member.guild.defaultChannel.sendMessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
})
client.on("guildMemberRemove", member => {
    member.send('Sunucumuza **Hoşgeldin** Aşkım! :heart: \n Kural falan yok full aktifiz gel senide bekliyoruz!\n **Oyun oynuyoruz sohbet ediyoruz sövüşüyoruz**!\n İsminin başına **! LΛ ☍ veya sonuna LΛ ekleyerek ekip** rolü alabilirsin ve kalbim senindir. :heart: \n  Seni **Light Army** Krallığına davet ediyorum beni kırmayıp gelirmisin? :crown: :heart:\n **Ayrıca arkadaşlarını çağırabilirsin davet linkimiz:** https://discord.gg/UJMFMcX \n https://pa1.narvii.com/6644/fa4a761677a4c3b54ed9979cb51f48556823ea0a_hq.gif **');

    //member.guild.defaultChannel.sendMessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
})


client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'sa') {
message.author.send('Sunucumuza **Hoşgeldin** Aşkım! :heart: \n Kural falan yok full aktifiz gel senide bekliyoruz!\n **Oyun oynuyoruz sohbet ediyoruz sövüşüyoruz**!\n İsminin başına **! LΛ ☍ veya sonuna LΛ ekleyerek ekip** rolü alabilirsin ve kalbim senindir. :heart: \n  Seni **Light Army** Krallığına davet ediyorum beni kırmayıp gelirmisin? :crown: :heart:\n **Ayrıca arkadaşlarını çağırabilirsin davet linkimiz:** https://discord.gg/UJMFMcX \n https://pa1.narvii.com/6644/fa4a761677a4c3b54ed9979cb51f48556823ea0a_hq.gif **')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'mute') {
message.author.send('Sunucumuza **Hoşgeldin** Aşkım! :heart: \n Kural falan yok full aktifiz gel senide bekliyoruz!\n **Oyun oynuyoruz sohbet ediyoruz sövüşüyoruz**!\n İsminin başına **! LΛ ☍ veya sonuna LΛ ekleyerek ekip** rolü alabilirsin ve kalbim senindir. :heart: \n  Seni **Light Army** Krallığına davet ediyorum beni kırmayıp gelirmisin? :crown: :heart:\n **Ayrıca arkadaşlarını çağırabilirsin davet linkimiz:** https://discord.gg/UJMFMcX \n https://pa1.narvii.com/6644/fa4a761677a4c3b54ed9979cb51f48556823ea0a_hq.gif **')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'hb') {
message.author.send('Sunucumuza **Hoşgeldin** Aşkım! :heart: \n Kural falan yok full aktifiz gel senide bekliyoruz!\n **Oyun oynuyoruz sohbet ediyoruz sövüşüyoruz**!\n İsminin başına **! LΛ ☍ veya sonuna LΛ ekleyerek ekip** rolü alabilirsin ve kalbim senindir. :heart: \n  Seni **Light Army** Krallığına davet ediyorum beni kırmayıp gelirmisin? :crown: :heart:\n **Ayrıca arkadaşlarını çağırabilirsin davet linkimiz:** https://discord.gg/UJMFMcX \n https://pa1.narvii.com/6644/fa4a761677a4c3b54ed9979cb51f48556823ea0a_hq.gif **')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'as') {
message.author.send('Sunucumuza **Hoşgeldin** Aşkım! :heart: \n Kural falan yok full aktifiz gel senide bekliyoruz!\n **Oyun oynuyoruz sohbet ediyoruz sövüşüyoruz**!\n İsminin başına **! LΛ ☍ veya sonuna LΛ ekleyerek ekip** rolü alabilirsin ve kalbim senindir. :heart: \n  Seni **Light Army** Krallığına davet ediyorum beni kırmayıp gelirmisin? :crown: :heart:\n **Ayrıca arkadaşlarını çağırabilirsin davet linkimiz:** https://discord.gg/UJMFMcX \n https://pa1.narvii.com/6644/fa4a761677a4c3b54ed9979cb51f48556823ea0a_hq.gif **')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'oç') {
message.author.send('Sunucumuza **Hoşgeldin** Aşkım! :heart: \n Kural falan yok full aktifiz gel senide bekliyoruz!\n **Oyun oynuyoruz sohbet ediyoruz sövüşüyoruz**!\n İsminin başına **! LΛ ☍ veya sonuna LΛ ekleyerek ekip** rolü alabilirsin ve kalbim senindir. :heart: \n  Seni **Light Army** Krallığına davet ediyorum beni kırmayıp gelirmisin? :crown: :heart:\n **Ayrıca arkadaşlarını çağırabilirsin davet linkimiz:** https://discord.gg/UJMFMcX \n https://pa1.narvii.com/6644/fa4a761677a4c3b54ed9979cb51f48556823ea0a_hq.gif **')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'partner') {
message.author.send('Sunucumuza **Hoşgeldin** Aşkım! :heart: \n Kural falan yok full aktifiz gel senide bekliyoruz!\n **Oyun oynuyoruz sohbet ediyoruz sövüşüyoruz**!\n İsminin başına **! LΛ ☍ veya sonuna LΛ ekleyerek ekip** rolü alabilirsin ve kalbim senindir. :heart: \n  Seni **Light Army** Krallığına davet ediyorum beni kırmayıp gelirmisin? :crown: :heart:\n **Ayrıca arkadaşlarını çağırabilirsin davet linkimiz:** https://discord.gg/UJMFMcX \n https://pa1.narvii.com/6644/fa4a761677a4c3b54ed9979cb51f48556823ea0a_hq.gif **')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'tm') {
message.author.send('Sunucumuza **Hoşgeldin** Aşkım! :heart: \n Kural falan yok full aktifiz gel senide bekliyoruz!\n **Oyun oynuyoruz sohbet ediyoruz sövüşüyoruz**!\n İsminin başına **! LΛ ☍ veya sonuna LΛ ekleyerek ekip** rolü alabilirsin ve kalbim senindir. :heart: \n  Seni **Light Army** Krallığına davet ediyorum beni kırmayıp gelirmisin? :crown: :heart:\n **Ayrıca arkadaşlarını çağırabilirsin davet linkimiz:** https://discord.gg/UJMFMcX \n https://pa1.narvii.com/6644/fa4a761677a4c3b54ed9979cb51f48556823ea0a_hq.gif **')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'tag') {
message.author.send('Sunucumuza **Hoşgeldin** Aşkım! :heart: \n Kural falan yok full aktifiz gel senide bekliyoruz!\n **Oyun oynuyoruz sohbet ediyoruz sövüşüyoruz**!\n İsminin başına **! LΛ ☍ veya sonuna LΛ ekleyerek ekip** rolü alabilirsin ve kalbim senindir. :heart: \n  Seni **Light Army** Krallığına davet ediyorum beni kırmayıp gelirmisin? :crown: :heart:\n **Ayrıca arkadaşlarını çağırabilirsin davet linkimiz:** https://discord.gg/UJMFMcX \n https://pa1.narvii.com/6644/fa4a761677a4c3b54ed9979cb51f48556823ea0a_hq.gif **')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'hm') {
message.author.send('Sunucumuza **Hoşgeldin** Aşkım! :heart: \n Kural falan yok full aktifiz gel senide bekliyoruz!\n **Oyun oynuyoruz sohbet ediyoruz sövüşüyoruz**!\n İsminin başına **! LΛ ☍ veya sonuna LΛ ekleyerek ekip** rolü alabilirsin ve kalbim senindir. :heart: \n  Seni **Light Army** Krallığına davet ediyorum beni kırmayıp gelirmisin? :crown: :heart:\n **Ayrıca arkadaşlarını çağırabilirsin davet linkimiz:** https://discord.gg/UJMFMcX \n https://pa1.narvii.com/6644/fa4a761677a4c3b54ed9979cb51f48556823ea0a_hq.gif **')
  }
})
client.on("guildCreate", guild => {
  console.log(`Yeni sunucuya katıldım: ${guild.name}\n. Bu sunucu ${guild.memberCount} üye!`);
});
client.on("guildDelete", guild => {
  console.log(`Hey beni çıkardılar ;(: ${guild.name}`);
});



client.login("NDc4MDQ0NDMxOTEyNzk2MTYw.DlHAHA.WutoETOv4Ta2_8STzq2Jrjd0ZKs");
