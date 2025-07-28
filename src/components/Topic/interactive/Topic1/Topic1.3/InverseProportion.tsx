import { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { QuizTemplate } from "../Topic1.2/QuizTemplate";


const InverseProportion = () => {
  const [questionType, setQuestionType] = useState<"findValue" | "findConstant">("findValue");
  const [x1, setX1] = useState<number>(8);
  const [y1, setY1] = useState<number>(15);
  const [x2, setX2] = useState<number>(12);
  const [context, setContext] = useState<string>("machines");
  const [resultUnit, setResultUnit] = useState<string>("days");
  const [correctAnswer, setCorrectAnswer] = useState<number>(10);
  const [choices, setChoices] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const theme = "orange";

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    // Alternate between question types
    const newType = questionType === "findValue" ? "findConstant" : "findValue";
    setQuestionType(newType);
    
    // Contexts for different scenarios
    const contexts = [
      { item: "machines", unit: "days", k: 120 },
      { item: "workers", unit: "hours", k: 48 },
      { item: "pipes", unit: "minutes", k: 60 },
      { item: "trucks", unit: "trips", k: 80 },
      { item: "computers", unit: "minutes", k: 120 }
    ];
    
    const contextData = contexts[Math.floor(Math.random() * contexts.length)];
    setContext(contextData.item);
    setResultUnit(contextData.unit);
    
    if (newType === "findValue") {
      // Find unknown value questions
      const scenarios = [
        { x1: 8, y1: 15, x2: 12, answer: 10 },
        { x1: 6, y1: 20, x2: 10, answer: 12 },
        { x1: 4, y1: 30, x2: 12, answer: 10 },
        { x1: 10, y1: 12, x2: 15, answer: 8 },
        { x1: 5, y1: 24, x2: 8, answer: 15 }
      ];
      
      const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
      setX1(scenario.x1);
      setY1(scenario.y1);
      setX2(scenario.x2);
      setCorrectAnswer(scenario.answer);
      generateChoices(scenario.answer);
    } else {
      // Find constant questions
      const xVal = Math.floor(Math.random() * 10) + 2;
      const yVal = Math.floor(Math.random() * 20) + 5;
      const constant = xVal * yVal;
      setX1(xVal);
      setY1(yVal);
      setCorrectAnswer(constant);
      generateChoices(constant);
    }
  };

  const generateChoices = (correct: number) => {
    const wrongChoices = new Set<number>();
    wrongChoices.add(correct);
    
    // Generate wrong choices with safety limits
    let attempts = 0;
    const maxAttempts = 50;
    
    while (wrongChoices.size < 4 && attempts < maxAttempts) {
      const variation = (Math.random() > 0.5 ? 1 : -1) * 
                       Math.max(1, Math.floor(Math.abs(correct) * 0.3));
      const wrong = parseFloat((correct + variation).toFixed(2));
      if (wrong > 0 && !wrongChoices.has(wrong)) {
        wrongChoices.add(wrong);
      }
      attempts++;
    }
    
    // Fill remaining slots if needed
    let fillAttempts = 0;
    while (wrongChoices.size < 4 && fillAttempts < 20) {
      const wrong = parseFloat((correct * (0.5 + Math.random())).toFixed(2));
      if (wrong > 0 && !wrongChoices.has(wrong)) {
        wrongChoices.add(wrong);
      }
      fillAttempts++;
    }
    
    const shuffled = Array.from(wrongChoices).sort(() => Math.random() - 0.5);
    setChoices(shuffled);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    const correct = Math.abs(selectedAnswer - correctAnswer) < 0.1;
    
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
      title="Inverse Proportion"
      theme={theme}
      question={
        questionType === "findValue" ? (
          <>
            If {x1} {context} can complete a job in {y1} {resultUnit}, how long will it take {x2} {context}?
          </>
        ) : (
          <>
            If {x1} {context} can complete a job in {y1} {resultUnit}, what is the constant of proportionality?
          </>
        )
      }
      choices={choices}
      selectedAnswer={selectedAnswer}
      onSelectAnswer={setSelectedAnswer}
      showResult={showResult}
      isCorrect={isCorrect}
      correctAnswer={correctAnswer}
      explanation={
        questionType === "findValue" ? (
          <>
            <p>Using inverse proportion: <InlineMath math={`x_1 \\times y_1 = x_2 \\times y_2`} /></p>
            <p className="my-2">
              <InlineMath math={`${x1} \\times ${y1} = ${x2} \\times y_2`} />
            </p>
            <p>
              <InlineMath math={`${x1 * y1} = ${x2} \\times y_2`} />
            </p>
            <p className="my-2">
              <InlineMath math={`y_2 = \\frac{${x1 * y1}}{${x2}} = ${correctAnswer}`} />
            </p>
            <p className="mt-2">Answer: {correctAnswer} {resultUnit}</p>
          </>
        ) : (
          <>
            <p>Constant of inverse proportion: <InlineMath math={`k = x \\times y`} /></p>
            <p className="my-2">
              <InlineMath math={`k = ${x1} \\times ${y1} = ${correctAnswer}`} />
            </p>
            <p>Formula: <InlineMath math={`y = \\frac{${correctAnswer}}{x}`} /></p>
            <p className="mt-2">Constant: {correctAnswer} {context}-{resultUnit}</p>
          </>
        )
      }
      score={score}
      attempts={attempts}
      onCheckAnswer={checkAnswer}
      onNewQuestion={newQuestion}
    />
  );
};

export default InverseProportion;