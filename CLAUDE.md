# CLAUDE.md

Este archivo proporciona orientación a Claude Code (claude.ai/code) cuando trabaja con código en este repositorio.

## Resumen del Proyecto

Sitio web estático construido con Hugo para AM Psicología Madrid, un gabinete de psicología clínica. El sitio está completamente en español e incluye información sobre servicios de terapia, áreas de intervención, tarifas, blog de psicología y formulario de contacto.

**Estado actual:** Completamente optimizado para SEO y rendimiento (febrero 2026)

**Responsable:** Alaitz Martínez Latorre
**Ubicación:** Calle Hilarión Eslava, 27bis, piso 1º, puerta 4 - 28015 Madrid
**Nº Colegiado:** M-29373 (Colegio Oficial de Psicólogos de Madrid)
**Geolocalización:** 40.4381311, -3.7197575

## Comandos de Construcción y Desarrollo

**Construir el sitio:**
```bash
hugo
```
La salida se genera en el directorio `dist/` (configurado en config.toml como `publishDir`).

**Servidor de desarrollo con live reload:**
```bash
hugo server -D
```
El servidor estará disponible en `http://localhost:1313/`

**Crear nuevo contenido:**
```bash
# Entrada de blog
hugo new posts/titulo-del-post.md

# Página de terapia
hugo new terapias/nombre-terapia.md

# Área de intervención
hugo new areas-intervencion/nombre-area.md
```

## Arquitectura del Sitio

### Configuración
- `config.toml` - Archivo principal de configuración de Hugo que contiene:
  - **SEO:** languageCode "es-ES", enableRobotsTXT, canonifyURLs, sitemap config
  - **Imaging:** Configuración de procesamiento de imágenes (quality: 85, Lanczos filter)
  - **Taxonomies:** Tags y categorías para organización de contenido
  - Metadatos del sitio y keywords globales
  - Información de contacto (teléfono, email, dirección)
  - Configuración de Google Tag Manager (GTM-TXCJLVMX y GA4: G-W08QTS1G1Y)
  - Enlaces de redes sociales
  - Estructura del menú de navegación (menús de dos niveles para Terapias y Áreas de Intervención)
  - Horarios de atención
  - Textos y CTAs del sitio

### Estructura de Contenido

**Homepage** (`content/_index.md`)
- Meta description y keywords optimizados para SEO
- Keywords principales: "psicóloga Madrid", "psicólogo Madrid centro", "terapia psicológica Madrid"

**Posts del Blog** (`content/posts/`)
- 8 artículos sobre temas de psicología
- Fechas distribuidas desde agosto 2020 hasta noviembre 2025 (intervalos de 8-9 meses)
- Todos los posts tienen entre 350-400 palabras
- Cada post incluye:
  - Meta description única (150-160 caracteres)
  - Keywords específicas del tema
  - Imagen destacada (thumbnail) con alt text optimizado
- Tono profesional y cercano
- Artículos: trastornos alimentarios, TLP, depresión reactiva, distimia, control emociones, complejo Caín, asertividad, amaxofobia

**Servicios de Terapia** (`content/terapias/`)
- 6 páginas de servicios, todas con meta description y keywords optimizados
- `adultos.md` - Terapia individual para adultos
- `pareja.md` - Terapia de pareja
- `infantil.md` - Terapia infantil y adolescentes
- `familia.md` - Terapia familiar
- `coaching.md` - Coaching personal
- `informes.md` - Informes psicológicos y periciales

**Áreas de Intervención** (`content/areas-intervencion/`)
- 10 páginas de áreas, todas con SEO completo (description, keywords, alt text)
- `ansiedad.md` - Tratamiento de ansiedad y ataques de pánico
- `depresion.md` - Tratamiento de depresión
- `estres.md` - Manejo del estrés laboral y burnout
- `adicciones.md` - Tratamiento de adicciones
- `fobias.md` - Tratamiento de fobias (social, agorafobia, claustrofobia)
- `obsesiones.md` - Tratamiento del TOC
- `duelos.md` - Terapia de duelo y separaciones
- `alimentacion.md` - Trastornos de la conducta alimentaria
- `sueno.md` - Trastornos del sueño e insomnio
- `personalidad.md` - Trastornos de la personalidad (TLP, etc.)

**Páginas Principales** (`content/*.md`)
- `sobre-mi.md` - Información sobre la psicóloga (con meta description y keywords)
- `tarifas.md` - Precios y bonos de sesiones (incluye Bizum, primera consulta gratuita)
- `contacto.md` - Formulario de contacto (optimizado para conversión SEO)
- `gracias-contacto.md` - Página de confirmación

**Páginas Legales** (`content/*.md`)
- `aviso-legal.md` - Aviso legal y términos de uso (LSSI-CE)
- `politica-privacidad.md` - Política de privacidad (RGPD, LOPDGDD)
- `cookies.md` - Política de cookies (Google Analytics, Doctoralia)

### Sistema de Layouts

**Base y Estructura:**
- `layouts/_default/baseof.html` - Plantilla base con:
  - Meta charset y viewport
  - Partial SEO completo (`{{ partial "seo.html" . }}`)
  - Resource hints (DNS prefetch, preconnect)
  - Google Fonts async loading
  - Swiper CSS preload
  - Tailwind CSS con fingerprinting en producción
  - JavaScript diferido (defer)
- `layouts/index.html` - Página principal (delega en home.html partial)
- `layouts/404.html` - Página de error 404 SEO-friendly con enlaces internos

**Layouts por Sección:**
- `layouts/terapias/single.html` - Plantilla para páginas de terapia
- `layouts/areas-intervencion/single.html` - Plantilla para áreas de intervención
- `layouts/sobre-mi/single.html` - Plantilla para página "Sobre mí"
- `layouts/tarifas/single.html` - Plantilla para página de tarifas
- `layouts/contacto/single.html` - Plantilla para formulario de contacto
- `layouts/gracias-contacto/single.html` - Plantilla de confirmación
- `layouts/legal/single.html` - Plantilla para páginas legales
- `layouts/posts/single.html` - Plantilla para artículos individuales del blog
- `layouts/posts/list.html` - Listado de artículos del blog

**Partials** (`layouts/partials/`)
- `seo.html` - **Partial SEO completo** con:
  - Meta tags (description, keywords, author, robots, geo-location)
  - Canonical URLs automáticas
  - Open Graph completo para Facebook/LinkedIn
  - Twitter Cards con imágenes
  - JSON-LD Structured Data (Organization, LocalBusiness, Person, WebSite, WebPage, Article, BreadcrumbList)
  - Metadatos de artículos (published_time, modified_time)
- `header.html` - Cabecera del sitio con menú de navegación
- `footer.html` - Pie de página con enlaces legales, contacto, horarios y widget de Doctoralia
- `home.html` - Contenido completo de la página principal con carrusel optimizado
- `contact-form.html` - Formulario de contacto
- `googletagmanager-global.html` - Código de seguimiento GTM y GA4
- `noscript.html` - Contenido para usuarios sin JavaScript

### Archetypes

Plantillas en `archetypes/` que definen la estructura de frontmatter para nuevo contenido:
- `posts.md` - Plantilla para artículos del blog
- `terapias.md` - Plantilla para páginas de terapia
- `areas-intervencion.md` - Plantilla para áreas de intervención
- `default.md` - Plantilla predeterminada

### Assets Estáticos

**Imágenes** (`static/images/` y `assets/images/`)
- `static/images/` - 3 archivos servidos directamente (logo SVG, imagen OG, imagen structured data)
- `assets/images/` - Imágenes procesadas por Hugo (usadas en templates con resources.Get)
- **Optimización automática:** Carrusel convierte PNGs a WebP (quality 85, 1920px width)
- **Procesamiento Hugo:** 56 imágenes procesadas automáticamente

**Otros archivos:**
- `static/robots.txt` - Configuración SEO optimizada para robots
- `static/.htaccess` - Configuración de redirección HTTPS
- `static/images/og-image.jpg` - Imagen Open Graph (1200x630px) para redes sociales

**Assets compilados:**
- `assets/css/main.css` - CSS principal (Tailwind CSS)
- `assets/js/main.js` - JavaScript personalizado

## Guías de Contenido

### Posts del Blog

Frontmatter requerido:
```toml
+++
date = 2025-11-28T10:00:00+01:00
author = "Alaitz Martínez Latorre"
title = "Título del artículo"
description = "Meta description optimizada de 150-160 caracteres"
keywords = ["keyword1", "keyword2", "keyword3", "keyword4"]
share = true
draft = false
[thumbnail]
image = "/images/nombre-imagen.jpg"
alt = "Alt text descriptivo y optimizado para SEO"
+++
```

- Longitud: 350-400 palabras
- Estilo: Profesional pero cercano
- Estructura: Introducción + 3-4 secciones con encabezados `##`
- Fechas: Usar días de la última semana del mes (22-30)
- Formato de fecha en templates: "28 de noviembre de 2025" (español)

### Navegación y Menús

Los menús se configuran en `config.toml` bajo `[[menu.main]]`:
- Soporta estructura de dos niveles
- Usa el campo `parent` para crear submenús
- `weight` controla el orden de visualización
- Nombres con tildes soportados (ej: "áreas intervención")

## Analíticas y Seguimiento

Google Tag Manager configurado mediante parámetros en config.toml:
- GTM Container: GTM-TXCJLVMX
- GA4 Measurement ID: G-W08QTS1G1Y

El código de seguimiento se inyecta mediante el partial `googletagmanager-global.html` en el `<head>` y después del `<body>`.

## Optimización SEO (Implementado Febrero 2026)

### Configuración Técnica SEO

**config.toml optimizado:**
- `languageCode = "es-ES"` - Idioma correcto para buscadores
- `enableRobotsTXT = true` - Generación automática de robots.txt
- `canonifyURLs = true` - URLs canónicas automáticas
- Sitemap configurado: `changefreq = "weekly"`, `priority = 0.8`
- Taxonomías: tags y categorías
- Keywords globales definidas en `[params.seo]`

**robots.txt optimizado** (`static/robots.txt`):
- Sin crawl-delay para indexación rápida
- Rutas excluidas: /dist/, /node_modules/, *.json, /404.html
- Sitemap: https://www.ampsicologiamadrid.com/sitemap.xml

### Meta Tags Completos

Todas las páginas incluyen (vía `layouts/partials/seo.html`):
- **Meta básicos:** description, keywords, author, language
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1
- **Geo-localización:** Madrid (40.4381311, -3.7197575)
- **Canonical URLs:** Automáticas por página
- **Open Graph:** title, description, url, image, type, locale, site_name
- **Twitter Cards:** summary_large_image con metadatos completos
- **Article metadata:** Para posts (published_time, modified_time, author)

### Structured Data (JSON-LD Schema.org)

Implementado en todas las páginas:

1. **Organization** (@type: Organization)
   - Nombre: AM Psicología Madrid
   - Logo, URL, redes sociales (sameAs como array JSON válido)
   - Dirección completa con PostalAddress
   - ContactPoint con teléfono y área de servicio

2. **LocalBusiness** (@type: LocalBusiness, additionalType: MedicalBusiness, Psychologist)
   - Tipo único `LocalBusiness` con `additionalType` para tipos secundarios (evita problemas de validación con arrays de @type)
   - Dirección completa con PostalAddress
   - GeoCoordinates (latitud/longitud)
   - Horarios de apertura (Lunes-Viernes 9:00-20:00)
   - Métodos de pago (Cash, Credit Card, Bizum)
   - AggregateRating: 4.9/5 con 47 reseñas
   - PriceRange: €€

3. **Person** (@type: Person)
   - Alaitz Martínez Latorre
   - jobTitle: Psicóloga Sanitaria
   - alumniOf: Universidad Miguel Hernández
   - memberOf: "Colegio Oficial de Psicólogos de Madrid" (string simple, no objeto tipado, para evitar warnings de Google)
   - knowsAbout: [Psicología Clínica, Terapia de Pareja, etc.]

4. **WebSite** (@type: WebSite)
   - SearchAction para buscadores internos
   - inLanguage: es-ES

5. **WebPage** (@type: WebPage)
   - En todas las páginas individuales
   - datePublished, dateModified, author, about

6. **Article** (@type: Article)
   - En todos los posts del blog
   - headline, description, image, author, publisher

7. **BreadcrumbList** (@type: BreadcrumbList)
   - Navegación jerárquica en todas las páginas no-home
   - Posición automática según estructura

### Meta Descriptions y Keywords

**Todas las 28 páginas optimizadas:**
- Homepage: Keywords principales "psicóloga Madrid", "psicólogo Madrid centro"
- 6 Terapias: Cada una con description única y 6-7 keywords específicas
- 10 Áreas: Descriptions orientadas a conversión + keywords long-tail
- 8 Posts: Descriptions de 150-160 caracteres + keywords temáticas
- 3 Páginas principales: sobre-mi, tarifas, contacto optimizadas

**Estrategia de keywords:**
- Keywords principales: ~10 términos genéricos de alto volumen
- Long-tail keywords: ~40 términos específicos por servicio
- Local SEO: "Madrid", "Madrid centro" en todas las páginas relevantes
- Intención de búsqueda: Mezcla informacional y transaccional

### Alt Text y Accesibilidad

- Todas las imágenes con alt text descriptivo y optimizado
- Nombres de archivo significativos
- ARIA labels donde corresponde (botones, formularios)

### Página 404 Optimizada

`layouts/404.html` incluye:
- Título H1 optimizado ("404 - Página no encontrada")
- Descripción clara del error
- 6 enlaces internos a servicios principales (internal linking)
- CTA para contacto
- Diseño profesional y user-friendly

### Sitemap XML

- Generado automáticamente por Hugo en `/sitemap.xml`
- Incluye todas las páginas con prioridad y changefreq
- Enlazado desde robots.txt
- Actualización automática en cada build

## Estilos y Diseño

**Framework CSS:** Tailwind CSS v3
- Configuración: `tailwind.config.js`
- PostCSS: `postcss.config.js`
- Fuentes: DM Sans (display) + Inter (body)

**Efectos visuales:**
- Cards con hover effects
- Imágenes con zoom en hover (`image-hover-zoom`)
- Degradados y sombras de profundidad (`shadow-depth-*`)
- Animaciones de entrada con `data-animate`
- CTAs: `cta-enhanced` (translateY + box-shadow en hover/active) + `btn-depth` (borde interno sutil)

**Colores principales:**
- Primary: Tonos azules (`primary-50` a `primary-900`)
- Accent: Tonos rosados (`accent-50` a `accent-900`)
- Slate: Grises neutros para texto y fondos

## Widgets de Terceros

**Doctoralia:** Widget de reserva de citas en el footer
- Configurado con `data-zlw-doctor="alaitz-martinez"`
- Se puede activar/desactivar con `params.footerEnableDoctoralia`

**Swiper.js:** Carrusel de imágenes en la página principal
- Tres slides: consultorio, psicóloga, escritorio
- Autoplay con controles de pausa/play

## Optimización de Rendimiento (Implementado Febrero 2026)

### Resource Hints

En `baseof.html`:
- **DNS Prefetch:** fonts.googleapis.com, fonts.gstatic.com, cdn.jsdelivr.net, platform.docplanner.com, www.googletagmanager.com
- **Preconnect:** Google Fonts con crossorigin

### Loading Asíncrono

- **Google Fonts:** Carga async con `media="print" onload="this.media='all'"`
- **Swiper CSS:** Preload con conversión async
- **JavaScript:** Swiper y scripts personalizados con `defer`
- **Noscript fallbacks:** Para usuarios sin JS

### Procesamiento de Imágenes

**Configuración Hugo** (`config.toml`):
```toml
[imaging]
quality = 85
resampleFilter = "Lanczos"
anchor = "Smart"
```

**Optimizaciones aplicadas:**
- Carrusel: PNGs → WebP automático (~84% reducción)
- Resize automático a 1920px de ancho
- Lazy loading en 22 imágenes
- Alt text en todas las imágenes

### CSS y JavaScript

- **Tailwind CSS:** Minificado en producción con PostCSS
- **Fingerprinting:** Assets con hash para cache busting
- **JavaScript:** Minificado y diferido
- **Critical CSS:** Inline en head (fuentes y layout)

### Animaciones Optimizadas

En `assets/css/main.css`:
- Intersection Observer con thresholds optimizados
- Ken Burns effect: 12s infinite loop sin jumps
- Animaciones CSS con GPU acceleration (transform, opacity)
- RequestAnimationFrame para smooth rendering

### Métricas Esperadas

- **First Contentful Paint:** ~1.2s (mejora 30%)
- **Largest Contentful Paint:** ~2.0s (mejora 50% con WebP)
- **Time to Interactive:** ~2.8s (mejora 20%)
- **Total Transfer Size:** ~4.5MB (reducción de 2.5MB)

## Despliegue

**Build para producción:**
```bash
hugo --cleanDestinationDir --ignoreCache
```

**Estadísticas de build actual:**
- 114 páginas generadas (42 páginas principales + 72 páginas de taxonomía)
- 5 archivos estáticos
- 56 imágenes procesadas (PNGs → WebP)
- Tiempo de build: ~4.5 segundos

**Archivos críticos generados:**
- `index.html` (67KB) - Homepage
- `404.html` (47KB) - Error page SEO-friendly
- `sitemap.xml` (6.2KB) - Sitemap automático
- `robots.txt` (171B) - Configuración crawlers
- `.htaccess` (447B) - Redirects HTTPS y www
- CSS minificado con hash SRI (60KB)
- JS minificado con hash SRI (4.3KB)

**Configuración:**
- Directorio de salida: `dist/` (definido en config.toml como publishDir)
- Versión de Hugo: v0.155.2+extended (verificar con `hugo version`)
- Build automático procesa imágenes y genera sitemap

**Build status:** ✅ Sin warnings (corregido febrero 2026)

## Notas Importantes

1. **Imágenes:** Existen en `static/` y `assets/` para diferentes propósitos:
   - **assets/images/**: Procesables por Hugo (terapias, áreas, posts) - usa `images/` en frontmatter
   - **static/images/**: Servidas directamente (referencias en markdown, carrusel) - usa `/images/` en URLs
   - Carrusel: Procesa PNGs a WebP automáticamente (alaitz.png, towers.png, desk.png)
   - Terapias/Áreas: Usan `Resize "x400"` para altura uniforme sin recorte vertical

2. **Fechas en español:** Todos los formatos de fecha usan español:
   - Templates usan: `{{ .Date.Day }} de {{ index (slice "enero" "febrero"...) (sub .Date.Month 1) }} de {{ .Date.Year }}`
   - Fechas de posts: Última semana del mes (días 24-30)

3. **Legal:** Tres páginas legales cumplen con normativa española (RGPD, LSSI-CE, LOPDGDD)

4. **Formulario de contacto:** Integrado con Formspree (https://formspree.io/f/contacto@ampsicologiamadrid.com)
   - Validación JavaScript con mensajes de error en tiempo real
   - Redirección automática a /gracias-contacto/ después de envío exitoso
   - Campos: nombre, teléfono, email, mensaje (todos requeridos)
   - Fix pointer-events en border-glow para permitir clicks del ratón
   - Primera vez requiere confirmar email en Formspree

5. **.gitignore:** Configurado para excluir archivos temporales, .DS_Store, node_modules, dist/, hugo_stats.json

6. **SEO completo:** 28 páginas optimizadas con meta descriptions, keywords y structured data

7. **Structured Data:** Validado con https://search.google.com/test/rich-results (febrero 2026)

8. **Sitemap:** Generado automáticamente en `/sitemap.xml`, enlazado desde robots.txt

9. **Imagen Open Graph:** Creada en `/static/images/og-image.jpg` (1200x630px) con logo, título, servicios y datos de contacto

10. **Carrusel:** 3 slides con Ken Burns effect (12s animation loop), autoplay con pausa/play

11. **Scroll animations:** Intersection Observer con `data-animate` en elementos (threshold: 0.15)

12. **Carrusel móvil:** Alineación `object-position: 30% top` en móvil (segunda columna de la imagen), `center top` en desktop

13. **Breadcrumbs:** Implementados en todas las páginas de contenido (posts, terapias, áreas de intervención, tags, categorías)

14. **Sistema de Taxonomías:** Tags y categorías completamente funcionales con 72 páginas generadas automáticamente

15. **Imágenes optimizadas:** Terapias y Áreas de Intervención usan altura uniforme de 400px sin recorte vertical

## Mejoras de UI/UX (Febrero 2026)

### Breadcrumb Navigation

**Implementación completa** en todas las páginas de contenido:
- **Posts:** Inicio > Blog > Título del post (alineado a la izquierda)
- **Terapias:** Inicio > Terapias > Nombre terapia (centrado)
- **Áreas:** Inicio > Áreas de Intervención > Nombre área (centrado)
- **Tags:** Inicio > Etiquetas > Tag (centrado)
- **Categorías:** Inicio > Categorías > Categoría (centrado)

**Archivos:**
- `/layouts/partials/breadcrumb.html` - Partial reutilizable
- Breadcrumb personalizado en `/layouts/posts/single.html` (alineado izquierda)
- Integrado en layouts de terapias, áreas, y taxonomías

**Features:**
- Accesibilidad: `aria-label="Breadcrumb"` y `aria-current="page"`
- Responsive y hover states
- Traducciones automáticas (posts→Blog, areas-intervencion→Áreas de Intervención)

### Sistema de Tags

**Display de tags** en todas las tarjetas de posts:
- Máximo 3 tags por tarjeta
- Diseño: Pills con `bg-accent-100 text-accent-700`
- Posición: Entre descripción y botón "Leer más"

**Páginas implementadas:**
- `/layouts/partials/home.html` - Tarjetas en homepage
- `/layouts/posts/list.html` - Listado de blog
- `/layouts/posts/single.html` - Artículos relacionados
- Tags clickables con enlaces a páginas de taxonomía

### Optimización de Imágenes

**Terapias y Áreas de Intervención:**
- **Método:** `Resize "x400 webp q85"` (mantiene proporción vertical)
- **Altura uniforme:** 400px en todas las páginas
- **Sin recorte vertical:** Contenido completo preservado
- **Recorte horizontal:** Centrado si es necesario
- **Referencias actualizadas:** `images/` (assets) en lugar de `/images/` (static)

**Optimización de espaciado:**
- Header: `pt-32 pb-12` (antes pb-16)
- Main: `py-12` (antes py-20)
- Grid gap: `gap-8` (antes gap-12)
- Títulos más compactos: `text-3xl md:text-4xl` (antes text-4xl md:text-5xl)

### Índices de Sección

**Archivos `_index.md` creados:**
1. `/content/posts/_index.md` - "Blog de Psicología"
2. `/content/terapias/_index.md` - "Terapias"
3. `/content/areas-intervencion/_index.md` - "Áreas de Intervención"

**Beneficio:** Títulos correctos y meta descriptions en páginas de listado

## Correcciones Recientes (Febrero 2026)

### Integración con Formspree

**Problema:** El formulario no enviaba emails
**Solución:** Integración completa con Formspree
- Action URL: `https://formspree.io/f/contacto@ampsicologiamadrid.com`
- Campo `email` con name="email" (requerido por Formspree)
- Campo `message` con name="message" (requerido por Formspree)
- Hidden fields: `_next`, `_subject`, `_language`, `_gotcha` (honeypot)
- Validación JavaScript que permite envío cuando el formulario es válido

**Archivo:** `/Users/dev/Workspace/amp/layouts/partials/contact-form.html`

### Fix Clicks en Inputs del Formulario

**Problema:** Los inputs del formulario no respondían a clicks del ratón (solo funcionaba con Tab)
**Causa raíz:** Pseudo-elemento `.border-glow::after` con `position: absolute; inset: -1px` cubría el formulario y bloqueaba eventos del ratón
**Solución:** Añadido `pointer-events: none` al pseudo-elemento `.border-glow::after`

**Archivo:** `/Users/dev/Workspace/amp/assets/css/main.css` (línea en .border-glow::after)

### Fix Validación de Formulario

**Problema:** El formulario nunca se enviaba a Formspree, mostraba mensaje de éxito falso
**Causa raíz:** `e.preventDefault()` se ejecutaba siempre, incluso cuando la validación era exitosa
**Solución:** Mover `preventDefault()` dentro del bloque `if (!isValid)` para solo prevenir envío cuando hay errores

**Archivo:** `/Users/dev/Workspace/amp/assets/js/main.js` (líneas 247-252)

### Fix Alineación Carrusel Móvil

**Problema:** En móvil, las imágenes del carrusel mostraban una zona poco representativa
**Solución:** CSS media query con `object-position: 30% top` en móvil (segunda columna de la imagen) y `center top` en desktop

**Archivo:** `/Users/dev/Workspace/amp/assets/css/main.css`
```css
.hero-swiper .swiper-slide img {
  object-position: 30% top; /* móvil - segunda columna */
}
@media (min-width: 768px) {
  .hero-swiper .swiper-slide img {
    object-position: center top; /* desktop */
  }
}
```

### Fix CSS @import Warning

**Problema:** Warning del navegador: "An @import rule was ignored because it wasn't defined at the top of the stylesheet"
**Causa raíz:** `@import "depth-effects.css"` estaba después de directivas @tailwind, PostCSS no procesaba el import
**Solución:** Eliminado @import e inlineado todo el contenido de depth-effects.css (403 líneas) directamente en main.css

**Archivo:** `/Users/dev/Workspace/amp/assets/css/main.css`

### Fix CORS y SRI Errors

**Problema 1:** "The resource has an integrity attribute, but the resource requires the request to be CORS enabled"
**Solución:** Añadido `crossorigin="anonymous"` a todos los links CSS y JS con integrity hash

**Problema 2:** "Access to CSS stylesheet has been blocked by CORS policy"
**Causa raíz:** Sitio accesible desde www y non-www causando cross-origin issues
**Solución:** Redirect permanente de non-www a www en .htaccess

**Archivo:** `/Users/dev/Workspace/amp/layouts/_default/baseof.html` y `/Users/dev/Workspace/amp/static/.htaccess`

### Fix Favicon 404

**Problema:** GET /images/favicon.ico 404 (Not Found)
**Causa raíz:** config.toml referenciaba favicon.ico que no existía, solo amp.svg
**Solución:** Actualizado baseof.html para usar amp.svg en ambos link tags (icon y shortcut icon)

**Archivo:** `/Users/dev/Workspace/amp/layouts/_default/baseof.html`

### Fix Structured Data - Rich Results Test (Febrero 2026)

**Problema 1:** "Unparsable structured data > Duplicate unique property"
**Causa raíz:** Propiedad `@type` duplicada en el bloque LocalBusiness (una como string y otra como array)
**Solución:** Unificada en una sola declaración `@type: "LocalBusiness"` con `additionalType` para tipos secundarios

**Problema 2:** `sameAs` generaba JSON inválido
**Causa raíz:** Template Hugo concatenaba todas las URLs en una sola cadena con comas (`"url1,url2,"`) en vez de elementos separados del array
**Solución:** Reescrito el loop con control de comas para generar array JSON válido (`["url1","url2"]`)

**Problema 3:** Organization missing field `address`
**Causa raíz:** El bloque Organization no incluía dirección
**Solución:** Añadido `address` con PostalAddress completo al bloque Organization

**Problema 4:** Warnings en `memberOf` (missing telephone, priceRange, address, image)
**Causa raíz:** `memberOf` usaba `@type: "ProfessionalService"` que hereda de `LocalBusiness` y requiere esos campos
**Solución:** Cambiado a string simple `"Colegio Oficial de Psicólogos de Madrid"` (no necesita ser objeto tipado)

**Archivo:** `/Users/dev/Workspace/amp/layouts/partials/seo.html`

## Post-Deployment: Pasos SEO

### Acciones Inmediatas (Completadas Febrero 2026)

1. ~~**Crear imagen Open Graph**~~ ✅ Creada `/static/images/og-image.jpg` (1200x630px)

2. ~~**Google Search Console**~~ ✅ Sitemap enviado, re-indexación solicitada

3. ~~**Validar Structured Data**~~ ✅ Validado con Rich Results Test (corregidos: @type duplicado, sameAs malformado, address en Organization, memberOf simplificado)

4. ~~**Google My Business**~~ ✅ NAP verificado, horarios y servicios actualizados

### Optimizaciones Adicionales Opcionales

1. **Local Citations**
   - Añadir a directorios médicos españoles
   - Doctoralia (ya integrado)
   - TuOtroMédico, TopDoctors, Psicología y Comunicación

2. **Content Marketing**
   - Publicar 1-2 posts nuevos al mes
   - Optimizar con keywords long-tail
   - Compartir en redes sociales

3. **Link Building**
   - Guest posts en blogs de salud mental
   - Colaboraciones con otros profesionales
   - Enlaces desde colegios profesionales

4. **FAQ Schema**
   - Añadir sección de preguntas frecuentes
   - Implementar FAQPage schema

5. **Video Content**
   - Testimoniales de pacientes (con permiso)
   - Videos educativos sobre salud mental
   - Implementar VideoObject schema

### Monitoreo y Métricas

**Herramientas a usar:**
- Google Search Console (posiciones, impresiones, CTR)
- Google Analytics 4 (conversiones, bounce rate, tiempo en sitio)
- PageSpeed Insights (Core Web Vitals)
- Ahrefs/SEMrush (keywords ranking, backlinks)

**KPIs a monitorear:**
- Posiciones para keywords principales (objetivo: Top 3)
- Tráfico orgánico (objetivo: +50% en 6 meses)
- Conversiones (formulario contacto, clics teléfono)
- CTR en SERPs (objetivo: >5%)
- Domain Authority (objetivo: >30)

## Contacto y Referencias

- Email: contacto@ampsicologiamadrid.com
- Teléfono: 686 898 494
- Web: https://www.ampsicologiamadrid.com/
- Perfil Doctoralia: https://www.doctoralia.es/alaitz-martinez/psicologo/madrid
- Geolocalización: 40.4381311, -3.7197575 (Madrid Centro)

### Keywords Principales Monitoreadas

**Genéricas de alto volumen:**
- psicóloga Madrid
- psicólogo Madrid centro
- terapia psicológica Madrid
- psicóloga sanitaria Madrid
- primera consulta gratis psicólogo Madrid

**Servicios específicos:**
- terapia pareja Madrid
- psicólogo infantil Madrid
- ansiedad tratamiento Madrid
- depresión psicólogo Madrid
- adicciones Madrid

**Long-tail:**
- psicóloga especialista trastornos alimentarios Madrid
- tratamiento TOC Madrid centro
- terapia duelo Madrid
- psicólogo fobia social Madrid

## Taxonomías y Sistema de Etiquetas (Implementado Febrero 2026)

**Sistema completo implementado** para mejorar navegación y SEO mediante tags y categorías.

### Layouts de Taxonomía

**Archivos creados:**
1. `/layouts/_default/section.html` - Listado genérico de secciones
2. `/layouts/_default/taxonomy.html` - Índice de tags/categorías (/tags/, /categories/)
3. `/layouts/_default/term.html` - Páginas individuales por tag/categoría

### Tags y Categorías en Posts

**8 posts del blog etiquetados con:**

**Tags únicos generados (26):**
- amaxofobia, anorexia, ansiedad, asertividad, autocontrol
- bienestar, bulimia, celos, comunicación, depresión
- depresión-crónica, desarrollo-infantil, desarrollo-personal
- distimia, emociones, estrés, familia, fobias
- habilidades-sociales, inteligencia-emocional, personalidad
- salud-mental, terapia-dbt, terapia-familiar, tlp
- tratamiento, trastornos-alimentarios

**Categorías generadas (7):**
- Ansiedad, Bienestar, Desarrollo Personal, Familia
- Habilidades Sociales, Trastornos

### URLs Generadas

**Índices:**
- `/tags/` - Lista de todas las etiquetas
- `/categories/` - Lista de todas las categorías

**Páginas individuales de tags:** `/tags/{nombre-tag}/`
- Ejemplo: `/tags/ansiedad/`, `/tags/depresion/`, `/tags/fobias/`

**Páginas individuales de categorías:** `/categories/{nombre-categoria}/`
- Ejemplo: `/categories/trastornos/`, `/categories/bienestar/`

### Beneficios SEO

✅ **+72 páginas indexables** adicionales generadas automáticamente
✅ **Internal linking** mejorado entre posts relacionados
✅ **Long-tail keywords** automáticas (ej: "artículos sobre ansiedad Madrid")
✅ **Mejor UX** - navegación por temas relacionados
✅ **Zero mantenimiento** - las páginas se generan automáticamente con cada build
✅ **Rich snippets** - breadcrumbs y navegación estructurada

### Añadir Tags a Nuevos Posts

```toml
+++
tags = ["tag1", "tag2", "tag3"]
categories = ["Categoría1", "Categoría2"]
+++
```

Las páginas de taxonomía se regeneran automáticamente en cada build.

## Mejoras de UI/UX y Optimización (Febrero 2026)

### Breadcrumb Navigation

**Implementado sistema completo de navegación breadcrumb** en todas las páginas de contenido.

**Archivo creado:**
- `/layouts/partials/breadcrumb.html` - Componente reutilizable de breadcrumb

**Páginas con breadcrumb:**
- Posts individuales: `Inicio > Blog > Título del post`
- Terapias: `Inicio > Terapias > Nombre de terapia`
- Áreas de intervención: `Inicio > Áreas de Intervención > Nombre de área`
- Blog (listado): `Inicio > Blog`
- Sobre mi: `Inicio > Sobre mí`
- Tarifas: `Inicio > Tarifas`

**Características:**
- ✅ Centrado en headers de página
- ✅ Alineado a izquierda en posts individuales
- ✅ Accesibilidad ARIA completa
- ✅ Detección automática de secciones
- ✅ Nombres de sección traducidos correctamente

### Compactación de Páginas

**Reducido espaciado general** para diseño más compacto y coherente.

**Cambios aplicados a todas las páginas:**
- Headers: `pb-16` → `pb-12`
- Títulos: `text-4xl md:text-5xl` → `text-3xl md:text-4xl`
- Descripciones: `text-xl` → `text-lg`
- Secciones: `py-20` → `py-12`
- Grids: `gap-12` → `gap-8`
- Márgenes: reducción general de `mb-16` → `mb-12`, `mb-8` → `mb-6`, etc.

**Páginas actualizadas:**
- Página principal (home)
- Terapias
- Áreas de intervención
- Sobre mi
- Tarifas
- Blog (listado)

### Consolidación de Imágenes

**Migradas todas las imágenes procesables a assets/** para optimización automática.

**Estructura final:**
```
assets/images/         # 30 imágenes procesables (JPG, PNG)
├── posts/            # 8 imágenes de blog
├── terapias/         # 6 imágenes de servicios
├── areas/            # 10 imágenes de áreas
├── hero/             # 3 imágenes del carrusel
└── general/          # sobre-mi, tarifas, alaitz-thumb

static/images/        # Solo 3 archivos especiales
├── amp.svg          # Logo (SVG no necesita procesamiento)
├── og-image.jpg     # Imagen Open Graph (1200x630px) para redes sociales
└── sobre-mi.png     # Imagen para SEO/structured data
```

**Beneficios:**
- ✅ **56 imágenes procesadas** (vs 37 anteriores)
- ✅ **Optimización automática** a WebP con calidad 85
- ✅ **Tamaños responsivos** generados automáticamente
- ✅ **Cache busting** con fingerprinting
- ✅ **Menor tamaño** de archivos
- ✅ **Mejor performance** en carga de páginas

**Formato de imágenes en contenido:**
```toml
# Frontmatter correcto (sin barra inicial)
[thumbnail]
image = "images/nombre-imagen.jpg"
alt = "Descripción de la imagen"
```

**Procesamiento en templates:**
```html
{{ $image := resources.Get .Params.thumbnail.image }}
{{ if $image }}
    {{ $optimized := $image.Resize "x400 webp q85" }}
    <img src="{{ $optimized.RelPermalink }}" alt="{{ .Params.thumbnail.alt }}">
{{ end }}
```

### Imágenes Uniformes

**Estandarizado tamaño de imágenes** en páginas de contenido.

**Especificaciones:**
- Altura fija: `400px`
- Método: `Resize "x400"` (mantiene contenido vertical)
- Clases CSS: `object-cover object-center`
- Margen inferior: `mb-6`

**Páginas con imágenes uniformes:**
- Terapias
- Áreas de intervención
- Tarifas
- Blog (tarjetas en home y listado)

### Simplificación de Efectos CSS en Botones

**Eliminado `btn-glow`:** Efecto de barrido de luz (sweep) eliminado completamente de `main.css` y de todos los layouts (16 archivos). El efecto usaba un pseudo-elemento `::before` con gradiente animado que añadía complejidad innecesaria.

**Simplificado `cta-enhanced`:** Eliminado efecto ripple (pseudo-elemento `::before` con círculo expandible). Ahora solo usa transiciones simples de `transform` y `box-shadow`. Añadido estado `:active` (transform reset + sin sombra) para mejor feedback táctil.

**Simplificado `btn-depth`:** Eliminadas transiciones hover/active de transform (ahora manejadas por `cta-enhanced`). Solo conserva el pseudo-elemento `::after` para el borde interno sutil de profundidad visual.

**Movido `overflow: hidden`:** De `.cta-enhanced` a `.ambient-light` (donde realmente se necesita para contener el pseudo-elemento de luz).

**Archivos CSS modificados:** `assets/css/main.css`
**Layouts actualizados (eliminado `btn-glow`):** header, home, contact-form, posts (list/single), terapias, areas-intervencion, sobre-mi, tarifas, section, taxonomy, term, tags (list/terms), categories (list/terms)

### Enlaces en Tarjetas de Servicios del Homepage

**Añadidos enlaces en títulos de tarjetas de terapia** en `layouts/partials/home.html`:
- Los 6 `<h3>` de las tarjetas de servicios ahora envuelven el texto en `<a>` con enlace a la página correspondiente
- Efecto hover: `hover:text-accent-500 transition-colors`
- Mejora SEO: internal linking adicional desde homepage a páginas de servicio
- Mejora UX: los usuarios pueden hacer clic directamente en el título (además del botón "Saber más")

**Tarjetas enlazadas:**
- Terapia Individual → `/terapias/adultos/`
- Terapia de Pareja → `/terapias/pareja/`
- Terapia Infantil → `/terapias/infantil/`
- Terapia Familiar → `/terapias/familia/`
- Coaching → `/terapias/coaching/`
- Informes Psicológicos → `/terapias/informes/`

### Resumen de Mejoras Febrero 2026

**UI/UX:**
- ✅ Breadcrumb navigation en todas las páginas
- ✅ Diseño más compacto y coherente
- ✅ Imágenes uniformes y optimizadas
- ✅ Mejor experiencia de navegación
- ✅ Títulos de tarjetas de servicios clickables en homepage
- ✅ Efectos de botones simplificados y con mejor feedback táctil

**Performance:**
- ✅ 56 imágenes procesadas automáticamente
- ✅ Consolidación en assets/ para mejor optimización
- ✅ Tamaños consistentes y predecibles
- ✅ Build time: ~5 segundos
- ✅ CSS más ligero (eliminadas ~60 líneas de efectos innecesarios)

**Mantenimiento:**
- ✅ Sistema de imágenes simplificado
- ✅ Solo 3 archivos en static/images/ (logo SVG, OG image, sobre-mi para structured data)
- ✅ Todas las imágenes procesables en assets/
- ✅ Formato consistente en todos los layouts
- ✅ Clases CSS de botones simplificadas: `cta-enhanced btn-depth` (sin `btn-glow`)
