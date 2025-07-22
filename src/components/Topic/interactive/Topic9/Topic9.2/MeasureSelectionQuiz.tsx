import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface QuizQuestion {
  dataType: 'Numerical' | 'Ordinal' | 'Nominal';
  distribution: 'Symmetric' | 'PositivelySkewed' | 'NegativelySkewed';
  hasOutliers: boolean;
  purpose: 'DescriptiveSummary' | 'TypicalValue' | 'MostCommonValue';
  context: string;
  data: DataPoint[];
  correctMeasure: string; // e.g., 'Mean', 'Median', 'Mode', 'Mean,Median'
  steps: string[];
}

interface DataPoint {
  value?: number | string; // For numerical or categorical data
  class?: string; // For grouped data
  frequency?: number;
}

const MeasureSelectionQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedMeasure, setSelectedMeasure] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions: QuizQuestion[] = [
    {
      dataType: 'Numerical',
      distribution: 'Symmetric',
      hasOutliers: false,
      purpose: 'DescriptiveSummary',
      context: 'Test scores of students (normally distributed)',
      data: [
        { class: '60-70', frequency: 5 },
        { class: '70-80', frequency: 10 },
        { class: '80-90', frequency: 15 },
        { class: '90-100', frequency: 10 },
      ],
      correctMeasure: 'Mean',
      steps: [
        '\\text{Data type: Numerical (continuous)}',
        '\\text{Distribution: Symmetric (}\\text{Mean} = \\text{Median} = \\text{Mode}\\text{)}',
        '\\text{No outliers present}',
        '\\text{Purpose: Descriptive summary}',
        '\\text{Mean is preferred for symmetric numerical data without outliers, as it uses all data values for a comprehensive summary}',
      ],
    },
    {
      dataType: 'Numerical',
      distribution: 'PositivelySkewed',
      hasOutliers: true,
      purpose: 'TypicalValue',
      context: 'House prices in a city (skewed by expensive properties)',
      data: [
        { class: '100k-200k', frequency: 20 },
        { class: '200k-300k', frequency: 15 },
        { class: '300k-400k', frequency: 10 },
        { class: '400k-500k', frequency: 3 },
        { class: '500k+', frequency: 2 },
      ],
      correctMeasure: 'Median',
      steps: [
        '\\text{Data type: Numerical (continuous)}',
        '\\text{Distribution: Positively skewed (}\\text{Mean} > \\text{Median} > \\text{Mode}\\text{)}',
        '\\text{Outliers present (expensive properties)}',
        '\\text{Purpose: Typical value}',
        '\\text{Median is robust to outliers and better represents the typical value in positively skewed data}',
      ],
    },
    {
      dataType: 'Nominal',
      distribution: 'Symmetric',
      hasOutliers: false,
      purpose: 'MostCommonValue',
      context: 'Most popular product colors in a store',
      data: [
        { value: 'Red', frequency: 10 },
        { value: 'Blue', frequency: 10 },
        { value: 'Green', frequency: 5 },
      ],
      correctMeasure: 'Mode',
      steps: [
        '\\text{Data type: Nominal}',
        '\\text{Distribution: Not applicable for nominal data}',
        '\\text{No outliers (categorical data)}',
        '\\text{Purpose: Most common value}',
        '\\text{Mode is the only measure applicable for nominal data and identifies the most popular items}',
      ],
    },
    {
      dataType: 'Ordinal',
      distribution: 'NegativelySkewed',
      hasOutliers: true,
      purpose: 'TypicalValue',
      context: 'Customer satisfaction ratings (1-5, skewed toward high ratings)',
      data: [
        { value: '1', frequency: 2 },
        { value: '2', frequency: 3 },
        { value: '3', frequency: 5 },
        { value: '4', frequency: 10 },
        { value: '5', frequency: 20 },
      ],
      correctMeasure: 'Median',
      steps: [
        '\\text{Data type: Ordinal}',
        '\\text{Distribution: Negatively skewed (}\\text{Mode} > \\text{Median} > \\text{Mean}\\text{)}',
        '\\text{Outliers present (low ratings)}',
        '\\text{Purpose: Typical value}',
        '\\text{Median is appropriate for ordinal data and robust to outliers in skewed distributions}',
      ],
    },
  ];

  const handleAnswer = () => {
    const isAnswerCorrect = selectedMeasure === questions[currentQuestion].correctMeasure;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) setScore(score + 1);
  };

  const nextQuestion = () => {
    setShowSteps(false);
    setCurrentStep(0);
    setSelectedMeasure('');
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
    setSelectedMeasure('');
    setIsCorrect(null);
  };

  const renderTable = (data: DataPoint[]) => {
    if (questions[currentQuestion].dataType === 'Nominal' || questions[currentQuestion].dataType === 'Ordinal') {
      return (
        <table className="w-full text-sm text-left text-gray-700 mt-4">
          <thead className="text-xs uppercase bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4">Value</th>
              <th className="py-3 px-4">Frequency</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="py-3 px-4">{row.value}</td>
                <td className="py-3 px-4">{row.frequency}</td>
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
    const chartData = data.map((row) => ({
      name: row.value || row.class,
      frequency: row.frequency,
    }));
    return (
      <BarChart width={360} height={250} data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="frequency" fill="#8884d8" />
      </BarChart>
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
            Select the most appropriate measure(s) of central tendency for the following dataset:
          </p>
          <p className="text-sm mb-4">
            <strong>Context:</strong> {questions[currentQuestion].context}<br />
            <strong>Data Type:</strong> {questions[currentQuestion].dataType}<br />
            <strong>Distribution:</strong> {questions[currentQuestion].distribution}<br />
            <strong>Outliers:</strong> {questions[currentQuestion].hasOutliers ? 'Present' : 'None'}<br />
            <strong>Purpose:</strong> {questions[currentQuestion].purpose.replace(/([A-Z])/g, ' $1').trim()}
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
              <div className="mb-4 max-w-full overflow-hidden">
                <p className="text-sm font-medium text-gray-700">Reasoning Steps:</p>
                <ul className="list-disc list-inside text-sm text-gray-700 break-words">
                  {questions[currentQuestion].steps.slice(0, currentStep).map((step, index) => (
                    <li key={index} className="overflow-wrap break-word">
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
              Select the appropriate measure(s):
            </label>
            <select
              className="w-full p-2 border rounded-lg mb-4"
              value={selectedMeasure}
              onChange={(e) => setSelectedMeasure(e.target.value)}
              disabled={isCorrect !== null}
            >
              <option value="">Select an option</option>
              <option value="Mean">Mean</option>
              <option value="Median">Median</option>
              <option value="Mode">Mode</option>
              <option value="Mean,Median">Mean, Median</option>
            </select>
            {isCorrect === null && (
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                onClick={handleAnswer}
                disabled={!selectedMeasure}
              >
                Submit Answer
              </button>
            )}
          </div>
          {isCorrect !== null && (
            <div className="mt-4">
              <p className={`text-lg font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? 'Correct!' : `Incorrect. Correct measure: ${questions[currentQuestion].correctMeasure}`}
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

export default MeasureSelectionQuiz;