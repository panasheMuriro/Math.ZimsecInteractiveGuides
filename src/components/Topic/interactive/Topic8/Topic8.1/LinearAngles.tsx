// src/Components/LinearAngles/LinearAngles.tsx
import React, { useState, useEffect } from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent'; // Adjust path as needed

// Define a custom component to render the SVG diagram for each question
const AngleDiagram: React.FC<{ question: QuizQuestion }> = ({ question }) => {
  // Extract data from the question's id (assuming it holds the generated data)
  let data;
  try {
    data = question.id ? JSON.parse(question.id) : null;
  } catch (e) {
    console.error("Failed to parse question data:", e);
    data = null;
  }

  if (!data) {
    // Render a fallback or nothing if data is missing/unparsable
    return <div className="text-center py-4">Diagram data unavailable</div>;
  }

  // --- Updated SVG with larger text and elements ---
  return (
    <div className="flex justify-center mb-4 flex flex-col gap-3">
      <svg
        width="100%"
        viewBox="0 0 320 200"
        xmlns="http://www.w3.org/2000/svg"
        className="border rounded bg-slate-50"
      >
        {/* Straight line */}
        <line x1="20" y1="100" x2="300" y2="100" stroke="#1f2937" strokeWidth="3" />
        {/* Center point O */}
        <circle cx="160" cy="100" r="5" fill="#1f2937" />
        {/* Points A and B on the line */}
        <circle cx="50" cy="100" r="4" fill="#dc2626" />
        <circle cx="270" cy="100" r="4" fill="#059669" />
        {/* Point C creating the angles */}
        <circle cx="200" cy="40" r="4" fill="#2563eb" />
        {/* Ray OC */}
        <line x1="160" y1="100" x2="200" y2="40" stroke="#2563eb" strokeWidth="3" />
        {/* Angle AOC arc */}
        {/* Adjusted arc path for better fit with larger text */}
        <path d="M 110 100 A 50 50 0 0 1 180 65" stroke="#dc2626" strokeWidth="3" fill="none" />
        {/* Angle COB arc */}
        {/* Adjusted arc path for better fit with larger text */}
        <path d="M 180 65 A 35 35 0 0 1 235 100" stroke="#059669" strokeWidth="3" fill="none" />
        {/* Point labels - Increased font size */}
        <text x="50" y="85" fontSize="16" fontFamily="serif" fill="#dc2626" textAnchor="middle" fontWeight="bold">A</text>
        <text x="160" y="85" fontSize="16" fontFamily="serif" fill="#1f2937" textAnchor="middle" fontWeight="bold">O</text>
        <text x="270" y="85" fontSize="16" fontFamily="serif" fill="#059669" textAnchor="middle" fontWeight="bold">B</text>
        <text x="205" y="30" fontSize="16" fontFamily="serif" fill="#2563eb" textAnchor="middle" fontWeight="bold">C</text>
        {/* Angle labels with values - Increased font size */}
        {/* Adjusted x/y positions for larger text */}
        <text x="135" y="85" fontSize="14" fontFamily="serif" fill="#dc2626" textAnchor="middle" fontWeight="bold">
          {data.knownAngle1}°
        </text>
        <text x="210" y="85" fontSize="14" fontFamily="serif" fill="#059669" textAnchor="middle" fontWeight="bold">
          ?
        </text>
        {/* Formula - Kept font size similar or slightly increased if needed */}
        <text x="160" y="155" fontSize="16" fontFamily="serif" fill="#1f2937" textAnchor="middle" fontWeight="bold">
          ∠AOC + ∠COB = 180°
        </text>
        <text x="160" y="175" fontSize="14" fontFamily="serif" fill="#374151" textAnchor="middle">
          {data.knownAngle1}° + ? = 180°
        </text>
      </svg>
   
   {question.question}
    </div>
  );
};

// --- The rest of the LinearAngles component remains the same ---
const LinearAngles: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [seed, setSeed] = useState<number>(Date.now()); // Initialize seed

  const generateSingleQuestion = (): QuizQuestion => {
    const knownAngle1 = Math.floor(Math.random() * 120) + 20; // 20-140°
    const missingAngle = 180 - knownAngle1;

    // Generate incorrect options
    const options = [
      missingAngle.toString(), // Correct answer
      (missingAngle + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 10) + 1)).toString(), // Incorrect offset 1
      (missingAngle + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 15) + 10)).toString(), // Incorrect offset 2
      (180 - (Math.floor(Math.random() * 20) + 10)).toString(), // Another potential distractor
    ].sort(() => 0.5 - Math.random()); // Shuffle options

    const correctIndex = options.indexOf(missingAngle.toString());

    // Store necessary data in the ID field (as a JSON string)
    const questionData = {
       knownAngle1: knownAngle1,
       missingAngle: missingAngle,
    };

    return {
      id: JSON.stringify(questionData), // Store data for CustomContentComponent
      question: `If ∠AOC = ${knownAngle1}°, what is ∠COB?`, // Question text
      options: options,
      correct: correctIndex,
      explanation: `Angles on a straight line add up to 180°.\n\nWorking:\n∠COB = 180° - ∠AOC\n∠COB = 180° - ${knownAngle1}°\n∠COB = ${missingAngle}°`,
      explanationType: 'text',
      questionType: 'text',
      optionType: 'text',
      CustomContentComponent: AngleDiagram, // Use the custom SVG component
    };
  };

  // Generate initial set of questions when seed changes
  useEffect(() => {
    console.log("Regenerating questions with seed:", seed);
    const initialQuestions = Array.from({ length: 5 }, () => generateSingleQuestion());
    setQuestions(initialQuestions);
    console.log("Generated questions:", initialQuestions);
  }, [seed]); // Regenerate when seed changes

  const handleReset = () => {
    console.log("Reset triggered");
    setSeed(prev => prev + 1); // Trigger question regeneration
  };

  if (questions.length === 0) {
      return <div className="flex justify-center items-center h-screen">Loading questions...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <MultipleChoiceInteractiveComponent
        title="Linear Angles Quiz"
        icon="📐"
        theme={{
          from: "from-[#3E5F44]",
          to: "to-[#5E936C]",
          button: "bg-white text-indigo-600",
          buttonHover: "hover:bg-indigo-50 hover:text-indigo-700"
        }}
        rulesTitle="Key Rules:"
        rules={[
          "Angles on a straight line sum to $180^\\circ$.",
          "Identify the known angle and subtract it from $180^\\circ$ to find the unknown angle."
        ]}
        questions={questions}
        onReset={handleReset}
      />
    </div>
  );
};

export default LinearAngles;