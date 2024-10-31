import { execSync } from 'child_process';

const handler = async (m, { conn, text }) => {
  try {
          const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
          let messager = stdout.toString()
          if (messager.includes('Already up to date.')) messager = '𝙀𝙉𝙏𝙀𝙉𝘿𝙄𝘿𝙊 𝘾𝙍𝙀𝘼𝘿𝙊𝙍'
          if (messager.includes('Updating')) messager = '❱❱ 𝙀𝙉𝙏𝙀𝙉𝘿𝙄𝘿𝙊 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 ❰❰\n﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n» 𝙎𝙀 𝘼𝙋𝙇𝙄𝘾𝘼𝙍𝙊𝙉 𝙇𝙊𝙎 𝘾𝘼𝙈𝘽𝙄𝙊𝙎 𝙌𝙐𝙀 𝙈𝙀 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙎𝙏𝙀. \n\n' + stdout.toString()
          conn.reply(m.chat, messager, m);
  } catch {      
 try {    
      const status = execSync('git status --porcelain');
      if (status.length > 0) {
        const conflictedFiles = status
          .toString()
          .split('\n')
          .filter(line => line.trim() !== '')
          .map(line => {
            if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('MysticSession/') || line.includes('npm-debug.log')) {
              return null;
            }
            return '*◉ ' + line.slice(3) + '*';
          })
          .filter(Boolean);
        if (conflictedFiles.length > 0) {
          const errorMessage = `*[❗] Se han hecho cambios en los archivos del Bot en local y causa conflictos al actualizar ya que igual se han modificado en el repositorio oficial.*\n\n*—◉ Archivos con conflicto:*\n${conflictedFiles.join('\n')}\n\n*—◉ Si deseas actualizar el Bot, deberás reinstalar el Bot o hacer las actualizaciones manualmente.*`;
          await conn.reply(m.chat, errorMessage, m);  
        }
      }
  } catch (error) {
    console.error(error);
    let errorMessage2 = '*[❗] Ha ocurrido un error al ejecutar el comando.*';
    if (error.message) {
      errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
    }
    await conn.reply(m.chat, errorMessage2, m);
  }
 }
};
handler.help = ['update'];
handler.tags = ['owner'];
handler.command = /^(update|actualizar)$/i;
handler.rowner = true;
export default handler;
