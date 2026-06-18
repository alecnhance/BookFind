import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { seriesList } from '../data/series'
import { personalPicks } from '../data/personalPicks'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 240, damping: 24 } },
}

export default function SeriesPicker() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          Alec's series picks
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Choose a series</h1>
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
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 360, damping: 26 }}
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

                  {/* Badges */}
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
