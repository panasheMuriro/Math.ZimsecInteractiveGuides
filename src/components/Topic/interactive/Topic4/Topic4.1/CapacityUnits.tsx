import React, { useState } from 'react';
import { Droplet, FlaskConical, GlassWater, CookingPot, Fuel, Syringe, } from 'lucide-react';

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

type CapacitySystem = 'metric' | 'imperial';
type MetricUnit = 'ml' | 'l' | 'kl';
type ImperialUnit = 'floz' | 'pt' | 'qt' | 'gal';

const CapacityUnits = () => {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'converter' | 'reference'>('scenarios');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromSystem, setFromSystem] = useState<CapacitySystem>('metric');
  const [fromUnit, setFromUnit] = useState<MetricUnit | ImperialUnit>('l');
  const [toSystem, setToSystem] = useState<CapacitySystem>('metric');
  const [toUnit, setToUnit] = useState<MetricUnit | ImperialUnit>('ml');

  const scenarios: Scenario[] = [
    {
      id: 'cooking-recipe',
      title: 'Cooking Recipe',
      icon: <CookingPot className="w-6 h-6 text-amber-600" />,
      description: 'A recipe calls for 2.5 liters of water',
      question: 'How many milliliters is this?',
      calculation: 'ml = L × 1000 = 2.5 × 1000 = 2500 ml',
      answer: 2500,
      unit: 'ml',
      context: 'Most cooking measurements use metric units for precision'
    },
    {
      id: 'fuel-purchase',
      title: 'Fuel Purchase',
      icon: <Fuel className="w-6 h-6 text-blue-800" />,
      description: 'A car fuel tank holds 45 liters of petrol',
      question: 'Convert this to gallons (imperial)',
      calculation: 'gal = L ÷ 4.546 = 45 ÷ 4.546 ≈ 9.90 gal',
      answer: 9.9,
      unit: 'gal',
      context: 'Fuel is often measured in liters but some countries use gallons'
    },
    {
      id: 'medical-dose',
      title: 'Medical Dose',
      icon: <Syringe className="w-6 h-6 text-red-500" />,
      description: 'A child needs 5 ml of medicine',
      question: 'Convert this to fluid ounces',
      calculation: 'fl oz = ml ÷ 29.57 = 5 ÷ 29.57 ≈ 0.17 fl oz',
      answer: 0.17,
      unit: 'fl oz',
      context: 'Medical doses are typically in ml for accuracy'
    },
    {
      id: 'beverage-serving',
      title: 'Beverage Serving',
      icon: <GlassWater className="w-6 h-6 text-blue-400" />,
      description: 'A pub serves beer in 568 ml pints',
      question: 'How many liters is one pint?',
      calculation: 'L = ml ÷ 1000 = 568 ÷ 1000 = 0.568 L',
      answer: 0.568,
      unit: 'L',
      context: 'Pubs in Zimbabwe often serve both metric and imperial measures'
    },
    {
      id: 'water-bottle',
      title: 'Water Bottle',
      icon: <Droplet className="w-6 h-6 text-blue-300" />,
      description: 'A water bottle contains 750 ml',
      question: 'Convert this to fluid ounces',
      calculation: 'fl oz = ml ÷ 29.57 = 750 ÷ 29.57 ≈ 25.36 fl oz',
      answer: 25.36,
      unit: 'fl oz',
      context: 'Bottled water sizes vary internationally'
    },
    {
      id: 'swimming-pool',
      title: 'Swimming Pool',
      icon: <FlaskConical className="w-6 h-6 text-cyan-500" />,
      description: 'A pool contains 50,000 liters of water',
      question: 'Convert this to kiloliters',
      calculation: 'kL = L ÷ 1000 = 50000 ÷ 1000 = 50 kL',
      answer: 50,
      unit: 'kL',
      context: 'Large volumes are often measured in kiloliters'
    }
  ];

  const convertCapacity = (value: number, from: MetricUnit | ImperialUnit, to: MetricUnit | ImperialUnit): number => {
    // Convert to milliliters first (base unit)
    let mlValue: number;
    
    // Convert from unit to ml
    switch (from) {
      // Metric
      case 'ml': mlValue = value; break;
      case 'l': mlValue = value * 1000; break;
      case 'kl': mlValue = value * 1000000; break;
      // Imperial
      case 'floz': mlValue = value * 29.5735; break;
      case 'pt': mlValue = value * 568.261; break;
      case 'qt': mlValue = value * 1136.52; break;
      case 'gal': mlValue = value * 4546.09; break;
    }
    
    // Convert from ml to target unit
    switch (to) {
      // Metric
      case 'ml': return mlValue;
      case 'l': return mlValue / 1000;
      case 'kl': return mlValue / 1000000;
      // Imperial
      case 'floz': return mlValue / 29.5735;
      case 'pt': return mlValue / 568.261;
      case 'qt': return mlValue / 1136.52;
      case 'gal': return mlValue / 4546.09;
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
    
    const result = convertCapacity(input, fromUnit, toUnit);
    return result.toFixed(2);
  };

  const swapUnits = () => {
    const tempSystem = fromSystem;
    const tempUnit = fromUnit;
    setFromSystem(toSystem);
    setFromUnit(toUnit);
    setToSystem(tempSystem);
    setToUnit(tempUnit);
  };

  const isCorrect = userAnswer && Math.abs(parseFloat(userAnswer) - (selectedScenario?.answer || 0)) < 0.2;

  const getUnitSymbol = (unit: MetricUnit | ImperialUnit): string => {
    switch (unit) {
      case 'ml': return 'ml';
      case 'l': return 'L';
      case 'kl': return 'kL';
      case 'floz': return 'fl oz';
      case 'pt': return 'pt';
      case 'qt': return 'qt';
      case 'gal': return 'gal';
    }
  };


  return (
    <div className="max-w-md mx-auto rounded-xl shadow-lg p-6 space-y-6 bg-[#1E88E5]">
      <div className="text-center">
        <Droplet className="w-10 h-10 mx-auto mb-3 text-blue-100" />
        <h2 className="text-2xl font-bold text-white">
          Capacity Units Practice
        </h2>
        <p className="text-sm text-gray-200 mt-1">Learn with practical scenarios</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-blue-800 rounded-lg p-1 mb-6">
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'scenarios'
              ? 'bg-blue-300 text-black'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Scenarios
        </button>
        <button
          onClick={() => setActiveTab('converter')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'converter'
              ? 'bg-blue-300 text-black'
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
                    className="bg-white flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 text-left shadow-sm hover:shadow-md"
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
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="mr-3">
                    {selectedScenario.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedScenario.title}</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">{selectedScenario.description}</p>
                <p className="text-xs text-gray-600 italic bg-white p-2 rounded-lg">{selectedScenario.context}</p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Question:</h4>
                <p className="text-gray-700 mb-4 text-md">{selectedScenario.question}</p>
                
                <div className="flex items-center space-x-3 mb-4 flex-wrap">
                  <input
                    type="number"
                    step="0.01"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="flex-1 p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <span className="text-gray-600 font-medium text-right w-full">{selectedScenario.unit}</span>
                </div>

                {!showResult ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!userAnswer}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
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

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border-2 border-cyan-200">
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
                          className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md"
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
          <div className="bg-blue-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Enter Value
            </label>
            <input
              type="number"
              step="0.01"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-blue-600 text-white rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-300"
              placeholder="Enter value"
            />
          </div>

          <div className="bg-blue-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              From System
            </label>
            <select
              value={fromSystem}
              onChange={(e) => {
                setFromSystem(e.target.value as CapacitySystem);
                // Reset to a default unit when system changes
                if (e.target.value === 'metric') {
                  setFromUnit('l');
                } else {
                  setFromUnit('floz');
                }
              }}
              className="w-full bg-blue-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>

          <div className="bg-blue-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              From Unit
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value as MetricUnit | ImperialUnit)}
              className="w-full bg-blue-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {fromSystem === 'metric' ? (
                <>
                  <option value="ml">Milliliter (ml)</option>
                  <option value="l">Liter (L)</option>
                  <option value="kl">Kiloliter (kL)</option>
                </>
              ) : (
                <>
                  <option value="floz">Fluid Ounce (fl oz)</option>
                  <option value="pt">Pint (pt)</option>
                  <option value="qt">Quart (qt)</option>
                  <option value="gal">Gallon (gal)</option>
                </>
              )}
            </select>
          </div>

          <div className="flex justify-center">
            <button
              onClick={swapUnits}
              className="bg-blue-300 hover:bg-blue-400 text-black p-3 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>

          <div className="bg-blue-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              To System
            </label>
            <select
              value={toSystem}
              onChange={(e) => {
                setToSystem(e.target.value as CapacitySystem);
                // Reset to a default unit when system changes
                if (e.target.value === 'metric') {
                  setToUnit('ml');
                } else {
                  setToUnit('floz');
                }
              }}
              className="w-full bg-blue-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>

          <div className="bg-blue-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              To Unit
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value as MetricUnit | ImperialUnit)}
              className="w-full bg-blue-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {toSystem === 'metric' ? (
                <>
                  <option value="ml">Milliliter (ml)</option>
                  <option value="l">Liter (L)</option>
                  <option value="kl">Kiloliter (kL)</option>
                </>
              ) : (
                <>
                  <option value="floz">Fluid Ounce (fl oz)</option>
                  <option value="pt">Pint (pt)</option>
                  <option value="qt">Quart (qt)</option>
                  <option value="gal">Gallon (gal)</option>
                </>
              )}
            </select>
          </div>

          <div className="bg-blue-300 rounded-lg p-4">
            <div className="text-center">
              <div className="text-sm text-black mb-1 font-medium">Result</div>
              <div className="text-2xl font-bold text-black">
                {getConvertedValue()} {getUnitSymbol(toUnit)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center pt-4 border-t border-blue-600">
        <div className="text-xs text-gray-200 space-y-1 bg-blue-700 p-3 rounded-xl">
          <div className="font-bold text-blue-300 mb-1">Quick Reference:</div>
          <div>1 liter = 1000 ml = 33.81 fl oz</div>
          <div>1 gallon = 4.546 L = 8 pints</div>
          <div>1 pint = 568 ml = 20 fl oz</div>
          <div>1 fl oz = 29.57 ml</div>
        </div>
      </div>
    </div>
  );
};

export default CapacityUnits;