import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects — Wakati Media',
  description:
    'A showcase of creativity, strategy, and results — explore the projects that define Wakati Media.',
};

const projects = [
  {
    slug: 'project-detail1',
    title: 'NREP / Ministry of Energy and Mineral Development',
    image: '/assets/images/portfolio/project1.jpg',
    tags: ['Documentary', 'Event Coverage'],
  },
  {
    slug: 'project-detail2',
    title: 'Kiboko Egabude Campaign alongside Capital FM',
    image: '/assets/images/portfolio/kibokofront.jpg',
    tags: ['Campaign', 'Commercial Production'],
  },
  {
    slug: 'projects-detail',
    title: 'M-KOPA & Uganda Baati: Commercial & Promotional Content',
    image: '/assets/images/portfolio/mkopa-img-2.jpg',
    tags: ['Commercial', 'Brand Content'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="page-wrapper overflow-hidden">

      {/* Banner */}
      <section
        className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
        style={{ backgroundImage: 'url(/assets/images/backgrounds/projects-banner.jpg)' }}
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
              <h1 className="mb-0 fs-16 text-white lh-1">Portfolio</h1>
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

      {/* Projects Grid */}
      <section className="project py-5 py-lg-11 py-xl-12">
        <div className="container">
          <div className="row">
            {projects.map((project, i) => (
              <div key={project.slug} className="col-lg-6 mb-7">
                <div
                  className="portfolio d-flex flex-column gap-6"
                  data-aos="fade-up"
                  data-aos-delay={(i + 1) * 100}
                  data-aos-duration="1000"
                >
                  <div className="portfolio-img position-relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="img-fluid w-100" />
                    <div className="portfolio-overlay">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center"
                      >
                        {/* @ts-ignore */}
                        <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark" />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-details d-flex flex-column gap-3">
                    <h3 className="mb-0">{project.title}</h3>
                    {project.tags.length > 0 && (
                      <div className="hstack gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="badge text-dark border">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
