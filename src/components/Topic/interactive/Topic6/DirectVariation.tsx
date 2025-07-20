import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DirectVariation = () => {
  const [constantK, setConstantK] = useState(2);
  const [xValue, setXValue] = useState(5);
  const [yValue, setYValue] = useState(10);
  const [showCalculation, setShowCalculation] = useState(false);
  const [mode, setMode] = useState('explore'); // 'explore' or 'solve'
  const [problemX, setProblemX] = useState(3);
  const [problemY, setProblemY] = useState(15);
  const [findX, setFindX] = useState(8);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  // Generate data points for the graph
  const generateData = () => {
    const data = [];
    for (let x = 0; x <= 10; x += 0.5) {
      data.push({
        x: x,
        y: constantK * x
      });
    }
    return data;
  };

  const data = generateData();

  // Calculate y value when x changes
  useEffect(() => {
    setYValue(constantK * xValue);
  }, [constantK, xValue]);

  const handleSolveProblem = () => {
    const correctAnswer = (problemY / problemX) * findX;
    setShowAnswer(true);
    return correctAnswer;
  };

  const correctAnswer = (problemY / problemX) * findX;
  const isUserCorrect = Math.abs(parseFloat(userAnswer) - correctAnswer) < 0.01;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Direct Variation Interactive</h2>
        
        {/* Mode Toggle */}
        <div className="flex mb-6">
          <button
            onClick={() => setMode('explore')}
            className={`px-4 py-2 mr-2 rounded ${
              mode === 'explore' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Explore
          </button>
          <button
            onClick={() => setMode('solve')}
            className={`px-4 py-2 rounded ${
              mode === 'solve' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Solve Problems
          </button>
        </div>
      </div>

      {mode === 'explore' ? (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Controls */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Constant of Variation (k)
              </label>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.5"
                value={constantK}
                onChange={(e) => setConstantK(parseFloat(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-600">k = {constantK}</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                x value
              </label>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={xValue}
                onChange={(e) => setXValue(parseFloat(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-600">x = {xValue}</span>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Current Values:</h3>
              <div className="space-y-1 text-sm">
                <p><strong>Equation:</strong> y = {constantK}x</p>
                <p><strong>When x = {xValue}:</strong> y = {constantK} × {xValue} = {yValue}</p>
                <p><strong>Point:</strong> ({xValue}, {yValue})</p>
              </div>
            </div>

            <button
              onClick={() => setShowCalculation(!showCalculation)}
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              {showCalculation ? 'Hide' : 'Show'} Step-by-Step
            </button>

            {showCalculation && (
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Step-by-Step Calculation:</h3>
                <div className="space-y-1 text-sm">
                  <p>1. Direct variation formula: y = kx</p>
                  <p>2. Given: k = {constantK}, x = {xValue}</p>
                  <p>3. Substitute: y = {constantK} × {xValue}</p>
                  <p>4. Calculate: y = {yValue}</p>
                  <p className="font-semibold text-green-700">Result: ({xValue}, {yValue})</p>
                </div>
              </div>
            )}

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Key Properties:</h3>
              <ul className="text-sm space-y-1">
                <li>• Graph passes through origin (0,0)</li>
                <li>• Straight line with slope = k</li>
                <li>• As x increases, y increases proportionally</li>
                <li>• Ratio y/x = k (constant)</li>
              </ul>
            </div>
          </div>

          {/* Graph */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Graph: y = {constantK}x</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="x" 
                    domain={[0, 10]}
                    label={{ value: 'x', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    domain={[0, 50]}
                    label={{ value: 'y', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value) => [Number(value).toFixed(1), 'y']}
                    labelFormatter={(label) => `x: ${label}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="y" 
                    stroke="#2563eb" 
                    strokeWidth={3}
                    dot={false}
                  />
                  {/* Highlight current point */}
                  <Line
                    data={[{x: xValue, y: yValue}]}
                    type="monotone"
                    dataKey="y"
                    stroke="#ef4444"
                    strokeWidth={0}
                    dot={{ fill: '#ef4444', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Red dot shows current point: ({xValue}, {yValue})
            </p>
          </div>
        </div>
      ) : (
        /* Problem Solving Mode */
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Practice Problem</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                If y varies directly with x, and y = {problemY} when x = {problemX}, 
                find y when x = {findX}.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Given: x₁ = {problemX}
                  </label>
                  <input
                    type="number"
                    value={problemX}
                    onChange={(e) => setProblemX(parseInt(e.target.value) || 3)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Given: y₁ = {problemY}
                  </label>
                  <input
                    type="number"
                    value={problemY}
                    onChange={(e) => setProblemY(parseInt(e.target.value) || 15)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Find y when x = {findX}
                  </label>
                  <input
                    type="number"
                    value={findX}
                    onChange={(e) => setFindX(parseInt(e.target.value) || 8)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Answer:
                </label>
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <button
                onClick={handleSolveProblem}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Check Answer & Show Solution
              </button>

              {showAnswer && (
                <div className={`p-4 rounded-lg ${isUserCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                  <h4 className="font-semibold mb-2">
                    {isUserCorrect ? '✅ Correct!' : '❌ Try Again'}
                  </h4>
                  
                  <div className="space-y-2 text-sm">
                    <p><strong>Solution Steps:</strong></p>
                    <p>1. For direct variation: y = kx</p>
                    <p>2. Find k using given values: k = y₁/x₁ = {problemY}/{problemX} = {(problemY/problemX).toFixed(2)}</p>
                    <p>3. Write equation: y = {(problemY/problemX).toFixed(2)}x</p>
                    <p>4. Find y when x = {findX}: y = {(problemY/problemX).toFixed(2)} × {findX} = {correctAnswer.toFixed(2)}</p>
                    <p className="font-semibold text-blue-700">Answer: y = {correctAnswer.toFixed(2)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Examples */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Real-World Example 1</h4>
              <p className="text-sm text-gray-700">
                A car travels at constant speed. Distance varies directly with time.
                If it travels 120 km in 2 hours, how far in 5 hours?
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Solution: d = 60t, so d = 60(5) = 300 km
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Real-World Example 2</h4>
              <p className="text-sm text-gray-700">
                Cost varies directly with quantity. If 3 items cost $15, 
                what do 7 items cost?
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Solution: C = 5q, so C = 5(7) = $35
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectVariation;