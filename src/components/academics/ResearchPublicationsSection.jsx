import React, { useState } from 'react';
import {
  FileText, Download, ExternalLink, X,
  FlaskConical, BookOpen, Filter, ChevronRight,
  Microscope, Heart, Leaf,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const BASE = '/documents/research/';

const PUBLICATIONS = [
  {
    id: 1,
    title: 'Homoeopathic Approaches for Management of Ulcerative Colitis',
    type: 'Review Article',
    specialty: 'Gastroenterology',
    description: 'An evidence-based review of homoeopathic treatment strategies and remedies for ulcerative colitis, exploring constitutional and symptomatic approaches in managing chronic inflammatory bowel disease.',
    file: 'Homoeopathic Approaches for Management of Ulcerative colitis.pdf',
  },
  {
    id: 2,
    title: 'Homoeopathic Approaches for the Management of Psoriasis',
    type: 'Review Article',
    specialty: 'Dermatology',
    description: 'A comprehensive review examining homoeopathic remedies, miasmatic understanding, and individualized treatment protocols for managing psoriasis — a chronic autoimmune skin condition.',
    file: 'Homoeopathic Approaches for the Management Of Psoriasis.pdf',
  },
  {
    id: 3,
    title: 'Homoeopathic Management of Psoriasis — A Case Report',
    type: 'Case Report',
    specialty: 'Dermatology',
    description: 'A detailed case report documenting the successful homoeopathic management of a psoriasis patient, outlining case-taking, repertorization, remedy selection, and outcomes over the treatment period.',
    file: 'Homoeopathic Management of Psoriasis A case report.pdf',
  },
  {
    id: 4,
    title: 'Homoeopathic Perspective on Urticaria',
    type: 'Perspective',
    specialty: 'Dermatology',
    description: 'A clinical perspective on the homoeopathic understanding of urticaria — examining causative factors, miasmatic background, key remedies, and differentiation in acute and chronic presentations.',
    file: 'Homoeopathic perspective on urticaria.pdf',
  },
  {
    id: 5,
    title: 'Management of Proteinuria in Homoeopathy',
    type: 'Review Article',
    specialty: 'Nephrology',
    description: 'A focused review on homoeopathic approaches to managing proteinuria, with discussion of remedies indicated in renal conditions and their evidence base in clinical practice.',
    file: 'Management of protinuria in Homeopathy.pdf',
  },
  {
    id: 6,
    title: 'Polycystic Ovarian Syndrome — Management Through Alternative Approaches',
    type: 'Review Article',
    specialty: "Women's Health",
    description: "An integrative review of alternative management strategies including homoeopathy for PCOS, covering hormonal regulation, symptom management, and lifestyle considerations.",
    file: 'Polycystic ovarian syndrome and Management through alternative Approaches.pdf',
  },
  {
    id: 7,
    title: 'Role of Homoeopathy in the Management of Acne',
    type: 'Review Article',
    specialty: 'Dermatology',
    description: 'A review of homoeopathic treatment for acne vulgaris — exploring constitutional remedies, miasmatic analysis, and clinical outcomes in adolescent and adult presentations.',
    file: 'Roll of homeopathy in the Management Of acne.pdf',
  },
  {
    id: 8,
    title: 'Seborrheic Dermatitis — Causes, Symptoms and Homoeopathic Perspective',
    type: 'Perspective',
    specialty: 'Dermatology',
    description: 'An in-depth homoeopathic perspective on seborrheic dermatitis — examining etiopathology, symptom picture, and the most frequently indicated homoeopathic remedies for this chronic scalp and skin condition.',
    file: 'SEBORRHEIC-DERMATITIS-CAUSES-SYMPTOMS-AND-TREATMENT-HOMEOPATHIC-PERSPECTIVE-1.pdf',
  },
  {
    id: 9,
    title: 'The Scope of Homoeopathy in the Management of Female Infertility',
    type: 'Review Article',
    specialty: "Women's Health",
    description: "A review exploring the role and clinical scope of homoeopathic treatment in female infertility — covering hormonal dysregulation, structural causes, and key remedies with constitutional indications.",
    file: 'The scope of homeopathy in the Management of female Infertility.pdf',
  },
];

const SPECIALTIES = ['All', 'Dermatology', "Women's Health", 'Gastroenterology', 'Nephrology'];

const SPEC_META = {
  'Dermatology':      { color: '#8A4A6E', bg: '#8A4A6E14', border: '#8A4A6E30' },
  "Women's Health":   { color: '#C0392B', bg: '#C0392B10', border: '#C0392B28' },
  'Gastroenterology': { color: T.forest600, bg: `${T.forest600}12`, border: `${T.forest600}28` },
  'Nephrology':       { color: '#2E6A8A', bg: '#2E6A8A12', border: '#2E6A8A28' },
};

const TYPE_META = {
  'Review Article': { color: T.forest800, bg: `${T.forest800}10`, border: `${T.forest800}25` },
  'Case Report':    { color: T.gold700,   bg: `${T.gold600}14`,   border: `${T.gold600}35` },
  'Perspective':    { color: '#5A4A8A',   bg: '#5A4A8A12',         border: '#5A4A8A30' },
};

const STATS = [
  { value: '9',  label: 'Publications' },
  { value: '4',  label: 'Specialties' },
  { value: '3',  label: 'Review Articles' + ' types' },
  { value: '100%', label: 'Open Access' },
];

const slide = (inView, delay = 0) => ({
  opacity:    inView ? 1 : 0,
  transform:  inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

function PdfModal({ pub, onClose }) {
  const [loaded, setLoaded] = useState(false);
  const [error,  setError]  = useState(false);
  const url = BASE + encodeURIComponent(pub.file);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
      style={{ background: 'rgba(6,15,11,0.88)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl flex flex-col rounded-2xl overflow-hidden"
        style={{
          background: T.cream50,
          boxShadow: `0 32px 80px -16px ${T.ink900}50`,
          maxHeight: '90vh',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div
          className="flex items-start justify-between gap-4 px-6 py-4 flex-shrink-0"
          style={{ borderBottom: `1px solid ${T.ink900}10`, background: '#FFFFFF' }}
        >
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-1" style={{ ...MONO, color: T.muted500 }}>
              {pub.type} · {pub.specialty}
            </p>
            <h3 className="text-[15px] font-semibold leading-snug" style={{ ...fontDisplay, color: T.ink900 }}>
              {pub.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={url}
              download={pub.file}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{ background: `${T.forest800}0E`, border: `1px solid ${T.forest800}18`, color: T.forest800 }}
              title="Download PDF"
            >
              <Download size={15} strokeWidth={2} />
            </a>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{ background: `${T.forest800}0E`, border: `1px solid ${T.forest800}18`, color: T.forest800 }}
              title="Open in new tab"
            >
              <ExternalLink size={15} strokeWidth={2} />
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{ background: `${T.ink900}08`, border: `1px solid ${T.ink900}14`, color: T.ink900, cursor: 'pointer' }}
            >
              <X size={16} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <div className="relative flex-1 overflow-hidden" style={{ minHeight: 480 }}>
          {!loaded && !error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: T.cream50 }}>
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
            <div className="flex flex-col items-center justify-center gap-4 p-10 text-center h-full">
              <p className="text-[15px] font-semibold" style={{ ...fontDisplay, color: T.ink900 }}>
                Unable to preview in browser
              </p>
              <p className="text-[13px]" style={{ color: T.muted500 }}>Use the buttons above to open or download the PDF.</p>
            </div>
          ) : (
            <iframe
              src={`${url}#toolbar=1&navpanes=0&view=FitH`}
              title={pub.title}
              style={{ width: '100%', height: '100%', border: 'none', minHeight: 480 }}
              onLoad={() => setLoaded(true)}
              onError={() => { setError(true); setLoaded(true); }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ResearchPublicationsSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [statsRef, statsInView] = useInView(0.1);
  const [bodyRef,  bodyInView]  = useInView(0.04);
  const [filter,   setFilter]   = useState('All');
  const [open,     setOpen]     = useState(null);

  const filtered = filter === 'All' ? PUBLICATIONS : PUBLICATIONS.filter(p => p.specialty === filter);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 380, background: T.forest800 }}>
        <img
          src="/campus/homeopathycampus.JPG"
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
              Faculty and student research advancing evidence-based homoeopathic practice
              across dermatology, women's health, gastroenterology, and nephrology.
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

      {/* ═══════════════════════  STATS STRIP  ═══════════════════════ */}
      <section className="py-12" style={{ background: T.gold700 }}>
        <Container>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '9',    label: 'Publications' },
              { value: '4',    label: 'Specialties Covered' },
              { value: '5',    label: 'Dermatology Papers' },
              { value: '100%', label: 'Open Access' },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                style={{
                  opacity:   statsInView ? 1 : 0,
                  transform: statsInView ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                }}
              >
                <div className="text-[36px] lg:text-[44px] font-semibold leading-none" style={{ ...fontDisplay, color: T.cream50 }}>{value}</div>
                <div className="mt-1.5 text-[11px] tracking-[0.18em] uppercase" style={{ ...MONO, color: `${T.cream50}AA` }}>{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  PUBLICATIONS  ═════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>

          {/* Header */}
          <div ref={bodyRef} className="mb-10" style={slide(bodyInView, 0)}>
            <Eyebrow>Our Research</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Expanding the{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>evidence base</em>
              {' '}for homoeopathy
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-2xl" style={{ color: T.muted500 }}>
              Our faculty and researchers are actively contributing to peer-reviewed literature
              that supports and validates homoeopathic clinical practice. All publications are
              freely accessible below.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8" style={slide(bodyInView, 0.1)}>
            <div className="flex items-center gap-1.5 mr-2" style={{ color: T.muted500, fontSize: 12, ...MONO, letterSpacing: '0.1em' }}>
              <Filter size={13} />
              SPECIALTY
            </div>
            {SPECIALTIES.map(sp => {
              const isActive = filter === sp;
              return (
                <button
                  key={sp}
                  onClick={() => setFilter(sp)}
                  className="px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200"
                  style={{
                    background: isActive ? T.forest800 : `${T.ink900}08`,
                    color:      isActive ? T.cream50   : T.muted500,
                    border:     `1px solid ${isActive ? T.forest800 : T.ink900 + '18'}`,
                    cursor: 'pointer', ...fontBody,
                  }}
                >
                  {sp}
                  {sp !== 'All' && (
                    <span
                      className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px]"
                      style={{ background: isActive ? `${T.gold100}30` : `${T.ink900}10`, color: isActive ? T.gold100 : T.muted500 }}
                    >
                      {PUBLICATIONS.filter(p => p.specialty === sp).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <div className="grid lg:grid-cols-2 gap-5" style={slide(bodyInView, 0.14)}>
            {filtered.map((pub, i) => {
              const sm = SPEC_META[pub.specialty];
              const tm = TYPE_META[pub.type];
              const url = BASE + encodeURIComponent(pub.file);
              return (
                <div
                  key={pub.id}
                  className="rounded-2xl flex flex-col group"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${T.ink900}0E`,
                    borderLeft: `4px solid ${sm.color}`,
                    boxShadow: `0 4px 18px -4px ${T.ink900}08`,
                    opacity:   bodyInView ? 1 : 0,
                    transform: bodyInView ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.65s ease ${0.06 * i}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.06 * i}s, box-shadow 0.2s ease`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 36px -8px ${T.ink900}14`; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 4px 18px -4px ${T.ink900}08`; }}
                >
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Badges row */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide"
                        style={{ background: tm.bg, border: `1px solid ${tm.border}`, color: tm.color, ...MONO }}
                      >
                        {pub.type}
                      </span>
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                        style={{ background: sm.bg, border: `1px solid ${sm.border}`, color: sm.color }}
                      >
                        {pub.specialty}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-[17px] font-semibold leading-snug"
                      style={{ ...fontDisplay, color: T.ink900 }}
                    >
                      {pub.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13.5px] leading-[1.75] flex-1" style={{ color: T.muted500 }}>
                      {pub.description}
                    </p>

                    {/* Action row */}
                    <div
                      className="flex items-center gap-3 pt-4"
                      style={{ borderTop: `1px solid ${T.ink900}08` }}
                    >
                      <button
                        onClick={() => setOpen(pub)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 flex-1 justify-center"
                        style={{ background: T.forest800, color: T.cream50, border: 'none', cursor: 'pointer' }}
                        onMouseEnter={e => { e.currentTarget.style.background = T.forest600; }}
                        onMouseLeave={e => { e.currentTarget.style.background = T.forest800; }}
                      >
                        <FileText size={14} strokeWidth={2} />
                        Read Paper
                      </button>
                      <a
                        href={url}
                        download={pub.file}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200"
                        style={{ background: `${T.forest800}0E`, border: `1px solid ${T.forest800}20`, color: T.forest800, textDecoration: 'none' }}
                        title="Download PDF"
                        onMouseEnter={e => { e.currentTarget.style.background = `${T.forest800}18`; }}
                        onMouseLeave={e => { e.currentTarget.style.background = `${T.forest800}0E`; }}
                      >
                        <Download size={15} strokeWidth={2} />
                      </a>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200"
                        style={{ background: `${T.forest800}0E`, border: `1px solid ${T.forest800}20`, color: T.forest800, textDecoration: 'none' }}
                        title="Open in new tab"
                        onMouseEnter={e => { e.currentTarget.style.background = `${T.forest800}18`; }}
                        onMouseLeave={e => { e.currentTarget.style.background = `${T.forest800}0E`; }}
                      >
                        <ExternalLink size={15} strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-[12px]" style={{ ...MONO, color: T.muted500, letterSpacing: '0.08em' }}>
            Showing {filtered.length} of {PUBLICATIONS.length} publications
            {filter !== 'All' && ` · ${filter}`}
          </p>
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
            Amaltas Institute of Homoeopathy · Research Cell · All publications open access
          </p>
        </Container>
      </section>

      {/* PDF Modal */}
      {open && <PdfModal pub={open} onClose={() => setOpen(null)} />}
    </>
  );
}
