import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import { LEADERSHIP } from '../../data/navigation';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

// ─── 3-D tilt hook ───────────────────────────────────────────────────
const useTilt = (intensity = 9) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let hovering = false;
    let raf;

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      if (!hovering && Math.abs(currentX) < 0.01 && Math.abs(currentY) < 0.01) return;
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);
      const z = hovering ? 12 : 0;
      el.style.transform = `perspective(900px) rotateX(${currentY}deg) rotateY(${currentX}deg) translateZ(${z}px)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const r  = el.getBoundingClientRect();
      const nx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
      const ny = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
      targetX =  nx * intensity;
      targetY = -ny * intensity;
    };

    const onEnter = () => {
      hovering = true;
      cancelAnimationFrame(raf);
      tick();
    };

    const onLeave = () => {
      hovering = false;
      targetX  = 0;
      targetY  = 0;
      // Bug fix: cancel the existing RAF before starting the return-to-flat loop,
      // otherwise two concurrent loops fight over currentX/currentY/style.transform.
      cancelAnimationFrame(raf);
      tick();
    };

    el.addEventListener('mousemove',  onMove);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove',  onMove);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [intensity]);

  return ref;
};

// ─── Leader card ─────────────────────────────────────────────────────
const LeaderCard = ({ leader, inView, delay = 0 }) => {
  const tiltRef = useTilt(8);

  return (
    <div
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      <a
        ref={tiltRef}
        href={leader.href}
        className="group relative block rounded-3xl overflow-hidden"
        style={{
          background: T.cream50,
          border:     `1px solid ${T.ink900}0E`,
          boxShadow:  '0 8px 30px -12px rgba(13,31,24,0.12)',
          willChange: 'transform',
          transition: 'box-shadow 0.35s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = `0 28px 60px -20px ${T.forest800}45`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 8px 30px -12px rgba(13,31,24,0.12)';
        }}
      >
        {/* Portrait — gold halo ring is a box-shadow OUTSIDE the portrait,
            not overlaid on the face. It reveals as the card enters view. */}
        <div
          className="relative aspect-[4/5] overflow-hidden"
          style={{
            background: `linear-gradient(160deg, ${T.forest600}18, ${T.gold600}10)`,
            // Animated gold ring that frames the portrait from outside
            boxShadow: inView
              ? `inset 0 0 0 2px ${T.gold600}50`
              : `inset 0 0 0 0px transparent`,
            transition: `box-shadow 1.4s cubic-bezier(0.22,1,0.36,1) ${delay + 0.3}s`,
          }}
        >
          <img
            src={leader.image}
            alt={`${leader.name}, ${leader.role}`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            draggable="false"
          />
          {/* Legibility gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(13,31,24,0.58) 0%, transparent 48%)' }}
          />

          {/* Role badge */}
          <span
            className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] tracking-[0.15em] uppercase font-semibold"
            style={{ background: T.gold600, color: T.ink900 }}
          >
            {leader.role}
          </span>
        </div>

        {/* Text */}
        <div className="p-6 lg:p-7">
          <h3
            className="text-[20px] lg:text-[23px] font-semibold leading-tight tracking-tight whitespace-nowrap"
            style={{ ...fontDisplay, color: T.ink900 }}
          >
            {leader.name}
          </h3>
          <p className="mt-3 text-[14px] leading-[1.65]" style={{ color: T.muted500 }}>
            {leader.blurb}
          </p>

          <div
            className="mt-6 pt-5 flex items-center justify-between"
            style={{ borderTop: `1px solid ${T.ink900}0E` }}
          >
            <span
              className="text-[12px] tracking-[0.2em] uppercase font-medium"
              style={{ color: T.gold700 }}
            >
              Read Message
            </span>
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45"
              style={{ background: T.gold100, color: T.forest800 }}
            >
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

// ─── Connecting constellation line (desktop) ─────────────────────────
// Rendered AFTER the card grid so it paints on top of the cards.
// SVG uses a fixed viewBox (0 0 1000 4) with preserveAspectRatio="none"
// so it stretches to any width; animateMotion path uses the same 1000-unit
// coordinate space — "100%" is not valid SVG path syntax and breaks the dot.
const ConstellationLine = ({ inView }) => (
  <div
    className="hidden lg:block absolute top-[22%] left-[16.5%] right-[16.5%] pointer-events-none"
    style={{ zIndex: 10 }}
    aria-hidden="true"
  >
    <svg
      width="100%"
      height="4"
      viewBox="0 0 1000 4"
      preserveAspectRatio="none"
    >
      <line
        x1="0" y1="2"
        x2="1000" y2="2"
        stroke={`${T.gold600}30`}
        strokeWidth="1"
        strokeDasharray="6 10"
      />
      {inView && (
        <circle r="3" fill={T.gold600} opacity="0.75">
          <animateMotion
            dur="3.5s"
            repeatCount="indefinite"
            path="M 0 2 L 1000 2"
          />
        </circle>
      )}
    </svg>
  </div>
);

// ─── Leadership section ───────────────────────────────────────────────
const Leadership = () => {
  const [sectionRef, sectionInView] = useInView(0.08);
  const [headerRef,  headerInView]  = useInView(0.15);

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="py-24 lg:py-28 relative overflow-hidden"
      style={{ background: T.cream50 }}
    >
      {/* Soft radial glow */}
      <div
        className="absolute -bottom-40 -left-40 pointer-events-none"
        style={{
          width:        480,
          height:       480,
          borderRadius: '50%',
          background:   `radial-gradient(circle, ${T.forest600}12 0%, transparent 68%)`,
        }}
      />

      <Container className="relative">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl">
          <div
            style={{
              opacity:    headerInView ? 1 : 0,
              transform:  headerInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <Eyebrow>Our Leadership</Eyebrow>
            <h2
              className="mt-5 text-[36px] lg:text-[48px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Guided by{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>experienced hands</em>,
              rooted in institutional vision.
            </h2>
            <p className="mt-5 text-[18px] leading-[1.75] max-w-xl" style={{ color: T.muted500 }}>
              The institute's direction is shaped by leaders who bring decades of combined
              experience across medical administration, clinical practice, and academic governance.
            </p>
          </div>
        </div>

        {/* Cards + constellation — ConstellationLine MUST come after the grid
            so it is painted on top of the cards (later DOM = higher paint order). */}
        <div className="mt-14 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {LEADERSHIP.map((leader, idx) => (
              <LeaderCard
                key={leader.id}
                leader={leader}
                inView={sectionInView}
                delay={idx * 0.14}
              />
            ))}
          </div>

          <ConstellationLine inView={sectionInView} />
        </div>
      </Container>
    </section>
  );
};

export default Leadership;
