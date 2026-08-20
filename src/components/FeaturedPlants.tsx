import { MonsteraSVG, FiddleLeafSVG, SnakePlantSVG, BirdOfParadiseSVG } from './Botanicals';

const services = [
  {
    num: '001',
    name: 'Diseño de Paisaje',
    type: 'Residencial y Comercial',
    price: 'Desde $250',
    duration: '1-2 semanas',
    scope: 'Planos 2D/3D & especies',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=80',
    note: 'Conceptualizamos jardines armónicos adaptados al clima local, asoleamiento y tus preferencias estéticas.',
    Illustration: MonsteraSVG,
  },
  {
    num: '002',
    name: 'Mantenimiento Integral',
    type: 'Preventivo y Correctivo',
    price: 'Desde $80/mes',
    duration: 'Visitas programadas',
    scope: 'Poda, nutrición y fitosanidad',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&auto=format&fit=crop&q=80',
    note: 'Cuidado profesional estacional para mantener tu jardín limpio, saludable y libre de plagas todo el año.',
    Illustration: FiddleLeafSVG,
  },
  {
    num: '003',
    name: 'Sistemas de Riego',
    type: 'Inteligente y Eficiente',
    price: 'Desde $180',
    duration: 'Instalación en 1-2 días',
    scope: 'Goteo y aspersión automática',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=80',
    note: 'Optimización de consumo de agua mediante programadores automatizados y riego localizado de precisión.',
    Illustration: SnakePlantSVG,
  },
  {
    num: '004',
    name: 'Muros Verdes',
    type: 'Jardinería Vertical',
    price: 'Cotización a medida',
    duration: 'Instalaciones personalizadas',
    scope: 'Estructuras hidropónicas',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80',
    note: 'Creación de muros e instalaciones vivas en fachadas o interiores con sistema de autorriego integrado.',
    Illustration: BirdOfParadiseSVG,
  },
];

export default function FeaturedPlants() {
  return (
    <section id="plants" className="py-24 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-sage/10 bg-blob animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="specimen-label mb-3 reveal">Nuestros Servicios</p>
            <h2 className="font-display text-4xl sm:text-5xl text-moss font-extrabold tracking-tight reveal" data-delay="100">
              Servicios <span className="italic text-copper">especializados</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-clay hover:text-copper transition-colors reveal"
            data-delay="200"
          >
            Cotizar proyecto
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 6h10M7 2l4 4-4 4" /></svg>
          </a>
        </div>

        <hr className="rule-divider mb-12 opacity-50" />

        {/* Specimen grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <article
              key={service.num}
              className="group bg-white/70 backdrop-blur-sm border border-clay/10 p-5 hover:border-copper/40 hover:bg-white/95 hover:shadow-2xl transition-all duration-500 rounded-3xl reveal-stagger flex flex-col justify-between overflow-hidden"
              data-delay={String(i * 100)}
            >
              <div>
                {/* Photo header with overlayed SVG sticker */}
                <div className="relative h-44 w-full overflow-hidden rounded-2xl mb-5 shadow-inner">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating SVG badge */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-md flex items-center justify-center text-moss group-hover:text-copper transition-colors duration-300">
                    <service.Illustration className="w-full h-full" />
                  </div>
                </div>

                {/* Specimen number */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-clay">
                    Serv. {service.num}
                  </span>
                  <span className="font-mono text-[0.625rem] tracking-[0.15em] text-copper font-bold">
                    {service.price}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-display text-xl text-moss font-bold px-1 mb-1">{service.name}</h3>
                <p className="font-mono text-[0.625rem] tracking-[0.1em] text-clay/80 uppercase px-1 mb-4">{service.type}</p>

                {/* Metadata */}
                <div className="space-y-2 text-xs px-1 mb-4">
                  <div className="flex justify-between">
                    <span className="font-mono text-clay/70 uppercase tracking-wider text-[0.6rem]">Tiempo</span>
                    <span className="text-ink/80 font-medium">{service.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-clay/70 uppercase tracking-wider text-[0.6rem]">Alcance</span>
                    <span className="text-ink/80 text-right font-medium">{service.scope}</span>
                  </div>
                </div>

                <hr className="rule-divider my-4 opacity-40" />

                <p className="text-ink/75 text-xs leading-relaxed px-1">{service.note}</p>
              </div>

              {/* Action button */}
              <a
                href="#contact"
                className="mt-6 w-full text-center font-mono text-[0.625rem] tracking-[0.15em] uppercase text-paper bg-copper py-3 hover:bg-copper/90 transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 rounded-full block shadow-sm shadow-copper/10 font-bold"
              >
                Solicitar Servicio
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
