import axios from 'axios';
import jimp from 'jimp';
import FormData from 'form-data';
import {Sticker, createSticker, StickerTypes} from 'wa-sticker-formatter';

async function GetBuffer(url) {
  return new Promise(async (resolve, reject) => {
    let buffer;
    await jimp
        .read(url)
        .then((image) => {
          image.getBuffer(image._originalMime, function(err, res) {
            buffer = res;
          });
        })
        .catch(reject);
    if (!Buffer.isBuffer(buffer)) reject(false);
    resolve(buffer);
  });
}
function GetType(Data) {
  return new Promise((resolve, reject) => {
    let Result; let Status;
    if (Buffer.isBuffer(Data)) {
      Result = new Buffer.from(Data).toString('base64');
      Status = 0;
    } else {
      Status = 1;
    }
    resolve({
      status: Status,
      result: Result,
    });
  });
}
async function Cartoon(url) {
  return new Promise(async (resolve, reject) => {
    let Data;
    try {
      const buffer = await GetBuffer(url);
      const Base64 = await GetType(buffer);
      await axios
          .request({
            url: 'https://access1.imglarger.com/PhoAi/Upload',
            method: 'POST',
            headers: {
              'connection': 'keep-alive',
              'accept': 'application/json, text/plain, */*',
              'content-type': 'application/json',
            },
            data: JSON.stringify({
              type: 11,
              base64Image: Base64.result,
            }),
          })
          .then(async ({data}) => {
            const code = data.data.code;
            const type = data.data.type;
            while (true) {
              const LopAxios = await axios.request({
                url: 'https://access1.imglarger.com/PhoAi/CheckStatus',
                method: 'POST',
                headers: {
                  'connection': 'keep-alive',
                  'accept': 'application/json, text/plain, */*',
                  'content-type': 'application/json',
                },
                data: JSON.stringify({
                  code: code,
                  isMember: 0,
                  type: type,
                }),
              });
              const status = LopAxios.data.data.status;
              if (status == 'success') {
                Data = {
                  message: 'success',
                  download: {
                    full: LopAxios.data.data.downloadUrls[0],
                    head: LopAxios.data.data.downloadUrls[1],
                  },
                };
                break;
              } else if (status == 'noface') {
                Data = {
                  message: 'noface',
                };
                break;
              }
            }
          });
    } catch (_error) {
      Data = false;
    } finally {
      if (Data == false) {
        reject(false);
      }
      resolve(Data);
    }
  });
}
function randomId() {
  return Math.floor(100000 + Math.random() * 900000);
}
const handler = async (m, {conn, usedPrefix, command}) => {
  conn.cartoon = conn.cartoon ? conn.cartoon : {};
  if (m.sender in conn.cartoon) {
    throw 'There is still an unfinished process, friend. Please wait until I finish. >//<';
  }
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!mime) throw `¿𝙳ó𝚗𝚍𝚎 𝚎𝚜𝚝á 𝚕𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚚𝚞𝚎 𝚚𝚞𝚒𝚎𝚛𝚎𝚜 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚛 𝚎𝚗 𝚌𝚊𝚛𝚒𝚌𝚊𝚝𝚞𝚛𝚊?`;
  if (!/image\/(jpe?g|png)/.test(mime)) throw `file ${mime} not supported`;
  else conn.cartoon[m.sender] = true;
  m.reply('𝚌𝚘𝚗𝚟𝚒𝚛𝚝𝚒𝚎𝚗𝚍𝚘 𝚒𝚖𝚊𝚐𝚎𝚗 𝚊 𝚌𝚊𝚛𝚒𝚌𝚊𝚝𝚞𝚛𝚊... 😯');
  const img = await q.download?.();
  try {
    Cartoon(img).then(async (response) => {
      if (response.message == 'success') {
        await conn.sendFile(
            m.chat,
            response.download.full,
            '',
            '𝙻𝚊 𝚘𝚙𝚎𝚛𝚊𝚌𝚒ó𝚗 𝚏𝚞𝚎 𝚎𝚡𝚒𝚝𝚘𝚜𝚊♥ >//< 𝙹𝙰𝙹𝙰',
            m,
        );
        const name = await conn.getName(m.sender);
        const sticker = new Sticker(response.download.head, {
          pack: global.packname,
          author: name,
          type: StickerTypes.FULL,
          categories: ['🤩', '🎉'],
          id: randomId(),
          quality: 100,
          background: '#00000000',
        });
        conn.sendMessage(m.chat, await sticker.toMessage(), {quoted: m});
      } else {
        m.reply(
            '𝙻𝚘 𝚜𝚒𝚎𝚗𝚝𝚘 𝚊𝚖𝚒𝚐𝚘, 𝚕𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚗𝚘 𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚞𝚗𝚊 𝚌𝚊𝚛𝚊, 𝚙𝚘𝚛 𝚏𝚊𝚟𝚘𝚛 𝚎𝚗𝚟í𝚊 𝚞𝚗𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚍𝚘𝚗𝚍𝚎 𝚕𝚊 𝚌𝚊𝚛𝚊 𝚎𝚜𝚝é 𝚎𝚡𝚙𝚞𝚎𝚜𝚝𝚊 𝚢 𝚟𝚒𝚜𝚒𝚋𝚕𝚎.',
        );
      }
    });
  } catch {
    m.reply('𝙴𝚕 𝚙𝚛𝚘𝚌𝚎𝚜𝚘 𝚏𝚊𝚕𝚕ó :(');
  } finally {
		conn.cartoon[m.sender] ? delete conn.cartoon[m.sender] : false;
  }
};
handler.help = ['cartoon'];
handler.tags = ['ai'];
handler.command = ['cartoon'];
handler.register = true

export default handler;
