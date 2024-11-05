let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
┌───⚖ 𝘽𝘼𝙇𝘼𝙉𝘾𝙀 ⚖
▢ *𝙉𝙤𝙢𝙗𝙧𝙚:* ${name}
▢ *𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨:* ${global.db.data.users[who].limit} 💎
└──────────────
*Nota:* 
𝙋𝙪𝙚𝙙𝙚𝙨 𝙘𝙤𝙢𝙥𝙧𝙖𝙧 𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:
💎 *.buy <cantidad>*
💎 *.buyall*
🎲 *.menujuego*`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['diamantes', 'balance'] 
handler.register = false
export default handler
