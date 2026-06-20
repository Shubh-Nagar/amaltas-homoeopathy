import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { T } from '../../styles/tokens';

const isFile = (href) => href && /\.(pdf|doc|docx|xls|xlsx|png|jpg|jpeg)$/i.test(href);

const NavLink = ({ href, target, className, style, onMouseEnter, onMouseLeave, children }) => {
  if (href && href.startsWith('/') && !isFile(href)) {
    return (
      <Link to={href} className={className} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href || '#'} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={className} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </a>
  );
};

/**
 * NavDropdown — a single top-level nav item with optional dropdown.
 * Uses CSS group-hover for desktop reveal (no JS state per item).
 */
const NavDropdown = ({ item }) => {
  const hasChildren = !!item.children;

  return (
    <li className="relative group">
      <a
        href={item.href || '#'}
        className="flex items-center gap-1 px-1 py-2 text-[14px] font-medium transition-colors"
        style={{ color: T.ink900 }}
      >
        {item.label}
        {hasChildren && (
          <ChevronDown
            size={14}
            strokeWidth={2.4}
            className="transition-transform group-hover:rotate-180"
          />
        )}
        {/* Animated underline */}
        <span
          className="absolute left-0 right-0 bottom-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          style={{ background: T.gold600 }}
        />
      </a>

      {hasChildren && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
          <div
            className="min-w-[260px] py-3 rounded-xl"
            style={{
              background: T.cream50,
              border: `1px solid ${T.ink900}10`,
              boxShadow: '0 20px 50px -20px rgba(13,31,24,0.25)',
            }}
          >
            {item.children.map((c) => (
              <NavLink
                key={c.label}
                href={c.href}
                target={c.target}
                className="flex items-center justify-between px-5 py-2.5 text-[13.5px] transition-colors"
                style={{ color: T.ink900 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = T.gold700)}
                onMouseLeave={(e) => (e.currentTarget.style.color = T.ink900)}
              >
                <span>{c.label}</span>
                <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100" />
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default NavDropdown;
