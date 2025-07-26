import React, { useState } from 'react';
import { Heart, RefreshCw } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const TheoreticalProbabilityVisualizer: React.FC = () => {
  const [drawnCard, setDrawnCard] = useState<string | null>(null);
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

  const drawCard = () => {
    const suitIndex = Math.floor(Math.random() * 4);
    setDrawnCard(suits[suitIndex]);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md text-gray-800 font-sans">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Try It: Draw a Card</h2>
        <p className="text-sm mb-2">
          Theoretical Probability of Drawing a Heart:
          <BlockMath math="P(\text{heart}) = \frac{13}{52} = \frac{1}{4}" />
        </p>
        <div className="flex justify-center mb-4">
          {drawnCard ? (
            <div className="flex items-center">
              <Heart className={`w-12 h-12 ${drawnCard === 'Hearts' ? 'text-red-500' : 'text-gray-800'}`} />
              <span className="ml-2 text-lg font-bold">{drawnCard}</span>
            </div>
          ) : (
            <Heart className="w-12 h-12 text-gray-400" />
          )}
        </div>
        <div className="flex justify-center space-x-2">
          <button
            onClick={drawCard}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Draw Card
          </button>
        </div>
        {drawnCard && (
          <p className="text-sm mt-2 text-center">
            Result: You drew a{' '}
            <span className="font-bold">{drawnCard}</span>!
            {drawnCard === 'Hearts' ? ' 🎉 That’s a Heart!' : ''}
          </p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sample Space</h2>
        <p className="text-sm mb-2">For a standard deck, the suits in the sample space are:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {suits.map((suit) => (
            <div key={suit} className="p-2 text-sm font-medium bg-gray-200 rounded">
              {suit}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TheoreticalProbabilityVisualizer;