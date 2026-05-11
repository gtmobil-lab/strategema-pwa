# STRATEGEMA — Plan Personal PWA

> **Transformación en 90 días. Offline. Permanente. Personalizable.**

Una aplicación web progresiva (PWA) para gestionar un plan de transformación personal basado en 4 pilares: MIT (tarea importante), Lectura, Físico, Proyección.

---

## ✨ Características

- 🏛️ **Diseño "Stoic Ledger"**: Fusión de diario antiguo + interfaz moderna
- 📱 **Instalable en móvil**: Funciona como app nativa (sin App Store)
- 🔌 **100% Offline**: Service Worker + localStorage
- 📊 **Tracking inteligente**: Sellos por pilar, gráficos semanales, reflexiones
- ✏️ **Edición inline**: Tareas, horarios, focos (auto-save)
- 🎨 **Personalizable**: Crea tus propios pilares e iconos
- 💾 **Export/Import**: Backup en JSON, compartible
- ⚡ **Cero dependencias**: HTML/CSS/JS vanilla, <100KB
- 🌍 **Privacidad total**: Zero-knowledge, sin servidores, sin tracking

---

## 🚀 Inicio Rápido

### En navegador

1. **Clonar/Descargar archivos**
2. **Abrir `index.html` en navegador**
3. Click **"Comenzar"**

Listo. La app funciona sin servidor.

### En móvil (recomendado)

#### iPhone
1. Safari → Abrir esta URL
2. Compartir → **Agregar a pantalla de inicio**
3. Nombrear: `STRATEGEMA`
4. Abrir desde home

#### Android
1. Chrome → Abrir esta URL
2. Menú (⋮) → **Instalar app**
3. Confirmar
4. Abrir desde app drawer

---

## 🎯 Estructura

```
STRATEGEMA/
├── index.html          # Interfaz + CSS inline (43KB)
├── app.js              # Lógica de estado + eventos (50KB)
├── manifest.json       # Metadata PWA
├── sw.js               # Service Worker (offline)
├── vercel.json         # Config deployment
├── generate-icons.py   # Script para iconos
└── README.md           # Este archivo
```

---

## 📊 Conceptos

### Los 4 Pilares
1. **MIT** — Most Important Task (tarea diaria crítica)
2. **Lectura** — Contenido cultural/ejecutivo
3. **Físico** — Movimiento + entrenamiento
4. **Proyección** — Actuar como la persona que quieres ser

Cada día tiene 3 bloques (mañana/mediodía/noche) con tareas asignadas.

### Sellos
- 1 sello = 1 pilar completado ese día
- 4/4 sellos = Día perfecto ✅
- Cada semana ves progreso visual
- Reflexiones semanales para ajustar

---

## 🎨 Personalización

### Cambiar pilares
1. Tab **"Evaluación"** → Sección "Gestionar Pilares"
2. Click **"Editar"** junto a cada pilar
3. Modifica nombre, ícono
4. Cambios se guardan al instante

### Editar tareas
1. Selecciona un día
2. Click en cualquier tarea
3. Edita inline
4. Auto-save en 500ms

### Agregar/eliminar bloques
1. Click **"+"** al final de un día
2. Nombre, hora, tareas
3. Saved automáticamente

---

## 📱 Uso Diario

### Mañana
1. Abre la app desde home
2. Selecciona hoy
3. Lee tu MIT
4. Completa el bloque matutino
5. Marca el sello ✓

### Mediodía
- Repite

### Noche
- Repite

### Domingo (Reflexión semanal)
1. Tab **"Resumen"**
2. Responde 4 preguntas (qué bien, qué ajustar, insight, enfoque)
3. Exporta backup (opcional)

### Día 28 (Evaluación)
1. Tab **"Evaluación"**
2. Lee diagnóstico automático
3. Decide compromisos para Mes 2
4. Importa nuevo plan

---

## 💾 Datos

### Almacenamiento
- **localStorage**: Estado de la app (async, persistente)
- **IndexedDB**: Compatible (ready para upgrade futuro)
- **Sin servidor**: Todo en el dispositivo del usuario

### Privacidad
✅ Zero-knowledge (el creador no ve nada)  
✅ Offline-first  
✅ Sin Google Analytics  
✅ Sin cookies tracking  
✅ Sin ads  
✅ Exportable en cualquier momento  

---

## 🔧 Deployment

### Vercel (recomendado, gratis)

1. **GitHub**: Crea repo `strategema-pwa`
2. **Vercel**: Conecta el repo (https://vercel.com)
3. **Deploy**: Click, espera 30s
4. **URL**: https://strategema-pwa.vercel.app (personalizable)

Ver **DEPLOY_RAPIDO.md** para paso a paso.

### Alternativas
- **Netlify**: Igual que Vercel
- **GitHub Pages**: Con `gh-pages` branch
- **Localhost**: `python -m http.server 8000`

---

## 🛠️ Desarrollo

### Stack
```
Frontend:  HTML5 + CSS3 + JS Vanilla
Storage:   localStorage + Service Worker
Fonts:     Google Fonts (Cormorant, JetBrains Mono, Crimson)
Icons:     SVG + PNG (maskable para mobile)
Build:     Ninguno (es PWA vanilla)
```

### Compilar (sin dependencias)
```bash
# 1. Instalar en local
python -m http.server 8000

# 2. Abrir http://localhost:8000
# 3. F12 → Application → Service Workers → Verificar activado
```

### Generar iconos PNG (opcional)
```bash
python generate-icons.py
# Genera icon-192.png, icon-512.png, icon-maskable.png
```

---

## 📈 Próximas Mejoras

### TIER 1: Inmediato
- [ ] Deploy a Vercel (5 min) ← **START HERE**
- [ ] Convertir iconos SVG → PNG
- [ ] Guía de instalación con QR

### TIER 2: Corto plazo
- [ ] Crear Mes 2 automáticamente
- [ ] Dashboard de analytics
- [ ] Notificaciones push diarias

### TIER 3: Mediano plazo
- [ ] Integración Google Calendar
- [ ] Sincronización con Notion
- [ ] Shared plan (accountability buddy)

### TIER 4: Largo plazo
- [ ] Web companion (dashboards)
- [ ] App nativa (React Native)
- [ ] Comunidad + galería de planes
- [ ] API + marketplace

Ver **ROADMAP_COWORK.md** para detalles técnicos.

---

## 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| "No puedo editar tareas" | Recarga la página (Cmd/Ctrl + R) |
| "Los datos se borraron" | localStorage fue limpiado. Importa backup JSON. |
| "La app es lenta (1era vez)" | Service Worker está instalando (~2s). Normal. |
| "En iPhone no instala" | Usa **Safari**, no Chrome. Safari tiene mejor PWA. |
| "Los sellos no se guardan" | F12 → Application → Storage → Verifica localStorage |
| "URL es muy larga" | En Vercel, rebrand a `strategema.vercel.app` en settings |

---

## 📞 FAQ

**¿Necesito internet?**  
No. Una vez instalada, funciona 100% offline. Sincronización en la nube es opcional (futura mejora).

**¿Se pierde si cierro la app?**  
No. localStorage persiste entre sesiones. Los datos están seguros.

**¿Puedo compartir mi plan?**  
Sí. Botón **Export JSON** te da un archivo. Otros pueden **Import** para clonar.

**¿Es software libre?**  
Personal para ahora. Código disponible aquí. Futuro: OSS + licencia clara.

**¿Qué ocupa?**  
~3MB instalada en móvil. ~50MB en tu navegador (cacheable).

**¿Funciona en tablets?**  
Sí. Responsive para móvil, tablet, desktop.

---

## 📝 Licencia

Personal (del usuario). Futuro: Decidir entre OSS (MIT) o freemium.

---

## 🙋 Soporte

Este es un proyecto personal ejecutado en Cowork. Para cambios, mejoras o reportar bugs:
1. Fork este repo
2. Crea una rama (`feature/mi-mejora`)
3. Commit cambios
4. Push y abre PR

---

## 🎯 Visión

**STRATEGEMA** es para profesionales que quieren:
- ✅ Transformación real en 90 días (no aspiracional)
- ✅ Sistema simple, no abrumador
- ✅ Privacidad garantizada (sin tracking)
- ✅ Poder offline (en aviones, trenes, cubanítos)
- ✅ Permanencia (tus datos, tu control)

Diseñado para abogados, emprendedores, atletas, padres. Cualquiera con 30 minutos diarios.

---

## 🏁 Empezar

1. **Clona o descarga este repo**
2. **Copia los 7 archivos a un carpeta**
3. **Crea repo en GitHub** (público)
4. **Conecta a Vercel**
5. **Instala en móvil**
6. **Lunes comienza**

**Ver**: DEPLOY_RAPIDO.md (5 minutos)

---

```
╔═════════════════════════════════════════════════════════════╗
║                                                             ║
║     VINCIT QUI SE VINCIT                                   ║
║     Vence quien se vence a sí mismo                        ║
║                                                             ║
║     Transformación personal · 90 días                      ║
║     Offline · Privado · Personalizable                     ║
║                                                             ║
║     Mayo 2026 — Versión 1.0.0                              ║
║                                                             ║
╚═════════════════════════════════════════════════════════════╝
```
