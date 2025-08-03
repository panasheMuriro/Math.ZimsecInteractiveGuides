import MatrixOrders from "./Topic12.1/MatrixOrders";
import MatrixTypes from "./Topic12.1/MatrixTypes";
import MatrixAddSubtractVisualizer from "./Topic12.2/MatrixAddSubtractVisualizer";
import MatrixMultiplicationVisualizer from "./Topic12.2/MatrixMultiplicationVisualizer";
import ScalarMultiplicationVisualizer from "./Topic12.2/ScalarMultiplicationVisualizer";
import DeterminantCalculator from "./Topic12.3/DeterminantCalculator";
import SingularMatrixChecker from "./Topic12.3/SingularMatrixChecker";
import MatrixInverseCalculator from "./Topic12.4/MatrixInverseCalculator";
import SimultaneousEquationsSolver from "./Topic12.4/SimultaneousEquationsSolver";

export const topic12Components: Record<string, React.ComponentType> = {
  "matrix-order": MatrixOrders,
  "matrix-types": MatrixTypes,
  "matrix-add-subtract": MatrixAddSubtractVisualizer,
  "matrix-scalar-multiplication": ScalarMultiplicationVisualizer,
  "matrix-multiplication": MatrixMultiplicationVisualizer,
  "determinant-calculation": DeterminantCalculator,
  "singular-non-singular": SingularMatrixChecker,
  "matrix-inverse": MatrixInverseCalculator,
  "simultaneous-equations": SimultaneousEquationsSolver,
};