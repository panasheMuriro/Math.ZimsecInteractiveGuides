import { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { QuizTemplate } from "../Topic1.2/QuizTemplate";


const RateCalculator = () => {
  const [questionType, setQuestionType] = useState<"calculate" | "findDistance" | "findTime">("calculate");
  const [firstQuantity, setFirstQuantity] = useState<number>(300);
  const [secondQuantity, setSecondQuantity] = useState<number>(4);
  const [firstUnit, setFirstUnit] = useState<string>("km");
  const [secondUnit, setSecondUnit] = useState<string>("h");
  const [correctAnswer, setCorrectAnswer] = useState<number>(75);
  const [choices, setChoices] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const theme = "blue";

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    // Cycle through question types
    const types = ["calculate", "findDistance", "findTime"];
    const currentIndex = types.indexOf(questionType);
    const nextIndex = (currentIndex + 1) % types.length;
    const newType = types[nextIndex] as "calculate" | "findDistance" | "findTime";
    setQuestionType(newType);
    
    if (newType === "calculate") {
      // Rate calculation questions
      const scenarios = [
        { distance: 300, time: 4, rate: 75, distUnit: "km", timeUnit: "h", rateUnit: "km/h" },
        { distance: 240, time: 3, rate: 80, distUnit: "km", timeUnit: "h", rateUnit: "km/h" },
        { distance: 150, time: 2.5, rate: 60, distUnit: "km", timeUnit: "h", rateUnit: "km/h" },
        { distance: 420, time: 7, rate: 60, distUnit: "km", timeUnit: "h", rateUnit: "km/h" }
      ];
      
      const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
      setFirstQuantity(scenario.distance);
      setSecondQuantity(scenario.time);
      setFirstUnit(scenario.distUnit);
      setSecondUnit(scenario.timeUnit);
      setCorrectAnswer(scenario.rate);
      generateChoices(scenario.rate);
    } 
    else if (newType === "findDistance") {
      // Find distance given rate and time
      const scenarios = [
        { rate: 60, time: 3, distance: 180, rateUnit: "km/h", timeUnit: "h", distUnit: "km" },
        { rate: 80, time: 2.5, distance: 200, rateUnit: "km/h", timeUnit: "h", distUnit: "km" },
        { rate: 75, time: 4, distance: 300, rateUnit: "km/h", timeUnit: "h", distUnit: "km" },
        { rate: 90, time: 1.5, distance: 135, rateUnit: "km/h", timeUnit: "h", distUnit: "km" }
      ];
      
      const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
      setFirstQuantity(scenario.rate);
      setSecondQuantity(scenario.time);
      setFirstUnit(scenario.rateUnit);
      setSecondUnit(scenario.timeUnit);
      setCorrectAnswer(scenario.distance);
      generateChoices(scenario.distance);
    }
    else {
      // Find time given distance and rate
      const scenarios = [
        { distance: 240, rate: 60, time: 4, distUnit: "km", rateUnit: "km/h", timeUnit: "h" },
        { distance: 300, rate: 75, time: 4, distUnit: "km", rateUnit: "km/h", timeUnit: "h" },
        { distance: 180, rate: 90, time: 2, distUnit: "km", rateUnit: "km/h", timeUnit: "h" },
        { distance: 400, rate: 80, time: 5, distUnit: "km", rateUnit: "km/h", timeUnit: "h" }
      ];
      
      const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
      setFirstQuantity(scenario.distance);
      setSecondQuantity(scenario.rate);
      setFirstUnit(scenario.distUnit);
      setSecondUnit(scenario.rateUnit);
      setCorrectAnswer(scenario.time);
      generateChoices(scenario.time);
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
      title="Rate Calculator"
      theme={theme}
      question={
        questionType === "calculate" ? (
          <>
            If {firstQuantity} {firstUnit} takes {secondQuantity} {secondUnit}, what is the speed?
          </>
        ) : questionType === "findDistance" ? (
          <>
            If speed is {firstQuantity} {firstUnit} for {secondQuantity} {secondUnit}, how far will you travel?
          </>
        ) : (
          <>
            If {firstQuantity} {firstUnit} is traveled at {secondQuantity} {secondUnit}, how long will it take?
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
        questionType === "calculate" ? (
          <>
            <p>Speed = Distance ÷ Time</p>
            <p className="my-2">
              Speed = {firstQuantity} {firstUnit} ÷ {secondQuantity} {secondUnit}
            </p>
            <p>Speed = {correctAnswer} {firstUnit}/{secondUnit}</p>
          </>
        ) : questionType === "findDistance" ? (
          <>
            <p>Distance = Speed × Time</p>
            <p className="my-2">
              Distance = {firstQuantity} {firstUnit} × {secondQuantity} {secondUnit}
            </p>
            <p>Distance = {correctAnswer} {firstUnit}</p>
          </>
        ) : (
          <>
            <p>Time = Distance ÷ Speed</p>
            <p className="my-2">
              Time = {firstQuantity} {firstUnit} ÷ {secondQuantity} {secondUnit}
            </p>
            <p>Time = {correctAnswer} {secondUnit}</p>
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

export default RateCalculator;