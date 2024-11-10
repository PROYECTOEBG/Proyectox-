import uploadFile from '../../lib/uploadFile.js'
import uploadImage from '../../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '⚠️️ *_Responde a una imagen/video._*'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`𝗣𝗘𝗦𝗢 𝗗𝗘𝗟 𝗔𝗥𝗖𝗛𝗜𝗩𝗢 📁\n${media.length} Byte(s) 

⭐ ${isTele ? '𝖲𝖨𝖭 𝖥𝖤𝖢𝖧𝖠 𝖣𝖤 𝖢𝖠𝖣𝖴𝖢𝖨𝖣𝖠𝖣' : '(Desconocido)'} 
🌎 𝖫𝖨𝖭𝖪:\n${link}
  `)
}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = ['upload', 'tourl']

export default handler
