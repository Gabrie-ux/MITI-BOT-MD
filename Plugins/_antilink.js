// BY ABRAHAN-M

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let linkRegex1 = /whatsapp.com\/channel\/([0-9A-Za-z]{20,24})/i;

// Objeto para rastrear enlaces por usuario
const userLinks = new Map();

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, participants }) {
    if (!m.isGroup) return;
    if (isOwner || isROwner || m.fromMe) return;

    let chat = global.db.data.chats[m.chat];
    let delet = m.key.participant;
    let bang = m.key.id;
    const user = `@${m.sender.split`@`[0]}`;
    const groupAdmins = participants.filter(p => p.admin);
    const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n');
    let bot = global.db.data.settings[this.user.jid] || {};
    const isGroupLink = linkRegex.exec(m.text) || linkRegex1.exec(m.text);
    const grupo = `https://chat.whatsapp.com`;

    // Si es admin, ignorar
    if (isAdmin) {
        if (chat.antiLink && m.text.includes(grupo)) {
            return m.reply(`🏷️ *Antilink está activo pero eres admin, ¡salvado!*`);
        }
        return;
    }

    // Verificar si el mensaje contiene un enlace
    if (isGroupLink) {
        // Obtener contador de enlaces del usuario
        if (!userLinks.has(m.sender)) {
            userLinks.set(m.sender, {
                count: 0,
                timer: null
            });
        }

        const userData = userLinks.get(m.sender);
        userData.count++;

        // Reiniciar contador después de 1 hora
        if (userData.timer) clearTimeout(userData.timer);
        userData.timer = setTimeout(() => {
            userData.count = 0;
        }, 60 * 60 * 1000); // 1 hora

        // Si excede 2 enlaces, activar antilink
        if (userData.count >= 2) {
            chat.antiLink = true;
            await conn.sendMessage(m.chat, { 
                text: `⚠️ *Antilink Activado Automáticamente*\n\n*Motivo:* ${user} excedió el límite de enlaces permitidos`, 
                mentions: [m.sender] 
            });
        }

        // Si antilink está activo, proceder con la eliminación
        if (chat.antiLink) {
            if (isBotAdmin) {
                const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
                if (m.text.includes(linkThisGroup)) return !0;

                await conn.sendMessage(m.chat, { 
                    text: `📎 *¡Enlace detectado!*\n\n*${await this.getName(m.sender)} mandaste un enlace prohibido por lo cual serás eliminado*`, 
                    mentions: [m.sender] 
                }, { 
                    quoted: m, 
                    ephemeralExpiration: 24*60*100, 
                    disappearingMessagesInChat: 24*60*100 
                });

                await conn.sendMessage(m.chat, { 
                    delete: { 
                        remoteJid: m.chat, 
                        fromMe: false, 
                        id: bang, 
                        participant: delet 
                    } 
                });

                let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                if (responseb[0].status === "404") return;
            } else {
                return conn.sendMessage(m.chat, { 
                    text: `🌸 *No soy admin, no puedo eliminar intrusos*`, 
                    mentions: [...groupAdmins.map(v => v.id)] 
                }, { quoted: m });
            }
        }
    }
    return !0;
}
