import { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { QuizTemplate } from "./Topic1/Topic1.2/QuizTemplate";
// import { QuizTemplate } from "./QuizTemplate";
// import StandardFormConverter from "./Topic1/Topic1.4/StandardFormConverter";

const StandardFormConverter = () => {
  const [number, setNumber] = useState<number | string>(5000000);
  const [isSmallNumber, setIsSmallNumber] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<string>("5 \\times 10^6");
  const [choices, setChoices] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const theme = "blue";

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    // Alternate between large and small numbers
    const generateSmall = !isSmallNumber;
    setIsSmallNumber(generateSmall);
    
    if (generateSmall) {
      // Generate small numbers (0.001 to 0.0000001)
      const smallNumbers = [
        0.005, 0.00034, 0.000072, 0.0000008, 
        0.000003, 0.000000045, 0.0006, 0.0000091
      ];
      const randomNum = smallNumbers[Math.floor(Math.random() * smallNumbers.length)];
      setNumber(randomNum);
      generateSmallNumberChoices(randomNum);
    } else {
      // Generate large numbers (1000 to 10000000000)
      const largeNumbers = [
        5000000, 340000000, 7200000000, 50000, 
        8000000000, 250000, 90000000, 1200000000
      ];
      const randomNum = largeNumbers[Math.floor(Math.random() * largeNumbers.length)];
      setNumber(randomNum);
      generateLargeNumberChoices(randomNum);
    }
  };

  const generateSmallNumberChoices = (num: number) => {
    const numStr = num.toString();
    const firstNonZeroIndex = numStr.search(/[1-9]/);
    const firstDigit = numStr[firstNonZeroIndex];
    const decimalPlaces = firstNonZeroIndex - 1;
    const correctExponent = -decimalPlaces;
    const correct = `${firstDigit} \\times 10^{${correctExponent}}`;
    
    setCorrectAnswer(correct);
    
    // Generate wrong choices
    const wrongChoices = new Set<string>();
    wrongChoices.add(correct);
    
    // Add common mistakes
    wrongChoices.add(`${firstDigit} \\times 10^{${correctExponent - 1}}`); // Wrong exponent
    wrongChoices.add(`${firstDigit} \\times 10^{${correctExponent + 1}}`); // Wrong exponent
    wrongChoices.add(`${Number(firstDigit) + 1} \\times 10^{${correctExponent}}`); // Wrong coefficient
    
    // Fill remaining with random variations
    let attempts = 0;
    while (wrongChoices.size < 4 && attempts < 20) {
      const variation = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3) + 1;
      const wrongExp = correctExponent + variation;
      const wrong = `${firstDigit} \\times 10^{${wrongExp}}`;
      if (!wrongChoices.has(wrong)) {
        wrongChoices.add(wrong);
      }
      attempts++;
    }
    
    const shuffled = Array.from(wrongChoices).sort(() => Math.random() - 0.5);
    setChoices(shuffled);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const generateLargeNumberChoices = (num: number) => {
    const numStr = num.toString();
    const firstDigit = numStr[0];
    const exponent = numStr.length - 1;
    const correct = `${firstDigit} \\times 10^{${exponent}}`;
    
    setCorrectAnswer(correct);
    
    // Generate wrong choices
    const wrongChoices = new Set<string>();
    wrongChoices.add(correct);
    
    // Add common mistakes
    wrongChoices.add(`${firstDigit} \\times 10^{${exponent - 1}}`); // Wrong exponent
    wrongChoices.add(`${firstDigit} \\times 10^{${exponent + 1}}`); // Wrong exponent
    wrongChoices.add(`${Number(firstDigit) + 1} \\times 10^{${exponent}}`); // Wrong coefficient
    
    // Fill remaining with random variations
    let attempts = 0;
    while (wrongChoices.size < 4 && attempts < 20) {
      const variation = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3) + 1;
      const wrongExp = exponent + variation;
      const wrong = `${firstDigit} \\times 10^{${wrongExp}}`;
      if (!wrongChoices.has(wrong)) {
        wrongChoices.add(wrong);
      }
      attempts++;
    }
    
    const shuffled = Array.from(wrongChoices).sort(() => Math.random() - 0.5);
    setChoices(shuffled);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    const correct = selectedAnswer === correctAnswer;
    
    setIsCorrect(correct);
    setShowResult(true);
    setAttempts(prev => prev + 1);
    if (correct) setScore(prev => prev + 1);
  };

  const newQuestion = () => {
    generateQuestion();
  };

  return (
    <QuizTemplate<string>
      title="Standard Form Quiz"
      theme={theme}
      question={
        <>
          Convert {number} to standard form:
        </>
      }
      choices={choices}
      selectedAnswer={selectedAnswer}
      onSelectAnswer={setSelectedAnswer}
      showResult={showResult}
      isCorrect={isCorrect}
      correctAnswer={correctAnswer}
      explanation={
        <>
          <p className="mb-2">To convert to standard form:</p>
          <p>1. Find the first non-zero digit: {correctAnswer.split(' \\times ')[0][0]}</p>
          <p>2. Place decimal after first digit</p>
          <p>3. Count decimal places moved: {isSmallNumber ? "right" : "left"}</p>
          <p className="mt-2">
            Standard form: {number} = <InlineMath math={correctAnswer} />
          </p>
        </>
      }
      score={score}
      attempts={attempts}
      onCheckAnswer={checkAnswer}
      onNewQuestion={newQuestion}
    />
  );
};

export default StandardFormConverter