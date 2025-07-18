import React, { useState } from 'react';

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

type MeasurementSystem = string;
type MeasurementUnit = string;

interface MeasurementUnitsProps {
  title: string;
  icon: React.ReactNode;
  colorScheme: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  scenarios: Scenario[];
  systems: {
    [key: string]: {
      name: string;
      units: {
        [key: string]: {
          symbol: string;
          name: string;
          toBase: (value: number) => number;
          fromBase: (value: number) => number;
        };
      };
    };
  };
  quickReferences: string[];
}

const MeasurementUnits: React.FC<MeasurementUnitsProps> = ({
  title,
  icon,
  colorScheme,
  scenarios,
  systems,
  quickReferences,
}) => {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'converter'>('scenarios');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromSystem, setFromSystem] = useState<MeasurementSystem>(Object.keys(systems)[0]);
  const [fromUnit, setFromUnit] = useState<MeasurementUnit>(Object.keys(systems[fromSystem].units)[0]);
  const [toSystem, setToSystem] = useState<MeasurementSystem>(Object.keys(systems)[0]);
  const [toUnit, setToUnit] = useState<MeasurementUnit>(Object.keys(systems[toSystem].units)[0]);

  const convertMeasurement = (value: number, from: MeasurementUnit, to: MeasurementUnit): number => {
    // Convert to base unit first
    const baseValue = systems[fromSystem].units[from].toBase(value);
    // Convert from base to target unit
    return systems[toSystem].units[to].fromBase(baseValue);
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
    
    const result = convertMeasurement(input, fromUnit, toUnit);
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

  return (
    <div className={`max-w-md mx-auto rounded-xl shadow-lg p-6 space-y-6 bg-[${colorScheme.primary}]`}>
      <div className="text-center">
        {icon}
        <h2 className="text-2xl font-bold text-white">
          {title} Practice
        </h2>
        <p className="text-sm text-gray-200 mt-1">Learn with practical scenarios</p>
      </div>

      {/* Tab Navigation */}
      <div className={`flex bg-[${colorScheme.secondary}] rounded-lg p-1 mb-6`}>
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'scenarios'
              ? `bg-[${colorScheme.tertiary}] text-black`
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Scenarios
        </button>
        <button
          onClick={() => setActiveTab('converter')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'converter'
              ? `bg-[${colorScheme.tertiary}] text-black`
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
                    className={`bg-white flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-[${colorScheme.tertiary}] hover:bg-[${colorScheme.tertiary}50] transition-all duration-300 text-left shadow-sm hover:shadow-md`}
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
              
              <div className={`bg-gradient-to-r from-[${colorScheme.tertiary}50] to-[${colorScheme.primary}50] p-5 rounded-xl border border-[${colorScheme.tertiary}200] shadow-sm`}>
                <div className="flex items-center mb-3">
                  <div className="mr-3">
                    {selectedScenario.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedScenario.title}</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">{selectedScenario.description}</p>
                <p className="text-xs text-gray-600 italic bg-white p-2 rounded-lg">{selectedScenario.context}</p>
              </div>

              <div className={`bg-gradient-to-r from-gray-50 to-[${colorScheme.primary}50] p-5 rounded-xl border border-gray-200 shadow-sm`}>
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
                    className={`w-full py-3 px-4 bg-gradient-to-r from-[${colorScheme.secondary}] to-[${colorScheme.primary}] text-white font-bold rounded-xl hover:from-[${colorScheme.secondary}700] hover:to-[${colorScheme.primary}700] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg`}
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

                    <div className={`bg-gradient-to-r from-[${colorScheme.primary}50] to-[${colorScheme.secondary}50] p-4 rounded-xl border-2 border-[${colorScheme.tertiary}200]`}>
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
                          className={`flex-1 py-2 px-4 bg-gradient-to-r from-[${colorScheme.secondary}] to-[${colorScheme.primary}] text-white font-medium rounded-xl hover:from-[${colorScheme.secondary}600] hover:to-[${colorScheme.primary}600] transition-all duration-300 shadow-md`}
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
          <div className={`bg-[${colorScheme.secondary}] rounded-lg p-4`}>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Enter Value
            </label>
            <input
              type="number"
              step="0.01"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`w-full bg-[${colorScheme.primary}] text-white rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[${colorScheme.tertiary}] placeholder-gray-300`}
              placeholder="Enter value"
            />
          </div>

          <div className={`bg-[${colorScheme.secondary}] rounded-lg p-4`}>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              From System
            </label>
            <select
              value={fromSystem}
              onChange={(e) => {
                setFromSystem(e.target.value as MeasurementSystem);
                setFromUnit(Object.keys(systems[e.target.value].units)[0]);
              }}
              className={`w-full bg-[${colorScheme.primary}] text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[${colorScheme.tertiary}]`}
            >
              {Object.entries(systems).map(([key, system]) => (
                <option key={key} value={key}>{system.name}</option>
              ))}
            </select>
          </div>

          <div className={`bg-[${colorScheme.secondary}] rounded-lg p-4`}>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              From Unit
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value as MeasurementUnit)}
              className={`w-full bg-[${colorScheme.primary}] text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[${colorScheme.tertiary}]`}
            >
              {Object.entries(systems[fromSystem].units).map(([key, unit]) => (
                <option key={key} value={key}>{unit.name} ({unit.symbol})</option>
              ))}
            </select>
          </div>

          <div className="flex justify-center">
            <button
              onClick={swapUnits}
              className={`bg-[${colorScheme.tertiary}] hover:bg-[${colorScheme.tertiary}400] text-black p-3 rounded-full transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>

          <div className={`bg-[${colorScheme.secondary}] rounded-lg p-4`}>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              To System
            </label>
            <select
              value={toSystem}
              onChange={(e) => {
                setToSystem(e.target.value as MeasurementSystem);
                setToUnit(Object.keys(systems[e.target.value].units)[0]);
              }}
              className={`w-full bg-[${colorScheme.primary}] text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[${colorScheme.tertiary}]`}
            >
              {Object.entries(systems).map(([key, system]) => (
                <option key={key} value={key}>{system.name}</option>
              ))}
            </select>
          </div>

          <div className={`bg-[${colorScheme.secondary}] rounded-lg p-4`}>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              To Unit
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value as MeasurementUnit)}
              className={`w-full bg-[${colorScheme.primary}] text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[${colorScheme.tertiary}]`}
            >
              {Object.entries(systems[toSystem].units).map(([key, unit]) => (
                <option key={key} value={key}>{unit.name} ({unit.symbol})</option>
              ))}
            </select>
          </div>

          <div className={`bg-[${colorScheme.tertiary}] rounded-lg p-4`}>
            <div className="text-center">
              <div className="text-sm text-black mb-1 font-medium">Result</div>
              <div className="text-2xl font-bold text-black">
                {getConvertedValue()} {systems[toSystem].units[toUnit].symbol}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className={`text-center pt-4 border-t border-[${colorScheme.secondary}]`}>
        <div className={`text-xs text-gray-200 space-y-1 bg-[${colorScheme.secondary}] p-3 rounded-xl`}>
          <div className={`font-bold text-[${colorScheme.tertiary}] mb-1`}>Quick Reference:</div>
          {quickReferences.map((ref, index) => (
            <div key={index}>{ref}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeasurementUnits;