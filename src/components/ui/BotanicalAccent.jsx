import React from 'react';
import { T } from '../../styles/tokens';

/**
 * BotanicalAccent — a stylised Cassia fistula (Amaltas) branch.
 * Used as the hero visual; the institution's namesake rendered as art
 * rather than a stock medical photo. Replace with <img /> if real
 * campus photography is preferred.
 */
const BotanicalAccent = () => (
  <svg viewBox="0 0 400 500" className="w-full h-full" aria-hidden="true">
    <defs>
      <radialGradient id="flowerGlow" cx="0.5" cy="0.5" r="0.6">
        <stop offset="0%"   stopColor={T.gold100} stopOpacity="1" />
        <stop offset="100%" stopColor={T.gold600} stopOpacity="1" />
      </radialGradient>
    </defs>

    {/* Main branch */}
    <path
      d="M 200 30 Q 195 120 220 200 Q 240 280 210 380 Q 195 440 220 480"
      fill="none"
      stroke={T.forest800}
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Leaves */}
    {[
      [200,  90, -35], [220, 160,  30], [225, 230, -25],
      [235, 300,  35], [210, 360, -30], [220, 420,  25],
    ].map(([x, y, r], i) => (
      <ellipse
        key={i}
        cx={x} cy={y} rx="38" ry="14"
        fill={T.forest600}
        opacity="0.85"
        transform={`rotate(${r} ${x} ${y})`}
      />
    ))}

    {/* Hanging flower clusters — the signature Amaltas drape */}
    {[120, 250, 400].map((y, i) => (
      <g key={i} transform={`translate(${i % 2 ? 280 : 130}, ${y})`}>
        <path d="M 0 0 Q 0 20 -5 50" stroke={T.forest800} strokeWidth="1.5" fill="none" />
        {[0, 12, 24, 36, 48].map((dy, j) => (
          <circle
            key={j}
            cx={j % 2 ? -8 : 6}
            cy={dy + 8}
            r={6 - j * 0.4}
            fill="url(#flowerGlow)"
          />
        ))}
      </g>
    ))}
  </svg>
);

export default BotanicalAccent;
