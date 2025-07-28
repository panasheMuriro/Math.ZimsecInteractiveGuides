import { useState, useEffect } from "react";
import { InlineMath } from "react-katex";
import { QuizTemplate, themes } from "./QuizTemplate";

const RoundingGame = () => {
  const [number, setNumber] = useState<number>(3.6789);
  const [decimalPlaces, setDecimalPlaces] = useState<number>(2);
  const [choices, setChoices] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [theme, setTheme] = useState<string>("blue");

  const correctAnswer = parseFloat(number.toFixed(decimalPlaces)).toString();

  useEffect(() => {
    generateChoices();
  }, [number, decimalPlaces]);

  const generateChoices = () => {
    const correct = parseFloat(number.toFixed(decimalPlaces));
    const wrongChoices = new Set<string>();
    wrongChoices.add(correct.toString());
    
    let attempts = 0;
    while (wrongChoices.size < 4 && attempts < 20) {
      const variation = (Math.random() > 0.5 ? 1 : -1) * Math.pow(10, -decimalPlaces);
      const wrong = parseFloat((correct + variation).toFixed(decimalPlaces));
      if (wrong >= 0) {
        wrongChoices.add(wrong.toString());
      }
      attempts++;
    }
    
    while (wrongChoices.size < 4) {
      const randomAdd = Math.random() * 10;
      const wrong = parseFloat((correct + randomAdd).toFixed(decimalPlaces));
      wrongChoices.add(wrong.toString());
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
    setNumber(parseFloat((Math.random() * 100 + 1).toFixed(4)));
    setDecimalPlaces(Math.floor(Math.random() * 3) + 1);
    setTheme(Object.keys(themes)[Math.floor(Math.random() * Object.keys(themes).length)]);
  };

  return (
    <QuizTemplate<string>
      title="Rounding Practice"
      theme={theme}
      question={
        <>
          Round <InlineMath math={number.toString()} /> to <InlineMath math={decimalPlaces.toString()} /> decimal places
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
          Correct answer: <InlineMath math={correctAnswer} />
        </>
      }
      score={score}
      attempts={attempts}
      onCheckAnswer={checkAnswer}
      onNewQuestion={newQuestion}
    />
  );
};


export default RoundingGame;