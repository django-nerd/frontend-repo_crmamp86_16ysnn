import React from 'react';
import { Shield, Globe, Sparkles, CreditCard, Zap } from 'lucide-react';

const features = [
  {
    icon: <CreditCard className="h-5 w-5 text-violet-700" />,
    title: 'Unified Payments',
    desc: 'Accept all major cards and wallets with one modern API.'
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-700" />,
    title: 'Advanced Risk',
    desc: 'Adaptive fraud protection with machine learning at the edge.'
  },
  {
    icon: <Globe className="h-5 w-5 text-sky-700" />,
    title: 'Global Ready',
    desc: 'Local cards, currencies, and compliance out of the box.'
  },
  {
    icon: <Zap className="h-5 w-5 text-rose-700" />,
    title: 'Fast Payouts',
    desc: 'Settle funds quickly with transparent fees and control.'
  },
  {
    icon: <Sparkles className="h-5 w-5 text-fuchsia-700" />,
    title: 'Delightful UX',
    desc: 'A polished dashboard that makes operations a joy.'
  },
];

const Features = () => {
  return (
    <section id="features" className="relative z-10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to scale</h2>
          <p className="mt-3 text-slate-600">We obsess over reliability and elegance so your team can focus on growth.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-slate-100 bg-gradient-to-b from-rose-50/60 via-sky-50/40 to-violet-50/60 p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-3 inline-flex rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
