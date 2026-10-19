import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, MapPin, ArrowLeft, Sparkles, Filter } from 'lucide-react';
import { EVENTS, EVENT_CATEGORIES } from '../data/events';
import ImageWithFallback from '../components/ImageWithFallback';
import EventModal from '../components/EventModal';

function PageEventCard({ event, onOpen }) {

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="jharokha-card"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Poster preview */}
      <div
        style={{
          position: 'relative',
          height: '220px',
          overflow: 'hidden',
          borderBottom: '3px solid var(--gold-dark)',
          background: 'var(--bg-parchment-dark)',
          cursor: 'pointer',
        }}
        onClick={() => onOpen(event)}
      >
        <ImageWithFallback
          src={event.imagePath}
          alt={`${event.title} poster`}
          title={event.title}
          imgStyle={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
        />
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          left: '0.75rem',
          display: 'flex',
          gap: '0.4rem',
          flexWrap: 'wrap',
          zIndex: 2,
        }}>
          <span className="cultural-badge cultural-badge-saffron" style={{ background: 'rgba(255, 255, 255, 0.95)', border: '1px solid var(--saffron-vibrant)', backdropFilter: 'blur(6px)' }}>
            {event.category}
          </span>
          {event.featured && (
            <span className="cultural-badge cultural-badge-gold" style={{ background: 'rgba(255, 255, 255, 0.95)', border: '1px solid var(--gold-rich)', backdropFilter: 'blur(6px)' }}>
              ⭐ Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          <h3 className="font-yatra" style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '0.4rem', lineHeight: 1.3 }}>
            {event.title}
          </h3>

          {event.subtitle && (
            <p style={{ color: 'var(--saffron-deep)', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic', marginBottom: '0.9rem' }}>
              {event.subtitle}
            </p>
          )}

          {(event.date || event.venue) && (
            <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              {event.date && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={14} color="var(--terracotta)" />
                  <span>{[event.date, event.time].filter(Boolean).join(' · ')}</span>
                </div>
              )}
              {event.venue && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} color="var(--green-india)" />
                  <span>{event.venue}</span>
                </div>
              )}
            </div>
          )}

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {event.bullets.slice(0, 2).map((b, i) => (
              <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, paddingLeft: '1.2rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--saffron-vibrant)' }}>✦</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="btn-cultural-outline"
          style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.95rem' }}
          onClick={() => onOpen(event)}
        >
          View Full Details →
        </button>
      </div>
    </motion.div>
  );
}

export default function EventsPage({ onBack }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filtered events
  const filteredEvents = useMemo(() => {
    return EVENTS.filter((e) => {
      const matchCat = activeCategory === 'All' || e.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        e.title.toLowerCase().includes(q) ||
        (e.subtitle && e.subtitle.toLowerCase().includes(q)) ||
        (e.venue && e.venue.toLowerCase().includes(q)) ||
        e.bullets.some((b) => b.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px', position: 'relative', zIndex: 1 }}>
      <div className="section-inner" style={{ maxWidth: '1200px' }}>

        {/* Back navigation button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <button
            onClick={onBack}
            className="btn-cultural-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.4rem', fontSize: '1rem' }}
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <span className="shloka-pill">
              <span>🌺</span>
              <span>॥ चरैवेति चरैवेति ॥</span>
            </span>
          </div>

          <h1 className="font-yatra" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', color: 'var(--text-dark)', marginBottom: '1rem' }}>
            All Events & <span style={{ color: 'var(--saffron-vibrant)' }}>Initiatives</span>
          </h1>

          <p className="section-desc" style={{ maxWidth: '750px', marginBottom: '1.5rem' }}>
            A complete chronicle of Think India MANIT Chapter&rsquo;s workshops, hackathons, cultural festivals, and nation-building drives across campus.
          </p>

          <div className="cultural-divider" aria-hidden="true">
            <span>🪷</span>
          </div>
        </motion.div>

        {/* Search & Filter Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(14px)',
            border: '1.5px solid var(--bg-card-border)',
            borderRadius: '16px',
            padding: '1.75rem',
            marginBottom: '3rem',
            boxShadow: '0 12px 35px rgba(191, 54, 12, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Search Bar */}
          <div style={{ position: 'relative' }}>
            <Search
              size={20}
              color="var(--saffron-vibrant)"
              style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events by title, keyword, speaker, or venue..."
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem 0.9rem 3.2rem',
                borderRadius: '100px',
                border: '1.5px solid rgba(245, 158, 11, 0.35)',
                background: '#FFFFFF',
                fontSize: '1.02rem',
                fontFamily: 'inherit',
                color: 'var(--text-dark)',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--saffron-vibrant)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(245, 158, 11, 0.35)')}
            />
          </div>

          {/* Filter Chips */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Filter size={16} /> Filter by:
            </span>
            {EVENT_CATEGORIES.map((cat) => {
              const count = cat === 'All' ? EVENTS.length : EVENTS.filter((e) => e.category === cat).length;
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: '100px',
                    fontSize: '0.9rem',
                    fontWeight: isSelected ? 700 : 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: isSelected ? 'linear-gradient(135deg, var(--saffron-vibrant), var(--terracotta))' : 'rgba(255, 122, 26, 0.08)',
                    color: isSelected ? '#fff' : 'var(--text-muted)',
                    border: isSelected ? '1px solid var(--gold-dark)' : '1px solid rgba(245, 158, 11, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>{cat}</span>
                  <span style={{
                    fontSize: '0.72rem',
                    background: isSelected ? 'rgba(0,0,0,0.2)' : 'rgba(245, 158, 11, 0.15)',
                    padding: '0.1rem 0.45rem',
                    borderRadius: '50px',
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Results count & status */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          <div>
            Showing <strong>{filteredEvents.length}</strong> of {EVENTS.length} events
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ color: 'var(--terracotta)', fontWeight: 600, textDecoration: 'underline' }}
            >
              Clear search
            </button>
          )}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {filteredEvents.map((event) => (
              <PageEventCard
                key={event.id}
                event={event}
                onOpen={setSelectedEvent}
              />
            ))}
          </motion.div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '5rem 2rem',
            background: 'rgba(253,249,241,0.6)',
            borderRadius: '16px',
            border: '2px dashed var(--gold-dark)',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <h3 className="font-yatra" style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
              No Events Found
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              No events matched your search query &ldquo;{searchQuery}&rdquo;. Try clearing filters or searching for another term.
            </p>
          </div>
        )}

        {/* Bottom CTA to return */}
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <button
            onClick={onBack}
            className="btn-cultural"
            style={{ padding: '0.9rem 2.5rem', fontSize: '1.15rem' }}
          >
            ← Return to Main Page
          </button>
        </div>

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
    </div>
  );
}
