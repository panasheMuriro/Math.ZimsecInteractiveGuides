import { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { QuizTemplate } from "../Topic1.2/QuizTemplate";


const DirectProportion = () => {
  const [questionType, setQuestionType] = useState<"findValue" | "findConstant">("findValue");
  const [x1, setX1] = useState<number>(5);
  const [y1, setY1] = useState<number>(2.5);
  const [x2, setX2] = useState<number>(12);
  const [context, setContext] = useState<string>("pencils");
  const [unit, setUnit] = useState<string>("dollars");
  const [correctAnswer, setCorrectAnswer] = useState<number>(6);
  const [choices, setChoices] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const theme = "green";

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    // Alternate between question types
    const newType = questionType === "findValue" ? "findConstant" : "findValue";
    setQuestionType(newType);
    
    // Contexts for different scenarios
    const contexts = [
      { item: "pencils", unit: "dollars", rate: 0.5 },
      { item: "kg of apples", unit: "dollars", rate: 3 },
      { item: "hours", unit: "dollars", rate: 15 },
      { item: "liters of fuel", unit: "dollars", rate: 1.2 },
      { item: "pages", unit: "minutes", rate: 2 }
    ];
    
    const contextData = contexts[Math.floor(Math.random() * contexts.length)];
    setContext(contextData.item);
    setUnit(contextData.unit);
    
    if (newType === "findValue") {
      // Find unknown value questions
      const scenarios = [
        { x1: 5, y1: 2.5, x2: 12, answer: 6 },
        { x1: 3, y1: 9, x2: 7, answer: 21 },
        { x1: 4, y1: 12, x2: 9, answer: 27 },
        { x1: 6, y1: 18, x2: 11, answer: 33 },
        { x1: 8, y1: 24, x2: 15, answer: 45 }
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
      const yVal = xVal * contextData.rate;
      setX1(xVal);
      setY1(yVal);
      setCorrectAnswer(contextData.rate);
      generateChoices(contextData.rate);
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
                       Math.max(0.1, Math.abs(correct) * 0.3);
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
      title="Direct Proportion"
      theme={theme}
      question={
        questionType === "findValue" ? (
          <>
            If {x1} {context} cost {y1} {unit}, how much do {x2} {context} cost?
          </>
        ) : (
          <>
            If {x1} {context} cost {y1} {unit}, what is the constant of proportionality?
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
            <p>Using direct proportion: <InlineMath math={`\\frac{y_1}{x_1} = \\frac{y_2}{x_2}`} /></p>
            <p className="my-2">
              <InlineMath math={`\\frac{${y1}}{${x1}} = \\frac{y_2}{${x2}}`} />
            </p>
            <p>Cross multiply: <InlineMath math={`${y1} \\times ${x2} = ${x1} \\times y_2`} /></p>
            <p className="my-2">
              <InlineMath math={`${y1 * x2} = ${x1} \\times y_2`} />
            </p>
            <p>
              <InlineMath math={`y_2 = \\frac{${y1 * x2}}{${x1}} = ${correctAnswer}`} />
            </p>
            <p className="mt-2">Answer: {correctAnswer} {unit}</p>
          </>
        ) : (
          <>
            <p>Constant of proportionality: <InlineMath math={`k = \\frac{y}{x}`} /></p>
            <p className="my-2">
              <InlineMath math={`k = \\frac{${y1}}{${x1}} = ${correctAnswer}`} />
            </p>
            <p>Formula: <InlineMath math={`y = ${correctAnswer}x`} /></p>
            <p className="mt-2">Constant: {correctAnswer} {unit} per {context}</p>
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

export default DirectProportion;