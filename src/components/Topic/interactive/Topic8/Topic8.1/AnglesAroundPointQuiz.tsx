// src/Components/AnglesAroundPoint/AnglesAroundPoint.tsx (or similar path)
import React, { useState, useEffect } from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const AnglesAroundPointDiagram: React.FC<{ question: QuizQuestion }> = ({ question }) => {
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
    <div className="flex justify-center mb-4 flex flex-col gap-3">
      <svg
        width="100%"
        viewBox="0 0 280 280"
        xmlns="http://www.w3.org/2000/svg"
        className="border rounded bg-slate-50"
      >
        <line x1="40" y1="40" x2="240" y2="240" stroke="#1f2937" strokeWidth="3" />
        <line x1="240" y1="40" x2="40" y2="240" stroke="#1f2937" strokeWidth="3" />
        <circle cx="140" cy="140" r="5" fill="#1f2937" />

        {data.questionType === 0 && (
          <>
            <path
              d="M 115 105 A 30 30 0 0 1 165 105"
              stroke="#dc2626"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M 165 175 A 30 30 0 0 1 115 175"
              stroke="#059669"
              strokeWidth="4"
              fill="none"
            />
            <text x="140" y="75" fontSize="16" fontFamily="serif" fill="#dc2626" textAnchor="middle" fontWeight="bold">
              {data.knownAngle}°
            </text>
            <text x="140" y="215" fontSize="16" fontFamily="serif" fill="#059669" textAnchor="middle" fontWeight="bold">
              x = ?
            </text>
          </>
        )}

        {data.questionType === 1 && (
          <>
            <path
              d="M 115 105 A 30 30 0 0 1 165 105"
              stroke="#dc2626"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M 175 115 A 35 35 0 0 1 175 165"
              stroke="#059669"
              strokeWidth="4"
              fill="none"
            />
            <text x="140" y="75" fontSize="16" fontFamily="serif" fill="#dc2626" textAnchor="middle" fontWeight="bold">
              {data.knownAngle}°
            </text>
            <text x="210" y="140" fontSize="16" fontFamily="serif" fill="#059669" textAnchor="middle" fontWeight="bold">
              x = ?
            </text>
          </>
        )}

        {data.questionType === 2 && (
          <>
            <path
              d="M 115 105 A 30 30 0 0 1 165 105"
              stroke="#dc2626"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M 105 165 A 35 35 0 0 1 105 115"
              stroke="#059669"
              strokeWidth="4"
              fill="none"
            />
            <text x="140" y="75" fontSize="16" fontFamily="serif" fill="#dc2626" textAnchor="middle" fontWeight="bold">
              {data.knownAngle}°
            </text>
            <text x="70" y="140" fontSize="16" fontFamily="serif" fill="#059669" textAnchor="middle" fontWeight="bold">
              x = ?
            </text>
          </>
        )}

        <text x="140" y="265" fontSize="12" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">
          Two intersecting lines
        </text>
      </svg>
    {question.question}
    </div>
  );
};

const AnglesAroundPointQuiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [seed, setSeed] = useState<number>(Date.now());

  const generateSingleQuestion = (): QuizQuestion => {
    const knownAngle = Math.floor(Math.random() * 120) + 30;
    const oppositeAngle = knownAngle;
    const adjacentAngle = 180 - knownAngle;

    const questionType = Math.floor(Math.random() * 3);

    let missingAngle: number, questionText: string, concept: string;

    switch (questionType) {
      case 0:
        missingAngle = oppositeAngle;
        questionText = `If one angle is ${knownAngle}°, what is the vertically opposite angle x?`;
        concept = 'vertically opposite';
        break;
      case 1:
        missingAngle = adjacentAngle;
        questionText = `If one angle is ${knownAngle}°, what is the adjacent angle x?`;
        concept = 'adjacent';
        break;
      case 2:
        missingAngle = adjacentAngle;
        questionText = `If one angle is ${knownAngle}°, what is angle x?`;
        concept = 'other adjacent';
        break;
      default:
        missingAngle = oppositeAngle;
        questionText = `If one angle is ${knownAngle}°, what is the vertically opposite angle x?`;
        concept = 'vertically opposite';
    }

    const options = [
      missingAngle.toString(),
      (missingAngle === knownAngle ? (missingAngle + 10).toString() : knownAngle.toString()),
      (180 - missingAngle).toString(),
      (Math.abs(missingAngle - 30) > 10 ? (missingAngle - 30).toString() : (missingAngle + 20).toString()),
    ].sort(() => 0.5 - Math.random());

    const correctIndex = options.indexOf(missingAngle.toString());

    const questionData = {
      knownAngle: knownAngle,
      missingAngle: missingAngle,
      adjacentAngle: adjacentAngle,
      questionText: questionText,
      concept: concept,
      questionType: questionType,
    };

    let explanationText = '';
    if (concept === 'vertically opposite') {
      explanationText = `Vertically opposite angles are equal.\n\nWorking:\nx = ${knownAngle}°`;
    } else if (concept === 'adjacent' || concept === 'other adjacent') {
      explanationText = `Adjacent angles are supplementary (they add up to 180°).\n\nWorking:\nx = 180° - ${knownAngle}°\nx = ${missingAngle}°`;
    }

    return {
      id: JSON.stringify(questionData),
      question: questionText,
      options: options,
      correct: correctIndex,
      explanation: explanationText,
      explanationType: 'text',
      questionType: 'text',
      optionType: 'text',
      CustomContentComponent: AnglesAroundPointDiagram,
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
        title="Angles Around a Point Quiz"
        icon="📐"
        theme={{
          from: "from-[#B22222]",
          to: "to-[#722323]",
          button: "bg-white text-fuchsia-600",
          buttonHover: "hover:bg-fuchsia-50 hover:text-fuchsia-700"
        }}
        rulesTitle="Key Rules:"
        rules={[
          "Vertically opposite angles are equal.",
          "Adjacent angles on a straight line sum to $180^\\circ$."
        ]}
        questions={questions}
        onReset={handleReset}
      />
    </div>
  );
};

export default AnglesAroundPointQuiz;