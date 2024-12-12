let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://telegra.ph/file/b2cf084886a7a299bc3b2.jpg' 
let texto = `Los más usados por grupos: 

.on audios
.off audios
.admins y *mensaje* (Envia información a los administradores)
.todos y *mensaje* (etiqueta al grupo con mención) 
.notificar y *mensaje* (notifica al grupo sin mención) 
.grupo abrir (abre grupo) 
.grupo cerrar (cierra grupo) 
.fantasmas (muestra los inactivos) 
.on Bienvenida (activa bienvenidas y despedidas) 
.off Bienvenida (desactiva bienvenidas y despedidas) 
.editarwelcome PON FRASE @user (Bienvenidas del grupo) 
.editarbye PON FRASE @user (Despedidas del grupo) 
.daradmin *@tag* (da admin a alguien)
.quitaradmin *@tag* (retira admin a alguien)
.on modoadmin (Bot solo para admins)
.off modoadmin (Desactivar y usar todos en general)
.on simi (Habla con el Bot)
.off simi (Desactivar chat con el Bot)
.del (elimina mensaje de alguien) 
.menu (MUESTRA TODOS LOS +200 COMANDOS)
.reporte y *Mensaje* (PARA ENVIARME REPORTES DEL DEL BOT Y PODER AYUDARTE)
.on (Revisas la totalidad de que deseas activar o desactivar)`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.command = ['guia'] 
handler.register = true
export default handler
