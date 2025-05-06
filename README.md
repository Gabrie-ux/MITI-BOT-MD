
# 🌟 WhatsApp Bot - Funciones NSFW y Diversión

<p align="center">
  <img src="https://raw.githubusercontent.com/DIEGO-OFC/ShadowBotV4-MD/master/src/sinfondo.png" width="300" height="300"/>
</p>

<p align="center">
  <a href="#"><img title="WhatsApp-Bot-MD" src="https://img.shields.io/badge/WhatsApp Bot MD-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>

<div align="center">
  <img src="https://i.imgur.com/8IqFgBH.gif" alt="Banner" width="600"/>
</div>

## 🎮 Bot Divertido para WhatsApp

Bot creado para añadir diversión y entretenimiento a tus grupos de WhatsApp. Incluye comandos NSFW y funciones de entretenimiento que harán más divertidas tus conversaciones.

---

## 🔥 Características Principales

### 📱 Comandos de Diversión
- Medidores personalizados con animaciones
- Respuestas dinámicas y aleatorias  
- Sistema de niveles y rankings
- Emojis y reacciones interactivas
- Mensajes personalizados por comando

### 🎨 Diseño y Estilo
- Interfaz visual atractiva
- Animaciones de carga únicas
- Diseños ASCII art en respuestas
- Temas personalizables
- Fuentes y estilos únicos

### ⚡ Rendimiento
- Respuestas instantáneas
- Bajo consumo de recursos
- Compatible con múltiples dispositivos
- Actualizaciones automáticas
- Código optimizado

---

## 📋 Lista de Comandos

### 🔞 Comandos NSFW
| Comando | Descripción | Uso |
|---------|-------------|-----|
| `.gay` | Mide nivel gay | .gay @usuario |
| `.lesbiana` | Calcula orientación | .lesbiana @usuario |
| `.pajero` | Nivel de pajero | .pajero @usuario |
| `.puto` | Medidor de putería | .puto @usuario |
| `.manco` | Detector de mancos | .manco @usuario |
| `.rata` | Analizador de ratas | .rata @usuario |
| `.prostituto` | Medidor de prostitución | .prostituto @usuario |

### 🎯 Ejemplos de Uso
```bash
# Medir nivel gay
.gay @usuario
> Analizando niveles de gay...
> Resultado: 69% 🏳️‍🌈

# Detectar manco
.manco @usuario  
> Escaneando habilidades...
> Resultado: 420% manco confirmado 🎮


---

## 🛠️ Instalación y Configuración

### Requisitos Previos
- Node.js 16.x o superior
- FFmpeg
- ImageMagick
- WhatsApp Business
- 2GB RAM mínimo

### Proceso de Instalación

# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-bot

# Instalar dependencias
cd tu-bot
npm install

# Configurar el bot
cp config.example.js config.js
nano config.js

# Iniciar el bot
npm start
```

### Configuración Personalizada
```javascript
// config.js
module.exports = {
  // Tu configuración aquí
  botName: 'Mi Bot Genial',
  prefix: '.',
  ownerNumber: '1234567890',
  // ...más opciones
}


---

## 🎨 Personalización

### Añadir Nuevos Comandos

// Ejemplo de nuevo comando
'comando_nuevo': {
    emoji: '🔥',
    titles: [
        'Medidor Pro 🔥',
        'Detector Supreme ⚡',
        'Scanner 3000 🚀'
    ],
    levels: [
        { max: 20, msg: 'Nivel Noob 😢' },
        { max: 40, msg: 'Nivel Normal 😐' },
        { max: 60, msg: 'Nivel Pro 😎' },
        { max: 80, msg: 'Nivel Master 🔥' },
        { max: 100, msg: 'NIVEL DIOS 👑' }
    ]
}


### Modificar Estilos
const style = {
    border: '━━━━━━━━━━━━━━━━',
    title: '✧ ${title} ✧',
    result: '➜ ${result}',
    footer: '▸ ${footer}'
}

---

## 📚 Documentación Detallada

### Estructura del Proyecto

tu-bot/
├── commands/
│   ├── fun/
│   │   ├── gay.js
│   │   ├── manco.js
│   │   └── ...
│   └── ...
├── lib/
│   ├── database.js
│   ├── loader.js
│   └── ...
├── media/
│   ├── sticker/
│   ├── gif/
│   └── ...
├── config.js
└── index.js

### Funciones Principales

// Ejemplo de función principal
async function analyzeUser(user, type) {
    const result = await calculateScore(user);
    const level = determineLevel(result);
    return formatResponse(level);
}

---

## 🤝 Contribución

### Cómo Contribuir
1. Fork el proyecto
2. Crea tu rama de características
   ```bash
   git checkout -b feature/NuevaCaracteristica
   ```
3. Commit tus cambios
   ```bash
   git commit -m 'Añadida nueva característica'
   ```
4. Push a la rama
   ```bash
   git push origin feature/NuevaCaracteristica
   ```
5. Abre un Pull Request

### Reglas de Contribución
- Mantén el código limpio y comentado
- Sigue las convenciones de nombres
- Prueba todo antes de enviar
- Actualiza la documentación

---

## 📄 Licencia y Créditos

### Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

### Créditos
- **ABRAHAN-M** - *Desarrollo Principal*
- Agradecimientos especiales a:
  - La comunidad de WhatsApp Bot
  - Contribuidores del proyecto
  - Beta testers

---

## 🌟 Características Extra

### Sistema de Niveles
- Niveles dinámicos
- Experiencia personalizada
- Rangos especiales
- Recompensas por nivel
- Sistema anti-trampas

### Personalización Avanzada
- Temas personalizables
- Fuentes modificables
- Emojis configurables
- Mensajes editables
- Animaciones ajustables

### Seguridad
- Anti-spam integrado
- Protección contra flood
- Filtros de contenido
- Backups automáticos
- Sistema de baneos

---

## 📞 Contacto y Soporte

### Contacto
- WhatsApp: [+1234567890](https://wa.me/1234567890)
- Telegram: [@tuusuario](https://t.me/tuusuario)
- Discord: [Server](https://discord.gg/tuserver)
- YouTube: [Canal](https://youtube.com/tucana)

### Soporte
- [Grupo de WhatsApp](https://chat.whatsapp.com/tugrupo)
- [Canal de Telegram](https://t.me/tucanal)
- [Foro de Soporte](https://foro.tubot.com)
- [Wiki](https://wiki.tubot.com)

---

<div align="center">

### 🌟 ¡No olvides dar una estrella si te gustó! 🌟

<a href="https://github.com/tu-usuario/tu-bot/stargazers">
  <img src="https://img.shields.io/github/stars/tu-usuario/tu-bot?style=social" alt="Stars">
</a>

</div>

---

## 🎮 Galería

<div align="center">
  <img src="https://i.imgur.com/ejemplo1.png" width="200"/>
  <img src="https://i.imgur.com/ejemplo2.png" width="200"/>
  <img src="https://i.imgur.com/ejemplo3.png" width="200"/>
</div>

---

## 📊 Estadísticas

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=tu-usuario&show_icons=true&theme=radical" alt="GitHub Stats"/>
</div>

---

<div align="center">
  <h3>💖 Gracias por usar nuestro bot 💖</h3>
  <p>Hecho con ❤️ por ABRAHAN-M</p>
</div>

