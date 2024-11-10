import yts from 'yt-search';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, '⭐ 𝘐𝘯𝘨𝘳𝘦𝘴𝘢 𝘦𝘭 𝘵𝘪́𝘵𝘶𝘭𝘰 𝘥𝘦 𝘭𝘢 𝘤𝘢𝘯𝘤𝘪𝘰́𝘯 𝘥𝘦 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘲𝘶𝘦 𝘥𝘦𝘴𝘦𝘢𝘴 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳.\n\n» 𝘌𝘫𝘦𝘮𝘱𝘭𝘰:\n.play Feid - Luna', m);

await m.react('🕓');
let res = await yts(text);
let play = res.videos[0];

if (!play) return conn.reply(m.chat, `No se encontraron resultados`, m)

let { title, thumbnail, ago, timestamp, views, videoId, url } = play;

let txt = '';
txt += ``;
txt += ``;
txt += ``;
txt += ``;
txt += ``;

await conn.sendButton(m.chat, txt,author ,thumbnail, [
['𝙰𝚞𝚍𝚒𝚘', `${usedPrefix}ytmp3 ${url}`],
['𝚅𝚒𝚍𝚎𝚘', `${usedPrefix}ytmp4 ${url}`]
], null, [['𝙲𝚊𝚗𝚊𝚕 ✨', md]], m);
await m.react('✅')
}

handler.help = ['play', 'play2']
handler.tags = ['dl'];
handler.register = [true];
handler.command = ['play', 'play2']

export default handler;
