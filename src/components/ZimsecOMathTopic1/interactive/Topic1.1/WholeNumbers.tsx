import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

const WholeNumbers = () => {
  const [draggedNumbers, setDraggedNumbers] = useState<number[]>([]);
  const [availableNumbers, setAvailableNumbers] = useState<number[]>([
    -3, -1, 0, 1, 2, 5, 8, 10, 15, -5, 0.5, -2.5
  ]);
  const [feedback, setFeedback] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const isWholeNumber = (num: number): boolean => {
    return num >= 0 && Number.isInteger(num);
  };

  const handleDrop = (number: number) => {
    if (!draggedNumbers.includes(number)) {
      setDraggedNumbers([...draggedNumbers, number]);
    }
  };

  const removeNumber = (number: number) => {
    setDraggedNumbers(draggedNumbers.filter(n => n !== number));
  };

  const checkAnswer = () => {
    const correctNumbers = availableNumbers.filter(isWholeNumber);
    const userCorrect = draggedNumbers.filter(isWholeNumber);
    const userIncorrect = draggedNumbers.filter(n => !isWholeNumber(n));
    
    if (userIncorrect.length === 0 && userCorrect.length === correctNumbers.length) {
      setFeedback('Perfect! You identified all whole numbers correctly! 🎉');
    } else {
      setFeedback(`Not quite right. You got ${userCorrect.length}/${correctNumbers.length} correct.`);
    }
    setShowAnswer(true);
  };

  const reset = () => {
    setDraggedNumbers([]);
    setFeedback('');
    setShowAnswer(false);
    setAvailableNumbers([
      -3, -1, 0, 1, 2, 5, 8, 10, 15, -5, 0.5, -2.5
    ].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="bg-gradient-to-br from-green-500 to-teal-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <span className="mr-2">🔢</span> Whole Numbers Sorter
      </h3>
      
      <p className="mb-4">Drag the whole numbers into the box below:</p>
      
      <div className="grid grid-cols-4 gap-2 mb-4">
        {availableNumbers.map((num, index) => (
          <button
            key={index}
            onClick={() => handleDrop(num)}
            className={`p-3 rounded-lg font-bold text-lg transition-all ${
              draggedNumbers.includes(num)
                ? 'bg-gray-500 opacity-50 cursor-not-allowed'
                : 'bg-white/20 hover:bg-white/30 cursor-pointer'
            }`}
            disabled={draggedNumbers.includes(num)}
          >
            {num}
          </button>
        ))}
      </div>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4 min-h-[100px]">
        <p className="font-bold mb-2">Whole Numbers:</p>
        <div className="flex flex-wrap gap-2">
          {draggedNumbers.map((num, index) => (
            <span
              key={index}
              onClick={() => removeNumber(num)}
              className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-all ${
                showAnswer
                  ? isWholeNumber(num)
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {num}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3 mb-4">
        <button
          onClick={checkAnswer}
          className="flex-1 bg-white/30 hover:bg-white/50 rounded-lg p-3 font-bold"
        >
          Check Answer
        </button>
        <button
          onClick={reset}
          className="bg-white/30 hover:bg-white/50 rounded-lg p-3"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
      
      {feedback && (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <p className="font-bold">{feedback}</p>
          <p className="text-sm mt-2">
            Remember: Whole numbers are non-negative integers (0, 1, 2, 3, ...).
            They include zero but not negative numbers or fractions.
          </p>
        </div>
      )}
      
      {showAnswer && (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <p className="font-bold mb-2">Correct Answer:</p>
          <div className="flex flex-wrap gap-2">
            {availableNumbers.filter(isWholeNumber).map((num, index) => (
              <span key={index} className="px-3 py-1 bg-green-500 text-white rounded-lg font-bold">
                {num}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WholeNumbers;