import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { seriesList } from '../data/series'
import { personalPicks } from '../data/personalPicks'

function audibleUrl(title, author) {
  return `https://www.audible.com/search?keywords=${encodeURIComponent(`${title} ${author}`)}`
}

export default function SeriesDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const series = seriesList.find((s) => s.slug === slug)

  if (!series) {
    return (
      <div className="text-center py-24 text-gray-400">
        Series not found. <Link to="/series" className="text-amber-500">Back to series</Link>
      </div>
    )
  }

  const books = series.bookIds.map((id) => personalPicks.find((p) => p.id === id)).filter(Boolean)
  const entryBook = books[0]

  return (
    <div>
      {/* ── Hero banner with blurred cover ── */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        {entryBook?.coverUrl && (
          <img
            src={entryBook.coverUrl}
            alt={series.name}
            className="absolute inset-0 w-full h-full object-cover scale-110"
            style={{ filter: 'blur(12px)', transform: 'scale(1.15)' }}
          />
        )}
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-8 max-w-6xl mx-auto w-full">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-white text-sm mb-4 self-start"
          >
            ← Back
          </button>
          <div className="flex items-end gap-4">
            <div>
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
                {series.author}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
                {series.name}
              </h1>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-800/80 text-gray-300 px-3 py-1 rounded-full">
                  {series.bookCount} books
                </span>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  series.completed
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {series.completed ? 'Complete' : 'Ongoing'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">

        {/* ── Start here ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Start here
          </p>
          {entryBook && (
            <div className="flex flex-col md:flex-row gap-8 bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8">
              <img
                src={entryBook.coverUrl}
                alt={entryBook.title}
                className="w-36 rounded-xl object-cover self-start flex-shrink-0 shadow-xl"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{entryBook.title}</h2>
                  <p className="text-gray-400 mb-4">{entryBook.author}</p>
                  <p className="text-gray-300 leading-relaxed">{entryBook.description}</p>
                </div>
                <a
                  href={entryBook.audibleUrl ?? audibleUrl(entryBook.title, entryBook.author)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-3 rounded-xl transition-colors self-start"
                >
                  Find on Audible →
                </a>
              </div>
            </div>
          )}
        </motion.section>

        {/* ── Reading order ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Reading order
          </p>
          <p className="text-gray-400 mb-6">All {series.bookCount} books in the series — in order.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {books.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group cursor-pointer"
                onClick={() => window.open(book.audibleUrl ?? audibleUrl(book.title, book.author), '_blank')}
              >
                <div className={`relative rounded-xl overflow-hidden aspect-[2/3] mb-2 ${
                  i === 0 ? 'ring-2 ring-amber-500' : 'ring-1 ring-gray-700 group-hover:ring-amber-500/50'
                } transition-all duration-200`}>
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-gray-900/80 text-xs text-gray-300 font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {i + 1}
                  </div>
                  {i === 0 && (
                    <div className="absolute bottom-0 inset-x-0 bg-amber-500 text-gray-900 text-[10px] font-bold text-center py-1">
                      START HERE
                    </div>
                  )}
                </div>
                <p className="text-white text-xs font-medium line-clamp-2 leading-snug">{book.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
