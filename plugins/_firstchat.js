
export async function all(m) {
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
   let user = global.db.data.users[m.sender]
    const cooldown = 86400000
    if (new Date - user.pc < cooldown) return // setiap 24 jam sekali
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    let caption = `👋 Hai @${who.split("@")[0]}, ${user.banned ? 'kamu dibanned' : `Ada yang bisa *${this.user.name}* bantu?\n\n*Ketik .menu Untuk melihat list menu Anya BOT!*`}`.trim()
    this.sendButton(m.chat, hiasan, caption, pp, [[user.banned ? 'OWNER' : 'SEWA BOT', user.banned ? '.owner' : '.sewa']], m, { mentions: this.parseMention(caption) })
    user.pc = new Date * 1
}
