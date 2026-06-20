import React from 'react';
import {
  Heart, Shield, GraduationCap, Users,
  CheckCircle2, MapPin, Leaf, FlaskConical, Stethoscope,
} from 'lucide-react';
import { T, fontDisplay, fontBody } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };
//hello test
const PILLARS = [
  {
    icon: Heart,
    title: 'Curative Medicine',
    body: 'Classical homoeopathic consultation and treatment for acute and chronic conditions, delivered through our in-house teaching hospital by experienced faculty physicians practising the law of similars with rigour and compassion.',
  },
  {
    icon: Shield,
    title: 'Preventive Healthcare',
    body: 'Regular health camps, immunisation awareness drives, and community screenings that bring essential medical care to populations across Dewas and Ujjain who have historically had limited access to routine healthcare services.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    body: 'A rigorous five-and-a-half year BHMS curriculum aligned with National Commission for Homoeopathy standards — integrating anatomy, physiology, materia medica, repertory, and live clinical practicum from the very first year.',
  },
  {
    icon: Users,
    title: 'Rural Upliftment',
    body: 'Structured outreach programmes that serve rural and semi-urban communities — providing free consultations, subsidised medicines, and health literacy education in underserved villages across two districts of Madhya Pradesh.',
  },
];

const HIGHLIGHTS = [
  'Recognised by the National Commission for Homoeopathy (NCH), New Delhi',
  'Affiliated with Madhya Pradesh Medical Science University, Jabalpur',
  'Teaching hospital with daily OPD and multi-speciality clinics',
  'Housed within the multidisciplinary Amaltas Group campus, Dewas',
  'Regular free health camps across Dewas and Ujjain districts',
  'Active research cell promoting evidence-based homoeopathic practice',
];

const STATS = [
  { value: '2020', label: 'Year Founded' },
  { value: '2', label: 'Districts Served' },
  { value: '50+', label: 'Health Camps' },
  { value: '10,000+', label: 'Patients Treated' },
];

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity:    inView ? 1 : 0,
  transform:  inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left'
      ? 'translateX(-32px)'
      : dir === 'right'
        ? 'translateX(32px)'
        : 'translateY(32px)',
  transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

export default function AboutInstitutionSection() {
  const [heroRef,   heroInView]   = useInView(0.08);
  const [storyRef,  storyInView]  = useInView(0.08);
  const [pillRef,   pillInView]   = useInView(0.06);
  const [statsRef,  statsInView]  = useInView(0.1);
  const [campRef,   campInView]   = useInView(0.08);
  const [commitRef, commitInView] = useInView(0.08);
  const [closeRef,  closeInView]  = useInView(0.08);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 420, background: T.forest800 }}
      >
        {/* Campus image */}
        <img
          src="/campus/homoepathy.png"
          alt="Amaltas Institute campus"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 40%',
            opacity: 0.28,
          }}
          draggable="false"
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${T.forest800}EE 0%, ${T.ink900}BB 100%)`,
          }}
        />

        {/* Botanical texture dots */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}18 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
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
              A Centre of Healing,{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Learning</em>
              {' '}&{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Service</em>
            </h1>
            <p
              className="mt-6 text-[17px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: `${T.cream50}BB`, ...slide(heroInView, 0.22) }}
            >
              Established in 2020 in Bangar, Dewas — Amaltas Institute of Homoeopathy,
              Hospital and Research Centre is dedicated to the holistic advancement of
              homoeopathic medicine, education, and community health in Madhya Pradesh.
            </p>

            {/* Breadcrumb */}
            <div
              className="mt-8 flex items-center justify-center gap-2 text-[12px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}99`, ...slide(heroInView, 0.3) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span>About</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>The Institution</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          FOUNDING STORY
      ═══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" style={{ background: T.cream50 }}>
        <Container>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">

            {/* Text column */}
            <div ref={storyRef} className="lg:col-span-6 space-y-6">
              <div style={slide(storyInView, 0)}>
                <Eyebrow>Our Founding</Eyebrow>
                <h2
                  className="mt-4 text-[34px] lg:text-[46px] leading-[1.1] tracking-tight font-semibold"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  Born from a vision of{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>accessible</em>,
                  ethical healing
                </h2>
              </div>

              <div style={slide(storyInView, 0.12)} className="space-y-5 text-[17px] leading-[1.85]">
                <p style={{ color: T.ink900 }}>
                  Amaltas Institute of Homoeopathy, Hospital and Research Centre was established
                  in 2020 in Bangar, Dewas — founded on the conviction that quality homoeopathic
                  healthcare and education should not remain the privilege of a few. The institute
                  was conceived as a living bridge between the depth of classical homoeopathic
                  science and the realities of rural and semi-urban India.
                </p>
                <p style={{ color: T.muted500 }}>
                  Situated within the broader Amaltas Group campus — a multidisciplinary hub that
                  also houses medical, nursing, ayurvedic and paramedical institutions — our college
                  benefits from shared infrastructure, interdisciplinary collaboration, and a
                  campus culture that places patient care at its centre. This unique environment
                  gives homoeopathy students exposure that few standalone colleges can offer.
                </p>
                <p style={{ color: T.muted500 }}>
                  From its inception, the institute has pursued a dual mandate: to train the next
                  generation of skilled, compassionate homoeopathic physicians, and to directly
                  serve the communities of Dewas and Ujjain — a region where access to specialist
                  care has long been limited. Both mandates are treated with equal seriousness.
                </p>
              </div>

              {/* Location callout */}
              <div style={slide(storyInView, 0.24)}>
                <div
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full text-[13px] font-medium"
                  style={{
                    background: `${T.forest800}0D`,
                    border: `1px solid ${T.forest800}20`,
                    color: T.forest800,
                    ...MONO,
                    letterSpacing: '0.06em',
                  }}
                >
                  <MapPin size={14} strokeWidth={2.2} style={{ color: T.gold700, flexShrink: 0 }} />
                  Bangar, Dewas · Madhya Pradesh · Est. 2020
                </div>
              </div>
            </div>

            {/* Image column */}
            <div className="lg:col-span-6" style={slide(storyInView, 0.18, 'right')}>
              <div
                data-cursor="image"
                style={{
                  borderRadius: 24,
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  position: 'relative',
                  boxShadow: `0 24px 60px -12px ${T.ink900}28`,
                }}
              >
                <img
                  src="/campus/homoepathy.png"
                  alt="Amaltas Institute building"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    transition: 'transform 0.7s ease',
                  }}
                  draggable="false"
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                {/* Bottom caption */}
                <div
                  style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '32px 24px 18px',
                    background: 'linear-gradient(to top, rgba(13,31,24,0.78) 0%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                >
                  <p style={{ ...MONO, fontSize: 11, letterSpacing: '0.16em', color: `${T.cream50}CC`, textTransform: 'uppercase', margin: 0 }}>
                    Amaltas Institute · Dewas Campus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          FOUR PILLARS
      ═══════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-28"
        style={{ background: `${T.forest800}07`, borderTop: `1px solid ${T.forest800}0F`, borderBottom: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={pillRef} className="text-center mb-14" style={slide(pillInView, 0)}>
            <Eyebrow>What We Stand For</Eyebrow>
            <h2
              className="mt-4 text-[32px] lg:text-[44px] leading-[1.12] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Four pillars of our{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>institutional mission</em>
            </h2>
            <p
              className="mt-4 text-[16px] leading-relaxed max-w-xl mx-auto"
              style={{ color: T.muted500 }}
            >
              Every decision at Amaltas — academic, clinical, and communal — is guided by
              the same four commitments that shaped our founding.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: T.cream50,
                  border: `1px solid ${T.ink900}0E`,
                  boxShadow: `0 4px 20px -4px ${T.ink900}08`,
                  opacity: pillInView ? 1 : 0,
                  transform: pillInView ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: T.gold100, color: T.forest800 }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3
                    className="text-[16px] font-semibold mb-2"
                    style={{ ...fontDisplay, color: T.ink900 }}
                  >
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[1.75]" style={{ color: T.muted500 }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          IMPACT STATS STRIP
      ═══════════════════════════════════════════════ */}
      <section className="py-16" style={{ background: T.forest800 }}>
        <Container>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center">
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                style={{
                  opacity: statsInView ? 1 : 0,
                  transform: statsInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.65s ease ${i * 0.1}s, transform 0.65s ease ${i * 0.1}s`,
                }}
              >
                <div
                  className="text-[42px] lg:text-[52px] font-semibold leading-none"
                  style={{ ...fontDisplay, color: T.gold100 }}
                >
                  {value}
                </div>
                <div
                  className="mt-2 text-[12px] tracking-[0.18em] uppercase"
                  style={{ ...MONO, color: `${T.cream50}88` }}
                >
                  {label}
                </div>
                {i < STATS.length - 1 && (
                  <div
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8"
                    style={{ background: `${T.cream50}18` }}
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          HEALTH CAMPS & COMMUNITY WORK
      ═══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" style={{ background: T.cream50 }}>
        <Container>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

            {/* Image */}
            <div className="lg:col-span-5" style={slide(campInView, 0, 'left')}>
              <div
                data-cursor="image"
                style={{
                  borderRadius: 20, overflow: 'hidden',
                  aspectRatio: '3 / 4',
                  position: 'relative',
                  boxShadow: `0 20px 50px -10px ${T.ink900}24`,
                }}
              >
                <img
                  src="/campus/students.JPG"
                  alt="Students providing community healthcare"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
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
                    background: 'linear-gradient(to top, rgba(13,31,24,0.82) 0%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                >
                  <p style={{ ...MONO, fontSize: 10, letterSpacing: '0.16em', color: `${T.cream50}CC`, textTransform: 'uppercase', margin: 0 }}>
                    Clinical training — Teaching Hospital, Amaltas
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div ref={campRef} className="lg:col-span-7 space-y-6">
              <div style={slide(campInView, 0.1)}>
                <Eyebrow>Community Health Initiatives</Eyebrow>
                <h2
                  className="mt-4 text-[32px] lg:text-[44px] leading-[1.12] tracking-tight font-semibold"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  Taking homoeopathy to the{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>doorstep</em>
                  {' '}of those who need it most
                </h2>
              </div>

              <div className="space-y-5 text-[17px] leading-[1.85]" style={slide(campInView, 0.2)}>
                <p style={{ color: T.ink900 }}>
                  The institute conducts regular health camps across the Dewas and Ujjain
                  districts — extending homoeopathic care beyond the hospital walls into
                  villages, slums, and rural clusters where specialist consultation is otherwise
                  out of reach. These camps are not token outreach events; they are systematic,
                  faculty-led programmes that provide diagnosis, free consultation, and free
                  medicines to all attendees.
                </p>
                <p style={{ color: T.muted500 }}>
                  Topics covered include infectious disease prevention, maternal and child health,
                  nutrition counselling, seasonal epidemic management, and mental well-being. In
                  each camp, senior physicians and final-year students work side by side — creating
                  a learning environment that bridges the classroom and the community in a single
                  encounter.
                </p>
                <p style={{ color: T.muted500 }}>
                  This work reflects a core belief: that the measure of a medical institution
                  is not only the quality of its graduates, but the health of the communities
                  it inhabits. Amaltas treats both as institutional responsibilities of equal weight.
                </p>
              </div>

              {/* Highlights list */}
              <div className="pt-2 space-y-3" style={slide(campInView, 0.3)}>
                {HIGHLIGHTS.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-[14px] leading-relaxed"
                    style={{ color: T.ink900 }}
                  >
                    <CheckCircle2
                      size={17}
                      strokeWidth={2}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: T.gold700 }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          QUALITY & COMMITMENT SECTION
      ═══════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-28"
        style={{ background: `${T.forest800}09`, borderTop: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            <div ref={commitRef} className="lg:col-span-7 space-y-6">
              <div style={slide(commitInView, 0)}>
                <Eyebrow>Our Commitment to Care</Eyebrow>
                <h2
                  className="mt-4 text-[32px] lg:text-[44px] leading-[1.12] tracking-tight font-semibold"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  Quality and personalised care — not as a{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>standard</em>, but as a principle
                </h2>
              </div>

              <div className="space-y-5 text-[17px] leading-[1.85]" style={slide(commitInView, 0.14)}>
                <p style={{ color: T.ink900 }}>
                  At the heart of homoeopathy lies the principle of individualisation — no two
                  patients are treated alike, because no two patients are alike. Amaltas upholds
                  this principle not merely as a clinical technique but as an institutional
                  commitment. Every patient seen at our teaching hospital receives a thorough,
                  unhurried consultation, and treatment tailored to their unique constitutional picture.
                </p>
                <p style={{ color: T.muted500 }}>
                  Our teaching hospital functions as a genuine community healthcare facility —
                  not simply as a training ground. Patients access multi-speciality clinics in
                  areas including paediatrics, gynaecology, dermatology, and respiratory
                  medicine, each staffed by qualified homoeopathic physicians with specialist
                  clinical experience.
                </p>
                <p style={{ color: T.muted500 }}>
                  By ensuring that students learn their craft within an environment of
                  real clinical responsibility, Amaltas produces graduates who are not only
                  academically proficient but instinctively patient-centred — physicians capable
                  of contributing meaningfully to India's public health goals through the
                  practice of homoeopathy.
                </p>
              </div>
            </div>

            {/* Accreditation card */}
            <div className="lg:col-span-5 space-y-5" style={slide(commitInView, 0.22, 'right')}>
              {[
                {
                  label: 'NCH',
                  title: 'National Commission for Homoeopathy',
                  body: 'Recognised by the NCH, New Delhi, under the Ministry of AYUSH, Government of India — ensuring our BHMS programme meets the highest national academic and clinical standards.',
                },
                {
                  label: 'MPMSU',
                  title: 'MP Medical Science University',
                  body: 'Affiliated with Madhya Pradesh Medical Science University, Jabalpur — the degree-granting authority for all BHMS students enrolled at Amaltas.',
                },
                {
                  label: 'RES',
                  title: 'Research Cell',
                  body: 'An active research environment that encourages faculty and students to contribute to the growing body of evidence-based homoeopathic literature.',
                },
              ].map(({ label, title, body }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl p-5"
                  style={{
                    background: T.cream50,
                    border: `1px solid ${T.ink900}0E`,
                    boxShadow: `0 4px 16px -4px ${T.ink900}08`,
                  }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-[9px] font-bold text-center leading-tight"
                    style={{
                      background: `${T.gold600}15`,
                      border: `1.5px solid ${T.gold600}40`,
                      color: T.gold700,
                      ...MONO,
                    }}
                  >
                    {label}
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold mb-1" style={{ color: T.ink900 }}>
                      {title}
                    </div>
                    <div className="text-[13px] leading-relaxed" style={{ color: T.muted500 }}>
                      {body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          CLOSING MANIFESTO — dark
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

        <Container className="relative text-center">
          <div style={slide(closeInView, 0)}>
            <Eyebrow light>Our Purpose</Eyebrow>
          </div>
          <blockquote
            className="mt-6 text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.25] font-semibold max-w-3xl mx-auto"
            style={{ ...fontDisplay, color: '#FFFFFF', ...slide(closeInView, 0.12) }}
          >
            "We are dedicated to promoting the{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>best healthcare</em>
            {' '}— ensuring quality, personalised attention to every patient, and contributing
            to{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>nation building</em>
            {' '}through homoeopathy."
          </blockquote>
          <p
            className="mt-8 text-[15px] leading-relaxed max-w-xl mx-auto"
            style={{ color: `${T.cream50}99`, ...slide(closeInView, 0.22) }}
          >
            Amaltas Institute — serving Dewas, Ujjain, and beyond since 2020.
          </p>

          {/* Three icon row */}
          <div
            className="mt-12 flex items-center justify-center gap-8 sm:gap-14"
            style={slide(closeInView, 0.3)}
          >
            {[
              [Leaf, 'Holistic'],
              [Stethoscope, 'Clinical'],
              [FlaskConical, 'Evidence-based'],
            ].map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: `${T.gold100}18`, border: `1px solid ${T.gold100}30` }}
                >
                  <Icon size={20} strokeWidth={1.6} style={{ color: T.gold100 }} />
                </div>
                <span
                  style={{ ...MONO, fontSize: 11, letterSpacing: '0.16em', color: `${T.cream50}88`, textTransform: 'uppercase' }}
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
