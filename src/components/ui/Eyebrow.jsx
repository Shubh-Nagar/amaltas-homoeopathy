import React from 'react';
import { T } from '../../styles/tokens';

/**
 * Eyebrow — the small uppercase label above section headings.
 * Pass `light` when used on dark backgrounds.
 */
const Eyebrow = ({ children, light = false }) => (
  <span
    className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-medium"
    style={{ color: light ? T.gold100 : T.gold700 }}
  >
    <span
      className="inline-block w-6 h-px"
      style={{ background: light ? T.gold100 : T.gold600 }}
    />
    {children}
  </span>
);

export default Eyebrow;
