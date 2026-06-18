import React from 'react';
import {
  Eye, Target, BookOpen, FlaskConical,
  Leaf, Users, Star, Lightbulb, HeartHandshake,
  TrendingUp, Globe, CheckCircle2,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const VISION_ITEMS = [
  {
    icon: Star,
    tag: 'Vision I',
    heading: 'Excellence in Homoeopathic Education',
    body: [
      'Amaltas envisions a college that sets the benchmark for homoeopathic medical education in central India — a place where academic rigour, clinical depth, and a culture of scholarly inquiry converge to produce physicians of genuine distinction. We aspire to build graduates who do not merely pass examinations, but who carry the living science of homoeopathy forward with intellectual confidence and clinical mastery.',
      'The healthcare landscape is shifting — patient expectations are rising, multi-disciplinary approaches are becoming the norm, and evidence-based practice is no longer optional. Our vision is to equip every Amaltas graduate with the knowledge, adaptability, and professional foundation needed to lead within this evolving environment — as clinicians, researchers, educators, or community health advocates.',
    ],
  },
  {
    icon: Leaf,
    tag: 'Vision II',
    heading: 'Healing Society Through the Gentle Art',
    body: [
      'At the heart of homoeopathy lies a profound promise: that the human body, given the right constitutional similimum, possesses within it the capacity for complete and lasting recovery. Amaltas holds this principle not as a philosophical abstraction, but as a clinical reality it works to demonstrate every day — in its teaching hospital, in its health camps, and in every patient encounter its students and physicians undertake.',
      'Our vision is of a society healed gently — without the side-effect burden of allopathic intervention, without dependency, and without harm. The sweet pill is not a symbol of simplicity; it is the culmination of centuries of meticulous clinical observation, refined into a science of healing that is as relevant today as when Samuel Hahnemann first articulated it. We are committed to advancing this art and making its benefits permanently accessible to all, irrespective of social or economic standing.',
    ],
  },
];

const MISSION_PILLARS = [
  {
    icon: TrendingUp,
    title: 'Academic Leadership',
    body: 'To be a leading centre of excellence in teaching, learning, and scholarship — establishing Amaltas as the reference point for homoeopathic medical education in Madhya Pradesh and beyond.',
  },
  {
    icon: Leaf,
    title: 'Practical Homoeopathy',
    body: 'To promote a form of homoeopathy that is grounded in real therapeutic outcomes — integrating constitutional prescribing with lifestyle counselling and nature-based health approaches that patients can sustain.',
  },
  {
    icon: HeartHandshake,
    title: 'Affordable Quality Care',
    body: 'To demonstrate that quality and affordability are not opposites — building a healthcare model where clinical excellence is never rationed by economic circumstance, and every patient receives the same standard of personalised attention.',
  },
  {
    icon: BookOpen,
    title: 'Holistic Learning',
    body: 'To provide comprehensive, hands-on education that develops the complete physician — someone who understands anatomy, materia medica, and repertory as deeply as they understand the human being sitting across from them.',
  },
  {
    icon: FlaskConical,
    title: 'World-Class Research',
    body: 'To establish a research platform where students, faculty, and experienced practitioners collaborate to advance evidence-based homoeopathy — producing clinical scholarship that strengthens the credibility of the discipline globally.',
  },
  {
    icon: Globe,
    title: 'Public Health Education',
    body: 'To educate communities about the value, safety, and appropriate application of homoeopathy — empowering individuals to make informed choices about their health and well-being through awareness campaigns and outreach.',
  },
];

const CORE_VALUES = [
  { label: 'Integrity',      desc: 'Ethical practice in every clinical and academic decision' },
  { label: 'Compassion',     desc: 'Patient-centred care rooted in empathy and respect' },
  { label: 'Excellence',     desc: 'Uncompromising standards in education and healing' },
  { label: 'Accessibility',  desc: 'Healthcare and learning that reaches every stratum of society' },
  { label: 'Innovation',     desc: 'Evidence-informed advancement of homoeopathic science' },
];

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity: inView ? 1 : 0,
  transform: inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left'
      ? 'translateX(-32px)'
      : dir === 'right'
        ? 'translateX(32px)'
        : 'translateY(32px)',
  transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function VisionMissionSection() {
  const [heroRef,   heroInView]   = useInView(0.08);
  const [vis1Ref,   vis1InView]   = useInView(0.08);
  const [vis2Ref,   vis2InView]   = useInView(0.08);
  const [missionRef, missionInView] = useInView(0.06);
  const [pillRef,   pillInView]   = useInView(0.06);
  const [valRef,    valInView]    = useInView(0.08);
  const [closeRef,  closeInView]  = useInView(0.08);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 420, background: T.ink900 }}
      >
        {/* Campus image */}
        <img
          src="/campus/teaching.png"
          alt="Amaltas Institute teaching"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 35%',
            opacity: 0.2,
          }}
          draggable="false"
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(150deg, ${T.ink900}F0 0%, ${T.forest800}CC 100%)`,
          }}
        />

        {/* Dot texture */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}16 1.5px, transparent 1.5px)`,
            backgroundSize: '38px 38px',
            pointerEvents: 'none',
          }}
        />

        {/* Gold arc accent — top right */}
        <div
          style={{
            position: 'absolute', top: -120, right: -120,
            width: 480, height: 480,
            borderRadius: '50%',
            border: `1px solid ${T.gold600}22`,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute', top: -60, right: -60,
            width: 320, height: 320,
            borderRadius: '50%',
            border: `1px solid ${T.gold600}14`,
            pointerEvents: 'none',
          }}
        />

        <Container className="relative flex flex-col items-center justify-center text-center py-24 lg:py-32">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}>
              <Eyebrow light>About the Institution</Eyebrow>
            </div>
            <h1
              className="mt-5 text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.12) }}
            >
              Our{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Vision</em>
              {' '}&{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Mission</em>
            </h1>
            <p
              className="mt-6 text-[17px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.22) }}
            >
              The principles that guide every decision at Amaltas — from the curriculum
              we teach and the research we publish, to the communities we serve and the
              patients we treat.
            </p>

            {/* Breadcrumb */}
            <div
              className="mt-8 flex items-center justify-center gap-2 text-[12px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}88`, ...slide(heroInView, 0.3) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>About</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Vision &amp; Mission</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION INTRO — Vision overview
      ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: T.cream50 }}>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Our Vision</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.12] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              A future built on the{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>science of similars</em>
            </h2>
            <p
              className="mt-5 text-[17px] leading-[1.85]"
              style={{ color: T.muted500 }}
            >
              Amaltas is guided by two interconnected visions — one that looks inward
              to the college itself, and one that looks outward to the society it serves.
              Together they define not what we are today, but what we are committed to becoming.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          VISION I
      ═══════════════════════════════════════════════ */}
      <section
        style={{
          background: `${T.forest800}06`,
          borderTop: `1px solid ${T.forest800}10`,
        }}
      >
        <Container className="py-20 lg:py-28">
          <div ref={vis1Ref} className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Icon + tag block */}
            <div className="lg:col-span-4" style={slide(vis1InView, 0, 'left')}>
              <div
                className="rounded-3xl p-10 flex flex-col items-center text-center gap-5"
                style={{
                  background: T.forest800,
                  boxShadow: `0 24px 56px -12px ${T.ink900}30`,
                }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}
                >
                  <Star size={36} strokeWidth={1.4} style={{ color: T.gold100 }} />
                </div>
                <div>
                  <div
                    className="text-[11px] tracking-[0.22em] uppercase mb-2"
                    style={{ ...MONO, color: `${T.cream50}66` }}
                  >
                    Vision I
                  </div>
                  <div
                    className="text-[20px] font-semibold leading-tight"
                    style={{ ...fontDisplay, color: T.cream50 }}
                  >
                    Excellence in Education
                  </div>
                </div>
                {/* Small accent rule */}
                <div
                  className="w-12 h-px"
                  style={{ background: `${T.gold600}60` }}
                />
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: `${T.cream50}88` }}
                >
                  Training physicians who meet the future with knowledge, adaptability,
                  and a deep mastery of homoeopathic science.
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-8 space-y-5 text-[17px] leading-[1.85]" style={slide(vis1InView, 0.14)}>
              {VISION_ITEMS[0].body.map((para, i) => (
                <p key={i} style={{ color: i === 0 ? T.ink900 : T.muted500 }}>{para}</p>
              ))}
              {/* Callout */}
              <div
                className="mt-6 rounded-2xl p-5 flex items-start gap-4"
                style={{
                  background: `${T.gold600}0C`,
                  border: `1px solid ${T.gold600}28`,
                }}
              >
                <Lightbulb size={20} strokeWidth={1.8} className="flex-shrink-0 mt-0.5" style={{ color: T.gold700 }} />
                <p className="text-[15px] leading-relaxed font-medium" style={{ color: T.ink900 }}>
                  "To develop the college with excellence in Homoeopathic Medical education and
                  to train the students for facing future challenges of the health care system."
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          VISION II
      ═══════════════════════════════════════════════ */}
      <section style={{ background: T.cream50 }}>
        <Container className="py-20 lg:py-28">
          <div ref={vis2Ref} className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Text — right col on desktop, first on mobile */}
            <div className="lg:col-span-8 lg:order-1 space-y-5 text-[17px] leading-[1.85]" style={slide(vis2InView, 0)}>
              {VISION_ITEMS[1].body.map((para, i) => (
                <p key={i} style={{ color: i === 0 ? T.ink900 : T.muted500 }}>{para}</p>
              ))}
              {/* Callout */}
              <div
                className="mt-6 rounded-2xl p-5 flex items-start gap-4"
                style={{
                  background: `${T.forest800}0A`,
                  border: `1px solid ${T.forest800}1A`,
                }}
              >
                <Leaf size={20} strokeWidth={1.8} className="flex-shrink-0 mt-0.5" style={{ color: T.forest800 }} />
                <p className="text-[15px] leading-relaxed font-medium" style={{ color: T.ink900 }}>
                  "To heal the society with gentle care and permanent annihilation of disease
                  with sweet pills — a healing that is complete, lasting, and without harm."
                </p>
              </div>
            </div>

            {/* Icon + tag block — left col on desktop */}
            <div className="lg:col-span-4 lg:order-2" style={slide(vis2InView, 0.14, 'right')}>
              <div
                className="rounded-3xl p-10 flex flex-col items-center text-center gap-5"
                style={{
                  background: `${T.gold700}F0`,
                  boxShadow: `0 24px 56px -12px ${T.gold700}38`,
                }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}
                >
                  <Leaf size={36} strokeWidth={1.4} style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <div
                    className="text-[11px] tracking-[0.22em] uppercase mb-2"
                    style={{ ...MONO, color: 'rgba(255,255,255,0.55)' }}
                  >
                    Vision II
                  </div>
                  <div
                    className="text-[20px] font-semibold leading-tight"
                    style={{ ...fontDisplay, color: '#FFFFFF' }}
                  >
                    Healing Through Nature
                  </div>
                </div>
                <div
                  className="w-12 h-px"
                  style={{ background: 'rgba(255,255,255,0.35)' }}
                />
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  A society healed gently — permanent, safe, and accessible to every
                  patient regardless of circumstance.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          MISSION INTRO BANNER
      ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: T.forest800 }}>
        <Container>
          <div ref={missionRef} className="max-w-3xl mx-auto text-center space-y-5">
            <div style={slide(missionInView, 0)}>
              <Eyebrow light>Our Mission</Eyebrow>
            </div>
            <h2
              className="text-[30px] lg:text-[44px] leading-[1.12] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(missionInView, 0.1) }}
            >
              A living commitment to medicine,{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>community</em>
              {' '}and{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>science</em>
            </h2>
            <p
              className="text-[17px] leading-[1.85]"
              style={{ color: `${T.cream50}AA`, ...slide(missionInView, 0.2) }}
            >
              Our mission is to be a leading centre of excellence in teaching, learning,
              research, and scholarship in the field of Homoeopathic Medicine — for a better
              tomorrow. We promote practical homoeopathy backed by therapeutic application
              and a lifestyle approach rooted in nature. We aim for quality over quantity,
              and affordable healthcare that reaches every corner of society.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          MISSION PILLARS GRID
      ═══════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-28"
        style={{ background: T.cream50 }}
      >
        <Container>
          <div ref={pillRef} className="text-center mb-14" style={slide(pillInView, 0)}>
            <Eyebrow>Six Mission Pillars</Eyebrow>
            <h2
              className="mt-4 text-[30px] lg:text-[42px] leading-[1.12] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              What we are committed to{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>achieving</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MISSION_PILLARS.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="group rounded-2xl p-7 flex flex-col gap-5 transition-shadow duration-300"
                style={{
                  background: T.cream50,
                  border: `1px solid ${T.ink900}0E`,
                  boxShadow: `0 4px 18px -4px ${T.ink900}08`,
                  opacity: pillInView ? 1 : 0,
                  transform: pillInView ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.7s ease ${0.08 + i * 0.09}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${0.08 + i * 0.09}s, box-shadow 0.3s ease`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 12px 36px -8px ${T.ink900}16`;
                  e.currentTarget.style.borderColor = `${T.gold600}40`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = `0 4px 18px -4px ${T.ink900}08`;
                  e.currentTarget.style.borderColor = `${T.ink900}0E`;
                }}
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: T.gold100, color: T.forest800 }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <span
                    style={{ ...MONO, fontSize: 11, color: `${T.ink900}30`, letterSpacing: '0.1em' }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <div>
                  <h3
                    className="text-[16px] font-semibold mb-2 leading-snug"
                    style={{ ...fontDisplay, color: T.ink900 }}
                  >
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[1.8]" style={{ color: T.muted500 }}>
                    {body}
                  </p>
                </div>

                {/* Bottom accent line — grows on hover */}
                <div
                  className="mt-auto h-px w-8 group-hover:w-full transition-all duration-500"
                  style={{ background: T.gold600 }}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          CORE VALUES STRIP
      ═══════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-20"
        style={{
          background: `${T.forest800}08`,
          borderTop: `1px solid ${T.forest800}10`,
          borderBottom: `1px solid ${T.forest800}10`,
        }}
      >
        <Container>
          <div ref={valRef} className="text-center mb-12" style={slide(valInView, 0)}>
            <Eyebrow>Core Values</Eyebrow>
            <h2
              className="mt-3 text-[26px] lg:text-[36px] leading-[1.15] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              The principles behind every{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>decision we make</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {CORE_VALUES.map(({ label, desc }, i) => (
              <div
                key={label}
                className="rounded-2xl p-6 text-center flex flex-col items-center gap-3"
                style={{
                  background: T.cream50,
                  border: `1px solid ${T.ink900}0C`,
                  opacity: valInView ? 1 : 0,
                  transform: valInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.65s ease ${i * 0.08}s, transform 0.65s ease ${i * 0.08}s`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${T.gold600}15`, border: `1.5px solid ${T.gold600}35` }}
                >
                  <CheckCircle2 size={16} strokeWidth={2} style={{ color: T.gold700 }} />
                </div>
                <div
                  className="text-[15px] font-semibold"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  {label}
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: T.muted500 }}>
                  {desc}
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
        ref={closeRef}
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: T.forest800 }}
      >
        {/* Dot texture */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}14 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />

        {/* Large decorative circle */}
        <div
          style={{
            position: 'absolute', bottom: -160, left: -160,
            width: 500, height: 500,
            borderRadius: '50%',
            border: `1px solid ${T.gold600}18`,
            pointerEvents: 'none',
          }}
        />

        <Container className="relative text-center">
          <div style={slide(closeInView, 0)}>
            <Eyebrow light>Our Collective Commitment</Eyebrow>
          </div>

          <blockquote
            className="mt-6 text-[24px] sm:text-[30px] lg:text-[38px] leading-[1.3] font-semibold max-w-4xl mx-auto"
            style={{ ...fontDisplay, color: '#FFFFFF', ...slide(closeInView, 0.12) }}
          >
            "We are committed to providing{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>holistic and practical</em>
            {' '}learning opportunities to our budding homoeopaths, and to educating
            communities about the{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>value and appropriate use</em>
            {' '}of homoeopathy for the improvement of health and well-being."
          </blockquote>

          <p
            className="mt-8 text-[15px] leading-relaxed max-w-xl mx-auto"
            style={{ color: `${T.cream50}88`, ...slide(closeInView, 0.22) }}
          >
            Vision and Mission — Amaltas Institute of Homoeopathy, Hospital &amp; Research Centre,
            Bangar, Dewas, Madhya Pradesh.
          </p>

          {/* Icon trio */}
          <div
            className="mt-12 flex items-center justify-center gap-8 sm:gap-14"
            style={slide(closeInView, 0.3)}
          >
            {[
              [Eye,    'Visionary'],
              [Target, 'Mission-driven'],
              [Users,  'Community-first'],
            ].map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}
                >
                  <Icon size={20} strokeWidth={1.6} style={{ color: T.gold100 }} />
                </div>
                <span
                  style={{ ...MONO, fontSize: 11, letterSpacing: '0.16em', color: `${T.cream50}77`, textTransform: 'uppercase' }}
                >
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
