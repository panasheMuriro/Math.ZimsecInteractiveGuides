// src/Components/AnglesOfElevationDepression/AnglesOfElevationDepressionQuiz.tsx
import React, { useState, useEffect } from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent'; // Adjust path as needed

// --- Custom SVG Component ---
const ElevationDepressionDiagram: React.FC<{ question: QuizQuestion }> = ({ question }) => {
  let data;
  try {
    data = question.id ? JSON.parse(question.id) : null;
  } catch (e) {
    console.error("Failed to parse question data:", e);
    data = null;
  }

  if (!data) {
    return <div className="text-center py-4">Diagram data unavailable</div>;
  }

  const isElevation = data.type === 'elevation';

  return (
    <div className="flex justify-center mb-4 flex flex-col gap-3">
      <svg
        width="100%"
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
        className="border rounded bg-slate-50"
      >
        {/* Ground/Horizontal Line */}
        <line x1="20" y1="150" x2="280" y2="150" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,5" />

        {/* Person/Observer */}
        <circle cx="60" cy="145" r="5" fill="#1f2937" />
        <line x1="60" y1="145" x2="60" y2="120" stroke="#1f2937" strokeWidth="2" />
        <line x1="50" y1="130" x2="70" y2="130" stroke="#1f2937" strokeWidth="2" /> {/* Arms */}
        <text x="60" y="115" fontSize="12" fontFamily="sans-serif" fill="#1f2937" textAnchor="middle">Observer</text>

        {/* Object */}
        {isElevation ? (
          // Tree for elevation
          <>
            <line x1="240" y1="150" x2="240" y2="70" stroke="#059669" strokeWidth="3" />
            <circle cx="240" cy="70" r="15" fill="#059669" />
            <text x="240" y="60" fontSize="12" fontFamily="sans-serif" fill="#059669" textAnchor="middle">Object</text>
          </>
        ) : (
          // Car for depression
          <>
            {/* Simple car shape */}
            <rect x="220" y="155" width="40" height="15" fill="#dc2626" stroke="#b91c1c" strokeWidth="1" rx="3" />
            <circle cx="228" cy="167" r="4" fill="#1f2937" />
            <circle cx="252" cy="167" r="4" fill="#1f2937" />
            <text x="240" y="185" fontSize="12" fontFamily="sans-serif" fill="#dc2626" textAnchor="middle">Object</text>
          </>
        )}

        {/* Line of Sight */}
        <line x1="60" y1="120" x2={isElevation ? 240 : 240} y2={isElevation ? 70 : 160} stroke="#2563eb" strokeWidth="2" />

        {/* Angle Arc and Label */}
        {/* The arc and label position depend on whether it's elevation or depression */}
        {isElevation ? (
          <>
            {/* Elevation Angle Arc (centered at observer's eye) */}
            <path d="M 75 120 A 20 20 0 0 0 90 100" stroke="#dc2626" strokeWidth="3" fill="none" />
            <text x="95" y="95" fontSize="16" fontFamily="serif" fill="#dc2626" textAnchor="middle" fontWeight="bold">
              {data.angle}°
            </text>
          </>
        ) : (
          <>
            {/* Depression Angle Arc (centered at observer's eye) */}
            <path d="M 75 120 A 20 20 0 0 1 85 135" stroke="#dc2626" strokeWidth="3" fill="none" />
            <text x="95" y="145" fontSize="16" fontFamily="serif" fill="#dc2626" textAnchor="middle" fontWeight="bold">
              {data.angle}°
            </text>
          </>
        )}

        {/* Height/Distance Labels */}
        {isElevation ? (
          <>
            {/* Vertical height line and label */}
            <line x1="245" y1="150" x2="245" y2="70" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,2" />
            <text x="255" y="115" fontSize="12" fontFamily="sans-serif" fill="#6b7280">Height</text>
          </>
        ) : (
          <>
            {/* Vertical height line and label */}
            <line x1="65" y1="150" x2="65" y2="120" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,2" />
            <text x="75" y="140" fontSize="12" fontFamily="sans-serif" fill="#6b7280">Height</text>
            {/* Horizontal distance line and label */}
            <line x1="60" y1="155" x2="240" y2="155" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,2" />
            <text x="150" y="170" fontSize="12" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">Distance</text>
          </>
        )}
      </svg>
      {question.question}
    </div>
  );
};

// --- Main Component ---
const AnglesOfElevationDepressionQuiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [seed, setSeed] = useState<number>(Date.now());

  const generateSingleQuestion = (): QuizQuestion => {
    // Randomly choose elevation or depression
    const isElevation = Math.random() > 0.5;
    const angle = Math.floor(Math.random() * 60) + 15; // 15-75°
    const height = Math.floor(Math.random() * 50) + 10; // 10-60 units (e.g., meters)

    let missingValue: number; // The value user needs to find
    let questionText: string;
    let explanationText: string;

    // Randomly decide what to ask for (height, distance, or angle)
    const askFor = Math.floor(Math.random() * 3);

    if (isElevation) {
        if (askFor === 0) { // Ask for height
            const distance = Math.floor(Math.random() * 100) + 20; // 20-120 units
            missingValue = parseFloat((distance * Math.tan(angle * Math.PI / 180)).toFixed(1));
            questionText = `An observer looks up at an object. The angle of elevation is ${angle}° and the horizontal distance is ${distance}m. What is the height of the object?`;
            explanationText = `Use the tangent ratio:\n$\\tan(\\text{angle}) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\text{height}}{\\text{distance}}$\n\n$\\tan(${angle}°) = \\frac{\\text{height}}{${distance}}$\n\n$\\text{height} = ${distance} \\times \\tan(${angle}°)$\n\n$\\text{height} = ${distance} \\times ${parseFloat(Math.tan(angle * Math.PI / 180).toFixed(3))}$\n\n$\\text{height} \\approx ${missingValue}$ m`;
        } else if (askFor === 1) { // Ask for distance
            missingValue = parseFloat((height / Math.tan(angle * Math.PI / 180)).toFixed(1));
            questionText = `An observer looks up at an object of height ${height}m. The angle of elevation is ${angle}°. How far away is the object horizontally?`;
            explanationText = `Use the tangent ratio:\n$\\tan(\\text{angle}) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\text{height}}{\\text{distance}}$\n\n$\\tan(${angle}°) = \\frac{${height}}{\\text{distance}}$\n\n$\\text{distance} = \\frac{${height}}{\\tan(${angle}°)}$\n\n$\\text{distance} = \\frac{${height}}{${parseFloat(Math.tan(angle * Math.PI / 180).toFixed(3))}}$\n\n$\\text{distance} \\approx ${missingValue}$ m`;
        } else { // Ask for angle
            const commonAngles = [30, 45, 60];
            const chosenAngle = commonAngles[Math.floor(Math.random() * commonAngles.length)];
            const calculatedDistance = parseFloat((height / Math.tan(chosenAngle * Math.PI / 180)).toFixed(1));
            missingValue = chosenAngle;
            questionText = `An observer looks up at an object of height ${height}m. The horizontal distance is ${calculatedDistance}m. What is the angle of elevation?`;
            explanationText = `Use the tangent ratio:\n$\\tan(\\text{angle}) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\text{height}}{\\text{distance}}$\n\n$\\tan(\\text{angle}) = \\frac{${height}}{${calculatedDistance}}$\n\n$\\tan(\\text{angle}) = ${parseFloat((height / calculatedDistance).toFixed(3))}$\n\n$\\text{angle} = \\arctan(${parseFloat((height / calculatedDistance).toFixed(3))})$\n\n$\\text{angle} = ${missingValue}°$`;
        }
    } else { // Depression
        if (askFor === 0) { // Ask for height
            const distance = Math.floor(Math.random() * 100) + 20; // 20-120 units
            missingValue = parseFloat((distance * Math.tan(angle * Math.PI / 180)).toFixed(1));
            questionText = `An observer on a platform looks down at an object. The angle of depression is ${angle}° and the horizontal distance is ${distance}m. What is the height of the platform?`;
            explanationText = `The angle of depression equals the angle of elevation from the object's perspective.\nUse the tangent ratio:\n$\\tan(\\text{angle}) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\text{height}}{\\text{distance}}$\n\n$\\tan(${angle}°) = \\frac{\\text{height}}{${distance}}$\n\n$\\text{height} = ${distance} \\times \\tan(${angle}°)$\n\n$\\text{height} = ${distance} \\times ${parseFloat(Math.tan(angle * Math.PI / 180).toFixed(3))}$\n\n$\\text{height} \\approx ${missingValue}$ m`;
        } else if (askFor === 1) { // Ask for distance
            missingValue = parseFloat((height / Math.tan(angle * Math.PI / 180)).toFixed(1));
            questionText = `An observer on a ${height}m platform looks down at an object. The angle of depression is ${angle}°. How far away is the object horizontally?`;
            explanationText = `The angle of depression equals the angle of elevation from the object's perspective.\nUse the tangent ratio:\n$\\tan(\\text{angle}) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\text{height}}{\\text{distance}}$\n\n$\\tan(${angle}°) = \\frac{${height}}{\\text{distance}}$\n\n$\\text{distance} = \\frac{${height}}{\\tan(${angle}°)}$\n\n$\\text{distance} = \\frac{${height}}{${parseFloat(Math.tan(angle * Math.PI / 180).toFixed(3))}}$\n\n$\\text{distance} \\approx ${missingValue}$ m`;
        } else { // Ask for angle
            const commonAngles = [30, 45, 60];
            const chosenAngle = commonAngles[Math.floor(Math.random() * commonAngles.length)];
            const calculatedDistance = parseFloat((height / Math.tan(chosenAngle * Math.PI / 180)).toFixed(1));
            missingValue = chosenAngle;
            questionText = `An observer on a ${height}m platform looks down at an object ${calculatedDistance}m away. What is the angle of depression?`;
            explanationText = `The angle of depression equals the angle of elevation from the object's perspective.\nUse the tangent ratio:\n$\\tan(\\text{angle}) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\text{height}}{\\text{distance}}$\n\n$\\tan(\\text{angle}) = \\frac{${height}}{${calculatedDistance}}$\n\n$\\tan(\\text{angle}) = ${parseFloat((height / calculatedDistance).toFixed(3))}$\n\n$\\text{angle} = \\arctan(${parseFloat((height / calculatedDistance).toFixed(3))})$\n\n$\\text{angle} = ${missingValue}°$`;
        }
    }

    // --- Generate Options ---
    // Ensure the correct answer is one of the options, then add plausible distractors
    const options = [
      missingValue.toString(), // Correct answer
      (missingValue + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 15) + 5)).toString(), // +/- 5-20
      (missingValue + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 25) + 10)).toString(), // +/- 10-35
      (parseFloat((missingValue * (Math.random() > 0.5 ? 1.2 : 0.8)).toFixed(1))).toString(), // +/- 20%
    ].sort(() => 0.5 - Math.random()); // Shuffle options

    const correctIndex = options.indexOf(missingValue.toString());

    // --- Store data for the CustomContentComponent ---
    const questionData = {
      type: isElevation ? 'elevation' : 'depression',
      angle: angle,
      height: height,
    };

    return {
      id: JSON.stringify(questionData),
      question: questionText,
      options: options,
      correct: correctIndex,
      explanation: explanationText,
      explanationType: 'text', // Explanation contains KaTeX, handled by renderTextWithMath
      questionType: 'text',
      optionType: 'text',
      CustomContentComponent: ElevationDepressionDiagram,
    };
  };

  useEffect(() => {
    const initialQuestions = Array.from({ length: 5 }, () => generateSingleQuestion());
    setQuestions(initialQuestions);
  }, [seed]);

  const handleReset = () => {
    setSeed(prev => prev + 1);
  };

  if (questions.length === 0) {
    return <div className="flex justify-center items-center h-screen">Loading questions...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <MultipleChoiceInteractiveComponent
        title="Elevation & Depression Angles"
        icon="⛰️" // Mountain emoji
        theme={{
          from: "from-amber-500",
          to: "to-orange-600",
          button: "bg-white text-orange-600",
          buttonHover: "hover:bg-orange-50 hover:text-orange-700"
        }}
        rulesTitle="Key Rules:"
        rules={[
          "Angle of elevation = Angle of depression (between two points).",
          "Use trigonometric ratios (SOHCAHTOA) to solve problems.",
          "$\\tan(\\text{angle}) = \\frac{\\text{opposite side}}{\\text{adjacent side}}$ for right triangles."
        ]}
        questions={questions}
        onReset={handleReset}
      />
    </div>
  );
};

export default AnglesOfElevationDepressionQuiz;