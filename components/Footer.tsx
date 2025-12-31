
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/auth') return null;

  return (
    <footer className="bg-white dark:bg-[#0d1219] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <div className="size-6 flex items-center justify-center bg-primary rounded text-white">
              <span className="material-symbols-outlined text-sm">apartment</span>
            </div>
            <h2 className="text-lg font-bold">PROPMARKET</h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Facilitamos el acceso a la inversión inmobiliaria en Chile mediante tecnología y financiamiento directo.
          </p>
          <div className="flex gap-4 mt-2">
            <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">mail</span></a>
            <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">call</span></a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-4">Plataforma</h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
            <li><Link className="hover:text-primary transition-colors" to="/catalog">Catálogo de Activos</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/catalog">Marketplace Secundario</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/catalog">Simulador de Crédito</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/sell">Vender Propiedad</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-4">Recursos</h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
            <li><Link className="hover:text-primary transition-colors" to="/help">Blog de Inversión</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/help">Guía para Inversionistas</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/help">Centro de Ayuda</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/help">Preguntas Frecuentes</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
            <li><a className="hover:text-primary transition-colors" href="#">Términos y Condiciones</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Políticas de Privacidad</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Información Legal</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400 text-center md:text-left">
          © 2024 PropMarket SpA. Todos los derechos reservados. Santiago, Chile.
        </p>
        <p className="text-xs text-slate-400 text-center md:text-right">
          Las rentabilidades indicadas son estimadas y pueden variar según condiciones del mercado.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
