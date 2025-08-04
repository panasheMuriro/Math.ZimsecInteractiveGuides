
import React, { useState, useEffect, useRef } from 'react';


const NEUBRUTALISM_COLORS = {
  primaryDark: '#264653', 
  secondary: '#2a9d8f',   
  neutral: '#e9c46a',     
  warning: '#f4a261',     
  danger: '#e76f51',      

  
  white: '#ffffff',
  lightGray: '#f0f0f0',
  borderGray: '#d0d0d0',
  shadow: 'rgba(38, 70, 83, 0.2)', 
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.primaryDark}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
  padding: '1rem',
};


interface InteractivePointPlotProps {
  width?: number;
  height?: number;
  unitSize?: number;
  initialX?: number;
  initialY?: number;
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
  autoMoveInterval?: number; 
}

const InteractivePointPlot: React.FC<InteractivePointPlotProps> = ({
  width = 300,
  height = 300,
  unitSize = 30,
  initialX = 0,
  initialY = 0,
  minX = -5,
  maxX = 5,
  minY = -5,
  maxY = 5,
  autoMoveInterval = 5000,
}) => {
  const [xCoord, setXCoord] = useState(initialX);
  const [yCoord, setYCoord] = useState(initialY);
  const [isAnimating, setIsAnimating] = useState(true);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  
  const svgX = (width / 2) + xCoord * unitSize;
  const svgY = (height / 2) - yCoord * unitSize; 

  
  const movePoint = (direction: 'up' | 'down' | 'left' | 'right') => {
    handleUserInteraction();
    setXCoord(prev => {
      if (direction === 'left' && prev > minX) return prev - 1;
      if (direction === 'right' && prev < maxX) return prev + 1;
      return prev;
    });
    setYCoord(prev => {
      if (direction === 'up' && prev < maxY) return prev + 1;
      if (direction === 'down' && prev > minY) return prev - 1;
      return prev;
    });
  };

  
  const handleCoordinateChange = (coord: 'x' | 'y', value: string) => {
    handleUserInteraction();
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue)) {
      if (coord === 'x' && numValue >= minX && numValue <= maxX) {
        setXCoord(numValue);
      } else if (coord === 'y' && numValue >= minY && numValue <= maxY) {
        setYCoord(numValue);
      }
    }
  };

  
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setXCoord(prev => {
        const newX = prev >= maxX ? minX : prev + 1;
        
        if (newX === minX) {
          setYCoord(prevY => (prevY >= maxY ? minY : prevY + 1));
        }
        return newX;
      });
    }, autoMoveInterval);

    return () => clearInterval(interval);
  }, [isAnimating, maxX, maxY, minX, minY, autoMoveInterval]);

  
  const handleUserInteraction = () => {
    setIsAnimating(false);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setIsAnimating(true);
    }, autoMoveInterval * 2); 
  };

  
  const renderTicks = () => {
    const ticks = [];
    
    for (let i = minX; i <= maxX; i++) {
      const x = (width / 2) + i * unitSize;
      ticks.push(
        <line
          key={`x-tick-${i}`}
          x1={x}
          y1={height / 2 - 5}
          x2={x}
          y2={height / 2 + 5}
          stroke={NEUBRUTALISM_COLORS.primaryDark}
          strokeWidth="1"
        />
      );
      if (i !== 0) { 
        ticks.push(
          <text
            key={`x-label-${i}`}
            x={x}
            y={height / 2 + 20}
            textAnchor="middle"
            fill={NEUBRUTALISM_COLORS.primaryDark}
            fontSize="12"
            fontWeight="bold"
          >
            {i}
          </text>
        );
      }
    }
    
    for (let i = minY; i <= maxY; i++) {
      const y = (height / 2) - i * unitSize;
      ticks.push(
        <line
          key={`y-tick-${i}`}
          x1={width / 2 - 5}
          y1={y}
          x2={width / 2 + 5}
          y2={y}
          stroke={NEUBRUTALISM_COLORS.primaryDark}
          strokeWidth="1"
        />
      );
      if (i !== 0) { 
        ticks.push(
          <text
            key={`y-label-${i}`}
            x={width / 2 - 15}
            y={y + 4}
            textAnchor="end"
            fill={NEUBRUTALISM_COLORS.primaryDark}
            fontSize="12"
            fontWeight="bold"
          >
            {i}
          </text>
        );
      }
    }
    return ticks;
  };

  
  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        ...neubrutalismBase,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        gap: '20px',
        padding: '20px',
        backgroundColor: NEUBRUTALISM_COLORS.danger, 
        borderColor: NEUBRUTALISM_COLORS.primaryDark,
        color: NEUBRUTALISM_COLORS.primaryDark,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`, 
      }}
    >
      {/* Plot Area */}
      <div
        style={{
          overflow: 'hidden',
          width: '100%',
          backgroundColor: NEUBRUTALISM_COLORS.white, 
          borderColor: NEUBRUTALISM_COLORS.primaryDark,
          ...neubrutalismBase, 
          padding: '0', 
        }}
      >
        <svg
          width="100%"
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          onClick={handleUserInteraction}
          style={{ cursor: 'pointer' }}
        >
          {/* Grid Lines */}
          {/* Vertical grid lines */}
          {Array.from({ length: maxX - minX + 1 }, (_, i) => (
            <line
              key={`v-grid-${i}`}
              x1={(width / 2) + (minX + i) * unitSize}
              y1="0"
              x2={(width / 2) + (minX + i) * unitSize}
              y2={height}
              stroke={NEUBRUTALISM_COLORS.secondary} 
              strokeWidth="0.5"
              strokeDasharray="4,4"
            />
          ))}
          {/* Horizontal grid lines */}
          {Array.from({ length: maxY - minY + 1 }, (_, i) => (
            <line
              key={`h-grid-${i}`}
              x1="0"
              y1={(height / 2) - (minY + i) * unitSize}
              x2={width}
              y2={(height / 2) - (minY + i) * unitSize}
              stroke={NEUBRUTALISM_COLORS.secondary} 
              strokeWidth="0.5"
              strokeDasharray="4,4"
            />
          ))}

          {/* Axes */}
          <line 
            x1="0"
            y1={height / 2}
            x2={width}
            y2={height / 2}
            stroke={NEUBRUTALISM_COLORS.primaryDark}
            strokeWidth="2"
          />
          <line 
            x1={width / 2}
            y1="0"
            x2={width / 2}
            y2={height}
            stroke={NEUBRUTALISM_COLORS.primaryDark}
            strokeWidth="2"
          />

          {/* Origin Label */}
          <text
            x={width / 2 + 10}
            y={height / 2 + 15}
            fill={NEUBRUTALISM_COLORS.primaryDark}
            fontSize="12"
            fontWeight="bold"
          >
            0
          </text>

          {/* Ticks and Labels */}
          {renderTicks()}

          {/* Point */}
          <circle
            cx={svgX}
            cy={svgY}
            r="6"
            fill={NEUBRUTALISM_COLORS.secondary} 
            stroke={NEUBRUTALISM_COLORS.primaryDark}
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Coordinates Display and Controls */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: '12px',
        }}
      >
        {/* Coordinate Inputs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            width: '100%',
          }}
        >
          {/* X Coordinate Input */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="x-coord" style={{ fontWeight: 'bold', marginBottom: '4px', color: NEUBRUTALISM_COLORS.white }}>
              X Coordinate
            </label>
            <input
              id="x-coord"
              type="number"
              value={xCoord}
              onChange={(e) => handleCoordinateChange('x', e.target.value)}
              min={minX}
              max={maxX}
              style={{
                width: '80px',
                padding: '8px',
                textAlign: 'center',
                fontWeight: 'bold',
                color: NEUBRUTALISM_COLORS.primaryDark,
                backgroundColor: NEUBRUTALISM_COLORS.lightGray,
                border: `2px solid ${NEUBRUTALISM_COLORS.borderGray}`,
                borderRadius: '8px',
              }}
            />
          </div>

          {/* Y Coordinate Input */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="y-coord" style={{ fontWeight: 'bold', marginBottom: '4px', color: NEUBRUTALISM_COLORS.white }}>
              Y Coordinate
            </label>
            <input
              id="y-coord"
              type="number"
              value={yCoord}
              onChange={(e) => handleCoordinateChange('y', e.target.value)}
              min={minY}
              max={maxY}
              style={{
                width: '80px',
                padding: '8px',
                textAlign: 'center',
                fontWeight: 'bold',
                color: NEUBRUTALISM_COLORS.primaryDark,
                backgroundColor: NEUBRUTALISM_COLORS.lightGray,
                border: `2px solid ${NEUBRUTALISM_COLORS.borderGray}`,
                borderRadius: '8px',
              }}
            />
          </div>
        </div>

        {/* Directional Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => movePoint('up')}
            style={{
              ...neubrutalismBase,
              padding: '8px 16px',
              fontWeight: 'bold',
              backgroundColor: NEUBRUTALISM_COLORS.secondary, 
              color: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.primaryDark,
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.warning} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.secondary}
          >
            Up (↑)
          </button>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => movePoint('left')}
              style={{
                ...neubrutalismBase,
                padding: '8px 16px',
                fontWeight: 'bold',
                backgroundColor: NEUBRUTALISM_COLORS.secondary, 
                color: NEUBRUTALISM_COLORS.white,
                borderColor: NEUBRUTALISM_COLORS.primaryDark,
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.warning} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.secondary}
            >
              Left (←)
            </button>
            <button
              onClick={() => movePoint('right')}
              style={{
                ...neubrutalismBase,
                padding: '8px 16px',
                fontWeight: 'bold',
                backgroundColor: NEUBRUTALISM_COLORS.secondary, 
                color: NEUBRUTALISM_COLORS.white,
                borderColor: NEUBRUTALISM_COLORS.primaryDark,
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.warning} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.secondary}
            >
              Right (→)
            </button>
          </div>
          <button
            onClick={() => movePoint('down')}
            style={{
              ...neubrutalismBase,
              padding: '8px 16px',
              fontWeight: 'bold',
              backgroundColor: NEUBRUTALISM_COLORS.secondary, 
              color: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.primaryDark,
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.warning} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.secondary}
          >
            Down (↓)
          </button>
        </div>

        {/* Auto-move Status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
       
            backgroundColor: isAnimating ? NEUBRUTALISM_COLORS.neutral : NEUBRUTALISM_COLORS.lightGray, 
            borderColor: NEUBRUTALISM_COLORS.primaryDark,
            ...neubrutalismBase, 
            fontSize: '14px',
            color: NEUBRUTALISM_COLORS.primaryDark,
            fontWeight: 'bold',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: isAnimating ? NEUBRUTALISM_COLORS.secondary : NEUBRUTALISM_COLORS.borderGray, 
              transition: 'background-color 0.3s ease',
            }}
          />
          {isAnimating ? 'Auto-moving point...' : 'Paused - interact to resume'}
        </div>
      </div>
    </div>
  );
};

export default InteractivePointPlot;