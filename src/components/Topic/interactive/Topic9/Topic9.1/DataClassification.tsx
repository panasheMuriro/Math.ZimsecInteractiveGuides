import React, { useState } from 'react';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

const DataClassificationQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const questions: QuizQuestion[] = [
    {
      question: "Which type of data is best suited for small datasets where exact values are needed?",
      options: ["Grouped Data", "Ungrouped Data", "Discrete Data", "Continuous Data"],
      correctAnswer: "Ungrouped Data",
    },
    {
      question: "What type of data can take any value within a range, such as height or weight?",
      options: ["Discrete Data", "Continuous Data", "Grouped Data", "Ungrouped Data"],
      correctAnswer: "Continuous Data",
    },
    {
      question: "Which class interval type has no upper or lower limit?",
      options: ["Equal width", "Unequal width", "Open-ended", "Class midpoint"],
      correctAnswer: "Open-ended",
    },
    {
      question: "What is a characteristic of grouped data?",
      options: ["Shows exact values", "Suitable for small datasets", "Uses class intervals", "Only countable values"],
      correctAnswer: "Uses class intervals",
    },
  ];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 flex flex-col justify-center font-sans">
      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Quiz Completed!</h2>
          <p className="text-lg mb-4">
            Your Score: {score} out of {questions.length}
          </p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            onClick={resetQuiz}
          >
            Try Again
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="text-lg mb-6">{questions[currentQuestion].question}</p>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`w-full py-3 px-4 rounded-lg text-left transition ${
                  selectedAnswer
                    ? option === questions[currentQuestion].correctAnswer
                      ? 'bg-green-500 text-white'
                      : selectedAnswer === option
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedAnswer}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DataClassificationQuiz;