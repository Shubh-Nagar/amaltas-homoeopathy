import React, { useState } from 'react';
import { Stethoscope, UserCheck, Filter } from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const STAFF = [
  // ── Specialists ──────────────────────────────────────────────────────────
  { sn: 1,  name: 'Dr. Raghvendra Pratap Singh', designation: 'Surgeon',                    qual: 'MS',                              type: 'FT',      doj: '26-12-2024', category: 'Specialists' },
  { sn: 2,  name: 'Dr. Kirti Hada',              designation: 'Consultant / Pathologist',   qual: 'MD',                              type: 'FT',      doj: '29-04-2025', category: 'Specialists' },
  { sn: 3,  name: 'Dr. Afjal Patel',             designation: 'General Physician',          qual: 'MD',                              type: 'FT',      doj: '19-01-2026', category: 'Specialists' },
  { sn: 4,  name: 'Dr. Tanya Joshi',             designation: 'Obst. & Gynaecologist',      qual: 'Diplomate N.B. (Obst. & Gynae.)', type: 'FT',      doj: '13-01-2026', category: 'Specialists' },
  { sn: 5,  name: 'Dr. Amey Narkhede',           designation: 'Radiologist',                qual: 'Radiologist',                     type: 'On Call', doj: '02-03-2023', category: 'Specialists' },
  { sn: 6,  name: 'Dr. Soniya Sharma',           designation: 'Ophthalmologist',            qual: 'MS',                              type: 'FT',      doj: '02-06-2023', category: 'Specialists' },
  { sn: 7,  name: 'Dr. Neha Kakani',             designation: 'Consultant',                 qual: 'MD',                              type: 'FT',      doj: '01-03-2022', category: 'Specialists' },
  { sn: 8,  name: 'Dr. Jyoti Yadav',             designation: 'Anesthesiologist',           qual: 'Diploma',                         type: 'On Call', doj: '06-03-2023', category: 'Specialists' },
  { sn: 9,  name: 'Dr. Yogesh Loksh',            designation: 'Dentist',                    qual: 'BDMS',                            type: 'FT',      doj: '13-03-2023', category: 'Specialists' },
  // ── Medical Officers ──────────────────────────────────────────────────────
  { sn: 10, name: 'Dr. Anjali Soni',             designation: 'Resident Medical Officer',   qual: 'BHMS',                            type: 'FT',      doj: '03-07-2024', category: 'Medical Officers' },
  { sn: 11, name: 'Dr. Archana Malviya',         designation: 'Resident Medical Officer',   qual: 'BHMS',                            type: 'FT',      doj: '02-09-2024', category: 'Medical Officers' },
  { sn: 12, name: 'Dr. Sanjay Singh Solanki',    designation: 'Medical Officer',            qual: 'BHMS',                            type: 'FT',      doj: '08-09-2025', category: 'Medical Officers' },
  { sn: 13, name: 'Dr. Mahima Patidar',          designation: 'Medical Officer',            qual: 'BHMS',                            type: 'FT',      doj: '29-05-2023', category: 'Medical Officers' },
  { sn: 14, name: 'Dr. Mohit Patel',             designation: 'Medical Officer',            qual: 'BHMS',                            type: 'FT',      doj: '01-04-2025', category: 'Medical Officers' },
  { sn: 15, name: 'Dr. Yashfeen Qureshi',        designation: 'Medical Officer',            qual: 'BHMS',                            type: 'FT',      doj: '01-01-2026', category: 'Medical Officers' },
  { sn: 16, name: 'Dr. Dheeraj Gurjar',          designation: 'Medical Officer',            qual: 'BHMS',                            type: 'FT',      doj: '24-01-2026', category: 'Medical Officers' },
  // ── House Physicians ──────────────────────────────────────────────────────
  { sn: 17, name: 'Dr. Love Mehra',              designation: 'House Physician',            qual: 'BHMS',                            type: 'FT',      doj: '09-03-2023', category: 'House Physicians' },
  { sn: 18, name: 'Dr. Kirti Soni',              designation: 'House Physician',            qual: 'BHMS',                            type: 'FT',      doj: '31-03-2026', category: 'House Physicians' },
  { sn: 19, name: 'Dr. Shivani Vaidya',          designation: 'House Physician',            qual: 'BHMS',                            type: 'FT',      doj: '02-12-2024', category: 'House Physicians' },
  { sn: 20, name: 'Dr. Harshita Gupta',          designation: 'House Physician',            qual: 'BHMS',                            type: 'FT',      doj: '03-07-2025', category: 'House Physicians' },
  // ── Allied Health ─────────────────────────────────────────────────────────
  { sn: 21, name: 'Dr. Anjali Mehta',            designation: 'Physiotherapist',            qual: 'BHMS',                            type: 'FT',      doj: '21-01-2021', category: 'Allied Health' },
  { sn: 22, name: 'Sanjay Rambhole',             designation: 'Yoga Expert',                qual: 'DYED',                            type: 'FT',      doj: '12-01-2021', category: 'Allied Health' },
  { sn: 23, name: 'Namrta Vaidhya',              designation: 'Dietician',                  qual: 'MHSC',                            type: 'FT',      doj: '06-09-2025', category: 'Allied Health' },
  // ── Nursing ───────────────────────────────────────────────────────────────
  { sn: 24, name: 'Neha Minhas',                 designation: 'Nursing Incharge',           qual: 'BSc Nursing',                     type: 'FT',      doj: '13-12-2024', category: 'Nursing' },
  { sn: 25, name: 'Shakuntala Dhurvey',          designation: 'Nursing Staff',              qual: 'GNM',                             type: 'FT',      doj: '11-02-2025', category: 'Nursing' },
  { sn: 26, name: 'Ravindra',                    designation: 'Nursing Staff',              qual: 'GNM',                             type: 'FT',      doj: '09-01-2026', category: 'Nursing' },
  { sn: 27, name: 'Rinku Dawar',                 designation: 'Nursing Staff',              qual: 'GNM',                             type: 'FT',      doj: '12-08-2025', category: 'Nursing' },
  { sn: 28, name: 'Rahul Vishwakarma',           designation: 'Nursing Staff',              qual: 'GNM',                             type: 'FT',      doj: '11-02-2025', category: 'Nursing' },
  { sn: 29, name: 'Sona Verma',                  designation: 'Nursing Staff',              qual: 'GNM',                             type: 'FT',      doj: '24-07-2024', category: 'Nursing' },
  { sn: 30, name: 'Pawan Saini',                 designation: 'Nursing Staff',              qual: 'GNM',                             type: 'FT',      doj: '20-07-2024', category: 'Nursing' },
  { sn: 31, name: 'Deepika Damor',               designation: 'Nursing Staff',              qual: 'GNM',                             type: 'FT',      doj: '08-08-2024', category: 'Nursing' },
  { sn: 32, name: 'Neha Khobragade',             designation: 'Nursing Staff',              qual: 'GNM',                             type: 'FT',      doj: '16-06-2026', category: 'Nursing' },
  { sn: 33, name: 'Sundar Singad',               designation: 'Nursing Staff',              qual: 'GNM',                             type: 'FT',      doj: '16-06-2026', category: 'Nursing' },
  // ── Support Staff ─────────────────────────────────────────────────────────
  { sn: 34, name: 'Rajshree Parmar',             designation: 'Pharmacist',                 qual: 'BSc',                             type: 'FT',      doj: '06-11-2024', category: 'Support Staff' },
  { sn: 35, name: 'Shivani Sisodiya',            designation: 'Pharmacist',                 qual: 'B.Com',                           type: 'FT',      doj: '28-10-2023', category: 'Support Staff' },
  { sn: 36, name: 'Reshma Khan',                 designation: 'Pharmacist',                 qual: 'B.Com',                           type: 'FT',      doj: '20-11-2024', category: 'Support Staff' },
  { sn: 37, name: 'Alkesh Dhankani',             designation: 'Lab Technician',             qual: 'DMLT',                            type: 'FT',      doj: '24-10-2020', category: 'Support Staff' },
  { sn: 38, name: 'Hariom Patidar',              designation: 'Pathology Assistant',        qual: 'BMLT',                            type: 'FT',      doj: '20-04-2024', category: 'Support Staff' },
  { sn: 39, name: 'Sanjay Singh Tomar',          designation: 'X-Ray Technician',           qual: 'Diploma X-Ray & ECG',             type: 'FT',      doj: '25-10-2020', category: 'Support Staff' },
  { sn: 40, name: 'Rajkumar Navrang',            designation: 'X-Ray Attendant',            qual: 'BSc',                             type: 'FT',      doj: '12-12-2024', category: 'Support Staff' },
  { sn: 41, name: 'Shekhar Patel',               designation: 'OT Technician',              qual: 'BSc',                             type: 'FT',      doj: '20-07-2022', category: 'Support Staff' },
  { sn: 42, name: 'Jaswant Singh',               designation: 'PRO',                        qual: 'BA',                              type: 'FT',      doj: '04-11-2024', category: 'Support Staff' },
  { sn: 43, name: 'Abhishek Parmar',             designation: 'Store Keeper',               qual: 'BA',                              type: 'FT',      doj: '16-07-2025', category: 'Support Staff' },
  { sn: 44, name: 'Sushma Bhadoriya',            designation: 'Clerk cum Receptionist',     qual: 'BA',                              type: 'FT',      doj: '04-04-2023', category: 'Support Staff' },
  { sn: 45, name: 'Devraj Panthi',               designation: 'Computer Operator',          qual: 'B.Com',                           type: 'FT',      doj: '06-05-2024', category: 'Support Staff' },
  { sn: 46, name: 'Anmol Malviya',               designation: 'Clerk',                      qual: 'B.Com',                           type: 'FT',      doj: '11-03-2024', category: 'Support Staff' },
  { sn: 47, name: 'Prerna Kuril',                designation: 'MRD Clerk',                  qual: 'B.Com',                           type: 'FT',      doj: '01-12-2025', category: 'Support Staff' },
];

const CATEGORIES = ['All', 'Specialists', 'Medical Officers', 'House Physicians', 'Allied Health', 'Nursing', 'Support Staff'];

const CATEGORY_COLORS = {
  'Specialists':      { bg: '#5B8FB918', border: '#5B8FB940', text: '#2E6A8A' },
  'Medical Officers': { bg: `${T.forest600}14`, border: `${T.forest600}35`, text: T.forest600 },
  'House Physicians': { bg: `${T.forest800}10`, border: `${T.forest800}28`, text: T.forest800 },
  'Allied Health':    { bg: '#7B6EA818', border: '#7B6EA840', text: '#5A4A8A' },
  'Nursing':          { bg: '#8A4A6E18', border: '#8A4A6E40', text: '#8A4A6E' },
  'Support Staff':    { bg: `${T.muted500}14`, border: `${T.muted500}30`, text: T.muted500 },
};

const STATS = [
  { value: '47', label: 'Staff Members' },
  { value: '9',  label: 'Specialists' },
  { value: '10', label: 'Nursing Staff' },
  { value: '14', label: 'Support Staff' },
];

const slide = (inView, delay = 0) => ({
  opacity:   inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function HospitalStaffSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [statsRef, statsInView] = useInView(0.1);
  const [tableRef, tableInView] = useInView(0.04);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? STAFF : STAFF.filter(s => s.category === activeCategory);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 380, background: T.forest800 }}>
        <img
          src="/campus/homoepathy.png"
          alt="Amaltas Hospital"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', opacity: 0.22 }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${T.forest800}EE 0%, ${T.ink900}BB 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}18 1px, transparent 1px)`, backgroundSize: '36px 36px', pointerEvents: 'none' }} />

        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-28">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}><Eyebrow light>Hospital</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Hospital{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Staff</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              A dedicated team of physicians, specialists, nurses, and allied health professionals
              committed to compassionate, evidence-based homoeopathic care.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Hospital</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Staff</span>
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
                <div className="text-[38px] lg:text-[46px] font-semibold leading-none" style={{ ...fontDisplay, color: T.cream50 }}>{value}</div>
                <div className="mt-1.5 text-[11px] tracking-[0.18em] uppercase" style={{ ...MONO, color: `${T.cream50}AA` }}>{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  STAFF TABLE  ═══════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>

          {/* Section header */}
          <div ref={tableRef} className="mb-10" style={slide(tableInView, 0)}>
            <Eyebrow>Our Team</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Meet the people behind{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>every recovery</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-2xl" style={{ color: T.muted500 }}>
              From senior consultants to nursing care, every member of our hospital team brings
              qualified expertise and a shared commitment to patient wellbeing.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8" style={slide(tableInView, 0.1)}>
            <div className="flex items-center gap-1.5 mr-2" style={{ color: T.muted500, fontSize: 12, ...MONO, letterSpacing: '0.1em' }}>
              <Filter size={13} />
              FILTER
            </div>
            {CATEGORIES.map(cat => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200"
                  style={{
                    background: active ? T.forest800 : `${T.ink900}08`,
                    color:      active ? T.cream50   : T.muted500,
                    border:     `1px solid ${active ? T.forest800 : T.ink900 + '18'}`,
                    cursor: 'pointer',
                    ...fontBody,
                  }}
                >
                  {cat}
                  {cat !== 'All' && (
                    <span
                      className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px]"
                      style={{
                        background: active ? `${T.gold100}30` : `${T.ink900}10`,
                        color: active ? T.gold100 : T.muted500,
                      }}
                    >
                      {STAFF.filter(s => s.category === cat).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop table */}
          <div
            className="hidden lg:block rounded-2xl overflow-hidden"
            style={{
              border: `1px solid ${T.ink900}10`,
              boxShadow: `0 8px 32px -8px ${T.ink900}0C`,
              ...slide(tableInView, 0.14),
            }}
          >
            {/* Table head */}
            <div
              className="grid text-[11px] font-semibold tracking-[0.14em] uppercase px-6 py-3.5"
              style={{
                ...MONO,
                background: T.forest800,
                color: `${T.cream50}99`,
                gridTemplateColumns: '3rem 1.6fr 1.4fr 0.9fr 0.6fr 7rem',
                gap: '0 1.5rem',
              }}
            >
              <span>No.</span>
              <span>Name</span>
              <span>Designation</span>
              <span>Qualification</span>
              <span>Type</span>
              <span>Joined</span>
            </div>

            {/* Table rows */}
            {filtered.map((s, i) => {
              const cc = CATEGORY_COLORS[s.category] || CATEGORY_COLORS['Support Staff'];
              return (
                <div
                  key={s.sn}
                  className="grid items-center px-6 py-4 transition-colors duration-150"
                  style={{
                    gridTemplateColumns: '3rem 1.6fr 1.4fr 0.9fr 0.6fr 7rem',
                    gap: '0 1.5rem',
                    background: i % 2 === 0 ? '#FFFFFF' : `${T.forest800}04`,
                    borderTop: `1px solid ${T.ink900}08`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${T.gold600}08`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? '#FFFFFF' : `${T.forest800}04`; }}
                >
                  <span className="text-[12px] font-semibold" style={{ ...MONO, color: T.muted500 }}>
                    {String(s.sn).padStart(2, '0')}
                  </span>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold"
                      style={{ background: cc.bg, border: `1px solid ${cc.border}`, color: cc.text, ...MONO }}
                    >
                      {s.name.replace(/^Dr\.?\s*/i, '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[14px] font-medium leading-snug" style={{ color: T.ink900 }}>{s.name}</span>
                  </div>

                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium w-fit"
                    style={{ background: cc.bg, border: `1px solid ${cc.border}`, color: cc.text }}
                  >
                    {s.designation}
                  </span>

                  <span className="text-[13px]" style={{ color: T.muted500 }}>{s.qual}</span>

                  <span
                    className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide w-fit"
                    style={{
                      ...MONO,
                      background: s.type === 'FT' ? `${T.forest600}14` : `${T.gold600}14`,
                      color:      s.type === 'FT' ? T.forest600       : T.gold700,
                      border:     `1px solid ${s.type === 'FT' ? T.forest600 + '30' : T.gold600 + '30'}`,
                    }}
                  >
                    {s.type}
                  </span>

                  <span className="text-[12px]" style={{ ...MONO, color: T.muted500 }}>{s.doj}</span>
                </div>
              );
            })}
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-3" style={slide(tableInView, 0.14)}>
            {filtered.map(s => {
              const cc = CATEGORY_COLORS[s.category] || CATEGORY_COLORS['Support Staff'];
              return (
                <div
                  key={s.sn}
                  className="rounded-2xl p-4"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${T.ink900}10`,
                    boxShadow: `0 2px 12px -4px ${T.ink900}08`,
                    borderLeft: `3px solid ${cc.text}`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-bold"
                      style={{ background: cc.bg, border: `1px solid ${cc.border}`, color: cc.text, ...MONO }}
                    >
                      {s.name.replace(/^Dr\.?\s*/i, '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[14px] font-semibold leading-snug" style={{ color: T.ink900 }}>{s.name}</p>
                        <span
                          className="text-[10px] font-semibold px-1.5 py-0.5 rounded flex-shrink-0"
                          style={{
                            ...MONO,
                            background: s.type === 'FT' ? `${T.forest600}14` : `${T.gold600}14`,
                            color:      s.type === 'FT' ? T.forest600       : T.gold700,
                            border:     `1px solid ${s.type === 'FT' ? T.forest600 + '30' : T.gold600 + '30'}`,
                          }}
                        >
                          {s.type}
                        </span>
                      </div>
                      <span
                        className="inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-[11px] font-medium"
                        style={{ background: cc.bg, border: `1px solid ${cc.border}`, color: cc.text }}
                      >
                        {s.designation}
                      </span>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px]" style={{ color: T.muted500 }}>
                        <span>{s.qual}</span>
                        <span style={MONO}>Joined {s.doj}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row count */}
          <p className="mt-5 text-[12px]" style={{ ...MONO, color: T.muted500, letterSpacing: '0.08em' }}>
            Showing {filtered.length} of {STAFF.length} staff members
            {activeCategory !== 'All' && ` · ${activeCategory}`}
          </p>
        </Container>
      </section>

      {/* ═════════════════════  CLOSING STRIP  ════════════════════════ */}
      <section className="py-16 relative overflow-hidden" style={{ background: T.forest800 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <Container className="relative text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}>
            <Stethoscope size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug" style={{ ...fontDisplay, color: '#FFFFFF' }}>
            Every patient receives{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>qualified, compassionate</em>
            {' '}care from our entire team.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <UserCheck size={14} style={{ color: `${T.cream50}66` }} />
            <span className="text-[12px] tracking-[0.14em] uppercase" style={{ ...MONO, color: `${T.cream50}66` }}>
              All staff registered with Madhya Pradesh Medical Council
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
