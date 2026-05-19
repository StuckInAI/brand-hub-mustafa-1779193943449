import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 hero-glow noise-bg overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Badge */}
      <div className="mb-6 flex items-center gap-2 bg-brand-900/50 border border-brand-700/40 rounded-full px-4 py-1.5 text-sm text-brand-300">
        <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
        <span>Now with AI-powered workflows</span>
        <ArrowRight size={14} className="text-brand-400" />
      </div>

      {/* Headline */}
      <h1 className="text-center text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl">
        <span className="text-white">Ship faster.</span>
        <br />
        <span className="gradient-text">Collaborate smarter.</span>
        <br />
        <span className="text-white">Win together.</span>
      </h1>

      {/* Sub-headline */}
      <p className="mt-6 text-center text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
        NovaSpark gives modern teams the tools to move at the speed of ideas — AI workflows, real-time collaboration,
        and analytics that actually make sense.
      </p>

      {/* CTA form */}
      <div className="mt-10 w-full max-w-md">
        {submitted ? (
          <div className="text-center bg-brand-900/40 border border-brand-600/40 rounded-xl px-6 py-4">
            <p className="text-brand-300 font-semibold">🎉 You're on the list!</p>
            <p className="text-slate-400 text-sm mt-1">We'll be in touch soon. Check your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/40 transition-all"
            />
            <button
              type="submit"
              className="sm:w-auto w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get started free
              <ArrowRight size={15} />
            </button>
          </form>
        )}
        <p className="mt-3 text-center text-xs text-slate-500">No credit card required · 14-day free trial · Cancel anytime</p>
      </div>

      {/* Social proof */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 items-center">
        <p className="text-slate-500 text-sm">Trusted by teams at</p>
        {['Apexify', 'Loopline', 'Stellarworks', 'Nimbly', 'Fluxcore'].map((name) => (
          <span key={name} className="text-slate-400 font-semibold text-sm opacity-60 hover:opacity-100 transition-opacity">
            {name}
          </span>
        ))}
      </div>

      {/* Hero mockup */}
      <div className="mt-16 w-full max-w-5xl relative">
        <div className="rounded-2xl border border-white/8 bg-[#0f0f1e]/80 backdrop-blur overflow-hidden shadow-2xl card-glow">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <div className="flex-1 mx-4 bg-white/5 rounded-md h-5 text-xs text-slate-500 flex items-center justify-center">
              app.novaspark.io/dashboard
            </div>
          </div>
          {/* Mock dashboard */}
          <div className="p-6 grid grid-cols-12 gap-4 min-h-64">
            {/* Sidebar */}
            <div className="col-span-2 flex flex-col gap-3">
              {['Dashboard', 'Projects', 'Tasks', 'Analytics', 'Team', 'Settings'].map((item, i) => (
                <div
                  key={item}
                  className={clsx(
                    'h-6 rounded-md text-xs flex items-center px-2',
                    i === 0
                      ? 'bg-brand-600/30 text-brand-300'
                      : 'bg-white/4 text-slate-500'
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
            {/* Main content */}
            <div className="col-span-10 grid grid-cols-3 gap-4">
              {/* Stat cards */}
              {[
                { label: 'Velocity', value: '94', delta: '+12%', color: 'text-green-400' },
                { label: 'Open Tasks', value: '38', delta: '-5 today', color: 'text-blue-400' },
                { label: 'Team Score', value: '9.2', delta: '+0.3', color: 'text-purple-400' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/4 rounded-xl p-4 border border-white/5">
                  <p className="text-slate-500 text-xs">{stat.label}</p>
                  <p className="text-white text-2xl font-bold mt-1">{stat.value}</p>
                  <p className={`text-xs mt-1 ${stat.color}`}>{stat.delta}</p>
                </div>
              ))}
              {/* Bar chart mockup */}
              <div className="col-span-2 bg-white/4 rounded-xl p-4 border border-white/5">
                <p className="text-slate-500 text-xs mb-3">Sprint Progress</p>
                <div className="flex items-end gap-2 h-16">
                  {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-brand-600/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              {/* Activity feed */}
              <div className="bg-white/4 rounded-xl p-4 border border-white/5">
                <p className="text-slate-500 text-xs mb-3">Recent Activity</p>
                <div className="flex flex-col gap-2">
                  {['PR merged', 'Task closed', 'Deploy done'].map((a) => (
                    <div key={a} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                      <span className="text-slate-400 text-xs">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Floating play button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-brand-600/90 hover:bg-brand-600 backdrop-blur-sm border border-brand-400/40 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-105">
          <Play size={20} className="text-white ml-1" fill="white" />
        </button>
      </div>
    </section>
  );
}

import clsx from 'clsx';
