
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';

const Details: React.FC = () => {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id) || PROPERTIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <nav aria-label="Breadcrumb" className="flex mb-6 text-sm text-slate-500">
        <Link to="/" className="hover:text-primary">Inicio</Link>
        <span className="mx-2">/</span>
        <Link to="/catalog" className="hover:text-primary">Catálogo</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900 dark:text-white font-medium">{property.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-8">
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-sm relative group bg-slate-200 dark:bg-slate-800">
            <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <button className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2 hover:bg-white dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-[16px]">grid_view</span>
              Ver 8 fotos
            </button>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-green-200 dark:border-green-900">VENTA</span>
              <span className="text-slate-500 text-sm">ID: {property.id}00{property.id}</span>
              <div className="flex items-center text-blue-600 text-sm font-medium gap-1">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Verificado</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">{property.title}</h1>
            <p className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              {property.location}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Superficie', val: property.size, icon: 'square_foot' },
              { label: 'Ubicación', val: 'Nivel -2', icon: 'layers' },
              { label: 'Gastos Comunes', val: '$15.000', icon: 'attach_money' },
              { label: 'Vigilancia', val: '24/7', icon: 'security' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col items-center text-center gap-2">
                <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.val}</p>
                  <p className="text-xs text-slate-500">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Descripción de la Propiedad</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Excelente oportunidad de inversión. Activo inmobiliario ubicado en zona de alta demanda, ideal para generar rentas mensuales estables con bajo costo de mantención. El edificio cuenta con accesos controlados y vigilancia las 24 horas.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Simulación de Crédito Directo</h3>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-semibold">Sin Bancos</span>
            </div>
            <div className="p-6 overflow-x-auto">
               <table className="w-full text-left text-sm">
                 <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase text-slate-500 font-semibold">
                   <tr>
                     <th className="px-4 py-3">Concepto</th>
                     <th className="px-4 py-3">Valor (UF)</th>
                     <th className="px-4 py-3 text-right">Valor Aprox (CLP)</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                   <tr><td className="px-4 py-3 font-medium">Precio Total</td><td className="px-4 py-3">{property.totalValueUF} UF</td><td className="px-4 py-3 text-right">${(property.totalValueUF * 37500).toLocaleString()}</td></tr>
                   <tr className="bg-primary/5"><td className="px-4 py-3 font-bold text-primary">Cuota Mensual</td><td className="px-4 py-3 font-bold text-primary">5.2 UF</td><td className="px-4 py-3 text-right font-bold text-primary">~${property.monthlyInstallmentCLP.toLocaleString()}</td></tr>
                 </tbody>
               </table>
            </div>
          </div>
        </div>

        {/* Right Column Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">
              <div className="flex justify-between items-start mb-1">
                <p className="text-sm font-medium text-slate-500">Precio de Venta</p>
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Disponible</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">UF {property.totalValueUF}</h2>
              
              <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">credit_score</span>
                  <span className="text-sm font-bold text-primary">Crédito Directo</span>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-sm text-slate-600 dark:text-slate-300">Cuota desde:</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">UF 5.2</div>
                </div>
              </div>

              <Link to={`/checkout/${property.id}`} className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2">
                Reservar Ahora
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Gestionado por</h4>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://picsum.photos/100/100?random=10" alt="Agente" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Carlos Méndez</p>
                  <p className="text-xs text-slate-500">Agente PropMarket</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
