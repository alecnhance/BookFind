import { useState, useCallback } from 'react'
import SearchBar from '../components/SearchBar'
import BookGrid from '../components/BookGrid'
import { googleBooks } from '../services/googleBooks'
import { useBooks } from '../hooks/useBooks'

export default function Search() {
  const [term, setTerm] = useState('')
  const fetchFn = useCallback(() => googleBooks.search(term), [term])
  const { books, loading, error } = useBooks(term ? fetchFn : null, [term])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Search</h1>
      <div className="max-w-2xl mb-10">
        <SearchBar onSearch={setTerm} />
      </div>
      {error && <p className="text-red-400 mb-4">Error: {error}</p>}
      {!term ? (
        <p className="text-gray-500 text-center py-20">
          Start typing to find your next audiobook
        </p>
      ) : (
        <BookGrid books={books} loading={loading} emptyMessage={`No results for "${term}"`} />
      )}
    </div>
  )
}
