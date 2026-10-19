import { motion } from 'framer-motion';
import { BUZZ_ITEMS } from '../data/buzz';
import ImageWithFallback from '../components/ImageWithFallback';
import { useCountUp } from '../hooks/useCountUp';

// ── Medal strip with animated count-up ─────────────────────────────────────────
function MedalStrip({ medals }) {
  const [gold, goldRef] = useCountUp(medals.gold, 1500);
  const [silver, silverRef] = useCountUp(medals.silver, 1500);
  const [bronze, bronzeRef] = useCountUp(medals.bronze, 1500);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', margin: '1.25rem 0' }}>
      {[
        { ref: goldRef, count: gold, max: medals.gold, label: 'Gold', color: '#FFB300', bg: 'rgba(255,179,0,0.12)' },
        { ref: silverRef, count: silver, max: medals.silver, label: 'Silver', color: '#9E9E9E', bg: 'rgba(158,158,158,0.12)' },
        { ref: bronzeRef, count: bronze, max: medals.bronze, label: 'Bronze', color: '#CD7F32', bg: 'rgba(205,127,50,0.12)' },
      ].map((m) => (
        <div
          key={m.label}
          ref={m.ref}
          style={{
            textAlign: 'center',
            padding: '0.85rem 0.4rem',
            background: m.bg,
            border: `1.5px solid ${m.color}`,
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
          }}
        >
          <div className="font-yatra" style={{ fontSize: '1.8rem', color: m.color, lineHeight: 1 }}>
            {m.count >= m.max ? m.max : m.count}
          </div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.2rem' }}>
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Single decorated Buzz card ────────────────────────────────────────────────
function BuzzCard({ item, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: idx * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="jharokha-card"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Poster with decorative header */}
      <div style={{ height: 230, borderBottom: '3px solid var(--gold-dark)', overflow: 'hidden', position: 'relative' }}>
        <ImageWithFallback
          src={item.imagePath}
          alt={`${item.title} poster`}
          title={item.title}
          imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: '0.85rem',
          left: '0.85rem',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 2,
        }}>
          <span style={{
            background: 'linear-gradient(135deg, var(--saffron-vibrant), var(--terracotta))',
            color: 'white',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '1px',
            padding: '0.3rem 0.8rem',
            borderRadius: '100px',
            textTransform: 'uppercase',
            boxShadow: '0 4px 12px rgba(191,54,12,0.3)',
          }}>
            Digital Impact
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          <h3 className="font-yatra" style={{ fontSize: '1.75rem', color: 'var(--text-dark)', marginBottom: '0.4rem', lineHeight: 1.25 }}>
            {item.title}
          </h3>

          <p style={{ color: 'var(--saffron-deep)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '1rem', fontStyle: 'italic' }}>
            Focus: {item.focus}
          </p>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.98rem', fontWeight: 500, marginBottom: '1.25rem' }}>
            {item.description}
          </p>

          {/* Medal strip for Paralympics */}
          {item.medals && <MedalStrip medals={item.medals} />}

          {/* Collaborator chips */}
          {item.collaborators && item.collaborators.length > 0 && (
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed rgba(197, 139, 23, 0.4)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                🤝 Key Collaborators:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {item.collaborators.map((c) => (
                  <span
                    key={c.handle}
                    style={{
                      background: 'rgba(255, 122, 26, 0.12)',
                      border: '1px solid rgba(255, 122, 26, 0.35)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '100px',
                      fontSize: '0.78rem',
                      color: 'var(--saffron-deep)',
                      fontWeight: 600,
                    }}
                    title={`${c.handle} (${c.desc})`}
                  >
                    {c.handle} <span style={{ opacity: 0.75 }}>({c.followers})</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function BharatBuzz({ onNavigate }) {
  // Show only 3 items on homepage as requested:
  // 1. Bharat Buzz 3.0 (Martyrdom of Capt. Anshuman Singh)
  // 2. Paris Olympics 2024
  // 3. Paralympics 2024
  const featuredThree = BUZZ_ITEMS.filter((item) =>
    ['bharat-buzz-3', 'paris-olympics', 'paralympics'].includes(item.id)
  );

  return (
    <section className="section" id="buzz" style={{ background: 'transparent', position: 'relative' }}>
      <div className="section-inner" style={{ maxWidth: 1200 }}>

        {/* Section Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ marginBottom: '1.2rem' }}>
            <span className="shloka-pill">
              <span>🇮🇳</span>
              <span>॥ राष्ट्राय स्वाहा, इदं न मम ॥</span>
            </span>
          </div>

          <h2 className="section-title font-yatra" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Bharat Buzz — <span style={{ color: 'var(--saffron-vibrant)' }}>Our Voice Online</span>
          </h2>

          <p className="section-desc" style={{ maxWidth: '820px' }}>
            Our viral social-media series that brings India&rsquo;s biggest civilizational, scientific, and athletic achievements to millions of youth—crossing <strong>2.5+ million views</strong> across platforms.
          </p>

          <div className="cultural-divider" aria-hidden="true">
            <span>🪷</span>
          </div>
        </motion.div>

        {/* Exactly 3 Featured Buzz Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {featuredThree.map((item, idx) => (
            <BuzzCard key={item.id} item={item} idx={idx} />
          ))}
        </div>

        {/* Explore Bharat Buzz Call-to-Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: '4.5rem',
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1.5px solid var(--bg-card-border)',
            borderRadius: '16px',
            boxShadow: '0 15px 45px rgba(191, 54, 12, 0.08), inset 0 0 0 1px rgba(255,213,79,0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle watermark */}
          <div className="pattern-rangoli" aria-hidden="true" />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }} aria-hidden="true">
              📱
            </div>
            <h3 className="font-yatra" style={{ fontSize: '2.2rem', color: 'var(--text-dark)', marginBottom: '0.8rem' }}>
              Explore Complete Bharat Buzz Media & ECI Recognition
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', maxWidth: '680px', margin: '0 auto 2rem', lineHeight: 1.75, fontWeight: 500 }}>
              Dive into all video episodes including Union Budget 2024-25, complete collaborator analytics, and our official Certificate of Appreciation from the Election Commission of India.
            </p>
            <button
              className="btn-cultural"
              onClick={() => onNavigate ? onNavigate('buzz') : (window.location.hash = '#/buzz')}
              style={{ padding: '1rem 3rem', fontSize: '1.25rem', boxShadow: '0 10px 25px rgba(191,54,12,0.3)' }}
            >
              <span>📡</span>
              <span>Explore Bharat Buzz Showcase</span>
              <span>→</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
