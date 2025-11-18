import React, { useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const colors = {
  navy: '#0B1F33',
  gold: '#D4B98C',
  warmWhite: '#F5F5F3',
  gray: '#A2A8AE',
}

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const scale3d = useTransform(scrollYProgress, [0, 1], [1, 0.75])
  const translateY3d = useTransform(scrollYProgress, [0, 1], [0, -120])
  const headingOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.35])

  const [hideScroll, setHideScroll] = useState(false)
  useEffect(() => {
    const onScroll = () => setHideScroll(true)
    const t = setTimeout(() => setHideScroll(true), 3500)
    window.addEventListener('scroll', onScroll, { once: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(t)
    }
  }, [])

  const headline = useMemo(() => (
    <div className="leading-[0.95] tracking-[-0.01em] font-[600]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
      <motion.div className="text-[48px] sm:text-[56px] md:text-[64px] text-[#F5F5F3]" initial={{ filter: 'blur(6px)', opacity: 0 }} animate={{ filter: 'blur(0px)', opacity: 1 }} transition={{ duration: 0.9 }}>
        <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}>Semplifico</motion.span><br/>
        <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.6, ease: 'easeOut' }}>decisioni</motion.span><br/>
        <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.55, duration: 0.6, ease: 'easeOut' }}>complesse.</motion.span>
      </motion.div>
    </div>
  ), [])

  const subhead = useMemo(() => (
    <motion.p className="text-[16px] md:text-[18px] text-[#A2A8AE] max-w-[60ch]" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3, duration: 0.6 }}>
      Ti accompagno nella scelta del mutuo con un metodo chiaro, numeri concreti e un unico obiettivo: tutelare le tue risorse e il tuo tempo.
    </motion.p>
  ), [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0B1F33]">
      {/* Background tint that eases to a slightly lighter navy on scroll */}
      <motion.div className="absolute inset-0" style={{ opacity: useTransform(scrollYProgress, [0, 1], [1, 0.9]) }} />

      {/* Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-24 md:pt-28 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left column */}
          <div className="md:col-span-5 lg:col-span-5 space-y-6">
            <motion.div style={{ opacity: headingOpacity }}>
              {headline}
            </motion.div>
            {subhead}

            {/* Data ticker */}
            <motion.div className="mt-6 text-[#D4B98C]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 0.6 }}>
              <DataTicker />
            </motion.div>

            {/* CTA */}
            <motion.div className="pt-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.2, duration: 0.6 }}>
              <a href="#contatto" className="inline-flex items-center justify-center bg-[#D4B98C] text-[#0B1F33] text-[16px] font-medium px-[34px] py-[18px] rounded-md shadow-[0_8px_22px_rgba(212,185,140,0.25)] transition-transform duration-[320ms] ease-out hover:-translate-y-[3px]">
                Prenota una consulenza
              </a>
            </motion.div>
          </div>

          {/* Right column - 3D scene */}
          <div className="md:col-span-7 lg:col-span-7 relative min-h-[60vh] md:min-h-[70vh]">
            <motion.div style={{ scale: scale3d, y: translateY3d }} className="relative h-full w-full">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              {/* soft gold connections overlay to hint finance diagram */}
              <div className="pointer-events-none absolute inset-0">
                <FinancialMeshOverlay />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hideScroll ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute left-6 md:left-10 bottom-8 flex items-center gap-3 text-[#D4B98C]"
      >
        <div className="w-px h-[50px] bg-[#D4B98C]/60 relative">
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4B98C] animate-pulse" />
        </div>
        <span className="text-sm text-[#D4B98C]/90">Scorri per capire come lavoro</span>
      </motion.div>
    </section>
  )
}

function DataTicker() {
  const items = [
    'Tempi medi di approvazione: 14 giorni',
    '92% delle pratiche portate a delibera positiva',
    'Clienti seguiti nel 2024: 180+',
  ]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="h-6 overflow-hidden" style={{ fontFamily: 'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 14 }}>
      <motion.div key={index} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }} transition={{ duration: 0.5 }} className="text-[#D4B98C]">
        {items[index]}
      </motion.div>
    </div>
  )
}

function FinancialMeshOverlay() {
  // Draw a soft network of lines and subtle pulsing nodes
  const nodes = useMemo(() => {
    const count = 28
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })
    }
    return arr
  }, [])

  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {nodes.map((a, i) => {
        const b = nodes[(i + 7) % nodes.length]
        const c = nodes[(i + 13) % nodes.length]
        return (
          <g key={i}>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#D4B98C" strokeOpacity="0.4" strokeWidth="0.2" />
            <line x1={a.x} y1={a.y} x2={c.x} y2={c.y} stroke="#D4B98C" strokeOpacity="0.35" strokeWidth="0.2" />
            <circle cx={a.x} cy={a.y} r="0.6" fill="#D4B98C" fillOpacity="0.45">
              <animate attributeName="r" values="0.6;0.63;0.6" dur={`${3.2 + (i % 7) * 0.2}s`} repeatCount="indefinite" />
            </circle>
          </g>
        )
      })}
      <defs>
        <filter id="fsoft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>
    </svg>
  )
}
