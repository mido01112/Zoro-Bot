export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
    if (m.isBaileys && m.fromMe) return !0;
    if (m.isGroup) return !1;
    if (!m.message) return !0;
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;

    const chat = global.db.data.chats[m.chat];
    const bot = global.db.data.settings[this.user.jid] || {};

    if (bot.antiPrivate && !isOwner && !isROwner) {
        await m.reply(`*[❗] مرحبًا @${m.sender.split`@`[0]}، يُمنع التحدث في الخاص مع البوت لهذا السبب سيتم حظرك.*\n\n*اذا كنت تريد تجربه البوت ادخل جروب البوت『 https://chat.whatsapp.com/HZctXaZBf1U3PE5wOgIXP4』*\n\n*لو كنت تريد ان تكلم مطور البوت هذا رقمي 『‏‪『249128749239‬‏*`, false, { mentions: [m.sender] });
        await this.updateBlockStatus(m.chat, 'block');
    }

    return !1;
}
