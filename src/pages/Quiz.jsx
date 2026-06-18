import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QUESTIONS } from '../data/quizData'
import { personalPicks } from '../data/personalPicks'
import { scoreBooks } from '../data/quizData'
import QuizResult from '../components/MoodQuiz/QuizResult'

export default function Quiz() {
  const [answers, setAnswers] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const done = currentIndex >= QUESTIONS.length

  const handleSelect = (value) => {
    const q = QUESTIONS[currentIndex]
    setAnswers((prev) => ({ ...prev, [q.id]: value }))
    setDirection(1)
    setCurrentIndex((i) => i + 1)
  }

  const handleReset = () => {
    setAnswers({})
    setCurrentIndex(0)
  }

  const results = done ? scoreBooks(answers, personalPicks) : []

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {!done && (
        <>
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Question {currentIndex + 1} of {QUESTIONS.length}</span>
              <span>{Math.round((currentIndex / QUESTIONS.length) * 100)}%</span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-amber-500 rounded-full"
                initial={false}
                animate={{ width: `${(currentIndex / QUESTIONS.length) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {QUESTIONS[currentIndex].question}
              </h2>

              <div className="flex flex-col gap-3">
                {QUESTIONS[currentIndex].options.map((opt) => (
                  <motion.button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left px-6 py-5 bg-gray-800 border border-gray-700 rounded-2xl text-gray-200 font-medium hover:border-amber-500 hover:text-amber-400 hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-200"
                  >
                    {opt.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      )}

      {done && <QuizResult results={results} answers={answers} onReset={handleReset} />}
    </div>
  )
}
