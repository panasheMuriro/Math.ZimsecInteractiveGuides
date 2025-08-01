import React, { useState, useEffect, useRef } from 'react';

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
  autoMoveInterval?: number; // in milliseconds
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
  autoMoveInterval = 5000
}) => {
  const [xCoord, setXCoord] = useState(initialX);
  const [yCoord, setYCoord] = useState(initialY);
  const [isAnimating, setIsAnimating] = useState(true);
  const interactionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Convert Cartesian coordinates to SVG coordinates
  const x = centerX + xCoord * unitSize;
  const y = centerY - yCoord * unitSize;

  // Auto-move point when animating
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setXCoord(prev => {
        const newX = prev >= maxX ? minX : prev + 1;
        return newX;
      });
      
      setYCoord(prev => {
        const newY = prev >= maxY ? minY : prev + 1;
        return newY;
      });
    }, autoMoveInterval);

    return () => clearInterval(interval);
  }, [isAnimating, maxX, maxY, minX, minY, autoMoveInterval]);

  // Reset animation timeout on user interaction
  const handleUserInteraction = () => {
    setIsAnimating(false);
    
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    
    interactionTimeoutRef.current = setTimeout(() => {
      setIsAnimating(true);
    }, autoMoveInterval * 2);
  };

  // Generate tick marks and labels within visible range
  const renderTicks = () => {
    const ticks = [];
    
    // X-axis ticks and labels
    for (let i = minX; i <= maxX; i++) {
      if (i === 0) continue;
      const xPos = centerX + i * unitSize;
      ticks.push(
        <g key={`x-${i}`}>
          <line 
            x1={xPos} 
            y1={centerY - 5} 
            x2={xPos} 
            y2={centerY + 5} 
            stroke="rgba(255, 255, 255, 0.7)" 
            strokeWidth={1} 
          />
          <text 
            x={xPos} 
            y={centerY + 20} 
            textAnchor="middle" 
            fontSize={12}
            fill="white"
          >
            {i}
          </text>
        </g>
      );
    }

    // Y-axis ticks and labels
    for (let i = minY; i <= maxY; i++) {
      if (i === 0) continue;
      const yPos = centerY - i * unitSize;
      ticks.push(
        <g key={`y-${i}`}>
          <line 
            x1={centerX - 5} 
            y1={yPos} 
            x2={centerX + 5} 
            y2={yPos} 
            stroke="rgba(255, 255, 255, 0.7)" 
            strokeWidth={1} 
          />
          <text 
            x={centerX - 15} 
            y={yPos + 4} 
            textAnchor="end" 
            fontSize={12}
            fill="white"
          >
            {i}
          </text>
        </g>
      );
    }
    
    return ticks;
  };

  // Handle coordinate changes with bounds checking
  const incrementX = () => {
    handleUserInteraction();
    if (xCoord < maxX) setXCoord(xCoord + 1);
  };

  const decrementX = () => {
    handleUserInteraction();
    if (xCoord > minX) setXCoord(xCoord - 1);
  };

  const incrementY = () => {
    handleUserInteraction();
    if (yCoord < maxY) setYCoord(yCoord + 1);
  };

  const decrementY = () => {
    handleUserInteraction();
    if (yCoord > minY) setYCoord(yCoord - 1);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="interactive-point-plot" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      maxWidth: '100%',
      gap: '20px',
      padding: '20px',
      backgroundColor: '#526D82',
      borderRadius: '12px',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)'
    }}>
      <div className="point-plot-container" style={{ 
        overflow: 'hidden', 
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}>
        <svg 
          width="100%" 
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Grid lines - kept original colors */}
          {Array.from({ length: maxX - minX + 1 }).map((_, i) => {
            const xPos = (i + minX) * unitSize + centerX;
            return (
              <line
                key={`grid-x-${i}`}
                x1={xPos}
                y1={0}
                x2={xPos}
                y2={height}
                stroke="#e2e8f0"
                strokeWidth={1}
              />
            );
          })}
          {Array.from({ length: maxY - minY + 1 }).map((_, i) => {
            const yPos = (i + minY) * unitSize + centerY;
            return (
              <line
                key={`grid-y-${i}`}
                x1={0}
                y1={yPos}
                x2={width}
                y2={yPos}
                stroke="#e2e8f0"
                strokeWidth={1}
              />
            );
          })}
          
          {/* Axes - kept original colors */}
          <line 
            x1={0} 
            y1={centerY} 
            x2={width} 
            y2={centerY} 
            stroke="#475569" 
            strokeWidth={2} 
          />
          <line 
            x1={centerX} 
            y1={0} 
            x2={centerX} 
            y2={height} 
            stroke="#475569" 
            strokeWidth={2} 
          />
          
          {/* Ticks and labels - kept original colors */}
          {renderTicks()}
          
          {/* Origin label - kept original colors */}
          <circle cx={centerX} cy={centerY} r={3} fill="#475569" />
          <text x={centerX + 10} y={centerY + 15} fontSize={12} fill="#94a3b8">(0,0)</text>
          
          {/* Axis labels - kept original colors */}
          <text x={width - 15} y={centerY - 15} textAnchor="end" fontSize={14} fontWeight="bold" fill="#475569">x</text>
          <text x={centerX + 15} y={20} textAnchor="start" fontSize={14} fontWeight="bold" fill="#475569">y</text>
          
          {/* Plotted point - kept original colors */}
          <circle cx={x} cy={y} r={7} fill="#dc2626" stroke="#b91c1c" strokeWidth={2} />
          <text 
            x={x + 15} 
            y={y - 15} 
            fontSize={14} 
            fontWeight="bold" 
            fill="#1e293b"
            textAnchor="start"
          >
            ({xCoord}, {yCoord})
          </text>
        </svg>
      </div>
      
      {/* Interactive Controls with Adjusted Colors */}
      <div className="controls" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px',
        width: '100%',
        maxWidth: '350px'
      }}>
        {/* X-coordinate controls */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '15px 20px',
          background: 'linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%)',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(96, 165, 250, 0.3)'
        }}>
          <button 
            onClick={decrementX}
            disabled={xCoord <= minX}
            style={{
              width: '45px',
              height: '45px',
              fontSize: '24px',
              fontWeight: 'bold',
              backgroundColor: xCoord > minX ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              cursor: xCoord > minX ? 'pointer' : 'not-allowed',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            -
          </button>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            color: 'white'
          }}>
            <span style={{ fontSize: '12px', opacity: 0.9, marginBottom: '4px', letterSpacing: '0.5px' }}>X COORDINATE</span>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{xCoord}</span>
          </div>
          
          <button 
            onClick={incrementX}
            disabled={xCoord >= maxX}
            style={{
              width: '45px',
              height: '45px',
              fontSize: '24px',
              fontWeight: 'bold',
              backgroundColor: xCoord < maxX ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              cursor: xCoord < maxX ? 'pointer' : 'not-allowed',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            +
          </button>
        </div>
        
        {/* Y-coordinate controls */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '15px 20px',
          background: 'linear-gradient(135deg, #fbbf24 0%, #fcd34d 100%)',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)'
        }}>
          <button 
            onClick={decrementY}
            disabled={yCoord <= minY}
            style={{
              width: '45px',
              height: '45px',
              fontSize: '24px',
              fontWeight: 'bold',
              backgroundColor: yCoord > minY ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              cursor: yCoord > minY ? 'pointer' : 'not-allowed',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            -
          </button>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            color: 'white'
          }}>
            <span style={{ fontSize: '12px', opacity: 0.9, marginBottom: '4px', letterSpacing: '0.5px' }}>Y COORDINATE</span>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{yCoord}</span>
          </div>
          
          <button 
            onClick={incrementY}
            disabled={yCoord >= maxY}
            style={{
              width: '45px',
              height: '45px',
              fontSize: '24px',
              fontWeight: 'bold',
              backgroundColor: yCoord < maxY ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              cursor: yCoord < maxY ? 'pointer' : 'not-allowed',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            +
          </button>
        </div>
      </div>
      
      {/* Animation Status Indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        backgroundColor: isAnimating ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        border: `1px solid ${isAnimating ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)'}`,
        fontSize: '14px',
        color: 'white'
      }}>
        <div style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: isAnimating ? '#93c5fd' : '#cbd5e1',
          transition: 'background-color 0.3s ease'
        }} />
        {isAnimating ? 'Auto-moving point...' : 'Paused - interact to resume'}
      </div>
    </div>
  );
};

export default InteractivePointPlot;