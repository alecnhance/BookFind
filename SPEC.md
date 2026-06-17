# Audiobook Recommender — Product Spec

## Overview

A dark-themed, cinematic web app for discovering audiobook recommendations, built as a Father's Day gift to accompany Audible credits. Users can find books through four discovery paths: personal curated picks, free-text search, genre browsing, and a mood quiz.

---

## Tech Stack

- **Framework**: React + Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS (dark theme)
- **Book data**: Google Books API (unauthenticated, read-only)
- **Deployment**: Railway (`vite preview` serving the built `dist/`)

---

## Routes

| Path | Page | Description |
|---|---|---|
| `/` | Home | Hero section + nav cards to each discovery mode |
| `/picks` | Personal Picks | Curated static list hand-selected by gift-giver |
| `/search` | Search | Free-text search via Google Books API |
| `/browse` | Browse by Genre | Genre tile grid → filtered book results |
| `/quiz` | Mood Quiz | 4-step questionnaire → book recommendations |
| `/book/:id` | Book Detail | Full info page + "More like this" section |

---

## Data Model

### Book (from Google Books API)

```ts
{
  id: string;                  // Google Books volume ID
  title: string;
  authors: string[];
  description: string;
  categories: string[];
  coverUrl: string | null;     // volumeInfo.imageLinks.thumbnail
  pageCount: number | null;
  averageRating: number | null;
  ratingsCount: number | null;
  publishedDate: string | null;
}
```

### PersonalPick (static)

```ts
{
  id: string;                  // e.g. "pick-1"
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  genre: string;
  audibleUrl?: string;         // direct Audible product link if known
}
```

---

## Google Books API

Base URL: `https://www.googleapis.com/books/v1/volumes`

| Use case | Query |
|---|---|
| Text search | `?q={term}&maxResults=20` |
| By genre/subject | `?q=subject:{genre}&maxResults=20` |
| Book detail | `/volumes/{id}` |
| "More like this" | `?q=subject:{genre}+inauthor:{author}&maxResults=6` |

No API key required for the free unauthenticated quota (~1,000 req/day), sufficient for a personal gift site.

**Audible linking**: Audible has no public API. Every `BookCard` and the `BookDetail` page include a "Find on Audible" link constructed as:
`https://www.audible.com/search?keywords={encodeURIComponent(title + ' ' + author)}`

---

## Pages

### Home (`/`)

- Full-viewport hero with a tagline ("Find your next listen")
- 4 nav cards below the hero, one per discovery mode (Picks, Search, Browse, Quiz)
- Each nav card has an icon, title, and one-line description

### Personal Picks (`/picks`)

- Renders `BookGrid` from the static `personalPicks` array in `src/data/personalPicks.js`
- Section header: "Hand-picked for you" with a short personal note (editable string in the data file)
- Uses the same `BookCard` component as API-driven pages

### Search (`/search`)

- `SearchBar` component with debounced input (300ms delay)
- Calls `googleBooks.search(term)` on debounce trigger
- Shows skeleton `BookCard` placeholders while loading
- Shows empty-state message ("Start typing to find your next audiobook") before first search
- Shows error state if API call fails

### Browse by Genre (`/browse`)

- Grid of `GenreCard` tiles for these genres:
  - Thriller, Biography, History, Science Fiction, Fantasy, Business, Self-Help, Mystery, True Crime, Comedy
- Clicking a genre fetches `subject:{genre}` and displays results in a `BookGrid` below
- Active genre is highlighted; clicking again deselects and clears results

### Mood Quiz (`/quiz`)

4 questions shown one at a time with a progress bar:

| Step | Question | Options |
|---|---|---|
| 1 | What kind of story? | Fiction / Non-Fiction |
| 2 | What's the vibe? | Intense / Relaxing / Funny / Inspiring |
| 3 | How long do you want to listen? | Short (<6h) / Medium (6–12h) / Long (12h+) |
| 4 | Pick a topic | Thriller / History / Comedy / Fantasy / Biography / Business / Science / Mystery |

Answer mapping to Google Books query (step 4 topic takes priority as the subject; step 1 and 2 refine):

| Combination example | Query |
|---|---|
| Non-fiction + Inspiring + Biography | `subject:biography` |
| Fiction + Intense + Thriller | `subject:thriller` |
| Non-fiction + Relaxing + History | `subject:history` |
| Fiction + Funny + Comedy | `subject:humor+fiction` |

After step 4: fetches results and renders `BookGrid` with a "Retake quiz" button.

### Book Detail (`/book/:id`)

- Large cover image (left on desktop, top on mobile)
- Title, author(s), genre/category tags, rating (stars + count), page count, published date
- Full description (collapsed past 4 lines with a "Read more" toggle)
- Prominent amber CTA button: "Find on Audible"
- "More like this" section: 6-card `BookGrid` fetched by same genre + author

---

## Components

### `BookCard`

Props: `{ book: Book | PersonalPick, onClick: () => void }`

- Cover image with `object-cover`; fallback gray placeholder if `coverUrl` is null
- Title (truncated to 2 lines)
- Author
- Star rating (if available)
- "Find on Audible" link icon in the card corner
- Hover: slight scale + border highlight in amber

### `BookGrid`

Props: `{ books: Book[], loading: boolean, emptyMessage?: string }`

- Responsive CSS grid: 2 cols on mobile, 3 on tablet, 4–5 on desktop
- Renders skeleton cards (animated pulse) when `loading` is true
- Renders `emptyMessage` centered if `books` is empty and not loading

### `SearchBar`

Props: `{ onSearch: (term: string) => void, placeholder?: string }`

- Controlled input with debounce hook (300ms)
- Clears on `Escape` key

### `GenreCard`

Props: `{ genre: string, icon: string, active: boolean, onClick: () => void }`

- Displays genre name + emoji/icon
- Active state: amber border + background tint

### `Navbar`

- Fixed top bar with site name/logo (left) and nav links (right): Home, Picks, Search, Browse, Quiz
- Collapses to hamburger menu on mobile

### `MoodQuiz/QuizStep`

Props: `{ question: string, options: string[], onSelect: (choice: string) => void, stepIndex: number, totalSteps: number }`

- Progress bar at top (`stepIndex / totalSteps`)
- Large clickable option cards

### `MoodQuiz/QuizResult`

Props: `{ answers: string[] }`

- Derives API query from answers
- Renders loading state → `BookGrid` on success
- "Retake quiz" button resets quiz state

---

## Data Layer

### `src/services/googleBooks.js`

```js
export const googleBooks = {
  search(term),          // ?q={term}&maxResults=20
  bySubject(genre),      // ?q=subject:{genre}&maxResults=20
  getById(id),           // /volumes/{id}
  moreLikeThis(genre, author),  // ?q=subject:{genre}+inauthor:{author}&maxResults=6
}
```

All methods return a normalized array of `Book` objects (or single `Book` for `getById`). Throws on non-2xx responses.

### `src/hooks/useBooks.js`

```js
const { books, loading, error } = useBooks(fetchFn, deps)
```

Wraps any `googleBooks.*` call. In-memory cache keyed by the query string to avoid redundant fetches within a session.

### `src/data/personalPicks.js`

Static array of `PersonalPick` objects. User provides titles/authors during implementation. Exported as `personalPicks` and `personalPicksNote` (short string shown as a section intro).

---

## Design System

| Token | Value |
|---|---|
| Background | `#111827` (gray-900) |
| Card bg | `#1f2937` (gray-800) |
| Card border | `#374151` (gray-700) |
| Accent | `#f59e0b` (amber-500) |
| Text primary | `#f9fafb` (gray-50) |
| Text secondary | `#9ca3af` (gray-400) |
| Font | Inter (Google Fonts) |

- All interactive elements have `hover:` and `focus-visible:` states
- Cover image aspect ratio: `2:3` (portrait)
- Skeleton cards match `BookCard` dimensions with `animate-pulse` bg

---

## File Structure

```
recommender/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── personalPicks.js
    ├── services/
    │   └── googleBooks.js
    ├── hooks/
    │   └── useBooks.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── BookCard.jsx
    │   ├── BookGrid.jsx
    │   ├── SearchBar.jsx
    │   ├── GenreCard.jsx
    │   └── MoodQuiz/
    │       ├── QuizStep.jsx
    │       └── QuizResult.jsx
    └── pages/
        ├── Home.jsx
        ├── PersonalPicks.jsx
        ├── Search.jsx
        ├── Browse.jsx
        ├── Quiz.jsx
        └── BookDetail.jsx
```

---

## Deployment

```json
// package.json scripts
{
  "dev": "vite",
  "build": "vite build",
  "start": "vite preview --port $PORT --host"
}
```

Railway detects Node, runs `npm run build` on deploy, then `npm start` to serve the built output. No environment variables required for the Google Books API at this usage level.

---

## Verification Checklist

- [ ] `npm run dev` starts without errors
- [ ] Home page renders hero + 4 nav cards
- [ ] Search returns book cards with covers
- [ ] Genre browse filters and displays results
- [ ] Mood quiz completes all 4 steps and shows results
- [ ] Book detail loads at `/book/:id` with full info
- [ ] "More like this" renders on detail page
- [ ] Personal picks section shows static books
- [ ] "Find on Audible" links open the correct Audible search
- [ ] Fallback placeholder shows for books with no cover image
- [ ] Mobile layout is usable (navbar collapses, grid wraps)
- [ ] `npm run build` succeeds cleanly
- [ ] Railway deploy produces a live public URL
