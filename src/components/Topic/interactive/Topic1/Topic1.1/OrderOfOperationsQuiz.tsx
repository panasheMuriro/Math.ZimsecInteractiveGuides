


export interface OperationStep {
  
  expression: string;
  
  options: string[];
  
  correctOptionIndex: number;
  
  operationDescription: string;
  
  resultExpression: string;
}


export interface OrderOfOperationsProblem {
  title: string;
  icon: string;
  theme: {
    from: string;
    to: string;
    button: string;
    buttonHover: string;
  };
  
  initialExpression: string;
  
  steps: OperationStep[];
  
  finalAnswer: string; 
  
  rules: string[];
  rulesTitle?: string;
}


 const sampleOrderOfOperationsData: OrderOfOperationsProblem = {
  title: "Order of Operations",
  icon: "⚙️", 
  theme: {
    from: "from-blue-500", 
    to: "to-cyan-600",
    button: "bg-cyan-500",
    buttonHover: "hover:bg-cyan-600",
  },
  initialExpression: "2 + 3 \\times 6 - 4", 
  steps: [
    {
      expression: "2 + 3 \\times 6 - 4",
      options: ["2 + 3", "3 \\times 6", "6 - 4"], 
      correctOptionIndex: 1, 
      operationDescription: "\\text{Calculate } 3 \\times 6", 
      resultExpression: "2 + 18 - 4", 
    },
    {
      expression: "2 + 18 - 4",
      options: ["2 + 18", "18 - 4"], 
      correctOptionIndex: 0, 
      operationDescription: "\\text{Calculate } 2 + 18", 
      resultExpression: "20 - 4", 
    },
    {
      expression: "20 - 4",
      options: ["20 - 4"], 
      correctOptionIndex: 0, 
      operationDescription: "\\text{Calculate } 20 - 4", 
      resultExpression: "16", 
    },
  ],
  finalAnswer: "16", 
  rulesTitle: "BODMAS/PEMDAS:",
  rules: [
    "{B}rackets (Parentheses)",
    "{O}rders (Exponents/Powers)",
    "{DM} - Division and Multiplication (Left to Right)",
    "{AS} - Addition and Subtraction (Left to Right)",
  ],
};



import React, { useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { RotateCw, CheckCircle, XCircle } from 'lucide-react';


interface OrderOfOperationsStepperProps {
  problem: OrderOfOperationsProblem;
}

const OrderOfOperationsStepper: React.FC<OrderOfOperationsStepperProps> = ({ problem }) => {
  const { title, icon, theme, initialExpression, steps, finalAnswer, rules, rulesTitle = "Key Rules:" } = problem;

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [isComplete, setIsComplete] = useState<boolean>(false); 

  
  const currentStep = steps[currentStepIndex];
  
  const displayExpression = currentStepIndex === 0 ? initialExpression : steps[currentStepIndex - 1].resultExpression;

  const handleSelectOption = (index: number) => {
    if (feedback) return; 
    setSelectedOptionIndex(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOptionIndex === null) return;

    const isCorrect = selectedOptionIndex === currentStep.correctOptionIndex;

    if (isCorrect) {
      setFeedback({
        message: 'Correct!',
        isCorrect: true,
      });

      
      if (currentStepIndex === steps.length - 1) {
        
        setTimeout(() => setIsComplete(true), 1000); 
      }
    } else {
      setFeedback({
        message: 'Incorrect. Try again.',
        isCorrect: false,
      });
      
      
    }
  };

  const handleNextStep = () => {
    
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
    
    setSelectedOptionIndex(null);
    setFeedback(null);
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setSelectedOptionIndex(null);
    setFeedback(null);
    setIsComplete(false);
  };

  const getFeedbackColor = () => {
    if (!feedback) return '';
    return feedback.isCorrect
      ? 'bg-green-500/20 border-green-400'
      : 'bg-amber-500/20 border-amber-400';
  };

  
  if (isComplete) {
    return (
      <div className={`bg-gradient-to-br ${theme.from} ${theme.to} p-6 rounded-3xl text-white shadow-xl max-w-md w-full`}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-bold flex items-center">
            <span className="mr-2 text-3xl">{icon}</span> {title}
          </h3>
          <button
            onClick={handleReset}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
            aria-label="Reset quiz"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-5 shadow-sm border border-white/10 text-center">
          <h4 className="font-bold text-lg mb-4">Final Answer:</h4>
          <div className="text-3xl font-bold my-4">
            <BlockMath math={finalAnswer} />
          </div>
          <div className="mt-4">
            <BlockMath math={displayExpression} /> {/* Show the final expression that evaluated to the answer */}
          </div>
          <button
            onClick={handleReset}
            className={`mt-4 w-full ${theme.button} ${theme.buttonHover} rounded-xl p-3 font-bold transition-all duration-200 shadow-md`}
          >
            Solve Another
          </button>
        </div>

        {/* Rules Section */}
        <div className="mt-4 bg-white/10 rounded-xl p-3 text-sm">
          <p className="font-bold mb-1">{rulesTitle}</p>
          <ul className="list-disc list-inside space-y-1">
            {rules.map((rule, index) => (
              <li key={index} className="overflow-x-auto max-w-full">
                <div className="min-w-max inline-block">
                  <BlockMath math={rule} /> {/* Use BlockMath for potentially bold text like \textbf{} */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br ${theme.from} ${theme.to} p-6 rounded-3xl text-white shadow-xl max-w-md w-full`}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold flex items-center">
          <span className="mr-2 text-3xl">{icon}</span> {title}
        </h3>
        <button
          onClick={handleReset}
          className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
          aria-label="Reset quiz"
        >
          <RotateCw className="w-5 h-5" />
        </button>
      </div>

      {/* Expression Display */}
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-5 shadow-sm border border-white/10 text-center">
        <h4 className="font-bold text-lg mb-4">Evaluate:</h4>
        <div className="text-2xl font-bold">
          {/* Use BlockMath for the main expression display */}
          <BlockMath math={displayExpression} />
        </div>
      </div>

      {/* Step Counter */}
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-5 shadow-sm border border-white/10">
        <div className="text-center">
          <span className="text-sm opacity-90">
            Step {currentStepIndex + 1} of {steps.length}
          </span>
        </div>
      </div>

      {/* Operation Selection */}
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-5 shadow-sm border border-white/10">
        <h4 className="font-bold text-lg mb-4">Which operation should be performed first?</h4>
        <div className="space-y-3 mb-5">
          {currentStep.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectOption(index)}
              disabled={!!feedback} 
              className={`w-full py-1 rounded-xl font-bold transition-all duration-200 text-left px-4 ${
                selectedOptionIndex === index
                  ? feedback
                    ? index === currentStep.correctOptionIndex
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-white/40 text-white border-2 border-white'
                  : feedback && index === currentStep.correctOptionIndex
                    ? 'bg-green-500/30 text-white border-2 border-green-400'
                    : 'bg-white/20 hover:bg-white/30 text-white border-2 border-transparent'
              } ${feedback ? 'cursor-default' : 'hover:scale-[1.01]'}`}
            >
              {/* Render operation options using InlineMath for KaTeX */}
              <BlockMath math={option} /> 
            </button>
          ))}
        </div>

        {selectedOptionIndex !== null && !feedback && (
          <button
            onClick={handleCheckAnswer}
            className={`w-full ${theme.button} ${theme.buttonHover} rounded-xl p-3 font-bold transition-all duration-200 shadow-md`}
          >
            Check Answer
          </button>
        )}
      </div>

      {/* Feedback */}
      {feedback && (
        <div className={`rounded-2xl p-5 mb-5 backdrop-blur-sm border ${getFeedbackColor()}`}>
          <div className="flex items-center mb-3">
            {feedback.isCorrect ? (
              <CheckCircle className="text-green-300 mr-2" size={24} />
            ) : (
              <XCircle className="text-amber-300 mr-2" size={24} />
            )}
            <p className={`font-bold text-lg ${feedback.isCorrect ? 'text-green-100' : 'text-amber-100'}`}>
              {feedback.message}
            </p>
          </div>

          {feedback.isCorrect && (
            <>
              <p className="mb-2">
                {/* Show the operation description */}
                <BlockMath math={currentStep.operationDescription} />
              </p>
              <p className="font-bold">
                {/* Show the resulting expression */}
                <BlockMath math={currentStep.resultExpression} />
              </p>
              <button
                onClick={handleNextStep}
                className="mt-4 w-full bg-white/20 hover:bg-white/30 rounded-xl p-3 font-bold transition-all duration-200 shadow-md"
              >
                {currentStepIndex === steps.length - 1 ? 'See Final Answer' : 'Next Step'} →
              </button>
            </>
          )}
        </div>
      )}

      {/* Rules Section */}
     <div className="mt-4 bg-white/10 rounded-xl p-3 text-sm">
        <p className="font-bold mb-1">{rulesTitle}</p>
        <ul className="list-disc list-inside space-y-1">
          {/* Rules are plain text strings. If KaTeX is needed *within* a rule,
              it would need special handling or manual wrapping in InlineMath in the data. */}
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};





const OrderOfOperationsQuiz: React.FC = () => {
  return <OrderOfOperationsStepper problem={sampleOrderOfOperationsData} />;
};

export default OrderOfOperationsQuiz;