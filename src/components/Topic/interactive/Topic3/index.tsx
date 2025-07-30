import ConsumerArithmeticQuiz from "./Topic3.1/ConsumerArithmeticQuiz";
import HouseholdBudgetCalculator from "./Topic3.1/HouseholdBudgetCalculator";
import EnterpriseBudget from "./Topic3.1/EnterpriseBudget";
import ProfitLoss from "./Topic3.2/ProfitLoss";
import SimpleInterest from "./Topic3.2/SimpleInterest";
import CompoundInterest from "./Topic3.2/CompoundInterest";
import HirePurchase from "./Topic3.2/HirePurchase";
import Commission from "./Topic3.2/Commission";

export const topic3Components: Record<string, React.ComponentType> = {
  "consumer-arithmetic": ConsumerArithmeticQuiz,
  "household-bills": HouseholdBudgetCalculator,
  "enterprise-budgets": EnterpriseBudget,
  "profit-loss": ProfitLoss,
  "simple-interest": SimpleInterest,
  "compound-interest": CompoundInterest,
  "hire-purchase": HirePurchase,
  "commission": Commission,
};