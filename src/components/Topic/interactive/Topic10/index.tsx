import PythagorasTheorem from "./Topic10.1/PythagorasTheorem";
import PythagoreanTriples from "./Topic10.1/PythagoreanTriples";
import AcuteAngleRatios from "./Topic10.2/AcuteAngleRatios";
import ObtuseAngleRatios from "./Topic10.2/ObtuseAngleRatios";
import CosineRuleVisualizer from "./Topic10.3/CosineRule";
import SineRuleVisualizer from "./Topic10.3/SineRule";
import ThreeDTrigVisualizer from "./Topic10.3/ThreeDTrigVisualizer";
import TriangleAreaVisualizer from "./Topic10.3/TriangleAreaVisualizer";

export const topic10Components: Record<string, React.ComponentType> = {
  "pythagoras-theorem": PythagorasTheorem,
  "pythagorean-triples": PythagoreanTriples,
  "acute-angle-ratios": AcuteAngleRatios,
"obtuse-angle-ratios": ObtuseAngleRatios,
  "sine-rule": SineRuleVisualizer,
  "cosine-rule": CosineRuleVisualizer,
  "triangle-area": TriangleAreaVisualizer,
  "3d-trig-problems": ThreeDTrigVisualizer,
};
