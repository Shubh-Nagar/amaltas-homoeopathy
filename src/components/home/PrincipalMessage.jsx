import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import { LEADERSHIP } from '../../data/navigation';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const principal = LEADERSHIP.find((l) => l.id === 'principal');

// ─── Word-by-word reveal ──────────────────────────────────────────────
const WordReveal = ({ text, inView, baseDelay = 0 }) => {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display:    'inline-block',
            opacity:    inView ? 1 : 0,
            transform:  inView ? 'translateY(0)' : 'translateY(10px)',
            filter:     inView ? 'blur(0)' : 'blur(3px)',
            transition: `opacity 0.38s ease ${baseDelay + i * 0.035}s,
                         transform 0.38s ease ${baseDelay + i * 0.035}s,
                         filter 0.38s ease ${baseDelay + i * 0.035}s`,
            marginRight: '0.28em',
          }}
        >
          {word}
        </span>
      ))}
    </>
  );
};

// ─── Parallax portrait ────────────────────────────────────────────────
const ParallaxPortrait = ({ src, alt }) => {
  const ref       = useRef(null);
  const glowRef   = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const container = ref.current?.parentElement;
    if (!container) return;

    const onMove = (e) => {
      const r  = container.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width  - 0.5) * 14;
      const ny = ((e.clientY - r.top)  / r.height - 0.5) * 14;
      if (ref.current)     ref.current.style.transform     = `translate(${nx * 0.25}px, ${ny * 0.25}px)`;
      if (glowRef.current) glowRef.current.style.transform = `translate(${nx * 0.5}px, ${ny * 0.5}px)`;
    };

    const onLeave = () => {
      if (ref.current)     ref.current.style.transform     = '';
      if (glowRef.current) glowRef.current.style.transform = '';
    };

    container.addEventListener('mousemove', onMove, { passive: true });
    container.addEventListener('mouseleave', onLeave);
    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="relative" style={{ transition: 'transform 0.05s linear' }}>
      {/* Glow ellipse behind portrait */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:   `radial-gradient(ellipse at center, ${T.gold600}35, transparent 70%)`,
          transform:    'scale(1.12)',
          borderRadius: 28,
          transition:   'transform 0.12s ease',
        }}
      />
      <div
        ref={ref}
        className="relative aspect-[4/5] rounded-[28px] overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${T.gold600}, ${T.gold700})`,
          boxShadow:  '0 36px 60px -20px rgba(0,0,0,0.5)',
          transition: 'transform 0.12s ease',
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top"
          draggable="false"
        />
      </div>
    </div>
  );
};


// ─── Section ──────────────────────────────────────────────────────────
const PrincipalMessage = () => {
  const [sectionRef, inView] = useInView(0.08);

  const fadeSide = (direction = 'left', delay = 0) => ({
    opacity:    inView ? 1 : 0,
    transform:  inView ? 'translateX(0)' : `translateX(${direction === 'left' ? -32 : 32}px)`,
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      id="principal"
      ref={sectionRef}
      className="py-24 lg:py-28 relative overflow-hidden"
      style={{ background: T.forest800, color: T.cream50 }}
    >
      {/* Ambient botanical bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Cpath d='M 150 20 Q 145 120 170 200 Q 190 280 160 360' stroke='%23FAF6EE' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize:   '300px 400px',
          backgroundRepeat: 'repeat',
        }}
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* ── Portrait ── */}
          <div
            className="lg:col-span-4"
            style={fadeSide('left', 0)}
          >
            <div className="relative max-w-[320px] mx-auto lg:mx-0">
              <ParallaxPortrait
                src={principal.image}
                alt={`${principal.name}, ${principal.role}`}
              />

              {/* Floating name card */}
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-3 max-w-[270px]"
                style={{
                  background: T.cream50,
                  color:      T.ink900,
                  boxShadow:  '0 16px 36px -10px rgba(0,0,0,0.35)',
                }}
              >
                <div style={{ ...MONO, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.muted500 }}>
                  {principal.role}
                </div>
                <div style={{ ...fontDisplay, fontSize: 15, fontWeight: 600, marginTop: 3, lineHeight: 1.3 }}>
                  {principal.name}
                </div>
              </div>
            </div>
          </div>

          {/* ── Message ── */}
          <div
            className="lg:col-span-8 lg:pl-10"
            style={fadeSide('right', 0.1)}
          >
            <Eyebrow light>Principal's Message</Eyebrow>

            {/* Opening quote mark */}
            <div
              className="mt-6"
              style={{ ...fontDisplay, fontSize: 96, lineHeight: 0.6, color: T.gold600, opacity: 0.6, userSelect: 'none' }}
            >
              "
            </div>

            {/* Word-by-word quote */}
            <blockquote
              className="mt-5 text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.45] font-medium tracking-tight"
              style={{ ...fontDisplay, color: T.cream50 }}
            >
              <WordReveal text={principal.quote} inView={inView} baseDelay={0.2} />
            </blockquote>

            {/* Signature + link */}
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="block w-10 h-px" style={{ background: T.gold600 }} />
                <a
                  href="#principal-full"
                  className="text-[13px] tracking-[0.2em] uppercase font-medium flex items-center gap-2 transition-opacity hover:opacity-75"
                  style={{ color: T.gold100 }}
                >
                  Read full message
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default PrincipalMessage;
