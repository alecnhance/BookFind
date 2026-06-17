import BookGrid from '../components/BookGrid'
import { personalPicks, personalPicksNote } from '../data/personalPicks'

export default function PersonalPicks() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Alec's Favorites</h1>
      <p className="text-gray-400 mb-10">{personalPicksNote}</p>
      <BookGrid
        books={personalPicks}
        emptyMessage="Picks coming soon — check back after Father's Day!"
      />
    </div>
  )
}
