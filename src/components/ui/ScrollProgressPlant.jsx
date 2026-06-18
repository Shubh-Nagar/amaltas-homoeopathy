import React, { useEffect, useState } from 'react';
import { T } from '../../styles/tokens';

const LEAF_THRESHOLDS = [0.2, 0.38, 0.56, 0.74]; // scroll % at which each leaf appears
const STEM_HEIGHT = 200;
const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const ScrollProgressPlant = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(window.scrollY / total, 1) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const stemEnd = STEM_HEIGHT - STEM_HEIGHT * progress;
  const bloomed = progress > 0.88;

  return (
    <div
      aria-hidden="true"
      style={{
        position:      'fixed',
        right:         18,
        top:           '50%',
        transform:     'translateY(-50%)',
        zIndex:        100,
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        gap:           6,
        pointerEvents: 'none',
        userSelect:    'none',
      }}
      className="hidden lg:flex"
    >
      <svg
        width="28"
        height={STEM_HEIGHT}
        viewBox={`0 0 28 ${STEM_HEIGHT}`}
        overflow="visible"
      >
        {/* Track (ghost stem) */}
        <line
          x1="14" y1={STEM_HEIGHT}
          x2="14" y2="0"
          stroke="rgba(250,246,238,0.08)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Growing stem */}
        <line
          x1="14" y1={STEM_HEIGHT}
          x2="14" y2={stemEnd}
          stroke={T.gold600}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Leaves */}
        {LEAF_THRESHOLDS.map((threshold, i) => {
          const show = progress >= threshold;
          const y    = STEM_HEIGHT - STEM_HEIGHT * threshold;
          const side = i % 2 === 0 ? 1 : -1; // alternate left/right
          const lx   = 14 + side * 10;
          return (
            <g
              key={i}
              style={{
                opacity:    show ? 1 : 0,
                transition: 'opacity 0.5s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              <ellipse
                cx={lx} cy={y}
                rx="5.5" ry="9"
                fill={T.forest600}
                opacity="0.85"
                transform={`rotate(${side * 35} ${lx} ${y})`}
              />
            </g>
          );
        })}

        {/* Bloom at top when complete */}
        {bloomed && (
          <g style={{ animation: 'fadeIn 0.5s ease forwards' }}>
            {[0, 72, 144, 216, 288].map((a, i) => {
              const rad = (a * Math.PI) / 180;
              return (
                <circle
                  key={a}
                  cx={14 + Math.cos(rad) * 6}
                  cy={stemEnd - 6 + Math.sin(rad) * 6}
                  r="3"
                  fill={T.gold600}
                  opacity="0.9"
                />
              );
            })}
            <circle cx="14" cy={stemEnd - 6} r="2.5" fill={T.gold100} />
          </g>
        )}
      </svg>

      {/* Percentage */}
      <span
        style={{
          ...MONO,
          fontSize:      9,
          color:         T.muted500,
          letterSpacing: '0.08em',
        }}
      >
        {Math.round(progress * 100)}%
      </span>
    </div>
  );
};

export default ScrollProgressPlant;
