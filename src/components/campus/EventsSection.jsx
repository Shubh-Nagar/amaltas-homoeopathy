import React, { useState } from 'react';
import {
  Calendar, MapPin, Clock, Tag,
  X, ChevronRight, Filter, Users,
  BookOpen, Heart, Award, Stethoscope, Leaf,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

/*
  Swap image paths once real event photos are available.
  Drop photos in public/events/ and update the `image` field.
*/
const EVENTS = [
  {
    id: 1,
    title: 'National Homoeopathy Day Celebration 2025',
    date: '10 April 2025',
    time: '10:00 AM – 4:00 PM',
    venue: 'Main Auditorium, Amaltas Campus',
    category: 'Academic',
    status: 'Past',
    image: '/campus/teaching.png',
    excerpt: 'A grand celebration marking World Homoeopathy Day, featuring guest lectures by eminent homoeopathic physicians, poster presentations by students, and a free health camp for the public.',
    content: `Amaltas Institute of Homoeopathy observed National Homoeopathy Day on 10th April 2025 with a day-long programme dedicated to celebrating the legacy of Dr Samuel Hahnemann and the global contribution of homoeopathic medicine.

The event opened with an inaugural address by the Principal and Medical Superintendent, followed by keynote lectures from distinguished guests on the evolving role of homoeopathy in modern integrative healthcare.

Students from all batches participated in poster presentations covering original research topics, case studies, and materia medica reviews. The event also included a free public OPD camp attended by over 150 community members.

The day concluded with a cultural programme and prize distribution for outstanding poster presentations and quiz competition participants.`,
  },
  {
    id: 2,
    title: 'Free Health Camp — Dewas District',
    date: '22 March 2025',
    time: '9:00 AM – 2:00 PM',
    venue: 'Village Bangar, Dewas',
    category: 'Health Camp',
    status: 'Past',
    image: '/campus/students.JPG',
    excerpt: 'A community outreach health camp organised by the hospital and college, providing free homoeopathic consultation, medicines, and health awareness sessions to over 200 villagers.',
    content: `As part of its ongoing commitment to rural healthcare, Amaltas Institute conducted a free health camp at Village Bangar, Dewas on 22nd March 2025.

A team of senior physicians, resident doctors, and final-year students set up consultation booths, providing homoeopathic consultations for a wide range of conditions including skin disorders, respiratory ailments, digestive complaints, and gynaecological issues.

Over 200 beneficiaries received free consultation and medicines. Health awareness sessions on nutrition, hygiene, seasonal disease prevention, and maternal health were also conducted in the local language.

The camp received wide appreciation from community leaders and the local panchayat, with requests for regular monthly camps at surrounding villages.`,
  },
  {
    id: 3,
    title: 'CME Programme — Classical Homoeopathy in Chronic Disease',
    date: '15 February 2025',
    time: '11:00 AM – 5:00 PM',
    venue: 'Seminar Hall, Amaltas Institute',
    category: 'Academic',
    status: 'Past',
    image: '/campus/clinical-hall.jpg',
    excerpt: 'A Continuing Medical Education programme bringing together faculty and practitioners for an in-depth session on classical case-taking, repertorisation, and long-term management of chronic diseases.',
    content: `The Department of Organon of Medicine and the Research Cell jointly organised a one-day CME Programme on "Classical Homoeopathy in the Management of Chronic Disease" on 15th February 2025.

Resource persons from MPMSU and two senior homoeopathic clinicians from Indore and Ujjain addressed faculty, resident doctors, and final-year students on topics including:

- Miasmatic analysis in chronic case management
- Hering's law of cure and its clinical application
- Case examples with multi-year follow-up
- Research methodology for homoeopathic practice

Interactive case-discussion sessions were held in the afternoon, with participants presenting real cases for group analysis and feedback. CME certificates were issued to all registered attendees.`,
  },
  {
    id: 4,
    title: 'Annual Sports Day 2025',
    date: '5 January 2025',
    time: '8:00 AM – 6:00 PM',
    venue: 'Sports Ground, Amaltas Campus',
    category: 'Sports',
    status: 'Past',
    image: '/campus/2U8A0340.jpg',
    excerpt: 'The annual inter-batch sports meet featuring athletic events, team sports, and traditional games — celebrating fitness, teamwork, and the spirit of healthy competition among students and staff.',
    content: `Amaltas Institute held its Annual Sports Day on 5th January 2025, bringing together students, faculty, and staff for a full day of athletic events and team competitions.

The programme included track and field events (100m, 200m, relay), volleyball, kabaddi, tug-of-war, and a faculty vs. students cricket match that drew enthusiastic cheering from all corners of the campus.

The Principal emphasised the importance of physical fitness as an integral part of a medical professional's life — both as a personal discipline and as a demonstration to patients of the holistic approach to health that homoeopathy embodies.

Winners were felicitated at a prize distribution ceremony, with trophies presented by the Director and Principal. The event was coordinated by the Student Council with full faculty participation.`,
  },
  {
    id: 5,
    title: 'Amaltas Utsav — Annual Cultural Festival',
    date: '18 December 2024',
    time: '5:00 PM – 10:00 PM',
    venue: 'Open Air Amphitheatre, Amaltas Campus',
    category: 'Cultural',
    status: 'Past',
    image: '/campus/2U8A2069.jpg',
    excerpt: 'The much-anticipated annual cultural evening showcasing student talent through music, dance, drama, and literary performances — celebrating diversity and creativity on campus.',
    content: `Amaltas Utsav 2024 was a vibrant celebration of student talent and cultural diversity, held under the open sky at the campus amphitheatre on 18th December.

The evening featured classical and folk dance performances, a one-act play on the life of Dr Samuel Hahnemann, solo and group musical performances, and a poetry recitation competition in Hindi and English.

Over 300 students, faculty members, and their families attended the event, which was curated and managed entirely by the Student Cultural Committee. Special recognition was given to first-year students for the most creative group performance.

The festival is an annual tradition that the institute uses to build community, celebrate regional culture, and provide students with a platform for artistic expression outside the academic routine.`,
  },
  {
    id: 6,
    title: 'Anti-Ragging Awareness Week',
    date: '3 – 8 November 2024',
    time: 'All Day',
    venue: 'Amaltas Institute Campus',
    category: 'Awareness',
    status: 'Past',
    image: '/campus/campus.jpg',
    excerpt: 'A week-long awareness drive promoting a ragging-free campus culture through workshops, pledge drives, street plays, and interactive sessions with the Anti-Ragging Cell.',
    content: `In accordance with UGC and NCH directives, Amaltas Institute conducted its annual Anti-Ragging Awareness Week from 3rd to 8th November 2024.

The week comprised daily activities including:
- Day 1: Pledge ceremony with all students and staff
- Day 2: Street play depicting consequences of ragging and harassment
- Day 3: Workshop on mental health and peer support
- Day 4: Interactive session with the Anti-Ragging Cell and student counsellor
- Day 5: Essay and poster competition on campus safety
- Day 6: Declaration of zero-tolerance policy re-affirmation by Principal

All students and staff signed the anti-ragging declaration form, which was submitted to the relevant regulatory authorities. The Anti-Ragging helpline number was prominently displayed across all campus notice boards.`,
  },
  {
    id: 7,
    title: 'Free Health Camp — Ujjain Outreach',
    date: '14 October 2024',
    time: '9:30 AM – 1:30 PM',
    venue: 'PHC Campus, Ujjain District',
    category: 'Health Camp',
    status: 'Past',
    image: '/campus/amaltas_photo.jpeg',
    excerpt: 'A joint health camp with the local PHC serving underserved communities in Ujjain district — providing free homoeopathic consultation, basic diagnostics, and medicine distribution.',
    content: `In collaboration with the Primary Health Centre, Ujjain District, Amaltas Institute conducted a free health camp on 14th October 2024 serving semi-rural communities with limited access to specialist care.

The camp was staffed by two senior physicians, four resident doctors, and eight final-year BHMS students under clinical supervision. Services provided included:

- Homoeopathic consultation for acute and chronic cases
- Basic vital sign monitoring (BP, weight, temperature)
- Free medicine distribution for diagnosed cases
- Nutritional counselling for mothers and children
- Referral cards for cases requiring further investigation

Approximately 180 patients were attended to. The camp generated positive feedback from local health workers and community members, and serves as part of the institute's mandatory community service programme.`,
  },
  {
    id: 8,
    title: 'Guest Lecture — Advanced Materia Medica',
    date: '2 September 2024',
    time: '2:00 PM – 5:00 PM',
    venue: 'Lecture Hall 1, Amaltas Institute',
    category: 'Academic',
    status: 'Past',
    image: '/campus/experiment.png',
    excerpt: 'An engaging guest lecture by a renowned homoeopathic educator on comparative materia medica, covering polychrest remedies and their distinguishing keynotes for clinical prescribing.',
    content: `The Department of Homoeopathic Materia Medica organised a guest lecture on "Advanced Comparative Materia Medica for the Clinician" on 2nd September 2024, featuring a visiting professor from a leading homoeopathic medical college.

The session covered:
- Differentiation of commonly confused polychrest remedies (Natrum Mur, Sepia, Pulsatilla)
- Keynote approach vs. constitutional prescribing — a comparative discussion
- Clinical cases demonstrating remedy selection in practice
- Common prescribing errors and how to avoid them

The lecture drew attendance from students across all years, resident doctors, and faculty members. An interactive Q&A session followed, with the guest physician answering detailed clinical questions from students.

The Department has planned a series of such guest interactions for the current academic year.`,
  },
  {
    id: 9,
    title: "Fresher's Welcome Ceremony 2024",
    date: '15 August 2024',
    time: '11:00 AM – 2:00 PM',
    venue: 'Main Auditorium, Amaltas Campus',
    category: 'Cultural',
    status: 'Past',
    image: '/campus/435A3291.JPG',
    excerpt: "A warm welcome ceremony for the newly admitted BHMS batch of 2024–25, introducing them to campus life, faculty, and the values and traditions of Amaltas Institute.",
    content: `Amaltas Institute welcomed its new BHMS batch on 15th August 2024 with a formal Fresher's Welcome Ceremony that coincided with Independence Day celebrations on campus.

The programme began with the hoisting of the national flag and a patriotic cultural performance, followed by the official welcome address by the Principal, who spoke about the institute's mission, values, and expectations from the incoming batch.

Each department head introduced themselves and gave a brief overview of the curriculum, clinical training, and support systems available to students. Senior students from the second and third year batches performed a cultural programme and shared their personal experiences of life at Amaltas.

The ceremony concluded with a group photograph of the entire new batch with faculty and a campus orientation walk. New students were paired with senior mentors as part of the institute's buddy programme for academic and personal support.`,
  },
];

const CATEGORIES = ['All', 'Academic', 'Health Camp', 'Cultural', 'Sports', 'Awareness'];

const CAT_META = {
  Academic:    { color: T.forest800, bg: `${T.forest800}12`, border: `${T.forest800}28`, icon: BookOpen },
  'Health Camp':{ color: '#C0392B',  bg: '#C0392B10',        border: '#C0392B28',        icon: Heart },
  Cultural:    { color: '#8A4A6E',   bg: '#8A4A6E12',        border: '#8A4A6E28',        icon: Award },
  Sports:      { color: '#2E6A8A',   bg: '#2E6A8A12',        border: '#2E6A8A28',        icon: Users },
  Awareness:   { color: T.gold700,   bg: `${T.gold600}14`,   border: `${T.gold600}30`,   icon: Leaf },
};

const slide = (inView, delay = 0) => ({
  opacity:    inView ? 1 : 0,
  transform:  inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

function EventModal({ event, onClose }) {
  const meta = CAT_META[event.category];
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 lg:p-8"
      style={{ background: 'rgba(6,15,11,0.88)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl flex flex-col rounded-t-3xl sm:rounded-2xl overflow-hidden"
        style={{
          background: T.cream50,
          boxShadow: `0 32px 80px -16px ${T.ink900}50`,
          maxHeight: '92vh',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative flex-shrink-0" style={{ height: 200 }}>
          <img
            src={event.image}
            alt={event.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            draggable="false"
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${T.ink900}BB 0%, transparent 50%)` }} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(6,15,11,0.55)', border: `1px solid ${T.cream50}28`, color: T.cream50, cursor: 'pointer' }}
          >
            <X size={16} strokeWidth={2.2} />
          </button>
          <span
            className="absolute bottom-4 left-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
            style={{ background: meta.bg, border: `1px solid ${meta.border}`, color: meta.color }}
          >
            {event.category}
          </span>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">
          <div className="px-6 pt-5 pb-8">
            <h2
              className="text-[22px] font-semibold leading-snug mb-4"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              {event.title}
            </h2>

            {/* Meta row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6 pb-5" style={{ borderBottom: `1px solid ${T.ink900}0C` }}>
              {[
                { icon: Calendar, text: event.date },
                { icon: Clock,    text: event.time },
                { icon: MapPin,   text: event.venue },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-[13px]" style={{ color: T.muted500 }}>
                  <Icon size={13} strokeWidth={2} style={{ color: T.gold700, flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>

            {/* Full content */}
            <div className="space-y-3">
              {event.content.split('\n\n').map((para, i) => (
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

function EventCard({ event, onRead, index, inView }) {
  const meta = CAT_META[event.category];
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
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 200 }}>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${T.ink900}88 0%, transparent 55%)` }} />

        {/* Category badge */}
        <span
          className="absolute top-3 left-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
          style={{ background: meta.bg, border: `1px solid ${meta.border}`, color: meta.color, backdropFilter: 'blur(4px)' }}
        >
          {event.category}
        </span>

        {/* Date badge */}
        <div
          className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px]"
          style={{ color: T.cream50 }}
        >
          <Calendar size={11} strokeWidth={2} />
          <span style={MONO}>{event.date}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3
          className="text-[17px] font-semibold leading-snug"
          style={{ ...fontDisplay, color: T.ink900 }}
        >
          {event.title}
        </h3>

        <div className="flex items-start gap-1.5 text-[12px]" style={{ color: T.muted500 }}>
          <MapPin size={12} strokeWidth={2} className="mt-0.5 flex-shrink-0" style={{ color: T.gold600 }} />
          {event.venue}
        </div>

        <p className="text-[13.5px] leading-[1.7] flex-1" style={{ color: T.muted500 }}>
          {event.excerpt}
        </p>

        {/* Read more */}
        <button
          onClick={() => onRead(event)}
          className="mt-1 self-start inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200 group/btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.forest800, padding: 0 }}
          onMouseEnter={e => { e.currentTarget.style.color = T.forest600; }}
          onMouseLeave={e => { e.currentTarget.style.color = T.forest800; }}
        >
          Read More
          <ChevronRight
            size={15}
            strokeWidth={2.2}
            className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
          />
        </button>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [statsRef, statsInView] = useInView(0.1);
  const [gridRef,  gridInView]  = useInView(0.04);
  const [filter, setFilter]     = useState('All');
  const [modal,  setModal]      = useState(null);

  const filtered = filter === 'All' ? EVENTS : EVENTS.filter(e => e.category === filter);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 380, background: T.forest800 }}>
        <img
          src="/campus/2U8A7507.jpg"
          alt="Amaltas Events"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', opacity: 0.28 }}
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
              Events &{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Activities</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              From community health camps to cultural festivals, CME programmes to sports days —
              life at Amaltas extends well beyond the classroom.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Campus Life</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Events</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  STATS STRIP  ═══════════════════════ */}
      <section className="py-12" style={{ background: T.gold700 }}>
        <Container>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '9+',    label: 'Events This Year' },
              { value: '2',     label: 'Health Camps' },
              { value: '3',     label: 'Academic Programmes' },
              { value: '400+',  label: 'Patients Served' },
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

      {/* ═══════════════════════  EVENTS GRID  ══════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>

          {/* Header */}
          <div ref={gridRef} className="mb-10" style={slide(gridInView, 0)}>
            <Eyebrow>All Events</Eyebrow>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4">
              <h2
                className="text-[30px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                What's been{' '}
                <em style={{ color: T.gold700, fontStyle: 'italic' }}>happening</em>
                {' '}on campus
              </h2>
              <p className="text-[13px]" style={{ ...MONO, color: T.muted500, letterSpacing: '0.08em' }}>
                {filtered.length} event{filtered.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10" style={slide(gridInView, 0.08)}>
            <div className="flex items-center gap-1.5 mr-1" style={{ color: T.muted500, fontSize: 12, ...MONO, letterSpacing: '0.1em' }}>
              <Filter size={13} />
              FILTER
            </div>
            {CATEGORIES.map(cat => {
              const isActive = filter === cat;
              const meta = cat !== 'All' ? CAT_META[cat] : null;
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
                      style={{
                        background: isActive ? `${T.gold100}30` : `${T.ink900}10`,
                        color: isActive ? T.gold100 : T.muted500,
                      }}
                    >
                      {EVENTS.filter(e => e.category === cat).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event, i) => (
              <EventCard
                key={event.id}
                event={event}
                onRead={setModal}
                index={i}
                inView={gridInView}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[16px]" style={{ color: T.muted500 }}>No events in this category yet.</p>
            </div>
          )}
        </Container>
      </section>

      {/* ═════════════════════  CLOSING STRIP  ════════════════════════ */}
      <section className="py-16 relative overflow-hidden" style={{ background: T.forest800 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <Container className="relative text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}>
            <Calendar size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug" style={{ ...fontDisplay, color: '#FFFFFF' }}>
            Every event at Amaltas is an extension of our{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>mission to heal and serve.</em>
          </p>
          <p className="mt-4 text-[14px]" style={{ color: `${T.cream50}66` }}>
            Stay connected for upcoming events, health camps, and academic programmes.
          </p>
        </Container>
      </section>

      {/* Modal */}
      {modal && <EventModal event={modal} onClose={() => setModal(null)} />}
    </>
  );
}
