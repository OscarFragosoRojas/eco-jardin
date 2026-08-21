---
name: ui-landscaping-theme
description: Guía de diseño UI/UX moderna, inspirada en redes sociales, minimalista e interactiva para servicios de jardinería. Utiliza Magic UI, Tailwind CSS, Shadcn y Framer Motion.
---

# Modern Social-Inspired Gardening UI & Adaptation Rules

Esta habilidad define el estilo visual, los componentes avanzados y el comportamiento adaptable que debe seguir el agente al diseñar o modificar cualquier sección de la landing page.

---

## 1. Estética Visual: Manual de Marca EcoJardín

- **Paleta de Colores Oficiales**:
  - **Fondo Claro (Cream)**: `#F2F7F2` (reemplaza cualquier tono stone/beige anterior).
  - **Verde Oscuro (Moss)**: `#1E4D2B` (usado para logotipo, fondos principales y botones destacados).
  - **Verde Medio (Sage)**: `#2E7D32` (usado para textos destacados, iconos y enlaces).
  - **Verde Claro de Acento (Copper/Accent)**: `#8BC34A` (usado para badges, hovers interactivos, focos y microanimaciones).
  - **Color de Texto Principal (Ink)**: `#102115` (un negro foresta profundo para máxima accesibilidad y contraste).

- **Tipografía Oficial**:
  - **Fuentes**: Uso prioritario de la familia tipográfica `Poppins` (especialmente `Poppins Bold` para encabezados y logotipo) combinada con `DM Mono` para especificaciones técnicas y etiquetas.

- **Slogans y Taglines**:
  - **Tagline**: "Cuidamos • Diseñamos • Transformamos tus espacios verdes"
  - **Lema**: "Más verde, más vida."

- **Los 8 Servicios Oficiales**:
  1. **Corte de Pasto**
  2. **Poda de Árboles y Arbustos**
  3. **Diseño y Paisajismo**
  4. **Sistemas de Riego**
  5. **Fertilización**
  6. **Limpieza de Jardines**
  7. **Instalación de Pasto**
  8. **Control de Plagas**

---

## 2. Componentes de Magic UI & Animaciones Atractivas

Aprovecha los componentes de **Magic UI** para dar ese acabado premium y dinámico:

- **Hero Section & Títulos**:
  - Utiliza `Word Rotate` o `Sparkles Text` para resaltar palabras clave sobre diseño de jardines, paisajismo y mantenimiento.
  - Añade `Globe` o `Interactive Grid Pattern` sutil de fondo para dar textura tecnológica/moderna.
- **Proyectos & Servicios**:
  - **Bento Grid / Specimen Grid**: Organiza los 8 servicios oficiales en una cuadrícula responsiva de tarjetas minimalistas con bordes redondeados (`rounded-3xl`).
  - **Marquee / Infinite Scroll**: Galería en movimiento continuo para mostrar logos de clientes, marcas de herramientas o fotos rápidas de trabajos recientes.
- **Transiciones y Motion**:
  - Animaciones de entrada de tarjetas de servicios usando clase `.reveal-stagger` y retrasos personalizados (`data-delay`).
  - Microinteracciones de hover que iluminen los bordes con el color de acento (`hover:border-copper/40`) y utilicen escala suave (`hover:scale-102`).

---

## 3. Principio de Adaptabilidad y Consistencia de Marca

Al realizar modificaciones en la landing page:

1. **Mantén la Consistencia Visual**: Asegúrate de que cualquier nuevo componente solicitado respete el radio de borde (`rounded-3xl`), la tipografía `Poppins` y la paleta de colores verde/ecológica.
2. **Sugerencia Proactiva**: Propón componentes modernos como sliders antes/después para proyectos de paisajismo, o Bento Grids para la visualización asimétrica de servicios.
3. **Contraste y Legibilidad**: Cuando utilices el verde claro de acento (`#8BC34A`), asegúrate de que el texto sea oscuro (`text-moss` o `text-ink`) para cumplir con las normas de contraste.

