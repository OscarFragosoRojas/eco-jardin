import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Servicios', href: '#plants' },
  { label: 'Materiales', href: '#tools' },
  { label: 'Talleres', href: '#workshops' },
  { label: 'Nosotros', href: '#about' },
];

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-paper/90 backdrop-blur-md border-b border-sage/15 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-display text-xl text-moss font-extrabold tracking-tight">
              Roots <span className="text-copper">&</span> Branches
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-widest uppercase text-ink/75 hover:text-copper transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-mono text-xs tracking-widest uppercase text-paper bg-copper px-6 py-2.5 hover:bg-copper/90 transition-colors shadow-sm shadow-copper/10 rounded-full"
            >
              Contacto
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-ink"
            aria-label="Toggle menu"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <>
                  <line x1="2" y1="1" x2="18" y2="13" />
                  <line x1="18" y1="1" x2="2" y2="13" />
                </>
              ) : (
                <>
                  <line x1="0" y1="1" x2="20" y2="1" />
                  <line x1="0" y1="7" x2="20" y2="7" />
                  <line x1="0" y1="13" x2="14" y2="13" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-paper/98 backdrop-blur-lg border-t border-sage/15 px-6 py-6 absolute top-full left-0 right-0 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-mono text-sm tracking-widest uppercase text-ink/80 hover:text-copper transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center mt-4 font-mono text-sm tracking-widest uppercase text-paper bg-copper py-3 hover:bg-copper/90 transition-colors rounded-full"
            >
              Contacto
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex items-center bg-paper">
        {/* Abstract blobs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-sage/20 bg-blob animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-copper/10 bg-blob animate-pulse-slow" style={{ animationDelay: '-4s' }}></div>

        {/* Subtle paper texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238A7360' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-7">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-copper mb-8 reveal">
                Est. 2009 — Paisajismo & Mantenimiento
              </p>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-moss font-extrabold tracking-tight leading-[1.05] mb-10">
                <span className="block reveal" data-delay="100">Diseño, creación</span>
                <span className="block reveal" data-delay="200">y cuidado de</span>
                <span className="block text-copper italic reveal" data-delay="300">jardines únicos.</span>
              </h1>

              <p className="text-ink/75 text-lg leading-relaxed max-w-md mb-10 reveal" data-delay="400">
                Diseñamos y mantenemos espacios verdes que inspiran paz y conexión. Desde jardines residenciales hasta proyectos de paisajismo comercial, llevamos la naturaleza a tu entorno.
              </p>

              <div className="flex flex-wrap gap-4 reveal" data-delay="500">
                <a
                  href="#plants"
                  className="group inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-paper bg-moss px-7 py-3.5 hover:bg-moss/90 transition-all duration-300 shadow-md shadow-moss/10 hover:shadow-lg hover:shadow-moss/20 rounded-full"
                >
                  Nuestros servicios
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="M1 7h12M8 2l5 5-5 5" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-ink/80 border border-clay/30 px-7 py-3.5 hover:text-ink hover:border-moss transition-colors rounded-full"
                >
                  Contáctanos
                </a>
              </div>

              {/* Stats */}
              <div className="mt-16 flex gap-12 reveal" data-delay="700">
                {[
                  { num: '350+', label: 'Proyectos' },
                  { num: '15 Años', label: 'Experiencia' },
                  { num: '98%', label: 'Satisfacción' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-2xl text-moss font-bold">{stat.num}</div>
                    <div className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-clay mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collage of modern images */}
            <div className="lg:col-span-5 hidden lg:flex justify-center relative">
              <div className="relative">
                {/* Main large image */}
                <div className="w-72 h-[26rem] overflow-hidden rounded-[2.5rem] shadow-xl border-8 border-white transform -rotate-3 hover:rotate-0 transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&auto=format&fit=crop&q=80"
                    alt="Jardín moderno con paisajismo"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Overlapping smaller image */}
                <div className="w-48 h-48 overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white absolute -bottom-6 -left-16 transform rotate-6 hover:rotate-0 transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&auto=format&fit=crop&q=80"
                    alt="Manos cuidando plantas"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-copper text-paper font-mono text-[0.625rem] tracking-widest uppercase px-4 py-2.5 rounded-full shadow-lg animate-float flex items-center gap-2 border border-white/20">
                  <span className="w-1.5 h-1.5 bg-paper rounded-full animate-ping"></span>
                  100% Orgánico
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal" data-delay="900">
          <span className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-clay/50">Explorar</span>
          <div className="w-px h-8 bg-gradient-to-b from-clay/40 to-transparent"></div>
        </div>
      </section>
    </>
  );
}
