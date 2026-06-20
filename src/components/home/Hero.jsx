import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

// ─── Canvas particle system ──────────────────────────────────────────
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const mouse     = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf, particles = [], frame = 0;

    const initParticles = (w, h) => {
      const count = Math.min(Math.floor((w * h) / 5500), 480);
      particles = Array.from({ length: count }, () => ({
        x:           Math.random() * w,
        y:           Math.random() * h,
        size:        Math.random() * 2.0 + 0.4,
        speedX:      (Math.random() - 0.5) * 0.28,
        speedY:      (Math.random() - 0.5) * 0.28,
        baseOpacity: Math.random() * 0.45 + 0.12,
        color:       Math.random() > 0.58 ? T.gold600 : T.biolum,
        ps:          Math.random() * 0.014 + 0.006, // pulse speed
        po:          Math.random() * Math.PI * 2,   // pulse offset
      }));
    };

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      initParticles(w, h);
    };

    const draw = () => {
      frame++;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        // Cursor repel
        const dx   = p.x - mx;
        const dy   = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 125 && dist > 0) {
          const force = (125 - dist) / 125;
          p.x += (dx / dist) * force * 0.9;
          p.y += (dy / dist) * force * 0.9;
        }

        // Wrap edges
        if (p.x < 0)  p.x = w;
        if (p.x > w)  p.x = 0;
        if (p.y < 0)  p.y = h;
        if (p.y > h)  p.y = 0;

        const op = p.baseOpacity + Math.sin(frame * p.ps + p.po) * 0.1;
        ctx.globalAlpha = Math.max(0.04, Math.min(0.72, op));
        ctx.fillStyle   = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouse.current = { x: -9999, y: -9999 }; };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    canvas.addEventListener('mousemove',  onMouseMove,  { passive: true });
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener('mousemove',  onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      style={{ pointerEvents: 'auto' }}
    />
  );
};

// ─── Trust badge ─────────────────────────────────────────────────────
const TrustBadge = ({ code, label, color = T.biolum, bg, border, delay = 0 }) => (
  <div
    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium"
    style={{
      background:  bg,
      border:      `1px solid ${border}`,
      color,
      animationFillMode: 'both',
    }}
  >
    <span
      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
      style={{
        background:        color,
        animation:         `pulseDot 2.4s ease-in-out infinite`,
        animationDelay:    `${delay}s`,
      }}
    />
    <span style={{ ...MONO, fontSize: 11 }}>{code}</span>
    <span style={{ color: `${T.cream50}65` }}>{label}</span>
  </div>
);

// ─── Hero ─────────────────────────────────────────────────────────────
const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  const arrive = (delay = 0) => ({
    opacity:    visible ? 1 : 0,
    transform:  visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s,
                 transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden"
      style={{
        minHeight:  '100svh',
        background: T.void, // fallback while video loads
      }}
    >
      {/* ── Layer 0: background campus video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/campus/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
      />

      {/* ── Layer 1: cinematic dark overlay ── keeps the dark forest-green
          mood and ensures text remains readable over any video content. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            to right,
            rgba(6,15,11,0.78)  0%,
            rgba(6,15,11,0.70)  30%,
            rgba(13,43,33,0.42) 58%,
            rgba(13,31,24,0.20) 100%
          )`,
        }}
      />

      {/* ── Layer 2: particle canvas ── */}
      <ParticleCanvas />

      {/* Glow accents */}
      <div
        className="absolute -top-40 -right-40 pointer-events-none"
        style={{
          width:      640,
          height:     640,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${T.gold600}1A 0%, transparent 68%)`,
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 pointer-events-none"
        style={{
          width:      520,
          height:     520,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${T.forest600}28 0%, transparent 68%)`,
        }}
      />

      {/* Main content */}
      <Container className="relative flex-1 grid lg:grid-cols-12 gap-8 lg:gap-12 py-20 lg:py-28 items-center">

        {/* ── LEFT — copy panel ── */}
        <div className="lg:col-span-6">
          <div
            className="rounded-[28px] p-0 lg:p-4"
            style={arrive(0)}
          >
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase"
              style={{ ...MONO, color: `${T.gold100}BB` }}
            >
              <span className="inline-block w-6 h-px" style={{ background: T.gold600, opacity: 0.7 }} />
              Estd. 2016 · Amaltas Group · Dewas, M.P.
            </div>

            {/* Headline */}
            <h1
              className="mt-5 text-[44px] sm:text-[56px] lg:text-[70px] leading-[1.02] tracking-[-0.025em] font-semibold"
              style={{ ...fontDisplay, color: T.cream50 }}
            >
              Where{' '}
              <em style={{ color: T.gold600, fontStyle: 'italic' }}>healing</em>
              {' '}begins.
            </h1>

            {/* Body */}
            <p
              className="mt-5 text-[21px] leading-[1.82] max-w-[480px]"
              style={{ color: `${T.cream50}BB` }}
            >
              The Amaltas Institute of Homoeopathy nurtures a new generation of physicians
              grounded in the{' '}
              <em style={{ color: T.gold100, fontStyle: 'normal', fontWeight: 500 }}>
                Similia Similibus Curantur
              </em>{' '}
              principle — combining rigorous clinical training with compassionate,
              research-driven practice.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[14px] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:  T.gold600,
                  color:       T.ink900,
                  boxShadow:   `0 4px 20px ${T.gold600}40`,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = T.gold700; }}
                onMouseLeave={e => { e.currentTarget.style.background = T.gold600; }}
              >
                Begin Your BHMS Journey
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>

              <a
                href="#about"
                className="group relative overflow-hidden inline-flex items-center gap-2 px-7 py-4 rounded-full text-[14px] font-medium tracking-wide transition-colors duration-300"
                style={{
                  background:   'transparent',
                  color:        T.cream50,
                  border:       `1px solid ${T.cream50}28`,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = T.ink900; e.currentTarget.style.borderColor = T.gold600; }}
                onMouseLeave={e => { e.currentTarget.style.color = T.cream50; e.currentTarget.style.borderColor = `${T.cream50}28`; }}
              >
                {/* Sliding yellow fill */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"
                  style={{ background: `linear-gradient(90deg, ${T.gold600}, ${T.gold700})` }}
                />
                <span className="relative z-10">Explore the Institute</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <TrustBadge code="ISO"  label="Certified"    color={T.biolum} bg={`${T.forest600}55`} border={`${T.forest600}80`} delay={0} />
              <TrustBadge code="NCH"  label="Recognised"  color={T.biolum} bg={`${T.forest600}55`} border={`${T.forest600}80`} delay={0.4} />
              <TrustBadge code="NABH" label="Hospital"    color={T.biolum} bg={`${T.forest600}55`} border={`${T.forest600}80`} delay={0.8} />
              <TrustBadge code="2026" label="Admissions Open" color={T.gold100} bg={`${T.gold600}33`} border={`${T.gold600}66`} delay={0.3} />
            </div>
          </div>
        </div>

        {/* ── RIGHT — visual card ── */}
        <div
          className="lg:col-span-6"
          style={arrive(0.28)}
        >
          <div className="relative aspect-[4/3] lg:aspect-[16/10] w-full">

            {/* Main campus photo card */}
            <div
              className="absolute inset-0 rounded-[28px] overflow-hidden"
              style={{
                border:    `1px solid ${T.forest600}40`,
                boxShadow: `0 40px 80px -25px rgba(0,0,0,0.65)`,
              }}
            >
              <img
                src="/campus/homoepathy.png"
                alt="Amaltas Homoeopathy Campus, Dewas"
                className="w-full h-full object-cover object-center"
                draggable="false"
              />
              {/* Bottom gradient for badge legibility */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(6,15,11,0.72) 0%, rgba(6,15,11,0.1) 55%, transparent 100%)',
                }}
              />
              {/* Caption */}
              <div
                className="absolute bottom-6 left-6 right-6"
                style={{ ...MONO, fontSize: 10, letterSpacing: '0.22em', color: T.gold100, opacity: 0.85, textTransform: 'uppercase' }}
              >
                {/* Amaltas Institute of Homoeopathy · Dewas */}
              </div>
            </div>

            {/* Floating intake card */}
            <div
              className="absolute -left-6 lg:-left-14 bottom-4 rounded-2xl p-5 w-[185px]"
              style={{
                background: T.cream50,
                boxShadow:  '0 24px 50px -15px rgba(0,0,0,0.45)',
                animation:  'float 4.5s ease-in-out infinite',
              }}
            >
              <div style={{ ...MONO, fontSize: 10, letterSpacing: '0.18em', color: T.muted500, textTransform: 'uppercase' }}>
                Annual Intake
              </div>
              <div style={{ ...fontDisplay, color: T.ink900, fontSize: 44, fontWeight: 700, lineHeight: 1.05, marginTop: 6 }}>
                100
              </div>
              <div style={{ color: T.muted500, fontSize: 12, marginTop: 6, lineHeight: 1.55 }}>
                BHMS seats — sanctioned
              </div>
            </div>

            {/* Admissions live badge */}
            <div
              className="absolute -top-3 right-3 rounded-full px-4 py-2 flex items-center gap-2 text-[12px] font-semibold tracking-wide"
              style={{
                background: T.gold600,
                color:      T.ink900,
                boxShadow:  `0 8px 24px -6px ${T.gold700}80`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-current"
                style={{ animation: 'pulseDot 1.6s ease-in-out infinite' }}
              />
              Live: 2026–27 Admissions
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div
        className="relative z-10 flex flex-col items-center pb-10 gap-2"
        style={arrive(0.6)}
      >
        <div style={{ ...MONO, fontSize: 10, letterSpacing: '0.28em', color: `${T.cream50}45`, textTransform: 'uppercase' }}>
          Scroll
        </div>
        <div
          style={{
            width:        1,
            height:       48,
            background:   `${T.cream50}12`,
            position:     'relative',
            overflow:     'hidden',
            borderRadius: 1,
          }}
        >
          <div
            style={{
              position:   'absolute',
              top:        0,
              left:       0,
              right:      0,
              height:     '55%',
              background: `linear-gradient(to bottom, transparent, ${T.gold600})`,
              animation:  'scrollBounce 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
