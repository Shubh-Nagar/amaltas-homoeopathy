import React from 'react';
import {
  ClipboardCheck, FileText, MousePointerClick,
  Building2, MapPin, Upload, CheckCircle2,
  AlertCircle, ExternalLink, GraduationCap,
  Stethoscope, Info, Download,
} from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const STEPS = [
  {
    icon: GraduationCap,
    step: '01',
    title: 'Clear NEET with a Valid Score',
    body: 'Eligibility for the BHMS programme at Amaltas begins with a valid NEET qualification. Candidates must have appeared in and qualified the National Eligibility cum Entrance Test (NEET-UG) conducted by the National Testing Agency (NTA) in the relevant academic year.',
  },
  {
    icon: MousePointerClick,
    step: '02',
    title: 'Register on the MP AYUSH Portal',
    body: 'Visit the official Madhya Pradesh AYUSH online counselling portal at ayush.mponline.gov.in and complete your registration on or before the notified date. Ensure all personal and academic details match your original documents exactly.',
    link: { label: 'ayush.mponline.gov.in', href: 'https://ayush.mponline.gov.in' },
  },
  {
    icon: Building2,
    step: '03',
    title: 'Select Amaltas During Choice Filling',
    body: "During the choice-filling phase, select Amaltas Institute of Homoeopathy, Dewas (Indore Division) from the list of participating homoeopathic colleges. Fill your choices carefully — preference order directly influences your seat allotment.",
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Receive Your Seat Allotment Letter',
    body: "After the counselling rounds are processed, check your allotment result on the portal. If a seat at Amaltas Institute is allotted to you, download and print your official Allotment Letter — this document is mandatory for college reporting.",
  },
  {
    icon: MapPin,
    step: '05',
    title: 'Report to the Campus',
    body: 'Visit the Amaltas Institute campus in Bangar, Dewas within the reporting window specified in your allotment letter. Carry your printed Allotment Letter and all original documents. Late reporting may result in forfeiture of the allotted seat.',
  },
  {
    icon: Upload,
    step: '06',
    title: 'Submit Documents Before the Deadline',
    body: 'Complete your admission by submitting all required documents to the Admissions Office before the deadline notified by the institute and the university. Incomplete or delayed document submission may affect enrolment in the BHMS programme.',
  },
];

const DOCUMENTS = [
  {
    icon: FileText,
    label: 'NEET Score card',
    note: 'Print copy',
    required: 'Photocopy · Self-attested',
  },
  {
    icon: FileText,
    label: '12th Marksheet',
    note: 'Class XII board result',
    required: 'Original for verification',
  },
  {
    icon: FileText,
    label: '10th Marksheet',
    note: 'Class X board result',
    required: 'Original for verification',
  },
  {
    icon: FileText,
    label: 'School Leaving Certificate (T.C.)',
    note: 'Transfer certificate from last institution',
    required: 'Original',
  },
  {
    icon: FileText,
    label: 'Birth Certificate',
    note: 'Municipal / hospital issued',
    required: 'Original for verification',
  },
  {
    icon: FileText,
    label: 'Aadhaar Card',
    note: 'Applicant & guardian',
    required: 'Photocopy · Self-attested',
  },
  {
    icon: FileText,
    label: 'Samagra ID',
    note: 'Applicant',
    required: 'Photocopy · Self-attested',
  },
];

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity: inView ? 1 : 0,
  transform: inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left' ? 'translateX(-28px)'
    : dir === 'right' ? 'translateX(28px)'
    : 'translateY(28px)',
  transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function AdmissionProcedureSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [stepRef,  stepInView]  = useInView(0.05);
  const [docRef,   docInView]   = useInView(0.06);
  const [noteRef,  noteInView]  = useInView(0.08);
  const [dlRef,    dlInView]    = useInView(0.08);
  const [closeRef, closeInView] = useInView(0.08);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 400, background: T.forest800 }}
      >
        <img
          src="/campus/students.JPG"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 30%',
            opacity: 0.16,
          }}
          draggable="false"
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(145deg, ${T.forest800}F2 0%, ${T.ink900}D5 100%)`,
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}13 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />
        {/* Ghost icon */}
        <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', opacity: 0.04, pointerEvents: 'none' }}>
          <ClipboardCheck size={240} strokeWidth={0.5} color={T.gold100} />
        </div>
        {/* Arcs */}
        <div style={{ position: 'absolute', top: -80, left: -80, width: 360, height: 360, borderRadius: '50%', border: `1px solid ${T.gold600}1A`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, right: -60, width: 260, height: 260, borderRadius: '50%', border: `1px solid ${T.gold600}10`, pointerEvents: 'none' }} />

        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-28">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}>
              <Eyebrow light>Admissions</Eyebrow>
            </div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Admission{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Procedure</em>
            </h1>
            <p
              className="mt-5 text-[17px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: `${T.cream50}AA`, ...slide(heroInView, 0.2) }}
            >
              A step-by-step guide to securing your seat in the BHMS programme
              at Amaltas Institute of Homoeopathy — from NEET qualification
              to final document submission.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[12px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}77`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Admissions</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Admission Procedure</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          NEET ELIGIBILITY CALLOUT
      ═══════════════════════════════════════════════ */}
      <section className="py-10" style={{ background: `${T.gold600}0E`, borderBottom: `1px solid ${T.gold600}22` }}>
        <Container>
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: `${T.gold600}20`, border: `1.5px solid ${T.gold600}50` }}
            >
              <Info size={18} strokeWidth={2} style={{ color: T.gold700 }} />
            </div>
            <p className="text-[15px] leading-relaxed" style={{ color: T.ink900 }}>
              <span className="font-semibold">Eligibility: </span>
              Admission to the BHMS programme is open exclusively to NEET-qualified candidates.
              Counselling is conducted by the Madhya Pradesh AYUSH department via the state online portal.
              Dates are notified annually — check{' '}
              <a
                href="https://ayush.mponline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold inline-flex items-center gap-1 underline underline-offset-2"
                style={{ color: T.gold700 }}
              >
                ayush.mponline.gov.in
                <ExternalLink size={12} />
              </a>
              {' '}for the latest schedule.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          STEP-BY-STEP PROCESS
      ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={stepRef} className="text-center mb-14" style={slide(stepInView, 0)}>
            <Eyebrow>How to Apply</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.12] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Six steps to your{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>BHMS seat</em>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-0">
            {STEPS.map(({ icon: Icon, step, title, body, link }, i) => {
              const isLast = i === STEPS.length - 1;
              return (
                <div
                  key={step}
                  className="flex gap-6"
                  style={{
                    opacity: stepInView ? 1 : 0,
                    transform: stepInView ? 'translateX(0)' : 'translateX(-24px)',
                    transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s`,
                  }}
                >
                  {/* Spine */}
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: 52 }}>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 z-10"
                      style={{ background: T.forest800, color: '#FFFFFF', boxShadow: `0 4px 16px -4px ${T.forest800}50` }}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    {!isLast && (
                      <div
                        className="flex-1 w-px mt-2"
                        style={{ background: `${T.forest800}20`, minHeight: 40 }}
                      />
                    )}
                  </div>

                  {/* Content card */}
                  <div
                    className="flex-1 rounded-2xl p-6 mb-4"
                    style={{
                      background: '#FFFFFF',
                      border: `1px solid ${T.ink900}0C`,
                      boxShadow: `0 2px 12px -4px ${T.ink900}08`,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${T.gold600}30`; e.currentTarget.style.boxShadow = `0 6px 24px -6px ${T.ink900}12`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = `${T.ink900}0C`; e.currentTarget.style.boxShadow = `0 2px 12px -4px ${T.ink900}08`; }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3
                        className="text-[17px] font-semibold leading-snug"
                        style={{ ...fontDisplay, color: T.ink900 }}
                      >
                        {title}
                      </h3>
                      <span
                        className="flex-shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full"
                        style={{ ...MONO, background: T.gold100, color: T.gold700, letterSpacing: '0.08em' }}
                      >
                        {step}
                      </span>
                    </div>
                    <p className="text-[15px] leading-[1.8]" style={{ color: T.muted500 }}>
                      {body}
                    </p>
                    {link && (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                        style={{ color: T.gold700, textDecoration: 'none' }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = '0.75'; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                      >
                        <ExternalLink size={13} strokeWidth={2} />
                        {link.label}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          DOCUMENTS REQUIRED
      ═══════════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F`, borderBottom: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          {/* Header */}
          <div ref={docRef} className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4" style={slide(docInView, 0, 'left')}>
              <div style={{ position: 'sticky', top: 100 }}>
                <Eyebrow>Documents Checklist</Eyebrow>
                <h2
                  className="mt-4 text-[28px] lg:text-[38px] leading-[1.12] tracking-tight font-semibold"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  Required{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>documents</em>
                  {' '}at the time of reporting
                </h2>
                <p className="mt-4 text-[15px] leading-[1.8]" style={{ color: T.muted500 }}>
                  Bring <strong style={{ color: T.ink900 }}>2 sets of photocopies</strong> of all documents,
                  self-attested by the applicant, along with all original certificates for verification
                  at the Admissions Office.
                </p>

                {/* Self-attest note */}
                <div
                  className="mt-6 flex items-start gap-3 rounded-xl p-4"
                  style={{ background: `${T.gold600}0E`, border: `1px solid ${T.gold600}28` }}
                >
                  <AlertCircle size={16} strokeWidth={2} className="flex-shrink-0 mt-0.5" style={{ color: T.gold700 }} />
                  <p className="text-[13px] leading-relaxed" style={{ color: T.ink900 }}>
                    <span className="font-semibold">Self-attestation: </span>
                    Each photocopy must bear the applicant's signature and the text
                    "Self-attested" along with the date. Unattested copies will not be accepted.
                  </p>
                </div>
              </div>
            </div>

            {/* Document list */}
            <div className="lg:col-span-8 space-y-3">
              {DOCUMENTS.map(({ icon: Icon, label, note, required }, i) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl px-5 py-4"
                  style={{
                    background: T.cream50,
                    border: `1px solid ${T.ink900}0C`,
                    boxShadow: `0 2px 10px -4px ${T.ink900}06`,
                    opacity: docInView ? 1 : 0,
                    transform: docInView ? 'translateX(0)' : 'translateX(20px)',
                    transition: `opacity 0.65s ease ${i * 0.08}s, transform 0.65s ease ${i * 0.08}s`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${T.gold600}30`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${T.ink900}0C`; }}
                >
                  {/* Checkbox icon */}
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: T.gold100 }}
                  >
                    <CheckCircle2 size={18} strokeWidth={2} style={{ color: T.forest800 }} />
                  </div>

                  {/* Label + note */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-semibold" style={{ color: T.ink900 }}>
                      {label}
                    </div>
                    <div className="text-[13px] mt-0.5" style={{ color: T.muted500 }}>
                      {note}
                    </div>
                  </div>

                  {/* Required tag */}
                  <span
                    className="flex-shrink-0 text-[11px] font-medium px-3 py-1 rounded-full"
                    style={{
                      ...MONO,
                      background: required === 'Original'
                        ? `${T.forest800}12`
                        : `${T.gold600}14`,
                      color: required === 'Original' ? T.forest800 : T.gold700,
                      letterSpacing: '0.06em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {required}
                  </span>
                </div>
              ))}

              {/* Total sets reminder */}
              <div
                className="flex items-center gap-4 rounded-2xl px-5 py-4 mt-4"
                style={{
                  background: T.forest800,
                  opacity: docInView ? 1 : 0,
                  transition: `opacity 0.65s ease ${DOCUMENTS.length * 0.08}s`,
                }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}
                >
                  <FileText size={17} strokeWidth={2} style={{ color: T.gold100 }} />
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: `${T.cream50}CC` }}>
                  Bring <span style={{ color: T.gold100, fontWeight: 600 }}>2 complete sets</span> of
                  photocopies, each set self-attested — plus all originals for verification.
                  Originals will be returned after verification.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          IMPORTANT NOTES
      ═══════════════════════════════════════════════ */}
      <section ref={noteRef} className="py-16 lg:py-20" style={{ background: T.cream50 }}>
        <Container>
          <div className="max-w-3xl mx-auto" style={slide(noteInView, 0)}>
            <Eyebrow>Important Notes</Eyebrow>
            <h2
              className="mt-4 text-[26px] lg:text-[34px] leading-[1.15] tracking-tight font-semibold mb-8"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Before you visit the campus
            </h2>
            <div className="space-y-4">
              {[
                'Admission is governed by the MP AYUSH counselling process. The institute does not conduct independent entrance examinations or direct admissions.',
                'Seat allotment is strictly based on NEET merit and seat availability. Reporting after the deadline may result in cancellation of the allotted seat.',
                'All original documents must match the details entered in the counselling portal exactly. Discrepancies may disqualify your admission.',
                'Fees must be paid within the timeframe specified by the institute and the university at the time of reporting.',
                'For queries regarding counselling dates, seat matrix, or fee reimbursement, contact the MP AYUSH directorate or visit ayush.mponline.gov.in.',
              ].map((note, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3"
                  style={{
                    opacity: noteInView ? 1 : 0,
                    transform: noteInView ? 'translateY(0)' : 'translateY(16px)',
                    transition: `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`,
                  }}
                >
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-[11px] font-bold"
                    style={{ background: `${T.forest800}12`, color: T.forest800, ...MONO }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-[15px] leading-[1.8]" style={{ color: T.muted500 }}>
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          REFERENCE DOCUMENTS
      ═══════════════════════════════════════════════ */}
      <section
        ref={dlRef}
        className="py-16 lg:py-20"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div className="max-w-3xl mx-auto">
            <div style={slide(dlInView, 0)}>
              <Eyebrow>Reference Documents</Eyebrow>
              <h2
                className="mt-4 text-[26px] lg:text-[34px] leading-[1.15] tracking-tight font-semibold mb-8"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                Download admission{' '}
                <em style={{ color: T.gold700, fontStyle: 'italic' }}>guidelines</em>
              </h2>
            </div>

            <a
              href="/documents/Annexure%2020%20Reservation%20relaxation%20in%20admission.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-2xl px-6 py-5 transition-all duration-200"
              style={{
                background: '#FFFFFF',
                border: `1px solid ${T.ink900}0C`,
                boxShadow: `0 2px 12px -4px ${T.ink900}08`,
                textDecoration: 'none',
                opacity: dlInView ? 1 : 0,
                transform: dlInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s, border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${T.gold600}40`;
                e.currentTarget.style.boxShadow = `0 6px 24px -6px ${T.ink900}12`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${T.ink900}0C`;
                e.currentTarget.style.boxShadow = `0 2px 12px -4px ${T.ink900}08`;
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${T.forest800}10` }}
              >
                <FileText size={22} strokeWidth={1.6} style={{ color: T.forest800 }} />
              </div>

              {/* Label */}
              <div className="flex-1 min-w-0">
                <div className="text-[16px] font-semibold" style={{ color: T.ink900 }}>
                  Annexure 20 — Reservation &amp; Relaxation in Admission
                </div>
                <div className="text-[13px] mt-0.5" style={{ color: T.muted500 }}>
                  Official guidelines on reservation categories and eligibility relaxations · PDF
                </div>
              </div>

              {/* Download cue */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: `${T.gold600}14`, color: T.gold700 }}
              >
                <Download size={16} strokeWidth={2.2} />
              </div>
            </a>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          CLOSING CTA
      ═══════════════════════════════════════════════ */}
      <section
        ref={closeRef}
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{ background: T.forest800 }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`,
            backgroundSize: '42px 42px',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'absolute', bottom: -120, right: -120, width: 420, height: 420, borderRadius: '50%', border: `1px solid ${T.gold600}14`, pointerEvents: 'none' }} />

        <Container className="relative text-center">
          <div style={slide(closeInView, 0)}>
            <Eyebrow light>Begin Your Journey</Eyebrow>
          </div>
          <h2
            className="mt-5 text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.2] font-semibold max-w-2xl mx-auto"
            style={{ ...fontDisplay, color: '#FFFFFF', ...slide(closeInView, 0.1) }}
          >
            Your career in homoeopathy{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>starts here</em>
          </h2>
          <p
            className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
            style={{ color: `${T.cream50}99`, ...slide(closeInView, 0.2) }}
          >
            Have questions about eligibility, the counselling process, or campus facilities?
            Contact the Amaltas Admissions Office — we are here to guide you through every step.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={slide(closeInView, 0.28)}
          >
            <a
              href="https://ayush.mponline.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-200"
              style={{ background: T.gold600, color: T.ink900, textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = T.gold700; e.currentTarget.style.color = '#FFF'; }}
              onMouseLeave={e => { e.currentTarget.style.background = T.gold600; e.currentTarget.style.color = T.ink900; }}
            >
              <ExternalLink size={15} strokeWidth={2.2} />
              Apply via MP AYUSH Portal
            </a>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            >
              <Stethoscope size={15} strokeWidth={2} />
              Contact Admissions Office
            </a>
          </div>

          <div
            className="mt-12 flex items-center justify-center gap-10 sm:gap-16"
            style={slide(closeInView, 0.36)}
          >
            {[
              [GraduationCap,   'NEET Based'],
              [ClipboardCheck,  'MP AYUSH Counselling'],
              [Stethoscope,     'BHMS Programme'],
            ].map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}2C` }}
                >
                  <Icon size={18} strokeWidth={1.6} style={{ color: T.gold100 }} />
                </div>
                <span style={{ ...MONO, fontSize: 10, letterSpacing: '0.14em', color: `${T.cream50}77`, textTransform: 'uppercase', textAlign: 'center' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
