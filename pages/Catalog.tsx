
import React, { useState } from 'react';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';
import { PropertyType } from '../types';

const Catalog: React.FC = () => {
  const [filterType, setFilterType] = useState<PropertyType | 'All'>('All');

  const filteredProperties = filterType === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.type === filterType);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
      <div className="flex flex-col gap-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Catálogo de Propiedades</h1>
        <p className="text-slate-500 dark:text-slate-400 text-base max-w-2xl">Encuentra bodegas, estacionamientos y terrenos con financiamiento directo. Invierte fácil, sin bancos.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 shrink-0 space-y-6">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400 text-xl">category</span>
              Tipo de Propiedad
            </h3>
            <div className="space-y-3">
              {(['All', ...Object.values(PropertyType)]).map(type => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="type" 
                    checked={filterType === type}
                    onChange={() => setFilterType(type as any)}
                    className="w-5 h-5 rounded-full border-slate-300 text-primary focus:ring-primary dark:bg-slate-700 dark:border-slate-600" 
                  />
                  <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors text-sm">{type === 'All' ? 'Todos' : type}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400 text-xl">location_on</span>
              Ubicación
            </h3>
            <select className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-primary focus:ring-primary h-10">
              <option>Todas las regiones</option>
              <option>Región Metropolitana</option>
              <option>Valparaíso</option>
              <option>Biobío</option>
            </select>
          </div>
        </aside>

        {/* Main Listing Area */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row gap-4 mb-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400">search</span>
              </div>
              <input 
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg leading-5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm" 
                placeholder="Buscar por ubicación..." 
                type="text" 
              />
            </div>
            <div className="w-full md:w-56">
              <select className="block w-full pl-3 pr-10 py-2.5 text-base border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
                <option>Recomendados</option>
                <option>Menor Precio</option>
                <option>Mayor Precio</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProperties.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
