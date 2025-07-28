import ExperimentalProbabilityVisualizer from "./Topic14.1/ExperimentalProbabilityVisualizer";
import ProbabilityVisualizer from "./Topic14.1/ProbabilityVisualizer";
import SingleEventsVisualizer from "./Topic14.2/SingleEventsVisualizer";
import TheoreticalProbabilityVisualizer from "./Topic14.2/TheoreticalProbabilityVisualizer";
import CombinedEventsVisualizer from "./Topic14.3/CombinedEventsVisualizer";
import ProbabilityApplicationsVisualizer from "./Topic14.3/ProbabilityApplicationsVisualizer";
import ProbabilityRulesVisualizer from "./Topic14.3/ProbabilityRulesVisualizer";
import TreeDiagramVisualizer from "./Topic14.3/TreeDiagramVisualizer";

export const topic14Components: Record<string, React.ComponentType> = {
  "probability-definition": ProbabilityVisualizer,
  "experimental-probability": ExperimentalProbabilityVisualizer,
  "theoretical-probability": TheoreticalProbabilityVisualizer,
  "single-events": SingleEventsVisualizer,
  "combined-events-tables": CombinedEventsVisualizer,
  "tree-diagrams": TreeDiagramVisualizer,
  "probability-rules": ProbabilityRulesVisualizer,
  "probability-applications": ProbabilityApplicationsVisualizer,
};