import MatrixOrders from "./Topic12.1/MatrixOrders";
import MatrixTypes from "./Topic12.1/MatrixTypes";
import MatrixAddSubtract from "./Topic12.2/MatrixAddSubtract";
import MatrixMultiplication from "./Topic12.2/MatrixMultiplication";
import MatrixScalarMultiplication from "./Topic12.2/MatrixScalarMultiplication";
import Determinant from "./Topic12.3/Determinant";
import SingularMatrix from "./Topic12.3/SingularMatrix";
import MatrixInverse from "./Topic12.4/MatrixInverse";
import SimultaneousEquations from "./Topic12.4/SimultaneousEquations";

export const topic12Components: Record<string, React.ComponentType> = {
  "matrix-order": MatrixOrders,
  "matrix-types": MatrixTypes,
  "matrix-add-subtract": MatrixAddSubtract,
  "matrix-scalar-multiplication": MatrixScalarMultiplication,
  "matrix-multiplication": MatrixMultiplication,
  "determinant-calculation": Determinant,
  "singular-non-singular": SingularMatrix,
  "matrix-inverse": MatrixInverse,
  "simultaneous-equations": SimultaneousEquations
};