// src/components/ImageWithFallback.jsx
// Renders an <img> if the src resolves; otherwise shows a styled parchment
// placeholder card with the event name. Handles Vite dynamic-import paths.

import { useState, useEffect } from 'react';
import { getAssetUrl } from '../utils/assets';

export default function ImageWithFallback({ src, alt, title, style = {}, imgStyle = {}, className }) {
  const resolvedSrc = getAssetUrl(src) || src;
  const [failed, setFailed] = useState(!resolvedSrc);

  useEffect(() => {
    setFailed(!resolvedSrc);
  }, [resolvedSrc]);

  if (failed || !resolvedSrc) {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, var(--bg-parchment-dark) 0%, var(--bg-parchment) 100%)',
          border: '2px solid rgba(191,54,12,0.15)',
          minHeight: 200,
          padding: '2rem',
          textAlign: 'center',
          ...style,
        }}
      >
        <div>
          <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.4 }}>🪷</div>
          <p
            className="font-yatra"
            style={{ color: 'var(--terracotta)', fontSize: '1.2rem', lineHeight: 1.4 }}
          >
            {title || alt || 'Image Coming Soon'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      style={{ display: 'block', ...imgStyle }}
      className={className}
    />
  );
}
