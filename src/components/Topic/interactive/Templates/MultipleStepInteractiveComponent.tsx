/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { RotateCw, CheckCircle, XCircle, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { renderTextWithMath } from '../../../../utils/renderTextWithMath';
import { BlockMath } from 'react-katex';

export interface MultiStep {
  id: string;
  question: string;
  questionType: 'text';
  options: string[];
  optionType: 'text' | 'math';
  correct: number;
  explanation: string;
  explanationType?: 'text';
  onCorrect?: (selectedOptionIndex: number, setSharedValue: (key: string, value: any) => void) => void;
  CustomContentComponent?: React.FC<{
    step: MultiStep;
    sharedValues: { [key: string]: any };
  }>;
}

export interface MultiStepQuestion {
  id: string;
  title: string;
  steps: MultiStep[];
}

interface StepResult {
  stepId: string;
  lastSelectedOptionIndex: number | null;
  previouslySelectedOptionIndex: number | null; // Track the option selected before the last check
  isCorrect: boolean | null;
}

interface QuestionResult {
  questionId: string;
  stepResults: StepResult[];
}

interface MultiStepInteractiveComponentProps {
  title: string;
  icon: string;
  theme: {
    from: string;
    to: string;
    button: string;
    buttonHover: string;
  };
  rules: string[];
  rulesTitle?: string;
  questions: MultiStepQuestion[];
  initialSharedValues?: { [key: string]: any };
  renderSharedValuesSummary?: (sharedValues: { [key: string]: any }) => React.ReactNode;
  onReset?: () => void;
}

const MultipleStepInteractiveComponent: React.FC<MultiStepInteractiveComponentProps> = ({
  title,
  icon,
  theme,
  rules,
  rulesTitle = 'Key Rules:',
  questions,
  initialSharedValues = {},
  renderSharedValuesSummary,
  onReset,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentStepIndexWithinQuestion, setCurrentStepIndexWithinQuestion] = useState<number>(0);
  const [questionResults, setQuestionResults] = useState<QuestionResult[]>(
    questions.map(q => ({
      questionId: q.id,
      stepResults: q.steps.map(step => ({
        stepId: step.id,
        lastSelectedOptionIndex: null,
        previouslySelectedOptionIndex: null, // Initialize
        isCorrect: null
      }))
    }))
  );
  const [sharedValues, setSharedValues] = useState<{ [key: string]: any }>(initialSharedValues);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [showExplanation, setShowExplanation] = useState<{ [key: string]: boolean }>({});
  const [finalSummary, setFinalSummary] = useState<boolean>(false);

  const currentQuestion = questions[currentQuestionIndex];
  const currentStep = currentQuestion.steps[currentStepIndexWithinQuestion];
  const currentStepResult = questionResults[currentQuestionIndex].stepResults[currentStepIndexWithinQuestion];

  const updateSharedValue = (key: string, value: any) => {
    setSharedValues(prev => ({ ...prev, [key]: value }));
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const stepId = currentStep.id;
    setQuestionResults(prevResults => {
      const newResults = [...prevResults];
      const newStepResults = [...newResults[currentQuestionIndex].stepResults];
      const currentResult = newStepResults[currentStepIndexWithinQuestion];

      // Determine if the selected option is different from the one used for the last check
      const isDifferentOption = optionIndex !== currentResult.previouslySelectedOptionIndex;

      newStepResults[currentStepIndexWithinQuestion] = {
        ...currentResult,
        lastSelectedOptionIndex: optionIndex,
        // Reset correctness check only if a different option is selected
        isCorrect: isDifferentOption ? null : currentResult.isCorrect
      };
      newResults[currentQuestionIndex].stepResults = newStepResults;
      return newResults;
    });

    if (showExplanation[stepId]) {
        setShowExplanation(prev => ({ ...prev, [stepId]: false }));
    }
  };

  const checkAnswer = () => {
    if (currentStepResult.lastSelectedOptionIndex === null) return;
    const isCorrect = currentStepResult.lastSelectedOptionIndex === currentStep.correct;
    setQuestionResults(prevResults => {
      const newResults = [...prevResults];
      const newStepResults = [...newResults[currentQuestionIndex].stepResults];
      newStepResults[currentStepIndexWithinQuestion] = {
        ...newStepResults[currentStepIndexWithinQuestion],
        // Store the option that was checked
        previouslySelectedOptionIndex: newStepResults[currentStepIndexWithinQuestion].lastSelectedOptionIndex,
        isCorrect,
      };
      newResults[currentQuestionIndex].stepResults = newStepResults;
      return newResults;
    });
    setAttempts(prev => prev + 1);
    if (isCorrect) {
      setScore(prev => prev + 1);
      if (currentStep.onCorrect) {
        currentStep.onCorrect(currentStepResult.lastSelectedOptionIndex, updateSharedValue);
      }
    }
  };

  const goToNextStep = () => {
    if (currentStepIndexWithinQuestion < currentQuestion.steps.length - 1) {
      setCurrentStepIndexWithinQuestion(prev => prev + 1);
    } else {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setCurrentStepIndexWithinQuestion(0);
      } else {
        setFinalSummary(true);
      }
    }
    const stepId = currentStep.id;
    setShowExplanation(prev => ({ ...prev, [stepId]: false }));
  };

  const goToPreviousStep = () => {
    if (currentStepIndexWithinQuestion > 0) {
      setCurrentStepIndexWithinQuestion(prev => prev - 1);
    } else {
      if (currentQuestionIndex > 0) {
        const prevQuestionIndex = currentQuestionIndex - 1;
        const prevQuestionStepCount = questions[prevQuestionIndex].steps.length;
        setCurrentQuestionIndex(prevQuestionIndex);
        setCurrentStepIndexWithinQuestion(prevQuestionStepCount - 1);
      }
    }
    const stepId = currentStep.id;
    setShowExplanation(prev => ({ ...prev, [stepId]: false }));
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setCurrentStepIndexWithinQuestion(0);
    setQuestionResults(
      questions.map(q => ({
        questionId: q.id,
        stepResults: q.steps.map(step => ({
          stepId: step.id,
          lastSelectedOptionIndex: null,
          previouslySelectedOptionIndex: null,
          isCorrect: null
        }))
      }))
    );
    setSharedValues(initialSharedValues);
    setScore(0);
    setAttempts(0);
    setShowExplanation({});
    setFinalSummary(false);
    if (onReset) onReset();
  };

  const getFeedbackColor = (isCorrect: boolean | null) => {
    if (isCorrect === null) return '';
    return isCorrect
      ? 'bg-green-500/20 border-green-400'
      : 'bg-amber-500/20 border-amber-400';
  };

  const getGridColsClass = (options: string[]): string => {
    const longOptionThreshold = 40;
    const hasLongOption = options.some(option => option.length > longOptionThreshold);
    const hasComplexKaTeX = options.some(option =>
      option.includes('\\frac') ||
      option.includes('\\sqrt') ||
      option.includes('\\int') ||
      option.includes('\\sum') ||
      (option.match(/\$/g) || []).length > 2
    );
    if (hasLongOption || hasComplexKaTeX) {
      return 'grid-cols-1';
    }
    return 'grid-cols-2';
  };

  const gridColsClass = getGridColsClass(currentStep.options);

  useEffect(() => {
    if (!(currentQuestionIndex === questions.length - 1 && currentStepIndexWithinQuestion === currentQuestion.steps.length - 1)) {
        setFinalSummary(false);
    }
  }, [currentQuestionIndex, currentStepIndexWithinQuestion, questions.length, currentQuestion.steps.length]);

  return (
    <div className={`bg-gradient-to-br ${theme.from} ${theme.to} p-6 rounded-3xl text-white shadow-xl max-w-md w-full`}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold flex items-center">
          <span className="mr-2 text-3xl">{icon}</span> {title}
        </h3>
        <div className="flex gap-2">
          <div className="bg-white/20 text-sm font-bold px-3 py-1 rounded-full">
            {score}/{attempts || '0'}
          </div>
          <button
            onClick={resetQuiz}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
            aria-label="Reset quiz"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {!finalSummary ? (
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-5 shadow-sm border border-white/10">
          <div className="text-center">
            <span className="text-sm opacity-90">
              Question {currentQuestionIndex + 1} of {questions.length} |
              Step {currentStepIndexWithinQuestion + 1} of {currentQuestion.steps.length}
            </span>
             <p className="font-bold mt-1">  {currentQuestion.title}</p>
          </div>
        </div>
      ) : (
         <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-5 shadow-sm border border-white/10">
          <div className="text-center">
            <span className="text-lg font-bold opacity-90">
              Final Summary
            </span>
          </div>
        </div>
      )}

      {!finalSummary ? (
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-5 shadow-sm border border-white/10">
          {currentStep.CustomContentComponent && (
            <div className="mb-4">
              <currentStep.CustomContentComponent step={currentStep} sharedValues={sharedValues} />
            </div>
          )}
          <h4 className="font-bold text-lg mb-4">
             {renderTextWithMath(currentStep.question)}
          </h4>
          <div className={`grid gap-3 mb-5 ${gridColsClass}`}>
            {currentStep.options.map((option, index) => {
              const isSelected = currentStepResult.lastSelectedOptionIndex === index;
              const isCorrectStatus = currentStepResult.isCorrect;
              const isCorrectOption = index === currentStep.correct;
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`py-3 px-2 rounded-xl font-bold transition-all duration-200 ${
                    isSelected
                      ? isCorrectStatus === true
                        ? 'bg-green-500 text-white'
                        : isCorrectStatus === false
                          ? 'bg-red-500 text-white'
                          : 'bg-white/40 text-white border-2 border-white'
                      : isCorrectStatus === true && isCorrectOption
                        ? 'bg-green-500/30 text-white border-2 border-green-400'
                        : 'bg-white/20 hover:bg-white/30 text-white border-2 border-transparent'
                  } ${isCorrectStatus === true || isCorrectStatus === false ? 'cursor-default' : 'hover:scale-[1.03]'}`}
                >
                  {currentStep.optionType == "math"? <BlockMath math={option}/> :renderTextWithMath(option)}
                </button>
              );
            })}
          </div>

          {/* Show Check Answer button when an option is selected and the answer hasn't been checked yet */}
          {currentStepResult.lastSelectedOptionIndex !== null && currentStepResult.isCorrect === null && (
            <button
              onClick={checkAnswer}
              className={`w-full ${theme.button} ${theme.buttonHover} rounded-xl p-3 font-bold transition-all duration-200 shadow-md mt-3`}
            >
              Check Answer
            </button>
          )}

          {currentStepResult.isCorrect !== null && (
            <div className={`rounded-2xl p-5 mt-5 backdrop-blur-sm border ${getFeedbackColor(currentStepResult.isCorrect)}`}>
              <div className="flex items-center mb-3">
                {currentStepResult.isCorrect ? (
                  <CheckCircle className="text-green-300 mr-2" size={24} />
                ) : (
                  <XCircle className="text-amber-300 mr-2" size={24} />
                )}
                <p className={`font-bold text-lg ${currentStepResult.isCorrect ? 'text-green-100' : 'text-amber-100'}`}>
                  {currentStepResult.isCorrect ? 'Correct! ✓' : 'Incorrect.'}
                </p>
                {!currentStepResult.isCorrect && (
                  <div className="ml-2 font-bold text-white">
                    Correct answer: {renderTextWithMath(currentStep.options[currentStep.correct])}
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  const stepId = currentStep.id;
                  setShowExplanation(prev => ({ ...prev, [stepId]: !prev[stepId] }));
                }}
                className="flex items-center text-white/90 font-medium text-sm mb-3"
              >
                <HelpCircle className="mr-1" size={16} />
                {showExplanation[currentStep.id] ? 'Hide explanation' : 'Show explanation'}
              </button>
              {showExplanation[currentStep.id] && (
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="w-full">
                    <div className="w-full">
                       {renderTextWithMath(currentStep.explanation)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-5 shadow-sm border border-white/10">
          <h4 className="font-bold text-lg mb-4 text-center">Quiz Completed!</h4>
          <p className="mb-4 text-center">Your final score: <span className="font-bold">{score}</span> / <span className="font-bold">{attempts}</span> attempts</p>
          {renderSharedValuesSummary && (
            <div className="mb-5 p-4 bg-white/10 rounded-xl">
              <h5 className="font-bold mb-2">Values Calculated:</h5>
              {renderSharedValuesSummary(sharedValues)}
            </div>
          )}
          <div className="mb-5 p-4 bg-white/10 rounded-xl max-h-60 overflow-y-auto">
            <h5 className="font-bold mb-2">Question & Step Review:</h5>
            <ul className="space-y-4">
              {questions.map((question, qIndex) => {
                const qResult = questionResults[qIndex];
                const totalQSteps = question.steps.length;
                let correctQSteps = 0;
                let attemptedQSteps = 0;
                qResult.stepResults.forEach(sr => {
                    if (sr.lastSelectedOptionIndex !== null) attemptedQSteps++;
                    if (sr.isCorrect === true) correctQSteps++;
                });
                return (
                  <li key={question.id} className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold">Question {qIndex + 1}: {question.title}</span>
                      <span className="text-sm">
                        Score: <span className="font-bold">{correctQSteps}</span> / <span className="font-bold">{totalQSteps}</span>
                        {attemptedQSteps < totalQSteps && (
                          <span className="text-gray-400"> ({totalQSteps - attemptedQSteps} skipped)</span>
                        )}
                      </span>
                    </div>
                    <ul className="pl-4 space-y-2 border-l-2 border-white/20">
                      {question.steps.map((step, sIndex) => {
                        const sResult = qResult.stepResults[sIndex];
                        const wasAttempted = sResult.lastSelectedOptionIndex !== null;
                        const isLastCheckCorrect = sResult.isCorrect === true;
                        return (
                          <li key={step.id} className="p-2 rounded bg-white/5 text-sm">
                            <div className="flex justify-between items-start">
                              <span className="font-medium">Step {sIndex + 1}:</span>
                              <span className={isLastCheckCorrect ? 'text-green-300' : (wasAttempted ? 'text-amber-300' : 'text-gray-400')}>
                                {isLastCheckCorrect ? '✓ Correct' : (wasAttempted ? '✗ Incorrect' : 'Skipped')}
                              </span>
                            </div>
                            <p className="mt-1 truncate"><strong>Q:</strong> {renderTextWithMath(step.question)}</p>
                            {wasAttempted && (
                              <p className="truncate"><strong>Your Answer:</strong> {renderTextWithMath(step.options[sResult.lastSelectedOptionIndex!])}</p>
                            )}
                            {(!isLastCheckCorrect || !wasAttempted) && (
                              <p className="truncate"><strong>Correct Answer:</strong> {renderTextWithMath(step.options[step.correct])}</p>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={resetQuiz}
            className={`w-full ${theme.button} ${theme.buttonHover} rounded-xl p-3 font-bold transition-all duration-200 shadow-md`}
          >
            Restart Quiz
          </button>
        </div>
      )}

      {!finalSummary && (
        <div className="flex gap-3 mb-5">
          <button
            onClick={goToPreviousStep}
            disabled={currentQuestionIndex === 0 && currentStepIndexWithinQuestion === 0}
            className={`flex items-center justify-center flex-1 py-3 rounded-xl font-bold transition-all ${
              (currentQuestionIndex === 0 && currentStepIndexWithinQuestion === 0)
                ? 'bg-gray-500/50 cursor-not-allowed'
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            <ChevronLeft className="mr-1" size={20} /> Previous
          </button>
          <button
            onClick={goToNextStep}
            disabled={
              !(currentStepResult.isCorrect === true) &&
              !(currentQuestionIndex === questions.length - 1 && currentStepIndexWithinQuestion === currentQuestion.steps.length - 1)
            }
            className={`flex items-center justify-center flex-1 py-3 rounded-xl font-bold transition-all ${
              (currentStepResult.isCorrect === true) ||
              (currentQuestionIndex === questions.length - 1 && currentStepIndexWithinQuestion === currentQuestion.steps.length - 1)
                ? `${theme.button} ${theme.buttonHover}`
                : 'bg-gray-500/50 cursor-not-allowed'
            }`}
          >
            {currentQuestionIndex === questions.length - 1 && currentStepIndexWithinQuestion === currentQuestion.steps.length - 1
              ? 'Finish'
              : 'Next'}
            <ChevronRight className="ml-1" size={20} />
          </button>
        </div>
      )}

      <div className="mt-4 bg-white/10 rounded-xl p-3 text-sm">
        <p className="font-bold mb-1">{rulesTitle}</p>
        <ul className="list-disc list-inside space-y-1">
          {rules.map((rule, index) => (
            <li key={index}>{renderTextWithMath(rule)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultipleStepInteractiveComponent;
