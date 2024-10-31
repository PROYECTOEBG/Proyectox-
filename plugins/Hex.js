import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
🌊 *𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙰𝚀𝚄𝙰 𝙼𝙰𝙽*🧜🏼‍♂️
🔱𝙼𝙾𝙳𝙰𝙻𝙸𝙳𝙰𝙳: *𝙲𝚄𝙰𝙳𝚁𝙸𝙻𝙰𝚃𝙴𝚁𝙾*
🐚𝙷𝙾𝚁𝙰: 
🐳𝙲𝙾𝙻𝙾𝚁:
💦𝙲𝙰𝚂𝙸𝙻𝙻𝙰𝚂:

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1

🔱•
🌊•
🌊•
🌊•

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2

🔱•
🌊•
🐳•
🌊•

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 3

🔱•
🌊•
🐋•
🌊•

𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦/𝗥𝗢𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦

🦈•
🦈•


•𝘾𝙐𝘼𝙇𝙌𝙐𝙄𝙀𝙍 𝘿𝙐𝘿𝘼 𝙌𝙐𝙀 𝙏𝙀𝙉𝙂𝘼𝙉 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼𝙍 

•𝗖𝗨𝗠𝗣𝗟𝗜𝗥 𝗖𝗢𝗡 𝗟𝗔𝗦 𝗥𝗘𝗚𝗟𝗔𝗦 𝗤𝗨𝗘 𝗦𝗘 𝗟𝗘𝗦 𝗗𝗔 𝗬 𝗘𝗦𝗧𝗔𝗥 10 𝗠𝗜𝗡𝗨𝗧𝗢𝗦 𝗔𝗡𝗧𝗘𝗦 ~EN DC~
               
` 
}
handler.command = /^(cuadrilista)$/i
handler.register = false
handler.group = true
handler.admin = true
export default handler
