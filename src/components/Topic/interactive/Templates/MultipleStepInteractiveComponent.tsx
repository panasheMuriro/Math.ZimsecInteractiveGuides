/* eslint-disable @typescript-eslint/no-explicit-any */
// src/Templates/MultiStepInteractiveComponent.tsx
import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { RotateCw, CheckCircle, XCircle, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { renderTextWithMath } from '../../../../utils/renderTextWithMath';

export interface MultiStepQuestion {
  id: string;
  question: string;
  questionType: 'text';
  options: string[];
  optionType: 'text';
  correct: number;
  explanation: string;
  explanationType: 'text';
  onCorrect?: (selectedOptionIndex: number, setSharedValue: (key: string, value: any) => void) => void;
  CustomContentComponent?: React.FC<{
    step: MultiStepQuestion;
    sharedValues: { [key: string]: any };
  }>;
}

interface StepResult {
  questionId: string;
  lastSelectedOptionIndex: number | null;
  isCorrect: boolean | null;
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
  steps: MultiStepQuestion[];
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
  steps,
  initialSharedValues = {},
  renderSharedValuesSummary,
  onReset,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [stepResults, setStepResults] = useState<StepResult[]>(
    steps.map(step => ({ questionId: step.id, lastSelectedOptionIndex: null, isCorrect: null }))
  );
  const [sharedValues, setSharedValues] = useState<{ [key: string]: any }>(initialSharedValues);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [showExplanation, setShowExplanation] = useState<{ [key: number]: boolean }>({});
  const [finalSummary, setFinalSummary] = useState<boolean>(false);

  const currentStep = steps[currentStepIndex];
  const currentResult = stepResults[currentStepIndex];

  const updateSharedValue = (key: string, value: any) => {
    setSharedValues(prev => ({ ...prev, [key]: value }));
  };

  const handleAnswerSelect = (optionIndex: number) => {
    setStepResults(prevResults => {
      const newResults = [...prevResults];
      newResults[currentStepIndex] = {
        ...newResults[currentStepIndex],
        lastSelectedOptionIndex: optionIndex,
      };
      return newResults;
    });

    if (showExplanation[currentStepIndex]) {
        setShowExplanation(prev => ({ ...prev, [currentStepIndex]: false }));
    }
  };

  const checkAnswer = () => {
    if (currentResult.lastSelectedOptionIndex === null) return;
    const isCorrect = currentResult.lastSelectedOptionIndex === currentStep.correct;

    setStepResults(prevResults => {
      const newResults = [...prevResults];
      newResults[currentStepIndex] = {
        ...newResults[currentStepIndex],
        isCorrect,
      };
      return newResults;
    });

    setAttempts(prev => prev + 1);
    if (isCorrect) {
      setScore(prev => prev + 1);
      if (currentStep.onCorrect) {
        currentStep.onCorrect(currentResult.lastSelectedOptionIndex, updateSharedValue);
      }
    }
  };

  const goToNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setFinalSummary(true);
    }
    setShowExplanation(prev => ({ ...prev, [currentStepIndex]: false }));
  };

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
    setShowExplanation(prev => ({ ...prev, [currentStepIndex]: false }));
  };

  const resetQuiz = () => {
    setCurrentStepIndex(0);
    setStepResults(steps.map(step => ({ questionId: step.id, lastSelectedOptionIndex: null, isCorrect: null })));
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
    if (currentStepIndex < steps.length - 1) {
        setFinalSummary(false);
    }
  }, [currentStepIndex, steps.length]);

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
              Step {currentStepIndex + 1} of {steps.length}
            </span>
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
              const isSelected = currentResult.lastSelectedOptionIndex === index;
              const isCorrectStatus = currentResult.isCorrect;
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
                  } ${isCorrectStatus === true ? 'cursor-default' : 'hover:scale-[1.03]'}`}
                >
                  {renderTextWithMath(option)}
                </button>
              );
            })}
          </div>

          {currentResult.lastSelectedOptionIndex !== null && currentResult.isCorrect !== true && (
            <button
              onClick={checkAnswer}
              className={`w-full ${theme.button} ${theme.buttonHover} rounded-xl p-3 font-bold transition-all duration-200 shadow-md mt-3`}
            >
              Check Answer
            </button>
          )}

          {currentResult.isCorrect !== null && (
            <div className={`rounded-2xl p-5 mt-5 backdrop-blur-sm border ${getFeedbackColor(currentResult.isCorrect)}`}>
              <div className="flex items-center mb-3">
                {currentResult.isCorrect ? (
                  <CheckCircle className="text-green-300 mr-2" size={24} />
                ) : (
                  <XCircle className="text-amber-300 mr-2" size={24} />
                )}
                <p className={`font-bold text-lg ${currentResult.isCorrect ? 'text-green-100' : 'text-amber-100'}`}>
                  {currentResult.isCorrect ? 'Correct! ✓' : 'Incorrect.'}
                </p>
                {!currentResult.isCorrect && (
                  <div className="ml-2 font-bold text-white">
                    Correct answer: {renderTextWithMath(currentStep.options[currentStep.correct])}
                  </div>
                )}
              </div>
              <button
                onClick={() => setShowExplanation(prev => ({ ...prev, [currentStepIndex]: !prev[currentStepIndex] }))}
                className="flex items-center text-white/90 font-medium text-sm mb-3"
              >
                <HelpCircle className="mr-1" size={16} />
                {showExplanation[currentStepIndex] ? 'Hide explanation' : 'Show explanation'}
              </button>
              {showExplanation[currentStepIndex] && (
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="overflow-x-auto max-w-full">
                    <div className="min-w-max">
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
          <p className="mb-4 text-center">Your final score: <span className="font-bold">{score}</span> / <span className="font-bold">{steps.length}</span></p>

          {renderSharedValuesSummary && (
            <div className="mb-5 p-4 bg-white/10 rounded-xl">
              <h5 className="font-bold mb-2">Values Calculated:</h5>
              {renderSharedValuesSummary(sharedValues)}
            </div>
          )}

          <div className="mb-5 p-4 bg-white/10 rounded-xl max-h-60 overflow-y-auto">
            <h5 className="font-bold mb-2">Step Review:</h5>
            <ul className="space-y-3">
              {steps.map((step, index) => {
                const result = stepResults[index];
                const wasAttempted = result.lastSelectedOptionIndex !== null;
                const isLastCheckCorrect = result.isCorrect === true;
                return (
                  <li key={step.id} className="p-2 rounded-lg bg-white/5">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">Step {index + 1}:</span>
                      <span className={isLastCheckCorrect ? 'text-green-300' : (wasAttempted ? 'text-amber-300' : 'text-gray-400')}>
                        {isLastCheckCorrect ? '✓ Correct' : (wasAttempted ? '✗ Incorrect' : 'Skipped')}
                      </span>
                    </div>
                    <p className="text-sm mt-1"><strong>Q:</strong> {renderTextWithMath(step.question)}</p>
                    {wasAttempted && (
                      <p className="text-sm"><strong>Your Last Answer:</strong> {renderTextWithMath(step.options[result.lastSelectedOptionIndex!])}</p>
                    )}
                    {(!isLastCheckCorrect || !wasAttempted) && (
                      <p className="text-sm"><strong>Correct Answer:</strong> {renderTextWithMath(step.options[step.correct])}</p>
                    )}
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
            disabled={currentStepIndex === 0}
            className={`flex items-center justify-center flex-1 py-3 rounded-xl font-bold transition-all ${currentStepIndex === 0 ? 'bg-gray-500/50 cursor-not-allowed' : 'bg-white/20 hover:bg-white/30'}`}
          >
            <ChevronLeft className="mr-1" size={20} /> Previous
          </button>
          <button
            onClick={goToNextStep}
            disabled={currentResult.isCorrect !== true}
            className={`flex items-center justify-center flex-1 py-3 rounded-xl font-bold transition-all ${currentResult.isCorrect === true ? `${theme.button} ${theme.buttonHover}` : 'bg-gray-500/50 cursor-not-allowed'}`}
          >
            {currentStepIndex === steps.length - 1 ? 'Finish' : 'Next'} <ChevronRight className="ml-1" size={20} />
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