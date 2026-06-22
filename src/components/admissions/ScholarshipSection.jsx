import React, { useState } from 'react';
import {
  Award, BookOpen, Users, BadgeCheck,
  FileText, Download, ExternalLink,
  AlertCircle, ChevronDown, ChevronUp, Info,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };
const PDF_URL = '/documents/Annexure%2023%20Scholarship%20Rules%20and%20Regulations.pdf';

const SCHOLARSHIP_TYPES = [
  {
    icon: Award,
    title: 'Merit Scholarship',
    desc: 'Awarded to students who secure outstanding marks in the NEET entrance examination or achieve distinction in annual university examinations.',
    accent: T.gold700,
    badge: 'Merit-Based',
  },
  {
    icon: Users,
    title: 'Need-Based Scholarship',
    desc: 'Financial assistance provided to economically weaker section (EWS) students who demonstrate genuine financial need along with satisfactory academic performance.',
    accent: T.forest800,
    badge: 'Need-Based',
  },
  {
    icon: BookOpen,
    title: 'Government Schemes',
    desc: 'Students belonging to SC / ST / OBC and other reserved categories are eligible for state and central government scholarship schemes as applicable.',
    accent: '#2E6A8A',
    badge: 'Government',
  },
  {
    icon: BadgeCheck,
    title: 'Institutional Concession',
    desc: 'Special fee concessions granted by the institution to meritorious and deserving students based on a review by the scholarship committee.',
    accent: '#8A4A6E',
    badge: 'Institutional',
  },
];

const ELIGIBILITY = [
  { text: 'Must be a regular enrolled student of Amaltas Institute of Homoeopathy.' },
  { text: 'Minimum 75% attendance in the preceding academic term is mandatory.' },
  { text: 'No active disciplinary case or penalty should be pending against the applicant.' },
  { text: 'For merit scholarships, a minimum of 60% marks in the previous university examination is required.' },
  { text: 'Need-based applicants must submit income certificate issued by a competent authority.' },
  { text: 'Applications must be submitted within the stipulated deadline announced each academic year.' },
  { text: 'Students already availing a government scholarship must disclose the same at the time of application.' },
];

const HOW_TO_APPLY = [
  {
    step: '01',
    title: 'Obtain Application Form',
    desc: 'Collect the scholarship application form from the administrative office or download it from the institute notice board.',
  },
  {
    step: '02',
    title: 'Attach Required Documents',
    desc: 'Attach mark sheets, income certificate, caste certificate (if applicable), attendance record, and a passport-sized photograph.',
  },
  {
    step: '03',
    title: 'Submit to Scholarship Committee',
    desc: 'Submit the completed form to the administrative office within the announced deadline. Late submissions will not be considered.',
  },
  {
    step: '04',
    title: 'Verification & Approval',
    desc: 'The scholarship committee reviews all applications, conducts verification, and communicates the decision to eligible students.',
  },
];

const slide = (inView, delay = 0) => ({
  opacity:   inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function ScholarshipSection() {
  const [heroRef,    heroInView]    = useInView(0.08);
  const [typesRef,   typesInView]   = useInView(0.05);
  const [eligRef,    eligInView]    = useInView(0.05);
  const [applyRef,   applyInView]   = useInView(0.05);
  const [pdfRef,     pdfInView]     = useInView(0.04);
  const [showElig,   setShowElig]   = useState(false);
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
          src="/campus/campus.jpg"
          alt="Amaltas Campus"
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
            <div style={slide(heroInView, 0)}><Eyebrow light>Admissions</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Scholarships &{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Financial Aid</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Amaltas Institute of Homoeopathy offers a range of scholarships and
              concessions to support meritorious and financially deserving students
              in pursuing their BHMS programme.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Admissions</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Scholarships</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════  SCHOLARSHIP TYPES  ══════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={typesRef} className="text-center mb-14" style={slide(typesInView, 0)}>
            <Eyebrow>Available Scholarships</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Types of{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>financial support</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
              Multiple pathways exist for students to access financial assistance —
              merit-based, need-based, government-sponsored, and institutional.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SCHOLARSHIP_TYPES.map(({ icon: Icon, title, desc, accent, badge }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: '#FFFFFF',
                  border: `1px solid ${T.ink900}0E`,
                  boxShadow: `0 4px 18px -4px ${T.ink900}08`,
                  borderTop: `3px solid ${accent}`,
                  opacity:   typesInView ? 1 : 0,
                  transform: typesInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.65s ease ${0.08 * i}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.08 * i}s`,
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${accent}14`, border: `1px solid ${accent}28` }}
                  >
                    <Icon size={20} strokeWidth={1.7} style={{ color: accent }} />
                  </div>
                  <span
                    className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full"
                    style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}22` }}
                  >
                    {badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold mb-2" style={{ ...fontDisplay, color: T.ink900 }}>
                    {title}
                  </h3>
                  <p className="text-[13px] leading-[1.75]" style={{ color: T.muted500 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  ELIGIBILITY  ══════════════════════ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F`, borderBottom: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={eligRef}>
            <button
              className="w-full flex items-center justify-between gap-4 text-left"
              onClick={() => setShowElig(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <div style={slide(eligInView, 0)}>
                <Eyebrow>Who Can Apply</Eyebrow>
                <h2
                  className="mt-3 text-[28px] lg:text-[38px] leading-[1.1] tracking-tight font-semibold"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  Eligibility{' '}
                  <em style={{ color: T.forest800, fontStyle: 'italic' }}>criteria</em>
                </h2>
              </div>
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{
                  background: showElig ? T.forest800 : `${T.forest800}0E`,
                  border: `1px solid ${T.forest800}20`,
                }}
              >
                {showElig
                  ? <ChevronUp size={18} strokeWidth={2} style={{ color: T.cream50 }} />
                  : <ChevronDown size={18} strokeWidth={2} style={{ color: T.forest800 }} />}
              </div>
            </button>

            <div
              style={{
                overflow: 'hidden',
                maxHeight: showElig ? '700px' : '0',
                opacity: showElig ? 1 : 0,
                transition: 'max-height 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease',
              }}
            >
              <p className="mt-4 mb-7 text-[15px] leading-relaxed max-w-2xl" style={{ color: T.muted500 }}>
                The following general conditions apply to all scholarship applications.
                Specific schemes may carry additional requirements — refer to the official
                rules document for full details.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {ELIGIBILITY.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl px-4 py-3.5"
                    style={{ background: '#FFFFFF', border: `1px solid ${T.ink900}0E` }}
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                      style={{ background: `${T.forest800}12`, color: T.forest800, ...MONO }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="text-[13.5px] leading-[1.7]" style={{ color: T.ink900 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {!showElig && (
              <p className="mt-3 text-[13px]" style={{ color: T.muted500 }}>
                Click to view all {ELIGIBILITY.length} eligibility criteria ›
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  HOW TO APPLY  ═════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: '#FFFFFF' }}>
        <Container>
          <div ref={applyRef} className="text-center mb-14" style={slide(applyInView, 0)}>
            <Eyebrow>Application Process</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              How to{' '}
              <em style={{ color: T.forest800, fontStyle: 'italic' }}>apply</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
              Follow these four steps to submit your scholarship application for the
              current academic session.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {HOW_TO_APPLY.map(({ step, title, desc }, i) => (
              <div
                key={step}
                className="flex gap-5 rounded-2xl p-6"
                style={{
                  background: T.cream50,
                  border: `1px solid ${T.ink900}0E`,
                  opacity:   applyInView ? 1 : 0,
                  transform: applyInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.65s ease ${0.08 * i}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.08 * i}s`,
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-bold"
                  style={{ background: T.forest800, color: T.cream50, ...MONO }}
                >
                  {step}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold mb-2" style={{ ...fontDisplay, color: T.ink900 }}>{title}</h3>
                  <p className="text-[13px] leading-[1.75]" style={{ color: T.muted500 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Info note */}
          <div
            className="mt-10 max-w-4xl mx-auto flex items-start gap-3 rounded-xl px-5 py-4"
            style={{
              background: `${T.gold600}0A`,
              border: `1px solid ${T.gold600}22`,
              ...slide(applyInView, 0.35),
            }}
          >
            <Info size={17} strokeWidth={1.8} style={{ color: T.gold700, flexShrink: 0, marginTop: 2 }} />
            <p className="text-[13.5px] leading-[1.7]" style={{ color: T.ink900 }}>
              <strong>Important:</strong> Scholarship announcements are made at the beginning
              of each academic session. Students are advised to check the institute notice board
              regularly and contact the administrative office for the latest deadlines and
              documents required.
            </p>
          </div>
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
                  Scholarship Rules &{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>Regulations</em>
                </h2>
                <p className="mt-2 text-[14px]" style={{ color: T.muted500 }}>
                  Annexure 23 — Official scholarship rules as prescribed for the institution.
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
                  download="Scholarship_Rules_and_Regulations_Amaltas.pdf"
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
                    <FileText size={28} strokeWidth={1.5} style={{ color: T.forest800 }} />
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
                        download="Scholarship_Rules_and_Regulations_Amaltas.pdf"
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
                title="Scholarship Rules and Regulations — Amaltas Institute"
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
              <span>Annexure 23 · Scholarship Rules and Regulations · Amaltas Institute of Homoeopathy · PDF</span>
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
            <Award size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p
            className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            Financial need should never be a barrier to a{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>quality education.</em>
          </p>
          <p
            className="mt-4 text-[15px] max-w-lg mx-auto"
            style={{ color: `${T.cream50}99` }}
          >
            Contact the administrative office for personalised guidance on the scholarship
            best suited to your profile.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Award size={14} style={{ color: `${T.cream50}66` }} />
            <span
              className="text-[12px] tracking-[0.14em] uppercase"
              style={{ ...MONO, color: `${T.cream50}66` }}
            >
              homoeopathy@amaltasgroup.co.in · 9685096500
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
