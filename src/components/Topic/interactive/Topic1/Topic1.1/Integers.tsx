import { useState } from 'react';
import { Thermometer, Building, TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

const Integers = () => {
  const [currentScenario, setCurrentScenario] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);

  const scenarios = [
    {
      type: 'temperature',
      question: 'The temperature was 5°C. It dropped by 8°C. What is the new temperature?',
      answer: -3,
      icon: <Thermometer className="w-5 h-5" />
    },
    {
      type: 'floor',
      question: 'You are on floor 3. You go down 7 floors. Which floor are you on?',
      answer: -4,
      icon: <Building className="w-5 h-5" />
    },
    {
      type: 'money',
      question: 'You have $10. You spend $15. How much money do you have?',
      answer: -5,
      icon: <TrendingDown className="w-5 h-5" />
    },
    {
      type: 'elevation',
      question: 'A submarine is 20m below sea level. It goes up 8m. What is its position?',
      answer: -12,
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      type: 'score',
      question: 'In a game, you had 7 points. You lost 12 points. What is your score?',
      answer: -5,
      icon: <TrendingDown className="w-5 h-5" />
    }
  ];

  const checkAnswer = () => {
    const userAnswer = parseInt(userInput);
    const correctAnswer = scenarios[currentScenario].answer;
    
    if (userAnswer === correctAnswer) {
      setFeedback('Correct! ✓');
      setScore(score + 1);
    } else {
      setFeedback(`Incorrect. The answer is ${correctAnswer}.`);
    }
    setAttempts(attempts + 1);
  };

  const nextQuestion = () => {
    setCurrentScenario((currentScenario + 1) % scenarios.length);
    setUserInput('');
    setFeedback('');
  };

  const reset = () => {
    setCurrentScenario(0);
    setUserInput('');
    setFeedback('');
    setScore(0);
    setAttempts(0);
  };

  return (
    <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <span className="mr-2">🔢</span> Integer Word Problems
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <div className="flex items-center mb-2">
          {scenarios[currentScenario].icon}
          <span className="ml-2 font-bold">Scenario {currentScenario + 1}</span>
        </div>
        <p className="text-lg">{scenarios[currentScenario].question}</p>
      </div>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <input
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your answer..."
          className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg"
        />
      </div>
      
      <div className="flex gap-3 mb-4">
        <button
          onClick={checkAnswer}
          disabled={!userInput}
          className="flex-1 bg-white/30 hover:bg-white/50 disabled:opacity-50 rounded-lg p-3 font-bold"
        >
          Check Answer
        </button>
        <button
          onClick={nextQuestion}
          className="bg-white/30 hover:bg-white/50 rounded-lg p-3"
        >
          Next →
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
            Remember: Integers include positive numbers, negative numbers, and zero.
            They represent real-world situations like temperature, elevation, floors, and money.
          </p>
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div className="text-sm">
          Score: {score}/{attempts}
        </div>
        <div className="text-sm">
          Question {currentScenario + 1} of {scenarios.length}
        </div>
      </div>
    </div>
  );
};

export default Integers;