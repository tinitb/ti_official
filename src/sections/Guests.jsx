import { motion } from 'framer-motion';
import { GUESTS } from '../data/guests';
import ImageWithFallback from '../components/ImageWithFallback';

function GuestCard({ guest, idx }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -7, transition: { duration: 0.25, ease: 'easeOut' } }}
      style={{ textAlign: 'center' }}
    >
      <div
        className="jharokha-card"
        style={{
          padding: '2.2rem 1.4rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        {/* Circular ornate portrait with royal halo */}
        <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 135,
            height: 135,
            borderRadius: '50%',
            border: '3px solid var(--gold-dark)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.6), 0 0 15px rgba(255,122,26,0.2)',
            overflow: 'hidden',
            background: 'var(--bg-parchment-dark)',
            position: 'relative',
          }}>
            <ImageWithFallback
              src={guest.imagePath}
              alt={`Portrait of ${guest.name}`}
              title={guest.name}
              imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <h3 className="font-yatra" style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '0.45rem', lineHeight: 1.3 }}>
          {guest.name}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 500 }}>
          {guest.designation}
        </p>
      </div>
    </motion.div>
  );
}

export default function Guests() {
  return (
    <section className="section" id="guests" style={{ background: 'transparent' }}>
      <div className="section-inner" style={{ maxWidth: 1200 }}>

        {/* Heading */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <span className="shloka-pill">
              <span>🌺</span>
              <span>॥ अतिथि देवो भव ॥</span>
            </span>
          </div>

          <h2 className="section-title font-yatra" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.6rem)', color: 'var(--text-dark)' }}>
            Distinguished <span style={{ color: 'var(--saffron-vibrant)' }}>Previous Guests</span>
          </h2>

          <p className="section-desc">
            Visionary leaders, authors, civil servants, innovators, and entrepreneurs who have addressed and inspired the MANIT community.
          </p>

          <div className="cultural-divider" aria-hidden="true">
            <span>🪷</span>
          </div>
        </motion.div>

        {/* 10 Guest Cards in Responsive Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '2rem',
        }}>
          {GUESTS.map((guest, idx) => (
            <GuestCard key={guest.id} guest={guest} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
