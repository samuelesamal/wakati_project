import type { Metadata } from 'next';
import Link from 'next/link';
import CountUp from '@/components/CountUp';

export const metadata: Metadata = {
  title: 'About Us — Wakati Media',
  description:
    'Wakati Media Limited is a full-service media production house specialising in audio-visual storytelling. Learn about our mission, vision, and team.',
};

export default function AboutPage() {
  return (
    <div className="page-wrapper overflow-hidden">

      {/* Banner */}
      <section
        className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
        style={{ backgroundImage: 'url(/assets/images/backgrounds/aboutus-banner.jpg)' }}
      >
        <div className="container">
          <div className="d-flex flex-column gap-4 pb-5 pb-xl-10 position-relative z-1">
            <div className="row align-items-center">
              <div className="col-xl-4">
                <div className="d-flex align-items-center gap-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <div
                    className="shared-lottie-icon"
                    data-animation-path="/assets/images/svgs/wakati-motion-logo.json"
                    data-start-frame="0"
                    data-end-frame="100"
                    aria-hidden="true"
                  >
                    <img
                      src="/assets/images/svgs/wakati-motion-fallback.svg"
                      alt=""
                      className="shared-lottie-fallback img-fluid"
                    />
                  </div>
                  <p className="mb-0 text-white fs-5 text-opacity-70">
                    We craft{' '}
                    <span className="text-primary">innovative digital</span> designs that amplify brand
                    identity and drive meaningful results
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-end gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <h1 className="mb-0 fs-16 text-white lh-1">About us</h1>
              <a href="#" className="p-1 ps-7 bg-primary rounded-pill">
                <span className="bg-white round-52 rounded-circle d-flex align-items-center justify-content-center">
                  {/* @ts-ignore */}
                  <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content py-5 py-lg-11 py-xl-12">
        <div className="container">
          <div className="d-flex flex-column gap-5 gap-xl-11 gap-xxl-12">
            <div className="row gap-4 gap-lg-0">
              <div className="col-lg-4">
                <h2 className="fs-13 mb-0" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                  Wakati.
                </h2>
              </div>
              <div className="col-lg-8">
                <h2>Who We Are</h2>
                <div className="d-flex flex-column gap-4 gap-lg-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <p className="mb-0 fs-5 text-dark">
                    Wakati Media Limited is a customer-centric media production house built around timely storytelling. "Wakati" means time in
Kiswahili, and for the company, time reflects both the moments it captures and the discipline it brings to delivery. Wakati
works closely with brands, organizations, and communities to understand their vision, shape it into a compelling story, and
deliver polished audio-visual content with creativity, excellence, reliability, and speed.
                  </p>
                  <h2>Our Mission</h2>
                  <p className="mb-0 fs-5 text-dark">
                    To craft impactful stories through audio and visual production that connect brands with
                    audiences, while ensuring timely delivery and exceptional quality.
                  </p>
                  <h2>Our Vision</h2>
                  <p className="mb-0 fs-5 text-dark">
                    To be a trusted and customer-centric media production house in Africa, setting a
                    standard for excellence, creativity, and innovation in storytelling.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="row gx-xl-5">
              {[
                { target: 85, suffix: '+', title: 'Product Launches in Uganda', desc: 'Expanding reach across East Africa.', delay: 100 },
                { target: 600, suffix: '+', title: 'Projects', desc: 'Driving growth with curated partnerships and high-performing, audience-driven initiatives.', delay: 1000 },
                { target: 200, suffix: '+', title: 'Trusted brand collaborations', desc: 'Shaping industry through creativity, and lasting influence.', delay: 300 },
              ].map((stat) => (
                <div key={stat.title} className="col-md-6 col-lg-4 mb-8 mb-lg-0">
                  <div className="d-flex flex-column gap-7" data-aos="fade-up" data-aos-delay={stat.delay} data-aos-duration="1000">
                    <h2 className="mb-0 fs-13 pb-7 border-bottom">
                      <CountUp target={stat.target} duration={1000} />{stat.suffix}
                    </h2>
                    <div className="d-flex flex-column gap-3">
                      <h4 className="mb-0">{stat.title}</h4>
                      <p className="mb-0">{stat.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Image */}
      <section className="about-img">
        <img src="/assets/images/about/about-img.jpg" alt="About Wakati" className="w-100 object-fit-cover" />
        <div className="marquee w-100 d-flex align-items-center overflow-hidden bg-primary py-4">
          <div className="marquee-content d-flex align-items-center gap-8">
            {[
              'Corporate Events Coverage',
              'Video Adverts and Commercials',
              'Script Writing and Story Telling',
              'Product Launching and Campaigns',
              'Audio Production',
              'Corporate Events Coverage',
              'Video Adverts and Commercials',
              'Script Writing and Story Telling',
              'Product Launching and Campaigns',
              'Audio Production',
            ].map((item, i) => (
              <div key={i} className="hstack gap-4 flex-shrink-0">
                <h4 className="mb-0">{item}</h4>
                <span className="round-10 bg-dark bg-opacity-10 rounded-circle flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
