import React, { useState } from 'react';
import {
  CalendarDays, BookOpen, FlaskConical, ClipboardList,
  GraduationCap, FileText, Download, ExternalLink,
  AlertCircle, ChevronRight,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };
const PDF_URL = '/documents/Academic%20calender%202025-26.pdf';

const HIGHLIGHTS = [
  {
    icon: BookOpen,
    title: 'Theory Classes',
    body: 'Regular didactic lectures, seminars, and tutorials as per the BHMS curriculum prescribed by the affiliating university.',
    accent: T.forest800,
  },
  {
    icon: FlaskConical,
    title: 'Practical & Clinical',
    body: 'Laboratory practicals, clinical postings, and OPD training sessions are scheduled throughout the academic session.',
    accent: '#2E6A8A',
  },
  {
    icon: ClipboardList,
    title: 'Internal Assessments',
    body: 'Unit tests, viva voce, and continuous internal assessment examinations conducted at regular intervals during the term.',
    accent: T.gold700,
  },
  {
    icon: GraduationCap,
    title: 'University Examinations',
    body: 'Dates of university theory and practical examinations as notified by the affiliating university for all BHMS years.',
    accent: '#8A4A6E',
  },
];

const TERMS = [
  {
    term: 'First Term',
    period: 'July – October 2025',
    events: [
      'Commencement of classes for all batches',
      'First unit test — Theory & Practical',
      'Internal assessment submission',
      'Clinical posting schedule — Phase I',
    ],
  },
  {
    term: 'Second Term',
    period: 'November 2025 – February 2026',
    events: [
      'Second unit test — all subjects',
      'Pre-university practical examinations',
      'Model examinations for final year',
      'Winter health camps & outreach',
    ],
  },
  {
    term: 'Third Term',
    period: 'March – June 2026',
    events: [
      'University theory examinations',
      'University practical examinations',
      'Result declaration & promotions',
      'Annual day & convocation events',
    ],
  },
];

const slide = (inView, delay = 0) => ({
  opacity:   inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function AcademicCalendarSection() {
  const [heroRef,    heroInView]    = useInView(0.08);
  const [hiRef,      hiInView]      = useInView(0.05);
  const [termsRef,   termsInView]   = useInView(0.05);
  const [pdfRef,     pdfInView]     = useInView(0.04);
  const [pdfLoaded,  setPdfLoaded]  = useState(false);
  const [pdfError,   setPdfError]   = useState(false);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 400, background: T.forest800 }}
      >
        <img
          src="/campus/teaching.png"
          alt="Amaltas Academic"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 30%',
            opacity: 0.18,
          }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${T.forest800}F2 0%, ${T.ink900}CC 100%)` }} />
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
              Academic{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Calendar</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              The official academic schedule for the session 2025–26, covering theory
              classes, practicals, internal assessments, and university examinations
              for all BHMS years.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Academics</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Academic Calendar</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  WHAT'S INCLUDED  ═══════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={hiRef} className="text-center mb-14" style={slide(hiInView, 0)}>
            <Eyebrow>Session 2025 – 26</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              What the calendar{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>covers</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
              A complete term-by-term breakdown of academic activities, examinations,
              and events planned for all four years of the BHMS programme.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HIGHLIGHTS.map(({ icon: Icon, title, body, accent }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: '#FFFFFF',
                  border: `1px solid ${T.ink900}0E`,
                  boxShadow: `0 4px 18px -4px ${T.ink900}08`,
                  borderTop: `3px solid ${accent}`,
                  opacity:   hiInView ? 1 : 0,
                  transform: hiInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.65s ease ${0.08 * i}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.08 * i}s`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${accent}14`, border: `1px solid ${accent}28` }}
                >
                  <Icon size={20} strokeWidth={1.7} style={{ color: accent }} />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold mb-2" style={{ ...fontDisplay, color: T.ink900 }}>
                    {title}
                  </h3>
                  <p className="text-[13px] leading-[1.75]" style={{ color: T.muted500 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  TERM OVERVIEW  ════════════════════ */}
      <section
        className="py-16 lg:py-24"
        style={{ background: '#FFFFFF', borderTop: `1px solid ${T.ink900}0E` }}
      >
        <Container>
          <div ref={termsRef} className="text-center mb-14" style={slide(termsInView, 0)}>
            <Eyebrow>Term Breakdown</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Three-term{' '}
              <em style={{ color: T.forest800, fontStyle: 'italic' }}>academic year</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
              Key events and milestones for each term of the 2025–26 session.
              Refer to the official PDF below for exact dates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TERMS.map(({ term, period, events }, i) => (
              <div
                key={term}
                className="rounded-2xl overflow-hidden"
                style={{
                  border: `1px solid ${T.ink900}0E`,
                  boxShadow: `0 4px 20px -6px ${T.ink900}0A`,
                  opacity:   termsInView ? 1 : 0,
                  transform: termsInView ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.65s ease ${0.1 * i}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.1 * i}s`,
                }}
              >
                {/* Term header */}
                <div
                  className="px-6 py-5"
                  style={{ background: T.forest800 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                      style={{ background: `${T.gold100}22`, color: T.gold100, ...MONO }}
                    >
                      {i + 1}
                    </div>
                    <span
                      className="text-[11px] tracking-[0.14em] uppercase"
                      style={{ ...MONO, color: `${T.cream50}88` }}
                    >
                      {term}
                    </span>
                  </div>
                  <p
                    className="text-[15px] font-semibold mt-1"
                    style={{ ...fontDisplay, color: T.gold100 }}
                  >
                    {period}
                  </p>
                </div>

                {/* Events list */}
                <div className="px-6 py-5 flex flex-col gap-3" style={{ background: T.cream50 }}>
                  {events.map((ev, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <ChevronRight
                        size={14}
                        strokeWidth={2.2}
                        style={{ color: T.forest800, flexShrink: 0, marginTop: 3 }}
                      />
                      <p className="text-[13px] leading-[1.65]" style={{ color: T.ink900 }}>{ev}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center mt-8 text-[12.5px]"
            style={{ color: T.muted500 }}
          >
            Above is a representative outline only. Refer to the official calendar PDF for exact dates and schedules.
          </p>
        </Container>
      </section>

      {/* ═══════════════════════  PDF SECTION  ═══════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={pdfRef}>
            <div
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8"
              style={slide(pdfInView, 0)}
            >
              <div>
                <Eyebrow>Official Document</Eyebrow>
                <h2
                  className="mt-4 text-[28px] lg:text-[38px] leading-[1.1] tracking-tight font-semibold"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  Academic Calendar{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>2025–26</em>
                </h2>
                <p className="mt-2 text-[14px]" style={{ color: T.muted500 }}>
                  The official academic calendar published by Amaltas Institute of Homoeopathy.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200"
                  style={{
                    background: `${T.forest800}0E`,
                    border: `1px solid ${T.forest800}20`,
                    color: T.forest800,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${T.forest800}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${T.forest800}0E`; }}
                >
                  <ExternalLink size={14} strokeWidth={2} />
                  Open in new tab
                </a>
                <a
                  href={PDF_URL}
                  download="Academic_Calendar_2025-26_Amaltas.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200"
                  style={{
                    background: T.forest800,
                    color: T.cream50,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.forest600; }}
                  onMouseLeave={e => { e.currentTarget.style.background = T.forest800; }}
                >
                  <Download size={14} strokeWidth={2.2} />
                  Download PDF
                </a>
              </div>
            </div>

            {/* PDF embed */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                border: `1px solid ${T.ink900}10`,
                boxShadow: `0 8px 40px -8px ${T.ink900}14`,
                background: `${T.ink900}08`,
                ...slide(pdfInView, 0.1),
              }}
            >
              {!pdfLoaded && !pdfError && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10"
                  style={{ background: `${T.cream50}F0`, minHeight: 300 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center animate-pulse"
                    style={{ background: `${T.forest800}12`, border: `1px solid ${T.forest800}20` }}
                  >
                    <CalendarDays size={28} strokeWidth={1.5} style={{ color: T.forest800 }} />
                  </div>
                  <p className="text-[13px]" style={{ color: T.muted500, ...MONO }}>Loading document…</p>
                </div>
              )}

              {pdfError && (
                <div
                  className="flex flex-col items-center justify-center gap-5 py-20 px-6 text-center"
                  style={{ minHeight: 400 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${T.gold600}14`, border: `1px solid ${T.gold600}28` }}
                  >
                    <AlertCircle size={28} strokeWidth={1.5} style={{ color: T.gold700 }} />
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold mb-2" style={{ ...fontDisplay, color: T.ink900 }}>
                      Unable to display PDF in browser
                    </p>
                    <p className="text-[13px] mb-6" style={{ color: T.muted500 }}>
                      Your browser may not support inline PDF viewing. Please use one of the options below.
                    </p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <a
                        href={PDF_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-medium"
                        style={{ background: `${T.forest800}0E`, border: `1px solid ${T.forest800}22`, color: T.forest800, textDecoration: 'none' }}
                      >
                        <ExternalLink size={14} />
                        Open in new tab
                      </a>
                      <a
                        href={PDF_URL}
                        download="Academic_Calendar_2025-26_Amaltas.pdf"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold"
                        style={{ background: T.forest800, color: T.cream50, textDecoration: 'none' }}
                      >
                        <Download size={14} />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <iframe
                src={`${PDF_URL}#toolbar=1&navpanes=0&view=FitH`}
                title="Academic Calendar 2025-26"
                className="w-full h-[300px] sm:h-[470px] lg:h-[600px]"
                style={{ border: 'none', display: pdfError ? 'none' : 'block' }}
                onLoad={() => setPdfLoaded(true)}
                onError={() => { setPdfError(true); setPdfLoaded(true); }}
              />
            </div>

            <div
              className="mt-4 flex items-center gap-2 text-[11px]"
              style={{ ...MONO, color: T.muted500 }}
            >
              <FileText size={12} strokeWidth={2} />
              <span>Academic Calendar 2025–26 · Amaltas Institute of Homoeopathy · PDF</span>
            </div>
          </div>
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
            <CalendarDays size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p
            className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            A well-planned year is the foundation of{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>academic excellence.</em>
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <CalendarDays size={14} style={{ color: `${T.cream50}66` }} />
            <span
              className="text-[12px] tracking-[0.14em] uppercase"
              style={{ ...MONO, color: `${T.cream50}66` }}
            >
              Session 2025–26 · Amaltas Institute of Homoeopathy
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
