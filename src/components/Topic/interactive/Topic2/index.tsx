import SetBasics from "./Topic2.1/SetBasics";
import SetTypes from "./Topic2.1/SetTypes";
import VennThreeSets from "./VennThreeSets";
import VennTwoSets from "./VennTwoSets";
import SetOperations from "./Topic2.1/SetOperations";
import SetBuilderNotation from "./Topic2.1/SetBuilderNotation";
import InteractiveVennDiagram from "./Topic2.2/VennIntro";

export const topic2Components: Record<string, React.ComponentType> = {
  "set-basics": SetBasics,
  "set-types": SetTypes,
  "venn-two-sets": VennTwoSets,
  "venn-three-sets": VennThreeSets,
  // "set-builder": SetBuilder,
  "set-operations": SetOperations,
  "set-builder": SetBuilderNotation,
  "venn-intro": InteractiveVennDiagram,
};