export default function QuizStep({ question, options, onSelect, stepIndex, totalSteps }) {
  const progress = ((stepIndex) / totalSteps) * 100

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>Step {stepIndex + 1} of {totalSteps}</span>
        </div>
        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">{question}</h2>

      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className="w-full text-left px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 font-medium hover:border-amber-500 hover:text-amber-400 transition-all duration-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
