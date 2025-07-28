import CartesianPlane from "./Topic5.1/CartesianPlane";
import CubicFunctions from "./Topic5.1/CubicFunctions";
import InverseFunctions from "./Topic5.1/InverseFunctions";
import LinearGraphInteractive from "./Topic5.1/LinearGraphs";
import QuadraticGraphs from "./Topic5.1/QuadraticGraphs";
import DisplacementTimeQuiz from "./Topic5.2/Practice/Displacement";
import DistanceTime from "./Topic5.2/Practice/DistanceTime";
import VelocityTime from "./Topic5.2/Practice/VelocityTime";

export const topic5Components: Record<string, React.ComponentType> = {
  "cartesian-plane": CartesianPlane,
  "linear-graphs": LinearGraphInteractive,
  "quadratic-graphs": QuadraticGraphs,
  "cubic-functions": CubicFunctions,
  "inverse-functions": InverseFunctions,
  "distance-time": DistanceTime,
  "velocity-time": VelocityTime,
  "displacement-time": DisplacementTimeQuiz,
};
