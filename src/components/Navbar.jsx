import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.jpg';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Why Us',      href: '#why' },
  { label: 'Events',      href: '#events' },
  { label: 'Bharat Buzz', href: '#buzz' },
  { label: 'Guests',      href: '#guests' },
  { label: 'Sampark',     href: '#contact' },
];

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    const id = href.replace('#', '');

    if (currentPage !== 'home') {
      if (onNavigate) onNavigate('home');
      setTimeout(() => {
        if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const target = document.getElementById(id);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`nav-container ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Brand */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            aria-label="Think India MANIT — go to top"
          >
            <div
              className="nav-logo-img-wrapper"
              style={{ width: 55, height: 55, borderRadius: '50%', background: 'white', padding: 4, border: '2px solid var(--terracotta)', boxShadow: '0 4px 10px rgba(191,54,12,0.2)', flexShrink: 0 }}
            >
              <img src={logoImg} alt="Think India Logo" width="47" height="47" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
            </div>
            <div>
              <span className="font-yatra nav-title" style={{ display: 'block', fontSize: '1.4rem', color: 'var(--text-dark)', letterSpacing: '1px' }}>THINK INDIA</span>
              <span className="nav-subtitle" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--terracotta)', textTransform: 'uppercase' }}>MANIT Chapter</span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <motion.ul
              style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="desktop-nav"
            >
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = currentPage === 'home' && activeSection === sectionId;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="nav-link"
                      onClick={(e) => handleNavClick(e, link.href)}
                      aria-current={isActive ? 'page' : undefined}
                      style={{ color: isActive ? 'var(--terracotta)' : undefined }}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-bar"
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: 2,
                            background: 'var(--gold-dark)',
                            borderRadius: 2,
                          }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </motion.ul>

            {/* Mobile hamburger */}
            <motion.button
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: 'none', zIndex: 1001, position: 'relative', padding: '0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d={menuOpen ? 'M18 6L6 18M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, background: 'var(--bg-parchment)', zIndex: 1000,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.8rem',
              padding: '2rem',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = currentPage === 'home' && activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-yatra"
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontSize: '1.6rem',
                    color: isActive ? 'var(--terracotta)' : 'var(--text-dark)',
                    textDecoration: 'none',
                    letterSpacing: '1px',
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
