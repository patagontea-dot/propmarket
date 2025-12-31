
import React from 'react';

const Help: React.FC = () => {
  return (
    <div className="w-full">
      <div className="relative w-full bg-slate-900 py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary/90 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-3xl md:text-5xl font-black mb-4">Centro de Ayuda PROPMARKET</h1>
          <p className="text-slate-100 text-lg mb-8">¿Cómo podemos ayudarte hoy? Encuentra respuestas sobre el proceso de compra y crédito directo.</p>
          <div className="w-full max-w-lg mx-auto h-14 bg-white rounded-lg flex overflow-hidden shadow-lg">
            <div className="w-12 flex items-center justify-center text-slate-400">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="flex-1 outline-none text-gray-700 border-none focus:ring-0" placeholder="Busca un tema..." />
            <button className="bg-primary px-6 text-white font-bold">Buscar</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Proceso de Compra', icon: 'shopping_cart', desc: 'Guía paso a paso para adquirir activos.' },
            { title: 'Crédito Directo', icon: 'credit_card', desc: 'Conoce los requisitos, tasas y plazos.' },
            { title: 'Reservas y Pagos', icon: 'calendar_month', desc: 'Cómo gestionar tu reserva online.' },
          ].map((cat, i) => (
            <div key={i} className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-all cursor-pointer group">
              <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-4">
                <span className="material-symbols-outlined fill">{cat.icon}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{cat.title}</h3>
              <p className="text-sm text-slate-500">{cat.desc}</p>
            </div>
          ))}
        </div>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              '¿Cómo reservo una unidad online?',
              '¿Cuáles son los requisitos para el crédito directo?',
              '¿Qué documentos necesito para comprar?',
              '¿Puedo pagar el pie en cuotas?',
            ].map((q, i) => (
              <details key={i} className="group border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                <summary className="p-4 cursor-pointer font-medium flex justify-between items-center list-none">
                  {q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-slate-500">
                  Nuestro proceso es 100% digital. Solo necesitas tu carnet de identidad y realizar el pago de la reserva. El crédito directo no requiere evaluación de Dicom para montos iniciales.
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help;
