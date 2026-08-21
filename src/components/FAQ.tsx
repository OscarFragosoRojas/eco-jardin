import { useState } from 'react';

const faqs = [
  {
    question: '¿Cómo funciona la visita técnica inicial?',
    answer: 'La primera visita técnica es 100% gratuita y sin compromiso. Uno de nuestros paisajistas acudirá a tu espacio para tomar medidas, evaluar la iluminación, el estado de la tierra y escuchar tus ideas. Luego, te enviaremos una propuesta formal y presupuesto detallado.',
  },
  {
    question: '¿Qué mantenimiento requiere un jardín nuevo?',
    answer: 'Depende del diseño. Nos especializamos en paisajismo de bajo mantenimiento utilizando plantas nativas y sistemas de riego eficientes. Tras finalizar el proyecto, te entregamos una guía rápida de cuidados y, si lo deseas, ofrecemos planes mensuales de mantenimiento.',
  },
  {
    question: '¿Instalan sistemas de riego automatizados?',
    answer: 'Sí, instalamos y programamos sistemas de riego automático por goteo o aspersión adaptados a las necesidades hídricas de cada zona de tu jardín. Esto ayuda a optimizar el uso de agua y mantener las plantas en su mejor estado.',
  },
  {
    question: '¿Qué tipos de plantas utilizan?',
    answer: 'Priorizamos plantas endémicas y adaptadas al clima local (xerófilas, perennes y de bajo consumo de agua) que garantizan una alta tasa de supervivencia y reducen la necesidad de mantenimiento intensivo, respetando siempre tus gustos visuales.',
  },
  {
    question: '¿Ofrecen garantía en sus servicios?',
    answer: 'Por supuesto. Todos nuestros proyectos de diseño e instalación de pasto/plantas cuentan con garantía de establecimiento (generalmente de 30 días) para asegurar que todo enraíce correctamente. Los equipos mecánicos como bombas y controladores de riego tienen su propia garantía de fabricante.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Decorative background details */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-sage/5 bg-blob animate-pulse-slow pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="specimen-label mb-3 reveal">Preguntas frecuentes</p>
          <h2 className="font-display text-4xl sm:text-5xl text-moss font-extrabold tracking-tight reveal" data-delay="100">
            Resolvemos <span className="italic text-copper">tus dudas</span>
          </h2>
          <p className="text-ink/65 max-w-md mx-auto mt-4 text-sm leading-relaxed reveal" data-delay="200">
            Todo lo que necesitas saber sobre nuestro proceso de trabajo y servicios.
          </p>
        </div>

        <hr className="rule-divider mb-14 opacity-50" />

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="reveal-stagger bg-white/70 backdrop-blur-sm border border-clay/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-copper/30"
                data-delay={String(i * 80)}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-base text-moss">
                    {faq.question}
                  </span>
                  <span className={`transform transition-transform duration-300 text-copper shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? '250px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-6 text-ink/75 text-sm leading-relaxed border-t border-clay/5 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
