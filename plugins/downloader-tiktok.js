import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `*عاوز تحميل ايه يحب ؟✨*\n*ضيف رابط الفديو ياخويا*\n*مثال:*\n*${usedPrefix + command} https://www.tiktok.com/@ox__zoro__ox?_t=8ggRMe37f9y&_r=1*`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `*رابط التيكتوك غير صحيح*`, fkontak,  m)  
try {
await conn.reply(m.chat, `⌛ _جاري الارسال..._\n▰▰▱▱▱\nالفديو بيتبعت ( احب افكرك انا خالي المسئولية من ذنوب اغانيك ) 🔰`, fkontak,  m)  
const { author: { nickname }, video, description } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) return conn.reply(m.chat, `*اوووف, خطأ أثناء محاولة تنزيل الفيديو ، يرجى المحاولة مرة أخرى*`, fkontak,  m)
conn.sendFile(m.chat, url, 'tiktok.mp4', `*تمت المهمة* ✅`.trim(), m)
} catch {
}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)|تيك|تيكتوك|تيك-توك$/i
handler.limit = 1
export default handler
