import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface Term {
  term: string;
  isLike: boolean;
}

const LikeTermsPractice: React.FC = () => {
  const [selectedTerms, setSelectedTerms] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const terms: Term[] = [
    { term: '4x', isLike: true },
    { term: '2y', isLike: false },
    { term: '6x', isLike: true },
    { term: '-3x²', isLike: false },
  ];

  const handleTermClick = (term: string) => {
    if (selectedTerms.includes(term)) {
      setSelectedTerms(selectedTerms.filter((t) => t !== term));
    } else {
      setSelectedTerms([...selectedTerms, term]);
    }
    setShowFeedback(false);
  };

  const handleCheck = () => {
    const correctTerms = terms.filter((t) => t.isLike).map((t) => t.term);
    const isSelectionCorrect =
      selectedTerms.length === correctTerms.length &&
      selectedTerms.every((term) => correctTerms.includes(term));
    setIsCorrect(isSelectionCorrect);
    setShowFeedback(true);
  };

  const handleReset = () => {
    setSelectedTerms([]);
    setShowFeedback(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Identify Like Terms
      </h2>
      <p className="text-gray-600 mb-4 text-sm">
        Select the terms that are like terms with <strong>4x</strong>.
      </p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {terms.map((term) => (
          <button
            key={term.term}
            onClick={() => handleTermClick(term.term)}
            className={`p-3 rounded-lg text-center text-sm font-medium transition-colors ${
              selectedTerms.includes(term.term)
                ? 'bg-blue-500 text-white'
                : 'bg-white border border-gray-300 text-gray-800 hover:bg-blue-100'
            }`}
          >
            {term.term}
          </button>
        ))}
      </div>
      <div className="flex justify-between mb-4">
        <button
          onClick={handleCheck}
          className="flex-1 mr-2 bg-green-500 text-white py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
          disabled={selectedTerms.length === 0}
        >
          Check Answer
        </button>
        <button
          onClick={handleReset}
          className="flex-1 ml-2 bg-gray-300 text-gray-800 py-2 rounded-lg text-sm hover:bg-gray-400 transition-colors"
        >
          Reset
        </button>
      </div>
      {showFeedback && (
        <div
          className={`p-3 rounded-lg flex items-center justify-center text-sm ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {isCorrect ? (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              Correct! 4x and 6x are like terms.
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5 mr-2" />
              Incorrect. Try selecting only terms with x to the power of 1.
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LikeTermsPractice;