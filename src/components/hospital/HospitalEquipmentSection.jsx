import React, { useState } from 'react';
import {
  BedDouble, Ambulance, Activity, FlaskConical,
  Syringe, ShieldCheck, Wind, Stethoscope, Thermometer,
  Package, Wrench, Hospital,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const EQUIPMENT = [
  { sn: 1,  name: 'Hospital Bed',                       qty: '26',       category: 'Patient Care' },
  { sn: 2,  name: 'Stretcher',                           qty: '04',       category: 'Patient Care' },
  { sn: 3,  name: 'Back Rest',                           qty: '02',       category: 'Patient Care' },
  { sn: 4,  name: 'Wheel Chair',                         qty: '04',       category: 'Patient Care' },
  { sn: 5,  name: 'IV Stand',                            qty: '25',       category: 'Patient Care' },
  { sn: 6,  name: 'Bed Pan',                             qty: '30',       category: 'Patient Care' },
  { sn: 7,  name: 'Urine Pots',                          qty: '20',       category: 'Patient Care' },
  { sn: 8,  name: 'Supporting Aids',                     qty: 'Available',category: 'Patient Care' },
  { sn: 9,  name: 'ECG Machine',                         qty: 'Available',category: 'Diagnostics' },
  { sn: 10, name: 'X-Ray Machine',                       qty: 'Available',category: 'Diagnostics' },
  { sn: 11, name: 'X-Ray View Box',                      qty: '06',       category: 'Diagnostics' },
  { sn: 12, name: 'Centrifuge & Microscope',             qty: 'Available',category: 'Diagnostics' },
  { sn: 13, name: 'Glucometer',                          qty: '20',       category: 'Diagnostics' },
  { sn: 14, name: 'Mercury BP Instrument',               qty: '10',       category: 'Diagnostics' },
  { sn: 15, name: 'Digital BP Instrument',               qty: '10',       category: 'Diagnostics' },
  { sn: 16, name: 'Thermometer',                         qty: '05',       category: 'Diagnostics' },
  { sn: 17, name: 'Pulse Oximeter',                      qty: '07',       category: 'Diagnostics' },
  { sn: 18, name: 'ENT Set',                             qty: '04',       category: 'Diagnostics' },
  { sn: 19, name: 'Tuning Fork',                         qty: '05',       category: 'Diagnostics' },
  { sn: 20, name: 'Hammer (Reflex)',                     qty: '05',       category: 'Diagnostics' },
  { sn: 21, name: 'Stethoscope',                         qty: '10',       category: 'Diagnostics' },
  { sn: 22, name: 'Weight Machine',                      qty: '08',       category: 'Diagnostics' },
  { sn: 23, name: 'Pediatric Weight Machine',            qty: 'Available',category: 'Diagnostics' },
  { sn: 24, name: 'Oxygen Cylinder With Mask',           qty: '04',       category: 'Emergency & Respiratory' },
  { sn: 25, name: 'Emergency Drugs',                     qty: 'Available',category: 'Emergency & Respiratory' },
  { sn: 26, name: 'Emergency Medicine Crash Cart',       qty: 'Available',category: 'Emergency & Respiratory' },
  { sn: 27, name: 'Nebulizer Machine',                   qty: '04',       category: 'Emergency & Respiratory' },
  { sn: 28, name: 'Suction Machine',                     qty: '03',       category: 'Emergency & Respiratory' },
  { sn: 29, name: 'Suction Tube',                        qty: '06',       category: 'Emergency & Respiratory' },
  { sn: 30, name: 'OT Table',                            qty: 'Available',category: 'Surgical & OT' },
  { sn: 31, name: 'OT Lamp',                             qty: '02',       category: 'Surgical & OT' },
  { sn: 32, name: 'Anesthesia Trolley',                  qty: 'Available',category: 'Surgical & OT' },
  { sn: 33, name: 'Gynaec Instruments',                  qty: 'Available',category: 'Surgical & OT' },
  { sn: 34, name: 'Surgical Instruments',                qty: 'Available',category: 'Surgical & OT' },
  { sn: 35, name: 'Dressing Trolley',                    qty: '02',       category: 'Surgical & OT' },
  { sn: 36, name: 'Labor Table',                         qty: 'Available',category: 'Surgical & OT' },
  { sn: 37, name: 'Sterilizer',                          qty: '02',       category: 'Sterilisation & Infection Control' },
  { sn: 38, name: 'Autoclave',                           qty: 'Available',category: 'Sterilisation & Infection Control' },
  { sn: 39, name: 'Fumigation Machine',                  qty: 'Available',category: 'Sterilisation & Infection Control' },
  { sn: 40, name: 'BMW Dustbin',                         qty: 'Available',category: 'Sterilisation & Infection Control' },
  { sn: 41, name: 'Nursing Counter',                     qty: '03',       category: 'Ward & Support' },
  { sn: 42, name: 'Infrared Lamp',                       qty: 'Available',category: 'Ward & Support' },
  { sn: 43, name: 'Refrigerator',                        qty: '01',       category: 'Ward & Support' },
];

const CATEGORIES = [
  'All',
  'Patient Care',
  'Diagnostics',
  'Emergency & Respiratory',
  'Surgical & OT',
  'Sterilisation & Infection Control',
  'Ward & Support',
];

const CAT_META = {
  'Patient Care':                    { icon: BedDouble,   accent: T.forest600,  bg: `${T.forest600}12`, border: `${T.forest600}30`, text: T.forest600 },
  'Diagnostics':                     { icon: Activity,    accent: '#2E6A8A',    bg: '#2E6A8A12',        border: '#2E6A8A30',        text: '#2E6A8A' },
  'Emergency & Respiratory':         { icon: Wind,        accent: '#C0392B',    bg: '#C0392B10',        border: '#C0392B28',        text: '#C0392B' },
  'Surgical & OT':                   { icon: Syringe,     accent: '#8A4A6E',    bg: '#8A4A6E12',        border: '#8A4A6E30',        text: '#8A4A6E' },
  'Sterilisation & Infection Control':{ icon: ShieldCheck, accent: T.forest800, bg: `${T.forest800}10`, border: `${T.forest800}28`, text: T.forest800 },
  'Ward & Support':                  { icon: Package,     accent: T.muted500,   bg: `${T.muted500}12`,  border: `${T.muted500}28`,  text: T.muted500 },
};

const STATS = [
  { value: '43',  label: 'Equipment Types' },
  { value: '26',  label: 'Hospital Beds' },
  { value: '20+', label: 'Glucometers' },
  { value: '6',   label: 'Dept. Categories' },
];

const slide = (inView, delay = 0) => ({
  opacity:    inView ? 1 : 0,
  transform:  inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function HospitalEquipmentSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [statsRef, statsInView] = useInView(0.1);
  const [bodyRef,  bodyInView]  = useInView(0.04);
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? EQUIPMENT : EQUIPMENT.filter(e => e.category === active);

  // group by category for the "All" view
  const groups = active === 'All'
    ? CATEGORIES.slice(1).map(cat => ({ cat, items: EQUIPMENT.filter(e => e.category === cat) }))
    : [{ cat: active, items: filtered }];

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 380, background: T.forest800 }}
      >
        <img
          src="/campus/homoepathy.png"
          alt="Amaltas Hospital"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 35%',
            opacity: 0.22,
          }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${T.forest800}EE 0%, ${T.ink900}BB 100%)` }} />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}18 1px, transparent 1px)`,
            backgroundSize: '36px 36px', pointerEvents: 'none',
          }}
        />
        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-28">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}><Eyebrow light>Hospital</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Instruments &{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Equipment</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              A fully equipped hospital infrastructure supporting diagnosis, emergency care,
              surgery, and patient management across all departments.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span><span style={{ color: T.gold600 }}>›</span>
              <span>Hospital</span><span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Instruments & Equipment</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  STATS STRIP  ═══════════════════════ */}
      <section className="py-12" style={{ background: T.gold700 }}>
        <Container>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                style={{
                  opacity: statsInView ? 1 : 0,
                  transform: statsInView ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                }}
              >
                <div className="text-[36px] lg:text-[44px] font-semibold leading-none" style={{ ...fontDisplay, color: T.cream50 }}>{value}</div>
                <div className="mt-1.5 text-[11px] tracking-[0.18em] uppercase" style={{ ...MONO, color: `${T.cream50}AA` }}>{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  MAIN CONTENT  ═════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>

          {/* Header */}
          <div ref={bodyRef} className="mb-10" style={slide(bodyInView, 0)}>
            <Eyebrow>Inventory</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Equipped for every{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>clinical need</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-2xl" style={{ color: T.muted500 }}>
              Our hospital maintains a comprehensive inventory of instruments and equipment
              across all departments — ensuring readiness for routine care, emergencies, and surgery.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10" style={slide(bodyInView, 0.1)}>
            {CATEGORIES.map(cat => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="px-4 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200"
                  style={{
                    background: isActive ? T.forest800 : `${T.ink900}08`,
                    color:      isActive ? T.cream50   : T.muted500,
                    border:     `1px solid ${isActive ? T.forest800 : T.ink900 + '18'}`,
                    cursor: 'pointer', ...fontBody,
                  }}
                >
                  {cat}
                  {cat !== 'All' && (
                    <span
                      className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px]"
                      style={{
                        background: isActive ? `${T.gold100}30` : `${T.ink900}10`,
                        color: isActive ? T.gold100 : T.muted500,
                      }}
                    >
                      {EQUIPMENT.filter(e => e.category === cat).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Category groups */}
          <div className="space-y-10" style={slide(bodyInView, 0.14)}>
            {groups.map(({ cat, items }) => {
              const meta = CAT_META[cat];
              const CatIcon = meta.icon;
              return (
                <div key={cat}>
                  {/* Category heading */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: meta.bg, border: `1px solid ${meta.border}` }}
                    >
                      <CatIcon size={16} strokeWidth={1.8} style={{ color: meta.accent }} />
                    </div>
                    <h3
                      className="text-[16px] font-semibold"
                      style={{ ...fontDisplay, color: T.ink900 }}
                    >
                      {cat}
                    </h3>
                    <span
                      className="text-[11px] px-2 py-0.5 rounded-full"
                      style={{ ...MONO, background: meta.bg, color: meta.text, border: `1px solid ${meta.border}` }}
                    >
                      {items.length} items
                    </span>
                    <div className="flex-1 h-px" style={{ background: `${T.ink900}08` }} />
                  </div>

                  {/* Desktop table */}
                  <div
                    className="hidden lg:block rounded-2xl overflow-hidden"
                    style={{ border: `1px solid ${T.ink900}10`, boxShadow: `0 4px 20px -4px ${T.ink900}08` }}
                  >
                    {/* Head */}
                    <div
                      className="grid px-6 py-3 text-[11px] font-semibold tracking-[0.14em] uppercase"
                      style={{
                        ...MONO,
                        background: T.forest800,
                        color: `${T.cream50}88`,
                        gridTemplateColumns: '3rem 1fr 10rem',
                        gap: '0 1.5rem',
                      }}
                    >
                      <span>No.</span>
                      <span>Instrument / Equipment</span>
                      <span className="text-right">Quantity</span>
                    </div>

                    {/* Rows */}
                    {items.map((item, idx) => (
                      <div
                        key={item.sn}
                        className="grid items-center px-6 py-3.5 transition-colors duration-150"
                        style={{
                          gridTemplateColumns: '3rem 1fr 10rem',
                          gap: '0 1.5rem',
                          background: idx % 2 === 0 ? '#FFFFFF' : `${T.forest800}04`,
                          borderTop: `1px solid ${T.ink900}08`,
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = T.goldFog; }}
                        onMouseLeave={e => { e.currentTarget.style.background = idx % 2 === 0 ? '#FFFFFF' : `${T.forest800}04`; }}
                      >
                        <span className="text-[12px] font-semibold" style={{ ...MONO, color: T.muted500 }}>
                          {String(item.sn).padStart(2, '0')}
                        </span>
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: meta.accent }}
                          />
                          <span className="text-[14px]" style={{ color: T.ink900 }}>{item.name}</span>
                        </div>
                        <div className="text-right">
                          {item.qty === 'Available' ? (
                            <span
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                              style={{ background: `${T.forest600}14`, border: `1px solid ${T.forest600}30`, color: T.forest600 }}
                            >
                              ✓ Available
                            </span>
                          ) : (
                            <span
                              className="inline-flex items-center justify-center w-10 h-7 rounded-lg text-[15px] font-bold"
                              style={{ ...fontDisplay, background: meta.bg, border: `1px solid ${meta.border}`, color: meta.accent }}
                            >
                              {item.qty}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile cards */}
                  <div className="lg:hidden grid sm:grid-cols-2 gap-3">
                    {items.map(item => (
                      <div
                        key={item.sn}
                        className="flex items-center justify-between gap-3 rounded-xl px-4 py-3"
                        style={{
                          background: '#FFFFFF',
                          border: `1px solid ${T.ink900}10`,
                          boxShadow: `0 2px 8px -3px ${T.ink900}08`,
                        }}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-[11px] font-semibold flex-shrink-0" style={{ ...MONO, color: T.muted500 }}>
                            {String(item.sn).padStart(2, '0')}
                          </span>
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: meta.accent }}
                          />
                          <span className="text-[13px] leading-snug" style={{ color: T.ink900 }}>{item.name}</span>
                        </div>
                        {item.qty === 'Available' ? (
                          <span
                            className="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{ background: `${T.forest600}14`, border: `1px solid ${T.forest600}30`, color: T.forest600, ...MONO }}
                          >
                            ✓
                          </span>
                        ) : (
                          <span
                            className="flex-shrink-0 w-9 h-7 rounded-lg flex items-center justify-center text-[14px] font-bold"
                            style={{ ...fontDisplay, background: meta.bg, border: `1px solid ${meta.border}`, color: meta.accent }}
                          >
                            {item.qty}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer count */}
          <p className="mt-8 text-[12px]" style={{ ...MONO, color: T.muted500, letterSpacing: '0.08em' }}>
            Showing {filtered.length} of {EQUIPMENT.length} instruments & equipment
            {active !== 'All' && ` · ${active}`}
          </p>
        </Container>
      </section>

      {/* ═════════════════════  CLOSING STRIP  ════════════════════════ */}
      <section className="py-16 relative overflow-hidden" style={{ background: T.forest800 }}>
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`,
            backgroundSize: '40px 40px', pointerEvents: 'none',
          }}
        />
        <Container className="relative text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}
          >
            <Wrench size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p
            className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            Infrastructure built for{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>every patient need</em>
            {' '}— from bedside to the operating table.
          </p>
          <p className="mt-4 text-[14px]" style={{ color: `${T.cream50}66` }}>
            All equipment maintained and regularly inspected to hospital standards.
          </p>
        </Container>
      </section>
    </>
  );
}
