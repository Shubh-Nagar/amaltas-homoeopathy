import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Skull, FlaskConical, Leaf, BookOpen, Activity,
  Scissors, Stethoscope, Heart, Scale, Microscope,
} from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';

export const DEPARTMENTS = [
  {
    slug:        'anatomy',
    icon:        Skull,
    name:        'Human Anatomy',
    description: 'Study of human body structure through dissection, anatomical specimens, and modern imaging.',
  },
  {
    slug:        'pharmacy',
    icon:        FlaskConical,
    name:        'Homoeopathic Pharmacy',
    description: 'Preparation, dispensing, and quality assurance of homoeopathic medicines and formulations.',
  },
  {
    slug:        'materia-medica',
    icon:        Leaf,
    name:        'Homoeopathic Materia Medica',
    description: 'Comprehensive study of homoeopathic drug sources, proving symptoms, and therapeutic applications.',
  },
  {
    slug:        'organon-of-medicine',
    icon:        BookOpen,
    name:        'Organon of Medicine and Homoeopathic Philosophy and Fundamentals of Psychology',
    description: "Foundational philosophy and principles of homoeopathy as established by Dr. Samuel Hahnemann.",
  },
  {
    slug:        'physiology-biochemistry',
    icon:        Activity,
    name:        'Human Physiology and Biochemistry',
    description: 'Functional processes and biochemical mechanisms that sustain life in the human body.',
  },
  {
    slug:        'surgery',
    icon:        Scissors,
    name:        'Surgery',
    description: 'Principles of general surgery with emphasis on homoeopathic management in pre- and post-operative care.',
  },
  {
    slug:        'practice-of-medicine',
    icon:        Stethoscope,
    name:        'Practice of Medicine with Essentials of Pharmacology',
    description: 'Clinical application of homoeopathic principles in the diagnosis and treatment of disease.',
  },
  {
    slug:        'obstetrics-gynaecology',
    icon:        Heart,
    name:        'Gynaecology and Obstetrics',
    description: "Women's health, maternal care, and gynaecological management through homoeopathic practice.",
  },
  {
    slug:        'forensic-medicine-toxicology',
    icon:        Scale,
    name:        'Forensic Medicine and Toxicology',
    description: 'Medical jurisprudence, professional ethics, and the clinical study of poisons and antidotes.',
  },
  {
    slug:        'pathology-microbiology',
    icon:        Microscope,
    name:        'Pathology and Microbiology',
    description: 'Laboratory diagnosis of disease through histopathology, clinical pathology, and microbial analysis.',
  },
];

const DeptCard = ({ dept, inView, delay }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = dept.icon;

  return (
    <div
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        height: '100%',
      }}
    >
      <Link
        to={`/academics/departments/${dept.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background:    hovered ? T.forest800 : '#fff',
          border:        `1px solid ${hovered ? T.forest800 : T.ink900 + '12'}`,
          borderRadius:  20,
          padding:       '28px 22px',
          height:        '100%',
          display:       'flex',
          flexDirection: 'column',
          textDecoration: 'none',
          transition:    'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease',
          boxShadow:     hovered
            ? `0 20px 50px -15px ${T.forest800}55`
            : '0 4px 20px -8px rgba(13,31,24,0.07)',
          transform:     hovered ? 'translateY(-6px)' : 'translateY(0)',
          cursor:        'pointer',
        }}
      >
        {/* Icon bubble */}
        <div
          style={{
            width:          52,
            height:         52,
            borderRadius:   '50%',
            background:     hovered ? `${T.gold600}22` : `${T.forest600}14`,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            marginBottom:   18,
            flexShrink:     0,
            transition:     'background 0.35s ease',
          }}
        >
          <Icon
            size={22}
            strokeWidth={1.8}
            style={{ color: hovered ? T.gold600 : T.forest600, transition: 'color 0.35s ease' }}
          />
        </div>

        {/* Name */}
        <h3
          style={{
            ...fontDisplay,
            fontSize:     16,
            fontWeight:   600,
            lineHeight:   1.3,
            color:        hovered ? T.cream50 : T.ink900,
            marginBottom: 10,
            transition:   'color 0.35s ease',
          }}
        >
          {dept.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize:   13,
            lineHeight: 1.65,
            color:      hovered ? `${T.biolum}99` : T.muted500,
            flexGrow:   1,
            transition: 'color 0.35s ease',
          }}
        >
          {dept.description}
        </p>

        {/* Animated gold underline */}
        <div
          style={{
            marginTop:  20,
            height:     2,
            borderRadius: 2,
            background: T.gold600,
            width:      hovered ? '100%' : 28,
            transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1)',
          }}
        />
      </Link>
    </div>
  );
};

const Departments = () => {
  const [sectionRef, inView]     = useInView(0.05);
  const [headerRef,  headerInView] = useInView(0.15);

  return (
    <section
      id="departments"
      ref={sectionRef}
      className="py-24 lg:py-28 relative overflow-hidden"
      style={{ background: T.cream50 }}
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(${T.forest600}22 1px, transparent 1px)`,
          backgroundSize:  '30px 30px',
          opacity: 0.6,
        }}
      />

      {/* Soft glow */}
      <div
        className="absolute -top-40 -right-40 pointer-events-none"
        style={{
          width:        500,
          height:       500,
          borderRadius: '50%',
          background:   `radial-gradient(circle, ${T.gold600}10 0%, transparent 65%)`,
        }}
      />

      <Container className="relative">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-14">
          <div
            style={{
              opacity:    headerInView ? 1 : 0,
              transform:  headerInView ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <Eyebrow>Academic Departments</Eyebrow>
            <h2
              className="mt-5 text-[36px] lg:text-[48px] leading-[1.1] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: T.ink900 }}
            >
              Departments of{' '}
              <em style={{ color: T.gold700, fontStyle: 'italic' }}>clinical excellence</em>
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] max-w-xl" style={{ color: T.muted500 }}>
              Ten specialised departments — each led by experienced faculty — delivering rigorous
              training across every core discipline of homoeopathic medicine.
            </p>
          </div>
        </div>

        {/* Department grid — 2 cols → 3 cols → 5 cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {DEPARTMENTS.map((dept, idx) => (
            <DeptCard
              key={dept.name}
              dept={dept}
              inView={inView}
              delay={idx * 0.07}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Departments;
