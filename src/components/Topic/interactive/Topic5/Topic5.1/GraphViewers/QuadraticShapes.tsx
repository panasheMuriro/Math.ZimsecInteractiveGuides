import React from 'react';
import QuadraticGraphPlot from './QuadraticGraphPlot';

const QuadraticShapes: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Quadratic Shapes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Upward Parabola (a > 0) */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4 text-purple-600">Upward Parabola (a {'>'} 0)</h3>
          <div className="w-full h-80">
            <QuadraticGraphPlot
              a={1}
              b={0}
              c={0}
              xRange={[-3, 3] as [number, number]}
              minX={-4}
              maxX={4}
              minY={-1}
              maxY={9}
              width={300}
              height={300}
              unitSize={35}
              showPoints={false}
            />
          </div>
          <p className="mt-3 text-center font-medium">y = x²</p>
          <p className="text-sm text-slate-600 mt-1">Parabola opens upward (U-shape)</p>
        </div>

        {/* Downward Parabola (a < 0) */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4 text-amber-600">(a {'<'} 0)</h3>
          <div className="w-full h-80">
            <QuadraticGraphPlot
              a={-1}
              b={0}
              c={0}
              xRange={[-3, 3] as [number, number]}
              minX={-4}
              maxX={4}
              minY={-9}
              maxY={1}
              width={300}
              height={300}
              unitSize={35}
              showPoints={false}
            />
          </div>
          <p className="mt-3 text-center font-medium">y = -x²</p>
          <p className="text-sm text-slate-600 mt-1">Parabola opens downward (∩-shape)</p>
        </div>
      </div>

    </div>
  );
};

export default QuadraticShapes;