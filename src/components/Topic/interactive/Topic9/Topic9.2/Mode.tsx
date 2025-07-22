// export default ModeQuiz;
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface QuizQuestion {
  type: 'Ungrouped' | 'Grouped';
  data: DataPoint[];
  correctMode: number | string | string[]; // Allow single number, single string (for "No mode"), or string array (for multiple modes)
  steps: string[];
}

interface DataPoint {
  value?: number | string; // For ungrouped data (numerical or categorical)
  class?: string; // For grouped data
  frequency?: number;
  lowerBoundary?: number;
  classWidth?: number;
  prevFrequency?: number;
  nextFrequency?: number;
}

const ModeQuiz: React.FC = () => {
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
        { value: 5 },
        { value: 10 },
        { value: 10 },
        { value: 15 },
        { value: 20 },
      ],
      correctMode: 10,
      steps: [
        '\\text{List the values: } 5,\\ 10,\\ 10,\\ 15,\\ 20',
        '\\text{Count frequency of each value: } 5 (1),\\ 10 (2),\\ 15 (1),\\ 20 (1)',
        '\\text{Mode is the value with the highest frequency: } 10 \\text{ (appears 2 times)}',
      ],
    },
    {
      type: 'Ungrouped',
      data: [
        { value: 'Red' },
        { value: 'Blue' },
        { value: 'Red' },
        { value: 'Green' },
        { value: 'Blue' },
      ],
      correctMode: ['Red', 'Blue'],
      steps: [
        '\\text{List the values: } \\text{Red, Blue, Red, Green, Blue}',
        '\\text{Count frequency of each value: } \\text{Red (2), Blue (2), Green (1)}',
        '\\text{Modes are the values with the highest frequency: } \\text{Red and Blue (both appear 2 times)}',
      ],
    },
    {
      type: 'Ungrouped',
      data: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
      ],
      correctMode: 'No mode',
      steps: [
        '\\text{List the values: } 1,\\ 2,\\ 3,\\ 4',
        '\\text{Count frequency of each value: } 1 (1),\\ 2 (1),\\ 3 (1),\\ 4 (1)',
        '\\text{No mode exists since all values appear exactly once}',
      ],
    },
    {
      type: 'Grouped',
      data: [
        { class: '0-10', frequency: 4, lowerBoundary: 0, classWidth: 10, prevFrequency: 0, nextFrequency: 6 },
        { class: '10-20', frequency: 6, lowerBoundary: 10, classWidth: 10, prevFrequency: 4, nextFrequency: 8 },
        { class: '20-30', frequency: 8, lowerBoundary: 20, classWidth: 10, prevFrequency: 6, nextFrequency: 2 },
        { class: '30-40', frequency: 2, lowerBoundary: 30, classWidth: 10, prevFrequency: 8, nextFrequency: 0 },
      ],
      correctMode: 22,
      steps: [
        '\\text{Identify modal class (highest frequency): } 20-30 \\text{ with } f_1 = 8',
        'L = 20 \\text{ (lower boundary of modal class)}',
        'f_1 = 8 \\text{ (frequency of modal class)}',
        'f_0 = 6 \\text{ (frequency of class before modal class)}',
        'f_2 = 2 \\text{ (frequency of class after modal class)}',
        'h = 10 \\text{ (class width)}',
        '\\text{Mode} = L + \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\times h = 20 + \\frac{8 - 6}{2 \\times 8 - 6 - 2} \\times 10 = 20 + \\frac{2}{16 - 6 - 2} \\times 10 = 20 + \\frac{2}{8} \\times 10 = 20 + 2.5 = 22',
      ],
    },
  ];

  const handleAnswer = () => {
    const correctMode = questions[currentQuestion].correctMode;
    let isAnswerCorrect = false;

    if (typeof correctMode === 'number') {
      const userMode = parseFloat(userAnswer);
      const tolerance = 0.1; // Allow small rounding differences for grouped data
      isAnswerCorrect = !isNaN(userMode) && Math.abs(userMode - correctMode) <= tolerance;
    } else if (Array.isArray(correctMode)) {
      const userModes = userAnswer.split(',').map((val) => val.trim());
      isAnswerCorrect =
        userModes.length === correctMode.length &&
        userModes.every((val) => correctMode.includes(val));
    } else {
      isAnswerCorrect = userAnswer.trim().toLowerCase() === 'no mode';
    }

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
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="py-3 px-4">{row.class}</td>
                <td className="py-3 px-4">{row.frequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  const renderChart = (data: DataPoint[]) => {
    if (questions[currentQuestion].type === 'Ungrouped') {
      const freqMap: { [key: string]: number } = {};
      data.forEach((row) => {
        if (row.value !== undefined) {
          const key = typeof row.value === 'number' ? row.value.toString() : row.value;
          freqMap[key] = (freqMap[key] || 0) + 1;
        }
      });
      const chartData = Object.entries(freqMap).map(([value, frequency]) => ({
        value,
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
            Identify the mode for the {questions[currentQuestion].type} data below.
            {questions[currentQuestion].type === 'Ungrouped' &&
              ' For multiple modes, enter values separated by commas (e.g., Red,Blue). For no mode, enter "No mode".'}
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
              <div className="mb-4 max-w-full overflow-scroll">
                <p className="text-sm font-medium text-gray-700">Calculation Steps:</p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {questions[currentQuestion].steps.slice(0, currentStep).map((step, index) => (
                    <li key={index} className="overflow-wrap break-word">
                      <InlineMath math={step} />
                    </li>

    //                   <li key={index} className="overflow-wrap break-words whitespace-normal">
    //     <BlockMath math={step} />
    //   </li>
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
              Enter the mode (to 1 decimal place for grouped data; use commas for multiple modes or "No mode" if none):
            </label>
            <input
              type="text"
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
                {isCorrect
                  ? 'Correct!'
                  : `Incorrect. Correct mode: ${
                      typeof questions[currentQuestion].correctMode === 'number'
                        ? questions[currentQuestion].correctMode.toFixed(1)
                        : Array.isArray(questions[currentQuestion].correctMode)
                        ? questions[currentQuestion].correctMode.join(', ')
                        : questions[currentQuestion].correctMode
                    }`}
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

export default ModeQuiz;