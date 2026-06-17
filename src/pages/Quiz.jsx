import { useState } from 'react'
import QuizStep from '../components/MoodQuiz/QuizStep'
import QuizResult from '../components/MoodQuiz/QuizResult'

const STEPS = [
  {
    question: 'What kind of story are you in the mood for?',
    options: ['Fiction', 'Non-Fiction'],
  },
  {
    question: "What's the vibe?",
    options: ['Intense', 'Relaxing', 'Funny', 'Inspiring'],
  },
  {
    question: 'How long do you want to listen?',
    options: ['Short (under 6 hours)', 'Medium (6–12 hours)', 'Long (12+ hours)'],
  },
  {
    question: 'Pick a topic',
    options: ['Thriller', 'History', 'Comedy', 'Fantasy', 'Biography', 'Business', 'Science', 'Mystery'],
  },
]

export default function Quiz() {
  const [answers, setAnswers] = useState([])

  const handleSelect = (choice) => {
    const next = [...answers, choice]
    setAnswers(next)
  }

  const handleReset = () => setAnswers([])

  const currentStep = answers.length

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-12">Mood Quiz</h1>

      {currentStep < STEPS.length ? (
        <QuizStep
          question={STEPS[currentStep].question}
          options={STEPS[currentStep].options}
          onSelect={handleSelect}
          stepIndex={currentStep}
          totalSteps={STEPS.length}
        />
      ) : (
        <QuizResult answers={answers} onReset={handleReset} />
      )}
    </div>
  )
}
