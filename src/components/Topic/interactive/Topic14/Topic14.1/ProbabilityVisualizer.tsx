import React, { useState } from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, RefreshCw } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const ProbabilityVisualizer: React.FC = () => {
  const [rollResult, setRollResult] = useState<number | null>(null);
  const sampleSpace = [1, 2, 3, 4, 5, 6];

  const rollDie = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setRollResult(result);
  };

  const getDiceIcon = (number: number) => {
    switch (number) {
      case 1: return <Dice1 className="w-12 h-12 text-blue-500" />;
      case 2: return <Dice2 className="w-12 h-12 text-blue-500" />;
      case 3: return <Dice3 className="w-12 h-12 text-blue-500" />;
      case 4: return <Dice4 className="w-12 h-12 text-blue-500" />;
      case 5: return <Dice5 className="w-12 h-12 text-blue-500" />;
      case 6: return <Dice6 className="w-12 h-12 text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md text-gray-800 font-sans">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Try It: Roll a Die</h2>
        <p className="text-sm mb-2">
          Example: The probability of rolling a{' '}
          <span className="font-bold">{rollResult || 3}</span> on a fair six-sided die is:
          <BlockMath math={`P(${rollResult || 3}) = \\frac{1}{6}`} />
        </p>
        <div className="flex justify-center mb-4">
          {rollResult ? getDiceIcon(rollResult) : <Dice1 className="w-12 h-12 text-gray-400" />}
        </div>
        <div className="flex justify-center space-x-2">
          <button
            onClick={rollDie}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Roll Die
          </button>
        </div>
        {rollResult && (
          <p className="text-sm mt-2 text-center">
            Result: You rolled a <span className="font-bold">{rollResult}</span>!
          </p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sample Space</h2>
        <p className="text-sm mb-2">For a six-sided die, the sample space is:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {sampleSpace.map((num) => (
            <div key={num} className="p-2">
              {getDiceIcon(num)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProbabilityVisualizer;