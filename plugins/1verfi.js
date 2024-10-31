// CÓDIGO CREADO POR GataNina-Li : https://github.com/GataNina-Li 
import { createHash } from 'crypto'
let nombre = 0, edad = 0, genero = 0, bio = 0, identidad = 0, pasatiempo = 0, registro, _registro, fecha, hora, tiempo, registrando
let pas1 = 0, pas2 = 0, pas3 = 0, pas4 = 0, pas5 = 0  

let handler = async function (m, { conn, text, command, usedPrefix }) {
let key 
let sinDefinir = '😿 No encontrada'
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
}) 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch((_) => gataMenu)
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
let nombreWA = await usedPrefix + conn.getName(m.sender) //'@' + m.sender.split("@s.whatsapp.net")[0]
let user = global.db.data.users[m.sender]
let verificar = new RegExp(usedPrefix)
let biografia = await conn.fetchStatus(m.sender).catch(_ => 'undefined')
bio = biografia.status?.toString() || sinDefinir
	
let intervalId
function mensajeRegistro() {
if (edad === 0) {
clearInterval(intervalId)	
registrando = false
return
}
if (user.registered === true) {
return 
}
if (typeof genero === 'string') {
global.db.data.users[m.sender]['registroC'] = true
registrando = false
conn.reply(m.chat, `*SU TIEMPO DE REGISTRO HA TERMINADO!!*\n\n_Si no continúa en este momento su registro no se guardará, si guarda más tarde su registro se habrá perdido_\n\n*Para continuar escriba:* ${usedPrefix}finalizar`, fkontak, m)
}else{
clearInterval(intervalId)
global.db.data.users[m.sender]['registroR'] = true		
registrando = false
conn.reply(m.chat, `*SU TIEMPO DE REGISTRO HA TERMINADO!!*\n\n_Si no continúa en este momento su registro no se guardará, si guarda más tarde su registro se habrá perdido_\n\n*Para continuar escriba:* ${usedPrefix}finalizar`, fkontak, m)}
}
		
if (user.registered === true) return conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}*YA ESTÁ REGISTRADO!!*\n*SI QUIERE ANULAR SU REGISTRO, USE ESTE COMANDO*\n*${usedPrefix}unreg numero de serie*\n\n*SI NO RECUERDA SU NÚMERO DE SERIE, USE ESTE COMANDO*\n*${usedPrefix}myns*`, fkontak, m)	

let groupID = '120363146016943755@g.us' 
try {
let groupMetadata = await conn.groupMetadata(groupID);
let groupMembers = groupMetadata.participants.map(participant => participant.id || participant.jid); 

if (!groupMembers.includes(m.sender)) {
throw `*👀 CÓMO DESEA REGISTRARSE?* Antes de registrarte primero debes unirte al grupo requerido:*\nhttps://chat.whatsapp.com/KNwcGS4PCEN5qjbHD5VDZM\n\n*• Después usar el comando de la siguiente manera:*\n📑 *REGISTRO RÁPIDO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n\n*Escriba para el registro rápido:*\n${usedPrefix}reg1 nombre edad\n\n🗂️ *REGISTRO COMPLETO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n• Premium Temporal Gratis\n• Más opciones para este registro\n\n*Escriba para el registro completo:*\n${usedPrefix}nombre\n\n\`\`\`⭐ Considere que tendrá un tiempo para completar en caso de registrarse\`\`\``;
}} catch (e) {
console.log(e)}
  
if (command == 'verificar' || command == 'verify' || command == 'register' || command == 'reg' || command == 'registrar') {
await conn.reply(m.chat, `*👀 CÓMO DESEA REGISTRARSE?*\n\n📑 *REGISTRO RÁPIDO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n\n*Escriba para el registro rápido:*\n${usedPrefix}reg1 nombre edad\n\n🗂️ *REGISTRO COMPLETO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n• Premium Temporal Gratis\n• Más opciones para este registro\n\n*Escriba para el registro completo:*\n${usedPrefix}nombre\n\n\`\`\`⭐ Considere que tendrá un tiempo para completar en caso de registrarse\`\`\``, fkontak, m)
}

if (command == 'reg1') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 2 * 60 * 1000) //2 min
setTimeout(() => {
clearInterval(intervalId)}, 126000) //2.1 min
}

registro = text.replace(/\s+/g, usedPrefix) 
_registro = text.split(" ",2)
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}👉 *PARÁMETROS DEL REGISTRO:*\n${usedPrefix + command} nombre edad\n\n\`\`\`EJEMPLO:\`\`\`\n${usedPrefix + command} ${gt} 20\n\n*✨ CONSEJO:*\n• _Su nombre no debe de contener números_\n• _La edad no debe de contener letras_\n\n⭐ *Si desea personalizar más su registro, escriba:*\n${usedPrefix}nombre`, fkontak, m)
//if (_registro['length'] >= 3 || isNaN(_registro[1])) return 
//conn.sendButton(m.chat, fg + '🙃 *ESTÁ INTENTANDO SEPARAR SU NOMBRE O UNIR TODO?* ', '🧐 *COINCIDE COMO EN ESTOS EJEMPLOS:*\n' + `\`\`\`${usedPrefix + command} Super${gt}20\`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super 15 ${gt} \`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super ${gt} 24 De ${author}\`\`\`\n\n` + '*Si cumple que tenga (Nombre/Frase y Edad) Autocompletaremos su Registro, de lo contraio vuelva a registrarse*\n➘ _Use el Botón de abajo_', null, [[`🌟 AUTOCOMPLETAR MI REGISTRO`, usedPrefix + 'reg1' + ' ' + text.replace(/[♧◇♡♤■□●○•°☆▪︎¤¿?¡¬¦±×÷°µ§©®™¶€¢£¥₽₹₩₱₸₪₫₮₦₴₡₭₲₼₿.,\/#!$%\^&\*;:{}@=\-_`~()\s\0-9]/gi, "") + ' ' + text.replace(/[♧◇♡♤■□●○•°☆▪︎¤¿?¡¬¦±×÷°µ§©®™¶€¢£¥₽₹₩₱₸₪₫₮₦₴₡₭₲₼₿.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, "")], ['📑 VOLVER A REGISTRAR', command + usedPrefix]], m)
if (!_registro[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*FALTA SU NOMBRE, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
if (_registro[0].length >= 30) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE ES MUY LARGO, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
if (_registro[0].length <= 2) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE ES MUY CORTO O FALTANTE, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
_registro[0] = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "")
user.name = _registro[0]

if (!_registro[1]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*FALTA SU EDAD, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
if (_registro[1] > 90) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*SU EDAD ES MUY MAYOR, USE OTRA EDAD POR FAVOR*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
if (_registro[1] < 10) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*SU EDAD ES MUY MENOR, USE OTRA EDAD POR FAVOR*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, fkontak, m)
user.age = parseInt(_registro[1]) //_registro[1]	
global.db.data.users[m.sender]['registroR'] = true

let registroRapido = ` *░ 📑 REGISTRO ACTUAL 📑 ░*
 *∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷*
┊ *✓ NOMBRE*
┊ ⁘ ${user.name === 0 ? sinDefinir : user.name}
┊
┊ *✓ EDAD*
┊ ⁘ ${user.age === 0 ? sinDefinir : user.age + ' años'}
╰┈┈┈┈┈┈┈┈┈┈┈┈•

❇️ \`\`\`Para finalizar su registro escriba:\`\`\`
✪ *${usedPrefix}finalizar*`

await conn.sendMessage(m.chat, {
text: registroRapido,
contextInfo: {
externalAdReply: {
title: wm,
body: '🌟 Puede modificar su registro antes de finalizar',
thumbnailUrl: pp, 
sourceUrl: 'https://www.atom.bio/gatabot/',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, { quoted: fkontak })
}

if (command == 'nombre' || command == 'name') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 3 * 60 * 1000) //3 min
setTimeout(() => {
clearInterval(intervalId)}, 186000) //3.1 min
}
if (verificar.test(text) == false || text.length <= 1) return conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}👉 *PERSONALICE SU NOMBRE PARA REGISTRAR, EJEMPLO:*\n${usedPrefix}nombre ${gt}`, fkontak, m)
if (/^\d+$/.test(text)) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE NO DEBE DE TENER SÓLO NÚMEROS, EJEMPLO:*\n${usedPrefix}nombre ${gt}\n\n🌟 _Si quiere usar su nombre registrado en su WhatsApp, escriba:_\n*${usedPrefix}nombre2*`}, {quoted: fkontak})
if (text.length >= 25) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*USE UN NOMBRE MÁS CORTO, EJEMPLO:*\n${usedPrefix}nombre ${gt}\n\n🌟 _Si quiere usar su nombre registrado en su WhatsApp, escriba:_\n*${usedPrefix}nombre2*`}, {quoted: fkontak})
if (text.length <= 2) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*NOMBRE FALTANTE O MUY CORTO, EJEMPLO:*\n${usedPrefix}nombre ${gt}\n\n🌟 _Si quiere usar su nombre registrado en su WhatsApp, escriba ${usedPrefix}nombre2_`}, {quoted: fkontak})
user.name = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "").trim()
if (user.name) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}🌟 *GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n🔢 *AHORA PUEDE REGISTRAR SU EDAD, EJEMPLO:*\n\`\`\`${usedPrefix}edad 20\`\`\``}, {quoted: fkontak})
}
	
if (command == 'nombre2' || command == 'name2') {
if (/^\d+$/.test(text)) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE NO DEBE DE TENER SÓLO NÚMEROS, EJEMPLO:*\n${usedPrefix}nombre ${gt}\n\n🌟 _Si quiere usar su nombre registrado en su WhatsApp, escriba:_\n*${usedPrefix}nombre2*`}, {quoted: fkontak})
if (nombreWA.slice(1).length < 2) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE DE WHATSAPP ES MUY CORTO PARA REGISTRAR*\n\n*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar 🌟 su nombre usando:*\n*${usedPrefix}nombre ${gt}*`}, {quoted: fkontak})
if (nombreWA.slice(1).length > 25) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE DE WHATSAPP ES MUY LARGO PARA REGISTRAR*\n\n*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar 🌟 su nombre usando:*\n*${usedPrefix}nombre ${gt}*`}, {quoted: fkontak})
user.name = nombreWA.replace(/\s+/g, '').replace(/[0-9]+/gi, "").slice(1).trim()
if (user.name) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}🌟 *GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n🔢 *AHORA PUEDE REGISTRAR SU EDAD, EJEMPLO:*\n\`\`\`${usedPrefix}edad 20\`\`\``}, {quoted: fkontak})
}
		
if (command == 'edad' || command == 'age' || command == 'edad2' || command == 'age2') {
if (verificar.test(text.slice(1)) == false && !text) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoIIG']()}*👉 AGREGUÉ SU EDAD PARA REGISTRAR, EJEMPLO:*\n${usedPrefix}edad 20`}, {quoted: fkontak})
if (isNaN(text)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*INGRESE SOLO NÚMEROS*`, fkontak, m)
if (text > 90) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*DEMASIADO MAYOR PARA SER REGISTRADO*`, fkontak, m)
if (text < 10) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*DEMASIADO MENOR PARA SER REGISTRADO*`, fkontak, m)
user.age = text.replace(/[.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, "")
if (verificar.test(text) == true) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}🌟 *GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n*❖ EDAD:*\n${user.age === 0 ? sinDefinir : user.age + ' años'}\n\n🧬 *AHORA PUEDE REGISTRAR SU GÉNERO, EJEMPLO:*\n\`\`\`${usedPrefix}genero\`\`\``}, {quoted: fkontak})
}
	
if (command == 'genero' || command == 'género' || command == 'gender') {
let genText = `🌟 *SELECCIONA TU GÉNERO!!*
1️⃣ ️▸ _🚹 MASCULINO (Hombre)_
2️⃣ ▸ _🚺 FEMENINO (Mujer)_
3️⃣ ▸ _👤 OCULTAR GÉNERO (Omitir)_\n
🌟 *PUEDE USAR EL EMOJI NUMÉRICO O TEXTO NUMÉRICO PARA ELEGIR SU GÉNERO EJEMPLO:*
✓ \`\`\`${usedPrefix}genero 2️⃣\`\`\`
✓ \`\`\`${usedPrefix}genero 2\`\`\``
if (!text) return conn.sendMessage(m.chat, { text: genText }, { quoted: fkontak })	
function asignarGenero(text) {
if (text == 0 && text > 3) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*"${text}" NO ES VÁLIDO PARA ELEGIR, RECUERDE USAR EL EMOJI NUMÉRICO, EMOJI DE GÉNERO O TEXTO NUMÉRICO PARA SELECCIONAR SU GÉNERO, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}genero 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}genero 2\`\`\``, fkontak, m) 
switch (text) {
case "1️⃣":
case "1":
case "🚹":
genero = "Hombre"
break
case "2️⃣":
case "2":
case "🚺":
genero = "Mujer"
break
case "3️⃣":
case "3":
case "👤":
genero = "Ocultado"
break
default:
return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*RECUERDE USAR EL EMOJI NUMÉRICO, EMOJI DE GÉNERO O TEXTO NUMÉRICO PARA SELECCIONAR SU GÉNERO, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}genero 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}genero 2\`\`\``, fkontak, m)
}}
asignarGenero(text)
user.genero = genero
if (user.genero) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}🌟 *GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n*❖ EDAD:*\n${user.age === 0 ? sinDefinir : user.age + ' años'}\n\n*❖ GENERO:*\n${user.genero === 0 ? sinDefinir : user.genero}\n\n*🌼 AHORA PUEDE REGISTRAR SU ORIENTACIÓN SEXUAL, EJEMPLO:*\n\`\`\`${usedPrefix}identidad\`\`\``}, {quoted: fkontak}) 
}
	
if (command == 'identidad' || command == 'identity') {
var generos = [
"Agénero", "Andrógino", "Andrógina", "Asexual", "Bigénero", "Bisexual",
"Cisgénero", "CrossDresser", "Demigénero", "Gay", "Género fluido", "Género neutro",
"Genderqueer", "Heterosexual", "Heteroflexible", "Homoflexible", "Homosexual",
"Intersexual", "Lesbiana", "Pansexual", "Pangénero", "Questioning", "Queer",
"Sapiosexual", "Transgénero", "Trigénero", "Variante/Género expansivo"
]
var emojiANumero = { "0️⃣": "0", "1️⃣": "1", "2️⃣": "2", "3️⃣": "3", "4️⃣": "4", "5️⃣": "5", "6️⃣": "6", "7️⃣": "7", "8️⃣": "8", "9️⃣": "9" }
function asignarIdentidad(text) {
text = text.replace(/[\d️⃣]/g, function(match) {
return emojiANumero[match] || match
})
var numero = parseInt(text.replace(/[^\d]/g, ''))	
if (!isNaN(numero) && Number(numero) > 0 && Number(numero) <= generos.length) {
return generos[numero - 1]
} else if (!text) {
return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*RECUERDE USAR EL EMOJI NUMÉRICO, EMOJI DE GÉNERO O TEXTO NUMÉRICO PARA SELECCIONAR SU ORIENTACIÓN SEXUAL, EJEMPLO*\n\n✓ \`\`\`${usedPrefix}identidad 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}identidad 2\`\`\``, fkontak, m)
}else{
conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*ESTÁ ELECCIÓN "${numero}" NO FORMA PARTE DE LA LISTA DE ORIENTACIONES, ELEGIR UNO DE LA LISTA POR FAVOR, EJEMPLO:*\n\n✓ \`\`\`${usedPrefix}identidad 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}identidad 2\`\`\``, fkontak, m)
}}
let yyr = ''
yyr += `*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•*
*┊ 🌟 SELECCIONE SU ORIENTACIÓN SEXUAL!!*
*┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•*\n`
generos.forEach(function (identidad, index) {
yyr += `*┊* \`\`\`[${index + 1}]\`\`\` » _${identidad}_\n`
})
yyr += `*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*`
if (!text) {
const { key } = await conn.sendMessage(m.chat, { text: yyr }, {quoted: fkontak})	
await delay(1000)
await conn.sendMessage(m.chat, { text: yyr + `\n\n✨ *AQUÍ UN EJEMPLO DE COMO SELECCIONAR:*\n\`\`\`${usedPrefix}identidad 4️⃣\`\`\`\n\`\`\`${usedPrefix}identidad 4\`\`\``, edit: key }, {quoted: fkontak}) 
} 
var identidadAsignada = asignarIdentidad(text)
user.identidad = identidadAsignada
if (user.identidad && text < generos.length && text != 0) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}🌟 *GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${!user.name ? sinDefinir : user.name}\n\n*❖ EDAD:*\n${!user.age ? sinDefinir : user.age + ' años'}\n\n*❖ GENERO:*\n${!user.genero ? sinDefinir : user.genero}\n\n*❖ ORIENTACIÓN SEXUAL:*\n${!user.identidad ? sinDefinir : user.identidad}\n\n❇️ *AHORA PUEDE REGISTRAR SUS PASATIEMPOS, EJEMPLO:*\n\`\`\`${usedPrefix}pasatiempo\`\`\``}, {quoted: fkontak})
}
	
if (command == 'pasatiempo' || command == 'hobby') {
pasatiempo = 0
pas1 = ''
pas2 = ''
pas3 = ''
pas4 = ''
pas5 = ''  
var seleccion = text
var todosLosPasatiempos = [
"👟 Acroyoga", "🎭 Actuación", "🥋 Aikido", "🎯 Airsoft", "♟️ Ajedrez",
    "🏔️ Alpinismo", "🖥️ Animación", "🎉 Animador/a de Equipos", "✏️ Anime dibujos", "🐝 Apicultura",
    "💻 Aprender a programar", "🌐 Aprender un idioma", "💐 Arreglos florales", "🎨 Arte", "🥋 Artes marciales",
    "🥋 Artes marciales mixtas", "🔭 Astrofotografía", "🔮 Astrología", "👟 Atletismo", "🩰 Ballet",
    "💄 Belleza", "🏔️ Barranquismo", "💻 Blog", "✏️ Bocetos", "🎳 Bowling",
    "🥊 Boxeo", "🏸 Bádminton", "🏀 Baloncesto", "⚾ Béisbol", "🖋️ Caligrafía", "👟 Caminata",
    "🏕 Camping", "🛶 Canoa", "🎤 Canto", "🎤 Canto a capela", "✏️ Caricaturas", "🪚 Carpintería",
    "🏎️ Carreras de autos", "🐎 Carreras de caballos", "🛵 Carreras de motocicletas", "❄️ Carreras de moto de nieve",
    "🚧 Carreras de obstáculos", "🦮 Carreras de perros", "🛷 Carreras de trineos", "♿ Carreras en silla de ruedas",
    "🗺️ Cartografía", "🏹 Caza", "🚲 Ciclismo", "🎬 Cinematografía", "🔮 Clarividencia", "🍳 Cocinar",
    "🥗 Cocina saludable", "🧤 Coleccionar objetos", "🗝️ Coleccionar antigüedades", "💥 Coleccionar cómics",
    "📚 Coleccionar libros", "🎭 Comedia", "👻 Conspiración", "🍕 Comer", "🎵 Composición de canciones",
    "🎶 Composición de música", "🚗 Conducir", "🎩 Cosplay", "💐 Cultivo de flores", "🎼 Danza",
    "🥋 Defensa personal", "👟 Deportes extremos", "✏️ Dibujar", "✏️ Dibujar en 3D", "💤 Dormir",
    "👋 Estar en YouTube", "👋 Estar en TikTok", "👋 Estar en Facebook", "👋 Estar en Facebook Messenger",
    "👋 Estar en Whatsapp", "👋 Estar en Instagram", "👋 Estar en Twitter", "👋 Estar en Pinterest",
    "👋 Estar en Telegram", "👋 Estar en WeChat", "👋 Estar en Snapchat", "👋 Estar en Reddit",
    "📝 Escritura creativa", "🎧 Escuchar música", "📘 Estudiar", "👻 Fantasmas y/o apariciones",
    "👟 Fitness", "📸 Fotografía", "📸 Fotogénico/a", "📸 Fotografía de moda", "📸 Fotografía de juegos",
    "📸 Fotografía de animales", "📸 Fotografía de paisajes", "📸 Fotografía blanco y negro", "⚽ Fútbol",
    "🏈 Fútbol americano", "🎮 Gamer", "🏊 Gimnasia acuática", "🏒 Hockey", "✏️ Ilustración",
    "🎤 Ir a conciertos", "👟 Ir al gimnasio", "🛍️ Ir de compras", "🎮 Juegos VR/AR",
    "🎮 Juegos de rol", "🎮 Juegos de acción", "🎮 Juegos de pelea", "🎮 Juegos de arcade",
    "🎮 Juegos de aventura", "🎮 Juegos de estrategia", "🎮 Juegos de simulación", "🎮 Juegos de deportes",
    "🎮 Juegos de carreras", "🎮 Juegos de battle royale", "🎮 Juegos clásicos", "🃏 Juegos de cartas",
    "🎲 Juegos de mesa", "📖 Leer", "👟 Lucha libre", "💄 Maquillaje artístico", "😆 Memes",
    "💭 Meditación", "🖥️ Modelado 3D", "✨ Observación de estrellas", "🌕 Observación de la luna",
    "☁ Observación de las nubes", "📄 Origami", "🎣 Pesca", "🎨 Pintura", "🎙️ Podcasts",
    "📝 Poesía", "🎾 Tenis", "🏓 Tenis de mesa", "🎵 Toco un instrumento", "🎹 Tocar el piano",
    "🎸 Tocar la guitarra", "🎻 Tocar el violín", "🎷 Tocar el saxofón", "🎺 Tocar la trompeta",
    "🪘 Tocar el tamboril", "🥁 Tocar el tambor", "📺 Ver televisión", "🌎 Viajar",
    "🎒 Viajar de mochilero/a", "🫂 Visitar amigos", "📹 Vlog", "🏐 Voleibol", "👟 Yoga", "🎼 Ópera",
    "🚁 Aeromodelismo", "🚤 Navegación", "🎤 Beatboxing", "🎭 Burlesque", "🎳 Bolos", "🧩 Crucigramas",
    "🏹 Tiro con arco", "🎣 Pesca deportiva", "🎯 Dardos", "🎻 Danza del vientre", "🎮 eSports",
    "🤹 Malabares", "🛹 Skateboar
