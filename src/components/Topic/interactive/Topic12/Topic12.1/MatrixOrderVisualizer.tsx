import React, { useState } from 'react';
import { Grid } from 'lucide-react';

const MatrixOrderVisualizer: React.FC = () => {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(3);
  const [matrix, setMatrix] = useState<number[][]>(
    Array(2).fill(0).map(() => Array(3).fill(0))
  );
  const [selectedElement, setSelectedElement] = useState<{ i: number; j: number } | null>(null);

  const updateMatrix = (newRows: number, newCols: number) => {
    const newMatrix = Array(newRows)
      .fill(0)
      .map((_, i) =>
        Array(newCols)
          .fill(0)
          .map((_, j) => matrix[i]?.[j] || Math.floor(Math.random() * 10))
      );
    setMatrix(newMatrix);
    setRows(newRows);
    setCols(newCols);
    setSelectedElement(null);
  };

  const handleElementClick = (i: number, j: number) => {
    setSelectedElement({ i, j });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-extrabold mb-6 text-center flex items-center justify-center gap-3 text-indigo-600">
        <Grid className="w-7 h-7" /> Matrix Visualizer
      </h2>

     

      <div className="mb-6">
        <p className="text-center text-lg font-semibold text-gray-800">
          Matrix Order: {rows} × {cols}
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
          {matrix.map((row, i) =>
            row.map((value, j) => (
              <div
                key={`${i}-${j}`}
                onClick={() => handleElementClick(i, j)}
                className={`w-14 h-14 flex items-center justify-center border-2 border-indigo-100 rounded-md cursor-pointer transition-all
                  ${selectedElement?.i === i && selectedElement?.j === j ? 'bg-indigo-500 text-white' : 'bg-indigo-50 text-gray-800 hover:bg-indigo-200'}`}
              >
                {value}
              </div>
            ))
          )}
        </div>
      </div>

      {selectedElement && (
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-gray-800">
            Selected: a<sub>{selectedElement.i + 1}{selectedElement.j + 1}</sub> ={' '}
            {matrix[selectedElement.i][selectedElement.j]}
          </p>
        </div>


      )}

       <div className="mb-6 space-y-4">
        <label className="block text-sm font-semibold text-gray-800">
          Rows (m):
          <input
            type="number"
            min="1"
            max="5"
            value={rows}
            onChange={(e) => updateMatrix(Number(e.target.value), cols)}
            className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 p-2 text-gray-800 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all"
          />
        </label>
        <label className="block text-sm font-semibold text-gray-800">
          Columns (n):
          <input
            type="number"
            min="1"
            max="5"
            value={cols}
            onChange={(e) => updateMatrix(rows, Number(e.target.value))}
            className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 p-2 text-gray-800 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all"
          />
        </label>
      </div>

      <div className="text-sm text-gray-700 bg-indigo-50 p-4 rounded-lg">
        <p className="mb-2"><strong>Learn:</strong> Matrix order is m × n (rows × columns).</p>
        <p><strong>Tip:</strong> Tap any cell to view its a<sub>ij</sub> notation!</p>
      </div>
    </div>
  );
};

export default MatrixOrderVisualizer;