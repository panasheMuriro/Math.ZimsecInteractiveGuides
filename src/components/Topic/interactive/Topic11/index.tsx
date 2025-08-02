import VectorDefinition from "./Topic11.1/VectorDefinition";
import VectorNotation from "./Topic11.1/VectorNotation";
import PositionVectors from "./Topic11.2/PositionVectors";
import VectorTypes from "./Topic11.2/VectorTypes";
import VectorTypesProblems from "./Topic11.2/VectorTypesProblems";
import PlaneShapeVectors from "./Topic11.3/PlaneShapeVectors";
import ScalarMultiplicationMagnitude from "./Topic11.3/ScalarMultiplicationMagnitude";
import VectorAddSubtract from "./Topic11.3/VectorAddSubtract";

export const topic11Components: Record<string, React.ComponentType> = {
  "vector-definition": VectorDefinition,
  "vector-notation": VectorNotation,
  "basic-vector-types": VectorTypes,
  "position-vectors": PositionVectors,
  "vector-types-problems": VectorTypesProblems,
  "vector-add-subtract": VectorAddSubtract,
  "scalar-magnitude": ScalarMultiplicationMagnitude,
  "plane-shape-vectors": PlaneShapeVectors,
};