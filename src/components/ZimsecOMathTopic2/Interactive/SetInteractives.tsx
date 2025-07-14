import { useState } from 'react';

export const SetBasicsInteractive = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = () => {
    const normalized = userAnswer.toLowerCase().replace(/\s/g, '');
    if (normalized === '{1,2,3}' || normalized === '{1,3,2}' || 
        normalized === '{2,1,3}' || normalized === '{2,3,1}' || 
        normalized === '{3,1,2}' || normalized === '{3,2,1}') {
      setFeedback('✅ Correct! The order of elements in a set doesn\'t matter.');
    } else {
      setFeedback('❌ Try again. Remember sets use curly braces and order doesn\'t matter.');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-bold mb-2">Set Basics Practice</h3>
      <p className="mb-4">Write the set containing numbers 1, 2, and 3 in proper set notation:</p>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
          placeholder="Enter your answer"
        />
        <button 
          onClick={checkAnswer}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Check
        </button>
      </div>
      {feedback && <div className="p-2 rounded bg-gray-100">{feedback}</div>}
    </div>
  );
};

export const VennTwoSetsInteractive = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    { id: 'A-only', label: 'A only' },
    { id: 'B-only', label: 'B only' },
    { id: 'A-and-B', label: 'A ∩ B' },
    { id: 'neither', label: 'Neither' }
  ];

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region === selectedRegion ? null : region);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-bold mb-2">Venn Diagram Regions</h3>
      <p className="mb-4">Click on the regions of this Venn diagram to identify them:</p>
      
      <div className="relative w-full max-w-xs mx-auto mb-4">
        {/* Simplified Venn diagram */}
        <div className="relative h-40">
          {/* Circle A */}
          <div className="absolute left-0 top-0 w-32 h-32 rounded-full border-2 border-blue-500 opacity-50 bg-blue-100"></div>
          {/* Circle B */}
          <div className="absolute right-0 top-0 w-32 h-32 rounded-full border-2 border-red-500 opacity-50 bg-red-100"></div>
          
          {/* Region labels */}
          <div 
            className={`absolute left-6 top-6 w-16 text-center cursor-pointer ${selectedRegion === 'A-only' ? 'font-bold underline' : ''}`}
            onClick={() => handleRegionClick('A-only')}
          >
            A only
          </div>
          <div 
            className={`absolute right-6 top-6 w-16 text-center cursor-pointer ${selectedRegion === 'B-only' ? 'font-bold underline' : ''}`}
            onClick={() => handleRegionClick('B-only')}
          >
            B only
          </div>
          <div 
            className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 text-center cursor-pointer ${selectedRegion === 'A-and-B' ? 'font-bold underline' : ''}`}
            onClick={() => handleRegionClick('A-and-B')}
          >
            A ∩ B
          </div>
          <div 
            className={`absolute left-1/2 bottom-2 transform -translate-x-1/2 w-full text-center cursor-pointer ${selectedRegion === 'neither' ? 'font-bold underline' : ''}`}
            onClick={() => handleRegionClick('neither')}
          >
            Neither
          </div>
        </div>
      </div>
      
      {selectedRegion && (
        <div className="p-2 rounded bg-gray-100">
          You selected: <span className="font-semibold">{selectedRegion}</span>
        </div>
      )}
    </div>
  );
};

export const SetBuilderInteractive = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');

  const questions = [
    {
      text: "Which notation represents 'all real numbers greater than 5'?",
      options: [
        "{x | x ∈ ℝ, x > 5}",
        "{x | x > 5}",
        "{x ∈ ℝ | x > 5}",
        "All of the above"
      ],
      correct: 3
    },
    {
      text: "How would you write 'all even integers' in set builder notation?",
      options: [
        "{x | x/2 ∈ ℤ}",
        "{x ∈ ℤ | x mod 2 = 0}",
        "{2x | x ∈ ℤ}",
        "All of the above"
      ],
      correct: 3
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const checkAnswer = () => {
    if (selectedOption === questions[currentQuestion].correct) {
      setFeedback('✅ Correct!');
    } else {
      setFeedback('❌ Incorrect. Try again!');
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setSelectedOption(null);
    setFeedback('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-bold mb-2">Set Builder Notation Quiz</h3>
      <p className="mb-4">{questions[currentQuestion].text}</p>
      
      <div className="space-y-2 mb-4">
        {questions[currentQuestion].options.map((option, index) => (
          <div 
            key={index}
            className={`p-2 border rounded cursor-pointer ${selectedOption === index ? 'bg-blue-100 border-blue-500' : ''}`}
            onClick={() => setSelectedOption(index)}
          >
            {option}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between">
        <button 
          onClick={checkAnswer}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          disabled={selectedOption === null}
        >
          Check Answer
        </button>
        <button 
          onClick={nextQuestion}
          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
        >
          Next Question
        </button>
      </div>
      
      {feedback && <div className="mt-4 p-2 rounded bg-gray-100">{feedback}</div>}
    </div>
  );
};