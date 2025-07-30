import CommissionTaxCalculator from "./CommissionTaxCalculator";
import CompoundInterest from "./CompoundInterest";
import ForeignExchange from "./ForeignExchange";
import HirePurchaseCalculator from "./HirePurchaseCalculator";
// import HouseholdBills from "./HouseholdBills";
import ProfitLossCalculator from "./ProfitLossCalculator";
import SimpleInterestCalculator from "./SimpleInterestCalculator";
import ConsumerArithmeticQuiz from "./Topic3.1/ConsumerArithmeticQuiz";
import HouseholdBudgetCalculator from "./Topic3.1/HouseholdBudgetCalculator";
import EnterpriseBudget from "./Topic3.1/EnterpriseBudget";

export const topic3Components: Record<string, React.ComponentType> = {
  "consumer-arithmetic": ConsumerArithmeticQuiz,
  "household-bills": HouseholdBudgetCalculator,
  "enterprise-budgets": EnterpriseBudget,
  "profit-loss": ProfitLossCalculator,
  "simple-interest": SimpleInterestCalculator,
  "compound-interest": CompoundInterest,
  "hire-purchase": HirePurchaseCalculator,
  "commission-tax": CommissionTaxCalculator,
  "foreign-exchange": ForeignExchange,
};