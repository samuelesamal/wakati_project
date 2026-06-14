'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/projects' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`header border-4 border-primary border-top position-fixed start-0 top-0 w-100${scrolled ? ' fixed-header' : ''
        }`}
    >
      <div className="container">
        <div className="header-wrapper header-app-shell d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="logo">
            <Link href="/" className="logo-white">
              <Image
                src="/assets/images/logos/logo-white.png"
                alt="Wakati Media"
                width={130}
                height={40}
                className="img-fluid"
                priority
              />
            </Link>
            <Link href="/" className="logo-dark">
              <Image
                src="/assets/images/logos/logo-dark.png"
                alt="Wakati Media"
                width={130}
                height={40}
                className="img-fluid"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="header-inline-nav d-none d-lg-flex align-items-center" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="header-inline-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="header-inline-actions d-none d-lg-flex align-items-center">
            <Link href="/contact" className="header-inline-signup">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="d-flex align-items-center gap-4">
            <div className="d-lg-none">
              <button
                className="btn btn-secondary toggle-menu round-45 p-2 d-flex align-items-center justify-content-center bg-white rounded-circle"
                type="button"
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {/* @ts-ignore */}
                <iconify-icon icon="solar:hamburger-menu-line-duotone" className="menu-icon fs-8 text-dark" />
              </button>

              {/* Mobile Dropdown */}
              {menuOpen && (
                <div
                  className="dropdown-menu dropdown-menu-end p-4 show position-fixed"
                  style={{ top: '70px', right: '16px', zIndex: 9999, minWidth: '240px' }}
                >
                  <div className="d-flex flex-column gap-6">
                    <div className="hstack justify-content-between border-bottom pb-6">
                      <p className="mb-0 fs-5 text-dark">Menu</p>
                      <button
                        type="button"
                        className="btn-close opacity-75"
                        aria-label="Close"
                        onClick={() => setMenuOpen(false)}
                      />
                    </div>
                    <ul className="header-menu list-unstyled mb-0 d-flex flex-column gap-2">
                      {navLinks.map((link) => (
                        <li key={link.href} className="header-item">
                          <Link
                            href={link.href}
                            className="header-link fs-7 fw-bold text-dark"
                            onClick={() => setMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                      <li className="header-item">
                        <Link
                          href="/contact"
                          className="header-link fs-7 fw-bold text-dark"
                          onClick={() => setMenuOpen(false)}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
