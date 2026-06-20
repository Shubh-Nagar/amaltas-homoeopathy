import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { T } from '../../styles/tokens';
import { NAV } from '../../data/navigation';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from './Logo';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoRef                 = useRef(null);
  const holdTimer               = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Heartbeat easter egg — hold logo for 1 second
  const startHold = () => {
    holdTimer.current = setTimeout(() => {
      const el = logoRef.current;
      if (!el) return;
      el.style.animation = 'heartbeat 0.7s ease';
      el.addEventListener('animationend', () => { el.style.animation = ''; }, { once: true });
    }, 900);
  };
  const cancelHold = () => clearTimeout(holdTimer.current);

  return (
    <header
      className="sticky top-0 z-40 transition-all duration-300"
      style={{
        background:         scrolled ? 'rgba(250,246,238,0.92)' : T.cream50,
        backdropFilter:     scrolled ? 'saturate(180%) blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
        borderBottom:       `1px solid ${T.ink900}${scrolled ? '14' : '07'}`,
        boxShadow:          scrolled ? '0 4px 20px -4px rgba(13,31,24,0.08)' : 'none',
      }}
    >
      <Container className="flex items-center justify-between py-3">
        {/* Logo with heartbeat easter egg */}
        <div
          ref={logoRef}
          onMouseDown={startHold}
          onMouseUp={cancelHold}
          onMouseLeave={cancelHold}
          onTouchStart={startHold}
          onTouchEnd={cancelHold}
        >
          <Logo />
        </div>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary" icon={ArrowUpRight} href="https://wa.me/919650096850" target="_blank" rel="noopener noreferrer">
            Inquire Now
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{ color: T.ink900 }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && <MobileMenu onLinkClick={() => setOpen(false)} />}
    </header>
  );
};

export default Navbar;
