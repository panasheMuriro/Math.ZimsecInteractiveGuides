import React, { useState } from 'react';
import { Thermometer, Calculator, Sun, Snowflake, Flame, Cloud, Droplets, Stethoscope } from 'lucide-react';

// Define types
type Scenario = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  question: string;
  calculation: string;
  answer: number;
  unit: string;
  context: string;
};

type TemperatureScale = 'celsius' | 'fahrenheit' | 'kelvin';

const TemperatureUnits = () => {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'converter' | 'reference'>('scenarios');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('25');
  const [fromScale, setFromScale] = useState<TemperatureScale>('celsius');
  const [toScale, setToScale] = useState<TemperatureScale>('fahrenheit');

  const scenarios: Scenario[] = [
    {
      id: 'harare-summer',
      title: 'Harare Summer',
      icon: <Sun className="w-6 h-6 text-orange-500" />,
      description: 'Peak summer temperature in Harare reaches 28°C in December',
      question: 'What is this temperature in Fahrenheit?',
      calculation: '°F = (28 × 9/5) + 32 = 50.4 + 32 = 82.4°F',
      answer: 82.4,
      unit: '°F',
      context: 'Harare has a subtropical highland climate with warm summers'
    },
    {
      id: 'winter-morning',
      title: 'Winter Morning',
      icon: <Snowflake className="w-6 h-6 text-blue-400" />,
      description: 'Early morning temperature in Bulawayo in July is 5°C',
      question: 'Convert this to Kelvin scale',
      calculation: 'K = °C + 273.15 = 5 + 273.15 = 278.15 K',
      answer: 278.15,
      unit: 'K',
      context: 'Zimbabwe winters are dry with cool mornings and warm afternoons'
    },
    {
      id: 'cooking-sadza',
      title: 'Cooking Sadza',
      icon: <Flame className="w-6 h-6 text-red-500" />,
      description: 'Water for cooking sadza boils at 100°C in Harare',
      question: 'What is the boiling point in Fahrenheit?',
      calculation: '°F = (100 × 9/5) + 32 = 180 + 32 = 212°F',
      answer: 212,
      unit: '°F',
      context: 'Harare\'s altitude (1,483m) slightly affects boiling point'
    },
    {
      id: 'fever-check',
      title: 'Fever Check',
      icon: <Stethoscope className="w-6 h-6 text-purple-600" />,
      description: 'A patient at Parirenyatwa Hospital has a temperature of 102°F',
      question: 'Convert this fever temperature to Celsius',
      calculation: '°C = (102 - 32) × 5/9 = 70 × 5/9 = 38.9°C',
      answer: 38.9,
      unit: '°C',
      context: 'Normal body temperature is 37°C, so this indicates fever'
    },
    {
      id: 'hwange-heat',
      title: 'Hwange Heat',
      icon: <Cloud className="w-6 h-6 text-amber-600" />,
      description: 'Hwange National Park reaches 35°C during hot season',
      question: 'What is this temperature in Fahrenheit?',
      calculation: '°F = (35 × 9/5) + 32 = 63 + 32 = 95°F',
      answer: 95,
      unit: '°F',
      context: 'Hwange experiences extreme heat during the dry season'
    },
    {
      id: 'vumba-cool',
      title: 'Vumba Mountains',
      icon: <Droplets className="w-6 h-6 text-green-500" />,
      description: 'The cool Vumba Mountains average 15°C in winter',
      question: 'Convert this to Kelvin',
      calculation: 'K = °C + 273.15 = 15 + 273.15 = 288.15 K',
      answer: 288.15,
      unit: 'K',
      context: 'The Vumba Mountains are known for their cool, misty climate'
    }
  ];

  const convertTemperature = (value: number, from: TemperatureScale, to: TemperatureScale): number => {
    let celsius: number;
    
    // Convert to Celsius first
    switch (from) {
      case 'celsius':
        celsius = value;
        break;
      case 'fahrenheit':
        celsius = (value - 32) * 5/9;
        break;
      case 'kelvin':
        celsius = value - 273.15;
        break;
    }
    
    // Convert from Celsius to target scale
    switch (to) {
      case 'celsius':
        return celsius;
      case 'fahrenheit':
        return (celsius * 9/5) + 32;
      case 'kelvin':
        return celsius + 273.15;
    }
  };

  const handleScenarioSelect = (scenario: Scenario) => {
    setSelectedScenario(scenario);
    setUserAnswer('');
    setShowResult(false);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleNext = () => {
    if (!selectedScenario) return;
    
    const nextIndex = scenarios.findIndex(s => s.id === selectedScenario.id) + 1;
    if (nextIndex < scenarios.length) {
      setSelectedScenario(scenarios[nextIndex]);
      setUserAnswer('');
      setShowResult(false);
    }
  };

  const getConvertedValue = (): string => {
    const input = parseFloat(inputValue);
    if (isNaN(input)) return '0';
    
    const result = convertTemperature(input, fromScale, toScale);
    return result.toFixed(2);
  };

  const swapScales = () => {
    setFromScale(toScale);
    setToScale(fromScale);
  };

  const isCorrect = userAnswer && Math.abs(parseFloat(userAnswer) - (selectedScenario?.answer || 0)) < 0.2;

  const getScaleSymbol = (scale: TemperatureScale): string => {
    switch (scale) {
      case 'celsius': return '°C';
      case 'fahrenheit': return '°F';
      case 'kelvin': return 'K';
    }
  };

  return (
    <div className="max-w-md mx-auto rounded-xl shadow-lg p-6 space-y-6 bg-[#C41E3A]">
      <div className="text-center">
        <Thermometer className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
        <h2 className="text-2xl font-bold text-white">
          Temperature Units Practice
        </h2>
        <p className="text-sm text-gray-200 mt-1">Learn with Zimbabwean climate scenarios</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-red-800 rounded-lg p-1 mb-6">
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'scenarios'
              ? 'bg-yellow-400 text-black'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Scenarios
        </button>
        <button
          onClick={() => setActiveTab('converter')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'converter'
              ? 'bg-yellow-400 text-black'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Converter
        </button>
    
      </div>

      {/* Scenarios Tab */}
      {activeTab === 'scenarios' && (
        <>
          {!selectedScenario ? (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Choose a scenario:</h3>
              <div className="grid grid-cols-1 gap-3">
                {scenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => handleScenarioSelect(scenario)}
                    className="bg-white flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 text-left shadow-sm hover:shadow-md"
                  >
                    <div className="mr-4">
                      {scenario.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{scenario.title}</div>
                      <div className="text-sm text-gray-600">{scenario.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <button
                onClick={() => setSelectedScenario(null)}
                className="bg-white rounded-full flex items-center text-black hover:text-blue-800 py-1 px-3 text-md font-medium"
              >
                ← Back to scenarios
              </button>
              
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-5 rounded-xl border border-red-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="mr-3">
                    {selectedScenario.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedScenario.title}</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">{selectedScenario.description}</p>
                <p className="text-xs text-gray-600 italic bg-white p-2 rounded-lg">{selectedScenario.context}</p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-red-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Question:</h4>
                <p className="text-gray-700 mb-4 text-md">{selectedScenario.question}</p>
                
                <div className="flex items-center space-x-3 mb-4 flex-wrap">
                  <input
                    type="number"
                    step="0.1"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="flex-1 p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
                  />
                  <span className="text-gray-600 font-medium text-right w-full">{selectedScenario.unit}</span>
                </div>

                {!showResult ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!userAnswer}
                    className="w-full py-3 px-4 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Check Answer
                  </button>
                ) : (
                  <div className="mt-4 space-y-4">
                    <div className={`p-4 rounded-xl ${isCorrect ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300' : 'bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300'} shadow-sm`}>
                      <div className="flex items-center mb-2">
                        {isCorrect ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div className="text-green-800 font-bold text-lg">Correct!</div>
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <div className="text-red-800 font-bold text-lg">Incorrect</div>
                          </>
                        )}
                      </div>
                      <div className="text-gray-700 text-md">
                        <span className="font-semibold">Answer:</span> {selectedScenario.answer} {selectedScenario.unit}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-xl border-2 border-amber-200">
                      <h5 className="font-bold text-gray-800 mb-2">Solution:</h5>
                      <p className="text-gray-700 text-sm font-mono bg-white p-2 rounded-lg">{selectedScenario.calculation}</p>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => {
                          setUserAnswer('');
                          setShowResult(false);
                        }}
                        className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition-all duration-300 shadow-sm"
                      >
                        Try Again
                      </button>
                      {scenarios.findIndex(s => s.id === selectedScenario.id) < scenarios.length - 1 && (
                        <button
                          onClick={handleNext}
                          className="flex-1 py-2 px-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-medium rounded-xl hover:from-red-600 hover:to-yellow-600 transition-all duration-300 shadow-md"
                        >
                          Next Scenario
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Converter Tab */}
      {activeTab === 'converter' && (
        <div className="space-y-4">
          <div className="bg-red-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Enter Temperature
            </label>
            <input
              type="number"
              step="0.1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-red-600 text-white rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-300"
              placeholder="Enter temperature"
            />
          </div>

          <div className="bg-red-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              From Scale
            </label>
            <select
              value={fromScale}
              onChange={(e) => setFromScale(e.target.value as TemperatureScale)}
              className="w-full bg-red-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
              <option value="kelvin">Kelvin (K)</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              onClick={swapScales}
              className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full transition-colors"
            >
              <Calculator className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-red-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              To Scale
            </label>
            <select
              value={toScale}
              onChange={(e) => setToScale(e.target.value as TemperatureScale)}
              className="w-full bg-red-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
              <option value="kelvin">Kelvin (K)</option>
            </select>
          </div>

          <div className="bg-yellow-400 rounded-lg p-4">
            <div className="text-center">
              <div className="text-sm text-black mb-1 font-medium">Result</div>
              <div className="text-2xl font-bold text-black">
                {getConvertedValue()} {getScaleSymbol(toScale)}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Footer */}
      <div className="text-center pt-4 border-t border-red-600">
        <div className="text-xs text-gray-200 space-y-1 bg-red-700 p-3 rounded-xl">
          <div className="font-bold text-yellow-300 mb-1">Quick Reference:</div>
          <div>Human body: 37°C = 98.6°F = 310.15 K</div>
          <div>Room temperature: 22°C = 72°F = 295.15 K</div>
          <div>Water freezes: 0°C = 32°F = 273.15 K</div>
          <div>Water boils: 100°C = 212°F = 373.15 K</div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureUnits;