
export function CollinearAngles() {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <svg
        width="100%"
        viewBox="0 0 320 240"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <rect width="320" height="240" fill="#f8fafc" />

        <line
          x1="20"
          y1="120"
          x2="300"
          y2="120"
          stroke="#1f2937"
          strokeWidth="2"
        />

        <circle cx="160" cy="120" r="3" fill="#1f2937" />

        <circle cx="50" cy="120" r="2.5" fill="#dc2626" />

        <circle cx="270" cy="120" r="2.5" fill="#059669" />

        <circle cx="230" cy="10" r="2.5" fill="#2563eb" />

        <line
          x1="160"
          y1="120"
          x2="230"
          y2="10"
          stroke="#2563eb"
          strokeWidth="2"
        />

        <path
          d="M 130 120 A 30 30 0 0 1 175 95"
          stroke="#dc2626"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M 175 95 A 50 50 0 0 1 245 120"
          stroke="#059669"
          strokeWidth="2"
          fill="none"
        />

        <text
          x="50"
          y="110"
          fontSize="14"
          fontFamily="serif"
          fill="#dc2626"
          textAnchor="middle"
          fontWeight="bold"
        >
          A
        </text>
        <text
          x="160"
          y="110"
          fontSize="14"
          fontFamily="serif"
          fill="#1f2937"
          textAnchor="middle"
          fontWeight="bold"
        >
          O
        </text>
        <text
          x="270"
          y="110"
          fontSize="14"
          fontFamily="serif"
          fill="#059669"
          textAnchor="middle"
          fontWeight="bold"
        >
          B
        </text>
        <text
          x="235"
          y="10"
          fontSize="14"
          fontFamily="serif"
          fill="#2563eb"
          textAnchor="middle"
          fontWeight="bold"
        >
          C
        </text>

        <text
          x="115"
          y="85"
          fontSize="14"
          fontFamily="serif"
          fill="#dc2626"
          textAnchor="middle"
          fontWeight="bold"
        >
          ∠ AOC
        </text>
        <text
          x="240"
          y="85"
          fontSize="14"
          fontFamily="serif"
          fill="#059669"
          textAnchor="middle"
          fontWeight="bold"
        >
          ∠BOC
        </text>

        <text
          x="160"
          y="180"
          fontSize="16"
          fontFamily="serif"
          fill="#1f2937"
          textAnchor="middle"
          fontWeight="bold"
        >
          ∠AOC + ∠BOC = 180°
        </text>
      </svg>
    </div>
  );
}
export function LineAnglesExamples() {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 320 180"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <rect width="320" height="280" fill="#f8fafc" />

        <line
          x1="20"
          y1="120"
          x2="300"
          y2="120"
          stroke="#1f2937"
          strokeWidth="2"
        />

        <circle cx="160" cy="120" r="3" fill="#1f2937" />

        <line
          x1="160"
          y1="120"
          x2="80"
          y2="20"
          stroke="#dc2626"
          strokeWidth="2"
        />

        <line
          x1="160"
          y1="120"
          x2="215"
          y2="20"
          stroke="#2563eb"
          strokeWidth="2"
        />

        <path
          d="M 130 120 A 30 30 0 0 1 135 90"
          stroke="#dc2626"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M 135 90 A 25 25 0 0 1 175 95"
          stroke="#2563eb"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M 175 95 A 35 35 0 0 1 210 120"
          stroke="#059669"
          strokeWidth="2"
          fill="none"
        />

        <text
          x="160"
          y="110"
          fontSize="12"
          fontFamily="serif"
          fill="#1f2937"
          textAnchor="middle"
          fontWeight="bold"
        >
          O
        </text>

        <text
          x="85"
          y="85"
          fontSize="13"
          fontFamily="serif"
          fill="#dc2626"
          textAnchor="middle"
          fontWeight="bold"
        >
          ∠A = 65°
        </text>

        <text
          x="155"
          y="75"
          fontSize="13"
          fontFamily="serif"
          fill="#2563eb"
          textAnchor="middle"
          fontWeight="bold"
        >
          ∠B = 40°
        </text>

        <text
          x="215"
          y="85"
          fontSize="13"
          fontFamily="serif"
          fill="#059669"
          textAnchor="middle"
          fontWeight="bold"
        >
          ∠C = ?
        </text>
      </svg>
    </div>
  );
}

export const StraightLineSVG = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <svg
        style={{ scale: 1.5 }}
        viewBox="0 0 400 200"
        width="100%"
        height="auto"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base line */}
        <line
          x1="50"
          y1="120"
          x2="350"
          y2="120"
          stroke="#008080"
          strokeWidth="2"
        />

        {/* Center point */}
        <circle cx="200" cy="120" r="3" fill="#008080" />

        {/* Angle arcs */}
        <path
          d="M 150 120 A 50 50 0 0 1 180 85"
          stroke="#008080"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 180 85 A 50 50 0 0 1 220 85"
          stroke="#008080"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 220 85 A 50 50 0 0 1 250 120"
          stroke="#008080"
          strokeWidth="2"
          fill="none"
        />

        {/* Angle lines */}
        <line
          x1="200"
          y1="120"
          x2="150"
          y2="40"
          stroke="#008080"
          strokeWidth="1"
        />
        <line
          x1="200"
          y1="120"
          x2="250"
          y2="40"
          stroke="#008080"
          strokeWidth="1"
        />

        {/* Angle labels */}
        <text
          x="130"
          y="95"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fill="#008080"
          textAnchor="middle"
        >
          A
        </text>
        <text
          x="200"
          y="75"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fill="#008080"
          textAnchor="middle"
        >
          B
        </text>
        <text
          x="255"
          y="95"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fill="#008080"
          textAnchor="middle"
        >
          C
        </text>

        {/* Equation */}
        <text
          x="200"
          y="170"
          fontFamily="Arial, sans-serif"
          fontSize="18"
          fill="#008080"
          textAnchor="middle"
          fontWeight="bold"
        >
          A + B + C = 180°
        </text>
      </svg>
    </div>
  );
};

export function AnglesAroundPoint() {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <svg width="100%" viewBox="0 0 320 320" className="">
        {/* Center point O */}
        <circle cx="160" cy="160" r="4" fill="#1f2937" />

        {/* Ray for angle A (going right) */}
        <line
          x1="160"
          y1="160"
          x2="280"
          y2="160"
          stroke="#dc2626"
          strokeWidth="2"
        />

        {/* Ray for angle B (going up-right, 80° from A) */}
        <line
          x1="160"
          y1="160"
          x2="240"
          y2="80"
          stroke="#2563eb"
          strokeWidth="2"
        />

        {/* Ray for angle C (going up-left, 140° from B) */}
        <line
          x1="160"
          y1="160"
          x2="80"
          y2="100"
          stroke="#059669"
          strokeWidth="2"
        />

        {/* Ray for angle D (going down-left, 140° from C) */}
        <line
          x1="160"
          y1="160"
          x2="100"
          y2="240"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        {/* Angle A arc (80°) - from right ray to up-right ray */}
        <path
          d="M 200 160 A 40 40 0 0 0 195 125"
          stroke="#dc2626"
          strokeWidth="3"
          fill="none"
        />

        {/* Angle B arc (140°) - from up-right ray to up-left ray */}
        <path
          d="M 195 125 A 45 45 0 0 0 125 135"
          stroke="#2563eb"
          strokeWidth="3"
          fill="none"
        />

        {/* Angle C arc (100°) - from up-left ray to down-left ray */}
        <path
          d="M 125 135 A 35 35 0 0 0 140 195"
          stroke="#059669"
          strokeWidth="3"
          fill="none"
        />

        {/* Angle D arc (40°) - from down-left ray back to right ray */}
        <path
          d="M 140 195 A 50 50 0 0 0 200 160"
          stroke="#f59e0b"
          strokeWidth="3"
          fill="none"
        />

        {/* Center point label */}
        <text
          x="160"
          y="145"
          fontSize="12"
          fontFamily="serif"
          fill="#1f2937"
          textAnchor="middle"
          fontWeight="bold"
        >
          O
        </text>

        {/* Angle labels with values */}
        <text
          x="250"
          y="140"
          fontSize="11"
          fontFamily="serif"
          fill="#dc2626"
          textAnchor="middle"
          fontWeight="bold"
        >
          A = 80°
        </text>

        <text
          x="180"
          y="105"
          fontSize="11"
          fontFamily="serif"
          fill="#2563eb"
          textAnchor="middle"
          fontWeight="bold"
        >
          B = 140°
        </text>

        <text
          x="80"
          y="125"
          fontSize="11"
          fontFamily="serif"
          fill="#059669"
          textAnchor="middle"
          fontWeight="bold"
        >
          C = 100°
        </text>

        <text
          x="150"
          y="210"
          fontSize="11"
          fontFamily="serif"
          fill="#f59e0b"
          textAnchor="middle"
          fontWeight="bold"
        >
          D = 40°
        </text>

        {/* Main formula */}
        <text
          x="160"
          y="280"
          fontSize="16"
          fontFamily="serif"
          fill="#1f2937"
          textAnchor="middle"
          fontWeight="bold"
        >
          A + B + C + D = 360°
        </text>

        {/* Substitution */}
        <text
          x="160"
          y="300"
          fontSize="12"
          fontFamily="serif"
          fill="#374151"
          textAnchor="middle"
        >
          80° + 140° + 100° + 40° = 360°
        </text>
      </svg>
    </div>
  );
}

export function VerticallyOppositeAngles() {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-white w-full max-w-md">
        <svg
          width="100%"
          viewBox="0 0 320 320"        >
          {/* Intersecting lines */}
          {/* Line 1: diagonal from top-left to bottom-right */}
          <line
            x1="60"
            y1="60"
            x2="260"
            y2="260"
            stroke="#1f2937"
            strokeWidth="2"
          />

          {/* Line 2: diagonal from top-right to bottom-left */}
          <line
            x1="260"
            y1="60"
            x2="60"
            y2="260"
            stroke="#1f2937"
            strokeWidth="2"
          />

          {/* Center intersection point */}
          <circle cx="160" cy="160" r="4" fill="#1f2937" />

          {/* Angle a (top angle) - 65° */}
          <path
            d="M 140 130 A 30 30 0 0 1 180 130"
            stroke="#dc2626"
            strokeWidth="3"
            fill="none"
          />

          {/* Angle b (right angle) - 115° */}
          <path
            d="M 190 140 A 40 40 0 0 1 190 180"
            stroke="#2563eb"
            strokeWidth="3"
            fill="none"
          />

          {/* Angle c (bottom angle) - 65° (opposite to a) */}
          <path
            d="M 180 190 A 30 30 0 0 1 140 190"
            stroke="#dc2626"
            strokeWidth="3"
            fill="none"
          />

          {/* Angle d (left angle) - 115° (opposite to b) */}
          <path
            d="M 130 180 A 40 40 0 0 1 130 140"
            stroke="#2563eb"
            strokeWidth="3"
            fill="none"
          />

          {/* Angle labels */}
          <text
            x="160"
            y="95"
            fontSize="14"
            fontFamily="serif"
            fill="#dc2626"
            textAnchor="middle"
            fontWeight="bold"
          >
            a = 65°
          </text>

          <text
            x="250"
            y="165"
            fontSize="14"
            fontFamily="serif"
            fill="#2563eb"
            textAnchor="middle"
            fontWeight="bold"
          >
            b = 115°
          </text>

          <text
            x="160"
            y="235"
            fontSize="14"
            fontFamily="serif"
            fill="#dc2626"
            textAnchor="middle"
            fontWeight="bold"
          >
            c = 65°
          </text>

          <text
            x="80"
            y="165"
            fontSize="14"
            fontFamily="serif"
            fill="#2563eb"
            textAnchor="middle"
            fontWeight="bold"
          >
            d = 115°
          </text>

          {/* Key relationships */}
          <text
            x="160"
            y="270"
            fontSize="14"
            fontFamily="serif"
            fill="#1f2937"
            textAnchor="middle"
            fontWeight="bold"
          >
            Opposite angles are equal:
          </text>

          <text
            x="160"
            y="290"
            fontSize="12"
            fontFamily="serif"
            fill="#dc2626"
            textAnchor="middle"
          >
            ∠a = ∠c = 65°
          </text>

          <text
            x="160"
            y="305"
            fontSize="12"
            fontFamily="serif"
            fill="#2563eb"
            textAnchor="middle"
          >
            ∠b = ∠d = 115°
          </text>
        </svg>
      </div>
    </div>
  );
}

export const AngleOfElevation =  () => {
  // Fixed angle for demonstration
  const elevation = 35;
  
  // SVG dimensions and positions
  const observerX = 80;
  const observerY = 200;
  const objectDistance = 180;
  const objectX = observerX + objectDistance;
  const objectHeight = objectDistance * Math.tan(elevation * Math.PI / 180);
  const objectY = observerY - objectHeight;

  // Line of sight end point
  const sightEndX = observerX + 220;
  const sightEndY = observerY - 220 * Math.tan(elevation * Math.PI / 180);

  // Angle arc
  const arcRadius = 45;
  const arcEndX = observerX + arcRadius * Math.cos(-elevation * Math.PI / 180);
  const arcEndY = observerY + arcRadius * Math.sin(-elevation * Math.PI / 180);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white">
      <svg 
        width="320" 
        height="240" 
        className="w-full border border-gray-300 bg-gradient-to-b from-sky-50 to-green-50 rounded-lg"
        viewBox="0 0 320 240"
      >
        <defs>
          {/* Arrow marker */}
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon
              points="0 0, 8 3, 0 6"
              fill="#374151"
            />
          </marker>
        </defs>

        {/* Ground line */}
        <line 
          x1="20" 
          y1={observerY} 
          x2="300" 
          y2={observerY} 
          stroke="#8B4513" 
          strokeWidth="3"
        />
        
        {/* Building/Object */}
        <rect 
          x={objectX - 10} 
          y={objectY} 
          width="20" 
          height={observerY - objectY} 
          fill="#6B7280" 
          stroke="#374151" 
          strokeWidth="2"
        />
        
        {/* Observer (person) */}
        <circle 
          cx={observerX} 
          cy={observerY - 5} 
          r="6" 
          fill="#F59E0B"
        />
        
        {/* Horizontal reference line */}
        <line 
          x1={observerX} 
          y1={observerY - 5} 
          x2={observerX + 80} 
          y2={observerY - 5} 
          stroke="#6B7280" 
          strokeWidth="2"
          strokeDasharray="4,3"
        />
        
        {/* Line of sight */}
        <line 
          x1={observerX} 
          y1={observerY - 5} 
          x2={sightEndX} 
          y2={sightEndY} 
          stroke="#EF4444" 
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />
        
        {/* Angle arc */}
        <path
          d={`M ${observerX + arcRadius} ${observerY - 5} A ${arcRadius} ${arcRadius} 0 0 0 ${arcEndX} ${arcEndY}`}
          fill="rgba(59, 130, 246, 0.4)"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        
        {/* Angle label */}
        <text 
          x={observerX + arcRadius * 0.75} 
          y={observerY - arcRadius * 0.25} 
          fontSize="16" 
          fill="#1E40AF" 
          fontWeight="bold"
          textAnchor="middle"
        >
          {elevation}°
        </text>
        
        {/* Labels */}
        <text x={observerX - 30} y={observerY + 20} fontSize="12" fill="#374151" fontWeight="bold">
          Observer
        </text>
        
        <text x={objectX - 15} y={objectY - 10} fontSize="12" fill="#374151" fontWeight="bold">
          Object
        </text>
        
        <text x="240" y={observerY + 15} fontSize="12" fill="#8B4513" fontWeight="bold">
          Horizontal
        </text>
        
        <text x="150" y="130" fontSize="12" fill="#EF4444" fontWeight="bold" transform="rotate(-35 150 130)">
          Line of Sight
        </text>
        
        {/* "Looking UP" indicator */}
        <path
          d="M 280 30 L 290 20 L 300 30"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text x="275" y="50" fontSize="11" fill="#F59E0B" fontWeight="bold">
          UP
        </text>
        
        {/* Right angle at base */}
        <path
          d={`M ${objectX - 8} ${observerY} L ${objectX - 8} ${observerY - 8} L ${objectX} ${observerY - 8}`}
          fill="none"
          stroke="#374151"
          strokeWidth="1.5"
        />
      </svg>
      
   
    </div>
  );
};

export const AngleOfDepression = () => {
  // Fixed angle for demonstration
  const depression = 25;
  
  // SVG dimensions and positions
  const observerX = 80;
  const observerY = 80; // Observer is elevated (higher up)
  const objectDistance = 180;
  const objectX = observerX + objectDistance;
  const objectHeight = objectDistance * Math.tan(depression * Math.PI / 180);
  const objectY = observerY + objectHeight; // Object is below observer

  // Line of sight end point (going downward)
  const sightEndX = observerX + 220;
  const sightEndY = observerY + 220 * Math.tan(depression * Math.PI / 180);

  // Angle arc (measuring downward from horizontal)
  const arcRadius = 45;
  const arcEndX = observerX + arcRadius * Math.cos(depression * Math.PI / 180);
  const arcEndY = observerY + arcRadius * Math.sin(depression * Math.PI / 180);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white">
      <svg 
        width="320" 
        height="240" 
        className="w-full border border-gray-300 bg-gradient-to-b from-sky-50 to-green-50 rounded-lg"
        viewBox="0 0 320 240"
      >
        <defs>
          {/* Arrow marker */}
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon
              points="0 0, 8 3, 0 6"
              fill="#374151"
            />
          </marker>
        </defs>

        {/* Ground line */}
        <line 
          x1="20" 
          y1="200" 
          x2="300" 
          y2="200" 
          stroke="#8B4513" 
          strokeWidth="3"
        />
        
        {/* Elevated platform/building for observer */}
        <rect 
          x={observerX - 25} 
          y={observerY - 10} 
          width="50" 
          height="130" 
          fill="#94A3B8" 
          stroke="#475569" 
          strokeWidth="2"
        />
        
        {/* Object at ground level */}
        <circle 
          cx={objectX} 
          cy={objectY} 
          r="8" 
          fill="#10B981"
          stroke="#059669"
          strokeWidth="2"
        />
        
        {/* Observer (person on elevated platform) */}
        <circle 
          cx={observerX} 
          cy={observerY - 5} 
          r="6" 
          fill="#F59E0B"
        />
        
        {/* Horizontal reference line */}
        <line 
          x1={observerX} 
          y1={observerY - 5} 
          x2={observerX + 80} 
          y2={observerY - 5} 
          stroke="#6B7280" 
          strokeWidth="2"
          strokeDasharray="4,3"
        />
        
        {/* Line of sight (going downward) */}
        <line 
          x1={observerX} 
          y1={observerY - 5} 
          x2={sightEndX} 
          y2={sightEndY} 
          stroke="#EF4444" 
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />
        
        {/* Angle arc (below horizontal) */}
        <path
          d={`M ${observerX + arcRadius} ${observerY - 5} A ${arcRadius} ${arcRadius} 0 0 1 ${arcEndX} ${arcEndY}`}
          fill="rgba(239, 68, 68, 0.4)"
          stroke="#DC2626"
          strokeWidth="2"
        />
        
        {/* Angle label */}
        <text 
          x={observerX + arcRadius * 0.75} 
          y={observerY + arcRadius * 0.4} 
          fontSize="16" 
          fill="#B91C1C" 
          fontWeight="bold"
          textAnchor="middle"
        >
          {depression}°
        </text>
        
        {/* Labels */}
        <text x={observerX - 30} y={observerY + 25} fontSize="12" fill="#374151" fontWeight="bold">
          Observer
        </text>
        
        <text x={objectX - 15} y={objectY + 25} fontSize="12" fill="#059669" fontWeight="bold">
          Object
        </text>
        
        <text x="240" y={observerY + 10} fontSize="12" fill="#6B7280" fontWeight="bold">
          Horizontal
        </text>
        
        <text x="160" y="140" fontSize="12" fill="#EF4444" fontWeight="bold" transform="rotate(25 160 140)">
          Line of Sight
        </text>
        
        <text x="240" y="215" fontSize="12" fill="#8B4513" fontWeight="bold">
          Ground
        </text>
        
        {/* "Looking DOWN" indicator */}
        <path
          d="M 280 180 L 290 190 L 300 180"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text x="270" y="170" fontSize="11" fill="#F59E0B" fontWeight="bold">
          DOWN
        </text>
        
        {/* Right angle at object base */}
        <path
          d={`M ${objectX - 8} ${objectY} L ${objectX - 8} ${objectY + 8} L ${objectX} ${objectY + 8}`}
          fill="none"
          stroke="#374151"
          strokeWidth="1.5"
        />
        
        {/* Vertical height indicator */}
        <line 
          x1={objectX + 15} 
          y1={observerY - 5} 
          x2={objectX + 15} 
          y2={objectY} 
          stroke="#8B5CF6" 
          strokeWidth="2"
          strokeDasharray="3,2"
        />
      </svg>
      
    
    </div>
  );
};



