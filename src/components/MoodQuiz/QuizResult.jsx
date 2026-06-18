import { motion } from 'framer-motion'
import { DIMENSION_LABELS } from '../../data/quizData'

function audibleUrl(title, author) {
  return `https://www.audible.com/search?keywords=${encodeURIComponent(`${title} ${author}`)}`
}

function MatchTag({ dim, value }) {
  const label = DIMENSION_LABELS[dim]?.[value]
  if (!label) return null
  return (
    <span className="text-xs bg-amber-500/15 text-amber-400 px-2.5 py-1 rounded-full font-medium">
      {label}
    </span>
  )
}

export default function QuizResult({ results, answers, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-3xl font-bold text-white">Your top picks</h2>
        <button
          onClick={onReset}
          className="text-sm text-amber-500 hover:text-amber-400 font-medium"
        >
          Retake →
        </button>
      </div>
      <p className="text-gray-400 mb-10">Based on your answers — Alec's best matches for you.</p>

      <div className="flex flex-col gap-6">
        {results.map((book, i) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="flex gap-5 bg-gray-800 border border-gray-700 rounded-2xl p-5 hover:border-amber-500/40 transition-colors duration-200"
          >
            {/* Rank */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm flex items-center justify-center">
              {i + 1}
            </div>

            {/* Cover */}
            {book.coverUrl && (
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-20 rounded-lg object-cover flex-shrink-0 self-start shadow-lg"
              />
            )}

            {/* Info */}
            <div className="flex flex-col flex-1 min-w-0">
              <h3 className="text-white font-bold text-lg leading-snug mb-0.5">{book.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{book.author}</p>

              {/* Match tags */}
              {book.matched?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {book.matched.map((dim) => (
                    <MatchTag key={dim} dim={dim} value={answers[dim]} />
                  ))}
                </div>
              )}

              <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4">
                {book.description}
              </p>

              <a
                href={book.audibleUrl ?? audibleUrl(book.title, book.author)}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                Find on Audible →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
