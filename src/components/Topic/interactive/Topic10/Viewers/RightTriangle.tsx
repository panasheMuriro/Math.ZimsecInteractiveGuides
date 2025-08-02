import React from 'react';

const RightTriangle: React.FC = () => {
  return (
       <div className="relative w-full h-64 font-sans">
          <svg 
            viewBox="0 0 200 150" 
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Triangle */}
            <polygon 
              points="30,120 170,120 30,30" 
              className="fill-gray-100 stroke-blue-500 stroke-2"
            />
            
            {/* Hypotenuse */}
            <line 
              x1="30" y1="30" 
              x2="170" y2="120" 
              className="stroke-red-500 stroke-2"
            />
            <text 
              x="110" y="65" 
              className="text-xs fill-red-600 font-medium"
            >
              Hypotenuse
            </text>
            
            {/* Opposite side */}
            <line 
              x1="30" y1="30" 
              x2="30" y2="120" 
              className="stroke-green-500 stroke-2"
            />
            <text 
              x="10" y="80" 
              className="text-xs fill-green-600 font-medium"
            >
              Opposite
            </text>
            
            {/* Adjacent side */}
            <line 
              x1="30" y1="120" 
              x2="170" y2="120" 
              className="stroke-purple-500 stroke-2"
            />
            <text 
              x="85" y="135" 
              className="text-xs fill-purple-600 font-medium"
            >
              Adjacent
            </text>
            
            {/* Angle indicator arc - moved to bottom-right corner */}
            <path 
              d="M 143 120 A 15 15 0 0 1 150 105" 
              className="stroke-orange-500 stroke-2 fill-none"
            />
            
            {/* Theta label - repositioned */}
            <text 
              x="122" y="110" 
              className="text-sm fill-orange-600 font-bold"
            >
              θ
            </text>
            
            {/* Right angle marker */}
            <polyline 
              points="30,110 40,110 40,120" 
              className="stroke-gray-700 stroke-2 fill-none"
            />
          </svg>
        </div>
  );
};

export default RightTriangle;