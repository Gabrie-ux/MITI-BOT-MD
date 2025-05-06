// BY ABRAHAN-M


import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix}) => {
    if (!m.isGroup) return;
    if (usedPrefix.toLowerCase() === 'a') return;

    const who = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : null);
    if (!who) return m.reply('🚩 Por favor, menciona el usuario');

    const videos = [
        "https://telegra.ph/file/4d80ab3a945a8446f0b15.mp4",
        "https://telegra.ph/file/ef3a13555dfa425fcf8fd.mp4", 
        "https://telegra.ph/file/582e5049e4070dd99a995.mp4",
        "https://telegra.ph/file/ab57cf916c5169f63faee.mp4",
        "https://telegra.ph/file/fce96960010f6d7fc1670.mp4",
        "https://telegra.ph/file/33332f613e1ed024be870.mp4"
    ];

    try {
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
        const str = `${taguser} le esta dando un fuerte abrazo a @${who.split`@`[0]} 🫂`;
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];

        await conn.sendMessage(m.chat, {
            video: { url: randomVideo },
            gifPlayback: true,
            caption: str.trim(),
            mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }, {quoted: fkontak});

    } catch (error) {
        conn.reply(m.chat, '🍟 *¡Ocurrio un error!*', m, rcanal);
    }
};

handler.help = ['abrazar'].map(v => v + ' <@usuario>');
handler.tags = ['fun'];
handler.command = ['abrazar'];
handler.group = true;
handler.register = true;

export default handler;