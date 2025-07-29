// ScaleTypesQuizData.ts

// Define the structure for a quiz question
export interface ScaleTypesQuizQuestion {
  id: string;
  question: string; // Plain text question
  choices: string[]; // Plain text choices
  correctAnswer: string; // The correct choice (must match one of the choices)
  explanation: string; // KaTeX string for the explanation
}

export const scaleTypesQuizQuestions: ScaleTypesQuizQuestion[] = [
  {
    id: "q1",
    question: "What does the denominator in a Representative Fraction (RF) scale represent?",
    choices: [
      "The number of map units",
      "The number of real-world units represented by 1 map unit",
      "The ratio of map distance to ground distance",
      "The length of the linear scale bar"
    ],
    correctAnswer: "The number of real-world units represented by 1 map unit",
    // Explanation can still use KaTeX for clarity on the scale format
    explanation: "\\text{In an RF scale like } 1:50,000\\text{, the denominator (50,000)} \\\\ \\text{indicates how many real-world units (e.g., cm)} \\\\ \\text{are represented by a single unit (e.g., 1 cm) on the map.}"
  },
  {
    id: "q2",
    question: "If a map has a scale of 1:100,000, what does this mean?",
    choices: [
      "1 unit on the map equals 100,000 units in reality",
      "100,000 units on the map equals 1 unit in reality",
      "The map is 100,000 times smaller than the area it represents",
      "Both A and C are correct"
    ],
    correctAnswer: "Both A and C are correct",
    explanation: "\\text{A scale of } 1:100,000 \\text{ means} \\\\ \\text{the linear dimensions on the map} \\\\ \\text{are 1/100,000th the size of the actual} \\\\ \\text{dimensions, so 1 unit on the map} \\\\ \\text{corresponds to 100,000 units in reality.}"
  },
  {
    id: "q3",
    question: "Which type of scale is shown as a graduated line on a map?",
    choices: [
      "Representative Fraction (RF)",
      "Ratio Scale",
      "Linear Scale",
      "Verbal Scale"
    ],
    correctAnswer: "Linear Scale",
    explanation: "\\text{A Linear Scale is a visual bar} \\\\ \\text{or line marked with real-world} \\\\ \\text{distances, allowing users to measure} \\\\ \\text{distances directly with a ruler.}"
  },
  {
    id: "q4",
    question: "If 3 cm on a map represents 15 km in reality, what is the RF scale?",
    choices: [
      "1:5",
      "1:500,000",
      "1:5,000",
      "3:15"
    ],
    correctAnswer: "1:500,000",
    explanation: "\\text{First, convert units: } 15 \\text{ km} = 1,500,000 \\text{ cm.} \\\\ \\text{Then, find the ratio: } 3 \\text{ cm (map)} : 1,500,000 \\text{ cm (real)} \\\\ \\text{Divide both sides by 3 to get the RF: } 1 : 500,000."
  },
  {
    id: "q5",
    question: "What is a key characteristic of a Representative Fraction (RF) scale?",
    choices: [
      "It always uses a bar line",
      "The numerator is always 1",
      "It describes distance in words",
      "It changes with map projection"
    ],
    correctAnswer: "The numerator is always 1",
    explanation: "\\text{An RF scale is written as a fraction (e.g., } \\frac{1}{50,000} \\text{)} \\\\ \\text{or a ratio (e.g., } 1:50,000 \\text{) where} \\\\ \\text{the numerator is consistently 1,} \\\\ \\text{and the denominator represents the scale factor.}"
  }
];


// ScaleTypesQuizComponent.tsx
import React, { useState, useCallback } from 'react';
import {  BlockMath } from 'react-katex'; // Import BlockMath for explanations if needed
import 'katex/dist/katex.min.css';
import { QuizTemplate } from '../Topic1.2/QuizTemplate';


const ScaleTypesQuizComponent: React.FC = () => {
  // State for quiz logic
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const currentQuestion: ScaleTypesQuizQuestion = scaleTypesQuizQuestions[currentQuestionIndex];

  // Handle selecting an answer
  const handleSelectAnswer = useCallback((choice: string) => {
    setSelectedAnswer(choice);
    // Reset result state when a new answer is selected
    if (showResult) {
      setShowResult(false);
    }
  }, [showResult]);

  // Handle checking the answer
  const handleCheckAnswer = useCallback(() => {
    if (selectedAnswer === null) return;

    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    setAttempts(a => a + 1);
    if (correct) {
      setScore(s => s + 1);
    }
  }, [selectedAnswer, currentQuestion.correctAnswer]);

  // Handle moving to a new question (or cycling)
  const handleNewQuestion = useCallback(() => {
    // Move to the next question, or loop back to the first
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % scaleTypesQuizQuestions.length);
    setSelectedAnswer(null);
    setShowResult(false);
    // Note: Score and attempts are not reset here, only on explicit reset
  }, []);

  // Custom renderer to display plain text choices
  const renderPlainTextChoice = (choice: string) => {
    // Simply return the plain text string
    return <span>{choice}</span>;
  };
  const renderQuestion = (question: string) => {
    return <span>{question}</span>;
  };

   // Custom renderer to display explanations with KaTeX
  const renderExplanation = (content: string) => {
    // Use BlockMath for potentially longer explanations with line breaks
    return <BlockMath math={content} />;
  };


  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md">
        {/* Pass the plain text question as the question prop */}
        <QuizTemplate<string>
          title="Types of Scales Quiz"
          theme="green"
          question={renderQuestion(currentQuestion.question)} // Render question as plain text
          choices={currentQuestion.choices}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          showResult={showResult}
          isCorrect={isCorrect}
          correctAnswer={currentQuestion.correctAnswer}
          explanation={renderExplanation(currentQuestion.explanation)} // Render explanation with KaTeX
          score={score}
          attempts={attempts}
          onCheckAnswer={handleCheckAnswer}
          onNewQuestion={handleNewQuestion}
          disabled={showResult}
          renderChoice={renderPlainTextChoice} // Render each choice as plain text
        />
      </div>
    </div>
  );
};

export default ScaleTypesQuizComponent;