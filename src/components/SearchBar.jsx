import { useState, useEffect } from 'react'

export default function SearchBar({ onSearch, placeholder = 'Search by title, author, or keyword…' }) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value.trim()) onSearch(value.trim())
    }, 300)
    return () => clearTimeout(timer)
  }, [value, onSearch])

  return (
    <div className="relative">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Escape' && setValue('')}
        placeholder={placeholder}
        className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
      />
    </div>
  )
}
