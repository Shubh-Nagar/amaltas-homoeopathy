import React, { useState } from 'react';
import {
  GraduationCap, ClipboardList, UserCheck, FileCheck,
  BookOpen, Percent, CalendarCheck, Users,
  FileText, Download, ExternalLink, AlertCircle, Info,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };
const PDF_URL = '/documents/Annexure%2019%20Eligibility%20Criteria%20for%20Admission.pdf';

const CRITERIA = [
  {
    icon: GraduationCap,
    title: 'Educational Qualification',
    body: 'Candidates must have passed 10+2 (or equivalent) with Physics, Chemistry, and Biology as core subjects from a recognised board.',
    accent: T.forest800,
  },
  {
    icon: Percent,
    title: 'Minimum Marks',
    body: 'General category candidates must secure at least 50% aggregate in PCB. SC / ST / OBC candidates are eligible at 40% aggregate as per government norms.',
    accent: T.gold700,
  },
  {
    icon: ClipboardList,
    title: 'NEET Qualification',
    body: 'A valid NEET (UG) score is mandatory for admission to the BHMS programme. Admission is strictly merit-based on NEET rank.',
    accent: '#2E6A8A',
  },
  {
    icon: CalendarCheck,
    title: 'Age Requirement',
    body: 'The candidate must be at least 17 years of age as on 31st December of the year of admission. There is no upper age limit as per current regulations.',
    accent: '#8A4A6E',
  },
];

const DOCUMENTS = [
  { label: '10th Mark Sheet & Certificate', note: 'Original + 2 attested copies' },
  { label: '10+2 Mark Sheet & Certificate', note: 'Original + 2 attested copies' },
  { label: 'NEET Score Card', note: 'Original + 2 attested copies' },
  { label: 'Transfer Certificate', note: 'From last institution attended' },
  { label: 'Migration Certificate', note: 'If from another board / university' },
  { label: 'Caste / Category Certificate', note: 'For SC / ST / OBC / EWS applicants' },
  { label: 'Income Certificate', note: 'For EWS / need-based concession' },
  { label: 'Character Certificate', note: 'From last institution attended' },
  { label: 'Medical Fitness Certificate', note: 'From a registered medical officer' },
  { label: 'Passport-size Photographs', note: '6 recent colour photographs' },
  { label: 'Domicile / Residence Proof', note: 'For state quota seats' },
  { label: 'Aadhar Card', note: 'Original + 1 copy' },
];

const RESERVATION = [
  { category: 'Scheduled Caste (SC)', percent: '15%', accent: '#C0392B' },
  { category: 'Scheduled Tribe (ST)', percent: '7.5%', accent: '#2E6A8A' },
  { category: 'Other Backward Classes (OBC)', percent: '27%', accent: T.gold700 },
  { category: 'Economically Weaker Section (EWS)', percent: '10%', accent: T.forest800 },
  { category: 'General / Unreserved', percent: '40.5%', accent: T.muted500 },
];

const slide = (inView, delay = 0) => ({
  opacity:   inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function AdmissionDetailsSection() {
  const [heroRef,   heroInView]   = useInView(0.08);
  const [critRef,   critInView]   = useInView(0.05);
  const [resRef,    resInView]    = useInView(0.05);
  const [docsRef,   docsInView]   = useInView(0.05);
  const [pdfRef,    pdfInView]    = useInView(0.04);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [pdfError,  setPdfError]  = useState(false);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 400, background: T.forest800 }}
      >
        <img
          src="/campus/teaching.png"
          alt="Amaltas Academics"
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
              Admission{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Details</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Complete eligibility criteria, reservation policy, and documentation
              requirements for admission to the BHMS programme at Amaltas Institute
              of Homoeopathy Hospital &amp; Research Centre.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Academics</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Admission Details</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════  ELIGIBILITY CRITERIA  ══════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={critRef} className="text-center mb-14" style={slide(critInView, 0)}>
            <Eyebrow>Who Can Apply</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Eligibility{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>criteria</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
              The following conditions must be satisfied to be considered for admission
              to the 5½-year BHMS degree programme.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CRITERIA.map(({ icon: Icon, title, body, accent }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: '#FFFFFF',
                  border: `1px solid ${T.ink900}0E`,
                  boxShadow: `0 4px 18px -4px ${T.ink900}08`,
                  borderTop: `3px solid ${accent}`,
                  opacity:   critInView ? 1 : 0,
                  transform: critInView ? 'translateY(0)' : 'translateY(24px)',
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

          {/* NEET info strip */}
          <div
            className="mt-8 flex items-start gap-3 rounded-xl px-5 py-4 max-w-3xl mx-auto"
            style={{ background: `${T.gold600}0A`, border: `1px solid ${T.gold600}22`, ...slide(critInView, 0.35) }}
          >
            <Info size={17} strokeWidth={1.8} style={{ color: T.gold700, flexShrink: 0, marginTop: 2 }} />
            <p className="text-[13.5px] leading-[1.7]" style={{ color: T.ink900 }}>
              <strong>Note:</strong> Admission is subject to the availability of seats and
              the merit list prepared on the basis of NEET (UG) scores as per guidelines
              of the Central / State Counselling Authority. Please verify the latest norms
              from the official counselling body for the current session.
            </p>
          </div>
        </Container>
      </section>

      {/* ══════════════════════  RESERVATION POLICY  ════════════════ */}
      <section
        className="py-16 lg:py-24"
        style={{ background: '#FFFFFF', borderTop: `1px solid ${T.ink900}0E` }}
      >
        <Container>
          <div ref={resRef}>
            <div className="text-center mb-12" style={slide(resInView, 0)}>
              <Eyebrow>Seat Matrix</Eyebrow>
              <h2
                className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                Reservation{' '}
                <em style={{ color: T.forest800, fontStyle: 'italic' }}>policy</em>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
                Seats are distributed as per the Government of Madhya Pradesh reservation
                norms and central government directives.
              </p>
            </div>

            <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden" style={{ border: `1px solid ${T.ink900}0E`, boxShadow: `0 4px 20px -6px ${T.ink900}0A` }}>
              <div className="px-6 py-4" style={{ background: T.forest800 }}>
                <p className="text-[11px] tracking-[0.14em] uppercase font-semibold" style={{ ...MONO, color: `${T.cream50}99` }}>
                  Category-wise Seat Distribution
                </p>
              </div>
              {RESERVATION.map(({ category, percent, accent }, i) => (
                <div
                  key={category}
                  className="flex items-center justify-between px-6 py-4"
                  style={{
                    background: i % 2 === 0 ? T.cream50 : '#FFFFFF',
                    borderBottom: i < RESERVATION.length - 1 ? `1px solid ${T.ink900}08` : 'none',
                    opacity:   resInView ? 1 : 0,
                    transform: resInView ? 'translateX(0)' : 'translateX(-18px)',
                    transition: `opacity 0.55s ease ${0.07 * i}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${0.07 * i}s`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: accent }}
                    />
                    <span className="text-[14px]" style={{ color: T.ink900 }}>{category}</span>
                  </div>
                  <span
                    className="text-[15px] font-semibold tabular-nums"
                    style={{ color: accent, ...MONO }}
                  >
                    {percent}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="text-center mt-5 text-[12.5px]"
              style={{ color: T.muted500 }}
            >
              Horizontal reservations (PH, ex-servicemen, etc.) apply over and above the above matrix as per state rules.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  DOCUMENTS  ════════════════════════ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F`, borderBottom: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={docsRef}>
            <div style={slide(docsInView, 0)}>
              <Eyebrow>Required at Admission</Eyebrow>
              <h2
                className="mt-3 text-[28px] lg:text-[38px] leading-[1.1] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                Documents{' '}
                <em style={{ color: T.forest800, fontStyle: 'italic' }}>checklist</em>
              </h2>
            </div>

            <p className="mt-4 mb-7 text-[15px] leading-relaxed max-w-2xl" style={{ color: T.muted500, ...slide(docsInView, 0.08) }}>
              Ensure all documents are ready before arriving for admission. Originals
              will be verified and returned; attested copies will be retained.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {DOCUMENTS.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl px-4 py-3.5"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${T.ink900}0E`,
                    opacity:   docsInView ? 1 : 0,
                    transform: docsInView ? 'translateY(0)' : 'translateY(16px)',
                    transition: `opacity 0.55s ease ${0.04 * i}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${0.04 * i}s`,
                  }}
                >
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                    style={{ background: `${T.forest800}12`, color: T.forest800, ...MONO }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <p className="text-[13.5px] font-medium leading-snug" style={{ color: T.ink900 }}>{doc.label}</p>
                    <p className="text-[11.5px] mt-0.5" style={{ color: T.muted500 }}>{doc.note}</p>
                  </div>
                </div>
              ))}
            </div>
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
                  Eligibility Criteria for{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>Admission</em>
                </h2>
                <p className="mt-2 text-[14px]" style={{ color: T.muted500 }}>
                  Annexure 19 — Official eligibility norms as prescribed for the institution.
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
                  download="Annexure_19_Eligibility_Criteria_Amaltas.pdf"
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
                        download="Annexure_19_Eligibility_Criteria_Amaltas.pdf"
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
                title="Annexure 19 — Eligibility Criteria for Admission"
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
              <span>Annexure 19 · Eligibility Criteria for Admission · Amaltas Institute of Homoeopathy · PDF</span>
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
            <UserCheck size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p
            className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            Begin your journey towards becoming a{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>homoeopathic physician.</em>
          </p>
          <p
            className="mt-4 text-[15px] max-w-lg mx-auto"
            style={{ color: `${T.cream50}99` }}
          >
            Contact the admissions office for guidance on the application process,
            counselling dates, and seat availability.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <GraduationCap size={14} style={{ color: `${T.cream50}66` }} />
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
