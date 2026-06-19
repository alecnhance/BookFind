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

const orbs = [
  { className: 'absolute -top-40 -left-40 w-[700px] h-[700px]', color: 'rgba(245,158,11,0.22)', dx: [0, 50, -25, 0], dy: [0, -35, 22, 0], duration: 18 },
  { className: 'absolute -bottom-48 -right-48 w-[800px] h-[800px]', color: 'rgba(124,58,237,0.18)', dx: [0, -55, 30, 0], dy: [0, 45, -22, 0], duration: 22, delay: 3 },
  { className: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]', color: 'rgba(20,184,166,0.10)', scale: [1, 1.2, 1], duration: 9, delay: 1 },
  { className: 'absolute -top-20 right-0 w-[400px] h-[400px]', color: 'rgba(236,72,153,0.10)', dx: [0, -30, 18, 0], dy: [0, 28, -12, 0], duration: 25, delay: 6 },
  { className: 'absolute bottom-0 -left-20 w-[450px] h-[450px]', color: 'rgba(59,130,246,0.10)', dx: [0, 38, -20, 0], dy: [0, -30, 18, 0], duration: 20, delay: 9 },
]

const sparkles = [
  { top: '12%', left: '8%', delay: 0, color: '#f59e0b', size: 5 },
  { top: '28%', left: '4%', delay: 2.1, color: '#a78bfa', size: 4 },
  { top: '68%', left: '6%', delay: 1.4, color: '#f59e0b', size: 6 },
  { top: '82%', left: '14%', delay: 3.0, color: '#a78bfa', size: 4 },
  { top: '18%', left: '88%', delay: 0.7, color: '#f59e0b', size: 5 },
  { top: '42%', left: '93%', delay: 1.9, color: '#a78bfa', size: 6 },
  { top: '74%', left: '86%', delay: 0.4, color: '#f59e0b', size: 4 },
  { top: '90%', left: '76%', delay: 2.6, color: '#a78bfa', size: 5 },
  { top: '55%', left: '50%', delay: 3.3, color: '#f59e0b', size: 3 },
  { top: '8%',  left: '55%', delay: 1.1, color: '#f59e0b', size: 5 },
  { top: '33%', left: '22%', delay: 2.8, color: '#a78bfa', size: 4 },
  { top: '60%', left: '30%', delay: 0.9, color: '#f59e0b', size: 3 },
  { top: '78%', left: '62%', delay: 1.7, color: '#a78bfa', size: 5 },
  { top: '48%', left: '78%', delay: 3.6, color: '#f59e0b', size: 4 },
  { top: '22%', left: '68%', delay: 0.3, color: '#a78bfa', size: 3 },
  { top: '95%', left: '45%', delay: 2.3, color: '#f59e0b', size: 4 },
]

const shootingStars = [
  { top: '22%', delay: 2,  repeatDelay: 15, length: 140 },
  { top: '55%', delay: 9,  repeatDelay: 18, length: 110 },
  { top: '78%', delay: 16, repeatDelay: 22, length: 160 },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Aurora orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {orbs.map((o, i) => (
          <motion.div
            key={i}
            className={`${o.className} rounded-full`}
            style={{ background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)` }}
            animate={{
              x: o.dx ?? [0, 0, 0, 0],
              y: o.dy ?? [0, 0, 0, 0],
              scale: o.scale ?? [1, 1.06, 0.96, 1],
              ...(o.scale ? { opacity: [0.6, 1, 0.6] } : {}),
            }}
            transition={{ duration: o.duration, repeat: Infinity, ease: 'easeInOut', delay: o.delay ?? 0 }}
          />
        ))}

        {/* Sparkle dots */}
        {sparkles.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size, background: s.color }}
            animate={{ opacity: [0, 1, 0], scale: [0.4, 2.2, 0.4], y: [0, -20, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          />
        ))}

        {/* Shooting stars */}
        {shootingStars.map((s, i) => (
          <motion.div
            key={i}
            className="absolute h-px rounded-full"
            style={{
              top: s.top,
              left: 0,
              width: s.length,
              background: 'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.9) 50%, transparent 100%)',
              rotate: '-12deg',
            }}
            animate={{ x: ['-5vw', '110vw'], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.0,
              repeat: Infinity,
              repeatDelay: s.repeatDelay,
              delay: s.delay,
              ease: 'easeIn',
              times: [0, 0.15, 0.75, 1],
            }}
          />
        ))}
      </div>

      {/* Hero */}
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

        <motion.div variants={fadeUp} className="relative inline-block">
          {/* Two staggered ripple rings — expand outward only, never shrink back */}
          {[0, 0.9].map((delay) => (
            <motion.div
              key={delay}
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ background: 'rgba(245,158,11,0.28)' }}
              animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay }}
            />
          ))}
          <motion.button
            onClick={() => navigate('/start')}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="relative bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-10 py-4 rounded-2xl text-lg tracking-wide shadow-[0_0_40px_rgba(245,158,11,0.35)] hover:shadow-[0_0_70px_rgba(245,158,11,0.55)] transition-all duration-300"
          >
            Let's find your book →
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
