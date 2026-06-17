import { Link } from 'react-router-dom'

const modes = [
  {
    to: '/picks',
    icon: '★',
    title: 'My Picks',
    desc: 'Hand-selected recommendations just for you',
  },
  {
    to: '/search',
    icon: '🔍',
    title: 'Search',
    desc: 'Find any book by title, author, or keyword',
  },
  {
    to: '/browse',
    icon: '📚',
    title: 'Browse Genres',
    desc: 'Explore books by category',
  },
  {
    to: '/quiz',
    icon: '✦',
    title: 'Mood Quiz',
    desc: 'Answer a few questions and get tailored picks',
  },
]

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24">
        <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
          A gift for you
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white max-w-2xl leading-tight mb-6">
          Find your next listen
        </h1>
        <p className="text-gray-400 text-lg max-w-md">
          Discover your next favourite audiobook — browse, search, or let the quiz decide.
        </p>
      </section>

      {/* Discovery modes */}
      <section className="max-w-5xl mx-auto px-4 pb-24 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {modes.map(({ to, icon, title, desc }) => (
          <Link
            key={to}
            to={to}
            className="group flex items-start gap-4 p-6 bg-gray-800 border border-gray-700 rounded-2xl hover:border-amber-500 transition-all duration-200"
          >
            <span className="text-3xl">{icon}</span>
            <div>
              <h2 className="text-white font-semibold text-lg group-hover:text-amber-400 transition-colors">
                {title}
              </h2>
              <p className="text-gray-400 text-sm mt-1">{desc}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
