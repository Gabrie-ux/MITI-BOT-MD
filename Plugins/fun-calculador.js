
// BY ABRAHAN-M

const handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, `✧ Por favor menciona o escribe el nombre de alguien`, m);
    
    const percentages = (1000).getRandom();
    const user = m.mentionedJid?.[0] || m.quoted?.sender || text;
    const name = text.toUpperCase();
    
    const commands = {
        'gay': {
            emoji: '🏳️‍🌈',
            titles: ['Medidor de Gayness 🌈', 'Detector Gay Pro 🦄', 'Gay Scanner 3000 🎭'],
            levels: [
                { max: 25, msg: 'Apenas y se te nota 😌' },
                { max: 50, msg: 'Tienes tus momentos 😅' },
                { max: 75, msg: 'Bastante gay amigo 😳' },
                { max: 100, msg: 'Super Gay confirmado 🌈' },
                { max: Infinity, msg: 'ULTRA MEGA GAY 🏳️‍🌈✨' }
            ]
        },
        'lesbiana': {
            emoji: '👩‍❤️‍👩',
            titles: ['Medidor de Lesbiana 💝', 'Lesbian Detector Pro 💕', 'Sapphic Scanner 💗'],
            levels: [
                { max: 25, msg: 'Un poco curiosa 🤔' },
                { max: 50, msg: 'Bisexual quizás 💫' },
                { max: 75, msg: 'Muy lesbiana 🌟' },
                { max: 100, msg: 'SUPER LESBIANA 💝' },
                { max: Infinity, msg: 'LESBIANA SUPREMA 👑' }
            ]
        },
        'pajero': {
            emoji: '💦',
            titles: ['Medidor de Pajero 🔥', 'Detector Manuela PRO 😈', 'Pajert Scanner 3000'],
            levels: [
                { max: 25, msg: 'Novato en el arte 🤭' },
                { max: 50, msg: 'Pajero amateur 😏' },
                { max: 75, msg: 'Pajero profesional 🥵' },
                { max: 100, msg: 'PAJERO EXTREMO 💦' },
                { max: Infinity, msg: 'PAJERO LEGENDARIO 🔥' }
            ]
        },
        'puto': {
            emoji: '🔥',
            titles: ['Medidor de Putería 😈', 'Puto Scanner Plus 🥵', 'Putation Detector'],
            levels: [
                { max: 25, msg: 'Apenas puto 😌' },
                { max: 50, msg: 'Medio puto 😏' },
                { max: 75, msg: 'Muy puto 😈' },
                { max: 100, msg: 'SUPER PUTO 🔥' },
                { max: Infinity, msg: 'PUTO SUPREMO 👑' }
            ]
        },
        'manco': {
            emoji: '🎮',
            titles: ['Medidor de Manco 🎮', 'Manco Analytics 🕹️', 'Noob Detector 3000'],
            levels: [
                { max: 25, msg: 'Algo manco eres 😌' },
                { max: 50, msg: 'Manco promedio 🎮' },
                { max: 75, msg: 'Muy manco 😹' },
                { max: 100, msg: 'SUPER MANCO 💩' },
                { max: Infinity, msg: 'MANCO SUPREMO 🗑️' }
            ]
        },
        'rata': {
            emoji: '🐁',
            titles: ['Medidor de Rata 🐀', 'Rata Scanner Pro 🧀', 'Ratómetro 3000'],
            levels: [
                { max: 25, msg: 'Apenas rata 🤏' },
                { max: 50, msg: 'Rata promedio 🐁' },
                { max: 75, msg: 'Rata certificada 🧀' },
                { max: 100, msg: 'SUPER RATA 🐀' },
                { max: Infinity, msg: 'RATA SUPREMA 👑' }
            ]
        },
        'prostituto': {
            emoji: '💋',
            titles: ['Medidor de Prostitución 💄', 'Escort Scanner Pro 👄', 'Prostímetro 3000'],
            levels: [
                { max: 25, msg: 'Apenas empezando 😏' },
                { max: 50, msg: 'Medio tiempo 💋' },
                { max: 75, msg: 'Profesional 💄' },
                { max: 100, msg: 'SUPER PROSTITUT@ 👄' },
                { max: Infinity, msg: 'PROSTITUT@ VIP 👑' }
            ]
        }
    };

    if (!commands[command]) return;
    const cmdInfo = commands[command];
    
    const title = cmdInfo.titles[Math.floor(Math.random() * cmdInfo.titles.length)];
    const level = cmdInfo.levels.find(l => percentages <= l.max);
    
    const loading = [
        "〘 ⌛ 〙≋≋≋≋≋≋≋≋≋≋ 0%",
        "〘 ⌛ 〙▃▃▃▃≋≋≋≋≋≋ 30%",
        "〘 ⌛ 〙▃▃▃▃▃▃▃≋≋≋ 60%",
        "〘 ⏳ 〙▃▃▃▃▃▃▃▃▃▃ 100%"
    ];

    const style = {
        border: '━━━━━━━━━━━━━━━━━━━━━',
        center: (text) => {
            const padding = Math.max(0, 15 - Math.floor(text.length / 2));
            return ' '.repeat(padding) + text;
        }
    };

    const formatResult = () => `
${style.border}
✧ ${title} ✧

👤 Usuario: ${name}
📊 Porcentaje: ${percentages}%
${cmdInfo.emoji} Estado: ${level.msg}

▸ Resultado basado en ciencia
▸ y matemáticas avanzadas
${style.border}`;

    let { key } = await conn.sendMessage(m.chat, {
        text: `Analizando a ${name}...`,
        mentions: [m.sender]
    }, { quoted: m });

    for (let i = 0; i < loading.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await conn.sendMessage(m.chat, {
            text: loading[i],
            edit: key
        });
    }

    await conn.sendMessage(m.chat, {
        text: formatResult(),
        edit: key,
        mentions: [m.sender]
    });

    await conn.sendMessage(m.chat, {
        react: {
            text: cmdInfo.emoji,
            key: m.key
        }
    });
};

handler.help = ['gay', 'lesbiana', 'pajero', 'puto', 'manco', 'rata', 'prostituto'].map(v => v + ' <@tag/nombre>');
handler.tags = ['fun'];
handler.command = /^(gay|lesbiana|pajero|puto|manco|rata|prostituto)$/i;
handler.register = true;
handler.group = true;

export default handler;
