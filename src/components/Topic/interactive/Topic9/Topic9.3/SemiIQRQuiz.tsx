import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, XCircle, Calculator, Eye, RefreshCw, Target } from 'lucide-react';

interface QuizStep {
  id: number;
  title: string;
  concept: string;
  question: string;
  options?: string[];
  correctAnswer: number | string;
  explanation: string;
  formula?: string;
  example?: string;
  interactive?: boolean;
  dataset?: number[];
  context?: string;
}

const SemiIQRQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [userInput, setUserInput] = useState('');
  
  // Different datasets for various contexts
  const datasets = {
    grades: [45, 52, 58, 63, 67, 71, 75, 78, 82, 85, 88, 92],
    income: [25, 32, 38, 45, 52, 58, 65, 72, 85, 95, 110, 135],
    medical: [12, 15, 18, 20, 22, 24, 26, 28, 32, 38]
  };

  const steps: QuizStep[] = [
    {
      id: 0,
      title: "What is Semi-IQR?",
      concept: "Semi-Interquartile Range is half of the IQR, measuring typical spread around the median",
      question: "What does the Semi-IQR represent?",
      options: [
        "Half the distance between Q₃ and Q₁", 
        "The median of the dataset", 
        "The range divided by 4", 
        "The standard deviation halved"
      ],
      correctAnswer: 0,
      explanation: "Semi-IQR = (Q₃ - Q₁)/2. It represents half the interquartile range, showing the typical spread around the median.",
      formula: "Semi-IQR = IQR/2 = (Q₃ - Q₁)/2"
    },
    {
      id: 1,
      title: "Alternative Names",
      concept: "Semi-IQR is also known by other names in statistics",
      question: "Which of these is NOT another name for Semi-IQR?",
      options: ["Quartile Deviation", "Q-deviation", "Half-IQR", "Median Deviation"],
      correctAnswer: 3,
      explanation: "Median deviation is a different measure. Semi-IQR is also called quartile deviation, Q-deviation, or half-IQR.",
      context: "Understanding terminology helps in reading statistical literature and exams."
    },
    {
      id: 2,
      title: "Basic Calculation",
      concept: "Let's calculate Semi-IQR step by step",
      question: "If Q₁ = 20 and Q₃ = 40, what is the Semi-IQR?",
      options: ["10", "15", "20", "30"],
      correctAnswer: 0,
      explanation: "Semi-IQR = (Q₃ - Q₁)/2 = (40 - 20)/2 = 20/2 = 10",
      formula: "Semi-IQR = (40 - 20)/2 = 10",
      example: "IQR = 40 - 20 = 20, so Semi-IQR = 20/2 = 10"
    },
    {
      id: 3,
      title: "Student Grades Analysis",
      concept: "Let's analyze a real dataset: Student exam scores (out of 100)",
      question: "For the grades dataset, first find Q₁ and Q₃. What is Q₁? (n=12)",
      dataset: datasets.grades,
      correctAnswer: "60",
      explanation: "With n=12: Q₁ position = (12+1)/4 = 3.25. Interpolating between 3rd (58) and 4th (63): Q₁ = 58 + 0.25×(63-58) = 58 + 1.25 = 59.25 ≈ 60",
      interactive: true,
      formula: "Q₁ position = (n+1)/4 = 13/4 = 3.25",
      context: "Educational Context: Grade distributions help understand class performance"
    },
    {
      id: 4,
      title: "Finding Q₃",
      concept: "Now let's find the third quartile for the same grades dataset",
      question: "What is Q₃ for the grades dataset?",
      dataset: datasets.grades,
      correctAnswer: "83.5",
      explanation: "Q₃ position = 3(12+1)/4 = 39/4 = 9.75. Interpolating between 9th (82) and 10th (85): Q₃ = 82 + 0.75×(85-82) = 82 + 2.25 = 84.25 ≈ 83.5",
      interactive: true,
      formula: "Q₃ position = 3(n+1)/4 = 39/4 = 9.75"
    },
    {
      id: 5,
      title: "Semi-IQR Calculation",
      concept: "Now calculate the Semi-IQR using our Q₁ and Q₃ values",
      question: "With Q₁ ≈ 60 and Q₃ ≈ 83.5, what is the Semi-IQR for the grades?",
      dataset: datasets.grades,
      correctAnswer: "11.75",
      explanation: "Semi-IQR = (Q₃ - Q₁)/2 = (83.5 - 60)/2 = 23.5/2 = 11.75. This means students typically deviate about 11.75 points from the median grade.",
      interactive: true,
      formula: "Semi-IQR = (83.5 - 60)/2 = 11.75"
    },
    {
      id: 6,
      title: "Interpretation in Context",
      concept: "Understanding what Semi-IQR tells us about the data distribution",
      question: "A Semi-IQR of 11.75 for exam grades suggests:",
      options: [
        "High variability in student performance",
        "Moderate spread around the median grade", 
        "All students scored similarly",
        "The data is normally distributed"
      ],
      correctAnswer: 1,
      explanation: "A Semi-IQR of 11.75 indicates moderate spread. Students typically score within about 12 points above or below the median, showing reasonable consistency.",
      context: "This helps teachers understand if grades are clustered or spread out"
    },
    {
      id: 7,
      title: "Robust Against Outliers",
      concept: "Semi-IQR is resistant to extreme values, unlike range or standard deviation",
      question: "Why is Semi-IQR better than range for skewed data?",
      options: [
        "It's easier to calculate",
        "It ignores extreme outliers", 
        "It's always a whole number",
        "It equals the standard deviation"
      ],
      correctAnswer: 1,
      explanation: "Semi-IQR only uses Q₁ and Q₃, which represent the middle 50% of data. Extreme outliers don't affect these quartiles, making Semi-IQR robust.",
      context: "This is why it's preferred for income data, test scores, and medical measurements"
    },
    {
      id: 8,
      title: "Medical Research Application",
      concept: "Semi-IQR is valuable in medical research for patient response analysis",
      question: "For patient recovery times [12, 15, 18, 20, 22, 24, 26, 28, 32, 38] days, what's the Semi-IQR?",
      dataset: datasets.medical,
      options: ["3.5", "4.0", "4.5", "5.0"],
      correctAnswer: 2,
      explanation: "Q₁ = 18.5, Q₃ = 27.5, so Semi-IQR = (27.5 - 18.5)/2 = 9/2 = 4.5 days. This shows typical deviation from median recovery time.",
      formula: "Semi-IQR = (Q₃ - Q₁)/2 = (27.5 - 18.5)/2 = 4.5",
      context: "Medical Context: Helps understand typical patient response variation"
    },
    {
      id: 9,
      title: "Comparison with Standard Deviation",
      concept: "Semi-IQR vs Standard Deviation for different data types",
      question: "When should you prefer Semi-IQR over standard deviation?",
      options: [
        "For normally distributed data only",
        "For skewed distributions and ordinal data", 
        "When you need exact calculations",
        "For small sample sizes only"
      ],
      correctAnswer: 1,
      explanation: "Semi-IQR is better for skewed distributions and ordinal data because it's not affected by extreme values and doesn't assume normal distribution.",
      context: "Standard deviation assumes normal distribution; Semi-IQR works with any distribution shape"
    },
    {
      id: 10,
      title: "Quality Control Application",
      concept: "Semi-IQR in manufacturing and quality control processes",
      question: "A manufacturing process has Semi-IQR = 0.5mm for part thickness. This indicates:",
      options: [
        "Poor quality control",
        "Good process consistency", 
        "Normal distribution",
        "Need for new equipment"
      ],
      correctAnswer: 1,
      explanation: "A small Semi-IQR (0.5mm) indicates parts cluster tightly around the median thickness, showing good process control and consistency.",
      context: "Quality Control: Small Semi-IQR means consistent, predictable output"
    },
    {
      id: 11,
      title: "ICT Tools & Real-World Application",
      concept: "Using technology to compute and interpret Semi-IQR in various contexts",
      question: "Which statement about Semi-IQR is most accurate for data analysis?",
      options: [
        "Always use it instead of standard deviation",
        "Combine with median for complete dispersion picture", 
        "It's only useful for large datasets",
        "It measures central tendency"
      ],
      correctAnswer: 1,
      explanation: "Semi-IQR measures spread around the median. Using both median and Semi-IQR together gives a complete picture of central tendency and dispersion, especially for non-normal data.",
      context: "Best Practice: Report median ± Semi-IQR for robust data summaries"
    }
  ];

  const handleAnswer = (answer: number | string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    const isCorrect = answer.toString() === steps[currentStep].correctAnswer.toString();
    if (isCorrect && !completedSteps.has(currentStep)) {
      setScore(score + 1);
      setCompletedSteps(new Set([...completedSteps, currentStep]));
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setUserInput('');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setUserInput('');
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setCompletedSteps(new Set());
    setUserInput('');
  };

  const currentStepData = steps[currentStep];
  const isCorrect = selectedAnswer?.toString() === currentStepData.correctAnswer.toString();
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-lg font-bold">Semi-IQR Quiz</h1>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            <span className="text-sm">{score}/{steps.length}</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs mt-1 opacity-90">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Step Title & Concept */}
        <div className="bg-purple-50 rounded-lg p-4">
          <h2 className="font-bold text-gray-800 mb-2">{currentStepData.title}</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{currentStepData.concept}</p>
          
          {/* Context */}
          {currentStepData.context && (
            <div className="mt-2 p-2 bg-blue-50 rounded border-l-3 border-blue-400">
              <p className="text-xs text-blue-700">{currentStepData.context}</p>
            </div>
          )}
          
          {/* Formula Display */}
          {currentStepData.formula && (
            <div className="mt-3 bg-white rounded p-3 border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-1">
                <Calculator className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-medium text-purple-600">FORMULA</span>
              </div>
              <code className="text-sm text-gray-700">{currentStepData.formula}</code>
            </div>
          )}

          {/* Example */}
          {currentStepData.example && (
            <div className="mt-2 text-xs text-gray-500 italic">
              Example: {currentStepData.example}
            </div>
          )}
        </div>

        {/* Dataset Display */}
        {currentStepData.dataset && (
          <div className="bg-green-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                {currentStep === 3 || currentStep === 4 || currentStep === 5 ? 'Student Grades' : 
                 currentStep === 8 ? 'Recovery Times (days)' : 'Dataset'}
              </span>
            </div>
            <div className="text-sm text-gray-700 font-mono">
              [{currentStepData.dataset.join(', ')}]
            </div>
            <div className="text-xs text-gray-500 mt-1">n = {currentStepData.dataset.length}</div>
          </div>
        )}

        {/* Question */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-3">{currentStepData.question}</h3>

          {/* Interactive Input */}
          {currentStepData.interactive ? (
            <div className="space-y-3">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter your answer..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={() => handleAnswer(userInput)}
                disabled={!userInput.trim()}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
              >
                Submit Answer
              </button>
            </div>
          ) : (
            /* Multiple Choice Options */
            <div className="space-y-2">
              {currentStepData.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showFeedback}
                  className={`w-full p-3 text-left rounded-lg border transition-all text-sm leading-relaxed ${
                    showFeedback
                      ? selectedAnswer === index
                        ? isCorrect
                          ? 'bg-green-100 border-green-500 text-green-800'
                          : 'bg-red-100 border-red-500 text-red-800'
                        : index === currentStepData.correctAnswer
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : 'bg-gray-100 border-gray-300'
                      : 'bg-white border-gray-300 hover:border-purple-500 hover:bg-purple-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showFeedback && (
                      <>
                        {selectedAnswer === index && (
                          isCorrect ? <CheckCircle className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-600" />
                        )}
                        {selectedAnswer !== index && index === currentStepData.correctAnswer && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`rounded-lg p-4 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'} border`}>
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              )}
              <div>
                <h4 className={`font-medium ${isCorrect ? 'text-green-800' : 'text-orange-800'} mb-1`}>
                  {isCorrect ? 'Excellent!' : 'Good attempt!'}
                </h4>
                <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-orange-700'} leading-relaxed`}>
                  {currentStepData.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 p-4">
        <div className="flex gap-3">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </button>
          
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {currentStep === steps.length - 1 && (
            <button
              onClick={resetQuiz}
              className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>


    </div>
  );
};

export default SemiIQRQuiz;