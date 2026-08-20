import { TrowelSVG, WateringCanSVG, ScissorsSVG } from './Botanicals';

const tools = [
  {
    num: 'T-01',
    name: 'Paleta Forjada a Mano',
    description: 'Elaborada artesanalmente con acero al carbono de calidad reliquia que desarrolla una hermosa pátina con el uso. Mango ergonómico de madera de fresno.',
    price: '$42',
    detail: 'Acero al carbono / Fresno',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=200&auto=format&fit=crop&q=80',
    Illustration: TrowelSVG,
  },
  {
    num: 'T-02',
    name: 'Regadera de Cobre',
    description: 'Capacidad de dos litros. Cobre puro con roseta fina de latón. Funcional para el invernadero y sumamente decorativa en cualquier espacio.',
    price: '$78',
    detail: 'Cobre puro / 2 Litros',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&auto=format&fit=crop&q=80',
    Illustration: WateringCanSVG,
  },
  {
    num: 'T-03',
    name: 'Tijeras de Poda Japonesas',
    description: 'Hojas de acero templado japonés con mangos de nogal. Cortes limpios y precisos que promueven un crecimiento sano. Afilables de por vida.',
    price: '$56',
    detail: 'Acero japonés / Nogal',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=200&auto=format&fit=crop&q=80',
    Illustration: ScissorsSVG,
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-sage/10 bg-blob animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-clay mb-3 reveal">Materiales y Herramientas</p>
            <h2 className="font-display text-4xl sm:text-5xl text-moss font-extrabold tracking-tight reveal" data-delay="100">
              Calidad artesanal, <span className="italic text-copper">hecha para perdurar</span>
            </h2>
          </div>
        </div>

        <hr className="rule-divider mb-12 opacity-50" />

        {/* Tool list */}
        <div className="space-y-4">
          {tools.map((tool, i) => (
            <article
              key={tool.num}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 border-b border-clay/10 hover:border-transparent hover:bg-white/60 hover:shadow-lg transition-all duration-300 rounded-3xl reveal-stagger"
              data-delay={String(i * 120)}
            >
              {/* Illustration + Image Thumbnail */}
              <div className="lg:col-span-3 flex items-center justify-center lg:justify-start gap-4">
                {/* Small Photo Thumbnail */}
                <div className="w-16 h-16 overflow-hidden rounded-2xl shadow border-2 border-white flex-shrink-0">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* SVG Icon */}
                <tool.Illustration className="w-10 h-auto text-ink/35 group-hover:text-copper transition-colors duration-500 flex-shrink-0" />
              </div>

              {/* Info */}
              <div className="lg:col-span-5">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[0.625rem] tracking-[0.15em] text-clay">{tool.num}</span>
                  <h3 className="font-display text-xl text-moss font-bold">{tool.name}</h3>
                </div>
                <p className="text-ink/75 text-sm leading-relaxed max-w-lg">{tool.description}</p>
              </div>

              {/* Detail + Price + Action */}
              <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-6">
                <span className="hidden lg:block font-mono text-[0.6rem] tracking-[0.1em] text-clay/70 uppercase">{tool.detail}</span>
                <span className="font-display text-xl text-copper font-bold">{tool.price}</span>
                <button className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-paper bg-moss px-6 py-2.5 hover:bg-moss/90 transition-all duration-300 rounded-full shadow-sm shadow-moss/10 font-bold">
                  Adquirir
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Feature strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Envío gratis desde $100',
            'Garantía de satisfacción',
            'Herramientas de por vida',
            'Empaques libres de plástico',
          ].map((text) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-copper rounded-full flex-shrink-0"></div>
              <span className="font-mono text-[0.625rem] tracking-[0.1em] uppercase text-clay">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
