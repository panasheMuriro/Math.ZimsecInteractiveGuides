import AddingSubtractingLikeTerms from "./Topic7.1/AddingSubtractingLikeTerms";
import DividingAlgebraicTerms from "./Topic7.1/DividingAlgebraicTerms";
import LikeTerms from "./Topic7.1/LikeTerms";
import MultiplyingAlgebraicTerms from "./Topic7.1/MultiplyingAlgebraicTerms";
import SubstitutionInExpressions from "./Topic7.1/SubstitutionInExpressions";
import UnderstandingHCF from "./Topic7.2/UnderstandingHCF";
import UnderstandingLCM from "./Topic7.2/UnderstandingLCM";
import CommonFactorMethod from "./Topic7.3/CommonFactorMethod";
import DifferenceOfTwoSquares from "./Topic7.3/DifferenceOfTwoSquares";
import PerfectSquareTrinomials from "./Topic7.3/PerfectSquareTrinomials";
import QuadraticFactoringA1 from "./Topic7.3/QuadraticFactoringA1";
import QuadraticFactoringANot1 from "./Topic7.3/QuadraticFactoringANot1";
import ExpandingSingleBrackets from "./Topic7.4/ExpandingSingleBrackets";
import ExpandingTwoBracketsFOIL from "./Topic7.4/ExpandingTwoBracketsFOIL";
import SpecialProducts from "./Topic7.4/SpecialProducts";
import AddingSubtractingFractions from "./Topic7.5/AddSubtractFractions";
import MultiplyingDividingFractions from "./Topic7.5/MultiplyingDividingFractions";
import SimplifyingBasicFractions from "./Topic7.5/SimplifyingBasicFractions";
import GraphInequalities from "./Topic7.8/GraphInequalities";
import CompletingSquareA1 from "./Topic7.6/CompletingSquareA1";
import CompletingTheSquareANot1 from "./Topic7.6/CompletingTheSquareANot1";
import SolvingLinearEquations from "./Topic7.7/SolvingLinearEquationsTool";
import SolvingSimultaneousEquationsElimination from "./Topic7.7/SolvingSimultaneousEquationsElimination";
import SolvingSimultaneousEquationsSubstitution from "./Topic7.7/SolvingSimultaneousEquationsSubstitution";
import SolvingQuadraticEquationsFactoring from "./Topic7.7/SolvingQuadraticEquationsFactoring";
import SolvingQuadraticEquationsCompletingSquare from "./Topic7.7/SolvingQuadraticEquationsCompletingSquare";
import SolvingQuadraticEquationsFormula from "./Topic7.7/SolvingQuadraticEquationsFormula";
import SolvingLinearInequalities from "./Topic7.8/SolvingLinearInequalities";
import SolvingQuadraticInequalities from "./Topic7.8/SolvingQuadraticInequalities";
import LawsOfIndices from "./Topic7.9/LawsOfIndices";
import SolvingExponentialEquations from "./Topic7.9/SolvingExponentialEquations";
import IntroductionToLogarithms from "./Topic7.9/IntroductionToLogarithms";
import SolvingLogarithmicEquations from "./Topic7.9/SolvingLogarithmicEquations";

export const topic7Components: Record<string, React.ComponentType> = {
  "like-terms": LikeTerms,
  "add-subtract-terms": AddingSubtractingLikeTerms,
  "multiply-terms": MultiplyingAlgebraicTerms,
  "divide-terms": DividingAlgebraicTerms,
  "substitution": SubstitutionInExpressions,
  'hcf': UnderstandingHCF,
  "lcm": UnderstandingLCM,
  "common-factor": CommonFactorMethod,
  "difference-squares": DifferenceOfTwoSquares,
  "quadratic-a1": QuadraticFactoringA1,
  "quadratic-anot1": QuadraticFactoringANot1,
  "perfect-square": PerfectSquareTrinomials,
  "single-brackets": ExpandingSingleBrackets,
  "foil-method": ExpandingTwoBracketsFOIL,
  "special-products": SpecialProducts,
  "simplify-fractions": SimplifyingBasicFractions,
  "add-subtract-fractions": AddingSubtractingFractions,
  "multiply-divide-fractions": MultiplyingDividingFractions,
  "complete-square-a1": CompletingSquareA1,
  "complete-square-anot1": CompletingTheSquareANot1,
  "linear-equations": SolvingLinearEquations,
  "simultaneous-equations-elimination": SolvingSimultaneousEquationsElimination,
  "simultaneous-equations-substitution": SolvingSimultaneousEquationsSubstitution,
  "quadratic-equations-factoring": SolvingQuadraticEquationsFactoring,
  "quadratic-equations-completing-square": SolvingQuadraticEquationsCompletingSquare,
  "quadratic-equations-formula": SolvingQuadraticEquationsFormula,
  "linear-inequalities": SolvingLinearInequalities,
  "quadratic-inequalities": SolvingQuadraticInequalities,
  "indices-laws": LawsOfIndices,
  "exponential-equations": SolvingExponentialEquations,
  "logarithms-intro": IntroductionToLogarithms,
  "log-equations": SolvingLogarithmicEquations,
  "graph-inequalities": GraphInequalities,
};