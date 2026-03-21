# 🚀 SOCFX — Instrucciones de instalación

## PASO 1 — Instala Node.js
👉 Ve a https://nodejs.org y descarga la versión LTS
- Ejecuta el instalador, dale Next a todo
- Abre CMD y escribe: node --version (debe mostrar v20.x.x)

## PASO 2 — Descarga el proyecto
1. Crea una carpeta en tu escritorio llamada "SOCFX"
2. Copia todos estos archivos dentro:
   - server.js
   - package.json
   - carpeta "public" con index.html adentro

## PASO 3 — Pon tu API Key
1. Abre server.js con el Bloc de notas
2. Busca esta línea:
   const OPENROUTER_API_KEY = 'TU_API_KEY_AQUI';
3. Reemplaza TU_API_KEY_AQUI con tu clave de OpenRouter
4. Guarda el archivo

## PASO 4 — Instala dependencias
1. Abre CMD dentro de la carpeta SOCFX
   (Shift + clic derecho → "Abrir ventana de PowerShell aquí")
2. Escribe:
   npm install
3. Espera que termine (1-2 minutos)

## PASO 5 — Ejecuta SOCFX
En el mismo CMD escribe:
   node server.js

Debes ver:
   ✅ SOCFX corriendo en http://localhost:3000

## PASO 6 — Abre en el navegador
👉 Ve a: http://localhost:3000
¡ALEX estará listo para analizar el mercado!

---

## 🌐 Para publicar en internet (Vercel)

1. Crea cuenta en https://vercel.com con GitHub
2. Sube tu carpeta SOCFX a GitHub
3. Conecta el repo en Vercel
4. En Variables de Entorno agrega:
   OPENROUTER_API_KEY = tu_clave_aqui
5. Deploy automático → ¡tu app estará en línea!

---

## 💰 Modelo de negocio
- Gratis: 10 consultas/día
- Pro: $15/mes — consultas ilimitadas
- Elite: $30/mes — + alertas + journal completo
