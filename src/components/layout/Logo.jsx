import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Logo — uses the official Amaltas Institute of Homoeopathy wordmark.
 * The image already contains the icon + full institutional name, so we
 * don't need to render a separate text wordmark beside it.
 *
 * Width is constrained at the parent breakpoints to keep the navbar tidy
 * on small screens; the image itself preserves aspect ratio.
 */
const Logo = () => (
  <Link
    to="/"
    className="flex items-center group"
    aria-label="Amaltas Institute of Homoeopathy — Home"
  >
    <img
      src="/logo.png"
      alt="Amaltas Institute of Homoeopathy"
      className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
      draggable="false"
    />
  </Link>
);

export default Logo;
