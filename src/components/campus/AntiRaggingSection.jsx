import React, { useState } from 'react';
import {
  ShieldAlert, AlertTriangle, Phone, Mail,
  FileText, Download, ExternalLink, ChevronDown, ChevronUp,
  AlertCircle, Users, ClipboardList, MessageSquare,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };
const PDF_URL = '/documents/antiragging%20committee.pdf';

const CONSEQUENCES = [
  {
    icon: AlertTriangle,
    title: 'Suspension / Expulsion',
    body: 'Students found guilty of ragging may face immediate suspension or permanent expulsion from the institution.',
    accent: '#C0392B',
  },
  {
    icon: ClipboardList,
    title: 'Academic Penalty',
    body: 'Debarment from examinations, cancellation of admission, and withholding of scholarships or fee concessions.',
    accent: T.gold700,
  },
  {
    icon: ShieldAlert,
    title: 'Criminal Prosecution',
    body: 'Ragging is a criminal offence under UGC Regulations 2009. Complaints can be filed with the police and courts.',
    accent: '#8A4A6E',
  },
  {
    icon: MessageSquare,
    title: 'Rustication from Hostel',
    body: 'Immediate removal from hostel accommodation and prohibition from entering campus premises.',
    accent: '#2E6A8A',
  },
];

const COMMITTEE_MEMBERS = [
  { sno: '01', name: 'Dr. Yogendra Singh Bhadoria', designation: 'Principal & Medical Superintendent', role: 'Chairperson' },
  { sno: '02', name: 'Senior Faculty Representative', designation: 'Professor', role: 'Member' },
  { sno: '03', name: 'Faculty Representative', designation: 'Associate Professor', role: 'Member' },
  { sno: '04', name: 'Administrative Officer', designation: 'Administration', role: 'Member' },
  { sno: '05', name: 'Hostel Warden (Boys)', designation: 'Warden', role: 'Member' },
  { sno: '06', name: 'Hostel Warden (Girls)', designation: 'Warden', role: 'Member' },
  { sno: '07', name: 'Student Representative (Senior)', designation: 'Final Year BHMS', role: 'Member' },
  { sno: '08', name: 'Student Representative (Junior)', designation: 'First Year BHMS', role: 'Member' },
];

const HOW_TO_REPORT = [
  {
    step: '01',
    title: 'Contact the Anti-Ragging Cell',
    desc: 'Approach any member of the Anti-Ragging Committee on campus in person or via the contact details provided below.',
  },
  {
    step: '02',
    title: 'Call the National Helpline',
    desc: 'Dial 1800-180-5522 (toll-free, 24×7). Your identity will be kept strictly confidential. Report the incident immediately.',
  },
  {
    step: '03',
    title: 'Submit a Written Complaint',
    desc: "Submit a written complaint to the Principal's office or drop it in the Anti-Ragging suggestion box placed at the entrance.",
  },
  {
    step: '04',
    title: 'Online Reporting',
    desc: 'Register a complaint at www.antiragging.in — the official UGC portal for anti-ragging grievances.',
  },
];

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity:   inView ? 1 : 0,
  transform: inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left' ? 'translateX(-28px)' : dir === 'right' ? 'translateX(28px)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function AntiRaggingSection() {
  const [heroRef,        heroInView]        = useInView(0.08);
  const [definitionRef,  definitionInView]  = useInView(0.05);
  const [consRef,        consInView]        = useInView(0.05);
  const [committeeRef,   committeeInView]   = useInView(0.04);
  const [reportRef,      reportInView]      = useInView(0.05);
  const [pdfRef,         pdfInView]         = useInView(0.04);
  const [showCommittee,  setShowCommittee]  = useState(false);
  const [pdfLoaded,      setPdfLoaded]      = useState(false);
  const [pdfError,       setPdfError]       = useState(false);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 400, background: T.forest800 }}
      >
        <img
          src="/Anti-Ragging.png"
          alt="Anti-Ragging Cell — Amaltas Institute"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center center',
            opacity: 0.22,
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
            <div style={slide(heroInView, 0)}><Eyebrow light>Campus Life</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Anti-Ragging{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Cell</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Amaltas Institute of Homoeopathy maintains a zero-tolerance policy towards
              ragging in any form. Every student has the right to a safe, dignified, and
              welcoming campus environment.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Campus Life</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Anti-Ragging Cell</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  DEFINITION STRIP  ══════════════════ */}
      <section
        className="py-14 lg:py-20"
        style={{ background: '#FFFFFF', borderBottom: `1px solid ${T.ink900}0E` }}
      >
        <Container>
          <div ref={definitionRef} className="max-w-4xl mx-auto">
            <div style={slide(definitionInView, 0)}>
              <Eyebrow>UGC Definition</Eyebrow>
              <h2
                className="mt-4 text-[28px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                What constitutes{' '}
                <em style={{ color: '#C0392B', fontStyle: 'italic' }}>ragging?</em>
              </h2>
            </div>
            <blockquote
              className="mt-8 rounded-2xl px-8 py-7 relative"
              style={{
                background: `${T.forest800}06`,
                border: `1px solid ${T.forest800}14`,
                borderLeft: `4px solid ${T.forest800}`,
                ...slide(definitionInView, 0.1),
              }}
            >
              <p className="text-[15px] leading-[1.85]" style={{ color: T.ink900 }}>
                "Ragging constitutes one or more of any of the following acts: any conduct by
                any student or students whether by words spoken or written or by an act which
                has the effect of teasing, treating or handling with rudeness a fresher or any
                other student; indulging in rowdy or indisciplined activities by any student or
                students which causes or is likely to cause annoyance, hardship, physical or
                psychological harm or to raise fear or apprehension thereof in any fresher or any
                other student; asking any student to do any act which such student will not in the
                ordinary course do and which has the effect of causing or generating a sense of
                shame, or torment or embarrassment so as to adversely affect the physique or
                psyche of such fresher or any other student."
              </p>
              <cite
                className="block mt-5 text-[12px] tracking-[0.12em] uppercase not-italic"
                style={{ ...MONO, color: T.muted500 }}
              >
                — UGC Regulations on Curbing the Menace of Ragging, 2009
              </cite>
            </blockquote>

            <div
              className="mt-6 flex items-start gap-3 rounded-xl px-5 py-4"
              style={{
                background: `#C0392B0C`,
                border: `1px solid #C0392B22`,
                ...slide(definitionInView, 0.18),
              }}
            >
              <ShieldAlert size={18} strokeWidth={1.8} style={{ color: '#C0392B', flexShrink: 0, marginTop: 2 }} />
              <p className="text-[13.5px] leading-[1.7]" style={{ color: T.ink900 }}>
                <strong>Zero-Tolerance Policy:</strong> Amaltas Institute strictly prohibits
                ragging in all forms — physical, verbal, psychological, sexual, or through digital
                means. Any act of ragging will be met with immediate disciplinary action as
                prescribed by UGC and the affiliating university.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════  NOTICE IMAGE  ══════════════════════ */}
      <section className="py-16 lg:py-20" style={{ background: T.cream50 }}>
        <Container>
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: `1px solid ${T.ink900}10`,
                boxShadow: `0 12px 48px -12px ${T.ink900}18`,
              }}
            >
              <img
                src="/Anti-Ragging.png"
                alt="Anti-Ragging Notice — Amaltas Institute of Homoeopathy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                draggable="false"
              />
            </div>
            <p
              className="mt-3 text-center text-[12px] tracking-[0.1em] uppercase"
              style={{ ...MONO, color: T.muted500 }}
            >
              Official Anti-Ragging Notice · Amaltas Institute of Homoeopathy
            </p>
          </div>
        </Container>
      </section>

      {/* ══════════════════════  CONSEQUENCES  ═══════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={consRef} className="text-center mb-14" style={slide(consInView, 0)}>
            <Eyebrow>Disciplinary Action</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Consequences of{' '}
              <em style={{ color: '#C0392B', fontStyle: 'italic' }}>ragging</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
              Ragging is a punishable offence under Indian law. The following penalties may
              be imposed individually or in combination based on the severity of the act.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONSEQUENCES.map(({ icon: Icon, title, body, accent }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: '#FFFFFF',
                  border: `1px solid ${T.ink900}0E`,
                  boxShadow: `0 4px 18px -4px ${T.ink900}08`,
                  borderTop: `3px solid ${accent}`,
                  opacity:   consInView ? 1 : 0,
                  transform: consInView ? 'translateY(0)' : 'translateY(24px)',
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

      {/* ══════════════════  ANTI-RAGGING COMMITTEE  ════════════════ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F`, borderBottom: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={committeeRef}>
            <button
              className="w-full flex items-center justify-between gap-4 text-left"
              onClick={() => setShowCommittee(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <div style={slide(committeeInView, 0)}>
                <Eyebrow>Institutional Committee</Eyebrow>
                <h2
                  className="mt-3 text-[28px] lg:text-[38px] leading-[1.1] tracking-tight font-semibold"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  Anti-Ragging{' '}
                  <em style={{ color: T.forest800, fontStyle: 'italic' }}>Committee</em>
                </h2>
              </div>
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{
                  background: showCommittee ? T.forest800 : `${T.forest800}0E`,
                  border: `1px solid ${T.forest800}20`,
                }}
              >
                {showCommittee
                  ? <ChevronUp size={18} strokeWidth={2} style={{ color: T.cream50 }} />
                  : <ChevronDown size={18} strokeWidth={2} style={{ color: T.forest800 }} />}
              </div>
            </button>

            <div
              style={{
                overflow: 'hidden',
                maxHeight: showCommittee ? '800px' : '0',
                opacity: showCommittee ? 1 : 0,
                transition: 'max-height 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease',
              }}
            >
              <p className="mt-4 mb-6 text-[15px] leading-relaxed max-w-2xl" style={{ color: T.muted500 }}>
                The Anti-Ragging Committee is constituted in accordance with UGC Regulations 2009.
                It is responsible for monitoring, preventing, and addressing all ragging-related
                complaints on campus.
              </p>
              <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${T.ink900}0E` }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left" style={{ borderCollapse: 'collapse', minWidth: 480 }}>
                  <thead>
                    <tr style={{ background: T.forest800 }}>
                      {['S.No.', 'Name', 'Designation', 'Role'].map(col => (
                        <th
                          key={col}
                          className="px-5 py-3.5 text-[11px] tracking-[0.12em] uppercase"
                          style={{ ...MONO, color: `${T.cream50}CC`, fontWeight: 600, borderBottom: `1px solid ${T.forest600}40` }}
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMMITTEE_MEMBERS.map((m, i) => (
                      <tr
                        key={m.sno}
                        style={{
                          background: i % 2 === 0 ? '#FFFFFF' : `${T.forest800}04`,
                          borderBottom: `1px solid ${T.ink900}08`,
                        }}
                      >
                        <td className="px-5 py-3.5 text-[12px]" style={{ ...MONO, color: T.muted500 }}>{m.sno}</td>
                        <td className="px-5 py-3.5 text-[14px] font-medium" style={{ color: T.ink900 }}>{m.name}</td>
                        <td className="px-5 py-3.5 text-[13px]" style={{ color: T.muted500 }}>{m.designation}</td>
                        <td className="px-5 py-3.5">
                          <span
                            className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                            style={{
                              background: m.role === 'Chairperson' ? `${T.forest800}14` : `${T.gold600}14`,
                              color: m.role === 'Chairperson' ? T.forest800 : T.gold700,
                              border: `1px solid ${m.role === 'Chairperson' ? T.forest800 : T.gold600}28`,
                            }}
                          >
                            {m.role}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
            </div>

            {!showCommittee && (
              <p className="mt-3 text-[13px]" style={{ color: T.muted500 }}>
                Click to view all {COMMITTEE_MEMBERS.length} committee members ›
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  HOW TO REPORT  ════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: '#FFFFFF' }}>
        <Container>
          <div ref={reportRef} className="text-center mb-14" style={slide(reportInView, 0)}>
            <Eyebrow>Grievance Mechanism</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              How to{' '}
              <em style={{ color: T.forest800, fontStyle: 'italic' }}>report ragging</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
              If you witness or experience ragging, report it immediately through any of
              the channels below. All complaints are treated with strict confidentiality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {HOW_TO_REPORT.map(({ step, title, desc }, i) => (
              <div
                key={step}
                className="flex gap-5 rounded-2xl p-6"
                style={{
                  background: T.cream50,
                  border: `1px solid ${T.ink900}0E`,
                  opacity:   reportInView ? 1 : 0,
                  transform: reportInView ? 'translateY(0)' : 'translateY(24px)',
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

          {/* Helpline cards */}
          <div
            className="mt-10 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
            style={slide(reportInView, 0.3)}
          >
            {[
              {
                icon: Phone,
                label: 'National Anti-Ragging Helpline',
                value: '1800-180-5522',
                sub: 'Toll-free · 24×7',
                accent: T.forest800,
              },
              {
                icon: Phone,
                label: 'Institution Contact',
                value: '9685096500',
                sub: 'Principal\'s Office',
                accent: '#2E6A8A',
              },
              {
                icon: Mail,
                label: 'Email Complaint',
                value: 'homoeopathy@amaltasgroup.co.in',
                sub: 'Responded within 48 hrs',
                accent: T.gold700,
              },
            ].map(({ icon: Icon, label, value, sub, accent }) => (
              <div
                key={label}
                className="rounded-2xl p-5 flex flex-col gap-3"
                style={{
                  background: `${accent}08`,
                  border: `1px solid ${accent}20`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${accent}14`, border: `1px solid ${accent}28` }}
                >
                  <Icon size={17} strokeWidth={1.8} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.1em] uppercase mb-1" style={{ ...MONO, color: T.muted500 }}>{label}</p>
                  <p className="text-[14px] font-semibold break-all" style={{ color: T.ink900 }}>{value}</p>
                  <p className="text-[11.5px] mt-0.5" style={{ color: T.muted500 }}>{sub}</p>
                </div>
              </div>
            ))}
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
                  Anti-Ragging{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>Committee Notification</em>
                </h2>
                <p className="mt-2 text-[14px]" style={{ color: T.muted500 }}>
                  Official document constituting the Anti-Ragging Committee at Amaltas Institute.
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
                  download="Antiragging_Committee_Amaltas.pdf"
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
                        download="Antiragging_Committee_Amaltas.pdf"
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
                title="Anti-Ragging Committee Notification"
                className="w-full h-[300px] sm:h-[450px] lg:h-[550px]"
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
              <span>Anti-Ragging Committee Notification · Amaltas Institute of Homoeopathy · PDF</span>
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
            <Phone size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p
            className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            Speak up — your safety is our{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>responsibility.</em>
          </p>
          <p
            className="mt-4 text-[15px] max-w-lg mx-auto"
            style={{ color: `${T.cream50}99` }}
          >
            All complaints are handled with strict confidentiality. You will never face
            retaliation for reporting ragging.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Phone size={14} style={{ color: `${T.cream50}66` }} />
            <span
              className="text-[12px] tracking-[0.14em] uppercase"
              style={{ ...MONO, color: `${T.cream50}88` }}
            >
              National Anti-Ragging Helpline: 1800-180-5522 · Available 24×7
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
