# CLAUDE.md

Este archivo proporciona orientación a Claude Code (claude.ai/code) cuando trabaja con código en este repositorio.

## Resumen del Proyecto

Sitio web estático construido con Hugo para AM Psicología Madrid, un gabinete de psicología clínica. El sitio está completamente en español e incluye información sobre servicios de terapia, áreas de intervención, tarifas, blog de psicología y formulario de contacto.

**Responsable:** Alaitz Martínez Latorre
**Ubicación:** Calle Hilarión Eslava, 27bis, piso 1º, puerta 4 - 28015 Madrid
**Nº Colegiado:** M-29373 (Colegio Oficial de Psicólogos de Madrid)
**Geolocalización:** 40.4381311, -3.7197575
**Email:** contacto@ampsicologiamadrid.com · **Teléfono:** 686 898 494
**Web:** https://www.ampsicologiamadrid.com/

## Comandos

```bash
hugo server -D                              # Desarrollo con live reload (http://localhost:1313/)
hugo --minify --cleanDestinationDir --ignoreCache   # Build de producción → dist/
hugo new posts/titulo-del-post.md           # Nuevo post (también terapias/ y areas-intervencion/)
```

- Hugo v0.163.1+extended (fijado también en CI). Node 22 (igual que CI).
- Salida en `dist/` (publishDir en config.toml).

## Despliegue

GitHub Actions (`.github/workflows/`):
- `deploy.yml`: push a master → build + subida por SFTP al hosting.
- `build.yml`: pull requests → build de comprobación.

El deploy SFTP no borra archivos remotos obsoletos (los assets con hash antiguos se acumulan en el servidor).

## Arquitectura

### Configuración (`config.toml`)
- SEO: languageCode "es-ES", enableRobotsTXT (template en `layouts/robots.txt`), canonifyURLs, sitemap.
- Imaging: quality 85, Lanczos.
- Taxonomías: tags y categorías (generan ~72 páginas automáticamente).
- Datos de contacto, horarios, textos/CTAs del sitio, menú de dos niveles (campo `parent`).
- Google: GTM-TXCJLVMX y GA4 G-W08QTS1G1Y (solo se cargan tras consentimiento de cookies).
- Swiper self-hosted: montado desde `node_modules/swiper` como `assets/vendor/swiper` (module mounts).

### Contenido (`content/`)
- `posts/` — 8 artículos (350-400 palabras, fechas en la última semana del mes).
- `terapias/` — 6 servicios. `areas-intervencion/` — 10 áreas.
- Páginas: `sobre-mi.md`, `tarifas.md`, `contacto.md`, `gracias-contacto.md`.
- Legales: `aviso-legal.md`, `politica-privacidad.md`, `cookies.md` (RGPD, LSSI-CE, LOPDGDD).
- Cada página declara `type` en el frontmatter y tiene layout propio en `layouts/<type>/single.html`.

Frontmatter de posts:
```toml
+++
date = 2025-11-28T10:00:00+01:00
author = "Alaitz Martínez Latorre"
title = "Título"
description = "Meta description de 150-160 caracteres"
keywords = ["k1", "k2"]
tags = ["tag1", "tag2"]
categories = ["Categoría"]
share = true
draft = false
[thumbnail]
image = "images/nombre.jpg"   # SIN barra inicial: ruta de assets/, procesada por Hugo
alt = "Alt text descriptivo"
+++
```

### Layouts clave
- `_default/baseof.html` — base: partial seo, favicon, resource hints, fuentes async, Swiper CSS/JS solo en home, Tailwind via PostCSS (minify+fingerprint+SRI en producción), JS diferido, banner de cookies.
- `partials/seo.html` — meta tags, Open Graph/Twitter, JSON-LD (Organization, LocalBusiness, Person, WebSite, WebPage, Article, BreadcrumbList). La imagen social se resuelve desde el thumbnail de assets con `resources.Get` + `.Resize` (la ruta cruda no existe en `dist/`).
- `partials/cookie-consent.html` — banner RGPD. Consentimiento en localStorage como `accepted|<timestamp>` (caduca a los 12 meses). El enlace `#cookie-settings` del footer reabre el banner.
- `partials/googletagmanager-global.html` — Google Consent Mode v2 denegado por defecto; GTM+GA4 solo tras aceptación.
- `partials/contact-form.html` — Formspree, checkbox RGPD obligatorio, honeypot. Lleva `novalidate`: la validación es 100% JS (main.js) para mostrar mensajes estilizados; la nativa del navegador la bloquearía.
- `partials/breadcrumb.html` — breadcrumbs con ARIA en todas las páginas de contenido.
- `404.html` — página de error con enlaces internos.

### Imágenes
- `assets/images/` — todo lo procesable por Hugo (WebP q85, resize). En frontmatter usar `images/...` sin barra inicial.
- `static/images/` — solo 3 archivos sin procesar: `amp.svg` (logo), `og-image.jpg` (OG por defecto 1200x630), `sobre-mi.png` (structured data).
- Hero (home): 3 slides generados por bucle en `partials/home.html` con srcset 640/1280/1920, width/height (sin CLS), primera imagen eager+fetchpriority y preload con `imagesrcset` en baseof. Autoplay con paginación clicable; sin flechas ni botón de pausa.
- Las tarjetas (posts, relacionados, etc.) procesan el thumbnail con `resources.Get` + Resize/Fill; nunca usar la ruta cruda del frontmatter en `src` (no existe en `dist/`).
- Terapias/Áreas: `Resize "x400 webp q85"` (altura uniforme 400px sin recorte vertical).
- Carrusel móvil: `object-position: 30% top` (segunda columna de la imagen), `center top` en desktop.

### CSS/JS
- Tailwind CSS v3 (`tailwind.config.js`, `postcss.config.js`). Fuentes: DM Sans (display) + Inter (body).
- El `content` de Tailwind incluye `assets/js/` — las clases añadidas dinámicamente desde JS (ej. `border-error`) no se generan si no se escanea esa ruta.
- Color `error` (#a85048, rojo teja desaturado acorde a la paleta terracota) para mensajes/bordes de validación; no usar `red-500`.
- Botones CTA: clases `cta-enhanced btn-depth` (translateY+sombra en hover; borde interno sutil).
- `assets/js/main.js`: menú móvil (con Escape y cierre al pasar a desktop), dropdowns accesibles, sticky header, smooth scroll, Intersection Observer para `data-animate`, Swiper (solo home), validación del formulario (teléfono español con prefijo +34 opcional, checkbox RGPD, foco al primer campo inválido), back-to-top. Scroll listeners pasivos.

### Seguridad / Hosting (`static/.htaccess`)
- Redirect non-www→www y HTTPS forzado; ErrorDocument 404.
- Cabeceras: HSTS, CSP (con `frame-ancestors 'self'`; `unsafe-inline` aún necesario por los scripts inline), X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy.
- Gzip; cache immutable 1 año para assets con fingerprint; 1 día para og-image.jpg/amp.svg/sobre-mi.png (sin hash); HTML sin cache.

## Lecciones aprendidas (structured data y Google)

- No usar `@type` como array: `@type: "LocalBusiness"` + `additionalType` para tipos secundarios.
- `sameAs` en templates Hugo: generar el array JSON con control de comas, no con `{{ range }}url,{{ end }}`.
- Tipos que heredan de LocalBusiness (ProfessionalService, etc.) exigen telephone/address/priceRange/image; si no se necesitan, usar string simple (ej. `memberOf`).
- No inventar `aggregateRating` ni añadir `SearchAction` sin buscador real: riesgo de acción manual de Google (se eliminaron en 2026).
- Validar con https://search.google.com/test/rich-results tras tocar `seo.html`.

## Notas

1. Fechas en español en templates: `{{ .Date.Day }} de {{ index (slice "enero" ...) (sub .Date.Month 1) }} de {{ .Date.Year }}`.
2. Formulario: action `https://formspree.io/f/<email>`; campos name/phone/email/message + `_next` (redirección a /gracias-contacto/), `_subject`, `_language`, `_gotcha`.
3. Enlace a Doctoralia en el footer (botón propio, sin widget de terceros), activable con `params.footerEnableDoctoralia`.
4. Warning "Unrecognized feature: browsing-topics" viene de GTM, no del sitio. Inofensivo.
5. `markup.goldmark.renderer.unsafe = true` es necesario para HTML embebido en markdown.
