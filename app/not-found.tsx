import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-wrapper overflow-hidden">
      <section
        className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh', background: '#0d0d0d' }}
      >
        <div className="container text-center position-relative z-1">
          <h1 className="text-white" style={{ fontSize: '8rem', fontWeight: 900, lineHeight: 1 }}>
            404
          </h1>
          <h2 className="text-white mb-4">Page Not Found</h2>
          <p className="text-white text-opacity-70 fs-5 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="btn stats-cta-btn">
            <span className="btn-text">Go Home</span>
            {/* @ts-ignore */}
            <iconify-icon
              icon="lucide:arrow-up-right"
              className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
