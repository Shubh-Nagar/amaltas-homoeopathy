import React from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { T } from '../../styles/tokens';
import { CONTACT } from '../../data/navigation';
import Container from '../ui/Container';

/**
 * TopUtilityBar — the thin dark-green strip above the main nav.
 * Hidden on mobile (where space is precious).
 */
const TopUtilityBar = () => (
  <div style={{ background: T.forest800, color: T.cream50 }} className="hidden md:block">
    <Container className="flex items-center justify-between py-2.5 text-[12.5px]">
      <div className="flex items-center gap-6">
        <a
          href={`tel:${CONTACT.tollFree.replace(/-/g, '')}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Phone size={13} strokeWidth={2.2} />
          <span>
            Toll Free:{' '}
            <strong className="font-semibold tracking-wide">{CONTACT.tollFree}</strong>
          </span>
        </a>

        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Mail size={13} strokeWidth={2.2} />
          <span>{CONTACT.email}</span>
        </a>
      </div>

      <div className="flex items-center gap-4">
        <span className="opacity-70">Follow us</span>
        <a href="https://www.facebook.com/amaltasinstituteofhomoeopathy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"  className="hover:text-[#F4E5A3] transition-colors">
          <Facebook size={14} />
        </a>
        <a href="https://www.instagram.com/amaltasinstituteofhomoeopathy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#F4E5A3] transition-colors">
          <Instagram size={14} />
        </a>
      </div>
    </Container>
  </div>
);

export default TopUtilityBar;
