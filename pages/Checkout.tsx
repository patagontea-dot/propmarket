
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';

const Checkout: React.FC = () => {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id) || PROPERTIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Forms */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Reserva tu propiedad</h1>
            <p className="text-slate-600 dark:text-slate-400">Completa tus datos y realiza el pago de la reserva para asegurar tu activo hoy mismo.</p>
            <div className="mt-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-primary">1. Tus Datos</span>
                <span className="text-sm font-medium text-slate-400">2. Pago</span>
                <span className="text-sm font-medium text-slate-400">3. Confirmación</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/3 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Datos del Comprador</h2>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Nombre Completo</label>
                <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800" placeholder="Ej. Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">RUT</label>
                <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800" placeholder="12345678-9" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Teléfono</label>
                <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800" placeholder="+56 9 1234 5678" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
                <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800" placeholder="juan.perez@email.com" />
              </div>
            </form>
          </div>

          <div className="flex justify-end">
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg flex items-center gap-2 text-lg">
              Continuar al Pago
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Column: Summary */}
        <div className="lg:col-span-4 space-y-6 sticky top-24">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
            <img src={property.image} className="h-48 w-full object-cover" alt="Property" />
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{property.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{property.location}</p>
              <hr className="border-slate-100 dark:border-slate-800 my-4" />
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-sm">
                  <span>Precio Lista</span>
                  <span className="font-medium">UF {property.totalValueUF}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span>A pagar hoy (Reserva)</span>
                  <span className="text-primary">$250.000 CLP</span>
                </div>
                <p className="text-xs text-slate-500 text-center mt-2">Monto descontable del pie inicial.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
