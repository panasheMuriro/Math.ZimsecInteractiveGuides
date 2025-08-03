import React, { useState } from 'react';
import { Heart, RefreshCw, Diamond, Clover, Spade } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const TheoreticalProbabilityVisualizer: React.FC = () => {
  const [drawnCard, setDrawnCard] = useState<string | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingCards, setDrawingCards] = useState<string[]>([]);
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

  const drawCard = () => {
    setIsDrawing(true);
    setDrawnCard(null);
    setDrawingCards([]);
    
    // Create animation sequence
    const animationSequence: string[] = [];
    for (let i = 0; i < 15; i++) {
      animationSequence.push(suits[Math.floor(Math.random() * 4)]);
    }
    
    // Show animation
    let index = 0;
    const interval = setInterval(() => {
      if (index < animationSequence.length) {
        setDrawingCards(prev => [...prev.slice(-2), animationSequence[index]]);
        index++;
      } else {
        clearInterval(interval);
        // Final result
        const suitIndex = Math.floor(Math.random() * 4);
        const finalSuit = suits[suitIndex];
        setDrawingCards(prev => [...prev.slice(-2), finalSuit]);
        setTimeout(() => {
          setDrawnCard(finalSuit);
          setIsDrawing(false);
        }, 500);
      }
    }, 100);
  };

  const getSuitIcon = (suit: string) => {
    switch (suit) {
      case 'Hearts': return <Heart className="w-8 h-8 text-[#E63946]" />;
      case 'Diamonds': return <Diamond className="w-8 h-8 text-[#E63946]" />;
      case 'Clubs': return <Clover className="w-8 h-8 text-[#1D3557]" />;
      case 'Spades': return <Spade className="w-8 h-8 text-[#1D3557]" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#E09F3E] border-4 border-[#1D3557] shadow-[8px_8px_0_0_#1D3557] font-sans">
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#1D3557] tracking-wider">DRAW A CARD</h2>
        <p className="text-base mb-4 text-center text-[#1D3557] font-bold">
          Theoretical Probability of Drawing a Heart:
          <BlockMath math="P(\text{heart}) = \frac{13}{52} = \frac{1}{4}" />
        </p>
        <div className="flex justify-center mb-6">
          {isDrawing ? (
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-32">
                {drawingCards.map((card, index) => (
                  <div 
                    key={`${card}-${index}`}
                    className={`absolute w-24 h-32 bg-white border-4 border-[#1D3557] shadow-[4px_4px_0_0_#1D3557] flex flex-col items-center justify-center transition-all duration-200 ${
                      index === drawingCards.length - 1 
                        ? 'opacity-100 scale-100 z-10' 
                        : index === drawingCards.length - 2
                        ? 'opacity-70 scale-90 z-0 -translate-y-2'
                        : 'opacity-0 scale-75 z-0 -translate-y-4'
                    }`}
                  >
                    {getSuitIcon(card)}
                    <span className="mt-2 text-[#1D3557] font-bold text-base">{card}</span>
                  </div>
                ))}
              </div>
              <p className="text-base mt-4 text-center text-[#1D3557] font-bold">DRAWING...</p>
            </div>
          ) : drawnCard ? (
            <div className="flex flex-col items-center">
              <div 
                className="w-24 h-32 bg-white border-4 border-[#1D3557] shadow-[4px_4px_0_0_#1D3557] flex flex-col items-center justify-center animate-in zoom-in-50 duration-300"
              >
                {getSuitIcon(drawnCard)}
                <span className="mt-2 text-[#1D3557] font-bold text-base">{drawnCard}</span>
              </div>
            </div>
          ) : (
            <div className="w-24 h-32 bg-[#F4F1DE] border-4 border-[#1D3557] shadow-[4px_4px_0_0_#1D3557] flex items-center justify-center">
              <Heart className="w-10 h-10 text-[#1D3557]" />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={drawCard}
            disabled={isDrawing}
            className={`flex items-center px-6 py-3 rounded-full font-bold border-4 border-[#1D3557] shadow-[4px_4px_0_0_#1D3557] transition-all duration-200 ${
              isDrawing
                ? 'bg-[#8D99AE] text-white cursor-not-allowed'
                : 'bg-[#F4F1DE] text-[#1D3557] hover:bg-[#EDE5D0] hover:shadow-[6px_6px_0_0_#1D3557] transform hover:-translate-y-1'
            }`}
          >
            <RefreshCw className={`w-5 h-5 mr-2 ${isDrawing ? 'animate-spin' : ''}`} />
            {isDrawing ? 'DRAWING...' : 'DRAW CARD'}
          </button>
        </div>
        {drawnCard && !isDrawing && (
          <p className="text-base mt-4 text-center text-[#1D3557] font-bold bg-white py-3 px-4 rounded-full border-4 border-[#1D3557] shadow-[4px_4px_0_0_#1D3557] animate-in zoom-in-50 duration-300">
            RESULT: <span className="text-[#E63946]">{drawnCard}</span>!
            {drawnCard === 'Hearts' ? ' 🎉' : ''}
          </p>
        )}
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#1D3557] tracking-wider">SAMPLE SPACE</h2>
        <p className="text-base mb-4 text-center text-[#1D3557] font-bold">Standard deck suits:</p>
        <div className="flex flex-wrap justify-center gap-4">
          {suits.map((suit) => (
            <div 
              key={suit} 
              className={`p-4 rounded-full bg-white border-4 border-[#1D3557] shadow-[4px_4px_0_0_#1D3557] flex flex-col items-center ${
                drawnCard === suit ? 'ring-4 ring-[#E63946] -translate-y-1' : ''
              }`}
            >
              <div className="flex flex-col items-center">
                {getSuitIcon(suit)}
                <span className="mt-2 text-[#1D3557] font-bold text-sm">{suit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TheoreticalProbabilityVisualizer;