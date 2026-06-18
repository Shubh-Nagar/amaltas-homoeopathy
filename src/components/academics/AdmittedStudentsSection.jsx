import React, { useState } from 'react';
import {
  Users, GraduationCap, FileText,
  Download, ExternalLink, X, AlertCircle,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const BATCHES = [
  {
    year: '2025 – 26',
    label: 'Current Batch',
    current: true,
    course: 'BHMS Degree Course',
    sanctioned: 100,
    admitted: 67,
    file: 'Student list batch 25-26.pdf',
    description: 'Complete list of students admitted to the BHMS Degree Programme for the academic year 2025–26, as approved by the National Commission for Homoeopathy and affiliated with MPMSU, Jabalpur.',
  },
  {
    year: '2024 – 25',
    label: 'Previous Batch',
    current: false,
    course: 'BHMS Degree Course',
    sanctioned: 60,
    admitted: 60,
    file: 'UG Students Admited Batch 2024-25.pdf',
    description: 'Complete list of students admitted to the BHMS Degree Programme for the academic year 2024–25. Full intake of 60 seats was achieved for this batch.',
  },
];

const BASE = '/documents/students/';

const slide = (inView, delay = 0) => ({
  opacity:    inView ? 1 : 0,
  transform:  inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

function PdfViewer({ batch }) {
  const [loaded, setLoaded] = useState(false);
  const [error,  setError]  = useState(false);
  const url = BASE + encodeURIComponent(batch.file);
  const fillPct = Math.round((batch.admitted / batch.sanctioned) * 100);
  const full = fillPct === 100;

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: `1px solid ${batch.current ? T.forest800 + '28' : T.ink900 + '10'}`,
        boxShadow: batch.current
          ? `0 8px 36px -8px ${T.forest800}20`
          : `0 4px 18px -4px ${T.ink900}08`,
      }}
    >
      {/* Card header */}
      <div
        className="px-6 py-5"
        style={{
          background: batch.current ? T.forest800 : `${T.forest800}07`,
          borderBottom: `1px solid ${batch.current ? 'transparent' : T.ink900 + '0C'}`,
        }}
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full tracking-wide"
                style={{
                  ...MONO,
                  background: batch.current ? `${T.gold100}20` : `${T.forest800}12`,
                  border: `1px solid ${batch.current ? T.gold100 + '35' : T.forest800 + '28'}`,
                  color: batch.current ? T.gold100 : T.forest800,
                }}
              >
                {batch.label}
              </span>
            </div>
            <p
              className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-1"
              style={{ ...MONO, color: batch.current ? `${T.gold100}80` : T.muted500 }}
            >
              Under Graduate · {batch.course}
            </p>
            <h3
              className="text-[26px] font-semibold"
              style={{ ...fontDisplay, color: batch.current ? T.gold100 : T.gold700 }}
            >
              {batch.year}
            </h3>
          </div>

          {/* Stat pills */}
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div
                className="text-[28px] font-semibold leading-none"
                style={{ ...fontDisplay, color: batch.current ? '#FFFFFF' : T.forest800 }}
              >
                {batch.sanctioned}
              </div>
              <div
                className="text-[10px] tracking-[0.14em] uppercase mt-0.5"
                style={{ ...MONO, color: batch.current ? `${T.cream50}66` : T.muted500 }}
              >
                Sanctioned
              </div>
            </div>
            <div
              className="w-px h-10 self-center"
              style={{ background: batch.current ? `${T.cream50}20` : `${T.ink900}12` }}
            />
            <div className="text-center">
              <div
                className="text-[28px] font-semibold leading-none"
                style={{ ...fontDisplay, color: full ? (batch.current ? T.biolum : T.forest600) : (batch.current ? T.gold100 : T.gold700) }}
              >
                {batch.admitted}
              </div>
              <div
                className="text-[10px] tracking-[0.14em] uppercase mt-0.5"
                style={{ ...MONO, color: batch.current ? `${T.cream50}66` : T.muted500 }}
              >
                Admitted
              </div>
            </div>
          </div>
        </div>

        {/* Fill bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] tracking-[0.12em] uppercase" style={{ ...MONO, color: batch.current ? `${T.cream50}66` : T.muted500 }}>
              Fill rate
            </span>
            <span className="text-[12px] font-bold" style={{ ...MONO, color: batch.current ? T.gold100 : (full ? T.forest600 : T.gold700) }}>
              {fillPct}%{full ? ' · Full Intake' : ''}
            </span>
          </div>
          <div className="w-full h-2 rounded-full" style={{ background: batch.current ? `${T.cream50}15` : `${T.ink900}10` }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${fillPct}%`,
                background: full
                  ? `linear-gradient(90deg, ${T.forest600}, ${T.biolum})`
                  : `linear-gradient(90deg, ${T.gold600}, ${T.gold100})`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Description + actions */}
      <div
        className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        style={{ background: '#FFFFFF', borderBottom: `1px solid ${T.ink900}08` }}
      >
        <p className="text-[13px] leading-relaxed flex-1" style={{ color: T.muted500 }}>
          {batch.description}
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] font-medium transition-all duration-200"
            style={{ background: `${T.forest800}0E`, border: `1px solid ${T.forest800}20`, color: T.forest800, textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = `${T.forest800}18`; }}
            onMouseLeave={e => { e.currentTarget.style.background = `${T.forest800}0E`; }}
          >
            <ExternalLink size={13} strokeWidth={2} />
            New tab
          </a>
          <a
            href={url}
            download={batch.file}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] font-semibold transition-all duration-200"
            style={{ background: T.forest800, color: T.cream50, textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = T.forest600; }}
            onMouseLeave={e => { e.currentTarget.style.background = T.forest800; }}
          >
            <Download size={13} strokeWidth={2.2} />
            Download
          </a>
        </div>
      </div>

      {/* PDF embed */}
      <div className="relative" style={{ background: `${T.ink900}06` }}>
        {!loaded && !error && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
            style={{ background: `${T.cream50}F5`, minHeight: 460 }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center animate-pulse"
              style={{ background: `${T.forest800}12`, border: `1px solid ${T.forest800}20` }}
            >
              <FileText size={22} strokeWidth={1.5} style={{ color: T.forest800 }} />
            </div>
            <p className="text-[12px]" style={{ color: T.muted500, ...MONO }}>Loading document…</p>
          </div>
        )}

        {error ? (
          <div className="flex flex-col items-center justify-center gap-4 py-16 px-6 text-center">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${T.gold600}14`, border: `1px solid ${T.gold600}28` }}
            >
              <AlertCircle size={22} strokeWidth={1.5} style={{ color: T.gold700 }} />
            </div>
            <p className="text-[15px] font-semibold" style={{ ...fontDisplay, color: T.ink900 }}>
              Unable to preview in browser
            </p>
            <p className="text-[13px]" style={{ color: T.muted500 }}>
              Use the "New tab" or "Download" buttons above to access this document.
            </p>
          </div>
        ) : (
          <iframe
            src={`${url}#toolbar=1&navpanes=0&view=FitH`}
            title={`Admitted Students ${batch.year}`}
            style={{ width: '100%', height: 520, border: 'none', display: 'block' }}
            onLoad={() => setLoaded(true)}
            onError={() => { setError(true); setLoaded(true); }}
          />
        )}
      </div>

      {/* File tag */}
      <div
        className="px-6 py-3 flex items-center gap-2"
        style={{ background: '#FFFFFF', borderTop: `1px solid ${T.ink900}06` }}
      >
        <FileText size={12} strokeWidth={2} style={{ color: T.muted500 }} />
        <span className="text-[11px]" style={{ ...MONO, color: T.muted500 }}>
          {batch.file}
        </span>
      </div>
    </div>
  );
}

export default function AdmittedStudentsSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [statsRef, statsInView] = useInView(0.1);
  const [bodyRef,  bodyInView]  = useInView(0.04);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 360, background: T.forest800 }}>
        <img
          src="/campus/homeopathycampus.JPG"
          alt="Amaltas Students"
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
              List of{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Admitted Students</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Official batch-wise student admission lists for the BHMS Degree Programme,
              as submitted to and approved by the National Commission for Homoeopathy.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Academics</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Admitted Students</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  STATS STRIP  ═══════════════════════ */}
      <section className="py-12" style={{ background: T.gold700 }}>
        <Container>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '127', label: 'Total Students (Both Batches)' },
              { value: '2',   label: 'Batches on Record' },
              { value: '100', label: 'Seats (2025–26)' },
              { value: '100%', label: 'Fill Rate (2024–25)' },
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

      {/* ═══════════════════════  PDF CARDS  ════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={bodyRef} className="mb-12" style={slide(bodyInView, 0)}>
            <Eyebrow>Student Records</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Batch-wise{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>admission lists</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-2xl" style={{ color: T.muted500 }}>
              The following documents are the officially verified lists of students admitted
              to the BHMS programme at Amaltas Institute of Homoeopathy for each academic year.
            </p>
          </div>

          <div
            className="space-y-10"
            style={slide(bodyInView, 0.12)}
          >
            {BATCHES.map(batch => (
              <PdfViewer key={batch.year} batch={batch} />
            ))}
          </div>
        </Container>
      </section>

      {/* ═════════════════════  CLOSING STRIP  ════════════════════════ */}
      <section className="py-16 relative overflow-hidden" style={{ background: T.forest800 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <Container className="relative text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}>
            <Users size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug" style={{ ...fontDisplay, color: '#FFFFFF' }}>
            Every name on this list is a{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>future healer</em>
            {' '}we are proud to train.
          </p>
          <p className="mt-4 text-[14px]" style={{ color: `${T.cream50}66` }}>
            Amaltas Institute of Homoeopathy · NCH Recognised · MPMSU Affiliated · Dewas, MP
          </p>
        </Container>
      </section>
    </>
  );
}
