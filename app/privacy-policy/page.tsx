import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Wakati Media',
  description: 'Understand the rules and guidelines before using Wakati Media services.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-wrapper overflow-hidden">

      {/* Banner */}
      <section
        className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
        style={{ backgroundImage: 'url(/assets/images/backgrounds/privacy-policy-banner.jpg)' }}
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
                    Understand the{' '}
                    <span className="text-primary">Rules &amp; Guidelines</span> Before Using Our Services
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-end gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <h1 className="mb-0 fs-16 text-white lh-1">Privacy Policy</h1>
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

      {/* Privacy Content */}
      <section className="privacy-policy py-5 py-lg-11">
        <div className="container">
          <p className="fs-5 text-dark fw-medium">
            This Privacy Statement explains how personal information about our (potential) customers and
            other individuals using our services is collected, used, and disclosed by{' '}
            <strong>Wakati Media Limited</strong> (&ldquo;us&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;). This Privacy Statement describes our
            privacy practices in relation to the use of our websites and services.
          </p>
          <p className="fs-5 text-dark fw-medium">
            By signing up for our Services and agreeing to our General Terms and Conditions, you consent to
            the collection, usage, storage, and disclosure of your information as described in this Privacy
            Statement.
          </p>
          <p className="fs-5 text-dark fw-medium">
            Our Services may contain links to external websites or services. The privacy practices and
            content of such sites or services will be governed by their respective privacy policies. We may
            update this Privacy Statement periodically. If changes occur, we will notify you by updating
            the date at the top of the statement.
          </p>

          <h4 className="my-4">Personal Information Collection</h4>
          <p className="fs-5 text-dark fw-medium">
            While using our Services, we may ask you to provide certain personally identifiable information
            that can be used to contact or identify you. This may include basic user details (such as your
            name, email address, telephone number, and profile picture), company information, and any other
            data you choose to share with us.
          </p>
          <p className="fs-5 text-dark fw-medium">
            We do not collect financial information (such as credit card details or security codes). All
            payments are handled through a third-party provider.
          </p>

          <h4 className="my-4">Personal Information You Provide to Us</h4>
          <p className="fs-5 text-dark fw-medium">
            When using our Services, you may provide personally identifiable information, such as when
            creating an account, requesting customer support, or interacting with our platform.
          </p>
          <p className="fs-5 text-dark fw-medium mb-0">
            As noted, we do not collect financial details directly. Payments are processed via third-party
            providers. Please review their privacy policy for details.
          </p>
        </div>
      </section>

    </div>
  );
}
