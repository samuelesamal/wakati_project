'use client';

import { useEffect } from 'react';

/**
 * Scripts component — loads AOS and Lottie after DOM is ready.
 * Runs on the client side only.
 */
export default function Scripts() {
  useEffect(() => {
    // Initialize AOS
    const initAOS = () => {
      if (typeof window !== 'undefined' && (window as any).AOS) {
        (window as any).AOS.init({ once: true });
      }
    };

    // Load AOS script dynamically
    const aosScript = document.createElement('script');
    aosScript.src = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js';
    aosScript.async = true;
    aosScript.onload = initAOS;
    document.body.appendChild(aosScript);

    // Header scroll behaviour
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (!header) return;
      if (window.scrollY >= 60) {
        header.classList.add('fixed-header');
      } else {
        header.classList.remove('fixed-header');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
