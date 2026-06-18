import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import { CAMPUS_SLIDES } from '../../data/navigation';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const AUTOPLAY_MS = 5500;

const FacilitiesShowcase = () => {
  const [index,  setIndex]  = useState(0);
  const [paused, setPaused] = useState(false);
  const total = CAMPUS_SLIDES.length;

  const [headerRef, headerInView] = useInView(0.2);
  const [sliderRef, sliderInView] = useInView(0.1);

  const go   = useCallback((n) => setIndex(((n % total) + total) % total), [total]);
  const next = useCallback(() => go(index + 1), [index, go]);
  const prev = useCallback(() => go(index - 1), [index, go]);

  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, next]);

  return (
    <section id="facilities" className="py-24 lg:py-28" style={{ background: T.cream50 }}>
      <Container>

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
          style={{
            opacity:    headerInView ? 1 : 0,
            transform:  headerInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div className="max-w-2xl">
            <Eyebrow>Inside Amaltas</Eyebrow>
            <h2
              style={{ ...fontDisplay, color: T.ink900 }}
              className="mt-5 text-[36px] lg:text-[48px] leading-[1.1] tracking-tight font-semibold"
            >
              A campus{' '}
              <em style={{ color: T.gold700 }}>built for the work</em>{' '}
              we ask of it.
            </h2>
          </div>
          <p
            className="text-[17px] leading-[1.7] max-w-md"
            style={{ color: T.muted500 }}
          >
            Purpose-designed laboratories, an anatomy museum, clinical training halls, and our
            own teaching hospital — students engage with practice from day one.
          </p>
        </div>

        {/* ── Slider ── */}
        <div
          ref={sliderRef}
          style={{
            opacity:    sliderInView ? 1 : 0,
            transform:  sliderInView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
            transition: 'opacity 0.9s ease 0.1s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s',
          }}
        >
          <div
            className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2/1] rounded-3xl overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Campus facilities"
            style={{
              background: T.forest800,
              boxShadow:  `0 32px 64px -24px ${T.forest800}55`,
            }}
          >
            {/* Slides — crossfade */}
            {CAMPUS_SLIDES.map((s, i) => (
              <div
                key={s.image}
                className="absolute inset-0 transition-opacity duration-700 ease-out"
                style={{
                  opacity:       i === index ? 1 : 0,
                  pointerEvents: i === index ? 'auto' : 'none',
                }}
                aria-hidden={i !== index}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}: ${s.title}`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  draggable="false"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  style={{
                    transform:  i === index ? 'scale(1.03)' : 'scale(1)',
                    transition: 'transform 6s ease',
                  }}
                />

                {/* Legibility gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(13,31,24,0.92) 0%, rgba(13,31,24,0.5) 28%, rgba(13,31,24,0) 60%)',
                  }}
                />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
                  <div className="max-w-2xl">
                    <div
                      className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-3 flex items-center gap-3"
                      style={{ color: T.gold100, fontFamily: "'DM Mono', monospace" }}
                    >
                      <span style={{ color: T.gold600 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="opacity-50">/ {String(total).padStart(2, '0')}</span>
                      <span className="w-6 h-px" style={{ background: T.gold600 }} />
                      <span>{s.tag}</span>
                    </div>
                    <h3
                      style={{ ...fontDisplay, color: T.cream50 }}
                      className="text-[26px] sm:text-[32px] lg:text-[44px] font-semibold leading-[1.08] tracking-tight"
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-3 text-[14px] sm:text-[15px] leading-[1.6] max-w-xl"
                      style={{ color: `${T.cream50}DD` }}
                    >
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Progress bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] z-10"
              style={{ background: 'rgba(250,246,238,0.14)' }}
            >
              <div
                key={index}
                className="h-full origin-left"
                style={{
                  background:          T.gold600,
                  width:               '100%',
                  transform:           'scaleX(0)',
                  animation:           `amaltasSlideProgress ${AUTOPLAY_MS}ms linear forwards`,
                  animationPlayState:  paused ? 'paused' : 'running',
                }}
              />
            </div>

            {/* Prev / next */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 lg:px-6 pointer-events-none">
              {[
                { fn: prev, label: 'Previous slide', Icon: ChevronLeft,  side: 'hover:-translate-x-0.5' },
                { fn: next, label: 'Next slide',     Icon: ChevronRight, side: 'hover:translate-x-0.5'  },
              ].map(({ fn, label, Icon, side }) => (
                <button
                  key={label}
                  onClick={fn}
                  aria-label={label}
                  className={`pointer-events-auto w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${side} focus:outline-none focus-visible:ring-2`}
                  style={{
                    background:     'rgba(250,246,238,0.92)',
                    color:          T.ink900,
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <Icon size={20} strokeWidth={2.2} />
                </button>
              ))}
            </div>

            {/* Dot nav */}
            <div className="absolute bottom-5 lg:bottom-7 right-6 lg:right-12 flex items-center gap-2 z-10">
              {CAMPUS_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className="transition-all duration-500 rounded-full focus:outline-none focus-visible:ring-2"
                  style={{
                    width:      i === index ? 32 : 8,
                    height:     8,
                    background: i === index ? T.gold600 : 'rgba(250,246,238,0.38)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FacilitiesShowcase;
