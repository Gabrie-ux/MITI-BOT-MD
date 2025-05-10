import { WAMessageStubType } from '@whiskeysockets/baileys'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let totalMembers = participants.length
  let date = new Date().toLocaleString('es-ES', { timeZone: 'America/Mexico_City' })

  let frasesBienvenida = [
    "¡Bienvenido al MUNDO de MITA-Bot!",
    "Explora, comparte y diviértete en este grupo.",
    "Tu presencia ilumina nuestro espacio, ¡disfruta!",
    "Un nuevo viajero ha llegado, ¡bienvenido a bordo!",
    "MITA-Bot te da la bienvenida a esta galaxia.",
    "¡Hola! Esperamos que la pases increíble aquí.",
    "¡Bienvenido! Despega con nosotros en esta aventura.",
    "¡Navega entre conversaciones y diviértete!",
    "Un nuevo explorador ha entrado en órbita, ¡disfruta!",
    "¡Prepárate para una experiencia estelar!",
    "Bienvenido, astronauta. La comunidad te recibe.",
    "¡Explora nuevos horizontes junto a MITA-Bot!",
    "Un viajero intergaláctico ha aterrizado, ¡bienvenido!",
    "Conviértete en parte de esta gran constelación.",
    "¡Bienvenido a bordo de nuestra nave digital!"
  ]

  let frasesDespedida = [
    "Astro-Bot espera verte pronto de nuevo.",
    "Tu viaje continúa en otra galaxia. ¡Éxitos!",
    "Adiós, viajero. Que las estrellas guíen tu camino.",
    "Nos vemos en otra órbita, cuídate.",
    "¡Fue un placer compartir esta travesía contigo!",
    "Gracias por haber sido parte de nuestra tripulación.",
    "¡Nos vemos en otra constelación!",
    "Que el universo te sonría en tu próximo destino.",
    "Las estrellas siempre recordarán tu luz. ¡Hasta pronto!",
    "¡Buen viaje! Astro-Bot siempre tendrá un lugar para ti.",
    "Nos vemos, explorador. Que tu viaje sea seguro.",
    "¡Hasta la próxima! Que sigas descubriendo nuevos mundos.",
    "MITA-Bot te agradece por haber formado parte de este grupo.",
    "¡Éxitos en tu próxima misión intergaláctica!",
    "La comunidad estelar siempre te recibirá con los brazos abiertos."
  ]

  let fraseRandomBienvenida = frasesBienvenida[Math.floor(Math.random() * frasesBienvenida.length)]
  let fraseRandomDespedida = frasesDespedida[Math.floor(Math.random() * frasesDespedida.length)]

  let imageUrl = 'https://files.catbox.moe/yqxg6l.jpg'

  if (chat.welcome) {
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let bienvenida = `╭───────────⟢  
│  ⭐ MITA-BOT-MD ⭐  
│  
│  👤 *Usuario:* ${taguser}  
│  🌎 *Grupo:* ${groupMetadata.subject}  
│  🪐 *Miembros:* ${totalMembers + 1}  
│  📅 *Fecha:* ${date}  
│    
╰───────────⟢
> 💬 *Mensaje:*  
  ${fraseRandomBienvenida}` 
      await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: bienvenida, mentions: [who] })
    }

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE ||
        m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
      let despedida = `╭───────────⟢  
│  🚀 *MITA-BOT-MD* 🚀  
│  
│  👤 *Usuario:* ${taguser}  
│  🌎 *Grupo:* ${groupMetadata.subject}  
│  🪐 *Miembros:* ${totalMembers - 1}  
│  📅 *Fecha:* ${date}  
│  
╰───────────⟢
> 💬 *Mensaje:*  
 ${fraseRandomDespedida}` 
      await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: despedida, mentions: [who] })
    }
  }
}