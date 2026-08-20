---
name: ui-landscaping-theme
description: Guía de diseño UI/UX moderna, inspirada en redes sociales, minimalista e interactiva para servicios de jardinería. Utiliza Magic UI, Tailwind CSS, Shadcn y Framer Motion.
---

# Modern Social-Inspired Gardening UI & Adaptation Rules

Esta habilidad define el estilo visual, los componentes avanzados y el comportamiento adaptable que debe seguir el agente al diseñar o modificar cualquier sección de la landing page.

---

## 1. Estética Visual: "Social Minimalist Gardening"

- **Inspiración en Redes Sociales**:
  - **Social Cards / Feed Layout**: Muestra proyectos y transformaciones "Antes/Después" utilizando formatos estilo historias (aspect ratio 9:16 o 4:5) o tarjetas de feed con Likes/Badges interactivos.
  - **Testimonios en formato Review / Comment**: Tarjetas compactas con avatares redondos, estrellas de calificación y diseño tipo comentario/mensaje de red social.
  - **Bordes y Cristalografía**: Uso de bordes muy redondeados (`rounded-3xl` o `rounded-full`), vidrio esmerilado suave (`backdrop-blur-md bg-white/70` o `bg-zinc-900/80`) y sombras orgánicas.

- **Paleta de Colores Neomoderna**:
  - **Fondos**: Blancos cálidos y limpios (`stone-50`) o modo oscuro moderno con tonos profundos (`zinc-950`).
  - **Verdes Orgánicos & Neón**: Combinación de tonos botánicos profundos (`emerald-900`, `forest`) con acentos vibrantes e iluminados (`emerald-400`, `lime-400`).
  - **Acentos Neutros**: Tonos arena/crema (`stone-200`) para contrastar y dar sensación de naturaleza premium.

---

## 2. Componentes de Magic UI & Animaciones Atractivas

Aprovecha los componentes de **Magic UI** para dar ese acabado premium y dinámico:

- **Hero Section & Títulos**:
  - Utiliza `Word Rotate` o `Sparkles Text` para resaltar palabras clave sobre diseño de jardines, paisajismo y mantenimiento.
  - Añade `Globe` o `Interactive Grid Pattern` sutil de fondo para dar textura tecnológica/moderna.
- **Proyectos & Servicios**:
  - **Bento Grid**: Organiza los servicios de jardinería (poda, paisajismo, riegos automáticos, jardines verticales) en un Bento Grid asimétrico y dinámico.
  - **Marquee / Infinite Scroll**: Galería en movimiento continuo para mostrar logos de clientes, marcas de herramientas o fotos rápidas de trabajos recientes.
  - **Border Beam / Magic Card**: Para destacar paquetes de precios o la tarjeta de contacto principal con destellos luminosos al pasar el cursor.
- **Transiciones y Motion**:
  - Animaciones de entrada ultra fluidas usando Framer Motion (`initial={{ opacity: 0, y: 20 }}`).
  - Microinteracciones en botones (efecto pulso, vibración ligera al hover).

---

## 3. Principio de Adaptabilidad y Sugerencia Proactiva

Cuando el usuario pida un cambio o ajuste en la página:

1. **Acepta el Cambio y Propon Mejoras Modernas**: En lugar de simplemente aplicar el cambio de forma literal, sugiere automáticamente 1 o 2 componentes visuales modernos que complementen la idea (ejemplo: _"Añadí la sección de servicios; para hacerla más interactiva, sugiero convertirla en un Bento Grid de Magic UI con microanimaciones"_).
2. **Mantén la Consistencia Visual**: Asegúrate de que cualquier nuevo componente solicitado respete el radio de borde (`rounded-3xl`), la paleta de colores verde/ecológica y el concepto de minimalismo fluído.
3. **Optimización de Carga**: Si el usuario pide componentes muy animados, asegúrate de encapsularlos en componentes React e importarlos con `client:visible` en Astro para no impactar la velocidad de carga del sitio.
