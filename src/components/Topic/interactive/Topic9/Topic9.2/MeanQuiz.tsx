import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface QuizQuestion {
  type: 'Ungrouped' | 'GroupedDirect' | 'GroupedAssumed';
  data: DataPoint[];
  assumedMean?: number;
  correctMean: number;
  steps: string[];
}

interface DataPoint {
  value?: number; // For ungrouped data
  class?: string; // For grouped data
  frequency?: number;
  midpoint?: number;
  deviation?: number;
}

const MeanQuiz: React.FC = () => {
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
        { value: 10 },
        { value: 15 },
        { value: 20 },
        { value: 25 },
        { value: 30 },
      ],
      correctMean: 20,
      steps: [
        '\\text{Sum of values: } 10 + 15 + 20 + 25 + 30 = 100',
        '\\text{Number of values (n): } 5',
        '\\text{Mean} = \\frac{\\sum x}{n} = \\frac{100}{5} = 20',
      ],
    },
    {
      type: 'GroupedDirect',
      data: [
        { class: '0-10', frequency: 5, midpoint: 5 },
        { class: '10-20', frequency: 8, midpoint: 15 },
        { class: '20-30', frequency: 12, midpoint: 25 },
      ],
      correctMean: 17.8,
      steps: [
        '\\text{Calculate } f \\times x \\text{ for each class:}',
        '0-10: 5 \\times 5 = 25',
        '10-20: 8 \\times 15 = 120',
        '20-30: 12 \\times 25 = 300',
        '\\text{Sum of } f \\times x: 25 + 120 + 300 = 445',
        '\\text{Sum of frequencies (}\\sum f\\text{): } 5 + 8 + 12 = 25',
        '\\text{Mean} = \\frac{\\sum (f \\times x)}{\\sum f} = \\frac{445}{25} = 17.8',
      ],
    },
    {
      type: 'GroupedAssumed',
      data: [
        { class: '0-10', frequency: 5, midpoint: 5, deviation: -10 },
        { class: '10-20', frequency: 8, midpoint: 15, deviation: 0 },
        { class: '20-30', frequency: 12, midpoint: 25, deviation: 10 },
      ],
      assumedMean: 15,
      correctMean: 17.8,
      steps: [
        '\\text{Assumed mean (A): } 15',
        '\\text{Calculate } f \\times d \\text{ for each class (} d = \\text{midpoint} - A\\text{):}',
        '0-10: 5 \\times (-10) = -50',
        '10-20: 8 \\times 0 = 0',
        '20-30: 12 \\times 10 = 120',
        '\\text{Sum of } f \\times d: -50 + 0 + 120 = 70',
        '\\text{Sum of frequencies (}\\sum f\\text{): } 5 + 8 + 12 = 25',
        '\\text{Mean} = A + \\frac{\\sum (f \\times d)}{\\sum f} = 15 + \\frac{70}{25} = 15 + 2.8 = 17.8',
      ],
    },
  ];

  const handleAnswer = () => {
    const userMean = parseFloat(userAnswer);
    const correctMean = questions[currentQuestion].correctMean;
    const tolerance = 0.1; // Allow small rounding differences
    const isAnswerCorrect = Math.abs(userMean - correctMean) <= tolerance;
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

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setShowSteps(false);
    setCurrentStep(0);
    setUserAnswer('');
    setIsCorrect(null);
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
              <th className="py-3 px-4">Midpoint</th>
              {questions[currentQuestion].type === 'GroupedAssumed' && (
                <th className="py-3 px-4">Deviation</th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="py-3 px-4">{row.class}</td>
                <td className="py-3 px-4">{row.frequency}</td>
                <td className="py-3 px-4">{row.midpoint}</td>
                {questions[currentQuestion].type === 'GroupedAssumed' && (
                  <td className="py-3 px-4">{row.deviation}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  const renderChart = (data: DataPoint[]) => {
    if (questions[currentQuestion].type === 'Ungrouped') {
      const freqMap: { [key: number]: number } = {};
      data.forEach((row) => {
        if (row.value !== undefined) {
          freqMap[row.value] = (freqMap[row.value] || 0) + 1;
        }
      });
      const chartData = Object.entries(freqMap).map(([value, frequency]) => ({
        value: parseFloat(value),
        frequency,
      }));
      return (
        <BarChart width={360} height={250} data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="value" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="frequency" fill="#8884d8" />
        </BarChart>
      );
    } else {
      return (
        <BarChart width={360} height={250} data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="class" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="frequency" fill="#8884d8" />
        </BarChart>
      );
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 min-h-screen flex flex-col font-sans">
      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Quiz Completed!</h2>
          <p className ="text-lg mb-4">
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
            Calculate the mean for the {questions[currentQuestion].type} data below
            {questions[currentQuestion].type === 'GroupedAssumed' &&
              ` using an assumed mean of ${questions[currentQuestion].assumedMean}`}.
          </p>
          <div className="overflow-x-auto">{renderTable(questions[currentQuestion].data)}</div>
          <div className="flex justify-center mt-4">{renderChart(questions[currentQuestion].data)}</div>
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
              Enter your calculated mean (to 1 decimal place):
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
                {isCorrect ? 'Correct!' : `Incorrect. Correct mean: ${questions[currentQuestion].correctMean.toFixed(1)}`}
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

export default MeanQuiz;