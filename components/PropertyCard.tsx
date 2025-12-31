
import React from 'react';
import { Link } from 'react-router-dom';
import { PropertyListing } from '../types';

interface PropertyCardProps {
  property: PropertyListing;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group flex flex-col bg-white dark:bg-slate-850 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
      <div className="relative aspect-video bg-slate-200 w-full overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">
            {property.type}
          </span>
          {property.roi && (
             <span className="bg-green-600/90 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">
              {property.roi}
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-slate-900 dark:text-white">
          UF {property.totalValueUF}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{property.title}</h3>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 mt-1">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span className="text-xs font-medium">{property.location}</span>
            </div>
          </div>
        </div>
        <div className="my-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/50">
          <p className="text-xs text-blue-600 dark:text-blue-300 font-bold mb-1 uppercase tracking-wide">Crédito Directo</p>
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Pie desde</span>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">UF {property.downPaymentUF}</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Cuota Mensual</span>
              <span className="text-xl font-bold text-primary dark:text-blue-400">
                ${property.monthlyInstallmentCLP.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex gap-4 text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">straighten</span> {property.size}</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> {property.availability}</span>
          </div>
        </div>
        <Link 
          to={`/details/${property.id}`}
          className="w-full mt-4 h-10 flex items-center justify-center bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold rounded-lg transition-colors"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
