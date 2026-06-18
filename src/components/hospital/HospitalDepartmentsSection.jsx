import React, { useState } from 'react';
import {
  Bell, Pill, Building2, BedDouble, Stethoscope,
  Activity, FlaskConical, ScanLine, Scissors, Baby,
  Bandage, ShieldCheck, Hospital,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const DEPARTMENTS = [
  {
    id: 'reception',
    name: 'Reception',
    icon: Bell,
    category: 'Patient Interface',
    accent: T.forest600,
    description:
      'The first point of contact for every patient and visitor. Our reception team manages patient registration, appointment scheduling, inquiry handling, and guides patients to the appropriate department with care and efficiency.',
    highlights: ['Patient registration', 'Appointment scheduling', 'Visitor guidance', 'Information desk'],
  },
  {
    id: 'opd',
    name: 'OPD',
    icon: Stethoscope,
    category: 'Patient Interface',
    accent: T.forest800,
    description:
      'The Out-Patient Department is the primary clinical touchpoint for the community. Daily OPD sessions are conducted by qualified homoeopathic physicians, providing consultation, prescription, and follow-up care for acute and chronic cases.',
    highlights: ['Daily consultations', 'Multi-speciality OPD', 'Follow-up care', 'Patient counselling'],
  },
  {
    id: 'ipd',
    name: 'IPD',
    icon: BedDouble,
    category: 'Patient Interface',
    accent: '#2E6A8A',
    description:
      'The In-Patient Department provides round-the-clock indoor care for patients requiring observation, treatment, or recovery under continuous medical supervision. Staffed by resident doctors and nursing team at all hours.',
    highlights: ['24/7 medical supervision', 'Nursing care', 'Daily ward rounds', 'Discharge planning'],
  },
  {
    id: 'dispensary',
    name: 'Dispensary',
    icon: Pill,
    category: 'Patient Interface',
    accent: '#7B6EA8',
    description:
      'Medicines are dispensed to both OPD and IPD patients directly from the hospital dispensary. The dispensary maintains a well-stocked inventory of homoeopathic preparations and essential drugs, ensuring prompt availability.',
    highlights: ['Homoeopathic medicines', 'Essential drug stock', 'OPD & IPD supply', 'Quality assurance'],
  },
  {
    id: 'laboratory',
    name: 'Central Laboratory',
    icon: FlaskConical,
    category: 'Diagnostics',
    accent: T.gold700,
    description:
      'The central pathology and biochemistry laboratory supports clinical decision-making with a full range of diagnostic investigations. Equipped with modern instruments for haematology, biochemistry, urine analysis, and microbiology.',
    highlights: ['Haematology tests', 'Biochemistry panel', 'Urine & stool analysis', 'Pathologist on staff'],
  },
  {
    id: 'radiology',
    name: 'Radiology',
    icon: ScanLine,
    category: 'Diagnostics',
    accent: '#2E6A8A',
    description:
      'Digital X-ray and diagnostic imaging services available for patients requiring radiological investigation. Operated by a qualified radiographer and supervised by an on-call consultant radiologist for timely reporting.',
    highlights: ['Digital X-ray', 'ECG services', 'Expert reporting', 'On-call radiologist'],
  },
  {
    id: 'ot',
    name: 'O.T. Block',
    icon: Scissors,
    category: 'Clinical',
    accent: '#8A4A6E',
    description:
      'A fully equipped Operation Theatre block maintained to infection-control standards, supporting minor surgical procedures and allied interventions. Staffed by a trained OT assistant and a visiting general surgeon.',
    highlights: ['Minor surgical procedures', 'Sterile environment', 'Visiting surgeon', 'OT-trained support staff'],
  },
  {
    id: 'labour',
    name: 'Labour Room',
    icon: Baby,
    category: 'Clinical',
    accent: T.forest600,
    description:
      'A dedicated labour room for obstetric care, managed by our on-staff Obstetrician & Gynaecologist and trained nursing staff. The facility provides safe delivery services with essential maternal and neonatal monitoring equipment.',
    highlights: ['Obstetric care', 'Normal deliveries', 'Neonatal monitoring', 'OBG specialist'],
  },
  {
    id: 'dressing',
    name: 'Dressing Room',
    icon: Bandage,
    category: 'Clinical',
    accent: T.gold700,
    description:
      'Wound dressing, suture removal, minor injury management, and post-operative care are handled in the dedicated dressing room. All procedures follow strict aseptic protocols under the supervision of trained nursing staff.',
    highlights: ['Wound management', 'Post-op dressings', 'Aseptic technique', 'Suture care'],
  },
  {
    id: 'cssd',
    name: 'CSSD',
    icon: ShieldCheck,
    category: 'Clinical',
    accent: T.forest800,
    description:
      'The Central Sterile Services Department is the backbone of infection control across the hospital. All surgical instruments, linen, and reusable equipment are decontaminated, sterilised, and re-distributed from this centralised unit.',
    highlights: ['Instrument sterilisation', 'Autoclave facility', 'Infection control', 'OT & IPD supply'],
  },
  {
    id: 'yoga',
    name: 'Yoga & Physiotherapy',
    icon: Activity,
    category: 'Wellness',
    accent: '#5A4A8A',
    description:
      'An integrative wellness unit offering structured yoga sessions and physiotherapy rehabilitation. Staffed by qualified yoga instructors and a physiotherapist, this department supports recovery, chronic disease management, and preventive health.',
    highlights: ['Therapeutic yoga', 'Physiotherapy rehab', 'Chronic disease support', 'Qualified instructors'],
  },
  {
    id: 'admin',
    name: 'Administrative Office',
    icon: Building2,
    category: 'Administration',
    accent: T.muted500,
    description:
      'Manages hospital records, billing, regulatory compliance, staff coordination, and liaison with affiliated university and statutory bodies. The administrative office ensures smooth institutional governance and documentation.',
    highlights: ['Medical records', 'Billing & accounts', 'Regulatory compliance', 'Staff coordination'],
  },
];

const CATEGORIES = ['All', 'Patient Interface', 'Diagnostics', 'Clinical', 'Wellness', 'Administration'];

const CATEGORY_BG = {
  'Patient Interface': { bg: `${T.forest600}14`, border: `${T.forest600}35`, text: T.forest600 },
  Diagnostics:        { bg: '#2E6A8A14',          border: '#2E6A8A35',         text: '#2E6A8A' },
  Clinical:           { bg: `${T.gold600}14`,     border: `${T.gold600}35`,    text: T.gold700 },
  Wellness:           { bg: '#5A4A8A14',           border: '#5A4A8A35',         text: '#5A4A8A' },
  Administration:     { bg: `${T.muted500}12`,    border: `${T.muted500}30`,   text: T.muted500 },
};

const STATS = [
  { value: '12', label: 'Departments' },
  { value: '24/7', label: 'IPD Coverage' },
  { value: 'Daily', label: 'OPD Sessions' },
  { value: '2', label: 'Diagnostic Units' },
];

const slide = (inView, delay = 0) => ({
  opacity:   inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function HospitalDepartmentsSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [statsRef, statsInView] = useInView(0.1);
  const [gridRef,  gridInView]  = useInView(0.04);
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? DEPARTMENTS : DEPARTMENTS.filter(d => d.category === active);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 380, background: T.forest800 }}
      >
        <img
          src="/campus/homeopathycampus.JPG"
          alt="Amaltas Hospital"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 35%',
            opacity: 0.22,
          }}
          draggable="false"
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${T.forest800}EE 0%, ${T.ink900}BB 100%)`,
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}18 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
            pointerEvents: 'none',
          }}
        />

        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-28">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}>
              <Eyebrow light>Hospital</Eyebrow>
            </div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Hospital{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Departments</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Twelve specialised departments — from primary consultation to diagnostics,
              surgery, and wellness — working in concert to deliver complete patient care.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Hospital</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Departments</span>
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
                <div
                  className="text-[36px] lg:text-[44px] font-semibold leading-none"
                  style={{ ...fontDisplay, color: T.cream50 }}
                >
                  {value}
                </div>
                <div
                  className="mt-1.5 text-[11px] tracking-[0.18em] uppercase"
                  style={{ ...MONO, color: `${T.cream50}AA` }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  DEPARTMENTS GRID  ═════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>

          {/* Header */}
          <div ref={gridRef} className="mb-10" style={slide(gridInView, 0)}>
            <Eyebrow>Our Facilities</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Every department, one{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>shared purpose</em>
            </h2>
            <p
              className="mt-3 text-[15px] leading-relaxed max-w-2xl"
              style={{ color: T.muted500 }}
            >
              Our hospital is designed so that every function — from first registration to
              final discharge — is handled by a dedicated, well-equipped department.
            </p>
          </div>

          {/* Filter tabs */}
          <div
            className="flex flex-wrap gap-2 mb-10"
            style={slide(gridInView, 0.1)}
          >
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
                    cursor: 'pointer',
                    ...fontBody,
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
                      {DEPARTMENTS.filter(d => d.category === cat).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            style={slide(gridInView, 0.14)}
          >
            {filtered.map((dept, i) => {
              const Icon = dept.icon;
              const cc   = CATEGORY_BG[dept.category];
              return (
                <div
                  key={dept.id}
                  className="rounded-2xl overflow-hidden flex flex-col group"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${T.ink900}0E`,
                    boxShadow: `0 4px 20px -4px ${T.ink900}08`,
                    opacity: gridInView ? 1 : 0,
                    transform: gridInView ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.65s ease ${0.05 + i * 0.06}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.06}s, box-shadow 0.25s ease`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 40px -8px ${T.ink900}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 4px 20px -4px ${T.ink900}08`; }}
                >
                  {/* Card top accent bar */}
                  <div style={{ height: 4, background: dept.accent, flexShrink: 0 }} />

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Icon + category */}
                    <div className="flex items-start justify-between">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${dept.accent}18`,
                          border: `1px solid ${dept.accent}30`,
                        }}
                      >
                        <Icon size={22} strokeWidth={1.7} style={{ color: dept.accent }} />
                      </div>
                      <span
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: cc.bg,
                          border: `1px solid ${cc.border}`,
                          color: cc.text,
                          ...MONO,
                          letterSpacing: '0.06em',
                        }}
                      >
                        {dept.category}
                      </span>
                    </div>

                    {/* Name */}
                    <h3
                      className="text-[20px] font-semibold leading-tight"
                      style={{ ...fontDisplay, color: T.ink900 }}
                    >
                      {dept.name}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[14px] leading-[1.75] flex-1"
                      style={{ color: T.muted500 }}
                    >
                      {dept.description}
                    </p>

                    {/* Highlights */}
                    <div
                      className="pt-3 mt-auto grid grid-cols-2 gap-x-3 gap-y-2"
                      style={{ borderTop: `1px solid ${T.ink900}08` }}
                    >
                      {dept.highlights.map(h => (
                        <div
                          key={h}
                          className="flex items-center gap-1.5 text-[12px]"
                          style={{ color: T.ink900 }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: dept.accent }}
                          />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Count line */}
          <p
            className="mt-6 text-[12px]"
            style={{ ...MONO, color: T.muted500, letterSpacing: '0.08em' }}
          >
            Showing {filtered.length} of {DEPARTMENTS.length} departments
            {active !== 'All' && ` · ${active}`}
          </p>
        </Container>
      </section>

      {/* ═══════════════════  CLOSING STRIP  ═══════════════════════════ */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: T.forest800 }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />
        <Container className="relative text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}
          >
            <Hospital size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p
            className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            Twelve departments.{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>One commitment</em>
            {' '}— your complete recovery.
          </p>
          <p
            className="mt-4 text-[14px] leading-relaxed max-w-xl mx-auto"
            style={{ color: `${T.cream50}77` }}
          >
            Amaltas Teaching Hospital — serving patients across Dewas and Ujjain every day.
          </p>
        </Container>
      </section>
    </>
  );
}
