# devotion2vote-web

Sitio de **devotion2vote** (www.devotion2vote.com). Estático, sin datos de cliente: todo lo confidencial
lo sirve `devotion2vote-api` con credencial.

- `index.html` — página pública del producto (piel provisional; la identidad definitiva se aplica como línea aparte).
- `sala.html` — **Sala de Método** (equipo): 1 Diálogo con DANTE · 2 Bases · 3 Cuaderno · 4 Laboratorio · 5 Evaluación.
  Lee la URL del motor de `<meta name="d2v-api">`. Acceso con usuario nominal y código.
- `netlify.toml` — cabeceras (la sala no se cachea ni se indexa).

Despliegue: Netlify, sitio nuevo apuntando a este repositorio, dominio www.devotion2vote.com.
