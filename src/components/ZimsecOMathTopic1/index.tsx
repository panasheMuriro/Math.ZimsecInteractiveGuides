import { useState } from "react";
import { MathJaxContext } from "better-react-mathjax";
import { sections, quizQuestions, mathjaxConfig } from "./config";
import StudyView from "./views/StudyView";
import QuizView from "./views/QuizView";
import QuizCompleteView from "./views/QuizCompleteView";
import HomeView from "./views/HomeView";

const ZimsecOMathTopic1 = () => {
  const [currentView, setCurrentView] = useState<
    "home" | "study" | "quiz" | "quiz-complete"
  >("home");
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [animateScore, setAnimateScore] = useState<boolean>(false);
  const [completedSections, setCompletedSections] = useState<Set<number>>(
    new Set()
  );

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setQuizScore(quizScore + 1);
      setAnimateScore(true);
      setTimeout(() => setAnimateScore(false), 600);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCurrentView("quiz-complete");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <MathJaxContext config={mathjaxConfig}>
      <div className="font-sans">
        {currentView === "home" && (
          <HomeView
            sections={sections}
            completedSections={completedSections}
            setCurrentView={setCurrentView}
            setCurrentSection={setCurrentSection}
          />
        )}

        {currentView === "study" && (
          <StudyView
            section={sections[currentSection]}
            setCurrentView={setCurrentView}
            setCompletedSections={setCompletedSections}
            currentSection={currentSection}
            completedSections={completedSections}
          />
        )}

        {currentView === "quiz" && (
          <QuizView
            quizQuestions={quizQuestions}
            currentQuestion={currentQuestion}
            quizScore={quizScore}
            animateScore={animateScore}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            setCurrentView={setCurrentView}
            handleQuizAnswer={handleQuizAnswer}
            nextQuestion={nextQuestion}
          />
        )}

        {currentView === "quiz-complete" && (
          <QuizCompleteView
            quizScore={quizScore}
            quizQuestions={quizQuestions}
            setCurrentView={setCurrentView}
            resetQuiz={resetQuiz}
          />
        )}
      </div>
    </MathJaxContext>
  );
};

export default ZimsecOMathTopic1;
