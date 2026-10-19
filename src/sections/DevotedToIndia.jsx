import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Shield, HeartHandshake, Compass, Award, Sparkles } from 'lucide-react';

const REGIONAL_HUBS = [
  {
    id: 'central',
    name: 'Central Bharat (MANIT Bhopal)',
    title: 'The Flagship Chapter & Epicenter',
    badge: 'Flagship Chapter',
    icon: '🚩',
    color: 'var(--saffron-vibrant)',
    coords: { x: '49%', y: '52%' },
    institutes: 'MANIT Bhopal, AIIMS Bhopal, NLIU, IISER',
    desc: 'The vibrant heart of Think India activities. Pioneered the viral Bharat Buzz digital series (2.5M+ views), campus Swachhata Jan Bhagidari, and institutional collaboration with the Election Commission of India.',
    metrics: ['600+ Active Members', '12+ Flagship Summits', 'ECI Awarded Chapter'],
  },
  {
    id: 'north',
    name: 'Northern Zone',
    title: 'Policy & Constitutional Vimarsh',
    badge: 'National Capitals Hub',
    icon: '🏔️',
    color: '#3B82F6',
    coords: { x: '42%', y: '26%' },
    institutes: 'IIT Delhi, Delhi University, JNU, IIT Roorkee, NLU Delhi',
    desc: 'Leading national youth parliaments, public policy discourses, and civilizational dialogues. Connects grassroots student voices with national policy makers and constitutional scholars.',
    metrics: ['National Youth Parliament', 'Vidhi Vimarsh Series', 'Security Conclaves'],
  },
  {
    id: 'south',
    name: 'Southern Zone',
    title: 'Tech For Bharat & Cultural Conclaves',
    badge: 'Deep Tech & Science',
    icon: '🌊',
    color: '#10B981',
    coords: { x: '46%', y: '80%' },
    institutes: 'IISc Bengaluru, IIT Madras, NLSIU, IIT Hyderabad',
    desc: 'Harnessing frontier science, AI, and aerospace research for indigenous self-reliance (Atmanirbhar Bharat). Champions heritage preservation and classical Bharatiya philosophy.',
    metrics: ['Tech For Bharat Summits', 'Classical Knowledge Forum', 'Indigenous Tech Labs'],
  },
  {
    id: 'west',
    name: 'Western Zone',
    title: 'Entrepreneurship & Social Innovation',
    badge: 'Startup Vanguard',
    icon: '☀️',
    color: '#F59E0B',
    coords: { x: '28%', y: '54%' },
    institutes: 'IIT Bombay, GNLU Gujarat, IIT Jodhpur, IIM Ahmedabad',
    desc: 'Empowering young founders building for Bharat. Drives rural entrepreneurship, tribal artisan empowerment, and sustainable technological development.',
    metrics: ['Innofest Startup Labs', 'Artisan Revival Drives', 'Coastal Eco-Drives'],
  },
  {
    id: 'east',
    name: 'Eastern & North-East Zone',
    title: 'Heritage, Border Studies & Youth Exchange',
    badge: 'Cultural Frontiers',
    icon: '🌿',
    color: '#8B5CF6',
    coords: { x: '76%', y: '44%' },
    institutes: 'IIT Guwahati, NLU Odisha, IIT Kharagpur, NIT Silchar',
    desc: 'Bridging remote borderlands with the national mainstream through cultural assimilation, youth exchange yatras, and historical documentation of unsung national heroes.',
    metrics: ['North-East Integration Yatras', 'Tribal Heritage Summits', 'Border Study Tours'],
  },
];

export default function DevotedToIndia() {
  const [selectedHub, setSelectedHub] = useState(REGIONAL_HUBS[0]);

  return (
    <section className="section" id="devoted" style={{ background: 'transparent', position: 'relative' }}>
      <div className="section-inner" style={{ maxWidth: '1200px' }}>

        {/* Section Header with Sacred Shloka */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ marginBottom: '1.2rem' }}>
            <span className="shloka-pill" aria-label="Sanskrit Shloka: Janani Janmabhumishcha Swargadapi Gariyasi">
              <span>🇮🇳</span>
              <span>॥ जननी जन्मभूमिश्च स्वर्गादपि गरीयसी ॥</span>
            </span>
          </div>

          <h2 className="section-title font-yatra" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'var(--text-dark)' }}>
            Devoted to <span style={{ color: 'var(--saffron-vibrant)' }}>Bharat</span>
          </h2>

          <p className="section-desc" style={{ maxWidth: '820px' }}>
            Think India is not merely an organization—it is a sacred pledge by students across India&rsquo;s premier institutes to dedicate their intellect, passion, and character to national resurgence.
          </p>

          <div className="cultural-divider" aria-hidden="true">
            <span>☸️</span>
          </div>
        </motion.div>

        {/* Pan-India Footprint Interactive Map Showcase */}
        <div
          className="jharokha-card"
          style={{
            padding: '3rem 2.5rem',
            marginBottom: '4.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Rangoli watermark */}
          <div className="pattern-rangoli" aria-hidden="true" />

          {/* Top Tricolor Pride Line */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, height: '4px',
            background: 'linear-gradient(90deg, #FF671F 33%, #FFFFFF 33%, #FFFFFF 66%, #046A38 66%)'
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '3rem', alignItems: 'center' }} className="devoted-grid">
            
            {/* Left: Interactive Regional Map Visual */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '1/1.15',
                margin: '0 auto',
                background: 'linear-gradient(180deg, rgba(255,103,31,0.06), rgba(4,106,56,0.06))',
                borderRadius: '24px',
                border: '1.5px solid var(--border-ornate)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 0 30px rgba(245,158,11,0.08)',
              }}>
                {/* Stylized SVG Map Silhouette */}
                <svg
                  viewBox="0 0 500 600"
                  style={{ width: '100%', height: '100%', opacity: 0.85, filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.15))' }}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF7A1A" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Subtle Bharat Outline */}
                  <path
                    d="M 170,30 L 220,30 L 235,50 L 270,65 L 290,110 L 330,135 L 350,170 L 440,210 L 450,250 L 400,270 L 370,250 L 350,290 L 360,330 L 320,380 L 290,440 L 250,540 L 220,480 L 180,410 L 140,360 L 110,310 L 80,300 L 70,250 L 120,230 L 140,170 L 140,90 Z"
                    fill="url(#mapGradient)"
                    stroke="var(--gold-dark)"
                    strokeWidth="2.5"
                    strokeDasharray="4 2"
                  />
                  
                  {/* Central Ashoka Chakra in the Map Heart */}
                  <circle cx="250" cy="300" r="28" stroke="#06038D" strokeWidth="2" fill="none" opacity="0.6" />
                  {Array.from({ length: 24 }).map((_, i) => (
                    <line
                      key={i}
                      x1="250"
                      y1="300"
                      x2={250 + 26 * Math.cos((i * 15 * Math.PI) / 180)}
                      y2={300 + 26 * Math.sin((i * 15 * Math.PI) / 180)}
                      stroke="#06038D"
                      strokeWidth="1.2"
                      opacity="0.5"
                    />
                  ))}
                </svg>

                {/* Interactive Map Nodes */}
                {REGIONAL_HUBS.map((hub) => {
                  const isSelected = selectedHub.id === hub.id;
                  return (
                    <motion.button
                      key={hub.id}
                      onClick={() => setSelectedHub(hub)}
                      whileHover={{ scale: 1.25 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        position: 'absolute',
                        left: hub.coords.x,
                        top: hub.coords.y,
                        transform: 'translate(-50%, -50%)',
                        background: isSelected ? 'var(--saffron-vibrant)' : 'var(--bg-card)',
                        color: isSelected ? '#fff' : 'var(--text-dark)',
                        border: isSelected ? '2.5px solid #fff' : '2px solid var(--gold-dark)',
                        width: isSelected ? '46px' : '38px',
                        height: isSelected ? '46px' : '38px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: isSelected ? '1.3rem' : '1.1rem',
                        boxShadow: isSelected
                          ? '0 0 25px rgba(255,103,31,0.6), 0 6px 15px rgba(0,0,0,0.3)'
                          : '0 4px 12px rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        zIndex: isSelected ? 10 : 5,
                        transition: 'all 0.3s ease',
                      }}
                      title={hub.name}
                      aria-label={`Select ${hub.name}`}
                    >
                      {hub.icon}
                    </motion.button>
                  );
                })}
              </div>

              <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                ✦ Click any regional emblem to view our collegiate presence
              </div>
            </div>

            {/* Right: Selected Hub Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedHub.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="cultural-badge cultural-badge-saffron">
                    {selectedHub.badge}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                    {selectedHub.institutes}
                  </span>
                </div>

                <h3 className="font-yatra" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', color: 'var(--text-dark)', marginBottom: '0.4rem', lineHeight: 1.25 }}>
                  {selectedHub.name}
                </h3>

                <h4 style={{ color: 'var(--saffron-deep)', fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.2rem', fontStyle: 'italic' }}>
                  {selectedHub.title}
                </h4>

                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.8rem', fontWeight: 500 }}>
                  {selectedHub.desc}
                </p>

                {/* Key Metrics / Highlights */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.85rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px dashed rgba(245, 158, 11, 0.3)',
                  marginBottom: '1.5rem',
                }}>
                  {selectedHub.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(255, 122, 26, 0.06)',
                        border: '1px solid rgba(245, 158, 11, 0.22)',
                        borderRadius: '10px',
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--text-dark)',
                        textAlign: 'center',
                      }}
                    >
                      ✦ {m}
                    </div>
                  ))}
                </div>

                {/* Quick Switch Buttons */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {REGIONAL_HUBS.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => setSelectedHub(h)}
                      style={{
                        padding: '0.35rem 0.8rem',
                        borderRadius: '100px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        background: selectedHub.id === h.id ? 'var(--terracotta)' : 'rgba(255, 122, 26, 0.08)',
                        color: selectedHub.id === h.id ? '#fff' : 'var(--text-dark)',
                        border: selectedHub.id === h.id ? '1px solid var(--terracotta)' : '1px solid rgba(245, 158, 11, 0.25)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {h.icon} {h.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* 4 Pillars of National Devotion */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem', marginBottom: '4rem' }}>
          {[
            {
              icon: '🚩',
              shloka: 'राष्ट्र प्रथम',
              title: 'Nation First',
              desc: 'Placing Bharat’s holistic civilizational prosperity and security above every sectional or personal priority.',
            },
            {
              icon: '🪷',
              shloka: 'संस्कृति संरक्षण',
              title: 'Heritage Revival',
              desc: 'Revitalizing traditional textile arts, clay craft, classical discourse, and native Bharatiya intellectual traditions.',
            },
            {
              icon: '⚖️',
              shloka: 'सत्य व विचार',
              title: 'National Vimarsh',
              desc: 'Grooming collegiate thinkers in constitutional values, independent policy, and nation-centric legal acumen.',
            },
            {
              icon: '🤝',
              shloka: 'निःस्वार्थ सेवा',
              title: 'Civic Jan-Bhagidari',
              desc: 'Ground-level action—from massive voter awareness with the Election Commission to environmental cleanliness drives.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="jharokha-card"
              style={{ padding: '2rem 1.6rem', textAlign: 'center' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }} aria-hidden="true">
                {item.icon}
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--saffron-deep)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                ॥ {item.shloka} ॥
              </div>
              <h3 className="font-yatra" style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '0.6rem' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65, fontWeight: 500 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .devoted-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
