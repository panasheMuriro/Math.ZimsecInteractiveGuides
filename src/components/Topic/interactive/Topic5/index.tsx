// import CartesianPlane from "./Topic5.1/CartesianPlane";
import InteractivePointPlot from "./Topic5.1/InteractivePointPlot";
import InverseFunctions from "./Topic5.1/InverseFunctions";
import LinearGraphs from "./Topic5.1/LinearGraphs";
import OtherGraphs from "./Topic5.1/OtherGraphs";
import QuadraticQuiz from "./Topic5.1/QuadraticQuiz";
import DisplacementTime from "./Topic5.2/Practice/DisplacementTime";
import DistanceTime from "./Topic5.2/Practice/DistanceTime";
import VelocityTime from "./Topic5.2/Practice/VelocityTime";

export const topic5Components: Record<string, React.ComponentType> = {
  "cartesian-plane": InteractivePointPlot,
  "linear-graphs": LinearGraphs,
  "quadratic-graphs": QuadraticQuiz,
  "cubic-functions":OtherGraphs,
  "inverse-functions": InverseFunctions,
  "distance-time": DistanceTime,
  "velocity-time": VelocityTime,
  "displacement-time": DisplacementTime,
};
