import { motion, useTransform, useSpring } from 'framer-motion';

// Constellation nodes across the sacred geography of Bharat
// Center: MANIT Bhopal (250, 310 in a 500x600 coordinate space)
const BHARAT_CONSTELLATIONS = [
  { id: 'bhopal', name: 'MANIT Bhopal (Heart of Bharat)', x: 250, y: 310, hub: true },
  { id: 'kashmir', name: 'Kashmir (Sharada Peeth)', x: 215, y: 75 },
  { id: 'delhi', name: 'Delhi (Indraprastha)', x: 235, y: 195 },
  { id: 'varanasi', name: 'Kashi / Varanasi (Vidyapeeth)', x: 340, y: 275 },
  { id: 'nalanda', name: 'Nalanda / Patna', x: 375, y: 285 },
  { id: 'guwahati', name: 'Guwahati (Pragjyotishpur)', x: 440, y: 245 },
  { id: 'kolkata', name: 'Kolkata', x: 395, y: 335 },
  { id: 'mumbai', name: 'Mumbai', x: 175, y: 380 },
  { id: 'bengaluru', name: 'Bengaluru (Science Hub)', x: 230, y: 470 },
  { id: 'chennai', name: 'Chennai', x: 275, y: 475 },
  { id: 'kanyakumari', name: 'Kanyakumari (Vivekananda Memorial)', x: 245, y: 555 },
  { id: 'somnath', name: 'Somnath / Gujarat', x: 125, y: 320 },
];

// Connecting network lines radiating from MANIT Bhopal and along ancient cultural routes
const NETWORK_EDGES = [
  ['bhopal', 'delhi'],
  ['bhopal', 'varanasi'],
  ['bhopal', 'mumbai'],
  ['bhopal', 'bengaluru'],
  ['bhopal', 'somnath'],
  ['delhi', 'kashmir'],
  ['delhi', 'varanasi'],
  ['varanasi', 'nalanda'],
  ['nalanda', 'kolkata'],
  ['nalanda', 'guwahati'],
  ['mumbai', 'bengaluru'],
  ['bengaluru', 'chennai'],
  ['bengaluru', 'kanyakumari'],
  ['chennai', 'kanyakumari'],
];

// Floating golden diya sparks (16 particles)
const DIYA_PARTICLES = Array.from({ length: 16 }).map((_, i) => ({
  id: i,
  left: `${(i * 6.2 + 4) % 94}%`,
  size: (i % 3) * 2 + 3,
  delay: (i * 0.7) % 8,
  duration: 12 + (i % 6) * 2.5,
  opacity: 0.14 + (i % 4) * 0.08,
}));

export default function GlobalBackground({ mouseX, mouseY }) {
  // Smooth spring physics for parallax depth
  const rawRotateX = useTransform(mouseY, [-500, 500], [4, -4]);
  const rawRotateY = useTransform(mouseX, [-500, 500], [-4, 4]);
  const rotateX = useSpring(rawRotateX, { damping: 40, stiffness: 60, mass: 0.8 });
  const rotateY = useSpring(rawRotateY, { damping: 40, stiffness: 60, mass: 0.8 });

  const rawParallaxX = useTransform(mouseX, [-500, 500], [-15, 15]);
  const rawParallaxY = useTransform(mouseY, [-500, 500], [-15, 15]);
  const parallaxX = useSpring(rawParallaxX, { damping: 35, stiffness: 50 });
  const parallaxY = useSpring(rawParallaxY, { damping: 35, stiffness: 50 });

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 30%, #FFFDF8 0%, #F8EFE2 65%, #EDE1CD 100%)',
      }}
      aria-hidden="true"
    >
      {/* ── 1. Sacred Tricolor Prana Aurora ────────────────────────────── */}
      {/* Saffron Dawn at top */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '10%',
          right: '10%',
          height: '45vh',
          background: 'radial-gradient(ellipse at center, rgba(255, 103, 31, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'auroraPulse 14s ease-in-out infinite alternate',
        }}
      />
      {/* Emerald & Green Prithvi at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '15%',
          right: '15%',
          height: '45vh',
          background: 'radial-gradient(ellipse at center, rgba(4, 106, 56, 0.09) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'auroraPulse 16s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* Sunburst radiant sacred geometry rays */}
      <div className="sunburst" style={{ opacity: 0.08 }} />
      <div className="pattern-rangoli" style={{ opacity: 0.035 }} />

      {/* ── 2. Subtle Monumental Sacred Calligraphy Watermarks ─────────── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        padding: '5vw',
        opacity: 0.045,
        fontFamily: "'Yatra One', serif",
        pointerEvents: 'none',
        userSelect: 'none',
        color: 'var(--saffron-deep)',
      }}>
        <div style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)', alignSelf: 'start', justifySelf: 'start' }}>
          ॥ राष्ट्राय स्वाहा, इदं न मम ॥
        </div>
        <div style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)', alignSelf: 'start', justifySelf: 'end' }}>
          ॥ सत्यमेव जयते ॥
        </div>
        <div style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)', alignSelf: 'end', justifySelf: 'start' }}>
          ॥ सा विद्या या विमुक्तये ॥
        </div>
        <div style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)', alignSelf: 'end', justifySelf: 'end' }}>
          ॥ जननी जन्मभूमिश्च स्वर्गादपि गरीयसी ॥
        </div>
      </div>

      {/* ── 3. 3D Parallax Canvas: Dharma Chakra & Akhanda Gyan Mandalam ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: 1400,
        }}
      >
        <motion.div
          style={{
            width: '100%',
            maxWidth: '920px',
            height: '90vh',
            rotateX,
            rotateY,
            x: parallaxX,
            y: parallaxY,
            transformStyle: 'preserve-3d',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* ── Layer A: Revolving 24-Spoked Ashoka Dharma Chakra ───────── */}
          <div
            style={{
              position: 'absolute',
              width: 'min(780px, 92vw)',
              height: 'min(780px, 92vw)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'spinClockwise 140s linear infinite',
              opacity: 0.11,
              filter: 'drop-shadow(0 0 20px rgba(217, 119, 6, 0.25))',
            }}
          >
            <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%' }} fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="chakraGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="50%" stopColor="#FF671F" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>

              {/* Outermost Sun Ring with 24 petal markings */}
              <circle cx="300" cy="300" r="285" stroke="url(#chakraGold)" strokeWidth="1.5" strokeDasharray="3 4" />
              <circle cx="300" cy="300" r="268" stroke="url(#chakraGold)" strokeWidth="3" />
              <circle cx="300" cy="300" r="248" stroke="url(#chakraGold)" strokeWidth="1.5" />

              {/* 24 Lotus Rosettes along rim */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const rx = 300 + 258 * Math.cos(angle);
                const ry = 300 + 258 * Math.sin(angle);
                return (
                  <circle
                    key={i}
                    cx={rx}
                    cy={ry}
                    r="4"
                    fill="url(#chakraGold)"
                  />
                );
              })}

              {/* 24 Tapered Spokes of the Dharma Chakra */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = i * 15;
                return (
                  <g key={i} transform={`rotate(${angle} 300 300)`}>
                    <polygon
                      points="298,300 302,300 301,62 299,62"
                      fill="url(#chakraGold)"
                    />
                    <polygon
                      points="297,62 303,62 300,52"
                      fill="url(#chakraGold)"
                    />
                  </g>
                );
              })}

              {/* Central Sacred Nabhi (Hub) */}
              <circle cx="300" cy="300" r="48" stroke="url(#chakraGold)" strokeWidth="2.5" />
              <circle cx="300" cy="300" r="32" fill="url(#chakraGold)" opacity="0.4" />
              <circle cx="300" cy="300" r="16" fill="url(#chakraGold)" />
            </svg>
          </div>

          {/* ── Layer B: Counter-Rotating Konark Astronomical Ring ────── */}
          <div
            style={{
              position: 'absolute',
              width: 'min(620px, 80vw)',
              height: 'min(620px, 80vw)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'spinCounterClockwise 180s linear infinite',
              opacity: 0.08,
            }}
          >
            <svg viewBox="0 0 500 500" style={{ width: '100%', height: '100%' }} fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Sacred concentric yantra circles */}
              <circle cx="250" cy="250" r="230" stroke="var(--gold-rich)" strokeWidth="1.2" strokeDasharray="8 6" />
              <circle cx="250" cy="250" r="180" stroke="var(--terracotta)" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="250" cy="250" r="120" stroke="var(--gold-rich)" strokeWidth="1" />
              {/* 8 Cardinal Direction Triangles (Ashta-Dikpala) */}
              {Array.from({ length: 8 }).map((_, i) => (
                <polygon
                  key={i}
                  points="250,30 255,42 245,42"
                  fill="var(--gold-rich)"
                  transform={`rotate(${i * 45} 250 250)`}
                />
              ))}
            </svg>
          </div>

          {/* ── Layer C: Akhanda Gyan Mandalam (Sacred Constellation Map) */}
          <div
            style={{
              position: 'relative',
              width: 'min(520px, 88vw)',
              height: 'min(620px, 90vh)',
              opacity: 0.65,
              transform: 'translateZ(25px)',
            }}
          >
            <svg viewBox="0 0 500 620" style={{ width: '100%', height: '100%' }} fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="starGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF7A1A" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Sacred Dotted Outline of Bharat Shoreline / Borders */}
              <path
                d="M 215,75 L 240,85 L 270,120 L 320,165 L 360,200 L 440,245 L 450,280 L 410,290 L 395,335 L 340,400 L 290,460 L 275,475 L 245,555 L 230,470 L 175,380 L 125,320 L 135,270 L 175,230 L 210,180 Z"
                stroke="rgba(217, 119, 6, 0.24)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                fill="none"
              />

              {/* Connecting Radiant Ley Lines */}
              {NETWORK_EDGES.map(([srcId, dstId], idx) => {
                const src = BHARAT_CONSTELLATIONS.find((c) => c.id === srcId);
                const dst = BHARAT_CONSTELLATIONS.find((c) => c.id === dstId);
                if (!src || !dst) return null;
                return (
                  <line
                    key={idx}
                    x1={src.x}
                    y1={src.y}
                    x2={dst.x}
                    y2={dst.y}
                    stroke="url(#lineGrad)"
                    strokeWidth={src.hub || dst.hub ? 1.8 : 1.1}
                    strokeDasharray={src.hub ? 'none' : '3 3'}
                    opacity={src.hub ? 0.7 : 0.45}
                  />
                );
              })}

              {/* Constellation Knowledge Star Nodes */}
              {BHARAT_CONSTELLATIONS.map((node) => {
                const isCentral = node.hub;
                return (
                  <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                    {/* Pulsing Outer Halo for MANIT Bhopal */}
                    {isCentral && (
                      <>
                        <circle
                          r="16"
                          fill="rgba(255, 103, 31, 0.25)"
                          className="pulse-halo-slow"
                        />
                        <circle
                          r="26"
                          stroke="var(--saffron-vibrant)"
                          strokeWidth="1.2"
                          strokeDasharray="3 3"
                          fill="none"
                          className="spin-reverse-slow"
                        />
                      </>
                    )}

                    {/* Outer glow ring */}
                    <circle
                      r={isCentral ? 8 : 4.5}
                      fill={isCentral ? '#FF671F' : '#F59E0B'}
                      filter="url(#starGlow)"
                      opacity={0.85}
                    />

                    {/* Bright Core Star */}
                    <circle
                      r={isCentral ? 5 : 2.5}
                      fill="#FFFFFF"
                    />

                    {/* Central MANIT Bhopal Emblem Badge */}
                    {isCentral && (
                      <g transform="translate(0, 24)">
                        <rect
                          x="-65"
                          y="-10"
                          width="130"
                          height="20"
                          rx="10"
                          fill="rgba(255, 253, 248, 0.94)"
                          stroke="var(--saffron-vibrant)"
                          strokeWidth="1"
                        />
                        <text
                          textAnchor="middle"
                          y="4"
                          fill="#B45309"
                          fontSize="9.5"
                          fontWeight="700"
                          fontFamily="'Yatra One', serif"
                          letterSpacing="0.5px"
                        >
                          🚩 MANIT BHOPAL
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </motion.div>
      </div>

      {/* ── 4. Floating Diya Sparks / Jyoti Bokeh Motes ────────────────── */}
      {DIYA_PARTICLES.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            bottom: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #FFB300 0%, #D97706 70%, transparent 100%)',
            boxShadow: `0 0 8px rgba(217, 119, 6, ${p.opacity})`,
            opacity: p.opacity,
            animation: `riseUp ${p.duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Keyframe animations */}
      <style>{`
        @keyframes spinClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinCounterClockwise {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes auroraPulse {
          0% { transform: scale(1) translateY(0); opacity: 0.7; }
          50% { transform: scale(1.08) translateY(-10px); opacity: 1; }
          100% { transform: scale(0.96) translateY(10px); opacity: 0.75; }
        }
        @keyframes riseUp {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-108vh) scale(1.2);
            opacity: 0;
          }
        }
        .pulse-halo-slow {
          animation: pulseHalo 4s ease-in-out infinite;
        }
        @keyframes pulseHalo {
          0%, 100% { r: 14; opacity: 0.2; }
          50% { r: 24; opacity: 0.5; }
        }
        .spin-reverse-slow {
          transform-origin: center;
          animation: spinCounterClockwise 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
