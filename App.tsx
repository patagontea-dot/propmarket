
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Details from './pages/Details';
import Checkout from './pages/Checkout';
import Sell from './pages/Sell';
import Help from './pages/Help';
import Auth from './pages/Auth';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/help" element={<Help />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
