import { motion } from 'framer-motion';

export default function CTA({ onNavigate }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="section"
      id="cta"
      style={{ background: 'transparent', padding: '5rem 2rem', textAlign: 'center' }}
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            border: '1.5px solid var(--bg-card-border)',
            borderRadius: '20px',
            padding: '4.5rem 2rem',
            boxShadow: '0 20px 60px rgba(191, 54, 12, 0.1), inset 0 0 0 1px rgba(255,213,79,0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="pattern-rangoli" aria-hidden="true" />

          {/* Top tricolor ribbon */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '5px',
            background: 'linear-gradient(90deg, var(--saffron-vibrant) 33%, white 33%, white 66%, var(--green-india) 66%)',
          }} />

          <motion.div
            style={{ marginBottom: '1.2rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="shloka-pill">
              <span>🚩</span>
              <span>॥ उत्तिष्ठत जाग्रत ॥</span>
            </span>
          </motion.div>

          <h2
            className="font-yatra"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: 'var(--text-dark)', marginBottom: '1.2rem', lineHeight: 1.2, position: 'relative', zIndex: 1 }}
          >
            Ready to Shape the Future of <span style={{ color: 'var(--saffron-vibrant)' }}>Bharat</span>?
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.18rem', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2.5rem', fontWeight: 500, position: 'relative', zIndex: 1 }}>
            Become part of a vibrant student movement that believes in India — her living civilizational values, her technological prowess, and her self-reliant future. Join Think India MANIT Chapter today.
          </p>

          <motion.div
            style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, translateY: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn-cultural"
              onClick={() => scrollTo('contact')}
              type="button"
            >
              Join The Chapter
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, translateY: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn-cultural-outline"
              onClick={() => onNavigate ? onNavigate('events') : scrollTo('events')}
              type="button"
            >
              Explore All Events →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
