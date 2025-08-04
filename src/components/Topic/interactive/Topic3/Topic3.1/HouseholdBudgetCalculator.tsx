import React, { useState, useEffect } from "react";

const NEUBRUTALISM_COLORS = {
  navy: "#3d348b",
  purple: "#7678ed",
  yellow: "#f7b801",
  orange: "#f18701",
  red: "#f35b04",

  white: "#ffffff",
  lightGray: "#f0f0f0",
  borderGray: "#d0d0d0",
  shadow: "rgba(61, 52, 139, 0.2)",
  buttonDefault: "#e0e0e0",
  buttonHover: "#d0d0d0",
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.navy}`,
  borderRadius: "12px",
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
  padding: "1rem",
};

const HouseholdBudgetCalculator: React.FC = () => {
  const INCOME_DEFAULT = 1000;
  const EXPENSE_CATEGORIES = [
    { id: "transport", name: "Transport", defaultAmount: 260 },
    { id: "gas", name: "Gas", defaultAmount: 350 },
    { id: "food", name: "Food", defaultAmount: 400 },
  ];

  const [income] = useState<number>(INCOME_DEFAULT);
  const [expenses, setExpenses] = useState<Record<string, number>>(
    EXPENSE_CATEGORIES.reduce((acc, cat) => {
      acc[cat.id] = cat.defaultAmount;
      return acc;
    }, {} as Record<string, number>)
  );
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [budgetStatus, setBudgetStatus] = useState<
    "balanced" | "surplus" | "deficit"
  >("balanced");

  useEffect(() => {
    const total = Object.values(expenses).reduce(
      (sum, amount) => sum + amount,
      0
    );
    setTotalExpenses(total);
  }, [expenses]);

  useEffect(() => {
    if (totalExpenses < income) {
      setBudgetStatus("surplus");
    } else if (totalExpenses > income) {
      setBudgetStatus("deficit");
    } else {
      setBudgetStatus("balanced");
    }
  }, [income, totalExpenses]);

  const handleAdjustExpense = (categoryId: string, delta: number) => {
    setExpenses((prev) => {
      const currentAmount = prev[categoryId] || 0;
      const newAmount = Math.max(0, currentAmount + delta);
      return { ...prev, [categoryId]: newAmount };
    });
  };

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: "600px",
        width: "100%",
        margin: "0 auto",
        padding: "1.5rem",

        backgroundColor:
          budgetStatus === "deficit"
            ? NEUBRUTALISM_COLORS.red
            : NEUBRUTALISM_COLORS.navy,
        borderColor: NEUBRUTALISM_COLORS.navy,
        color: NEUBRUTALISM_COLORS.navy,
        borderRadius: "20px",
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.navy}`,
      }}
    >
      {/* Header */}
      <div
        className="text-center text-xl font-extrabold mb-4"
        style={{ color: NEUBRUTALISM_COLORS.white }}
      >
        Budget Calculator
      </div>

      {/* Income Section */}
      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.purple,
          borderColor: NEUBRUTALISM_COLORS.navy,
          marginBottom: "1.5rem",
        }}
      >
        <h3
          className="text-lg font-extrabold mb-2"
          style={{ color: NEUBRUTALISM_COLORS.white }}
        >
          Income
        </h3>
        <div className="flex justify-between items-center">
          <span style={{ color: NEUBRUTALISM_COLORS.white }}>
            Monthly Income
          </span>
          <span
            className="text-2xl font-extrabold"
            style={{ color: NEUBRUTALISM_COLORS.yellow }}
          >
            ${income.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Expenses Section */}

          {/* Summary Section */}
      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.lightGray,
          borderColor: NEUBRUTALISM_COLORS.navy,
        }}
      >
        <div className="flex justify-between items-center mb-2">
          <span
            className="font-bold"
            style={{ color: NEUBRUTALISM_COLORS.navy }}
          >
            Total Expenses
          </span>
          <span
            className="text-lg font-extrabold"
            style={{
              color:
                budgetStatus === "deficit"
                  ? NEUBRUTALISM_COLORS.red
                  : NEUBRUTALISM_COLORS.navy,
            }}
          >
            ${totalExpenses.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span
            className="font-bold"
            style={{ color: NEUBRUTALISM_COLORS.navy }}
          >
            Remaining
          </span>
          <span
            className="text-lg font-extrabold"
            style={{
              color:
                budgetStatus === "surplus"
                  ? NEUBRUTALISM_COLORS.purple
                  : budgetStatus === "deficit"
                  ? NEUBRUTALISM_COLORS.red
                  : NEUBRUTALISM_COLORS.navy,
            }}
          >
            ${(income - totalExpenses).toFixed(2)}
          </span>
        </div>
        {/* Status Message */}
        <div
          style={{
            ...neubrutalismBase,
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor:
              budgetStatus === "surplus"
                ? NEUBRUTALISM_COLORS.purple
                : budgetStatus === "deficit"
                ? NEUBRUTALISM_COLORS.red
                : NEUBRUTALISM_COLORS.yellow,
            borderColor: NEUBRUTALISM_COLORS.navy,
            color: NEUBRUTALISM_COLORS.white,
          }}
        >
          {budgetStatus === "surplus" && "Great! You are under budget."}
          {budgetStatus === "deficit" && "Warning! You are over budget."}
          {budgetStatus === "balanced" && "Your budget is perfectly balanced."}
        </div>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <h3
          className="text-lg font-extrabold my-4"
          style={{ color: NEUBRUTALISM_COLORS.white }}
        >
          Adjust Expenses
        </h3>
        <div className="space-y-4">
          {EXPENSE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              style={{
                ...neubrutalismBase,
                backgroundColor: NEUBRUTALISM_COLORS.lightGray,
                borderColor: NEUBRUTALISM_COLORS.navy,
              }}
            >
              <span
                className="font-bold"
                style={{ color: NEUBRUTALISM_COLORS.navy }}
              >
                {category.name}
              </span>
              <div className="flex items-center space-x-2 ml-auto">
                <button
                  onClick={() => handleAdjustExpense(category.id, -10)}
                  style={{
                    ...neubrutalismBase,
                    width: "32px",
                    height: "32px",
                    fontWeight: "bold",
                    backgroundColor: NEUBRUTALISM_COLORS.buttonDefault,
                    color: NEUBRUTALISM_COLORS.navy,
                    borderColor: NEUBRUTALISM_COLORS.navy,
                    padding: "0",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      NEUBRUTALISM_COLORS.buttonHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      NEUBRUTALISM_COLORS.buttonDefault)
                  }
                  aria-label={`Decrease ${category.name} by $10`}
                >
                  -
                </button>
                <span
                  className="w-16 text-center font-extrabold"
                  style={{ color: NEUBRUTALISM_COLORS.navy }}
                >
                  ${expenses[category.id]?.toFixed(2) ?? "0.00"}
                </span>
                <button
                  onClick={() => handleAdjustExpense(category.id, 10)}
                  style={{
                    ...neubrutalismBase,
                    width: "32px",
                    height: "32px",
                    fontWeight: "bold",
                    backgroundColor: NEUBRUTALISM_COLORS.buttonDefault,
                    color: NEUBRUTALISM_COLORS.navy,
                    borderColor: NEUBRUTALISM_COLORS.navy,
                    padding: "0",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      NEUBRUTALISM_COLORS.buttonHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      NEUBRUTALISM_COLORS.buttonDefault)
                  }
                  aria-label={`Increase ${category.name} by $10`}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

  
    </div>
  );
};

export default HouseholdBudgetCalculator;
