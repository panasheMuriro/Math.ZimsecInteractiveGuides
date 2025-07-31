import JointVariation from "./JointVariation";
import DirectVariation from "./DirectVariation";
import InverseVariation from "./InverseVariation";
import PartialVariation from "./PartialVariation";
import VariationComparison from "./VariationComparison";
import VariationGraphs from "./VariationGraphs";
import VariationProblems from "./VariationProblem";

export const topic6Components: Record<string, React.ComponentType> = {
  "direct-variation": DirectVariation,
  "inverse-variation": InverseVariation,
  "partial-variation": PartialVariation,
  "joint-variation": JointVariation,
  "variation-comparison": VariationComparison,
  "variation-graphs": VariationGraphs, // Note: duplicate key, likely needs correction
  "variation-problems": VariationProblems,
};