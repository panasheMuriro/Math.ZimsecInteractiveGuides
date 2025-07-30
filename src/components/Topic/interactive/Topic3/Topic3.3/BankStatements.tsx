// BankStatementsInteractiveComponent.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent";
import { InlineMath } from 'react-katex';

const BankStatementQuestionComponent: React.FC<{
  question: QuizQuestion;
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
  feedback: { message: string; isCorrect: boolean; correctAnswerText?: string } | null;
}> = ({ question, selectedAnswer, onAnswerSelect, feedback }) => {

  let parsedData: { 
    statement: { description: string; debit?: number; credit?: number }[]; 
    openingBalance: number;
    query: string;
  } | null = null;
  
  try {
    parsedData = JSON.parse(question.question);
  } catch (e) {
    console.error("Failed to parse question data for Bank Statement component:", e);
    return <div className="text-red-600 text-sm">Error loading question data.</div>;
  }

  if (!parsedData) {
    return <div className="text-red-600 text-sm">Invalid question data format.</div>;
  }

  let runningBalance = parsedData.openingBalance;
  const statementWithBalance = parsedData.statement.map(transaction => {
    if (transaction.credit !== undefined) {
      runningBalance += transaction.credit;
    }
    if (transaction.debit !== undefined) {
      runningBalance -= transaction.debit;
    }
    const roundedBalance = parseFloat(runningBalance.toFixed(2));
    return { ...transaction, balance: roundedBalance };
  });
  const closingBalance = parseFloat(runningBalance.toFixed(2));

  return (
    <div className="space-y-3">
      <div className="text-center py-1 font-semibold text-gray-800 text-sm">
        {parsedData.query}
      </div>

      <div className="bg-white p-2 rounded-lg border border-gray-300 text-xs shadow-sm">
        <h5 className="font-bold text-gray-800 mb-1 text-center">Bank Statement</h5>
        
        <div className="grid grid-cols-[auto_1fr_1fr] gap-x-2 gap-y-1 mb-1 font-semibold border-b border-gray-300 pb-1 text-gray-700">
        </div>
        
        <div className="space-y-1 mb-1">
          <div className="grid grid-cols-[auto_1fr_1fr] gap-x-2">
            <div className="font-medium text-gray-600 whitespace-nowrap">Opening:</div>
            <div className="text-right">-</div>
            <div className="text-right">-</div>
          </div>
          <div className="text-right font-bold text-gray-800 border-b border-gray-200 pb-1">£{parsedData.openingBalance.toFixed(2)}</div>
        </div>
        
        <div className="space-y-1">
          {statementWithBalance.map((txn, index) => (
            <div key={index} className="grid grid-cols-[auto_1fr_1fr] gap-x-2">
              <div className="truncate text-gray-600">{txn.description}</div>
              <div className="text-right text-amber-700 font-medium">{txn.debit !== undefined ? `£${txn.debit.toFixed(2)}` : '-'}</div>
              <div className="text-right text-green-700 font-medium">{txn.credit !== undefined ? `£${txn.credit.toFixed(2)}` : '-'}</div>
            </div>
          ))}
          <div className="grid grid-cols-4 gap-x-2 text-right font-medium text-xs mt-1 pt-1 border-t border-gray-200">
             <div className="col-start-4 text-gray-600">Balance</div>
          </div>
          {statementWithBalance.map((txn, index) => (
             <div key={`bal-${index}`} className="grid grid-cols-4 gap-x-2 text-right text-xs">
                <div className="col-start-4 font-medium">£{txn.balance.toFixed(2)}</div>
             </div>
          ))}
        </div>
        
        <div className="grid grid-cols-[auto_1fr_1fr] gap-x-2 mt-1 pt-1 border-t border-gray-300 font-semibold text-gray-800">
          <div className="font-medium text-gray-600 whitespace-nowrap">Closing:</div>
          <div className="text-right">-</div>
          <div className="text-right">-</div>
        </div>
         <div className="text-right font-bold text-green-700 mt-1">£{closingBalance.toFixed(2)}</div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {question.options.map((option, index) => {
          let buttonClass = "py-3 px-2 rounded-md font-medium transition-all w-full text-left text-sm ";
          
          if (selectedAnswer === index) {
            if (feedback) {
              buttonClass += index === question.correct
                ? 'bg-green-600 text-white'
                : 'bg-red-600 text-white';
            } else {
              buttonClass += 'bg-blue-100 text-blue-800 border border-blue-300';
            }
          } else {
            if (feedback && index === question.correct) {
              buttonClass += 'bg-green-100 text-green-800 border border-green-300';
            } else {
              buttonClass += feedback
                ? 'bg-gray-100 text-gray-500 cursor-default'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200';
            }
          }

          return (
            <button
              key={index}
              onClick={() => !feedback && onAnswerSelect(index)}
              disabled={!!feedback}
              className={buttonClass}
            >
              {question.optionType === "text" ? option : <InlineMath math={option} />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const bankStatementQuestions: QuizQuestion[] = [
  {
    question: JSON.stringify({
      openingBalance: 1000,
      statement: [
        { description: "Salary", credit: 800 },
        { description: "Rent", debit: 300 },
        { description: "Utilities", debit: 150 }
      ],
      query: "What is the closing balance?"
    }),
    options: [
      "£1350",
      "£1450",
      "£1250",
      "£1550"
    ],
    correct: 0,
    explanation: "\\text{Closing Balance} = \\text{Opening Balance} + \\text{Total Credits} - \\text{Total Debits} = \\£1000 + \\£800 - \\£300 - \\£150 = \\£1350.",
    explanationType: 'math',
    optionType: 'text'
  },
  {
    question: JSON.stringify({
      openingBalance: 500,
      statement: [
        { description: "Cash Deposit", credit: 200 },
        { description: "ATM Withdrawal", debit: 100 },
        { description: "Bank Fee", debit: 25 }
      ],
      query: "What type of transaction is 'ATM Withdrawal'?"
    }),
    options: [
      "Credit",
      "Debit",
      "Balance",
      "Transfer"
    ],
    correct: 1,
    explanation: "\\text{An ATM Withdrawal means money is taken out of the account, which is recorded as a } \\textbf{Debit} \\text{ on the bank statement.}",
    explanationType: 'math',
    optionType: 'text'
  }
];

const BankStatements: React.FC = () => {
  return (
    <MultipleChoiceInteractiveComponent
      title="Bank Statements and Financial Records"
      icon="🏦"
      theme={{
        from: "from-blue-600",
        to: "to-cyan-700",
        button: "bg-indigo-600",
        buttonHover: "hover:bg-indigo-700",
      }}
      rules={[
        "New Balance = Previous Balance + Credits - Debits",
        "Credit = Money deposited into the account (\\( + \\))",
        "Debit = Money withdrawn from the account (\\( - \\))"
      ]}
      questions={bankStatementQuestions}
      CustomQuestionComponent={BankStatementQuestionComponent}
    />
  );
};

export default BankStatements;