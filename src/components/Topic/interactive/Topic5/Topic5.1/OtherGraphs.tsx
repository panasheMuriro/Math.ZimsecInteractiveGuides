// src/Components/StandardGraphsViewer.tsx
import React, { useState } from 'react';
import LinearGraphPlot from './LinearGraphPlot';
import QuadraticGraphPlot from './GraphViewers/QuadraticGraphPlot';
import CubicGraphPlot from './OtherPlots/CubicGraphPlot';
import ReciprocalGraphPlot from './OtherPlots/ReciprocalGraphPlot';
import SquareRootGraphPlot from './OtherPlots/SquareRootGraphPlot';
import ExponentialGraphPlot from './OtherPlots/ExponentialGraphPlot';

type GraphType = 'linear' | 'quadratic' | 'cubic' | 'reciprocal' | 'squareRoot' | 'exponential';

const OtherGraphs: React.FC = () => {
  const [selectedGraph, setSelectedGraph] = useState<GraphType>('cubic');

  const renderGraph = () => {
    switch (selectedGraph) {
      
      case 'cubic':
        return (
          <CubicGraphPlot
            width={350}
            height={300}
            unitSize={30}
            a={1}
            b={0}
            c={-3}
            d={0} // y = x³ - 3x
            xRange={[-2.5, 2.5] as [number, number]}
            minX={-3}
            maxX={3}
            minY={-3}
            maxY={3}
          />
        );
      case 'reciprocal':
        return (
          <ReciprocalGraphPlot
            width={350}
            height={300}
            unitSize={30}
            k={1} // y = 1/x
            minX={-5}
            maxX={5}
            minY={-5}
            maxY={5}
          />
        );
      case 'squareRoot':
        return (
          <SquareRootGraphPlot
            width={350}
            height={300}
            unitSize={30}
            a={1} // y = sqrt(x)
            minX={-1}
            maxX={9}
            minY={-1}
            maxY={3}
          />
        );
      case 'exponential':
        return (
          <ExponentialGraphPlot
            width={350}
            height={300}
            unitSize={30}
            a={2} // y = 2^x
            minX={-3}
            maxX={3}
            minY={-1}
            maxY={8}
          />
        );
        case 'linear':
        return (
          <LinearGraphPlot
            width={350}
            height={300}
            unitSize={30}
            gradient={1}
            yIntercept={0}
            xRange={[-4, 4] as [number, number]}
            minX={-5}
            maxX={5}
            minY={-5}
            maxY={5}
          />
        );
      case 'quadratic':
        return (
          <QuadraticGraphPlot
            width={350}
            height={300}
            unitSize={30}
            a={1}
            b={0}
            c={0}
            xRange={[-3, 3] as [number, number]}
            minX={-4}
            maxX={4}
            minY={-1}
            maxY={9}
          />
        );
      default:
        return (
          <LinearGraphPlot
            width={350}
            height={300}
            unitSize={30}
            gradient={1}
            yIntercept={0}
          />
        );
    }
  };

  const getGraphTitle = () => {
    switch (selectedGraph) {
      case 'linear': return 'Linear Function (y = x)';
      case 'quadratic': return 'Quadratic Function (y = x²)';
      case 'cubic': return 'Cubic Function (y = x³ - 3x)';
      case 'reciprocal': return 'Reciprocal Function (y = 1/x)';
      case 'squareRoot': return 'Square Root Function (y = √x)';
      case 'exponential': return 'Exponential Function (y = 2ˣ)';
      default: return 'Standard Graphs';
    }
  };

  const getGraphDescription = () => {
    switch (selectedGraph) {
      case 'linear':
        return 'A straight line with constant slope. Equation: y = mx + c';
      case 'quadratic':
        return 'A parabola. If a > 0, opens upward (U-shape). If a < 0, opens downward (∩-shape).';
      case 'cubic':
        return 'An S-shaped curve. Can have up to 2 turning points and cross the x-axis up to 3 times.';
      case 'reciprocal':
        return 'A hyperbola with two branches. Has asymptotes at x = 0 and y = 0.';
      case 'squareRoot':
        return 'Defined only for x ≥ 0. Starts at the origin and increases gradually.';
      case 'exponential':
        return 'Passes through (0, 1). If a > 1, shows growth. If 0 < a < 1, shows decay.';
      default:
        return 'Select a graph type to view its characteristics.';
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl shadow-lg max-w-3xl w-full">
      <h2 className="text-2xl font-bold text-slate-800 mb-2 text-white">{getGraphTitle()}</h2>
      <p className="text-slate-600 mb-6 text-center text-white">{getGraphDescription()}</p>
      
      <div className="bg-white p-4 rounded-xl shadow-md mb-6 w-full flex justify-center">
        {renderGraph()}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-2xl">
       
        <button
          onClick={() => setSelectedGraph('cubic')}
          className={`py-3 px-4 rounded-lg font-medium transition-all ${
            selectedGraph === 'cubic'
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Cubic
        </button>
        <button
          onClick={() => setSelectedGraph('reciprocal')}
          className={`py-3 px-4 rounded-lg font-medium transition-all ${
            selectedGraph === 'reciprocal'
              ? 'bg-green-500 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Reciprocal
        </button>
        <button
          onClick={() => setSelectedGraph('squareRoot')}
          className={`py-3 px-4 rounded-lg font-medium transition-all ${
            selectedGraph === 'squareRoot'
              ? 'bg-amber-500 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Square Root
        </button>
        <button
          onClick={() => setSelectedGraph('exponential')}
          className={`py-3 px-4 rounded-lg font-medium transition-all ${
            selectedGraph === 'exponential'
              ? 'bg-red-500 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Exponential
        </button>

         <button
          onClick={() => setSelectedGraph('linear')}
          className={`py-3 px-4 rounded-lg font-medium transition-all ${
            selectedGraph === 'linear'
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Linear
        </button>
        <button
          onClick={() => setSelectedGraph('quadratic')}
          className={`py-3 px-4 rounded-lg font-medium transition-all ${
            selectedGraph === 'quadratic'
              ? 'bg-purple-500 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Quadratic
        </button>
      </div>
    </div>
  );
};

export default OtherGraphs;