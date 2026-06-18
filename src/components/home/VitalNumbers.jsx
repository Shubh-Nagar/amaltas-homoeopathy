import React from 'react';
import { T } from '../../styles/tokens';
import Container from '../ui/Container';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const VITALS = [
  { value: '2500+', label: 'Students in All fields' },
  { value: '15+',   label: 'Years of Excellence' },
  { value: '42',    label: 'Acre Campus' },
  { value: '13',    label: 'Clinical Departments' },
];

const VitalNumbers = () => (
  <div
    style={{
      background:  T.forest800,
      borderTop:   `1px solid ${T.forest600}35`,
      borderBottom:`1px solid ${T.forest600}35`,
    }}
  >
    <Container>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {VITALS.map((v, i) => (
          <div
            key={v.label}
            className="py-5 px-6 flex flex-col gap-1"
            style={{
              borderRight: i < VITALS.length - 1 ? `1px solid ${T.forest600}30` : 'none',
            }}
          >
            <span
              style={{ ...MONO, fontSize: 26, fontWeight: 500, color: T.gold600, lineHeight: 1.15 }}
            >
              {v.value}
            </span>
            <span
              style={{ ...MONO, fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: `${T.cream50}65` }}
            >
              {v.label}
            </span>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

export default VitalNumbers;
