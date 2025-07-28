import AddingSubtractingLikeTermsTool from "./Topic7.1/AddingSubtractingLikeTermsTool";
import DividingAlgebraicTermsTool from "./Topic7.1/DividingAlgebraicTermsTool";
import LikeTermsInteractive from "./Topic7.1/LikeTermsInteractive";
import MultiplyingAlgebraicTermsTool from "./Topic7.1/MultiplyingAlgebraicTermsTool";
import SubstitutionInExpressionsTool from "./Topic7.1/SubstitutionInExpressionsTool";
import UnderstandingHCFTool from "./Topic7.2/UnderstandingHCFTool";
import UnderstandingLCMTool from "./Topic7.2/UnderstandingLCMTool";
import CommonFactorMethodTool from "./Topic7.3/CommonFactorMethodTool";
import DifferenceOfTwoSquaresTool from "./Topic7.3/DifferenceOfTwoSquaresTool";
import PerfectSquareTrinomialsTool from "./Topic7.3/PerfectSquareTrinomialsTool";
import QuadraticFactoringA1Tool from "./Topic7.3/QuadraticFactoringA1Tool";
import QuadraticFactoringANot1Tool from "./Topic7.3/QuadraticFactoringANot1Tool";
import ExpandingSingleBracketsTool from "./Topic7.4/ExpandingSingleBracketsTool";
import ExpandingTwoBracketsFOILTool from "./Topic7.4/ExpandingTwoBracketsFOILTool";
import SpecialProductsTool from "./Topic7.4/SpecialProductsTool";
import AddSubtractFractionsTool from "./Topic7.5/AddSubtractFractionsTool";
import MultiplyDivideFractionsTool from "./Topic7.5/MultiplyDivideFractionsTool";
import SimplifyingFractionsTool from "./Topic7.5/SimplifyingFractionsTool";
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
  "like-terms": LikeTermsInteractive,
  "add-subtract-terms": AddingSubtractingLikeTermsTool,
  "multiply-terms": MultiplyingAlgebraicTermsTool,
  "divide-terms": DividingAlgebraicTermsTool,
  "substitution": SubstitutionInExpressionsTool,
  'hcf': UnderstandingHCFTool,
  "lcm": UnderstandingLCMTool,
  "common-factor": CommonFactorMethodTool,
  "difference-squares": DifferenceOfTwoSquaresTool,
  "quadratic-a1": QuadraticFactoringA1Tool,
  "quadratic-anot1": QuadraticFactoringANot1Tool,
  "perfect-square": PerfectSquareTrinomialsTool,
  "single-brackets": ExpandingSingleBracketsTool,
  "foil-method": ExpandingTwoBracketsFOILTool,
  "special-products": SpecialProductsTool,
  "simplify-fractions": SimplifyingFractionsTool,
  "add-subtract-fractions": AddSubtractFractionsTool,
  "multiply-divide-fractions": MultiplyDivideFractionsTool,
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