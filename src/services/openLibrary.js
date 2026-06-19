const BASE = 'https://openlibrary.org/search.json'
const FIELDS = 'key,title,author_name,cover_i,first_publish_year,subject,first_sentence,number_of_pages_median,ratings_average,ratings_count'

function normalizeDoc(doc) {
  return {
    id: doc.key,
    title: doc.title ?? 'Unknown Title',
    authors: doc.author_name ?? [],
    description: Array.isArray(doc.first_sentence) ? (doc.first_sentence[0] ?? '') : '',
    categories: doc.subject?.slice(0, 5) ?? [],
    coverUrl: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` : null,
    pageCount: doc.number_of_pages_median ?? null,
    averageRating: doc.ratings_average ?? null,
    ratingsCount: doc.ratings_count ?? null,
    publishedDate: doc.first_publish_year ? String(doc.first_publish_year) : null,
  }
}

async function searchBooks(query, maxResults = 20) {
  const url = `${BASE}?q=${encodeURIComponent(query)}&limit=${maxResults}&fields=${FIELDS}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Open Library API error: ${res.status}`)
  const data = await res.json()
  return (data.docs ?? []).map(normalizeDoc)
}

export const openLibrary = {
  search: (term) => searchBooks(term),
}
