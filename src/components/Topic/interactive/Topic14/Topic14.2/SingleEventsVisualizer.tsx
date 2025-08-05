import React, { useState } from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, RefreshCw } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const SingleEventsVisualizer: React.FC = () => {
  const [rollResult, setRollResult] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [rollingValue, setRollingValue] = useState<number | null>(null);
  const sampleSpace = [1, 2, 3, 4, 5, 6];
  const evenNumbers = [2, 4, 6];

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

  const getDiceIcon = (number: number) => {
    const colorClass = "text-[#E76F51]";
    switch (number) {
      case 1: return <Dice1 className={`w-12 h-12 ${colorClass}`} />;
      case 2: return <Dice2 className={`w-12 h-12 ${colorClass}`} />;
      case 3: return <Dice3 className={`w-12 h-12 ${colorClass}`} />;
      case 4: return <Dice4 className={`w-12 h-12 ${colorClass}`} />;
      case 5: return <Dice5 className={`w-12 h-12 ${colorClass}`} />;
      case 6: return <Dice6 className={`w-12 h-12 ${colorClass}`} />;
      default: return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#2A9D8F] border-4 border-black shadow-[8px_8px_0_0_#000000] font-sans rounded-2xl">
      <section className="mb-6">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-black underline decoration-2">ROLL FOR EVEN NUMBERS</h2>
        <div className="bg-[#E9C46A] border-4 border-black shadow-[4px_4px_0_0_#000000] p-4 mb-6 rounded-2xl">
          <p className="text-base mb-3 text-center text-black font-extrabold">
            Probability of Rolling an Even Number:
            <BlockMath math="P(\text{even}) = \frac{3}{6} = \frac{1}{2}" />
          </p>
          <p className="text-base text-center text-black font-extrabold">
            Complement Rule (Not Even):
            <BlockMath math="P(\text{not even}) = 1 - \frac{1}{2} = \frac{1}{2}" />
          </p>
        </div>
        <div className="flex justify-center mb-6">
          {isRolling ? (
            <div className="flex flex-col items-center">
              <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000000] p-4 animate-bounce">
                {getDiceIcon(rollingValue || 1)}
              </div>
              <p className="text-base mt-4 text-black font-extrabold bg-[#F4A261] py-2 px-4 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000000]">
                ROLLING...
              </p>
            </div>
          ) : rollResult ? (
            <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000000] p-4 animate-in zoom-in-50 duration-300">
              {getDiceIcon(rollResult)}
            </div>
          ) : (
            <div className="bg-[#F4A261] border-4 border-black shadow-[4px_4px_0_0_#000000] p-4">
              <Dice1 className="w-12 h-12 text-black" />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={rollDie}
            disabled={isRolling}
            className={`flex items-center px-6 py-3 rounded-full font-extrabold border-4 border-black shadow-[4px_4px_0_0_#000000] transition-all duration-200 ${
              isRolling
                ? 'bg-gray-500 text-white cursor-not-allowed'
                : 'bg-[#E76F51] text-white hover:bg-[#F4A261] hover:shadow-[6px_6px_0_0_#000000] transform hover:-translate-y-1'
            }`}
          >
            <RefreshCw className={`w-5 h-5 mr-2 ${isRolling ? 'animate-spin' : ''}`} />
            {isRolling ? 'ROLLING...' : 'ROLL DIE'}
          </button>
        </div>
        {rollResult && !isRolling && (
          <p className="text-base mt-4 text-center text-black font-extrabold bg-white py-3 px-4 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000000] animate-in zoom-in-50 duration-300">
            Result: You rolled a <span className="text-[#264653]">{rollResult}</span>!
            {evenNumbers.includes(rollResult) ? ' 🎉 Even!' : ' Odd.'}
          </p>
        )}
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-black underline decoration-2 underline-offset-4">SAMPLE SPACE</h2>
        <p className="text-base mb-3 text-center text-black font-extrabold">Six-sided die outcomes:</p>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {sampleSpace.map((num) => (
            <div
              key={num}
              className={`w-20 h-20 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000000] flex items-center justify-center ${
                evenNumbers.includes(num) 
                  ? 'bg-[#F4A261] ring-4 ring-[#E76F51]' 
                  : 'bg-white'
              } ${rollResult === num && !isRolling ? 'animate-pulse ring-4 ring-black' : ''}`}
            >
              {getDiceIcon(num)}
            </div>
          ))}
        </div>
        <p className="text-base text-center text-black font-extrabold bg-[#E9C46A] py-3 px-4 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000000]">
          Even numbers highlighted in <span className="text-[#E76F51]">orange</span>
        </p>
      </section>
    </div>
  );
};

export default SingleEventsVisualizer;