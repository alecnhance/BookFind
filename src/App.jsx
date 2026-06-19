import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Start from './pages/Start'
import SeriesPicker from './pages/SeriesPicker'
import SeriesDetail from './pages/SeriesDetail'
import PersonalPicks from './pages/PersonalPicks'
import Quiz from './pages/Quiz'
import BookDetail from './pages/BookDetail'

function HomeLink() {
  const { pathname } = useLocation()
  if (pathname === '/') return null
  return (
    <Link
      to="/"
      className="fixed top-3 left-3 z-50 text-amber-500/40 hover:text-amber-400 text-sm font-semibold tracking-tight transition-colors duration-300"
    >
      ✦ BookFind
    </Link>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <HomeLink />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/series" element={<SeriesPicker />} />
          <Route path="/series/:slug" element={<SeriesDetail />} />
          <Route path="/picks" element={<PersonalPicks />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
