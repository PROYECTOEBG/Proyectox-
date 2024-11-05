const handler = async (m, {conn, isPrems}) => {
  const hasil = Math.floor(Math.random() * 1000);
  const time = global.db.data.users[m.sender].lastmiming + 600000;
  if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `⏱ 𝙀𝙎𝙋𝙀𝙍𝘼 ${msToTime(time - new Date())}𝙋𝘼𝙍𝘼 𝙑𝙊𝙇𝙑𝙀𝙍 𝘼 𝙈𝙄𝙉𝘼𝙍`;
  m.reply(`*[ ⛏ ] 𝙂𝙀𝙉𝙄𝘼𝙇, 𝙈𝙄𝙉𝘼𝙎𝙏𝙀 ${hasil} 𝙓𝙋 ⛏ ⛏ ⛏*`);
  global.db.data.users[m.sender].lastmiming = new Date * 1;
};
handler.help = ['minar'];
handler.tags = ['xp'];
handler.command = ['minar', 'miming', 'mine'];
handler.fail = null;
handler.exp = 0;
export default handler;
handler.register = false

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' 𝙈𝙞𝙣𝙪𝙩𝙤𝙨 𝙮 ' + seconds + ' 𝙎𝙚𝙜𝙪𝙣𝙙𝙤𝙨 ';
}
