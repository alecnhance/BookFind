export default function GenreCard({ genre, icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 ${
        active
          ? 'border-amber-500 bg-amber-500/10 text-amber-400'
          : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-500 hover:text-white'
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm font-medium">{genre}</span>
    </button>
  )
}
