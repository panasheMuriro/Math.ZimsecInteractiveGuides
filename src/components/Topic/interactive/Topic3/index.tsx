import CommissionTaxCalculator from "./CommissionTaxCalculator";
import CompoundInterest from "./CompoundInterest";
import ConsumerArithmeticCalculator from "./ConsumerArithmeticCalculator";
import ForeignExchange from "./ForeignExchange";
import HirePurchaseCalculator from "./HirePurchaseCalculator";
import HouseholdBills from "./HouseholdBills";
import ProfitLossCalculator from "./ProfitLossCalculator";
import SimpleInterestCalculator from "./SimpleInterestCalculator";

export const topic3Components: Record<string, React.ComponentType> = {
  "consumer-arithmetic": ConsumerArithmeticCalculator,
  "household-bills": HouseholdBills,
  "profit-loss": ProfitLossCalculator,
  "simple-interest": SimpleInterestCalculator,
  "compound-interest": CompoundInterest,
  "hire-purchase": HirePurchaseCalculator,
  "commission-tax": CommissionTaxCalculator,
  "foreign-exchange": ForeignExchange,
};