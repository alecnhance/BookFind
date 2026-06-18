import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const paths = [
  {
    to: '/series',
    icon: '📖',
    title: "Start one of Alec's Series",
    desc: "Dive into a hand-picked epic. Alec walks you through exactly where to begin and what's ahead.",
    cta: 'Choose a series →',
  },
  {
    to: '/quiz',
    icon: '✦',
    title: 'Find Your Perfect Book',
    desc: 'Answer 7 questions about your taste and get your top 3 picks, matched to who you are as a reader.',
    cta: 'Take the quiz →',
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 26 } },
}

export default function Start() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        className="w-full max-w-4xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeUp} className="text-amber-400 text-sm font-semibold uppercase tracking-[0.2em] text-center mb-3">
          How would you like to explore?
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Choose your path
        </motion.h1>

        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paths.map(({ to, icon, title, desc, cta }) => (
            <motion.div
              key={to}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 26 }}
            >
              <Link
                to={to}
                className="group flex flex-col h-full p-8 bg-gray-800/80 border border-gray-700 rounded-3xl hover:border-amber-500/60 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-300"
              >
                <span className="text-5xl mb-6">{icon}</span>
                <h2 className="text-white font-bold text-2xl mb-3 group-hover:text-amber-400 transition-colors duration-200">
                  {title}
                </h2>
                <p className="text-gray-400 leading-relaxed flex-1">{desc}</p>
                <p className="mt-6 text-amber-500 font-semibold text-sm group-hover:text-amber-400 transition-colors">
                  {cta}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
