import { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { QuizTemplate } from "./QuizTemplate";

const EstimationGame = () => {
  const [expression, setExpression] = useState<string>("19.8 \\times 4.2");
  const [actualAnswer, setActualAnswer] = useState<number>(83.16);
  const [estimatedAnswer, setEstimatedAnswer] = useState<number>(80);
  const [choices, setChoices] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [theme,] = useState<string>("purple");

  useEffect(() => {
    generateQuestion();
  }, []);

  const expressions = [
    { expr: "19.8 \\times 4.2", actual: 83.16, estimated: 80 },
    { expr: "7.8 \\times 12.1", actual: 94.38, estimated: 96 },
    { expr: "49 \\times 21", actual: 1029, estimated: 1000 },
    { expr: "297 \\div 3.1", actual: 95.81, estimated: 100 },
    { expr: "487 \\div 23", actual: 21.17, estimated: 20 },
    { expr: "156 \\div 7.8", actual: 20, estimated: 20 },
    { expr: "23.7 + 45.2 + 31.8", actual: 100.7, estimated: 101 },
    { expr: "198 - 47", actual: 151, estimated: 150 },
    { expr: "\\frac{19.8 \\times 4.2}{3.1}", actual: 26.83, estimated: 27 }
  ];

  const generateQuestion = () => {
    const randomExpr = expressions[Math.floor(Math.random() * expressions.length)];
    setExpression(randomExpr.expr);
    setActualAnswer(randomExpr.actual);
    setEstimatedAnswer(randomExpr.estimated);
    generateChoices(randomExpr.estimated);
  };

  const generateChoices = (correct: number) => {
    const choicesArray: number[] = [correct];
    
    // Generate 3 wrong choices that are clearly wrong
    const baseVariation = Math.max(1, Math.floor(correct * 0.1));
    
    while (choicesArray.length < 4) {
      const isMultiplier = Math.random() > 0.5;
      
      if (isMultiplier && correct > 10) {
        // Use multiplication/division factors
        const factors = [0.5, 2, 3, 5, 10];
        const factor = factors[Math.floor(Math.random() * factors.length)];
        const wrong = Math.round(correct * factor);
        if (!choicesArray.includes(wrong) && wrong > 0) {
          choicesArray.push(wrong);
        }
      } else {
        // Use addition/subtraction variations
        const variation = (Math.random() > 0.5 ? 1 : -1) * 
                         (baseVariation * Math.floor(Math.random() * 5) + baseVariation);
        const wrong = Math.max(1, correct + variation);
        if (!choicesArray.includes(wrong)) {
          choicesArray.push(Math.round(wrong));
        }
      }
    }
    
    const shuffled = choicesArray.sort(() => Math.random() - 0.5);
    setChoices(shuffled);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    // Only the exact estimated answer is correct
    const correct = selectedAnswer === estimatedAnswer;
    
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
      title="Estimation Practice"
      theme={theme}
      question={
        <>
          Estimate: <InlineMath math={expression} />
        </>
      }
      choices={choices}
      selectedAnswer={selectedAnswer}
      onSelectAnswer={setSelectedAnswer}
      showResult={showResult}
      isCorrect={isCorrect}
      correctAnswer={estimatedAnswer}
      explanation={
        <>
          Good estimate: &asymp; {estimatedAnswer}
          <br />
          Actual answer: {actualAnswer.toFixed(2)}
        </>
      }
      score={score}
      attempts={attempts}
      onCheckAnswer={checkAnswer}
      onNewQuestion={newQuestion}
    />
  );
};

export default EstimationGame;