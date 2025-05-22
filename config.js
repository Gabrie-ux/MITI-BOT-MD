import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//---------[ Añada los numeros a ser Propietario/a ]---------

global.owner = [['50557333744', 'ＰＲＯＰＩＥＴＡＲＩＯ', true]'], [''], ['']]
global.mods = []
global.prems = []

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = "" //Ejemplo: +59309090909
global.confirmCode = "" 

//cambia a false Desactivar en "auto-reconexion" de sub-bots
global.gataJadibts = true 

// Cambiar a false para usar el Bot desde el mismo numero del Bot.
global.isBaileysFail = false

//---------[ APIS GLOBAL ]---------

global.openai_key = 'sk-...OzYy' /* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */
global.openai_org_id = 'HITjoN7H8pCwoncEB9e3fSyW' /* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */
global.Key360 = ['964f-0c75-7afc']//key de violetics
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "GataDiosV2"
global.fgkeysapi = "elrebelde21"
global.itsrose = ['4b146102c4d500809da9d1ff']
global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://delirius-apiofc.vercel.app'

global.APIs = {
nrtm: 'https://fg-nrtm.ddns.net',
fgmods: 'https://api.fgmods.xyz',
xteam: 'https://api.xteam.xyz', 
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',	
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',	
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site' },

global.APIKeys = {
'https://api.fgmods.xyz': `${fgkeysapi}`,
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,	
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren' }

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//------------------------[ Stickers ]-----------------------------

global.packname = 'MitaBot'
global.author = 'Gabrie-ux'

//------------[ Versión | Nombre | cuentas ]------------

global.wm = '' 
global.botname = 'MitaBot'
global.vs = '1.0.0'
global.yt = ''
global.tiktok = ''
global.md = 'https://github.com/Gabrie-ux/MITI-BOT-MD'
global.fb = ''
global.face = ''


//------------------------[ Info | Datos ]---------------------------

global.wait = 'Espere por favor❗*'
global.waitt = '*⌛ _Cargando..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _Cargando..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*'
global.waittttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▬*'
global.rg = '『✅ 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 ✅』\n\n'
global.resultado = rg
global.ag = '『⚠️ 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 ⚠️』\n\n'
global.advertencia = ag
global.iig = '『❕ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 』\n\n'
global.informacion = iig
global.fg = '『❌ 𝙀𝙍𝙍𝙊𝙍 ❌』\n\n'
global.fallo = fg
global.mg = '『❗️ 𝙇𝙊 𝙐𝙎𝙊 𝙈𝘼𝙇❗』\n\n'
global.mal = mg
global.eeg = '『📩 𝙍𝙀𝙋𝙊𝙍𝙏𝙀 📩』\n\n'
global.envio = eeg
global.eg = '『💚 𝙀𝙓𝙄𝙏𝙊𝙎 💚』\n\n'
global.exito = eg

//----------------------------[ NIVELES | RPG ]---------------------------------

global.multiplier = 850 // Cuanto más alto, más difícil subir de nivel
global.maxwarn = '4' // máxima advertencias

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

//----------------------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
