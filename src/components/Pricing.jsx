import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    sub: 'For side projects and trials',
    features: [
      'No monthly fees',
      '2.9% + 30¢ per transaction',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Start for free',
    featured: false,
    color: 'from-rose-100 to-rose-50',
  },
  {
    name: 'Growth',
    price: '$49/mo',
    sub: 'For startups scaling revenue',
    features: [
      'Lower processing fees',
      'Advanced risk tools',
      'Premium analytics',
      'Priority support',
    ],
    cta: 'Choose Growth',
    featured: true,
    color: 'from-violet-100 to-sky-50',
  },
  {
    name: 'Scale',
    price: 'Custom',
    sub: 'For high-volume businesses',
    features: [
      'Interchange++ pricing',
      'Dedicated success manager',
      'SLAs and compliance',
      'Custom integrations',
    ],
    cta: 'Contact sales',
    featured: false,
    color: 'from-sky-100 to-emerald-50',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-white to-rose-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Only pay for what you use. No hidden fees. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-3xl bg-gradient-to-b ${tier.color} p-1 shadow-lg`}
            >
              <div className={`h-full rounded-[22px] bg-white p-6 ${tier.featured ? 'ring-2 ring-violet-500' : 'ring-1 ring-black/5'}`}>
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                    <p className="text-sm text-slate-600">{tier.sub}</p>
                  </div>
                  {tier.featured && (
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">Popular</span>
                  )}
                </div>
                <div className="mt-6 text-3xl font-bold text-slate-900">{tier.price}</div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-emerald-600" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${tier.featured ? 'bg-violet-600 text-white hover:bg-violet-500' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                >
                  {tier.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-slate-500">
          Pricing shown for illustration. Final rates may vary by region and industry.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
