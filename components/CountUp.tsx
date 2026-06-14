'use client';

import { useEffect, useRef } from 'react';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ target, suffix = '', duration = 1000 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const animate = () => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = String(Math.ceil(progress * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !observed.current) {
          observed.current = true;
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="count" data-target={target}>
      {target}
    </span>
  );
}
