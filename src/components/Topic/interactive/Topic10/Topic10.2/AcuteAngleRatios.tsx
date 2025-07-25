import React, { useState, useEffect } from 'react';
import { InlineMath } from 'react-katex';

const AcuteAngleRatios: React.FC = () => {
  const [angle, setAngle] = useState<number>(30);
  const [opposite, setOpposite] = useState<number>(5);
  const [adjacent, setAdjacent] = useState<number>(8.66);
  const [hypotenuse, setHypotenuse] = useState<number>(10);
  const [step, setStep] = useState<number>(0);
  const [showSteps, setShowSteps] = useState<boolean>(false);
  const [selectedRatio, setSelectedRatio] = useState<'sin' | 'cos' | 'tan'>('sin');

  // Update triangle sides based on angle with exact values
  useEffect(() => {
    switch (angle) {
      case 30:
        setOpposite(5); // sin 30° = 1/2 * 10
        setAdjacent(8.66); // cos 30° = √3/2 * 10 ≈ 8.66
        break;
      case 45:
        setOpposite(7.07); // sin 45° = √2/2 * 10 ≈ 7.07
        setAdjacent(7.07); // cos 45° = √2/2 * 10 ≈ 7.07
        break;
      case 60:
        setOpposite(8.66); // sin 60° = √3/2 * 10 ≈ 8.66
        setAdjacent(5); // cos 60° = 1/2 * 10
        break;
      default:
        setOpposite(5);
        setAdjacent(8.66);
    }
    setHypotenuse(10); // Fixed hypotenuse
  }, [angle]);

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  // Calculate the selected ratio with exact or approximate values
  const calculateRatio = () => {
    switch (angle) {
      case 30:
        return { sin: '\\frac{1}{2}', cos: '\\frac{\\sqrt{3}}{2}', tan: '\\frac{1}{\\sqrt{3}}' }[selectedRatio];
      case 45:
        return { sin: '\\frac{\\sqrt{2}}{2}', cos: '\\frac{\\sqrt{2}}{2}', tan: '1' }[selectedRatio];
      case 60:
        return { sin: '\\frac{\\sqrt{3}}{2}', cos: '\\frac{1}{2}', tan: '\\sqrt{3}' }[selectedRatio];
      default:
        return '0';
    }
  };

  // Quiz steps with exact values
  const getSteps = () => {
    if (selectedRatio === 'sin') {
      return [
        `Identify the angle: ${angle}°.`,
        `Opposite = ${opposite.toFixed(2)}, Hypotenuse = ${hypotenuse}.`,
        <InlineMath key="step2" math={`\\sin ${angle}^\\circ = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{${opposite.toFixed(2)}}{${hypotenuse}}`} />,
        <InlineMath key="step3" math={`\\sin ${angle}^\\circ = ${calculateRatio()}`} />
      ];
    } else if (selectedRatio === 'cos') {
      return [
        `Identify the angle: ${angle}°.`,
        `Adjacent = ${adjacent.toFixed(2)}, Hypotenuse = ${hypotenuse}.`,
        <InlineMath key="step2" math={`\\cos ${angle}^\\circ = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{${adjacent.toFixed(2)}}{${hypotenuse}}`} />,
        <InlineMath key="step3" math={`\\cos ${angle}^\\circ = ${calculateRatio()}`} />
      ];
    } else {
      return [
        `Identify the angle: ${angle}°.`,
        `Opposite = ${opposite.toFixed(2)}, Adjacent = ${adjacent.toFixed(2)}.`,
        <InlineMath key="step2" math={`\\tan ${angle}^\\circ = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{${opposite.toFixed(2)}}{${adjacent.toFixed(2)}}`} />,
        <InlineMath key="step3" math={`\\tan ${angle}^\\circ = ${calculateRatio()}`} />
      ];
    }
  };

  const steps = getSteps();
  const currentRatio = calculateRatio();

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-2xl font-bold text-center mb-4">Ratios of Acute Angles</h1>

      {/* Angle Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Angle: {angle}°</label>
        <select
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
        >
          <option value="30">30°</option>
          <option value="45">45°</option>
          <option value="60">60°</option>
        </select>
      </div>

      {/* Ratio Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Select Ratio:</label>
        <select
          value={selectedRatio}
          onChange={(e) => setSelectedRatio(e.target.value as 'sin' | 'cos' | 'tan')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
        >
          <option value="sin">Sine (sin)</option>
          <option value="cos">Cosine (cos)</option>
          <option value="tan">Tangent (tan)</option>
        </select>
      </div>

      {/* Theorem Explanation */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Definitions (SOH-CAH-TOA)</h2>
        <p className="text-sm text-gray-700 mb-2">
          - Sine: <InlineMath math="\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}" />
          - Cosine: <InlineMath math="\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}" />
          - Tangent: <InlineMath math="\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}" />
        </p>
        <p className="text-sm text-gray-700 mb-2">
          Exact values: <InlineMath math="\\sin 30^\\circ = \\frac{1}{2}" />, <InlineMath math="\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}" />, <InlineMath math="\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}" />; 
          <InlineMath math="\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}" />, <InlineMath math="\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}" />, <InlineMath math="\\tan 45^\\circ = 1" />; 
          <InlineMath math="\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}" />, <InlineMath math="\\cos 60^\\circ = \\frac{1}{2}" />, <InlineMath math="\\tan 60^\\circ = \\sqrt{3}" />.
        </p>
      </div>

      {/* Triangle Visualization */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex justify-center">
        <svg width="200" height="200" viewBox="0 0 200 200" className="border">
          {/* Right angle at (50, 150) */}
          <polygon
            points={`50,150 ${50 + adjacent * 10},150 50,${150 - opposite * 10}`} // Scale by 10 for visibility
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
          {/* Labels */}
          <text x="45" y="155" fontSize="12" textAnchor="end">Adjacent = {adjacent.toFixed(2)}</text>
          <text x="60" y="130" fontSize="12">Opposite = {opposite.toFixed(2)}</text>
          <text x="60" y="100" fontSize="12">Hypotenuse = {hypotenuse}</text>
          <line x1="50" y1="150" x2="50" y2="50" stroke="gray" strokeWidth="1" /> {/* Vertical leg */}
          <line x1="50" y1="150" x2="150" y2="150" stroke="gray" strokeWidth="1" /> {/* Horizontal leg */}
          <circle cx="50" cy="150" r="3" fill="red" />
          <text x="45" y="145" fontSize="12" textAnchor="end">{angle}°</text>
        </svg>
      </div>

      {/* Ratio Display */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 text-center">
        <h2 className="text-lg font-semibold mb-2">{selectedRatio.toUpperCase()}({angle}°) = <InlineMath math={currentRatio} /></h2>
      </div>

      {/* Steps Button and Display */}
      <div className="mb-6">
        <button
          onClick={() => setShowSteps(!showSteps)}
          className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
        >
          {showSteps ? 'Hide Steps' : 'Show Calculation Steps'}
        </button>
        {showSteps && (
          <div className="mt-4 bg-white p-4 rounded-lg shadow">
            <ol className="list-decimal list-inside text-sm text-gray-700">
              {steps.slice(0, step + 1).map((stepContent, index) => (
                <li key={index} className="mb-2">{stepContent}</li>
              ))}
            </ol>
            <button
              onClick={nextStep}
              className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              disabled={step >= steps.length - 1}
            >
              Next Step
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcuteAngleRatios;