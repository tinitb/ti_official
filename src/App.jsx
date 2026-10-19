import { useState, useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground';

import Hero from './sections/Hero';
import About from './sections/About';
import WhyUs from './sections/WhyUs';
import Events from './sections/Events';
import BharatBuzz from './sections/BharatBuzz';
import Guests from './sections/Guests';
import CTA from './sections/CTA';

import EventsPage from './pages/EventsPage';
import BharatBuzzPage from './pages/BharatBuzzPage';

function getPageFromHash() {
  const hash = window.location.hash.toLowerCase();
  if (hash.startsWith('#/events') || hash.startsWith('#events-all')) return 'events';
  if (hash.startsWith('#/buzz') || hash.startsWith('#buzz-all')) return 'buzz';
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    if (page === 'events') {
      window.location.hash = '#/events';
    } else if (page === 'buzz') {
      window.location.hash = '#/buzz';
    } else {
      window.location.hash = '#home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let rafId = null;
    const handleMouseMove = (event) => {
      if (rafId) return;
      const clientX = event.clientX;
      const clientY = event.clientY;
      rafId = requestAnimationFrame(() => {
        mouseX.set(clientX - window.innerWidth / 2);
        mouseY.set(clientY - window.innerHeight / 2);
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <GlobalBackground mouseX={mouseX} mouseY={mouseY} />
      
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
      />

      {/* Main Content Area */}
      <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
        {currentPage === 'events' ? (
          <EventsPage onBack={() => navigate('home')} />
        ) : currentPage === 'buzz' ? (
          <BharatBuzzPage onBack={() => navigate('home')} />
        ) : (
          <>
            {/* 1. Home / Hero */}
            <Hero mouseX={mouseX} mouseY={mouseY} />

            {/* 2. About (Manifesto & Heritage Craft Artwork) */}
            <About />

            {/* 3. Why Think India */}
            <WhyUs />

            {/* 4. Events (Flagship 3 + Explore More Events button) */}
            <Events onNavigate={navigate} />

            {/* 5. Bharat Buzz (Top 3 + Explore Bharat Buzz button) */}
            <BharatBuzz onNavigate={navigate} />

            {/* 6. Previous Guests */}
            <Guests />

            {/* 7. CTA */}
            <CTA onNavigate={navigate} />
          </>
        )}
      </main>

      {/* Footer / Sampark */}
      <Footer />
    </div>
  );
}
