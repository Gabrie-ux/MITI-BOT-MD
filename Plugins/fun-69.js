import fs from 'fs';
import path from 'path';

// BY ABRAHAN-M

let handler = async (m, { conn }) => {
    if (!m.isGroup) return;
    if (!db.data.chats[m.chat].nsfw) return m.reply('🚀 *¡Estos comandos están desactivados!*');
    
    const who = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : null);
    if (!who) return m.reply('Etiqueta o menciona a alguien');

    const name = conn.getName(who);
    const name2 = conn.getName(m.sender);
    
    await conn.sendMessage(m.chat, { react: { text: '🔥', key: m.key }});

    const videos = [
        'https://telegra.ph/file/bb4341187c893748f912b.mp4',
        'https://telegra.ph/file/c7f154b0ce694449a53cc.mp4',
        'https://telegra.ph/file/1101c595689f638881327.mp4',
        'https://telegra.ph/file/f7f2a23e9c45a5d6bf2a1.mp4',
        'https://telegra.ph/file/a2098292896fb05675250.mp4',
        'https://telegra.ph/file/16f43effd7357e82c94d3.mp4',
        'https://telegra.ph/file/55cb31314b168edd732f8.mp4',
        'https://telegra.ph/file/1cbaa4a7a61f1ad18af01.mp4',
        'https://telegra.ph/file/1083c19087f6997ec8095.mp4'
    ];

    const caption = `${name2} está haciendo un 69 con ${name}`;
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];

    await conn.sendMessage(m.chat, {
        video: { url: randomVideo },
        gifPlayback: true,
        caption,
        mentions: [m.sender]
    }, { quoted: estilo });
}

handler.help = ['69 @tag'];
handler.tags = ['fun'];
handler.command = ['sixnine', '69'];
handler.group = true;

export default handler;