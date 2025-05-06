
// BY ABRAHAN-M

import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    if (!m.isGroup) return;
    if (!db.data.chats[m.chat].nsfw) return m.reply('🚩 *¡Estos comandos están desactivados!*');
    
    const who = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : null);
    if (!who) return m.reply('Etiqueta o menciona a alguien');

    const name = conn.getName(who);
    const name2 = conn.getName(m.sender);
    
    await conn.sendMessage(m.chat, { react: { text: '🔥', key: m.key }});

    const videos = [
        'https://telegra.ph/file/82d32821f3b57b62359f2.mp4',
        'https://telegra.ph/file/04bbf490e29158f03e348.mp4',
        'https://telegra.ph/file/37c21753892b5d843b9ce.mp4',
        'https://telegra.ph/file/075db3ebba7126d2f0d95.mp4',
        'https://telegra.ph/file/e6bf14b93dfe22c4972d0.mp4',
        'https://telegra.ph/file/05c1bd3a2ec54428ac2fc.mp4',
        'https://telegra.ph/file/e999ef6e67a1a75a515d6.mp4',
        'https://telegra.ph/file/538c95e4f1c481bcc3cce.mp4',
        'https://telegra.ph/file/61d85d10baf2e3b9a4cde.mp4',
        'https://telegra.ph/file/36149496affe5d02c8965.mp4'
    ];

    try {
        const caption = `${name2} esta agarrando las tetas de ${name} 😏`;
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];

        await conn.sendMessage(m.chat, {
            video: { url: randomVideo },
            gifPlayback: true,
            caption,
            mentions: [m.sender, who]
        }, { 
            quoted: estilo,
            ephemeralExpiration: 24*60*60
        });

        setTimeout(() => {
            conn.sendMessage(m.chat, { react: { text: '😈', key: m.key }});
        }, 1000);

    } catch (e) {
        m.reply('⚠️ Ocurrió un error inesperado');
    }
}

handler.help = ['agarrar @tag'];
handler.tags = ['fun'];
handler.command = ['grabboobs', 'agarrartetas'];
handler.group = true;
handler.nsfw = true;

export default handler;