import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';
import clsx from 'clsx';

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="py-24 px-4 bg-white/1">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Common <span className="gradient-text">questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/8 bg-white/3 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => toggle(i)}
              >
                <span className="text-white font-semibold text-sm pr-4">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={clsx(
                    'text-slate-400 shrink-0 transition-transform duration-300',
                    open === i && 'rotate-180'
                  )}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
