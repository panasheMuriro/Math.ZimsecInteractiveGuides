import { useState } from 'react';
// import { MathJax } from 'better-react-mathjax';
import { RefreshCw } from 'lucide-react';

const NaturalNumbers = () => {
//   const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);

  const generateQuestion = () => {
    const scenarios = [
      { text: "Students in a classroom", range: [1, 30] },
      { text: "Pages in a book", range: [50, 500] },
      { text: "Apples in a basket", range: [1, 20] },
      { text: "Cars in a parking lot", range: [0, 100] },
      { text: "Floors below ground", range: [-5, 0] },
      { text: "Temperature in Celsius", range: [-10, 40] }
    ];
    
    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    const number = Math.floor(Math.random() * (scenario.range[1] - scenario.range[0] + 1)) + scenario.range[0];
    
    return {
      scenario: scenario.text,
      number: number,
      isNatural: number > 0 && Number.isInteger(number)
    };
  };

  const [question, setQuestion] = useState(generateQuestion());

  const checkAnswer = () => {
    const correct = (userAnswer.toLowerCase() === 'yes' && question.isNatural) || 
                   (userAnswer.toLowerCase() === 'no' && !question.isNatural);
    
    if (correct) {
      setFeedback('Correct! ✓');
      setScore(score + 1);
    } else {
      setFeedback(`Incorrect. ${question.isNatural ? 'This IS' : 'This is NOT'} a natural number.`);
    }
    
    setAttempts(attempts + 1);
  };

  const nextQuestion = () => {
    setQuestion(generateQuestion());
    setUserAnswer('');
    setFeedback('');
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <span className="mr-2">🔢</span> Natural Numbers Quiz
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <p className="text-lg mb-2">Scenario: {question.scenario}</p>
        <p className="text-2xl font-bold mb-3">Number: {question.number}</p>
        <p className="text-lg">Is this a natural number?</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={() => setUserAnswer('yes')}
          className={`p-3 rounded-lg font-bold transition-all ${
            userAnswer === 'yes' 
              ? 'bg-green-500 text-white' 
              : 'bg-white/20 hover:bg-white/30'
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => setUserAnswer('no')}
          className={`p-3 rounded-lg font-bold transition-all ${
            userAnswer === 'no' 
              ? 'bg-red-500 text-white' 
              : 'bg-white/20 hover:bg-white/30'
          }`}
        >
          No
        </button>
      </div>
      
      {userAnswer && (
        <button
          onClick={checkAnswer}
          className="w-full bg-white/30 hover:bg-white/50 rounded-lg p-3 font-bold mb-4"
        >
          Check Answer
        </button>
      )}
      
      {feedback && (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <p className="font-bold">{feedback}</p>
          <p className="text-sm mt-2">
            Remember: Natural numbers are positive integers (1, 2, 3, ...).
            They don't include 0, negative numbers, or fractions.
          </p>
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div className="text-sm">
          Score: {score}/{attempts}
        </div>
        <button
          onClick={nextQuestion}
          className="bg-white/30 hover:bg-white/50 rounded-lg p-2 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NaturalNumbers;