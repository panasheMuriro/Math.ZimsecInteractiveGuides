import React, { useState, useRef, useEffect } from "react";
import { RotateCcw, Target, CheckCircle, XCircle, Award } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

interface Feedback {
  type: "success" | "error";
  message: string;
  accuracy:number;
}

const ProtractorMeasurementTool: React.FC = () => {
  const [protractorPos, setProtractorPos] = useState({ x: 150, y: 200 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [currentAngle, setCurrentAngle] = useState(75);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const containerRef = useRef<SVGSVGElement>(null);

  const containerWidth = 320;
  const containerHeight = 300;
  const angleCenter: Position = { x: 160, y: 200 };
  const angleRadius = 60;
  const validAngles = Array.from({ length: 5 }, (_, i) => (i + 1) * 30);

  // Updated to accept a position
  const isWellPositioned = (pos: Position): boolean => {
    const center: Position = { x: pos.x + 80, y: pos.y + 60 };
    const distance = Math.hypot(center.x - angleCenter.x, center.y - angleCenter.y);
    return distance < 20;
  };

  const generateNewAngle = (): void => {
    const newAngle = validAngles[Math.floor(Math.random() * validAngles.length)];
    setCurrentAngle(newAngle);
    setFeedback(null);
  };

  const getAngleEndpoints = (angle: number) => {
    const x1 = angleCenter.x - angleRadius;
    const y1 = angleCenter.y;
    const radian = (angle * Math.PI) / 180;
    const x2 = angleCenter.x - angleRadius * Math.cos(radian);
    const y2 = angleCenter.y - angleRadius * Math.sin(radian);
    return { x1, y1, x2, y2 };
  };

  const getUserMeasurement = (pos: Position): number => {
    if (!isWellPositioned(pos)) return 0;

    const { x2, y2 } = getAngleEndpoints(currentAngle);
    const center = { x: pos.x + 80, y: pos.y + 60 };

    const dx = x2 - center.x;
    const dy = y2 - center.y;

    let angle = (Math.atan2(-dy, -dx) * 180) / Math.PI;
    if (angle < 0) angle += 360;
    if (angle > 180) angle = 360 - angle;

    return Math.round(angle / 15) * 15;
  };

  // Stateless version
  const checkMeasurement = (pos: Position): void => {
    const tolerance = 5;
    const measured = getUserMeasurement(pos);
    const accurate = Math.abs(currentAngle - measured) <= tolerance;

    setAttempts((prev) => prev + 1);

    if (accurate) {
      setScore((prev) => prev + 1);
      setFeedback({
        type: "success",
        message: `Perfect! ${currentAngle}° measured correctly!`,
        accuracy: Math.abs(currentAngle - measured),
      });
    } else {
      setFeedback({
        type: "error",
        message: `Try again! The angle is ${currentAngle}°, you measured ${measured}°`,
        accuracy: Math.abs(currentAngle - measured),
      });
    }
  };

  const handleStart = (clientX: number, clientY: number): void => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setDragOffset({ x: x - protractorPos.x, y: y - protractorPos.y });
    setIsDragging(true);
  };

  const handleMove = (clientX: number, clientY: number): void => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newX = clientX - rect.left - dragOffset.x;
    const newY = clientY - rect.top - dragOffset.y;
    const nextPos = {
      x: Math.max(0, Math.min(containerWidth - 160, newX)),
      y: Math.max(0, Math.min(containerHeight - 120, newY)),
    };

    const center = { x: nextPos.x + 80, y: nextPos.y + 60 };
    const dx = center.x - angleCenter.x;
    const dy = center.y - angleCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 20) {
      const snappedPos = { x: angleCenter.x - 80, y: angleCenter.y - 60 };
      setProtractorPos(snappedPos);

      if (!isWellPositioned(snappedPos)) {
        setFeedback({
          type: "success",
          message: "Good! Now release to check your measurement",
          accuracy: 0,
        });
      }
    } else {
      setProtractorPos(nextPos);

      if (isWellPositioned(nextPos) && feedback?.message === "Good! Now release to check your measurement") {
        setFeedback(null);
      }
    }
  };

  const handleEnd = (): void => {
    setIsDragging(false);
    const latestPos = { ...protractorPos };
    if (isWellPositioned(latestPos)) {
      checkMeasurement(latestPos);
    }
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, dragOffset, protractorPos, feedback]);

  const { x1, y1, x2, y2 } = getAngleEndpoints(currentAngle);

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="text-center">
          <h1 className="text-xl font-bold">Protractor Practice</h1>
          <p className="text-sm opacity-90">
            Measure the angle and enter your answer
          </p>
        </div>
      </div>

      {/* Score Display */}
      <div className="bg-gray-50 p-3 flex justify-around text-center border-b">
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-green-600">{score}</div>
          <div className="text-xs text-gray-600">Correct</div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-blue-600">{attempts}</div>
          <div className="text-xs text-gray-600">Total</div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-purple-600">
            {attempts > 0 ? Math.round((score / attempts) * 100) : 0}%
          </div>
          <div className="text-xs text-gray-600">Score</div>
        </div>
      </div>

      {/* Main Interaction Area */}
      <div className="p-4">
        {/* Current Challenge */}
        <div className="text-center mb-4">
          <Target className="w-6 h-6 mx-auto mb-2 text-red-500" />
          <p className="text-lg font-semibold text-gray-800">Measure This Angle</p>
        </div>

        {/* The Angle to Measure */}
        <svg
          width={containerWidth}
          height={containerHeight}
          className="border border-gray-200 rounded-lg bg-gray-50 relative"
          ref={containerRef}
        >
          {/* Angle vertex */}
          <circle cx={angleCenter.x} cy={angleCenter.y} r="3" fill="#ef4444" />

          {/* Horizontal reference line */}
          <line
            x1={x1}
            y1={y1}
            x2={angleCenter.x}
            y2={angleCenter.y}
            stroke="#374151"
            strokeWidth="3"
          />

          {/* Angled line */}
          <line
            x1={angleCenter.x}
            y1={angleCenter.y}
            x2={x2}
            y2={y2}
            stroke="#374151"
            strokeWidth="3"
          />

          {/* Angle arc */}
          <path
            d={`
              M ${angleCenter.x - 25} ${angleCenter.y}
              A 25 25 0 0 1 
                ${angleCenter.x - 25 * Math.cos((currentAngle * Math.PI) / 180)} 
                ${angleCenter.y - 25 * Math.sin((currentAngle * Math.PI) / 180)}
            `}
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
          />

          {/* Angle label */}
          <text
            x={angleCenter.x - 35}
            y={angleCenter.y - 10}
            className="fill-red-600 font-bold text-lg"
            textAnchor="middle"
          >
            ?°
          </text>

          {/* Draggable Protractor */}
          <g
            transform={`translate(${protractorPos.x}, ${protractorPos.y})`}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className={`cursor-${isDragging ? "grabbing" : "grab"}`}
          >
            <svg width="160" height="120" viewBox="0 0 160 120">
              {/* Protractor semicircle */}
              <path
                d="M 20 60 A 60 60 0 0 1 140 60 Z"
                fill="rgba(59, 130, 246, 0.1)"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              
              {/* Degree markings */}
              {Array.from({ length: 13 }, (_, i) => i * 15).map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const centerX = 80;
                const centerY = 60;
                const outerR = 55;
                const innerR = angle % 30 === 0 ? 48 : 52;
                const labelR = 42;
                const x1 = centerX - outerR * Math.cos(rad);
                const y1 = centerY - outerR * Math.sin(rad);
                const x2 = centerX - innerR * Math.cos(rad);
                const y2 = centerY - innerR * Math.sin(rad);
                const labelX = centerX - labelR * Math.cos(rad);
                const labelY = centerY - labelR * Math.sin(rad);

                return (
                  <g key={angle}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#3b82f6"
                      strokeWidth="1"
                    />
                    {angle % 30 === 0 && (
                      <text
                        x={labelX}
                        y={labelY + 4}
                        className="fill-blue-600 text-xs font-semibold"
                        textAnchor="middle"
                      >
                        {angle}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Center dot */}
              <circle cx="80" cy="60" r="3" fill="#ef4444" />

              {/* Baseline */}
              <line
                x1="20"
                y1="60"
                x2="140"
                y2="60"
                stroke="#3b82f6"
                strokeWidth="2"
              />
            </svg>
          </g>
        </svg>

        {/* Feedback Display */}
        {feedback && (
          <div className="mt-4">
            <div
              className={`p-3 rounded-lg border ${
                feedback.type === "success"
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                  {feedback.type === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className={`font-medium ${
                      feedback.type === "success"
                        ? "text-green-800"
                        : "text-red-800"
                    }`}
                  >
                    {feedback.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Control Buttons */}
      <div className="p-4 bg-gray-50 flex gap-2">
        <button
          onClick={()=> {generateNewAngle();  setProtractorPos({ x: 150, y: 200 });}}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          <Target className="w-4 h-4" />
          New Angle
        </button>
        <button
          onClick={() => {
            setProtractorPos({ x: 150, y: 200 });
            setFeedback(null);
          }}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>

      {/* Achievement */}
      {score >= 5 && (
        <div className="p-4 bg-yellow-50 border-t border-yellow-200">
          <div className="flex items-center justify-center gap-2 text-yellow-800">
            <Award className="w-5 h-5" />
            <span className="font-medium">Excellent work! Keep practicing!</span>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <div className="p-4 bg-gray-50 border-t">
        <h3 className="font-semibold text-gray-800 mb-2">Measurement Tips:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>✓ Place protractor center on the red vertex point</li>
          <li>✓ Align the baseline with the LEFT horizontal line</li>
          <li>✓ Read where the angled line crosses the scale</li>
          <li>✓ All angles shown are multiples of 15°</li>
        </ul>
      </div>
    </div>
  );
};

export default ProtractorMeasurementTool;