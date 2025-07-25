// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import { BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';

// const SimultaneousEquationsSolver: React.FC = () => {
//   const [coefficients, setCoefficients] = useState<number[][]>([[1, 2], [3, 4]]);
//   const [constants, setConstants] = useState<number[]>([5, 11]);
//   const [solution, setSolution] = useState<number[] | null>(null);
//   const [determinant, setDeterminant] = useState<number | null>(null);

//   const updateCoefficients = (i: number, j: number, value: string) => {
//     const newCoefficients = [...coefficients];
//     newCoefficients[i] = [...newCoefficients[i]];
//     newCoefficients[i][j] = Number(value) || 0;
//     setCoefficients(newCoefficients);
//     setSolution(null);
//     setDeterminant(null);
//   };

//   const updateConstants = (i: number, value: string) => {
//     const newConstants = [...constants];
//     newConstants[i] = Number(value) || 0;
//     setConstants(newConstants);
//     setSolution(null);
//     setDeterminant(null);
//   };

//   const solveEquations = () => {
//     const [a, b] = coefficients[0];
//     const [c, d] = coefficients[1];
//     const [e, f] = constants;
//     const det = a * d - b * c;
//     setDeterminant(det);

//     if (det === 0) {
//       setSolution(null);
//       return;
//     }

//     const inverse = [
//       [(d / det), (-b / det)],
//       [(-c / det), (a / det)],
//     ];
//     const solution = [
//       inverse[0][0] * e + inverse[0][1] * f,
//       inverse[1][0] * e + inverse[1][1] * f,
//     ];
//     // Round to 2 decimal places to handle floating-point precision
//     setSolution(solution.map(val => Math.round(val * 100) / 100));
//   };

//   const getMatrixEquationLatex = () => {
//     const [a, b] = coefficients[0];
//     const [c, d] = coefficients[1];
//     const [e, f] = constants;
//     return `\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} ${e} \\\\ ${f} \\end{pmatrix}`;
//   };

//   const getDeterminantLatex = () => {
//     if (determinant === null) return '';
//     const [a, b] = coefficients[0];
//     const [c, d] = coefficients[1];
//     return `${a} \\cdot ${d} - ${b} \\cdot ${c} = ${determinant}`;
//   };

//   const getInverseLatex = () => {
//     if (!solution || determinant === null || determinant === 0) return '';
//     const [a, b] = coefficients[0];
//     const [c, d] = coefficients[1];
//     return `\\frac{1}{${determinant}} \\begin{pmatrix} ${d} & -${b} \\\\ -${c} & ${a} \\end{pmatrix} = \\begin{pmatrix} ${d / determinant} & ${-b / determinant} \\\\ ${-c / determinant} & ${a / determinant} \\end{pmatrix}`;
//   };

//   const getSolutionLatex = () => {
//     if (!solution || determinant === null || determinant === 0) return '';
//     const [a, b] = coefficients[0];
//     const [c, d] = coefficients[1];
//     const [e, f] = constants;
//     return `\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} ${d / determinant} & ${-b / determinant} \\\\ ${-c / determinant} & ${a / determinant} \\end{pmatrix} \\begin{pmatrix} ${e} \\\\ ${f} \\end{pmatrix} = \\begin{pmatrix} ${solution[0]} \\\\ ${solution[1]} \\end{pmatrix}`;
//   };

//   return (
//     <div className="p-4 w-full max-w-sm mx-auto bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2 text-blue-600">
//         <X className="w-6 h-6" /> Simultaneous Equations Solver
//       </h2>

//       <div className="mb-4">
//         <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">
//           Enter Equations: ax + by = e, cx + dy = f
//         </h3>
//         <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
//           <input
//             type="text"
//             value={coefficients[0][0]}
//             onChange={(e) => updateCoefficients(0, 0, e.target.value)}
//             className="w-12 h-12 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all text-sm"
//             placeholder="a"
//           />
//           <input
//             type="text"
//             value={coefficients[0][1]}
//             onChange={(e) => updateCoefficients(0, 1, e.target.value)}
//             className="w-12 h-12 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all text-sm"
//             placeholder="b"
//           />
//           <input
//             type="text"
//             value={constants[0]}
//             onChange={(e) => updateConstants(0, e.target.value)}
//             className="w-12 h-12 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all text-sm"
//             placeholder="e"
//           />
//           <input
//             type="text"
//             value={coefficients[1][0]}
//             onChange={(e) => updateCoefficients(1, 0, e.target.value)}
//             className="w-12 h-12 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all text-sm"
//             placeholder="c"
//           />
//           <input
//             type="text"
//             value={coefficients[1][1]}
//             onChange={(e) => updateCoefficients(1, 1, e.target.value)}
//             className="w-12 h-12 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all text-sm"
//             placeholder="d"
//           />
//           <input
//             type="text"
//             value={constants[1]}
//             onChange={(e) => updateConstants(1, e.target.value)}
//             className="w-12 h-12 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all text-sm"
//             placeholder="f"
//           />
//         </div>
//       </div>

//       <div className="mb-4 flex justify-center">
//         <BlockMath math={getMatrixEquationLatex()} />
//       </div>

//       <div className="flex justify-center mb-4">
//         <button
//           onClick={solveEquations}
//           className="px-3 py-1.5 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all flex items-center gap-1.5 text-sm"
//         >
//           <X className="w-4 h-4" /> Solve Equations
//         </button>
//       </div>

//       {determinant !== null && (
//         <div className="mb-4">
//           <p className="text-center text-base font-semibold text-gray-700 mb-2">Determinant</p>
//           <div className="flex justify-center">
//             <BlockMath math={`\\det(A) = ${getDeterminantLatex()}`} />
//           </div>
//           {determinant === 0 && (
//             <p className="text-center text-sm text-red-600 mt-2">
//               Matrix is singular (no unique solution exists)
//             </p>
//           )}
//         </div>
//       )}

//       {solution && determinant !== 0 && (
//         <div className="mb-4">
//           <p className="text-center text-base font-semibold text-gray-700 mb-2">Solution</p>
//           <div className="flex flex-col items-center gap-2">
//             <BlockMath math={getInverseLatex()} />
//             <BlockMath math={getSolutionLatex()} />
//             <p className="text-sm text-gray-600">x = {solution[0]}, y = {solution[1]}</p>
//           </div>
//         </div>
//       )}

//       <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded-md">
//         <p className="mb-2">
//           <strong>Method:</strong> For <BlockMath math="ax + by = e, \\ cx + dy = f" />, solve using <BlockMath math="\begin{pmatrix} x \\ y \end{pmatrix} = A^{-1} \begin{pmatrix} e \\ f \end{pmatrix}" />, where <BlockMath math="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" />.
//         </p>
//         <p>
//           <strong>Example Use Case:</strong> In economics, solve supply and demand equations to find equilibrium prices.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SimultaneousEquationsSolver;

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const SimultaneousEquationsSolver: React.FC = () => {
  const [coefficients, setCoefficients] = useState<number[][]>([[1, 2], [3, 4]]);
  const [constants, setConstants] = useState<number[]>([5, 11]);
  const [solution, setSolution] = useState<number[] | null>(null);
  const [determinant, setDeterminant] = useState<number | null>(null);

  const updateCoefficients = (i: number, j: number, value: string) => {
    const newCoefficients = [...coefficients];
    newCoefficients[i] = [...newCoefficients[i]];
    newCoefficients[i][j] = Number(value) || 0;
    setCoefficients(newCoefficients);
    setSolution(null);
    setDeterminant(null);
  };

  const updateConstants = (i: number, value: string) => {
    const newConstants = [...constants];
    newConstants[i] = Number(value) || 0;
    setConstants(newConstants);
    setSolution(null);
    setDeterminant(null);
  };

  const solveEquations = () => {
    const [a, b] = coefficients[0];
    const [c, d] = coefficients[1];
    const [e, f] = constants;
    const det = a * d - b * c;
    setDeterminant(det);

    if (det === 0) {
      setSolution(null);
      return;
    }

    const inverse = [
      [(d / det), (-b / det)],
      [(-c / det), (a / det)],
    ];
    const solution = [
      inverse[0][0] * e + inverse[0][1] * f,
      inverse[1][0] * e + inverse[1][1] * f,
    ];
    // Round to 2 decimal places to handle floating-point precision
    setSolution(solution.map(val => Math.round(val * 100) / 100));
  };

  const getMatrixEquationLatex = () => {
    const [a, b] = coefficients[0];
    const [c, d] = coefficients[1];
    const [e, f] = constants;
    return `\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} ${e} \\\\ ${f} \\end{pmatrix}`;
  };

  const getDeterminantLatex = () => {
    if (determinant === null) return '';
    const [a, b] = coefficients[0];
    const [c, d] = coefficients[1];
    return `${a} \\cdot ${d} - ${b} \\cdot ${c} = ${determinant}`;
  };

  const getInverseLatex = () => {
    if (!solution || determinant === null || determinant === 0) return '';
    const [a, b] = coefficients[0];
    const [c, d] = coefficients[1];
    return `\\frac{1}{${determinant}} \\begin{pmatrix} ${d} & -${b} \\\\ -${c} & ${a} \\end{pmatrix} = \\begin{pmatrix} ${d / determinant} & ${-b / determinant} \\\\ ${-c / determinant} & ${a / determinant} \\end{pmatrix}`;
  };

  const getSolutionLatex = () => {
    if (!solution || determinant === null || determinant === 0) return '';
    const [a, b] = coefficients[0];
    const [c, d] = coefficients[1];
    const [e, f] = constants;
    return `\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} ${d / determinant} & ${-b / determinant} \\\\ ${-c / determinant} & ${a / determinant} \\end{pmatrix} \\begin{pmatrix} ${e} \\\\ ${f} \\end{pmatrix} = \\begin{pmatrix} ${solution[0]} \\\\ ${solution[1]} \\end{pmatrix}`;
  };

  return (
    <div className="p-4 w-full max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2 text-blue-600">
        <X className="w-6 h-6" /> Simultaneous Equations Solver
      </h2>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">
          Enter Equations: ax + by = e, cx + dy = f
        </h3>
        <div className="space-y-4 w-48 mx-auto">
          <div className="flex items-center justify-center gap-1 text-sm">
            <input
              type="text"
              value={coefficients[0][0]}
              onChange={(e) => updateCoefficients(0, 0, e.target.value)}
              className="w-12 h-10 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
              placeholder="a"
            />
            <span>x +</span>
            <input
              type="text"
              value={coefficients[0][1]}
              onChange={(e) => updateCoefficients(0, 1, e.target.value)}
              className="w-12 h-10 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
              placeholder="b"
            />
            <span>y =</span>
            <input
              type="text"
              value={constants[0]}
              onChange={(e) => updateConstants(0, e.target.value)}
              className="w-12 h-10 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
              placeholder="e"
            />
          </div>
          <div className="flex items-center justify-center gap-1 text-sm">
            <input
              type="text"
              value={coefficients[1][0]}
              onChange={(e) => updateCoefficients(1, 0, e.target.value)}
              className="w-12 h-10 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
              placeholder="c"
            />
            <span>x +</span>
            <input
              type="text"
              value={coefficients[1][1]}
              onChange={(e) => updateCoefficients(1, 1, e.target.value)}
              className="w-12 h-10 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
              placeholder="d"
            />
            <span>y =</span>
            <input
              type="text"
              value={constants[1]}
              onChange={(e) => updateConstants(1, e.target.value)}
              className="w-12 h-10 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
              placeholder="f"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-center">
        <BlockMath math={getMatrixEquationLatex()} />
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={solveEquations}
          className="px-3 py-1.5 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all flex items-center gap-1.5 text-sm"
        >
          <X className="w-4 h-4" /> Solve Equations
        </button>
      </div>

      {determinant !== null && (
        <div className="mb-4">
          <p className="text-center text-base font-semibold text-gray-700 mb-2">Determinant</p>
          <div className="flex justify-center">
            <BlockMath math={`\\det(A) = ${getDeterminantLatex()}`} />
          </div>
          {determinant === 0 && (
            <p className="text-center text-sm text-red-600 mt-2">
              Matrix is singular (no unique solution exists)
            </p>
          )}
        </div>
      )}

      {solution && determinant !== 0 && (
        <div className="mb-4">
          <p className="text-center text-base font-semibold text-gray-700 mb-2">Solution</p>
          <div className="flex flex-col items-center gap-2">
            <BlockMath math={getInverseLatex()} />
            <BlockMath math={getSolutionLatex()} />
            <p className="text-sm text-gray-600">x = {solution[0]}, y = {solution[1]}</p>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded-md">
        <p className="mb-2">
          <strong>Method:</strong> For <BlockMath math="ax + by = e, \\ cx + dy = f" />, solve using <BlockMath math="\begin{pmatrix} x \\ y \end{pmatrix} = A^{-1} \begin{pmatrix} e \\ f \end{pmatrix}" />, where <BlockMath math="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" />.
        </p>
        <p>
          <strong>Example Use Case:</strong> In economics, solve supply and demand equations to find equilibrium prices.
        </p>
      </div>
    </div>
  );
};

export default SimultaneousEquationsSolver;