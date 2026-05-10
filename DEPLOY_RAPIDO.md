# STRATEGEMA — Deploy a Vercel en 5 Minutos

**Estado**: ✅ Listo para deploy  
**Tiempo estimado**: 5-10 minutos  
**Complejidad**: Muy baja (GUI, sin código)

---

## 📋 PRECONDICIONES

- [ ] Cuenta en GitHub (la tienes ✅)
- [ ] Cuenta en Vercel (crear gratis, sin tarjeta)
- [ ] Este documento + los 7 archivos del ZIP

---

## 🚀 PASO 1: Crear Repositorio en GitHub (2 minutos)

1. Ve a https://github.com/new
2. **Repository name**: `strategema-pwa`
3. **Description**: "STRATEGEMA — Plan Personal PWA"
4. **Visibility**: Elige **Public** (recomendado para Vercel gratuito)
5. **Initialize with**:
   - [ ] Add .gitignore → **NO** (no necesitamos)
   - [ ] Add a README → **NO** (tenemos documentation dentro)
6. Click **Create repository**

✅ Tu repo estará en: `https://github.com/TU_USUARIO/strategema-pwa`

---

## 🚀 PASO 2: Subir Archivos a GitHub (2 minutos)

### OPCIÓN A: Desde GitHub (más fácil)

1. En tu repo nuevo, click **Add file** → **Upload files**
2. Selecciona todos estos 7 archivos:
   ```
   index.html
   app.js
   manifest.json
   sw.js
   vercel.json
   generate-icons.py
   GUIA_VERCEL.md
   ```
3. En el mensaje de commit, escribe:
   ```
   Initial commit: STRATEGEMA PWA v1.0.0
   ```
4. Click **Commit changes**

✅ Los archivos están en GitHub ahora.

### OPCIÓN B: Desde tu computadora (CLI, si prefieres)

```bash
cd ~/Downloads/strategema-pwa  # o donde hayas descargado los archivos
git init
git add .
git commit -m "Initial commit: STRATEGEMA PWA v1.0.0"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/strategema-pwa.git
git push -u origin main
```

---

## 🚀 PASO 3: Conectar con Vercel (1 minuto)

1. Ve a https://vercel.com/signup (si no tienes cuenta)
2. Click **Continue with GitHub**
3. Autoriza Vercel a acceder a tus repos
4. En tu dashboard de Vercel, click **Add New...** → **Project**
5. Busca `strategema-pwa` y selecciónalo
6. **Configure Project**:
   - Framework: **Other** (porque es PWA vanilla)
   - Root Directory: `./` (default está bien)
   - Build Command: dejar en blanco (o `echo 'PWA ready'`)
   - Output Directory: `./`

7. Click **Deploy**

⏳ Vercel compilará en ~30 segundos...

✅ **Tu app estará en vivo en una URL como**: `https://strategema-pwa.vercel.app`

---

## ✅ PASO 4: Verificar que Funciona (1 minuto)

1. Abre tu URL en **Firefox o Chrome** (no Safari aún)
2. Deberías ver el **splash screen** "STRATEGEMA"
3. Click **Comenzar**
4. Verifica que puedas:
   - ✅ Ver la Semana I con 7 días
   - ✅ Hacer click en un día
   - ✅ Marcar sellos (4/4)
   - ✅ Editar una tarea inline
   - ✅ Cambiar a tab "Resumen"

Si todo funciona → **DEPLOYMENT EXITOSO** 🎉

---

## 📱 PASO 5: Instalar en Móvil (3 minutos)

### iPhone (iOS)

1. Abre la URL en **Safari**
2. Tap compartir (ícono abajo)
3. **"Agregar a pantalla de inicio"**
4. Nombre: `STRATEGEMA`
5. Click **Agregar**

🏠 La app aparecerá en tu home screen

### Android (Chrome)

1. Abre la URL en **Chrome**
2. Menú (3 puntos) → **Instalar app**
3. Confirma
4. La app se instalará automaticamente

🏠 La app aparecerá en tu app drawer

---

## 🎯 COMPROBAR QUE FUNCIONA OFFLINE

Una vez instalada en móvil:

1. **Activa el plan en la app**:
   - Selecciona un día
   - Marca algunos sellos ✓
   - Edita una tarea

2. **Desactiva datos/WiFi**:
   - Modo avión ON

3. **Cierra y reabre la app**:
   - Debe cargar sin internet
   - Los datos deben estar ahí

✅ Si funciona → PWA perfecta

---

## 🚨 TROUBLESHOOTING

### "Mi URL no carga"
→ Espera 30 segundos, la build de Vercel tarda

### "El layout se ve roto"
→ Limpia el caché del navegador (Ctrl+Shift+Del / Cmd+Shift+Del)

### "No puedo instalar en iPhone"
→ Abre en **Safari** (no Chrome). Chrome en iOS no permite install.

### "Los datos se borran después de cerrar"
→ Asegúrate que localStorage esté habilitado (F12 → Application → Storage)

### "La app es muy lenta"
→ Recarga página (Cmd+R). Primera carga cargue el Service Worker.

---

## ✨ SIGUIENTE PASO

Una vez desplegado:

### Hoy mismo
- ✅ URL pública compartible
- ✅ App funcional en móvil
- ✅ Datos guardados offline

### Próxima semana (TIER 1 - Polish)
1. Generar iconos PNG (from SVG)
2. Crear guía de instalación personalizada con QR
3. Optimizar textos para español latino

### Próximo mes (TIER 2 - Expansión)
1. Crear Mes 2 automáticamente
2. Dashboard de analytics
3. Notificaciones diarias

---

## 📞 RESUMEN

| Paso | Tiempo | Acción |
|------|--------|--------|
| 1 | 2 min | Crear repo en GitHub |
| 2 | 2 min | Subir archivos |
| 3 | 1 min | Conectar Vercel |
| 4 | 1 min | Verificar URL |
| 5 | 3 min | Instalar en móvil |
| **TOTAL** | **~10 min** | **APP VIVA** ✅ |

---

## 🎯 RESULTADO FINAL

Después de estos pasos tendrás:

✅ App en: `https://strategema-pwa.vercel.app` (reemplazar `pwa` si quieres otro nombre)
✅ Instalable en móvil como app nativa
✅ 100% offline
✅ Auto-deploy: Cuando hagas push a GitHub, Vercel se actualiza automático

---

**Guía creada**: Mayo 10, 2026  
**Para**: Abogado tributarista, 30 min/día  
**Estado**: 🟢 LISTO PARA DEPLOY

VINCIT QUI SE VINCIT — Comienza hoy.
