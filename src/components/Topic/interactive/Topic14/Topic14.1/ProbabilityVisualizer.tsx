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
            className="w-2 h-2 rounded-full bg-[#264653] absolute"
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
      <div className="w-12 h-12 bg-[#F4A261] border-3 border-black rounded-xl flex items-center justify-center relative">
        {renderDots()}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#E9C46A] border-4 border-black rounded-2xl font-sans">
      <section className="mb-6">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-black underline decoration-2 underline-offset-4">ROLL A DIE</h2>
        <div className="bg-white border-3 border-black rounded-xl p-4 mb-6">
          <p className="text-base mb-3 text-center text-black font-extrabold">
            Probability of rolling a{' '}
            <span className="text-[#264653]">{rollResult || 3}</span>:
            <BlockMath math={`P(${rollResult || 3}) = \\frac{1}{6}`} />
          </p>
        </div>
        <div className="flex justify-center mb-6">
          {isRolling ? (
            <div className="flex flex-col items-center">
              <div className="animate-bounce">
                <DiceIcon number={rollingValue || 1} />
              </div>
              <p className="text-base mt-4 text-white font-extrabold bg-[#2A9D8F] py-2 px-4 rounded-full border-3 border-black">
                ROLLING...
              </p>
            </div>
          ) : rollResult ? (
            <div className="animate-in zoom-in-50 duration-300">
              <DiceIcon number={rollResult} />
            </div>
          ) : (
            <div className="w-12 h-12 bg-[#2A9D8F] border-3 border-black rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">?</span>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={rollDie}
            disabled={isRolling}
            className={`flex items-center px-6 py-3 rounded-full font-extrabold border-3 border-black transition-all duration-200 ${
              isRolling
                ? 'bg-gray-500 text-white cursor-not-allowed'
                : 'bg-[#264653] text-white hover:bg-[#1e3a44] transform hover:scale-105'
            }`}
          >
            <RefreshCw className={`w-5 h-5 mr-2 ${isRolling ? 'animate-spin' : ''}`} />
            {isRolling ? 'ROLLING...' : 'ROLL DIE'}
          </button>
        </div>
        {rollResult && !isRolling && (
          <p className="text-base mt-4 text-center text-black font-extrabold bg-white py-3 px-4 rounded-full border-3 border-black animate-in zoom-in-50 duration-300">
            Result: You rolled a <span className="text-[#E76F51]">{rollResult}</span>!
          </p>
        )}
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-black underline decoration-2 underline-offset-4">SAMPLE SPACE</h2>
        <p className="text-base mb-3 text-center text-black font-extrabold">Six-sided die outcomes:</p>
        <div className="flex flex-wrap justify-center gap-3">
          {sampleSpace.map((num) => (
            <div 
              key={num} 
              className={`p-2 rounded-full bg-white border-3 border-black ${
                rollResult === num 
                  ? 'ring-3 ring-[#E76F51] scale-110' 
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