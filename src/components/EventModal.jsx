import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function EventModal({ event, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.activeElement;
    return () => prev?.focus();
  }, []);

  // Trap focus / close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        background: 'rgba(45, 27, 21, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Details: ${event.title}`}
    >
      <motion.div
        initial={{ scale: 0.88, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.88, y: 40, opacity: 0 }}
        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
        style={{
          background: '#FFFDF9',
          border: '2px solid var(--gold-dark)',
          borderRadius: '16px',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 25px 70px rgba(191, 54, 12, 0.25), 0 0 0 1px rgba(245, 158, 11, 0.2)',
        }}
      >
        {/* Tricolor top border */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '5px',
          background: 'linear-gradient(90deg, var(--saffron-vibrant) 33%, white 33%, white 66%, var(--green-india) 66%)',
          zIndex: 11,
        }} />

        {/* Close button */}
        <button
          ref={closeRef}
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 12,
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1.5px solid var(--gold-dark)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--saffron-vibrant)',
            boxShadow: '0 4px 12px rgba(191, 54, 12, 0.15)',
          }}
          aria-label="Close event details"
        >
          <X size={20} />
        </button>

        {/* Poster banner */}
        <div style={{ height: 280, overflow: 'hidden', borderBottom: '3px solid var(--gold-dark)', position: 'relative' }}>
          <ImageWithFallback
            src={event.imagePath}
            alt={`${event.title} full poster`}
            title={event.title}
            imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Modal content body */}
        <div style={{ padding: '2.5rem 2rem' }}>
          <div style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.25rem 0.85rem',
              background: 'var(--saffron-vibrant)',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              borderRadius: '100px',
            }}>
              {event.category}
            </span>
            {event.featured && (
              <span style={{
                display: 'inline-block',
                padding: '0.25rem 0.85rem',
                background: 'var(--gold-dark)',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderRadius: '100px',
              }}>
                ⭐ Flagship Initiative
              </span>
            )}
          </div>

          <h2 className="font-yatra" style={{ fontSize: '2.2rem', color: 'var(--text-dark)', marginBottom: '0.4rem', lineHeight: 1.2 }}>
            {event.title}
          </h2>

          {event.subtitle && (
            <p style={{ color: 'var(--saffron-deep)', fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '1rem', fontWeight: 600 }}>
              {event.subtitle}
            </p>
          )}

          {(event.date || event.venue || event.time || event.prizes) && (
            <div style={{
              background: 'rgba(255,103,31,0.06)',
              border: '1px solid rgba(255,103,31,0.2)',
              borderRadius: '8px',
              padding: '0.85rem 1.25rem',
              marginBottom: '1.8rem',
              fontSize: '0.92rem',
              color: 'var(--text-dark)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
            }}>
              {(event.date || event.time) && (
                <div>
                  <strong>📅 Date & Time:</strong> {[event.date, event.time].filter(Boolean).join(' · ')}
                </div>
              )}
              {event.venue && (
                <div>
                  <strong>📍 Venue:</strong> {event.venue}
                </div>
              )}
              {event.prizes && (
                <div>
                  <strong>🏆 Recognition & Awards:</strong> {event.prizes}
                </div>
              )}
            </div>
          )}

          <h4 className="font-yatra" style={{ fontSize: '1.25rem', color: 'var(--terracotta)', marginBottom: '1rem' }}>
            Event Highlights & Impact
          </h4>

          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {event.bullets.map((b, i) => (
              <li key={i} style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.02rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: '2px', color: 'var(--saffron-vibrant)', fontSize: '1.2rem' }}>🪷</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
