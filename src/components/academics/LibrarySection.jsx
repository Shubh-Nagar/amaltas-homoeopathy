import React, { useState } from 'react';
import {
  BookOpen, Monitor, Users, Wind,
  Newspaper, BookMarked, GraduationCap, Library,
  ChevronLeft, ChevronRight, X,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

/*
  Add library images to public/library/ and list them here.
  Any path that 404s will fall back to the campus photo gracefully.
*/
const GALLERY_IMAGES = [
  { src: '/library/library1.jpg', caption: 'Main Reading Hall' },
  { src: '/library/library2.jpg', caption: 'Book Stacks' },
  { src: '/library/library3.jpg', caption: 'Digital Library' },
  { src: '/library/library4.jpg', caption: 'Staff Reading Room' },
  { src: '/library/library5.jpg', caption: 'Journal Section' },
  { src: '/library/library6.jpg', caption: 'Student Study Area' },
];

const FALLBACK = '/campus/homoepathy.png';

const STATS = [
  { value: '2,609', label: 'Books in Collection' },
  { value: '100',   label: 'Student Seating' },
  { value: 'Digital', label: 'Library Access' },
  { value: '10+',   label: 'Homoeopathy Journals' },
];

const FEATURES = [
  {
    icon: Monitor,
    title: 'Librarian Room & Digital Library',
    body: "A dedicated librarian's office equipped with a digital library terminal, providing students and faculty access to online homoeopathic databases, e-journals, and reference resources.",
    accent: T.forest800,
  },
  {
    icon: Users,
    title: 'Staff Reading Room',
    body: 'A quiet, designated space reserved exclusively for teaching and non-teaching staff — providing an environment for research, lesson preparation, and professional reading.',
    accent: '#2E6A8A',
  },
  {
    icon: Wind,
    title: '100-Seat Student Hall',
    body: 'A well-ventilated reading hall with seating for 100 students simultaneously, designed for focused study, exam preparation, and quiet individual or group research sessions.',
    accent: T.forest600,
  },
  {
    icon: Newspaper,
    title: 'Journals & Newspapers',
    body: 'A curated collection of homoeopathic and allied health journals, along with daily newspapers — keeping students and faculty current with clinical practice and academic developments.',
    accent: T.gold700,
  },
  {
    icon: BookMarked,
    title: '2,609 Catalogued Books',
    body: 'Our library holds 2,609 titles spanning all subjects of the BHMS curriculum — homoeopathic philosophy, materia medica, repertory, organon, anatomy, physiology, pathology, surgery, and more — arranged systematically for easy access.',
    accent: '#8A4A6E',
  },
  {
    icon: BookOpen,
    title: 'Allied Medical Sciences',
    body: 'Beyond homoeopathy, the collection includes allied medical science texts covering biochemistry, microbiology, forensic medicine, pharmacology, and gynaecology — supporting the breadth of the BHMS programme.',
    accent: '#5A4A8A',
  },
];

const SUBJECTS = [
  { label: 'Homoeopathic Philosophy & Organon', count: null },
  { label: 'Homoeopathic Materia Medica',       count: null },
  { label: 'Repertory',                          count: null },
  { label: 'Human Anatomy',                      count: null },
  { label: 'Human Physiology & Biochemistry',    count: null },
  { label: 'Pathology & Microbiology',           count: null },
  { label: 'Forensic Medicine & Toxicology',     count: null },
  { label: 'Practice of Medicine',               count: null },
  { label: 'Surgery & Allied Specialities',      count: null },
  { label: 'Gynaecology & Obstetrics',           count: null },
  { label: 'Homoeopathic Pharmacy',              count: null },
  { label: 'Allied Health Sciences',             count: null },
];

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity:    inView ? 1 : 0,
  transform:  inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left'  ? 'translateX(-28px)'
    : dir === 'right' ? 'translateX(28px)'
    : 'translateY(28px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function LibrarySection() {
  const [heroRef,     heroInView]     = useInView(0.08);
  const [statsRef,    statsInView]    = useInView(0.1);
  const [featRef,     featInView]     = useInView(0.05);
  const [galleryRef,  galleryInView]  = useInView(0.05);
  const [collRef,     collInView]     = useInView(0.06);

  const [lightbox, setLightbox] = useState(null); // index or null
  const total = GALLERY_IMAGES.length;

  const prev = () => setLightbox(i => (i - 1 + total) % total);
  const next = () => setLightbox(i => (i + 1) % total);

  return (
    <>
      {/* ═══════════════════════════  HERO  ═══════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 420, background: T.forest800 }}
      >
        <img
          src="/campus/homoepathy.png"
          alt="Amaltas Library"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 35%',
            opacity: 0.22,
          }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${T.forest800}EE 0%, ${T.ink900}BB 100%)` }} />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}18 1px, transparent 1px)`,
            backgroundSize: '36px 36px', pointerEvents: 'none',
          }}
        />
        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-32">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}><Eyebrow light>Academics</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              The{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Library</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              A quiet centre of learning housing over 2,600 books, homoeopathic journals,
              a digital library, and seating for 100 students — open to all enrolled
              students and faculty every day.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Academics</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Library</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  STATS STRIP  ═══════════════════════ */}
      <section className="py-12" style={{ background: T.gold700 }}>
        <Container>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                style={{
                  opacity:   statsInView ? 1 : 0,
                  transform: statsInView ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                }}
              >
                <div className="text-[34px] lg:text-[44px] font-semibold leading-none" style={{ ...fontDisplay, color: T.cream50 }}>{value}</div>
                <div className="mt-1.5 text-[11px] tracking-[0.18em] uppercase" style={{ ...MONO, color: `${T.cream50}AA` }}>{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  FEATURES GRID  ═════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={featRef} className="text-center mb-14" style={slide(featInView, 0)}>
            <Eyebrow>Facilities</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Everything you need to{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>learn deeply</em>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
              Designed for both independent study and collaborative research, our library
              is a complete academic resource for the entire BHMS programme.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ icon: Icon, title, body, accent }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 flex flex-col gap-4 group"
                style={{
                  background: '#FFFFFF',
                  border: `1px solid ${T.ink900}0E`,
                  borderTop: `3px solid ${accent}`,
                  boxShadow: `0 4px 18px -4px ${T.ink900}08`,
                  opacity:   featInView ? 1 : 0,
                  transform: featInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.65s ease ${0.07 * i}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.07 * i}s, box-shadow 0.2s ease`,
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
                  <h3 className="text-[16px] font-semibold mb-2" style={{ ...fontDisplay, color: T.ink900 }}>{title}</h3>
                  <p className="text-[13.5px] leading-[1.75]" style={{ color: T.muted500 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  PHOTO GALLERY  ═════════════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F`, borderBottom: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={galleryRef} className="mb-12" style={slide(galleryInView, 0)}>
            <Eyebrow>Gallery</Eyebrow>
            <h2
              className="mt-4 text-[28px] lg:text-[38px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Inside the{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>library</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={slide(galleryInView, 0.1)}>
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{
                  aspectRatio: i === 0 || i === 3 ? '4/3' : '1/1',
                  boxShadow: `0 4px 20px -4px ${T.ink900}10`,
                  opacity:   galleryInView ? 1 : 0,
                  transform: galleryInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${0.06 * i}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.06 * i}s`,
                }}
                onClick={() => setLightbox(i)}
                data-cursor="image"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onError={e => { e.currentTarget.src = FALLBACK; }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  draggable="false"
                />
                {/* Caption overlay */}
                <div
                  className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to top, ${T.ink900}BB 0%, transparent 55%)` }}
                >
                  <p
                    className="px-4 pb-3 text-[12px] font-medium tracking-wide"
                    style={{ color: T.cream50, ...MONO }}
                  >
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════  COLLECTION  ════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

            {/* Left — text */}
            <div ref={collRef} className="lg:col-span-5 space-y-6">
              <div style={slide(collInView, 0)}>
                <Eyebrow>Collection</Eyebrow>
                <h2
                  className="mt-4 text-[28px] lg:text-[38px] leading-[1.1] tracking-tight font-semibold"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  2,609 books,{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>every subject</em>
                </h2>
              </div>
              <div className="space-y-4 text-[15px] leading-[1.85]" style={slide(collInView, 0.12)}>
                <p style={{ color: T.ink900 }}>
                  Our library collection of 2,609 titles covers the full breadth of the BHMS
                  curriculum — from core homoeopathic sciences to basic medical subjects and
                  clinical specialities. All books are systematically arranged by subject for
                  easy browsing and retrieval.
                </p>
                <p style={{ color: T.muted500 }}>
                  The collection is continuously updated to reflect the latest editions and new
                  additions in homoeopathic literature, ensuring students always have access to
                  current and relevant material throughout all five years of the programme.
                </p>
              </div>

              {/* Big number accent */}
              <div
                className="inline-flex items-end gap-3 rounded-2xl px-6 py-5"
                style={{
                  background: T.forest800,
                  ...slide(collInView, 0.2),
                }}
              >
                <span
                  className="text-[52px] font-semibold leading-none"
                  style={{ ...fontDisplay, color: T.gold100 }}
                >
                  2,609
                </span>
                <div className="pb-1">
                  <p className="text-[13px] font-medium" style={{ color: T.cream50 }}>Books in collection</p>
                  <p className="text-[11px]" style={{ color: `${T.cream50}66` }}>Across all BHMS subjects</p>
                </div>
              </div>
            </div>

            {/* Right — subjects list */}
            <div className="lg:col-span-7" style={slide(collInView, 0.1, 'right')}>
              <p
                className="mb-5 text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{ ...MONO, color: T.muted500 }}
              >
                Subjects covered
              </p>
              <div className="space-y-2">
                {SUBJECTS.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 rounded-xl px-4 py-3"
                    style={{
                      background: i % 2 === 0 ? '#FFFFFF' : `${T.forest800}04`,
                      border: `1px solid ${T.ink900}08`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: T.gold600 }}
                      />
                      <span className="text-[14px]" style={{ color: T.ink900 }}>{s.label}</span>
                    </div>
                    <BookOpen size={14} strokeWidth={1.8} style={{ color: `${T.muted500}60`, flexShrink: 0 }} />
                  </div>
                ))}
              </div>
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
            <Library size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p
            className="text-[22px] sm:text-[28px] font-semibold max-w-2xl mx-auto leading-snug"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            Knowledge is the{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>foundation</em>
            {' '}of every great healer.
          </p>
          <p className="mt-4 text-[14px]" style={{ color: `${T.cream50}66` }}>
            Library open to all enrolled students and faculty · Amaltas Institute of Homoeopathy
          </p>
        </Container>
      </section>

      {/* ═════════════════  LIGHTBOX  ════════════════════════════════ */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(6,15,11,0.92)', backdropFilter: 'blur(8px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ background: `${T.cream50}18`, border: `1px solid ${T.cream50}28`, color: T.cream50 }}
            onClick={() => setLightbox(null)}
          >
            <X size={18} strokeWidth={2} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ background: `${T.cream50}18`, border: `1px solid ${T.cream50}28`, color: T.cream50 }}
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ background: `${T.cream50}18`, border: `1px solid ${T.cream50}28`, color: T.cream50 }}
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>

          <div
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[lightbox].src}
              alt={GALLERY_IMAGES[lightbox].caption}
              className="rounded-2xl w-full"
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
              onError={e => { e.currentTarget.src = FALLBACK; }}
              draggable="false"
            />
            <p
              className="mt-3 text-center text-[13px]"
              style={{ ...MONO, color: `${T.cream50}88` }}
            >
              {GALLERY_IMAGES[lightbox].caption} · {lightbox + 1} / {total}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
