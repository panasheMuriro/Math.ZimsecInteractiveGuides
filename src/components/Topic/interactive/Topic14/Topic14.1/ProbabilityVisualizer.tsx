import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const ProbabilityVisualizer: React.FC = () => {
  const [rollResult, setRollResult] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [rollingValue, setRollingValue] = useState<number | null>(null);
  const sampleSpace = [1, 2, 3, 4, 5, 6];

  const rollDie = () => {
    setIsRolling(true);
    setRollResult(null);
    
    // Roll animation
    const rollInterval = setInterval(() => {
      setRollingValue(Math.floor(Math.random() * 6) + 1);
    }, 100);

    // Stop rolling after 2 seconds and reveal result
    setTimeout(() => {
      clearInterval(rollInterval);
      const result = Math.floor(Math.random() * 6) + 1;
      setRollResult(result);
      setIsRolling(false);
      setRollingValue(null);
    }, 2000);
  };

  const DiceIcon = ({ number }: { number: number }) => {
    const renderDots = () => {
      const dots = [];
      for (let i = 0; i < number; i++) {
        dots.push(
          <div 
            key={i} 
            className="w-2 h-2 rounded-full bg-gray-900 absolute"
            style={getDotPosition(number, i)}
          />
        );
      }
      return dots;
    };

    const getDotPosition = (num: number, index: number) => {
      const positions: Record<number, Record<number, React.CSSProperties>> = {
        1: {
          0: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
        },
        2: {
          0: { top: '25%', left: '25%' },
          1: { bottom: '25%', right: '25%' }
        },
        3: {
          0: { top: '25%', left: '25%' },
          1: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
          2: { bottom: '25%', right: '25%' }
        },
        4: {
          0: { top: '20%', left: '20%' },
          1: { top: '20%', right: '20%' },
          2: { bottom: '20%', left: '20%' },
          3: { bottom: '20%', right: '20%' }
        },
        5: {
          0: { top: '20%', left: '20%' },
          1: { top: '20%', right: '20%' },
          2: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
          3: { bottom: '20%', left: '20%' },
          4: { bottom: '20%', right: '20%' }
        },
        6: {
          0: { top: '20%', left: '20%' },
          1: { top: '20%', right: '20%' },
          2: { top: '50%', left: '20%', transform: 'translateY(-50%)' },
          3: { top: '50%', right: '20%', transform: 'translateY(-50%)' },
          4: { bottom: '20%', left: '20%' },
          5: { bottom: '20%', right: '20%' }
        }
      };
      return positions[num][index] || {};
    };

    return (
      <div className="w-14 h-14 bg-white rounded-lg border-2 border-gray-300 shadow-md flex items-center justify-center relative">
        {renderDots()}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#5E503F] rounded-2xl shadow-xl text-gray-100 font-sans border border-[#C6AC8F]">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-[#EAE7DC]">Try It: Roll a Die</h2>
        <p className="text-sm mb-3 text-[#EAE7DC]">
          Example: The probability of rolling a{' '}
          <span className="font-bold text-[#F77F00]">{rollResult || 3}</span> on a fair six-sided die is:
          <BlockMath math={`P(${rollResult || 3}) = \\frac{1}{6}`} />
        </p>
        <div className="flex justify-center mb-5">
          {isRolling ? (
            <div className="flex flex-col items-center">
              <DiceIcon number={rollingValue || 1} />
              <p className="text-sm mt-2 text-[#EAE7DC]">Rolling...</p>
            </div>
          ) : rollResult ? (
            <DiceIcon number={rollResult} />
          ) : (
            <div className="w-14 h-14 bg-white rounded-lg border-2 border-gray-300 shadow-md flex items-center justify-center">
              <span className="text-gray-400 text-lg">?</span>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={rollDie}
            disabled={isRolling}
            className={`flex items-center px-6 py-3 rounded-full transition shadow-lg duration-200 ${
              isRolling
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-[#F77F00] text-white hover:bg-[#F09030] hover:shadow-xl transform hover:-translate-y-0.5'
            }`}
          >
            <RefreshCw className={`w-5 h-5 mr-2 ${isRolling ? 'animate-spin' : ''}`} />
            {isRolling ? 'Rolling...' : 'Roll Die'}
          </button>
        </div>
        {rollResult && !isRolling && (
          <p className="text-sm mt-3 text-center text-[#EAE7DC]">
            Result: You rolled a <span className="font-bold text-[#F77F00]">{rollResult}</span>!
          </p>
        )}
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-3 text-[#EAE7DC]">Sample Space</h2>
        <p className="text-sm mb-3 text-[#EAE7DC]">For a six-sided die, the sample space is:</p>
        <div className="flex flex-wrap justify-center gap-3">
          {sampleSpace.map((num) => (
            <div 
              key={num} 
              className={`p-2 rounded-full bg-[#C6AC8F] shadow-md ${
                rollResult === num 
                  ? 'ring-2 ring-[#F77F00]' 
                  : ''
              }`}
            >
              <DiceIcon number={num} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProbabilityVisualizer;