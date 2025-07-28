import JointVariation from "./ JointVariation";
import DirectVariation from "./DirectVariation";
import InverseVariation from "./InverseVariation";
import PartialVariation from "./PartialVariation";
import VariationComparison from "./VariationComparison";
import VariationProblemQuiz from "./VariationProblemQuiz";

export const topic6Components: Record<string, React.ComponentType> = {
  "direct-variation": DirectVariation,
  "inverse-variation": InverseVariation,
  "partial-variation": PartialVariation,
  "joint-variation": JointVariation,
  "variation-comparison": VariationComparison,
  "variation-graphs": VariationComparison, // Note: duplicate key, likely needs correction
  "variation-problems": VariationProblemQuiz,
};