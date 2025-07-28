import ScaleCalculator from "../ScaleCalculator";
import CubesCubeRootsQuiz from "./Topic1.1/CubesCubeRootsQuiz";
import DirectedNumbersQuiz from "./Topic1.1/DirectedNumbersQuiz";
import FactorsHCF from "./Topic1.1/FactorsHCF";
import { FractionsPercentagesQuiz } from "./Topic1.1/FractionsPercentagesQuiz";
import MultiplesLCM from "./Topic1.1/MultiplesLCM";
import NumberPatternsQuiz from "./Topic1.1/NumberPatternsQuiz";
import NumberTypesQuiz from "./Topic1.1/NumberTypesQuiz";
import OrderOfOperationsQuiz from "./Topic1.1/OrderOfOperationsQuiz";
import SquaresSquareRootsQuiz from "./Topic1.1/SquaresSquareRootsQuiz";
import DecimalPlacesGame from "./Topic1.2/DecimalPlacesGame";
import EstimationGame from "./Topic1.2/EstimationGame";
import LimitsOfAccuracyGame from "./Topic1.2/LimitsOfAccuracyGame";
import RoundingGame from "./Topic1.2/RoundingGame";
import ProportionSolver from "./Topic1.3/ProportionSolver";
import RateCalculator from "./Topic1.3/RateCalculator";
import RatioSimplifier from "./Topic1.3/RatioSimplifier";
import LargeNumbers from "./Topic1.4/LargeNumbers";
import SmallNumbers from "./Topic1.4/SmallNumbers";
import StandardFormConverter from "./Topic1.4/StandardFormConverter";
import Base10Explorer from "./Topic1.5/Base10Explorer";
import BaseConverter from "./Topic1.5/BaseConverter";
import BinaryExplorer from "./Topic1.5/BinaryExplorer";


export const topic1Components: Record<string, React.ComponentType> = {
  "rounding-game": RoundingGame,
  "standard-form-converter": StandardFormConverter,
  "scale-calculator": ScaleCalculator,
"number-types": NumberTypesQuiz,
"factors-hcf":FactorsHCF,
"multiples-lcm": MultiplesLCM,
"directed-numbers":DirectedNumbersQuiz,
"fractions-percentages": FractionsPercentagesQuiz,
"squares-square-roots":SquaresSquareRootsQuiz,
"cubes-cube-roots":CubesCubeRootsQuiz,
"order-operations": OrderOfOperationsQuiz,
"number-patterns": NumberPatternsQuiz,


  "decimal-places": DecimalPlacesGame,
  "estimation-game": EstimationGame,
  "limits-accuracy": LimitsOfAccuracyGame,
  "large-numbers": LargeNumbers,
  "small-numbers": SmallNumbers,
  "ratio-simplifier": RatioSimplifier,
  "rate-calculator": RateCalculator,
  "proportion-solver": ProportionSolver,
  "base-10": Base10Explorer,
  "base-2": BinaryExplorer,
  "base-converter": BaseConverter,
};
