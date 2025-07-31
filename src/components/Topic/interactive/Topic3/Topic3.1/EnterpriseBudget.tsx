// ProfitLossQuestionComponent.tsx
import React from 'react';
import { InlineMath } from 'react-katex';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

// --- Define Props Type for Custom Content Component ---
interface ProfitLossSummaryProps {
  question: QuizQuestion;
}


const ProfitLossSummary: React.FC<ProfitLossSummaryProps> = ({ question }) => {

  let parsedData: { revenue: { title: string; amount: number }[]; expenses: { title: string; amount: number }[] } | null = null;
  try {
    // Assuming the 'question' field for this type contains JSON data
    parsedData = JSON.parse(question.question);
  } catch (e) {
    console.error("Failed to parse question data for ProfitLoss component:", e);
    return <div className="text-white">Error loading question data.</div>;
  }

  if (!parsedData) {
    return <div className="text-white">Invalid question data format.</div>;
  }

  const totalRevenue = parsedData.revenue.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = parsedData.expenses.reduce((sum, item) => sum + item.amount, 0);
  // --- End data parsing ---

  return (
    <div className="space-y-4 mb-4">
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
      <div className="text-center py-2 font-semibold text-white">
        <p>What is the Profit or Loss?</p>
        <p className="text-sm opacity-90">(Profit = Revenue - Expenses)</p>
      </div>
    </div>
  );
};

// --- Sample Question Data ---
const sampleProfitLossQuestion: QuizQuestion = {
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
  questionType: 'text', // Consistent with template expecting renderTextWithMath for main question text
  options: [
    "Profit of $1600",
    "Loss of $1600",
    "Profit of $6200",
    "Loss of $4600"
  ],
  optionType: 'text', // Consistent if options are plain text, or 'math' if they contain KaTeX
  correct: 0,
  explanation: "\\text{Total Revenue} = \\$5000 + \\$1200 = \\$6200\\\\ \\text{Total Expenses} = \\$1500 + \\$2000 + \\$300 + \\$800 = \\$4600\\\\ \\text{Profit} = \\$6200 - \\$4600 = \\$1600",
  explanationType: 'math',
  CustomContentComponent: ProfitLossSummary, // Link the custom content component
};

const enterpriseBudgetQuestions: QuizQuestion[] = [sampleProfitLossQuestion];

const EnterpriseBudget: React.FC = () => {
  return (
    <MultipleChoiceInteractiveComponent
      title="Corporate Bills and Enterprise Budgets"
      icon="💰"
      theme={{
        from: "from-blue-600",
        to: "to-purple-700",
        button: "bg-indigo-600",
        buttonHover: "hover:bg-indigo-700",
      }}
      rulesTitle="Key Principles:"
      rules={[
        "Profit = Total Revenue - Total Expenses",
        "Loss occurs when Expenses > Revenue",
        "Always double-check calculations."
      ]}
      questions={enterpriseBudgetQuestions}
      // CustomQuestionComponent prop is removed
    />
  );
};

export default EnterpriseBudget;