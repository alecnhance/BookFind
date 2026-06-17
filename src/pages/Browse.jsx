import { useState, useCallback } from 'react'
import GenreCard from '../components/GenreCard'
import BookGrid from '../components/BookGrid'
import { googleBooks } from '../services/googleBooks'
import { useBooks } from '../hooks/useBooks'

const GENRES = [
  { label: 'Thriller', icon: '🔪' },
  { label: 'Biography', icon: '👤' },
  { label: 'History', icon: '🏛️' },
  { label: 'Science Fiction', icon: '🚀' },
  { label: 'Fantasy', icon: '🐉' },
  { label: 'Business', icon: '💼' },
  { label: 'Self-Help', icon: '🌱' },
  { label: 'Mystery', icon: '🕵️' },
  { label: 'True Crime', icon: '🔎' },
  { label: 'Comedy', icon: '😄' },
]

export default function Browse() {
  const [active, setActive] = useState(null)

  const fetchFn = useCallback(
    () => googleBooks.bySubject(active),
    [active],
  )
  const { books, loading, error } = useBooks(active ? fetchFn : null, [active])

  const handleGenreClick = (label) =>
    setActive((prev) => (prev === label ? null : label))

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Browse by Genre</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12">
        {GENRES.map(({ label, icon }) => (
          <GenreCard
            key={label}
            genre={label}
            icon={icon}
            active={active === label}
            onClick={() => handleGenreClick(label)}
          />
        ))}
      </div>

      {error && <p className="text-red-400 mb-4">Error: {error}</p>}

      {active ? (
        <BookGrid books={books} loading={loading} emptyMessage={`No results for "${active}"`} />
      ) : (
        <p className="text-gray-500 text-center py-16">Select a genre to see books</p>
      )}
    </div>
  )
}
