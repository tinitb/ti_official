import { motion } from 'framer-motion';
import ImageWithFallback from '../components/ImageWithFallback';



export default function About() {
  return (
    <section className="section" id="about" style={{ background: 'transparent', position: 'relative' }}>
      <div className="section-inner">
        <div
          className="border-ornate about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '3.5rem',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            padding: '3.5rem',
            borderRadius: '20px',
            border: '1.5px solid var(--bg-card-border)',
            boxShadow: '0 15px 45px rgba(191, 54, 12, 0.08), inset 0 0 0 1px rgba(255,213,79,0.15)',
          }}
        >
          {/* Left Column: Punchy & Inspiring Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Sacred Shloka Pill */}
            <div style={{ marginBottom: '1.2rem' }}>
              <span className="shloka-pill" aria-label="Sanskrit shloka: Sa Vidya Ya Vimuktaye">
                <span>🪷</span>
                <span>॥ सा विद्या या विमुक्तये ॥</span>
              </span>
            </div>

            <h2 className="section-title font-yatra" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
              Nation First. <span style={{ color: 'var(--saffron-vibrant)' }}>Always.</span>
            </h2>

            <div style={{
              display: 'inline-block',
              padding: '0.3rem 0.85rem',
              background: 'rgba(255,122,26,0.12)',
              borderLeft: '3px solid var(--saffron-vibrant)',
              borderRadius: '0 6px 6px 0',
              marginBottom: '1.5rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--saffron-deep)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>
              MANIT Bhopal Chapter
            </div>

            {/* Crisp, powerful copy — zero fluff */}
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 500 }}>
              <strong style={{ color: 'var(--text-dark)' }}>Think India MANIT</strong> unites student intellect with national purpose. Guided by the supreme principle of <span style={{ color: 'var(--saffron-deep)', fontWeight: 700 }}>&ldquo;Nation First&rdquo;</span>, we bridge technical prowess with civilizational pride—transforming youth potential into community action and building an empowered <em>Viksit Bharat</em>.
            </p>

            {/* 3 Sleek Compact Pillars */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '0.85rem',
              paddingTop: '1.4rem',
              borderTop: '1px dashed rgba(245, 158, 11, 0.25)'
            }}>
              {[
                { icon: '🚩', title: 'Nation First', tag: 'Supreme Ethos' },
                { icon: '💡', title: 'Vimarsh & Ideas', tag: 'Policy & Dialogue' },
                { icon: '🤝', title: 'Seva & Action', tag: 'Campus Leadership' },
              ].map((p, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 122, 26, 0.05)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  borderRadius: '10px',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <div style={{ fontSize: '1.5rem' }}>{p.icon}</div>
                  <div>
                    <div className="font-yatra" style={{ fontSize: '0.98rem', color: 'var(--text-dark)', lineHeight: 1.2 }}>
                      {p.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.15rem' }}>
                      {p.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Ornate Framed Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                padding: '0.75rem',
                background: 'linear-gradient(135deg, rgba(245,158,11,0.18), rgba(255,122,26,0.08))',
                border: '2px solid var(--gold-dark)',
                boxShadow: '0 15px 40px rgba(191,54,12,0.12)',
              }}
            >
              <div style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '4/4.4',
                background: 'var(--bg-parchment-dark)',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 65%, rgba(34,20,12,0.65) 100%)',
                  zIndex: 2,
                  pointerEvents: 'none',
                }} />

                <ImageWithFallback
                  src="Block_Printing.png"
                  alt="Think India MANIT Chapter traditional craft workshop"
                  title="Traditional Arts & Campus Drives"
                  imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                <div style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  zIndex: 3,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.35rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(245,158,11,0.4)',
                    borderRadius: '100px',
                    fontSize: '0.8rem',
                    color: 'var(--text-dark)',
                    fontWeight: 600,
                  }}>
                    <span>🪷</span>
                    <span>Tradition & Innovation</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-rich)', fontWeight: 700 }}>
                    MANIT Bhopal
                  </span>
                </div>
              </div>

              {/* Corner golden flourishes */}
              <div style={{
                position: 'absolute',
                top: '-5px',
                left: '-5px',
                width: '18px',
                height: '18px',
                borderTop: '2.5px solid var(--gold-rich)',
                borderLeft: '2.5px solid var(--gold-rich)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-5px',
                right: '-5px',
                width: '18px',
                height: '18px',
                borderBottom: '2.5px solid var(--gold-rich)',
                borderRight: '2.5px solid var(--gold-rich)',
              }} />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; padding: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
