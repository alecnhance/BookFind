import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden flex flex-col items-center justify-center">

      {/* ── Animated background orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)' }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)' }}
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0], scale: [1, 0.94, 1.06, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {[
          { top: '18%', left: '12%', delay: 0 },
          { top: '72%', left: '8%', delay: 1.5 },
          { top: '35%', left: '88%', delay: 0.8 },
          { top: '80%', left: '78%', delay: 2.2 },
          { top: '55%', left: '50%', delay: 3 },
          { top: '10%', left: '65%', delay: 1.1 },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-400"
            style={{ top: s.top, left: s.left }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5], y: [0, -16, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          />
        ))}
      </div>

      {/* ── Hero ── */}
      <motion.div
        className="relative text-center px-4 max-w-3xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-amber-400 text-sm font-semibold uppercase tracking-[0.2em] mb-5"
        >
          A Father's Day gift from Alec
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 40%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Find your next listen
        </motion.h1>

        <motion.p variants={fadeUp} className="text-gray-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed mb-12">
          Two ways to find the perfect audiobook — curated just for you.
        </motion.p>

        <motion.div variants={fadeUp}>
          <motion.button
            onClick={() => navigate('/start')}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-10 py-4 rounded-2xl text-lg tracking-wide shadow-[0_0_40px_rgba(245,158,11,0.35)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] transition-all duration-300"
          >
            Let's find your book →
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
