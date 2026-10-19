// src/hooks/useActiveSection.js
// Tracks which section anchor is currently in view for Navbar highlighting.
import { useEffect, useState } from 'react';

const SECTION_IDS = ['home', 'about', 'why', 'events', 'buzz', 'guests', 'contact'];

export function useActiveSection() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observers = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
