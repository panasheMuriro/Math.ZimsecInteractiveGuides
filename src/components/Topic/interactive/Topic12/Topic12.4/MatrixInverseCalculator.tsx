import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const MatrixInverseCalculator: React.FC = () => {
  const [matrix, setMatrix] = useState<number[][]>([[1, 2], [3, 4]]);
  const [inverse, setInverse] = useState<number[][] | null>(null);
  const [determinant, setDeterminant] = useState<number | null>(null);
  const [verification, setVerification] = useState<number[][] | null>(null);
  const [activeTab, setActiveTab] = useState<'calculate' | 'verify'>('calculate');

  const updateMatrix = (i: number, j: number, value: string) => {
    const newMatrix = [...matrix];
    newMatrix[i] = [...newMatrix[i]];
    newMatrix[i][j] = Number(value) || 0;
    setMatrix(newMatrix);
    setInverse(null);
    setDeterminant(null);
    setVerification(null);
  };

  const calculateInverse = () => {
    const [a, b] = matrix[0];
    const [c, d] = matrix[1];
    const det = a * d - b * c;
    setDeterminant(det);

    if (det === 0) {
      setInverse(null);
      return;
    }

    const inverseMatrix = [
      [(d / det), (-b / det)],
      [(-c / det), (a / det)],
    ];
    setInverse(inverseMatrix);
  };

  const verifyInverse = () => {
    if (!inverse) return;

    const [a, b] = matrix[0];
    const [c, d] = matrix[1];
    const [x, y] = inverse[0];
    const [z, w] = inverse[1];

    const product = [
      [
        a * x + b * z,
        a * y + b * w,
      ],
      [
        c * x + d * z,
        c * y + d * w,
      ],
    ];

    // Round to 2 decimal places to handle floating-point precision
    const roundedProduct = product.map(row => row.map(val => Math.round(val * 100) / 100));
    setVerification(roundedProduct);
  };

  const getMatrixLatex = (mat: number[][]) => {
    return `\\begin{pmatrix} ${mat[0][0]} & ${mat[0][1]} \\\\ ${mat[1][0]} & ${mat[1][1]} \\end{pmatrix}`;
  };

  const getDeterminantLatex = () => {
    if (determinant === null) return '';
    const [a, b] = matrix[0];
    const [c, d] = matrix[1];
    return `${a} \\cdot ${d} - ${b} \\cdot ${c} = ${determinant}`;
  };

  const getInverseLatex = () => {
    if (!inverse) return '';
    return `\\frac{1}{${determinant}} \\begin{pmatrix} ${matrix[1][1]} & -${matrix[0][1]} \\\\ -${matrix[1][0]} & ${matrix[0][0]} \\end{pmatrix} = \\begin{pmatrix} ${inverse[0][0]} & ${inverse[0][1]} \\\\ ${inverse[1][0]} & ${inverse[1][1]} \\end{pmatrix}`;
  };

  const getVerificationLatex = () => {
    if (!verification) return '';
    return `\\begin{pmatrix} ${matrix[0][0]} & ${matrix[0][1]} \\\\ ${matrix[1][0]} & ${matrix[1][1]} \\end{pmatrix} \\times \\begin{pmatrix} ${inverse![0][0]} & ${inverse![0][1]} \\\\ ${inverse![1][0]} & ${inverse![1][1]} \\end{pmatrix} = \\begin{pmatrix} ${verification[0][0]} & ${verification[0][1]} \\\\ ${verification[1][0]} & ${verification[1][1]} \\end{pmatrix}`;
  };

  return (
    <div className="p-4 w-full max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2 text-blue-600">
        <X className="w-6 h-6" /> Matrix Inverse Calculator
      </h2>

      <div className="flex border-b border-blue-200 mb-4">
        <button
          className={`flex-1 py-2 text-sm font-medium text-center transition-colors ${
            activeTab === 'calculate' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('calculate')}
        >
          Calculate Inverse
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium text-center transition-colors ${
            activeTab === 'verify' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('verify')}
        >
          Verify Inverse
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">Enter 2×2 Matrix</h3>
        <div className="grid grid-cols-2 gap-2 w-32 mx-auto">
          {matrix.map((row, i) =>
            row.map((value, j) => (
              <input
                key={`m-${i}-${j}`}
                type="text"
                value={value}
                onChange={(e) => updateMatrix(i, j, e.target.value)}
                className="w-12 h-12 text-center rounded-md border border-blue-200 bg-blue-50 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all text-sm"
              />
            ))
          )}
        </div>
      </div>

      <div className="mb-4 flex justify-center">
        <BlockMath math={getMatrixLatex(matrix)} />
      </div>

      <div className="flex justify-center mb-4">
        {activeTab === 'calculate' ? (
          <button
            onClick={calculateInverse}
            className="px-3 py-1.5 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all flex items-center gap-1.5 text-sm"
          >
            <X className="w-4 h-4" /> Calculate Inverse
          </button>
        ) : (
          <button
            onClick={verifyInverse}
            className="px-3 py-1.5 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all flex items-center gap-1.5 text-sm"
            disabled={!inverse}
          >
            <X className="w-4 h-4" /> Verify Inverse
          </button>
        )}
      </div>

      {activeTab === 'calculate' && determinant !== null && (
        <div className="mb-4">
          <p className="text-center text-base font-semibold text-gray-700 mb-2">Determinant</p>
          <div className="flex justify-center">
            <BlockMath math={`\\det(A) = ${getDeterminantLatex()}`} />
          </div>
          {determinant === 0 && (
            <p className="text-center text-sm text-red-600 mt-2">
              Matrix is singular (no inverse exists)
            </p>
          )}
        </div>
      )}

      {activeTab === 'calculate' && inverse && (
        <div className="mb-4">
          <p className="text-center text-base font-semibold text-gray-700 mb-2">Inverse Matrix</p>
          <div className="flex justify-center">
            <BlockMath math={getInverseLatex()} />
          </div>
        </div>
      )}

      {activeTab === 'verify' && verification && (
        <div className="mb-4">
          <p className="text-center text-base font-semibold text-gray-700 mb-2">Verification</p>
          <div className="flex justify-center">
            <BlockMath math={getVerificationLatex()} />
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            {verification[0][0] === 1 && verification[0][1] === 0 && verification[1][0] === 0 && verification[1][1] === 1
              ? 'Verification successful: A × A⁻¹ = I'
              : 'Verification failed: A × A⁻¹ ≠ I'}
          </p>
        </div>
      )}

      <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded-md">
        <p className="mb-2">
          <strong>Formula:</strong> For <BlockMath math={"A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}"} />,
          if <BlockMath math={"\\det(A) \\neq 0"} />, then <BlockMath math={"A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}"} />.
        </p>
        <p>
          <strong>Example Use Case:</strong> In computer graphics, matrix inverses reverse transformations like rotations or scaling.
        </p>
      </div>
    </div>
  );
};

export default MatrixInverseCalculator;