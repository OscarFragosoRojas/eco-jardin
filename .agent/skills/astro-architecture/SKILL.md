---
name: astro-architecture
description: Reglas de arquitectura para Astro.js. Define cuándo usar renderizado estático vs islas de JavaScript (React/Framer Motion).
---

# Astro Architecture & Island Strategy Rules

Al escribir código para esta landing page en Astro, sigue estrictamente estos principios:

## 1. Zero-JS por Defecto

- Todo componente visual estático (Hero básico, tarjetas de servicios estáticas, testimonios simples, footer) debe crearse en archivos `.astro` sin directivas de cliente.
- Usa CSS puro o Tailwind para estilos responsivos sin añadir paquetes de JavaScript.

## 2. Uso Correcto de Islas (`client:*`)

Importa componentes de React/Framer Motion/GSAP utilizando la directiva `client:*` mínima necesaria:

- **`client:visible`**: Para componentes interactivos debajo del fold (ej. Acordeón de FAQs de Shadcn, sliders de proyectos "antes y después", animaciones al hacer scroll).
- **`client:idle`**: Para elementos secundarios que no requieren interactividad inmediata.
- **`client:load`**: Úsalo ÚNICAMENTE para elementos interactivos en el Hero principal que deben ser funcionales de inmediato (ej. un cotizador o menú móvil).
- **NUNCA** apliques `client:load` a toda la página ni a componentes estáticos.

## 3. Estructura de Componentes

- `src/components/ui/`: Componentes atómicos de React / Shadcn UI.
- `src/components/astro/`: Componentes nativos `.astro` para maquetación estática.
- `src/layouts/`: Layout principal con HTML base, metaetiquetas SEO y fuentes.
