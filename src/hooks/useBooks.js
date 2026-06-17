import { useState, useEffect, useRef } from 'react'

const cache = new Map()

export function useBooks(fetchFn, deps = []) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const abortRef = useRef(null)

  useEffect(() => {
    if (!fetchFn) return

    const cacheKey = deps.join('|')
    if (cache.has(cacheKey)) {
      setBooks(cache.get(cacheKey))
      return
    }

    abortRef.current?.abort()
    abortRef.current = new AbortController()

    setLoading(true)
    setError(null)

    fetchFn()
      .then((data) => {
        cache.set(cacheKey, data)
        setBooks(data)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => abortRef.current?.abort()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { books, loading, error }
}
