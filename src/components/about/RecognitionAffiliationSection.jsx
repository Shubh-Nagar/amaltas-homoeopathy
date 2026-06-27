import React, { useState } from 'react';
import { FileText, ShieldCheck, Landmark, ExternalLink, AlertCircle } from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const DOCUMENTS = [
  {
    id: 'consent',
    icon: ShieldCheck,
    tag: 'Regulatory',
    title: 'Consent of Affiliation',
    subtitle: 'Issued by the National Commission for Homoeopathy',
    description:
      'The formal Consent of Affiliation granted to Amaltas Institute of Homoeopathy, Hospital and Research Centre by the National Commission for Homoeopathy (NCH), New Delhi — confirming the institute\'s authorisation to offer the Bachelor of Homoeopathic Medicine and Surgery (BHMS) programme.',
    src: '/documents/Consent of Affiliation (1).pdf',
    color: T.forest800,
  },
  // {
  //   id: 'university',
  //   icon: Landmark,
  //   tag: 'Affiliation',
  //   title: 'University Affiliation',
  //   subtitle: 'Issued by MP Medical Science University, Jabalpur · 2025–26',
  //   description:
  //     'The University Affiliation certificate issued to Amaltas Institute by Madhya Pradesh Medical Science University (MPMSU), Jabalpur — the statutory affiliating and degree-granting authority for the BHMS programme under which Amaltas students are registered and examined.',
  //   src: '/documents/University Affiliation 2025-26 (1).pdf',
  //   color: T.gold700,
  // },
];

/* Blocks right-click and pointer events on the iframe so the browser PDF
   toolbar / context-menu download options are not accessible. */
const PdfViewer = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);
  const [error,  setError]  = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '3 / 4',
        borderRadius: 12,
        overflow: 'hidden',
        background: `${T.ink900}08`,
        border: `1px solid ${T.ink900}10`,
      }}
    >
      {/* Loading skeleton */}
      {!loaded && !error && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{ background: `${T.forest800}06` }}
        >
          <FileText size={36} strokeWidth={1.4} style={{ color: `${T.ink900}30` }} />
          <span style={{ ...MONO, fontSize: 11, color: `${T.ink900}40`, letterSpacing: '0.12em' }}>
            LOADING DOCUMENT…
          </span>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center"
          style={{ background: `${T.forest800}06` }}
        >
          <AlertCircle size={32} strokeWidth={1.6} style={{ color: T.muted500 }} />
          <p className="text-[14px] leading-relaxed" style={{ color: T.muted500 }}>
            Document not yet available. Please place the PDF file in{' '}
            <code
              className="px-1.5 py-0.5 rounded text-[12px]"
              style={{ background: `${T.ink900}0C`, color: T.ink900, fontFamily: 'monospace' }}
            >
              public/documents/
            </code>
          </p>
        </div>
      )}

      {/* PDF iframe — toolbar hidden via URL fragment */}
      {!error && (
        <iframe
          title={title}
          src={`${src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: loaded ? 'block' : 'none',
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}

      {/* Transparent overlay — blocks right-click context menu on the iframe */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          cursor: 'default',
        }}
        onContextMenu={e => e.preventDefault()}
      />
    </div>
  );
};

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity: inView ? 1 : 0,
  transform: inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left' ? 'translateX(-32px)'
    : dir === 'right' ? 'translateX(32px)'
    : 'translateY(28px)',
  transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function RecognitionAffiliationSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [doc1Ref,  doc1InView]  = useInView(0.06);
  const [doc2Ref,  doc2InView]  = useInView(0.06);
  const [closeRef, closeInView] = useInView(0.08);

  const docRefs   = [doc1Ref,  doc2Ref];
  const docInViews = [doc1InView, doc2InView];

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 400, background: T.forest800 }}
      >
        <img
          src="/campus/homoepathy.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 45%',
            opacity: 0.13,
          }}
          draggable="false"
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(145deg, ${T.forest800}F4 0%, ${T.ink900}D8 100%)`,
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}14 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />
        {/* Large ghost icon */}
        <div style={{ position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)', opacity: 0.04, pointerEvents: 'none' }}>
          <FileText size={240} strokeWidth={0.5} color={T.gold100} />
        </div>
        {/* Arcs */}
        <div style={{ position: 'absolute', bottom: -90, left: -90, width: 360, height: 360, borderRadius: '50%', border: `1px solid ${T.gold600}1A`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -60, right: -60, width: 260, height: 260, borderRadius: '50%', border: `1px solid ${T.gold600}10`, pointerEvents: 'none' }} />

        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-28">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}>
              <Eyebrow light>About the Institution</Eyebrow>
            </div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Recognition &{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Affiliation</em>
            </h1>
            <p
              className="mt-5 text-[17px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: `${T.cream50}AA`, ...slide(heroInView, 0.2) }}
            >
              Official documents confirming Amaltas Institute's recognition by the
              National Commission for Homoeopathy and its affiliation with
              Amaltas Institute.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[12px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}77`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>About</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Recognition &amp; Affiliation</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          DOCUMENT SECTIONS
      ═══════════════════════════════════════════════ */}
      {DOCUMENTS.map(({ id, icon: Icon, tag, title, subtitle, description, src, color }, idx) => {
        const ref    = docRefs[idx];
        const inView = docInViews[idx];
        const isEven = idx % 2 === 0;

        return (
          <section
            key={id}
            className="py-20 lg:py-28"
            style={{
              background: isEven ? T.cream50 : `${T.forest800}07`,
              borderTop: isEven ? 'none' : `1px solid ${T.forest800}0F`,
            }}
          >
            <Container>
              <div
                ref={ref}
                className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Info column */}
                <div
                  className={`lg:col-span-5 ${!isEven ? 'lg:order-2' : ''}`}
                  style={slide(inView, 0, isEven ? 'left' : 'right')}
                >
                  {/* Tag chip */}
                  <div className="flex items-center gap-2 mb-5">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: color, color: '#FFF' }}
                    >
                      <Icon size={17} strokeWidth={2} />
                    </div>
                    <span
                      className="text-[11px] tracking-[0.2em] uppercase font-medium"
                      style={{ ...MONO, color: T.muted500 }}
                    >
                      {tag}
                    </span>
                  </div>

                  <h2
                    className="text-[28px] lg:text-[36px] leading-[1.12] tracking-tight font-semibold mb-2"
                    style={{ ...fontDisplay, color: T.ink900 }}
                  >
                    {title}
                  </h2>
                  <p
                    className="text-[14px] font-medium mb-5"
                    style={{ color: color, ...MONO, letterSpacing: '0.04em' }}
                  >
                    {subtitle}
                  </p>
                  <p className="text-[16px] leading-[1.85]" style={{ color: T.muted500 }}>
                    {description}
                  </p>

                  {/* Callout */}
                  <div
                    className="mt-8 flex items-start gap-3 rounded-xl p-4"
                    style={{
                      background: `${color}0C`,
                      border: `1px solid ${color}22`,
                    }}
                  >
                    <ShieldCheck size={16} strokeWidth={2} className="flex-shrink-0 mt-0.5" style={{ color }} />
                    <p className="text-[13px] leading-relaxed" style={{ color: T.ink900 }}>
                      This document is published for transparency and public information only.
                      Reproduction or use for any other purpose is not permitted.
                    </p>
                  </div>

                  {/* Document number label */}
                  <div
                    className="mt-8 flex items-center gap-2"
                    style={{ ...MONO, fontSize: 11, color: `${T.ink900}30`, letterSpacing: '0.14em', textTransform: 'uppercase' }}
                  >
                    <span>Document</span>
                    <span style={{ color: T.gold600 }}>·</span>
                    <span>0{idx + 1} of {DOCUMENTS.length}</span>
                  </div>
                </div>

                {/* PDF viewer column */}
                <div
                  className={`lg:col-span-7 ${!isEven ? 'lg:order-1' : ''}`}
                  style={slide(inView, 0.14, isEven ? 'right' : 'left')}
                >
                  {/* Viewer frame */}
                  <div
                    style={{
                      borderRadius: 16,
                      overflow: 'hidden',
                      boxShadow: `0 20px 60px -12px ${T.ink900}22`,
                      border: `1px solid ${T.ink900}10`,
                    }}
                  >
                    {/* Chrome — top bar */}
                    <div
                      className="flex items-center gap-2 px-4 py-3"
                      style={{ background: T.ink900, borderBottom: `1px solid rgba(255,255,255,0.06)` }}
                    >
                      <div className="flex gap-1.5">
                        {['#FF5F57', '#FFBD2E', '#28C840'].map(c => (
                          <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
                        ))}
                      </div>
                      <div
                        className="flex-1 mx-3 px-3 py-1 rounded text-[11px] truncate"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          color: 'rgba(255,255,255,0.4)',
                          ...MONO,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {title} — Amaltas Institute of Homoeopathy
                      </div>
                      <ExternalLink size={12} style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                    </div>

                    {/* PDF */}
                    <PdfViewer src={src} title={title} />
                  </div>

                  {/* View-in-new-tab link */}
                  <div className="mt-4 text-center">
                    <a
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-200"
                      style={{
                        background: `${color}12`,
                        border: `1px solid ${color}28`,
                        color: color,
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${color}20`; }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${color}12`; }}
                    >
                      <ExternalLink size={14} strokeWidth={2} />
                      View full document in new tab
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* ═══════════════════════════════════════════════
          CLOSING
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
        <div style={{ position: 'absolute', top: -130, right: -130, width: 460, height: 460, borderRadius: '50%', border: `1px solid ${T.gold600}14`, pointerEvents: 'none' }} />

        <Container className="relative text-center">
          <div style={slide(closeInView, 0)}>
            <Eyebrow light>Verified &amp; Authorised</Eyebrow>
          </div>
          <h2
            className="mt-5 text-[22px] sm:text-[28px] lg:text-[34px] leading-[1.28] font-semibold max-w-2xl mx-auto"
            style={{ ...fontDisplay, color: '#FFFFFF', ...slide(closeInView, 0.12) }}
          >
            Amaltas Institute operates with full{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>regulatory authorisation</em>
            {' '}— giving every student and patient the assurance of a nationally recognised institution.
          </h2>

          <div
            className="mt-10 flex items-center justify-center gap-10 sm:gap-16"
            style={slide(closeInView, 0.22)}
          >
            {[
              [ShieldCheck, 'NCH Recognised'],
              [Landmark,    'MPMSU Affiliated'],
              [FileText,    'AYUSH Compliant'],
            ].map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}2C` }}
                >
                  <Icon size={18} strokeWidth={1.6} style={{ color: T.gold100 }} />
                </div>
                <span style={{ ...MONO, fontSize: 10, letterSpacing: '0.16em', color: `${T.cream50}77`, textTransform: 'uppercase', textAlign: 'center' }}>
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
