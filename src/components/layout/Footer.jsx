import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Check } from 'lucide-react';
import { T } from '../../styles/tokens';
import { FOOTER_LINKS, CONTACT } from '../../data/navigation';
import Container from '../ui/Container';

const isFile = (href) => href && /\.(pdf|doc|docx|xls|xlsx)$/i.test(href);

const FooterLink = ({ href, target, children, className }) => {
  if (!href || href === '#' || isFile(href) || href.startsWith('http')) {
    return (
      <a
        href={href || '#'}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }
  return <Link to={href} className={className}>{children}</Link>;
};

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

// ─── Copy-to-clipboard wrapper ────────────────────────────────────────
const CopyText = ({ value, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {/* clipboard not available */}
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 transition-opacity hover:opacity-80 text-left"
      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'inherit', padding: 0 }}
      title={`Copy ${value}`}
    >
      {children}
      {copied && (
        <span
          className="flex items-center gap-1 text-[11px] rounded-full px-2 py-0.5"
          style={{ ...MONO, background: `${T.biolum}20`, color: T.biolum }}
        >
          <Check size={10} /> Copied
        </span>
      )}
    </button>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ background: T.ink900, color: T.cream50 }}>

    {/* Botanical gradient transition zone */}
    <div
      aria-hidden="true"
      style={{
        height:     80,
        background: `linear-gradient(to bottom, ${T.void}, ${T.ink900})`,
        marginTop:  -80,
        position:   'relative',
        zIndex:     1,
        pointerEvents: 'none',
      }}
    />

    <Container className="py-20 grid lg:grid-cols-12 gap-12 relative z-10">

      {/* Brand block */}
      <div className="lg:col-span-4 space-y-5">
        <div
          className="inline-block p-3 rounded-xl"
          style={{ background: T.cream50 }}
        >
          <img
            src="/logo.png"
            alt="Amaltas Institute of Homoeopathy"
            className="h-14 w-auto object-contain block"
            draggable="false"
            style={{
              animation: 'heartbeat 8s ease-in-out infinite',
            }}
          />
        </div>

        <p className="text-[14px] leading-relaxed max-w-sm" style={{ color: `${T.cream50}72` }}>
          Part of the Amaltas Group — committed to teaching homoeopathy with clinical rigour,
          ethical practice, and accessible community healthcare.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3 pt-2">
          {[
            { Icon: Facebook,  label: 'Facebook',  href: 'https://www.facebook.com/amaltasinstituteofhomoeopathy/' },
            { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/amaltasinstituteofhomoeopathy/' },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: `${T.cream50}0E`,
                color:      T.cream50,
                border:     `1px solid ${T.cream50}10`,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${T.gold600}25`; e.currentTarget.style.color = T.gold600; }}
              onMouseLeave={e => { e.currentTarget.style.background = `${T.cream50}0E`; e.currentTarget.style.color = T.cream50; }}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="lg:col-span-2">
        <div
          className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-5"
          style={{ ...MONO, color: T.gold600 }}
        >
          Quick Links
        </div>
        <ul className="space-y-3 text-[14px]" style={{ color: `${T.cream50}85` }}>
          {FOOTER_LINKS.quickLinks.map(({ label, href }) => (
            <li key={label}>
              <FooterLink href={href} className="link-center hover:text-[#F4E5A3] transition-colors">{label}</FooterLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      <div className="lg:col-span-3">
        <div
          className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-5"
          style={{ ...MONO, color: T.gold600 }}
        >
          Resources
        </div>
        <ul className="space-y-3 text-[14px]" style={{ color: `${T.cream50}85` }}>
          {FOOTER_LINKS.resources.map(({ label, href, target }) => (
            <li key={label}>
              <FooterLink href={href} target={target} className="link-center hover:text-[#F4E5A3] transition-colors">{label}</FooterLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="lg:col-span-3">
        <div
          className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-5"
          style={{ ...MONO, color: T.gold600 }}
        >
          Contact
        </div>
        <ul className="space-y-4 text-[14px]" style={{ color: `${T.cream50}88` }}>
          <li className="flex items-start gap-3">
            <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: T.gold600 }} />
            <span className="leading-relaxed">{CONTACT.address}</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={15} className="flex-shrink-0" style={{ color: T.gold600 }} />
            <span className="flex items-center gap-1.5">
              <CopyText value={CONTACT.tollFree}>
                <a
                  href={`tel:${CONTACT.tollFree.replace(/-/g, '')}`}
                  className="link-center hover:text-[#F4E5A3] transition-colors"
                >
                  {CONTACT.tollFree}
                </a>
              </CopyText>
              <span className="opacity-40">/</span>
              <CopyText value={CONTACT.phone}>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="link-center hover:text-[#F4E5A3] transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </CopyText>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={15} className="flex-shrink-0" style={{ color: T.gold600 }} />
            <CopyText value={CONTACT.email}>
              <a
                href={`mailto:${CONTACT.email}`}
                className="link-center hover:text-[#F4E5A3] transition-colors break-all"
              >
                {CONTACT.email}
              </a>
            </CopyText>
          </li>
        </ul>
      </div>
    </Container>

    {/* Bottom strip */}
    <div style={{ borderTop: `1px solid ${T.cream50}0E` }}>
      <Container className="py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[12.5px]" style={{ color: `${T.cream50}55` }}>
        <div style={MONO}>
          © {new Date().getFullYear()} Amaltas Institute of Homoeopathy. All rights reserved.
        </div>
        <div className="flex items-center gap-5">
          {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((l) => (
            <a key={l} href="#" className="link-center hover:opacity-100 transition-opacity">{l}</a>
          ))}
        </div>
      </Container>
    </div>
  </footer>
);

export default Footer;
