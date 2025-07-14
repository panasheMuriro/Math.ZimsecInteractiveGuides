import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { Percent } from 'lucide-react';

const ProportionSolver = () => {
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(4);
  const [c, setC] = useState<number>(6);
  const [x, setX] = useState<string>('');
  const [showSolution, setShowSolution] = useState<boolean>(false);

  const correctX = (b * c) / a;

  const solve = () => {
    setShowSolution(true);
  };

  const newProblem = () => {
    setA(Math.floor(Math.random() * 9) + 1);
    setB(Math.floor(Math.random() * 9) + 1);
    setC(Math.floor(Math.random() * 20) + 1);
    setX('');
    setShowSolution(false);
  };

  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Percent className="mr-2" /> Proportion Solver
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <p className="text-center text-lg mb-4">
          <MathJax inline>{`\\(${a} : ${b} = ${c} : x\\)`}</MathJax>
        </p>
        
        <input
          type="number"
          value={x}
          onChange={(e) => setX(e.target.value)}
          placeholder="Find x..."
          className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg text-center"
        />
      </div>
      
      <div className="flex gap-2 mb-4">
        <button
          onClick={solve}
          className="flex-1 bg-white/30 hover:bg-white/50 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105"
        >
          Show Solution
        </button>
        
        <button
          onClick={newProblem}
          className="flex-1 bg-white/20 hover:bg-white/40 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105"
        >
          New Problem
        </button>
      </div>
      
      {showSolution && (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <p className="font-bold mb-2">Solution:</p>
          <p className="mb-2">Cross multiply: <MathJax inline>{`\\(${a} \\times x = ${b} \\times ${c}\\)`}</MathJax></p>
          <p className="mb-2"><MathJax inline>{`\\(${a}x = ${b * c}\\)`}</MathJax></p>
          <p className="text-xl font-bold"><MathJax inline>{`\\(x = ${correctX}\\)`}</MathJax></p>
        </div>
      )}
    </div>
  );
};

export default ProportionSolver;