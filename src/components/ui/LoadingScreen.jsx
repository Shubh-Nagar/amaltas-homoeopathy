import React, { useEffect, useState } from 'react';
import { T } from '../../styles/tokens';

const PETAL_ANGLES = [0, 60, 120, 180, 240, 300];
const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase]   = useState('visible'); // 'visible' | 'fading'
  const [text,  setText]    = useState('');
  const message = 'Preparing your healing journey...';

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setText(message.slice(0, i));
      if (i >= message.length) clearInterval(typeInterval);
    }, 38);

    // Begin exit
    const exitTimer = setTimeout(() => {
      setPhase('fading');
      setTimeout(onComplete, 520);
    }, 2000);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      aria-hidden="true"
      style={{
        position:       'fixed',
        inset:          0,
        zIndex:         10000,
        background:     T.void,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            28,
        opacity:        phase === 'fading' ? 0 : 1,
        transition:     'opacity 0.5s ease',
        pointerEvents:  phase === 'fading' ? 'none' : 'auto',
      }}
    >
      {/* Blooming Cassia fistula flower */}
      <svg width="88" height="88" viewBox="0 0 88 88">
        {PETAL_ANGLES.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx  = 44 + Math.cos(rad) * 20;
          const cy  = 44 + Math.sin(rad) * 20;
          return (
            <ellipse
              key={angle}
              cx={cx} cy={cy}
              rx="9"  ry="15"
              fill={T.gold600}
              style={{
                transformOrigin: `${cx}px ${cy}px`,
                transform:       'scale(0)',
                opacity:         0,
                animation:       `bloomPetal 0.45s cubic-bezier(0.22,1,0.36,1) ${i * 0.07 + 0.1}s forwards`,
              }}
              transform={`rotate(${angle + 90} ${cx} ${cy})`}
            />
          );
        })}
        {/* Centre */}
        <circle
          cx="44" cy="44" r="9"
          fill={T.gold100}
          style={{ animation: 'bloomPetal 0.3s ease 0.55s forwards', opacity: 0, transformOrigin: '44px 44px', transform: 'scale(0)' }}
        />
      </svg>

      {/* Typewriter subtitle */}
      <p
        style={{
          ...MONO,
          fontSize:       11,
          letterSpacing:  '0.2em',
          color:          T.muted500,
          textTransform:  'uppercase',
          minHeight:      16,
          textAlign:      'center',
        }}
      >
        {text}
      </p>

      {/* Progress bar */}
      <div
        style={{
          width:        168,
          height:       2,
          background:   'rgba(250,246,238,0.08)',
          borderRadius: 1,
          overflow:     'hidden',
        }}
      >
        <div
          style={{
            height:          '100%',
            background:      T.gold600,
            transformOrigin: 'left',
            animation:       'loadingBar 1.85s cubic-bezier(0.22,1,0.36,1) forwards',
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
