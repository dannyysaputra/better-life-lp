'use client';
import { copy } from '@/lib/content/copy';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/motion/Reveal';
import { Check } from 'lucide-react';
import { scrollToAnchor } from '@/lib/utils/scrollToAnchor';

export function HeroSection() {
  const { hero } = copy.landing;

  return (
    <section id='top' className='relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden scroll-mt-20'>
        <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none' />
        <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 md:gap-20 items-center'>
          <div className='space-y-8'>
            <Reveal>
              <h1 className='text-5xl md:text-7xl font-serif font-bold text-ink leading-[1.1] tracking-tight'>
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className='text-xl md:text-2xl text-slate leading-relaxed max-w-lg'>
                {hero.subheadline}
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button 
                    href='/#contact' 
                    size='lg'
                    onClick={(e) => { e.preventDefault(); scrollToAnchor('contact', { focus: 'input[name="name"]' }); }}
                >
                  {copy.nav.cta}
                </Button>
                <Button 
                    variant='secondary' 
                    size='lg'
                    onClick={(e) => { e.preventDefault(); scrollToAnchor('how-it-works'); }}
                >
                  {copy.nav.secondaryCta}
                </Button>
              </div>
              {hero.micro && <p className='mt-4 text-sm text-muted'>{hero.micro}</p>}
            </Reveal>

            <Reveal delay={0.3}>
              <ul className='space-y-3 mt-4'>
                {hero.bullets.map((bullet, i) => (
                  <li key={i} className='flex items-center gap-3 text-slate font-medium'>
                    <span className='flex items-center justify-center w-6 h-6 rounded-full bg-saffron/20 text-saffron'>
                      <Check className='w-4 h-4' />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.2} className='relative hidden md:block'>
            <div className='relative w-full aspect-square max-w-[500px] mx-auto'>
                 <div className='absolute inset-0 bg-gradient-to-tr from-terracotta/10 to-saffron/10 rounded-[40px] rotate-3' />
                 <div className='absolute inset-0 bg-white/50 backdrop-blur-sm rounded-[40px] -rotate-3 border border-mist shadow-lg flex items-center justify-center'>
                    <div className='w-3/4 h-3/4 bg-pearl rounded-3xl border border-mist/50 relative overflow-hidden flex flex-col items-center justify-center gap-4'>
                        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,var(--color-terracotta),transparent)]' />
                         <div className='w-20 h-20 rounded-2xl bg-terracotta/20' />
                         <div className='w-32 h-2 bg-slate/10 rounded-full' />
                         <div className='w-24 h-2 bg-slate/10 rounded-full' />
                    </div>
                 </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
