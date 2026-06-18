import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16">
        <Link to="/" className="text-amber-500 font-bold text-xl tracking-tight">
          BookFind
        </Link>
      </div>
    </nav>
  )
}
