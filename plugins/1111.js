let handler = async (m, { conn, isRowner}) => {
let _muptime
let totalreg = Object.keys(global.db.data.users).length
let totalchats = Object.keys(global.db.data.chats).length
let pp = imagen7
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
const used = process.memoryUsage()
const _uptime = process.uptime() * 1000;
const uptime = clockString(_uptime);
const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
let yaemori = `╭━━━━━━━━━━━━━━✠
┃  *» Buen día mi creador*
┃    *Kevv* 
┃
┃ 〽️ Estoy activo desde: ${uptime}
┃  
╰━ 𝗘𝗹𝗶𝘁𝗲𝗕𝗼𝘁𝗚𝗹𝗼𝗯𝗮𝗹`
const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://www.atom.bio/theshadowbrokers-team`, "sourceUrl": `https://instagram.com/jeffomx15?igshid=OGQ5ZDc2ODk2ZA==`}}}, {quoted: fkontak2});
}

handler.customPrefix = /es|est/i 
handler.command = new RegExp
handler.exp = 0
handler.owner = true

export default handler;
function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`\n┃ ❖ ` + d, ' Día(s) ', `\n┃ ❖ ` + h, ' Hora(s) ', `\n┃ ❖ ` + m, ' Minuto(s) ', `\n┃ ❖ ` + s, ' Segundo(s) '].map((v) => v.toString().padStart(2, 0)).join('');
}
