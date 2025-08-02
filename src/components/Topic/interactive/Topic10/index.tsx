import PythagorasTheorem from "./Topic10.1/PythagorasTheorem";
import PythagoreanTriples from "./Topic10.1/PythagoreanTriples";
import AcuteAngleRatios from "./Topic10.2/AcuteAngleRatios";
import ObtuseAngleRatios from "./Topic10.2/ObtuseAngleRatios";
import CosineRule from "./Topic10.3/CosineRule";
import SineRuleVisualizer from "./Topic10.3/SineRule";
import ThreeDTrigProblems from "./Topic10.3/ThreeDTrigProblems";
import TriangleArea from "./Topic10.3/TriangleArea";

export const topic10Components: Record<string, React.ComponentType> = {
  "pythagoras-theorem": PythagorasTheorem,
  "pythagorean-triples": PythagoreanTriples,
  "acute-angle-ratios": AcuteAngleRatios,
"obtuse-angle-ratios": ObtuseAngleRatios,
  "sine-rule": SineRuleVisualizer,
  "cosine-rule": CosineRule,
  "triangle-area": TriangleArea,
  "3d-trig-problems": ThreeDTrigProblems
}
