import React, { useState } from 'react';
import {
  BookOpen, Library,
  ChevronLeft, ChevronRight, X,
} from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const GALLERY_IMAGES = [
  { src: '/Library/IMG_3123.JPG.jpeg' },
  { src: '/Library/IMG_3259.JPG.jpeg' },
  { src: '/Library/IMG_3468.JPG.jpeg' },
  { src: '/Library/IMG_3472.JPG.jpeg' },
  { src: '/Library/IMG_3473.JPG.jpeg' },
  { src: '/Library/IMG_3532.JPG.jpeg' },
  { src: '/Library/WhatsApp%20Image%202026-06-16%20at%2012.25.20%20PM.jpeg' },
  { src: '/Library/WhatsApp%20Image%202026-06-16%20at%2012.26.19%20PM.jpeg' },
];

const slide = (inView, delay = 0) => ({
  opacity:    inView ? 1 : 0,
  transform:  inView ? 'translateY(0)' : 'translateY(24px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function LibrarySection() {
  const [heroRef,    heroInView]    = useInView(0.08);
  const [aboutRef,   aboutInView]   = useInView(0.08);
  const [galleryRef, galleryInView] = useInView(0.05);

  const [lightbox, setLightbox] = useState(null);
  const total = GALLERY_IMAGES.length;
  const prev = () => setLightbox(i => (i - 1 + total) % total);
  const next = () => setLightbox(i => (i + 1) % total);

  return (
    <>
      {/* ════════════════════════  HERO  ════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 420, background: T.forest800 }}
      >
        <img
          src="/Library/IMG_3259.JPG.jpeg"
          alt="Amaltas Library"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 40%',
            opacity: 0.2,
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
              Central{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Library</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Amaltas Institute of Homoeopathy has one dedicated central library
              serving all students and faculty of the BHMS programme.
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

      {/* ════════════════════════  ABOUT  ════════════════════════ */}
      <section className="py-16 lg:py-20" style={{ background: T.cream50 }}>
        <Container>
          <div ref={aboutRef} className="max-w-3xl mx-auto text-center">
            <div style={slide(aboutInView, 0)}>
              <Eyebrow>About the Library</Eyebrow>
              <h2
                className="mt-4 text-[26px] lg:text-[36px] leading-[1.15] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                A quiet centre of{' '}
                <em style={{ color: T.gold700, fontStyle: 'italic' }}>homoeopathic learning</em>
              </h2>
            </div>
            <p
              className="mt-6 text-[15px] leading-[1.9]"
              style={{ color: T.muted500, ...slide(aboutInView, 0.1) }}
            >
              The central library at Amaltas Institute of Homoeopathy is a well-resourced
              space designed to support the academic journey of every BHMS student. It houses
              an extensive collection of homoeopathic and allied medical science titles spanning
              all subjects of the curriculum — from Organon of Medicine and Materia Medica to
              Anatomy, Pathology, Surgery, and Community Medicine.
            </p>
            <p
              className="mt-4 text-[15px] leading-[1.9]"
              style={{ color: T.muted500, ...slide(aboutInView, 0.15) }}
            >
              The library provides a comfortable reading hall for students, a dedicated room for
              faculty, digital access to resources, and a curated selection of homoeopathic
              journals and periodicals — making it a complete academic resource open to all
              enrolled students and staff.
            </p>

            {/* Single stat — 1 library */}
            <div
              className="mt-10 inline-flex items-center gap-5 rounded-2xl px-8 py-5"
              style={{ background: T.forest800, ...slide(aboutInView, 0.22) }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}
              >
                <Library size={22} strokeWidth={1.5} style={{ color: T.gold100 }} />
              </div>
              <div className="text-left">
                <div className="text-[34px] font-semibold leading-none" style={{ ...fontDisplay, color: T.gold100 }}>1</div>
                <div className="text-[11px] mt-1 tracking-[0.16em] uppercase" style={{ ...MONO, color: `${T.cream50}88` }}>Central Library of Homoeopathy</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════  GALLERY  ══════════════════════ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F`, borderBottom: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={galleryRef} className="mb-10" style={slide(galleryInView, 0)}>
            <Eyebrow>Gallery</Eyebrow>
            <h2
              className="mt-4 text-[26px] lg:text-[36px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Inside the{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>library</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{
                  aspectRatio: '4/3',
                  boxShadow: `0 4px 16px -4px ${T.ink900}10`,
                  opacity:   galleryInView ? 1 : 0,
                  transform: galleryInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${0.06 * i}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.06 * i}s`,
                }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={`Library photo ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  draggable="false"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${T.ink900}30` }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `${T.cream50}22`, border: `1px solid ${T.cream50}44` }}
                  >
                    <BookOpen size={16} strokeWidth={1.8} style={{ color: T.cream50 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════  CLOSING STRIP  ═══════════════════ */}
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
            Open to all enrolled students and faculty · Amaltas Institute of Homoeopathy
          </p>
        </Container>
      </section>

      {/* ════════════════════════  LIGHTBOX  ═════════════════════ */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(6,15,11,0.92)', backdropFilter: 'blur(8px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: `${T.cream50}18`, border: `1px solid ${T.cream50}28`, color: T.cream50 }}
            onClick={() => setLightbox(null)}
          >
            <X size={18} strokeWidth={2} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
            style={{ background: `${T.cream50}18`, border: `1px solid ${T.cream50}28`, color: T.cream50 }}
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
            style={{ background: `${T.cream50}18`, border: `1px solid ${T.cream50}28`, color: T.cream50 }}
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={GALLERY_IMAGES[lightbox].src}
              alt={`Library photo ${lightbox + 1}`}
              className="rounded-2xl w-full"
              style={{ maxHeight: '82vh', objectFit: 'contain' }}
              draggable="false"
            />
            <p
              className="mt-3 text-center text-[12px]"
              style={{ ...MONO, color: `${T.cream50}66` }}
            >
              {lightbox + 1} / {total}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
