// import React, { useState } from 'react';
// import { Grid, Info } from 'lucide-react';

// const MatrixTypesVisualizer: React.FC = () => {
//   const [matrixType, setMatrixType] = useState<string>('row');
//   const [matrix, setMatrix] = useState<number[][]>([[1, 2, 3]]);
//   const [order, setOrder] = useState<string>('1 × 3');

//   const generateMatrix = (type: string) => {
//     setMatrixType(type);
//     switch (type) {
//       case 'row':
//         setMatrix([[1, 2, 3]]);
//         setOrder('1 × 3');
//         break;
//       case 'column':
//         setMatrix([[1], [2], [3]]);
//         setOrder('3 × 1');
//         break;
//       case 'square':
//         setMatrix([[1, 2], [3, 4]]);
//         setOrder('2 × 2');
//         break;
//       case 'zero':
//         setMatrix([[0, 0], [0, 0]]);
//         setOrder('2 × 2');
//         break;
//       case 'identity':
//         setMatrix([[1, 0], [0, 1]]);
//         setOrder('2 × 2');
//         break;
//       default:
//         setMatrix([[1, 2, 3]]);
//         setOrder('1 × 3');
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg">
//       <h2 className="text-2xl font-extrabold mb-6 text-center flex items-center justify-center gap-3 text-indigo-600">
//         <Grid className="w-7 h-7" /> Matrix Types Visualizer
//       </h2>

//       <div className="mb-6">
//         <label className="block text-sm font-semibold text-gray-800 mb-2">
//           Select Matrix Type:
//           <select
//             value={matrixType}
//             onChange={(e) => generateMatrix(e.target.value)}
//             className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 p-2 text-gray-800 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all"
//           >
//             <option value="row">Row Matrix</option>
//             <option value="column">Column Matrix</option>
//             <option value="square">Square Matrix</option>
//             <option value="zero">Zero Matrix</option>
//             <option value="identity">Identity Matrix</option>
//           </select>
//         </label>
//       </div>

//       <div className="mb-6">
//         <p className="text-center text-lg font-semibold text-gray-800">
//           Matrix Order: {order}
//         </p>
//       </div>

//       <div className="flex justify-center mb-6">
//         <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${matrix[0].length}, minmax(0, 1fr))` }}>
//           {matrix.map((row, i) =>
//             row.map((value, j) => (
//               <div
//                 key={`${i}-${j}`}
//                 className="w-14 h-14 flex items-center justify-center border-2 border-indigo-100 rounded-md bg-indigo-50 text-gray-800 transition-all"
//               >
//                 {value}
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       <div className="text-sm text-gray-700 bg-indigo-50 p-4 rounded-lg">
//         <p className="mb-2 flex items-center gap-2">
//           <Info className="w-5 h-5" />
//           <strong>{matrixType.charAt(0).toUpperCase() + matrixType.slice(1)} Matrix:</strong>
//           {matrixType === 'row' && 'One row, any number of columns.'}
//           {matrixType === 'column' && 'One column, any number of rows.'}
//           {matrixType === 'square' && 'Equal number of rows and columns.'}
//           {matrixType === 'zero' && 'All elements are zero.'}
//           {matrixType === 'identity' && 'Square matrix with 1s on the main diagonal, 0s elsewhere.'}
//         </p>
//         <p>
//           <strong>Use Case:</strong>
//           {matrixType === 'row' && ' Representing a single dataset (e.g., a row in a spreadsheet).'}
//           {matrixType === 'column' && ' Storing a single variable across multiple observations.'}
//           {matrixType === 'square' && ' Used in transformations (e.g., rotations in graphics).'}
//           {matrixType === 'zero' && ' Initializing systems of equations.'}
//           {matrixType === 'identity' && ' Acts as a neutral element in matrix multiplication.'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MatrixTypesVisualizer;


import React, { useState } from 'react';
import { Grid, Info } from 'lucide-react';

const MatrixTypesVisualizer: React.FC = () => {
  const [matrixType, setMatrixType] = useState<string>('row');
  const [matrix, setMatrix] = useState<number[][]>([[1, 2, 3]]);
  const [order, setOrder] = useState<string>('1 × 3');

  const generateMatrix = (type: string) => {
    setMatrixType(type);
    switch (type) {
      case 'row':
        setMatrix([[1, 2, 3]]);
        setOrder('1 × 3');
        break;
      case 'column':
        setMatrix([[1], [2], [3]]);
        setOrder('3 × 1');
        break;
      case 'square':
        setMatrix([[1, 2], [3, 4]]);
        setOrder('2 × 2');
        break;
      case 'zero':
        setMatrix([[0, 0], [0, 0]]);
        setOrder('2 × 2');
        break;
      case 'identity':
        setMatrix([[1, 0], [0, 1]]);
        setOrder('2 × 2');
        break;
      default:
        setMatrix([[1, 2, 3]]);
        setOrder('1 × 3');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-extrabold mb-6 text-center flex items-center justify-center gap-3 text-indigo-600">
        <Grid className="w-7 h-7" /> Matrix Types Visualizer
      </h2>

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {['row', 'column', 'square', 'zero', 'identity'].map((type) => (
          <button
            key={type}
            onClick={() => generateMatrix(type)}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all
              ${matrixType === type ? 'bg-indigo-500 text-white' : 'bg-indigo-50 text-gray-800 hover:bg-indigo-200'}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <p className="text-center text-lg font-semibold text-gray-800">
          Matrix Order: {order}
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${matrix[0].length}, minmax(0, 1fr))` }}>
          {matrix.map((row, i) =>
            row.map((value, j) => (
              <div
                key={`${i}-${j}`}
                className="w-14 h-14 flex items-center justify-center border-2 border-indigo-100 rounded-md bg-indigo-50 text-gray-800 transition-all"
              >
                {value}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="text-sm text-gray-700 bg-indigo-50 p-4 rounded-lg">
        <p className="mb-2 flex items-center gap-2">
          <Info className="w-5 h-5" />
          <strong>{matrixType.charAt(0).toUpperCase() + matrixType.slice(1)} Matrix:</strong>
          {matrixType === 'row' && 'One row, any number of columns.'}
          {matrixType === 'column' && 'One column, any number of rows.'}
          {matrixType === 'square' && 'Equal number of rows and columns.'}
          {matrixType === 'zero' && 'All elements are zero.'}
          {matrixType === 'identity' && 'Square matrix with 1s on the main diagonal, 0s elsewhere.'}
        </p>
        <p>
          <strong>Use Case:</strong>
          {matrixType === 'row' && ' Representing a single dataset (e.g., a row in a spreadsheet).'}
          {matrixType === 'column' && ' Storing a single variable across multiple observations.'}
          {matrixType === 'square' && ' Used in transformations (e.g., rotations in graphics).'}
          {matrixType === 'zero' && ' Initializing systems of equations.'}
          {matrixType === 'identity' && ' Acts as a neutral element in matrix multiplication.'}
        </p>
      </div>
    </div>
  );
};

export default MatrixTypesVisualizer;