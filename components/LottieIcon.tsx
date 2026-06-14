'use client';

import { useEffect, useRef } from 'react';

interface LottieIconProps {
  animationPath: string;
  fallbackSrc: string;
  fallbackAlt?: string;
  className?: string;
  id?: string;
}

/**
 * Renders a Lottie animation with an img fallback.
 * Waits for window.lottie to be available before initializing.
 */
export default function LottieIcon({
  animationPath,
  fallbackSrc,
  fallbackAlt = '',
  className = '',
  id,
}: LottieIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const tryInit = () => {
      const lottie = (window as any).lottie;
      if (!lottie || !containerRef.current) return;

      initialized.current = true;
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath,
      });
      anim.addEventListener('DOMLoaded', () => {
        containerRef.current?.classList.add('is-ready');
        anim.playSegments([0, 100], true);
      });
    };

    // Try immediately (Lottie may already be loaded)
    tryInit();

    // If not yet, poll briefly
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      tryInit();
      if (initialized.current || attempts > 20) clearInterval(interval);
    }, 300);

    return () => clearInterval(interval);
  }, [animationPath]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`hero-lottie ${className}`}
      data-animation-path={animationPath}
      data-start-frame="0"
      data-end-frame="100"
    >
      <img src={fallbackSrc} alt={fallbackAlt} className="hero-motion-fallback" />
    </div>
  );
}
