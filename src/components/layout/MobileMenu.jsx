import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { T } from '../../styles/tokens';
import { NAV } from '../../data/navigation';
import Container from '../ui/Container';
import Button from '../ui/Button';

/**
 * MobileMenu — slide-down menu drawer for narrow viewports.
 * Each item with children expands inline (accordion style) on tap.
 */
const MobileMenu = ({ onLinkClick }) => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="lg:hidden border-t" style={{ background: T.cream50, borderColor: `${T.ink900}10` }}>
      <Container className="py-4">
        <ul className="flex flex-col">
          {NAV.map((item, idx) => (
            <li key={item.label} className="py-1">
              {!item.children && item.href && item.href.startsWith('/') ? (
                <Link
                  to={item.href}
                  onClick={onLinkClick}
                  className="w-full flex items-center justify-between py-2 text-[15px] font-medium"
                  style={{ color: T.ink900, textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              ) : !item.children ? (
                <a
                  href={item.href || '#'}
                  onClick={onLinkClick}
                  className="w-full flex items-center justify-between py-2 text-[15px] font-medium"
                  style={{ color: T.ink900, textDecoration: 'none' }}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-2 text-[15px] font-medium"
                  style={{ color: T.ink900 }}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className="transition-transform"
                    style={{ transform: openIdx === idx ? 'rotate(180deg)' : 'none' }}
                  />
                </button>
              )}

              {item.children && openIdx === idx && (
                <ul className="pl-4 pb-2 pt-1 space-y-1.5">
                  {item.children.map((c) => (
                    <li key={c.label}>
                      {c.href && c.href.startsWith('/') ? (
                        <Link
                          to={c.href}
                          onClick={onLinkClick}
                          className="block py-1.5 text-[13.5px]"
                          style={{ color: T.muted500 }}
                        >
                          {c.label}
                        </Link>
                      ) : (
                        <a
                          href={c.href}
                          onClick={onLinkClick}
                          className="block py-1.5 text-[13.5px]"
                          style={{ color: T.muted500 }}
                        >
                          {c.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Button variant="primary" icon={ArrowUpRight} href="#enquiry">
            Apply Now
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default MobileMenu;
