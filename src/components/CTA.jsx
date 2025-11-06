import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-violet-50 via-rose-50 to-sky-50 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-xl backdrop-blur">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-emerald-700">
          <Shield className="h-4 w-4" />
          <span className="text-xs font-medium">Bank‑grade security</span>
        </div>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Ready to build a delightful payments experience?
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-slate-600">
          Join thousands of modern brands using PastelPay to accept payments, fight fraud, and grow faster.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            Create account <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10">
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
