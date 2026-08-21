import { useEffect, useRef, useState } from 'react';
import { Award, Star } from 'lucide-react';

function Counter({
  target,
  suffix,
  className = '',
}: {
  target: number;
  suffix: string;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={`font-display font-extrabold tabular-nums tracking-tight ${className}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-copper/5 bg-blob animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-moss/5 bg-blob animate-float pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="specimen-label mb-3 reveal">Nuestra Trayectoria</p>
          <h2 className="font-display text-4xl sm:text-5xl text-moss font-extrabold tracking-tight reveal" data-delay="100">
            EcoJardín <span className="italic text-copper">en cifras</span>
          </h2>
          <p className="text-ink/65 max-w-md mx-auto mt-4 text-sm leading-relaxed reveal" data-delay="200">
            El resultado de nuestro compromiso diario con la naturaleza y la excelencia.
          </p>
        </div>

        <hr className="rule-divider mb-14 opacity-50" />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-64">
          
          {/* Card 1: 500+ Jardines (Large - Spans 2 Cols) */}
          <div className="reveal-stagger md:col-span-2 relative rounded-3xl overflow-hidden shadow-lg group" data-delay="0">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80" 
              alt="Jardín verde residencial premium"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />
            {/* Dark green overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-moss via-moss/80 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-copper mb-2">Impacto local</span>
              <Counter target={500} suffix="+" className="text-5xl lg:text-6xl text-white" />
              <h3 className="font-display text-lg text-white font-bold mt-2">Jardines transformados</h3>
              <p className="text-white/60 text-xs leading-relaxed max-w-sm mt-1">
                Espacios residenciales y comerciales que hoy disfrutan de un diseño paisajístico sostenible y a medida.
              </p>
            </div>
          </div>

          {/* Card 2: 10 Años (Spans 1 Col) */}
          <div className="reveal-stagger bg-moss rounded-3xl p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 border border-white/5" data-delay="120">
            <Award className="w-10 h-10 text-copper stroke-[1.5]" />
            <div>
              <Counter target={10} suffix=" años" className="text-4xl lg:text-5xl text-white block" />
              <h3 className="font-display text-base text-white font-bold mt-2">De experiencia</h3>
              <p className="text-white/50 text-[0.7rem] leading-relaxed mt-1">
                Trayectoria diseñando y manteniendo pulmones urbanos en la región.
              </p>
            </div>
          </div>

          {/* Card 3: 98% Clientes (Spans 1 Col) */}
          <div className="reveal-stagger bg-white/70 backdrop-blur-sm border border-clay/10 rounded-3xl p-8 flex flex-col justify-between shadow-md hover:border-copper/40 transition-all duration-300" data-delay="240">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="w-5 h-5 fill-copper text-copper stroke-0" />
              ))}
            </div>
            <div>
              <Counter target={98} suffix="%" className="text-4xl lg:text-5xl text-moss block" />
              <h3 className="font-display text-base text-moss font-bold mt-2">Clientes satisfechos</h3>
              <p className="text-ink/60 text-[0.7rem] leading-relaxed mt-1">
                Avalan nuestra puntualidad, limpieza y compromiso con cada detalle.
              </p>
            </div>
          </div>

          {/* Card 4: 3,200+ Árboles (Large - Spans 2 Cols) */}
          <div className="reveal-stagger md:col-span-2 relative rounded-3xl overflow-hidden shadow-lg group" data-delay="360">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80" 
              alt="Hojas verdes densas de árboles sanos"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />
            {/* Dark green overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-moss via-moss/80 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-copper mb-2">Cuidado ambiental</span>
              <Counter target={3200} suffix="+" className="text-5xl lg:text-6xl text-white" />
              <h3 className="font-display text-lg text-white font-bold mt-2">Árboles y arbustos cuidados</h3>
              <p className="text-white/60 text-xs leading-relaxed max-w-sm mt-1">
                Podas estacionales y tratamientos botánicos especializados para proteger la salud de la flora local.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
