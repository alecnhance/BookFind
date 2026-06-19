import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const paths = [
  {
    to: '/series',
    icon: '📖',
    title: "Start one of Alec's Series",
    desc: "Dive into a hand-picked epic. Alec walks you through exactly where to begin and what's ahead.",
    cta: 'Choose a series →',
    glow: 'rgba(245,158,11,0.12)',
    float: true,
  },
  {
    to: '/quiz',
    icon: '✦',
    title: 'Find Your Perfect Book',
    desc: 'Answer questions about your taste and get top picks, matched to who you are as a reader.',
    cta: 'Take the quiz →',
    glow: 'rgba(124,58,237,0.12)',
    float: false,
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 240, damping: 20 } },
}

const sparkles = [
  { top: '14%', left: '5%', delay: 0, color: '#f59e0b', size: 6 },
  { top: '72%', left: '7%', delay: 1.4, color: '#f59e0b', size: 5 },
  { top: '28%', left: '91%', delay: 0.7, color: '#a78bfa', size: 7 },
  { top: '83%', left: '83%', delay: 2.1, color: '#a78bfa', size: 5 },
  { top: '52%', left: '47%', delay: 2.8, color: '#f59e0b', size: 4 },
  { top: '11%', left: '63%', delay: 1.0, color: '#f59e0b', size: 6 },
  { top: '60%', left: '22%', delay: 3.2, color: '#a78bfa', size: 5 },
  { top: '38%', left: '77%', delay: 1.7, color: '#f59e0b', size: 4 },
  { top: '90%', left: '42%', delay: 0.4, color: '#a78bfa', size: 6 },
  { top: '20%', left: '38%', delay: 2.5, color: '#f59e0b', size: 4 },
]

export default function Start() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 py-16">

      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)' }}
          animate={{ x: [0, 35, -18, 0], y: [0, -28, 18, 0], scale: [1, 1.07, 0.96, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-36 -right-36 w-[640px] h-[640px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 70%)' }}
          animate={{ x: [0, -44, 22, 0], y: [0, 38, -20, 0], scale: [1, 0.94, 1.06, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Floating sparkle dots */}
        {sparkles.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size, background: s.color }}
            animate={{ opacity: [0, 1, 0], scale: [0.4, 2, 0.4], y: [0, -22, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          />
        ))}
      </div>

      <motion.div
        className="relative w-full max-w-4xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-amber-400 text-sm font-semibold uppercase tracking-[0.2em] text-center mb-3"
        >
          How would you like to explore?
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 45%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Choose your path
        </motion.h1>

        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paths.map(({ to, icon, title, desc, cta, glow, float }, idx) => (
            <motion.div
              key={to}
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            >
              <Link
                to={to}
                className="group relative flex flex-col h-full p-8 bg-gray-800/80 border border-gray-700 rounded-3xl overflow-hidden hover:border-amber-500/60 hover:shadow-[0_0_70px_rgba(245,158,11,0.22)] transition-all duration-300"
              >
                {/* Shimmer top line on hover */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.8), transparent)' }}
                />
                {/* Ambient hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${glow} 0%, transparent 65%)` }}
                />

                {/* Animated icon */}
                <motion.span
                  className="text-5xl mb-6 block select-none"
                  animate={float
                    ? { y: [0, -8, 0] }
                    : { rotate: [0, 18, -12, 6, 0], scale: [1, 1.15, 0.92, 1.08, 1] }
                  }
                  transition={float
                    ? { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
                    : { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }
                  }
                >
                  {icon}
                </motion.span>

                <h2 className="text-white font-bold text-2xl mb-3 group-hover:text-amber-400 transition-colors duration-200">
                  {title}
                </h2>
                <p className="text-gray-400 leading-relaxed flex-1">{desc}</p>

                <motion.p
                  className="mt-6 text-amber-500 font-semibold text-sm group-hover:text-amber-300 transition-colors"
                  initial={false}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  {cta}
                </motion.p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
