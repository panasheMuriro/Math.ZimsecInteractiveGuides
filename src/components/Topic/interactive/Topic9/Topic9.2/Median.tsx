import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface QuizQuestion {
  type: 'Ungrouped' | 'Grouped' | 'Ogive';
  data: DataPoint[];
  correctMedian: number;
  steps: string[];
}

interface DataPoint {
  value?: number; // For ungrouped data
  class?: string; // For grouped data
  frequency?: number;
  cumulativeFrequency?: number;
  lowerBoundary?: number;
  classWidth?: number;
}

const MedianQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions: QuizQuestion[] = [
    {
      type: 'Ungrouped',
      data: [
        { value: 12 },
        { value: 8 },
        { value: 15 },
        { value: 10 },
        { value: 20 },
      ],
      correctMedian: 12,
      steps: [
        '\\text{Arrange in ascending order: } 8,\\ 10,\\ 12,\\ 15,\\ 20',
        '\\text{Number of values (n): } 5 \\text{ (odd)}',
        '\\text{Median position} = \\frac{n + 1}{2} = \\frac{5 + 1}{2} = 3\\text{rd term}',
        '\\text{Median} = 12',
      ],
    },
    {
      type: 'Ungrouped',
      data: [
        { value: 5 },
        { value: 10 },
        { value: 15 },
        { value: 20 },
      ],
      correctMedian: 12.5,
      steps: [
        '\\text{Arrange in ascending order: } 5,\\ 10,\\ 15,\\ 20',
        '\\text{Number of values (n): } 4 \\text{ (even)}',
        '\\text{Median position: average of } \\frac{n}{2} \\text{ and } \\frac{n}{2} + 1 \\text{ terms} = 2\\text{nd and } 3\\text{rd terms}',
        '\\text{Median} = \\frac{10 + 15}{2} = 12.5',
      ],
    },
    {
      type: 'Grouped',
      data: [
        { class: '0-10', frequency: 4, cumulativeFrequency: 4, lowerBoundary: 0, classWidth: 10 },
        { class: '10-20', frequency: 6, cumulativeFrequency: 10, lowerBoundary: 10, classWidth: 10 },
        { class: '20-30', frequency: 8, cumulativeFrequency: 18, lowerBoundary: 20, classWidth: 10 },
        { class: '30-40', frequency: 2, cumulativeFrequency: 20, lowerBoundary: 30, classWidth: 10 },
      ],
      correctMedian: 20,
      steps: [
        '\\text{Total frequency (n): } 4 + 6 + 8 + 2 = 20',
        '\\text{Median position} = \\frac{n}{2} = \\frac{20}{2} = 10',
        '\\text{Median class: } 10-20 \\text{ (cumulative frequency reaches } 10\\text{)}',
        'L = 10 \\text{ (lower boundary)}',
        'CF = 4 \\text{ (cumulative frequency before median class)}',
        'f = 6 \\text{ (frequency of median class)}',
        'h = 10 \\text{ (class width)}',
        '\\text{Median} = L + \\frac{\\frac{n}{2} - CF}{f} \\times h = 10 + \\frac{10 - 4}{6} \\times 10 = 10 + \\frac{6}{6} \\times 10 = 10 + 10 = 20',
      ],
    },
    {
      type: 'Ogive',
      data: [
        { class: '0-10', frequency: 4, cumulativeFrequency: 4, lowerBoundary: 0, classWidth: 10 },
        { class: '10-20', frequency: 6, cumulativeFrequency: 10, lowerBoundary: 10, classWidth: 10 },
        { class: '20-30', frequency: 8, cumulativeFrequency: 18, lowerBoundary: 20, classWidth: 10 },
        { class: '30-40', frequency: 2, cumulativeFrequency: 20, lowerBoundary: 30, classWidth: 10 },
      ],
      correctMedian: 20,
      steps: [
        '\\text{Total frequency (n): } 20',
        '\\text{Median position} = \\frac{n}{2} = \\frac{20}{2} = 10',
        '\\text{Plot cumulative frequency against upper boundaries: } (10, 4),\\ (20, 10),\\ (30, 18),\\ (40, 20)',
        '\\text{Draw horizontal line at cumulative frequency} = 10',
        '\\text{Read x-value where line intersects ogive: approximately } 20',
        '\\text{Median} = 20',
      ],
    },
  ];

  const handleAnswer = () => {
    const userMedian = parseFloat(userAnswer);
    const correctMedian = questions[currentQuestion].correctMedian;
    const tolerance = 0.1; // Allow small rounding differences
    const isAnswerCorrect = Math.abs(userMedian - correctMedian) <= tolerance;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) setScore(score + 1);
  };

  const nextQuestion = () => {
    setShowSteps(false);
    setCurrentStep(0);
    setUserAnswer('');
    setIsCorrect(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleShowSteps = () => {
    setShowSteps(true);
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (currentStep < questions[currentQuestion].steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderTable = (data: DataPoint[]) => {
    if (questions[currentQuestion].type === 'Ungrouped') {
      return (
        <table className="w-full text-sm text-left text-gray-700 mt-4">
          <thead className="text-xs uppercase bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4">Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="py-3 px-4">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return (
        <table className="w-full text-sm text-left text-gray-700 mt-4">
          <thead className="text-xs uppercase bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4">Class</th>
              <th className="py-3 px-4">Frequency</th>
              <th className="py-3 px-4">Cumulative Frequency</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="py-3 px-4">{row.class}</td>
                <td className="py-3 px-4">{row.frequency}</td>
                <td className="py-3 px-4">{row.cumulativeFrequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };


    const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setShowSteps(false);
    setCurrentStep(0);
    setUserAnswer('');
    setIsCorrect(null);
  };

  const renderOgive = (data: DataPoint[]) => {
    if (questions[currentQuestion].type !== 'Ogive') return null;
    const chartData = data.map((row) => ({
      upperBoundary: (row.lowerBoundary || 0) + (row.classWidth || 0),
      cumulativeFrequency: row.cumulativeFrequency,
    }));
    return (
      <AreaChart width={360} height={250} data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="upperBoundary" label={{ value: 'Upper Boundary', position: 'insideBottom', offset: -5 }} />
        <YAxis label={{ value: 'Cumulative Frequency', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="cumulativeFrequency" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
      </AreaChart>
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 min-h-screen flex flex-col font-sans">
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
          <p className="text-lg mb-4">
            Calculate the median for the {questions[currentQuestion].type === 'Ogive' ? 'Grouped' : questions[currentQuestion].type} data below
            {questions[currentQuestion].type === 'Ogive' && ' using the ogive method'}.
          </p>
          <div className="overflow-x-auto">{renderTable(questions[currentQuestion].data)}</div>
          {questions[currentQuestion].type === 'Ogive' && (
            <div className="flex justify-center mt-4">
              {renderOgive(questions[currentQuestion].data)}
            </div>
          )}
          <div className="mt-4">
            {!showSteps && (
              <button
                className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition mb-4"
                onClick={handleShowSteps}
              >
                Show Steps
              </button>
            )}
            {showSteps && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700">Calculation Steps:</p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {questions[currentQuestion].steps.slice(0, currentStep).map((step, index) => (
                    <li key={index}>
                      <InlineMath math={step} />
                    </li>
                  ))}
                </ul>
                {currentStep < questions[currentQuestion].steps.length && (
                  <button
                    className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition mt-2"
                    onClick={handleNextStep}
                  >
                    Next Step
                  </button>
                )}
              </div>
            )}
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your calculated median (to 1 decimal place):
            </label>
            <input
              type="number"
              step="0.1"
              className="w-full p-2 border rounded-lg mb-4"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={isCorrect !== null}
            />
            {isCorrect === null && (
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                onClick={handleAnswer}
                disabled={!userAnswer}
              >
                Submit Answer
              </button>
            )}
          </div>
          {isCorrect !== null && (
            <div className="mt-4">
              <p className={`text-lg font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? 'Correct!' : `Incorrect. Correct median: ${questions[currentQuestion].correctMedian.toFixed(1)}`}
              </p>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition mt-4"
                onClick={nextQuestion}
              >
                {currentQuestion + 1 < questions.length ? 'Next Question' : 'See Results'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MedianQuiz;