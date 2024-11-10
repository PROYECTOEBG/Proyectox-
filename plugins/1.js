import yts from 'yt-search';

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
    
    if (!text) throw `🌹 Te Faltó Un Link De Un Video De Youtube.\n_(Puedes hacer una búsqueda utilizando el comando ${usedPrefix}yts)_\n _🌷.- Ejemplo:_ *${usedPrefix + command}* https://youtu.be/sBKR6aUorzA?si=TmC01EGbXUx2DUca`;
    
    await conn.sendMessage(m.chat, { react: { text: '🥀', key: m.key }});
    
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
    

    // Enviar el mensaje informativo con la imagen
    await conn.sendMessage(m.chat, { 
        image: { url: vid.thumbnail }, 
        
    }, { quoted: m });

    await conn.sendMessage(m.chat, { react: { text: '🌹', key: m.key }});
    await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
};

handler.command = ['ytmp3', 'ytaa'];
handler.limit = 5;
export default handler;
