import React from 'react';
import { GraduationCap, Stethoscope, BookOpen, ShieldCheck } from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const FEATURES = [
  [GraduationCap, 'BHMS Degree Programme'],
  [Stethoscope,   'In-house Teaching Hospital'],
  [BookOpen,      'Research-aligned Curriculum'],
  [ShieldCheck,   'NCH-regulated Standards'],
];

const AboutInstitution = () => {
  const [leftRef,   leftInView]   = useInView(0.1);
  const [rightRef,  rightInView]  = useInView(0.1);
  const [photosRef, photosInView] = useInView(0.12);

  const slide = (inView, delay = 0, direction = 'up') => ({
    opacity:    inView ? 1 : 0,
    transform:  inView ? 'translateY(0) translateX(0)' : direction === 'left' ? 'translateX(-36px)' : 'translateY(36px)',
    transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section id="about" className="py-24 lg:py-32 overflow-hidden" style={{ background: T.cream50 }}>
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ── LEFT ── */}
          <div ref={leftRef} className="lg:col-span-5">
            <div style={slide(leftInView, 0, 'left')}>
              <Eyebrow>About the Institution</Eyebrow>
              <h2
                className="mt-5 text-[36px] lg:text-[48px] leading-[1.1] tracking-tight font-semibold"
                style={{ ...fontDisplay, color: T.ink900 }}
              >
                Where the{' '}
                <em style={{ color: T.gold700, fontStyle: 'italic' }}>law of similars</em>
                {' '}meets modern clinical practice.
              </h2>
            </div>

            {/* Hexagonal campus photo */}
            <div
              style={{
                ...slide(leftInView, 0.18, 'left'),
                marginTop: 36,
                position:  'relative',
                width:     '100%',
                aspectRatio: '5 / 4',
              }}
            >
              <div
                data-cursor="image"
                style={{
                  width:    '100%',
                  height:   '100%',
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src="/campus/homoepathy.png "
                  alt="Aerial view of the Amaltas Institute campus"
                  style={{
                    
                  }}
                  draggable="false"
                />
                {/* Subtle dark vignette inside the hexagon */}
                <div
                  style={{
                    position:   'absolute',
                    inset:      0,
                    background: 'linear-gradient(to bottom, rgba(13,31,24,0.15) 0%, rgba(13,31,24,0.45) 100%)',
                    pointerEvents: 'none',
                  }}
                />
                {/* Label */}
                <div
                  style={{
                    position:      'absolute',
                    bottom:        28,
                    left:          0,
                    right:         0,
                    textAlign:     'center',
                    ...MONO,
                    fontSize:      10,
                    letterSpacing: '0.2em',
                    color:         T.gold100,
                    opacity:       0.85,
                    textTransform: 'uppercase',
                  }}
                >
                  Amaltas Campus · Dewas, M.P.
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div
            ref={rightRef}
            className="lg:col-span-7 space-y-6 text-[18px] leading-[1.85]"
          >
            <div style={slide(rightInView, 0.1)}>
              <p style={{ color: T.ink900 }}>
                Homoeopathy is a science of dynamised micro-immunology based on the law of
                analogy — a system recognised internationally and practised in India under the
                Homoeopathy Central Council Act, 1973. At Amaltas, our students engage with
                this lineage from day one through structured coursework, cadaveric and clinical
                exposure, and a teaching hospital where theory meets the patient.
              </p>
            </div>

            <div style={slide(rightInView, 0.2)}>
              <p style={{ color: T.muted500 }}>
                We sit within the wider Amaltas Group campus in Dewas, Madhya Pradesh —
                sharing infrastructure with sister institutions of medical, nursing, ayurvedic
                and paramedical sciences. The result is a multidisciplinary learning environment
                uncommon for a homoeopathy college.
              </p>
            </div>

            {/* Accreditation callout */}
            <div style={slide(rightInView, 0.3)}>
              <div
                className="flex items-start gap-4 rounded-2xl p-5"
                style={{
                  background: `${T.forest800}0A`,
                  border:     `1px solid ${T.forest800}18`,
                }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-[10px] font-bold text-center leading-tight"
                  style={{
                    background: `${T.gold600}15`,
                    border:     `1.5px solid ${T.gold600}40`,
                    color:      T.gold700,
                    ...MONO,
                  }}
                >
                  CCH
                </div>
                <div>
                  <div className="text-[15px] font-semibold" style={{ color: T.ink900 }}>
                    Recognised by the National Commission for Homoeopathy, New Delhi
                  </div>
                  <div className="text-[15px] mt-0.5 leading-relaxed" style={{ color: T.muted500 }}>
                    Government of India, Ministry of AYUSH — ensuring our BHMS programme
                    meets the highest national academic and clinical standards.
                  </div>
                </div>
              </div>
            </div>

            {/* Feature grid */}
            <div className="pt-2 grid grid-cols-2 gap-x-8 gap-y-4">
              {FEATURES.map(([Icon, label], i) => (
                <div
                  key={label}
                  className="flex items-center gap-3"
                  style={{
                    opacity:    rightInView ? 1 : 0,
                    transform:  rightInView ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.6s ease ${0.38 + i * 0.1}s, transform 0.6s ease ${0.38 + i * 0.1}s`,
                  }}
                >
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: T.gold100, color: T.forest800 }}
                  >
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span className="text-[14px] font-medium" style={{ color: T.ink900 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Student life photo strip ── */}
        <div
          ref={photosRef}
          className="mt-16 grid sm:grid-cols-2 gap-5"
        >
          {[
            {
              src:     '/campus/experiment.png',
              alt:     'Students studying medical literature at Amaltas Institute',
              caption: 'Academic depth — students engage with clinical literature',
              delay:   0,
            },
            {
              src:     '/campus/students.JPG',
              alt:     'Students at the nursing station',
              caption: 'Clinical practice — hands-on hospital training from year one',
              delay:   0.14,
            },
          ].map(({ src, alt, caption, delay }) => (
            <div
              key={src}
              data-cursor="image"
              style={{
                opacity:    photosInView ? 1 : 0,
                transform:  photosInView ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
                borderRadius: 20,
                overflow:   'hidden',
                position:   'relative',
                aspectRatio: '3 / 2',
              }}
            >
              <img
                src={src}
                alt={alt}
                style={{
                  width:          '100%',
                  height:         '100%',
                  objectFit:      'cover',
                  objectPosition: 'center top',
                  display:        'block',
                  transition:     'transform 0.7s ease',
                }}
                draggable="false"
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
              {/* Caption overlay */}
              <div
                style={{
                  position:   'absolute',
                  bottom:     0,
                  left:       0,
                  right:      0,
                  padding:    '28px 20px 16px',
                  background: 'linear-gradient(to top, rgba(13,31,24,0.82) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              >
                <p
                  style={{
                    ...MONO,
                    fontSize:      11,
                    letterSpacing: '0.14em',
                    color:         `${T.cream50}CC`,
                    textTransform: 'uppercase',
                    margin:        0,
                  }}
                >
                  {caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default AboutInstitution;
