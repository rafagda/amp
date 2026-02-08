# AM Psicología Madrid

Sitio web estático construido con Hugo para AM Psicología Madrid, gabinete de psicología clínica especializado en terapia individual, de pareja, familiar e infantil.

🌐 **Website:** [www.ampsicologiamadrid.com](https://www.ampsicologiamadrid.com)
📍 **Ubicación:** Madrid Centro (Argüelles)
👩‍⚕️ **Profesional:** Alaitz Martínez Latorre - Psicóloga Sanitaria

## 🚀 Quick Start

### Requisitos

- Hugo v0.155.2+extended ([Descargar](https://gohugo.io/installation/))
- Node.js 16+ (para Tailwind CSS)

### Instalación

```bash
# Clonar repositorio
git clone [repository-url]
cd amp

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
hugo server -D
```

El sitio estará disponible en `http://localhost:1313/`

### Build para Producción

```bash
# Build completo con optimizaciones
hugo --cleanDestinationDir --ignoreCache

# Los archivos se generan en /dist/
```

## 📁 Estructura del Proyecto

```
amp/
├── assets/
│   ├── css/
│   │   └── main.css          # Tailwind CSS + estilos custom
│   ├── js/
│   │   └── main.js           # JavaScript personalizado
│   └── images/               # Imágenes procesables por Hugo
├── content/
│   ├── posts/                # 8 artículos de blog
│   ├── terapias/             # 6 servicios de terapia
│   ├── areas-intervencion/   # 10 áreas de intervención
│   └── *.md                  # Páginas principales
├── layouts/
│   ├── _default/             # Templates base
│   ├── partials/             # Componentes reutilizables
│   ├── posts/                # Templates de blog
│   ├── terapias/             # Templates de terapias
│   ├── areas-intervencion/   # Templates de áreas
│   ├── tags/                 # Templates de tags
│   └── categories/           # Templates de categorías
├── static/
│   ├── images/               # Imágenes estáticas
│   └── .htaccess             # Configuración Apache
├── config.toml               # Configuración Hugo
├── tailwind.config.js        # Configuración Tailwind
├── postcss.config.js         # Configuración PostCSS
└── package.json              # Dependencias Node
```

## ✨ Características Principales

### SEO Optimizado

- ✅ **114 páginas generadas** (42 principales + 72 taxonomías)
- ✅ **Meta tags completos** en todas las páginas
- ✅ **Structured Data (JSON-LD):** Organization, LocalBusiness, Person, Article, BreadcrumbList
- ✅ **Sitemap.xml** generado automáticamente
- ✅ **robots.txt** optimizado
- ✅ **Canonical URLs** en todas las páginas
- ✅ **Open Graph** y Twitter Cards

### Sistema de Taxonomías

- 📌 **26 tags únicos** con páginas individuales
- 📂 **7 categorías** con páginas individuales
- 🔗 Links automáticos entre posts relacionados
- 🏷️ Tags visibles en todas las tarjetas de posts

### Performance

- ⚡ **Imágenes optimizadas:** WebP con calidad 85
- ⚡ **CSS/JS minificados** con fingerprinting
- ⚡ **Lazy loading** en imágenes
- ⚡ **Resource hints:** DNS prefetch, preconnect
- ⚡ **SRI integrity hashes** en assets

### UI/UX

- 🗺️ **Breadcrumb navigation** en todas las páginas de contenido
- 🎨 **Diseño responsive** mobile-first con espaciado compacto
- 🖼️ **Carrusel hero** con 3 slides y autoplay
- ✨ **Animaciones** con Intersection Observer
- 📱 **Optimizado para móvil** y tablet
- 🖼️ **Imágenes uniformes** en páginas de contenido (400px altura)

### Formulario de Contacto

- 📧 Integrado con **Formspree**
- ✅ Validación JavaScript en tiempo real
- ✅ Primera consulta gratuita destacada
- ✅ Redirección a página de agradecimiento

## 🎨 Stack Tecnológico

- **Hugo** v0.155.2+extended - Static Site Generator
- **Tailwind CSS** v3 - Framework CSS
- **PostCSS** - Procesamiento CSS
- **Swiper.js** - Carrusel de imágenes
- **Formspree** - Gestión de formularios
- **Google Tag Manager** - Analytics (GTM-TXCJLVMX)
- **Google Analytics 4** - Métricas (G-W08QTS1G1Y)

## 📝 Crear Contenido Nuevo

### Nuevo Post de Blog

```bash
hugo new posts/titulo-del-post.md
```

Estructura del frontmatter:
```toml
+++
date = 2026-02-08T10:00:00+01:00
author = "Alaitz Martínez Latorre"
title = "Título del Artículo"
description = "Meta description de 150-160 caracteres"
keywords = ["keyword1", "keyword2", "keyword3"]
tags = ["tag1", "tag2", "tag3"]
categories = ["Categoría"]
share = true
draft = false
[thumbnail]
image = "images/nombre-imagen.jpg"
alt = "Descripción de la imagen"
+++
```

### Nueva Terapia

```bash
hugo new terapias/nombre-terapia.md
```

### Nueva Área de Intervención

```bash
hugo new areas-intervencion/nombre-area.md
```

## 🚢 Deployment

### Pre-deployment Checklist

1. ✅ Build el sitio: `hugo --cleanDestinationDir --ignoreCache`
2. ✅ Verificar que `.htaccess` está en `/dist/`
3. ✅ Verificar que todas las imágenes se han procesado
4. ✅ Comprobar que no hay errores en la consola

### Subir a Producción

1. Sube todo el contenido de `/dist/` al servidor web
2. Asegúrate de que `.htaccess` se ha subido (archivo oculto)
3. Verifica `https://www.ampsicologiamadrid.com` en navegador
4. Comprueba el formulario de contacto

### Post-deployment

1. Enviar sitemap a Google Search Console
2. Validar Structured Data con [Rich Results Test](https://search.google.com/test/rich-results)
3. Confirmar email en Formspree (primera vez)
4. Verificar Google Analytics

## 📊 Estadísticas

- **Páginas:** 114 (42 principales + 72 taxonomías)
- **Posts de blog:** 8 artículos
- **Servicios de terapia:** 6 páginas
- **Áreas de intervención:** 10 páginas
- **Tags:** 26 etiquetas únicas
- **Categorías:** 7 categorías
- **Imágenes procesadas:** 56 imágenes optimizadas a WebP
- **Imágenes en assets/:** 30 imágenes (JPG, PNG)
- **Imágenes en static/:** 2 archivos (SVG, PNG para SEO)
- **Tiempo de build:** ~5 segundos

## 🔧 Comandos Útiles

```bash
# Desarrollo con live reload
hugo server -D

# Build para producción
hugo --cleanDestinationDir --ignoreCache

# Limpiar cache
rm -rf resources/_gen/ dist/

# Ver version de Hugo
hugo version

# Crear nuevo contenido
hugo new posts/nombre.md

# Compilar solo CSS (Tailwind)
npm run build:css
```

## 📚 Documentación

Para información detallada sobre la implementación, arquitectura y decisiones técnicas, consulta:

- **[CLAUDE.md](CLAUDE.md)** - Documentación técnica completa para Claude Code

## 🆘 Troubleshooting

### Error: Hugo no encuentra las imágenes

**Problema:** Imágenes no se procesan correctamente
**Solución:** Verifica que las rutas en frontmatter usen `images/` (sin `/`) para assets procesables

### Error: CSS no se actualiza

**Problema:** Cambios en Tailwind no se reflejan
**Solución:** Ejecuta `hugo --cleanDestinationDir` para limpiar cache

### Error: Formulario no envía emails

**Problema:** Formspree no recibe mensajes
**Solución:** Verifica que el email esté confirmado en Formspree

## 📄 Licencia

© 2026 AM Psicología Madrid. Todos los derechos reservados.

## 👥 Contacto

- **Email:** contacto@ampsicologiamadrid.com
- **Teléfono:** 686 898 494
- **Dirección:** C/ Hilarión Eslava 27bis, 1º-4, Madrid 28015
- **Doctoralia:** [Perfil profesional](https://www.doctoralia.es/alaitz-martinez/psicologo/madrid)

---

**Desarrollado con** ❤️ **usando Hugo + Tailwind CSS**
