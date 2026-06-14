import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kiboko Egabude Campaign — Wakati Media Projects',
  description:
    'Wakati Media partnered with Capital FM on the Kiboko Egabude campaign, producing promotional and commercial content that resonated with a wide, engaged audience.',
};

export default function ProjectDetail2Page() {
  return (
    <div className="page-wrapper overflow-hidden">

      {/* Banner */}
      <section
        className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
        style={{ backgroundImage: 'url(/assets/images/backgrounds/kibokoinside.jpg)' }}
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
              <h1 className="mb-0 fs-16 text-white lh-1">Kiboko Egabudde</h1>
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
                    Kiboko Egabude Campaign / Capital FM Service: Promotional &amp; Commercial Content Production
                  </p>
                  <h4>1. About the Project</h4>
                  <p className="fs-5 mb-6">
                    Wakati Media partnered with Capital FM on the Kiboko Egabude campaign, contributing to
                    content creation for one of Uganda&apos;s culturally vibrant media-driven campaigns. The
                    collaboration brought together Wakati Media&apos;s visual production capabilities with
                    Capital FM&apos;s broadcast reach to create content that resonated with a wide, engaged
                    audience.
                  </p>
                  <h4>2. What the Client Needed to Communicate</h4>
                  <p className="fs-5 mb-6">
                    The campaign called for content that was energetic, culturally relevant, and deeply
                    connected to its audience. It needed to reflect the spirit of the campaign — lively,
                    relatable, and shareable — while maintaining a consistent and professional production
                    standard across all touchpoints.
                  </p>
                  <h4>3. What We Delivered</h4>
                  <p className="fs-5 mb-0">
                    We produced promotional and commercial content that captured the campaign&apos;s energy
                    and amplified its message across platforms. Working alongside Capital FM, we ensured
                    that the visual content complemented the broadcast elements seamlessly, creating a
                    unified campaign experience that audiences could connect with.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="row">
              <div className="col-12 mb-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <img src="/assets/images/portfolio/kiboko-img-2.jpg" alt="Kiboko Egabude campaign" className="w-100 object-fit-cover" />
              </div>
              <div className="col-lg-6 mb-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <img src="/assets/images/portfolio/kiboko-img-4.jpg" alt="Kiboko Egabude campaign" className="w-100 object-fit-cover" />
              </div>
              <div className="col-lg-6 mb-7" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <img src="/assets/images/portfolio/kiboko-img-3.jpg" alt="Kiboko Egabude campaign" className="w-100 object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
