import React, { useState } from 'react';
import {
  IndianRupee, FileText, AlertCircle,
  GraduationCap, BookOpen, FlaskConical,
  Trophy, Building2, TrendingUp, Info,
  ExternalLink,
} from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const FEE_ROWS = [
  { icon: GraduationCap, label: 'Tuition Fee',                           y1: 135000, y2: 135000, y3: 135000, y4: 135000, y5: 67500 },
  { icon: FileText,      label: 'Yearly Registration',                   y1: 5000,   y2: 5000,   y3: 5000,   y4: 5000,   y5: 2500  },
  { icon: BookOpen,      label: 'Book Bank, Journals & E-Library',       y1: 5000,   y2: 5000,   y3: 5000,   y4: 5000,   y5: 2500  },
  { icon: FlaskConical,  label: 'Laboratory Fees',                       y1: 7500,   y2: 7500,   y3: 7500,   y4: 7500,   y5: 3750  },
  { icon: Trophy,        label: 'Extra Curricular Activities',           y1: 7500,   y2: 7500,   y3: 7500,   y4: 7500,   y5: 3750  },
  { icon: Building2,     label: 'Development Fees',                      y1: 5000,   y2: 5000,   y3: 5000,   y4: 5000,   y5: 2500  },
];

const TOTALS = { y1: 165000, y2: 165000, y3: 165000, y4: 165000, y5: 82500 };

const COLUMNS = [
  { key: 'y1', label: '1st Year',  sub: 'Yearly' },
  { key: 'y2', label: '2nd Year',  sub: 'Yearly' },
  { key: 'y3', label: '3rd Year',  sub: 'Yearly' },
  { key: 'y4', label: '4th Year',  sub: 'Yearly' },
  { key: 'y5', label: 'Internship', sub: '6 Months' },
];

const fmt = (n) => '₹' + n.toLocaleString('en-IN');

/* ── PDF viewer (view-only) ─────────────────────────── */
const PdfViewer = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);
  const [error,  setError]  = useState(false);
  return (
    <div
      style={{
        position: 'relative', width: '100%', aspectRatio: '3 / 4',
        borderRadius: 12, overflow: 'hidden',
        background: `${T.ink900}08`, border: `1px solid ${T.ink900}10`,
      }}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: `${T.forest800}06` }}>
          <FileText size={36} strokeWidth={1.4} style={{ color: `${T.ink900}28` }} />
          <span style={{ ...MONO, fontSize: 11, color: `${T.ink900}38`, letterSpacing: '0.12em' }}>LOADING…</span>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center" style={{ background: `${T.forest800}06` }}>
          <AlertCircle size={30} strokeWidth={1.6} style={{ color: T.muted500 }} />
          <p className="text-[13px]" style={{ color: T.muted500 }}>Document unavailable.</p>
        </div>
      )}
      {!error && (
        <iframe
          title={title}
          src={`${src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
          style={{ width: '100%', height: '100%', border: 'none', display: loaded ? 'block' : 'none' }}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {/* Block right-click / context menu */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 10, cursor: 'default' }} onContextMenu={e => e.preventDefault()} />
    </div>
  );
};

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity: inView ? 1 : 0,
  transform: inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left' ? 'translateX(-28px)'
    : dir === 'right' ? 'translateX(28px)'
    : 'translateY(28px)',
  transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function FeesStructureSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [tableRef, tableInView] = useInView(0.05);
  const [pdfRef,   pdfInView]   = useInView(0.06);
  const [closeRef, closeInView] = useInView(0.08);

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 380, background: T.ink900 }}>
        <img
          src="/campus/experiment.png" alt="" aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.12 }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(145deg, ${T.ink900}F5 0%, ${T.forest800}D5 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}12 1.5px, transparent 1.5px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        {/* Ghost icon */}
        <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', opacity: 0.04, pointerEvents: 'none' }}>
          <IndianRupee size={220} strokeWidth={0.5} color={T.gold100} />
        </div>
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 340, height: 340, borderRadius: '50%', border: `1px solid ${T.gold600}18`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', border: `1px solid ${T.gold600}10`, pointerEvents: 'none' }} />

        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-28">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}><Eyebrow light>Admissions</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Fees{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Structure</em>
            </h1>
            <p
              className="mt-5 text-[17px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}AA`, ...slide(heroInView, 0.2) }}
            >
              Proposed fee structure for the BHMS programme — Admission Batch 2025–26.
              Issued by Amaltas University, Dewas.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[12px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}77`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span><span style={{ color: T.gold600 }}>›</span>
              <span>Admissions</span><span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Fees Structure</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          META STRIP
      ══════════════════════════════════════ */}
      <section style={{ background: `${T.gold600}0D`, borderBottom: `1px solid ${T.gold600}22` }}>
        <Container className="py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6">
              {[
                ['Ref. No.', 'AUD/RO/Fees/2025/365'],
                ['Date', '26 Aug 2025'],
                ['Batch', 'BHMS 2025–26'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center gap-2">
                  <span className="text-[11px] tracking-[0.14em] uppercase" style={{ ...MONO, color: T.muted500 }}>{k}</span>
                  <span className="text-[13px] font-semibold" style={{ color: T.ink900 }}>{v}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-[12px]" style={{ color: T.gold700 }}>
              <Info size={13} strokeWidth={2} />
              <span style={{ ...MONO, fontSize: 11, letterSpacing: '0.08em' }}>Tentative — subject to Government revision</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          FEE TABLE
      ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={tableRef} className="text-center mb-12" style={slide(tableInView, 0)}>
            <Eyebrow>BHMS 2025–26 Batch</Eyebrow>
            <h2
              className="mt-4 text-[28px] lg:text-[40px] leading-[1.12] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Year-wise fee{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>breakdown</em>
            </h2>
          </div>

          {/* Scrollable wrapper on small screens */}
          <div
            className="overflow-x-auto rounded-2xl"
            style={{
              boxShadow: `0 8px 40px -12px ${T.ink900}14`,
              border: `1px solid ${T.ink900}0E`,
              opacity: tableInView ? 1 : 0,
              transform: tableInView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>

              {/* ── Header ── */}
              <thead>
                <tr style={{ background: T.forest800 }}>
                  <th
                    style={{
                      padding: '16px 20px', textAlign: 'left',
                      ...MONO, fontSize: 11, letterSpacing: '0.16em',
                      color: `${T.cream50}88`, textTransform: 'uppercase',
                      fontWeight: 600, borderRight: `1px solid rgba(255,255,255,0.08)`,
                      minWidth: 220,
                    }}
                  >
                    Fee Component
                  </th>
                  {COLUMNS.map((col, i) => (
                    <th
                      key={col.key}
                      style={{
                        padding: '16px 14px', textAlign: 'center',
                        borderRight: i < COLUMNS.length - 1 ? `1px solid rgba(255,255,255,0.08)` : 'none',
                      }}
                    >
                      <div style={{ ...fontDisplay, fontSize: 14, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2 }}>
                        {col.label}
                      </div>
                      <div style={{ ...MONO, fontSize: 10, color: `${T.gold100}80`, letterSpacing: '0.1em', marginTop: 2, textTransform: 'uppercase' }}>
                        {col.sub}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* ── Body ── */}
              <tbody>
                {FEE_ROWS.map(({ icon: Icon, label, ...vals }, i) => (
                  <tr
                    key={label}
                    style={{ background: i % 2 === 0 ? '#FFFFFF' : `${T.forest800}04` }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${T.gold600}09`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? '#FFFFFF' : `${T.forest800}04`; }}
                  >
                    {/* Label cell */}
                    <td
                      style={{
                        padding: '14px 20px',
                        borderBottom: `1px solid ${T.ink900}08`,
                        borderRight: `1px solid ${T.ink900}08`,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ background: T.gold100, color: T.forest800 }}
                        >
                          <Icon size={13} strokeWidth={2} />
                        </div>
                        <span className="text-[14px] font-medium" style={{ color: T.ink900 }}>
                          {label}
                        </span>
                      </div>
                    </td>

                    {/* Value cells */}
                    {COLUMNS.map((col, j) => (
                      <td
                        key={col.key}
                        style={{
                          padding: '14px 14px', textAlign: 'center',
                          borderBottom: `1px solid ${T.ink900}08`,
                          borderRight: j < COLUMNS.length - 1 ? `1px solid ${T.ink900}08` : 'none',
                        }}
                      >
                        <span className="text-[14px] font-semibold" style={{ color: T.ink900, ...MONO }}>
                          {fmt(vals[col.key])}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              {/* ── Total row ── */}
              <tfoot>
                <tr style={{ background: T.forest800 }}>
                  <td
                    style={{
                      padding: '16px 20px',
                      borderRight: `1px solid rgba(255,255,255,0.1)`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: `${T.gold100}22`, border: `1px solid ${T.gold100}30` }}
                      >
                        <TrendingUp size={13} strokeWidth={2} style={{ color: T.gold100 }} />
                      </div>
                      <span
                        className="text-[14px] font-bold tracking-wide"
                        style={{ color: '#FFFFFF', letterSpacing: '0.06em' }}
                      >
                        TOTAL (per year)
                      </span>
                    </div>
                  </td>
                  {COLUMNS.map((col, j) => (
                    <td
                      key={col.key}
                      style={{
                        padding: '16px 14px', textAlign: 'center',
                        borderRight: j < COLUMNS.length - 1 ? `1px solid rgba(255,255,255,0.1)` : 'none',
                      }}
                    >
                      <span
                        className="text-[15px] font-bold"
                        style={{ color: T.gold100, ...MONO }}
                      >
                        {fmt(TOTALS[col.key])}
                      </span>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Disclaimer note */}
          <div
            className="mt-6 flex items-start gap-3 rounded-xl p-4 max-w-3xl"
            style={{
              background: `${T.gold600}0D`,
              border: `1px solid ${T.gold600}25`,
              opacity: tableInView ? 1 : 0,
              transition: 'opacity 0.7s ease 0.4s',
            }}
          >
            <AlertCircle size={16} strokeWidth={2} className="flex-shrink-0 mt-0.5" style={{ color: T.gold700 }} />
            <p className="text-[13px] leading-relaxed" style={{ color: T.ink900 }}>
              <span className="font-semibold">Note: </span>
              This is a tentative fee structure. As per Government norms, this fee structure
              may change. Students are advised to confirm the final fee at the time of admission.
            </p>
          </div>

          {/* Per-year summary cards */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {COLUMNS.map((col, i) => (
              <div
                key={col.key}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: '#FFFFFF',
                  border: `1px solid ${T.ink900}0C`,
                  boxShadow: `0 4px 16px -4px ${T.ink900}08`,
                  opacity: tableInView ? 1 : 0,
                  transform: tableInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.65s ease ${0.2 + i * 0.07}s, transform 0.65s ease ${0.2 + i * 0.07}s`,
                }}
              >
                <div style={{ ...MONO, fontSize: 10, letterSpacing: '0.16em', color: T.muted500, textTransform: 'uppercase', marginBottom: 6 }}>
                  {col.label}
                </div>
                <div className="text-[22px] font-bold" style={{ ...fontDisplay, color: T.forest800 }}>
                  {fmt(TOTALS[col.key])}
                </div>
                <div style={{ ...MONO, fontSize: 10, color: `${T.ink900}40`, marginTop: 4 }}>
                  {col.sub}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          PDF VIEWER
      ══════════════════════════════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={pdfRef} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left — sticky info */}
            <div className="lg:col-span-4" style={{ ...slide(pdfInView, 0, 'left'), position: 'sticky', top: 100 }}>
              <Eyebrow>Official Document</Eyebrow>
              <h2
                className="mt-4 text-[26px] lg:text-[34px] leading-[1.15] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                Fee Structure{' '}
                <em style={{ color: T.gold700, fontStyle: 'italic' }}>Certificate</em>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.8]" style={{ color: T.muted500 }}>
                The official fee structure document issued by Amaltas University, Dewas —
                signed by the Registrar and bearing the university seal.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  ['Issued by',  'Amaltas University, Dewas'],
                  ['Ref. No.',   'AUD/RO/Fees/2025/365'],
                  ['Date',       '26 August 2025'],
                  ['Programme',  'BHMS 2025–26 Batch'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center gap-3 px-4 py-2.5 rounded-xl" style={{ background: `${T.forest800}08`, border: `1px solid ${T.forest800}12` }}>
                    <span style={{ ...MONO, fontSize: 10, letterSpacing: '0.12em', color: T.muted500, textTransform: 'uppercase', minWidth: 72 }}>{k}</span>
                    <span className="text-[13px] font-medium" style={{ color: T.ink900 }}>{v}</span>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 flex items-start gap-3 rounded-xl p-4"
                style={{ background: `${T.forest800}0A`, border: `1px solid ${T.forest800}1A` }}
              >
                <Info size={14} strokeWidth={2} className="flex-shrink-0 mt-0.5" style={{ color: T.forest800 }} />
                <p className="text-[13px] leading-relaxed" style={{ color: T.ink900 }}>
                  This document is published for information only.
                  Reproduction or use for any other purpose is not permitted.
                </p>
              </div>

              <div className="mt-5">
                <a
                  href="/documents/Amaltas Inst of Hom Fees Structure 2025-26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-200"
                  style={{ background: `${T.forest800}12`, border: `1px solid ${T.forest800}28`, color: T.forest800, textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${T.forest800}20`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${T.forest800}12`; }}
                >
                  <ExternalLink size={13} strokeWidth={2} />
                  View in new tab
                </a>
              </div>
            </div>

            {/* Right — PDF viewer */}
            <div className="lg:col-span-8" style={slide(pdfInView, 0.14, 'right')}>
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: `0 20px 60px -12px ${T.ink900}20`, border: `1px solid ${T.ink900}0E` }}>
                {/* Chrome bar */}
                <div className="flex items-center gap-2 px-4 py-3" style={{ background: T.ink900, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex gap-1.5">
                    {['#FF5F57','#FFBD2E','#28C840'].map(c => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
                    ))}
                  </div>
                  <div className="flex-1 mx-3 px-3 py-1 rounded text-[11px] truncate" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', ...MONO }}>
                    Fees Structure BHMS 2025-26 — Amaltas Institute of Homoeopathy
                  </div>
                  <ExternalLink size={12} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                </div>
                <PdfViewer
                  src="/documents/Amaltas Inst of Hom Fees Structure 2025-26.pdf"
                  title="Fees Structure BHMS 2025-26"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          CLOSING
      ══════════════════════════════════════ */}
      <section ref={closeRef} className="py-20 lg:py-24 relative overflow-hidden" style={{ background: T.forest800 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`, backgroundSize: '42px 42px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -120, right: -120, width: 420, height: 420, borderRadius: '50%', border: `1px solid ${T.gold600}14`, pointerEvents: 'none' }} />

        <Container className="relative text-center">
          <div style={slide(closeInView, 0)}><Eyebrow light>Admissions Open · 2025–26</Eyebrow></div>
          <h2
            className="mt-5 text-[24px] sm:text-[30px] lg:text-[38px] leading-[1.22] font-semibold max-w-2xl mx-auto"
            style={{ ...fontDisplay, color: '#FFFFFF', ...slide(closeInView, 0.1) }}
          >
            Quality homoeopathic education at{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>₹1,65,000</em>
            {' '}per year — accessible, transparent, and government-regulated.
          </h2>
          <p
            className="mt-5 text-[15px] leading-relaxed max-w-lg mx-auto"
            style={{ color: `${T.cream50}88`, ...slide(closeInView, 0.2) }}
          >
            For fee-related queries or scholarship information, contact the Amaltas
            Admissions Office directly.
          </p>

          <div className="mt-10 flex items-center justify-center gap-10 sm:gap-16" style={slide(closeInView, 0.28)}>
            {[
              [GraduationCap, '5.5 Year BHMS'],
              [IndianRupee,   '₹1,65,000 / Year'],
              [FileText,      'Govt. Regulated'],
            ].map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}2C` }}>
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
