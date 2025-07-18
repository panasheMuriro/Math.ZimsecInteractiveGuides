import React, { useState } from 'react';
import { Ruler, Calculator, Home, Car, TreePine, Map, Mountain, Building, ArrowDownUpIcon } from 'lucide-react';

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

type ConversionUnit = {
  name: string;
  symbol: string;
  toMeters: number;
  system: 'metric' | 'imperial';
};

const LengthUnits = () => {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'converter' | 'reference'>('scenarios');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('m');
  const [toUnit, setToUnit] = useState<string>('cm');

  const scenarios: Scenario[] = [
    {
      id: 'house',
      title: 'House Plot',
      icon: <Home className="w-6 h-6 text-green-600" />,
      description: 'A typical residential plot in Harare suburbs is 300m²',
      question: 'If the plot is square, what is one side length in meters?',
      calculation: '√300 = 17.32 meters (approximately 17.3m)',
      answer: 17.3,
      unit: 'meters',
      context: 'Most suburban plots in areas like Avondale or Borrowdale'
    },
    {
      id: 'kombi',
      title: 'Kombi Route',
      icon: <Car className="w-6 h-6 text-blue-600" />,
      description: 'The distance from Harare CBD to Chitungwiza is 30km',
      question: 'How many meters is this distance?',
      calculation: '30 km × 1000 m/km = 30,000 meters',
      answer: 30000,
      unit: 'meters',
      context: 'One of the busiest kombi routes in Zimbabwe'
    },
    {
      id: 'msasa',
      title: 'Msasa Tree',
      icon: <TreePine className="w-6 h-6 text-emerald-600" />,
      description: 'A mature msasa tree can grow up to 25 meters tall',
      question: 'How many centimeters is this height?',
      calculation: '25 m × 100 cm/m = 2,500 centimeters',
      answer: 2500,
      unit: 'centimeters',
      context: 'Msasa trees are common in Zimbabwe\'s miombo woodlands'
    },
    {
      id: 'great-wall',
      title: 'Great Zimbabwe Wall',
      icon: <Building className="w-6 h-6 text-amber-600" />,
      description: 'The Great Enclosure wall is about 11 meters high',
      question: 'How many millimeters is this height?',
      calculation: '11 m × 1000 mm/m = 11,000 millimeters',
      answer: 11000,
      unit: 'millimeters',
      context: 'The iconic stone walls of Great Zimbabwe monument'
    },
    {
      id: 'vic-falls',
      title: 'Victoria Falls',
      icon: <Mountain className="w-6 h-6 text-cyan-600" />,
      description: 'Victoria Falls is 1.7 kilometers wide',
      question: 'How many meters wide is the waterfall?',
      calculation: '1.7 km × 1000 m/km = 1,700 meters',
      answer: 1700,
      unit: 'meters',
      context: 'One of the Seven Natural Wonders of the World'
    },
    {
      id: 'field',
      title: 'Maize Field',
      icon: <Map className="w-6 h-6 text-yellow-600" />,
      description: 'A communal farming plot is typically 2 hectares',
      question: 'If rectangular with 200m length, what is the width?',
      calculation: '2 hectares = 20,000 m². Width = 20,000 ÷ 200 = 100 meters',
      answer: 100,
      unit: 'meters',
      context: 'Common size for communal land farming plots'
    }
  ];

  const units: ConversionUnit[] = [
    { name: 'Millimeter', symbol: 'mm', toMeters: 0.001, system: 'metric' },
    { name: 'Centimeter', symbol: 'cm', toMeters: 0.01, system: 'metric' },
    { name: 'Meter', symbol: 'm', toMeters: 1, system: 'metric' },
    { name: 'Kilometer', symbol: 'km', toMeters: 1000, system: 'metric' },
    { name: 'Inch', symbol: 'in', toMeters: 0.0254, system: 'imperial' },
    { name: 'Foot', symbol: 'ft', toMeters: 0.3048, system: 'imperial' },
    { name: 'Yard', symbol: 'yd', toMeters: 0.9144, system: 'imperial' },
    { name: 'Mile', symbol: 'mi', toMeters: 1609.344, system: 'imperial' },
  ];

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

  const convertLength = (): string => {
    const input = parseFloat(inputValue);
    if (isNaN(input)) return '0';
    
    const fromUnitData = units.find(u => u.symbol === fromUnit);
    const toUnitData = units.find(u => u.symbol === toUnit);
    
    if (!fromUnitData || !toUnitData) return '0';
    
    const meters = input * fromUnitData.toMeters;
    const result = meters / toUnitData.toMeters;
    
    return result.toLocaleString(undefined, { maximumFractionDigits: 6 });
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const isCorrect = userAnswer && Math.abs(parseFloat(userAnswer) - (selectedScenario?.answer || 0)) < 0.1;

  const metricUnits = units.filter(u => u.system === 'metric');
  const imperialUnits = units.filter(u => u.system === 'imperial');

  return (
    <div className="max-w-md mx-auto rounded-xl shadow-lg p-6 space-y-6 bg-[#2D5A27]">
      <div className="text-center">
        <Ruler className="w-10 h-10 mx-auto mb-3 text-yellow-400" />
        <h2 className="text-2xl font-bold text-white">
          Length Units Practice
        </h2>
        <p className="text-sm text-gray-300 mt-1">Learn with everyday Zimbabwean measurements</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-green-800 rounded-lg p-1 mb-6">
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'scenarios'
              ? 'bg-yellow-500 text-black'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Scenarios
        </button>
        <button
          onClick={() => setActiveTab('converter')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'converter'
              ? 'bg-yellow-500 text-black'
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
              
              <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-5 rounded-xl border border-green-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="mr-3">
                    {selectedScenario.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedScenario.title}</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">{selectedScenario.description}</p>
                <p className="text-xs text-gray-600 italic bg-white p-2 rounded-lg">{selectedScenario.context}</p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-green-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Question:</h4>
                <p className="text-gray-700 mb-4 text-md">{selectedScenario.question}</p>
                
                <div className="flex items-center space-x-3 mb-4 flex-wrap">
                  <input
                    type="number"
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
                    className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-yellow-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
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
                          className="flex-1 py-2 px-4 bg-gradient-to-r from-green-500 to-yellow-500 text-white font-medium rounded-xl hover:from-green-600 hover:to-yellow-600 transition-all duration-300 shadow-md"
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
          <div className="bg-green-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Enter Value
            </label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-green-600 text-white rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-300"
              placeholder="Enter number"
            />
          </div>

          <div className="bg-green-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              From
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full bg-green-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <optgroup label="Metric">
                {metricUnits.map(unit => (
                  <option key={unit.symbol} value={unit.symbol}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Imperial">
                {imperialUnits.map(unit => (
                  <option key={unit.symbol} value={unit.symbol}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              onClick={swapUnits}
              className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full transition-colors"
            >
              {/* <Calculator className="w-5 h-5" /> */}
              <ArrowDownUpIcon className="w-5 h-5" /> 
            </button>
          </div>

          <div className="bg-green-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              To
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full bg-green-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <optgroup label="Metric">
                {metricUnits.map(unit => (
                  <option key={unit.symbol} value={unit.symbol}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Imperial">
                {imperialUnits.map(unit => (
                  <option key={unit.symbol} value={unit.symbol}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="bg-yellow-400 rounded-lg p-4">
            <div className="text-center">
              <div className="text-sm text-black mb-1 font-medium">Result</div>
              <div className="text-2xl font-bold text-black">
                {convertLength()} {toUnit}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer with conversions */}
      <div className="text-center pt-4 border-t border-green-600">
        <div className="text-xs text-gray-300 space-y-1 bg-green-700 p-3 rounded-xl">
          <div className="font-bold text-yellow-400 mb-1">Common Length Conversions:</div>
          <div>1 m = 100 cm = 1000 mm</div>
          <div>1 km = 1000 m = 100,000 cm</div>
          <div>1 foot = 12 inches = 30.48 cm</div>
          <div>1 mile = 1.609 km</div>
        </div>
      </div>
    </div>
  );
};

export default LengthUnits;