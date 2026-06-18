import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Package } from 'lucide-react';
import { T, fontDisplay, fontBody } from '../styles/tokens';
import { DEPARTMENTS } from '../components/home/Departments';
import { DEPARTMENT_DETAILS } from '../data/departmentDetails';
import FontLoader    from '../components/ui/FontLoader';
import CustomCursor  from '../components/ui/CustomCursor';
import TopUtilityBar from '../components/layout/TopUtilityBar';
import Navbar        from '../components/layout/Navbar';
import Footer        from '../components/layout/Footer';
import Container     from '../components/ui/Container';
import Eyebrow       from '../components/ui/Eyebrow';
import useInView     from '../hooks/useInView';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

// ─── Stat chip ────────────────────────────────────────────────────────
const StatChip = ({ label, value }) => (
  <div
    className="flex flex-col items-center justify-center px-6 py-5"
    style={{
      background:   `${T.gold600}12`,
      border:       `1px solid ${T.gold600}35`,
      borderRadius: 16,
      minWidth:     110,
    }}
  >
    <span style={{ ...fontDisplay, fontSize: 32, fontWeight: 700, color: T.gold600, lineHeight: 1 }}>
      {value}
    </span>
    <span style={{ ...MONO, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: T.gold100, marginTop: 6, textAlign: 'center' }}>
      {label}
    </span>
  </div>
);

// ─── White section card ───────────────────────────────────────────────
const Card = ({ children, className = '' }) => (
  <div
    className={className}
    style={{
      background:   '#fff',
      border:       `1px solid ${T.ink900}0D`,
      borderRadius: 20,
      padding:      '32px 28px',
      boxShadow:    '0 4px 24px -8px rgba(13,31,24,0.07)',
    }}
  >
    {children}
  </div>
);

// ─── Reusable equipment table ─────────────────────────────────────────
const EquipmentTable = ({ rows }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr style={{ borderBottom: `2px solid ${T.ink900}10` }}>
          {['S.No.', 'Particulars', 'Available Quantity'].map(h => (
            <th key={h} style={{ ...MONO, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: T.muted500, paddingBottom: 12, paddingRight: 32 }}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: `1px solid ${T.ink900}08`, background: i % 2 === 0 ? 'transparent' : `${T.forest600}04` }}>
            <td style={{ padding: '13px 32px 13px 0', fontSize: 13, color: T.muted500, fontWeight: 500 }}>{row.sr}</td>
            <td style={{ padding: '13px 32px 13px 0', fontSize: 14, color: T.ink900 }}>{row.item}</td>
            <td style={{ padding: '13px 0', fontSize: 14, color: T.forest800, fontWeight: 600 }}>{row.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ─── Section heading row ──────────────────────────────────────────────
const SectionHeading = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div style={{ width: 38, height: 38, borderRadius: '50%', background: `${T.forest600}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={18} strokeWidth={1.8} style={{ color: T.forest600 }} />
    </div>
    <h2 style={{ ...fontDisplay, fontSize: 20, fontWeight: 600, color: T.ink900 }}>{title}</h2>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────
const DepartmentDetailPage = () => {
  const { slug }  = useParams();
  const dept      = DEPARTMENTS.find(d => d.slug === slug);
  const details   = DEPARTMENT_DETAILS[slug];

  const [heroRef, heroInView] = useInView(0.1);
  const [bodyRef, bodyInView] = useInView(0.05);

  if (!dept || !details) {
    return (
      <div style={{ ...fontBody, background: T.cream50, color: T.ink900, minHeight: '100vh' }}>
        <FontLoader /><CustomCursor /><TopUtilityBar /><Navbar />
        <main>
          <Container className="py-32 text-center">
            <p style={{ color: T.muted500, marginBottom: 16 }}>Department not found.</p>
            <Link to="/academics/departments" style={{ color: T.gold700, textDecoration: 'none', fontWeight: 500 }}>
              ← Back to Departments
            </Link>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = dept.icon;

  return (
    <div style={{ ...fontBody, background: T.cream50, color: T.ink900 }}>
      <FontLoader />
      <CustomCursor />
      <TopUtilityBar />
      <Navbar />

      <main>

        {/* ── Hero ── */}
        <section
          ref={heroRef}
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{ background: T.forest800 }}
        >
          {/* Botanical texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Cpath d='M 150 20 Q 145 120 170 200 Q 190 280 160 360' stroke='%23FAF6EE' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: '300px 400px',
            }}
          />
          <div className="absolute -top-32 -right-32 pointer-events-none" style={{ width: 420, height: 420, borderRadius: '50%', background: `radial-gradient(circle, ${T.gold600}18 0%, transparent 65%)` }} />

          <Container className="relative">
            {/* Back link */}
            <div style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
              <Link
                to="/academics/departments"
                className="inline-flex items-center gap-2 mb-8 transition-opacity hover:opacity-70"
                style={{ ...MONO, fontSize: 12, letterSpacing: '0.12em', color: T.gold100, textDecoration: 'none' }}
              >
                <ArrowLeft size={14} /> All Departments
              </Link>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Title block */}
              <div
                className="lg:col-span-9"
                style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateX(0)' : 'translateX(-28px)', transition: 'opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s' }}
              >
                <Eyebrow light>Amaltas Institute of Homoeopathy</Eyebrow>
                <h1
                  className="mt-4 text-[38px] lg:text-[56px] leading-[1.05] tracking-tight font-semibold"
                  style={{ ...fontDisplay, color: T.cream50 }}
                >
                  {details.name}
                </h1>
                <div className="mt-5 flex flex-col gap-4 max-w-3xl">
                  {details.intro.split('\n\n').map((para, i) => (
                    <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: `${T.biolum}99` }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Icon medallion */}
              <div
                className="lg:col-span-3 flex justify-center lg:justify-end"
                style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? 'scale(1)' : 'scale(0.75)', transition: 'opacity 0.8s ease 0.25s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.25s' }}
              >
                <div style={{ width: 130, height: 130, borderRadius: '50%', background: `${T.gold600}18`, border: `2px solid ${T.gold600}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={56} strokeWidth={1.3} style={{ color: T.gold600 }} />
                </div>
              </div>
            </div>

            {/* Stats row */}
            {details.stats?.length > 0 && (
              <div
                className="mt-12 flex flex-wrap gap-4"
                style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s' }}
              >
                {details.stats.map(s => (
                  <StatChip key={s.label} label={s.label} value={s.value} />
                ))}
              </div>
            )}
          </Container>
        </section>

        {/* ── Body ── */}
        <section
          ref={bodyRef}
          className="py-20 lg:py-24"
          style={{ background: T.cream50 }}
        >
          <Container>
            <div
              style={{ opacity: bodyInView ? 1 : 0, transform: bodyInView ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)' }}
            >

              {/* Department Overview */}
              <Card className="mb-6">
                <SectionHeading icon={CheckCircle2} title="Department Overview" />
                <ul className="flex flex-col gap-4">
                  {details.overview.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: T.gold600, flexShrink: 0, marginTop: 7 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.75, color: T.muted500 }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Equipment / Infrastructure Table(s) */}
              <div className="flex flex-col gap-6">
                {details.equipment && (
                  <Card>
                    <SectionHeading icon={Package} title="Infrastructure & Equipment" />
                    <EquipmentTable rows={details.equipment} />
                  </Card>
                )}
                {details.surgical && (
                  <Card>
                    <SectionHeading icon={Package} title="Surgical Equipment" />
                    <EquipmentTable rows={details.surgical} />
                  </Card>
                )}
                {details.charts && (
                  <Card>
                    <SectionHeading icon={Package} title="Charts" />
                    <EquipmentTable rows={details.charts} />
                  </Card>
                )}
                {details.specimens && (
                  <Card>
                    <SectionHeading icon={Package} title="Specimens" />
                    <EquipmentTable rows={details.specimens} />
                  </Card>
                )}
                {details.models && (
                  <Card>
                    <SectionHeading icon={Package} title="Models" />
                    <EquipmentTable rows={details.models} />
                  </Card>
                )}
                {details.biochemistry && (
                  <Card>
                    <SectionHeading icon={Package} title="Biochemistry — Equipment & Infrastructure" />
                    <EquipmentTable rows={details.biochemistry} />
                  </Card>
                )}
                {details.physiology && (
                  <Card>
                    <SectionHeading icon={Package} title="Physiology — Equipment & Infrastructure" />
                    <EquipmentTable rows={details.physiology} />
                  </Card>
                )}
              </div>

            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default DepartmentDetailPage;
