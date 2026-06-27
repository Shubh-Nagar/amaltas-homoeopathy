import React, { useState } from 'react';
import {
  Bus, MapPin, Navigation, Clock,
  ChevronLeft, ChevronRight, X, CheckCircle2,
} from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const ROUTES = [
  {
    city: 'Dewas',
    color: T.forest800,
    accent: T.forest600,
    description: 'Campus bus covers key areas within Dewas city, providing convenient pick-up and drop points for students commuting from town.',
    stops: ['Dewas Bus Stand', 'Railway Station', 'City Centre', 'Residential Colonies'],
    distance: '~8 km',
    icon: MapPin,
  },
  {
    city: 'Indore',
    color: '#1E4A6B',
    accent: '#2E6A8A',
    description: 'Regular bus service connects the campus to Indore via the main highway, covering major transit points along the route.',
    stops: ['Indore Airport Road', 'Vijay Nagar', 'Rau', 'Pithampur Chouraha'],
    distance: '~35 km',
    icon: Navigation,
  },
  {
    city: 'Ujjain',
    color: '#5A3A1A',
    accent: '#8A5A2A',
    description: 'The campus sits directly on the Dewas–Ujjain Highway, making the Ujjain route one of the most direct and well-served corridors.',
    stops: ['Dewas–Ujjain Highway', 'Maksi', 'Nagda Chouraha', 'Ujjain City'],
    distance: '~37 km',
    icon: Bus,
  },
];

const NEARBY = [
  'Makshi', 'Devli', 'Mahukheda', 'Sonkatch',
];

const BUS_IMAGES = [
  '/transportation/b1.jpeg',
  '/transportation/b2.jpeg',
  '/transportation/b3.jpeg',
  '/transportation/b4.jpeg',
];

const slide = (inView, delay = 0) => ({
  opacity:   inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(24px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function TransportationSection() {
  const [heroRef,    heroInView]    = useInView(0.08);
  const [routeRef,   routeInView]   = useInView(0.05);
  const [nearbyRef,  nearbyInView]  = useInView(0.08);
  const [galleryRef, galleryInView] = useInView(0.05);

  const [lightbox, setLightbox] = useState(null);
  const total = BUS_IMAGES.length;
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
          src="/transportation/b1.jpeg"
          alt="Amaltas campus bus"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 55%',
            opacity: 0.22,
          }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${T.forest800}EE 0%, ${T.ink900}CC 100%)` }} />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}18 1px, transparent 1px)`,
            backgroundSize: '36px 36px', pointerEvents: 'none',
          }}
        />
        {/* Ghost bus icon */}
        <div style={{ position: 'absolute', right: '4%', top: '50%', transform: 'translateY(-50%)', opacity: 0.04, pointerEvents: 'none' }}>
          <Bus size={260} strokeWidth={0.5} color={T.gold100} />
        </div>

        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-32">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}><Eyebrow light>Campus Life</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Campus{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Transportation</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Dedicated bus services connecting Amaltas Institute to Dewas, Indore, Ujjain,
              and surrounding towns — making the commute safe, comfortable and convenient
              for every student.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Campus Life</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Transportation</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════  INFO STRIP  ══════════════════════ */}
      <section className="py-8" style={{ background: T.gold700 }}>
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
            {[
              { icon: Bus,   text: 'Bus Facility Available on Campus' },
              { icon: Clock, text: 'Daily Service — All Academic Days' },
              { icon: MapPin, text: 'Dewas · Indore · Ujjain & Nearby' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5">
                <Icon size={16} strokeWidth={2} style={{ color: T.cream50, opacity: 0.85, flexShrink: 0 }} />
                <span className="text-[13px] font-medium tracking-wide" style={{ color: T.cream50 }}>{text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════  ROUTE CARDS  ═════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={routeRef} className="text-center mb-14" style={slide(routeInView, 0)}>
            <Eyebrow>Bus Routes</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Routes serving{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>major cities</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
              The campus is strategically located on the Dewas–Ujjain Highway, giving direct
              road access to three major cities and their surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ROUTES.map(({ city, color, accent, description, stops, distance, icon: Icon }, i) => (
              <div
                key={city}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: '#FFFFFF',
                  border: `1px solid ${T.ink900}0D`,
                  boxShadow: `0 4px 20px -6px ${T.ink900}0A`,
                  opacity:   routeInView ? 1 : 0,
                  transform: routeInView ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`,
                }}
              >
                {/* Card header */}
                <div className="px-6 py-5 flex items-center justify-between" style={{ background: color }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      <Icon size={19} strokeWidth={1.8} color="#FFFFFF" />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.18em] uppercase" style={{ ...MONO, color: 'rgba(255,255,255,0.65)' }}>Route</div>
                      <div className="text-[22px] font-semibold leading-tight" style={{ ...fontDisplay, color: '#FFFFFF' }}>{city}</div>
                    </div>
                  </div>
                  <div
                    className="text-[12px] font-semibold px-3 py-1.5 rounded-full"
                    style={{ ...MONO, background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', letterSpacing: '0.06em' }}
                  >
                    {distance}
                  </div>
                </div>

                {/* Card body */}
                <div className="px-6 py-5 flex flex-col gap-4 flex-1">
                  <p className="text-[14px] leading-[1.75]" style={{ color: T.muted500 }}>{description}</p>

                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-3" style={{ ...MONO, color: T.muted500 }}>
                      Key Stops
                    </div>
                    <div className="flex flex-col gap-2">
                      {stops.map(stop => (
                        <div key={stop} className="flex items-center gap-2.5">
                          <CheckCircle2 size={14} strokeWidth={2} style={{ color: accent, flexShrink: 0 }} />
                          <span className="text-[13.5px]" style={{ color: T.ink900 }}>{stop}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div style={{ height: 3, background: `linear-gradient(90deg, ${color}, ${accent})` }} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════  NEARBY TOWNS  ════════════════════ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F`, borderBottom: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={nearbyRef} className="max-w-3xl mx-auto text-center">
            <div style={slide(nearbyInView, 0)}>
              <Eyebrow>Extended Coverage</Eyebrow>
              <h2
                className="mt-4 text-[26px] lg:text-[34px] leading-[1.15] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                Nearby towns &{' '}
                <em style={{ color: T.gold700, fontStyle: 'italic' }}>on-route stops</em>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.8]" style={{ color: T.muted500 }}>
                Students from smaller towns and villages along the Dewas–Indore and
                Dewas–Ujjain corridors can board campus buses at convenient stops
                along the highway.
              </p>
            </div>

            <div
              className="mt-8 flex flex-wrap justify-center gap-3"
              style={slide(nearbyInView, 0.1)}
            >
              {NEARBY.map((town, i) => (
                <div
                  key={town}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${T.ink900}10`,
                    boxShadow: `0 2px 8px -2px ${T.ink900}08`,
                    opacity:   nearbyInView ? 1 : 0,
                    transform: nearbyInView ? 'scale(1)' : 'scale(0.9)',
                    transition: `opacity 0.5s ease ${0.05 * i}s, transform 0.5s ease ${0.05 * i}s`,
                  }}
                >
                  <MapPin size={12} strokeWidth={2} style={{ color: T.gold600, flexShrink: 0 }} />
                  <span className="text-[13px] font-medium" style={{ color: T.ink900 }}>{town}</span>
                </div>
              ))}
            </div>

            <p
              className="mt-6 text-[13px]"
              style={{ color: T.muted500, ...slide(nearbyInView, 0.2) }}
            >
              Routes and stops may vary by semester. Contact the institute office for the
              current schedule and pickup timings.
            </p>
          </div>
        </Container>
      </section>

      {/* ════════════════════  BUS GALLERY  ═════════════════════ */}
      <section className="py-16 lg:py-20" style={{ background: T.cream50 }}>
        <Container>
          <div ref={galleryRef} className="mb-10" style={slide(galleryInView, 0)}>
            <Eyebrow>Our Fleet</Eyebrow>
            <h2
              className="mt-4 text-[26px] lg:text-[36px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Campus{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>buses</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {BUS_IMAGES.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{
                  aspectRatio: '4/3',
                  boxShadow: `0 4px 16px -4px ${T.ink900}10`,
                  opacity:   galleryInView ? 1 : 0,
                  transform: galleryInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${0.08 * i}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.08 * i}s`,
                }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={src}
                  alt={`Campus bus ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  draggable="false"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: `${T.ink900}28` }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `${T.cream50}22`, border: `1px solid ${T.cream50}44` }}
                  >
                    <Bus size={16} strokeWidth={1.8} style={{ color: T.cream50 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════  CLOSING STRIP  ═══════════════════ */}
      <section className="py-14 relative overflow-hidden" style={{ background: T.forest800 }}>
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
            <Bus size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p
            className="text-[20px] sm:text-[26px] font-semibold max-w-xl mx-auto leading-snug"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            Safe, reliable transport so you can{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>focus on learning</em>.
          </p>
          <p className="mt-4 text-[13px]" style={{ color: `${T.cream50}66` }}>
            For route details and timings contact the institute office · Amaltas Institute of Homoeopathy
          </p>
        </Container>
      </section>

      {/* ════════════════════  LIGHTBOX  ═════════════════════════ */}
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
              src={BUS_IMAGES[lightbox]}
              alt={`Campus bus ${lightbox + 1}`}
              className="rounded-2xl w-full"
              style={{ maxHeight: '82vh', objectFit: 'contain' }}
              draggable="false"
            />
            <p className="mt-3 text-center text-[12px]" style={{ ...MONO, color: `${T.cream50}66` }}>
              {lightbox + 1} / {total}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
