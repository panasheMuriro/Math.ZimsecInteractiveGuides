// import React, { useState } from 'react';
// import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Rectangle } from 'recharts';
// import { InlineMath } from 'react-katex';
// import 'katex/dist/katex.min.css';

// interface QuizQuestion {
//   type: 'Ungrouped' | 'Grouped';
//   context: string;
//   data: DataPoint[];
//   questionType: 'Q1' | 'Q3' | 'IQR' | 'Outliers';
//   correctAnswer: number | number[];
//   steps: string[];
// }

// interface DataPoint {
//   value?: number; // For ungrouped data
//   class?: string; // For grouped data
//   frequency?: number;
//   lowerBoundary?: number;
//   classWidth?: number;
//   cumulativeFrequency?: number;
// }

// const QuartileIQRQuiz: React.FC = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [userAnswer, setUserAnswer] = useState('');
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [showSteps, setShowSteps] = useState(false);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

//   const questions: QuizQuestion[] = [
//     {
//       type: 'Ungrouped',
//       context: 'Test scores of 9 students',
//       data: [{ value: 60 }, { value: 65 }, { value: 70 }, { value: 75 }, { value: 80 }, { value: 85 }, { value: 90 }, { value: 95 }, { value: 100 }],
//       questionType: 'Q1',
//       correctAnswer: 65,
//       steps: [
//         '\\text{List values in order: } 60,\\ 65,\\ 70,\\ 75,\\ 80,\\ 85,\\ 90,\\ 95,\\ 100',
//         '\\text{Number of values (n): } 9',
//         '\\text{Q_1 position} = \\frac{n+1}{4} = \\frac{9+1}{4} = 2.5',
//         '\\text{Q_1 is between 2nd and 3rd values (65 and 70). Interpolate: } Q_1 = 65 + 0.5 \\times (70 - 65) = 65',
//       ],
//     },
//     {
//       type: 'Ungrouped',
//       context: 'Daily sales ($)',
//       data: [{ value: 200 }, { value: 250 }, { value: 300 }, { value: 350 }, { value: 400 }, { value: 450 }, { value: 500 }, { value: 600 }],
//       questionType: 'IQR',
//       correctAnswer: 225,
//       steps: [
//         '\\text{List values in order: } 200,\\ 250,\\ 300,\\ 350,\\ 400,\\ 450,\\ 500,\\ 600',
//         '\\text{Number of values (n): } 8',
//         '\\text{Q_1 position} = \\frac{n+1}{4} = \\frac{8+1}{4} = 2.25',
//         '\\text{Q_1 is between 2nd and 3rd values (250 and 300). Interpolate: } Q_1 = 250 + 0.25 \\times (300 - 250) = 262.5',
//         '\\text{Q_3 position} = \\frac{3(n+1)}{4} = \\frac{3(8+1)}{4} = 6.75',
//         '\\text{Q_3 is between 6th and 7th values (450 and 500). Interpolate: } Q_3 = 450 + 0.75 \\times (500 - 450) = 487.5',
//         '\\text{IQR} = Q_3 - Q_1 = 487.5 - 262.5 = 225',
//       ],
//     },
//     {
//       type: 'Grouped',
//       context: 'Ages of participants in a survey',
//       data: [
//         { class: '20-30', frequency: 10, lowerBoundary: 20, classWidth: 10, cumulativeFrequency: 0 },
//         { class: '30-40', frequency: 15, lowerBoundary: 30, classWidth: 10, cumulativeFrequency: 10 },
//         { class: '40-50', frequency: 20, lowerBoundary: 40, classWidth: 10, cumulativeFrequency: 25 },
//         { class: '50-60', frequency: 5, lowerBoundary: 50, classWidth: 10, cumulativeFrequency: 45 },
//       ],
//       questionType: 'Q3',
//       correctAnswer: 46,
//       steps: [
//         '\\text{Total frequency (n): } 10 + 15 + 20 + 5 = 50',
//         '\\text{Q_3 position} = \\frac{3n}{4} = \\frac{3 \\times 50}{4} = 37.5',
//         '\\text{Q_3 lies in class 40-50 (cumulative frequency up to 30-40 is 25, next class has 20)}',
//         '\\text{L = 40, f = 20, CF = 25, h = 10}',
//         '\\text{Q_3} = L + \\frac{\\frac{3n}{4} - CF}{f} \\times h = 40 + \\frac{37.5 - 25}{20} \\times 10 = 40 + 6.25 = 46',
//       ],
//     },
//     {
//       type: 'Ungrouped',
//       context: 'Processing times (ms) of a system',
//       data: [{ value: 10 }, { value: 12 }, { value: 15 }, { value: 15 }, { value: 16 }, { value: 20 }, { value: 30 }, { value: 50 }],
//       questionType: 'Outliers',
//       correctAnswer: [50],
//       steps: [
//         '\\text{List values in order: } 10,\\ 12,\\ 15,\\ 15,\\ 16,\\ 20,\\ 30,\\ 50',
//         '\\text{Number of values (n): } 8',
//         '\\text{Q_1 position} = \\frac{n+1}{4} = \\frac{8+1}{4} = 2.25',
//         '\\text{Q_1 is between 2nd and 3rd values (12 and 15). Interpolate: } Q_1 = 12 + 0.25 \\times (15 - 12) = 12.75',
//         '\\text{Q_3 position} = \\frac{3(n+1)}{4} = \\frac{3(8+1)}{4} = 6.75',
//         '\\text{Q_3 is between 6th and 7th values (20 and 30). Interpolate: } Q_3 = 20 + 0.75 \\times (30 - 20) = 27.5',
//         '\\text{IQR} = Q_3 - Q_1 = 27.5 - 12.75 = 14.75',
//         '\\text{Lower bound} = Q_1 - 1.5 \\times IQR = 12.75 - 1.5 \\times 14.75 = -9.375',
//         '\\text{Upper bound} = Q_3 + 1.5 \\times IQR = 27.5 + 1.5 \\times 14.75 = 49.625',
//         '\\text{Outliers: Values } < -9.375 \\text{ or } > 49.625. \\text{ Only 50 is an outlier}',
//       ],
//     },
//   ];

//   const handleAnswer = () => {
//     const userValue = userAnswer.split(',').map((val) => parseFloat(val.trim()));
//     const correctAnswer = questions[currentQuestion].correctAnswer;
//     const tolerance = 0.1; // Allow small rounding differences
//     let isAnswerCorrect = false;

//     if (Array.isArray(correctAnswer)) {
//       isAnswerCorrect =
//         userValue.length === correctAnswer.length &&
//         userValue.every((val) => !isNaN(val) && correctAnswer.some((ans) => Math.abs(val - ans) <= tolerance));
//     } else {
//       isAnswerCorrect = !isNaN(userValue[0]) && Math.abs(userValue[0] - correctAnswer) <= tolerance;
//     }

//     setIsCorrect(isAnswerCorrect);
//     if (isAnswerCorrect) setScore(score + 1);
//   };

//   const nextQuestion = () => {
//     setShowSteps(false);
//     setCurrentStep(0);
//     setUserAnswer('');
//     setIsCorrect(null);
//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const handleShowSteps = () => {
//     setShowSteps(true);
//     setCurrentStep(1);
//   };

//   const handleNextStep = () => {
//     if (currentStep < questions[currentQuestion].steps.length) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const resetQuiz = () => {
//     setCurrentQuestion(0);
//     setScore(0);
//     setShowResult(false);
//     setShowSteps(false);
//     setCurrentStep(0);
//     setUserAnswer('');
//     setIsCorrect(null);
//   };

//   const renderTable = (data: DataPoint[]) => {
//     if (questions[currentQuestion].type === 'Ungrouped') {
//       return (
//         <table className="w-full text-sm text-left text-gray-700 mt-4">
//           <thead className="text-xs uppercase bg-blue-500 text-white">
//             <tr>
//               <th className="py-3 px-4">Value</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, index) => (
//               <tr key={index} className="bg-white border-b">
//                 <td className="py-3 px-4">{row.value}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     } else {
//       return (
//         <table className="w-full text-sm text-left text-gray-700 mt-4">
//           <thead className="text-xs uppercase bg-blue-500 text-white">
//             <tr>
//               <th className="py-3 px-4">Class</th>
//               <th className="py-3 px-4">Frequency</th>
//               <th className="py-3 px-4">Cumulative Frequency</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, index) => (
//               <tr key={index} className="bg-white border-b">
//                 <td className="py-3 px-4">{row.class}</td>
//                 <td className="py-3 px-4">{row.frequency}</td>
//                 <td className="py-3 px-4">{row.cumulativeFrequency! + (row.frequency || 0)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     }
//   };

//   const renderBoxPlot = (data: DataPoint[]) => {
//     if (questions[currentQuestion].type === 'Ungrouped') {
//       const values = data.map((d) => d.value!).sort((a, b) => a - b);
//       const n = values.length;
//       const q1Pos = (n + 1) / 4;
//       const q3Pos = (3 * (n + 1)) / 4;
//       const q1 = values[Math.floor(q1Pos) - 1] + (q1Pos % 1) * (values[Math.ceil(q1Pos) - 1] - values[Math.floor(q1Pos) - 1] || 0);
//       const q3 = values[Math.floor(q3Pos) - 1] + (q3Pos % 1) * (values[Math.ceil(q3Pos) - 1] - values[Math.floor(q3Pos) - 1] || 0);
//       const iqr = q3 - q1;
//       const lowerWhisker = Math.max(values[0], q1 - 1.5 * iqr);
//       const upperWhisker = Math.min(values[n - 1], q3 + 1.5 * iqr);
//       const outliers = values.filter((v) => v < q1 - 1.5 * iqr || v > q3 + 1.5 * iqr);
//       const median = values[Math.floor((n + 1) / 2) - 1] + ((n + 1) / 2 % 1) * (values[Math.ceil((n + 1) / 2) - 1] - values[Math.floor((n + 1) / 2) - 1] || 0);

//       const boxPlotData = [{ name: 'Data', min: lowerWhisker, q1, median, q3, max: upperWhisker }];
//       const outlierData = outliers.map((value) => ({ name: 'Data', value }));

//       return (
//         <ScatterChart width={360} height={250} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis type="category" dataKey="name" allowDuplicatedCategory={false} />
//           <YAxis type="number" domain={[Math.min(...values) - 10, Math.max(...values) + 10]} />
//           <Tooltip />
//           <Legend />
//           <Line type="linear" dataKey="min" data={boxPlotData} stroke="#8884d8" strokeWidth={2} dot={false} activeDot={false} />
//           <Line type="linear" dataKey="q1" data={boxPlotData} stroke="#8884d8" strokeWidth={2} dot={false} activeDot={false} />
//           <Rectangle x={180 - 20} y={boxPlotData[0].q1} width={40} height={boxPlotData[0].q3 - boxPlotData[0].q1} fill="#8884d8" fillOpacity={0.5} />
//           <Line type="linear" dataKey="median" data={boxPlotData} stroke="#ff7300" strokeWidth={2} dot={false} activeDot={false} />
//           <Line type="linear" dataKey="q3" data={boxPlotData} stroke="#8884d8" strokeWidth={2} dot={false} activeDot={false} />
//           <Line type="linear" dataKey="max" data={boxPlotData} stroke="#8884d8" strokeWidth={2} dot={false} activeDot={false} />
//           <Line
//             type="linear"
//             data={[{ name: 'Data', x: 180 - 10, y: boxPlotData[0].min }, { name: 'Data', x: 180 + 10, y: boxPlotData[0].min }]}
//             stroke="#8884d8"
//             strokeWidth={2}
//             dot={false}
//             activeDot={false}
//           />
//           <Line
//             type="linear"
//             data={[{ name: 'Data', x: 180 - 10, y: boxPlotData[0].max }, { name: 'Data', x: 180 + 10, y: boxPlotData[0].max }]}
//             stroke="#8884d8"
//             strokeWidth={2}
//             dot={false}
//             activeDot={false}
//           />
//           <Scatter name="Outliers" data={outlierData} dataKey="value" fill="#ff0000" shape="star" />
//         </ScatterChart>
//       );
//     } else {
//       const freqData = data.map((row) => ({
//         name: row.class,
//         frequency: row.frequency,
//       }));
//       return (
//         <ScatterChart width={360} height={250} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Scatter name="Frequency" data={freqData} dataKey="frequency" fill="#8884d8" shape="square" />
//         </ScatterChart>
//       );
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-gray-100 min-h-screen flex flex-col font-sans">
//       {showResult ? (
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4 text-blue-600">Quiz Completed!</h2>
//           <p className="text-lg mb-4">
//             Your Score: {score} out of {questions.length}
//           </p>
//           <button
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
//             onClick={resetQuiz}
//           >
//             Try Again
//           </button>
//         </div>
//       ) : (
//         <div>
//           <h2 className="text-xl font-semibold mb-4 text-blue-600">
//             Question {currentQuestion + 1} of {questions.length}
//           </h2>
//           <p className="text-lg mb-4">
//             Calculate the {questions[currentQuestion].questionType === 'Q1' ? 'first quartile (Q₁)' : 
//                            questions[currentQuestion].questionType === 'Q3' ? 'third quartile (Q₃)' : 
//                            questions[currentQuestion].questionType === 'IQR' ? 'interquartile range (IQR)' : 
//                            'outlier(s)'} for the following dataset:
//           </p>
//           <p className="text-sm mb-4">
//             <strong>Context:</strong> {questions[currentQuestion].context}
//           </p>
//           <div className="overflow-x-auto">{renderTable(questions[currentQuestion].data)}</div>
//           <div className="flex justify-center mt-4">{renderBoxPlot(questions[currentQuestion].data)}</div>
//           <div className="mt-4">
//             {!showSteps && (
//               <button
//                 className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition mb-4"
//                 onClick={handleShowSteps}
//               >
//                 Show Steps
//               </button>
//             )}
//             {showSteps && (
//               <div className="mb-4 max-w-full overflow-hidden">
//                 <p className="text-sm font-medium text-gray-700">Calculation Steps:</p>
//                 <ul className="list-disc list-inside text-sm text-gray-700 break-words">
//                   {questions[currentQuestion].steps.slice(0, currentStep).map((step, index) => (
//                     <li key={index} className="overflow-wrap break-word py-1">
//                       <InlineMath math={step} />
//                     </li>
//                   ))}
//                 </ul>
//                 {currentStep < questions[currentQuestion].steps.length && (
//                   <button
//                     className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition mt-2"
//                     onClick={handleNextStep}
//                   >
//                     Next Step
//                   </button>
//                 )}
//               </div>
//             )}
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Enter the {questions[currentQuestion].questionType === 'Q1' ? 'Q₁' : 
//                           questions[currentQuestion].questionType === 'Q3' ? 'Q₃' : 
//                           questions[currentQuestion].questionType === 'IQR' ? 'IQR' : 
//                           'outlier(s) (comma-separated if multiple)'} (to 1 decimal place):
//             </label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded-lg mb-4"
//               value={userAnswer}
//               onChange={(e) => setUserAnswer(e.target.value)}
//               disabled={isCorrect !== null}
//             />
//             {isCorrect === null && (
//               <button
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
//                 onClick={handleAnswer}
//                 disabled={!userAnswer}
//               >
//                 Submit Answer
//               </button>
//             )}
//           </div>
//           {isCorrect !== null && (
//             <div className="mt-4">
//               <p className={`text-lg font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
//                 {isCorrect
//                   ? 'Correct!'
//                   : `Incorrect. Correct answer: ${
//                       Array.isArray(questions[currentQuestion].correctAnswer)
//                         ? questions[currentQuestion].correctAnswer.map((v) => v.toFixed(1)).join(', ')
//                         : questions[currentQuestion].correctAnswer.toFixed(1)
//                     }`}
//               </p>
//               <button
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition mt-4"
//                 onClick={nextQuestion}
//               >
//                 {currentQuestion + 1 < questions.length ? 'Next Question' : 'See Results'}
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuartileIQRQuiz;


import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, XCircle, BarChart3, Calculator, Eye, RefreshCw } from 'lucide-react';

interface QuizStep {
  id: number;
  title: string;
  concept: string;
  question: string;
  options?: string[];
  correctAnswer: number | string;
  explanation: string;
  formula?: string;
  example?: string;
  interactive?: boolean;
}

const QuartilesIQRQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [userInput, setUserInput] = useState('');
  const [dataset] = useState([12, 15, 18, 20, 22, 25, 28, 30, 35, 40]);

  const steps: QuizStep[] = [
    {
      id: 0,
      title: "Understanding Quartiles",
      concept: "Quartiles divide ordered data into four equal parts",
      question: "What percentage of data falls below the first quartile (Q₁)?",
      options: ["25%", "50%", "75%", "100%"],
      correctAnswer: 0,
      explanation: "Q₁ (First Quartile) has 25% of data below it. This is why it's called the 25th percentile."
    },
    {
      id: 1,
      title: "Quartile Positions",
      concept: "Q₁ = 25th percentile, Q₂ = 50th percentile (Median), Q₃ = 75th percentile",
      question: "Which quartile represents the median of the dataset?",
      options: ["Q₁", "Q₂", "Q₃", "Q₄"],
      correctAnswer: 1,
      explanation: "Q₂ is the second quartile, which is the median. It has 50% of data below it.",
      formula: "Q₂ = Median (50th percentile)"
    },
    {
      id: 2,
      title: "Position Formula (Ungrouped Data)",
      concept: "For ungrouped data, we use position formulas to locate quartiles",
      question: "For a dataset with n=20 values, what is the position of Q₁?",
      options: ["5.25", "10.5", "15.75", "21"],
      correctAnswer: 0,
      explanation: "Using Q₁ position = (n+1)/4 = (20+1)/4 = 21/4 = 5.25",
      formula: "Q₁ position = (n+1)/4",
      example: "For n=20: Q₁ position = (20+1)/4 = 5.25"
    },
    {
      id: 3,
      title: "Interactive Calculation",
      concept: "Let's calculate Q₁ for our dataset: [12, 15, 18, 20, 22, 25, 28, 30, 35, 40]",
      question: "Calculate Q₁ position for n=10. Enter your answer:",
      correctAnswer: "2.75",
      explanation: "Q₁ position = (n+1)/4 = (10+1)/4 = 11/4 = 2.75. Since this is between positions 2 and 3, we interpolate between the 2nd (15) and 3rd (18) values.",
      interactive: true,
      formula: "Q₁ position = (10+1)/4 = 2.75"
    },
    {
      id: 4,
      title: "Interpolation",
      concept: "When position is not a whole number, we interpolate between adjacent values",
      question: "Given Q₁ position = 2.75, and the 2nd value is 15, 3rd value is 18, what is Q₁?",
      options: ["15.0", "16.5", "17.25", "18.0"],
      correctAnswer: 2,
      explanation: "Q₁ = 15 + 0.75 × (18-15) = 15 + 0.75 × 3 = 15 + 2.25 = 17.25",
      formula: "Q₁ = Value₂ + (0.75) × (Value₃ - Value₂)"
    },
    {
      id: 5,
      title: "Q₃ Calculation",
      concept: "Third quartile follows similar logic with 3(n+1)/4",
      question: "For our dataset (n=10), what is the position of Q₃?",
      correctAnswer: "8.25",
      explanation: "Q₃ position = 3(n+1)/4 = 3(10+1)/4 = 33/4 = 8.25",
      interactive: true,
      formula: "Q₃ position = 3(n+1)/4 = 3(11)/4 = 8.25"
    },
    {
      id: 6,
      title: "IQR Calculation",
      concept: "Interquartile Range measures the spread of the middle 50% of data",
      question: "If Q₁ = 17.25 and Q₃ = 32.25, what is the IQR?",
      correctAnswer: "15",
      explanation: "IQR = Q₃ - Q₁ = 32.25 - 17.25 = 15.00. This means the middle 50% of data spans 15 units.",
      interactive: true,
      formula: "IQR = Q₃ - Q₁"
    },
    {
      id: 7,
      title: "Outlier Detection",
      concept: "Values beyond Q₁ - 1.5×IQR or Q₃ + 1.5×IQR are potential outliers",
      question: "With Q₁=17.25, Q₃=32.25, IQR=15, what is the upper fence for outliers?",
      options: ["47.25", "54.75", "39.75", "25.5"],
      correctAnswer: 0,
      explanation: "Upper fence = Q₃ + 1.5×IQR = 32.25 + 1.5×15 = 32.25 + 22.5 = 54.75",
      formula: "Upper fence = Q₃ + 1.5 × IQR"
    },
    {
      id: 8,
      title: "Grouped Data Formula",
      concept: "For grouped data, we use a different interpolation formula",
      question: "In the grouped data formula Q₁ = L + ((n/4 - CF)/f) × h, what does 'L' represent?",
      options: ["Lower boundary of Q₁ class", "Length of interval", "Last value", "Linear interpolation"],
      correctAnswer: 0,
      explanation: "L is the lower boundary of the class containing Q₁. This is the starting point for interpolation.",
      formula: "Q₁ = L + ((n/4 - CF)/f) × h"
    }
  ];

  const handleAnswer = (answer: number | string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    const isCorrect = answer === steps[currentStep].correctAnswer;
    if (isCorrect && !completedSteps.has(currentStep)) {
      setScore(score + 1);
      setCompletedSteps(new Set([...completedSteps, currentStep]));
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setUserInput('');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setUserInput('');
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setCompletedSteps(new Set());
    setUserInput('');
  };

  const currentStepData = steps[currentStep];
  const isCorrect = selectedAnswer === currentStepData.correctAnswer;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-lg font-bold">Quartiles & IQR</h1>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm">{score}/{steps.length}</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs mt-1 opacity-90">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Step Title & Concept */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h2 className="font-bold text-gray-800 mb-2">{currentStepData.title}</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{currentStepData.concept}</p>
          
          {/* Formula Display */}
          {currentStepData.formula && (
            <div className="mt-3 bg-white rounded p-3 border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-1">
                <Calculator className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-blue-600">FORMULA</span>
              </div>
              <code className="text-sm text-gray-700">{currentStepData.formula}</code>
            </div>
          )}

          {/* Example */}
          {currentStepData.example && (
            <div className="mt-2 text-xs text-gray-500 italic">
              Example: {currentStepData.example}
            </div>
          )}
        </div>

        {/* Dataset Display for Interactive Steps */}
        {currentStep >= 3 && currentStep <= 6 && (
          <div className="bg-green-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Dataset</span>
            </div>
            <div className="text-sm text-gray-700">
              [{dataset.join(', ')}]
            </div>
            <div className="text-xs text-gray-500 mt-1">n = {dataset.length}</div>
          </div>
        )}

        {/* Question */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-3">{currentStepData.question}</h3>

          {/* Interactive Input */}
          {currentStepData.interactive ? (
            <div className="space-y-3">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter your answer..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => handleAnswer(userInput)}
                disabled={!userInput.trim()}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
              >
                Submit Answer
              </button>
            </div>
          ) : (
            /* Multiple Choice Options */
            <div className="space-y-2">
              {currentStepData.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showFeedback}
                  className={`w-full p-3 text-left rounded-lg border transition-all ${
                    showFeedback
                      ? selectedAnswer === index
                        ? isCorrect
                          ? 'bg-green-100 border-green-500 text-green-800'
                          : 'bg-red-100 border-red-500 text-red-800'
                        : index === currentStepData.correctAnswer
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : 'bg-gray-100 border-gray-300'
                      : 'bg-white border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showFeedback && (
                      <>
                        {selectedAnswer === index && (
                          isCorrect ? <CheckCircle className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-600" />
                        )}
                        {selectedAnswer !== index && index === currentStepData.correctAnswer && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`rounded-lg p-4 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'} border`}>
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              )}
              <div>
                <h4 className={`font-medium ${isCorrect ? 'text-green-800' : 'text-orange-800'} mb-1`}>
                  {isCorrect ? 'Correct!' : 'Not quite right'}
                </h4>
                <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-orange-700'} leading-relaxed`}>
                  {currentStepData.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className=" bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 p-4">
        <div className="flex gap-3">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </button>
          
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {currentStep === steps.length - 1 && (
            <button
              onClick={resetQuiz}
              className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
     
    </div>
  );
};

export default QuartilesIQRQuiz;