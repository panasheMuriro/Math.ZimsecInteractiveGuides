import React, { useState, useEffect } from 'react';

const HouseholdBudgetCalculator: React.FC = () => {
  // --- Configuration ---
  const INCOME_DEFAULT = 1000;
  const EXPENSE_CATEGORIES = [
    { id: 'transport', name: 'Transport', defaultAmount: 260 },
    { id: 'electricity', name: 'Electricity', defaultAmount: 200 },
    { id: 'gas', name: 'Gas', defaultAmount: 150 },
    { id: 'food', name: 'Food', defaultAmount: 400 },
  ];

  // --- State ---
  const [income] = useState<number>(INCOME_DEFAULT); // Income is fixed for this example
  const [expenses, setExpenses] = useState<Record<string, number>>(
    EXPENSE_CATEGORIES.reduce((acc, cat) => {
      acc[cat.id] = cat.defaultAmount;
      return acc;
    }, {} as Record<string, number>)
  );
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [budgetStatus, setBudgetStatus] = useState<'balanced' | 'surplus' | 'deficit'>('balanced');

  // --- Effects ---
  // Calculate total expenses whenever individual expenses change
  useEffect(() => {
    const total = Object.values(expenses).reduce((sum, amount) => sum + amount, 0);
    setTotalExpenses(total);
  }, [expenses]);

  // Determine budget status whenever income or total expenses change
  useEffect(() => {
    if (totalExpenses < income) {
      setBudgetStatus('surplus');
    } else if (totalExpenses > income) {
      setBudgetStatus('deficit');
    } else {
      setBudgetStatus('balanced');
    }
  }, [income, totalExpenses]);

  // --- Handlers ---
  const handleAdjustExpense = (categoryId: string, delta: number) => {
    setExpenses(prev => {
      const currentAmount = prev[categoryId] || 0;
      const newAmount = Math.max(0, currentAmount + delta); // Prevent negative expenses
      return { ...prev, [categoryId]: newAmount };
    });
  };
  return (
    // 57564F
    // --- Darker Background Gradient ---
    <div className={`bg-gradient-to-br from-gray-900 ${budgetStatus === 'deficit'? "to-red-900": "to-green-900" } rounded-2xl p-6 max-w-md mx-auto shadow-lg`}>
  
  <div className='text-center text-xl text-white my-4 '>Budget Calculator</div>
      {/* Income Section */}
      <div className="mb-6 p-4 bg-gradient-to-r from-green-700/30 to-emerald-800/30 rounded-xl border border-green-600/50 shadow-sm">
        <h3 className="text-lg font-semibold text-green-100 mb-2">Income</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Monthly Income</span>
          {/* --- Lighter text color for value --- */}
          <span className="text-2xl font-bold text-green-300">${income.toFixed(2)}</span>
        </div>
      </div>

      {/* Expenses Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Expenses</h3>
        <div className="space-y-4">
          {EXPENSE_CATEGORIES.map(category => (
            <div key={category.id} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-xl border border-gray-600/50 shadow-sm">
              {/* --- Lighter text color --- */}
              <span className="text-gray-200">{category.name}</span>
              <div className="flex items-center space-x-2">
                {/* --- Updated Button Colors --- */}
                <button
                  onClick={() => handleAdjustExpense(category.id, -10)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 text-gray-200 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors"
                  aria-label={`Decrease ${category.name} by $10`}
                >
                  -
                </button>
                {/* --- Lighter text color for amount --- */}
                <span className="w-16 text-center font-medium text-gray-100">
                  ${expenses[category.id]?.toFixed(2) ?? '0.00'}
                </span>
                {/* --- Updated Button Colors --- */}
                <button
                  onClick={() => handleAdjustExpense(category.id, 10)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 text-gray-200 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors"
                  aria-label={`Increase ${category.name} by $10`}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <div className="p-4 rounded-xl border shadow-sm bg-gradient-to-r from-gray-700/40 to-gray-800/40 border-gray-600/50">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-300">Total Expenses</span>
          {/* --- Conditional text color based on status --- */}
          <span className={`text-lg font-semibold ${budgetStatus === 'deficit' ? 'text-red-400' : 'text-gray-200'}`}>
            ${totalExpenses.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Remaining</span>
          {/* --- Conditional text color based on status --- */}
          <span className={`text-lg font-semibold ${
            budgetStatus === 'surplus' ? 'text-green-400' :
            budgetStatus === 'deficit' ? 'text-red-400' :
            'text-gray-200'
          }`}>
            ${(income - totalExpenses).toFixed(2)}
          </span>
        </div>
        {/* --- Updated Status Message Colors --- */}
        <div className={`mt-3 p-3 rounded-lg text-center font-medium ${
          budgetStatus === 'surplus' ? 'bg-green-900/30 text-green-300 border border-green-800/50' :
          budgetStatus === 'deficit' ? 'bg-red-900/30 text-red-300 border border-red-800/50' :
          'bg-blue-900/30 text-blue-300 border border-blue-800/50'
        }`}>
          {budgetStatus === 'surplus' && 'Great! You are under budget.'}
          {budgetStatus === 'deficit' && 'Warning! You are over budget.'}
          {budgetStatus === 'balanced' && 'Your budget is perfectly balanced.'}
        </div>
      </div>
    </div>
  );
};

export default HouseholdBudgetCalculator;