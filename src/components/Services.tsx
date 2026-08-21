import { useState } from 'react';
import {
  IconCompass,
  IconLawnMower,
  IconScissors,
  IconDroplets,
  IconLeaf,
  IconGardenCart,
  IconShovel,
  IconBugOff,
} from '@tabler/icons-react';

/* ─── Data ─────────────────────────────────────────────────────────────── */
const services = [
  {
    id: 'diseno',
    num: 'S-01',
    name: 'Diseño y Paisajismo',
    tagline: 'Tu jardín soñado, hecho realidad',
    description:
      'Transformamos cualquier espacio exterior en un oasis verde personalizado. Diseño integral con planos, selección de plantas y supervisión del proyecto.',
    price: 'Desde $1,200',
    includes: 'Incluye planos y visita técnica',
    Illustration: IconCompass,
    featured: true,
  },
  {
    id: 'pasto',
    num: 'S-02',
    name: 'Corte de Pasto',
    tagline: 'Precisión en cada pasada',
    description:
      'Servicio de corte profesional con acabado impecable. Incluye recolección de residuos y bordes perfectos.',
    price: 'Desde $180',
    includes: 'Incluye limpieza posterior',
    Illustration: IconLawnMower,
    featured: false,
  },
  {
    id: 'poda',
    num: 'S-03',
    name: 'Poda de Árboles',
    tagline: 'Forma, salud y belleza',
    description:
      'Poda técnica de árboles y arbustos con herramientas profesionales. Estimulamos el crecimiento sano y la estética natural.',
    price: 'Desde $350',
    includes: 'Incluye evaluación previa',
    Illustration: IconScissors,
    featured: false,
  },
  {
    id: 'riego',
    num: 'S-04',
    name: 'Sistemas de Riego',
    tagline: 'Agua inteligente, jardín vivo',
    description:
      'Instalación y programación de sistemas de riego automático eficientes. Ahorra agua y mantén tus plantas perfectamente hidratadas.',
    price: 'Desde $650',
    includes: 'Incluye programación y pruebas',
    Illustration: IconDroplets,
    featured: false,
  },
  {
    id: 'fertilizacion',
    num: 'S-05',
    name: 'Fertilización',
    tagline: 'Nutrición que se nota',
    description:
      'Análisis de suelo y aplicación de fertilizantes orgánicos y minerales adaptados a cada tipo de planta y temporada.',
    price: 'Desde $220',
    includes: 'Incluye análisis de suelo',
    Illustration: IconLeaf,
    featured: false,
  },
  {
    id: 'limpieza',
    num: 'S-06',
    name: 'Limpieza de Jardines',
    tagline: 'Orden y frescura renovada',
    description:
      'Retiro de hojas, maleza, ramas caídas y residuos orgánicos. Dejamos tu jardín impecable en una sola visita.',
    price: 'Desde $150',
    includes: 'Incluye retiro de residuos',
    Illustration: IconGardenCart,
    featured: false,
  },
  {
    id: 'pasto-instalacion',
    num: 'S-07',
    name: 'Instalación de Pasto',
    tagline: 'Verde uniforme desde el día uno',
    description:
      'Instalación de pasto en rollo o semilla con preparación de terreno. Garantizamos un césped denso, uniforme y resistente.',
    price: 'Desde $480',
    includes: 'Incluye preparación de terreno',
    Illustration: IconShovel,
    featured: false,
  },
  {
    id: 'plagas',
    num: 'S-08',
    name: 'Control de Plagas',
    tagline: 'Protección verde y segura',
    description:
      'Diagnóstico y tratamiento de plagas e insectos con productos biodegradables certificados. Protegemos tus plantas sin dañar el entorno.',
    price: 'Desde $290',
    includes: 'Incluye garantía de 30 días',
    Illustration: IconBugOff,
    featured: false,
  },
];

/* ─── Flip Card (small) ─────────────────────────────────────────────────── */
function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[number];
  delay: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const { Illustration } = service;

  return (
    <div
      className="reveal-stagger"
      data-delay={String(delay)}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Card wrapper */}
      <div
        className="relative w-full h-64 transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ── Front ── */}
        <div
          className="absolute inset-0 bg-moss rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-4 px-5 py-6 shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Badge */}
          <span className="absolute top-4 right-4 font-mono text-[0.55rem] tracking-[0.15em] uppercase bg-copper/20 text-copper px-2.5 py-1 rounded-full border border-copper/30">
            {service.num}
          </span>

          {/* Icon */}
          <Illustration className="w-12 h-12 text-white/75 stroke-[1.5]" />

          {/* Name */}
          <div className="text-center">
            <h3 className="font-display text-lg text-white font-bold leading-tight">
              {service.name}
            </h3>
            <p className="font-mono text-[0.6rem] text-copper/80 mt-1 tracking-wide">
              {service.tagline}
            </p>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-linear-to-r from-transparent via-copper/60 to-transparent rounded-full" />
        </div>

        {/* ── Back ── */}
        <div
          className="absolute inset-0 bg-paper rounded-3xl overflow-hidden flex flex-col justify-between px-5 py-5 shadow-xl border-2 border-copper/50"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Illustration className="w-6 h-6 text-moss stroke-[1.8] shrink-0" />
              <h3 className="font-display text-base text-moss font-bold leading-tight">
                {service.name}
              </h3>
            </div>
            <p className="text-ink/70 text-xs leading-relaxed line-clamp-3">
              {service.description}
            </p>
          </div>

          {/* Price + CTA */}
          <div>
            <div className="flex items-end justify-between mb-3">
              <div>
                <span className="font-mono text-[0.55rem] text-clay/70 uppercase tracking-wider block">
                  precio base
                </span>
                <span className="font-display text-xl text-moss font-extrabold">
                  {service.price}
                </span>
              </div>
              <span className="font-mono text-[0.55rem] text-clay/60 text-right leading-tight max-w-22.5">
                {service.includes}
              </span>
            </div>
            <button className="w-full font-mono text-[0.625rem] tracking-[0.15em] uppercase text-moss bg-copper py-2.5 hover:bg-copper/90 active:scale-95 transition-all duration-200 rounded-full font-bold shadow-sm shadow-copper/20">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Featured Card (large) ─────────────────────────────────────────────── */
function FeaturedCard({ service }: { service: (typeof services)[number] }) {
  const { Illustration } = service;
  return (
    <div
      className="reveal-stagger col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
      data-delay="0"
    >
      <div className="relative w-full h-full min-h-136 bg-moss rounded-3xl overflow-hidden flex flex-col justify-end p-8 shadow-2xl group">
        {/* Background illustration */}
        <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-15 transition-opacity duration-700">
          <Illustration className="w-48 h-48 text-white stroke-1" />
        </div>

        {/* Animated blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-sage/30 bg-blob animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-copper/20 bg-blob animate-float" />

        {/* Badge row */}
        <div className="relative z-10 flex items-center gap-3 mb-6">
          <span className="font-mono text-[0.55rem] tracking-[0.15em] uppercase bg-white/10 backdrop-blur-sm text-white/80 px-3 py-1.5 rounded-full border border-white/20">
            {service.num}
          </span>
          <span className="font-mono text-[0.55rem] tracking-[0.12em] uppercase bg-copper/90 text-moss px-3 py-1.5 rounded-full font-bold shadow-sm">
            ✦ Servicio Premium
          </span>
        </div>

        {/* Text content */}
        <div className="relative z-10">
          <p className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-copper/90 mb-2">
            {service.tagline}
          </p>
          <h3 className="font-display text-3xl lg:text-4xl text-white font-extrabold leading-tight mb-4">
            {service.name}
          </h3>
          <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-xs">
            {service.description}
          </p>

          {/* Price + CTA row */}
          <div className="flex items-center gap-4 flex-wrap">
            <div>
              <span className="font-mono text-[0.55rem] text-white/50 uppercase tracking-wider block">
                desde
              </span>
              <span className="font-display text-2xl text-copper font-extrabold">
                {service.price.replace('Desde ', '')}
              </span>
            </div>
            <button className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-moss bg-copper px-7 py-3 hover:bg-copper/90 hover:scale-[1.03] active:scale-95 transition-all duration-300 rounded-full font-bold shadow-lg shadow-copper/20 shrink-0">
              Solicitar ahora
            </button>
          </div>

          {/* Includes note */}
          <p className="mt-4 font-mono text-[0.55rem] text-white/40 tracking-wide">
            ✓ {service.includes}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function Services() {
  const featured = services.find((s) => s.featured)!;
  const rest = services.filter((s) => !s.featured);

  return (
    <section id="services" className="py-10 lg:py-32 bg-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-copper/5 bg-blob animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-moss/5 bg-blob animate-float pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <p className="specimen-label mb-3 reveal">Cuidamos • Diseñamos • Transformamos</p>
          <h2
            className="font-display text-4xl sm:text-5xl text-moss font-extrabold tracking-tight reveal"
            data-delay="100"
          >
            Nuestros{' '}
            <span className="italic text-copper">Servicios</span>
          </h2>
          <p
            className="text-ink/65 max-w-md mx-auto mt-4 text-sm leading-relaxed reveal"
            data-delay="200"
          >
            Pasa el cursor sobre cada servicio para conocer detalles y precios.
          </p>
        </div>

        <hr className="rule-divider mb-14 opacity-50" />

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-auto">
          {/* Featured card — spans 2 cols & 2 rows */}
          <FeaturedCard service={featured} />

          {/* Small flip cards — fill the remaining slots */}
          {rest.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={(i + 1) * 80} />
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/60 backdrop-blur-sm border border-clay/10 px-8 py-6 rounded-4xl shadow-sm reveal"
          data-delay="500"
        >
          <div>
            <p className="font-display text-lg text-moss font-bold">
              ¿No encuentras lo que buscas?
            </p>
            <p className="font-mono text-[0.65rem] text-clay tracking-wide mt-0.5">
              Cotizamos proyectos a medida sin costo adicional.
            </p>
          </div>
          <button className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-paper bg-moss px-8 py-3.5 hover:bg-moss/90 hover:scale-[1.02] active:scale-95 transition-all duration-300 rounded-full font-bold shadow-md shadow-moss/15 shrink-0">
            Solicitar Cotización Personalizada
          </button>
        </div>
      </div>
    </section>
  );
}
