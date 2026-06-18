import React from 'react';

/**
 * Container — consistent max-width + responsive horizontal padding.
 * Used by every section to keep content aligned to the same column.
 */
const Container = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 ${className}`}>
    {children}
  </div>
);

export default Container;
