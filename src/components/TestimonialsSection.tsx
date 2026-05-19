import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-white/1">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Loved by teams
            <br />
            <span className="gradient-text">around the world</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 border border-white/8 bg-white/3 card-glow transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-600/40 border border-brand-600/30 flex items-center justify-center text-brand-300 text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
