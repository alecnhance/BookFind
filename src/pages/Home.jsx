import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const modes = [
  {
    to: '/picks',
    icon: '★',
    title: 'My Picks',
    desc: 'Hand-selected recommendations just for you',
  },
  {
    to: '/search',
    icon: '🔍',
    title: 'Search',
    desc: 'Find any book by title, author, or keyword',
  },
  {
    to: '/browse',
    icon: '📚',
    title: 'Browse Genres',
    desc: 'Explore books by category',
  },
  {
    to: '/quiz',
    icon: '✦',
    title: 'Mood Quiz',
    desc: 'Answer a few questions and get tailored picks',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 24 } },
}

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">

      {/* ── Animated background orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Amber orb — top left */}
        <motion.div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)' }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Purple orb — bottom right */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)' }}
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0], scale: [1, 0.94, 1.06, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        {/* Teal accent — center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Floating sparkles */}
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
      <motion.section
        className="relative flex flex-col items-center justify-center text-center px-4 pt-28 pb-16"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-amber-400 text-sm font-semibold uppercase tracking-[0.2em] mb-5"
        >
          A gift for you
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold max-w-2xl leading-tight mb-6"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 40%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Find your next listen
        </motion.h1>

        <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">
          Discover your next favourite audiobook — browse, search, or let the quiz decide.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            to="/picks"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-3.5 rounded-2xl transition-colors duration-200 text-sm tracking-wide"
          >
            See my picks →
          </Link>
        </motion.div>
      </motion.section>

      {/* ── Discovery cards ── */}
      <motion.section
        className="relative max-w-5xl mx-auto px-4 pb-24 grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {modes.map(({ to, icon, title, desc }) => (
          <motion.div
            key={to}
            variants={cardVariant}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          >
            <Link
              to={to}
              className="group flex items-start gap-5 p-6 h-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-amber-500/70 hover:bg-gray-800 hover:shadow-[0_0_30px_rgba(245,158,11,0.12)] transition-all duration-300"
            >
              <motion.span
                className="text-3xl mt-0.5 flex-shrink-0"
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
              >
                {icon}
              </motion.span>
              <div>
                <h2 className="text-white font-semibold text-lg group-hover:text-amber-400 transition-colors duration-200">
                  {title}
                </h2>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">{desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </div>
  )
}
