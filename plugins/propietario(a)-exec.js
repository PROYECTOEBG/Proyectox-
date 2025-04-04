import syntaxerror from 'syntax-error'
import { format } from 'util'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createRequire } from 'module'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)

let handler = async (m, _2, msg, ROwner, isOwner, pickRandom) => {
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return
if (!ROwner) return;

let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
let { conn, usedPrefix, noPrefix, args, groupMetadata } = _2
let _return
let name = conn.getName(m.sender)
let _syntax = ''
let _text = (/^=/.test(usedPrefix) ? 'return ' : '') + noPrefix
let old = m.exp * 1
try {
let i = 15
let f = { exports: {}
}
let exec = new (async () => { }).constructor('print', 'm', 'handler', 'require', 'conn', 'Array', 'process', 'args', 'groupMetadata', 'module', 'exports', 'argument', _text)
_return = await exec.call(conn, (...args) => {
if (--i < 1) return
console.log(...args)
return conn.reply(m.chat, format(...args), m)
}, m, handler, require, conn, CustomArray, process, args, groupMetadata, f, f.exports, [conn, _2])
} catch (e) {
let err = syntaxerror(_text, 'Execution Function', {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: 'module'
})
if (err) _syntax = '```' + err + '```\n\n'
_return = e
} finally {
conn.reply(m.chat, _syntax + format(_return), m)
m.exp = old
}}
handler.help = ['> ', '=> ']
handler.tags = ['owner']
handler.customPrefix = /=?>|~/
handler.command = /(?:)/i

//handler.rowner = true

export default handler

class CustomArray extends Array {
constructor(...args) {
if (typeof args[0] == 'number') return super(Math.min(args[0], 10000))
else return super(...args)
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }
