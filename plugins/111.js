import Starlights from '@StarlightsTeam/Scraper';

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat,`🍭 Ingrese un enlace de Pinterest`, m);

await m.react('🕓');
try {
let { dl_url, quality, size, duration, url } = await Starlights.pinterestdl(args[0]);

let txt = '`ゲ◜៹ Pinterest - Scraper ៹◞ゲ`\n\n'
txt += `*Calidad* : ${quality}\n`;
txt += `*Tamaño* : ${size}\n`;
txt += `*Duracion* : ${duration}\n`;
txt += `*Url* : ${url}\n\n`
txt += `> 🍭 *${namebot}*`


await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: txt, mimetype: 'video/mp4', fileName:  `pinterest.mp4`}, {quoted: m })
await m.react('✅');
} catch {
await m.react('✖️');
}
};

handler.help = ['pinterestdl *<url pin>*'];
handler.tags = ['downloader'];
handler.command = ['pinterestdl', 'pindl'];
handler.register = true;

export default handler;
