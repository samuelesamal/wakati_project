import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'M-KOPA & Uganda Baati — Wakati Media Projects',
  description:
    'Wakati Media produced commercial and promotional content for M-KOPA and Uganda Baati, delivering visuals that were sharp, purposeful, and built to perform.',
};

export default function ProjectsDetailPage() {
  return (
    <div className="page-wrapper overflow-hidden">

      {/* Banner */}
      <section
        className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
        style={{ backgroundImage: 'url(/assets/images/backgrounds/m-kopabanner.jpg)' }}
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
                    <img src="/assets/images/svgs/wakati-motion-fallback.svg" alt="" className="shared-lottie-fallback img-fluid" />
                  </div>
                  <p className="mb-0 text-white fs-5 text-opacity-70">
                    A <span className="text-primary">showcase of creativity</span>, strategy, and results — explore the projects that define us.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-end gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <h1 className="mb-0 fs-16 text-white lh-1">M-KOPA Media Press</h1>
              <span className="p-1 ps-7 bg-primary rounded-pill">
                <span className="bg-white round-52 rounded-circle d-flex align-items-center justify-content-center">
                  {/* @ts-ignore */}
                  <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail */}
      <section className="project-detail py-5 py-lg-11 py-xl-12">
        <div className="container">
          <div className="d-flex flex-column gap-5 gap-xl-11">
            <div className="d-flex flex-column gap-8">
              <Link
                href="/projects"
                className="btn py-2 ps-3 pe-5"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <span className="btn-text pe-1">Back</span>
                {/* @ts-ignore */}
                <iconify-icon
                  icon="lucide:arrow-up-right"
                  className="btn-icon bg-white text-dark round-36 rounded-circle hstack justify-content-center fs-5 shadow-sm"
                />
              </Link>
            </div>

            <div className="row gap-4 gap-lg-0">
              <div className="col-lg-4">
                <h2 className="fs-13 mb-0" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                  Description
                </h2>
              </div>
              <div className="col-lg-8">
                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <p className="fs-5 mb-6">
                    M-KOPA | Uganda Baati Service: Commercial &amp; Promotional Content Production
                  </p>
                  <h4>1. About the Project</h4>
                  <p className="fs-5 mb-6">
                    Wakati Media has worked with leading Ugandan and regional brands, including M-KOPA,
                    the pay-as-you-go asset financing platform, and Uganda Baati, a market leader in
                    roofing and building solutions, to produce commercial and promotional content that
                    represents their products and brand values with clarity and impact.
                  </p>
                  <h4>2. What the Client Needed to Communicate</h4>
                  <p className="fs-5 mb-6">
                    Both brands required content that connected with target audiences, whether
                    communicating product value, brand trust, or specific campaign messaging. The content
                    needed to be visually polished, brand-aligned, and effective across digital and
                    broadcast platforms.
                  </p>
                  <h4>3. What We Delivered</h4>
                  <p className="fs-5 mb-0">
                    We delivered commercial content tailored to each brand&apos;s identity and communication
                    goals, producing visuals that were sharp, purposeful, and built to perform. Our
                    productions for M-KOPA and Uganda Baati reflect our ability to work across industries
                    and adapt our storytelling approach to serve diverse brand voices.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="row">
              <div className="col-12 mb-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <img src="/assets/images/portfolio/mkopa-img-4.jpg" alt="M-KOPA project" className="w-100 object-fit-cover" />
              </div>
              <div className="col-lg-6 mb-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <img src="/assets/images/portfolio/mkopa-img-6.jpg" alt="M-KOPA project" className="w-100 object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
