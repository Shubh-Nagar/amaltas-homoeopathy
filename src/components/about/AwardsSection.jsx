import React from 'react';
import {
  ShieldCheck, Trophy,
  Landmark, GraduationCap,
  CalendarDays, Building2, Leaf,
} from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const AWARD_IMAGES = [
  '/awards/a1.png',
  '/awards/a2.png',
  '/awards/a3.png',
  '/awards/a4.png',
  '/awards/a5.jpeg',
  '/awards/a6.jpeg',
];

const RECOGNITIONS = [
  {
    icon: ShieldCheck,
    code: 'NCH',
    title: 'National Commission for Homoeopathy',
    body: 'Formally recognised by the NCH, New Delhi — the apex statutory body for homoeopathic medical education in India under the Ministry of AYUSH, Government of India.',
    color: T.forest800,
  },
  {
    icon: Landmark,
    code: 'MPMSU',
    title: 'MP Medical Science University',
    body: 'Affiliated with Madhya Pradesh Medical Science University, Jabalpur — the degree-granting authority for all BHMS students enrolled at Amaltas Institute.',
    color: T.gold700,
  },
  {
    icon: Building2,
    code: 'AYUSH',
    title: 'Ministry of AYUSH',
    body: 'Operating under the framework of the Ministry of AYUSH, Government of India — ensuring our standards align with national policy for traditional and alternative medicine.',
    color: T.forest800,
  },
];

const MILESTONES = [
  { year: '2020', label: 'Institute established in Bangar, Dewas' },
  { year: '2020', label: 'Teaching hospital begins outpatient services' },
  { year: '2021', label: 'First BHMS batch enrolled' },
  { year: '2021', label: 'NCH recognition granted' },
  { year: '2022', label: 'First community health camp conducted' },
  { year: '2023', label: '50+ health camps milestone reached' },
  { year: '2024', label: '10,000+ patients treated at teaching hospital' },
  { year: '2025', label: 'Research cell formally established' },
];

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity: inView ? 1 : 0,
  transform: inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left' ? 'translateX(-32px)'
    : dir === 'right' ? 'translateX(32px)'
    : 'translateY(28px)',
  transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function AwardsSection() {
  const [heroRef,   heroInView]   = useInView(0.08);
  const [recogRef,  recogInView]  = useInView(0.06);
  const [awardsRef, awardsInView] = useInView(0.06);
  const [mileRef,   mileInView]   = useInView(0.06);
  const [closeRef,  closeInView]  = useInView(0.08);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 440, background: T.ink900 }}
      >
        <img
          src="/campus/2U8A7507.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 40%',
            opacity: 0.16,
          }}
          draggable="false"
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(145deg, ${T.ink900}F4 0%, ${T.forest800}D0 100%)`,
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}13 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />

        {/* Trophy silhouette — decorative large icon */}
        <div
          style={{
            position: 'absolute', right: '8%', top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0.04,
            pointerEvents: 'none',
          }}
        >
          <Trophy size={280} strokeWidth={0.6} color={T.gold100} />
        </div>

        {/* Arcs */}
        <div style={{ position: 'absolute', top: -80, left: -80, width: 380, height: 380, borderRadius: '50%', border: `1px solid ${T.gold600}18`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, right: -60, width: 280, height: 280, borderRadius: '50%', border: `1px solid ${T.gold600}10`, pointerEvents: 'none' }} />

        <Container className="relative flex flex-col items-center justify-center text-center py-24 lg:py-32">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}>
              <Eyebrow light>About the Institution</Eyebrow>
            </div>
            <h1
              className="mt-5 text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Awards &{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Recognition</em>
            </h1>
            <p
              className="mt-5 text-[17px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: `${T.cream50}AA`, ...slide(heroInView, 0.2) }}
            >
              The honours, accreditations, and milestones that mark Amaltas
              Institute's journey — from its founding in 2020 to its growing
              reputation as a centre of excellence in homoeopathic medicine
              and community healthcare.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[12px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}77`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>About</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Awards &amp; Recognition</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          OFFICIAL RECOGNITIONS
      ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: T.cream50 }}>
        <Container>
          <div ref={recogRef} className="text-center mb-14" style={slide(recogInView, 0)}>
            <Eyebrow>Official Recognitions</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.12] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Accredited by India's{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>highest authorities</em>
            </h2>
            <p
              className="mt-4 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: T.muted500 }}
            >
              Amaltas holds recognition from the national statutory and affiliating
              bodies that regulate homoeopathic medical education in India.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {RECOGNITIONS.map(({ icon: Icon, code, title, body, color }, i) => (
              <div
                key={code}
                className="rounded-2xl overflow-hidden"
                style={{
                  border: `1px solid ${T.ink900}0E`,
                  boxShadow: `0 8px 28px -8px ${T.ink900}10`,
                  opacity: recogInView ? 1 : 0,
                  transform: recogInView ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`,
                }}
              >
                {/* Top colour band */}
                <div
                  className="px-6 pt-7 pb-5 flex items-center gap-4"
                  style={{ background: color }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
                  >
                    <Icon size={22} strokeWidth={1.8} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ ...MONO, fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: 3 }}>
                      {code}
                    </div>
                    <div className="text-[15px] font-semibold leading-snug" style={{ ...fontDisplay, color: '#FFFFFF' }}>
                      {title}
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="px-6 py-5" style={{ background: T.cream50 }}>
                  <p className="text-[14px] leading-[1.8]" style={{ color: T.muted500 }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          AWARDS GRID
      ═══════════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{
          background: `${T.forest800}07`,
          borderTop: `1px solid ${T.forest800}0F`,
          borderBottom: `1px solid ${T.forest800}0F`,
        }}
      >
        <Container>
          <div ref={awardsRef} className="text-center mb-14" style={slide(awardsInView, 0)}>
            <Eyebrow>Awards &amp; Honours</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.12] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Recognised for{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>excellence</em>
              {' '}and service
            </h2>
            <p className="mt-3 text-[14px]" style={{ ...MONO, color: T.muted500, letterSpacing: '0.06em' }}>
              Content will be updated as awards are confirmed
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARD_IMAGES.map((src, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden"
                style={{
                  background: T.cream50,
                  border: `1px solid ${T.ink900}0D`,
                  boxShadow: `0 4px 18px -4px ${T.ink900}07`,
                  opacity: awardsInView ? 1 : 0,
                  transform: awardsInView ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.7s ease ${0.06 + i * 0.09}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${0.06 + i * 0.09}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 12px 36px -8px ${T.ink900}14`;
                  e.currentTarget.style.borderColor = `${T.gold600}3A`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = `0 4px 18px -4px ${T.ink900}07`;
                  e.currentTarget.style.borderColor = `${T.ink900}0D`;
                }}
              >
                <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
                  <img
                    src={src}
                    alt={`Amaltas Award ${i + 1}`}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                      transition: 'transform 0.6s ease',
                    }}
                    draggable="false"
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          MILESTONES TIMELINE
      ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={mileRef} className="text-center mb-14" style={slide(mileInView, 0)}>
            <Eyebrow>Our Journey</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.12] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Milestones since{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>2020</em>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {MILESTONES.map(({ year, label }, i) => {
              const isLast = i === MILESTONES.length - 1;
              return (
                <div
                  key={i}
                  className="flex gap-5"
                  style={{
                    opacity: mileInView ? 1 : 0,
                    transform: mileInView ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.65s ease ${i * 0.08}s, transform 0.65s ease ${i * 0.08}s`,
                  }}
                >
                  {/* Spine */}
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: 40 }}>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                      style={{ background: T.gold100, border: `2px solid ${T.gold600}`, color: T.forest800 }}
                    >
                      <CalendarDays size={14} strokeWidth={2} />
                    </div>
                    {!isLast && (
                      <div
                        className="flex-1 w-px mt-1"
                        style={{ background: `${T.gold600}30`, minHeight: 32 }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 pt-0.5">
                    <span
                      className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                      style={{ ...MONO, color: T.gold700 }}
                    >
                      {year}
                    </span>
                    <p className="mt-1 text-[15px] leading-relaxed" style={{ color: T.ink900 }}>
                      {label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          CLOSING MANIFESTO
      ═══════════════════════════════════════════════ */}
      <section
        ref={closeRef}
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: T.forest800 }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`,
            backgroundSize: '42px 42px',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'absolute', top: -140, right: -140, width: 500, height: 500, borderRadius: '50%', border: `1px solid ${T.gold600}14`, pointerEvents: 'none' }} />

        <Container className="relative text-center">
          <div style={slide(closeInView, 0)}>
            <Eyebrow light>Every Year, A Higher Bar</Eyebrow>
          </div>
          <h2
            className="mt-5 text-[24px] sm:text-[30px] lg:text-[38px] leading-[1.25] font-semibold max-w-3xl mx-auto"
            style={{ ...fontDisplay, color: '#FFFFFF', ...slide(closeInView, 0.12) }}
          >
            Recognition is not the goal —{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>excellence</em>{' '}
            is. The awards that follow are simply its reflection.
          </h2>
          <p
            className="mt-6 text-[15px] leading-relaxed max-w-lg mx-auto"
            style={{ color: `${T.cream50}88`, ...slide(closeInView, 0.22) }}
          >
            Amaltas Institute of Homoeopathy, Hospital &amp; Research Centre —
            committed to raising the standard of homoeopathic education and
            community healthcare in Madhya Pradesh, one year at a time.
          </p>

          <div
            className="mt-12 flex items-center justify-center gap-10 sm:gap-16"
            style={slide(closeInView, 0.3)}
          >
            {[
              [ShieldCheck,    'Accredited'],
              [GraduationCap,  'Excellence'],
              [Leaf,           'Community'],
            ].map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}2C` }}
                >
                  <Icon size={20} strokeWidth={1.6} style={{ color: T.gold100 }} />
                </div>
                <span style={{ ...MONO, fontSize: 11, letterSpacing: '0.16em', color: `${T.cream50}77`, textTransform: 'uppercase' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
