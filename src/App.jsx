import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import FluidBackground from './components/FluidBackground'
import GlobalStyles from './components/GlobalStyles'

function App() {
  const { scrollYProgress } = useScroll()
  const bgLighten = useTransform(scrollYProgress, [0, 1], [0, 8])

  return (
    <div className="relative min-h-[200vh] bg-[#0B1F33]">
      <GlobalStyles />
      {/* Fluid background with motion and subtle grain */}
      <div className="absolute inset-0">
        <FluidBackground />
        {/* soft color wash that lightens a bit on scroll to open next section */}
        <motion.div
          className="absolute inset-0"
          style={{ background: `rgba(255,255,255,${bgLighten.get ? bgLighten.get() * 0.0 : 0})` }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <Hero />

        {/* Next section placeholder to demonstrate scroll transition */}
        <section id="metodo" className="relative z-10 bg-[#0E263F]/40 backdrop-blur-[1px] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-1">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F5F3] tracking-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Il mio metodo
                </h2>
                <p className="mt-3 text-[#A2A8AE] max-w-[45ch]">
                  Processi chiari, tempi certi, comunicazione puntuale. Dalla prima analisi alla delibera: ogni passaggio è tracciato e sotto controllo.
                </p>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
                {[
                  { t: 'Analisi preliminare', d: 'Valutazione accurata dei requisiti e scenari di fattibilità.' },
                  { t: 'Strategia di scelta', d: 'Confronto tra soluzioni, tassi e condizioni con criteri oggettivi.' },
                  { t: 'Gestione pratica', d: 'Raccolta documentale, relazione con gli istituti e monitoraggio avanzamento.' },
                  { t: 'Delibera e firma', d: 'Accompagnamento fino all’erogazione, senza sorprese.' },
                ].map((x, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                    <h3 className="text-[#F5F5F3] font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{x.t}</h3>
                    <p className="text-[#A2A8AE] mt-2 text-sm leading-relaxed">{x.d}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
