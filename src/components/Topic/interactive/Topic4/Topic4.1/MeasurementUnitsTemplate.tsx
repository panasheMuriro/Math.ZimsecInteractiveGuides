// MeasurementUnitsTemplate.tsx
import React, { useState } from 'react';

// 1. Update the Scenario type to include options for MCQ
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
  // Add the options array for multiple choice
  options: number[];
  // Include other potential properties like difficulty if used elsewhere
  // difficulty?: string;
};

type MeasurementSystem = string;
type MeasurementUnit = string;

interface MeasurementUnitsProps {
  title: string;
  icon: React.ReactNode;
  colorScheme: {
    primary: string; // Should be a valid Tailwind class like 'bg-teal-500'
    secondary: string; // Should be a valid Tailwind class like 'bg-teal-700'
    tertiary: string; // Should be a valid Tailwind class like 'bg-purple-400'
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
  swapIcon?: React.ReactNode; // Optional prop for custom swap icon
}

const MeasurementUnitsTemplate: React.FC<MeasurementUnitsProps> = ({
  title,
  icon,
  colorScheme,
  scenarios,
  systems,
  quickReferences,
  swapIcon, // Accept the swapIcon prop
}) => {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'converter'>('scenarios');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  // 2. Change userAnswer state type to string to hold the selected option value
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string>('1');
  const [fromSystem, setFromSystem] = useState<MeasurementSystem>(Object.keys(systems)[0]);
  const [fromUnit, setFromUnit] = useState<MeasurementUnit>(Object.keys(systems[fromSystem].units)[0]);
  const [toSystem, setToSystem] = useState<MeasurementSystem>(Object.keys(systems)[0]);
  const [toUnit, setToUnit] = useState<MeasurementUnit>(Object.keys(systems[toSystem].units)[0]);

  // 3. Fix the convertMeasurement function to use the correct systems
  const convertMeasurement = (
    value: number,
    fromSys: MeasurementSystem,
    from: MeasurementUnit,
    toSys: MeasurementSystem,
    to: MeasurementUnit
  ): number => {
    // Convert to base unit first (using the correct FROM system)
    const baseValue = systems[fromSys].units[from].toBase(value);
    // Convert from base to target unit (using the correct TO system)
    return systems[toSys].units[to].fromBase(baseValue);
  };

  const handleScenarioSelect = (scenario: Scenario) => {
    setSelectedScenario(scenario);
    setUserAnswer(''); // Reset for MCQ
    setShowResult(false);
  };

  const handleSubmit = () => {
    // 4. Update handleSubmit to check if an option is selected (for MCQ)
    if (userAnswer !== '') {
      setShowResult(true);
    }
  };

  const handleNext = () => {
    if (!selectedScenario) return;
    const nextIndex = scenarios.findIndex(s => s.id === selectedScenario.id) + 1;
    if (nextIndex < scenarios.length) {
      setSelectedScenario(scenarios[nextIndex]);
      setUserAnswer(''); // Reset for MCQ
      setShowResult(false);
    }
  };

  const getConvertedValue = (): string => {
    const input = parseFloat(inputValue);
    if (isNaN(input)) return '0';
    // 5. Pass system parameters to convertMeasurement
    const result = convertMeasurement(input, fromSystem, fromUnit, toSystem, toUnit);
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

  // 6. Update isCorrect logic for MCQ (compare string value to number answer)
  const isCorrect = userAnswer !== '' && parseFloat(userAnswer) === selectedScenario?.answer;

  return (
    // 7. Apply a base background color to the main container
    <div className={`max-w-md mx-auto rounded-3xl p-6 space-y-6 ${colorScheme.primary} bg-opacity-100 text-white border-4 border-black`}>
      <div className="text-center">
        <div className="mx-auto mb-2">{icon}</div>
        <h2 className="text-2xl font-bold">
          {title} Practice
        </h2>
        <p className="text-sm text-gray-200 mt-1">Learn with practical scenarios</p>
      </div>

      {/* Tab Navigation */}
      <div className={`flex ${colorScheme.secondary} border-2 border-black rounded-lg p-1 mb-6`} >
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`flex-1 py-2 px-2 rounded-md  text-xs font-medium transition-colors ${
            activeTab === 'scenarios'
              ? `${colorScheme.tertiary} text-gray-900` // Ensure good contrast
              : 'text-white hover:text-gray-200'
          }`}
        >
          Scenarios
        </button>
        <button
          onClick={() => setActiveTab('converter')}
          className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
            activeTab === 'converter'
              ? `${colorScheme.tertiary} text-gray-900` // Ensure good contrast
              : 'text-white hover:text-gray-200'
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
              <h3 className="text-lg font-semibold">Choose a scenario:</h3>
              <div className="grid grid-cols-1 gap-3">
                {scenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => handleScenarioSelect(scenario)}
                    // 8. Simplify dynamic class names - use standard Tailwind classes
                    // Hover effects are kept simple or removed problematic dynamic parts
                    className={`bg-white flex items-center p-4 border-2 border-black rounded-xl transition-all duration-300 text-left shadow-sm hover:shadow-md`}
                  >
                    <div className="mr-4 text-gray-700">
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
                className="bg-white rounded-full flex items-center text-gray-800 hover:text-blue-600 py-1 px-3 text-md font-medium"
              >
                ← Back to scenarios
              </button>
              <div className={`bg-white p-5 rounded-xl border-2 border-black shadow-sm`}>
                <div className="flex items-start mb-3"> {/* Use items-start for better icon alignment */}
                  <div className="mr-3 mt-1 text-gray-700"> {/* Add margin-top for icon alignment */}
                    {selectedScenario.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{selectedScenario.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{selectedScenario.description}</p> {/* Add margin-top */}
                  </div>
                </div>
                <p className="text-xs text-gray-600 italic bg-gray-50 p-3 rounded-lg">{selectedScenario.context}</p>
              </div>
              <div className={`bg-white p-5 rounded-xl border-2 border-black shadow-sm`}>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Question:</h4>
                <p className="text-gray-700 mb-4 text-md">{selectedScenario.question}</p>

                {/* 9. Implement Multiple Choice Options UI */}
                <div className="space-y-2 mb-4">
                  {selectedScenario.options.map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                        userAnswer === option.toString()
                          ? `border-${colorScheme.tertiary.replace('bg-', '')} bg-${colorScheme.tertiary.replace('bg-', '')} bg-opacity-20` // Simplified highlight
                          : 'border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      <input
                        type="radio"
                        name="mcq-options" // Group radio buttons
                        value={option.toString()} // Store the value as string
                        checked={userAnswer === option.toString()} // Controlled component
                        onChange={(e) => setUserAnswer(e.target.value)} // Update state on change
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700">{option} {selectedScenario.unit}</span>
                    </label>
                  ))}
                </div>

                {!showResult ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!userAnswer} // Disable if no option selected
                    // 10. Simplify button classes, remove problematic dynamic gradients
                    className={`w-full py-3 px-4 ${colorScheme.primary} text-white font-bold rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    Check Answer
                  </button>
                ) : (
                  <div className="mt-4 space-y-4">
                    <div className={`p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'} shadow-sm`}>
                      <div className="flex items-center mb-2">
                        {isCorrect ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div className="text-green-800 font-bold text-lg">Correct!</div>
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <div className={`${colorScheme.primary} bg-opacity-10 p-4 rounded-xl border border-${colorScheme.tertiary.replace('bg-', '')} border-opacity-30`}>
                      <h5 className="font-bold text-gray-800 mb-2">Solution:</h5>
                      <p className="text-gray-700 text-sm font-mono bg-white p-3 rounded-lg border border-gray-200">{selectedScenario.calculation}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                      <button
                        onClick={() => {
                          setUserAnswer('');
                          setShowResult(false);
                        }}
                        className="flex-1 py-2.5 px-4 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition-all duration-300 shadow-sm"
                      >
                        Try Again
                      </button>
                      {scenarios.findIndex(s => s.id === selectedScenario.id) < scenarios.length - 1 && (
                        <button
                          onClick={handleNext}
                          className={`flex-1 py-2.5 px-4 ${colorScheme.primary} text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 shadow-md`}
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
          {/* 11. Improve styling and contrast for converter inputs */}
          <div className={`${colorScheme.secondary} rounded-lg p-4`}>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Enter Value
            </label>
            <input
              type="number"
              step="0.01"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`w-full ${colorScheme.primary} text-white rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-${colorScheme.tertiary.replace('bg-', '')} placeholder-gray-300 bg-opacity-50`}
              placeholder="Enter value"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`${colorScheme.secondary} rounded-lg p-4`}>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                From System
              </label>
              <select
                value={fromSystem}
                onChange={(e) => {
                  const newSystem = e.target.value as MeasurementSystem;
                  setFromSystem(newSystem);
                  // Reset unit to the first one of the new system
                  setFromUnit(Object.keys(systems[newSystem].units)[0]);
                }}
                className={`w-full ${colorScheme.primary} text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-${colorScheme.tertiary.replace('bg-', '')} bg-opacity-50`}
              >
                {Object.entries(systems).map(([key, system]) => (
                  <option key={key} value={key} className="bg-gray-800 text-white">{system.name}</option>
                ))}
              </select>
            </div>

            <div className={`${colorScheme.secondary} rounded-lg p-4`}>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                From Unit
              </label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as MeasurementUnit)}
                className={`w-full ${colorScheme.primary} text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-${colorScheme.tertiary.replace('bg-', '')} bg-opacity-50`}
              >
                {Object.entries(systems[fromSystem].units).map(([key, unit]) => (
                  <option key={key} value={key} className="bg-gray-800 text-white">{unit.name} ({unit.symbol})</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center my-2">
            <button
              onClick={swapUnits}
              // 12. Use the passed swapIcon or a default one
              className={`p-3 rounded-full ${colorScheme.tertiary} text-gray-900 hover:opacity-90 transition-colors shadow`}
              aria-label="Swap units"
            >
              {swapIcon || ( // Use the passed icon or fallback
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`${colorScheme.secondary} rounded-lg p-4`}>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                To System
              </label>
              <select
                value={toSystem}
                onChange={(e) => {
                  const newSystem = e.target.value as MeasurementSystem;
                  setToSystem(newSystem);
                  // Reset unit to the first one of the new system
                  setToUnit(Object.keys(systems[newSystem].units)[0]);
                }}
                className={`w-full ${colorScheme.primary} text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-${colorScheme.tertiary.replace('bg-', '')} bg-opacity-50`}
              >
                {Object.entries(systems).map(([key, system]) => (
                  <option key={key} value={key} className="bg-gray-800 text-white">{system.name}</option>
                ))}
              </select>
            </div>

            <div className={`${colorScheme.secondary} rounded-lg p-4`}>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                To Unit
              </label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value as MeasurementUnit)}
                className={`w-full ${colorScheme.primary} text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-${colorScheme.tertiary.replace('bg-', '')} bg-opacity-50`}
              >
                {Object.entries(systems[toSystem].units).map(([key, unit]) => (
                  <option key={key} value={key} className="bg-gray-800 text-white">{unit.name} ({unit.symbol})</option>
                ))}
              </select>
            </div>
          </div>

          <div className={`${colorScheme.tertiary} rounded-lg p-5`}>
            <div className="text-center">
              <div className="text-sm text-gray-900 mb-1 font-medium">Result</div>
              <div className="text-2xl font-bold text-gray-900">
                {getConvertedValue()} <span className="text-gray-800 text-lg">{systems[toSystem].units[toUnit].symbol}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className={`text-center pt-4 border-t border-gray-700 border-opacity-50`}>
        <div className={`text-xs text-gray-200 space-y-1 ${colorScheme.secondary} bg-opacity-30 p-3 rounded-xl`}>
          <div className={`font-bold text-${colorScheme.tertiary.replace('bg-', '')} mb-1`}>Quick Reference:</div>
          {quickReferences.map((ref, index) => (
            <div key={index} className="py-0.5">{ref}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeasurementUnitsTemplate;