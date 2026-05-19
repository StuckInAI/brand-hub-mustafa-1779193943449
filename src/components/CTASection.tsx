import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-3xl border border-brand-700/40 bg-brand-900/25 px-8 py-16 overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(99,102,241,0.25),transparent)] pointer-events-none" />

          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-4">Get started today</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Ready to move at
            <br />
            <span className="gradient-text">the speed of ideas?</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Join 50,000+ teams that already ship faster with NovaSpark. Start your free trial — no credit card needed.
          </p>

          {submitted ? (
            <div className="inline-block bg-brand-800/50 border border-brand-600/40 rounded-xl px-8 py-4">
              <p className="text-brand-300 font-semibold text-lg">🎉 You're on the list!</p>
              <p className="text-slate-400 text-sm mt-1">We'll reach out shortly. Welcome aboard!</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/40 transition-all"
              />
              <button
                type="submit"
                className="bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Start free trial
                <ArrowRight size={15} />
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-slate-500">14-day free trial · No credit card · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
