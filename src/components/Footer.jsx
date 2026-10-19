import { motion } from 'framer-motion';
import logoImg from '../assets/logo.jpg';

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    short: 'IG',
    href: 'https://instagram.com/thinkindia.manit',
    aria: 'Follow Think India MANIT on Instagram',
  },
  // TODO: Add real X (Twitter) and LinkedIn URLs when available
  // { label: 'X / Twitter', short: 'X',  href: 'https://twitter.com/...', aria: '...' },
  // { label: 'LinkedIn',     short: 'IN', href: 'https://linkedin.com/...', aria: '...' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer-section"
      id="contact"
      style={{ background: '#0B0705', color: 'var(--text-dark)', padding: '6rem 2rem 2rem', position: 'relative', borderTop: '1px solid rgba(245, 158, 11, 0.25)' }}
    >
      {/* Tricolor ribbon */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '6px',
        background: 'linear-gradient(90deg, var(--saffron-vibrant) 33%, white 33%, white 66%, var(--green-india) 66%)',
      }} />

      <div className="section-inner">
        <div
          className="grid-3 footer-grid"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4rem', marginBottom: '2rem' }}
        >
          {/* Column 1: Brand */}
          <div style={{ paddingRight: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'white', padding: 4, flexShrink: 0 }}>
                <img
                  src={logoImg}
                  alt="Think India MANIT Chapter Logo"
                  width="52"
                  height="52"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                />
              </div>
              <div>
                <span className="font-yatra" style={{ display: 'block', fontSize: '1.8rem', color: 'var(--gold-rich)', lineHeight: 1 }}>
                  THINK INDIA
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--white)', textTransform: 'uppercase' }}>
                  MANIT Chapter
                </span>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '1rem' }}>
              Fostering national consciousness and grooming young leaders to build a resurgent and self-reliant Bharat.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h2 className="font-yatra" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--gold-dark)' }}>
              Sampark (Contact)
            </h2>
            <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--gold-dark)' }} aria-hidden="true">📍</span>
                <span>MANIT Campus, Bhopal, Madhya Pradesh</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--gold-dark)' }} aria-hidden="true">✉️</span>
                <a
                  href="mailto:thinkindia@manit.ac.in"
                  style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--gold-dark)')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.9)')}
                >
                  thinkindia@manit.ac.in
                </a>
              </div>
            </address>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h2 className="font-yatra" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--gold-dark)' }}>
              Judein (Connect)
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {SOCIAL_LINKS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.aria}
                  style={{
                    width: 48, height: 48,
                    borderRadius: '50%',
                    border: '2px solid var(--gold-dark)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--gold-dark)',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ background: 'var(--gold-dark)', color: 'var(--green-dark)', scale: 1.1 }}
                >
                  {s.short}
                </motion.a>
              ))}
            </div>
            {/* TODO: Add X and LinkedIn icons when URLs are confirmed */}
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', marginTop: '1rem', fontStyle: 'italic' }}>
              More handles coming soon.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
          <p>© {year} Think India MANIT Chapter. Vande Mataram.</p>
          <p style={{ fontStyle: 'italic' }}>
            <span style={{ color: 'var(--saffron-vibrant)' }}>@thinkindia.manit</span> on Instagram
          </p>
        </div>
      </div>
    </footer>
  );
}
