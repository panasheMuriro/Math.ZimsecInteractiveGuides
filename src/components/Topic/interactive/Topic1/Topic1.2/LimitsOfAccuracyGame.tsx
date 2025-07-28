import { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { QuizTemplate } from "./QuizTemplate";

const LimitsOfAccuracyGame = () => {
  const [roundedValue, setRoundedValue] = useState<string>("5.2");
  const [roundingType, setRoundingType] = useState<string>("1 d.p.");
  const [lowerBound, setLowerBound] = useState<number>(5.15);
  const [upperBound, setUpperBound] = useState<number>(5.25);
  const [questionType, setQuestionType] = useState<"lower" | "upper">("lower");
  const [choices, setChoices] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const theme = "orange"; // Fixed theme

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    // Generate different types of rounding problems
    const problemTypes = [
      { value: "5.2", type: "1 d.p.", lower: 5.15, upper: 5.25 },
      { value: "3.45", type: "2 d.p.", lower: 3.445, upper: 3.455 },
      { value: "12.0", type: "1 d.p.", lower: 11.95, upper: 12.05 },
      { value: "3400", type: "2 s.f.", lower: 3350, upper: 3450 },
      { value: "0.056", type: "2 s.f.", lower: 0.0555, upper: 0.0565 },
      { value: "1.2", type: "2 s.f.", lower: 1.15, upper: 1.25 },
      { value: "25", type: "nearest 10", lower: 20, upper: 30 },
      { value: "140", type: "nearest 10", lower: 135, upper: 145 },
      { value: "2000", type: "nearest 1000", lower: 1500, upper: 2500 }
    ];
    
    const randomProblem = problemTypes[Math.floor(Math.random() * problemTypes.length)];
    setRoundedValue(randomProblem.value);
    setRoundingType(randomProblem.type);
    setLowerBound(randomProblem.lower);
    setUpperBound(randomProblem.upper);
    
    // Randomly choose between lower or upper bound question
    const isLower = Math.random() > 0.5;
    setQuestionType(isLower ? "lower" : "upper");
    
    generateChoices(isLower ? randomProblem.lower : randomProblem.upper);
  };

  const generateChoices = (correct: number) => {
    const wrongChoices = new Set<number>();
    wrongChoices.add(correct);
    
    // Generate wrong choices with safety limit
    let attempts = 0;
    const maxAttempts = 50;
    
    while (wrongChoices.size < 4 && attempts < maxAttempts) {
      // Generate values around the correct answer
      const variation = (Math.random() > 0.5 ? 1 : -1) * 
                       Math.max(0.01, Math.abs(correct) * 0.1);
      const wrong = parseFloat((correct + variation).toFixed(6));
      
      // Ensure wrong choice is positive and not already added
      if (wrong > 0 && !wrongChoices.has(wrong)) {
        wrongChoices.add(wrong);
      }
      
      attempts++;
    }
    
    // Fill remaining slots if needed with simple variations
    let fillValue = correct * 0.5;
    let fillAttempts = 0;
    while (wrongChoices.size < 4 && fillAttempts < 20) {
      if (!wrongChoices.has(fillValue)) {
        wrongChoices.add(parseFloat(fillValue.toFixed(6)));
      }
      fillValue += correct * 0.25;
      fillAttempts++;
    }
    
    const shuffled = Array.from(wrongChoices).sort(() => Math.random() - 0.5);
    setChoices(shuffled);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    // Only the exact bound is correct
    const correct = selectedAnswer === (questionType === "lower" ? lowerBound : upperBound);
    
    setIsCorrect(correct);
    setShowResult(true);
    setAttempts(prev => prev + 1);
    if (correct) setScore(prev => prev + 1);
  };

  const newQuestion = () => {
    generateQuestion();
  };

  return (
    <QuizTemplate<number>
      title="Limits of Accuracy"
      theme={theme}
      question={
        <>
          What is the {questionType === "lower" ? "lower" : "upper"} bound of{" "}
          <InlineMath math={roundedValue} /> (to {roundingType})?
        </>
      }
      choices={choices}
      selectedAnswer={selectedAnswer}
      onSelectAnswer={setSelectedAnswer}
      showResult={showResult}
      isCorrect={isCorrect}
      correctAnswer={questionType === "lower" ? lowerBound : upperBound}
      explanation={
        <>
          <InlineMath math={roundedValue} /> (to {roundingType}) means:{" "}
          <InlineMath math={`${lowerBound} \\leq x < ${upperBound}`} />
          <br />
          {questionType === "lower" ? "Lower bound" : "Upper bound"} ={" "}
          {questionType === "lower" ? lowerBound : upperBound}
        </>
      }
      score={score}
      attempts={attempts}
      onCheckAnswer={checkAnswer}
      onNewQuestion={newQuestion}
    />
  );
};

export default LimitsOfAccuracyGame;