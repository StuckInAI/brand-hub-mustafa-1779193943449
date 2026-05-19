import { Zap, Users, BarChart2, Shield, Puzzle, Sparkles } from 'lucide-react';
import { features } from '@/lib/data';
import clsx from 'clsx';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={22} />,
  Users: <Users size={22} />,
  BarChart2: <BarChart2 size={22} />,
  Shield: <Shield size={22} />,
  Puzzle: <Puzzle size={22} />,
  Sparkles: <Sparkles size={22} />,
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Everything your team needs
            <br />
            <span className="gradient-text">in one place</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            NovaSpark was built for the way modern teams actually work — fast, distributed, and outcome-driven.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={clsx(
                'rounded-2xl p-6 border border-white/8 bg-white/3 card-glow transition-all duration-300 hover:-translate-y-1 cursor-default',
                idx === 0 && 'lg:col-span-1'
              )}
            >
              <div className="w-11 h-11 rounded-xl bg-brand-600/20 border border-brand-600/30 flex items-center justify-center text-brand-400 mb-4">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
