import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    const { key } = await conn.sendMessage(m.chat, {text: `🚀🚀`}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `🚀🚀🚀🚀`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `🚀🚀🚀🚀🚀🚀`, edit: key});
await conn.sendMessage(m.chat, {text: `❱❱ 𝙀𝙉𝙏𝙀𝙉𝘿𝙄𝘿𝙊 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 ❰❰
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
 » 𝙎𝙄𝙎𝙏𝙀𝙈𝘼 
𝙍𝙀𝙄𝙉𝙄𝘾𝙄𝘼𝙉𝘿𝙊 𝘾𝙊𝙉 𝙀́𝙓𝙄𝙏𝙊. ✔️`, edit: key});
    process.send('reset')
  } else throw 'eh'
}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 
handler.rowner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
