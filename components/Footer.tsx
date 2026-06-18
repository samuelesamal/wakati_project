import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-dark py-5 py-lg-11 py-xl-12 figma-footer">
      <div className="container">
        <div className="row">
          {/* Left: Contact Info */}
          <div className="col-xl-5 mb-8 mb-xl-0">
            <div className="d-flex flex-column gap-8 pe-xl-5">
              <h2 className="mb-0 text-white">Build something together?</h2>
              <div className="d-flex flex-column gap-2">
                <a
                  href="mailto:wakatimedialtd@gmail.com"
                  className="link-hover hstack gap-3 text-white fs-5"
                >
                  {/* @ts-ignore */}
                  <iconify-icon icon="lucide:arrow-up-right" className="fs-7 text-primary" />
                  infor@wak-ati.com
                </a>
                <a
                  href="mailto:infor@wak-ati.com"
                  className="link-hover hstack gap-3 text-white fs-5"
                >
                  {/* @ts-ignore */}
                  <iconify-icon icon="lucide:mail" className="fs-7 text-primary" />
                  infor@wak-ati.com
                </a>
                <a
                  href="https://maps.google.com/?q=Mukisa+Mall+Room+25+Ntinda+Bukoto+Kampala+Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover hstack gap-3 text-white fs-5"
                >
                  {/* @ts-ignore */}
                  <iconify-icon icon="lucide:map-pin" className="fs-7 text-primary" />
                  Valley Drive close, Ntinda-Kisasi road, Opposite Ndere Centre.
                  P.O BOX 120573 KAMPALA GPO
                </a>
              </div>

              {/* Social Icons */}
              <div className="footer-social-brand">
                <div className="footer-social-icons">
                  <a
                    href="https://www.youtube.com/results?search_query=wakati+media+256"
                    className="footer-social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <img src="/assets/images/svgs/social-youtube.svg" alt="YouTube" />
                  </a>
                  <a
                    href="https://x.com/WakatiMedia256"
                    className="footer-social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                  >
                    <img src="/assets/images/svgs/social-x.svg" alt="X" />
                  </a>
                  <a
                    href="https://www.instagram.com/wakatimedia256/"
                    className="footer-social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <img src="/assets/images/svgs/social-instagram.svg" alt="Instagram" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@wakatimedia256"
                    className="footer-social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                  >
                    <img src="/assets/images/svgs/social-tiktok.svg" alt="TikTok" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/wakati-media-production/"
                    className="footer-social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <img src="/assets/images/svgs/social-linkedin.svg" alt="LinkedIn" />
                  </a>
                </div>
                <span className="footer-social-label">Wakati Media 256</span>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="col-md-4 col-xl-2 mb-8 mb-xl-0">
            <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
              <li><Link className="link-hover fs-5 text-white" href="/">Home</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/about">About</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/#services">Services</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/projects">Work</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="#">Terms</Link></li>
              <li><Link className="link-hover fs-5 text-white" href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social handle list */}
          <div className="col-md-4 col-xl-2 mb-8 mb-xl-0">
            <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
              <li><a className="link-hover fs-5 text-white" href="https://www.linkedin.com/company/wakati-media-production/" target="_blank" rel="noopener noreferrer">LinkedIn: Wakati Media 256</a></li>
              <li><a className="link-hover fs-5 text-white" href="https://www.instagram.com/wakatimedia256/" target="_blank" rel="noopener noreferrer">Instagram: wakati media 256</a></li>
              <li><a className="link-hover fs-5 text-white" href="https://www.youtube.com/results?search_query=wakati+media+256" target="_blank" rel="noopener noreferrer">YouTube: wakati media 256</a></li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="col-md-4 col-xl-3 mb-8 mb-xl-0">
            <p className="mb-0 text-white text-opacity-70 text-md-end figma-footer-copyright">
              © 2025 Wakati Media. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <p className="mb-0 text-white text-opacity-70 text-md-center figma-footer-credit"></p>
    </footer>
  );
}
