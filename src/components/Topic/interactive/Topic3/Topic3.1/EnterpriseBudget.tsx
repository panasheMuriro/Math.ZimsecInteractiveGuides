// ProfitLossQuestionComponent.tsx
import React from 'react';
import { InlineMath } from 'react-katex';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';
// import { QuizQuestion } from './path/to/your/MultipleChoiceInteractiveComponent'; // Adjust import path

// Define the specific props this custom component expects
interface ProfitLossQuestionComponentProps {
  question: QuizQuestion; // Includes revenue/expense data in its structure (see sample question below)
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
  feedback: { message: string; isCorrect: boolean; correctAnswerText?: string } | null;
}

const ProfitLossQuestionComponent: React.FC<ProfitLossQuestionComponentProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  feedback,
}) => {
  // --- Expect specific data in the question object ---
  // We'll use the 'question' string field to pass structured data as JSON.
  // In a real app, you might define a more specific type for this kind of question.
  let parsedData: { revenue: { title: string; amount: number }[]; expenses: { title: string; amount: number }[] } | null = null;
  try {
    // Assuming the 'question' field for this type contains JSON data
    parsedData = JSON.parse(question.question);
  } catch (e) {
    console.error("Failed to parse question data for ProfitLoss component:", e);
    return <div>Error loading question data.</div>;
  }

  if (!parsedData) {
    return <div>Invalid question data format.</div>;
  }

  const totalRevenue = parsedData.revenue.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = parsedData.expenses.reduce((sum, item) => sum + item.amount, 0);
  // --- End data parsing ---

  return (
    <div className="space-y-4">
      {/* Revenue Section */}
      <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-700/50">
        <h5 className="font-bold text-blue-200 mb-2">Revenue</h5>
        <ul className="space-y-1">
          {parsedData.revenue.map((item, index) => (
            <li key={index} className="flex justify-between text-sm">
              <span>{item.title}:</span>
              <span className="font-mono">
                $<InlineMath math={item.amount.toString()} />
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold border-t border-blue-700/50 mt-1 pt-1">
          <span>Total Revenue:</span>
          <span className="font-mono">
            $<InlineMath math={totalRevenue.toString()} />
          </span>
        </div>
      </div>

      {/* Expenses Section */}
      <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-700/50">
        <h5 className="font-bold text-amber-200 mb-2">Expenses</h5>
        <ul className="space-y-1">
          {parsedData.expenses.map((item, index) => (
            <li key={index} className="flex justify-between text-sm">
              <span>{item.title}:</span>
              <span className="font-mono">
                $<InlineMath math={item.amount.toString()} />
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold border-t border-amber-700/50 mt-1 pt-1">
          <span>Total Expenses:</span>
          <span className="font-mono">
            $<InlineMath math={totalExpenses.toString()} />
          </span>
        </div>
      </div>

      {/* Profit/Loss Calculation Prompt */}
      <div className="text-center py-2 font-semibold">
        <p>What is the Profit or Loss?</p>
        <p className="text-sm opacity-90">(Profit = Revenue - Expenses)</p>
      </div>

      {/* Options (Rendered as Buttons) */}
      <div className="grid grid-cols-1 gap-2"> {/* Force single column for clarity */}
        {question.options.map((option, index) => {
          // Determine button style based on state
          let buttonClass = "py-2 px-3 rounded-lg font-medium transition-all w-full text-left ";
          if (selectedAnswer === index) {
            if (feedback) {
              // After answer is checked
              buttonClass += index === question.correct
                ? 'bg-green-600 text-white' // Correctly selected
                : 'bg-red-600 text-white';  // Incorrectly selected
            } else {
              // Selected but not yet checked
              buttonClass += 'bg-white/40 text-white border border-white';
            }
          } else {
            if (feedback && index === question.correct) {
              // Show correct answer after feedback
              buttonClass += 'bg-green-600/30 text-white border border-green-500';
            } else {
              // Default state
              buttonClass += feedback
                ? 'bg-white/10 text-white cursor-default' // Disabled after feedback
                : 'bg-white/20 hover:bg-white/30 text-white'; // Interactive before feedback
            }
          }

          return (
            <button
              key={index}
              onClick={() => !feedback && onAnswerSelect(index)} // Only clickable before feedback
              disabled={!!feedback} // Disable after feedback
              className={buttonClass}
            >
              {/* Assuming options are plain text for this type of question */}
              {/* If you need KaTeX, use question.optionType check like in the main component */}
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

//  ProfitLossQuestionComponent;

const sampleProfitLossQuestion: QuizQuestion = {
  // The 'question' field holds the structured data for revenue/expenses as a JSON string
  question: JSON.stringify({
    revenue: [
      { title: "Product Sales", amount: 5000 },
      { title: "Service Fees", amount: 1200 }
    ],
    expenses: [
      { title: "Raw Materials", amount: 1500 },
      { title: "Labor", amount: 2000 },
      { title: "Utilities", amount: 300 },
      { title: "Rent", amount: 800 }
    ]
  }),
  options: [
    "Profit of $1600",
    "Loss of $1600",
    "Profit of $6200",
    "Loss of $4600"
  ],
  correct: 0, // Index of the correct option
  explanation: "\\text{Total Revenue} = \\$5000 + \\$1200 = \\$6200\\\\ \\text{Total Expenses} = \\$1500 + \\$2000 + \\$300 + \\$800 = \\$4600\\\\ \\text{Profit} = \\$6200 - \\$4600 = \\$1600",
  explanationType: 'math', // Use BlockMath for explanation
};



const EnterpriseBudget: React.FC = () => {
  // ... theme, rules, title, icon setup ...
  const enterpriseBudgetQuestions = [sampleProfitLossQuestion]; // Your array of questions

  return (
    <MultipleChoiceInteractiveComponent
      title="Corporate Bills and Enterprise Budgets"
      icon="💰" // Or your preferred icon
      theme={{
        from: "from-blue-600",
        to: "to-purple-700",
        button: "bg-indigo-600",
        buttonHover: "hover:bg-indigo-700",
      }}
      rules={[
        "Profit = Total Revenue - Total Expenses",
        "Loss occurs when Expenses > Revenue",
        "Always double-check calculations."
      ]}
      questions={enterpriseBudgetQuestions}
      CustomQuestionComponent={ProfitLossQuestionComponent} // <-- Pass the custom component here
    />
  );
};

export default EnterpriseBudget;