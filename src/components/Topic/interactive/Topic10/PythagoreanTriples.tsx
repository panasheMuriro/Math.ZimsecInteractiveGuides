// import React, { useState, useEffect } from 'react';
// import { InlineMath } from 'react-katex';

// const PythagoreanTriples: React.FC = () => {
//   const [triple, setTriple] = useState<{ a: number; b: number; c: number } | null>(null);
//   const [error, setError] = useState<string>('');
//   const [result, setResult] = useState<string>('');
//   const [step, setStep] = useState<number>(0);
//   const [showSteps, setShowSteps] = useState<boolean>(false);
//   const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
//   const [mode, setMode] = useState<'verify' | 'generate'>('verify');

//   // Initialize with a random triple or generate one
//   useEffect(() => {
//     if (mode === 'verify') {
//       const triples = [[3, 4, 5], [5, 12, 13], [7, 24, 25], [2, 3, 4]];
//       const randomTriple = triples[Math.floor(Math.random() * triples.length)];
//       setTriple({ a: randomTriple[0], b: randomTriple[1], c: randomTriple[2] });
//     } else {
//       const m = Math.floor(Math.random() * 5) + 2;
//       const n = Math.floor(Math.random() * (m - 1)) + 1;
//       const a = m * m - n * n;
//       const b = 2 * m * n;
//       const c = m * m + n * n;
//       setTriple({ a, b, c });
//     }
//     setStep(0);
//     setUserAnswer(null);
//     setError('');
//     setResult('');
//   }, [mode]);

//   const handleInputChange = (value: string) => {
//     const boolValue = value.toLowerCase() === 'true';
//     setUserAnswer(boolValue);
//     setError('');
//   };

//   const nextStep = () => {
//     setStep(prev => prev + 1);
//     setError('');
//     setResult('');
//   };

//   const checkAnswer = () => {
//     if (!triple || userAnswer === null) {
//       setError('Please provide an answer');
//       return;
//     }
//     const { a, b, c } = triple;
//     const isPythagorean = a * a + b * b === c * c;
//     if (mode === 'verify') {
//       if (userAnswer === isPythagorean) {
//         setResult('Correct! Well done!');
//       } else {
//         setError(`Incorrect. ${a}^2 + ${b}^2 = ${a * a + b * b}, which ${isPythagorean ? 'is' : 'is not'} equal to ${c}^2 = ${c * c}.`);
//       }
//     } else {
//       setResult(`Generated triple: (${a}, ${b}, ${c}) is Pythagorean.`);
//     }
//     setStep(0);
//     setUserAnswer(null);
//   };

//   // Quiz steps
//   const getSteps = () => {
//     const { a, b, c } = triple || { a: 0, b: 0, c: 0 };
//     if (mode === 'verify') {
//       return [
//         `Identify the triple: (${a}, ${b}, ${c}).`,
//         <InlineMath key="step1" math={`${a}^2 + ${b}^2 = ${a * a} + ${b * b}`} />,
//         <InlineMath key="step2" math={`${c}^2 = ${c * c}`} />,
//         <InlineMath key="step3" math={`${a}^2 + ${b}^2 ${a * a + b * b === c * c ? '=' : '\neq'} ${c}^2`} />,
//         `Conclusion: This triple ${a * a + b * b === c * c ? 'is' : 'is not'} Pythagorean.`
//       ];
//     } else {
//       const m = Math.floor(Math.sqrt((c + a) / 2));
//       const n = Math.floor((c - a) / (2 * m));
//       return [
//         `Choose integers m > n > 0 (e.g., m = ${m}, n = ${n}).`,
//         <InlineMath key="step1" math={`a = m^2 - n^2 = ${m}^2 - ${n}^2 = ${m * m - n * n}`} />,
//         <InlineMath key="step2" math={`b = 2mn = 2 \\cdot ${m} \\cdot ${n} = ${2 * m * n}`} />,
//         <InlineMath key="step3" math={`c = m^2 + n^2 = ${m}^2 + ${n}^2 = ${m * m + n * n}`} />,
//         `Resulting triple: (${a}, ${b}, ${c}).`
//       ];
//     }
//   };

//   const steps = getSteps();
//   const currentQuestion = 
//     mode === 'verify' ? `Is (${triple?.a}, ${triple?.b}, ${triple?.c}) a Pythagorean triple? (true/false)` :
//     `Generate a Pythagorean triple using the formula.`;

//   return (
//     <div className="max-w-md mx-auto p-4 bg-gray-50 min-h-screen font-sans">
//       <h1 className="text-2xl font-bold text-center mb-4">Pythagorean Triples</h1>
      
//       {/* Mode Switch */}
//       <div className="mb-4">
//         <button
//           onClick={() => { setMode('verify'); setTriple(null); }}
//           className={`w-1/2 bg-${mode === 'verify' ? 'green' : 'gray'}-500 text-white py-2 px-4 rounded-l-md hover:bg-${mode === 'verify' ? 'green' : 'blue'}-600 transition`}
//         >
//           Verify
//         </button>
//         <button
//           onClick={() => { setMode('generate'); setTriple(null); }}
//           className={`w-1/2 bg-${mode === 'generate' ? 'green' : 'gray'}-500 text-white py-2 px-4 rounded-r-md hover:bg-${mode === 'generate' ? 'green' : 'blue'}-600 transition`}
//         >
//           Generate
//         </button>
//       </div>

//       {/* Theorem Explanation */}
//       <div className="bg-white p-4 rounded-lg shadow mb-6">
//         <h2 className="text-lg font-semibold mb-2">Definition</h2>
//         <p className="text-sm text-gray-700 mb-2">
//           A set of three positive integers (a, b, c) satisfying <InlineMath math="a^2 + b^2 = c^2" />.
//           Examples: (3, 4, 5), (5, 12, 13), (7, 24, 25).
//         </p>
      
//       </div>

//       {/* Quiz Question */}
//       <div className="bg-white p-4 rounded-lg shadow mb-6">
//         <h2 className="text-lg font-semibold mb-2">Question</h2>
//         <p className="text-sm text-gray-700 mb-2">{currentQuestion}</p>
//         {mode === 'verify' && (
//           <input
//             type="text"
//             value={userAnswer === null ? '' : userAnswer.toString()}
//             onChange={(e) => handleInputChange(e.target.value)}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
//             placeholder="Enter true or false"
//           />
//         )}
//         <button
//           onClick={checkAnswer}
//           className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
//         >
//           Submit Answer
//         </button>
//       </div>

//       {/* Steps Button and Display */}
//       <div className="mb-6">
//         <button
//           onClick={() => setShowSteps(!showSteps)}
//           className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
//         >
//           {showSteps ? 'Hide Steps' : 'Need Help?'}
//         </button>
//         {showSteps && (
//           <div className="mt-4 bg-white p-4 rounded-lg shadow">
//             <ol className="list-decimal list-inside text-sm text-gray-700">
//               {steps.slice(0, step + 1).map((stepContent, index) => (
//                 <li key={index} className="mb-2">{stepContent}</li>
//               ))}
//             </ol>
//             <button
//               onClick={nextStep}
//               className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
//               disabled={step >= steps.length - 1}
//             >
//               Next Step
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Result and Error */}
//       {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//       {result && <p className="text-green-500 text-sm mb-4">{result}</p>}
//     </div>
//   );
// };

// export default PythagoreanTriples;

import React, { useState, useEffect } from 'react';
import { InlineMath } from 'react-katex';

const PythagoreanTriples: React.FC = () => {
  const [triple, setTriple] = useState<{ a: number; b: number; c: number } | null>(null);
  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [step, setStep] = useState<number>(0);
  const [showSteps, setShowSteps] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [mode, setMode] = useState<'verify' | 'generate'>('verify');

  // Initialize with a random triple or generate one
  useEffect(() => {
    if (mode === 'verify') {
      const triples = [[3, 4, 5], [5, 12, 13], [7, 24, 25], [2, 3, 4]];
      const randomTriple = triples[Math.floor(Math.random() * triples.length)];
      setTriple({ a: randomTriple[0], b: randomTriple[1], c: randomTriple[2] });
    } else {
      const m = Math.floor(Math.random() * 5) + 2;
      const n = Math.floor(Math.random() * (m - 1)) + 1;
      const a = m * m - n * n;
      const b = 2 * m * n;
      const c = m * m + n * n;
      setTriple({ a, b, c });
    }
    setStep(0);
    setUserAnswer(null);
    setError('');
    setResult('');
  }, [mode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setUserAnswer(value === 'true');
    setError('');
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
    setError('');
    setResult('');
  };

  const checkAnswer = () => {
    if (!triple || userAnswer === null) {
      setError('Please provide an answer');
      return;
    }
    const { a, b, c } = triple;
    const isPythagorean = a * a + b * b === c * c;
    if (mode === 'verify') {
      if (userAnswer === isPythagorean) {
        setResult('Correct! Well done!');
      } else {
        setError(`Incorrect. ${a}^2 + ${b}^2 = ${a * a + b * b}, which ${isPythagorean ? 'is' : 'is not'} equal to ${c}^2 = ${c * c}.`);
      }
    } else {
      setResult(`Generated triple: (${a}, ${b}, ${c}) is Pythagorean.`);
    }
    setStep(0);
    setUserAnswer(null);
  };

  // Quiz steps
  const getSteps = () => {
    const { a, b, c } = triple || { a: 0, b: 0, c: 0 };
    if (mode === 'verify') {
      return [
        `Identify the triple: (${a}, ${b}, ${c}).`,
        <InlineMath key="step1" math={`${a}^2 + ${b}^2 = ${a * a} + ${b * b}`} />,
        <InlineMath key="step2" math={`${c}^2 = ${c * c}`} />,
        <InlineMath key="step3" math={`${a}^2 + ${b}^2 ${a * a + b * b === c * c ? '=' : '\neq'} ${c}^2`} />,
        `Conclusion: This triple ${a * a + b * b === c * c ? 'is' : 'is not'} Pythagorean.`
      ];
    } else {
      const m = Math.floor(Math.sqrt((c + a) / 2));
      const n = Math.floor((c - a) / (2 * m));
      return [
        `Choose integers m > n > 0 (e.g., m = ${m}, n = ${n}).`,
        <InlineMath key="step1" math={`a = m^2 - n^2 = ${m}^2 - ${n}^2 = ${m * m - n * n}`} />,
        <InlineMath key="step2" math={`b = 2mn = 2 \\cdot ${m} \\cdot ${n} = ${2 * m * n}`} />,
        <InlineMath key="step3" math={`c = m^2 + n^2 = ${m}^2 + ${n}^2 = ${m * m + n * n}`} />,
        `Resulting triple: (${a}, ${b}, ${c}).`
      ];
    }
  };

  const steps = getSteps();
  const currentQuestion = 
    mode === 'verify' ? `Is (${triple?.a}, ${triple?.b}, ${triple?.c}) a Pythagorean triple?` :
    `Generate a Pythagorean triple using the formula.`;

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 font-sans">
      <h1 className="text-2xl font-bold text-center mb-4">Pythagorean Triples</h1>
      
      {/* Mode Switch */}
      <div className="mb-4">
        <button
          onClick={() => { setMode('verify'); setTriple(null); }}
          className={`w-1/2 bg-${mode === 'verify' ? 'green' : 'gray'}-500 text-white py-2 px-4 rounded-l-md hover:bg-${mode === 'verify' ? 'green' : 'blue'}-600 transition`}
        >
          Verify
        </button>
        <button
          onClick={() => { setMode('generate'); setTriple(null); }}
          className={`w-1/2 bg-${mode === 'generate' ? 'green' : 'gray'}-500 text-white py-2 px-4 rounded-r-md hover:bg-${mode === 'generate' ? 'green' : 'blue'}-600 transition`}
        >
          Generate
        </button>
      </div>

      {/* Theorem Explanation */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Definition</h2>
        <p className="text-sm text-gray-700 mb-2">
          A set of three positive integers (a, b, c) satisfying <InlineMath math="a^2 + b^2 = c^2" />.
          Examples: (3, 4, 5), (5, 12, 13), (7, 24, 25).
        </p>
      </div>

      {/* Quiz Question */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Question</h2>
        <p className="text-sm text-gray-700 mb-2">{currentQuestion}</p>
        {mode === 'verify' && (
          <select
            value={userAnswer === null ? '' : userAnswer.toString()}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
          >
            <option value="" disabled>Select an answer</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        )}
        <button
          onClick={checkAnswer}
          className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          Submit Answer
        </button>
      </div>

            {/* Result and Error */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {result && <p className="text-green-500 text-sm mb-4">{result}</p>}

      {/* Steps Button and Display */}
      <div className="mb-6">
        <button
          onClick={() => setShowSteps(!showSteps)}
          className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
        >
          {showSteps ? 'Hide Steps' : 'Need Help?'}
        </button>
        {showSteps && (
          <div className="mt-4 bg-white p-4 rounded-lg shadow">
            <ol className="list-decimal list-inside text-sm text-gray-700">
              {steps.slice(0, step + 1).map((stepContent, index) => (
                <li key={index} className="mb-2">{stepContent}</li>
              ))}
            </ol>
            <button
              onClick={nextStep}
              className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              disabled={step >= steps.length - 1}
            >
              Next Step
            </button>
          </div>
        )}
      </div>


    </div>
  );
};

export default PythagoreanTriples;