import { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { QuizTemplate } from "../Topic1.2/QuizTemplate";
// import { QuizTemplate, themes } from "./QuizTemplate";

const RatioQuiz = () => {
  const [questionType, setQuestionType] = useState<"simplify" | "findQuantity">("simplify");
  const [ratioA, setRatioA] = useState<number>(6);
  const [ratioB, setRatioB] = useState<number>(8);
  const [totalQuantity, setTotalQuantity] = useState<number>(21);
  const [correctAnswer, setCorrectAnswer] = useState<number | [number, number]>([3, 4]);
  const [choices, setChoices] = useState<(number | [number, number])[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | [number, number] | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [askingForPart, setAskingForPart] = useState<"A" | "B">("A");
  const theme = "purple"; // Fixed theme

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    // Alternate between question types
    const newType = questionType === "simplify" ? "findQuantity" : "simplify";
    setQuestionType(newType);
    
    if (newType === "simplify") {
      // Generate simplification questions
      const ratios = [
        { a: 6, b: 8, sa: 3, sb: 4 },
        { a: 15, b: 25, sa: 3, sb: 5 },
        { a: 12, b: 18, sa: 2, sb: 3 },
        { a: 20, b: 30, sa: 2, sb: 3 },
        { a: 9, b: 12, sa: 3, sb: 4 },
        { a: 14, b: 21, sa: 2, sb: 3 },
        { a: 10, b: 25, sa: 2, sb: 5 },
        { a: 18, b: 24, sa: 3, sb: 4 }
      ];
      
      const randomRatio = ratios[Math.floor(Math.random() * ratios.length)];
      setRatioA(randomRatio.a);
      setRatioB(randomRatio.b);
      setCorrectAnswer([randomRatio.sa, randomRatio.sb] as [number, number]);
      generateSimplificationChoices(randomRatio.sa, randomRatio.sb);
    } else {
      // Generate find quantity questions
      const scenarios = [
        { ratioA: 3, ratioB: 4, total: 21 },
        { ratioA: 2, ratioB: 5, total: 35 },
        { ratioA: 1, ratioB: 3, total: 24 },
        { ratioA: 5, ratioB: 3, total: 40 },
        { ratioA: 4, ratioB: 7, total: 33 },
        { ratioA: 2, ratioB: 3, total: 25 }
      ];
      
      const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
      setRatioA(scenario.ratioA);
      setRatioB(scenario.ratioB);
      setTotalQuantity(scenario.total);
      
      // Calculate correct answers
      const totalParts = scenario.ratioA + scenario.ratioB;
      const valuePerPart = scenario.total / totalParts;
      const partAValue = scenario.ratioA * valuePerPart;
      const partBValue = scenario.ratioB * valuePerPart;
      
      // Randomly ask for either part A or part B
      const askForA = Math.random() > 0.5;
      setAskingForPart(askForA ? "A" : "B");
      setCorrectAnswer(askForA ? partAValue : partBValue);
      generateQuantityChoices(askForA ? partAValue : partBValue);
    }
  };

  const generateSimplificationChoices = (correctA: number, correctB: number) => {
    const wrongChoices = new Set<string>();
    const correctStr = `${correctA}:${correctB}`;
    wrongChoices.add(correctStr);
    
    // Generate wrong ratio choices
    const commonWrongRatios = [
      `${correctA}:${correctB + 1}`,
      `${correctA + 1}:${correctB}`,
      `${correctA - 1}:${correctB}`,
      `${correctA}:${correctB - 1}`,
      `${correctA * 2}:${correctB * 2}`,
      `${Math.max(1, correctA - 1)}:${correctB + 1}`
    ];
    
    commonWrongRatios.forEach(ratio => {
      if (wrongChoices.size < 4 && !wrongChoices.has(ratio)) {
        wrongChoices.add(ratio);
      }
    });
    
    // Fill remaining if needed
    while (wrongChoices.size < 4) {
      const randA = Math.floor(Math.random() * 10) + 1;
      const randB = Math.floor(Math.random() * 10) + 1;
      const ratio = `${randA}:${randB}`;
      if (!wrongChoices.has(ratio)) {
        wrongChoices.add(ratio);
      }
    }
    
    const shuffled = Array.from(wrongChoices)
      .map(str => {
        const [a, b] = str.split(':').map(Number);
        return [a, b] as [number, number];
      })
      .sort(() => Math.random() - 0.5);
    
    setChoices(shuffled);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const generateQuantityChoices = (correct: number) => {
    const wrongChoices = new Set<number>();
    wrongChoices.add(correct);
    
    // Generate wrong quantity choices
    while (wrongChoices.size < 4) {
      const variation = (Math.random() > 0.5 ? 1 : -1) * 
                       Math.floor(Math.random() * 10) + 1;
      const wrong = Math.max(1, correct + variation);
      if (!wrongChoices.has(wrong)) {
        wrongChoices.add(wrong);
      }
    }
    
    const shuffled = Array.from(wrongChoices).sort(() => Math.random() - 0.5);
    setChoices(shuffled);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    
    let correct = false;
    if (questionType === "simplify") {
      const selected = selectedAnswer as [number, number];
      const correctAns = correctAnswer as [number, number];
      correct = selected[0] === correctAns[0] && selected[1] === correctAns[1];
    } else {
      correct = selectedAnswer === correctAnswer;
    }
    
    setIsCorrect(correct);
    setShowResult(true);
    setAttempts(prev => prev + 1);
    if (correct) setScore(prev => prev + 1);
  };

  const newQuestion = () => {
    generateQuestion();
  };

  return (
    <QuizTemplate<(number | [number, number])>
      title="Ratio Quiz"
      theme={theme}
      question={
        questionType === "simplify" ? (
          <>
            Simplify the ratio <InlineMath math={`${ratioA}:${ratioB}`} />
          </>
        ) : (
          <>
            In a ratio of <InlineMath math={`${ratioA}:${ratioB}`} />, if the total is {totalQuantity}, 
            what is the quantity of the {askingForPart === "A" ? "first" : "second"} part?
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
        questionType === "simplify" ? (
          <>
            <p className="mb-2">To simplify the ratio:</p>
            <p><InlineMath math={`\\frac{${ratioA}}{${ratioB}}`} /></p>
            <p className="my-2">Find the GCD of {ratioA} and {ratioB}:</p>
            <p>GCD = {ratioA / (correctAnswer as [number, number])[0]}</p>
            <p className="my-2">Divide both terms by the GCD:</p>
            <p>
              <InlineMath math={`\\frac{${ratioA}}{${ratioB}} = \\frac{${ratioA} \\div ${ratioA / (correctAnswer as [number, number])[0]}}{${ratioB} \\div ${ratioA / (correctAnswer as [number, number])[0]}} = \\frac{${(correctAnswer as [number, number])[0]}}{${(correctAnswer as [number, number])[1]}}`} />
            </p>
            <p className="mt-2">Simplified ratio: <InlineMath math={`${(correctAnswer as [number, number])[0]}:${(correctAnswer as [number, number])[1]}`} /></p>
          </>
        ) : (
          <>
            <p className="mb-2">To find the quantity:</p>
            <p>Ratio = <InlineMath math={`${ratioA}:${ratioB}`} /></p>
            <p className="my-2">Total parts = {ratioA} + {ratioB} = {ratioA + ratioB}</p>
            <p>Value of each part = {totalQuantity} ÷ {ratioA + ratioB} = {totalQuantity / (ratioA + ratioB)}</p>
            <p className="my-2">
              {askingForPart === "A" 
                ? `First part = ${ratioA} × ${totalQuantity / (ratioA + ratioB)} = ${correctAnswer}` 
                : `Second part = ${ratioB} × ${totalQuantity / (ratioA + ratioB)} = ${correctAnswer}`}
            </p>
            <p className="mt-2">Answer: {correctAnswer}</p>
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

export default RatioQuiz;