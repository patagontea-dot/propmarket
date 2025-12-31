
import React from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES, TESTIMONIALS } from '../constants';
import PropertyCard from '../components/PropertyCard';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-20 lg:py-24 px-4 md:px-10 bg-white dark:bg-[#101822]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 w-fit mx-auto lg:mx-0 border border-blue-100 dark:border-blue-800">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-primary dark:text-blue-300 uppercase tracking-wide">Nuevo sistema de crédito</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Invierte en <span className="text-primary">Real Estate</span> con poco capital
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Accede a bodegas, estacionamientos y terrenos con financiamiento directo. Sin bancos, 100% online y con aprobación en minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <Link to="/catalog" className="h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-base shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">search</span>
                Explorar Catálogo
              </Link>
              <button className="h-12 px-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-base transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">calculate</span>
                Simular Crédito
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">+2.5k</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Inversionistas</span>
              </div>
              <div className="w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">UF 50k+</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">En activos</span>
              </div>
              <div className="w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">100%</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Digital</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            <img 
              alt="Modern office buildings" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKpcOm8oIPoaT8Cbz2UH7qEE3c8ubU_K1w8Gjnj5aNUFbHkiuTBO46UY5GvD-Fg0PD1eNQ-1JOW_aRfjvFXylc15Y8IpmCBm2WW36b1ZpduoNj8zZ1n9BOOqMo-0D4-mt16mmLfyPAAEMVkJEd66gICOj05Cb1MUtEKU3UfO38Qt5oYg4i-qC7IIITu3qh2zpZoNI_0OUMjwgHKp2jlx0wDWmuauJEmygGids8hS4Qwk6y45M21WlHu4t_uOc8BtS56dmoF0Lj0EG1" 
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-xl border border-white/20 shadow-lg z-20 flex items-center gap-4">
              <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Rentabilidad Promedio</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">UF + 7.5% Anual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 md:px-10 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Elige tu tipo de activo</h2>
              <p className="text-slate-500 dark:text-slate-400">Diversifica tu portafolio con opciones accesibles.</p>
            </div>
            <Link className="text-primary font-semibold hover:underline flex items-center gap-1" to="/catalog">
              Ver todo el catálogo <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: 'Bodegas', icon: 'inventory_2', img: 'https://picsum.photos/400/300?random=1', desc: 'Alta demanda en zonas urbanas densas.' },
              { type: 'Estacionamientos', icon: 'directions_car', img: 'https://picsum.photos/400/300?random=2', desc: 'Bajo costo de mantención.' },
              { type: 'Parcelas', icon: 'landscape', img: 'https://picsum.photos/400/300?random=3', desc: 'Tu terreno en el sur de Chile.' },
              { type: 'Estudios', icon: 'apartment', img: 'https://picsum.photos/400/300?random=4', desc: 'Inversión habitacional accesible.' },
            ].map((cat, i) => (
              <Link key={i} to="/catalog" className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={cat.img} alt={cat.type} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary">{cat.icon}</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.type}</h3>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-4 md:px-10 bg-slate-50 dark:bg-[#0d1219]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center md:text-left">Oportunidades Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-[#101822] to-[#1e2a3b] text-white">
        <div className="max-w-[960px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">¿Listo para comenzar tu patrimonio?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Únete a miles de chilenos que están invirtiendo en activos reales de forma inteligente. Sin burocracia bancaria.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth" className="h-14 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center">
              Crear Cuenta Gratis
            </Link>
            <Link to="/help" className="h-14 px-8 rounded-lg bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold text-lg transition-all flex items-center justify-center">
              Contactar Asesor
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-10 bg-white dark:bg-[#101822]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-slate-900 dark:text-white">Lo que dicen nuestros inversionistas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testi, i) => (
              <div key={i} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} className="material-symbols-outlined fill text-sm">star</span>)}
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-6">{testi.content}</p>
                <div className="flex items-center gap-3">
                  <div className={`size-10 rounded-full flex items-center justify-center font-bold ${testi.color}`}>
                    {testi.initials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{testi.name}</p>
                    <p className="text-xs text-slate-500">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
