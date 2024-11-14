const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `➪ 𝙈𝙚𝙣𝙨𝙖𝙟𝙚 ${pesan}`;
  let teks = `🌟 𝐋 𝐋 𝐀 𝐌 𝐀 𝐍 𝐃 𝐎 - 𝐆 𝐑 𝐔 𝐏 𝐎 🌟\n\n➪ ${oi}\n\n`;
  for (const mem of participants) {
    teks += `🥷🏻 @${mem.id.split('@')[0]}\n`;
  }
  teks += `└ 𝙋𝙧𝙤𝙮𝙚𝙘𝙩𝙤𝙓`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|llamar|todos|vengan)$/i;
handler.admin = true;
handler.group = true;
export default handler;
