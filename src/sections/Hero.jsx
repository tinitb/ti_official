import { motion, useTransform, useSpring } from 'framer-motion';
import logoImg from '../assets/logo.jpg';

export default function Hero({ mouseX, mouseY }) {
  // Fluid spring smoothing for the 3D logo (luxurious float)
  const rawRotateX = useTransform(mouseY, [-500, 500], [5, -5]);
  const rawRotateY = useTransform(mouseX, [-500, 500], [-5, 5]);
  const rotateX = useSpring(rawRotateX, { damping: 36, stiffness: 80, mass: 0.6 });
  const rotateY = useSpring(rawRotateY, { damping: 36, stiffness: 80, mass: 0.6 });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="section"
      id="home"
      style={{ minHeight: '100vh', paddingTop: '170px', paddingBottom: '90px', overflow: 'hidden', perspective: '1200px' }}
    >
      <div className="section-inner" style={{ textAlign: 'center', zIndex: 2, transformStyle: 'preserve-3d' }}>

        {/* Sanskrit Shloka */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="shloka-pill" style={{ fontSize: '1.2rem', padding: '0.45rem 1.8rem' }}>
            <span>🪷</span>
            <span>॥ वसुधैव कुटुम्बकम् ॥</span>
          </span>
        </motion.div>

        {/* 3D Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}
          style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center', transformStyle: 'preserve-3d' }}
        >
          <motion.div
            style={{
              rotateX, rotateY,
              width: '180px', height: '180px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(14px)',
              borderRadius: '50%',
              padding: '1.2rem',
              border: '3px solid var(--gold-dark)',
              boxShadow: '0 15px 40px rgba(191, 54, 12, 0.15), 0 0 25px rgba(245, 158, 11, 0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              willChange: 'transform',
            }}
          >
            <img
              src={logoImg}
              alt="Think India MANIT Chapter Logo"
              width="145"
              height="145"
              style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 6px 14px rgba(191,54,12,0.15))', borderRadius: '50%' }}
            />
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-yatra"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 6.8rem)',
            color: 'var(--text-dark)',
            lineHeight: 1,
            marginBottom: '1.2rem',
          }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring' }}
        >
          THINK <span style={{ color: 'var(--saffron-vibrant)' }}>INDIA</span>
        </motion.h1>

        {/* Chapter pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ marginBottom: '2.2rem', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            padding: '0.45rem 2rem',
            border: '2px solid var(--gold-dark)',
            borderRadius: '100px',
            color: 'var(--saffron-deep)',
            fontWeight: 'bold',
            letterSpacing: '3px',
            fontSize: '1rem',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 8px 25px rgba(191, 54, 12, 0.1), inset 0 0 10px rgba(245,158,11,0.1)',
          }}>
            ॥ MANIT CHAPTER ॥
          </div>
        </motion.div>

        {/* Lead paragraph */}
        <motion.p
          style={{
            fontSize: '1.28rem',
            maxWidth: '740px',
            margin: '0 auto 3rem',
            color: 'var(--text-muted)',
            lineHeight: 1.85,
            fontWeight: 500,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Where the &lsquo;Nation First&rsquo; spirit is paramount. A dynamic student movement at MANIT Bhopal, committed to spreading national pride, cultural consciousness, and civilizational purpose.
        </motion.p>

        {/* Buttons */}
        <motion.div
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            className="btn-cultural"
            onClick={() => scrollTo('about')}
            type="button"
          >
            Discover Our Roots
          </button>
          <button
            className="btn-cultural-outline"
            onClick={() => scrollTo('events')}
            type="button"
          >
            Our Events →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
