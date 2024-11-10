import yts from 'yt-search' 
const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `⭐ 𝘐𝘯𝘨𝘳𝘦𝘴𝘢 𝘦𝘭 𝘵𝘪́𝘵𝘶𝘭𝘰 𝘥𝘦 𝘭𝘢 𝘤𝘢𝘯𝘤𝘪𝘰́𝘯 𝘥𝘦 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘲𝘶𝘦 𝘥𝘦𝘴𝘦𝘢𝘴 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳.

» 𝘌𝘫𝘦𝘮𝘱𝘭𝘰:
${usedPrefix + command} Feid - Luna`;
    await m.react('🕓')

    const randomReduction = Math.floor(Math.random() * 5) + 1;
    let search = await yts(text);
    let f = `\n\n${String.fromCharCode(68,101,118,101,108,111,112,101,100,32,98,121,32,73,39,109,32,70,122,32,126)}`;
    let isVideo = /vid$/.test(command);
    let urls = search.all[0].url;
    let body = `01:27 ━━━━━⬤──── ${search.all[0].timestamp}
*⇄ㅤ   ◁   ㅤ  ❚❚ㅤ     ▷ㅤ   ↻*
`; conn.sendMessage(m.chat, { 
        image: { url: search.all[0].thumbnail }, 
        caption: body + f
    }, { quoted: m });

    let res = await dl_vid(urls)
    await m.react('✅')
    let type = isVideo ? 'video' : 'audio';
    let video = res.data.mp4;
    let audio = res.data.mp3;
    conn.sendMessage(m.chat, { 
        [type]: { url: isVideo ? video : audio }, 
        gifPlayback: false, 
        mimetype: isVideo ? "video/mp4" : "audio/mpeg" 
    }, { quoted: m });
}

handler.command = ['play', 'play2'];
handler.help = ['play', 'play2'];
handler.register = true;
handler.tags = ['descargas'];
export default handler;

async function dl_vid(url) {
    const response = await fetch('https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'free',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: url,
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
