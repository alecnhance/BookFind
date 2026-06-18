import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Start from './pages/Start'
import SeriesPicker from './pages/SeriesPicker'
import SeriesDetail from './pages/SeriesDetail'
import PersonalPicks from './pages/PersonalPicks'
import Quiz from './pages/Quiz'
import BookDetail from './pages/BookDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16">
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
