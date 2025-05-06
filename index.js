import { join, dirname } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts'
import { createInterface } from 'readline'
import yargs from 'yargs'
import chalk from 'chalk'

console.log(chalk.greenBright('\n⚡ Iniciando Sistema...\n'))

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { name, description, author, version } = require(join(__dirname, './package.json'))
const rl = createInterface(process.stdin, process.stdout)

// Banner principal actualizado
cfonts.say('AZUMI BOT', {
  font: 'simple3d',
  align: 'center',
  colors: ['#ff0000', '#ffffff'],
  background: 'transparent',
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: '0'
})

cfonts.say('ᴀᴢᴜᴍɪ - ʙᴏᴛ', {
  font: 'chrome',
  align: 'center',
  colors: ['#ff69b4'],
  background: 'transparent',
  letterSpacing: 1,
  lineHeight: 1
})

let isRunning = false

function start(file) {
  if (isRunning) return
  isRunning = true

  let args = [join(__dirname, 'azumi', file), ...process.argv.slice(2)]
  
  cfonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    colors: ['#00ff00'],
    background: 'transparent',
    letterSpacing: 0
  })

  setupMaster({
    exec: args[0],
    args: args.slice(1)
  })

  let p = fork()

  p.on('message', data => {
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start(file)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })

  p.on('exit', (_, code) => {
    isRunning = false
    console.error(chalk.redBright('⚠️ Error Detectado:\n'), code)
    process.exit()
    if (code === 0) return
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
  })
}

process.on('warning', warning => {
  if (warning.name === 'MaxListenersExceededWarning') {
    console.warn(chalk.yellowBright('⚠️ Advertencia: Límite de Listeners Excedido en:'))
    console.warn(warning.stack)
  }
})

console.log(chalk.cyanBright('╔══════════════════════════════════════════╗'))
console.log(chalk.cyanBright('║        ᴀᴢᴜᴍɪ Sistema Iniciado           ║'))
console.log(chalk.cyanBright('╚══════════════════════════════════════════╝\n'))

start('start.js')