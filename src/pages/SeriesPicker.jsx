import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { seriesList } from '../data/series'
import { personalPicks } from '../data/personalPicks'
import { SpriteBody } from '../components/AlecSprite'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 240, damping: 24 } },
}

const ambientSparkles = [
  { top: '8%',  left: '4%',  delay: 0,   color: '#f59e0b' },
  { top: '60%', left: '3%',  delay: 1.8, color: '#a78bfa' },
  { top: '20%', left: '94%', delay: 0.9, color: '#f59e0b' },
  { top: '75%', left: '90%', delay: 2.4, color: '#a78bfa' },
  { top: '45%', left: '50%', delay: 3.1, color: '#f59e0b' },
]

function AlecDancer({ hoveredSeries }) {
  const [frame, setFrame] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setFrame(f => (f + 1) % 2), 200)
    return () => clearInterval(t)
  }, [])

  const noteKey = hoveredSeries?.slug ?? 'default'
  const note    = hoveredSeries?.alecNote ?? ''

  return (
    // Plain div handles fixed viewport centering — no transform conflict with motion
    <div style={{
      position:  'fixed',
      left:       12,
      top:       '50%',
      transform: 'translateY(-50%)',
      zIndex:     50,
      pointerEvents: 'none',
    }}>
      {/* motion.div carries the enter/exit animation */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{    opacity: 0, x: -24 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        style={{ display: 'flex', alignItems: 'center', gap: 6 }}
      >
        {/* Dancing sprite — rotates around its feet */}
        <motion.div
          animate={{ rotate: [-10, 0, 10, 0, -10], y: [0, -14, 0, -14, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'bottom center', flexShrink: 0 }}
        >
          <SpriteBody frame={frame} />
        </motion.div>

        {/* Caret + speech bubble — alignItems:'center' keeps arrow at sprite mid-height */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Arrow pointing left toward the sprite */}
          <div style={{
            width: 0, height: 0, flexShrink: 0,
            borderTop:    '9px solid transparent',
            borderBottom: '9px solid transparent',
            borderRight:  '9px solid rgba(245,158,11,0.4)',
          }} />

          <AnimatePresence mode="wait">
            <motion.div
              key={noteKey}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0  }}
              exit={{    opacity: 0, x: -8 }}
              transition={{ duration: 0.18 }}
              style={{
                background:   'rgba(17,24,39,0.96)',
                border:       '1px solid rgba(245,158,11,0.35)',
                borderRadius:  14,
                padding:      '10px 13px',
                width:         210,
                boxShadow:    '0 4px 20px rgba(0,0,0,0.45)',
              }}
            >
              <div style={{
                color: '#f59e0b', fontSize: 10, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.12em',
                marginBottom: 5,
              }}>
                Alec says
              </div>
              <div style={{ color: '#d1d5db', fontSize: 12.5, lineHeight: 1.55 }}>
                "{note}"
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

export default function SeriesPicker() {
  const navigate = useNavigate()
  const [hoveredSlug, setHoveredSlug] = useState(null)

  const hoveredSeries = seriesList.find(s => s.slug === hoveredSlug) ?? null

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-16">

      {/* Ambient orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)' }}
          animate={{ x: [0, 25, -12, 0], y: [0, -20, 14, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-28 -right-28 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
          animate={{ x: [0, -30, 16, 0], y: [0, 28, -14, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
        {ambientSparkles.map((s, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{ top: s.top, left: s.left, background: s.color }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 0.5], y: [0, -18, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          />
        ))}
      </div>

      {/* Dancing Alec — only visible while a series is hovered */}
      <AnimatePresence>
        {hoveredSeries && <AlecDancer hoveredSeries={hoveredSeries} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      >
        <button
          onClick={() => navigate('/start')}
          className="text-gray-400 hover:text-white text-sm mb-8 flex items-center gap-1 transition-colors"
        >
          ← Back
        </button>
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          Alec's series picks
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-2"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 50%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Choose a series
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
          Each one is a commitment — here's what you're signing up for.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {seriesList.map((series) => {
          const coverBook = personalPicks.find((p) => p.id === series.coverBookId)
          return (
            <motion.div
              key={series.slug}
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 360, damping: 22 }}
              onMouseEnter={() => setHoveredSlug(series.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
            >
              <Link
                to={`/series/${series.slug}`}
                className="group flex flex-col h-full bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-amber-500/60 hover:shadow-[0_0_40px_rgba(245,158,11,0.14)] transition-all duration-300"
              >
                {/* Cover */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-700">
                  {coverBook?.coverUrl && (
                    <img
                      src={coverBook.coverUrl}
                      alt={series.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="text-xs bg-gray-900/80 text-gray-300 px-2.5 py-1 rounded-full font-medium">
                      {series.bookCount} books
                    </span>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      series.completed
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {series.completed ? 'Complete' : 'Ongoing'}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-gray-500 text-xs font-medium mb-1">{series.author}</p>
                  <h2 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-amber-400 transition-colors duration-200">
                    {series.name}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{series.hook}</p>
                  <p className="mt-4 text-amber-500 text-sm font-semibold group-hover:text-amber-400 transition-colors">
                    See where to start →
                  </p>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
