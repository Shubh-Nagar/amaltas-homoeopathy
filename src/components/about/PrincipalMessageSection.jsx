import React from 'react';
import { Quote, BookOpen, Stethoscope, HeartHandshake, MapPin, FlaskConical, GraduationCap } from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const MESSAGE_PARAGRAPHS = [
  {
    heading: null,
    salutation: 'Dear Students,',
    text: "Welcome to Amaltas Institute of Homoeopathy, Hospital and Research Centre, Dewas. It is with deep pride and genuine warmth that I address each of you — students, parents, and well-wishers — as you embark on what is, in my experience, one of the most fulfilling and purpose-driven careers a person can choose. You have not simply enrolled in a college. You have chosen to dedicate yourself to the art and science of healing — and that decision deserves to be met with everything this institution has to offer.",
    dark: true,
  },
  {
    heading: 'A Name That Carries Weight',
    text: "In the short time since its founding in 2020, Amaltas has established itself as a name that carries genuine weight in the world of homoeopathic healthcare and education in central India. We are recognised by the National Commission for Homoeopathy, affiliated with Amaltas Institute, and equipped with the clinical infrastructure needed to produce graduates who are ready for independent practice from their very first day. But what makes Amaltas truly remarkable is not our infrastructure alone — it is the culture of seriousness and care that runs through every interaction here: between faculty and students, between physicians and patients, and between this institution and the community it serves.",
    dark: false,
  },
  {
    heading: 'The BHMS Programme — Two Mandates',
    text: 'Our BHMS programme is designed with a dual mandate. The first is academic rigour — a curriculum that covers every dimension of homoeopathic science, from anatomy, physiology, and pathology in the preclinical years, to materia medica, repertory, and applied clinical medicine in the upper semesters. The second is ethical formation — ensuring that every graduate who leaves Amaltas does so not only with knowledge, but with a clear sense of what that knowledge is for, and who it is meant to serve. Degrees are earned; character is built. We take both equally seriously.',
    dark: false,
  },
  {
    heading: 'A Holistic Learning Environment',
    text: 'We believe that the finest homoeopathic physician is not produced in a lecture hall alone. Clinical exposure, case-taking practice, hospital rounds, laboratory work, and community outreach are all woven into the Amaltas learning experience. Our faculty bring decades of clinical wisdom into the classroom. Our teaching hospital provides daily OPD exposure across multiple specialities, giving students real patient contact from the earliest clinical years. Our research cell offers motivated students a platform to contribute meaningfully to the evidence base of the discipline — because homoeopathy, like all medicine, must always continue to grow.',
    dark: false,
  },
  {
    heading: 'What This Field Truly Asks of You',
    text: "As you step into homoeopathic medicine, understand what it genuinely demands. It asks for patience — because chronic conditions do not resolve overnight, and patients in distress need you to be present even when the answers are not immediate. It asks for humility — because homoeopathy is a vast, deep science, and the greatest practitioners will tell you that every decade of practice teaches them something new. And it asks for compassion — because behind every case sheet is a person who has come to you in hope, often after a long and difficult search for relief. Never lose sight of that person.",
    dark: false,
  },
  {
    heading: 'My Encouragement to Each of You',
    text: 'Ask questions — in the classroom, in the clinic, and of yourself. The student who questions is the physician who grows. Stay curious — approach every case as a puzzle worth solving, every patient as a teacher, and every clinical session as an opportunity that will not come again. Strive for excellence — not for examination marks alone, but for the genuine mastery that will make you effective when someone\'s health depends entirely on your judgment and compassion. The standard you set for yourself during these years will define the physician you become.',
    dark: false,
  },
  {
    heading: 'A Commitment From Me to You',
    text: "I am honoured to serve as your Principal, and I am deeply committed to ensuring that your time at Amaltas is enriching, transformative, and fully worthy of the trust you have placed in us. Our faculty are invested in your growth. Our clinical staff are here to guide your practice. And I personally look forward to seeing each of you flourish — as students today, as graduates tomorrow, and as healers for the decades that follow. My door is always open. Do not hesitate to bring your questions, your concerns, or your ambitions to me directly.",
    dark: false,
  },
];

const PULL_QUOTE = "Homoeopathy works as nature's own law of cure. Our purpose at Amaltas is to train physicians who understand this principle in both depth and dignity — and who carry it with integrity into the communities they will serve.";

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity: inView ? 1 : 0,
  transform: inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left' ? 'translateX(-32px)'
    : dir === 'right' ? 'translateX(32px)'
    : 'translateY(28px)',
  transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function PrincipalMessageSection() {
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
        <img
          src="/campus/clinical-hall.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 45%',
            opacity: 0.18,
          }}
          draggable="false"
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(155deg, ${T.forest800}F2 0%, ${T.ink900}D5 100%)`,
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}13 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />
        {/* Decorative arcs — top right */}
        <div style={{ position: 'absolute', top: -90, right: -90, width: 400, height: 400, borderRadius: '50%', border: `1px solid ${T.gold600}1C`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -30, right: -30, width: 240, height: 240, borderRadius: '50%', border: `1px solid ${T.gold600}10`, pointerEvents: 'none' }} />
        {/* Bottom left arc */}
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 300, height: 300, borderRadius: '50%', border: `1px solid ${T.gold600}0D`, pointerEvents: 'none' }} />

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
                Principal's{' '}
                <em style={{ color: T.gold100, fontStyle: 'italic' }}>Message</em>
              </h1>
              <p
                className="mt-5 text-[17px] leading-relaxed max-w-xl"
                style={{ color: `${T.cream50}AA`, ...slide(heroInView, 0.2) }}
              >
                Dr. Yogendra Singh Bhadoria — Principal &amp; Medical Superintendent —
                on what homoeopathic medicine demands of its students, and what
                Amaltas promises to give them in return.
              </p>
              <div
                className="mt-7 flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase"
                style={{ ...MONO, color: `${T.gold100}77`, ...slide(heroInView, 0.28) }}
              >
                <span>Home</span>
                <span style={{ color: T.gold600 }}>›</span>
                <span>About</span>
                <span style={{ color: T.gold600 }}>›</span>
                <span style={{ color: T.gold100 }}>Principal's Message</span>
              </div>
            </div>

            {/* Portrait chip — desktop only */}
            <div
              className="hidden lg:flex lg:col-span-4 flex-col items-center text-center gap-4"
              style={slide(heroInView, 0.18, 'right')}
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
                  src="/leadership/principal.jpg"
                  alt="Dr. Yogendra Singh Bhadoria"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  draggable="false"
                />
              </div>
              <div>
                <div className="text-[18px] font-semibold" style={{ ...fontDisplay, color: '#FFFFFF' }}>
                  Dr. Yogendra Singh Bhadoria
                </div>
                <div className="mt-1 text-[11px] tracking-[0.18em] uppercase" style={{ ...MONO, color: T.gold100, opacity: 0.7 }}>
                  Principal &amp; Medical Superintendent
                </div>
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
                    src="/leadership/principal.jpg"
                    alt="Dr. Yogendra Singh Bhadoria, Principal"
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
                      Dr. Yogendra Singh Bhadoria
                    </div>
                    <div style={{ ...MONO, fontSize: 10, letterSpacing: '0.18em', color: T.gold100, textTransform: 'uppercase', opacity: 0.85 }}>
                      Principal &amp; Medical Superintendent
                    </div>
                  </div>
                </div>

                {/* Info badges */}
                <div className="mt-5 space-y-3">
                  {[
                    [GraduationCap, 'Principal & Medical Superintendent'],
                    [MapPin,        'Amaltas Institute, Dewas, M.P.'],
                    [FlaskConical,  'BHMS · Clinical Research · AYUSH'],
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
              {MESSAGE_PARAGRAPHS.map(({ heading, salutation, text, dark }, i) => (
                <div
                  key={i}
                  style={{
                    opacity: bodyInView ? 1 : 0,
                    transform: bodyInView ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.75s ease ${i * 0.07}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s`,
                  }}
                >
                  {salutation && (
                    <p
                      className="text-[17px] font-semibold mb-3"
                      style={{ ...fontDisplay, color: T.ink900, fontStyle: 'italic' }}
                    >
                      {salutation}
                    </p>
                  )}
                  {heading && (
                    <h3 className="text-[18px] font-semibold mb-3" style={{ ...fontDisplay, color: T.ink900 }}>
                      {heading}
                    </h3>
                  )}
                  <p className="text-[17px] leading-[1.9]" style={{ color: dark ? T.ink900 : T.muted500 }}>
                    {text}
                  </p>

                  {/* Pull quote after paragraph 3 (Holistic Learning) */}
                  {i === 3 && (
                    <div
                      className="mt-8 rounded-2xl p-7 flex gap-5"
                      style={{
                        background: `${T.forest800}F8`,
                        boxShadow: `0 12px 40px -8px ${T.ink900}28`,
                      }}
                    >
                      <Quote size={28} strokeWidth={1.4} className="flex-shrink-0 mt-1" style={{ color: T.gold600 }} />
                      <div>
                        <p
                          className="text-[17px] leading-[1.7] font-medium"
                          style={{ ...fontDisplay, color: '#FFFFFF', fontStyle: 'italic' }}
                        >
                          {PULL_QUOTE}
                        </p>
                        <div className="mt-3 text-[11px] tracking-[0.18em] uppercase" style={{ ...MONO, color: `${T.gold100}88` }}>
                          — Dr. Yogendra Singh Bhadoria, Principal
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

                {/* Stylised signature image if available, else styled name */}
                <div
                  className="text-[28px] sm:text-[34px] leading-tight font-semibold"
                  style={{ ...fontDisplay, color: T.forest800, fontStyle: 'italic' }}
                >
                  Dr. Yogendra Singh Bhadoria
                </div>

                <div className="mt-2 space-y-0.5">
                  <div className="text-[13px] font-semibold tracking-wide" style={{ color: T.ink900 }}>
                    Principal &amp; Medical Superintendent
                  </div>
                  <div className="text-[13px]" style={{ color: T.muted500 }}>
                    Amaltas Institute of Homoeopathy, Hospital &amp; Research Centre
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
          THREE PILLARS OF EDUCATION
      ═══════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}10`, borderBottom: `1px solid ${T.forest800}10` }}
      >
        <Container>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: BookOpen,
                heading: 'Academic Rigour',
                body: 'A curriculum built on depth — from preclinical sciences to advanced clinical homoeopathy — delivered by faculty with decades of specialised experience.',
              },
              {
                icon: Stethoscope,
                heading: 'Clinical Excellence',
                body: 'Daily OPD exposure, multi-speciality hospital training, and real patient responsibility that begins in the earliest clinical years.',
              },
              {
                icon: HeartHandshake,
                heading: 'Ethical Formation',
                body: 'Graduating not only knowledgeable physicians but compassionate human beings — with a strong sense of social responsibility and professional integrity.',
              },
            ].map(({ icon: Icon, heading, body }, i) => (
              <div
                key={heading}
                className="rounded-2xl p-7 flex flex-col items-center gap-4"
                style={{
                  background: T.cream50,
                  border: `1px solid ${T.ink900}0C`,
                  boxShadow: `0 4px 18px -4px ${T.ink900}07`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: T.gold100, color: T.forest800 }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-[16px] font-semibold" style={{ ...fontDisplay, color: T.ink900 }}>
                  {heading}
                </h3>
                <p className="text-[14px] leading-[1.8]" style={{ color: T.muted500 }}>
                  {body}
                </p>
              </div>
            ))}
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
        <div style={{ position: 'absolute', bottom: -140, left: -140, width: 480, height: 480, borderRadius: '50%', border: `1px solid ${T.gold600}16`, pointerEvents: 'none' }} />

        <Container className="relative text-center">
          <Eyebrow light>Amaltas Institute · Dewas</Eyebrow>
          <h2
            className="mt-5 text-[24px] sm:text-[30px] lg:text-[38px] leading-[1.25] font-semibold max-w-3xl mx-auto"
            style={{ ...fontDisplay, color: '#FFFFFF' }}
          >
            "Ask questions. Stay{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>curious</em>
            . Strive for{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>excellence</em>
            . The standard you set for yourself during these years will define the physician you become."
          </h2>
          <p className="mt-6 text-[14px] tracking-[0.14em] uppercase" style={{ ...MONO, color: `${T.cream50}55` }}>
            — Dr. Yogendra Singh Bhadoria, Principal
          </p>

          <div className="mt-12 flex items-center justify-center gap-10 sm:gap-16">
            {[
              [BookOpen,      'Knowledge'],
              [Stethoscope,   'Practice'],
              [HeartHandshake,'Compassion'],
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
