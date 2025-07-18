import React, { useState } from 'react';
import { Box, Warehouse, Factory, FlaskConical, Container, Truck, Building } from 'lucide-react';

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

type VolumeSystem = 'metric' | 'imperial';
type MetricUnit = 'mm3' | 'cm3' | 'm3' | 'km3' | 'l';
type ImperialUnit = 'in3' | 'ft3' | 'yd3';

const VolumeUnits = () => {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'converter' | 'reference'>('scenarios');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromSystem, setFromSystem] = useState<VolumeSystem>('metric');
  const [fromUnit, setFromUnit] = useState<MetricUnit | ImperialUnit>('m3');
  const [toSystem, setToSystem] = useState<VolumeSystem>('metric');
  const [toUnit, setToUnit] = useState<MetricUnit | ImperialUnit>('l');

  const scenarios: Scenario[] = [
    {
      id: 'swimming-pool',
      title: 'Swimming Pool',
      icon: <Container className="w-6 h-6 text-blue-600" />,
      description: 'An Olympic swimming pool contains 2,500 cubic meters of water',
      question: 'Convert this to liters',
      calculation: 'L = m³ × 1000 = 2,500 × 1000 = 2,500,000 L',
      answer: 2500000,
      unit: 'L',
      context: 'Large volumes of liquids are often measured in cubic meters or liters'
    },
    {
      id: 'shipping-container',
      title: 'Shipping Container',
      icon: <Truck className="w-6 h-6 text-orange-600" />,
      description: 'A standard shipping container has 33.2 cubic meters of volume',
      question: 'Convert this to cubic feet',
      calculation: 'ft³ = m³ × 35.315 = 33.2 × 35.315 ≈ 1,172 ft³',
      answer: 1172,
      unit: 'ft³',
      context: 'Shipping containers use both metric and imperial measurements'
    },
    {
      id: 'science-lab',
      title: 'Science Lab',
      icon: <FlaskConical className="w-6 h-6 text-purple-600" />,
      description: 'A chemical solution measures 500 cubic centimeters',
      question: 'How many milliliters is this?',
      calculation: 'ml = cm³ = 500 ml',
      answer: 500,
      unit: 'ml',
      context: 'In science, 1 cm³ equals exactly 1 milliliter'
    },
    {
      id: 'construction-site',
      title: 'Construction Site',
      icon: <Building className="w-6 h-6 text-gray-600" />,
      description: 'A concrete pour requires 15 cubic yards of material',
      question: 'Convert this to cubic meters',
      calculation: 'm³ = yd³ × 0.765 = 15 × 0.765 ≈ 11.47 m³',
      answer: 11.47,
      unit: 'm³',
      context: 'Construction projects often use cubic yards for large volumes'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: <Factory className="w-6 h-6 text-red-600" />,
      description: 'A machine part has a volume of 120 cubic inches',
      question: 'Convert this to cubic centimeters',
      calculation: 'cm³ = in³ × 16.387 = 120 × 16.387 ≈ 1,966 cm³',
      answer: 1966,
      unit: 'cm³',
      context: 'Precision manufacturing often uses cubic inches or centimeters'
    },
    {
      id: 'warehouse',
      title: 'Warehouse',
      icon: <Warehouse className="w-6 h-6 text-brown-600" />,
      description: 'A warehouse has 50,000 cubic feet of storage space',
      question: 'Convert this to cubic meters',
      calculation: 'm³ = ft³ × 0.028 = 50,000 × 0.028 ≈ 1,400 m³',
      answer: 1400,
      unit: 'm³',
      context: 'Warehouse capacities are often measured in cubic feet'
    }
  ];

  const convertVolume = (value: number, from: MetricUnit | ImperialUnit, to: MetricUnit | ImperialUnit): number => {
    // Convert to cubic meters first (base unit)
    let m3Value: number;
    
    // Convert from unit to m³
    switch (from) {
      // Metric
      case 'mm3': m3Value = value / 1000000000; break;
      case 'cm3': m3Value = value / 1000000; break;
      case 'm3': m3Value = value; break;
      case 'km3': m3Value = value * 1000000000; break;
      case 'l': m3Value = value / 1000; break;
      // Imperial
      case 'in3': m3Value = value * 0.000016387; break;
      case 'ft3': m3Value = value * 0.0283168; break;
      case 'yd3': m3Value = value * 0.764555; break;
    }
    
    // Convert from m³ to target unit
    switch (to) {
      // Metric
      case 'mm3': return m3Value * 1000000000;
      case 'cm3': return m3Value * 1000000;
      case 'm3': return m3Value;
      case 'km3': return m3Value / 1000000000;
      case 'l': return m3Value * 1000;
      // Imperial
      case 'in3': return m3Value / 0.000016387;
      case 'ft3': return m3Value / 0.0283168;
      case 'yd3': return m3Value / 0.764555;
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
    
    const result = convertVolume(input, fromUnit, toUnit);
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
      case 'mm3': return 'mm³';
      case 'cm3': return 'cm³';
      case 'm3': return 'm³';
      case 'km3': return 'km³';
      case 'l': return 'L';
      case 'in3': return 'in³';
      case 'ft3': return 'ft³';
      case 'yd3': return 'yd³';
    }
  };

  

  return (
    <div className="max-w-md mx-auto rounded-xl shadow-lg p-6 space-y-6 bg-[#673AB7]">
      <div className="text-center">
        <Box className="w-10 h-10 mx-auto mb-3 text-purple-100" />
        <h2 className="text-2xl font-bold text-white">
          Volume Units Practice
        </h2>
        <p className="text-sm text-gray-200 mt-1">Learn with practical scenarios</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-purple-800 rounded-lg p-1 mb-6">
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'scenarios'
              ? 'bg-purple-300 text-black'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Scenarios
        </button>
        <button
          onClick={() => setActiveTab('converter')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'converter'
              ? 'bg-purple-300 text-black'
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
                    className="bg-white flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 text-left shadow-sm hover:shadow-md"
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
                className="bg-white rounded-full flex items-center text-black hover:text-purple-800 py-1 px-3 text-md font-medium"
              >
                ← Back to scenarios
              </button>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="mr-3">
                    {selectedScenario.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedScenario.title}</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">{selectedScenario.description}</p>
                <p className="text-xs text-gray-600 italic bg-white p-2 rounded-lg">{selectedScenario.context}</p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-purple-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Question:</h4>
                <p className="text-gray-700 mb-4 text-md">{selectedScenario.question}</p>
                
                <div className="flex items-center space-x-3 mb-4 flex-wrap">
                  <input
                    type="number"
                    step="0.01"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="flex-1 p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                  <span className="text-gray-600 font-medium text-right w-full">{selectedScenario.unit}</span>
                </div>

                {!showResult ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!userAnswer}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
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

                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-xl border-2 border-violet-200">
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
                          className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-violet-600 transition-all duration-300 shadow-md"
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
          <div className="bg-purple-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Enter Value
            </label>
            <input
              type="number"
              step="0.01"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-purple-600 text-white rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-gray-300"
              placeholder="Enter value"
            />
          </div>

          <div className="bg-purple-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              From System
            </label>
            <select
              value={fromSystem}
              onChange={(e) => {
                setFromSystem(e.target.value as VolumeSystem);
                // Reset to a default unit when system changes
                if (e.target.value === 'metric') {
                  setFromUnit('m3');
                } else {
                  setFromUnit('ft3');
                }
              }}
              className="w-full bg-purple-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>

          <div className="bg-purple-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              From Unit
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value as MetricUnit | ImperialUnit)}
              className="w-full bg-purple-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              {fromSystem === 'metric' ? (
                <>
                  <option value="mm3">Cubic Millimeter (mm³)</option>
                  <option value="cm3">Cubic Centimeter (cm³)</option>
                  <option value="m3">Cubic Meter (m³)</option>
                  <option value="km3">Cubic Kilometer (km³)</option>
                  <option value="l">Liter (L)</option>
                </>
              ) : (
                <>
                  <option value="in3">Cubic Inch (in³)</option>
                  <option value="ft3">Cubic Foot (ft³)</option>
                  <option value="yd3">Cubic Yard (yd³)</option>
                </>
              )}
            </select>
          </div>

          <div className="flex justify-center">
            <button
              onClick={swapUnits}
              className="bg-purple-300 hover:bg-purple-400 text-black p-3 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>

          <div className="bg-purple-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              To System
            </label>
            <select
              value={toSystem}
              onChange={(e) => {
                setToSystem(e.target.value as VolumeSystem);
                // Reset to a default unit when system changes
                if (e.target.value === 'metric') {
                  setToUnit('m3');
                } else {
                  setToUnit('ft3');
                }
              }}
              className="w-full bg-purple-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>

          <div className="bg-purple-700 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              To Unit
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value as MetricUnit | ImperialUnit)}
              className="w-full bg-purple-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              {toSystem === 'metric' ? (
                <>
                  <option value="mm3">Cubic Millimeter (mm³)</option>
                  <option value="cm3">Cubic Centimeter (cm³)</option>
                  <option value="m3">Cubic Meter (m³)</option>
                  <option value="km3">Cubic Kilometer (km³)</option>
                  <option value="l">Liter (L)</option>
                </>
              ) : (
                <>
                  <option value="in3">Cubic Inch (in³)</option>
                  <option value="ft3">Cubic Foot (ft³)</option>
                  <option value="yd3">Cubic Yard (yd³)</option>
                </>
              )}
            </select>
          </div>

          <div className="bg-purple-300 rounded-lg p-4">
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
      <div className="text-center pt-4 border-t border-purple-600">
        <div className="text-xs text-gray-200 space-y-1 bg-purple-700 p-3 rounded-xl">
          <div className="font-bold text-purple-300 mb-1">Quick Reference:</div>
          <div>1 m³ = 35.315 ft³ = 1.308 yd³</div>
          <div>1 L = 1,000 cm³ = 61.02 in³</div>
          <div>1 ft³ = 28.317 L = 0.028 m³</div>
          <div>1 yd³ = 0.765 m³ = 764.555 L</div>
        </div>
      </div>
    </div>
  );
};

export default VolumeUnits;