import { Check } from 'lucide-react';
import { pricingPlans } from '@/lib/data';
import clsx from 'clsx';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Simple, transparent
            <br />
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            No hidden fees. No surprises. Pick the plan that fits your team and scale as you grow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'rounded-2xl p-7 border flex flex-col transition-all duration-300',
                plan.highlighted
                  ? 'border-brand-500/60 bg-brand-900/30 shadow-[0_0_40px_rgba(99,102,241,0.18)] scale-[1.02]'
                  : 'border-white/8 bg-white/3 card-glow'
              )}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="mb-4 self-start">
                  <span className="text-xs font-bold bg-brand-600 text-white px-3 py-1 rounded-full">Most Popular</span>
                </div>
              )}

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-slate-400 text-sm mb-1.5">{plan.period}</span>
              </div>
              <p className="mt-2 text-slate-400 text-sm">{plan.description}</p>

              <ul className="mt-6 flex flex-col gap-3 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check size={16} className="text-brand-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={clsx(
                  'mt-8 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200',
                  plan.highlighted
                    ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/20'
                    : 'bg-white/8 hover:bg-white/12 text-white border border-white/10'
                )}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          All plans include a 14-day money-back guarantee. Questions?{' '}
          <a href="mailto:hello@novaspark.io" className="text-brand-400 hover:text-brand-300 underline underline-offset-2">
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
