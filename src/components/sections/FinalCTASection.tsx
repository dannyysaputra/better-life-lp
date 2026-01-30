"use client";
import { copy } from '@/lib/content/copy';
import { Reveal } from '@/components/motion/Reveal';
import { LeadForm } from '@/components/forms/LeadForm';
import { Suspense } from 'react';

export function FinalCTASection() {
  const { finalCta } = copy.landing;

  return (
    <section id='contact' className='py-24 bg-gradient-to-br from-terracotta/5 to-pearl scroll-mt-20'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <div className='text-center mb-12'>
            <Reveal>
                <h2 className='text-4xl font-serif font-bold text-ink mb-4'>{finalCta.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
                <p className='text-xl text-slate'>{finalCta.body}</p>
            </Reveal>
        </div>

        <Reveal delay={0.2} className='bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-mist'>
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-slate">Loading form...</div>}>
                <LeadForm />
            </Suspense>
            <p className='mt-6 text-center text-sm text-muted'>{finalCta.trust}</p>
        </Reveal>
      </div>
    </section>
  );
}