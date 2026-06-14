import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NREP / Ministry of Energy — Wakati Media Projects',
  description:
    'Wakati Media spearheaded content creation for the Ministry of Energy and Mineral Development under the National Renewable Energy Programme.',
};

export default function ProjectDetail1Page() {
  return (
    <div className="page-wrapper overflow-hidden">

      {/* Banner */}
      <section
        className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
        style={{ backgroundImage: 'url(/assets/images/backgrounds/project1-inside.png)' }}
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
              <h1 className="mb-0 fs-16 text-white lh-1">Documentary</h1>
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
                    NREP / Ministry of Energy and Mineral Development: Clean Cooking Campaign,
                    Renewable Energy Conference 2025 &amp; a Documentary about the Lung Institute
                  </p>
                  <h4>1. About the Project</h4>
                  <p className="fs-5 mb-6">
                    Wakati Media spearheaded content creation for the Ministry of Energy and Mineral
                    Development under the National Renewable Energy Programme, a government-led initiative
                    aimed at accelerating Uganda&apos;s transition to clean, sustainable energy. Our work
                    spanned two major engagements: the national Clean Cooking Campaign and the Renewable
                    Energy Conference 2025.
                  </p>
                  <h4>2. What the Client Needed to Communicate</h4>
                  <p className="fs-5 mb-6">
                    The Clean Cooking Campaign required content that could reach everyday Ugandans,
                    particularly households still reliant on traditional biomass, with a clear, accessible
                    message about the health, economic, and environmental benefits of clean cooking
                    solutions. The Renewable Energy Conference 2025, on the other hand, demanded polished
                    event coverage to document key discussions, capture high-level engagements, and produce
                    content suitable for both broadcast and digital platforms.
                  </p>
                  <h4>3. What We Delivered</h4>
                  <p className="fs-5 mb-0">
                    For the Clean Cooking Campaign, we produced promotional content that simplified complex
                    messaging and connected with audiences on a grassroots level. For the Renewable Energy
                    Conference 2025, we provided full event coverage, capturing keynote sessions, panel
                    discussions, and stakeholder moments, delivering a professional production that
                    reflected the significance of Uganda&apos;s energy transition agenda.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="row">
              <div className="col-12 mb-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <img src="/assets/images/portfolio/portfolio-img-4.jpg" alt="NREP project" className="w-100 object-fit-cover" />
              </div>
              <div className="col-lg-6 mb-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <img src="/assets/images/portfolio/portfolio-img-2.jpg" alt="NREP project" className="w-100 object-fit-cover" />
              </div>
              <div className="col-lg-6 mb-7" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <img src="/assets/images/portfolio/portfolio-img-3.jpg" alt="NREP project" className="w-100 object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
