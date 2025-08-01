/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import { RotateCcw, Target, CheckCircle, XCircle, Award } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

interface Feedback {
  type: "success" | "error";
  message: string;
  accuracy: number;
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
    const distance = Math.hypot(
      center.x - angleCenter.x,
      center.y - angleCenter.y
    );
    return distance < 20;
  };

  const generateNewAngle = (): void => {
    const newAngle =
      validAngles[Math.floor(Math.random() * validAngles.length)];
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
      if (
        isWellPositioned(nextPos) &&
        feedback?.message === "Good! Now release to check your measurement"
      ) {
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
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
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
    <div className="w-full max-w-sm mx-auto bg-[#239BA7] rounded-xl shadow-lg overflow-hidden border border-slate-200">
      {/* Header */}
      <div className="bg-[#239BA7] text-white p-4">
        <div className="text-center">
          <h1 className="text-xl font-bold">Protractor Practice</h1>
          <p className="text-sm opacity-90 mt-1">
            Measure the angle and enter your answer
          </p>
        </div>
      </div>
      
      {/* Score Display */}
      <div className="bg-white/30 p-3 flex justify-around text-white text-center m-3 rounded-xl">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold">{score}</div>
          <div className="text-xs mt-1">Correct</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold">{attempts}</div>
          <div className="text-xs mt-1">Total</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold">
            {attempts > 0 ? Math.round((score / attempts) * 100) : 0}%
          </div>
          <div className="text-xs  mt-1">Accuracy</div>
        </div>
      </div>
      
      {/* Main Interaction Area */}
      <div className="p-4">
        {/* Current Challenge */}
        <div className="text-center mb-4">
          <Target className="w-8 h-8 mx-auto mb-2 text-[#FFCC00]" />
          <p className="text-lg font-semibold text-white">
            Measure This Angle
          </p>
        </div>
        
        {/* The Angle to Measure */}
        <div className="relative bg-white rounded-lg border border-slate-200 shadow-inner overflow-hidden">
          <svg
            width={containerWidth}
            height={containerHeight}
            className="w-full"
            ref={containerRef}
          >
            {/* Background grid pattern */}
            <defs>
              <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
            
            {/* Angle vertex */}
            <circle cx={angleCenter.x} cy={angleCenter.y} r="4" fill="#e11d48" />
            
            {/* Horizontal reference line */}
            <line
              x1={x1}
              y1={y1}
              x2={angleCenter.x}
              y2={angleCenter.y}
              stroke="#475569"
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Angled line */}
            <line
              x1={angleCenter.x}
              y1={angleCenter.y}
              x2={x2}
              y2={y2}
              stroke="#475569"
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Angle arc */}
            <path
              d={`
                M ${angleCenter.x - 25} ${angleCenter.y}
                A 25 25 0 0 1 
                  ${
                    angleCenter.x - 25 * Math.cos((currentAngle * Math.PI) / 180)
                  } 
                  ${angleCenter.y - 25 * Math.sin((currentAngle * Math.PI) / 180)}
              `}
              fill="none"
              stroke="#e11d48"
              strokeWidth="2"
            />
            
            {/* Angle label */}
            <text
              x={angleCenter.x - 35}
              y={angleCenter.y - 10}
              className="fill-rose-600 font-bold text-lg"
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
                  fill="rgba(59, 130, 246, 0.15)"
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
                        strokeWidth="1.5"
                      />
                      {angle % 30 === 0 && (
                        <text
                          x={labelX}
                          y={labelY + 4}
                          className="fill-blue-700 text-xs font-bold"
                          textAnchor="middle"
                        >
                          {angle}
                        </text>
                      )}
                    </g>
                  );
                })}
                
                {/* Center dot */}
                <circle cx="80" cy="60" r="4" fill="#e11d48" />
                
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
        </div>
        
        {/* Feedback Display */}
        {feedback && (
          <div className="mt-4 transition-all duration-300 ease-in-out">
            <div
              className={`p-4 rounded-xl border ${
                feedback.type === "success"
                  ? "bg-green-50 border-green-200"
                  : "bg-rose-50 border-rose-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  {feedback.type === "success" ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className={`font-medium ${
                      feedback.type === "success"
                        ? "text-green-800"
                        : "text-rose-800"
                    }`}
                  >
                    {feedback.message}
                  </p>
                  <p className="text-sm mt-1 text-slate-600">
                    Accuracy: ±{feedback.accuracy}°
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Control Buttons */}
      <div className="px-4 pb-4 bg-[#239BA7] flex gap-3">
        <button
          onClick={() => {
            generateNewAngle();
            setProtractorPos({ x: 150, y: 200 });
          }}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#FF9B2F] text-black rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg font-medium"
        >
          <Target className="w-5 h-5" />
          New Angle
        </button>
        <button
          onClick={() => {
            setProtractorPos({ x: 150, y: 200 });
            setFeedback(null);
          }}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-slate-500 to-slate-600 text-white rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all shadow-md hover:shadow-lg font-medium"
        >
          <RotateCcw className="w-5 h-5" />
          Reset
        </button>
      </div>
      
      {/* Achievement */}
      {score >= 5 && (
        <div className="px-4 py-3 bg-amber-50 border-t border-amber-200">
          <div className="flex items-center justify-center gap-2 text-amber-800">
            <Award className="w-5 h-5" />
            <span className="font-semibold">
              Excellent work! Keep practicing!
            </span>
          </div>
        </div>
      )}
      
      {/* Tips Section */}
      <div className="p-4 bg-white m-3 rounded-xl">
        <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">TIP</span>
          Measurement Tips
        </h3>
        <ul className="text-sm text-slate-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>Place protractor center on the <span className="font-semibold text-rose-600">red vertex point</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>Align the baseline with the <span className="font-semibold">left horizontal line</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>Read where the angled line crosses the <span className="font-semibold">scale</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>All angles shown are multiples of <span className="font-semibold">15°</span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProtractorMeasurementTool;