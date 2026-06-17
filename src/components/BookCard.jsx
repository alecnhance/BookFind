import { useNavigate } from 'react-router-dom'

function audibleUrl(title, authors) {
  const q = encodeURIComponent(`${title} ${(authors ?? []).join(' ')}`)
  return `https://www.audible.com/search?keywords=${q}`
}

export default function BookCard({ book }) {
  const navigate = useNavigate()
  const isPersonalPick = !book.authors

  const authors = isPersonalPick ? [book.author] : book.authors
  const href = isPersonalPick
    ? (book.audibleUrl ?? audibleUrl(book.title, authors))
    : audibleUrl(book.title, authors)

  return (
    <div
      className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden flex flex-col cursor-pointer hover:border-amber-500 hover:scale-[1.02] transition-all duration-200"
      onClick={() => !isPersonalPick && navigate(`/book/${book.id}`)}
    >
      {/* Cover */}
      <div className="relative aspect-[2/3] bg-gray-700 overflow-hidden">
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
            </svg>
          </div>
        )}
        {/* Audible link */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 bg-amber-500 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded hover:bg-amber-400 transition-colors"
        >
          Audible
        </a>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-1 flex-1">
        <p className="text-white text-sm font-semibold line-clamp-2 leading-snug">{book.title}</p>
        <p className="text-gray-400 text-xs line-clamp-1">{authors.join(', ')}</p>
        {book.averageRating && (
          <div className="flex items-center gap-1 mt-auto pt-1">
            <span className="text-amber-400 text-xs">{'★'.repeat(Math.round(book.averageRating))}</span>
            <span className="text-gray-500 text-xs">({book.ratingsCount?.toLocaleString()})</span>
          </div>
        )}
      </div>
    </div>
  )
}
