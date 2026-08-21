const workshops = [
  {
    title: 'Creación de Terrarios',
    date: 'Todos los sábados',
    day: 'Sáb',
    time: '10:00 — 12:00',
    price: '$45',
    spots: 8,
    image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=500&auto=format&fit=crop&q=80',
    description: 'Construye tu propio ecosistema cerrado. Incluye todos los materiales, plantas y el recipiente de vidrio. Te llevas a casa un ecosistema vivo autosostenible.',
  },
  {
    title: 'Poda Estacional',
    date: '15 de Marzo',
    day: '15 Mar',
    time: '14:00 — 16:00',
    price: '$35',
    spots: 12,
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=500&auto=format&fit=crop&q=80',
    description: 'Aprende cuándo y cómo podar para un crecimiento vigoroso de rosales, árboles frutales y arbustos. Trae tus propias tijeras o usa las nuestras.',
  },
  {
    title: 'Compostaje 101',
    date: '22 de Marzo',
    day: '22 Mar',
    time: '09:00 — 11:00',
    price: '$25',
    spots: 15,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&auto=format&fit=crop&q=80',
    description: 'Transforma tus residuos orgánicos de cocina en abono premium. Cubrimos compostaje caliente, vermicompost y bokashi. Incluye kit de inicio.',
  },
];

export default function Workshops() {
  return (
    <section id="workshops" className="py-24 lg:py-32 bg-paper relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-copper/5 bg-blob animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="specimen-label mb-3 reveal">Aprende & Cultiva</p>
          <h2 className="font-display text-4xl sm:text-5xl text-moss font-extrabold tracking-tight reveal" data-delay="100">
            Talleres <span className="italic text-copper">&</span> encuentros
          </h2>
          <p className="text-ink/75 max-w-lg mx-auto mt-4 reveal" data-delay="200">
            Únete a nuestra comunidad de cultivadores. Grupos reducidos, enseñanza 100% práctica y te vas a casa con algo vivo.
          </p>
        </div>

        <hr className="rule-divider mb-12 opacity-50" />

        {/* Workshop cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((w, i) => (
            <article
              key={w.title}
              className="group bg-white/70 backdrop-blur-sm border border-clay/10 p-5 hover:border-copper/40 hover:bg-white/95 hover:shadow-2xl transition-all duration-500 rounded-3xl reveal-stagger flex flex-col justify-between overflow-hidden"
              data-delay={String(i * 120)}
            >
              <div>
                {/* Photo header with overlayed date tag */}
                <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-6 shadow-inner">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Date Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <span className="font-mono text-[0.625rem] tracking-[0.1em] uppercase text-copper font-bold">{w.day}</span>
                    <span className="w-1.5 h-1.5 bg-clay/30 rounded-full"></span>
                    <span className="font-mono text-[0.55rem] tracking-[0.05em] uppercase text-clay font-semibold">{w.date}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl text-moss font-bold mb-3 px-1">{w.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed mb-6 px-1">{w.description}</p>
              </div>

              <div>
                <hr className="rule-divider mb-6 opacity-40" />

                <div className="flex items-center justify-between px-1">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-clay">
                        <circle cx="6" cy="6" r="5" />
                        <path d="M6 3v3l2 2" />
                      </svg>
                      <span className="font-mono text-[0.625rem] text-clay font-medium">{w.time}</span>
                    </div>
                    <span className="font-mono text-[0.6rem] text-clay/80 block">{w.spots} cupos disponibles</span>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-xl text-copper font-bold block">{w.price}</span>
                    <button className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-moss bg-copper px-4 py-2 mt-2 hover:bg-copper/90 transition-all duration-300 rounded-full shadow-sm shadow-copper/10 font-bold">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-cream/70 backdrop-blur-sm border border-clay/10 p-8 lg:p-12 rounded-[2.5rem] shadow-lg relative overflow-hidden reveal" data-delay="300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <h3 className="font-display text-2xl text-moss font-bold mb-2">Mantente conectado</h3>
              <p className="text-ink/70 text-sm">Guías de siembra estacional, invitaciones prioritarias a talleres y 10% de descuento en tu primer servicio.</p>
            </div>
            <div className="lg:col-span-5">
              <div className="flex shadow-md bg-white rounded-full overflow-hidden border border-clay/15 focus-within:border-moss transition-all duration-300 p-1">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 bg-transparent px-5 py-2.5 text-ink placeholder:text-clay/50 font-mono text-sm focus:outline-none"
                />
                <button className="bg-copper text-moss font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-copper/90 transition-all duration-300 flex-shrink-0 rounded-full font-bold shadow-sm shadow-copper/15">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
