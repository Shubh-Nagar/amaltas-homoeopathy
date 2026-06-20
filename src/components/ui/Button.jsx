import React from 'react';
import { T } from '../../styles/tokens';

/**
 * Button — pill button with three variants.
 *   primary → solid gold (use for the main CTA on the page)
 *   dark    → forest green (use on cream backgrounds when primary is already used)
 *   ghost   → transparent outline (use as a secondary CTA next to primary)
 */
const Button = ({ variant = 'primary', children, href = '#', icon: Icon, onClick, target, rel }) => {
  const base =
    'inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-medium tracking-wide rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg';

  const styles =
    variant === 'primary'
      ? { background: T.gold600, color: T.ink900, boxShadow: `0 1px 0 ${T.gold700} inset` }
      : variant === 'dark'
      ? { background: T.forest800, color: T.cream50 }
      : { background: 'transparent', color: T.ink900, border: `1px solid ${T.ink900}33` };

  return (
    <a href={href} onClick={onClick} target={target} rel={rel} className={base} style={styles}>
      {children}
      {Icon && <Icon size={16} strokeWidth={2.2} />}
    </a>
  );
};

export default Button;
