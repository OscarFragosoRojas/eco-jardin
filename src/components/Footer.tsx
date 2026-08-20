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
            <span className="font-display text-xl text-paper font-extrabold tracking-tight">
              Roots <span className="text-copper">&</span> Branches
            </span>
            <p className="text-cream/70 text-sm leading-relaxed mt-4 max-w-xs">
              Diseño de paisajes, mantenimiento experto y talleres botánicos sostenibles. Embelleciendo Portland desde 2009.
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
              <span className="text-paper/80 text-sm">hola@rootsandbranches.com<br />(503) 555-0142</span>
            </div>
          </div>
        </div>

        <hr className="rule-divider mb-8 opacity-10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[0.6rem] tracking-[0.1em] text-paper/40">&copy; 2026 Roots & Branches</span>
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
