import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PersonalPicks from './pages/PersonalPicks'
import Search from './pages/Search'
import Browse from './pages/Browse'
import Quiz from './pages/Quiz'
import BookDetail from './pages/BookDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/picks" element={<PersonalPicks />} />
          <Route path="/search" element={<Search />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
