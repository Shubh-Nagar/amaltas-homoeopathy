import React, { useState } from 'react';
import {
  ShieldCheck, Scale, Heart, MessageSquare,
  Eye, Lock, UserCheck, AlertCircle,
  Download, ExternalLink, FileText, ChevronDown, ChevronUp,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const PDF_URL = '/documents/Citizen%20Charter2026.pdf';

const RIGHTS = [
  {
    icon: ShieldCheck,
    title: 'Right to Safe Care',
    body: 'Every patient is entitled to safe, dignified, and ethical treatment in a clean and hygienic hospital environment, free from any form of discrimination.',
    accent: T.forest600,
  },
  {
    icon: Eye,
    title: 'Right to Information',
    body: 'Patients have the right to be fully informed about their diagnosis, proposed treatment, expected outcomes, and available alternatives in a language they understand.',
    accent: '#2E6A8A',
  },
  {
    icon: Lock,
    title: 'Right to Privacy',
    body: 'All patient information, medical records, and consultations are treated with strict confidentiality. Personal health information is never disclosed without consent.',
    accent: '#8A4A6E',
  },
  {
    icon: Scale,
    title: 'Right to Second Opinion',
    body: 'Patients may seek a second medical opinion at any time without prejudice to their ongoing care at this hospital.',
    accent: T.gold700,
  },
  {
    icon: MessageSquare,
    title: 'Right to Grievance Redressal',
    body: 'Any patient or attendant who is dissatisfied with the care received may file a complaint. All complaints are acknowledged and addressed within a defined timeframe.',
    accent: T.forest800,
  },
  {
    icon: Heart,
    title: 'Right to Emergency Care',
    body: 'Emergency medical care will be provided to any patient in need regardless of their ability to pay, without any precondition of financial deposit.',
    accent: '#C0392B',
  },
];

const RESPONSIBILITIES = [
  { text: 'Provide accurate and complete medical history, including ongoing medications and known allergies.' },
  { text: 'Follow the treatment plan as prescribed and attend follow-up appointments as advised.' },
  { text: 'Treat all hospital staff with respect and courtesy.' },
  { text: 'Comply with hospital rules, regulations, and ward visiting hours.' },
  { text: 'Refrain from bringing outside food, alcohol, or tobacco into the hospital premises.' },
  { text: 'Inform the treating physician immediately if there is a change in your condition.' },
  { text: 'Clear dues and complete documentation before or at the time of discharge.' },
  { text: 'Not to indulge in any act that may cause inconvenience or harm to other patients.' },
];

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity:    inView ? 1 : 0,
  transform:  inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left' ? 'translateX(-28px)' : dir === 'right' ? 'translateX(28px)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function CitizenCharterSection() {
  const [heroRef,   heroInView]   = useInView(0.08);
  const [rightsRef, rightsInView] = useInView(0.05);
  const [respRef,   respInView]   = useInView(0.05);
  const [pdfRef,    pdfInView]    = useInView(0.04);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [pdfError,  setPdfError]  = useState(false);
  const [showResp,  setShowResp]  = useState(false);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 400, background: T.forest800 }}
      >
        <img
          src="/campus/homoepathy.png"
          alt="Amaltas Hospital"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 35%',
            opacity: 0.2,
          }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${T.forest800}F0 0%, ${T.ink900}CC 100%)` }} />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}18 1px, transparent 1px)`,
            backgroundSize: '36px 36px', pointerEvents: 'none',
          }}
        />
        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-28">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}><Eyebrow light>Hospital</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Citizen{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Charter</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Our commitment to every patient — a transparent declaration of your rights,
              our responsibilities, and the standards of care you can always expect at
              Amaltas Institute of Homoeopathy Hospital.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Hospital</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Citizen Charter</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  PATIENT RIGHTS  ════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={rightsRef} className="text-center mb-14" style={slide(rightsInView, 0)}>
            <Eyebrow>Your Entitlements</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Rights of every{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>patient</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
              Regardless of background, condition, or means — every person who walks through
              our doors is entitled to the following rights without exception.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RIGHTS.map(({ icon: Icon, title, body, accent }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 flex flex-col gap-4 group"
                style={{
                  background: '#FFFFFF',
                  border: `1px solid ${T.ink900}0E`,
                  boxShadow: `0 4px 18px -4px ${T.ink900}08`,
                  borderTop: `3px solid ${accent}`,
                  opacity:   rightsInView ? 1 : 0,
                  transform: rightsInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.65s ease ${0.06 * i}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.06 * i}s, box-shadow 0.2s ease`,
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 36px -8px ${T.ink900}14`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 4px 18px -4px ${T.ink900}08`; }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${accent}14`, border: `1px solid ${accent}28` }}
                >
                  <Icon size={20} strokeWidth={1.7} style={{ color: accent }} />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold mb-2" style={{ ...fontDisplay, color: T.ink900 }}>
                    {title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.75]" style={{ color: T.muted500 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════  PATIENT RESPONSIBILITIES  ══════════════ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F`, borderBottom: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={respRef}>
            {/* Collapsible toggle header */}
            <button
              className="w-full flex items-center justify-between gap-4 text-left group"
              onClick={() => setShowResp(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <div style={slide(respInView, 0)}>
                <Eyebrow>Your Role</Eyebrow>
                <h2
                  className="mt-3 text-[28px] lg:text-[38px] leading-[1.1] tracking-tight font-semibold"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  Patient{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>responsibilities</em>
                </h2>
              </div>
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{
                  background: showResp ? T.forest800 : `${T.forest800}0E`,
                  border: `1px solid ${T.forest800}20`,
                }}
              >
                {showResp
                  ? <ChevronUp size={18} strokeWidth={2} style={{ color: T.cream50 }} />
                  : <ChevronDown size={18} strokeWidth={2} style={{ color: T.forest800 }} />}
              </div>
            </button>

            {/* Collapsible content */}
            <div
              style={{
                overflow: 'hidden',
                maxHeight: showResp ? '600px' : '0',
                opacity: showResp ? 1 : 0,
                transition: 'max-height 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease',
              }}
            >
              <p className="mt-4 mb-8 text-[15px] leading-relaxed max-w-2xl" style={{ color: T.muted500 }}>
                To ensure the best possible care for yourself and other patients, we ask every
                patient and their attendants to observe the following responsibilities.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {RESPONSIBILITIES.map((r, i) => (
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
                    <p className="text-[13.5px] leading-[1.7]" style={{ color: T.ink900 }}>{r.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {!showResp && (
              <p className="mt-3 text-[13px]" style={{ color: T.muted500 }}>
                Click to view {RESPONSIBILITIES.length} patient responsibilities ›
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  PDF SECTION  ═══════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={pdfRef}>
            {/* Header row */}
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
                  Read the full{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>Citizen Charter 2026</em>
                </h2>
                <p className="mt-2 text-[14px]" style={{ color: T.muted500 }}>
                  The official charter published by Amaltas Institute of Homoeopathy Hospital.
                </p>
              </div>

              {/* Action buttons */}
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
                  download="Citizen_Charter_2026.pdf"
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
              {/* Loading shimmer */}
              {!pdfLoaded && !pdfError && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10"
                  style={{ background: `${T.cream50}F0`, minHeight: 500 }}
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

              {/* Error fallback */}
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
                      Your browser may not support inline PDF viewing.
                      Please use one of the options below.
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
                        download="Citizen_Charter_2026.pdf"
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

              {/* The iframe */}
              <iframe
                src={`${PDF_URL}#toolbar=1&navpanes=0&view=FitH`}
                title="Citizen Charter 2026"
                style={{
                  width: '100%',
                  height: 500,
                  border: 'none',
                  display: pdfError ? 'none' : 'block',
                }}
                onLoad={() => setPdfLoaded(true)}
                onError={() => { setPdfError(true); setPdfLoaded(true); }}
              />
            </div>

            {/* File metadata */}
            <div
              className="mt-4 flex items-center gap-2 text-[11px]"
              style={{ ...MONO, color: T.muted500 }}
            >
              <FileText size={12} strokeWidth={2} />
              <span>Citizen Charter 2026 · Amaltas Institute of Homoeopathy Hospital · PDF</span>
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
            This charter is our{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>promise</em>
            {' '}to you — and we hold ourselves to it every day.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <ShieldCheck size={14} style={{ color: `${T.cream50}66` }} />
            <span
              className="text-[12px] tracking-[0.14em] uppercase"
              style={{ ...MONO, color: `${T.cream50}66` }}
            >
              Complaints & feedback: homoeopathy@amaltasgroup.co.in
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
