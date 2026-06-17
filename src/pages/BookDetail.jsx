import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { googleBooks } from '../services/googleBooks'
import BookGrid from '../components/BookGrid'
import { useBooks } from '../hooks/useBooks'

function audibleUrl(title, authors = []) {
  const q = encodeURIComponent(`${title} ${authors.join(' ')}`)
  return `https://www.audible.com/search?keywords=${q}`
}

export default function BookDetail() {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setLoading(true)
    googleBooks.getById(id)
      .then(setBook)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  const genre = book?.categories?.[0] ?? ''
  const author = book?.authors?.[0] ?? ''

  const { books: related, loading: relatedLoading } = useBooks(
    book ? () => googleBooks.moreLikeThis(genre, author) : null,
    [genre, author],
  )

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 animate-pulse">
        <div className="h-8 bg-gray-700 rounded w-1/3 mb-4" />
        <div className="flex gap-8">
          <div className="w-48 aspect-[2/3] bg-gray-700 rounded-xl flex-shrink-0" />
          <div className="flex-1 space-y-3">
            <div className="h-4 bg-gray-700 rounded w-2/3" />
            <div className="h-4 bg-gray-700 rounded w-1/2" />
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-full" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !book) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-red-400 mb-4">{error ?? 'Book not found.'}</p>
        <Link to="/search" className="text-amber-500 hover:text-amber-400">← Back to search</Link>
      </div>
    )
  }

  const description = book.description
  const truncated = description.length > 600 && !expanded

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Back */}
      <button onClick={() => history.back()} className="text-gray-400 hover:text-white text-sm mb-8 flex items-center gap-1">
        ← Back
      </button>

      {/* Main info */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Cover */}
        <div className="flex-shrink-0 w-48 mx-auto md:mx-0">
          {book.coverUrl ? (
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-full rounded-xl object-cover shadow-2xl"
            />
          ) : (
            <div className="w-full aspect-[2/3] bg-gray-700 rounded-xl flex items-center justify-center">
              <span className="text-gray-500 text-4xl">📖</span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">{book.title}</h1>
          <p className="text-gray-400 text-lg mb-3">{book.authors.join(', ')}</p>

          {/* Meta tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {book.categories.map((c) => (
              <span key={c} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">{c}</span>
            ))}
            {book.pageCount && (
              <span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                {book.pageCount} pages
              </span>
            )}
            {book.publishedDate && (
              <span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                {book.publishedDate.slice(0, 4)}
              </span>
            )}
          </div>

          {/* Rating */}
          {book.averageRating && (
            <div className="flex items-center gap-2 mb-5">
              <span className="text-amber-400">{'★'.repeat(Math.round(book.averageRating))}</span>
              <span className="text-gray-400 text-sm">{book.averageRating} ({book.ratingsCount?.toLocaleString()} ratings)</span>
            </div>
          )}

          {/* Description */}
          {description && (
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                {truncated ? description.slice(0, 600) + '…' : description}
              </p>
              {description.length > 600 && (
                <button
                  onClick={() => setExpanded((e) => !e)}
                  className="text-amber-500 hover:text-amber-400 text-sm mt-2"
                >
                  {expanded ? 'Show less' : 'Read more'}
                </button>
              )}
            </div>
          )}

          {/* CTA */}
          <a
            href={audibleUrl(book.title, book.authors)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Find on Audible →
          </a>
        </div>
      </div>

      {/* More like this */}
      {(related.length > 0 || relatedLoading) && (
        <section>
          <h2 className="text-xl font-bold text-white mb-6">More like this</h2>
          <BookGrid books={related} loading={relatedLoading} />
        </section>
      )}
    </div>
  )
}
