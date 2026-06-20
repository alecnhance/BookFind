import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { getQuestions, buildOpenLibraryQuery } from '../data/quizData'
import QuizResult from '../components/MoodQuiz/QuizResult'
import AlecSprite from '../components/AlecSprite'

const quizSparkles = [
  { top: '10%', left: '5%',  delay: 0,   color: '#f59e0b', size: 5 },
  { top: '30%', left: '3%',  delay: 2.0, color: '#a78bfa', size: 4 },
  { top: '65%', left: '7%',  delay: 1.3, color: '#f59e0b', size: 4 },
  { top: '85%', left: '15%', delay: 3.1, color: '#a78bfa', size: 5 },
  { top: '15%', left: '90%', delay: 0.6, color: '#f59e0b', size: 4 },
  { top: '50%', left: '95%', delay: 2.4, color: '#a78bfa', size: 5 },
  { top: '78%', left: '88%', delay: 1.0, color: '#f59e0b', size: 4 },
  { top: '40%', left: '50%', delay: 3.5, color: '#a78bfa', size: 3 },
]

export default function Quiz() {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [flipCount, setFlipCount] = useState(0)
  const selectLock = useRef(false)

  const questions = getQuestions(answers)
  const done = currentIndex >= questions.length

  // Stable total based on known path — avoids "2 of 2, 3 of 3" as questions drip in
  const totalQuestions =
    answers.format === 'nonfiction' ? 10
    : ['fantasy', 'scifi'].includes(answers.genre) ? 15
    : answers.format === 'fiction' ? 14
    : 14

  const handleSelect = (value) => {
    if (selectLock.current) return
    selectLock.current = true
    const q = questions[currentIndex]
    setAnswers((prev) => ({ ...prev, [q.id]: value }))
    setDirection(1)
    setCurrentIndex((i) => i + 1)
    setFlipCount((n) => n + 1)
  }

  const handleBack = () => {
    if (currentIndex === 0) {
      navigate('/start')
      return
    }
    const prevQuestion = questions[currentIndex - 1]
    setAnswers((prev) => {
      const next = { ...prev }
      delete next[prevQuestion.id]
      return next
    })
    setDirection(-1)
    setCurrentIndex((i) => i - 1)
  }

  const handleBackFromResults = () => {
    const lastQuestion = questions[questions.length - 1]
    setAnswers((prev) => {
      const next = { ...prev }
      delete next[lastQuestion.id]
      return next
    })
    setDirection(-1)
    setCurrentIndex(questions.length - 1)
  }

  const handleReset = () => {
    setAnswers({})
    setCurrentIndex(0)
    setDirection(1)
  }

  const query = done ? buildOpenLibraryQuery(answers) : null

  return (
    <div className="relative min-h-screen">

      {/* Fixed background — dot grid + ambient orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Orbs */}
        <motion.div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.13) 0%, transparent 70%)' }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 18, 0], scale: [1, 1.08, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.11) 0%, transparent 70%)' }}
          animate={{ x: [0, -45, 25, 0], y: [0, 40, -20, 0], scale: [1, 0.94, 1.06, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Sparkles */}
        {quizSparkles.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size, background: s.color }}
            animate={{ opacity: [0, 1, 0], scale: [0.4, 2.2, 0.4], y: [0, -18, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          />
        ))}
      </div>

    <AlecSprite flipKey={flipCount} />
    <div className="max-w-2xl mx-auto px-4 py-16">
      {!done && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={handleBack}
              className="text-gray-400 hover:text-white text-sm mb-8 flex items-center gap-1 transition-colors"
            >
              ← {currentIndex === 0 ? 'Back' : 'Previous question'}
            </button>
          </motion.div>

          <div className="mb-10">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Question {currentIndex + 1} of {totalQuestions}</span>
              <span>{Math.round((currentIndex / totalQuestions) * 100)}%</span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-amber-500 rounded-full"
                initial={false}
                animate={{ width: `${(currentIndex / totalQuestions) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait" custom={direction} onExitComplete={() => { selectLock.current = false }}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * -50, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.35, ease: 'easeOut' }}
              >
                {questions[currentIndex].question}
              </motion.h2>

              <motion.div
                className="flex flex-col gap-3"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } } }}
              >
                {questions[currentIndex].options.map((opt) => (
                  <motion.button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 320, damping: 24 } },
                    }}
                    whileHover={{ scale: 1.02, x: 6, boxShadow: '0 0 28px rgba(245,158,11,0.14)' }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full text-left px-6 py-5 bg-gray-800 border border-gray-700 rounded-2xl text-gray-200 font-medium hover:border-amber-500 hover:text-amber-400 hover:shadow-[0_0_24px_rgba(245,158,11,0.12)] transition-all duration-200"
                  >
                    {opt.label}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </>
      )}

      {done && (
        <QuizResult
          query={query}
          onReset={handleReset}
          onBack={handleBackFromResults}
        />
      )}
    </div>
    </div>
  )
}
