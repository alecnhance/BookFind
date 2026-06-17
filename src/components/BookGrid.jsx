import BookCard from './BookCard'

function SkeletonCard() {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden animate-pulse">
      <div className="aspect-[2/3] bg-gray-700" />
      <div className="p-3 flex flex-col gap-2">
        <div className="h-3 bg-gray-700 rounded w-3/4" />
        <div className="h-3 bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  )
}

export default function BookGrid({ books = [], loading = false, emptyMessage = 'No books found.' }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    )
  }

  if (!books.length) {
    return (
      <p className="text-gray-400 text-center py-16">{emptyMessage}</p>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {books.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  )
}
