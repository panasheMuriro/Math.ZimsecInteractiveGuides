import React from 'react';

const PythagorasDemo1: React.FC = () => {
  // Triangle dimensions (right triangle with sides 3, 4, 5)
  const a = 120;  // horizontal side
  const b = 90;   // vertical side
  // const c = 150;  // hypotenuse
  
  // Positioning
  const startX = 50;
  const startY = 150;

  return (
    <div className="flex flex-col items-center p-4">      
      <svg 
        viewBox="0 0 250 200" 
        className="w-full max-w-xs rounded"
      >
        {/* Triangle */}
        <polygon 
          points={`${startX},${startY} ${startX + a},${startY} ${startX + a},${startY - b}`} 
          fill="#00000010" 
          stroke="gray" 
          strokeWidth="2"
        />
        
        {/* Side labels */}
        <text 
          x={startX + a/2} 
          y={startY + 20} 
          textAnchor="middle" 
          fontSize="14" 
          fill="#1e40af"
        >
          a = 3
        </text>
        
        <text 
          x={startX + a + 10} 
          y={startY - b/2} 
          textAnchor="start" 
          fontSize="14" 
          fill="#1e40af"
        >
          b = 4
        </text>
        
        <text 
          x={startX + a/2 - 10} 
          y={startY - b/2 - 10} 
          textAnchor="middle" 
          fontSize="14" 
          fill="#1e40af"
        >
          c = 5
        </text>
        
        {/* Corner labels */}
        <text x={startX - 10} y={startY + 5} fontSize="12">A</text>
        <text x={startX + a + 5} y={startY + 5} fontSize="12">B</text>
        <text x={startX + a + 5} y={startY - b - 5} fontSize="12">C</text>
      </svg>
      
   
    </div>
  );
};

export default PythagorasDemo1;