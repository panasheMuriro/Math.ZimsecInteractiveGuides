// export default SetBasics;
import { useState, ChangeEvent } from 'react';
import { Check, X, RotateCcw, ArrowRight } from 'lucide-react';

type MembershipExercise = {
  type: 'membership';
  question: string;
  set: string;
  element: string;
  options: string[];
  correct: number;
  explanation: string;
};

type EqualityExercise = {
  type: 'equality';
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

type BuildExercise = {
  type: 'build';
  question: string;
  placeholder: string;
  correct: string;
  explanation: string;
};

type Exercise = MembershipExercise | EqualityExercise | BuildExercise;

const SetBasics = () => {
  const [currentExercise, setCurrentExercise] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [userSet, setUserSet] = useState<string>('');
  const [setDisplay, setSetDisplay] = useState<string>('');

  const exercises: Exercise[] = [
    {
      type: 'membership',
      question: 'Is 5 an element of the set {2, 5, 8, 11}?',
      set: '{2, 5, 8, 11}',
      element: '5',
      options: ['5 ∈ {2, 5, 8, 11}', '5 ∉ {2, 5, 8, 11}'],
      correct: 0,
      explanation: 'Since 5 appears in the set {2, 5, 8, 11}, we write 5 ∈ {2, 5, 8, 11}'
    },
    {
      type: 'membership',
      question: 'Is 7 an element of the set {1, 3, 5, 9}?',
      set: '{1, 3, 5, 9}',
      element: '7',
      options: ['7 ∈ {1, 3, 5, 9}', '7 ∉ {1, 3, 5, 9}'],
      correct: 1,
      explanation: 'Since 7 does not appear in the set {1, 3, 5, 9}, we write 7 ∉ {1, 3, 5, 9}'
    },
    {
      type: 'equality',
      question: 'Are these sets equal: {a, b, c} and {c, a, b}?',
      options: ['Yes, they are equal', 'No, they are different'],
      correct: 0,
      explanation: 'Sets are equal if they contain the same elements, regardless of order. Both sets contain a, b, and c.'
    },
    {
      type: 'equality',
      question: 'Are these sets equal: {1, 2, 2, 3} and {1, 2, 3}?',
      options: ['Yes, they are equal', 'No, they are different'],
      correct: 0,
      explanation: 'Sets cannot contain duplicate elements. {1, 2, 2, 3} simplifies to {1, 2, 3}, so they are equal.'
    },
    {
      type: 'build',
      question: 'Create a set containing the first 4 positive even numbers:',
      placeholder: 'Enter your set using curly braces...',
      correct: '{2, 4, 6, 8}',
      explanation: 'The first 4 positive even numbers are 2, 4, 6, and 8.'
    }
  ];

  const currentEx = exercises[currentExercise];

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    if (index === (currentEx as MembershipExercise | EqualityExercise).correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleSetInput = (value: string) => {
    setUserSet(value);
    const cleaned = value.replace(/\s+/g, '');
    setSetDisplay(cleaned);
  };

  const checkSetAnswer = () => {
    setShowFeedback(true);
    const userCleaned = userSet.replace(/\s+/g, '').toLowerCase();
    const correctCleaned = (currentEx as BuildExercise).correct.replace(/\s+/g, '').toLowerCase();

    if (userCleaned === correctCleaned) {
      setScore((prev) => prev + 1);
    }
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      setCurrentExercise(0);
      setScore(0);
    }
    setSelectedAnswer(null);
    setShowFeedback(false);
    setUserSet('');
    setSetDisplay('');
  };

  const resetExercise = () => {
    setCurrentExercise(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setUserSet('');
    setSetDisplay('');
  };

  const renderMembershipVisual = () => {
    if (currentEx.type !== 'membership') return null;

    const elements = currentEx.set.slice(1, -1).split(', ');
    const targetElement = currentEx.element;

    return (
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <div className="text-center mb-4">
          <div className="text-lg font-mono text-blue-800">Set: {currentEx.set}</div>
          <div className="text-lg font-mono text-purple-800 mt-2">Element: {targetElement}</div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {elements.map((element, idx) => (
            <div
              key={idx}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-sm ${
                element === targetElement
                  ? 'bg-green-100 border-green-500 text-green-800'
                  : 'bg-gray-100 border-gray-300 text-gray-700'
              }`}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-[#FF9B45] rounded-lg shadow-lg">
      {/* Header */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-gray-800">Set Basics Practice</h3>
          <div className="text-sm text-gray-600">Score: {score}/{exercises.length}</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentExercise + 1) / exercises.length) * 100}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-1">Exercise {currentExercise + 1} of {exercises.length}</div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <div className="text-base font-medium text-gray-800 mb-4">{currentEx.question}</div>

        {renderMembershipVisual()}

        {/* Build Type */}
        {currentEx.type === 'build' ? (
          <div className="space-y-4">
            <input
              type="text"
              value={userSet}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetInput(e.target.value)}
              placeholder={currentEx.placeholder}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {setDisplay && (
              <div className="text-center">
                <div className="text-sm text-gray-600">Your set:</div>
                <div className="text-lg font-mono text-blue-800">{setDisplay}</div>
              </div>
            )}
            {!showFeedback && (
              <button
                onClick={checkSetAnswer}
                disabled={!userSet.trim()}
                className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Check Answer
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {(currentEx as MembershipExercise | EqualityExercise).options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showFeedback}
                className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? showFeedback
                      ? index === currentEx.correct
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : 'bg-red-100 border-red-500 text-red-800'
                      : 'bg-blue-100 border-blue-500 text-blue-800'
                    : showFeedback && index === currentEx.correct
                    ? 'bg-green-100 border-green-500 text-green-800'
                    : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">{option}</span>
                  {showFeedback && selectedAnswer === index && (
                    index === currentEx.correct ? 
                      <Check className="w-5 h-5 text-green-600" /> : 
                      <X className="w-5 h-5 text-red-600" />
                  )}
                  {showFeedback && selectedAnswer !== index && index === currentEx.correct && (
                    <Check className="w-5 h-5 text-green-600" />
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Explanation and Controls */}
        {showFeedback && (
          <>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="text-sm font-medium text-blue-800 mb-2">Explanation:</div>
              <div className="text-sm text-blue-700">{currentEx.explanation}</div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={nextExercise}
                className="flex-1 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                {currentExercise === exercises.length - 1 ? 'Restart' : 'Next'}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={resetExercise}
                className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>

      <div className="text-xs text-gray-500 text-center">
        Practice set notation, membership, and equality concepts
      </div>
    </div>
  );
};

export default SetBasics;
