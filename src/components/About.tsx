export default function About() {
  return (
    <section id="about" className="py-10 lg:py-20 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-sage/5 bg-blob animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="specimen-border p-3.5 rounded-[2.5rem] bg-white/40 backdrop-blur-sm shadow-xl reveal">
              <div className="overflow-hidden rounded-4xl">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80"
                  alt="Interior de EcoJardín — estantes de madera con macetas de terracota y plantas colgantes"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="mt-3.5 flex items-center justify-between px-2">
                <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-clay">Fig. 01</span>
                <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-clay">Estudio y Vivero</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="specimen-label mb-3 reveal">Nuestra historia</p>
            <h2 className="font-display text-4xl sm:text-5xl text-moss font-extrabold tracking-tight mb-6 reveal" data-delay="100">
              De una pequeña semilla<br />
              <span className="italic text-copper">a una comunidad verde</span>
            </h2>
            <div className="space-y-4 text-ink/75 leading-relaxed reveal" data-delay="200">
              <p>
                Lo que comenzó en 2009 como un modesto puesto de plantas de fin de semana, se ha convertido hoy en el estudio de paisajismo y jardinería más querido de la ciudad. Creemos firmemente que diseñar un jardín no es solo colocar plantas: es sembrar paciencia, fomentar la conexión con el entorno y redescubrir el gozo silencioso de ver crecer la vida.
              </p>
              <p>
                Cada especie de nuestro vivero y cada sustrato es probado y seleccionado en nuestros propios proyectos. Todos nuestros servicios y talleres están a cargo de profesionales apasionados, listos para ayudarte a cultivar tu propio santuario de paz.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 reveal" data-delay="300">
              <a
                href="#contact"
                className="font-mono text-xs tracking-widest uppercase text-paper bg-moss px-7 py-3.5 hover:bg-moss/90 transition-all duration-300 rounded-full shadow-md shadow-moss/10 font-bold"
              >
                Agendar Consulta
              </a>
              <a
                href="#plants"
                className="font-mono text-xs tracking-widest uppercase text-ink border border-clay/30 px-7 py-3.5 hover:border-moss transition-colors rounded-full font-bold"
              >
                Nuestra Misión
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
