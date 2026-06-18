import { useEffect } from 'react';

/**
 * FontLoader — injects Fraunces + Outfit from Google Fonts at runtime.
 * The link is added once; subsequent mounts are no-ops.
 *
 * For production, prefer self-hosting these fonts (e.g. with @fontsource)
 * or using the `<link rel="preconnect">` + `<link rel="stylesheet">` tags
 * directly in index.html. This component is a zero-config fallback.
 */
const FontLoader = () => {
  useEffect(() => {
    const id = 'amaltas-fonts';
    if (document.getElementById(id)) return;

    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';

    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Outfit:wght@300;400;500;600;700&display=swap';

    document.head.appendChild(preconnect1);
    document.head.appendChild(preconnect2);
    document.head.appendChild(link);
  }, []);

  return null;
};

export default FontLoader;
