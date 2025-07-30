import SetBasics from "./Topic2.1/SetBasics";
import SetTypes from "./Topic2.1/SetTypes";
import VennTwoSets from "./Topic2.2/VennTwoSets";
import SetOperations from "./Topic2.1/SetOperations";
import SetBuilderNotation from "./Topic2.1/SetBuilderNotation";
import InteractiveVennDiagram from "./Topic2.2/VennIntro";
import ThreeSetVennDiagram from "./Topic2.2/ThreeSetVennDiagram";
import ThreeSetVennQuiz from "./Topic2.2/ThreeSetVennQuiz";
import WordTranslationQuiz from "./Topic2.3/WordTranslationQuiz";
import RealLifeApplications from "./Topic2.3/RealLifeApplications";

export const topic2Components: Record<string, React.ComponentType> = {
  "set-basics": SetBasics,
  "set-types": SetTypes,
  "venn-two-sets": VennTwoSets,
  "venn-three-sets": ThreeSetVennDiagram,
  // "set-builder": SetBuilder,
  "set-operations": SetOperations,
  "set-builder": SetBuilderNotation,
  "venn-intro": InteractiveVennDiagram,
  "venn-problem-solving": ThreeSetVennQuiz,
  "word-translation": WordTranslationQuiz,
  "real-applications": RealLifeApplications
};