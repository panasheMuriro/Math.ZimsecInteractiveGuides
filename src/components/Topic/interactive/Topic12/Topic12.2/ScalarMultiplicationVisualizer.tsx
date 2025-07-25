import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ScalarMultiplicationVisualizer: React.FC = () => {
  const [matrix, setMatrix] = useState<number[][]>([[1, 2], [3, 4]]);
  const [scalar, setScalar] = useState<number>(2);
  const [result, setResult] = useState<number[][] | null>(null);

  const handleScalarMultiplication = () => {
    const newResult = matrix.map((row) =>
      row.map((val) => scalar * val)
    );
    setResult(newResult);
  };

  const updateMatrix = (
    i: number,
    j: number,
    value: string
  ) => {
    const newMatrix = [...matrix];
    newMatrix[i] = [...newMatrix[i]];
    newMatrix[i][j] = Number(value) || 0;
    setMatrix(newMatrix);
    setResult(null);
  };

  const getMatrixLatex = (matrix: number[][]) => {
    return `\\begin{pmatrix} ${matrix[0][0]} & ${matrix[0][1]} \\\\ ${matrix[1][0]} & ${matrix[1][1]} \\end{pmatrix}`;
  };

  const getScalarMatrixLatex = () => {
    return `${scalar} \\begin{pmatrix} ${matrix[0][0]} & ${matrix[0][1]} \\\\ ${matrix[1][0]} & ${matrix[1][1]} \\end{pmatrix}`;
  };

  const getCombinedMatrixLatex = () => {
    if (!result) return '';
    return `\\begin{pmatrix} ${scalar} \\cdot ${matrix[0][0]} & ${scalar} \\cdot ${matrix[0][1]} \\\\ ${scalar} \\cdot ${matrix[1][0]} & ${scalar} \\cdot ${matrix[1][1]} \\end{pmatrix} = \\begin{pmatrix} ${result[0][0]} & ${result[0][1]} \\\\ ${result[1][0]} & ${result[1][1]} \\end{pmatrix}`;
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-extrabold mb-6 text-center flex items-center justify-center gap-3 text-indigo-600">
        <X className="w-7 h-7" /> Scalar Multiplication
      </h2>

      <div className="mb-6">
        <div className="flex justify-evenly items-center gap-6 flex-wrap">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center">Scalar (k)</h3>
            <input
              type="number"
              value={scalar}
              onChange={(e) => {
                setScalar(Number(e.target.value) || 0);
                setResult(null);
              }}
              className="w-16 h-12 text-center rounded-md border-2 border-indigo-100 bg-indigo-50 text-gray-800 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all"
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center">Matrix (2×2)</h3>
            <div className="grid gap-1.5 grid-cols-2">
              {matrix.map((row, i) =>
                row.map((value, j) => (
                  <input
                    key={`m-${i}-${j}`}
                    type="number"
                    value={value}
                    onChange={(e) => updateMatrix(i, j, e.target.value)}
                    className="w-12 h-12 text-center rounded-md border-2 border-indigo-100 bg-indigo-50 text-gray-800 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all"
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <BlockMath math={getScalarMatrixLatex()} />
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleScalarMultiplication}
          className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-all flex items-center gap-2"
        >
          <X className="w-5 h-5" /> Multiply
        </button>
      </div>

      {result && (
        <div className="mb-6">
          <p className="text-center text-lg font-semibold text-gray-800 mb-2">Operation</p>
          <div className="flex flex-wrap justify-center items-center gap-2 text-lg">
            <span>{scalar}</span>
            <BlockMath math={getMatrixLatex(matrix)} />
            <span>=</span>
            <BlockMath math={getCombinedMatrixLatex()} />
          </div>
        </div>
      )}

      {result && (
        <div className="mb-6">
          <p className="text-center text-lg font-semibold text-gray-800 mb-2">Result</p>
          <div className="flex justify-center">
            <BlockMath math={getMatrixLatex(result)} />
          </div>
        </div>
      )}

      <div className="text-sm text-gray-700 bg-indigo-50 p-4 rounded-lg">
        <p className="mb-2">
          <strong>Rule:</strong> Multiply each matrix element by the scalar.
        </p>
        <p>
          <strong>Use Case:</strong> Scale data in inventory or adjust forces in physics.
        </p>
      </div>
    </div>
  );
};

export default ScalarMultiplicationVisualizer;