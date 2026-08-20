const footerLinks = {
  Servicios: ['Diseño Paisajista', 'Mantenimiento de Jardines', 'Sistemas de Riego', 'Muros Verdes', 'Consultoría Botánica'],
  Talleres: ['Terrarios', 'Poda Estacional', 'Compostaje Doméstico', 'Huertos Urbanos', 'Calendario Grupal'],
  Compañía: ['Nuestra Historia', 'El Equipo', 'Proyectos', 'Sostenibilidad', 'Prensa'],
  Contacto: ['Ubicación', 'Escríbenos', 'Preguntas Frecuentes', 'Soporte Técnico', 'Cotizaciones'],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-moss text-paper border-t border-sage/10 mt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-copper/5 bg-blob animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 relative z-10">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 82 C 14 74, 8 46, 22 26 C 36 6, 68 8, 83 26 C 96 42, 92 70, 78 82" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" className="text-paper/50" />
                <path d="M58 35 L58 66 C58 74, 49 79, 42 74 C37 70, 37 64, 41 61" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" className="text-paper/80" />
                <path d="M58 35 C58 20, 50 14, 58 8 C66 14, 58 20, 58 35 Z" fill="currentColor" className="text-sage" />
                <path d="M58 35 C47 24, 42 19, 47 11 C57 17, 58 28, 58 35 Z" fill="currentColor" className="text-moss" />
                <path d="M58 35 C69 24, 74 19, 69 11 C59 17, 58 28, 58 35 Z" fill="currentColor" className="text-sage" />
                <path d="M58 42 C45 37, 39 36, 42 28 C52 31, 55 38, 58 42 Z" fill="currentColor" className="text-moss" />
                <path d="M58 42 C71 37, 77 36, 74 28 C64 31, 61 38, 58 42 Z" fill="currentColor" className="text-sage" />
                <path d="M48 83 C45 80, 48 77, 51 79 C52 82, 50 84, 48 83 Z" fill="currentColor" className="text-moss" />
                <path d="M54 83 C57 80, 54 77, 51 79 C50 82, 52 84, 54 83 Z" fill="currentColor" className="text-sage" />
              </svg>
              <span className="font-display text-xl text-paper font-extrabold tracking-tight">
                <span className="text-sage">Eco</span>Jardín
              </span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mt-4 max-w-xs">
              Diseño de paisajes, mantenimiento experto y talleres botánicos sostenibles. Transformando espacios verdes desde 2009.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-copper font-bold mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#contact" className="text-paper/60 text-sm hover:text-copper transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="rule-divider mb-12 opacity-10" />

        {/* Visit card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-paper/5 rounded-full flex items-center justify-center text-copper flex-shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" />
                <circle cx="8" cy="6" r="2" />
              </svg>
            </div>
            <div>
              <span className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-cream/60 block mb-1">Dirección</span>
              <span className="text-paper/80 text-sm">142 Garden Lane<br />Portland, OR 97201</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-paper/5 rounded-full flex items-center justify-center text-copper flex-shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="8" cy="8" r="7" />
                <path d="M8 4v4l3 3" />
              </svg>
            </div>
            <div>
              <span className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-cream/60 block mb-1">Horario</span>
              <span className="text-paper/80 text-sm">Lun–Sáb: 8am – 6pm<br />Domingo: 10am – 4pm</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-paper/5 rounded-full flex items-center justify-center text-copper flex-shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="1" y="3" width="14" height="10" rx="1" />
                <path d="M1 3l7 5 7-5" />
              </svg>
            </div>
            <div>
              <span className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-cream/60 block mb-1">Contacto</span>
              <span className="text-paper/80 text-sm">hola@ecojardin.com<br />(503) 555-0142</span>
            </div>
          </div>
        </div>

        <hr className="rule-divider mb-8 opacity-10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[0.6rem] tracking-[0.1em] text-paper/40">&copy; 2026 EcoJardín</span>
          <div className="flex gap-6">
            {['Privacidad', 'Términos', 'Cookies'].map((link) => (
              <a key={link} href="#contact" className="font-mono text-[0.6rem] tracking-[0.1em] text-paper/40 hover:text-paper transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
