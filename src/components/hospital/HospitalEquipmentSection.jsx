import React, { useState } from 'react';
import {
  BedDouble, Activity, FlaskConical,
  Syringe, ShieldCheck, Wind, Stethoscope,
  Package, Wrench, Microscope, ScanLine, Zap,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const EQUIPMENT = [
  // Patient Care
  { sn: 1,  name: 'Iron Beds (Simple, Surgical & Paediatric)', qty: '50',       category: 'Patient Care' },
  { sn: 2,  name: 'Hospital Cots',                              qty: '300',      category: 'Patient Care' },
  { sn: 3,  name: 'Paediatric Cots',                           qty: '30',       category: 'Patient Care' },
  { sn: 4,  name: 'Patient Beds with Side Rails',               qty: '10',       category: 'Patient Care' },
  { sn: 5,  name: 'Stretcher / Patient Trolley',                qty: '04',       category: 'Patient Care' },
  { sn: 6,  name: 'Wheel Chair',                                qty: '02',       category: 'Patient Care' },
  { sn: 7,  name: 'IV Stands',                                  qty: '50',       category: 'Patient Care' },
  { sn: 8,  name: 'Bed Pans',                                   qty: '10',       category: 'Patient Care' },
  { sn: 9,  name: 'Urinals (Male & Female)',                    qty: '50',       category: 'Patient Care' },
  { sn: 10, name: 'Backrest',                                   qty: '08',       category: 'Patient Care' },
  { sn: 11, name: 'Kidney Trays',                               qty: '50',       category: 'Patient Care' },
  { sn: 12, name: 'Patient Lockers',                            qty: '50',       category: 'Patient Care' },
  { sn: 13, name: 'Patient Side Tables',                        qty: '50',       category: 'Patient Care' },
  { sn: 14, name: 'Hot Water Bags',                             qty: '08',       category: 'Patient Care' },
  { sn: 15, name: 'Ice Bags',                                   qty: '08',       category: 'Patient Care' },
  { sn: 16, name: 'Medicine Trolley',                           qty: '04',       category: 'Patient Care' },
  // Diagnostics
  { sn: 17, name: 'Blood Pressure Apparatus (Mercury)',         qty: '04',       category: 'Diagnostics' },
  { sn: 18, name: 'Sphygmomanometer (Digital / Aneroid)',       qty: '08',       category: 'Diagnostics' },
  { sn: 19, name: 'Stethoscope',                                qty: '10',       category: 'Diagnostics' },
  { sn: 20, name: 'Thermometer (Non-Mercury)',                  qty: '08',       category: 'Diagnostics' },
  { sn: 21, name: 'Weighing Machine',                           qty: '08',       category: 'Diagnostics' },
  { sn: 22, name: 'Pulse Oximeter',                             qty: '07',       category: 'Diagnostics' },
  { sn: 23, name: 'Glucometer',                                 qty: '08',       category: 'Diagnostics' },
  { sn: 24, name: 'ECG Machine',                                qty: 'Available',category: 'Diagnostics' },
  { sn: 25, name: 'ENT Set',                                    qty: '04',       category: 'Diagnostics' },
  { sn: 26, name: 'Tuning Fork',                                qty: '05',       category: 'Diagnostics' },
  { sn: 27, name: 'Reflex Hammer',                              qty: '05',       category: 'Diagnostics' },
  { sn: 28, name: 'X-Ray View Box',                             qty: '08',       category: 'Diagnostics' },
  { sn: 29, name: 'Examination Table',                          qty: '04',       category: 'Diagnostics' },
  // Laboratory
  { sn: 30, name: 'Binocular Microscope',                       qty: '03',       category: 'Laboratory' },
  { sn: 31, name: 'Biochemistry Analyzer',                      qty: '01',       category: 'Laboratory' },
  { sn: 32, name: 'Hematology Analyzer / Cell Counter',         qty: '01',       category: 'Laboratory' },
  { sn: 33, name: 'Semi Auto Analyzer',                         qty: '01',       category: 'Laboratory' },
  { sn: 34, name: 'Centrifuge Machine',                         qty: '01',       category: 'Laboratory' },
  { sn: 35, name: 'Electrolyte Analyzer',                       qty: '01',       category: 'Laboratory' },
  { sn: 36, name: 'Urine Analyzer',                             qty: '01',       category: 'Laboratory' },
  { sn: 37, name: 'Haemoglobinometer',                          qty: '01',       category: 'Laboratory' },
  { sn: 38, name: 'HbA1c Machine',                              qty: '01',       category: 'Laboratory' },
  { sn: 39, name: 'Electric Colorimeter',                       qty: '01',       category: 'Laboratory' },
  { sn: 40, name: 'Flame Photometer',                           qty: '01',       category: 'Laboratory' },
  { sn: 41, name: 'ESR Stand with Tubes',                       qty: '05',       category: 'Laboratory' },
  { sn: 42, name: 'Chemical & Simple Balances',                 qty: '02',       category: 'Laboratory' },
  { sn: 43, name: 'Rotor / Shaker',                             qty: '01',       category: 'Laboratory' },
  { sn: 44, name: 'Water Bath',                                 qty: 'Available',category: 'Laboratory' },
  { sn: 45, name: 'Lab Incubator',                              qty: 'Available',category: 'Laboratory' },
  { sn: 46, name: 'Micro Pipette Set',                          qty: 'Available',category: 'Laboratory' },
  // Emergency & Respiratory
  { sn: 47, name: 'Emergency Resuscitation Kit',                qty: '01',       category: 'Emergency & Respiratory' },
  { sn: 48, name: 'Crash-Card Trolley',                         qty: '01',       category: 'Emergency & Respiratory' },
  { sn: 49, name: 'Portable Defibrillator',                     qty: '01',       category: 'Emergency & Respiratory' },
  { sn: 50, name: 'Ambu Bag',                                   qty: '07',       category: 'Emergency & Respiratory' },
  { sn: 51, name: 'Laryngoscope with Cell',                     qty: '01',       category: 'Emergency & Respiratory' },
  { sn: 52, name: 'Endotracheal Tube Sets',                     qty: 'Available',category: 'Emergency & Respiratory' },
  { sn: 53, name: 'Oxygen Cylinder with Spanner & Mask',        qty: '06',       category: 'Emergency & Respiratory' },
  { sn: 54, name: 'Suction Apparatus (Electrical)',             qty: '02',       category: 'Emergency & Respiratory' },
  { sn: 55, name: 'Nebulizer Machine',                          qty: '04',       category: 'Emergency & Respiratory' },
  { sn: 56, name: 'Multi-Parameter Monitor',                    qty: 'Available',category: 'Emergency & Respiratory' },
  { sn: 57, name: 'Emergency Drugs (Full Set)',                 qty: 'Available',category: 'Emergency & Respiratory' },
  // Surgical & OT
  { sn: 58, name: 'Operation Table (Hydraulic Minor)',          qty: '01',       category: 'Surgical & OT' },
  { sn: 59, name: 'OT Shadowless Spotlight (Ceiling)',          qty: '01',       category: 'Surgical & OT' },
  { sn: 60, name: 'Shadowless Lamp (Stand Model)',              qty: '01',       category: 'Surgical & OT' },
  { sn: 61, name: 'General Surgical Instrument Set',            qty: 'Available',category: 'Surgical & OT' },
  { sn: 62, name: 'Gynaecological Instruments Set',             qty: 'Available',category: 'Surgical & OT' },
  { sn: 63, name: 'Instrument Trolley',                         qty: '04',       category: 'Surgical & OT' },
  { sn: 64, name: 'Instrument Trays (Various Sizes)',           qty: '14',       category: 'Surgical & OT' },
  { sn: 65, name: 'Dressing Trolley',                           qty: '04',       category: 'Surgical & OT' },
  { sn: 66, name: 'Diathermy Machine (Electric Cautery)',       qty: '01',       category: 'Surgical & OT' },
  { sn: 67, name: "Anesthesia Trolley / Boyle's Apparatus",    qty: '01',       category: 'Surgical & OT' },
  { sn: 68, name: "Anesthetic Laryngoscope (Magill's)",        qty: '02',       category: 'Surgical & OT' },
  { sn: 69, name: "Foley's Catheter",                           qty: '05',       category: 'Surgical & OT' },
  { sn: 70, name: 'Suturing Set',                               qty: 'Available',category: 'Surgical & OT' },
  { sn: 71, name: 'Labour Table',                               qty: 'Available',category: 'Surgical & OT' },
  { sn: 72, name: "CO2 Cylinder (Laparoscope)",                 qty: '01',       category: 'Surgical & OT' },
  // Imaging
  { sn: 73, name: 'Digital X-Ray Machine (300 MA)',             qty: '01',       category: 'Imaging' },
  { sn: 74, name: 'Ultrasonogram Machine',                      qty: '01',       category: 'Imaging' },
  { sn: 75, name: 'Echocardiogram',                             qty: '01',       category: 'Imaging' },
  { sn: 76, name: 'X-Ray Cassettes',                            qty: '01',       category: 'Imaging' },
  { sn: 77, name: 'Lead Apron',                                 qty: '01',       category: 'Imaging' },
  { sn: 78, name: 'Thyroid Shield',                             qty: '01',       category: 'Imaging' },
  { sn: 79, name: 'Gonadal Guard',                              qty: '01',       category: 'Imaging' },
  { sn: 80, name: 'TLD Badges',                                 qty: 'Available',category: 'Imaging' },
  // Physiotherapy
  { sn: 81, name: 'Diathermy Machine',                          qty: '01',       category: 'Physiotherapy' },
  { sn: 82, name: 'Traction Unit (Cervical & Lumbar)',          qty: '01',       category: 'Physiotherapy' },
  { sn: 83, name: 'Physiotherapy Cycle',                        qty: '01',       category: 'Physiotherapy' },
  { sn: 84, name: 'Ultrasound Therapy Equipment',               qty: '01',       category: 'Physiotherapy' },
  { sn: 85, name: 'Interferential Therapy Machine',             qty: '01',       category: 'Physiotherapy' },
  { sn: 86, name: 'TENS Machine',                               qty: '01',       category: 'Physiotherapy' },
  { sn: 87, name: 'Treatment Table',                            qty: '01',       category: 'Physiotherapy' },
  // Sterilisation & Infection Control
  { sn: 88, name: 'Autoclave (Vertical, High Pressure)',        qty: '01',       category: 'Sterilisation & Infection Control' },
  { sn: 89, name: 'Autoclave Drums',                            qty: '09',       category: 'Sterilisation & Infection Control' },
  { sn: 90, name: 'Sterilizer (Small / Medium / Large)',        qty: 'Available',category: 'Sterilisation & Infection Control' },
  { sn: 91, name: 'Hot Air Oven',                               qty: 'Available',category: 'Sterilisation & Infection Control' },
  { sn: 92, name: 'Biomedical Waste Colour-Coded Bins',         qty: '04 Sets',  category: 'Sterilisation & Infection Control' },
  { sn: 93, name: 'Fumigation Machine',                         qty: 'Available',category: 'Sterilisation & Infection Control' },
  { sn: 94, name: 'Needle Cutter',                              qty: '12',       category: 'Sterilisation & Infection Control' },
];

const CATEGORIES = [
  'All',
  'Patient Care',
  'Diagnostics',
  'Laboratory',
  'Emergency & Respiratory',
  'Surgical & OT',
  'Imaging',
  'Physiotherapy',
  'Sterilisation & Infection Control',
];

const CAT_META = {
  'Patient Care':                     { icon: BedDouble,   accent: T.forest600,  bg: `${T.forest600}12`, border: `${T.forest600}30`, text: T.forest600 },
  'Diagnostics':                      { icon: Activity,    accent: '#2E6A8A',    bg: '#2E6A8A12',        border: '#2E6A8A30',        text: '#2E6A8A' },
  'Laboratory':                       { icon: Microscope,  accent: '#5A4A8A',    bg: '#5A4A8A12',        border: '#5A4A8A30',        text: '#5A4A8A' },
  'Emergency & Respiratory':          { icon: Wind,        accent: '#C0392B',    bg: '#C0392B10',        border: '#C0392B28',        text: '#C0392B' },
  'Surgical & OT':                    { icon: Syringe,     accent: '#8A4A6E',    bg: '#8A4A6E12',        border: '#8A4A6E30',        text: '#8A4A6E' },
  'Imaging':                          { icon: ScanLine,    accent: T.gold700,    bg: `${T.gold600}12`,   border: `${T.gold600}30`,   text: T.gold700 },
  'Physiotherapy':                    { icon: Zap,         accent: '#2E7D8A',    bg: '#2E7D8A12',        border: '#2E7D8A30',        text: '#2E7D8A' },
  'Sterilisation & Infection Control':{ icon: ShieldCheck, accent: T.forest800,  bg: `${T.forest800}10`, border: `${T.forest800}28`, text: T.forest800 },
};

const STATS = [
  { value: '94+', label: 'Equipment Types' },
  { value: '50',  label: 'Hospital Beds' },
  { value: '300', label: 'Hospital Cots' },
  { value: '8',   label: 'Dept. Categories' },
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
