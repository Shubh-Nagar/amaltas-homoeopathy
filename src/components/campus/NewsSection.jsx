import React, { useState } from 'react';
import {
  Newspaper, Calendar, Tag, ChevronRight,
  X, Filter, Clock, User,
  GraduationCap, Heart, Award, Stethoscope, Megaphone,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const NEWS = [
  {
    id: 1,
    title: 'Amaltas Institute Receives Enhanced NCH Recognition for 2025–26',
    date: '12 May 2025',
    author: 'Admin Office',
    category: 'Institutional',
    image: '/campus/homeopathycampus.JPG',
    excerpt: 'The National Commission for Homoeopathy has granted enhanced recognition to Amaltas Institute of Homoeopathy for the academic year 2025–26, raising the sanctioned intake from 60 to 100 seats.',
    content: `Amaltas Institute of Homoeopathy, Hospital and Research Centre has received enhanced recognition from the National Commission for Homoeopathy (NCH), New Delhi, with the sanctioned intake capacity for the BHMS Degree Programme raised from 60 to 100 seats for the academic year 2025–26.

This milestone reflects the institute's continuous investment in infrastructure, faculty development, and clinical facilities over the past four years. The NCH inspection team, which visited the campus in early 2025, commended the institute's teaching hospital, library resources, and faculty qualifications.

The Principal and Medical Superintendent, Dr. Yogendra Singh Bhadoriya, expressed gratitude to the Chairman, Director, and the entire team for their collective effort in achieving this recognition. "This is a testament to the hard work of every faculty member and staff who have built this institution from the ground up," he said.

Admissions for the 2025–26 batch are now open. Eligible NEET-qualified candidates are encouraged to apply through the official MPMSU counselling process.`,
  },
  {
    id: 2,
    title: "Amaltas Tops District in Homoeopathy OPD Attendance — 2024 Report",
    date: '3 April 2025',
    author: 'Hospital Administration',
    category: 'Hospital',
    image: '/campus/clinical-hall.jpg',
    excerpt: 'The annual hospital report for 2024 confirms that Amaltas Teaching Hospital recorded the highest daily OPD attendance among homoeopathic institutions in Dewas district.',
    content: `The annual clinical report for the year 2024, released by the Hospital Administration, confirms that Amaltas Teaching Hospital recorded the highest daily Out-Patient Department (OPD) attendance among all homoeopathic institutions operating in Dewas district.

The hospital registered over 12,000 patient consultations across the year, averaging more than 40 OPD cases per day. The most attended speciality clinics were skin and dermatology, respiratory, and women's health — reflecting the strength of the institute's specialist physician roster.

The In-Patient Department (IPD) maintained consistent occupancy, with the obstetrics and general medicine wards reporting the highest admission rates.

Medical Superintendent Dr. Yogendra Singh Bhadoriya attributed the growth to the expanding reputation of the hospital in surrounding villages and the dedicated work of the resident doctor team. Plans to extend evening OPD hours are under consideration for 2025.`,
  },
  {
    id: 3,
    title: 'Faculty Research Paper Published in National Homoeopathy Journal',
    date: '18 March 2025',
    author: 'Research Cell',
    category: 'Research',
    image: '/campus/experiment.png',
    excerpt: 'A research paper co-authored by Amaltas faculty on the homoeopathic management of PCOS has been accepted for publication in a nationally indexed homoeopathy journal.',
    content: `A research paper titled "Polycystic Ovarian Syndrome and Management Through Alternative Approaches" co-authored by faculty members of the Department of Practice of Medicine has been accepted for publication in a nationally indexed homoeopathic journal.

The paper reviews the growing evidence base for alternative and complementary approaches — with a particular focus on homoeopathic constitutional treatment — in the management of PCOS, a condition affecting approximately 1 in 10 women of reproductive age in India.

The research was conducted over a two-year period involving case documentation and outcome tracking at the institute's teaching hospital OPD. The study included 42 patients presenting with confirmed PCOS and documented outcomes across a minimum 12-month treatment period.

This publication adds to the institute's growing research portfolio, which now includes nine published and pre-print papers across dermatology, nephrology, gastroenterology, and women's health. The Research Cell has announced plans to submit three further papers before the end of 2025.`,
  },
  {
    id: 4,
    title: 'New Digital Library Terminal Inaugurated at Amaltas Institute',
    date: '1 March 2025',
    author: 'Library Committee',
    category: 'Campus',
    image: '/campus/teaching.png',
    excerpt: 'The library received a major upgrade with the inauguration of a new digital library terminal, giving students and faculty access to online databases, e-journals, and the AYUSH digital repository.',
    content: `Amaltas Institute of Homoeopathy inaugurated a new Digital Library Terminal on 1st March 2025, significantly expanding the academic resources available to students and faculty.

The terminal provides access to:
- The National AYUSH Digital Repository
- Subscription-based homoeopathic e-journal collections
- MPMSU online library resources
- Open-access medical databases including PubMed and DOAJ
- Digital editions of key homoeopathic reference texts

The inauguration was presided over by the Principal, who emphasised the importance of evidence-based learning and research culture among students. The Librarian conducted a hands-on orientation session for all batches across two days following the inauguration.

The digital terminal complements the existing physical collection of 2,609 books and is available to all enrolled students and faculty during library hours.`,
  },
  {
    id: 5,
    title: 'Amaltas Students Win Awards at State-Level Homoeopathy Quiz',
    date: '10 February 2025',
    author: 'Student Affairs',
    category: 'Achievement',
    image: '/campus/students.JPG',
    excerpt: 'Three final-year BHMS students represented Amaltas Institute at the MPMSU State-Level Homoeopathy Quiz Competition and returned with First Place in the team event.',
    content: `Three final-year BHMS students from Amaltas Institute of Homoeopathy represented the institution at the MPMSU State-Level Homoeopathy Quiz Competition held at Jabalpur on 8th–9th February 2025 and secured First Place in the team event.

The competition, organised by MP Medical Science University, drew participants from 14 homoeopathic colleges across Madhya Pradesh. The quiz covered topics spanning organon of medicine, materia medica, repertory, clinical case analysis, and current affairs in homoeopathy.

The winning team was felicitated by the Principal on their return to campus, and their achievement was shared with the NCH as part of the institute's annual academic excellence report.

The Head of Department of Repertory, Dr. Shehla Jaffri, who coached the team, credited the students' success to their consistent study habits and regular participation in the institute's internal quiz and seminar programme.`,
  },
  {
    id: 6,
    title: "Admissions Open for BHMS 2025–26 — Apply Through MPMSU Counselling",
    date: '5 January 2025',
    author: 'Admissions Office',
    category: 'Admissions',
    image: '/campus/amaltas_photo.jpeg',
    excerpt: "Applications are now open for the BHMS Degree Programme 2025–26 at Amaltas Institute of Homoeopathy. Eligible NEET-qualified candidates must apply through the official MPMSU counselling portal.",
    content: `Amaltas Institute of Homoeopathy, Hospital and Research Centre is pleased to announce that admissions for the Bachelor of Homoeopathic Medicine and Surgery (BHMS) Degree Programme for the academic year 2025–26 are now open.

Eligibility Criteria:
- Passed 10+2 or equivalent with Physics, Chemistry, and Biology
- Valid NEET-UG score in the current or previous academic year
- Minimum 50% aggregate in PCB (45% for reserved categories)
- Age: 17 years or above as on 31st December 2025

How to Apply:
Admissions are conducted exclusively through the MP Medical Science University (MPMSU) centralised counselling process. Candidates must register on the official MPMSU counselling portal and exercise their college preference during the allotment rounds.

Sanctioned Intake: 100 seats (2025–26)
Programme Duration: 5½ years including 1 year compulsory rotating internship

For admission enquiries, contact the Admissions Office at the institute or call our toll-free number: 1800-571-2113.`,
  },
  {
    id: 7,
    title: 'Anti-Ragging Declaration 2025 Submitted to NCH',
    date: '20 December 2024',
    author: 'Admin Office',
    category: 'Institutional',
    image: '/campus/campus.jpg',
    excerpt: 'Amaltas Institute has submitted its annual anti-ragging compliance declaration to the NCH, reaffirming a zero-tolerance policy and reporting the successful completion of its Anti-Ragging Awareness Week.',
    content: `In compliance with National Commission for Homoeopathy (NCH) and UGC guidelines, Amaltas Institute of Homoeopathy has submitted its Annual Anti-Ragging Compliance Declaration for 2025.

The declaration confirms:
- Zero ragging incidents reported during the academic year 2024–25
- Successful conduct of Anti-Ragging Awareness Week (3rd–8th November 2024)
- Active Anti-Ragging Cell with student and faculty representatives
- Anti-Ragging helpline prominently displayed across all campus buildings
- All students and staff have signed the anti-ragging undertaking

The institute reaffirms its commitment to maintaining a safe, respectful, and harassment-free campus environment for all students, particularly new admissions.

The Anti-Ragging Cell can be reached directly at the institute's main reception. All complaints are treated with strict confidentiality and acted upon within 24 hours.`,
  },
  {
    id: 8,
    title: "Amaltas Hospital Introduces Dedicated Women's Health Clinic",
    date: '1 November 2024',
    author: 'Hospital Administration',
    category: 'Hospital',
    image: '/campus/2U8A4243.jpg',
    excerpt: "The teaching hospital has launched a dedicated Women's Health Clinic offering specialised homoeopathic consultation for gynaecological conditions, PCOS, infertility, and maternal health.",
    content: `Amaltas Teaching Hospital has launched a dedicated Women's Health Clinic, offering specialised homoeopathic and integrated medical consultation for a range of conditions affecting women across all life stages.

The clinic, operating every Tuesday and Thursday from 10:00 AM to 1:00 PM, is staffed by the institute's Obstetrician & Gynaecologist and a senior homoeopathic physician with expertise in women's constitutional health.

Services offered:
- Homoeopathic consultation for PCOS, irregular menstruation, and hormonal disorders
- Antenatal and postnatal care
- Management of infertility through homoeopathic and integrative approaches
- Gynaecological investigation and referral
- Nutritional and lifestyle counselling for women's health

The clinic was established in response to the high proportion of women presenting at the OPD with gynaecological complaints and reflects the hospital's commitment to providing gender-sensitive, holistic healthcare. Appointments can be booked at the hospital reception.`,
  },
];

const CATEGORIES = ['All', 'Institutional', 'Hospital', 'Research', 'Campus', 'Achievement', 'Admissions'];

const CAT_META = {
  Institutional: { color: T.forest800, bg: `${T.forest800}12`, border: `${T.forest800}28` },
  Hospital:      { color: '#C0392B',   bg: '#C0392B10',        border: '#C0392B28' },
  Research:      { color: '#2E6A8A',   bg: '#2E6A8A12',        border: '#2E6A8A28' },
  Campus:        { color: '#5A4A8A',   bg: '#5A4A8A12',        border: '#5A4A8A28' },
  Achievement:   { color: T.gold700,   bg: `${T.gold600}14`,   border: `${T.gold600}30` },
  Admissions:    { color: T.forest600, bg: `${T.forest600}12`, border: `${T.forest600}28` },
};

const slide = (inView, delay = 0) => ({
  opacity:    inView ? 1 : 0,
  transform:  inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

function NewsModal({ item, onClose }) {
  const meta = CAT_META[item.category];
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 lg:p-8"
      style={{ background: 'rgba(6,15,11,0.88)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl flex flex-col rounded-t-3xl sm:rounded-2xl overflow-hidden"
        style={{ background: T.cream50, boxShadow: `0 32px 80px -16px ${T.ink900}50`, maxHeight: '92vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative flex-shrink-0" style={{ height: 210 }}>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            draggable="false"
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${T.ink900}CC 0%, transparent 50%)` }} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(6,15,11,0.55)', border: `1px solid ${T.cream50}28`, color: T.cream50, cursor: 'pointer' }}
          >
            <X size={16} strokeWidth={2.2} />
          </button>
          <span
            className="absolute bottom-4 left-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
            style={{ background: meta.bg, border: `1px solid ${meta.border}`, color: meta.color, backdropFilter: 'blur(4px)' }}
          >
            {item.category}
          </span>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1">
          <div className="px-6 pt-5 pb-8">
            <h2 className="text-[21px] font-semibold leading-snug mb-4" style={{ ...fontDisplay, color: T.ink900 }}>
              {item.title}
            </h2>
            <div
              className="flex flex-wrap gap-x-5 gap-y-2 mb-6 pb-5"
              style={{ borderBottom: `1px solid ${T.ink900}0C` }}
            >
              {[
                { icon: Calendar, text: item.date },
                { icon: User,     text: item.author },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-[12px]" style={{ color: T.muted500 }}>
                  <Icon size={12} strokeWidth={2} style={{ color: T.gold600, flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {item.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-[14px] leading-[1.85]" style={{ color: para.startsWith('-') ? T.muted500 : T.ink900 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsCard({ item, onRead, index, inView }) {
  const meta = CAT_META[item.category];
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col group"
      style={{
        background: '#FFFFFF',
        border: `1px solid ${T.ink900}0E`,
        boxShadow: `0 4px 20px -4px ${T.ink900}08`,
        opacity:   inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${0.07 * index}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.07 * index}s, box-shadow 0.25s ease`,
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 14px 40px -8px ${T.ink900}16`; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 4px 20px -4px ${T.ink900}08`; }}
    >
      {/* Image */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 196 }}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${T.ink900}88 0%, transparent 55%)` }} />
        <span
          className="absolute top-3 left-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
          style={{ background: meta.bg, border: `1px solid ${meta.border}`, color: meta.color, backdropFilter: 'blur(4px)' }}
        >
          {item.category}
        </span>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px]" style={{ color: T.cream50 }}>
          <Calendar size={11} strokeWidth={2} />
          <span style={MONO}>{item.date}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-[16px] font-semibold leading-snug" style={{ ...fontDisplay, color: T.ink900 }}>
          {item.title}
        </h3>
        <div className="flex items-center gap-1.5 text-[12px]" style={{ color: T.muted500 }}>
          <User size={11} strokeWidth={2} style={{ color: T.gold600, flexShrink: 0 }} />
          {item.author}
        </div>
        <p className="text-[13.5px] leading-[1.7] flex-1" style={{ color: T.muted500 }}>
          {item.excerpt}
        </p>
        <button
          onClick={() => onRead(item)}
          className="mt-1 self-start inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-200"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.forest800, padding: 0 }}
          onMouseEnter={e => { e.currentTarget.style.color = T.forest600; }}
          onMouseLeave={e => { e.currentTarget.style.color = T.forest800; }}
        >
          Read More
          <ChevronRight size={15} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}

/* Featured (first) news card — wider layout */
function FeaturedCard({ item, onRead, inView }) {
  const meta = CAT_META[item.category];
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col lg:flex-row group mb-6"
      style={{
        background: '#FFFFFF',
        border: `1px solid ${T.ink900}0E`,
        boxShadow: `0 8px 32px -8px ${T.ink900}10`,
        ...slide(inView, 0),
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 16px 48px -10px ${T.ink900}18`; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 8px 32px -8px ${T.ink900}10`; }}
    >
      {/* Image */}
      <div className="relative overflow-hidden flex-shrink-0 lg:w-1/2" style={{ minHeight: 260 }}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ minHeight: 260 }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${T.ink900}88 0%, transparent 50%)` }} />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold"
            style={{ background: meta.bg, border: `1px solid ${meta.border}`, color: meta.color, backdropFilter: 'blur(4px)' }}
          >
            {item.category}
          </span>
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold"
            style={{ background: `${T.gold600}CC`, color: T.ink900, ...MONO }}
          >
            LATEST
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-7 flex flex-col justify-center gap-4 flex-1">
        <div className="flex items-center gap-3 text-[12px]" style={{ color: T.muted500 }}>
          <span className="flex items-center gap-1.5"><Calendar size={12} strokeWidth={2} style={{ color: T.gold600 }} />{item.date}</span>
          <span className="w-1 h-1 rounded-full" style={{ background: T.muted500 }} />
          <span className="flex items-center gap-1.5"><User size={12} strokeWidth={2} style={{ color: T.gold600 }} />{item.author}</span>
        </div>
        <h3 className="text-[22px] lg:text-[26px] font-semibold leading-snug" style={{ ...fontDisplay, color: T.ink900 }}>
          {item.title}
        </h3>
        <p className="text-[14px] leading-[1.78]" style={{ color: T.muted500 }}>{item.excerpt}</p>
        <button
          onClick={() => onRead(item)}
          className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200"
          style={{ background: T.forest800, color: T.cream50, border: 'none', cursor: 'pointer' }}
          onMouseEnter={e => { e.currentTarget.style.background = T.forest600; }}
          onMouseLeave={e => { e.currentTarget.style.background = T.forest800; }}
        >
          Read Full Story <ChevronRight size={15} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [statsRef, statsInView] = useInView(0.1);
  const [gridRef,  gridInView]  = useInView(0.04);
  const [filter, setFilter]     = useState('All');
  const [modal,  setModal]      = useState(null);

  const filtered   = filter === 'All' ? NEWS : NEWS.filter(n => n.category === filter);
  const featured   = filtered[0];
  const rest        = filtered.slice(1);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 380, background: T.forest800 }}>
        <img
          src="/campus/2U8A2069.jpg"
          alt="Amaltas News"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', opacity: 0.26 }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${T.forest800}EE 0%, ${T.ink900}BB 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}18 1px, transparent 1px)`, backgroundSize: '36px 36px', pointerEvents: 'none' }} />
        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-28">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}><Eyebrow light>Campus Life</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Latest{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>News</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Stay up to date with the latest announcements, achievements, and developments
              from Amaltas Institute of Homoeopathy.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Campus Life</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>News</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  STATS STRIP  ═══════════════════════ */}
      <section className="py-12" style={{ background: T.gold700 }}>
        <Container>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '8',    label: 'News Items' },
              { value: '6',    label: 'Categories' },
              { value: '2025', label: 'Latest Update' },
              { value: '100%', label: 'Open Access' },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                style={{
                  opacity:   statsInView ? 1 : 0,
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

      {/* ═══════════════════════  NEWS GRID  ════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>

          {/* Header + filter */}
          <div ref={gridRef} className="mb-10" style={slide(gridInView, 0)}>
            <Eyebrow>Latest Updates</Eyebrow>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4">
              <h2
                className="text-[30px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                What's{' '}
                <em style={{ color: T.gold700, fontStyle: 'italic' }}>new</em>
                {' '}at Amaltas
              </h2>
              <p className="text-[13px]" style={{ ...MONO, color: T.muted500, letterSpacing: '0.08em' }}>
                {filtered.length} article{filtered.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10" style={slide(gridInView, 0.08)}>
            <div className="flex items-center gap-1.5 mr-1" style={{ color: T.muted500, fontSize: 12, ...MONO, letterSpacing: '0.1em' }}>
              <Filter size={13} />
              FILTER
            </div>
            {CATEGORIES.map(cat => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200"
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
                      className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px]"
                      style={{ background: isActive ? `${T.gold100}30` : `${T.ink900}10`, color: isActive ? T.gold100 : T.muted500 }}
                    >
                      {NEWS.filter(n => n.category === cat).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Featured card */}
          {featured && <FeaturedCard item={featured} onRead={setModal} inView={gridInView} />}

          {/* Rest grid */}
          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((item, i) => (
                <NewsCard
                  key={item.id}
                  item={item}
                  onRead={setModal}
                  index={i + 1}
                  inView={gridInView}
                />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[16px]" style={{ color: T.muted500 }}>No news in this category yet.</p>
            </div>
          )}
        </Container>
      </section>

      {/* ═════════════════════  CLOSING STRIP  ════════════════════════ */}
      <section className="py-16 relative overflow-hidden" style={{ background: T.forest800 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <Container className="relative text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}>
            <Newspaper size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug" style={{ ...fontDisplay, color: '#FFFFFF' }}>
            Every update reflects our{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>growth</em>
            {' '}as an institution.
          </p>
          <p className="mt-4 text-[14px]" style={{ color: `${T.cream50}66` }}>
            For media enquiries: homoeopathy@amaltasgroup.co.in · Toll Free: 1800-571-2113
          </p>
        </Container>
      </section>

      {modal && <NewsModal item={modal} onClose={() => setModal(null)} />}
    </>
  );
}
