import type { Metadata } from 'next';
import Link from 'next/link';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import ServicesCarousel from '@/components/ServicesCarousel';

export const metadata: Metadata = {
  title: 'Wakati Media — Connecting Brands with Audiences Through Impactful Storytelling',
  description:
    'We are a full-service media production house in Uganda, crafting compelling audio-visual stories with precision, creativity, and excellence.',
};

export default function HomePage() {
  const partnerLogos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="page-wrapper overflow-hidden">

      {/* ── Hero Banner ── */}
      <section className="banner-section position-relative d-flex align-items-end min-vh-100">
        <video
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/images/backgrounds/wakati-landing-page-7.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="hero-layout position-relative z-1">
            <div className="hero-copy" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className="hero-kicker d-flex align-items-start gap-4">
                <Link href="/contact" className="hero-motion-link" aria-label="Open contact page">
                  <div
                    className="hero-spin hero-lottie"
                    id="heroMotionLogo"
                    data-animation-path="/assets/images/svgs/wakati-motion-logo.json"
                    data-animation-global="wakatiMotionLogoData"
                    data-start-frame="0"
                    data-end-frame="100"
                  >
                    <img
                      src="/assets/images/svgs/wakati-motion-fallback.svg"
                      alt=""
                      className="hero-motion-fallback"
                    />
                  </div>
                </Link>
                <div className="hero-text-wrap">
                  <h1 className="hero-title mb-0 text-white">
                    <span className="hero-title-line">Connecting Brands</span>
                    <span className="hero-title-line">with Audiences Through</span>
                    <span className="hero-highlight">Impactful Storytelling</span>
                  </h1>
                  <p className="hero-description mb-0 text-white">
                    We are a full-service media production house in Uganda, crafting
                    <br />
                    compelling audio-visual stories with precision, creativity, and excellence.
                  </p>
                  <Link href="/contact" className="hero-cta">
                    <span className="hero-cta-label">Get In Touch</span>
                    <span className="hero-cta-icon">
                      {/* @ts-ignore */}
                      <iconify-icon icon="lucide:arrow-up-right" className="fs-7 text-dark" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats & Facts ── */}
      <section className="stats-facts py-5 py-lg-11 py-xl-12 position-relative overflow-hidden">
        <div className="container">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div
                className="d-flex align-items-center gap-7 py-2"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <hr className="border-line" />
                {/* <span className="badge text-bg-dark">Stats &amp; facts</span> */}
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="d-flex flex-column gap-9">
                <div className="row">
                  <div className="col-xxl-8">
                    <div
                      className="d-flex flex-column gap-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <h2 className="mb-0">At Wakati, we bring ideas to life</h2>
                      <p className="fs-5 mb-0">
                        When selecting a web design agency, it&apos;s essential to consider its reputation,
                        experience, and the specific needs of your project.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="btn stats-cta-btn"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  <span className="btn-text">Who we are</span>
                  {/* @ts-ignore */}
                  <iconify-icon
                    icon="lucide:arrow-up-right"
                    className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="position-absolute bottom-0 start-0"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img src="/assets/images/backgrounds/stats-facts-bg.svg" alt="" className="img-fluid" />
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="featured-projects py-5 py-lg-11 py-xl-12 bg-light-gray figma-section-projects">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <div className="container">
            <div className="row gap-7 gap-xl-0">
              <div className="col-xl-4 col-xxl-4">
                <div
                  className="d-flex align-items-center gap-7 py-2"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <hr className="border-line" />
                  <span className="badge text-bg-dark">Projects</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <FeaturedCarousel />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services py-5 py-lg-11 py-xl-12 bg-dark" id="services">
        <div className="container">
          <div className="d-flex flex-column gap-5 gap-xl-10">
            <div className="row gap-7 gap-xl-0">
              <div className="col-xl-4 col-xxl-4">
                <div
                  className="d-flex align-items-center gap-7 py-2"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <hr className="border-line bg-white" />
                  <span className="badge text-dark bg-white">Services</span>
                </div>
              </div>
              <div className="col-xl-8 col-xxl-7">
                <div className="row">
                  <div className="col-xxl-8">
                    <div
                      className="d-flex flex-column gap-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <h2 className="mb-0 text-white text-start">What we do</h2>
                      <p className="fs-5 mb-0 text-white text-opacity-70">
                        A glimpse into our creativity—exploring innovative designs, successful
                        collaborations, and transformative digital experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="services-tab"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <ServicesCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="meet-our-team py-5 py-lg-11 py-xl-12">
        <div className="container">
          <div className="d-flex flex-column gap-5 gap-xl-11">
            <div className="row gap-7 gap-xl-0">
              <div className="col-xl-4 col-xxl-4">
                <div
                  className="d-flex align-items-center gap-7 py-2"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <hr className="border-line bg-white" />
                  <span className="badge text-bg-dark">The team</span>
                </div>
              </div>
              <div className="col-xl-8 col-xxl-7">
                <div className="row">
                  <div className="col-xxl-8">
                    <div
                      className="d-flex flex-column gap-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <h2 className="mb-0">Our Team</h2>
                      <p className="fs-5 mb-0 text-opacity-70">
                        Our team is committed to redefining digital experiences through innovative web
                        solutions while fostering a diverse and collaborative environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {[
                { name: 'Lutaaya Nicholas', role: 'Production Director', email: 'nicholas.l@wak-ati.com', img: '/assets/images/team/team-img-4.png', delay: 100 },
                { name: 'Okiror Timothy', role: 'Creative Director', email: 'timothy.o@wak-ati.com', img: '/assets/images/team/team-img-3.png', delay: 200 },
                { name: 'Kamugisha Danison', role: 'Marketing and Business Development', email: 'danison.k@wak-ati.com', img: '/assets/images/team/team-img-2.png', delay: 300 },
                { name: 'Ebidu Boniface', role: 'Communications Director', email: 'boniface.e@wak-ati.com', img: '/assets/images/team/team-img-1.jpg', delay: 400 },
              ].map((member) => (
                <div key={member.name} className="col-md-6 col-xl-3 mb-7 mb-xl-0">
                  <div
                    className="meet-team d-flex flex-column gap-4"
                    data-aos="fade-up"
                    data-aos-delay={member.delay}
                    data-aos-duration="1000"
                  >
                    <div className="meet-team-img position-relative overflow-hidden">
                      <img src={member.img} alt={member.name} className="img-fluid w-100" />
                      <div className="meet-team-overlay p-7 d-flex flex-column justify-content-end">
                        <ul className="social list-unstyled mb-0 hstack gap-2 justify-content-end">
                          <li>
                            <a href="#!" className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center">
                              <img src="/assets/images/svgs/icon-twitter.svg" alt="twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center">
                              <img src="/assets/images/svgs/icon-be.svg" alt="be" />
                            </a>
                          </li>
                          <li>
                            <a href="#!" className="btn bg-white p-2 round-45 rounded-circle hstack justify-content-center">
                              <img src="/assets/images/svgs/icon-linkedin.svg" alt="linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="meet-team-details">
                      <h4 className="mb-0">{member.name}</h4>
                      <p className="mb-0">{member.role}</p>
                      <a href={`mailto:${member.email}`} className="team-work-email">
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing / CTA ── */}
      <section className="pricing-section py-5 py-lg-11 py-xl-12 bg-light-gray figma-section-promo">
        <div className="container">
          <div className="d-flex flex-column gap-5 gap-xl-10">
            <div
              className="figma-promo-shell position-relative"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="pricing-feature-card position-relative overflow-hidden">
                <div className="pricing-feature-copy">
                  <span className="pricing-feature-eyebrow"></span>
                  <h2 className="pricing-feature-title mb-0">
                    Crafting Stories
                    <br />
                    That Move Brands
                  </h2>
                  <p className="pricing-feature-text mb-0">
                    From content creation and brand strategy to full-scale production, Wakati Media helps
                    businesses, ministries, and organizations tell powerful stories with impact.
                  </p>
                  <div className="pricing-feature-actions">
                    <Link href="/contact" className="pricing-feature-btn pricing-feature-btn-primary">
                      Get Started
                    </Link>
                    <Link href="/projects" className="pricing-feature-btn pricing-feature-btn-secondary">
                      View Our Work
                    </Link>
                  </div>
                </div>
              </div>
              <a
                href="/assets/images/backgrounds/wakati-camera.png"
                className="pricing-feature-media-exact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open camera asset"
              >
                <img
                  src="/assets/images/backgrounds/wakati-camera.png"
                  alt="Professional cinema camera"
                  className="pricing-feature-image pricing-feature-image-animated"
                />
              </a>
            </div>

            {/* Partners marquee */}
            <div
              className="d-flex flex-column gap-8 figma-partners-strip"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <p className="fs-5 mb-0 text-center text-dark">More than 98 trusted partners &amp; clients</p>
              <div className="marquee w-100 d-flex align-items-center overflow-hidden">
                <div className="marquee-content d-flex align-items-center gap-8">
                  {[...partnerLogos, ...partnerLogos].map((n, i) => (
                    <div key={i} className="marquee-tag hstack justify-content-center">
                      <img
                        src={`/assets/images/pricing/partner-logo-${n}.png`}
                        alt="partner logo"
                        className="img-fluid"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
