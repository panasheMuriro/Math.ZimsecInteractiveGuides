
import React, { useState } from 'react';
import { Clock, Calendar, Sunrise, Moon, BookOpen, Bus, Home, Coffee } from 'lucide-react';

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

const TimeUnitsInteractive = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  const scenarios: Scenario[] = [
    {
      id: 'school',
      title: 'School Day',
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      description: 'Zimbabwean schools typically start at 7:30 AM and end at 4:30 PM',
      question: 'How many hours is a typical school day?',
      calculation: '4:30 PM - 7:30 AM = 16:30 - 7:30 = 9 hours',
      answer: 9,
      unit: 'hours',
      context: 'This includes lessons, breaks, and lunch time'
    },
    {
      id: 'kombi',
      title: 'Kombi Journey',
      icon: <Bus className="w-6 h-6 text-teal-600" />,
      description: 'Journey from Harare to Bulawayo by kombi takes about 5.5 hours',
      question: 'How many minutes is this journey?',
      calculation: '5.5 hours × 60 minutes/hour = 330 minutes',
      answer: 330,
      unit: 'minutes',
      context: 'The 430km journey is a common intercity route'
    },
    {
      id: 'cooking',
      title: 'Cooking Sadza',
      icon: <Coffee className="w-6 h-6 text-amber-600" />,
      description: 'Making sadza takes about 45 minutes from start to finish',
      question: 'How many seconds is this cooking time?',
      calculation: '45 minutes × 60 seconds/minute = 2700 seconds',
      answer: 2700,
      unit: 'seconds',
      context: 'This includes preparing the fire and cooking time'
    },
    {
      id: 'rainfall',
      title: 'Rainy Season',
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      description: 'Zimbabwe\'s rainy season lasts from November to March',
      question: 'How many weeks is this approximately?',
      calculation: '5 months × 4 weeks/month = 20 weeks',
      answer: 20,
      unit: 'weeks',
      context: 'This is the main agricultural season'
    },
    {
      id: 'sunrise',
      title: 'Daylight Hours',
      icon: <Sunrise className="w-6 h-6 text-orange-500" />,
      description: 'In December, sunrise is at 5:30 AM, sunset at 6:30 PM',
      question: 'How many hours of daylight is this?',
      calculation: '6:30 PM - 5:30 AM = 18:30 - 5:30 = 13 hours',
      answer: 13,
      unit: 'hours',
      context: 'Zimbabwe has long summer days'
    },
    {
      id: 'work',
      title: 'Working Week',
      icon: <Home className="w-6 h-6 text-indigo-600" />,
      description: 'A standard working week in Zimbabwe is 40 hours',
      question: 'How many minutes is this?',
      calculation: '40 hours × 60 minutes/hour = 2400 minutes',
      answer: 2400,
      unit: 'minutes',
      context: 'This is spread across Monday to Friday'
    }
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

  const isCorrect = userAnswer && parseFloat(userAnswer) === selectedScenario?.answer;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6 bg-gradient-to-br from-white to-blue-50">
      <div className="text-center">
        <Clock className="w-10 h-10 mx-auto mb-3 text-fuchsia-600" />
        <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
          Time Units Practice
        </h2>
        <p className="text-sm text-gray-600 mt-1">Learn with everyday Zimbabwean scenarios</p>
      </div>

      {!selectedScenario ? (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Choose a scenario:</h3>
          <div className="grid grid-cols-1 gap-3">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => handleScenarioSelect(scenario)}
                className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 text-left shadow-sm hover:shadow-md"
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
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to scenarios
          </button>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl border border-blue-100 shadow-sm">
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
            
            <div className="flex items-center space-x-3 mb-4">
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter your answer"
                className="flex-1 p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              />
              <span className="text-gray-600 font-medium">{selectedScenario.unit}</span>
            </div>

            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={!userAnswer}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
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
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md"
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

      <div className="text-center pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-600 space-y-1 bg-blue-50 p-3 rounded-xl">
          <div className="font-bold text-blue-800 mb-1">Common Time Conversions:</div>
          <div>1 hour = 60 minutes = 3600 seconds</div>
          <div>1 day = 24 hours = 1440 minutes</div>
          <div>1 week = 7 days = 168 hours</div>
          <div>1 month ≈ 4 weeks ≈ 30 days</div>
        </div>
      </div>
    </div>
  );
};

export default TimeUnitsInteractive;

// import React, { useState } from 'react';
// import { Clock, Calendar, Sunrise, Moon, BookOpen, Bus, Home, Coffee } from 'lucide-react';

// const TimeUnitsInteractive = () => {
//   const [selectedScenario, setSelectedScenario] = useState(null);
//   const [userAnswer, setUserAnswer] = useState('');
//   const [showResult, setShowResult] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const scenarios = [
//     {
//       id: 'school',
//       title: 'School Day',
//       icon: <BookOpen className="w-6 h-6" />,
//       description: 'Zimbabwean schools typically start at 7:30 AM and end at 4:30 PM',
//       question: 'How many hours is a typical school day?',
//       calculation: '4:30 PM - 7:30 AM = 16:30 - 7:30 = 9 hours',
//       answer: 9,
//       unit: 'hours',
//       context: 'This includes lessons, breaks, and lunch time'
//     },
//     {
//       id: 'kombi',
//       title: 'Kombi Journey',
//       icon: <Bus className="w-6 h-6" />,
//       description: 'Journey from Harare to Bulawayo by kombi takes about 5.5 hours',
//       question: 'How many minutes is this journey?',
//       calculation: '5.5 hours × 60 minutes/hour = 330 minutes',
//       answer: 330,
//       unit: 'minutes',
//       context: 'The 430km journey is a common intercity route'
//     },
//     {
//       id: 'cooking',
//       title: 'Cooking Sadza',
//       icon: <Coffee className="w-6 h-6" />,
//       description: 'Making sadza takes about 45 minutes from start to finish',
//       question: 'How many seconds is this cooking time?',
//       calculation: '45 minutes × 60 seconds/minute = 2700 seconds',
//       answer: 2700,
//       unit: 'seconds',
//       context: 'This includes preparing the fire and cooking time'
//     },
//     {
//       id: 'rainfall',
//       title: 'Rainy Season',
//       icon: <Calendar className="w-6 h-6" />,
//       description: 'Zimbabwe\'s rainy season lasts from November to March',
//       question: 'How many weeks is this approximately?',
//       calculation: '5 months × 4 weeks/month = 20 weeks',
//       answer: 20,
//       unit: 'weeks',
//       context: 'This is the main agricultural season'
//     },
//     {
//       id: 'sunrise',
//       title: 'Daylight Hours',
//       icon: <Sunrise className="w-6 h-6" />,
//       description: 'In December, sunrise is at 5:30 AM, sunset at 6:30 PM',
//       question: 'How many hours of daylight is this?',
//       calculation: '6:30 PM - 5:30 AM = 18:30 - 5:30 = 13 hours',
//       answer: 13,
//       unit: 'hours',
//       context: 'Zimbabwe has long summer days'
//     },
//     {
//       id: 'work',
//       title: 'Working Week',
//       icon: <Home className="w-6 h-6" />,
//       description: 'A standard working week in Zimbabwe is 40 hours',
//       question: 'How many minutes is this?',
//       calculation: '40 hours × 60 minutes/hour = 2400 minutes',
//       answer: 2400,
//       unit: 'minutes',
//       context: 'This is spread across Monday to Friday'
//     }
//   ];

//   const handleScenarioSelect = (scenario) => {
//     setSelectedScenario(scenario);
//     setUserAnswer('');
//     setShowResult(false);
//   };

//   const handleSubmit = () => {
//     setShowResult(true);
//   };

//   const handleNext = () => {
//     const nextIndex = scenarios.findIndex(s => s.id === selectedScenario.id) + 1;
//     if (nextIndex < scenarios.length) {
//       setSelectedScenario(scenarios[nextIndex]);
//       setUserAnswer('');
//       setShowResult(false);
//     }
//   };

//   const isCorrect = userAnswer && parseFloat(userAnswer) === selectedScenario?.answer;

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 space-y-4">
//       <div className="text-center">
//         <Clock className="w-8 h-8 mx-auto mb-2 text-blue-600" />
//         <h2 className="text-xl font-bold text-gray-800">Time Units Practice</h2>
//         <p className="text-sm text-gray-600">Learn with everyday Zimbabwean scenarios</p>
//       </div>

//       {!selectedScenario ? (
//         <div className="space-y-3">
//           <h3 className="text-lg font-semibold text-gray-700">Choose a scenario:</h3>
//           <div className="grid grid-cols-1 gap-2">
//             {scenarios.map((scenario) => (
//               <button
//                 key={scenario.id}
//                 onClick={() => handleScenarioSelect(scenario)}
//                 className="flex items-center p-3 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-left"
//               >
//                 <div className="text-blue-600 mr-3">
//                   {scenario.icon}
//                 </div>
//                 <div>
//                   <div className="font-medium text-gray-800">{scenario.title}</div>
//                   <div className="text-sm text-gray-600">{scenario.description}</div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="space-y-4">
//           <button
//             onClick={() => setSelectedScenario(null)}
//             className="text-blue-600 hover:text-blue-800 text-sm"
//           >
//             ← Back to scenarios
//           </button>
          
//           <div className="bg-blue-50 p-4 rounded-lg">
//             <div className="flex items-center mb-2">
//               <div className="text-blue-600 mr-3">
//                 {selectedScenario.icon}
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800">{selectedScenario.title}</h3>
//             </div>
//             <p className="text-sm text-gray-700 mb-3">{selectedScenario.description}</p>
//             <p className="text-sm text-gray-600 italic">{selectedScenario.context}</p>
//           </div>

//           <div className="bg-gray-50 p-4 rounded-lg">
//             <h4 className="font-semibold text-gray-800 mb-2">Question:</h4>
//             <p className="text-gray-700 mb-3">{selectedScenario.question}</p>
            
//             <div className="flex items-center space-x-2">
//               <input
//                 type="number"
//                 value={userAnswer}
//                 onChange={(e) => setUserAnswer(e.target.value)}
//                 placeholder="Enter your answer"
//                 className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <span className="text-gray-600">{selectedScenario.unit}</span>
//             </div>

//             {!showResult ? (
//               <button
//                 onClick={handleSubmit}
//                 disabled={!userAnswer}
//                 className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
//               >
//                 Check Answer
//               </button>
//             ) : (
//               <div className="mt-3 space-y-3">
//                 <div className={`p-3 rounded-lg ${isCorrect ? 'bg-green-100 border border-green-400' : 'bg-red-100 border border-red-400'}`}>
//                   <div className="flex items-center mb-2">
//                     {isCorrect ? (
//                       <div className="text-green-600 font-semibold">✓ Correct!</div>
//                     ) : (
//                       <div className="text-red-600 font-semibold">✗ Incorrect</div>
//                     )}
//                   </div>
//                   <div className="text-sm text-gray-700">
//                     <strong>Answer:</strong> {selectedScenario.answer} {selectedScenario.unit}
//                   </div>
//                 </div>

//                 <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
//                   <h5 className="font-medium text-gray-800 mb-1">Solution:</h5>
//                   <p className="text-sm text-gray-700">{selectedScenario.calculation}</p>
//                 </div>

//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => {
//                       setUserAnswer('');
//                       setShowResult(false);
//                     }}
//                     className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
//                   >
//                     Try Again
//                   </button>
//                   {scenarios.findIndex(s => s.id === selectedScenario.id) < scenarios.length - 1 && (
//                     <button
//                       onClick={handleNext}
//                       className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       Next Scenario
//                     </button>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="text-center">
//         <div className="text-xs text-gray-500 space-y-1">
//           <div>Common Time Conversions:</div>
//           <div>1 hour = 60 minutes = 3600 seconds</div>
//           <div>1 day = 24 hours = 1440 minutes</div>
//           <div>1 week = 7 days = 168 hours</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeUnitsInteractive;