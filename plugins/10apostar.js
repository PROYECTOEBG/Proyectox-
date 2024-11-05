/* CREDITOS A https://github.com/FG98F */

const handler = async (m, {args, usedPrefix, command}) => {
  const fa = `
[❗] 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙐𝙎𝘼𝙍 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼: 

📌 𝙀𝙅𝙀𝙈𝙋𝙇𝙊
*${usedPrefix + command} 100*`.trim();
  if (!args[0]) throw fa;
  if (isNaN(args[0])) throw fa;
  const apuesta = parseInt(args[0]);
  const users = global.db.data.users[m.sender];
  const time = users.lastslot + 10000;
  if (new Date - users.lastslot < 10000) throw `⏳ 𝙀𝙎𝙋𝙀𝙍𝙀 ${msToTime(time - new Date())} 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝘼𝙍 𝘼𝙋𝙊𝙎𝙏𝘼𝙉𝘿𝙊 𝙀𝙓𝙋 🎰`;
  if (apuesta < 100) throw '[❗] 𝘿𝙀𝘽𝙀 𝘿𝙀 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙐𝙉 𝙈𝙄𝙉𝙄𝙈𝙊 𝘿𝙀 *100*';
  if (users.exp < apuesta) {
    throw `[❗] 𝙉𝙊 𝘼𝙇𝘾𝘼𝙉𝙕𝘼 𝙋𝘼𝙍𝘼 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙀𝙓𝙋, 𝙇𝙀 𝙍𝙀𝘾𝙊𝙈𝙄𝙀𝙉𝘿𝙊 𝙄𝙉𝙏𝙀𝙍𝘼𝘾𝙏𝙐𝘼𝙍 𝘾𝙊𝙉 𝙀𝙇 𝘽𝙊𝙏 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙍𝙀𝘾𝙐𝙍𝙎𝙊𝙎`;
  }
  const emojis = ['💎', '💸', '💰'];
  let a = Math.floor(Math.random() * emojis.length);
  let b = Math.floor(Math.random() * emojis.length);
  let c = Math.floor(Math.random() * emojis.length);
  const x = [];
  const y = [];
  const z = [];
  for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
  }
  for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
  }
  for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
  }
  let end;
  if (a == b && b == c) {
    end = `*QUE PRO!! HAS GANADO! 🎁 +${apuesta + apuesta} XP*`;
    users.exp += apuesta;
  } else if (a == b || a == c || b == c) {
    end = `*🔮 CASI!!, VUELVA A INTENTAR.*\n*CONSEGUISTE UN BONO DE +10 EXP*`;
    users.exp += 10;
  } else {
    end = `*HA PERDIDO!! ❌ -${apuesta} XP*`;
    users.exp -= apuesta;
  }
  users.lastslot = new Date * 1;
  return await m.reply(
      `
🎰 | *SLOTS* 
────────
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
────────
🎰 | ${end}`);
};
handler.help = ['slot <apuesta>'];
handler.tags = ['game'];
handler.command = ['apostar']
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m ' + seconds + ' s ';
}
