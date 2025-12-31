
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isAuth = location.pathname === '/auth';

  if (isAuth) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
            <span className="material-symbols-outlined text-[20px]">apartment</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">PROPMARKET</h2>
        </Link>
        
        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-6">
            <Link className="text-sm font-medium hover:text-primary transition-colors text-slate-700 dark:text-slate-300" to="/catalog">Catálogo</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors text-slate-700 dark:text-slate-300" to="/sell">Vender</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors text-slate-700 dark:text-slate-300" to="/help">Ayuda</Link>
          </nav>
          <div className="flex gap-3">
            <Link to="/auth" className="flex h-10 items-center justify-center rounded-lg px-5 bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-bold text-slate-900 dark:text-white transition-colors">
              Ingresar
            </Link>
            <Link to="/auth" className="flex h-10 items-center justify-center rounded-lg px-5 bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-lg shadow-blue-500/30 transition-all">
              Registrarse
            </Link>
          </div>
        </div>
        
        <button className="lg:hidden p-2 text-gray-600 dark:text-gray-300">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
