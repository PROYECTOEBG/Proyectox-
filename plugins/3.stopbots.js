let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `Por qué no vas directamente con el numero del Bot`, m)
else {
await conn.reply(m.chat, `✅ *DESCONECTADO*`, m)
conn.ws.close()
}}
handler.command = /^(berhenti|stop|detener)$/i
  
export default handler
