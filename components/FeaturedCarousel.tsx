'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface CarouselSlide {
  title: string;
  tags: string[];
  description: string;
  mediaType: 'video' | 'image';
  mediaSrc: string;
}

const SLIDES: CarouselSlide[] = [
  {
    title: 'Uganda Baati',
    tags: ['Corporate video', 'Brand storytelling'],
    description: 'A confident brand story captured in a premium, cinematic landscape frame.',
    mediaType: 'video',
    mediaSrc: '/assets/videos/featured-projects/uganda-baati.mp4',
  },
  {
    title: 'MHS',
    tags: ['Medical brand', 'Campaign video'],
    description: 'A clean campaign reel built to feel polished, informative, and visually modern.',
    mediaType: 'video',
    mediaSrc: '/assets/videos/featured-projects/mhs.mp4',
  },
  {
    title: 'NREP Kuumi',
    tags: ['Event coverage', 'Production'],
    description: 'Editorial coverage with a calm stacked-card presentation and generous whitespace.',
    mediaType: 'video',
    mediaSrc: '/assets/videos/featured-projects/nrep-kuumi.mp4',
  },
  {
    title: 'M-KOPA',
    tags: ['Product campaign', 'Video production'],
    description: 'Product-led storytelling presented in a restrained premium carousel composition.',
    mediaType: 'video',
    mediaSrc: '/assets/videos/featured-projects/mkopa.mp4',
  },
];

function getOffset(index: number, active: number, total: number): number {
  const raw = index - active;
  if (raw > total / 2) return raw - total;
  if (raw < -total / 2) return raw + total;
  return raw;
}

function classForOffset(offset: number): string {
  if (offset === 0) return 'is-active';
  if (offset === 1) return 'is-next';
  if (offset === -1) return 'is-prev';
  return 'is-hidden';
}

export default function FeaturedCarousel() {
  const [active, setActive] = useState(0);
  const [userStopped, setUserStopped] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const syncVideos = useCallback(
    (activeIdx: number) => {
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        if (i === activeIdx) {
          v.play().catch(() => { });
        } else {
          v.pause();
        }
      });
    },
    []
  );

  // Auto-advance
  useEffect(() => {
    if (userStopped) return;
    const id = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % SLIDES.length;
        syncVideos(next);
        return next;
      });
    }, 4200);
    return () => clearInterval(id);
  }, [userStopped, syncVideos]);

  useEffect(() => {
    syncVideos(active);
  }, [active, syncVideos]);

  const go = (idx: number) => {
    setUserStopped(true);
    setActive(idx);
  };

  const prev = () => go((active - 1 + SLIDES.length) % SLIDES.length);
  const next = () => go((active + 1) % SLIDES.length);

  return (
    <section className="travel-carousel" aria-label="Featured destinations">
      <div className="travel-carousel__backdrop" />
      <div className="travel-carousel__glow" />

      <div className="travel-carousel__copy">
        <h1>Featured projects</h1>
        <p className="lede">
          A glimpse into our creativity—exploring innovative designs, successful collaborations, and
          transformative digital experiences.
        </p>
      </div>

      <div className="travel-carousel__stage">
        <button className="nav-button nav-button--prev" type="button" aria-label="Previous slide" onClick={prev}>
          <span>&larr;</span>
        </button>

        <div className="carousel-track" aria-live="polite">
          {SLIDES.map((slide, i) => {
            const offset = getOffset(i, active, SLIDES.length);
            const cls = classForOffset(offset);
            return (
              <article key={slide.title} className={`travel-card ${cls}`} data-index={i}>
                <div className="travel-card__visual">
                  {slide.mediaType === 'video' ? (
                    <video
                      className="travel-card__media"
                      ref={(el) => { videoRefs.current[i] = el; }}
                      muted
                      loop
                      playsInline
                      preload="auto"
                    >
                      <source src={slide.mediaSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <img className="travel-card__media" src={slide.mediaSrc} alt={slide.title} />
                  )}
                </div>
                <div className="travel-card__content">
                  <div className={`travel-card__text${cls === 'is-active' ? ' is-text-animating' : ''}`}>
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                  <div className="travel-card__tags">
                    {slide.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button className="nav-button nav-button--next" type="button" aria-label="Next slide" onClick={next}>
          <span>&rarr;</span>
        </button>
      </div>

      <div className="travel-carousel__footer">
        <div className="travel-carousel__dots" aria-label="Slide navigation">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`travel-carousel__dot${i === active ? ' is-active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
