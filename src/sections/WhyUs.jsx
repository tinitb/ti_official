import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { STATS } from '../data/stats';
import { useCountUp } from '../hooks/useCountUp';

const WHY_CARDS = [
  {
    num: '1',
    text: 'Social-media viral series — BHARAT BUZZ — crossing 2.5 million views on Instagram.',
    icon: '📱',
  },
  {
    num: '2',
    text: 'Institutional collaboration with the Election Commission of India and Certificate of Appreciation for voter awareness.',
    icon: '🗳️',
  },
  {
    num: '3',
    text: "National landmark summits like ANUBHOOTI bringing together student leaders from premier institutions across India.",
    icon: '🇮🇳',
  },
  {
    num: '4',
    text: 'Organises innovative national workshops and conferences spanning AI, cloud architecture, traditional arts, and civilizational discourse.',
    icon: '🪷',
  },
];

function TiltCard({ card, idx }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // High-damping spring smoothing for silky 3D tilt without snapping or lag
  const rawRotateX = useTransform(y, [-80, 80], [4.5, -4.5]);
  const rawRotateY = useTransform(x, [-80, 80], [-4.5, 4.5]);
  const rotateX = useSpring(rawRotateX, { damping: 34, stiffness: 90, mass: 0.5 });
  const rotateY = useSpring(rawRotateY, { damping: 34, stiffness: 90, mass: 0.5 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: idx * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="jharokha-card"
        style={{
          padding: '2.8rem 2.2rem',
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          cursor: 'default',
          textAlign: 'center',
          minHeight: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          willChange: 'transform',
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left - rect.width / 2);
          y.set(e.clientY - rect.top - rect.height / 2);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
      >
        <motion.div style={{ transform: 'translateZ(30px)' }}>
          {/* Large decorative numeral */}
          <div
            className="font-yatra"
            style={{
              fontSize: '5rem',
              lineHeight: 1,
              color: 'var(--gold-dark)',
              opacity: 0.15,
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
            aria-hidden="true"
          >
            {card.num}
          </div>
          <div style={{ fontSize: '2.6rem', marginBottom: '1rem' }} aria-hidden="true">{card.icon}</div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '1.08rem', fontWeight: 500 }}>
            {card.text}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function StatItem({ stat }) {
  const [count, ref] = useCountUp(stat.value, 2000);
  const formatted = count.toLocaleString('en-IN') + (stat.suffix && count >= stat.value ? stat.suffix : '');

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
      <div
        className="font-yatra"
        style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--saffron-vibrant)', lineHeight: 1, marginBottom: '0.4rem' }}
      >
        {count >= stat.value ? stat.display : formatted}
      </div>
      <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '0.2rem' }}>
        {stat.label}
      </div>
      <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
        {stat.sublabel}
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="section" id="why" style={{ background: 'transparent' }}>
      <div className="section-inner" style={{ maxWidth: 1200 }}>

        {/* Heading block */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <span className="shloka-pill">
              <span>🇮🇳</span>
              <span>॥ एकोऽहं बहुस्याम् ॥</span>
            </span>
          </div>

          <h2 className="section-title font-yatra" style={{ fontSize: 'clamp(2.6rem, 5vw, 3.8rem)', color: 'var(--text-dark)' }}>
            Why <span style={{ color: 'var(--saffron-vibrant)' }}>Think India</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'inline-block',
              marginTop: '1.2rem',
              padding: '0.75rem 2.2rem',
              background: 'linear-gradient(90deg, var(--saffron-vibrant) 0%, var(--terracotta) 100%)',
              color: 'white',
              fontFamily: "'Yatra One', display",
              fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
              letterSpacing: '0.05em',
              borderRadius: '8px',
              boxShadow: '0 8px 25px rgba(255,103,31,0.3)',
            }}
          >
            India&rsquo;s Largest Student Platform for National Development
          </motion.div>
        </motion.div>

        {/* 4 reason cards */}
        <div className="grid-2" style={{ marginBottom: '4.5rem', gap: '2rem', position: 'relative' }}>
          {WHY_CARDS.map((card, idx) => (
            <TiltCard key={card.num} card={card} idx={idx} />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="jharokha-card"
          style={{ padding: '1rem 0' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 0,
            }}
          >
            {STATS.map((stat, idx) => (
              <div
                key={stat.id}
                style={{
                  borderRight: idx < STATS.length - 1 ? '1px dashed rgba(245,158,11,0.2)' : 'none',
                }}
              >
                <StatItem stat={stat} />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
