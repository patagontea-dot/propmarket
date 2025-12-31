
import React from 'react';

const Sell: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Vende tu Propiedad</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Publica tu activo en el mercado secundario de PROPMARKET.</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium">
          <span className="material-symbols-outlined text-lg">verified</span>
          Propietario Verificado
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">domain</span>
              1. Selecciona el activo
            </h2>
            <select className="block w-full rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700 py-3">
              <option>Bodega #45 - Av. Providencia 1234, Santiago</option>
              <option>Estacionamiento #12 - Edificio Centro</option>
            </select>
          </section>

          <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">payments</span>
              2. Precio y Finanzas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1">Precio de Venta (UF)</label>
                <input className="w-full rounded-lg dark:bg-slate-700 border-slate-200" placeholder="0.00" type="number" />
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 flex flex-col gap-2">
                <div className="flex justify-between text-sm"><span>Comisión (2%)</span><span>- UF 20</span></div>
                <div className="flex justify-between text-lg font-black text-green-600"><span>Tu Ganancia</span><span>UF 580</span></div>
              </div>
            </div>
          </section>

          <div className="flex justify-end gap-4">
            <button className="px-6 py-3 rounded-lg border border-slate-300 font-semibold hover:bg-slate-50">Guardar Borrador</button>
            <button className="px-8 py-3 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 shadow-lg">Publicar Propiedad</button>
          </div>
        </div>

        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 sticky top-24">
            <h3 className="text-sm font-bold text-slate-500 uppercase mb-4">Vista Previa</h3>
            <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
              <img src="https://picsum.photos/400/300?random=15" className="h-40 w-full object-cover" alt="Preview" />
              <div className="p-4">
                <h4 className="font-bold">Bodega en Providencia</h4>
                <p className="text-primary font-bold">UF 1.000</p>
                <div className="w-full bg-slate-100 h-1.5 mt-4 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[80%]"></div>
                </div>
                <p className="text-xs text-center text-slate-400 mt-1">80% completo</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sell;
