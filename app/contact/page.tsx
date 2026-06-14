import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Wakati Media',
  description:
    "Let's bring your story to life. Reach out to Wakati Media for content, strategy, and production solutions.",
};

export default function ContactPage() {
  return (
    <div className="page-wrapper overflow-hidden">

      {/* Banner */}
      <section
        className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
        style={{ backgroundImage: 'url(/assets/images/backgrounds/contact-banner.jpg)' }}
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
                    Let&apos;s bring <span className="text-primary">your story to life.</span> Reach out for
                    content, strategy, and production solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-end gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <h1 className="mb-0 fs-16 text-white lh-1">Contact</h1>
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

      {/* Contact Form */}
      <section className="get-in-touch py-5 py-lg-11 py-xl-12">
        <div className="container">
          <div className="contact-card" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="contact-card-header">
              <span className="contact-card-title">Get In Touch</span>
            </div>
            <form
              className="contact-card-form"
              action="https://formspree.io/f/mykagrgj"
              method="post"
            >
              <div className="contact-card-grid">
                <div className="contact-field">
                  <label htmlFor="contactFullName" className="contact-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="contact-input"
                    id="contactFullName"
                    placeholder="Your full name"
                    name="contactFullName"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contactEmail" className="contact-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="contact-input"
                    id="contactEmail"
                    placeholder="you@example.com"
                    name="contactEmail"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contactPhone" className="contact-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="contact-input"
                    id="contactPhone"
                    placeholder="+256 700 123 456"
                    name="contactPhone"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contactSubject" className="contact-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="contact-input"
                    id="contactSubject"
                    placeholder="How can we help you?"
                    name="contactSubject"
                  />
                </div>
              </div>
              <div className="contact-field contact-field-message">
                <label htmlFor="contactMessage" className="contact-label">
                  Message
                </label>
                <textarea
                  className="contact-textarea"
                  id="contactMessage"
                  placeholder="Tell us more about your project or inquiry..."
                  name="contactMessage"
                />
              </div>
              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
