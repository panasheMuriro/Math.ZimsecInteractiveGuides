import { useState } from 'react';
import { Percent, ArrowUpDown, ArrowLeftRight } from 'lucide-react';

const ProportionSolver = () => {
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(4);
  const [c, setC] = useState<number>(6);
  const [x, setX] = useState<string>('');
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [isDirect, setIsDirect] = useState<boolean>(true);

  const correctX = isDirect ? (b * c) / a : (a * b) / c;

  const solve = () => setShowSolution(true);

  const newProblem = () => {
    setA(Math.floor(Math.random() * 9) + 1);
    setB(Math.floor(Math.random() * 9) + 1);
    setC(Math.floor(Math.random() * 20) + 1);
    setX('');
    setShowSolution(false);
    setIsDirect(Math.random() > 0.5);
  };

  const toggleProportionType = () => {
    setIsDirect(!isDirect);
    setX('');
    setShowSolution(false);
  };

  const formatNumber = (num: number) => {
    return num % 1 === 0 ? num.toString() : num.toFixed(2);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-yellow-50 to-pink-100 shadow-2xl rounded-3xl border-4 border-amber-300 animate-fade-in">
      <h3 className="text-2xl font-extrabold mb-4 text-center flex items-center justify-center text-amber-700 tracking-wide">
        <Percent className="mr-2" /> Let's Solve a Proportion!
      </h3>

      <div className="bg-white rounded-xl p-4 shadow-lg mb-4 border-2 border-amber-200">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-amber-600">Proportion Type:</span>
          <button
            onClick={toggleProportionType}
            className="flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-700 font-bold rounded-lg px-3 py-1 transition-all duration-200 shadow-sm"
          >
            {isDirect ? <ArrowUpDown size={16} /> : <ArrowLeftRight size={16} />}
            <span>{isDirect ? 'Direct' : 'Inverse'}</span>
          </button>
        </div>
        <p className="text-sm text-amber-500">
          {isDirect
            ? 'If A increases, B increases.'
            : 'If A increases, B decreases.'}
        </p>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-lg mb-4 border-2 border-amber-200">
        <p className="text-center text-xl font-bold font-mono text-amber-800 mb-2">
          {isDirect ? `${a} : ${b} = ${c} : x` : `${a} : x = ${b} : ${c}`}
        </p>
        <input
          type="number"
          value={x}
          onChange={(e) => setX(e.target.value)}
          placeholder="Type x here..."
          className="mt-4 w-full bg-yellow-50 border border-amber-300 rounded-lg p-3 text-center text-lg font-bold text-amber-800 focus:outline-none focus:ring-4 focus:ring-pink-200 transition"
        />
      </div>

      <div className="flex gap-3 mb-4">
        <button
          onClick={solve}
          className="flex-1 bg-amber-500 text-white font-bold p-3 rounded-xl hover:bg-amber-600 transition-all shadow-md"
        >
          🎯 Solve
        </button>
        <button
          onClick={newProblem}
          className="flex-1 bg-white border-2 border-amber-300 text-amber-700 font-bold p-3 rounded-xl hover:bg-amber-100 transition-all shadow-sm"
        >
          🔄 New
        </button>
      </div>

      {showSolution && (
        <div className="bg-white rounded-xl p-4 shadow-xl border-2 border-amber-300 animate-fade-in">
          <p className="font-bold mb-3 text-center text-amber-700">✨ Here's the Solution:</p>

          {isDirect ? (
            <div className="space-y-2 text-amber-700">
              <p className="text-sm">Direct: a/b = c/x</p>
              <p className="text-sm">{a} × x = {b} × {c}</p>
              <p className="text-sm">{a}x = {b * c}</p>
              <p className="text-lg font-bold text-center bg-yellow-50 rounded-lg p-2">
                x = {formatNumber(correctX)}
              </p>
            </div>
          ) : (
            <div className="space-y-2 text-amber-700">
              <p className="text-sm">Inverse: a × x = b × c</p>
              <p className="text-sm">{a}x = {b * c}</p>
              <p className="text-lg font-bold text-center bg-yellow-50 rounded-lg p-2">
                x = {formatNumber(correctX)}
              </p>
            </div>
          )}

          {x && (
            <div className="mt-3 text-center font-bold">
              {Math.abs(parseFloat(x) - correctX) < 0.01 ? (
                <p className="text-green-600">🎉 Correct!</p>
              ) : (
                <p className="text-red-500">❌ Try again</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProportionSolver;