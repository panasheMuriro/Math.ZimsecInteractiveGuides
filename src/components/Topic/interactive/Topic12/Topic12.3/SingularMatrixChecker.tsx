// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import { BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';

// const SingularMatrixChecker: React.FC = () => {
//   const [checkMatrix, setCheckMatrix] = useState<number[][]>([[1, 2], [3, 4]]);
//   const [findKMatrix, setFindKMatrix] = useState<(number | string)[][]>([[1, 'k'], [2, 4]]);
//   const [determinant, setDeterminant] = useState<number | null>(null);
//   const [unknownValue, setUnknownValue] = useState<number | null>(null);
//   const [activeTab, setActiveTab] = useState<'check' | 'findK'>('check');

//   const updateCheckMatrix = (
//     i: number,
//     j: number,
//     value: string
//   ) => {
//     const newMatrix = [...checkMatrix];
//     newMatrix[i] = [...newMatrix[i]];
//     newMatrix[i][j] = Number(value) || 0;
//     setCheckMatrix(newMatrix);
//     setDeterminant(null);
//   };

//   const updateFindKMatrix = (
//     i: number,
//     j: number,
//     value: string
//   ) => {
//     if (i === 0 && j === 1) return; // Prevent editing 'k' field
//     const newMatrix = [...findKMatrix];
//     newMatrix[i] = [...newMatrix[i]];
//     newMatrix[i][j] = Number(value) || 0;
//     setFindKMatrix(newMatrix);
//     setUnknownValue(null);
//   };

//   const calculateDeterminant = () => {
//     const [a, b] = checkMatrix[0];
//     const [c, d] = checkMatrix[1];
//     const det = a * d - b * c;
//     setDeterminant(det);
//   };

//   const findUnknownForSingular = () => {
//     const [a, b] = findKMatrix[0];
//     const [c, d] = findKMatrix[1];
//     if (b === 'k') {
//       // det = a*d - k*c = 0 => k = a*d / c
//       if (c !== 0) {
//         setUnknownValue(a * d / c);
//       } else {
//         setUnknownValue(null);
//       }
//     }
//   };

//   const getMatrixLatex = (matrix: (number | string)[][]) => {
//     return `\\begin{pmatrix} ${matrix[0][0]} & ${matrix[0][1]} \\\\ ${matrix[1][0]} & ${matrix[1][1]} \\end{pmatrix}`;
//   };

//   const getDeterminantLatex = () => {
//     if (determinant === null) return '';
//     const [a, b] = checkMatrix[0];
//     const [c, d] = checkMatrix[1];
//     return `${a} \\cdot ${d} - ${b} \\cdot ${c} = ${determinant}`;
//   };

//   const getUnknownLatex = () => {
//     if (unknownValue === null) return '';
//     const [a] = findKMatrix[0];
//     const [c, d] = findKMatrix[1];
//     return `${a} \\cdot ${d} - k \\cdot ${c} = 0 \\implies k = \\frac{${a} \\cdot ${d}}{${c}} = ${unknownValue}`;
//   };

//   return (
//     <div className="p-4 w-full max-w-sm mx-auto bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2 text-blue-600">
//         <X className="w-6 h-6" /> Singular Matrix Checker
//       </h2>

//       <div className="flex border-b border-blue-200 mb-4">
//         <button
//           className={`flex-1 py-2 text-sm font-medium text-center transition-colors ${
//             activeTab === 'check' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
//           }`}
//           onClick={() => setActiveTab('check')}
//         >
//           Check Singular
//         </button>
//         <button
//           className={`flex-1 py-2 text-sm font-medium text-center transition-colors ${
//             activeTab === 'findK' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
//           }`}
//           onClick={() => setActiveTab('findK')}
//         >
//           Find k
//         </button>
//       </div>

//       <div className="mb-4">
//         <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">
//           Enter 2×2 Matrix {activeTab === 'findK' ? "(k is fixed)" : ''}
//         </h3>
//         <div className="grid grid-cols-2 gap-2 w-32 mx-auto">
//           {activeTab === 'check'
//             ? checkMatrix.map((row, i) =>
//                 row.map((value, j) => (
//                   <input
//                     key={`check-${i}-${j}`}
//                     type="text"
//                     value={value}
//                     onChange={(e) => updateCheckMatrix(i, j, e.target.value)}
//                     className="w-12 h-12 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all text-sm"
//                   />
//                 ))
//               )
//             : findKMatrix.map((row, i) =>
//                 row.map((value, j) => (
//                   <input
//                     key={`findK-${i}-${j}`}
//                     type="text"
//                     value={value}
//                     onChange={(e) => updateFindKMatrix(i, j, e.target.value)}
//                     disabled={i === 0 && j === 1}
//                     className={`w-12 h-12 text-center rounded-md border border-blue-200 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all text-sm ${
//                       i === 0 && j === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-50'
//                     }`}
//                   />
//                 ))
//               )}
//         </div>
//       </div>

//       <div className="mb-4 flex justify-center">
//         <BlockMath math={getMatrixLatex(activeTab === 'check' ? checkMatrix : findKMatrix)} />
//       </div>

//       <div className="flex justify-center mb-4">
//         {activeTab === 'check' ? (
//           <button
//             onClick={calculateDeterminant}
//             className="px-3 py-1.5 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all flex items-center gap-1.5 text-sm"
//           >
//             <X className="w-4 h-4" /> Check Determinant
//           </button>
//         ) : (
//           <button
//             onClick={findUnknownForSingular}
//             className="px-3 py-1.5 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all flex items-center gap-1.5 text-sm"
//           >
//             <X className="w-4 h-4" /> Find k
//           </button>
//         )}
//       </div>

//       {activeTab === 'check' && determinant !== null && (
//         <div className="mb-4">
//           <p className="text-center text-base font-semibold text-gray-700 mb-2">Determinant</p>
//           <div className="flex justify-center">
//             <BlockMath math={`\\det(A) = ${getDeterminantLatex()}`} />
//           </div>
//           <p className="text-center text-sm text-gray-600 mt-2">
//             {determinant === 0 ? 'Matrix is singular' : 'Matrix is non-singular (invertible)'}
//           </p>
//         </div>
//       )}

//       {activeTab === 'findK' && unknownValue !== null && (
//         <div className="mb-4">
//           <p className="text-center text-base font-semibold text-gray-700 mb-2">Unknown for Singular Matrix</p>
//           <div className="flex justify-center">
//             <BlockMath math={getUnknownLatex()} />
//           </div>
//         </div>
//       )}

//       <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded-md">
//         <p className="mb-2">
//           <strong>Definitions:</strong> A matrix is non-singular if <BlockMath math="\\det(A) \\neq 0" /> (invertible), singular if <BlockMath math="\\det(A) = 0" /> (not invertible).
//         </p>
//         <p>
//           <strong>Example Use Case:</strong> In engineering, singular matrices indicate systems with no unique solution, like parallel forces in statics.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SingularMatrixChecker;

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const SingularMatrixChecker: React.FC = () => {
  const [checkMatrix, setCheckMatrix] = useState<number[][]>([[1, 2], [3, 4]]);
  const [findKMatrix, setFindKMatrix] = useState<(number | string)[][]>([[1, 'k'], [2, 4]]);
  const [determinant, setDeterminant] = useState<number | null>(null);
  const [unknownValue, setUnknownValue] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'check' | 'findK'>('check');

  const updateCheckMatrix = (
    i: number,
    j: number,
    value: string
  ) => {
    const newMatrix = [...checkMatrix];
    newMatrix[i] = [...newMatrix[i]];
    newMatrix[i][j] = Number(value) || 0;
    setCheckMatrix(newMatrix);
    setDeterminant(null);
  };

  const updateFindKMatrix = (
    i: number,
    j: number,
    value: string
  ) => {
    if (i === 0 && j === 1) return; // Prevent editing 'k' field
    const newMatrix = [...findKMatrix];
    newMatrix[i] = [...newMatrix[i]];
    newMatrix[i][j] = Number(value) || 0;
    setFindKMatrix(newMatrix);
    setUnknownValue(null);
  };

  const calculateDeterminant = () => {
    const [a, b] = checkMatrix[0];
    const [c, d] = checkMatrix[1];
    const det = a * d - b * c;
    setDeterminant(det);
  };

  const findUnknownForSingular = () => {
    const [a, b] = findKMatrix[0];
    const [c, d] = findKMatrix[1];
    
    // Type guard to ensure we're working with numbers
    if (b === 'k' && typeof a === 'number' && typeof c === 'number' && typeof d === 'number') {
      // det = a*d - k*c = 0 => k = a*d / c
      if (c !== 0) {
        setUnknownValue((a * d) / c);
      } else {
        setUnknownValue(null);
      }
    }
  };

  const getMatrixLatex = (matrix: (number | string)[][]) => {
    return `\\begin{pmatrix} ${matrix[0][0]} & ${matrix[0][1]} \\\\ ${matrix[1][0]} & ${matrix[1][1]} \\end{pmatrix}`;
  };

  const getDeterminantLatex = () => {
    if (determinant === null) return '';
    const [a, b] = checkMatrix[0];
    const [c, d] = checkMatrix[1];
    return `${a} \\cdot ${d} - ${b} \\cdot ${c} = ${determinant}`;
  };

  const getUnknownLatex = () => {
    if (unknownValue === null) return '';
    const [a] = findKMatrix[0];
    const [c, d] = findKMatrix[1];
    
    // Ensure all values are numbers for display
    if (typeof a === 'number' && typeof c === 'number' && typeof d === 'number') {
      return `${a} \\cdot ${d} - k \\cdot ${c} = 0 \\implies k = \\frac{${a} \\cdot ${d}}{${c}} = ${unknownValue}`;
    }
    return '';
  };

  return (
    <div className="p-4 w-full max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2 text-blue-600">
        <X className="w-6 h-6" /> Singular Matrix Checker
      </h2>

      <div className="flex border-b border-blue-200 mb-4">
        <button
          className={`flex-1 py-2 text-sm font-medium text-center transition-colors ${
            activeTab === 'check' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('check')}
        >
          Check Singular
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium text-center transition-colors ${
            activeTab === 'findK' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('findK')}
        >
          Find k
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">
          Enter 2×2 Matrix {activeTab === 'findK' ? "(k is fixed)" : ''}
        </h3>
        <div className="grid grid-cols-2 gap-2 w-32 mx-auto">
          {activeTab === 'check'
            ? checkMatrix.map((row, i) =>
                row.map((value, j) => (
                  <input
                    key={`check-${i}-${j}`}
                    type="text"
                    value={value}
                    onChange={(e) => updateCheckMatrix(i, j, e.target.value)}
                    className="w-12 h-12 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all text-sm"
                  />
                ))
              )
            : findKMatrix.map((row, i) =>
                row.map((value, j) => (
                  <input
                    key={`findK-${i}-${j}`}
                    type="text"
                    value={value}
                    onChange={(e) => updateFindKMatrix(i, j, e.target.value)}
                    disabled={i === 0 && j === 1}
                    className={`w-12 h-12 text-center rounded-md border border-blue-200 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all text-sm ${
                      i === 0 && j === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-50'
                    }`}
                  />
                ))
              )}
        </div>
      </div>

      <div className="mb-4 flex justify-center">
        <BlockMath math={getMatrixLatex(activeTab === 'check' ? checkMatrix : findKMatrix)} />
      </div>

      <div className="flex justify-center mb-4">
        {activeTab === 'check' ? (
          <button
            onClick={calculateDeterminant}
            className="px-3 py-1.5 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all flex items-center gap-1.5 text-sm"
          >
            <X className="w-4 h-4" /> Check Determinant
          </button>
        ) : (
          <button
            onClick={findUnknownForSingular}
            className="px-3 py-1.5 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all flex items-center gap-1.5 text-sm"
          >
            <X className="w-4 h-4" /> Find k
          </button>
        )}
      </div>

      {activeTab === 'check' && determinant !== null && (
        <div className="mb-4">
          <p className="text-center text-base font-semibold text-gray-700 mb-2">Determinant</p>
          <div className="flex justify-center">
            <BlockMath math={`\\det(A) = ${getDeterminantLatex()}`} />
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            {determinant === 0 ? 'Matrix is singular' : 'Matrix is non-singular (invertible)'}
          </p>
        </div>
      )}

      {activeTab === 'findK' && unknownValue !== null && (
        <div className="mb-4">
          <p className="text-center text-base font-semibold text-gray-700 mb-2">Unknown for Singular Matrix</p>
          <div className="flex justify-center">
            <BlockMath math={getUnknownLatex()} />
          </div>
        </div>
      )}

      <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded-md">
        <p className="mb-2">
          <strong>Definitions:</strong> A matrix is non-singular if <BlockMath math="\\det(A) \\neq 0" /> (invertible), singular if <BlockMath math="\\det(A) = 0" /> (not invertible).
        </p>
        <p>
          <strong>Example Use Case:</strong> In engineering, singular matrices indicate systems with no unique solution, like parallel forces in statics.
        </p>
      </div>
    </div>
  );
};

export default SingularMatrixChecker;
