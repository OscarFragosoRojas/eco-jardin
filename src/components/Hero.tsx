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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-paper/95 backdrop-blur-md border-b border-sage/15 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/images/logo.png"
              alt="EcoJardín Isotipo"
              className="w-9 h-9 object-contain"
            />
            <span
              className={`font-display text-xl font-extrabold tracking-tight transition-colors ${
                scrolled || menuOpen ? 'text-moss' : 'text-paper'
              }`}
            >
              <span className="text-copper">Eco</span>Jardín
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                  scrolled || menuOpen
                    ? 'text-ink/75 hover:text-sage'
                    : 'text-paper/85 hover:text-copper'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-mono text-xs tracking-widest uppercase text-moss bg-copper px-6 py-2.5 hover:bg-copper/90 transition-colors shadow-sm shadow-copper/10 rounded-full font-bold"
            >
              Contacto
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors ${
              scrolled || menuOpen ? 'text-ink' : 'text-paper'
            }`}
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
              className="block text-center mt-4 font-mono text-sm tracking-widest uppercase text-moss bg-copper py-3 hover:bg-copper/90 transition-colors rounded-full font-bold"
            >
              Contacto
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex items-center bg-ink">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
          style={{
            backgroundImage: `url('/images/hero-gardener.png')`,
          }}
        />

        {/* Dark Tint & Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-ink/40 lg:bg-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-ink/90 via-ink/85 to-ink/90 lg:bg-linear-to-r lg:from-ink/98 lg:via-ink/75 lg:to-transparent" />

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FAF8F5' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-copper mb-8 reveal font-bold">
                Desde 2009 — Cuidamos • Diseñamos • Transformamos
              </p>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7.5xl text-paper font-extrabold tracking-tight leading-[1.05] mb-8">
                <span className="block reveal" data-delay="100">Cuidamos,</span>
                <span className="block reveal" data-delay="200">diseñamos y</span>
                <span className="block text-copper italic reveal" data-delay="300">transformamos</span>
              </h1>

              <p className="text-paper/80 text-lg leading-relaxed max-w-md mb-10 reveal" data-delay="400">
                Tus espacios verdes. Creamos paisajes hermosos y funcionales que prosperan todo el año. Más verde, más vida.
              </p>

              <div className="flex flex-wrap gap-4 reveal" data-delay="500">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-moss bg-copper px-7 py-3.5 hover:bg-copper/90 transition-all duration-300 shadow-md shadow-copper/20 hover:shadow-lg hover:shadow-copper/30 rounded-full font-bold"
                >
                  Cotización Gratis
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="M1 7h12M8 2l5 5-5 5" />
                  </svg>
                </a>
                <a
                  href="#plants"
                  className="inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-paper/95 border border-paper/30 px-7 py-3.5 hover:text-white hover:border-copper transition-colors rounded-full font-bold"
                >
                  Ver Servicios
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
                    <div className="font-display text-2xl text-paper font-bold">{stat.num}</div>
                    <div className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-cream/70 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Empty right column for gardener visibility */}
            <div className="lg:col-span-5" />
          </div>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal" data-delay="900">
          <span className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-cream/55">Explorar</span>
          <div className="w-px h-8 bg-linear-to-b from-cream/45 to-transparent"></div>
        </div>
      </section>
    </>
  );
}
