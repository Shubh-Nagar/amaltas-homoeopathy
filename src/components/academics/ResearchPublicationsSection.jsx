import React, { useState } from 'react';
import { ExternalLink, FileText, Microscope } from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };
const PDF_URL = '/Research Publication.pdf';

const slide = (inView, delay = 0) => ({
  opacity:    inView ? 1 : 0,
  transform:  inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function ResearchPublicationsSection() {
  const [heroRef, heroInView] = useInView(0.08);
  const [bodyRef, bodyInView] = useInView(0.04);
  const [loaded,  setLoaded]  = useState(false);
  const [error,   setError]   = useState(false);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 380, background: T.forest800 }}>
        <img
          src="/campus/homoepathy.png"
          alt="Amaltas Research"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', opacity: 0.2 }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${T.forest800}EE 0%, ${T.ink900}BB 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}18 1px, transparent 1px)`, backgroundSize: '36px 36px', pointerEvents: 'none' }} />

        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-28">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}><Eyebrow light>Academics</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Research{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Publications</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Faculty and student research advancing evidence-based homoeopathic practice.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Academics</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Research Publications</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  PDF VIEWER  ═══════════════════════ */}
      <section className="py-16 lg:py-20" style={{ background: T.cream50 }}>
        <Container>
          <div ref={bodyRef}>
            {/* Header + actions */}
            <div
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
              style={slide(bodyInView, 0)}
            >
              <div>
                <Eyebrow>Our Research</Eyebrow>
                <h2
                  className="mt-4 text-[28px] lg:text-[36px] leading-[1.1] tracking-tight font-semibold"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  Research{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>Publication</em>
                </h2>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200"
                  style={{ background: T.forest800, color: T.cream50, textDecoration: 'none' }}
                  title="Open in new tab"
                >
                  <ExternalLink size={14} strokeWidth={2} />
                  Open in new tab
                </a>
              </div>
            </div>

            {/* PDF embed */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: `1px solid ${T.ink900}10`,
                boxShadow: `0 8px 32px -8px ${T.ink900}12`,
                background: '#f5f5f5',
                ...slide(bodyInView, 0.1),
              }}
            >
              {!loaded && !error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: T.cream50 }}>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center animate-pulse"
                    style={{ background: `${T.forest800}12`, border: `1px solid ${T.forest800}20` }}
                  >
                    <FileText size={24} strokeWidth={1.5} style={{ color: T.forest800 }} />
                  </div>
                  <p className="text-[12px]" style={{ color: T.muted500, ...MONO }}>Loading document…</p>
                </div>
              )}
              {error ? (
                <div className="flex flex-col items-center justify-center gap-4 p-16 text-center" style={{ minHeight: 400 }}>
                  <p className="text-[16px] font-semibold" style={{ ...fontDisplay, color: T.ink900 }}>
                    Unable to preview in browser
                  </p>
                  <p className="text-[14px]" style={{ color: T.muted500 }}>
                    Use the Open in new tab button above to view the PDF.
                  </p>
                </div>
              ) : (
                <iframe
                  src={`${PDF_URL}#toolbar=1&navpanes=0&view=FitH`}
                  title="Research Publication"
                  className="w-full h-[350px] sm:h-[500px] lg:h-[700px]"
                  style={{ border: 'none', display: 'block' }}
                  onLoad={() => setLoaded(true)}
                  onError={() => { setError(true); setLoaded(true); }}
                />
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ═════════════════════  CLOSING STRIP  ════════════════════════ */}
      <section className="py-16 relative overflow-hidden" style={{ background: T.forest800 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <Container className="relative text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}>
            <Microscope size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug" style={{ ...fontDisplay, color: '#FFFFFF' }}>
            Research is how homoeopathy{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>earns its place</em>
            {' '}in modern medicine.
          </p>
          <p className="mt-4 text-[14px]" style={{ color: `${T.cream50}66` }}>
            Amaltas Institute of Homoeopathy · Research Cell · Open Access
          </p>
        </Container>
      </section>
    </>
  );
}
