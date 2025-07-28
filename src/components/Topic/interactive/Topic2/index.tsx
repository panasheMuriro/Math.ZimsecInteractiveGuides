import SetBasics from "./SetBasics";
import SetBuilder from "./SetBuilder";
import SetTypes from "./SetTypes";
import VennThreeSets from "./VennThreeSets";
import VennTwoSets from "./VennTwoSets";

export const topic2Components: Record<string, React.ComponentType> = {
  "set-basics": SetBasics,
  "set-types": SetTypes,
  "venn-two-sets": VennTwoSets,
  "venn-three-sets": VennThreeSets,
  "set-builder": SetBuilder,
};