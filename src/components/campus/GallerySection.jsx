import React, { useState, useEffect } from 'react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import useInView from '../../hooks/useInView';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const slide = (inView, delay = 0) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
});

const GALLERY = [
  {
    id: 1,
    src: '/campus/campus.jpg',
    title: 'Main Campus Building',
    caption: 'The iconic Amaltas Institute building on the Dewas–Ujjain Highway.',
    cat: 'Campus',
  },
  {
    id: 2,
    src: '/campus/homoepathy.png',
    title: 'Homoeopathy Institute',
    caption: 'A dedicated building housing the BHMS programme and clinical facilities.',
    cat: 'Campus',
  },
  {
    id: 3,
    src: '/campus/amaltas_photo.jpeg',
    title: 'The Amaltas Group',
    caption: 'Multi-institutional campus fostering multidisciplinary learning in central India.',
    cat: 'Campus',
  },
  {
    id: 4,
    src: '/campus/cover-image.jpeg',
    title: 'Campus Overview',
    caption: 'A sweeping view of the sprawling Amaltas campus in Dewas, MP.',
    cat: 'Campus',
  },
  {
    id: 5,
    src: '/campus/2U8A0340.jpg',
    title: 'Campus Grounds',
    caption: 'Expansive green grounds across the 27-acre Amaltas campus.',
    cat: 'Campus',
  },
  {
    id: 6,
    src: '/campus/teaching.png',
    title: 'Teaching Hospital',
    caption: 'Amaltas Hospital & Research Centre — full patient exposure from Year 1.',
    cat: 'Hospital & Clinics',
  },
  {
    id: 7,
    src: '/campus/clinical-hall.jpg',
    title: 'Clinical Examination Hall',
    caption: 'Curtained examination bays for systematic clinical-method training.',
    cat: 'Hospital & Clinics',
  },
  {
    id: 8,
    src: '/campus/2U8A2069.jpg',
    title: 'OPD Block',
    caption: 'Outpatient department serving hundreds of patients daily.',
    cat: 'Hospital & Clinics',
  },
  {
    id: 9,
    src: '/campus/2U8A4243.jpg',
    title: 'IPD Ward',
    caption: 'In-patient wards providing holistic homoeopathic care and observation.',
    cat: 'Hospital & Clinics',
  },
  {
    id: 10,
    src: '/campus/anatomy-museum.jpg',
    title: 'Anatomy Museum',
    caption: 'Fully catalogued specimen museum for hands-on dissection learning.',
    cat: 'Labs & Academics',
  },
  {
    id: 11,
    src: '/campus/physiology-lab.jpg',
    title: 'Physiology Lab',
    caption: 'Individual microscopy workstations for physiological investigation.',
    cat: 'Labs & Academics',
  },
  {
    id: 12,
    src: '/campus/2U8A7507.jpg',
    title: 'Diagnostics Lab',
    caption: 'State-of-the-art diagnostic equipment for clinical research.',
    cat: 'Labs & Academics',
  },
  {
    id: 13,
    src: '/campus/experiment.png',
    title: 'Research & Experimentation',
    caption: 'Students engaged in supervised laboratory research and practical work.',
    cat: 'Labs & Academics',
  },
  {
    id: 14,
    src: '/campus/students.JPG',
    title: 'Student Community',
    caption: 'Our students — the vibrant heartbeat of the Amaltas community.',
    cat: 'Students & Life',
  },
  {
    id: 15,
    src: '/campus/435A3291.JPG',
    title: 'Institutional Event',
    caption: 'Students and faculty during a special function on the Amaltas campus.',
    cat: 'Students & Life',
  },
];

const CATS = ['All', 'Campus', 'Hospital & Clinics', 'Labs & Academics', 'Students & Life'];

const CAT_META = {
  'Campus':            { bg: T.forest800, text: '#fff' },
  'Hospital & Clinics': { bg: T.gold600,   text: T.ink900 },
  'Labs & Academics':  { bg: T.forest600, text: '#fff' },
  'Students & Life':   { bg: '#5c4d9a',   text: '#fff' },
};

export default function GallerySection() {
  const [activeCat, setActiveCat]     = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [imgLoaded, setImgLoaded]     = useState({});

  const [heroRef, heroInView] = useInView();
  const [gridRef, gridInView] = useInView(0.06);

  const filtered = activeCat === 'All' ? GALLERY : GALLERY.filter(g => g.cat === activeCat);

  const openLightbox  = (idx) => setLightboxIdx(idx);
  const closeLightbox = ()    => setLightboxIdx(null);
  const prev = () => setLightboxIdx(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIdx(i => (i + 1) % filtered.length);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx, filtered.length]);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIdx]);

  const activePic = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        style={{ background: `linear-gradient(135deg, ${T.ink900} 0%, ${T.forest800} 100%)` }}
        className="relative overflow-hidden pt-32 pb-20"
      >
        {/* faint radial watermark */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #ffffff 0%, transparent 60%)' }} />

        <Container>
          <div style={slide(heroInView, 0)} className="max-w-2xl">
            <Eyebrow light>Campus Life</Eyebrow>
            <h1
              style={{ ...fontDisplay, color: '#ffffff', ...slide(heroInView, 0.08) }}
              className="text-4xl md:text-5xl font-bold mt-3 mb-5 leading-tight"
            >
              Photo Gallery
            </h1>
            <p
              style={{ color: `${T.cream50}bb`, ...fontBody, ...slide(heroInView, 0.16) }}
              className="text-lg leading-relaxed"
            >
              A visual journey through our campus, hospital, laboratories, and student life —
              capturing the spirit of Amaltas Institute.
            </p>
            <p
              style={{ ...MONO, color: `${T.gold100}77`, fontSize: '0.75rem', ...slide(heroInView, 0.24) }}
              className="mt-4 tracking-widest uppercase"
            >
              {GALLERY.length} photographs
            </p>
          </div>
        </Container>
      </section>

      {/* ── Sticky filter bar ── */}
      <section
        style={{ background: T.cream50, borderBottom: `1px solid ${T.forest800}22` }}
        className="sticky top-0 z-20 shadow-sm"
      >
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4">
            <div className="flex flex-wrap gap-2">
              {CATS.map(cat => {
                const active = activeCat === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => { setActiveCat(cat); setLightboxIdx(null); }}
                    style={active
                      ? { background: T.forest800, color: '#fff', border: `1px solid ${T.forest800}` }
                      : { background: 'transparent', color: T.ink900, border: `1px solid ${T.forest800}55` }
                    }
                    className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-75"
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            <span style={{ ...MONO, color: T.forest600, fontSize: '0.8rem' }} className="tabular-nums shrink-0">
              {filtered.length}&nbsp;photo{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </Container>
      </section>

      {/* ── Masonry grid ── */}
      <section style={{ background: T.cream50 }} className="py-12 pb-20">
        <Container>
          <div
            ref={gridRef}
            style={slide(gridInView, 0)}
            className="columns-2 md:columns-3 lg:columns-4 gap-3"
          >
            {filtered.map((item, idx) => {
              const cm = CAT_META[item.cat] || { bg: T.forest800, text: '#fff' };
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-zoom-in shadow hover:shadow-2xl transition-shadow duration-300 mb-3"
                >
                  {/* shimmer while loading */}
                  {!imgLoaded[item.id] && (
                    <div
                      style={{ background: `${T.forest800}18` }}
                      className="w-full h-44 animate-pulse rounded-xl"
                    />
                  )}

                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    onLoad={() => setImgLoaded(p => ({ ...p, [item.id]: true }))}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ display: imgLoaded[item.id] ? 'block' : 'none' }}
                  />

                  {/* hover overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)' }}
                  >
                    <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span
                        className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-1"
                        style={{ background: cm.bg, color: cm.text }}
                      >
                        {item.cat}
                      </span>
                      <p className="text-white text-sm font-semibold leading-snug">{item.title}</p>
                    </div>
                  </div>

                  {/* zoom badge */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shadow-md"
                      style={{ background: 'rgba(255,255,255,0.92)' }}
                    >
                      <ZoomIn size={13} style={{ color: T.forest800 }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p style={{ ...fontBody, color: T.muted500 }} className="text-lg">
                No photos in this category yet.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* ── Lightbox ── */}
      {activePic && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.93)' }}
          onClick={closeLightbox}
        >
          {/* close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
            style={{ background: 'rgba(255,255,255,0.12)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
          >
            <X size={18} color="#fff" />
          </button>

          {/* prev */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 w-11 h-11 rounded-full flex items-center justify-center transition-colors z-10"
            style={{ background: 'rgba(255,255,255,0.12)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
          >
            <ChevronLeft size={20} color="#fff" />
          </button>

          {/* next */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 w-11 h-11 rounded-full flex items-center justify-center transition-colors z-10"
            style={{ background: 'rgba(255,255,255,0.12)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
          >
            <ChevronRight size={20} color="#fff" />
          </button>

          {/* content */}
          <div
            className="relative max-w-5xl w-full flex flex-col items-center gap-4 px-16 md:px-24"
            onClick={e => e.stopPropagation()}
          >
            <img
              key={activePic.id}
              src={activePic.src}
              alt={activePic.title}
              className="max-h-[72vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain"
              style={{ animation: 'fadeInUp 0.25s ease both' }}
            />

            <div className="text-center">
              <span
                className="inline-block text-xs font-semibold px-3 py-0.5 rounded-full mb-2"
                style={{ background: CAT_META[activePic.cat]?.bg || T.forest800, color: CAT_META[activePic.cat]?.text || '#fff' }}
              >
                {activePic.cat}
              </span>
              <h3 style={{ ...fontDisplay, color: '#ffffff' }} className="text-xl font-bold">
                {activePic.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', ...fontBody }} className="text-sm mt-1 max-w-md mx-auto">
                {activePic.caption}
              </p>
              <p style={{ ...MONO, color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem' }} className="mt-3 tracking-widest">
                {lightboxIdx + 1} / {filtered.length}
              </p>
            </div>
          </div>

          <style>{`
            @keyframes fadeInUp {
              from { opacity:0; transform:translateY(12px) scale(0.98); }
              to   { opacity:1; transform:translateY(0)    scale(1);    }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
