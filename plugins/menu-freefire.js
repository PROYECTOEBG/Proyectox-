import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
𝘏𝘰𝘭𝘢 @${m.sender.split("@")[0]}
𝘧𝘦𝘤𝘩𝘢 : ${week}, ${date} 

╭──𝙈𝙀𝙉𝙐 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀───✧
│ 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰 
╰────────────────✧

▸▸ 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 𝙂𝙂 ◂◂
│ ┊➺ 🗼 .𝘉𝘦𝘳𝘮𝘶𝘥𝘢
│ ┊➺ 🏝️ .𝘗𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
│ ┊➺ 🏜️ .𝘒𝘢𝘭𝘢𝘩𝘢𝘳𝘪
│ ┊➺ 🏗️ .𝘕𝘦𝘹𝘵𝘦𝘳𝘳𝘢
│ ┊➺ 🏞️ .𝘈𝘭𝘱𝘦𝘴
│ ┊➺ 📕 .𝘢𝘨𝘦𝘯𝘥𝘢𝘴𝘦𝘮𝘢𝘯𝘢𝘭

▸▸ 𝙍𝙀𝙂𝙇𝘼𝙎 𝙂𝙀𝙉𝙀𝙍𝘼𝙇𝙀𝙎 ◂◂
│ ┊➺ 🧾 .𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘭𝘬
│ ┊➺ 🧾 .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴
│ ┊➺ 🧾 .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴2

▸▸ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 🇲🇽🇨🇴 ◂◂
│ ┊➺ ⚔ .𝟦𝘷𝘴𝟦
│ ┊➺ ⚔ .𝟨𝘷𝘴𝟨
│ ┊➺ ⚔ .𝟪𝘷𝘴𝟪
│ ┊➺ ⚔ .𝟣𝟤𝘷𝘴𝟣𝟤
│ ┊➺ ⚔ .𝟣𝟨𝘷𝘴𝟣𝟨
│ ┊➺ ⚔ .𝟤𝟢𝘷𝘴𝟤𝟢
│ ┊➺ ⚔ .𝟤𝟦𝘷𝘴𝟤𝟦
│ ┊➺ ⚔ .𝘴𝘤𝘳𝘪𝘮
│ ┊➺ ⚔ .s𝘤𝘳𝘪𝘮2
│ ┊➺ ⚔ .𝘨𝘶𝘦𝘳𝘳𝘢

▸▸ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 🇵🇪🇦🇷 ◂◂
│ ┊➺ ⚔ .𝟦𝘷𝘴𝟦𝘴𝘶𝘳
│ ┊➺ ⚔ .𝟨𝘷𝘴𝟨𝘴𝘶𝘳
│ ┊➺ ⚔ .𝟪𝘷𝘴𝟪𝘴𝘶𝘳
│ ┊➺ ⚔ .𝟣𝟤𝘷𝘴𝟣𝟤𝘴𝘶𝘳
│ ┊➺ ⚔ .𝟣𝟨𝘷𝘴𝟣𝟨𝘴𝘶𝘳
│ ┊➺ ⚔ .𝟤𝟢𝘷𝘴𝟤𝟢𝘴𝘶𝘳
│ ┊➺ ⚔ .𝟤𝟦𝘷𝘴𝟤𝟦𝘴𝘶𝘳
│ ┊➺ ⚔ .𝘴𝘤𝘳𝘪𝘮𝘴𝘶𝘳
│ ┊➺ ⚔ .s𝘤𝘳𝘪𝘮2𝘴𝘶𝘳
│ ┊➺ ⚔ .𝘨𝘶𝘦𝘳𝘳𝘢
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
 `.trim()
    
const vi = ['https://telegra.ph/file/523e4cd6e968fcab7c160.mp4',
'https://telegra.ph/file/6bd6f23b008b1d0d45653.mp4',
'https://telegra.ph/file/8a0f9a4a5b0168fddaef5.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menuff|menufreefire|menu2)$/i
handler.register = true
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
