import MatrixOrders from "./Topic12.1/MatrixOrders";
import MatrixTypes from "./Topic12.1/MatrixTypes";
import MatrixAddSubtract from "./Topic12.2/MatrixAddSubtract";
import MatrixMultiplication from "./Topic12.2/MatrixMultiplication";
import MatrixScalarMultiplication from "./Topic12.2/MatrixScalarMultiplication";
import Determinant from "./Topic12.3/Determinant";
import SingularMatrix from "./Topic12.3/SingularMatrix";
import MatrixInverseCalculator from "./Topic12.4/MatrixInverseCalculator";
import SimultaneousEquationsSolver from "./Topic12.4/SimultaneousEquationsSolver";

export const topic12Components: Record<string, React.ComponentType> = {
  "matrix-order": MatrixOrders,
  "matrix-types": MatrixTypes,
  "matrix-add-subtract": MatrixAddSubtract,
  "matrix-scalar-multiplication": MatrixScalarMultiplication,
  "matrix-multiplication": MatrixMultiplication,
  "determinant-calculation": Determinant,
  "singular-non-singular": SingularMatrix,
  "matrix-inverse": MatrixInverseCalculator,
  "simultaneous-equations": SimultaneousEquationsSolver,
};