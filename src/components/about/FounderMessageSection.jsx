import React from 'react';
import { Quote, Leaf, GraduationCap, HeartHandshake, MapPin } from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const MESSAGE_PARAGRAPHS = [
  {
    heading: null,
    text: "Welcome to Amaltas Institute of Homoeopathy, Hospital and Research Centre. Whether you are an aspiring student considering a career in homoeopathic medicine, a parent entrusting us with your child's future, or a patient seeking gentle and lasting relief — I want you to know that every stone of this institution was laid with you in mind.",
    dark: true,
  },
  {
    heading: 'A Vision, Not Just a College',
    text: 'When I conceived the idea of Amaltas, it was not merely to establish another college. It was to create a place where homoeopathy would be practised and taught with the seriousness it deserves — where students would learn not to dispense pills mechanically, but to think deeply, observe carefully, and prescribe with the precision that this science demands. That vision has not changed since the day we opened our doors in 2020, and it will not change as long as I have a say in the direction of this institution.',
    dark: false,
  },
  {
    heading: 'Homoeopathy and the India We Serve',
    text: 'India carries an enormous healthcare burden — chronic disease, limited access in rural regions, and the rising cost of conventional treatment together create a crisis that homoeopathy is uniquely positioned to address. It is a system that is safe, affordable, deeply personalised, and proven across two centuries of clinical practice. It heals, not merely manages. At Amaltas, we are building the physicians who will bring that healing to the communities that need it most — and Dewas and Ujjain are at the top of that list.',
    dark: false,
  },
  {
    heading: 'Our Responsibility to the Community',
    text: 'Dewas and Ujjain are our home. The people of these districts — their health, their children, their futures — are our responsibility. This is why our teaching hospital opens its doors to every patient regardless of their ability to pay. This is why our faculty and students travel to villages for health camps, conduct awareness programmes, and serve wherever they are needed. I measure our success not only in examination results, but in the lives we touch beyond these walls.',
    dark: false,
  },
  {
    heading: 'Quality Above All Else',
    text: 'I have always believed that quality must come before all else. We do not chase enrolment numbers. We invest in people — in the calibre of our faculty, in the depth of our clinical training, in the richness of our library and laboratory resources. I want every Amaltas graduate to walk out of this institution with the confidence and competence to begin practice anywhere in India, and to be received with respect wherever they go.',
    dark: false,
  },
  {
    heading: 'The Values Medicine Demands',
    text: "Medicine is a privilege, not merely a profession. The patients who come to us are often at their most vulnerable — in pain, uncertain, afraid. They deserve physicians who listen without hurrying, who think without shortcuts, and who place the patient's welfare above everything else. This is the culture we are building at Amaltas — one of discipline, empathy, intellectual honesty, and professional integrity.",
    dark: false,
  },
  {
    heading: 'To Our Faculty and Staff',
    text: 'None of this would be possible without the exceptional faculty and staff who bring the Amaltas mission to life every single day. I am deeply grateful for their commitment — to the academic standards they uphold, to the patients they serve with skill and warmth, and to the students whose careers they are quietly and steadily shaping. The progress of this institution is, above all, a tribute to their dedication.',
    dark: false,
  },
  {
    heading: 'A Promise to Every Student',
    text: 'To every student who joins us: you have chosen one of the most meaningful paths available to you. The road ahead will demand hard work, humility, and an unbroken commitment to learning. But I promise you this — Amaltas will give you every resource, every opportunity, and every encouragement you need to succeed. My belief in the future of homoeopathy is as strong today as it was the day I founded this institution. I look forward to seeing each of you rise to the highest level of professional excellence.',
    dark: false,
  },
];

const PULL_QUOTE = 'We do not chase enrolment numbers. We invest in people — because quality education is the only foundation on which lasting healthcare can be built.';

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity: inView ? 1 : 0,
  transform: inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left' ? 'translateX(-32px)'
    : dir === 'right' ? 'translateX(32px)'
    : 'translateY(28px)',
  transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function FounderMessageSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [introRef, introInView] = useInView(0.08);
  const [bodyRef,  bodyInView]  = useInView(0.04);
  const [sigRef,   sigInView]   = useInView(0.1);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 460, background: T.forest800 }}
      >
        {/* Campus image, very faint */}
        <img
          src="/campus/homoepathy.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 50%',
            opacity: 0.12,
          }}
          draggable="false"
        />

        {/* Gradient */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(140deg, ${T.forest800}F8 0%, ${T.ink900}E0 100%)`,
          }}
        />

        {/* Dot texture */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}14 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative arcs */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 420, height: 420, borderRadius: '50%', border: `1px solid ${T.gold600}1C`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -20, right: -20, width: 260, height: 260, borderRadius: '50%', border: `1px solid ${T.gold600}10`, pointerEvents: 'none' }} />

        <Container className="relative py-24 lg:py-32">
          <div ref={heroRef} className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Text column */}
            <div className="lg:col-span-8">
              <div style={slide(heroInView, 0)}>
                <Eyebrow light>About the Institution</Eyebrow>
              </div>
              <h1
                className="mt-5 text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.06] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
              >
                Founder Chairman{' '}
                <em style={{ color: T.gold100, fontStyle: 'italic' }}>Message</em>
              </h1>
              <p
                className="mt-5 text-[17px] leading-relaxed max-w-xl"
                style={{ color: `${T.cream50}AA`, ...slide(heroInView, 0.2) }}
              >
                A personal note from the man who built Amaltas Group from the ground up —
                on purpose, on medicine, and on the responsibility every physician carries.
              </p>
              {/* Breadcrumb */}
              <div
                className="mt-7 flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase"
                style={{ ...MONO, color: `${T.gold100}77`, ...slide(heroInView, 0.28) }}
              >
                <span>Home</span>
                <span style={{ color: T.gold600 }}>›</span>
                <span>About</span>
                <span style={{ color: T.gold600 }}>›</span>
                <span style={{ color: T.gold100 }}>Founder Chairman Message</span>
              </div>
            </div>

            {/* Founder name card — desktop only */}
            <div
              className="hidden lg:flex lg:col-span-4 flex-col items-center text-center gap-4"
              style={slide(heroInView, 0.18, 'right')}
            >
              <div
                style={{
                  width: 120, height: 120,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `3px solid ${T.gold600}60`,
                  boxShadow: `0 0 0 6px ${T.gold600}18`,
                }}
              >
                <img
                  src="/leadership/suresh-sir.jpeg"
                  alt="Shri Suresh Singh Bhadoria"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  draggable="false"
                />
              </div>
              <div>
                <div
                  className="text-[18px] font-semibold"
                  style={{ ...fontDisplay, color: '#FFFFFF' }}
                >
                  Shri Suresh Singh Bhadoria
                </div>
                <div
                  className="mt-1 text-[11px] tracking-[0.18em] uppercase"
                  style={{ ...MONO, color: T.gold100, opacity: 0.7 }}
                >
                  Founder Chairman · Amaltas Group of Institute
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          PORTRAIT + OPENING PARAGRAPH
      ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={introRef} className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Portrait */}
            <div className="lg:col-span-4" style={slide(introInView, 0, 'left')}>
              <div style={{ position: 'sticky', top: 100 }}>
                <div
                  data-cursor="image"
                  style={{
                    borderRadius: 20,
                    overflow: 'hidden',
                    aspectRatio: '3 / 4',
                    position: 'relative',
                    boxShadow: `0 24px 60px -12px ${T.ink900}28`,
                  }}
                >
                  <img
                    src="/leadership/suresh-sir.jpeg"
                    alt="Shri Suresh Singh Bhadoria, Founder Chairman"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center top',
                      display: 'block',
                      transition: 'transform 0.7s ease',
                    }}
                    draggable="false"
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  {/* Caption */}
                  <div
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      padding: '40px 22px 20px',
                      background: 'linear-gradient(to top, rgba(13,31,24,0.85) 0%, transparent 100%)',
                      pointerEvents: 'none',
                    }}
                  >
                    <div
                      className="text-[16px] font-semibold"
                      style={{ ...fontDisplay, color: '#FFFFFF', marginBottom: 2 }}
                    >
                      Shri Suresh Singh Bhadoria
                    </div>
                    <div
                      style={{ ...MONO, fontSize: 10, letterSpacing: '0.18em', color: T.gold100, textTransform: 'uppercase', opacity: 0.85 }}
                    >
                      Founder Chairman · Amaltas Institute
                    </div>
                  </div>
                </div>

                {/* Info badges below portrait */}
                <div className="mt-5 space-y-3">
                  {[
                    [MapPin,        'Bangar, Dewas, Madhya Pradesh'],
                    [GraduationCap, 'Est. 2020 — Amaltas Institute'],
                    [Leaf,          'Homoeopathy · Community Health'],
                  ].map(([Icon, text]) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px]"
                      style={{
                        background: `${T.forest800}08`,
                        border: `1px solid ${T.forest800}14`,
                        color: T.muted500,
                      }}
                    >
                      <Icon size={14} strokeWidth={2} style={{ color: T.gold700, flexShrink: 0 }} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Message body */}
            <div ref={bodyRef} className="lg:col-span-8 space-y-10">

              {MESSAGE_PARAGRAPHS.map(({ heading, text, dark }, i) => (
                <div
                  key={i}
                  style={{
                    opacity: bodyInView ? 1 : 0,
                    transform: bodyInView ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.75s ease ${i * 0.07}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s`,
                  }}
                >
                  {heading && (
                    <h3
                      className="text-[18px] font-semibold mb-3"
                      style={{ ...fontDisplay, color: T.ink900 }}
                    >
                      {heading}
                    </h3>
                  )}
                  <p
                    className="text-[17px] leading-[1.9]"
                    style={{ color: dark ? T.ink900 : T.muted500 }}
                  >
                    {text}
                  </p>

                  {/* Insert pull quote after paragraph 4 (Community) */}
                  {i === 3 && (
                    <div
                      className="mt-8 rounded-2xl p-7 flex gap-5"
                      style={{
                        background: T.forest800,
                        boxShadow: `0 12px 40px -8px ${T.ink900}24`,
                      }}
                    >
                      <Quote
                        size={28}
                        strokeWidth={1.4}
                        className="flex-shrink-0 mt-1"
                        style={{ color: T.gold400 ?? T.gold600 }}
                      />
                      <div>
                        <p
                          className="text-[18px] leading-[1.65] font-medium"
                          style={{ ...fontDisplay, color: '#FFFFFF', fontStyle: 'italic' }}
                        >
                          {PULL_QUOTE}
                        </p>
                        <div
                          className="mt-3 text-[11px] tracking-[0.18em] uppercase"
                          style={{ ...MONO, color: `${T.gold100}88` }}
                        >
                          — Shri Suresh Singh Bhadoria, Founder Chairman
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* ── Signature block ── */}
              <div
                ref={sigRef}
                className="pt-6"
                style={{
                  borderTop: `1px solid ${T.ink900}10`,
                  ...slide(sigInView, 0.1),
                }}
              >
                <p
                  className="text-[16px] mb-5"
                  style={{ color: T.muted500 }}
                >
                  With warm regards and best wishes,
                </p>

                {/* Stylised signature name */}
                <div
                  className="text-[28px] sm:text-[34px] leading-tight font-semibold"
                  style={{
                    ...fontDisplay,
                    color: T.forest800,
                    fontStyle: 'italic',
                  }}
                >
                  Suresh Singh Bhadoria
                </div>

                <div className="mt-2 space-y-0.5">
                  <div
                    className="text-[13px] font-semibold tracking-wide"
                    style={{ color: T.ink900 }}
                  >
                    Founder Chairman
                  </div>
                  <div
                    className="text-[13px]"
                    style={{ color: T.muted500 }}
                  >
                    Amaltas Institute of Homoeopathy, Hospital &amp; Research Centre
                  </div>
                  <div
                    className="text-[12px]"
                    style={{ ...MONO, color: T.muted500, letterSpacing: '0.06em' }}
                  >
                    Bangar, Dewas · Madhya Pradesh · Est. 2020
                  </div>
                </div>

                {/* Gold rule */}
                <div
                  className="mt-6 w-20 h-0.5 rounded-full"
                  style={{ background: `linear-gradient(to right, ${T.gold600}, transparent)` }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          CLOSING MANIFESTO — dark
      ═══════════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
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
        <div style={{ position: 'absolute', bottom: -140, right: -140, width: 480, height: 480, borderRadius: '50%', border: `1px solid ${T.gold600}16`, pointerEvents: 'none' }} />

        <Container className="relative text-center">
          <Eyebrow light>Amaltas · Since 2020</Eyebrow>
          <h2
            className="mt-5 text-[24px] sm:text-[30px] lg:text-[38px] leading-[1.25] font-semibold max-w-3xl mx-auto"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            "My commitment to your growth is{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>absolute</em>
            , and my belief in the future of homoeopathy is as strong today as the day I founded this institution."
          </h2>
          <p
            className="mt-6 text-[14px] tracking-[0.14em] uppercase"
            style={{ ...MONO, color: `${T.cream50}66` }}
          >
            — Shri Suresh Singh Bhadoria, Founder Chairman
          </p>

          <div
            className="mt-12 flex items-center justify-center gap-10 sm:gap-16"
          >
            {[
              [HeartHandshake, 'Compassion'],
              [GraduationCap,  'Excellence'],
              [Leaf,           'Healing'],
            ].map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}2C` }}
                >
                  <Icon size={20} strokeWidth={1.6} style={{ color: T.gold100 }} />
                </div>
                <span style={{ ...MONO, fontSize: 11, letterSpacing: '0.16em', color: `${T.cream50}77`, textTransform: 'uppercase' }}>
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
