import React from 'react';
import {
  Home, Users, UtensilsCrossed, Coffee,
  Sun, Sunset, Moon, ShoppingBag,
  CheckCircle2, Store, Wifi, Shield,
} from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

/* ── Image placeholder — swap src prop once real photos arrive ── */
const PhotoSlot = ({ src, alt, aspect = '4/3', icon: Icon = Home, label }) => (
  <div
    className="relative overflow-hidden rounded-2xl w-full"
    style={{ aspectRatio: aspect, background: `${T.forest800}10`, border: `1px dashed ${T.forest800}30` }}
  >
    {src ? (
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        draggable="false"
      />
    ) : (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: `${T.forest800}14`, border: `1px solid ${T.forest800}20` }}
        >
          <Icon size={24} strokeWidth={1.4} style={{ color: `${T.forest800}60` }} />
        </div>
        {label && (
          <span
            className="text-[11px] tracking-[0.14em] uppercase"
            style={{ ...MONO, color: `${T.forest800}50` }}
          >
            {label}
          </span>
        )}
      </div>
    )}
  </div>
);

/* ── Hostel images — replace null with '/hostel/...' once uploaded ── */
const BOYS_IMAGES  = ['/campus/boys-hostel.jpeg', null, null];
const GIRLS_IMAGES = ['/campus/girls-hostel.jpeg', null, null];
const CANTEEN_IMAGES = [null, null];
const SHOPS_IMAGES   = [null, null];

const HOSTEL_FEATURES = [
  'Clean furnished rooms with proper ventilation',
  'Separate common rooms and study areas',
  '24 × 7 security and CCTV surveillance',
  'Hot water facility',
  'Wi-Fi connectivity',
  'Warden available on campus',
];

const BOYS_HOSTEL_FEATURES = [
  ...HOSTEL_FEATURES,
  'Gym facility',
];

const MEALS = [
  {
    icon: Sun,
    label: 'Breakfast',
    time: 'Morning',
    items: ['Hot beverages', 'Bread & butter', 'Poha / Upma / Idli', 'Seasonal fruits'],
    color: T.gold700,
  },
  {
    icon: Sunset,
    label: 'Lunch',
    time: 'Afternoon',
    items: ['Dal & rice', 'Chapati / Roti', 'Seasonal vegetable', 'Salad & pickle'],
    color: T.forest600,
  },
  {
    icon: Moon,
    label: 'Dinner',
    time: 'Evening',
    items: ['Dal & rice', 'Chapati / Roti', 'Sabji', 'Dessert (select days)'],
    color: '#4A3A7A',
  },
];

const SHOPS = [
  { icon: UtensilsCrossed, label: 'Food Stalls',      desc: 'Quick snacks, beverages, and light meals available throughout the day.' },
  { icon: ShoppingBag,     label: 'General Stores',   desc: 'Daily essentials, stationery, toiletries, and personal care items.' },
  { icon: Store,           label: 'Tuck Shop',        desc: 'Snacks, packaged foods, cold drinks and confectionery.' },
  { icon: Coffee,          label: 'Tea & Snack Corner', desc: 'Tea, coffee, and evening snacks served fresh on campus.' },
];

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity:   inView ? 1 : 0,
  transform: inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left'  ? 'translateX(-24px)'
    : dir === 'right' ? 'translateX(24px)'
    : 'translateY(24px)',
  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function HostelCanteenSection() {
  const [heroRef,    heroInView]    = useInView(0.08);
  const [boysRef,    boysInView]    = useInView(0.06);
  const [girlsRef,   girlsInView]   = useInView(0.06);
  const [canteenRef, canteenInView] = useInView(0.06);
  const [shopsRef,   shopsInView]   = useInView(0.06);

  return (
    <>
      {/* ════════════════════════  HERO  ════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 420, background: T.forest800 }}
      >
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${T.forest800}F5 0%, ${T.ink900}CC 100%)` }} />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}18 1px, transparent 1px)`,
            backgroundSize: '36px 36px', pointerEvents: 'none',
          }}
        />
        {/* Ghost icons */}
        <div style={{ position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)', opacity: 0.04, pointerEvents: 'none' }}>
          <Home size={260} strokeWidth={0.5} color={T.gold100} />
        </div>

        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-32">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}><Eyebrow light>Campus Life</Eyebrow></div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Hostel &{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Canteen</em>
            </h1>
            <p
              className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.2) }}
            >
              Comfortable residential facilities for boys and girls, a well-equipped canteen
              serving three meals a day, and a range of campus shops for everyday needs.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>Campus Life</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Hostel &amp; Canteen</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════  QUICK FACTS STRIP  ═══════════════ */}
      <section className="py-8" style={{ background: T.gold700 }}>
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-14 text-center">
            {[
              { icon: Users, text: 'Separate Hostel for Boys & Girls' },
              { icon: UtensilsCrossed, text: 'Canteen — Breakfast, Lunch & Dinner' },
              { icon: Store, text: 'Local Shops for Food & Daily Needs' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5">
                <Icon size={16} strokeWidth={2} style={{ color: T.cream50, opacity: 0.85, flexShrink: 0 }} />
                <span className="text-[13px] font-medium" style={{ color: T.cream50 }}>{text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════  BOYS HOSTEL  ═════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={boysRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Text */}
            <div style={slide(boysInView, 0, 'left')}>
              <Eyebrow>Residential Facility</Eyebrow>
              <h2
                className="mt-4 text-[28px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                Boys'{' '}
                <em style={{ color: T.gold700, fontStyle: 'italic' }}>Hostel</em>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.85]" style={{ color: T.muted500 }}>
                The boys' hostel at Amaltas Institute provides a safe, comfortable, and
                disciplined residential environment for male students. Located within the
                campus, it ensures students are close to academic and clinical facilities,
                allowing them to focus fully on their studies.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {BOYS_HOSTEL_FEATURES.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} strokeWidth={2} style={{ color: T.forest600, flexShrink: 0, marginTop: 2 }} />
                    <span className="text-[13.5px] leading-snug" style={{ color: T.ink900 }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Badge */}
              <div
                className="mt-7 inline-flex items-center gap-3 rounded-xl px-5 py-3"
                style={{ background: T.forest800 }}
              >
                <Shield size={16} strokeWidth={1.8} style={{ color: T.gold100 }} />
                <span className="text-[13px] font-medium" style={{ color: T.cream50 }}>
                  24 × 7 Warden & Security on Campus
                </span>
              </div>
            </div>

            {/* Photos */}
            <div style={slide(boysInView, 0.12, 'right')}>
              <PhotoSlot src={BOYS_IMAGES[0]} alt="Boys hostel" aspect="16/9" icon={Home} label="Boys Hostel — Photo coming soon" />
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════  GIRLS HOSTEL  ════════════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F`, borderBottom: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={girlsRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Photos — left on this row */}
            <div className="order-2 lg:order-1" style={slide(girlsInView, 0, 'left')}>
              <PhotoSlot src={GIRLS_IMAGES[0]} alt="Girls hostel" aspect="16/9" icon={Home} label="Girls Hostel — Photo coming soon" />
            </div>

            {/* Text — right on this row */}
            <div className="order-1 lg:order-2" style={slide(girlsInView, 0.12, 'right')}>
              <Eyebrow>Residential Facility</Eyebrow>
              <h2
                className="mt-4 text-[28px] lg:text-[40px] leading-[1.1] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                Girls'{' '}
                <em style={{ color: T.gold700, fontStyle: 'italic' }}>Hostel</em>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.85]" style={{ color: T.muted500 }}>
                The girls' hostel provides a secure and welcoming residential space for female
                students, managed with a dedicated warden and round-the-clock security. The
                facility is designed to ensure a comfortable, homely, and academically
                supportive environment.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {HOSTEL_FEATURES.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} strokeWidth={2} style={{ color: '#8A4A6E', flexShrink: 0, marginTop: 2 }} />
                    <span className="text-[13.5px] leading-snug" style={{ color: T.ink900 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-7 inline-flex items-center gap-3 rounded-xl px-5 py-3"
                style={{ background: '#5A2A3E' }}
              >
                <Shield size={16} strokeWidth={1.8} style={{ color: T.gold100 }} />
                <span className="text-[13px] font-medium" style={{ color: T.cream50 }}>
                  Female Warden & Secure Entry at All Times
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════  CANTEEN  ══════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={canteenRef} className="text-center mb-14" style={slide(canteenInView, 0)}>
            <Eyebrow>Dining</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Campus{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>Canteen</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: T.muted500 }}>
              The campus canteen serves freshly prepared meals three times a day, ensuring
              students have access to nutritious and hygienic food throughout the academic year.
            </p>
          </div>

          {/* Meal cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {MEALS.map(({ icon: Icon, label, time, items, color }, i) => (
              <div
                key={label}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  border: `1px solid ${T.ink900}0D`,
                  boxShadow: `0 4px 18px -6px ${T.ink900}0A`,
                  opacity:   canteenInView ? 1 : 0,
                  transform: canteenInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
                }}
              >
                {/* Header */}
                <div className="px-6 py-5 flex items-center gap-4" style={{ background: color }}>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.22)' }}
                  >
                    <Icon size={20} strokeWidth={1.8} color="#FFFFFF" />
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.16em] uppercase" style={{ ...MONO, color: 'rgba(255,255,255,0.65)' }}>{time}</div>
                    <div className="text-[22px] font-semibold leading-tight" style={{ ...fontDisplay, color: '#FFFFFF' }}>{label}</div>
                  </div>
                </div>

                {/* Items */}
                <div className="px-6 py-5">
                  <div className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ ...MONO, color: T.muted500 }}>
                    Includes
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {items.map(item => (
                      <div key={item} className="flex items-center gap-2.5">
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
                        <span className="text-[14px]" style={{ color: T.ink900 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ height: 3, background: color }} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════  CAMPUS SHOPS  ════════════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={shopsRef}>
            <div style={slide(shopsInView, 0)}>
              <Eyebrow>Campus Amenities</Eyebrow>
              <h2
                className="mt-4 text-[28px] lg:text-[38px] leading-[1.1] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                Local shops &{' '}
                <em style={{ color: T.gold700, fontStyle: 'italic' }}>daily essentials</em>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.85]" style={{ color: T.muted500 }}>
                Beyond the main canteen, the campus has a variety of local shops catering
                to students' food preferences and daily requirements — so everything you
                need is just steps away.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SHOPS.map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className="rounded-2xl p-5"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${T.ink900}0D`,
                    boxShadow: `0 2px 12px -4px ${T.ink900}08`,
                    opacity:   shopsInView ? 1 : 0,
                    transform: shopsInView ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.65s ease ${i * 0.08}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${T.gold600}14` }}
                  >
                    <Icon size={18} strokeWidth={1.8} style={{ color: T.gold700 }} />
                  </div>
                  <div className="text-[15px] font-semibold mb-1.5" style={{ ...fontDisplay, color: T.ink900 }}>{label}</div>
                  <p className="text-[13px] leading-[1.7]" style={{ color: T.muted500 }}>{desc}</p>
                </div>
              ))}
            </div>
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
            <Home size={22} strokeWidth={1.6} style={{ color: T.gold100 }} />
          </div>
          <p
            className="text-[20px] sm:text-[26px] font-semibold max-w-2xl mx-auto leading-snug"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            A campus that feels like{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>home</em>.
          </p>
          <p className="mt-4 text-[13px]" style={{ color: `${T.cream50}66` }}>
            For hostel admissions and fee details contact the institute office · Amaltas Institute of Homoeopathy
          </p>
        </Container>
      </section>
    </>
  );
}
