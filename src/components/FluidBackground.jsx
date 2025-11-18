import React from 'react'

// Fluid gradient mesh background with ultra-soft motion and subtle noise overlay
export default function FluidBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Radial gradient mesh layers */}
      <div
        className="absolute inset-0 animate-mesh-slow"
        style={{
          background:
            'radial-gradient(1200px 800px at 15% 20%, rgba(13,31,51,0.85), transparent 60%),\n             radial-gradient(900px 700px at 85% 30%, rgba(212,185,140,0.12), transparent 55%),\n             radial-gradient(1000px 900px at 50% 80%, rgba(13,31,51,0.9), transparent 65%),\n             radial-gradient(700px 600px at 80% 75%, rgba(212,185,140,0.08), transparent 60%),\n             linear-gradient(180deg, #0B1F33 0%, #0E263F 50%, #0B1F33 100%)',
          filter: 'saturate(105%)',
        }}
      />

      {/* Subtle animated spotlight to suggest stability evolving */}
      <div
        className="absolute inset-0 animate-spotlight pointer-events-none"
        style={{
          background:
            'radial-gradient(800px 800px at 70% 40%, rgba(212,185,140,0.10), rgba(212,185,140,0.0) 60%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Grain noise overlay (very subtle) */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,\
            <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'>\
              <filter id=\'n\'>\
                <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\
                <feColorMatrix type=\'saturate\' values=\'0\'/>\
              </filter>\
              <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.8\'/>\
            </svg>")',
          backgroundSize: '160px 160px',
        }}
      />
    </div>
  )
}
