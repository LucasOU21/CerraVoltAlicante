# CerraVolt — Alicante

Landing estática de **CerraVolt**, cerrajería y electricidad en Alicante. Un solo número para llamar y WhatsApp: **644 098 546**.

- Sitio: Next.js (App Router) + TypeScript + Tailwind CSS
- Repositorio: [github.com/LucasOU21/CerraVoltAlicante](https://github.com/LucasOU21/CerraVoltAlicante)
- Idioma de la interfaz: español (España)

## Arrancar en local

Necesitas Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build
npm start
npm run lint
```

No hace falta ningún secreto ni variable de entorno.

## Publicar en Vercel

1. Entra en [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. **Add New → Project** y elige `LucasOU21/CerraVoltAlicante`.
3. Framework: Next.js. Build: `next build`. Output: el predeterminado.
4. Deploy. La URL de producción se puede apuntar después a un dominio propio.

O desde la CLI:

```bash
npx vercel
```

## Plantilla para otras landings

Casi todo el texto y los datos de negocio viven en `src/content/site.ts`. Para clonar esta base (otra ciudad, otro oficio, otro teléfono):

1. Copia el repo o esta carpeta.
2. Edita `src/content/site.ts`: nombre, teléfono, WhatsApp, provincia, servicios, FAQ y mapa.
3. Sustituye `public/logo.png`.
4. Ajusta colores en `src/app/globals.css` si el acento no es el oro de CerraVolt.
5. Cambia `metadataBase` en `src/app/layout.tsx` y las URLs de `robots.ts` / `sitemap.ts`.

La página es una sola ruta: hero, servicios, confianza, preguntas y contacto. El formulario solo abre WhatsApp; no hay CMS ni backend.

## Contacto

- Llamar: [`tel:+34644098546`](tel:+34644098546)
- WhatsApp: [wa.me/34644098546](https://wa.me/34644098546)
