import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="font-inter text-slate-900">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <footer className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} PastelPay. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
