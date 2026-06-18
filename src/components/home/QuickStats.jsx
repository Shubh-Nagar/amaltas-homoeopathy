import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Stethoscope, Users, BookOpen } from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const STATS = [
  { icon: GraduationCap, raw: 100, suffix: '', label: 'Annual BHMS Seats',    delay: 0 },
  { icon: Stethoscope,   raw: 13,  suffix: '',  label: 'Clinical Departments', delay: 0.12 },
  { icon: Users,         raw: 100,  suffix: '+', label: 'Faculty & Staff',       delay: 0.24 },
  { icon: BookOpen,      raw: 42,  suffix: '',  label: 'Acres of Campus',       delay: 0.36 },
];

// ─── Animated counter card ────────────────────────────────────────────
const StatCard = ({ icon: Icon, raw, suffix, label, delay }) => {
  const [count,  setCount]  = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();

        // Stagger the counter start
        setTimeout(() => {
          const start     = performance.now();
          const duration  = 1700;

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 3); // cubic ease-out
            setCount(Math.floor(eased * raw));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(raw);
          };

          requestAnimationFrame(tick);
        }, delay * 1000);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [raw, delay]);

  return (
    <div
      ref={ref}
      className="p-8 lg:p-10 flex flex-col gap-4 relative overflow-hidden group"
      style={{
        borderRight: 'inherit',
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background:  `radial-gradient(ellipse at center, ${T.gold600}10, transparent 70%)`,
          transition:  'opacity 0.5s ease',
        }}
      />

      {/* Icon */}
      <Icon size={24} strokeWidth={1.7} style={{ color: T.gold600 }} />

      {/* Animated count */}
      <div
        style={{ ...fontDisplay, color: T.cream50, fontSize: 52, fontWeight: 700, lineHeight: 1 }}
      >
        {count}
        <span style={{ color: T.gold600 }}>{suffix}</span>
      </div>

      {/* Label */}
      <div style={{ ...MONO, color: `${T.cream50}55`, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        {label}
      </div>

      {/* Decorative tick mark */}
      <div
        className="absolute top-6 right-6 opacity-0 group-hover:opacity-100"
        style={{
          ...MONO,
          fontSize:   10,
          color:      T.gold600,
          transition: 'opacity 0.3s ease',
          letterSpacing: '0.1em',
        }}
      >
        {raw}{suffix}
      </div>
    </div>
  );
};

// ─── QuickStats section ───────────────────────────────────────────────
const QuickStats = () => {
  const [headerRef, headerInView] = useInView(0.2);

  return (
    <section
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{ background: T.void }}
    >
      {/* Graduation photo — dimmed background that gives the numbers human meaning */}
      <img
        src="/campus/435A3291.JPG"
        alt=""
        aria-hidden="true"
        style={{
          position:       'absolute',
          inset:          0,
          width:          '100%',
          height:         '100%',
          objectFit:      'cover',
          objectPosition: 'center top',
          opacity:        0.10,
          pointerEvents:  'none',
          userSelect:     'none',
        }}
        draggable="false"
      />
      {/* Extra overlay so the photo never competes with the numbers */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          inset:      0,
          background: `linear-gradient(to right, ${T.void} 0%, transparent 40%, transparent 60%, ${T.void} 100%)`,
          pointerEvents: 'none',
        }}
      />
      <Container className="relative z-10">
        {/* Section header */}
        <div
          ref={headerRef}
          className="text-center mb-14"
          style={{
            opacity:    headerInView ? 1 : 0,
            transform:  headerInView ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-medium"
            style={{ ...MONO, color: T.gold700 }}
          >
            <span className="inline-block w-6 h-px" style={{ background: T.gold600 }} />
            By the Numbers
            <span className="inline-block w-6 h-px" style={{ background: T.gold600 }} />
          </div>
          <h2
            className="mt-4 text-[32px] lg:text-[44px] leading-tight tracking-tight font-semibold"
            style={{ fontFamily: fontDisplay.fontFamily, color: T.cream50 }}
          >
            An institution built on{' '}
            <em style={{ color: T.gold600, fontStyle: 'italic' }}>evidence</em>.
          </h2>
        </div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden"
          style={{ border: `1px solid ${T.cream50}0A` }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                borderRight: i < STATS.length - 1 ? `1px solid ${T.cream50}09` : 'none',
              }}
            >
              <StatCard {...s} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default QuickStats;
