import React, { useState } from 'react';
import {
  Bell, Pill, Building2, BedDouble, Stethoscope,
  Activity, FlaskConical, ScanLine, Scissors,
  ShieldAlert, Hospital, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const encImg = p => p.replace(/ /g, '%20');

const DEPARTMENTS = [
  {
    id: 'reception',
    name: 'Reception',
    icon: Bell,
    category: 'Patient Interface',
    accent: T.forest600,
    images: ['/Hospital/Reception/435A5374.JPG'],
    description:
      'The first point of contact for every patient and visitor. Our reception team manages patient registration, appointment scheduling, inquiry handling, and guides patients to the appropriate department with care and efficiency.',
    highlights: ['Patient registration', 'Appointment scheduling', 'Visitor guidance', 'Information desk'],
  },
  {
    id: 'opd',
    name: 'Out-Patient Department',
    icon: Stethoscope,
    category: 'Patient Interface',
    accent: T.forest800,
    images: [
      '/Hospital/OPD/Homoeopathic OPD.JPG',
      '/Hospital/OPD/Medicine OPD.JPG',
      '/Hospital/OPD/OBS & Gynae OPD.JPG',
      '/Hospital/OPD/Paediatrics OPD.JPG',
      '/Hospital/OPD/Surgery OPD.JPG',
    ],
    description:
      'The Out-Patient Department is the primary clinical touchpoint for the community. Daily OPD sessions are conducted by qualified homoeopathic physicians across multiple specialities including Medicine, OBG, Paediatrics, and Surgery.',
    highlights: ['Homoeopathic OPD', 'Medicine OPD', 'OBS & Gynae OPD', 'Paediatrics & Surgery OPD'],
  },
  {
    id: 'ipd',
    name: 'I.P.D. Ward',
    icon: BedDouble,
    category: 'Patient Interface',
    accent: '#2E6A8A',
    images: [
      '/Hospital/I.P.D. Ward/435A5397.JPG',
      '/Hospital/I.P.D. Ward/Female Medicine Ward.jpeg',
      '/Hospital/I.P.D. Ward/Male Ward.jpeg',
      '/Hospital/I.P.D. Ward/Male Ward1.jpeg',
      '/Hospital/I.P.D. Ward/Obs and Gynae Ward.jpeg',
    ],
    description:
      'The In-Patient Department provides round-the-clock indoor care for patients requiring observation, treatment, or recovery. Separate male, female, and OBG wards ensure dedicated care under continuous medical and nursing supervision.',
    highlights: ['24/7 medical supervision', 'Male & female wards', 'OBG ward', 'Daily ward rounds'],
  },
  {
    id: 'dispensary',
    name: 'Dispensary',
    icon: Pill,
    category: 'Patient Interface',
    accent: '#7B6EA8',
    images: [
      '/Hospital/Dispansary/Dispansary.JPG',
      '/Hospital/Dispansary/Dispensary.JPG',
    ],
    description:
      'Medicines are dispensed to both OPD and IPD patients directly from the hospital dispensary. The dispensary maintains a well-stocked inventory of homoeopathic preparations and essential drugs, ensuring prompt availability.',
    highlights: ['Homoeopathic medicines', 'Essential drug stock', 'OPD & IPD supply', 'Quality assurance'],
  },
  {
    id: 'emergency',
    name: 'Emergency Unit',
    icon: ShieldAlert,
    category: 'Patient Interface',
    accent: '#C0392B',
    images: [
      '/Hospital/Ememrgency Unit/Ememrgency Unit.jpeg',
      '/Hospital/Ememrgency Unit/Ememrgency Unit1.jpeg',
    ],
    description:
      'The Emergency Unit provides immediate medical attention for acute and life-threatening conditions. Equipped for urgent interventions, the unit is manned round-the-clock by trained medical and nursing staff ready to respond.',
    highlights: ['24/7 emergency care', 'Acute case management', 'Trained emergency staff', 'Rapid response'],
  },
  {
    id: 'laboratory',
    name: 'Hospital Pathology Lab',
    icon: FlaskConical,
    category: 'Diagnostics',
    accent: T.gold700,
    images: ['/Hospital/Hospital Pathology Lab/435A5363.JPG'],
    description:
      'The central pathology laboratory supports clinical decision-making with a full range of diagnostic investigations. Equipped with modern instruments for haematology, biochemistry, urine analysis, and microbiology.',
    highlights: ['Haematology tests', 'Biochemistry panel', 'Urine & stool analysis', 'Pathologist on staff'],
  },
  {
    id: 'xray',
    name: 'X-Ray Room',
    icon: ScanLine,
    category: 'Diagnostics',
    accent: '#2E6A8A',
    images: [
      '/Hospital/X Ray Room/435A5376.JPG',
      '/Hospital/X Ray Room/WhatsApp Image 2026-06-25 at 3.25.54 PM.jpeg',
    ],
    description:
      'Digital X-ray services are available for patients requiring radiological investigation. Operated by a qualified radiographer and supervised by a consultant radiologist for timely and accurate reporting.',
    highlights: ['Digital X-ray', 'Expert reporting', 'On-call radiologist', 'Quick turnaround'],
  },
  {
    id: 'usg',
    name: 'U.S.G. Room',
    icon: Activity,
    category: 'Diagnostics',
    accent: '#1A7A5E',
    images: [
      '/Hospital/U.S.G. Room/435A5365.JPG',
      '/Hospital/U.S.G. Room/435A5367.JPG',
    ],
    description:
      'The Ultrasonography room is equipped with a modern ultrasound machine for abdominal, obstetric, and soft tissue imaging. Reports are issued by a qualified sonologist for accurate clinical decision-making.',
    highlights: ['Abdominal USG', 'Obstetric scans', 'Soft tissue imaging', 'Expert sonologist'],
  },
  {
    id: 'ot',
    name: 'Operation Theatre',
    icon: Scissors,
    category: 'Clinical',
    accent: '#8A4A6E',
    images: [
      '/Hospital/O.T/O.T..jpeg',
      '/Hospital/O.T/WhatsApp Image 2026-06-25 at 3.25.51 PM.jpeg',
    ],
    description:
      'A fully equipped Operation Theatre maintained to infection-control standards, supporting minor surgical procedures and allied interventions. Staffed by a trained OT assistant and a visiting general surgeon.',
    highlights: ['Minor surgical procedures', 'Sterile environment', 'Visiting surgeon', 'OT-trained support staff'],
  },
  {
    id: 'mrd',
    name: 'M.R.D.',
    icon: Building2,
    category: 'Administration',
    accent: T.muted500,
    images: [
      '/Hospital/M.R.D/435A5369.JPG',
      '/Hospital/M.R.D/435A5370.JPG',
    ],
    description:
      'The Medical Records Department maintains comprehensive patient records, manages case files, and ensures systematic documentation of all clinical encounters for continuity of care and regulatory compliance.',
    highlights: ['Patient case files', 'Medical records', 'Regulatory compliance', 'Confidential documentation'],
  },
];

const CATEGORIES = ['All', 'Patient Interface', 'Diagnostics', 'Clinical', 'Administration'];

const CATEGORY_BG = {
  'Patient Interface': { bg: `${T.forest600}14`, border: `${T.forest600}35`, text: T.forest600 },
  Diagnostics:        { bg: '#2E6A8A14',          border: '#2E6A8A35',         text: '#2E6A8A' },
  Clinical:           { bg: `${T.gold600}14`,     border: `${T.gold600}35`,    text: T.gold700 },
  Administration:     { bg: `${T.muted500}12`,    border: `${T.muted500}30`,   text: T.muted500 },
};

const STATS = [
  { value: '10', label: 'Departments' },
  { value: '24/7', label: 'IPD Coverage' },
  { value: 'Daily', label: 'OPD Sessions' },
  { value: '3', label: 'Diagnostic Units' },
];

const slide = (inView, delay = 0) => ({
  opacity:   inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

function DepartmentCard({ dept, index, inView }) {
  const [imgIdx, setImgIdx] = useState(0);
  const Icon = dept.icon;
  const cc = CATEGORY_BG[dept.category];
  const hasMultiple = dept.images.length > 1;

  const prev = e => { e.stopPropagation(); setImgIdx(i => (i - 1 + dept.images.length) % dept.images.length); };
  const next = e => { e.stopPropagation(); setImgIdx(i => (i + 1) % dept.images.length); };

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col group"
      style={{
        background: '#FFFFFF',
        border: `1px solid ${T.ink900}0E`,
        boxShadow: `0 4px 20px -4px ${T.ink900}08`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.65s ease ${0.05 + index * 0.06}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.05 + index * 0.06}s, box-shadow 0.25s ease`,
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 40px -8px ${T.ink900}18`; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 4px 20px -4px ${T.ink900}08`; }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 192, flexShrink: 0 }}>
        <img
          src={encImg(dept.images[imgIdx])}
          alt={`${dept.name} — photo ${imgIdx + 1}`}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
            transition: 'transform 0.4s ease',
          }}
          className="group-hover:scale-105"
        />

        {hasMultiple && (
          <>
            <button
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: 'rgba(0,0,0,0.55)', color: '#fff', border: 'none', cursor: 'pointer' }}
            >
              <ChevronLeft size={14} strokeWidth={2.5} />
            </button>
            <button
              onClick={next}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: 'rgba(0,0,0,0.55)', color: '#fff', border: 'none', cursor: 'pointer' }}
            >
              <ChevronRight size={14} strokeWidth={2.5} />
            </button>
            <div
              className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[10px]"
              style={{ background: 'rgba(0,0,0,0.55)', color: '#fff', ...MONO }}
            >
              {imgIdx + 1}/{dept.images.length}
            </div>
          </>
        )}

        {/* Gradient overlay at bottom */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 40,
            background: 'linear-gradient(to top, rgba(0,0,0,0.22), transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Accent bar */}
      <div style={{ height: 4, background: dept.accent, flexShrink: 0 }} />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Icon + category */}
        <div className="flex items-start justify-between">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${dept.accent}18`, border: `1px solid ${dept.accent}30` }}
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
        <p className="text-[14px] leading-[1.75] flex-1" style={{ color: T.muted500 }}>
          {dept.description}
        </p>

        {/* Highlights */}
        <div
          className="pt-3 mt-auto grid grid-cols-2 gap-x-3 gap-y-2"
          style={{ borderTop: `1px solid ${T.ink900}08` }}
        >
          {dept.highlights.map(h => (
            <div key={h} className="flex items-center gap-1.5 text-[12px]" style={{ color: T.ink900 }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dept.accent }} />
              {h}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
              Ten specialised departments — from primary consultation to diagnostics,
              surgery, and records — working in concert to deliver complete patient care.
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
          <div className="flex flex-wrap gap-2 mb-10" style={slide(gridInView, 0.1)}>
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
            {filtered.map((dept, i) => (
              <DepartmentCard key={dept.id} dept={dept} index={i} inView={gridInView} />
            ))}
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
            Ten departments.{' '}
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
