import React from 'react';
import { Quote, Leaf, GraduationCap, HeartHandshake, MapPin, Building2, TrendingUp } from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const MESSAGE_PARAGRAPHS = [
  {
    heading: null,
    text: 'Welcome to Amaltas Institute of Homoeopathy, Hospital and Research Centre. As Chairman of the Amaltas Group, I am honoured to lead an institution that has grown, in a short span since 2020, into one of central India\'s most respected centres for homoeopathic education and patient care. Our journey is young, but our resolve is firm — and the progress we have made gives me every reason for confidence in the road ahead.',
    dark: true,
  },
  {
    heading: 'The Belief Behind Amaltas',
    text: 'The Amaltas Group was founded on a belief that is as straightforward as it is demanding: that quality healthcare education should be accessible to all, not a privilege rationed by geography or economic circumstance. Every decision we make — on infrastructure, on faculty recruitment, on clinical protocols, on community outreach — is made with this belief at its centre. It is a non-negotiable principle, and one I intend to uphold for as long as I hold this position.',
    dark: false,
  },
  {
    heading: 'More Than a College',
    text: 'What we have built at Amaltas goes beyond a college. We have created a living ecosystem of learning, healing, and community service. Our teaching hospital treats thousands of patients every year — patients who, in many cases, have nowhere else to turn. Our faculty bring decades of clinical experience into the classroom. Our students graduate not merely with degrees, but with the hands-on competence and personal confidence to begin independent practice from their very first day.',
    dark: false,
  },
  {
    heading: 'The Power of a Multidisciplinary Campus',
    text: 'The Amaltas Group campus in Dewas is, I believe, one of the most remarkable educational environments in Madhya Pradesh. A multidisciplinary hub where homoeopathy, modern medicine, nursing, ayurveda, and paramedical sciences coexist under one umbrella — the cross-pollination this creates is invaluable. When a homoeopathy student walks past a nursing simulation lab or participates in an interdisciplinary health camp alongside medical and paramedical peers, their horizons expand in ways that no single-discipline institution can replicate.',
    dark: false,
  },
  {
    heading: 'Serving Dewas and Ujjain',
    text: 'I take particular pride in what Amaltas has done — and continues to do — for the communities of Dewas and Ujjain. Healthcare access remains deeply unequal across rural and semi-urban India. Our subsidised OPD, our regular free health camps, and our community awareness programmes are direct, practical responses to that inequality. They are not token gestures. They are institutional commitments, planned carefully and executed consistently — because we believe a medical institution that does not serve its surrounding community has missed its most fundamental obligation.',
    dark: false,
  },
  {
    heading: 'Our Standards Will Not Be Compromised',
    text: 'The Amaltas Group competes on quality, not on volume. We will not compromise the rigour of our academic programme to fill seats, nor will we sacrifice clinical standards to cut costs. I believe that genuine excellence and genuine accessibility are not opposites — they are both necessary, and both achievable. Amaltas is our proof of concept, and we will continue to raise the bar year after year.',
    dark: false,
  },
  {
    heading: 'Gratitude to Our People',
    text: 'An institution is only as strong as the people who run it. I am deeply grateful to our Principal, our Medical Superintendent, our faculty, our administrative staff, and every member of the Amaltas family who shows up each day with dedication and purpose. Their work — often unseen, always consequential — is what makes everything else possible. To them I extend my sincerest appreciation and my full support.',
    dark: false,
  },
  {
    heading: 'A Word to Every Student',
    text: 'To the students who have chosen Amaltas: you have made a decision that will define much of the rest of your life. Medicine demands everything — your intellect, your discipline, your empathy, and your patience. In return, it gives you something that few professions can offer — the genuine ability to change someone\'s life for the better. I am committed to ensuring that this institution gives you every tool you need to do precisely that. My door is open, my commitment to your development is absolute, and I look forward to watching each of you succeed.',
    dark: false,
  },
];

const PULL_QUOTE = 'We compete on quality, not on volume. Excellence and accessibility are not opposites — they are both necessary, and both achievable.';

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity: inView ? 1 : 0,
  transform: inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left' ? 'translateX(-32px)'
    : dir === 'right' ? 'translateX(32px)'
    : 'translateY(28px)',
  transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function ChairmanMessageSection() {
  const [heroRef, heroInView]   = useInView(0.08);
  const [introRef, introInView] = useInView(0.08);
  const [bodyRef, bodyInView]   = useInView(0.04);
  const [sigRef, sigInView]     = useInView(0.1);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 460, background: T.ink900 }}
      >
        <img
          src="/campus/campus.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 40%',
            opacity: 0.14,
          }}
          draggable="false"
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(145deg, ${T.ink900}F5 0%, ${T.forest800}D8 100%)`,
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}12 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />
        {/* Decorative arcs — bottom left this time */}
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 420, height: 420, borderRadius: '50%', border: `1px solid ${T.gold600}1A`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, left: -40, width: 260, height: 260, borderRadius: '50%', border: `1px solid ${T.gold600}0E`, pointerEvents: 'none' }} />

        <Container className="relative py-24 lg:py-32">
          <div ref={heroRef} className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Chairman portrait chip — desktop left */}
            <div
              className="hidden lg:flex lg:col-span-4 flex-col items-center text-center gap-4"
              style={slide(heroInView, 0.18, 'left')}
            >
              <div
                style={{
                  width: 120, height: 120,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `3px solid ${T.gold600}55`,
                  boxShadow: `0 0 0 6px ${T.gold600}15`,
                }}
              >
                <img
                  src="/leadership/chairman.jpg"
                  alt="Shri Mayankraj S. Bhadoria"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  draggable="false"
                />
              </div>
              <div>
                <div className="text-[18px] font-semibold" style={{ ...fontDisplay, color: '#FFFFFF' }}>
                  Shri Mayankraj S. Bhadoria
                </div>
                <div className="mt-1 text-[11px] tracking-[0.18em] uppercase" style={{ ...MONO, color: T.gold100, opacity: 0.7 }}>
                  Chairman · Amaltas Group
                </div>
              </div>
            </div>

            {/* Text column */}
            <div className="lg:col-span-8">
              <div style={slide(heroInView, 0)}>
                <Eyebrow light>About the Institution</Eyebrow>
              </div>
              <h1
                className="mt-5 text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.06] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
              >
                Chairman's{' '}
                <em style={{ color: T.gold100, fontStyle: 'italic' }}>Message</em>
              </h1>
              <p
                className="mt-5 text-[17px] leading-relaxed max-w-xl"
                style={{ color: `${T.cream50}AA`, ...slide(heroInView, 0.2) }}
              >
                Shri Mayankraj S. Bhadoria on the Amaltas Group's founding principles,
                its commitment to the communities of Dewas and Ujjain, and what he expects
                of every student who walks through these doors.
              </p>
              <div
                className="mt-7 flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase"
                style={{ ...MONO, color: `${T.gold100}77`, ...slide(heroInView, 0.28) }}
              >
                <span>Home</span>
                <span style={{ color: T.gold600 }}>›</span>
                <span>About</span>
                <span style={{ color: T.gold600 }}>›</span>
                <span style={{ color: T.gold100 }}>Chairman's Message</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          PORTRAIT + MESSAGE
      ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: T.cream50 }}>
        <Container>
          <div ref={introRef} className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Sticky portrait column */}
            <div className="lg:col-span-4" style={slide(introRef, 0, 'left')}>
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
                    src="/leadership/chairman.jpg"
                    alt="Shri Mayankraj S. Bhadoria, Chairman"
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
                  <div
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      padding: '40px 22px 20px',
                      background: 'linear-gradient(to top, rgba(13,31,24,0.88) 0%, transparent 100%)',
                      pointerEvents: 'none',
                    }}
                  >
                    <div className="text-[16px] font-semibold" style={{ ...fontDisplay, color: '#FFFFFF', marginBottom: 2 }}>
                      Shri Mayankraj S. Bhadoria
                    </div>
                    <div style={{ ...MONO, fontSize: 10, letterSpacing: '0.18em', color: T.gold100, textTransform: 'uppercase', opacity: 0.85 }}>
                      Chairman · Amaltas Group
                    </div>
                  </div>
                </div>

                {/* Info badges */}
                <div className="mt-5 space-y-3">
                  {[
                    [Building2,    'Amaltas Group of Institutions'],
                    [MapPin,       'Bangar, Dewas, Madhya Pradesh'],
                    [TrendingUp,   'Academic & Clinical Excellence'],
                  ].map(([Icon, text]) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px]"
                      style={{ background: `${T.forest800}08`, border: `1px solid ${T.forest800}14`, color: T.muted500 }}
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
                    <h3 className="text-[18px] font-semibold mb-3" style={{ ...fontDisplay, color: T.ink900 }}>
                      {heading}
                    </h3>
                  )}
                  <p className="text-[17px] leading-[1.9]" style={{ color: dark ? T.ink900 : T.muted500 }}>
                    {text}
                  </p>

                  {/* Pull quote after paragraph 5 (Standards) */}
                  {i === 5 && (
                    <div
                      className="mt-8 rounded-2xl p-7 flex gap-5"
                      style={{ background: T.ink900, boxShadow: `0 12px 40px -8px ${T.ink900}30` }}
                    >
                      <Quote size={28} strokeWidth={1.4} className="flex-shrink-0 mt-1" style={{ color: T.gold600 }} />
                      <div>
                        <p
                          className="text-[18px] leading-[1.65] font-medium"
                          style={{ ...fontDisplay, color: '#FFFFFF', fontStyle: 'italic' }}
                        >
                          {PULL_QUOTE}
                        </p>
                        <div className="mt-3 text-[11px] tracking-[0.18em] uppercase" style={{ ...MONO, color: `${T.gold100}88` }}>
                          — Shri Mayankraj S. Bhadoria, Chairman
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Signature */}
              <div
                ref={sigRef}
                className="pt-6"
                style={{ borderTop: `1px solid ${T.ink900}10`, ...slide(sigInView, 0.1) }}
              >
                <p className="text-[16px] mb-5" style={{ color: T.muted500 }}>
                  With warm regards,
                </p>
                <div
                  className="text-[28px] sm:text-[34px] leading-tight font-semibold"
                  style={{ ...fontDisplay, color: T.forest800, fontStyle: 'italic' }}
                >
                  Mayankraj S. Bhadoria
                </div>
                <div className="mt-2 space-y-0.5">
                  <div className="text-[13px] font-semibold tracking-wide" style={{ color: T.ink900 }}>
                    Chairman
                  </div>
                  <div className="text-[13px]" style={{ color: T.muted500 }}>
                    Amaltas Group of Institutions
                  </div>
                  <div className="text-[12px]" style={{ ...MONO, color: T.muted500, letterSpacing: '0.06em' }}>
                    Bangar, Dewas · Madhya Pradesh
                  </div>
                </div>
                <div className="mt-6 w-20 h-0.5 rounded-full" style={{ background: `linear-gradient(to right, ${T.gold600}, transparent)` }} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          CLOSING MANIFESTO
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
        <div style={{ position: 'absolute', top: -140, right: -140, width: 480, height: 480, borderRadius: '50%', border: `1px solid ${T.gold600}16`, pointerEvents: 'none' }} />

        <Container className="relative text-center">
          <Eyebrow light>Amaltas Group · Dewas</Eyebrow>
          <h2
            className="mt-5 text-[24px] sm:text-[30px] lg:text-[38px] leading-[1.25] font-semibold max-w-3xl mx-auto"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            "My commitment to your development is{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>absolute</em>
            . I look forward to watching each of you succeed — and to building, together, a legacy this institution will be proud of."
          </h2>
          <p className="mt-6 text-[14px] tracking-[0.14em] uppercase" style={{ ...MONO, color: `${T.cream50}55` }}>
            — Shri Mayankraj S. Bhadoria, Chairman
          </p>

          <div className="mt-12 flex items-center justify-center gap-10 sm:gap-16">
            {[
              [Building2,     'Leadership'],
              [GraduationCap, 'Excellence'],
              [HeartHandshake,'Service'],
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
