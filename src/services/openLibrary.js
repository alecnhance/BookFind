const BASE = 'https://openlibrary.org/search.json'
const FIELDS = 'key,title,author_name,cover_i,first_publish_year,subject,first_sentence,number_of_pages_median,ratings_average,ratings_count'

// Non-Latin scripts (Cyrillic, Greek, Hebrew, Arabic, CJK, Hangul, Thai, Devanagari)
const NON_LATIN = /[Ͱ-ϿЀ-ӿ֐-׿؀-ۿऀ-ॿ฀-๿　-鿿가-힯]/

const EN_WORDS = new Set(
  'the a an and of to in is was were he she it its his her they you on at with for that this but not had have has as are be by from or what when who which there their would could should one out up about into over after'.split(' ')
)

// Common stopwords in German / French / Spanish / Italian — used to detect non-English text
const FOREIGN_WORDS = new Set(
  ('der die das und ich sie mir ein eine nicht mit auf war zu den dem als sich ihre ihren darf ' + // German
   'le la les un une et est dans je il elle ne pas des du que qui pour sur avec etait nous vous ' + // French
   'el los las y en de no con por para su lo como era mas pero ' + // Spanish
   'di che non sono questo della delle gli nel').split(' ') // Italian
)

// Diacritics characteristic of non-English Latin orthographies (Polish, Turkish,
// Nordic, Portuguese, etc.) — catches languages not covered by FOREIGN_WORDS.
const FOREIGN_DIACRITICS = /[ąćęłńśźżäöüßàâçéèêëîïôœùûáíóúñãõåøæışğ]/i

// Score a sentence for "Englishness": +1 per English stopword, -1 per foreign stopword.
function englishScore(s) {
  const words = s.toLowerCase().match(/[a-zà-ÿ]+/g) ?? []
  let score = 0
  for (const w of words) {
    if (EN_WORDS.has(w)) score++
    else if (FOREIGN_WORDS.has(w)) score--
  }
  return score
}

// From the multi-edition first_sentence array, pick the most English-looking entry.
// Rejects non-Latin scripts outright; for Latin text with foreign diacritics it
// demands a stronger English signal. Returns '' if nothing qualifies — better no
// quote than a foreign one.
function pickEnglishSentence(firstSentence) {
  if (typeof firstSentence === 'string') firstSentence = [firstSentence]
  if (!Array.isArray(firstSentence) || firstSentence.length === 0) return ''
  let best = '', bestScore = 0
  for (const s of firstSentence) {
    if (typeof s !== 'string' || !s.trim()) continue
    if (NON_LATIN.test(s)) continue
    const score = englishScore(s)
    const minScore = FOREIGN_DIACRITICS.test(s) ? 2 : 1
    if (score >= minScore && score > bestScore) { bestScore = score; best = s }
  }
  return best
}

function normalizeDoc(doc) {
  return {
    id: doc.key,
    title: doc.title ?? 'Unknown Title',
    authors: doc.author_name ?? [],
    description: pickEnglishSentence(doc.first_sentence),
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
