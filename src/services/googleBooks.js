const BASE = 'https://www.googleapis.com/books/v1/volumes'
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
const KEY_PARAM = API_KEY ? `&key=${API_KEY}` : ''

function normalizeBook(item) {
  const info = item.volumeInfo ?? {}
  return {
    id: item.id,
    title: info.title ?? 'Unknown Title',
    authors: info.authors ?? [],
    description: info.description ?? '',
    categories: info.categories ?? [],
    coverUrl: info.imageLinks?.thumbnail?.replace('http:', 'https:') ?? null,
    pageCount: info.pageCount ?? null,
    averageRating: info.averageRating ?? null,
    ratingsCount: info.ratingsCount ?? null,
    publishedDate: info.publishedDate ?? null,
  }
}

async function fetchVolumes(query, maxResults = 20) {
  const url = `${BASE}?q=${encodeURIComponent(query)}&maxResults=${maxResults}&printType=books${KEY_PARAM}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Google Books API error: ${res.status}`)
  const data = await res.json()
  return (data.items ?? []).map(normalizeBook)
}

export const googleBooks = {
  search: (term) => fetchVolumes(term),
  bySubject: (genre) => fetchVolumes(`subject:${genre}`),
  getById: async (id) => {
    const res = await fetch(`${BASE}/${id}${API_KEY ? `?key=${API_KEY}` : ''}`)
    if (!res.ok) throw new Error(`Google Books API error: ${res.status}`)
    return normalizeBook(await res.json())
  },
  moreLikeThis: (genre, author) =>
    fetchVolumes(`subject:${genre}+inauthor:${author}`, 6),
}
