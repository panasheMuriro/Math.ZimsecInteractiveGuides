import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const MatrixMultiplicationVisualizer: React.FC = () => {
  const [matrixA, setMatrixA] = useState<number[][]>([[1, 2], [3, 4]]);
  const [matrixB, setMatrixB] = useState<number[][]>([[5, 6], [7, 8]]);
  const [result, setResult] = useState<number[][] | null>(null);

  const handleMatrixMultiplication = () => {
    const newResult = [
      [
        matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0],
        matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1],
      ],
      [
        matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0],
        matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1],
      ],
    ];
    setResult(newResult);
  };

  const updateMatrix = (
    matrix: number[][],
    setMatrix: React.Dispatch<React.SetStateAction<number[][]>>,
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

  const getOperationMatrixLatex = () => {
    if (!result) return '';
    return `\\begin{pmatrix} ${matrixA[0][0]} \\times ${matrixB[0][0]} + ${matrixA[0][1]} \\times ${matrixB[1][0]} & ${matrixA[0][0]} \\times ${matrixB[0][1]} + ${matrixA[0][1]} \\times ${matrixB[1][1]} \\\\ ${matrixA[1][0]} \\times ${matrixB[0][0]} + ${matrixA[1][1]} \\times ${matrixB[1][0]} & ${matrixA[1][0]} \\times ${matrixB[0][1]} + ${matrixA[1][1]} \\times ${matrixB[1][1]} \\end{pmatrix}`;
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-extrabold mb-6 text-center flex items-center justify-center gap-3 text-indigo-600">
        <X className="w-7 h-7" /> Matrix Multiplication
      </h2>

      <div className="mb-6 flex justify-between items-center gap-6 flex-wrap">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center">Matrix A (2×2)</h3>
          <div className="grid gap-1.5 grid-cols-2">
            {matrixA.map((row, i) =>
              row.map((value, j) => (
                <input
                  key={`a-${i}-${j}`}
                  type="number"
                  value={value}
                  onChange={(e) => updateMatrix(matrixA, setMatrixA, i, j, e.target.value)}
                  className="w-12 h-12 text-center rounded-md border-2 border-indigo-100 bg-indigo-50 text-gray-800 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all"
                />
              ))
            )}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center">Matrix B (2×2)</h3>
          <div className="grid gap-1.5 grid-cols-2">
            {matrixB.map((row, i) =>
              row.map((value, j) => (
                <input
                  key={`b-${i}-${j}`}
                  type="number"
                  value={value}
                  onChange={(e) => updateMatrix(matrixB, setMatrixB, i, j, e.target.value)}
                  className="w-12 h-12 text-center rounded-md border-2 border-indigo-100 bg-indigo-50 text-gray-800 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all"
                />
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mb-6 flex justify-center">
        <BlockMath math={`${getMatrixLatex(matrixA)} \\times ${getMatrixLatex(matrixB)}`} />
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleMatrixMultiplication}
          className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-all flex items-center gap-2"
        >
          <X className="w-5 h-5" /> Multiply
        </button>
      </div>

      {result && (
        <div className="mb-6">
          <p className="text-center text-lg font-semibold text-gray-800 mb-2">Operation</p>
          <div className="flex flex-wrap justify-center items-center gap-2 text-lg">
            <BlockMath math={`${getMatrixLatex(matrixA)} \\times ${getMatrixLatex(matrixB)}`} />
            <BlockMath math={getOperationMatrixLatex()} />
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
          <strong>Rule:</strong> Multiply matrices A (m×n) and B (n×p) to get an m×p matrix, where each element c_ij is the sum of products of row i of A and column j of B.
        </p>
        <p>
          <strong>Use Case:</strong> Rotate objects in graphics or calculate costs in economics.
        </p>
      </div>
    </div>
  );
};

export default MatrixMultiplicationVisualizer;