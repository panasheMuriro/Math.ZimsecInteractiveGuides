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
