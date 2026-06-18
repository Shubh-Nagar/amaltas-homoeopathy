import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const PopupBanner = ({ delay = 800 }) => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);

  const dismiss = () => {
    setVisible(false);
    setTimeout(() => setMounted(false), 350);
  };

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9000] p-4"
      style={{
        background:  `rgba(4,10,8,${visible ? 0.72 : 0})`,
        transition:  'background 0.35s ease',
        cursor:      'pointer',
      }}
      onClick={dismiss}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position:   'relative',
          maxWidth:   480,
          width:      '100%',
          borderRadius: 20,
          overflow:   'hidden',
          boxShadow:  '0 32px 80px rgba(0,0,0,0.6)',
          opacity:    visible ? 1 : 0,
          transform:  visible ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(24px)',
          transition: 'opacity 0.35s cubic-bezier(0.22,1,0.36,1), transform 0.35s cubic-bezier(0.22,1,0.36,1)',
          cursor:     'default',
        }}
      >
        <img
          src="/popup.png"
          alt="2026–27 BHMS Admissions Open at Amaltas Institute of Homoeopathy"
          style={{ display: 'block', width: '100%', height: 'auto' }}
          draggable="false"
        />

        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position:       'absolute',
            top:            10,
            right:          10,
            width:          32,
            height:         32,
            borderRadius:   '50%',
            background:     'rgba(4,10,8,0.65)',
            border:         '1px solid rgba(255,255,255,0.18)',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            color:          '#fff',
            cursor:         'pointer',
            backdropFilter: 'blur(6px)',
          }}
        >
          <X size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default PopupBanner;
