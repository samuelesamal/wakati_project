'use client';

import { useState, useRef, useCallback } from 'react';

interface ServiceItem {
  title: string;
  description: string;
  videoSrc: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: 'Corporate Event Coverage',
    description: 'Multi-camera setups, live streaming, and post-production editing.',
    videoSrc: '/assets/videos/what%20we%20do%20videos/video-placeholder-1.mp4',
  },
  {
    title: 'Video Adverts & Commercials',
    description: 'Creative concepts, production, and distribution.',
    videoSrc: '/assets/videos/what%20we%20do%20videos/video-placeholder-15.mp4',
  },
  {
    title: 'Product Launches & Campaigns',
    description: 'Capturing the energy, impact, and brand story.',
    videoSrc: '/assets/videos/what%20we%20do%20videos/video-placeholder-4.mp4',
  },
  {
    title: 'Documentaries & Features',
    description: 'Corporate documentaries, social impact stories, brand and future films.',
    videoSrc: '/assets/videos/featured-projects/nrep-kuumi.mp4',
  },
];

export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const startX = useRef<number>(0);
  const isDragging = useRef(false);

  const goTo = useCallback((idx: number) => {
    const clamped = (idx + SERVICES.length) % SERVICES.length;
    setCurrent(clamped);
    // Play active video
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === clamped) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 50) {
      goTo(diff < 0 ? current + 1 : current - 1);
    }
  };

  return (
    <div className="services-carousel-shell">
      <div
        className="what-we-do-carousel"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        style={{ touchAction: 'pan-y' }}
      >
        <div
          className="owl-stage-outer"
          style={{ overflow: 'hidden' }}
        >
          <div
            className="owl-stage d-flex"
            style={{
              transform: `translateX(calc(${-current * 100}% + ${current > 0 ? '-' : ''}0px))`,
              transition: 'transform 0.65s ease',
              display: 'flex',
            }}
          >
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className={`owl-item${i === current ? ' active center' : ''}`}
                style={{ flex: '0 0 auto', width: '100%', padding: '0 14px' }}
              >
                <article className="service-carousel-card">
                  <div className="service-carousel-media">
                    <video
                      ref={(el) => { videoRefs.current[i] = el; }}
                      className="service-carousel-video"
                      autoPlay={i === 0}
                      muted
                      loop
                      playsInline
                      preload="auto"
                    >
                      <source src={service.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                  <div className="service-carousel-body">
                    <h3 className="service-carousel-title">{service.title}</h3>
                    <p className="service-carousel-description mb-0">{service.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Nav arrows */}
        <div className="owl-nav">
          <button
            type="button"
            className="owl-prev"
            aria-label="Previous service"
            onClick={() => goTo(current - 1)}
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <button
            type="button"
            className="owl-next"
            aria-label="Next service"
            onClick={() => goTo(current + 1)}
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      <div className="services-carousel-footer">
        <a href="/projects" className="btn border border-white border-opacity-25">
          <span className="btn-text">See our Work</span>
          {/* @ts-ignore */}
          <iconify-icon
            icon="lucide:arrow-up-right"
            className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
          />
        </a>
      </div>
    </div>
  );
}
