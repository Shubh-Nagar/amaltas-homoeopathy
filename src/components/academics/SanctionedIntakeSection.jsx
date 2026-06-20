import React from 'react';
import { GraduationCap, TrendingUp } from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const YEARS = [
  {
    year: '2025 – 26',
    level: 'Under Graduate',
    rows: [
      { course: 'BHMS Degree Course', sanctioned: 100 },
    ],
  },
  {
    year: '2024 – 25',
    level: 'Under Graduate',
    rows: [
      { course: 'BHMS Degree Course', sanctioned: 60 },
    ],
  },
];

const slide = (inView, delay = 0) => ({
  opacity:    inView ? 1 : 0,
  transform:  inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});


export default function SanctionedIntakeSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [statsRef, statsInView] = useInView(0.1);
  const [bodyRef,  bodyInView]  = useInView(0.05);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 360, background: T.forest800 }}>
        <img
          src="/campus/homoepathy.png"
          alt="Amaltas Institute"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', opacity: 0.2 }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${T.forest800}EE 0%, ${T.ink900}BB 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}18 1px, transparent 1px)`, backgroundSize: '36px 36px', pointerEvents: 'none' }} />

        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-28">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}><Eyebrow light>Academics</Eyebrow></div>
            <h1
              className="mt-5 text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Sanctioned{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Course Intake</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Official intake capacity for the BHMS Degree Programme —
              as sanctioned by the National Commission for Homoeopathy.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Academics</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Sanctioned Course Intake</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  STATS STRIP  ═══════════════════════ */}
      <section className="py-12" style={{ background: T.gold700 }}>
        <Container>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: 'BHMS',  label: 'Programme Offered' },
              { value: '100',   label: 'Current Intake (2025–26)' },
              { value: '5½',    label: 'Years Duration' },
              { value: 'NCH',   label: 'Sanctioning Authority' },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                style={{
                  opacity:   statsInView ? 1 : 0,
                  transform: statsInView ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                }}
              >
                <div className="text-[34px] lg:text-[44px] font-semibold leading-none" style={{ ...fontDisplay, color: T.cream50 }}>{value}</div>
                <div className="mt-1.5 text-[11px] tracking-[0.18em] uppercase" style={{ ...MONO, color: `${T.cream50}AA` }}>{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  INTAKE TABLES  ════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>

          {/* Header */}
          <div ref={bodyRef} className="mb-14" style={slide(bodyInView, 0)}>
            <Eyebrow>Intake Data</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Year-wise{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>sanctioned capacity</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-2xl" style={{ color: T.muted500 }}>
              The following data reflects the intake capacity sanctioned by the National
              Commission for Homoeopathy (NCH) for each academic year.
            </p>
          </div>

          {/* Year cards side by side */}
          <div className="grid lg:grid-cols-2 gap-8">
            {YEARS.map((yr, yi) => {
              const isLatest = yi === 0;
              return (
                <div
                  key={yr.year}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    border: `1px solid ${isLatest ? T.forest800 + '30' : T.ink900 + '10'}`,
                    boxShadow: isLatest
                      ? `0 8px 32px -8px ${T.forest800}22`
                      : `0 4px 18px -4px ${T.ink900}08`,
                    opacity:   bodyInView ? 1 : 0,
                    transform: bodyInView ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.7s ease ${0.1 * yi}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${0.1 * yi}s`,
                  }}
                >
                  {/* Card header */}
                  <div
                    className="px-6 py-5 flex items-start justify-between"
                    style={{
                      background: isLatest ? T.forest800 : `${T.forest800}08`,
                      borderBottom: `1px solid ${isLatest ? 'transparent' : T.ink900 + '0C'}`,
                    }}
                  >
                    <div>
                      <p
                        className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-1"
                        style={{ ...MONO, color: isLatest ? `${T.gold100}99` : T.muted500 }}
                      >
                        {yr.level}
                      </p>
                      <h3
                        className="text-[22px] font-semibold"
                        style={{ ...fontDisplay, color: isLatest ? '#FFFFFF' : T.ink900 }}
                      >
                        Academic Year
                      </h3>
                      <p
                        className="text-[28px] font-semibold leading-tight mt-0.5"
                        style={{ ...fontDisplay, color: isLatest ? T.gold100 : T.gold700 }}
                      >
                        {yr.year}
                      </p>
                    </div>
                    {isLatest && (
                      <span
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
                        style={{ ...MONO, background: `${T.gold100}20`, border: `1px solid ${T.gold100}35`, color: T.gold100 }}
                      >
                        CURRENT
                      </span>
                    )}
                  </div>

                  {/* Table */}
                  <div style={{ background: '#FFFFFF' }}>
                    {/* Table head */}
                    <div
                      className="grid px-6 py-3 text-[10px] font-semibold tracking-[0.14em] uppercase"
                      style={{
                        ...MONO,
                        background: `${T.forest800}06`,
                        borderBottom: `1px solid ${T.ink900}08`,
                        gridTemplateColumns: '2rem 1fr 9rem',
                        gap: '0 1rem',
                        color: T.muted500,
                      }}
                    >
                      <span>No.</span>
                      <span>Course</span>
                      <span className="text-center">Sanctioned</span>
                    </div>

                    {/* Rows */}
                    {yr.rows.map((row, ri) => (
                      <div
                        key={ri}
                        className="grid items-center px-6 py-5"
                        style={{
                          gridTemplateColumns: '2rem 1fr 9rem',
                          gap: '0 1rem',
                          borderBottom: `1px solid ${T.ink900}06`,
                        }}
                      >
                        <span className="text-[12px]" style={{ ...MONO, color: T.muted500 }}>01</span>
                        <div>
                          <p className="text-[15px] font-semibold" style={{ ...fontDisplay, color: T.ink900 }}>{row.course}</p>
                          <p className="text-[12px] mt-0.5" style={{ color: T.muted500 }}>Under Graduate · 5½ Year Programme</p>
                        </div>
                        <div className="text-center">
                          <span
                            className="inline-flex items-center justify-center w-14 h-10 rounded-xl text-[22px] font-bold"
                            style={{ ...fontDisplay, background: `${T.forest800}10`, color: T.forest800 }}
                          >
                            {row.sanctioned}
                          </span>
                          <p className="mt-1 text-[10px]" style={{ ...MONO, color: T.muted500 }}>SEATS</p>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              );
            })}
          </div>

          {/* NCH note */}
          <div
            className="mt-10 flex items-start gap-4 rounded-2xl p-5"
            style={{
              background: `${T.forest800}06`,
              border: `1px solid ${T.forest800}12`,
              ...slide(bodyInView, 0.3),
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${T.gold600}18`, border: `1px solid ${T.gold600}30` }}
            >
              <GraduationCap size={18} strokeWidth={1.8} style={{ color: T.gold700 }} />
            </div>
            <div>
              <p className="text-[14px] font-semibold mb-1" style={{ color: T.ink900 }}>
                Sanctioned by National Commission for Homoeopathy (NCH)
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: T.muted500 }}>
                Intake capacity for the BHMS Degree Programme is officially sanctioned by
                the NCH, New Delhi, under the Ministry of AYUSH, Government of India.
                The programme is affiliated with Madhya Pradesh Medical Science University (MPMSU), Jabalpur.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ═════════════════════  CLOSING STRIP  ════════════════════════ */}
      <section className="py-16 relative overflow-hidden" style={{ background: T.forest800 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <Container className="relative text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}>
            <TrendingUp size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug" style={{ ...fontDisplay, color: '#FFFFFF' }}>
            Growing intake, growing{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>impact</em>
            {' '}— from 60 to 100 seats in one year.
          </p>
          <p className="mt-4 text-[14px]" style={{ color: `${T.cream50}66` }}>
            Amaltas Institute of Homoeopathy · NCH Recognised · MPMSU Affiliated
          </p>
        </Container>
      </section>
    </>
  );
}
