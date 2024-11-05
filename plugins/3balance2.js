let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
┌───⚖ 𝘽𝘼𝙇𝘼𝙉𝘾𝙀 ⚖
▢ *𝙉𝙤𝙢𝙗𝙧𝙚:* ${name}
▢ *𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖:* ${global.db.data.users[who].exp} ⛏
└──────────────
*Nota:* 
𝙋𝙪𝙚𝙙𝙚𝙨 𝙤𝙗𝙩𝙚𝙣𝙚𝙧 𝙢𝙖𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:
⛏ *.minar*
⛏ *.work*
⛏ *.claim*
🎲 *.menujuego*`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['balance2'] 
handler.register = false
export default handler
