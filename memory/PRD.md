# Mersiel Web — PRD

## Original problem statement
Sitio web de Mersiel (negocio de desarrollo de software a medida).
Usuario: recién egresado, sin testimonios reales todavía, empresa nueva.
Pidió: mejorar diseño/rendimiento, animaciones, más info y secciones, hero menos estático,
preservar menú lateral (con su preview por tabs), contenido honesto y profesional sin exagerar.

## Stack
- Next.js 16.1 (App Router, Turbopack, React 19)
- Framer Motion 12 (animaciones, scroll reveals, micro-interacciones)
- OGL (Aurora WebGL en hero — pre-existente)
- lucide-react 0.469 (sistema de iconos)
- TypeScript

## Estructura de páginas
- `/` Home (hero animado, problema, servicios, planes, stats, galería, compromisos, sobre, contacto)
- `/sobre` (#mision, #vision, #metodo, #por-que)
- `/servicios` (#desarrollo, #planes, #compromisos)
- `/proyectos` (#conceptos, #casos)
- `/herramientas` (#lista)

## What's been implemented (mayo 2026)

### v2 — Mascota AI + responsiveness + hero rediseñado
- **`MersielMascot`** componente flotante (Lumi): aparece tras 4.5s, peek pulsante, click abre burbuja con tips contextuales por ruta (`/`, `/sobre`, `/servicios`, etc.), navegación con CTAs, paginación de tips, opción de ocultar (persistida en localStorage), botón discreto para reactivar.
- **Hero rediseñado**: parallax con `useScroll/useTransform` (logo, texto, mascota se mueven a distintas velocidades), eyebrow con dots animados, slogan reducido, badges "100% código a medida / Sin plantillas / Comunicación 1:1", mascota decorativa flotando en hero, fade suave (`hero-bottom-fade`) en lugar de línea negra al pasar a la siguiente sección.
- **ProblemSection v2**: redesigned a 3 píldoras horizontales con iconos lucide (Procesos manuales, Herramientas sueltas, Soluciones genéricas) en lugar de un único bloque de texto largo.
- **Responsiveness completo**: mobile (390px), tablet (768px), desktop (1440px). Hero badges, CTAs full-width en móvil, mascota deco oculta en móvil, page-hero ajustado, plans/stats/gallery cards apilan correctamente.
- Eliminado `min-height: 100svh` forzado en secciones intermedias (ya no se ve el "vacío negro").

### v1 — Estructura inicial
- 4 nuevas páginas con anchors `#seccion`: `/sobre`, `/servicios`, `/proyectos`, `/herramientas`

### Core
- 4 nuevas páginas con anchors `#seccion` para que el menú lateral lleve al sitio correcto
- `PageHero` reutilizable con orbs animados, grid de fondo, gradiente personalizado por accent
- Sistema centralizado de iconos lucide-react vía `<Icon name="..." />`

### Componentes de motion reutilizables
- `Reveal`, `RevealStagger`, `RevealItem` — scroll reveals con blur/opacity/translate
- `Counter` — números animados al entrar en viewport
- `Magnetic` — hover magnético para CTAs
- `TiltCard` — tilt 3D siguiendo cursor (galería)

### Hero mejorado
- Animaciones escalonadas con framer-motion (image, eyebrow, title, slogan, CTAs, footer)
- CTAs envueltos en componente magnético

### Nuevas secciones (home)
- `StatsSection` — 4 stats realistas con iconos: 100% código a medida, 0 plantillas, 24h respuesta, 1:1 comunicación
- `ServiceModelsSection` — 4 planes (Web esencial $3,500, Web a medida $9,500 destacado, Software propio cotización, Software gestionado $1,200/mes)
- `GallerySection` — 6 conceptos con TiltCard 3D + iconos flotantes + mockups
- `CommitmentsSection` — reemplaza testimonios falsos con 5 compromisos reales en carrusel creativo (3D rotateY, dots, arrows, autoplay con pausa al hover)

### Mejoras UX
- Menú lateral: fondo sólido (sin transparencia)
- Backdrop sólido al abrir menú
- Anchors `scroll-margin-top` para no quedar tapados por header
- Form de contacto inline con éxito animado
- Hover/tilt en cards, magnético en botones
- Micro-interacciones en hover de servicios, stats, plans, tools

### Página /sobre
Reutiliza AboutSection, DifferentiatorSection (con visual creativa), ProcessSection, TrustSection

### Página /servicios
Capabilities (con iconos lucide), ServiceModels, Commitments

### Página /proyectos
Gallery (conceptos visuales) + ProjectsShowcase (casos detallados con iconos)

### Página /herramientas
6 tarjetas de herramientas con estados Disponible/En desarrollo/Próximamente y CTA Probar/Avísame

## Tono y enfoque
- Honesto y humilde: cifras realistas (100%, 0, 24h, 1:1) sin exagerar experiencia
- Compromisos concretos en vez de testimonios falsos
- "Concepto" / "Prototipo" / "Disponible" en lugar de "+180 clientes"
- Voz en primera persona singular ("yo me encargo", "construyo")

## Backlog / Próximas mejoras (P1-P2)
- P1: Galería con imágenes reales cuando se entreguen primeros proyectos
- P1: Reemplazar `commitments` por `testimonials` reales cuando haya clientes
- P1: Form de contacto con backend real (email service o Telegram bot)
- P2: Light theme toggle (actualmente solo dark)
- P2: i18n (ES → EN) para llegar a clientes internacionales
- P2: Calculadora de presupuesto interactiva en /herramientas
- P2: Blog / artículos para SEO
- P2: Open Graph images dinámicas por página
- P2: Animaciones de letras (text-split) sin romper background-clip text
