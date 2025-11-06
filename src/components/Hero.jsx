import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, CreditCard, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-rose-50 via-sky-50 to-violet-50">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Simple Top Bar */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/70 p-2 shadow-sm backdrop-blur">
              <CreditCard className="h-5 w-5 text-violet-600" />
            </div>
            <span className="font-semibold tracking-tight text-slate-800">PastelPay</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="rounded-full bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800">Sign in</a>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2 md:py-24">
          <div className="rounded-3xl bg-white/70 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100/80 px-3 py-1 text-violet-700">
              <Shield className="h-4 w-4" />
              <span className="text-xs font-medium">Secure fintech infrastructure</span>
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Modern payments for growing brands
            </h1>
            <p className="mt-4 text-slate-600">
              Accept cards globally, reduce risk, and scale faster with our elegant, developer‑friendly platform. Designed with a soft pastel aesthetic that feels delightful.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500"
              >
                <Rocket className="h-4 w-4" />
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 backdrop-blur transition hover:bg-white"
              >
                Learn More
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                PCI-DSS Level 1
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500" />
                99.99% uptime
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="pointer-events-none absolute -inset-10 rounded-[2rem] bg-gradient-to-br from-rose-200/40 via-sky-200/30 to-violet-200/40 blur-2xl" />
            <div className="relative rounded-[2rem] bg-white/60 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop"
                alt="Pastel fintech cards"
                className="h-[420px] w-full rounded-2xl object-cover"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-600">
                <div className="rounded-lg bg-rose-50 px-3 py-2">Instant onboarding</div>
                <div className="rounded-lg bg-sky-50 px-3 py-2">Global cards</div>
                <div className="rounded-lg bg-violet-50 px-3 py-2">Chargeback guard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
