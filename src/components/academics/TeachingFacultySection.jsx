import React, { useState } from 'react';
import { GraduationCap, BookOpen, Filter, Users } from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const FACULTY = [
  { sn: 1,  name: 'Dr. Yogendra Singh Bhadoriya', designation: 'Principal / Medical Superintendent', dept: 'Administration',                                          doj: '22-02-2022' },
  { sn: 2,  name: 'Dr. Mukesh Agrawal',           designation: 'Professor',                          dept: 'Human Anatomy',                                          doj: '16-09-2024' },
  { sn: 3,  name: 'Dr. Om N. Tamrakar',           designation: 'Professor',                          dept: 'Repertory',                                              doj: '20-09-2024' },
  { sn: 4,  name: 'Dr. Jyoti Sharma (Mistry)',    designation: 'Professor',                          dept: 'Homoeopathic Materia Medica',                            doj: '16-09-2024' },
  { sn: 5,  name: 'Dr. Pawan Kumar Tamrakar',     designation: 'Professor',                          dept: 'Organon of Medicine & Homoeopathic Philosophy',          doj: '02-05-2025' },
  { sn: 6,  name: 'Dr. Harish Kumar Tuli',        designation: 'Professor',                          dept: 'Human Physiology & Biochemistry',                        doj: '02-01-2026' },
  { sn: 7,  name: 'Dr. Sushila Singh',            designation: 'Professor',                          dept: 'Homoeopathic Pharmacy',                                  doj: '09-12-2025' },
  { sn: 8,  name: 'Dr. Sunil Chandel',            designation: 'Professor',                          dept: 'Pathology & Microbiology',                               doj: '14-01-2026' },
  { sn: 9,  name: 'Dr. Mahendra Pratap',          designation: 'Associate Professor',                dept: 'Human Physiology & Biochemistry',                        doj: '17-02-2025' },
  { sn: 10, name: 'Dr. Shilpa Singh (Bais)',      designation: 'Associate Professor',                dept: 'Homoeopathic Materia Medica',                            doj: '17-09-2024' },
  { sn: 11, name: 'Dr. Shehla Jaffri',            designation: 'Associate Professor',                dept: 'Repertory',                                              doj: '06-03-2023' },
  { sn: 12, name: 'Dr. Vinay Patidar',            designation: 'Associate Professor',                dept: 'Practice of Medicine & Pharmacology',                    doj: '03-11-2025' },
  { sn: 13, name: 'Dr. Rajesh Mangroliya',        designation: 'Associate Professor',                dept: 'Pathology & Microbiology',                               doj: '16-03-2026' },
  { sn: 14, name: 'Dr. Palak Chouksey',           designation: 'Assistant Professor',                dept: 'Human Anatomy',                                          doj: '14-09-2024' },
  { sn: 15, name: 'Dr. Damini Solanki',           designation: 'Assistant Professor',                dept: 'Organon of Medicine & Homoeopathic Philosophy',          doj: '16-09-2024' },
  { sn: 16, name: 'Dr. Ankit Sharma',             designation: 'Assistant Professor',                dept: 'Repertory',                                              doj: '16-09-2024' },
  { sn: 17, name: 'Dr. Vibha Patankar',           designation: 'Assistant Professor',                dept: 'Repertory',                                              doj: '14-09-2024' },
  { sn: 18, name: 'Dr. Rajkumar Soni',            designation: 'Assistant Professor',                dept: 'Human Physiology & Biochemistry',                        doj: '21-02-2025' },
  { sn: 19, name: 'Dr. Dharmendra Kourav',        designation: 'Assistant Professor',                dept: 'Human Anatomy',                                          doj: '12-02-2026' },
  { sn: 20, name: 'Dr. Neha Jain',               designation: 'Assistant Professor',                dept: 'Homoeopathic Materia Medica',                            doj: '28-04-2025' },
  { sn: 21, name: 'Dr. Ananya Jaiswal',           designation: 'Assistant Professor',                dept: 'Human Physiology & Biochemistry',                        doj: '19-09-2025' },
  { sn: 22, name: 'Dr. Preeti Rai',              designation: 'Assistant Professor',                dept: 'Homoeopathic Pharmacy',                                  doj: '19-09-2025' },
  { sn: 23, name: 'Dr. Pragya Jain',             designation: 'Assistant Professor',                dept: 'Surgery',                                                doj: '02-03-2026' },
  { sn: 24, name: 'Dr. Shahana Khan',            designation: 'Assistant Professor',                dept: 'Gynaecology & Obstetrics',                               doj: '02-03-2026' },
  { sn: 25, name: 'Dr. Geeta Vishnariya',        designation: 'Assistant Professor',                dept: 'Forensic Medicine & Toxicology',                         doj: '28-02-2026' },
  { sn: 26, name: 'Dr. Deeksha Vishwakarma',     designation: 'Assistant Professor',                dept: 'Pathology & Microbiology',                               doj: '20-03-2026' },
];

const DESIGNATION_FILTERS = ['All', 'Principal / Medical Superintendent', 'Professor', 'Associate Professor', 'Assistant Professor'];

const DESIG_META = {
  'Principal / Medical Superintendent': { bg: `${T.gold600}18`,   border: `${T.gold600}40`,   text: T.gold700,    rank: 1 },
  'Professor':                           { bg: `${T.forest800}12`, border: `${T.forest800}30`, text: T.forest800,  rank: 2 },
  'Associate Professor':                 { bg: `${T.forest600}12`, border: `${T.forest600}30`, text: T.forest600,  rank: 3 },
  'Assistant Professor':                 { bg: '#2E6A8A12',         border: '#2E6A8A30',         text: '#2E6A8A',    rank: 4 },
};

const DEPT_COLORS = {
  'Administration':                               '#C9A227',
  'Human Anatomy':                                '#2E6A8A',
  'Repertory':                                    '#0A5326',
  'Homoeopathic Materia Medica':                  '#8A4A6E',
  'Organon of Medicine & Homoeopathic Philosophy':'#5A4A8A',
  'Human Physiology & Biochemistry':              '#107E3A',
  'Homoeopathic Pharmacy':                        '#7B6EA8',
  'Pathology & Microbiology':                     '#A37A14',
  'Practice of Medicine & Pharmacology':          '#6B7872',
  'Surgery':                                      '#C0392B',
  'Gynaecology & Obstetrics':                     '#8A4A6E',
  'Forensic Medicine & Toxicology':               '#444',
};

const STATS = [
  { value: '26',  label: 'Faculty Members' },
  { value: '7',   label: 'Professors' },
  { value: '5',   label: 'Associate Professors' },
  { value: '12',  label: 'Departments' },
];

const slide = (inView, delay = 0) => ({
  opacity:    inView ? 1 : 0,
  transform:  inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

function Avatar({ name, designation }) {
  const initials = name
    .replace(/^Dr\.?\s*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
  const meta = DESIG_META[designation] || DESIG_META['Assistant Professor'];
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-bold"
      style={{ background: meta.bg, border: `1.5px solid ${meta.border}`, color: meta.text, ...MONO }}
    >
      {initials}
    </div>
  );
}

export default function TeachingFacultySection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [statsRef, statsInView] = useInView(0.1);
  const [bodyRef,  bodyInView]  = useInView(0.04);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? FACULTY : FACULTY.filter(f => f.designation === filter);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 380, background: T.forest800 }}
      >
        <img
          src="/campus/homoepathy.png"
          alt="Amaltas Institute"
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
            <div style={slide(heroInView, 0)}><Eyebrow light>Academics</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Teaching{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Faculty</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Our faculty brings together experienced professors and specialist physicians
              committed to shaping the next generation of homoeopathic practitioners.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Academics</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Teaching Faculty</span>
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

      {/* ═══════════════════════  FACULTY TABLE  ═════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>

          {/* Header */}
          <div ref={bodyRef} className="mb-10" style={slide(bodyInView, 0)}>
            <Eyebrow>Our Team</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Scholars who{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>inspire</em>
              {' '}every class
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-2xl" style={{ color: T.muted500 }}>
              A multi-disciplinary teaching team spanning homoeopathic science, basic medical
              sciences, and clinical medicine — all NCH-qualified for their respective departments.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8" style={slide(bodyInView, 0.1)}>
            <div className="flex items-center gap-1.5 mr-2" style={{ color: T.muted500, fontSize: 12, ...MONO, letterSpacing: '0.1em' }}>
              <Filter size={13} />
              FILTER
            </div>
            {DESIGNATION_FILTERS.map(des => {
              const isActive = filter === des;
              const meta = des !== 'All' ? DESIG_META[des] : null;
              return (
                <button
                  key={des}
                  onClick={() => setFilter(des)}
                  className="px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200"
                  style={{
                    background: isActive ? T.forest800 : `${T.ink900}08`,
                    color:      isActive ? T.cream50   : T.muted500,
                    border:     `1px solid ${isActive ? T.forest800 : T.ink900 + '18'}`,
                    cursor: 'pointer', ...fontBody,
                  }}
                >
                  {des}
                  {des !== 'All' && (
                    <span
                      className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px]"
                      style={{
                        background: isActive ? `${T.gold100}30` : `${T.ink900}10`,
                        color: isActive ? T.gold100 : T.muted500,
                      }}
                    >
                      {FACULTY.filter(f => f.designation === des).length}
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
              ...slide(bodyInView, 0.14),
            }}
          >
            {/* Head */}
            <div
              className="grid px-6 py-3.5 text-[11px] font-semibold tracking-[0.14em] uppercase"
              style={{
                ...MONO,
                background: T.forest800,
                color: `${T.cream50}88`,
                gridTemplateColumns: '3rem 1.6fr 1.1fr 1.4fr 7rem',
                gap: '0 1.5rem',
              }}
            >
              <span>No.</span>
              <span>Name</span>
              <span>Designation</span>
              <span>Department</span>
              <span>Joined</span>
            </div>

            {/* Rows */}
            {filtered.map((f, i) => {
              const meta    = DESIG_META[f.designation] || DESIG_META['Assistant Professor'];
              const deptClr = DEPT_COLORS[f.dept] || T.muted500;
              return (
                <div
                  key={f.sn}
                  className="grid items-center px-6 py-4 transition-colors duration-150"
                  style={{
                    gridTemplateColumns: '3rem 1.6fr 1.1fr 1.4fr 7rem',
                    gap: '0 1.5rem',
                    background: i % 2 === 0 ? '#FFFFFF' : `${T.forest800}04`,
                    borderTop: `1px solid ${T.ink900}08`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.goldFog; }}
                  onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? '#FFFFFF' : `${T.forest800}04`; }}
                >
                  {/* Sn */}
                  <span className="text-[12px] font-semibold" style={{ ...MONO, color: T.muted500 }}>
                    {String(f.sn).padStart(2, '0')}
                  </span>

                  {/* Name + avatar */}
                  <div className="flex items-center gap-3">
                    <Avatar name={f.name} designation={f.designation} />
                    <span className="text-[14px] font-medium leading-snug" style={{ color: T.ink900 }}>{f.name}</span>
                  </div>

                  {/* Designation badge */}
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium w-fit"
                    style={{ background: meta.bg, border: `1px solid ${meta.border}`, color: meta.text }}
                  >
                    {f.designation}
                  </span>

                  {/* Department */}
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: deptClr }}
                    />
                    <span className="text-[13px] leading-snug" style={{ color: T.muted500 }}>{f.dept}</span>
                  </div>

                  {/* Date */}
                  <span className="text-[12px]" style={{ ...MONO, color: T.muted500 }}>{f.doj}</span>
                </div>
              );
            })}
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-3" style={slide(bodyInView, 0.14)}>
            {filtered.map(f => {
              const meta    = DESIG_META[f.designation] || DESIG_META['Assistant Professor'];
              const deptClr = DEPT_COLORS[f.dept] || T.muted500;
              return (
                <div
                  key={f.sn}
                  className="rounded-2xl p-4"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${T.ink900}10`,
                    boxShadow: `0 2px 12px -4px ${T.ink900}08`,
                    borderLeft: `3px solid ${meta.text}`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Avatar name={f.name} designation={f.designation} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[14px] font-semibold leading-snug" style={{ color: T.ink900 }}>{f.name}</p>
                        <span className="text-[10px] flex-shrink-0" style={{ ...MONO, color: T.muted500 }}>{f.doj}</span>
                      </div>
                      <span
                        className="inline-flex items-center mt-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium"
                        style={{ background: meta.bg, border: `1px solid ${meta.border}`, color: meta.text }}
                      >
                        {f.designation}
                      </span>
                      <div className="mt-2 flex items-center gap-1.5 text-[12px]" style={{ color: T.muted500 }}>
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: deptClr }} />
                        {f.dept}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row count */}
          <p className="mt-5 text-[12px]" style={{ ...MONO, color: T.muted500, letterSpacing: '0.08em' }}>
            Showing {filtered.length} of {FACULTY.length} faculty members
            {filter !== 'All' && ` · ${filter}`}
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
            <GraduationCap size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p
            className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            Every faculty member is{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>NCH-qualified</em>
            {' '}and dedicated to clinical excellence in teaching.
          </p>
          <p className="mt-4 text-[14px]" style={{ color: `${T.cream50}66` }}>
            Amaltas Institute of Homoeopathy · Affiliated to MP Medical Science University, Jabalpur
          </p>
        </Container>
      </section>
    </>
  );
}
