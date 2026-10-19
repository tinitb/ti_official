import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EVENTS } from '../data/events';
import ImageWithFallback from '../components/ImageWithFallback';
import EventModal from '../components/EventModal';

// ── Flagship Showcase Card ──────────────────────────────────────────────────
function FlagshipEventCard({ event, idx, onOpen }) {
  const isReverse = idx % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: isReverse ? '1.1fr 1fr' : '1fr 1.1fr',
        gap: '3rem',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        padding: '2.5rem',
        borderRadius: '18px',
        border: '1.5px solid var(--bg-card-border)',
        boxShadow: '0 15px 45px rgba(191, 54, 12, 0.08), inset 0 0 0 1px rgba(255, 213, 79, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="flagship-card"
    >
      {/* Top tricolor highlight */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: '4px',
        background: 'linear-gradient(90deg, var(--saffron-vibrant) 33%, white 33%, white 66%, var(--green-india) 66%)'
      }} />

      {/* Text block */}
      <div style={{ order: isReverse ? 2 : 1 }}>
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span className="cultural-badge cultural-badge-saffron">
            {event.category}
          </span>
          {event.featured && (
            <span className="cultural-badge cultural-badge-gold">
              ⭐ Featured Initiative
            </span>
          )}
          {event.date && (
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              📅 {event.date}
            </span>
          )}
        </div>

        <h3 className="font-yatra" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', color: 'var(--text-dark)', marginBottom: '0.5rem', lineHeight: 1.25 }}>
          {event.title}
        </h3>

        {event.subtitle && (
          <p style={{ color: 'var(--saffron-deep)', fontSize: '1rem', fontWeight: 600, fontStyle: 'italic', marginBottom: '1.2rem' }}>
            {event.subtitle}
          </p>
        )}

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {event.bullets.slice(0, 2).map((b, i) => (
            <li key={i} style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.75, fontWeight: 500, paddingLeft: '1.4rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--saffron-vibrant)', fontSize: '1.1rem' }}>✦</span>
              {b}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            className="btn-cultural"
            style={{ padding: '0.7rem 1.8rem', fontSize: '1rem' }}
            onClick={() => onOpen(event)}
            aria-label={`View full details for ${event.title}`}
          >
            <span>View Full Details</span>
            <span>→</span>
          </button>
          {event.venue && (
            <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              📍 {event.venue}
            </span>
          )}
        </div>
      </div>

      {/* Poster block */}
      <div style={{ order: isReverse ? 1 : 2 }}>
        <div
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            border: '3px solid var(--gold-dark)',
            boxShadow: '0 12px 30px rgba(191,54,12,0.15)',
            background: 'var(--bg-parchment-dark)',
            cursor: 'pointer',
            position: 'relative',
            aspectRatio: '16/10',
          }}
          onClick={() => onOpen(event)}
        >
          <ImageWithFallback
            src={event.imagePath}
            alt={`${event.title} poster`}
            title={event.title}
            imgStyle={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(45,27,21,0.6) 0%, transparent 60%)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '1rem',
            opacity: 0.9,
          }}>
            <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.5px' }}>
              🔍 Click to Enlarge Poster
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Events({ onNavigate }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Keep top 3 landmark events for homepage preview
  const previewEvents = EVENTS.slice(0, 3);

  return (
    <section className="section" id="events" style={{ background: 'transparent', position: 'relative' }}>
      <div className="section-inner">

        {/* Section Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ marginBottom: '1.2rem' }}>
            <span className="shloka-pill" aria-label="Sanskrit shloka: Charaiveti Charaiveti — Keep moving forward">
              <span>🌺</span>
              <span>॥ चरैवेति चरैवेति ॥</span>
            </span>
          </div>

          <h2 className="section-title font-yatra" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Glimpses of <span style={{ color: 'var(--saffron-vibrant)' }}>Our Journey</span>
          </h2>

          <p className="section-desc">
            Transformative student summits, heritage workshops, and nation-building initiatives shaping future leaders at MANIT Bhopal.
          </p>

          <div className="cultural-divider" aria-hidden="true">
            <span>🪷</span>
          </div>
        </motion.div>

        {/* 3 Featured Flagship Events */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {previewEvents.map((event, idx) => (
            <FlagshipEventCard
              key={event.id}
              event={event}
              idx={idx}
              onOpen={setSelectedEvent}
            />
          ))}
        </div>

        {/* Explore More Events Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: '5rem',
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'rgba(255, 255, 255, 0.94)',
            border: '1.5px dashed rgba(245, 158, 11, 0.5)',
            borderRadius: '16px',
            boxShadow: '0 15px 40px rgba(191, 54, 12, 0.08), inset 0 0 0 1px rgba(255,213,79,0.1)',
          }}
        >
          <div style={{ fontSize: '2.4rem', marginBottom: '1rem' }} aria-hidden="true">
            📜
          </div>
          <h3 className="font-yatra" style={{ fontSize: '2.2rem', color: 'var(--text-dark)', marginBottom: '0.8rem' }}>
            Discover Our Complete Spectrum of Events
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 2rem', lineHeight: 1.7, fontWeight: 500 }}>
            From Innofest startup talks and Voting Awareness campaigns with ECI to Freedom Walls and Pottery Workshops—explore our full chronological calendar.
          </p>
          <button
            className="btn-cultural"
            onClick={() => onNavigate ? onNavigate('events') : (window.location.hash = '#/events')}
            style={{ padding: '1rem 3rem', fontSize: '1.25rem', boxShadow: '0 10px 25px rgba(191,54,12,0.3)' }}
          >
            <span>🪷</span>
            <span>Explore More Events (12 Total)</span>
            <span>→</span>
          </button>
        </motion.div>

      </div>

      {/* Lightbox / Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .flagship-card {
            grid-template-columns: 1fr !important;
            padding: 1.75rem !important;
          }
          .flagship-card > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
