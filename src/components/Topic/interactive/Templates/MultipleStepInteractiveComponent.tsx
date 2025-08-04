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
  // theme is now unused, but kept for interface compatibility
  theme?: {
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

// Neubrutalism color palette
const NEUBRUTALISM_COLORS = {
  primaryDark: '#264653',    // Dark teal - for backgrounds, text
  secondary: '#2a9d8f',      // Teal - for correct answers, accents
  neutral: '#e9c46a',        // Sand yellow - for highlights, explanations
  warning: '#f4a261',        // Orange - for warnings, incorrect answers
  danger: '#e76f51',         // Salmon - for danger, resets, main background
  white: '#ffffff',
  lightGray: '#f0f0f0',
  borderGray: '#d0d0d0',
  shadowGray: 'rgba(0, 0, 0, 0.2)',
};

// Neubrutalism styles helper
const neubrutalismBase = {
  backgroundColor: NEUBRUTALISM_COLORS.white,
  border: `3px solid ${NEUBRUTALISM_COLORS.borderGray}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`,
  padding: '1rem',
};

const MultipleStepInteractiveComponent: React.FC<MultiStepInteractiveComponentProps> = ({
  title,
  icon,
  // theme, // Unused due to new styling
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

 

  const getGridColsClass = (options: string[]): string => {
    const longOptionThreshold = 30;
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
    <div style={{
      ...neubrutalismBase,
      maxWidth: '600px',
      width: '100%',
      margin: '0 auto',
      padding: '1.5rem',
      backgroundColor: NEUBRUTALISM_COLORS.danger, // Salmon background
      border: `4px solid ${NEUBRUTALISM_COLORS.primaryDark}`,
      borderRadius: '20px',
      boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`,
    }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5 flex-wrap">
        <h3 className="text-2xl font-extrabold flex items-center" style={{ color: NEUBRUTALISM_COLORS.white }}>
          <span className="mr-2 text-3xl">{icon}</span> {title}
        </h3>

        <div className="flex gap-2">
          <div style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.neutral,
            borderColor: NEUBRUTALISM_COLORS.primaryDark,
            fontWeight: 'bold',
            fontSize: '0.875rem',
            padding: '0.5rem 1rem',
          }}>
            {score}/{attempts || '0'}
          </div>
          <button
            onClick={resetQuiz}
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.primaryDark,
              borderColor: NEUBRUTALISM_COLORS.white,
              padding: '0.5rem',
            }}
            aria-label="Reset quiz"
          >
            <RotateCw className="w-5 h-5" style={{ color: NEUBRUTALISM_COLORS.white }} />
          </button>
        </div>

      </div>

      {/* Progress Bar / Title */}
      {!finalSummary ? (
        <div style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.secondary,
          textAlign: 'center',
          marginBottom: '1.25rem',
        }}>
          <div className="text-center">
            <span className="text-sm opacity-90" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
              Question {currentQuestionIndex + 1} of {questions.length} |
              Step {currentStepIndexWithinQuestion + 1} of {currentQuestion.steps.length}
            </span>
             <p className="font-bold mt-1" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>  {currentQuestion.title}</p>
          </div>
        </div>
      ) : (
        <div style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.secondary,
          textAlign: 'center',
          marginBottom: '1.25rem',
        }}>
          <div className="text-center">
            <span className="text-lg font-bold opacity-90" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
              Final Summary
            </span>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!finalSummary ? (
        <div style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.neutral,
          marginBottom: '1.25rem',
        }}>
          {currentStep.CustomContentComponent && (
            <div className="mb-4">
              <currentStep.CustomContentComponent step={currentStep} sharedValues={sharedValues} />
            </div>
          )}
          <h4 className="font-extrabold text-lg mb-4" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
             {renderTextWithMath(currentStep.question)}
          </h4>
          
          {/* Options Grid */}
          <div className={`grid gap-3 mb-5 ${gridColsClass}`}>
            {currentStep.options.map((option, index) => {
              const isSelected = currentStepResult.lastSelectedOptionIndex === index;
              const isCorrectStatus = currentStepResult.isCorrect;
              const isCorrectOption = index === currentStep.correct;
              
              let buttonStyle = {
                ...neubrutalismBase,
                padding: '1rem',
                fontWeight: 'bold',
                transition: 'all 0.2s',
                backgroundColor: NEUBRUTALISM_COLORS.lightGray,
                borderColor: NEUBRUTALISM_COLORS.borderGray,
              };

              if (isSelected) {
                if (isCorrectStatus === true) {
                  buttonStyle = {
                    ...buttonStyle,
                    backgroundColor: NEUBRUTALISM_COLORS.secondary,
                    borderColor: NEUBRUTALISM_COLORS.primaryDark,
                  };
                } else if (isCorrectStatus === false) {
                  buttonStyle = {
                    ...buttonStyle,
                    backgroundColor: NEUBRUTALISM_COLORS.warning,
                    borderColor: NEUBRUTALISM_COLORS.primaryDark,
                  };
                } else {
                  buttonStyle = {
                    ...buttonStyle,
                    backgroundColor: NEUBRUTALISM_COLORS.neutral,
                    borderColor: NEUBRUTALISM_COLORS.primaryDark,
                  };
                }
              } else if (isCorrectStatus === true && isCorrectOption) {
                buttonStyle = {
                  ...buttonStyle,
                  backgroundColor: `${NEUBRUTALISM_COLORS.secondary}80`, // 50% opacity
                  borderColor: NEUBRUTALISM_COLORS.secondary,
                };
              }

              // Apply transform on hover only if not already checked

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  style={buttonStyle}
                  onMouseEnter={(e) => {
                    if (!(isCorrectStatus === true || isCorrectStatus === false)) {
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                  }}
                  className="transition-transform duration-200"
                >
                  <span style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                    {currentStep.optionType == "math"? <BlockMath math={option}/> :renderTextWithMath(option)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Check Answer Button */}
          {currentStepResult.lastSelectedOptionIndex !== null && currentStepResult.isCorrect === null && (
            <button
              onClick={checkAnswer}
              style={{
                ...neubrutalismBase,
                backgroundColor: NEUBRUTALISM_COLORS.secondary,
                borderColor: NEUBRUTALISM_COLORS.primaryDark,
                fontWeight: 'bold',
                width: '100%',
                padding: '0.75rem',
                marginTop: '0.75rem',
                color: NEUBRUTALISM_COLORS.white,
              }}
            >
              Check Answer
            </button>
          )}

          {/* Feedback Section */}
          {currentStepResult.isCorrect !== null && (
            <div style={{
              ...neubrutalismBase,
              borderColor: currentStepResult.isCorrect ? NEUBRUTALISM_COLORS.secondary : NEUBRUTALISM_COLORS.warning,
              backgroundColor: currentStepResult.isCorrect ? `${NEUBRUTALISM_COLORS.secondary}20` : `${NEUBRUTALISM_COLORS.warning}20`,
              marginTop: '1.25rem',
            }}>
              <div className="flex items-center mb-3 flex-col">
                {currentStepResult.isCorrect ? (
                  <CheckCircle style={{ color: NEUBRUTALISM_COLORS.secondary, marginRight: '0.5rem' }} size={24} />
                ) : (
                  <XCircle style={{ color: NEUBRUTALISM_COLORS.warning, marginRight: '0.5rem' }} size={24} />
                )}
                <p className={`font-extrabold text-lg ${currentStepResult.isCorrect ? 'text-green-800' : 'text-amber-800'}`}>
                  {currentStepResult.isCorrect ? 'Correct! ✓' : 'Incorrect.'}
                </p>
                {!currentStepResult.isCorrect && (
                  <div className="ml-2 font-bold" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                    Correct answer: {renderTextWithMath(currentStep.options[currentStep.correct])}
                  </div>
                )}
              </div>
              
              {/* Show Explanation Button */}
              <button
                onClick={() => {
                  const stepId = currentStep.id;
                  setShowExplanation(prev => ({ ...prev, [stepId]: !prev[stepId] }));
                }}
                style={{ color: NEUBRUTALISM_COLORS.primaryDark, fontWeight: 'medium', fontSize: '0.875rem', marginBottom: '0.75rem' }}
                className="flex items-center"
              >
                <HelpCircle className="mr-1" size={16} />
                {showExplanation[currentStep.id] ? 'Hide explanation' : 'Show explanation'}
              </button>
              
              {/* Explanation Content */}
              {showExplanation[currentStep.id] && (
                <div style={{
                  ...neubrutalismBase,
                  backgroundColor: NEUBRUTALISM_COLORS.neutral,
                  borderColor: NEUBRUTALISM_COLORS.primaryDark,
                }}>
                  <div className="w-full">
                    <div className="w-full" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                       {renderTextWithMath(currentStep.explanation)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* Final Summary */
        <div style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.neutral,
          marginBottom: '1.25rem',
        }}>
          <h4 className="font-extrabold text-lg mb-4 text-center" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>Quiz Completed!</h4>
          <p className="mb-4 text-center" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>Your final score: <span className="font-extrabold">{score}</span> / <span className="font-extrabold">{attempts}</span> attempts</p>
          
          {/* Shared Values Summary */}
          {renderSharedValuesSummary && (
            <div style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.neutral,
              borderColor: NEUBRUTALISM_COLORS.primaryDark,
              marginBottom: '1.25rem',
            }}>
              <h5 className="font-extrabold mb-2" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>Values Calculated:</h5>
              {renderSharedValuesSummary(sharedValues)}
            </div>
          )}
          
          {/* Question & Step Review */}
          <div style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.neutral,
            borderColor: NEUBRUTALISM_COLORS.primaryDark,
            maxHeight: '15rem',
            overflowY: 'auto',
            marginBottom: '1.25rem',
          }}>
            <h5 className="font-extrabold mb-2" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>Question & Step Review:</h5>
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
                  <li key={question.id} style={{
                    ...neubrutalismBase,
                    backgroundColor: NEUBRUTALISM_COLORS.lightGray,
                    borderColor: NEUBRUTALISM_COLORS.borderGray,
                    paddingLeft: '1rem',
                  }}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-extrabold" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>Question {qIndex + 1}: {question.title}</span>
                      <span className="text-sm" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                        Score: <span className="font-extrabold">{correctQSteps}</span> / <span className="font-extrabold">{totalQSteps}</span>
                        {attemptedQSteps < totalQSteps && (
                          <span className="text-gray-600"> ({totalQSteps - attemptedQSteps} skipped)</span>
                        )}
                      </span>
                    </div>
                    <ul className="pl-4 space-y-2 border-l-2 border-gray-400">
                      {question.steps.map((step, sIndex) => {
                        const sResult = qResult.stepResults[sIndex];
                        const wasAttempted = sResult.lastSelectedOptionIndex !== null;
                        const isLastCheckCorrect = sResult.isCorrect === true;
                        
                        return (
                          <li key={step.id} style={{
                            ...neubrutalismBase,
                            backgroundColor: NEUBRUTALISM_COLORS.lightGray,
                            borderColor: NEUBRUTALISM_COLORS.borderGray,
                            padding: '0.5rem',
                            fontSize: '0.875rem',
                          }}>
                            <div className="flex justify-between items-start">
                              <span className="font-medium" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>Step {sIndex + 1}:</span>
                              <span className={isLastCheckCorrect ? 'text-green-700' : (wasAttempted ? 'text-amber-700' : 'text-gray-600')}>
                                {isLastCheckCorrect ? '✓ Correct' : (wasAttempted ? '✗ Incorrect' : 'Skipped')}
                              </span>
                            </div>
                            <p className="mt-1 truncate" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}><strong>Q:</strong> {renderTextWithMath(step.question)}</p>
                            {wasAttempted && (
                              <p className="truncate" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}><strong>Your Answer:</strong> {renderTextWithMath(step.options[sResult.lastSelectedOptionIndex!])}</p>
                            )}
                            {(!isLastCheckCorrect || !wasAttempted) && (
                              <p className="truncate" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}><strong>Correct Answer:</strong> {renderTextWithMath(step.options[step.correct])}</p>
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
          
          {/* Restart Quiz Button */}
          <button
            onClick={resetQuiz}
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.secondary,
              borderColor: NEUBRUTALISM_COLORS.primaryDark,
              fontWeight: 'bold',
              width: '100%',
              padding: '0.75rem',
              color: NEUBRUTALISM_COLORS.white,
            }}
          >
            Restart Quiz
          </button>
        </div>
      )}

      {/* Navigation Buttons */}
      {!finalSummary && (
        <div className="flex gap-3 mb-5">
          <button
            onClick={goToPreviousStep}
            disabled={currentQuestionIndex === 0 && currentStepIndexWithinQuestion === 0}
            style={{
              ...neubrutalismBase,
              flex: 1,
              padding: '0.75rem',
              fontWeight: 'bold',
              backgroundColor: (currentQuestionIndex === 0 && currentStepIndexWithinQuestion === 0) ? NEUBRUTALISM_COLORS.borderGray : NEUBRUTALISM_COLORS.lightGray,
              borderColor: NEUBRUTALISM_COLORS.primaryDark,
              color: NEUBRUTALISM_COLORS.primaryDark,
              cursor: (currentQuestionIndex === 0 && currentStepIndexWithinQuestion === 0) ? 'not-allowed' : 'pointer',
            }}
          >
            <ChevronLeft className="mr-1 inline" size={20} /> Previous
          </button>
          
          <button
            onClick={goToNextStep}
            disabled={
              !(currentStepResult.isCorrect === true) &&
              !(currentQuestionIndex === questions.length - 1 && currentStepIndexWithinQuestion === currentQuestion.steps.length - 1)
            }
            style={{
              ...neubrutalismBase,
              flex: 1,
              padding: '0.75rem',
              fontWeight: 'bold',
              backgroundColor:
                (currentStepResult.isCorrect === true) ||
                (currentQuestionIndex === questions.length - 1 && currentStepIndexWithinQuestion === currentQuestion.steps.length - 1)
                  ? NEUBRUTALISM_COLORS.secondary
                  : NEUBRUTALISM_COLORS.borderGray,
              borderColor: NEUBRUTALISM_COLORS.primaryDark,
              color: NEUBRUTALISM_COLORS.white,
              cursor:
                (currentStepResult.isCorrect === true) ||
                (currentQuestionIndex === questions.length - 1 && currentStepIndexWithinQuestion === currentQuestion.steps.length - 1)
                  ? 'pointer'
                  : 'not-allowed',
            }}
          >
            {currentQuestionIndex === questions.length - 1 && currentStepIndexWithinQuestion === currentQuestion.steps.length - 1
              ? 'Finish'
              : 'Next'}
            <ChevronRight className="ml-1 inline" size={20} />
          </button>
        </div>
      )}

      {/* Rules Section */}
      <div style={{
        ...neubrutalismBase,
        backgroundColor: NEUBRUTALISM_COLORS.neutral,
        borderColor: NEUBRUTALISM_COLORS.primaryDark,
        marginTop: '1rem',
        fontSize: '0.875rem',
      }}>
        <p className="font-extrabold mb-1" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>{rulesTitle}</p>
        <ul className="list-disc list-inside space-y-1" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
          {rules.map((rule, index) => (
            <li key={index}>{renderTextWithMath(rule)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultipleStepInteractiveComponent;