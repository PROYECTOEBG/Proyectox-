import yts from 'yt-search';

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
    
    if (!text) throw `⭐ 𝘐𝘯𝘨𝘳𝘦𝘴𝘢 𝘦𝘭 𝘵𝘪́𝘵𝘶𝘭𝘰 𝘥𝘦 𝘭𝘢 𝘤𝘢𝘯𝘤𝘪𝘰́𝘯 𝘥𝘦 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘲𝘶𝘦 𝘥𝘦𝘴𝘦𝘢𝘴 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳.

» 𝘌𝘫𝘦𝘮𝘱𝘭𝘰:
${usedPrefix + command} Feid - Luna`;
    
    await conn.sendMessage(m.chat, { react: { text: '🕓', key: m.key }});
    
    const videoSearch = await yts(text);
    if (!videoSearch.all.length) {
        return global.errori;
    }
    
    const vid = videoSearch.all[0];
    const videoUrl = vid.url;
    const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
    const apiResponse = await fetch(apiUrl);
    const delius = await apiResponse.json();

    if (!delius.status) {
        return global.errori;
    }
    
    const downloadUrl = delius.data.download.url;

    // Crear el mensaje informativo del video/audio
    let body = `01:27 ━━━━━⬤──── ${vid.timestamp || 'Desconocido'}
*⇄ㅤ   ◁   ㅤ  ❚❚ㅤ     ▷ㅤ   ↻*
𝙀𝙡𝙞𝙩𝙚 𝘽𝙤𝙩 𝙂𝙡𝙤𝙗𝙖𝙡`;

    // Enviar el mensaje informativo con la imagen
    await conn.sendMessage(m.chat, { 
        image: { url: vid.thumbnail }, 
        caption: body 
    }, { quoted: m });

    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
    await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
};

handler.command = ['play', 'youtube'];
export default handler;
