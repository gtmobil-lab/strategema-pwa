# STRATEGEMA — Guía de Instalación en Vercel

## 📋 ¿Qué es esto?

STRATEGEMA es una **PWA (Progressive Web App)** permanente, personalizable y offline-first. Se instala en tu móvil como una app nativa sin necesidad de App Store.

---

## 🚀 INSTALACIÓN EN VERCEL (5 MINUTOS)

### Paso 1: Preparar GitHub (Si no tienes cuenta, crea una gratis en github.com)

1. Ve a https://github.com/new
2. Crea un repositorio nuevo:
   - Nombre: `strategema` (o el que prefieras)
   - Descripción: "Plan personal de transformación"
   - Selecciona: **Public** (necesario para Vercel gratuito)
   - Presiona "Create repository"

3. En tu computadora, abre Terminal/CMD en una carpeta donde guardes el proyecto:
   ```bash
   cd ~/Documentos  # o donde prefieras
   ```

4. Clona el repositorio vacío:
   ```bash
   git clone https://github.com/TU_USUARIO/strategema.git
   cd strategema
   ```
   (Reemplaza TU_USUARIO con tu nombre de usuario de GitHub)

---

### Paso 2: Agregar archivos de STRATEGEMA

1. Descarga estos archivos de la carpeta `outputs` y colócalos en la carpeta `strategema` en tu computadora:
   - `index.html`
   - `app.js`
   - `manifest.json`
   - `sw.js`
   - `vercel.json`
   - `icon-192.svg`
   - `icon-512.svg`
   - `icon-maskable.svg`

2. En Terminal, dentro de la carpeta strategema:
   ```bash
   git add .
   git commit -m "Initial commit: STRATEGEMA PWA"
   git push origin main
   ```

---

### Paso 3: Conectar con Vercel

1. Ve a https://vercel.com
2. Presiona **Sign Up** (o inicia sesión si tienes cuenta)
3. Elige **"Continue with GitHub"**
4. Autoriza Vercel con tu cuenta de GitHub
5. Una vez en el dashboard, presiona **"Import Project"**
6. Selecciona el repositorio `strategema` que acabas de crear
7. Vercel te pedirá configuración:
   - **Framework**: None (ya que es HTML puro)
   - **Root Directory**: ./
   - Presiona **"Deploy"**

**¡Listo! Tu app estará disponible en:** `https://strategema-TUUSUARIO.vercel.app`

(Vercel te dará la URL exacta en el dashboard)

---

## 📱 INSTALAR EN TU MÓVIL

### iPhone (iOS)

1. **En Safari**, ve a tu URL de Vercel: `https://strategema-TUUSUARIO.vercel.app`

2. Presiona el ícono **compartir** (cuadrado con flecha ↗️) en la barra inferior

3. Busca **"Agregar a pantalla de inicio"**

4. Dale un nombre (ej: "Strategema")

5. Presiona **"Agregar"**

6. ¡Listo! Aparecerá como app en tu home

### Android

1. **En Chrome**, ve a tu URL de Vercel: `https://strategema-TUUSUARIO.vercel.app`

2. Presiona el menú **⋮** (tres puntos arriba a la derecha)

3. Selecciona **"Instalar app"** o **"Agregar a pantalla de inicio"**

4. Confirma el nombre y permisos

5. ¡Listo! Aparecerá como app en tu home

---

## 🔧 CARACTERÍSTICAS

✅ **Offline completo** — Funciona sin internet (tus datos se guardan en el móvil)
✅ **Personalizable** — Agrega/elimina/edita tareas, pilares, bloques, semanas
✅ **Privado** — Los datos nunca se envían a servidores (100% local)
✅ **Responsive** — Funciona perfecto en móvil, tablet y desktop
✅ **Rápido** — Abre instantáneamente, sin lag
✅ **Backup** — Exporta/importa tu plan completo en JSON

---

## 📝 CÓMO USAR

### Primera vez

1. La app mostrará una pantalla de bienvenida
2. Presiona **"Comenzar"**
3. Ya verás el plan predeterminado (Mes I, Semana I, etc.)

### Usando el plan

1. **Selecciona semana** en las tabs de arriba
2. **Elige día** en las tarjetas de la izquierda
3. **Marca sellos** (los 4 pilares) al completar cada bloque
4. **Edita tareas**: Tap largo, escribe, guarda (auto-save)
5. **Agrega bloques**: Botón "+ Agregar bloque" al final del día

### Personalizar

1. **Configuración** (⚙️ arriba a la derecha)
2. **Pilares**: Edita nombre, ícono, agrega/elimina
3. **Datos**: Exporta/importa/resetea

### Resumen y Evaluación

1. Tab **"Resumen"** — Estadísticas por semana, gráficos, reflexiones
2. Tab **"Evaluación"** — Análisis consolidado de todo el plan

---

## 🆘 TROUBLESHOOTING

**P: ¿Aparece en blanco?**
- Espera 30 segundos
- Recarga la página (⟲)
- Borra cache del navegador

**P: ¿Se instaló pero no se abre?**
- En Android: Settings > Apps > Strategema > Clear Cache
- En iOS: Reinicia el teléfono

**P: ¿Perdí mis datos?**
- Si borrase la app, lamentablemente se pierden (es local, no en cloud)
- **Solución**: Periódicamente, exporta tu plan (⚙️ > Exportar)

**P: ¿Cómo actualizo la app si cambio cosas?**
- Los cambios en GitHub se despliegan automáticamente en Vercel
- Tu móvil descargará la actualización la próxima vez que abras
- **Importante**: Tus datos (checks, reflexiones) siempre se guardan localmente, nunca se pierden

**P: ¿Puedo compartir mi plan con alguien?**
- Sí. En la app, ⚙️ > Exportar
- Dale el archivo JSON a la otra persona
- Ellos: ⚙️ > Importar

---

## 💡 TIPS AVANZADOS

### Crear un nuevo plan/mes

1. En la app, ⚙️ > Exportar (copia tu plan actual)
2. Resetea todo (⚙️ > Resetear)
3. Edita los pilares, semanas, bloques, tareas a tu gusto
4. Exporta cada semana o después de cambios importantes

### Usar en múltiples dispositivos

Cada dispositivo tiene sus propios datos (no sincroniza entre ellos).
**Solución**: Exporta desde un dispositivo e importa en el otro.

### Crear un plan completamente personalizado

1. Abre la app
2. ⚙️ > Resetear (borra todo)
3. Define tus pilares (edita los existentes o agrega)
4. En el primer día, agrega/elimina bloques y tareas
5. Copia ese patrón a otros días si es similar

---

## 📊 ESTRUCTURA DE DATOS

El plan se guarda así:
```
{
  "plan": {
    "meta": { título, subtítulo, cita },
    "pillars": [ { id, name, icon }, ... ],
    "weeks": [ { 
      "days": [ {
        "blocks": [ { title, time, tasks: [] } ],
        "checks": { pillar_id: true/false }
      } ]
    } ]
  },
  "reflections": { week-0: { good, adjust, insight, focus } }
}
```

Cuando exportas, obtienes este JSON. Puedes editarlo en cualquier editor de texto si quieres.

---

## 🎯 SIGUIENTE: MES 2

Cuando termines el Mes 1:
1. Exporta tu plan (⚙️ > Exportar) — **guarda este archivo**
2. Resetea todo (⚙️ > Resetear)
3. Edita los bloques y tareas según lo que aprendiste
4. Continúa

O simplemente reabre el archivo exportado e importa para iniciar una nueva ronda con los mismos pilares.

---

## 📞 SOPORTE

Si algo no funciona:
1. Recarga la página
2. Borra cache del navegador
3. Desinstala y reinstala la app
4. Si persiste, contacta a soporte de Vercel: vercel.com/support

---

## 📄 LICENCIA

Esta app es tuya. Haz con ella lo que quieras.

---

**¡Buena suerte con tu transformación personal!**

VINCIT QUI SE VINCIT — Vence quien se vence a sí mismo.
