import { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { QuizTemplate } from "./QuizTemplate";

const DecimalPlacesGame = () => {
  const [questionType, setQuestionType] = useState<"dp" | "sf">("dp");
  const [number, setNumber] = useState<string>("3.456");
  const [targetValue, setTargetValue] = useState<number>(3);
  const [choices, setChoices] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [theme, ] = useState<string>("rainbow");

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const newType = questionType === "dp" ? "sf" : "dp";
    setQuestionType(newType);
    
    let newNumber: string;
    let maxTarget: number;
    
    if (newType === "dp") {
      const dp = Math.floor(Math.random() * 5);
      const integerPart = Math.floor(Math.random() * 100) + 1;
      if (dp === 0) {
        newNumber = integerPart.toString();
      } else {
        const decimalPart = Math.random().toFixed(dp).substring(2);
        newNumber = `${integerPart}.${decimalPart}`;
      }
      maxTarget = dp;
    } else {
      const sf = Math.floor(Math.random() * 4) + 1;
      if (sf === 1) {
        newNumber = (Math.floor(Math.random() * 9) + 1).toString();
      } else {
        const digits = [];
        for (let i = 0; i < sf; i++) {
          digits.push(i === 0 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 10));
        }
        
        if (Math.random() > 0.5 && sf > 1) {
          const decimalPos = Math.floor(Math.random() * (sf - 1)) + 1;
          newNumber = digits.slice(0, decimalPos).join('') + '.' + digits.slice(decimalPos).join('');
        } else {
          newNumber = digits.join('') + (Math.random() > 0.7 ? '.0' : '');
        }
      }
      maxTarget = sf;
    }
    
    setNumber(newNumber);
    setTargetValue(maxTarget);
    generateChoices(maxTarget);
  };

  const generateChoices = (correct: number) => {
    const wrongChoices = new Set<number>();
    wrongChoices.add(correct);
    
    let attempts = 0;
    while (wrongChoices.size < 4 && attempts < 20) {
      const variation = Math.floor(Math.random() * 5) - 2;
      const wrong = Math.max(0, correct + variation);
      if (wrong <= 6) {
        wrongChoices.add(wrong);
      }
      attempts++;
    }
    
    let fillValue = 0;
    while (wrongChoices.size < 4) {
      if (!wrongChoices.has(fillValue)) {
        wrongChoices.add(fillValue);
      }
      fillValue++;
    }
    
    const shuffled = Array.from(wrongChoices).sort(() => Math.random() - 0.5);
    setChoices(shuffled);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    const correct = selectedAnswer === targetValue;
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
      title="Decimal Places & Significant Figures"
      theme={theme}
      question={
        <>
          How many {questionType === "dp" ? "decimal places " : "significant figures "} 
          does <InlineMath math={number} /> have?
        </>
      }
      choices={choices}
      selectedAnswer={selectedAnswer}
      onSelectAnswer={setSelectedAnswer}
      showResult={showResult}
      isCorrect={isCorrect}
      correctAnswer={targetValue}
      explanation={
        <>
          <InlineMath math={number} /> has {targetValue} {questionType === "dp" ? "decimal place(s)" : "significant figure(s)"}
        </>
      }
      score={score}
      attempts={attempts}
      onCheckAnswer={checkAnswer}
      onNewQuestion={newQuestion}
    />
  );
};

export default DecimalPlacesGame;