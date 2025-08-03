import ExperimentalProbabilityVisualizer from "./Topic14.1/ExperimentalProbabilityVisualizer";
import ProbabilityProblems1 from "./Topic14.1/ProbabilityProblems1";
import ProbabilityVisualizer from "./Topic14.1/ProbabilityVisualizer";
import SingleEventsVisualizer from "./Topic14.2/SingleEventsVisualizer";
import TheoreticalProbabilityProblems from "./Topic14.2/TheoreticalProbabilityProblems";
import TheoreticalProbabilityVisualizer from "./Topic14.2/TheoreticalProbabilityVisualizer";
import CombinedEventsVisualizer from "./Topic14.3/CombinedEventsVisualizer";
import ProbabilityApplicationsVisualizer from "./Topic14.3/ProbabilityApplicationsVisualizer";
import ProbabilityRulesVisualizer from "./Topic14.3/ProbabilityRulesVisualizer";
import TreeDiagramVisualizer from "./Topic14.3/TreeDiagramVisualizer";

export const topic14Components: Record<string, React.ComponentType> = {
  "probability-definition": ProbabilityVisualizer,
  "experimental-probability": ExperimentalProbabilityVisualizer,
  "probability-problems-1": ProbabilityProblems1,
  "theoretical-probability": TheoreticalProbabilityVisualizer,
  "theoretical-probability-problems": TheoreticalProbabilityProblems,
  "single-events": SingleEventsVisualizer,
  "combined-events-tables": CombinedEventsVisualizer,
  "tree-diagrams": TreeDiagramVisualizer,
  "probability-rules": ProbabilityRulesVisualizer,
  "probability-applications": ProbabilityApplicationsVisualizer,
};