import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX  = -100, ringY  = -100;
    let raf;

    const moveDot = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      raf = requestAnimationFrame(animateRing);
    };

    const detectHover = (e) => {
      const el = e.target;
      const isLink  = el.tagName === 'A' || el.tagName === 'BUTTON' || !!el.closest('a') || !!el.closest('button');
      const isImage = el.tagName === 'IMG' || !!el.closest('[data-cursor="image"]');
      const hoverType = isLink ? 'link' : isImage ? 'image' : '';
      dot.dataset.hover  = hoverType;
      ring.dataset.hover = hoverType;
    };

    window.addEventListener('mousemove', moveDot, { passive: true });
    document.addEventListener('mouseover', detectHover);
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', moveDot);
      document.removeEventListener('mouseover', detectHover);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
