export const QUESTIONS = [
  {
    id: 'protagonist',
    question: 'What kind of hero do you prefer?',
    options: [
      { label: 'A lone protagonist I can follow closely', value: 'solo' },
      { label: 'A massive ensemble cast across many POVs', value: 'ensemble' },
    ],
  },
  {
    id: 'tone',
    question: 'What tone draws you in?',
    options: [
      { label: 'Dark, brutal, and unforgiving', value: 'dark' },
      { label: 'Hopeful — I want to root for people to win', value: 'hopeful' },
      { label: 'Balanced — light and shadow both', value: 'balanced' },
    ],
  },
  {
    id: 'magic',
    question: 'How do you feel about deep magic systems?',
    options: [
      { label: 'Love them — the more rules and depth the better', value: 'heavy' },
      { label: "They're fine but not what I'm here for", value: 'light' },
    ],
  },
  {
    id: 'complexity',
    question: 'How do you like to be dropped into a story?',
    options: [
      { label: "Throw me in the deep end — I'll figure it out", value: 'challenging' },
      { label: 'I prefer things to be explained as I go', value: 'accessible' },
    ],
  },
  {
    id: 'length',
    question: 'How big a commitment are you up for?',
    options: [
      { label: '3 books — tight, complete, satisfying', value: 'short' },
      { label: '5 books — substantial but focused', value: 'medium' },
      { label: '10+ books — I want to live inside a world', value: 'long' },
    ],
  },
  {
    id: 'pace',
    question: 'How do you like your story to open?',
    options: [
      { label: 'Action and momentum from the very first chapter', value: 'fast' },
      { label: 'Slow burn — I trust the world-building payoff', value: 'slow' },
    ],
  },
  {
    id: 'completed',
    question: 'Do you want a finished series?',
    options: [
      { label: "Yes — I need a proper ending", value: 'true' },
      { label: "No — ongoing is fine, I'll catch up as it releases", value: 'false' },
    ],
  },
]

// Tags for every book in personalPicks, used by scoreBooks()
export const BOOK_TAGS = {
  // ── Stormlight Archive ──────────────────────────────────────────────────────
  // Solo-POV feeling (Kaladin/Shallan/Dalinar), balanced tone, epic scope,
  // very heavy magic (Stormlight, Surgebinding, Fabrials), accessible entry,
  // 5-book series, ongoing
  'sa-1': { protagonist: 'solo', tone: 'balanced', magic: 'heavy', complexity: 'accessible', length: 'medium', pace: 'slow',   completed: 'false' },
  'sa-2': { protagonist: 'solo', tone: 'balanced', magic: 'heavy', complexity: 'accessible', length: 'medium', pace: 'fast',   completed: 'false' },
  'sa-3': { protagonist: 'solo', tone: 'balanced', magic: 'heavy', complexity: 'accessible', length: 'medium', pace: 'fast',   completed: 'false' },
  'sa-4': { protagonist: 'solo', tone: 'balanced', magic: 'heavy', complexity: 'accessible', length: 'medium', pace: 'slow',   completed: 'false' },
  'sa-5': { protagonist: 'solo', tone: 'hopeful',  magic: 'heavy', complexity: 'accessible', length: 'medium', pace: 'fast',   completed: 'false' },

  // ── Mistborn ────────────────────────────────────────────────────────────────
  // Solo protagonist (Vin, then Elend), hopeful/triumphant tone,
  // very heavy magic (Allomancy rules), accessible, 3-book series, complete
  'mb-1': { protagonist: 'solo', tone: 'hopeful',  magic: 'heavy', complexity: 'accessible', length: 'short',  pace: 'fast',   completed: 'true' },
  'mb-2': { protagonist: 'solo', tone: 'balanced', magic: 'heavy', complexity: 'accessible', length: 'short',  pace: 'slow',   completed: 'true' },
  'mb-3': { protagonist: 'solo', tone: 'hopeful',  magic: 'heavy', complexity: 'accessible', length: 'short',  pace: 'fast',   completed: 'true' },

  // ── Malazan ─────────────────────────────────────────────────────────────────
  // Massive ensemble, dark/brutal, magic exists but is not systematised,
  // deeply challenging (no hand-holding), 10-book series, complete
  'mz-1':  { protagonist: 'ensemble', tone: 'dark', magic: 'light', complexity: 'challenging', length: 'long', pace: 'slow',  completed: 'true' },
  'mz-2':  { protagonist: 'ensemble', tone: 'dark', magic: 'light', complexity: 'challenging', length: 'long', pace: 'slow',  completed: 'true' },
  'mz-3':  { protagonist: 'ensemble', tone: 'dark', magic: 'light', complexity: 'challenging', length: 'long', pace: 'slow',  completed: 'true' },
  'mz-4':  { protagonist: 'ensemble', tone: 'dark', magic: 'light', complexity: 'challenging', length: 'long', pace: 'slow',  completed: 'true' },
  'mz-5':  { protagonist: 'ensemble', tone: 'dark', magic: 'light', complexity: 'challenging', length: 'long', pace: 'slow',  completed: 'true' },
  'mz-6':  { protagonist: 'ensemble', tone: 'dark', magic: 'light', complexity: 'challenging', length: 'long', pace: 'fast',  completed: 'true' },
  'mz-7':  { protagonist: 'ensemble', tone: 'dark', magic: 'light', complexity: 'challenging', length: 'long', pace: 'fast',  completed: 'true' },
  'mz-8':  { protagonist: 'ensemble', tone: 'dark', magic: 'light', complexity: 'challenging', length: 'long', pace: 'slow',  completed: 'true' },
  'mz-9':  { protagonist: 'ensemble', tone: 'dark', magic: 'light', complexity: 'challenging', length: 'long', pace: 'slow',  completed: 'true' },
  'mz-10': { protagonist: 'ensemble', tone: 'dark', magic: 'light', complexity: 'challenging', length: 'long', pace: 'fast',  completed: 'true' },
}

// Score all picks against answers, return top 3
export function scoreBooks(answers, picks) {
  return picks
    .map((book) => {
      const tags = BOOK_TAGS[book.id] ?? {}
      const matched = Object.entries(answers).filter(([key, val]) => tags[key] === val).map(([key]) => key)
      return { ...book, score: matched.length, matched }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
}

// Human-readable label for each dimension
export const DIMENSION_LABELS = {
  protagonist: { solo: 'solo protagonist', ensemble: 'ensemble cast' },
  tone:        { dark: 'dark tone', hopeful: 'hopeful tone', balanced: 'balanced tone' },
  magic:       { heavy: 'deep magic', light: 'subtle magic' },
  complexity:  { challenging: 'deep-end entry', accessible: 'guided entry' },
  length:      { short: '3-book series', medium: '5-book series', long: '10-book series' },
  pace:        { fast: 'fast opening', slow: 'slow burn' },
  completed:   { true: 'completed series', false: 'ongoing series' },
}

export function matchSummary(matched) {
  if (!matched?.length) return 'A strong pick for your taste.'
  const labels = matched.map((dim) => {
    const tag = BOOK_TAGS // just need to look up from answers context
    return dim // fallback — caller can use DIMENSION_LABELS
  })
  return `Matched on ${matched.length} of 7 preferences.`
}
