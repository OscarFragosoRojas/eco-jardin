import { useState, useRef, useCallback, useEffect } from 'react';

const projects = [
  {
    id: 1,
    label: 'Jardín Residencial',
    location: 'Guadalajara, Jal.',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80',
    after: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
    service: 'Diseño y Paisajismo',
    duration: '3 semanas',
  },
  {
    id: 2,
    label: 'Terraza Corporativa',
    location: 'Zapopan, Jal.',
    before: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?w=800&auto=format&fit=crop&q=80',
    after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80',
    service: 'Instalación de Pasto + Riego',
    duration: '2 semanas',
  },
  {
    id: 3,
    label: 'Patio Trasero',
    location: 'Tlaquepaque, Jal.',
    before: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&auto=format&fit=crop&q=80',
    after: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&auto=format&fit=crop&q=80',
    service: 'Poda + Limpieza + Fertilización',
    duration: '1 semana',
  },
];

function Slider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => setDragging(true);
  const onMouseMove = useCallback(
    (e: MouseEvent) => { if (dragging) updatePos(e.clientX); },
    [dragging, updatePos]
  );
  const onMouseUp = () => setDragging(false);

  const onTouchMove = useCallback(
    (e: TouchEvent) => updatePos(e.touches[0].clientX),
    [updatePos]
  );

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 lg:h-96 overflow-hidden rounded-2xl select-none cursor-col-resize"
      onTouchMove={(e) => onTouchMove(e.nativeEvent)}
    >
      {/* Before image (full) */}
      <img src={before} alt="Antes" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

      {/* After image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={after} alt="Después" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] z-20"
        style={{ left: `${pos}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-col-resize border-2 border-white/80"
        style={{ left: `${pos}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={() => setDragging(true)}
        onTouchEnd={() => setDragging(false)}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5 4L2 8L5 12M11 4L14 8L11 12" stroke="#1E4D2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 font-mono text-[0.6rem] tracking-[0.15em] uppercase bg-black/40 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full z-10">
        Antes
      </span>
      <span className="absolute top-4 right-4 font-mono text-[0.6rem] tracking-[0.15em] uppercase bg-copper/90 text-moss px-3 py-1.5 rounded-full z-10 font-bold">
        Después
      </span>
    </div>
  );
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-paper relative overflow-hidden">
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-copper/5 bg-blob animate-pulse-slow pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="specimen-label mb-3 reveal">Resultados reales</p>
          <h2 className="font-display text-4xl sm:text-5xl text-moss font-extrabold tracking-tight reveal" data-delay="100">
            Nuestros <span className="italic text-copper">proyectos</span>
          </h2>
          <p className="text-ink/65 max-w-md mx-auto mt-4 text-sm leading-relaxed reveal" data-delay="200">
            Arrastra el divisor para ver la transformación. Cada jardín es una historia de cambio.
          </p>
        </div>

        <hr className="rule-divider mb-12 opacity-50" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Slider */}
          <div className="lg:col-span-8 reveal" data-delay="100">
            <Slider before={current.before} after={current.after} />

            {/* Project tabs */}
            <div className="flex gap-3 mt-5 flex-wrap">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  className={`font-mono text-[0.625rem] tracking-[0.12em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                    active === i
                      ? 'bg-moss text-white border-moss shadow-sm'
                      : 'bg-transparent text-clay border-clay/30 hover:border-moss/40 hover:text-moss'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project info */}
          <div className="lg:col-span-4 reveal" data-delay="200">
            <div className="bg-cream/80 backdrop-blur-sm border border-clay/10 rounded-3xl p-7 space-y-5">
              <div>
                <span className="font-mono text-[0.55rem] tracking-[0.15em] uppercase text-clay">Proyecto</span>
                <h3 className="font-display text-2xl text-moss font-bold mt-1">{current.label}</h3>
                <p className="font-mono text-[0.6rem] text-clay/70 mt-0.5">{current.location}</p>
              </div>

              <hr className="rule-divider opacity-40" />

              <div className="space-y-3">
                <div>
                  <span className="font-mono text-[0.55rem] tracking-[0.12em] uppercase text-clay/70">Servicio aplicado</span>
                  <p className="text-ink/80 text-sm font-medium mt-0.5">{current.service}</p>
                </div>
                <div>
                  <span className="font-mono text-[0.55rem] tracking-[0.12em] uppercase text-clay/70">Tiempo de ejecución</span>
                  <p className="text-ink/80 text-sm font-medium mt-0.5">{current.duration}</p>
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full font-mono text-[0.65rem] tracking-[0.15em] uppercase text-paper bg-moss py-3 hover:bg-moss/90 transition-all duration-300 rounded-full font-bold shadow-sm shadow-moss/15">
                  Quiero un proyecto así
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
