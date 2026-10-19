import { motion } from 'framer-motion';
import { ArrowLeft, Award, TrendingUp, Users, Globe } from 'lucide-react';
import { BUZZ_ITEMS, ECI_RECOGNITION } from '../data/buzz';
import ImageWithFallback from '../components/ImageWithFallback';
import { useCountUp } from '../hooks/useCountUp';



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

export default function BharatBuzzPage({ onBack }) {

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
              <span>🇮🇳</span>
              <span>॥ राष्ट्राय स्वाहा, इदं न मम ॥</span>
            </span>
          </div>

          <h1 className="font-yatra" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', color: 'var(--text-dark)', marginBottom: '1rem' }}>
            Bharat Buzz & <span style={{ color: 'var(--saffron-vibrant)' }}>Digital Reach</span>
          </h1>

          <p className="section-desc" style={{ maxWidth: '800px', marginBottom: '1.5rem' }}>
            The complete archive of our digital narrative series, high-impact youth dialogues, sports achievements, and institutional partnerships reaching millions nationwide.
          </p>

          <div className="cultural-divider" aria-hidden="true">
            <span>🪷</span>
          </div>
        </motion.div>

        {/* Key Digital Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {[
            { icon: <TrendingUp size={24} color="var(--saffron-vibrant)" />, value: '2.5M+', label: 'Total Series Views' },
            { icon: <Users size={24} color="var(--gold-dark)" />, value: '600K+', label: 'Combined Partner Reach' },
            { icon: <Award size={24} color="var(--terracotta)" />, value: '29 Medals', label: 'Paralympic Coverage' },
            { icon: <Globe size={24} color="var(--green-india)" />, value: '7,800+', label: 'Active Youth Network' },
          ].map((stat, i) => (
            <div
              key={i}
              className="jharokha-card"
              style={{ padding: '1.8rem', textAlign: 'center' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.6rem' }}>
                {stat.icon}
              </div>
              <div className="font-yatra" style={{ fontSize: '2.4rem', color: 'var(--text-dark)', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.4rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* All Bharat Buzz Editions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
          {BUZZ_ITEMS.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="jharokha-card"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ height: 240, borderBottom: '3px solid var(--gold-dark)', overflow: 'hidden', position: 'relative' }}>
                  <ImageWithFallback
                    src={item.imagePath}
                    alt={`${item.title} poster`}
                    title={item.title}
                    imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                    <span className="cultural-badge cultural-badge-saffron" style={{ background: 'rgba(255, 255, 255, 0.95)', border: '1px solid var(--saffron-vibrant)' }}>
                      Edition {idx + 1}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 className="font-yatra" style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--saffron-deep)', fontSize: '0.95rem', fontWeight: 600, fontStyle: 'italic', marginBottom: '1rem' }}>
                      Focus: {item.focus}
                    </p>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.98rem', fontWeight: 500, marginBottom: '1.2rem' }}>
                      {item.description}
                    </p>

                    {item.medals && <MedalStrip medals={item.medals} />}

                    {item.collaborators && item.collaborators.length > 0 && (
                      <div style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px dashed rgba(197, 139, 23, 0.4)' }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                          🤝 Collaborators & Co-Publishers:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {item.collaborators.map((c) => (
                            <span
                              key={c.handle}
                              style={{
                                background: 'rgba(255, 122, 26, 0.12)',
                                border: '1px solid rgba(255, 122, 26, 0.35)',
                                padding: '0.2rem 0.65rem',
                                borderRadius: '100px',
                                fontSize: '0.76rem',
                                color: 'var(--saffron-deep)',
                                fontWeight: 600,
                              }}
                            >
                              {c.handle} ({c.followers})
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.likedBy && item.likedBy.length > 0 && (
                      <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px dashed rgba(197, 139, 23, 0.4)' }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                          ❤️ Appreciated By National Athletes:
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                          {item.likedBy.map((p) => p.name).join(' · ')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dedicated Election Commission of India (ECI) Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(14px)',
            border: '2px solid var(--gold-dark)',
            borderRadius: '20px',
            padding: '3.5rem',
            boxShadow: '0 15px 45px rgba(191, 54, 12, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '4rem',
          }}
        >
          <div className="pattern-rangoli" aria-hidden="true" />

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ marginBottom: '0.75rem' }}>
                <span className="cultural-badge cultural-badge-green" style={{ fontSize: '0.8rem', padding: '0.35rem 0.9rem' }}>
                  🏛️ Constitutional Collaboration
                </span>
              </div>
              <h2 className="font-yatra" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: 1.25 }}>
                {ECI_RECOGNITION.title}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 500 }}>
                {ECI_RECOGNITION.description}
              </p>
              <div style={{
                background: 'rgba(16, 185, 129, 0.08)',
                borderLeft: '4px solid var(--green-india)',
                padding: '1rem 1.25rem',
                borderRadius: '0 8px 8px 0',
                color: 'var(--text-dark)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                fontWeight: 600,
              }}>
                Think India MANIT spearheaded extensive on-campus voting awareness rallies and voter registration kiosks during General Election 2024, inspiring thousands of first-time collegiate voters to participate in democracy.
              </div>
            </div>

            <div style={{
              borderRadius: '14px',
              overflow: 'hidden',
              border: '2px solid var(--gold-dark)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
              background: '#fff',
            }}>
              <ImageWithFallback
                src={ECI_RECOGNITION.imagePath}
                alt="Election Commission of India Certificate of Appreciation"
                title="ECI Certificate & Merch"
                imgStyle={{ width: '100%', height: '320px', objectFit: 'contain', background: '#fff', padding: '1rem' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA to return */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button
            onClick={onBack}
            className="btn-cultural"
            style={{ padding: '0.9rem 2.5rem', fontSize: '1.15rem' }}
          >
            ← Return to Main Page
          </button>
        </div>

      </div>
    </div>
  );
}
