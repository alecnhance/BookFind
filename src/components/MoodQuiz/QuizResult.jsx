import { motion } from 'framer-motion'
import { useBooks } from '../../hooks/useBooks'
import { openLibrary } from '../../services/openLibrary'

function audibleUrl(title, authors) {
  const author = Array.isArray(authors) ? authors[0] ?? '' : authors
  return `https://www.audible.com/search?keywords=${encodeURIComponent(`${title} ${author}`)}`
}

function SkeletonCard({ rank }) {
  return (
    <div className="flex gap-5 bg-gray-800 border border-gray-700 rounded-2xl p-5 animate-pulse">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-600 font-bold text-sm">
        {rank}
      </div>
      <div className="w-20 h-28 bg-gray-700 rounded-lg flex-shrink-0" />
      <div className="flex flex-col flex-1 gap-3 pt-1">
        <div className="h-5 bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-700 rounded w-1/3" />
        <div className="h-3 bg-gray-700 rounded w-full" />
        <div className="h-3 bg-gray-700 rounded w-4/5" />
      </div>
    </div>
  )
}

const celebrationSparkles = [
  { top: '4%', left: '10%', delay: 0.1, color: '#f59e0b', size: 6 },
  { top: '8%', left: '82%', delay: 0.4, color: '#a78bfa', size: 5 },
  { top: '2%', left: '50%', delay: 0.2, color: '#f59e0b', size: 7 },
  { top: '12%', left: '35%', delay: 0.6, color: '#a78bfa', size: 4 },
  { top: '6%', left: '68%', delay: 0.3, color: '#f59e0b', size: 5 },
]

export default function QuizResult({ query, onReset, onBack }) {
  const { books, loading, error } = useBooks(() => openLibrary.search(query), [query])
  const results = books.slice(0, 3)

  return (
    <div className="relative">
      {/* Subtle celebration sparkles at the top */}
      {!loading && !error && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 overflow-hidden">
          {celebrationSparkles.map((s, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{ top: s.top, left: s.left, width: s.size, height: s.size, background: s.color }}
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 2.5, 0], y: [0, -30, -60] }}
              transition={{ duration: 1.4, delay: s.delay, ease: 'easeOut' }}
            />
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      >
        <div className="flex items-center justify-between mb-2">
          <motion.h2
            className="text-3xl font-bold"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 50%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 22 }}
          >
            Your recommendations
          </motion.h2>
          <motion.button
            onClick={onReset}
            className="text-sm text-amber-500 hover:text-amber-400 font-medium transition-colors"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            Retake →
          </motion.button>
        </div>
        <p className="text-gray-400 mb-10">Based on your answers.</p>

        {loading && (
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((i) => <SkeletonCard key={i} rank={i} />)}
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-gray-400 mb-6">
              Couldn't load recommendations. Check your connection and try again.
            </p>
            <button
              onClick={onReset}
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && results.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 mb-6">No matches found — try different answers.</p>
            <button
              onClick={onReset}
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Retake quiz
            </button>
          </div>
        )}

        {!loading && !error && results.length > 0 && (
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
          >
            {results.map((book, i) => (
              <motion.div
                key={book.id}
                variants={{
                  hidden: { opacity: 0, y: 32, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 22 } },
                }}
                whileHover={{ y: -4, boxShadow: '0 0 40px rgba(245,158,11,0.12)' }}
                className="flex gap-5 bg-gray-800 border border-gray-700 rounded-2xl p-5 hover:border-amber-500/40 transition-colors duration-200"
              >
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm flex items-center justify-center"
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 400, damping: 18 }}
                >
                  {i + 1}
                </motion.div>

                {book.coverUrl && (
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-20 rounded-lg object-cover flex-shrink-0 self-start shadow-lg"
                  />
                )}

                <div className="flex flex-col flex-1 min-w-0">
                  <h3 className="text-white font-bold text-lg leading-snug mb-0.5">{book.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{book.authors.join(', ')}</p>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4">
                    {book.description}
                  </p>
                  <motion.a
                    href={audibleUrl(book.title, book.authors)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                    whileHover={{ scale: 1.06, boxShadow: '0 0 36px rgba(245,158,11,0.45)' }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Find on Audible →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!loading && onBack && (
          <motion.button
            onClick={onBack}
            className="mt-8 text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors"
            whileHover={{ x: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            ← Previous question
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}
