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
import CompleteSquareA1Tool from "./Topic7.6/CompleteSquareA1Tool";
import CompleteSquareANot1Tool from "./Topic7.6/CompleteSquareANot1Tool";
import SolvingLinearEquationsTool from "./Topic7.7/SolvingLinearEquationsTool";
import SolvingQuadraticEquationsCompletingSquareTool from "./Topic7.7/SolvingQuadraticEquationsCompletingSquareTool";
import SolvingQuadraticEquationsFactoringTool from "./Topic7.7/SolvingQuadraticEquationsFactoringTool";
import SolvingQuadraticEquationsFormulaTool from "./Topic7.7/SolvingQuadraticEquationsFormulaTool";
import SolvingSimultaneousEquationsEliminationTool from "./Topic7.7/SolvingSimultaneousEquationsEliminationTool";
import SolvingSimultaneousEquationsSubstitutionTool from "./Topic7.7/SolvingSimultaneousEquationsSubstitutionTool";
import GraphInequalities from "./Topic7.8/GraphInequalities";
import SolvingLinearInequalitiesTool from "./Topic7.8/SolvingLinearInequalitiesTool";
import SolvingQuadraticInequalitiesTool from "./Topic7.8/SolvingQuadraticInequalitiesTool";
import IntroductionToLogarithmsTool from "./Topic7.9/IntroductionToLogarithmsTool";
import LawsOfIndicesTool from "./Topic7.9/LawsOfIndicesTool";
import SolvingExponentialEquationsTool from "./Topic7.9/SolvingExponentialEquationsTool";
import SolvingLogarithmicEquationsTool from "./Topic7.9/SolvingLogarithmicEquationsTool";

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
  "complete-square-a1": CompleteSquareA1Tool,
  "complete-square-anot1": CompleteSquareANot1Tool,
  "linear-equations": SolvingLinearEquationsTool,
  "simultaneous-equations-elimination": SolvingSimultaneousEquationsEliminationTool,
  "simultaneous-equations-substitution": SolvingSimultaneousEquationsSubstitutionTool,
  "quadratic-equations-factoring": SolvingQuadraticEquationsFactoringTool,
  "quadratic-equations-completing-square": SolvingQuadraticEquationsCompletingSquareTool,
  "quadratic-equations-formula": SolvingQuadraticEquationsFormulaTool,
  "linear-inequalities": SolvingLinearInequalitiesTool,
  "quadratic-inequalities": SolvingQuadraticInequalitiesTool,
  "indices-laws": LawsOfIndicesTool,
  "exponential-equations": SolvingExponentialEquationsTool,
  "logarithms-intro": IntroductionToLogarithmsTool,
  "log-equations": SolvingLogarithmicEquationsTool,
  "graph-inequalities": GraphInequalities,
};