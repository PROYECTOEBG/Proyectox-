import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '[❗] 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝘼 𝙐𝙉 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙐𝙎𝘼𝙉𝘿𝙊 @';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '[❗] 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙄𝘼 (𝙓𝙋) 𝙌𝙐𝙀 𝘿𝙀𝙎𝙀𝘼𝙎 𝘼𝙂𝙍𝙀𝙂𝘼𝙍';
  if (isNaN(txt)) throw '[❗] 𝙎𝙄𝙈𝘽𝙊𝙇𝙊 𝙉𝙊 𝘼𝘿𝙈𝙄𝙏𝙄𝘿𝙊, 𝙎𝙊𝙇𝙊 𝙉𝙐𝙈𝙀𝙍𝙊𝙎!';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 1) throw '[❗] 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝘿𝙀 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙄𝘼 (𝙓𝙋) 𝙋𝘼𝙍𝘼 𝘼𝙂𝙍𝙀𝙂𝘼𝙍 𝙀𝙎 1';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`≡ *𝙓𝙋 𝘼𝙂𝙍𝙀𝙂𝘼𝘿𝙊*
┌──────────────
▢  *𝙏𝙊𝙏𝘼𝙇:* ${xp}
└──────────────`);
};
handler.command = ['darxp', 'addexp'];
handler.admin = true;
export default handler;
