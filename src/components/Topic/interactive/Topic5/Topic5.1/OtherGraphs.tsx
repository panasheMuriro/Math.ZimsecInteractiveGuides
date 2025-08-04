
import React, { useState } from 'react';
import LinearGraphPlot from './LinearGraphPlot';
import QuadraticGraphPlot from './GraphViewers/QuadraticGraphPlot';
import CubicGraphPlot from './OtherPlots/CubicGraphPlot';
import ReciprocalGraphPlot from './OtherPlots/ReciprocalGraphPlot';
import SquareRootGraphPlot from './OtherPlots/SquareRootGraphPlot';
import ExponentialGraphPlot from './OtherPlots/ExponentialGraphPlot';


const NEUBRUTALISM_COLORS = {
  primaryDark: '#264653', 
  secondary: '#2a9d8f',   
  neutral: '#e9c46a',     
  warning: '#f4a261',     
  danger: '#e76f51',      

  
  white: '#ffffff',
  lightGray: '#f0f0f0',
  borderGray: '#d0d0d0',
  shadowGray: 'rgba(38, 70, 83, 0.2)', 
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.primaryDark}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`,
  padding: '1rem',
};


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
            d={0} 
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
            k={1} 
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
            a={1} 
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
            a={2} 
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

  
  const getButtonStyle = (graphType: GraphType) => {
    const isActive = selectedGraph === graphType;
    
    const bgColor = isActive ? NEUBRUTALISM_COLORS.secondary : NEUBRUTALISM_COLORS.lightGray;
    const textColor = isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.primaryDark;

    return {
      ...neubrutalismBase,
      padding: '0.75rem 1rem',
      fontWeight: 'bold',
      backgroundColor: bgColor,
      color: textColor,
      transition: 'all 0.2s',
      cursor: 'pointer',
      
      ...(isActive ? {} : { 
        ':hover': {
          backgroundColor: NEUBRUTALISM_COLORS.borderGray, 
        }
      })
    };
  };
  

  return (
    <div style={{
      ...neubrutalismBase,
      maxWidth: '800px', 
      width: '100%',
      margin: '0 auto',
      padding: '1.5rem',
      backgroundColor: NEUBRUTALISM_COLORS.danger, 
      borderColor: NEUBRUTALISM_COLORS.primaryDark,
      color: NEUBRUTALISM_COLORS.primaryDark,
      borderRadius: '20px',
      boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`, 
    }}>
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-extrabold mb-2" style={{ color: NEUBRUTALISM_COLORS.white }}>
          {getGraphTitle()}
        </h2>
        <p className="text-center" style={{ color: NEUBRUTALISM_COLORS.white }}>
          {getGraphDescription()}
        </p>
      </div>

      {/* Graph Display Area */}
      <div style={{
        ...neubrutalismBase,
        backgroundColor: NEUBRUTALISM_COLORS.white, 
        borderColor: NEUBRUTALISM_COLORS.primaryDark,
        width: '100%',
        marginBottom: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
        {renderGraph()}
      </div>

      {/* Graph Selection Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
        {/* Cubic */}
        <button
          onClick={() => setSelectedGraph('cubic')}
          style={getButtonStyle('cubic')}
          onMouseEnter={(e) => {
            if (selectedGraph !== 'cubic') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.borderGray;
          }}
          onMouseLeave={(e) => {
            if (selectedGraph !== 'cubic') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.lightGray;
          }}
        >
          Cubic
        </button>
        {/* Reciprocal */}
        <button
          onClick={() => setSelectedGraph('reciprocal')}
          style={getButtonStyle('reciprocal')}
          onMouseEnter={(e) => {
            if (selectedGraph !== 'reciprocal') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.borderGray;
          }}
          onMouseLeave={(e) => {
            if (selectedGraph !== 'reciprocal') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.lightGray;
          }}
        >
          Reciprocal
        </button>
        {/* Square Root */}
        <button
          onClick={() => setSelectedGraph('squareRoot')}
          style={getButtonStyle('squareRoot')}
          onMouseEnter={(e) => {
            if (selectedGraph !== 'squareRoot') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.borderGray;
          }}
          onMouseLeave={(e) => {
            if (selectedGraph !== 'squareRoot') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.lightGray;
          }}
        >
          Square Root
        </button>
        {/* Exponential */}
        <button
          onClick={() => setSelectedGraph('exponential')}
          style={getButtonStyle('exponential')}
          onMouseEnter={(e) => {
            if (selectedGraph !== 'exponential') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.borderGray;
          }}
          onMouseLeave={(e) => {
            if (selectedGraph !== 'exponential') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.lightGray;
          }}
        >
          Exponential
        </button>
        {/* Linear */}
        <button
          onClick={() => setSelectedGraph('linear')}
          style={getButtonStyle('linear')}
          onMouseEnter={(e) => {
            if (selectedGraph !== 'linear') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.borderGray;
          }}
          onMouseLeave={(e) => {
            if (selectedGraph !== 'linear') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.lightGray;
          }}
        >
          Linear
        </button>
        {/* Quadratic */}
        <button
          onClick={() => setSelectedGraph('quadratic')}
          style={getButtonStyle('quadratic')}
          onMouseEnter={(e) => {
            if (selectedGraph !== 'quadratic') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.borderGray;
          }}
          onMouseLeave={(e) => {
            if (selectedGraph !== 'quadratic') e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.lightGray;
          }}
        >
          Quadratic
        </button>
      </div>
    </div>
  );
};

export default OtherGraphs