const free = 5000
const prem = 20000
let handler = async (m, { isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `🎁 𝙔𝙖 𝙧𝙚𝙘𝙤𝙜𝙞𝙨𝙩𝙚 𝙩𝙪 𝙧𝙚𝙘𝙤𝙢𝙥𝙚𝙣𝙨𝙖 𝙙𝙞𝙖𝙧𝙞𝙖\n\n⏱ 𝙑𝙪𝙚𝙡𝙫𝙚 𝙚𝙣 *_${msToTime(time - new Date())}_* `
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  m.reply(`╭「FELICIDADES」
│💸 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼 𝘿𝙄𝘼𝙍𝙄𝘼
│┈┈┈┈┈┈┈┈┈┈┈┈┈
│➯🎁 *RECOMPENSA DIARIA*
│➯▢ *Has recibido:*
│➯🆙 *XP* : +${isPrems ? prem : free}
╰───────────────╯`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['daily', 'claim'] 
handler.register = false
export default handler



function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}
