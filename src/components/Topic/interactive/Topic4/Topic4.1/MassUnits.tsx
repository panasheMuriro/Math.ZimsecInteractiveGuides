import React, { useState } from 'react';
import { Scale, ShoppingCart, Truck, Baby, Apple, Wheat } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  question: string;
  calculation: string;
  answer: number;
  unit: string;
  context: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface UserProgress {
  attempted: number;
  correct: number;
  currentStreak: number;
}

const MassUnitsInteractive: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [progress, setProgress] = useState<UserProgress>({
    attempted: 0,
    correct: 0,
    currentStreak: 0
  });
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard' | 'all'>('all');

  const scenarios: Scenario[] = [
    {
      id: 'mealie-meal',
      title: 'Mealie Meal',
      icon: <Wheat className="w-6 h-6" />,
      description: 'A 10kg bag of mealie meal (staple food in Zimbabwe)',
      question: 'How many grams is this bag?',
      calculation: '10 kg × 1000 g/kg = 10,000 g',
      answer: 10000,
      unit: 'grams',
      context: 'Mealie meal is used to make sadza, the staple food',
      difficulty: 'easy'
    },
    {
      id: 'sugar-beans',
      title: 'Sugar Beans',
      icon: <Apple className="w-6 h-6" />,
      description: 'A 2kg packet of sugar beans costs about $3 USD',
      question: 'What is the mass in grams?',
      calculation: '2 kg × 1000 g/kg = 2,000 g',
      answer: 2000,
      unit: 'grams',
      context: 'Sugar beans are a popular protein source',
      difficulty: 'easy'
    },
    {
      id: 'newborn-baby',
      title: 'Newborn Baby',
      icon: <Baby className="w-6 h-6" />,
      description: 'A healthy newborn baby weighs 3.2 kg',
      question: 'What is this weight in grams?',
      calculation: '3.2 kg × 1000 g/kg = 3,200 g',
      answer: 3200,
      unit: 'grams',
      context: 'Normal birth weight ranges from 2.5-4.0 kg',
      difficulty: 'easy'
    },
    {
      id: 'cooking-oil',
      title: 'Cooking Oil',
      icon: <ShoppingCart className="w-6 h-6" />,
      description: 'A 750ml bottle of cooking oil weighs about 0.75 kg',
      question: 'What is this mass in grams?',
      calculation: '0.75 kg × 1000 g/kg = 750 g',
      answer: 750,
      unit: 'grams',
      context: 'Cooking oil is essential for traditional cooking',
      difficulty: 'medium'
    },
    {
      id: 'cement-bag',
      title: 'Cement Bag',
      icon: <Truck className="w-6 h-6" />,
      description: 'A standard cement bag weighs 50,000 grams',
      question: 'What is this mass in kilograms?',
      calculation: '50,000 g ÷ 1000 g/kg = 50 kg',
      answer: 50,
      unit: 'kilograms',
      context: 'Used for construction and building',
      difficulty: 'medium'
    },
    {
      id: 'maize-harvest',
      title: 'Maize Harvest',
      icon: <Wheat className="w-6 h-6" />,
      description: 'A small-scale farmer harvests 2.5 tonnes of maize',
      question: 'What is this mass in kilograms?',
      calculation: '2.5 tonnes × 1000 kg/tonne = 2,500 kg',
      answer: 2500,
      unit: 'kilograms',
      context: 'Maize is Zimbabwe\'s main crop',
      difficulty: 'medium'
    },
    {
      id: 'gold-nugget',
      title: 'Gold Nugget',
      icon: <Scale className="w-6 h-6" />,
      description: 'A gold nugget weighs 15.5 grams',
      question: 'What is this mass in milligrams?',
      calculation: '15.5 g × 1000 mg/g = 15,500 mg',
      answer: 15500,
      unit: 'milligrams',
      context: 'Gold mining is important to Zimbabwe\'s economy',
      difficulty: 'hard'
    },
    {
      id: 'medicine-dose',
      title: 'Medicine Dose',
      icon: <Baby className="w-6 h-6" />,
      description: 'A paracetamol tablet contains 500 milligrams of active ingredient',
      question: 'What is this mass in grams?',
      calculation: '500 mg ÷ 1000 mg/g = 0.5 g',
      answer: 0.5,
      unit: 'grams',
      context: 'Understanding medicine dosages is important for health',
      difficulty: 'hard'
    },
    {
      id: 'truck-load',
      title: 'Truck Load',
      icon: <Truck className="w-6 h-6" />,
      description: 'A delivery truck carries 3.2 tonnes of goods',
      question: 'What is this mass in grams?',
      calculation: '3.2 tonnes × 1000 kg/tonne × 1000 g/kg = 3,200,000 g',
      answer: 3200000,
      unit: 'grams',
      context: 'Heavy goods transport for commerce',
      difficulty: 'hard'
    }
  ];

  const filteredScenarios = selectedDifficulty === 'all' 
    ? scenarios 
    : scenarios.filter(s => s.difficulty === selectedDifficulty);

  const handleScenarioSelect = (scenario: Scenario): void => {
    setSelectedScenario(scenario);
    setUserAnswer('');
    setShowResult(false);
  };

  const handleSubmit = (): void => {
    const attempted = progress.attempted + 1;
    const userNumAnswer = parseFloat(userAnswer);
    const isCorrect = userNumAnswer === selectedScenario?.answer;
    
    setProgress(prev => ({
      attempted,
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      currentStreak: isCorrect ? prev.currentStreak + 1 : 0
    }));
    
    setShowResult(true);
  };

  const handleNext = (): void => {
    const currentIndex = filteredScenarios.findIndex(s => s.id === selectedScenario?.id);
    const nextIndex = currentIndex + 1;
    if (nextIndex < filteredScenarios.length) {
      setSelectedScenario(filteredScenarios[nextIndex]);
      setUserAnswer('');
      setShowResult(false);
    } else {
      setSelectedScenario(null);
    }
  };

  const isCorrect = userAnswer && selectedScenario && parseFloat(userAnswer) === selectedScenario.answer;

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProgressPercentage = (): number => {
    return progress.attempted > 0 ? Math.round((progress.correct / progress.attempted) * 100) : 0;
  };

  return (
    <div className="max-w-md mx-auto bg-[#98A1BC] rounded-lg shadow-lg p-4 space-y-4">
      <div className="text-center">
        <Scale className="w-8 h-8 mx-auto mb-2 text-white" />
        <h2 className="text-xl font-bold text-white">Mass Units Practice</h2>
        <p className="text-sm text-gray-600">Learn with everyday Zimbabwean items</p>
      </div>

      {/* Progress Bar */}
      {progress.attempted > 0 && (
        <div className="bg-gray-100 rounded-lg p-3 text-center">
          <div className="text-sm font-medium text-gray-700 mb-1">
            Progress: {progress.correct}/{progress.attempted} ({getProgressPercentage()}%)
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
          {progress.currentStreak > 0 && (
            <div className="text-xs text-purple-600 mt-1">
              🔥 Streak: {progress.currentStreak}
            </div>
          )}
        </div>
      )}

      {!selectedScenario ? (
        <div className="space-y-4">
          {/* Difficulty Filter */}
          <div className="flex flex-wrap gap-4 justify-center">
            {(['all', 'easy', 'medium', 'hard'] as const).map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-3 py-2 rounded-full text-xs font-medium transition-colors ${
                  selectedDifficulty === difficulty 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </button>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-gray-700">Choose a scenario:</h3>
          <div className="grid grid-cols-1 gap-2">
            {filteredScenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => handleScenarioSelect(scenario)}
                className="bg-white flex items-center p-3 border-2 border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors text-left"
              >
                <div className="text-purple-600 mr-3">
                  {scenario.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-gray-800">{scenario.title}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(scenario.difficulty)}`}>
                      {scenario.difficulty}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">{scenario.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <button
            onClick={() => setSelectedScenario(null)}
            className= "bg-white rounded-full flex items-center text-black hover:text-blue-800 py-1 px-3 text-md font-medium"
            // className="text-white hover:text-purple-800 text-md"
          >
            ← Back to scenarios
          </button>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="text-purple-600 mr-3">
                  {selectedScenario.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{selectedScenario.title}</h3>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(selectedScenario.difficulty)}`}>
                {selectedScenario.difficulty}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{selectedScenario.description}</p>
            <p className="text-sm text-gray-600 italic">{selectedScenario.context}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Question:</h4>
            <p className="text-gray-700 mb-3">{selectedScenario.question}</p>
            
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={userAnswer}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserAnswer(e.target.value)}
                placeholder="Enter your answer"
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="text-gray-600 text-sm">{selectedScenario.unit}</span>
            </div>

            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={!userAnswer}
                className="w-full mt-3 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Check Answer
              </button>
            ) : (
              <div className="mt-3 space-y-3">
                <div className={`p-3 rounded-lg ${isCorrect ? 'bg-green-100 border border-green-400' : 'bg-red-100 border border-red-400'}`}>
                  <div className="flex items-center mb-2">
                    {isCorrect ? (
                      <div className="text-green-600 font-semibold">✓ Correct!</div>
                    ) : (
                      <div className="text-red-600 font-semibold">✗ Incorrect</div>
                    )}
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>Answer:</strong> {selectedScenario.answer} {selectedScenario.unit}
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <h5 className="font-medium text-gray-800 mb-1">Solution:</h5>
                  <p className="text-sm text-gray-700">{selectedScenario.calculation}</p>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setUserAnswer('');
                      setShowResult(false);
                    }}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    {filteredScenarios.findIndex(s => s.id === selectedScenario.id) < filteredScenarios.length - 1 ? 'Next' : 'Finish'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="text-center">
        <div className="text-xs text-white space-y-1">
          <div>Common Mass Conversions:</div>
          <div>1 kg = 1000 g</div>
          <div>1 g = 1000 mg</div>
          <div>1 tonne = 1000 kg</div>
        </div>
      </div>
    </div>
  );
};

export default MassUnitsInteractive;