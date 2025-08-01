// src/Components/ParallelLinesTransversals/ParallelLinesTransversalsQuiz.tsx
import React, { useState, useEffect } from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent'; // Adjust path as needed

// --- Custom SVG Component with Corrected Labels ---
const ParallelLinesDiagram: React.FC<{ question: QuizQuestion }> = ({ question }) => {
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

  return (
    <div className="flex justify-center mb-4">
      <svg
        width="100%"
        viewBox="0 0 320 220"
        xmlns="http://www.w3.org/2000/svg"
        className="border rounded bg-slate-50"
      >
        {/* Parallel Lines */}
        <line x1="20" y1="80" x2="300" y2="80" stroke="#1f2937" strokeWidth="4" />
        <line x1="20" y1="160" x2="300" y2="160" stroke="#1f2937" strokeWidth="4" />

        {/* Transversal */}
        <line x1="60" y1="190" x2="260" y2="50" stroke="#4b5563" strokeWidth="4" />

        {/* Angle Arcs */}
        {/* Known Angle Arc (Red) */}
        <path
          d={data.knownArcPath}
          stroke="#dc2626"
          strokeWidth="5"
          fill="none"
        />
        {/* Missing Angle Arc (Green) */}
        <path
          d={data.missingArcPath}
          stroke="#059669"
          strokeWidth="5"
          fill="none"
        />

        {/* Angle Labels */}
        <text
          x={data.knownLabelX}
          y={data.knownLabelY}
          fontSize="18"
          fontFamily="serif"
          fill="#dc2626"
          textAnchor="middle"
          fontWeight="bold"
        >
          {data.knownAngle}°
        </text>
        <text
          x={data.missingLabelX}
          y={data.missingLabelY}
          fontSize="18"
          fontFamily="serif"
          fill="#059669"
          textAnchor="middle"
          fontWeight="bold"
        >
          x = ?
        </text>

        {/* Angle Numbers (Reference) - Slightly dimmer and smaller */}
        <text x="90" y="65" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">1</text>
        <text x="130" y="65" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">2</text>
        <text x="190" y="65" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">3</text>
        <text x="230" y="65" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">4</text>

        <text x="90" y="175" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">5</text>
        <text x="130" y="175" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">6</text>
        <text x="190" y="175" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">7</text>
        <text x="230" y="175" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">8</text>
      </svg>
    </div>
  );
};

// --- Main Component ---
const ParallelLinesTransversalsQuiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [seed, setSeed] = useState<number>(Date.now());

  const generateSingleQuestion = (): QuizQuestion => {
    const relationships = [
      { type: "corresponding", pairs: [[1, 5], [2, 6], [3, 7], [4, 8]] },
      { type: "alternate interior", pairs: [[3, 6], [4, 5]] },
      { type: "alternate exterior", pairs: [[1, 8], [2, 7]] },
      { type: "co-interior", pairs: [[3, 5], [4, 6]] }
    ];

    const relationshipGroup = relationships[Math.floor(Math.random() * relationships.length)];
    const chosenPair = relationshipGroup.pairs[Math.floor(Math.random() * relationshipGroup.pairs.length)];

    const knownAngleNumber = chosenPair[0];
    const missingAngleNumber = chosenPair[1];
    const knownAngle = Math.floor(Math.random() * 120) + 30; // 30-150°

    let missingAngle: number;
    let explanationText: string;

    if (relationshipGroup.type === "co-interior") {
      missingAngle = 180 - knownAngle;
      explanationText = `${relationshipGroup.type.charAt(0).toUpperCase() + relationshipGroup.type.slice(1)} angles are supplementary (add up to 180°).\n\nWorking:\nx = 180° - ${knownAngle}°\nx = ${missingAngle}°`;
    } else {
      missingAngle = knownAngle;
      explanationText = `${relationshipGroup.type.charAt(0).toUpperCase() + relationshipGroup.type.slice(1)} angles are equal.\n\nWorking:\nx = ${knownAngle}°`;
    }

    // --- Corrected SVG paths and label positions ---
    // Paths are designed to fit within the intersecting lines structure.
    // Label positions are chosen to be clear of the lines and arcs.
    const anglePathsAndLabels: Record<number, { path: string; labelPos: [number, number] }> = {
      // --- Top Intersection (Angles 1-4) ---
      1: { path: "M 100 70 A 20 20 0 0 1 120 60", labelPos: [95, 50] }, // Top-left
      2: { path: "M 120 60 A 20 20 0 0 1 140 70", labelPos: [145, 50] }, // Top-middle-left
      3: { path: "M 180 70 A 20 20 0 0 1 200 60", labelPos: [175, 50] }, // Top-middle-right
      4: { path: "M 200 60 A 20 20 0 0 1 220 70", labelPos: [225, 50] }, // Top-right

      // --- Bottom Intersection (Angles 5-8) ---
      5: { path: "M 100 170 A 20 20 0 0 0 120 160", labelPos: [95, 190] }, // Bottom-left
      6: { path: "M 120 160 A 20 20 0 0 0 140 170", labelPos: [145, 190] }, // Bottom-middle-left
      7: { path: "M 180 160 A 20 20 0 0 0 200 170", labelPos: [175, 190] }, // Bottom-middle-right
      8: { path: "M 200 170 A 20 20 0 0 0 220 160", labelPos: [225, 190] }, // Bottom-right
    };

    const knownArcPath = anglePathsAndLabels[knownAngleNumber]?.path || "";
    const missingArcPath = anglePathsAndLabels[missingAngleNumber]?.path || "";
    const [knownLabelX, knownLabelY] = anglePathsAndLabels[knownAngleNumber]?.labelPos || [0, 0];
    const [missingLabelX, missingLabelY] = anglePathsAndLabels[missingAngleNumber]?.labelPos || [0, 0];

    // --- Generate Options ---
    const options = [
      missingAngle.toString(),
      (missingAngle === knownAngle ? (missingAngle + 10).toString() : knownAngle.toString()),
      (180 - missingAngle).toString(),
      (Math.abs(missingAngle - 20) > 10 ? (missingAngle - 20).toString() : (missingAngle + 15).toString()),
    ].sort(() => 0.5 - Math.random());

    const correctIndex = options.indexOf(missingAngle.toString());

    // --- Store data ---
    const questionData = {
      knownAngle: knownAngle,
      missingAngle: missingAngle,
      knownAngleNumber: knownAngleNumber,
      missingAngleNumber: missingAngleNumber,
      relationshipType: relationshipGroup.type,
      knownArcPath: knownArcPath,
      missingArcPath: missingArcPath,
      knownLabelX: knownLabelX,
      knownLabelY: knownLabelY,
      missingLabelX: missingLabelX,
      missingLabelY: missingLabelY,
    };

    return {
      id: JSON.stringify(questionData),
      question: `If angle ${knownAngleNumber} is ${knownAngle}°, what is angle ${missingAngleNumber} (x)?`,
      options: options,
      correct: correctIndex,
      explanation: explanationText,
      explanationType: 'text',
      questionType: 'text',
      optionType: 'text',
      CustomContentComponent: ParallelLinesDiagram,
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-4">
      <MultipleChoiceInteractiveComponent
        title="Parallel Lines & Transversals"
        icon="🛤️" // Railroad tracks emoji
        theme={{
          from: "from-emerald-500",
          to: "to-teal-600",
          button: "bg-white text-teal-600",
          buttonHover: "hover:bg-teal-50 hover:text-teal-700"
        }}
        rulesTitle="Key Rules:"
        rules={[
          "Corresponding angles are equal.",
          "Alternate interior angles are equal.",
          "Alternate exterior angles are equal.",
          "Co-interior (same-side interior) angles are supplementary ($180^\\circ$)."
        ]}
        questions={questions}
        onReset={handleReset}
      />
    </div>
  );
};

export default ParallelLinesTransversalsQuiz;