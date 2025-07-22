import React, { useState } from 'react';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

const DataCollectionQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const questions: QuizQuestion[] = [
    {
      question: "Which method involves questioning a representative subset of the population?",
      options: ["Census", "Sampling", "Surveys", "Experiments"],
      correctAnswer: "Sampling",
    },
    {
      question: "What ensures every member of the population has an equal chance of being selected?",
      options: ["Stratified sampling", "Random sampling", "Systematic sampling", "Cluster sampling"],
      correctAnswer: "Random sampling",
    },
    {
      question: "Which data collection method uses published reports or government statistics?",
      options: ["Primary Data", "Secondary Data", "Observations", "Census"],
      correctAnswer: "Secondary Data",
    },
    {
      question: "What is a key consideration to minimize measurement errors in data collection?",
      options: ["Bias", "Reliability", "Accuracy", "Sample size"],
      correctAnswer: "Accuracy",
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
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg flex flex-col justify-center font-sans">
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

export default DataCollectionQuiz;