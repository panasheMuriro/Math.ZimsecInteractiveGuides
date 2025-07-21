
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
          font-size="14"
          font-family="serif"
          fill="#dc2626"
          text-anchor="middle"
          font-weight="bold"
        >
          A
        </text>
        <text
          x="160"
          y="110"
          font-size="14"
          font-family="serif"
          fill="#1f2937"
          text-anchor="middle"
          font-weight="bold"
        >
          O
        </text>
        <text
          x="270"
          y="110"
          font-size="14"
          font-family="serif"
          fill="#059669"
          text-anchor="middle"
          font-weight="bold"
        >
          B
        </text>
        <text
          x="235"
          y="10"
          font-size="14"
          font-family="serif"
          fill="#2563eb"
          text-anchor="middle"
          font-weight="bold"
        >
          C
        </text>

        <text
          x="115"
          y="85"
          font-size="14"
          font-family="serif"
          fill="#dc2626"
          text-anchor="middle"
          font-weight="bold"
        >
          ∠ AOC
        </text>
        <text
          x="240"
          y="85"
          font-size="14"
          font-family="serif"
          fill="#059669"
          text-anchor="middle"
          font-weight="bold"
        >
          ∠BOC
        </text>

        <text
          x="160"
          y="180"
          font-size="16"
          font-family="serif"
          fill="#1f2937"
          text-anchor="middle"
          font-weight="bold"
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
          stroke-width="2"
        />

        <circle cx="160" cy="120" r="3" fill="#1f2937" />

        <line
          x1="160"
          y1="120"
          x2="80"
          y2="20"
          stroke="#dc2626"
          stroke-width="2"
        />

        <line
          x1="160"
          y1="120"
          x2="215"
          y2="20"
          stroke="#2563eb"
          stroke-width="2"
        />

        <path
          d="M 130 120 A 30 30 0 0 1 135 90"
          stroke="#dc2626"
          stroke-width="2"
          fill="none"
        />

        <path
          d="M 135 90 A 25 25 0 0 1 175 95"
          stroke="#2563eb"
          stroke-width="2"
          fill="none"
        />

        <path
          d="M 175 95 A 35 35 0 0 1 210 120"
          stroke="#059669"
          stroke-width="2"
          fill="none"
        />

        <text
          x="160"
          y="110"
          font-size="12"
          font-family="serif"
          fill="#1f2937"
          text-anchor="middle"
          font-weight="bold"
        >
          O
        </text>

        <text
          x="85"
          y="85"
          font-size="13"
          font-family="serif"
          fill="#dc2626"
          text-anchor="middle"
          font-weight="bold"
        >
          ∠A = 65°
        </text>

        <text
          x="155"
          y="75"
          font-size="13"
          font-family="serif"
          fill="#2563eb"
          text-anchor="middle"
          font-weight="bold"
        >
          ∠B = 40°
        </text>

        <text
          x="215"
          y="85"
          font-size="13"
          font-family="serif"
          fill="#059669"
          text-anchor="middle"
          font-weight="bold"
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

