import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
╭──────⚔──────╮
ㅤㅤㅤ4 𝐕𝐄𝐑𝐒𝐔𝐒 4
╰──────⚔──────╯
╭──────────────╮
│ㅤ⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 
│ㅤ🇦🇷 𝐀𝐑𝐆 : 
│ㅤ🇵🇪 𝐏𝐄𝐑 : 
│➥ 𝐌𝐎𝐃𝐀𝐋𝐈𝐃𝐀𝐃: 
│➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
│
│👑 ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│⚜️ ➤ 
│⚜️ ➤ 
╰─────────────╯
          
` 
}
handler.command = /^(4vs4sur)$/i
handler.register = true
handler.group = true
handler.admin = true
export default handler
