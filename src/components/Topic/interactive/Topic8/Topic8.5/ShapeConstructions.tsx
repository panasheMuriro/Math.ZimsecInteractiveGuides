/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { PaperScope, Path, Point } from "paper";

const ShapeConstructions: React.FC = () => {
  const [construction, setConstruction] = useState<
    "triangle-sss" | "triangle-sas" | "triangle-asa" | "rectangle" | "square" | "rhombus" | "parallelogram"
  >("triangle-sss");
  const [step, setStep] = useState<number>(0);

  // Initialize Paper.js scope
  useEffect(() => {
    const scope = new PaperScope();
    scope.setup(document.createElement("canvas")); // Offscreen canvas for calculations
    // return () => scope.remove();
  }, []);

  const constructions: { [key: string]: { steps: string[] } } = {
    "triangle-sss": {
      steps: [
        "Draw the base side.",
        "Use compass to mark the second side from one endpoint.",
        "Use compass to mark the third side from the other endpoint.",
        "Connect the intersection point to form the triangle."
      ]
    },
    "triangle-sas": {
      steps: [
        "Draw the first side.",
        "Construct the given angle at one end.",
        "Mark the second side length on the angle line.",
        "Connect to complete the triangle."
      ]
    },
    "triangle-asa": {
      steps: [
        "Draw the given side.",
        "Construct the first angle at one endpoint.",
        "Construct the second angle at the other endpoint.",
        "Extend angle lines until they meet to form the triangle."
      ]
    },
    rectangle: {
      steps: [
        "Draw the base side (length).",
        "Construct 90° angles at both endpoints.",
        "Mark the width on both angle lines.",
        "Connect to form the rectangle."
      ]
    },
    square: {
      steps: [
        "Draw the base side.",
        "Construct 90° angles at both endpoints.",
        "Mark the same side length on both angle lines.",
        "Connect to form the square."
      ]
    },
    rhombus: {
      steps: [
        "Draw the first side.",
        "Construct the given angle at one end.",
        "Mark equal side lengths to form the rhombus.",
        "Connect to complete the rhombus."
      ]
    },
    parallelogram: {
      steps: [
        "Draw the first side.",
        "Draw the second adjacent side.",
        "Construct the included angle at one endpoint.",
        "Complete the parallelogram with parallel lines."
      ]
    }
  };

  // Helper function to calculate a point along a line at a given distance
  const pointAlongLine = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    distance: number
  ) => {
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const ratio = distance / length;
    return {
      x: x1 + ratio * (x2 - x1),
      y: y1 + ratio * (y2 - y1),
    };
  };

  // Helper function to calculate angle arc path using Paper.js
  const getAngleArcPath = (
    vertex: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    radius: number
  ) => {
    const point1 = pointAlongLine(vertex.x, vertex.y, p1.x, p1.y, radius);
    const point2 = pointAlongLine(vertex.x, vertex.y, p2.x, p2.y, radius);
    return new Path.Arc({
      from: [point1.x, point1.y],
      through: [vertex.x, vertex.y - radius * 0.5], // Adjust for arc shape
      to: [point2.x, point2.y],
    }).pathData;
  };

  // Helper function to calculate intersection of two circles
  const getCircleIntersections = (
    center1: { x: number; y: number },
    radius1: number,
    center2: { x: number; y: number },
    radius2: number
  ) => {
    const arc1 = new Path.Circle({ center: [center1.x, center1.y], radius: radius1 });
    const arc2 = new Path.Circle({ center: [center2.x, center2.y], radius: radius2 });
    const intersections = arc1.getIntersections(arc2);
    arc1.remove();
    arc2.remove();
    return intersections.length > 0 ? intersections[0].point : new Point(150, 100); // Fallback
  };

  // Helper function for 90° angle arc (used in rectangle and square)
  const getRightAngleArcPath = (
    vertex: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    radius: number
  ) => {
    const point1 = pointAlongLine(vertex.x, vertex.y, p1.x, p1.y, radius);
    const point2 = pointAlongLine(vertex.x, vertex.y, p2.x, p2.y, radius);
    return new Path.Arc({
      from: [point1.x, point1.y],
      through: [vertex.x + radius * 0.707, vertex.y - radius * 0.707], // 45° point for right angle
      to: [point2.x, point2.y],
    }).pathData;
  };

  const handleConstructionChange = (
    newConstruction: "triangle-sss" | "triangle-sas" | "triangle-asa" | "rectangle" | "square" | "rhombus" | "parallelogram"
  ) => {
    setConstruction(newConstruction);
    setStep(0);
  };

  const handleNextStep = () => {
    if (step < constructions[construction].steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // SVG visualization logic for each construction
  const renderConstruction = () => {
    switch (construction) {
      case "triangle-sss":
        return (
          <>
            {step >= 0 && <line x1="100" y1="150" x2="200" y2="150" stroke="black" strokeWidth="2" />}
            {step >= 1 && (
              <>
                <circle cx="100" cy="150" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="150" cy="107" r="3" fill="blue" />
              </>
            )}
            {step >= 2 && (
              <>
                <circle cx="200" cy="150" r="60" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                {(() => {
                  const intersection = getCircleIntersections(
                    { x: 100, y: 150 },
                    50,
                    { x: 200, y: 150 },
                    60
                  );
                  return <circle cx={intersection.x} cy={intersection.y} r="3" fill="blue" />;
                })()}
              </>
            )}
            {step >= 3 && (
              <>
                {(() => {
                  const intersection = getCircleIntersections(
                    { x: 100, y: 150 },
                    50,
                    { x: 200, y: 150 },
                    60
                  );
                  return (
                    <>
                      <line x1="100" y1="150" x2={intersection.x} y2={intersection.y} stroke="red" strokeWidth="2" />
                      <line x1={intersection.x} y1={intersection.y} x2="200" y2="150" stroke="red" strokeWidth="2" />
                    </>
                  );
                })()}
              </>
            )}
          </>
        );
      case "triangle-sas":
        return (
          <>
            {step >= 0 && <line x1="100" y1="150" x2="200" y2="150" stroke="black" strokeWidth="2" />}
            {step >= 1 && (
              <>
                <path
                  d={getAngleArcPath(
                    { x: 100, y: 150 },
                    { x: 200, y: 150 },
                    { x: 150, y: 100 },
                    30
                  )}
                  stroke="blue"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5"
                />
                <circle cx="130" cy="150" r="3" fill="blue" />
                <circle cx="127.07" cy="122.93" r="3" fill="blue" />
              </>
            )}
            {step >= 2 && (
              <>
                <circle cx="127.07" cy="122.93" r="40" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="150" cy="103.39" r="3" fill="blue" />
              </>
            )}
            {step >= 3 && (
              <>
                <line x1="100" y1="150" x2="150" y2="103.39" stroke="red" strokeWidth="2" />
                <line x1="150" y1="103.39" x2="200" y2="150" stroke="red" strokeWidth="2" />
              </>
            )}
          </>
        );
      case "triangle-asa":
        return (
          <>
            {step >= 0 && <line x1="100" y1="150" x2="200" y2="150" stroke="black" strokeWidth="2" />}
            {step >= 1 && (
              <>
                <path
                  d={getAngleArcPath(
                    { x: 100, y: 150 },
                    { x: 200, y: 150 },
                    { x: 150, y: 100 },
                    30
                  )}
                  stroke="blue"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5"
                />
                <circle cx="130" cy="150" r="3" fill="blue" />
                <circle cx="127.07" cy="122.93" r="3" fill="blue" />
              </>
            )}
            {step >= 2 && (
              <>
                <path
                  d={getAngleArcPath(
                    { x: 200, y: 150 },
                    { x: 100, y: 150 },
                    { x: 150, y: 100 },
                    30
                  )}
                  stroke="blue"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5"
                />
                <circle cx="170" cy="150" r="3" fill="blue" />
                <circle cx="172.93" cy="122.93" r="3" fill="blue" />
              </>
            )}
            {step >= 3 && (
              <>
                <line x1="100" y1="150" x2="127.07" y2="122.93" stroke="red" strokeWidth="2" />
                <line x1="200" y1="150" x2="172.93" y2="122.93" stroke="red" strokeWidth="2" />
                <line x1="127.07" y1="122.93" x2="172.93" y2="122.93" stroke="red" strokeWidth="2" />
              </>
            )}
          </>
        );
      case "rectangle":
        return (
          <>
            {step >= 0 && <line x1="100" y1="150" x2="200" y2="150" stroke="black" strokeWidth="2" />}
            {step >= 1 && (
              <>
                <path
                  d={getRightAngleArcPath(
                    { x: 100, y: 150 },
                    { x: 200, y: 150 },
                    { x: 100, y: 100 },
                    20
                  )}
                  stroke="blue"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5"
                />
                <path
                  d={getRightAngleArcPath(
                    { x: 200, y: 150 },
                    { x: 100, y: 150 },
                    { x: 200, y: 100 },
                    20
                  )}
                  stroke="blue"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5"
                />
                <circle cx="100" cy="130" r="3" fill="blue" />
                <circle cx="200" cy="130" r="3" fill="blue" />
              </>
            )}
            {step >= 2 && (
              <>
                <circle cx="100" cy="130" r="30" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="200" cy="130" r="30" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="100" cy="100" r="3" fill="blue" />
                <circle cx="200" cy="100" r="3" fill="blue" />
              </>
            )}
            {step >= 3 && (
              <>
                <line x1="100" y1="150" x2="100" y2="100" stroke="red" strokeWidth="2" />
                <line x1="200" y1="150" x2="200" y2="100" stroke="red" strokeWidth="2" />
                <line x1="100" y1="100" x2="200" y2="100" stroke="red" strokeWidth="2" />
              </>
            )}
          </>
        );
      case "square":
        return (
          <>
            {step >= 0 && <line x1="100" y1="150" x2="200" y2="150" stroke="black" strokeWidth="2" />}
            {step >= 1 && (
              <>
                <path
                  d={getRightAngleArcPath(
                    { x: 100, y: 150 },
                    { x: 200, y: 150 },
                    { x: 100, y: 50 },
                    20
                  )}
                  stroke="blue"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5"
                />
                <path
                  d={getRightAngleArcPath(
                    { x: 200, y: 150 },
                    { x: 100, y: 150 },
                    { x: 200, y: 50 },
                    20
                  )}
                  stroke="blue"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5"
                />
                <circle cx="100" cy="130" r="3" fill="blue" />
                <circle cx="200" cy="130" r="3" fill="blue" />
              </>
            )}
            {step >= 2 && (
              <>
                <circle cx="100" cy="130" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="200" cy="130" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="100" cy="50" r="3" fill="blue" />
                <circle cx="200" cy="50" r="3" fill="blue" />
              </>
            )}
            {step >= 3 && (
              <>
                <line x1="100" y1="150" x2="100" y2="50" stroke="red" strokeWidth="2" />
                <line x1="200" y1="150" x2="200" y2="50" stroke="red" strokeWidth="2" />
                <line x1="100" y1="50" x2="200" y2="50" stroke="red" strokeWidth="2" />
              </>
            )}
          </>
        );
      case "rhombus":
        return (
          <>
            {step >= 0 && <line x1="100" y1="150" x2="150" y2="110" stroke="black" strokeWidth="2" />}
            {step >= 1 && (
              <>
                <path
                  d={getAngleArcPath(
                    { x: 150, y: 110 },
                    { x: 100, y: 150 },
                    { x: 200, y: 150 },
                    30
                  )}
                  stroke="blue"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5"
                />
                <circle cx="135" cy="125" r="3" fill="blue" />
                <circle cx="177.07" cy="132.93" r="3" fill="blue" />
              </>
            )}
            {step >= 2 && (
              <>
                <circle cx="135" cy="125" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="177.07" cy="132.93" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="110" cy="75" r="3" fill="blue" />
                <circle cx="202.07" y2="82.93" r="3" fill="blue" />
              </>
            )}
            {step >= 3 && (
              <>
                <line x1="150" y1="110" x2="202.07" y2="82.93" stroke="red" strokeWidth="2" />
                <line x1="202.07" y1="82.93" x2="150" y2="55" stroke="red" strokeWidth="2" />
                <line x1="150" y1="55" x2="100" y2="95" stroke="red" strokeWidth="2" />
              </>
            )}
          </>
        );
      case "parallelogram":
        return (
          <>
            {step >= 0 && <line x1="100" y1="150" x2="200" y2="150" stroke="black" strokeWidth="2" />}
            {step >= 1 && <line x1="200" y1="150" x2="230" y2="110" stroke="black" strokeWidth="2" />}
            {step >= 2 && (
              <>
                <path
                  d={getAngleArcPath(
                    { x: 200, y: 150 },
                    { x: 100, y: 150 },
                    { x: 230, y: 110 },
                    30
                  )}
                  stroke="blue"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5"
                />
                <circle cx="170" cy="150" r="3" fill="blue" />
                <circle cx="212.93" cy="122.93" r="3" fill="blue" />
              </>
            )}
            {step >= 3 && (
              <>
                <line x1="100" y1="150" x2="130" y2="110" stroke="red" strokeWidth="2" />
                <line x1="130" y1="110" x2="230" y2="110" stroke="red" strokeWidth="2" />
              </>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
       [NOT DONE] Triangle and Quadrilateral Constructions Visualizer
      </h3>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Select a construction and step through the process to see how it’s done.
      </p>

      {/* Construction Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {[
          { id: "triangle-sss", label: "Triangle SSS" },
          { id: "triangle-sas", label: "Triangle SAS" },
          { id: "triangle-asa", label: "Triangle ASA" },
          { id: "rectangle", label: "Rectangle" },
          { id: "square", label: "Square" },
          { id: "rhombus", label: "Rhombus" },
          { id: "parallelogram", label: "Parallelogram" }
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleConstructionChange(id as any)}
            className={`px-3 py-1 text-sm font-medium rounded-md ${
              construction === id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Visualization */}
      <div className="flex justify-center">
        <svg width="100%" height="200" viewBox="0 0 300 200" className="max-w-full">
          {renderConstruction()}
        </svg>
      </div>

      {/* Step Navigation */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevStep}
          disabled={step === 0}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            step === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={step === constructions[construction].steps.length - 1}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            step === constructions[construction].steps.length - 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>

      {/* Feedback */}
      <div className="text-sm text-gray-600 mt-4">
        <p>
          <strong>Step {step + 1}:</strong> {constructions[construction].steps[step]}
        </p>
        <p className="mt-2">
          Use the buttons to navigate through the steps of the {construction.replace("-", " ")} construction using only a compass and straightedge.
        </p>
      </div>
    </div>
  );
};

export default ShapeConstructions;