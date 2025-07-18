import React, { useState } from 'react';
import { LandPlot, Home, Trees, Mountain, Ruler, Crop, Warehouse } from 'lucide-react';

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

type AreaSystem = 'metric' | 'imperial';
type MetricUnit = 'mm2' | 'cm2' | 'm2' | 'ha' | 'km2';
type ImperialUnit = 'in2' | 'ft2' | 'yd2' | 'acre';

const AreaUnits = () => {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'converter' | 'reference'>('scenarios');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromSystem, setFromSystem] = useState<AreaSystem>('metric');
  const [fromUnit, setFromUnit] = useState<MetricUnit | ImperialUnit>('m2');
  const [toSystem, setToSystem] = useState<AreaSystem>('metric');
  const [toUnit, setToUnit] = useState<MetricUnit | ImperialUnit>('cm2');

  const scenarios: Scenario[] = [
    {
      id: 'house-size',
      title: 'House Size',
      icon: <Home className="w-6 h-6 text-amber-600" />,
      description: 'A typical suburban house occupies 200 square meters',
      question: 'How many square centimeters is this?',
      calculation: 'cm² = m² × 10,000 = 200 × 10,000 = 2,000,000 cm²',
      answer: 2000000,
      unit: 'cm²',
      context: 'House sizes are typically measured in square meters'
    },
    {
      id: 'farm-land',
      title: 'Farm Land',
      icon: <Trees className="w-6 h-6 text-green-600" />,
      description: 'A farm measures 5 hectares',
      question: 'Convert this to acres',
      calculation: 'acres = ha × 2.471 = 5 × 2.471 ≈ 12.36 acres',
      answer: 12.36,
      unit: 'acres',
      context: 'Agricultural land is often measured in hectares or acres'
    },
    {
      id: 'city-area',
      title: 'City Area',
      icon: <Warehouse className="w-6 h-6 text-gray-600" />,
      description: 'Harare covers approximately 960 square kilometers',
      question: 'How many hectares is this?',
      calculation: 'ha = km² × 100 = 960 × 100 = 96,000 ha',
      answer: 96000,
      unit: 'ha',
      context: 'City areas are typically measured in square kilometers'
    },
    {
      id: 'construction',
      title: 'Construction Site',
      icon: <Ruler className="w-6 h-6 text-blue-600" />,
      description: 'A construction plot measures 10,000 square feet',
      question: 'Convert this to square meters',
      calculation: 'm² = ft² × 0.093 = 10,000 × 0.093 ≈ 930 m²',
      answer: 930,
      unit: 'm²',
      context: 'Construction projects often use both metric and imperial units'
    },
    {
      id: 'national-park',
      title: 'National Park',
      icon: <Mountain className="w-6 h-6 text-brown-600" />,
      description: 'Hwange National Park covers 14,651 square kilometers',
      question: 'Convert this to hectares',
      calculation: 'ha = km² × 100 = 14,651 × 100 = 1,465,100 ha',
      answer: 1465100,
      unit: 'ha',
      context: 'Large natural areas are measured in square kilometers'
    },
    {
      id: 'garden-plot',
      title: 'Garden Plot',
      icon: <Crop className="w-6 h-6 text-lime-600" />,
      description: 'A vegetable garden measures 800 square feet',
      question: 'Convert this to square yards',
      calculation: 'yd² = ft² ÷ 9 = 800 ÷ 9 ≈ 88.89 yd²',
      answer: 88.89,
      unit: 'yd²',
      context: 'Residential gardens are often measured in square feet'
    }
  ];

  const convertArea = (value: number, from: MetricUnit | ImperialUnit, to: MetricUnit | ImperialUnit): number => {
    // Convert to square meters first (base unit)
    let m2Value: number;
    
    // Convert from unit to m²
    switch (from) {
      // Metric
      case 'mm2': m2Value = value / 1000000; break;
      case 'cm2': m2Value = value / 10000; break;
      case 'm2': m2Value = value; break;
      case 'ha': m2Value = value * 10000; break;
      case 'km2': m2Value = value * 1000000; break;
      // Imperial
      case 'in2': m2Value = value * 0.00064516; break;
      case 'ft2': m2Value = value * 0.092903; break;
      case 'yd2': m2Value = value * 0.836127; break;
      case 'acre': m2Value = value * 4046.86; break;
    }
    
    // Convert from m² to target unit
    switch (to) {
      // Metric
      case 'mm2': return m2Value * 1000000;
      case 'cm2': return m2Value * 10000;
      case 'm2': return m2Value;
      case 'ha': return m2Value / 10000;
      case 'km2': return m2Value / 1000000;
      // Imperial
      case 'in2': return m2Value / 0.00064516;
      case 'ft2': return m2Value / 0.092903;
      case 'yd2': return m2Value / 0.836127;
      case 'acre': return m2Value / 4046.86;
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
    
    const result = convertArea(input, fromUnit, toUnit);
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
      case 'mm2': return 'mm²';
      case 'cm2': return 'cm²';
      case 'm2': return 'm²';
      case 'ha': return 'ha';
      case 'km2': return 'km²';
      case 'in2': return 'in²';
      case 'ft2': return 'ft²';
      case 'yd2': return 'yd²';
      case 'acre': return 'acres';
    }
  };


  return (
    <div className="max-w-md mx-auto rounded-xl shadow-lg p-6 space-y-6 bg-[#4CAF50]">
      <div className="text-center">
        <LandPlot className="w-10 h-10 mx-auto mb-3 text-green-100" />
        <h2 className="text-2xl font-bold text-white">
          Area Units Practice
        </h2>
        <p className="text-sm text-gray-200 mt-1">Learn with practical scenarios</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-green-800 rounded-lg p-1 mb-6">
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'scenarios'
              ? 'bg-green-300 text-black'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Scenarios
        </button>
        <button
          onClick={() => setActiveTab('converter')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'converter'
              ? 'bg-green-300 text-black'
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
                    className="bg-white flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-300 text-left shadow-sm hover:shadow-md"
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
                className="bg-white rounded-full flex items-center text-black hover:text-green-800 py-1 px-3 text-md font-medium"
              >
                ← Back to scenarios
              </button>
              
              <div className="bg-gradient-to-r from-green-50 to-lime-50 p-5 rounded-xl border border-green-200 shadow-sm">
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
                    step="0.01"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="flex-1 p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  />
                  <span className="text-gray-600 font-medium text-right w-full">{selectedScenario.unit}</span>
                </div>

                {!showResult ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!userAnswer}
                    className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-lime-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-lime-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
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

                    <div className="bg-gradient-to-r from-lime-50 to-green-50 p-4 rounded-xl border-2 border-lime-200">
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
                          className="flex-1 py-2 px-4 bg-gradient-to-r from-green-500 to-lime-500 text-white font-medium rounded-xl hover:from-green-600 hover:to-lime-600 transition-all duration-300 shadow-md"
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
              step="0.01"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-green-600 text-white rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-300"
              placeholder="Enter value"
            />
          </div>

          <div className="bg-green-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              From System
            </label>
            <select
              value={fromSystem}
              onChange={(e) => {
                setFromSystem(e.target.value as AreaSystem);
                // Reset to a default unit when system changes
                if (e.target.value === 'metric') {
                  setFromUnit('m2');
                } else {
                  setFromUnit('ft2');
                }
              }}
              className="w-full bg-green-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>

          <div className="bg-green-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              From Unit
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value as MetricUnit | ImperialUnit)}
              className="w-full bg-green-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              {fromSystem === 'metric' ? (
                <>
                  <option value="mm2">Square Millimeter (mm²)</option>
                  <option value="cm2">Square Centimeter (cm²)</option>
                  <option value="m2">Square Meter (m²)</option>
                  <option value="ha">Hectare (ha)</option>
                  <option value="km2">Square Kilometer (km²)</option>
                </>
              ) : (
                <>
                  <option value="in2">Square Inch (in²)</option>
                  <option value="ft2">Square Foot (ft²)</option>
                  <option value="yd2">Square Yard (yd²)</option>
                  <option value="acre">Acre</option>
                </>
              )}
            </select>
          </div>

          <div className="flex justify-center">
            <button
              onClick={swapUnits}
              className="bg-green-300 hover:bg-green-400 text-black p-3 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>

          <div className="bg-green-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              To System
            </label>
            <select
              value={toSystem}
              onChange={(e) => {
                setToSystem(e.target.value as AreaSystem);
                // Reset to a default unit when system changes
                if (e.target.value === 'metric') {
                  setToUnit('m2');
                } else {
                  setToUnit('ft2');
                }
              }}
              className="w-full bg-green-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>

          <div className="bg-green-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              To Unit
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value as MetricUnit | ImperialUnit)}
              className="w-full bg-green-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              {toSystem === 'metric' ? (
                <>
                  <option value="mm2">Square Millimeter (mm²)</option>
                  <option value="cm2">Square Centimeter (cm²)</option>
                  <option value="m2">Square Meter (m²)</option>
                  <option value="ha">Hectare (ha)</option>
                  <option value="km2">Square Kilometer (km²)</option>
                </>
              ) : (
                <>
                  <option value="in2">Square Inch (in²)</option>
                  <option value="ft2">Square Foot (ft²)</option>
                  <option value="yd2">Square Yard (yd²)</option>
                  <option value="acre">Acre</option>
                </>
              )}
            </select>
          </div>

          <div className="bg-green-300 rounded-lg p-4">
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
      <div className="text-center pt-4 border-t border-green-600">
        <div className="text-xs text-gray-200 space-y-1 bg-green-700 p-3 rounded-xl">
          <div className="font-bold text-green-300 mb-1">Quick Reference:</div>
          <div>1 m² = 10.764 ft² = 1.196 yd²</div>
          <div>1 km² = 247 acres = 100 ha</div>
          <div>1 acre = 4046.86 m² = 0.405 ha</div>
          <div>1 ha = 2.471 acres = 10,000 m²</div>
        </div>
      </div>
    </div>
  );
};

export default AreaUnits;