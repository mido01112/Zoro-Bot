let handler = async (m, { conn, command, text }) => {
let love = `
*☬ ⊱⊶✤⊷⊰ •〔🕸〕• ⊱⊶✤⊷⊰ ☬*
*※فــ←ــعـاليـ←ـة الـــتـصـا🎞مـيـم※*
*☬ ⊱⊶✤⊷⊰ •〔🕸〕• ⊱⊶✤⊷⊰ ☬*
*الشــــ↓ـ🗣️ــ↓ـرح:*
*~↯:┊📜┊↯:~ مسابقة الادت المسابقة عبارة عن مسوؤل يطلب من المشاركين ادت لشخصية او انمي ويُلزم على العضو أن يقوم بتجهيز الادت ويرسلها للمقدم بالخاص*

*~➻~ كما سيكون تحديد الفائز عبر تصويت في الإعلانات ، كما أن مرسل الادت مجهول لتفادي الدخول في مجاملات بين الأعضاء*

*~↯: ملاحظة╎ مسموح لك بجلب ادت من اي موقع تريده ⟭*
*☬ ⊱⊶✤⊷⊰ •〔🕸〕• ⊱⊶✤⊷⊰ ☬*
*~تــ✍︎ــوقــيــع اداࢪة┊📜┊↯:~*   *~〘☬╎𝐑.𝐍.𝐍 𓆩❄𓆪 𝑺𝑶𝑼𝑳╎☬〙~*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(التصميم|تصميم2)$/i
export default handler
