import { useMemo } from 'react'
import { googleBooks } from '../../services/googleBooks'
import { useBooks } from '../../hooks/useBooks'
import BookGrid from '../BookGrid'

// Maps quiz answers to a Google Books subject query
function answersToQuery([fiction, vibe, , topic]) {
  const topicMap = {
    Thriller: 'thriller',
    History: 'history',
    Comedy: 'humor',
    Fantasy: 'fantasy',
    Biography: 'biography',
    Business: 'business',
    Science: 'science',
    Mystery: 'mystery',
  }
  const subject = topicMap[topic] ?? topic.toLowerCase()
  const qualifier = fiction === 'Non-Fiction' ? '+nonfiction' : '+fiction'
  return `subject:${subject}${qualifier}`
}

export default function QuizResult({ answers, onReset }) {
  const query = useMemo(() => answersToQuery(answers), [answers])
  const { books, loading, error } = useBooks(() => googleBooks.bySubject(query), [query])

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Your Recommendations</h2>
        <button
          onClick={onReset}
          className="text-sm text-amber-500 hover:text-amber-400 font-medium"
        >
          Retake quiz →
        </button>
      </div>
      {error && <p className="text-red-400 mb-4">Failed to load results: {error}</p>}
      <BookGrid books={books} loading={loading} emptyMessage="No results found — try retaking the quiz." />
    </div>
  )
}
