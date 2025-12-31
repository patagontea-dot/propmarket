
import React from 'react';
import { Link } from 'react-router-dom';

const Auth: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <header className="p-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">apartment</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">PROPMARKET</span>
        </Link>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 flex-grow w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Bienvenido a PROPMARKET</h1>
          <p className="text-slate-600 dark:text-slate-300">Gestiona tus inversiones y descubre oportunidades únicas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">login</span>
              <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
            </div>
            <form className="space-y-5">
              <input className="w-full rounded-lg border-slate-200 dark:bg-slate-800" placeholder="Correo electrónico" type="email" />
              <input className="w-full rounded-lg border-slate-200 dark:bg-slate-800" placeholder="Contraseña" type="password" />
              <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600">Ingresar</button>
            </form>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-green-600">person_add</span>
              <h2 className="text-2xl font-bold">Crear Cuenta</h2>
            </div>
            <div className="mb-6 space-y-3">
              <p className="text-sm font-bold uppercase text-slate-500">Beneficios:</p>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2"><span className="text-green-500">✓</span> Crédito directo en minutos.</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Acceso a documentación legal.</li>
              </ul>
            </div>
            <form className="space-y-4">
              <input className="w-full rounded-lg border-slate-200 dark:bg-slate-900" placeholder="Nombre completo" />
              <input className="w-full rounded-lg border-slate-200 dark:bg-slate-900" placeholder="Correo electrónico" type="email" />
              <button className="w-full py-3 bg-white dark:bg-slate-700 border border-slate-300 font-bold rounded-lg">Registrarse</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
